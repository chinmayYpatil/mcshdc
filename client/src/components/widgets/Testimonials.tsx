import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Mumbai",
    content: "Swamini Designs completely transformed our living room. It feels like a 5-star hotel now!",
    initials: "PS",
  },
  {
    name: "Rahul Verma",
    role: "Architect",
    content: "Professional, timely, and incredibly creative. The attention to detail is unmatched.",
    initials: "RV",
  },
  {
    name: "Anjali Desai",
    role: "Business Owner",
    content: "They understood my vision perfectly. The execution was flawless and within budget.",
    initials: "AD",
  },
];

export function Testimonials() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-background">
      <h2 className="font-display text-2xl md:text-3xl text-center mb-12">What Our Clients Say</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((t, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
              <div className="p-1">
                <Card className="border-none shadow-md bg-card/50">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground italic leading-relaxed text-sm">
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4 pr-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}