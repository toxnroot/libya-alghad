import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-6xl font-bold text-[#d4af37]">404</h1>
      <h2 className="text-4xl mt-4">الصفحة غير موجودة</h2>
      <p className="mt-2 text-lg">
        عذرًا، الصفحة التي تبحث عنها غير متوفرة.
      </p>
      <Link href="/" className='rounded bg-[#d4af37] text-black px-4 py-2 mt-6 hover:bg-[#b89a2e] transition duration-300'>
          العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
