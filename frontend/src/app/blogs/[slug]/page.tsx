"use client";

import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import { BlogFull } from "@/types/services";
import PageHero from "@/app/component/common/PageHero";
import Footer from "@/app/component/common/Footer";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Fetch blog from translations
  const blog = t(`FullBlog.${slug}`, { returnObjects: true }) as BlogFull;
  const notFound = typeof blog !== "object" || !blog.title;

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-3xl">
        {t("blog_not_found")}
      </div>
    );
  }

  return (
    <div>
      <PageHero
        title=""
        bgImage={blog.coverImage}
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
          <span className="text-2xl">{isRTL ? "→" : "←"}</span>
          <span>{t("back")}</span>
        </motion.button>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-[#643F2E]"
        >
          {blog.title}
        </motion.h1>

        {/* SUBTITLE */}
        {blog.subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-700 mt-4 max-w-3xl leading-relaxed"
          >
            {blog.subtitle}
          </motion.p>
        )}

        {/* META */}
        <div className="mt-6 flex items-center gap-4 text-gray-500 text-sm">
          {blog.author && (
            <span className="font-medium text-gray-700">{blog.author}</span>
          )}
          {blog.date && <span>| {blog.date}</span>}
        </div>



        {/* GALLERY */}
        {blog.gallery && blog.gallery.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blog.gallery.map((img: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={img}
                  alt="Gallery image"
                  width={600}
                  height={400}
                  className="rounded-xl shadow object-cover w-full h-64"
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* SECTIONS */}
        <div className="mt-12 space-y-12">
          {blog.sections?.map((sec: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f9f5f3] p-8 rounded-xl shadow-sm border-l-4 border-[#643F2E]"
            >
              {/* TITLE */}
              {sec.title && (
                <h2 className="text-2xl font-semibold text-[#643F2E] mb-3">
                  {sec.title}
                </h2>
              )}

              {/* SUBTITLE */}
              {sec.subtitle && (
                <p className="text-gray-700 font-medium mb-3">{sec.subtitle}</p>
              )}

              {/* TEXT */}
              {sec.text && (
                <p className="text-gray-700 leading-relaxed mb-4">{sec.text}</p>
              )}

              {/* POINTS */}
              {sec.points && (
                <ul className="space-y-2">
                  {sec.points.map((p: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#643F2E] mt-1">•</span>
                      <p className="text-gray-700">{p}</p>
                    </li>
                  ))}
                </ul>
              )}

              {/* IMAGE */}
              {sec.image && (
                <div className="mt-4">
                  <Image
                    src={sec.image}
                    alt="Section"
                    width={900}
                    height={500}
                    className="rounded-lg shadow"
                  />
                </div>
              )}

              {/* QUOTE */}
              {sec.quote && (
                <blockquote className="border-l-4 border-[#643F2E] pl-4 italic text-gray-800 mt-4">
                  {sec.quote}
                </blockquote>
              )}
            </motion.div>
          ))}
        </div>

        {/* CONCLUSION */}
        {blog.conclusion && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-800 mt-16 border-t pt-6"
          >
            {blog.conclusion}
          </motion.p>
        )}
      </div>
      <Footer />
    </div>
  );
}
