import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  triggerText?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

export function LeadForm({ triggerText = "Get Free Estimate", variant = "default", className }: LeadFormProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: "Our team will contact you within 24 hours.",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Get a Free Estimate</DialogTitle>
          <DialogDescription>
            Tell us about your dream space. We'll get back to you with a personalized quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Property Type</Label>
            <Input id="type" placeholder="e.g. 2BHK, Villa, Office" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Requirements</Label>
            <Textarea id="message" placeholder="Briefly describe your needs..." />
          </div>
          <Button type="submit" className="w-full mt-2">Request Consultation</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}