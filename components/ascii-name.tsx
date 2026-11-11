import type { ClassNameProps } from "@/lib/types";
import { cn } from "@/lib/tailwind-utils";

// "Brandon Egger" rendered in the figlet "Small Slant" style
const ASCII_NAME = [
  "   ___                   __",
  "  / _ )_______ ____  ___/ /__  ___",
  " / _  / __/ _ `/ _ \\/ _  / _ \\/ _ \\",
  "/____/_/  \\_,_/_//_/\\_,_/\\___/_//_/",
  "   ____",
  "  / __/__ ____ ____ ____",
  " / _// _ `/ _ `/ -_) __/",
  "/___/\\_, /\\_, /\\__/_/",
  "    /___//___/",
].join("\n");

type AsciiNameProps = ClassNameProps;

export function AsciiName({ className }: AsciiNameProps) {
  return (
    <pre
      role="img"
      aria-label="Brandon Egger"
      className={cn(
        "m-0 overflow-hidden font-ascii text-[12px] leading-[1.12] font-normal text-accent sm:text-[15px]",
        className,
      )}
    >
      {ASCII_NAME}
    </pre>
  );
}
