import { Phone, MapPin, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Entre em Contato
        </h2>

        <div className="max-w-md mx-auto space-y-4">
          <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">(47) 92000-6964</p>
              <p className="text-sm text-muted-foreground">WhatsApp</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">Chapecó, SC</p>
              <p className="text-sm text-muted-foreground">Atendemos toda região</p>
            </div>
          </div>

          <a
            href="https://wa.me/5547920006964?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
