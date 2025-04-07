import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#d4af37] to-[#131313] text-white py-10 px-4 md:px-8 lg:px-16" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* اسم الشركة */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            شركة ليبيا الغد الرائدة للمقاولات العامة والاستثمار العقاري
          </h2>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* بيانات التواصل */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold">تواصلوا معنا</h3>
            <div className="flex items-center gap-3">
              <Phone size={24} />
              <a
                href="tel:+2180927492147"
                className="text-white hover:underline hover:text-gray-200 transition-colors"
              >
                +218 0927492147
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={24} />
              <a
                href="https://wa.me/218927492147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline hover:text-gray-200 transition-colors"
              >
                تواصلوا معنا عبر واتساب
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={24} />
              <a
                href="mailto:Alhamaliabdalmajed@gmail.com"
                className="text-white hover:underline hover:text-gray-200 transition-colors"
              >
                Alhamaliabdalmajed@gmail.com
              </a>
            </div>
          </div>

          {/* الروابط السريعة */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <a
              href="/"
              className="text-white hover:underline hover:text-gray-200 transition-colors"
            >
              الرئيسية
            </a>
            <a
              href="/about"
              className="text-white hover:underline hover:text-gray-200 transition-colors"
              >
              عن الشركة
            </a>
            <a
              href="/projects"
              className="text-white hover:underline hover:text-gray-200 transition-colors"
              >
              المشاريع
            </a>
            <a
              href="/contact"
              className="text-white hover:underline hover:text-gray-200 transition-colors"
              >
              تواصلوا معنا
            </a>
          </div>

          {/* قسم إضافي (يمكن تخصيصه لاحقًا) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold">معلومات إضافية</h3>
            <p className="text-sm text-gray-200">
              شركة ليبيا الغد الرائدة، تأسست عام 2025، نهدف إلى تقديم أفضل الحلول
              في المقاولات والاستثمار العقاري.
            </p>
          </div>
        </div>

        {/* حقوق الطبع */}
        <div className="mt-10 pt-6 border-t border-white/30 text-center">
          <p className="text-sm">
            © 2025 شركة ليبيا الغد الرائدة للمقاولات العامة والاستثمار العقاري.
            جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;