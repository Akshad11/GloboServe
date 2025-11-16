"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface CarouselProps {
    slides: {
        header: string;
        description: string;
        image: string;
        imageSize: { width: number; height: number };
        readMore: string;
    }[];
}

export default function ImageCarousel({ slides }: CarouselProps) {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

    const isRTL = mounted && document.documentElement.dir === "rtl";

    return (
        <div className="w-full h-auto md:h-[500px] flex flex-col md:flex-row relative overflow-hidden">

            {/* ──────────────────────────────────────────────────────────── */}
            {/* DOTS + ARROW — FIXED TO FULL CAROUSEL (NEVER MOVES)         */}
            {/* ──────────────────────────────────────────────────────────── */}
            <div
                className={`
                    hidden md:flex flex-col items-center gap-6 
                    absolute top-1/2 -translate-y-1/2 z-50
                    ${isRTL ? "right-6" : "left-6"}
                `}
            >
                {/* ARROW */}
                <motion.button
                    onClick={nextSlide}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full border border-white/50"
                >
                    <ChevronDown size={20} className="text-white rotate-180" />
                </motion.button>

                {/* DOTS */}
                {slides.map((_, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setCurrent(index)}
                        animate={{
                            scale: current === index ? 1.3 : 1,
                            opacity: current === index ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.25 }}
                        className="h-3 w-3 bg-white rounded-full cursor-pointer"
                    />
                ))}
            </div>

            {/* ──────────────────────────────────────────────────────────── */}
            {/* LEFT — TEXT AREA                                            */}
            {/* ──────────────────────────────────────────────────────────── */}
            <div
                className="
                    w-full md:w-[70%]
                    px-6 md:px-28
                    py-10
                    flex flex-col justify-center
                    text-white
                "
            >
                <div className={`${isRTL ? "mr-20" : "ml-20"} space-y-6`}>

                    {/* HEADER */}
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={slides[current].header}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-semibold leading-tight max-w-[550px]"
                        >
                            {t(slides[current].header)}
                        </motion.h2>
                    </AnimatePresence>

                    {/* DESCRIPTION */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={slides[current].description}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-white/90 text-base md:text-lg max-w-[600px] leading-relaxed"
                        >
                            {t(slides[current].description)}
                        </motion.p>
                    </AnimatePresence>

                    {/* BUTTON */}
                    <AnimatePresence mode="wait">
                        <motion.a
                            key={slides[current].readMore}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            href={slides[current].readMore}
                            className="inline-block px-6 py-3 border bg-white text-[#643F2E] rounded-md hover:bg-[#643F2E] hover:text-white transition"
                        >
                            {t("read_more")}
                        </motion.a>
                    </AnimatePresence>

                </div>
            </div>

            {/* ──────────────────────────────────────────────────────────── */}
            {/* RIGHT — IMAGE AREA                                          */}
            {/* ──────────────────────────────────────────────────────────── */}
            <div className="w-full md:w-[30%] flex flex-col items-center justify-center py-6 md:py-0">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={slides[current].image}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: slides[current].imageSize.width,
                            height: slides[current].imageSize.height,
                        }}
                        className="relative"
                    >
                        <Image
                            src={slides[current].image}
                            alt="carousel-img"
                            fill
                            className="object-cover rounded-md shadow-lg bg-[#643F2E]"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* MOBILE DOTS */}
                <div className="flex md:hidden justify-center items-center gap-4 mt-6">
                    <motion.button
                        onClick={nextSlide}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full border border-white/40"
                    >
                        <ChevronDown size={18} className="text-white rotate-180" />
                    </motion.button>

                    {slides.map((_, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setCurrent(index)}
                            animate={{
                                scale: current === index ? 1.2 : 1,
                                opacity: current === index ? 1 : 0.4,
                            }}
                            className="h-3 w-3 bg-white rounded-full cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
