import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wifi, Car, Utensils, Monitor, Wind, Coffee } from "lucide-react";

export function AmenitiesSection() {
    const amenities = [
        { icon: Wifi, name: "Free High-Speed WiFi" },
        { icon: Car, name: "Secure Parking" },
        { icon: Utensils, name: "In-House Restaurant" },
        { icon: Monitor, name: "LED TV with Satellite" },
        { icon: Wind, name: "Air Conditioning" },
        { icon: Coffee, name: "24/7 Room Service" },
    ];

    return (
        <section id="amenities" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <SectionHeading title="World Class Amenities" subtitle="Comfort First" light />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 group">
                            <div className="p-4 bg-slate-800 rounded-full text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-slate-900 group-hover:scale-110">
                                <item.icon size={32} />
                            </div>
                            <span className="font-serif text-lg tracking-wide text-center">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
