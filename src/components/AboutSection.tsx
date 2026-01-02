export const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-16 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
          Quem Somos
        </h2>
        <p className="text-muted-foreground max-w-1xl mx-auto mb-8">
          Fundada em 2020, a empresa Energy Alves nasceu da visão de um negócio familiar comprometido com a excelência técnica e a segurança elétrica. Com 5 anos de atuação sólida no mercado, evoluímos de pequenos reparos para projetos complexos nos setores residencial, predial e industrial.
Nosso diferencial está na responsabilidade: somos uma empresa registrada que prioriza a vida acima de tudo. Por isso, contamos com todas as certificações obrigatórias, incluindo as NR-10 (Segurança em Eletricidade) e NR-35 (Trabalho em Altura). Quando você contrata a nossa equipe para cuidar da sua, você recebe mais do que energia; recebe o compromisso de quem entende que uma instalação segura é a base de qualquer empreendimento.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "10+", label: "Anos" },
            { value: "500+", label: "Clientes" },
            { value: "1000+", label: "Projetos" },
            { value: "100%", label: "Segurança" },
          ].map((stat, i) => (
            <div key={i} className="bg-background p-4 rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
