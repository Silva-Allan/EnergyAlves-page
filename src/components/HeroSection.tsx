export const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl mx-auto text-foreground">
          Soluções elétricas seguras e precisas para quem exige alto padrão.
        </h1>

        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Instalações e manutenções elétricas residenciais e comerciais em Chapecó/SC.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contato"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#servicos"
            className="border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
          >
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
};
