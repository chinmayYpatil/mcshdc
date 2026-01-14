import { ShoppingBag } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between lg:justify-center relative">
          <div className="w-10 lg:hidden" />
          
          <div className="text-center">
            <h1 className="font-display text-2xl md:text-3xl font-medium text-foreground tracking-wide">
              Swamini Designs
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
              Transforming Spaces with Elegance & Purpose
            </p>
            <p className="hidden md:block text-xs text-muted-foreground mt-1 max-w-xl mx-auto">
              We create thoughtful, timeless interiors for homes and commercial spaces—designed around your lifestyle, taste, and comfort.
            </p>
          </div>

          <div className="flex items-center gap-2 lg:absolute lg:right-0">
            <ThemeToggle />
            <button
              data-testid="button-cart"
              className="relative p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-primary" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}