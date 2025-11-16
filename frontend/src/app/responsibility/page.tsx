"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageHero from "../component/common/PageHero";
import Footer from "../component/common/Footer";

export default function SocialResponsibilityPage() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    const resp = t("responsibility", { returnObjects: true }) as any;

    return (
        <div>
            <PageHero
                title={resp.title}
                subtitle={resp.subtitle}
            />
            <div className={`min-h-screen bg-white px-6 md:px-20 py-16 ${isRTL ? "text-right" : "text-left"}`}>

                {/* THREE PILLARS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    {resp.pillars.map((pillar: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#f9f5f3] p-8 rounded-xl shadow border-l-4 border-[#643F2E]"
                        >
                            <h3 className="text-xl font-semibold text-[#643F2E] mb-3">
                                {pillar.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">{pillar.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* HIGHLIGHT BANNER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#4B2615] text-white rounded-xl py-12 px-10 mb-20 shadow-lg text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {resp.banner.title}
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                        {resp.banner.text}
                    </p>
                </motion.div>

                {/* COMMITMENTS LIST */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#643F2E] mb-6">
                        {resp.commitment_title}
                    </h2>

                    <ul className="space-y-4 text-gray-800 text-lg">
                        {resp.commitments.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="text-[#643F2E] mt-1">•</span>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* CONCLUSION */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-lg text-gray-800 mt-10 border-t pt-8 border-gray-300 max-w-4xl"
                >
                    {resp.conclusion}
                </motion.p>
            </div>
            <Footer />
        </div>
    );
}
