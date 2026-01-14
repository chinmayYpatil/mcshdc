import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import interior1 from "@assets/stock_images/luxury_modern_interi_a7e993f9.jpg";
import interior2 from "@assets/stock_images/luxury_modern_interi_f947add8.jpg";
import bedroom from "@assets/stock_images/modern_bedroom_inter_afdc6b59.jpg";

const articles = [
  {
    id: 1,
    title: "Explore Modern Interior Design Trends for 2023",
    excerpt: "As we step into 2023, the world of interior design is buzzing with fresh ideas and innovative concepts. Homeowners and...",
    image: interior1,
  },
  {
    id: 2,
    title: "Transform Your Space with Luxe Interior Design Tips",
    excerpt: "Creating a luxurious interior space doesn't have to be an overwhelming task. With the right tips and a clear vision, you can transform any roo...",
    image: interior2,
  },
  {
    id: 3,
    title: "Maximize Small Spaces: Innovative Interior Design Ideas",
    excerpt: "Living in small spaces can be a challenge, but it also presents a unique opportunity for creativity and innovation in interior design. Whether yo...",
    image: bedroom,
  },
];

export default function Journal() {
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 pb-16">
        <h1 className="font-display text-2xl md:text-3xl mb-8 text-foreground underline underline-offset-4">
          Journal-
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((article) => (
            <article
              key={article.id}
              data-testid={`card-article-${article.id}`}
              className="group cursor-pointer"
            >
              <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>

        <section className="bg-card p-8 rounded-lg">
          <h2 className="font-display text-xl text-foreground mb-4">
            Newsletter<br />Sign up:
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              data-testid="input-newsletter-email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              data-testid="button-newsletter-submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}