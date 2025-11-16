"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import DevImg from "@/assets/person1.png";
import Team1 from "@/assets/person1.png";
import Team2 from "@/assets/person1.png";
import Team3 from "@/assets/person1.png";
import Team4 from "@/assets/person1.png";
import Hero from "../component/aboutPage/Hero";
import Footer from "../component/common/Footer";
import { useRouter } from "next/navigation";

export default function AboutUsPage() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    const router = useRouter();
    const teamMembers = [
        { name: t("aboutPage.team_member1_name"), role: t("aboutPage.team_member1_role"), image: Team1 },
        { name: t("aboutPage.team_member2_name"), role: t("aboutPage.team_member2_role"), image: Team2 },
        { name: t("aboutPage.team_member3_name"), role: t("aboutPage.team_member3_role"), image: Team3 },
        { name: t("aboutPage.team_member4_name"), role: t("aboutPage.team_member4_role"), image: Team4 },
    ];

    const stats = [
        { label: t("aboutPage.stat_clients"), value: 1200 },
        { label: t("aboutPage.stat_cases"), value: 3500 },
        { label: t("aboutPage.stat_experience"), value: 18 },
        { label: t("aboutPage.stat_countries"), value: 12 },
    ];

    return (
        <div>
            <Hero />
            <div className={`min-h-screen bg-white text-black px-6 md:px-20 py-16 ${isRTL ? "text-right" : "text-left"}`}>

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

                {/* WHO WE ARE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 space-y-4"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#643F2E]">{t("aboutPage.who_title")}</h2>
                    <p className="text-gray-700 leading-relaxed max-w-4xl text-lg">{t("aboutPage.who_text")}</p>
                </motion.div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="p-6 bg-[#f9f5f3] rounded-xl border-l-4 border-[#643F2E] shadow"
                        >
                            <motion.h3
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl font-bold text-[#643F2E]"
                            >
                                {stat.value}+
                            </motion.h3>
                            <p className="text-gray-700 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* MISSION + VISION */}
                <div className="grid md:grid-cols-2 gap-10 mb-16">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#f9f5f3] border-l-4 border-[#643F2E] p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-2xl font-semibold text-[#643F2E] mb-3">{t("aboutPage.mission_title")}</h3>
                        <p className="text-gray-700">{t("aboutPage.mission_text")}</p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#f9f5f3] border-l-4 border-[#643F2E] p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-2xl font-semibold text-[#643F2E] mb-3">{t("aboutPage.vision_title")}</h3>
                        <p className="text-gray-700">{t("aboutPage.vision_text")}</p>
                    </motion.div>
                </div>

                {/* TEAM SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#643F2E] mb-8">{t("aboutPage.team_title")}</h2>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ${isRTL ? "md:flex-row-reverse" : ""}`}>
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-[#f9f5f3] p-6 rounded-xl shadow text-center"
                            >
                                <div className="w-32 h-32 mx-auto relative">
                                    <Image src={member.image} alt={member.name} fill className="rounded-full object-cover shadow" />
                                </div>
                                <h3 className="text-xl font-bold text-[#643F2E] mt-4">{member.name}</h3>
                                <p className="text-gray-700">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* DEVELOPER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#f9f5f3] p-8 rounded-xl shadow-md border-l-4 border-[#643F2E]"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#643F2E] mb-6">
                        {t("aboutPage.dev_title")}
                    </h2>

                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isRTL ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-40 h-40 relative">
                            <Image src={DevImg} alt="Developer" fill className="rounded-full object-cover shadow-lg" />
                        </div>

                        <p className="max-w-3xl text-gray-700 text-lg leading-relaxed">
                            {t("aboutPage.dev_text")}
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>

    );
}
