"use client";
import { Building2, Home, Wrench, Map, DollarSign, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
const Services = () => {
  const services = [
    {
      icon: <Building2 size={40} className="text-[#d4af37]" />,
      title: 'المقاولات العامة',
      description:
        'نقدم خدمات المقاولات العامة بأعلى معايير الجودة، بما في ذلك بناء المجمعات الحكومية والمباني التجارية.',
    },
    {
      icon: <Home size={40} className="text-[#d4af37]" />,
      title: 'المباني السكنية',
      description:
        'تصميم وتنفيذ المباني السكنية الحديثة التي تلبي احتياجات العملاء بأفضل المواصفات.',
    },
    {
      icon: <Wrench size={40} className="text-[#d4af37]" />,
      title: 'البنية التحتية',
      description:
        'تنفيذ مشاريع البنية التحتية الكبرى مثل الطرق والجسور باستخدام أحدث التقنيات.',
    },
    {
      icon: <Map size={40} className="text-[#d4af37]" />,
      title: 'التخطيط العمراني',
      description:
        'تقديم حلول تخطيط عمراني متكاملة لتطوير المدن والمجتمعات بشكل مستدام.',
    },
    {
      icon: <DollarSign size={40} className="text-[#d4af37]" />,
      title: 'الاستثمار العقاري',
      description:
        'تطوير مشاريع استثمارية عقارية مربحة تلبي تطلعات المستثمرين والعملاء.',
    },
    {
      icon: <FileText size={40} className="text-[#d4af37]" />,
      title: 'الاستشارات الهندسية',
      description:
        'تقديم استشارات هندسية متخصصة لضمان نجاح المشاريع من التصميم إلى التنفيذ.',
    },
  ];

  return (
    <section className="bg-gradient-to-t from-[#131313] to-black text-white py-16 px-4 md:px-8 lg:px-16" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-4">
            خدماتنا
          </h2>

        </div>

        {/* قائمة الخدمات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              key={index}
              className="bg-[#272727] rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#d4af37] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;