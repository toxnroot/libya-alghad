import Image from "next/image";

const Info = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#131313] to-black text-white py-16 px-4 md:px-8 lg:px-16"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d4af37] mb-8">
          شركة ليبيا الغد الرائدة للمقاولات العامة والاستثمار العقاري
        </h2>

        {/* المحتوى والصورة */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* النص */}
          <div className="lg:w-1/2 text-right">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              شركة ليبيا الغد الرائدة للمقاولات العامة والاستثمار العقاري هي إحدى
              الشركات الوطنية الرائدة في ليبيا، تأسست في عام 2025 بهدف تقديم حلول
              متكاملة في مجال المقاولات العامة والتطوير العقاري. تتميز الشركة
              بالتزامها بأعلى معايير الجودة والكفاءة، حيث تسعى لتلبية احتياجات
              السوق الليبي من خلال تنفيذ مشاريع حكومية وخاصة بمستوى عالٍ من
              الاحترافية.
              <br />
              <br />
              تشمل خدمات الشركة تصميم وتنفيذ المشاريع الإنشائية الكبرى، بما في ذلك
              المباني السكنية والتجارية، المجمعات الحكومية، والبنية التحتية،
              بالإضافة إلى الاستثمار العقاري الذي يهدف إلى تطوير مشاريع سكنية
              وتجارية مستدامة تلبي تطلعات العملاء. تعتمد الشركة على فريق من
              المهندسين والخبراء ذوي الخبرة العالية، وتستخدم أحدث التقنيات
              والمواد لضمان تقديم مشاريع متميزة في الوقت المحدد.
              <br />
              <br />
              تتطلع شركة ليبيا الغد الرائدة إلى أن تكون رائدة في قطاع المقاولات
              والاستثمار العقاري في ليبيا، من خلال تعزيز التنمية المستدامة، دعم
              الاقتصاد الوطني، وبناء شراكات استراتيجية مع القطاعين العام والخاص.
              بفضل رؤيتها المستقبلية والتزامها بالتميز، تسعى الشركة لترك بصمة
              إيجابية في المشهد العمراني الليبي، مع التركيز على تحقيق رضا
              العملاء وبناء غدٍ أفضل للمجتمع.
            </p>
          </div>

          {/* الصورة */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/logo.png"
                alt="شعار شركة ليبيا الغد الرائدة"
                fill
                className="rounded-full object-cover shadow-lg border-4 border-[#d4af37] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;