// "Brandon Egger" rendered in the figlet "Small Slant" style, from the
// homepage design (Revision 2). Kept as an array of lines so the backticks
// and backslashes in the art don't need template-literal escaping.
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

type AsciiNameProps = {
  className?: string;
};

export function AsciiName({ className = "" }: AsciiNameProps) {
  return (
    <pre
      role="img"
      aria-label="Brandon Egger"
      className={`m-0 overflow-hidden font-ascii text-[12px] leading-[1.12] font-normal text-accent sm:text-[15px] ${className}`}
    >
      {ASCII_NAME}
    </pre>
  );
}
