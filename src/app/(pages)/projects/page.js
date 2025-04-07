// pages/Projects.js
"use client";
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectSection from '@/components/ProjectSection'; // تأكد من تعديل المسار

export default function Projects() {
  return (
    <>
      <Head>
        <title>مشاريعنا</title>
        <meta name="description" content="صفحة المشاريع لشركة مقاولات عامة وحكومية" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen text-right font-sans" dir="rtl">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://res.cloudinary.com/do88eynar/image/upload/v1744003847/projects_qibnrh.webp"
              alt="خلفية مشاريعنا"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold text-center mb-6 tracking-tight text-[#d4af37]"
            >
              مشاريعنا
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto"
            >
              نبني مشاريعنا بأعلى معايير الجودة والاحترافية، مع التركيز على التفاصيل لضمان رضا عملائنا.
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-40 h-1 bg-[#d4af37] mx-auto mt-6"
            ></motion.div>
          </div>
        </section>

        {/* استدعاء مكون المشاريع */}
        <ProjectSection 
          title="المشاريع المنجزة" 
          collectionName="completedProjects"
        />
        <ProjectSection 
          title="المشاريع قيد الإنجاز" 
          collectionName="ongoingProjects"
        />

        {/* الخاتمة */}
        <footer className="py-16 px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#d4af37] animate-fade-in">
            معنا، مشروعك في أيدٍ أمينة
          </p>
          <p className="mt-4 text-gray-600">نحول رؤيتك إلى واقع باحترافية ودقة.</p>
        </footer>
      </main>
    </>
  );
}