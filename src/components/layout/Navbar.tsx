"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900"
                        : "bg-transparent py-5 text-white"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="flex flex-col">
                        <span className={cn("font-serif text-2xl font-bold tracking-wide", isScrolled ? "text-gold-600" : "text-white")}>
                            SK GRAND PALACE
                        </span>
                        <span className="text-[10px] uppercase tracking-widest opacity-80">Heritage & Luxury</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium tracking-wide hover:text-gold-400 transition-colors uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={cn(
                                "px-6 py-2 rounded-none font-medium text-sm tracking-wider transition-all border",
                                isScrolled
                                    ? "border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white"
                                    : "border-white text-white hover:bg-white hover:text-slate-900"
                            )}
                        >
                            BOOK NOW
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-slate-900 text-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center text-center">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-serif hover:text-gold-400"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-8 flex flex-col gap-4 text-sm opacity-80">
                                <p className="flex items-center gap-2 justify-center">
                                    <Phone size={16} className="text-gold-400" /> {SITE_CONFIG.phone}
                                </p>
                                <p className="flex items-center gap-2 justify-center">
                                    <MapPin size={16} className="text-gold-400" /> Puducherry, India
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
