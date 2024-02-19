import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="w-full m-auto flex flex-col justify-center items-center">
      <h1 className="mb-4 text-center text-5xl font-bold tracking-tight text-foreground">
        Perguntas frequentes
      </h1>
      <h2 className="mb-8 text-center text-lg font-medium tracking-tight text-foreground/80 w-[60%]">
        Precisa de ajuda com alguma coisa? Aqui estão algumas das perguntas mais
        comuns que recebemos.
      </h2>
      <section className="w-[50%]">
        <h2 className="my-4 text-left text-base font-semibold tracking-tight text-foreground/60">
          Geral
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              É acessivel? Vou poder usar meu WhatsApp normalmente?
            </AccordionTrigger>
            <AccordionContent>
              Sim, você poderia ativar e desativar sempre que quiser (isso não
              diminuirá o valor mensal do produto)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It`s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h2 className="my-4 text-left text-base font-semibold tracking-tight text-foreground/60">
          Suporte
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
