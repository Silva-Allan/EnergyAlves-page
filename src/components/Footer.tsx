import logo from "@/assets/logo-energy-alves.png";

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Energy Alves" className="h-8 w-auto" />
          <span className="font-medium text-sm">Energy Alves</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
