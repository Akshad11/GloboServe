"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageHero from "../component/common/PageHero";
import Footer from "../component/common/Footer";
import { useRouter } from "next/navigation";

export default function StrategyPage() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    const router = useRouter();
    const strategy = t("strategy", { returnObjects: true }) as any;

    return (
        <div>
            <PageHero
                title={strategy.title}
                subtitle={strategy.subtitle}
            />
            <div className={`min-h-screen bg-white px-6 md:px-20 py-16 ${isRTL ? "text-right" : "text-left"}`}>
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
                    <span className="text-2xl">
                        {isRTL ? "→" : "←"}
                    </span>
                    <span>{t("back")}</span>
                </motion.button>

                {/* SECTIONS */}
                <div className="space-y-16">
                    {strategy.sections?.map((sec: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-[#f9f5f3] border-l-4 border-[#643F2E] p-8 rounded-xl shadow-md"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-[#643F2E] mb-4">
                                {sec.title}
                            </h2>

                            {sec.text && (
                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                    {sec.text}
                                </p>
                            )}

                            {sec.points && (
                                <ul className="space-y-3 mt-4">
                                    {sec.points.map((p: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#643F2E] text-xl">•</span>
                                            <p className="text-gray-700">{p}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* FINAL STATEMENT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-lg text-gray-800 mt-16 border-t pt-8 border-gray-300 max-w-4xl"
                >
                    {strategy.conclusion}
                </motion.p>
            </div>
            <Footer />
        </div>
    );
}
