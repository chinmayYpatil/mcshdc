import { Layout } from "@/components/layout/Layout";
import { Play } from "lucide-react";

// --- IMAGE IMPORTS ---
// Using the files confirmed in your project structure (note the .jpeg extension)
import templeImg from "@/assets/projects/temple.jpeg";
import pratikImg from "@/assets/projects/Pratik.jpeg";
import bedroomImg from "@/assets/projects/bedroom.jpeg";

// Fallback for stock images if you still have them in the stock_images folder
// If these fail, replace them with the working images above
import interior1 from "@/assets/stock_images/luxury_modern_interi_b21dea92.jpg";
import interior2 from "@/assets/stock_images/luxury_modern_interi_8b9b4f09.jpg";
import interior3 from "@/assets/stock_images/luxury_modern_interi_faa58886.jpg";

// --- VIDEO IMPORTS ---
// IMPORTANT: Ensure these files are inside 'client/src/assets/projects/'
// If you haven't added the videos yet, comment these lines out to prevent errors.
import aurumVideo from "@/assets/projects/aurum.mp4";   
import infinityVideo from "@/assets/projects/infinity.mp4"; 
import mulundVideo from "@/assets/projects/mulund.mp4"; 

const projects = [
  {
    id: 1,
    title: "Aurum Q Park 3.5 BHK",
    image: interior1, // Or use pratikImg if interior1 is missing
    video: aurumVideo,
    hasVideo: true,
  },
  {
    id: 2,
    title: "Infinity Tower",
    image: interior2,
    video: infinityVideo,
    hasVideo: true,
  },
  {
    id: 3,
    title: "Mulund",
    image: interior3,
    video: mulundVideo,
    hasVideo: true,
  },
  {
    id: 4,
    title: "Temple Design",
    image: templeImg,
    hasVideo: false,
  },
  {
    id: 5,
    title: "Living Space",
    image: pratikImg,
    hasVideo: false,
  },
  {
    id: 6,
    title: "Master Bedroom",
    image: bedroomImg,
    hasVideo: false,
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 pb-16">
        <h1 className="font-display text-2xl md:text-3xl mb-8 text-foreground">
          Our Creations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              data-testid={`card-project-${project.id}`}
              className="group cursor-pointer"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-72 bg-muted">
                {/* Video vs Image Rendering Logic */}
                {project.hasVideo && project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={typeof project.image === "string" ? project.image : undefined}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Play Icon Overlay (only if video is supposed to be there but not playing/loading) */}
                {project.hasVideo && !project.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <Play className="w-5 h-5 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}