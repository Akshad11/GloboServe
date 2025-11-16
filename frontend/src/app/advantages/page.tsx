"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageHero from "../component/common/PageHero";
import Footer from "../component/common/Footer";
import { useRouter } from "next/router";

export default function AdvantagesPage() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    const router = useRouter();
    const advantages = t("advantages", { returnObjects: true }) as any;

    return (
        <div>
            <PageHero
                title={advantages.title}
                subtitle={advantages.subtitle}
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

                {/* LIST OF ADVANTAGES */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {advantages.cards.map((card: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#f9f5f3] rounded-xl p-8 border-l-4 border-[#643F2E] shadow-md"
                        >
                            <h3 className="text-xl font-semibold text-[#643F2E] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CONCLUSION */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-lg text-gray-800 mt-16 border-t pt-8 border-gray-300 max-w-4xl"
                >
                    {advantages.conclusion}
                </motion.p>

            </div>
            <Footer />
        </div>
    );
}
