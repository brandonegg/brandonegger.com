import { AsciiName } from "@/components/ascii-name";

export default function Home() {
  return (
    <main className="mx-auto box-border flex w-full max-w-[880px] flex-1 flex-col px-4 pt-14 pb-18 sm:px-[clamp(24px,5vw,56px)] sm:pt-24 sm:pb-30">
      <AsciiName />
    </main>
  );
}
