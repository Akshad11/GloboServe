"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamCard from "../common/TeamCard";

interface TeamCarouselProps {
    members: {
        image: string;
        name: string;
        position: string;
        whatsappLink?: string;
        callLink?: string;
        emailLink?: string;
    }[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
    const [index, setIndex] = useState(0);

    // RESPONSIVE NUMBER OF VISIBLE CARDS
    const visibleCards =
        typeof window !== "undefined"
            ? window.innerWidth >= 1024
                ? 3
                : window.innerWidth >= 640
                    ? 2
                    : 1
            : 3;

    const nextSlide = () => setIndex((prev) => (prev + 1) % members.length);
    const prevSlide = () =>
        setIndex((prev) => (prev - 1 + members.length) % members.length);

    const currentCards = Array.from({ length: visibleCards }).map((_, i) => {
        const memberIndex = (index + i) % members.length;
        return members[memberIndex];
    });

    return (
        <div className="relative w-full overflow-hidden py-10">

            {/* LEFT ARROW */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 hover:scale-110 transition"
            >
                <ChevronLeft size={34} className="text-[#643F2E]" />
            </button>

            {/* RIGHT ARROW */}
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 hover:scale-110 transition"
            >
                <ChevronRight size={34} className="text-[#643F2E]" />
            </button>

            {/* CARDS WRAPPER */}
            <div className="w-full flex justify-center items-center">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex gap-8 px-8"
                    >
                        {currentCards.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <TeamCard {...member} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>
        </div>
    );
}
