"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BlogCard from "@/app/component/common/BlogCard";
import PageHero from "../component/common/PageHero";
import BgImg from "@/assets/homebg.jpg"
import Footer from "../component/common/Footer";
import { BlogShort } from "@/types/services";

interface HeroBlog {
    title: string;
    subtitle: string;
}

export default function BlogPage() {
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const service = t("blogs_hero", { returnObjects: true }) as HeroBlog;


    const isRTL = i18n.language === "ar";

    // Dummy blog data (replace with API later)
    const blogs = t("ShortBlogs", { returnObjects: true }) as Array<BlogShort>;

    // Pagination Logic
    const blogsPerPage = 9;
    const [page, setPage] = useState(1);

    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const currentBlogs = blogs.slice(startIndex, endIndex);

    console.log(currentBlogs[0].coverImage);

    return (
        <div>
            <PageHero
                title={service.title} subtitle={service.subtitle} bgImage={BgImg.src}
            />
            <div className="min-h-screen bg-white text-black px-6 md:px-20 py-16">

                {/* BACK BUTTON */}
                <motion.button
                    onClick={() => router.back()}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="
                    flex items-center gap-2 mb-10 
                    text-[#643F2E] font-medium 
                    hover:underline hover:opacity-80 
                    transition
                "
                >
                    <span className="text-2xl">{isRTL ? "→" : "←"}</span>
                    <span>{t("back")}</span>
                </motion.button>

                {/* PAGE TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-[#643F2E] text-center md:text-left"
                >
                    {t("blogs_page_title") ?? "Our Blogs"}
                </motion.h1>

                {/* BLOG GRID */}
                <div
                    className={`
                mt-12 grid 
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                gap-10 
                ${isRTL ? "md:flex-row-reverse" : ""}
            `}
                >
                    {currentBlogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            excerpt={blog.excerpt}
                            image={blog.coverImage}
                            author={blog.author}
                            date={blog.date}
                            tags={blog.tags}
                            href={'/blogs/' + blog.slug}
                        />
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="mt-12 flex items-center justify-center gap-4">

                    {/* PREVIOUS BUTTON */}
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                        className="
            px-5 py-2 rounded-lg border border-[#643F2E]
            text-[#643F2E] hover:bg-[#643F2E] hover:text-white 
            transition disabled:opacity-40 disabled:cursor-not-allowed
        "
                    >
                        <span className="flex items-center gap-2">
                            {/* Left Arrow */}
                            <svg
                                className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {t("previous") ?? "Previous"}
                        </span>
                    </button>

                    {/* PAGE NUMBER */}
                    <span className="text-[#643F2E] font-semibold">
                        {page} / {totalPages}
                    </span>

                    {/* NEXT BUTTON */}
                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => p + 1)}
                        className="
            px-5 py-2 rounded-lg border border-[#643F2E]
            text-[#643F2E] hover:bg-[#643F2E] hover:text-white 
            transition disabled:opacity-40 disabled:cursor-not-allowed
        "
                    >
                        <span className="flex items-center gap-2">
                            {t("next") ?? "Next"}

                            {/* Right Arrow */}
                            <svg
                                className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>

                </div>

            </div>
            <Footer />
        </div>
    );
}
