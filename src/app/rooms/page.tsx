import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomCard } from "@/components/rooms/RoomCard";
import { IMAGES } from "@/lib/constants";

export const metadata = {
    title: "Our Rooms | SK Grand Palace",
    description: "Explore our luxurious rooms and suites.",
};

export default function RoomsPage() {
    const rooms = [
        { name: "Royal Deluxe", description: "Spacious with modern amenities.", image: IMAGES.room_deluxe, price: "₹3,500" },
        { name: "Palace Suite", description: "Grandeur and luxury combined.", image: IMAGES.room_suite, price: "₹5,500" },
        { name: "Family Heritage", description: "Ideal for family stays.", image: IMAGES.room_family, price: "₹4,800" },
        { name: "Executive Room", description: "Perfect for business travelers.", image: IMAGES.hero, price: "₹4,000" }, // Reusing hero for now
        { name: "Classic Double", description: "Cozy and comfortable.", image: IMAGES.room_deluxe, price: "₹3,000" },
        { name: "Royal Twin", description: "Twin beds with royal decor.", image: IMAGES.room_suite, price: "₹3,800" },
    ];

    return (
        <div className="pt-24 pb-20 container mx-auto px-4">
            <SectionHeading title="Our Accommodation" subtitle="Live Like Royalty" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rooms.map((room, idx) => (
                    <RoomCard key={idx} {...room} />
                ))}
            </div>
        </div>
    );
}
