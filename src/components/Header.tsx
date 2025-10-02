import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Our Story", href: "/our-story", isRoute: true },
    { name: "What we do", href: "/#products", isRoute: false },
    { name: "Impact", href: "/#impact", isRoute: false },
    { name: "Contact", href: "/#contact", isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/mycogrid-logo-new.jpg" 
                alt="MycoGrid logo" 
                className="h-10 w-10 transition-transform duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-growth/20 scale-0 group-hover:scale-110 transition-transform duration-200"></div>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">
              MycoGrid
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm py-2 px-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-growth scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm py-2 px-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-growth scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              )
            ))}
          </div>

          {/* Mobile menu button container */}
          <div className="hidden md:block"></div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-card/95 backdrop-blur-xl rounded-xl mt-4 shadow-strong border border-border/50">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 font-medium text-base rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 font-medium text-base rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;