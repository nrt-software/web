export function About() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <div className="flex h-full items-center justify-center rounded-md border border-slate-800 bg-black px-3 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h2 className="bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-2xl text-transparent md:text-3xl">
                Sobre Nossa Plataforma
              </h2>
              <p className="text-white text-lg md:text-xl text-center max-w-2xl my-6">
                Simplificando a interação com seus clientes de forma inovadora e
                eficiente.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
                <h3 className=" text-slate-300 text-xl md:text-2xl font-semibold mb-4">
                  Atendimento
                </h3>
                <p className="text-gray-500">
                  Ofereça uma experiência única aos seus clientes, agendando
                  atendimentos e respondendo às necessidades de forma rápida e
                  eficaz.
                </p>
              </div>
              <div className="rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                  Gestão Multicanal
                </h3>
                <p className="text-gray-500">
                  Gerencie suas conversas no WhatsApp e Instagram em um só
                  lugar, simplificando a administração e alcançando diferentes
                  audiências.
                </p>
              </div>
              <div className="rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                  Promoções Ciclícas
                </h3>
                <p className="text-gray-500">
                  Envie ofertas especiais e cupons regularmente para seus
                  clientes, aumentando o engajamento e fidelização.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
