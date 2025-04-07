'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';

// بيانات الصور والنصوص
const images = ['https://res.cloudinary.com/do88eynar/image/upload/v1744003852/1_noxa7p.webp', 'https://res.cloudinary.com/do88eynar/image/upload/v1744003850/2_wx6txw.webp', 'https://res.cloudinary.com/do88eynar/image/upload/v1744003850/3_ghe86f.webp', 'https://res.cloudinary.com/do88eynar/image/upload/v1744004147/970_1_wllbum.webp'];
const text = [
  ['ليبيا الغد', 'الرؤية المستقبلية'],
  ['تشييدات جديدة', 'استثمر في المستقبل'],
  ['فرص استثمارية', 'حقق أحلامك'],
  ['عقارات مميزة', 'اختيارات متنوعة'],
];

// إعدادات الأنيميشن للعنوان الرئيسي
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// إعدادات الأنيميشن للعنوان الفرعي
const subtitleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
  },
};

export default function AutoSlider() {
  return (
    <div className="w-full h-[500px] overflow-hidden relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // التبديل كل 3 ثوانٍ
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-[500px]">
              {/* الصورة */}
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />

              {/* طبقة التدرج والنصوص */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                style={{
                  background: 'linear-gradient(to top, rgb(19, 19, 19,0.9), transparent)',
                }}
              >
                <motion.h1
                  className="text-[#d4af37] text-4xl md:text-5xl font-bold text-nowrap"
                  initial="hidden"
                  animate="visible"
                  variants={titleVariants}
                >
                  {text[index][0]}
                </motion.h1>
                <motion.p
                  className="text-[#d4af37] text-2xl md:text-3xl mt-2 text-nowrap"
                  initial="hidden"
                  animate="visible"
                  variants={subtitleVariants}
                >
                  {text[index][1]}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}