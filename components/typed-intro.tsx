"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

import { profile } from "@/content/resume";
import type { ClassNameProps } from "@/lib/react-types";
import { cn } from "@/lib/tailwind-utils";

const COMMAND = "whoami";
/** Seconds per command character. */
const COMMAND_CHAR_S = 0.04;
/** Output characters typed per second. */
const OUTPUT_CHARS_PER_S = 100;
/** Seconds between the command finishing and the output starting. */
const PAUSE_S = 0.4;

type Phase = "command" | "output" | "done";

/** Text that grows with a character count, rendered without re-renders. */
function useTypedText(text: string, count: MotionValue<number>) {
  return useTransform(count, (n) => text.slice(0, Math.floor(n)));
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

type LinesProps = ClassNameProps & {
  command: ReactNode;
  /** Omit to hide the output line. */
  output?: ReactNode;
  cursor: "command" | "output";
  blink: boolean;
};

function Lines({ command, output, cursor, blink, className }: LinesProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="font-mono text-[13px] leading-[1.4] text-muted-foreground">
        <span className="text-accent">$</span> {command}
        {cursor === "command" && <Cursor blink={blink} />}
      </div>
      {output !== undefined && (
        <div className="font-sans text-[17px] leading-[1.6] text-foreground">
          {output}
          {cursor === "output" && <Cursor blink={blink} />}
        </div>
      )}
    </div>
  );
}

type TypedIntroProps = ClassNameProps;

/** Terminal-style intro that types `$ whoami` followed by the bio. */
export function TypedIntro({ className }: TypedIntroProps) {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("command");
  const commandChars = useMotionValue(0);
  const outputChars = useMotionValue(0);
  const command = useTypedText(COMMAND, commandChars);
  const output = useTypedText(profile.bio, outputChars);

  useEffect(() => {
    // Linear tweens on rAF: a character appears the frame it's due, so typing
    // stays even instead of jumping in fixed chunks on a timer. Reduced motion
    // runs the same sequence instantly, so server and client markup match.
    const speed = reducedMotion ? 0 : 1;
    let cancelled = false;
    let pause: ReturnType<typeof setTimeout> | undefined;
    let outputAnimation: ReturnType<typeof animate> | undefined;
    const commandAnimation = animate(commandChars, COMMAND.length, {
      duration: COMMAND.length * COMMAND_CHAR_S * speed,
      ease: "linear",
    });
    commandAnimation.then(() => {
      if (cancelled) return;
      pause = setTimeout(
        () => {
          setPhase("output");
          outputAnimation = animate(outputChars, profile.bio.length, {
            duration: (profile.bio.length / OUTPUT_CHARS_PER_S) * speed,
            ease: "linear",
          });
          outputAnimation.then(() => {
            if (!cancelled) setPhase("done");
          });
        },
        PAUSE_S * 1000 * speed,
      );
    });
    return () => {
      cancelled = true;
      commandAnimation.stop();
      clearTimeout(pause);
      outputAnimation?.stop();
    };
  }, [reducedMotion, commandChars, outputChars]);

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
      {/* The invisible finished copy reserves the final height so the text
          below doesn't shift while the intro types. */}
      <div aria-hidden="true" className="grid">
        <Lines
          className="invisible [grid-area:1/1]"
          command={COMMAND}
          output={profile.bio}
          cursor="output"
          blink={false}
        />
        <Lines
          className="[grid-area:1/1]"
          command={<motion.span>{command}</motion.span>}
          output={
            phase === "command" ? undefined : (
              <motion.span>{output}</motion.span>
            )
          }
          cursor={phase === "command" ? "command" : "output"}
          blink={phase === "done"}
        />
      </div>
    </div>
  );
}
