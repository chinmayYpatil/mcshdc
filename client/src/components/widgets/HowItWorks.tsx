// client/src/components/widgets/HowItWorks.tsx
import { ClipboardList, Palette, Hammer, Key } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const steps = [
  { icon: ClipboardList, title: "Meet & Estimate", desc: "Get a free consultation and budget estimate." },
  { icon: Palette, title: "Design & Plan", desc: "Co-create your design with our experts." },
  { icon: Hammer, title: "Execution", desc: "We bring the design to life with premium quality." },
  { icon: Key, title: "Move In", desc: "Walk into your dream home, ready to live." },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="font-display text-2xl md:text-3xl text-center mb-16">How It Works</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {/* Connector Line (hidden on mobile/last item) */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-border -z-10 transform translate-x-1/2" />
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}