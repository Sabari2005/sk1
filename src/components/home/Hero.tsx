"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Ken Burns Effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${IMAGES.hero})` }}
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-gold-300 mb-4 block">
                        Welcome to Puducherry
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                        SK Grand Palace
                    </h1>
                    <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
                        A heritage-inspired luxury hotel reflecting royal elegance and timeless charm.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href="/rooms"
                            className="px-8 py-3 bg-gold-600 text-white font-medium hover:bg-gold-700 transition-colors uppercase tracking-wider"
                        >
                            View Rooms
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-transparent border border-white text-white font-medium hover:bg-white hover:text-slate-900 transition-colors uppercase tracking-wider"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
