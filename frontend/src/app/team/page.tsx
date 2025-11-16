"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Team1 from "@/assets/person1.png";
import Team2 from "@/assets/person1.png";
import Team3 from "@/assets/person1.png";
import Team4 from "@/assets/person1.png";
import Hero from "../component/team/Hero";
import Footer from "../component/common/Footer";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useRouter } from "next/router";

export default function TeamPage() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    const router = useRouter();
    const teamMembers = [
        { name: t("teamPage.members.1.name"), role: t("teamPage.members.1.role"), image: Team1 },
        { name: t("teamPage.members.2.name"), role: t("teamPage.members.2.role"), image: Team2 },
        { name: t("teamPage.members.3.name"), role: t("teamPage.members.3.role"), image: Team3 },
        { name: t("teamPage.members.4.name"), role: t("teamPage.members.4.role"), image: Team4 },
    ];

    return (
        <div>
            <Hero />
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

                {/* teamPage GRID */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10`}>
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group bg-[#f9f5f3] rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center border-b-4 border-[#643F2E] hover:shadow-xl transition"
                        >
                            {/* IMAGE */}
                            <div className="w-36 h-36 relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover shadow-md group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* NAME */}
                            <h3 className="text-xl font-bold text-[#643F2E] mt-4 group-hover:underline">
                                {member.name}
                            </h3>

                            {/* ROLE */}
                            <p className="text-gray-600">{member.role}</p>

                            {/* SOCIALS */}
                            <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition">
                                <a href="#" className="text-[#643F2E] hover:text-black transition"><Phone /></a>
                                <a href="#" className="text-[#643F2E] hover:text-black transition"><Mail /></a>
                                <a href="#" className="text-[#643F2E] hover:text-black transition"><MessageCircle /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    );
}
