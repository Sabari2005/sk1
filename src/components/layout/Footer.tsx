import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="font-serif text-3xl font-bold text-gold-500">SK GRAND PALACE</h2>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            An epitome of royal heritage and modern luxury. Experience the charm of Puducherry with our heritage-inspired hospitality.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-gold-500 transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-gold-500 transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-gold-500 transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl text-gold-100">Quick Links</h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-gold-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl text-gold-100">Contact Us</h3>
                        <div className="space-y-4 text-slate-400">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                                <p>{SITE_CONFIG.address}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-gold-500 shrink-0" size={20} />
                                <p>{SITE_CONFIG.phone}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-gold-500 shrink-0" size={20} />
                                <p>{SITE_CONFIG.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} SK Grand Palace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
