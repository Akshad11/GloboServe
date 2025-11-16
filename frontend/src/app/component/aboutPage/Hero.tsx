"use client";

import { useTranslation } from "react-i18next";
import bgImg from "../../../assets/homebg.jpg";
import Navbar from "../common/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    /* -------------------------
       PARALLAX SCROLL EFFECT
    --------------------------*/
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY * 0.3);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* -------------------------
       TYPING TEXT EFFECT
    --------------------------*/
    const typingText = t("aboutPage.subtitle");

    return (
        <div
            style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // smooth parallax
                transform: `translateY(${offset * 0.2}px)`
            }}
            className="relative w-full min-h-svh"
        >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#4B2615]/70 min-h-svh"></div>

            <div className="relative z-10">
                <Navbar />

                {/* HERO CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`
                        flex flex-col justify-center 
                        min-h-[70vh] 
                        px-8 md:px-20 
                        ${isRTL ? "text-right" : "text-left"}
                    `}
                >
                    {/* HERO TITLE */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="
                            text-4xl md:text-6xl lg:text-7xl 
                            font-extrabold leading-tight 
                            text-white drop-shadow-xl
                        "
                    >
                        {t("aboutPage.title")}
                    </motion.h1>

                    {/* TYPING SUBTITLE */}
                    <p
                        className="
                            mt-6 text-lg md:text-2xl lg:text-3xl 
                            text-white/90 max-w-4xl leading-relaxed 
                            whitespace-pre-wrap min-h-[70px]
                        "
                    >
                        {typingText}
                        <span className="border-r-2 border-white ml-1 animate-pulse"></span>
                    </p>


                </motion.div>
            </div>
        </div>
    );
}
