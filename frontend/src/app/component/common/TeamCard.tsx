"use client";

import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface TeamCardProps {
    image: string;
    name: string;
    position: string;
    whatsappLink?: string;
    callLink?: string;
    emailLink?: string;
}

export default function TeamCard({
    image,
    name,
    position,
    whatsappLink = "#",
    callLink = "#",
    emailLink = "#"
}: TeamCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="
        w-[280px] h-[350px]
        bg-white rounded-lg shadow-md overflow-hidden
        flex flex-col items-center cursor-pointer
        sm:w-[250px] sm:h-[320px]
        xs:w-[220px] xs:h-[300px]
        relative group
      "
        >
            {/* IMAGE */}
            <div className="w-full h-[230px] sm:h-[190px] bg-[#643F2E] xs:h-[210px] relative overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full absolute"
                >
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>

            {/* NAME */}
            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="text-[#643F2E] text-lg font-semibold mt-3 text-center px-2"
            >
                {name}
            </motion.h3>

            {/* POSITION */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="text-gray-400 text-sm mt-1 text-center px-2"
            >
                {position}
            </motion.p>

            {/* ICONS */}
            <motion.div
                className="flex items-center justify-center gap-5 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
            >
                {/* WhatsApp */}
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href={whatsappLink}
                    target="_blank"
                >
                    <MessageCircle size={22} className="text-[#643F2E]" />
                </motion.a>

                {/* Call */}
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href={callLink}
                >
                    <Phone size={22} className="text-[#643F2E]" />
                </motion.a>

                {/* Email */}
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href={emailLink}
                >
                    <Mail size={22} className="text-[#643F2E]" />
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
