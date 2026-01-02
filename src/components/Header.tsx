import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-energy-alves.png";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#quem-somos", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Energy Alves" className="h-10 w-auto" />
            <span className="font-semibold">Energy Alves</span>
          </a>

          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5547920006964"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </li>
          </ul>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5547920006964"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md font-medium"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
