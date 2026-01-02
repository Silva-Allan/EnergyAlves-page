import { Home, Building2, Wrench, Lightbulb } from "lucide-react";

const services = [
  { icon: Home, title: "Residencial", desc: "Instalações para casas" },
  { icon: Building2, title: "Comercial", desc: "Soluções empresariais" },
  { icon: Wrench, title: "Manutenção", desc: "Preventiva e corretiva" },
  { icon: Lightbulb, title: "Iluminação", desc: "Projetos LED" },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div key={i} className="bg-card p-4 rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
