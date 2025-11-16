"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "../component/common/PageHero";
import Footer from "../component/common/Footer";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    const router = useRouter();
    const services = t("servicesList", { returnObjects: true }) as any[];

    return (
        <div>
            <PageHero
                title={t("our_services.title")}
                subtitle={t("our_services.subtitle")}
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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((srv: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#f9f5f3] rounded-xl border-l-4 border-[#643F2E] shadow hover:shadow-xl transition p-7"
                        >
                            <h3 className="text-xl font-semibold text-[#643F2E] mb-3">
                                {srv.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                {srv.short}
                            </p>

                            <Link href={`/service/${srv.slug}`}>
                                <button className="px-5 py-2 text-sm bg-[#643F2E] text-white rounded-lg hover:bg-white hover:text-[#643F2E] border border-[#643F2E] transition">
                                    {t("our_services.read_more")}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
