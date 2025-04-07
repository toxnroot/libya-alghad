// pages/services.js
"use client";
import Head from "next/head";
import Image from "next/image"; // لإضافة الصور
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "@/components/Services"; // استيراد مكون الخدمات

export default function Rent() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <Head>
        <title>خدماتنا | شركة ليبيا الغد الرائدة</title>
        <meta
          name="description"
          content="اكتشف خدماتنا المتميزة في المقاولات العامة والاستثمار العقاري مع شركة ليبيا الغد الرائدة"
        />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        {/* الصورة كخلفية */}
        <div className="absolute inset-0 z-0">

          <Image
            src="https://res.cloudinary.com/do88eynar/image/upload/v1743978096/2151615117_hozoxn.webp" // استبدل هذا بمسار الصورة الفعلي
            alt="خلفية خدماتنا"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div> {/* طبقة تعتيم */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-center mb-6 tracking-tight text-[#d4af37]"
          >
            خدماتنا المتميزة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto"
          >
            نقدم حلولًا مبتكرة ومتكاملة لتلبية احتياجاتكم بأعلى معايير الجودة
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-40 h-1 bg-[#d4af37] mx-auto mt-6"
          ></motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Services/>
    </>
  );
}