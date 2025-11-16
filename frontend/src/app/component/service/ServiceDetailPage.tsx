"use client";

import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import type { ServiceData } from "@/types/services";
import { Square } from "lucide-react";

export default function ServiceDetailPage() {
    const router = useRouter();
    const { slug } = useParams<{ slug: string }>();
    const { t, i18n } = useTranslation();

    const isRTL = i18n.language === "ar";

    // Convert slug => key
    const serviceKey = slug.replace(/-/g, "_");

    // Return object from i18n as typed ServiceData or undefined
    const service = t(`services2.${serviceKey}`, {
        returnObjects: true,
    }) as unknown as ServiceData | string;

    const isValid = typeof service === "object" && service !== null;

    if (!isValid) {
        return (
            <div className="min-h-screen px-6 md:px-20 py-16">
                <h1 className="text-3xl font-bold text-red-600">
                    {t("service_not_found")}
                </h1>
            </div>
        );
    }

    return (
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
                <span className="text-2xl">
                    {isRTL ? "→" : "←"}
                </span>
                <span>{t("back")}</span>
            </motion.button>

            {/* CONTENT */}
            <div className={isRTL ? "text-right" : "text-left"}>
                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-semibold text-[#643F2E]"
                >
                    {service.title}
                </motion.h1>

                {/* INTRO */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg text-gray-700 mt-4 max-w-3xl leading-relaxed"
                >
                    {service.intro}
                </motion.p>

                {/* SECTIONS */}
                <div className="mt-10 space-y-14">

                    {service.sections?.map((sec, index) => (
                        <div key={index}>

                            {/* SECTION TITLE (Outside Box) */}
                            {sec.title && (
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl font-bold text-[#643F2E] mb-4"
                                >
                                    {sec.title}
                                </motion.h2>
                            )}

                            {/* SECTION BOX */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className=" border-l-4 border-gray-200 p-6 "
                            >

                                {/* DESCRIPTION + BUTTON */}
                                {sec.description && (
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">

                                        <p className="text-[#1E1E1E] text-md font-semibold leading-relaxed max-w-3xl flex gap-3 justify-center items-start">
                                            <span className="mt-2 block w-[12px] h-[12px] bg-[#643F2E] rounded-sm"></span>   {sec.description}
                                        </p>



                                    </div>
                                )}

                                {/* POINT TEXT */}
                                {sec.pointText && (
                                    <p className="text-gray-700 font-semibold text-md  mb-3">
                                        {sec.pointText}
                                    </p>
                                )}

                                {/* BULLET POINTS */}
                                {Array.isArray(sec.points) && sec.points.length > 0 && (
                                    <ul className="">
                                        {sec.points.map((point: string, idx: number) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="text-[#643F2E] mb-1 text-2xl">-</span>
                                                <p className="text-gray-700">{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </motion.div>
                        </div>
                    ))}

                </div>

                {/* CONCLUSION */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg text-gray-800 mt-10 border-t pt-6 border-gray-300"
                >
                    {service.conclusion}
                </motion.p>
            </div>
        </div>
    );
}
