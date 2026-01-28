import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { RoomPreview } from "@/components/home/RoomPreview";
import { AmenitiesSection } from "@/components/home/AmenitiesSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <RoomPreview />
      <AmenitiesSection />
    </div>
  );
}
