import { ButtonShootingStarBorder } from "@/components/button-star-border";

export function Hero() {
  return (
    <div className="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center">
      <div className="absolute -top-4 -z-10 flex w-full justify-center">
        <div className="h-[600px] w-[600px] max-w-full animate-pulse-slow rounded-full bg-primary opacity-20 blur-[100px]" />
      </div>
      <div>
        <h1 className="bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-3xl text-transparent md:text-5xl">
          Automatize o seu negócio conosco, usando IA
        </h1>
        <h2 className="my-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-3xl text-transparent md:text-3xl">
          para Whatsapp e Instagram
        </h2>
        <div className="flex items-center justify-center py-24">
          <ButtonShootingStarBorder />
        </div>
      </div>
    </div>
  );
}
