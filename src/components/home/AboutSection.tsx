import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/constants";
import { Check } from "lucide-react";

export function AboutSection() {
    const features = [
        "Located near White Town French Colony",
        "Heritage-Inspired Royal Architecture",
        "12 Unique Rooms in 6 Categories",
        "Modern Amenities with Vintage Charm"
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 order-2 lg:order-1">
                        <SectionHeading
                            title="A Timeless Blend of Heritage and Luxury"
                            subtitle="About Us"
                            align="left"
                        />
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Nestled close to the iconic White Town French Colony, <strong>SK Grand Palace</strong> is a timeless blend
                            of royal elegance, heritage architecture, and modern comfort. Designed to reflect the charm of a
                            regal palace, our property offers guests an experience that truly makes them feel like kings
                            and queens from the moment they step inside.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            From the intricately carved wooden doors and artistic interiors to the majestic façade,
                            every corner speaks of grandeur. The warm lighting and handcrafted décor create an
                            atmosphere of calm luxury.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-800 font-medium">
                                    <span className="bg-gold-100 text-gold-600 p-1 rounded-full">
                                        <Check size={16} strokeWidth={3} />
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Composition */}
                    <div className="flex-1 relative order-1 lg:order-2">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src={IMAGES.hero}
                                alt="SK Grand Palace Interior"
                                width={600}
                                height={800}
                                className="w-full object-cover h-[500px]"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-100 rounded-full z-0 opacity-50 blur-2xl" />
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-200 rounded-full z-0 opacity-50 blur-2xl" />
                    </div>

                </div>
            </div>
        </section>
    );
}
