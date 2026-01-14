import { Layout } from "@/components/layout/Layout";
import { Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 pb-16">
        <h1 className="font-display text-lg text-muted-foreground mb-2">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Let's Create Your Dream Space
            </h2>
            
            <div className="flex gap-4 mb-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-contact-facebook"
                className="p-2 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-contact-instagram"
                className="p-2 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-contact-pinterest"
                className="p-2 hover:text-primary transition-colors text-lg"
              >
                P
              </a>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed">
              Visit us at 123 Luxe Interiors Blvd, San Francisco, CA 94158 or contact us via email at{" "}
              <a
                href="mailto:info@luxeinteriors.com"
                className="text-primary hover:underline"
              >
                info@luxeinteriors.com
              </a>{" "}
              or give us a call at{" "}
              <a href="tel:123-456-7890" className="text-primary hover:underline">
                123-456-7890
              </a>{" "}
              to schedule a consultation and start transforming your home.
            </p>
          </div>
        </div>

        <div className="mt-16 h-64 md:h-96 bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Map placeholder</p>
        </div>
      </div>
    </Layout>
  );
}