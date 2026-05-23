import { SpecialText } from "@/components/ui/special-text";

export default function Home() {
  return (
    <main className="flex h-[100dvh] w-full items-center justify-center bg-black p-4">
      <SpecialText speed={18} delay={0} once className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white">
        work in progress portfolio for ahmed*
      </SpecialText>
    </main>
  );
}
