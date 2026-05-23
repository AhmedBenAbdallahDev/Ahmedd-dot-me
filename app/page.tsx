import { SpecialText } from "@/components/ui/special-text";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black p-4 text-white">
      <SpecialText speed={18} delay={0} once className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        work in progress portfolio for ahmed*
      </SpecialText>
    </div>
  );
}
