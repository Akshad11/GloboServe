"use client";

import EmailSubscribe from "../common/EmailSubscribe";
import { Facebook, Twitter, Instagram, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import { setLang } from "@/redux/slices/languageSlice";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
    const dispatch = useAppDispatch();
    const lang = useSelector((state: RootState) => state.language.lang);
    const { t } = useTranslation();

    const [langOpen, setLangOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // SSR-safe neutral fallback
        return (
            <footer className="w-full bg-[#643F2E] text-white pt-12 pb-6 px-6 md:px-20 mt-5">
                <div className="h-10"></div>
            </footer>
        );
    }

    const isRTL = lang === "ar";

    const changeLang = (lng: string) => {
        dispatch(setLang(lng));
        setLangOpen(false);
    };

    return (
        <footer className="w-full bg-[#643F2E] text-white pt-12 pb-6 px-6 md:px-20 mt-5">

            {/* TOP ROW */}
            <div
                className={`flex flex-col md:flex-row gap-6 md:gap-10 justify-end
                ${isRTL ? "md:flex-row-reverse" : ""}`}
            >

                {/* EMAIL SUBSCRIBE */}
                <div className={isRTL ? "md:text-right" : "md:text-left"}>
                    <EmailSubscribe />
                </div>

                {/* LANG + CONTACT */}
                <div
                    className={`flex flex-col md:flex-row items-center gap-6
                    ${isRTL ? "md:flex-row-reverse" : ""}`}
                >

                    {/* LANGUAGE SELECTOR */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg 
                            hover:bg-white hover:text-[#643F2E] transition"
                        >
                            {lang === "ar" ? "العربية" : "English"}
                            <ChevronDown size={18} />
                        </button>

                        {langOpen && (
                            <div
                                className={`absolute mt-2 w-32 bg-white text-black shadow-md rounded-md py-2 z-50
                                ${isRTL ? "right-0" : "left-0"}`}
                            >
                                <button
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() => changeLang("en")}
                                >
                                    English
                                </button>

                                <button
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() => changeLang("ar")}
                                >
                                    العربية
                                </button>
                            </div>
                        )}
                    </div>

                    {/* CONTACT + SOCIAL ICONS */}
                    <div
                        className={`flex flex-col md:flex-row items-center gap-4
                        ${isRTL ? "md:flex-row-reverse" : ""}`}
                    >
                        <p className="text-white/80 text-sm md:text-base">
                            <Link href="/contact"> {t("footer_contact")}</Link>
                        </p>

                        <div className="flex items-center gap-4">
                            <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
                            <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
                            <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
                        </div>
                    </div>

                </div>

            </div>

            {/* DIVIDER */}
            <div className="w-full mt-8 border-t border-white/20"></div>

            {/* LINKS + COPYRIGHT */}
            <div
                className={`flex flex-col md:flex-row justify-between mt-6 gap-4
                ${isRTL ? "md:flex-row-reverse" : ""}`}
            >
                <ul
                    className={`flex flex-wrap items-center gap-8 md:gap-12 text-white/80 text-sm md:text-base
                    ${isRTL ? "md:flex-row-reverse" : ""}`}
                >
                    <li><Link href="/about">{t("footer_about")}</Link> </li>
                    <li><Link href="/strategy">{t("footer_strategy")}</Link> </li>
                    <li><Link href="/advantages">{t("footer_advantages")}</Link> </li>
                    <li><Link href="/responsibility">{t("footer_responsibility")}</Link> </li>
                    <li><Link href="/services">{t("footer_services")}</Link> </li>
                </ul>

                <p className="text-center text-white/70 text-xs md:text-sm">
                    © 2024. {t("footer_all_rights")}
                </p>
            </div>

        </footer>
    );
}
