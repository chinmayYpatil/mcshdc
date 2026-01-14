import { Layout } from "@/components/layout/Layout";
import designer from "@assets/stock_images/interior_designer_pr_40b6b9ad.jpg";

export default function Info() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 lg:px-8 pb-16">
        <section className="mb-12">
          <h2 className="font-display text-lg text-muted-foreground mb-4">
            Welcome to Luxe Interiors
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            Luxe Interiors is a premier interior design firm dedicated to transforming spaces into luxurious and functional environments. Our team of talented designers is committed to creating bespoke designs that reflect the unique style and personality of each client. With a keen eye for detail and a passion for excellence, we bring your vision to life through innovative design solutions.
          </p>
        </section>

        <section className="mb-12">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={designer}
              alt="Interior Designer at work"
              data-testid="img-designer"
              className="w-full h-80 object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            At Luxe Interiors, we believe that the key to successful design lies in understanding the individual needs and preferences of our clients. Whether it's a commercial space or a residential project, we are dedicated to delivering exceptional results that exceed expectations. Our collaborative approach and meticulous attention to every aspect of the design process ensure a seamless and enjoyable experience for our clients.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-lg text-muted-foreground mb-4">
            Our Services
          </h2>
          <p className="text-foreground leading-relaxed">
            Luxe Interiors offers a comprehensive range of interior design services, including commercial and residential design, space planning, and furniture selection. Our team works closely with clients to curate stunning interiors that elevate the aesthetic appeal and functionality of any space.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-muted-foreground mb-4">
            Recognition & Awards
          </h2>
          <p className="text-foreground leading-relaxed">
            At Luxe Interiors, our commitment to design excellence has been recognized through prestigious awards and accolades. We take pride in our dedication to innovation and creativity, and these accolades serve as a testament to our unwavering pursuit of design perfection.
          </p>
        </section>
      </div>
    </Layout>
  );
}