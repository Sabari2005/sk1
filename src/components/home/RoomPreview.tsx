import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/constants";
import { RoomCard } from "@/components/rooms/RoomCard";
import Link from "next/link";

export function RoomPreview() {
    const rooms = [
        {
            name: "Royal Deluxe",
            description: "Spacious room designed with heritage interiors and modern amenities for a luxurious stay.",
            image: IMAGES.room_deluxe,
            price: "₹3,500",
            slug: "/rooms"
        },
        {
            name: "Palace Suite",
            description: "Experience the grandeur of royalty with our premium suite featuring exquisite decor.",
            image: IMAGES.room_suite,
            price: "₹5,500",
            slug: "/rooms"
        },
        {
            name: "Family Heritage",
            description: "Perfect for families, offering ample space without compromising on the royal experience.",
            image: IMAGES.room_family,
            price: "₹4,800",
            slug: "/rooms"
        }
    ];

    return (
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Our Luxurious Accommodations"
                    subtitle="Stay in Style"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {rooms.map((room) => (
                        <RoomCard key={room.name} {...room} />
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/rooms" className="inline-block px-10 py-3 bg-slate-900 text-white font-medium hover:bg-gold-600 transition-colors uppercase tracking-wider">
                        View All 12 Rooms
                    </Link>
                </div>
            </div>
        </section>
    );
}
