export const languages = ["en", "ar"] as const;

export const defaultLang = "en";

export const i18nConfig = {
    fallbackLng: defaultLang,
    supportedLngs: languages,
    defaultNS: "common",
};
