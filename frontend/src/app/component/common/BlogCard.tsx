"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type BlogCardProps = {
    image?: string;
    imageAlt?: string;
    title: string;
    excerpt?: string;
    author?: string;
    date?: string;
    tags?: string[];
    href?: string;
    className?: string;
};

export default function BlogCard({
    image = "/placeholder-article.jpg",
    imageAlt = "Article thumbnail",
    title,
    excerpt = "",
    author,
    date,
    tags = [],
    href = "#",
    className = "",
}: BlogCardProps) {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    // --- Hydration-safe date formatting ---
    const [formattedDate, setFormattedDate] = useState<string>(date ?? "");

    useEffect(() => {
        if (date) {
            setFormattedDate(
                new Date(date).toLocaleDateString(
                    i18n.language === "ar" ? "ar-EG" : "en-US"
                )
            );
        }
    }, [date, i18n.language]);

    // --- Variants ---
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { y: -6, transition: { duration: 0.25 } },
    };

    const imageVariants: Variants = {
        hidden: { scale: 1.15, opacity: 0.9 },
        show: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const tagVariants: Variants = {
        hidden: { opacity: 0, y: 6 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08, duration: 0.28 },
        }),
    };

    return (
        <motion.article
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className={`group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#e9e6e4] ${className}`}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
            <Link href={href} className="block">
                {/* IMAGE */}
                <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden bg-[#f3efe9]">
                    <motion.div
                        variants={imageVariants}
                        className="absolute inset-0"
                    >
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    </motion.div>

                    {/* DATE BADGE — HYDRATION SAFE */}
                    {date && (
                        <div className={`absolute ${isRTL ? "left-4" : "right-4"} top-4`}>
                            <span className="inline-flex items-center gap-2 bg-white/95 text-[#643F2E] text-xs md:text-sm font-medium px-3 py-2 rounded-full shadow-sm">
                                <time dateTime={date}>{formattedDate}</time>
                            </span>
                        </div>
                    )}
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-7">

                    {/* TAGS */}
                    <div className={`flex flex-wrap gap-2 mb-3 ${isRTL ? "justify-end" : ""}`}>
                        {tags.slice(0, 4).map((tag, i) => (
                            <motion.span
                                key={tag + i}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                variants={tagVariants}
                                className="text-xs md:text-sm inline-block bg-white border border-[#efeae6] px-3 py-1 rounded-full text-[#643F2E] font-medium shadow-sm"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#111827] leading-tight mb-2 group-hover:text-[#643F2E] transition-colors">
                        {title}
                    </h3>

                    {/* EXCERPT */}
                    {excerpt && (
                        <p className="text-sm md:text-base text-gray-600 mb-4 max-w-full line-clamp-3">
                            {excerpt}
                        </p>
                    )}

                    {/* META + CTA */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            {author && <span className="font-medium text-gray-800">{author}</span>}
                            {author && date && <span className="hidden md:inline">•</span>}
                            {date && <span className="text-gray-500">{formattedDate}</span>}
                        </div>

                        <div className="ml-auto">
                            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium border border-transparent bg-[#643F2E] text-white group-hover:bg-white group-hover:text-[#643F2E] transition">
                                Read more
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
