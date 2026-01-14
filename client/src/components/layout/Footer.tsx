import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-facebook"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-instagram"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-pinterest"
                  className="hover:text-primary transition-colors"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-2 text-muted-foreground">
            <p>
              <a href="mailto:swaminidesigns@gmail.com" className="hover:text-primary transition-colors">
                swaminidesigns@gmail.com
              </a>
            </p>
            <p>Tel: 8169654236</p>
            <p>Whatsapp: 8169654236</p>
          </div>
          
          <div className="space-y-2 text-muted-foreground">
            <p>© 2025 by Swamini Designs</p>
            <p>Powered and secured by</p>
            <p className="font-medium text-foreground">Swamini Designs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}