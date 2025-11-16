"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/i18n";
import Link from "next/link";
import { getServices } from "@/app/lib/strapi/services";

// Use translation KEYS instead of English phrases
const SERVICE_LIST = [
    "legal_consultation",
    "foreign_investment",
    "contracts",
    "defense_cases",
    "company_services",
    "banks_finance",
    "arbitration",
    "notarization",
    "insurance",
    "governance",
    "liquidation",
    "internal_regulations",
    "intellectual_property",
    "restructuring",
    "establishing_companies",
    "commercial_agencies",
    "vision_2030",
    "estates",
];

export default function Navbar() {
    const [serviceOpen, setServiceOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const [services, setServices] = useState([]);

    // useEffect(() => {
    //     async function load() {
    //         const data = await getServices("en");
    //         console.log("Fetched services:", data); // 🔥 console log output
    //         setServices(data);
    //     }
    //     load();
    // }, []);

    // useEffect(() => {
    //     async function load() {
    //         let locale = 'en';
    //         const res = await fetch(
    //             `${process.env.NEXT_PUBLIC_API_URL}/api/services?locale=${locale}&pagination[pageSize]=100&populate=*`
    //         );

    //         const data = await res.json();

    //         console.log("Services (EN only):", data.data);

    //         setServices(data.data);
    //     }

    //     load();
    // }, []);

    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    // Set direction on language change
    useEffect(() => {
        document.documentElement.dir = isRTL ? "rtl" : "ltr";
    }, [i18n.language]);

    return (
        <header className="relative text-white z-50">

            {/* TOP NAVBAR */}
            <div className="container mx-auto flex items-center justify-between py-4 px-4">

                {/* LEFT: LOGO */}
                <div></div>

                {/* CENTER NAV LINKS (Desktop) */}
                {!searchOpen && (
                    <ul
                        className={`
                            hidden md:flex items-center gap-10 font-medium
                            ${isRTL ? "flex-row-reverse" : ""}
                        `}
                    >
                        <li className="hover:text-gray-300 cursor-pointer">
                            <Link href="/">{t("home")}</Link>
                        </li>
                        <li className="hover:text-gray-300 cursor-pointer">
                            <Link href="/about">{t("about")}</Link>
                        </li>
                        {/* SERVICES (hover only) */}
                        <li
                            className="relative cursor-pointer"
                            onMouseEnter={() => setServiceOpen(true)}
                            onMouseLeave={() => setServiceOpen(false)}
                        >
                            <div className="flex items-center gap-1 hover:text-gray-300">
                                {t("service")}
                                {serviceOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </div>
                        </li>

                        <li className="hover:text-gray-300 cursor-pointer">
                            <Link href="/team">{t("team")}</Link>
                        </li>
                        <li className="hover:text-gray-300 cursor-pointer">
                            <Link href="/blogs">{t("blogs")}</Link>
                        </li>

                        <li className="hover:text-gray-300 cursor-pointer">
                            <Link href="/contact">{t("contact")}</Link>
                        </li>
                    </ul>
                )}

                {/* RIGHT SIDE (Search + CTA) */}
                <div
                    className={`hidden md:flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                    {!searchOpen && (
                        <button
                            className="hover:text-gray-300"
                            onClick={() => setSearchOpen(true)}
                        >
                            <Search />
                        </button>
                    )}

                    {searchOpen && (
                        <div className="flex items-center gap-3 w-80">
                            <input
                                autoFocus
                                placeholder={t("search_placeholder")}
                                className="text-white bg-transparent border-b border-white px-4 py-2 w-full focus:outline-none"
                            />
                            <button onClick={() => setSearchOpen(false)} className="text-white">
                                <X size={24} />
                            </button>
                        </div>
                    )}

                    <button className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-[#643F2E] transition">
                        {t("book")}
                    </button>
                </div>

                {/* MOBILE MENU ICON */}
                <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* ██████████████████████████████ */}
            {/*     MEGA MENU CENTERED (DESKTOP) */}
            {/* ██████████████████████████████ */}

            <AnimatePresence>
                {serviceOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setServiceOpen(true)}
                        onMouseLeave={() => setServiceOpen(false)}
                        className="
                            hidden md:grid absolute left-1/2 -translate-x-1/2 
                            top-full mt-4 bg-[#643F2E] text-white
                            w-[90vw] max-h-[60vh] overflow-y-auto
                            p-8 rounded-md shadow-xl
                            grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
                            gap-6 z-50
                        "
                        dir={isRTL ? "rtl" : "ltr"}
                    >
                        {SERVICE_LIST.map((key, index) => {
                            const service = t(`services.${key}`, { returnObjects: true }) as {
                                title: string;
                                link: string;
                            };

                            return (
                                <motion.a
                                    key={key}
                                    href={service.link}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                    className="text-lg hover:text-yellow-200 cursor-pointer block"
                                >
                                    {service.title}
                                </motion.a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ████████████████████████████ */}
            {/*         MOBILE MENU         */}
            {/* ████████████████████████████ */}

            {mobileMenu && (
                <div
                    className={`
                        md:hidden bg-[#643F2E] text-white border-t py-4 px-4 space-y-4
                        ${isRTL ? "text-right" : ""}
                    `}
                >
                    <p className="hover:text-gray-300">{t("about")}</p>

                    {/* SERVICES DROPDOWN */}
                    <div>
                        <button
                            className="flex items-center gap-2 py-2"
                            onClick={() => setServiceOpen(!serviceOpen)}
                        >
                            {t("service")}
                            {serviceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        {serviceOpen && (
                            <div
                                className={`
                                    py-3 bg-[#4B2615] rounded-md max-h-[50vh] overflow-y-auto
                                    ${isRTL ? "text-right pr-4" : "pl-4"}
                                `}
                            >
                                {SERVICE_LIST.map((key, index) => {
                                    const service = t(`services.${key}`, { returnObjects: true }) as {
                                        title: string;
                                        link: string;
                                    };

                                    return (
                                        <motion.a
                                            key={key}
                                            href={service.link}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.03 }}
                                            className="text-sm hover:text-yellow-200 cursor-pointer block"
                                        >
                                             <Link href={service.link}>{service.title}</Link>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <p className="hover:text-gray-300">{t("team")}</p>
                    <p className="hover:text-gray-300">{t("blogs")}</p>
                    <p className="hover:text-gray-300">{t("contact")}</p>

                    <button className="border border-white px-5 py-2 rounded-md mt-4">
                        {t("book")}
                    </button>
                </div>
            )}
        </header>
    );
}
