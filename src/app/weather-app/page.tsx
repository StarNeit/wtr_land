'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from "@/app/weather-app/components/HeroSection";
import UsabilitySection from "@/app/weather-app/components/UsabilitySection";
import AccurateSection from "@/app/weather-app/components/AccurateSection";
import HistoricSection from "@/app/weather-app/components/HistoricSection";
import ContactSection from "@/app/weather-app/components/ContactSection";
import FooterSection from "@/app/weather-app/components/FooterSection";

export default function WeatherApp() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <div className="h-screen bg-[url('/images/sky.jpg')] bg-100 bg-no-repeat fixed top-0 left-0 right-0" />
      <div className="relative">
        <HeroSection />
        <UsabilitySection />
        <AccurateSection />
        <HistoricSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
