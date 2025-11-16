"use client";

import { motion } from "framer-motion";
import bgImg from "../../../assets/homebg.jpg"
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
    height?: string;
}

export default function PageHero({
    title,
    subtitle,
    bgImage,
    height = "min-h-svh"
}: PageHeroProps) {

    const { i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    return (
        <div
            style={{
                backgroundImage: `url(${bgImage ?? bgImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className={`relative w-full ${height}`}
        >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#4B2615]/70"></div>

            <div className="relative z-10">
                <Navbar />

                {/* TEXT BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className={`
                        px-6 md:px-20 mt-20 md:mt-28
                        text-white 
                        ${isRTL ? "text-right" : "text-left"}
                    `}
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-4xl md:text-6xl font-extrabold leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="mt-4 text-lg md:text-2xl text-white/90 max-w-3xl"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
