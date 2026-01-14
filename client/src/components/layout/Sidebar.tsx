import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/info", label: "Info" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/book-online", label: "Book Online" },
];

export function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        data-testid="button-menu-open"
        className="fixed left-4 top-4 z-50 p-2 lg:hidden bg-card rounded-lg shadow-md"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <button
            onClick={() => setIsOpen(false)}
            data-testid="button-menu-close"
            className="absolute top-4 right-4 p-2 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>

          <nav className="flex-1 flex flex-col justify-center">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                    className={`font-display text-xl transition-colors hover:text-primary ${
                      location === link.href
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}