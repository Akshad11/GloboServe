"use client";

import { useTranslation } from "react-i18next";
import Avatarimg from "../../../assets/person1.png";
import { motion } from "framer-motion";
import TeamCarousel from "../common/TeamCarousel";

export default function Teams() {
    const { t } = useTranslation();

    const teamMembers = [
        {
            image: Avatarimg.src,
            name: "John David",
            position: "Senior Advisor",
            whatsappLink: "https://wa.me/1111111111",
            callLink: "tel:1111111111",
            emailLink: "mailto:test@example.com"
        },
        {
            image: Avatarimg.src,
            name: "Sarah Miles",
            position: "Legal Expert"
        },
        {
            image: Avatarimg.src,
            name: "Adam S.",
            position: "Consultant"
        },
        {
            image: Avatarimg.src,
            name: "Michael Lee",
            position: "Strategic Manager"
        }
    ];

    return (
        <div className="min-h-screen w-full py-16 px-6 md:px-16 bg-white">

            {/* SECTION TITLE */}
            <motion.h1
                className="text-3xl md:text-4xl font-bold text-[#643F2E] text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {t("team_section_title")}
            </motion.h1>

            {/* SECTION DESCRIPTION */}
            <motion.p
                className="text-gray-600 text-center mt-3 max-w-3xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {t("team_section_description")}
            </motion.p>

            {/* TEAM CAROUSEL SECTION */}
            <motion.div
                className="flex justify-center w-full mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <TeamCarousel members={teamMembers} />
            </motion.div>

        </div>
    );
}
