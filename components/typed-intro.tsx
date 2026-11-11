"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { profile } from "@/content/resume";
import type { ClassNameProps } from "@/lib/react-types";
import { cn } from "@/lib/tailwind-utils";

const COMMAND = "whoami";
const TICK_MS = 40;
/** Output characters typed per tick (the command types one per tick). */
const OUTPUT_RATE = 4;
/** Ticks to wait after the command before the output starts. */
const PAUSE_TICKS = 10;

const COMMAND_TICKS = COMMAND.length + PAUSE_TICKS;
const TOTAL_TICKS = COMMAND_TICKS + Math.ceil(profile.bio.length / OUTPUT_RATE);

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** True when the user prefers reduced motion. Always false on the server. */
function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

type Frame = {
  command: string;
  output: string;
  cursor: "command" | "output" | null;
  done: boolean;
};

function frameAt(tick: number): Frame {
  const outputTicks = tick - COMMAND_TICKS;
  return {
    command: COMMAND.slice(0, tick),
    output:
      outputTicks > 0 ? profile.bio.slice(0, outputTicks * OUTPUT_RATE) : "",
    cursor: tick <= 0 ? null : tick <= COMMAND_TICKS ? "command" : "output",
    done: tick >= TOTAL_TICKS,
  };
}

function Cursor({ blink }: { blink: boolean }) {
  return (
    <span
      className={cn(
        "ml-0.5 inline-block h-[1.05em] w-[0.55em] bg-accent align-[-0.18em]",
        blink && "animate-blink motion-reduce:animate-none",
      )}
    />
  );
}

function Lines({ frame, className }: { frame: Frame } & ClassNameProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {frame.cursor && (
        <div className="font-mono text-[13px] leading-[1.4] text-muted-foreground">
          <span className="text-accent">$</span> {frame.command}
          {frame.cursor === "command" && <Cursor blink={frame.done} />}
        </div>
      )}
      {frame.output && (
        <div className="font-sans text-[17px] leading-[1.6] text-foreground">
          {frame.output}
          {frame.cursor === "output" && <Cursor blink={frame.done} />}
        </div>
      )}
    </div>
  );
}

const FINAL_FRAME = frameAt(TOTAL_TICKS);

type TypedIntroProps = ClassNameProps;

/** Terminal-style intro that types `$ whoami` followed by the bio. */
export function TypedIntro({ className }: TypedIntroProps) {
  const reducedMotion = useReducedMotion();
  const [tick, setTick] = useState(0);
  const frame = reducedMotion ? FINAL_FRAME : frameAt(tick);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setTick((t) => {
        if (t + 1 >= TOTAL_TICKS) clearInterval(timer);
        return Math.min(t + 1, TOTAL_TICKS);
      });
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div
      className={cn(
        "flex min-h-[120px] max-w-[62ch] flex-col gap-5",
        className,
      )}
    >
      <div className="sr-only">
        <p>$ {COMMAND}</p>
        <p>{profile.bio}</p>
      </div>
      {/* The invisible final frame reserves the finished height so the text
          below doesn't shift while the intro types. */}
      <div aria-hidden="true" className="grid">
        <Lines frame={FINAL_FRAME} className="invisible [grid-area:1/1]" />
        <Lines frame={frame} className="[grid-area:1/1]" />
      </div>
    </div>
  );
}
