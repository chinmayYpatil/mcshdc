import { useState, useEffect } from "react";
import { Moon, Sun, ShoppingBag, Menu, X, Play, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

// Import new widgets
import { RevealOnScroll } from "@/components/widgets/RevealOnScroll";
import { StatsWidget } from "@/components/widgets/Stats";
import { Testimonials } from "@/components/widgets/Testimonials";
import { FloatingCTA } from "@/components/widgets/FloatingCTA";
import { HowItWorks } from "@/components/widgets/HowItWorks";
import { LeadForm } from "@/components/widgets/LeadForm";

// Import existing assets
import interior1 from "@assets/stock_images/luxury_modern_interi_b21dea92.jpg";
import interior2 from "@assets/stock_images/luxury_modern_interi_8b9b4f09.jpg";
import interior3 from "@assets/stock_images/luxury_modern_interi_faa58886.jpg";
import interior4 from "@assets/stock_images/luxury_modern_interi_905d693d.jpg";
import interior5 from "@assets/stock_images/luxury_modern_interi_a7e993f9.jpg";
import interior6 from "@assets/stock_images/luxury_modern_interi_f947add8.jpg";
import designer from "@assets/stock_images/interior_designer_pr_40b6b9ad.jpg";
import designer1 from "@assets/stock_images/interior_designer_pr_98b36fbf.jpg";
import designer2 from "@assets/stock_images/interior_designer_pr_475884b6.jpg";
import bedroom from "@assets/stock_images/modern_bedroom_inter_afdc6b59.jpg";
import bedroom2 from "@assets/stock_images/modern_bedroom_inter_6fdfd083.jpg";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#info", label: "Info" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
  { href: "#book-online", label: "Book Online" },
];

const projects = [
  { id: 1, title: "Aurum Q Park 3.5 BHK", image: interior1, hasVideo: true },
  { id: 2, title: "Infinity Tower", image: interior2, hasVideo: true },
  { id: 3, title: "Mulund", image: interior3, hasVideo: true },
  { id: 4, title: "Temple Design", image: interior4, hasVideo: false },
  { id: 5, title: "Living Space", image: interior5, hasVideo: false },
  { id: 6, title: "Master Bedroom", image: interior6, hasVideo: false },
];

const articles = [
  { id: 1, title: "Explore Modern Interior Design Trends for 2023", excerpt: "As we step into 2023, the world of interior design is buzzing with fresh ideas and innovative concepts...", image: interior5 },
  { id: 2, title: "Transform Your Space with Luxe Interior Design Tips", excerpt: "Creating a luxurious interior space doesn't have to be an overwhelming task...", image: interior6 },
  { id: 3, title: "Maximize Small Spaces: Innovative Interior Design Ideas", excerpt: "Living in small spaces can be a challenge, but it also presents a unique opportunity...", image: bedroom },
];

const services = [
  { id: 1, title: "Room Makeover Class", price: "₹180", duration: null, status: null, image: designer1, buttonText: "Book Now" },
  { id: 2, title: "Design Consultation", price: "₹150", duration: "1 hr", status: null, image: designer2, buttonText: "Book Now" },
  { id: 3, title: "Design Project Planning", price: "₹200", duration: null, status: "Ended", image: bedroom2, buttonText: "View Course" },
];

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button onClick={toggle} data-testid="button-theme-toggle" className="p-2 rounded-full hover:bg-secondary transition-colors">
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingCTA />
      
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            
            {/* LEFT SECTION: Mobile Menu + NEW LOGO */}
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 md:hidden" data-testid="button-mobile-menu">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <img 
                src="/logo.png" 
                alt="Swamini Designs" 
                className="w-40 h-40 md:w-20 md:h-20 object-contain"
              />
            </div>

            {/* CENTER SECTION: Title */}
            <div className="text-center flex-1 flex flex-col items-center justify-center">
              <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-widest uppercase text-foreground">Swamini Designs</h1>
              <p className="text-xs text-muted-foreground hidden md:block mt-1 tracking-wider">Transforming Spaces with Elegance & Purpose</p>
            </div>

            {/* RIGHT SECTION: Icons */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button data-testid="button-cart" className="relative p-2 rounded-full hover:bg-secondary transition-colors">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">0</span>
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center gap-8 mt-3">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollToSection(link.href)} data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`} className="font-display text-sm hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary pb-1">
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-card border-t border-border p-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollToSection(link.href)} className="block w-full text-left py-3 border-b border-border/50 font-display hover:text-primary transition-colors last:border-0">
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="pt-28 md:pt-40">
        {/* HERO SECTION */}
        <section id="home" className="max-w-7xl mx-auto px-4 pb-20">
          <div className="relative rounded-lg overflow-hidden shadow-2xl mb-12 group">
            <img src={interior4} alt="Featured project" data-testid="img-hero" className="w-full h-[60vh] object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* HERO CENTER CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <RevealOnScroll>
                <h1 className="font-display text-5xl md:text-8xl tracking-widest uppercase font-light drop-shadow-lg mb-6">
                  Swamini <span className="font-semibold text-primary-foreground">Designs</span>
                </h1>
                <p className="font-display text-sm md:text-xl tracking-[0.2em] uppercase opacity-90 mb-8 border-y border-white/30 py-2 inline-block">
                  Design • Decor • Lifestyle
                </p>
                <div className="flex gap-4">
                  <LeadForm className="bg-white text-black hover:bg-white/90" />
                  <button 
                    onClick={() => scrollToSection('#projects')}
                    className="px-6 py-2 border border-white/50 text-white rounded-md hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    View Gallery
                  </button>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          <StatsWidget />

          <div className="max-w-3xl mx-auto text-center my-16">
            <RevealOnScroll>
              <h2 className="font-display text-2xl md:text-3xl mb-6">Experience the Art of Living</h2>
              <p className="leading-relaxed text-muted-foreground text-lg mb-6">
                Swamini Designs is a creative interior design studio specializing in elegant, functional, and personalized spaces. We believe every space has a story, and our goal is to bring that story to life through intelligent designs and fine detailing.
              </p>
            </RevealOnScroll>
          </div>

          <h2 className="font-display text-2xl md:text-3xl text-center mb-8 uppercase tracking-widest">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <RevealOnScroll delay={0.1}>
              <div className="group relative rounded-lg overflow-hidden shadow-lg aspect-video cursor-pointer">
                {/* UPDATED IMAGE for Pratik */}
                <img src="/Pratik.jpeg" alt="Pratik CHS" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xl font-display tracking-widest uppercase border-b border-white pb-1">Pratik CHS, Panvel</span>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="group relative rounded-lg overflow-hidden shadow-lg aspect-video cursor-pointer">
                {/* UPDATED IMAGE AND TEXT for VATVRUKSHA */}
                <img src="/vatvrushka.jpeg" alt="Vatvruksha Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
                    <span className="text-white text-lg md:text-xl font-display tracking-widest uppercase border-b border-white pb-1 leading-relaxed">
                        VATVRUKSHA SHREE SWAMI SAMARTH JYOTISH KENDRA
                    </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <HowItWorks />

        {/* PROJECTS SECTION */}
        <section id="projects" className="max-w-7xl mx-auto px-4 py-20 bg-background">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-4">
              <h2 className="font-display text-3xl md:text-4xl">Our Creations</h2>
              <p className="text-muted-foreground mt-2 md:mt-0">Curated spaces for modern living</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <RevealOnScroll key={project.id} delay={idx * 0.1}>
                <div data-testid={`card-project-${project.id}`} className="group cursor-pointer">
                  <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3] bg-muted">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                    {project.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 ml-1 text-primary" fill="currentColor" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <p className="text-lg font-medium group-hover:text-primary transition-colors">{project.title}</p>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Residential</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <Testimonials />

        {/* INFO SECTION */}
        <section id="info" className="max-w-5xl mx-auto px-4 py-20">
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl mb-6">Design Philosophy</h2>
                <p className="leading-relaxed text-muted-foreground mb-6 text-lg">
                  Swamini Designs is a premier interior design firm dedicated to transforming spaces into luxurious and functional environments. Our team of talented designers is committed to creating bespoke designs that reflect the unique style and personality of each client.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">Our Services</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">Comprehensive interior design, space planning, 3D visualization, and turnkey execution.</p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">Recognition</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">Award-winning designs and over 150+ satisfied families across the state.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-lg transform rotate-3" />
                 <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img src={designer} alt="Designer at work" data-testid="img-designer" className="w-full h-[500px] object-cover" />
                 </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* JOURNAL SECTION */}
        <section id="journal" className="max-w-7xl mx-auto px-4 py-20 bg-secondary/10">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl mb-12 text-center">Journal & Insights</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {articles.map((article, idx) => (
              <RevealOnScroll key={article.id} delay={idx * 0.1}>
                <article data-testid={`card-article-${article.id}`} className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Design Trends</div>
                    <h3 className="font-display text-lg mb-3 leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                    <div className="mt-4 text-sm font-medium underline underline-offset-4 decoration-primary/50">Read More</div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-primary text-primary-foreground p-10 rounded-2xl shadow-2xl text-center">
            <h3 className="font-display text-2xl mb-4">Join Our Design Community</h3>
            <p className="opacity-90 mb-8">Get the latest trends and exclusive offers delivered to your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                data-testid="input-newsletter" 
                className="flex-1 px-4 py-3 bg-white text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white" 
              />
              <button type="submit" data-testid="button-subscribe" className="px-6 py-3 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white font-medium rounded-lg transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* BOOK ONLINE SECTION */}
        <section id="book-online" className="max-w-6xl mx-auto px-4 py-20">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-center mb-12">Online Consultations</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <RevealOnScroll key={service.id} delay={idx * 0.1}>
                <div data-testid={`card-service-${service.id}`} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:border-primary/50 transition-colors">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-display text-xl">{service.title}</h3>
                       <span className="bg-secondary px-2 py-1 rounded text-xs font-semibold">{service.price}</span>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground mb-6 min-h-[3rem]">
                      {service.duration && <p>Duration: {service.duration}</p>}
                      {service.status && <p className="text-destructive font-medium">{service.status}</p>}
                    </div>
                    <button data-testid={`button-book-${service.id}`} className="w-full py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity">
                      {service.buttonText}
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
        
        {/* CONTACT SECTION */}
        <section id="contact" className="bg-muted/30 py-20">
            <div className="max-w-5xl mx-auto px-4">
              <RevealOnScroll>
                <h2 className="font-display text-lg text-primary font-semibold mb-2 uppercase tracking-widest text-center">Get in Touch</h2>
                <h3 className="font-display text-3xl md:text-5xl text-center mb-16">Let's Create Your Dream Space</h3>
              </RevealOnScroll>

              <div className="grid md:grid-cols-2 gap-12 bg-card p-8 md:p-12 rounded-2xl shadow-xl">
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-display mb-2">Siddhi Dhangkar</h4>
                    <p className="text-muted-foreground mb-8">Architect & Proprietor</p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full"><MapPin className="w-6 h-6 text-primary" /></div>
                        <div>
                            <p className="font-semibold">Visit Us</p>
                            <p className="text-muted-foreground">601, Gauri Complex, sector- II,<br />CBD Belapur, Thane-400614</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                         <div className="bg-primary/10 p-3 rounded-full"><Mail className="w-6 h-6 text-primary" /></div>
                         <div>
                            <p className="font-semibold">Email Us</p>
                            <a href="mailto:siddhidhangkar09@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">siddhidhangkar09@gmail.com</a>
                         </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                         <div className="bg-primary/10 p-3 rounded-full"><Phone className="w-6 h-6 text-primary" /></div>
                         <div>
                            <p className="font-semibold">Call Us</p>
                            <a href="tel:+918169654236" className="text-muted-foreground hover:text-primary transition-colors">+91 8169654236</a>
                         </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-xl">
                   <h4 className="text-xl font-semibold mb-4">Send us a message</h4>
                   <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none" />
                        <input type="text" placeholder="Last Name" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none" />
                      </div>
                      <input type="email" placeholder="Email Address" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none" />
                      <textarea rows={4} placeholder="Your Message" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
                      <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity">Send Message</button>
                   </form>
                </div>
              </div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
             <div className="col-span-1 md:col-span-1">
                <img src="/logo.png" alt="Swamini Designs" className="h-16 w-auto mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                   Creating timeless interiors that blend luxury with functionality. Your vision, our expertise.
                </p>
             </div>
             
             <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                   <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                   <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                   <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                   <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
             </div>
             
             <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                   <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                   <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                   <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                </ul>
             </div>
             
             <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-4">Subscribe for the latest design updates.</p>
                <div className="flex">
                   <input type="email" placeholder="Email" className="w-full px-3 py-2 bg-background border border-border rounded-l-md text-sm" />
                   <button className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-r-md">Go</button>
                </div>
             </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>© 2025 Swamini Designs. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
               <p>Designed with ❤️ in India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}