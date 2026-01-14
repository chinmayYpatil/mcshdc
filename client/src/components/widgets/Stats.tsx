import { RevealOnScroll } from "./RevealOnScroll";

const stats = [
  { label: "Happy Clients", value: "150+" },
  { label: "Projects Completed", value: "200+" },
  { label: "Years Experience", value: "8+" },
  { label: "Cities Covered", value: "12+" },
];

export function StatsWidget() {
  return (
    <section className="py-12 bg-secondary/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.1}>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground uppercase tracking-wider text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}