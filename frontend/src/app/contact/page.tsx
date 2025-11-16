"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Hero from "../component/contact/Hero";
import Footer from "../component/common/Footer";
import { useRouter } from "next/navigation";

export default function ContactPage() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    const router = useRouter();
    // Formik validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required(t("contactPage.errors.name")),
        email: Yup.string().email(t("contactPage.errors.emailInvalid")).required(t("contactPage.errors.email")),
        message: Yup.string().min(10, t("contactPage.errors.messageMin")).required(t("contactPage.errors.message")),
    });

    const handleSubmit = (values: any, { resetForm }: any) => {
        console.log("Form Submitted:", values);
        toast.success(t("contactPage.toastSuccess"));
        resetForm();
    };

    return (
        <div>
            <Hero />
            <div className={`min-h-screen bg-white text-black px-6 md:px-20 py-16 ${isRTL ? "text-right" : "text-left"}`}>

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

                <div className="grid md:grid-cols-2 gap-12">

                    {/* contactPage INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <Phone className="text-[#643F2E]" size={32} />
                            <div>
                                <h3 className="text-xl font-semibold">{t("contactPage.phoneTitle")}</h3>
                                <p className="text-gray-700 text-lg">+91 98765 43210</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <Mail className="text-[#643F2E]" size={32} />
                            <div>
                                <h3 className="text-xl font-semibold">{t("contactPage.emailTitle")}</h3>
                                <p className="text-gray-700 text-lg">support@example.com</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <MapPin className="text-[#643F2E]" size={32} />
                            <div>
                                <h3 className="text-xl font-semibold">{t("contactPage.addressTitle")}</h3>
                                <p className="text-gray-700 text-lg">{t("contactPage.address")}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-[#f9f5f3] p-8 rounded-xl shadow-md border-l-4 border-[#643F2E]"
                    >
                        <Formik
                            initialValues={{ name: "", email: "", message: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form className="space-y-4">

                                    {/* NAME */}
                                    <div>
                                        <label className="font-medium">{t("contactPage.name")}</label>
                                        <Field
                                            name="name"
                                            className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#643F2E]"
                                            placeholder={t("contactPage.namePlaceholder")}
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    {/* EMAIL */}
                                    <div>
                                        <label className="font-medium">{t("contactPage.email")}</label>
                                        <Field
                                            name="email"
                                            type="email"
                                            className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#643F2E]"
                                            placeholder={t("contactPage.emailPlaceholder")}
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    {/* MESSAGE */}
                                    <div>
                                        <label className="font-medium">{t("contactPage.message")}</label>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            rows={6}
                                            className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#643F2E]"
                                            placeholder={t("contactPage.messagePlaceholder")}
                                        />
                                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    {/* SUBMIT BUTTON */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="w-full bg-[#643F2E] text-white py-3 rounded-lg shadow hover:bg-[#4b1f14] transition"
                                    >
                                        {t("contactPage.send")}
                                    </motion.button>

                                </Form>
                            )}
                        </Formik>
                    </motion.div>

                </div>
            </div>
            <Footer />
        </div>

    );
}
