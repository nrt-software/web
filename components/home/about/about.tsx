import { content } from "@/components/home/about/config";
import { StickyScroll } from "@/components/home/about/sticky-scroll";

export function About() {
  return (
    <div className="w-full m-auto flex flex-col justify-center items-center relative">
      <h1 className="mb-4 text-center text-5xl font-bold tracking-tight text-foreground w-[90%]">
        Sobre nosso produto
      </h1>
      <h2 className="mb-8 text-center text-lg font-medium tracking-tight text-foreground/80 w-[60%]">
        Simplificando a interação com seus clientes de forma inovadora e
        eficiente.
      </h2>
      <div className="p-4">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
