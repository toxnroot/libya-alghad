// src/app/contact/page.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitMessage("تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.");
        reset();
      } else {
        throw new Error("فشل الإرسال");
      }
    } catch (error) {
      setSubmitMessage("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-t from-[#131313] to-black text-white min-h-screen font-['Cairo']">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
              {/* الصورة كخلفية */}
              <div className="absolute inset-0 z-0">
      
                <Image
                  src="https://res.cloudinary.com/do88eynar/image/upload/v1743978094/3772_ju5qfz.webp" // استبدل هذا بمسار الصورة الفعلي
                  alt="خلفية تواصل معنا"
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
                  تواصل معنا
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto"
                >
                  نحن هنا لمساعدتكم، تواصلوا معنا الآن للحصول على الدعم أو الاستفسار عن خدماتنا.
                </motion.p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="w-40 h-1 bg-[#d4af37] mx-auto mt-6"
                ></motion.div>
              </div>
            </section>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-16" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* معلومات التواصل */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-6 text-center">
              معلومات التواصل
            </h2>
            <div className="relative mb-12">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></div>
            </div>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 bg-[#272727] rounded-lg p-4 shadow-md hover:bg-[#2a2a2a] transition-colors duration-300"
              >
                <span className="w-12 h-12 flex items-center justify-center bg-[#d4af37] rounded-full text-black font-bold text-xl">
                  📞
                </span>
                <a
                  href="tel:+218927492147"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors text-lg"
                >
                  00218927492147
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 bg-[#272727] rounded-lg p-4 shadow-md hover:bg-[#2a2a2a] transition-colors duration-300"
              >
                <span className="w-12 h-12 flex items-center justify-center bg-[#d4af37] rounded-full text-black font-bold text-xl">
                  💬
                </span>
                <a
                  href="https://wa.me/2180927492147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors text-lg"
                >
                  تواصلوا عبر واتساب
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 bg-[#272727] rounded-lg p-4 shadow-md hover:bg-[#2a2a2a] transition-colors duration-300"
              >
                <span className="w-12 h-12 flex items-center justify-center bg-[#d4af37] rounded-full text-black font-bold text-xl">
                  ✉️
                </span>
                <a
                  href="mailto:Alhamaliabdalmajed@gmail.com"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors text-lg"
                >
                  Alhamaliabdalmajed@gmail.com
                </a>
              </motion.div>
            </div>
          </section>

          {/* نموذج التواصل */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-6 text-center">
              أرسل رسالتك
            </h2>
            <div className="relative mb-12">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-[#d4af37]/20"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2 text-lg">
                  الاسم
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "الاسم مطلوب" })}
                  className="w-full p-3 rounded-lg bg-[#272727] text-white border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2 text-lg">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "البريد الإلكتروني مطلوب",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "البريد الإلكتروني غير صالح",
                    },
                  })}
                  className="w-full p-3 rounded-lg bg-[#272727] text-white border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2 text-lg">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "الرسالة مطلوبة" })}
                  className="w-full p-3 rounded-lg bg-[#272727] text-white border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none h-32 resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#d4af37] hover:bg-[#b89630] text-black"
                }`}
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </button>
              {submitMessage && (
                <p
                  className={`text-center mt-4 ${
                    submitMessage.includes("نجاح") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </motion.form>
          </section>
        </div>
      </div>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26807.422597680477!2d13.152855818883136!3d32.87362900560745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8ed004f355371%3A0xf02eb24c68a83fd!2z2YPZitiq2LTYp9mG2Kcta2l0Y2hhbmE!5e0!3m2!1sar!2seg!4v1743838847732!5m2!1sar!2seg"
  fill='true'
  className="w-[90%] h-96 mt-16 rounded-lg shadow-lg m-auto"
  title="Google Map Location"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </div>
  );
}