import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wifi, Wind, Tv } from "lucide-react";

interface RoomCardProps {
    name: string;
    description: string; // Short description
    image: string;
    price?: string;
    slug?: string;
}

export function RoomCard({ name, description, image, price, slug = "#" }: RoomCardProps) {
    return (
        <div className="group bg-white shadow-lg overflow-hidden border border-stone-200 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">{name}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{description}</p>

                {/* Amenities Preview */}
                <div className="flex gap-4 mb-6 text-slate-400">
                    <Wifi size={18} />
                    <Wind size={18} />
                    <Tv size={18} />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    {price && <span className="font-serif text-xl font-bold text-gold-600">{price} <span className="text-xs text-slate-400 font-sans font-normal">/ Night</span></span>}
                    <Link href={slug} className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-gold-600 transition-colors uppercase tracking-wider">
                        Details <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
