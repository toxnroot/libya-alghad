// pages/about.js
"use client";
import { Phone, MessageCircle, Mail } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-gradient-to-t from-[#131313] to-black text-white min-h-screen font-['Cairo']">
      {/* الصورة الرئيسية (Hero Section) */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
              {/* الصورة كخلفية */}
              <div className="absolute inset-0 z-0">
      
                <Image
                  src="https://res.cloudinary.com/do88eynar/image/upload/v1743978098/30163_vnkkdi.webp" // استبدل هذا بمسار الصورة الفعلي
                  alt="خلفية من نحن"
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
                  من نحن
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto"
                >
                  تعرف على شركة ليبيا الغد الرائدة، رائدة في مجال المقاولات العامة والاستثمار العقاري.
                </motion.p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="w-40 h-1 bg-[#d4af37] mx-auto mt-6"
                ></motion.div>
              </div>
            </section>

      {/* المحتوى الرئيسي */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-16" dir="rtl">
        {/* قسم المقدمة */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-4 text-center">
            عن الشركة
          </h2>
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed text-center mt-8 max-w-4xl mx-auto">
            تأسست شركة ليبيا الغد الرائدة للمقاولات العامة والاستثمار العقاري في عام 2025، وهي شركة رائدة في تقديم حلول متكاملة في مجال البناء والتطوير العقاري. نحن ملتزمون بتحقيق أعلى معايير الجودة والابتكار في كل مشروع نقوم به، سواء كان ذلك في بناء المجمعات الحكومية، المباني السكنية، أو مشاريع البنية التحتية الكبرى. هدفنا هو بناء مستقبل مستدام يلبي تطلعات عملائنا ويسهم في تنمية المجتمع.
          </p>
        </section>

        {/* قسم الرؤية والمهمة */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* الرؤية */}
            <div className="relative bg-[#1a1a1a] rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37]">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-4">
                رؤيتنا
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                أن نكون الشركة الرائدة في ليبيا في مجال المقاولات والاستثمار العقاري، من خلال تقديم مشاريع مبتكرة ومستدامة تلبي احتياجات المستقبل.
              </p>
            </div>
            {/* المهمة */}
            <div className="relative bg-[#1a1a1a] rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#d4af37]">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-4">
                مهمتنا
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                تقديم خدمات متميزة في المقاولات العامة والاستثمار العقاري بجودة عالية، مع التركيز على رضا العملاء والابتكار في كل خطوة.
              </p>
            </div>
          </div>
        </section>

        {/* قسم بيانات التواصل */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-8 text-center">
            تواصلوا معنا
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* رقم الهاتف */}
            <div className="flex items-center gap-4 bg-[#272727] rounded-lg p-4 w-full sm:w-80 shadow-md hover:bg-[#2a2a2a] transition-colors duration-300">
              <div className="p-2 bg-[#d4af37] rounded-full">
                <Phone size={24} className="text-black" />
              </div>
              <a
                href="tel:+2180927492147"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                +218 0927492147
              </a>
            </div>
            {/* واتساب */}
            <div className="flex items-center gap-4 bg-[#272727] rounded-lg p-4 w-full sm:w-80 shadow-md hover:bg-[#2a2a2a] transition-colors duration-300">
              <div className="p-2 bg-[#d4af37] rounded-full">
                <MessageCircle size={24} className="text-black" />
              </div>
              <a
                href="https://wa.me/218927492147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                تواصلوا معنا عبر واتساب
              </a>
            </div>
            {/* البريد الإلكتروني */}
            <div className="flex items-center gap-4 bg-[#272727] rounded-lg p-4 w-full sm:w-80 shadow-md hover:bg-[#2a2a2a] transition-colors duration-300">
              <div className="p-2 bg-[#d4af37] rounded-full">
                <Mail size={24} className="text-black" />
              </div>
              <a
                href="mailto:Alhamaliabdalmajed@gmail.com"
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                Alhamaliabdalmajed@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}