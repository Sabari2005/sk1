import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | SK Grand Palace",
    description: "Get in touch for bookings and inquiries.",
};

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20 container mx-auto px-4">
            <SectionHeading title="Get In Touch" subtitle="We're Here to Help" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-100">
                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold-100 text-gold-600 rounded-full">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Address</p>
                                    <p className="text-slate-600">{SITE_CONFIG.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold-100 text-gold-600 rounded-full">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Phone</p>
                                    <p className="text-slate-600">{SITE_CONFIG.phone}</p>
                                    <p className="text-slate-600">+91 9962747477</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold-100 text-gold-600 rounded-full">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Email</p>
                                    <p className="text-slate-600">{SITE_CONFIG.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold-100 text-gold-600 rounded-full">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Reception</p>
                                    <p className="text-slate-600">24 Hours Open</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-100">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                            <textarea className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all h-32" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full py-4 bg-slate-900 text-gold-500 font-bold tracking-wider uppercase hover:bg-gold-600 hover:text-white transition-all rounded-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
