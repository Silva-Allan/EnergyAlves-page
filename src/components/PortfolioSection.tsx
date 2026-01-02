import { Zap } from "lucide-react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

const portfolioItems = [
  { title: "Instalação Residencial", category: "Residencial", image: image1 },
  { title: "Quadro Industrial", category: "Comercial", image: image3 },
  { title: "Iluminação LED", category: "Iluminação", image: image2 },
  { title: "Manutenção Predial", category: "Manutenção" },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Nosso Portfólio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioItems.map((item, i) => (
            <div key={i} className="bg-background rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors group">
              <div className="aspect-square bg-muted relative overflow-hidden flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <Zap className="w-14 h-14 text-primary/20" />
                )}
              </div>
              <div className="p-3">
                <span className="text-primary text-xs font-medium">{item.category}</span>
                <h3 className="font-semibold text-sm mt-1 text-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
