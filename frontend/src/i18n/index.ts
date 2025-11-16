"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./resources/en.json";
import ar from "./resources/ar.json";

if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
        resources: {
            en: { translation: en },
            ar: { translation: ar },
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: { escapeValue: false },

        returnObjects: true,
    });
}

export default i18n;
