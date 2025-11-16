"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import TestimonialCard from "../common/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Avatarimg from "../../../assets/person1.png";

export default function Testimonials() {
    const { t } = useTranslation();

    const testimonialList = [
        {
            image: Avatarimg.src,
            message: t("testimonials.t1_message"),
            name: t("testimonials.t1_name"),
            position: t("testimonials.t1_position")
        },
        {
            image: Avatarimg.src,
            message: t("testimonials.t2_message"),
            name: t("testimonials.t2_name"),
            position: t("testimonials.t2_position")
        },
        {
            image: Avatarimg.src,
            message: t("testimonials.t3_message"),
            name: t("testimonials.t3_name"),
            position: t("testimonials.t3_position")
        }
    ];

    const [active, setActive] = useState(0);

    const next = () => setActive((prev) => (prev + 1) % testimonialList.length);
    const prev = () => setActive((prev) => (prev - 1 + testimonialList.length) % testimonialList.length);

    const isRTL = typeof window !== "undefined" && document.documentElement.dir === "rtl";

    return (
        <div className="min-h-svh bg-[#4B2615] px-6 text-white">

            {/* TOP ROW (Title + Description) */}
            <div
                className="
                flex flex-col md:flex-row md:justify-between md:items-start
                pt-6 md:pt-10
                ltr:pl-4 ltr:md:pl-12 ltr:lg:pl-42
                rtl:pr-4 rtl:md:pr-12 rtl:lg:pr-42
            ">
                {/* LEFT SIDE */}
                <div className="w-full md:w-[50%]">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t("testimonials_section_title")}
                    </motion.h1>

                    <motion.p
                        className="text-gray-200 mt-3 text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {t("testimonials_section_description")}
                    </motion.p>
                </div>

                {/* RIGHT SIDE EMPTY */}
                <div className="hidden md:block w-[50%]"></div>
            </div>

            {/* TESTIMONIAL CARD */}
            <div className="flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -40, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full flex justify-center"
                    >
                        <TestimonialCard
                            image={testimonialList[active].image}
                            message={testimonialList[active].message}
                            name={testimonialList[active].name}
                            position={testimonialList[active].position}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* BOTTOM RIGHT BUTTONS */}
            <div className={`w-full flex gap-4  ${isRTL ? "justify-start" : "justify-end"}`}>

                {/* PREV BUTTON (RTL flips icons automatically) */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={isRTL ? next : prev}
                    className="
                        w-12 h-12 flex items-center justify-center
                        border border-white rounded-full
                        text-white 
                        hover:bg-white hover:text-[#643F2E]
                        transition-all duration-300
                    "
                >
                    {isRTL ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
                </motion.button>

                {/* NEXT BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={isRTL ? prev : next}
                    className="
                        w-12 h-12 flex items-center justify-center
                        border border-white rounded-full
                        text-white 
                        hover:bg-white hover:text-[#643F2E]
                        transition-all duration-300
                    "
                >
                    {isRTL ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                </motion.button>

            </div>
        </div>
    );
}
