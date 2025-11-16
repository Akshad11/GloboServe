"use client";

import { useEffect } from "react";

import i18n from "@/i18n";
import { useAppSelector } from "@/redux/hooks";

export default function useSyncLanguage() {
    const lang = useAppSelector((state) => state.language.lang);

    useEffect(() => {
        if (!lang) return;

        // 👈 Sync to i18next
        i18n.changeLanguage(lang);

        // 👈 Sync direction
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);
}
