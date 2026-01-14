import { MessageCircle } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918169654236"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      
      {/* Floating Quote Button */}
      <div className="shadow-lg rounded-md overflow-hidden hidden md:block">
        <LeadForm triggerText="Book Consultation" className="rounded-none h-12 px-6" />
      </div>
    </div>
  );
}