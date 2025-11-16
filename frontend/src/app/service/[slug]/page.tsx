"use client";

import Footer from "@/app/component/common/Footer";
import PageHero from "@/app/component/common/PageHero";
import ServiceDetailPage from "@/app/component/service/ServiceDetailPage";
import { useTranslation } from "react-i18next";
import BgImg from "@/assets/homebg.jpg"

interface HeroService {
  title: string;
  subtitle: string;
}

export default function Home() {
  const { t } = useTranslation();
  const service = t("hero_services", { returnObjects: true }) as HeroService;

  return (
    <div>
      <PageHero title={service.title} subtitle={service.subtitle} bgImage={BgImg.src} />
      <ServiceDetailPage />
      <Footer />
    </div>
  );
}
