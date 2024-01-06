import { ButtonShootingStarBorder } from "@/components/button-star-border";
import { TextGenerateEffect } from "@/components/home/text-generate";

export function Hero() {
  const words =
    "Descubra a praticidade dos agendamentos automatizados via Whatsapp e mergulhe na experiência de explorar serviços, tudo enquanto compreende o poder da comunicação eficaz em nossas vidas.";

  return (
    <div className="relative z-999 mx-auto max-w-3xl pb-24 pt-2 text-center">
      <h1 className="bg-gradient-to-t from-[#000000] to-[#000000] bg-clip-text text-3xl text-transparent md:text-5xl">
        Automatize o seu negócio conosco usando IA
      </h1>
      <div className="flex items-center justify-center py-12">
        <TextGenerateEffect words={words} />
      </div>
      <div className="relative w-[90%] max-w-8xl mx-auto my-8 rounded-xl overflow-hidden z-9999">
        <video className="w-full bg-black" loop muted autoPlay>
          <source src="./video.mp4" />
        </video>
      </div>
    </div>
  );
}
