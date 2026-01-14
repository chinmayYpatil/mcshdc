import { Layout } from "@/components/layout/Layout";
import designer1 from "@assets/stock_images/interior_designer_pr_98b36fbf.jpg";
import designer2 from "@assets/stock_images/interior_designer_pr_475884b6.jpg";
import bedroom from "@assets/stock_images/modern_bedroom_inter_6fdfd083.jpg";

const services = [
  {
    id: 1,
    title: "Room Makeover Class",
    price: "₹180",
    duration: null,
    status: null,
    image: designer1,
    buttonText: "Book Now",
  },
  {
    id: 2,
    title: "Design Consultation",
    price: "₹150",
    duration: "1 hr",
    status: null,
    image: designer2,
    buttonText: "Book Now",
  },
  {
    id: 3,
    title: "Design Project Planning",
    price: "₹200",
    duration: null,
    status: "Ended",
    image: bedroom,
    buttonText: "View Course",
  },
];

export default function BookOnline() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 pb-16">
        <h1 className="font-display text-2xl md:text-3xl text-center mb-12 text-foreground">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              data-testid={`card-service-${service.id}`}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl text-foreground mb-4">
                  {service.title}
                </h2>
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  {service.duration && <p>{service.duration}</p>}
                  {service.status && <p className="text-destructive">{service.status}</p>}
                  <p className="text-foreground font-medium">{service.price}</p>
                </div>
                <button
                  data-testid={`button-book-${service.id}`}
                  className="px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity"
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}