<<<<<<< HEAD
"use client"; 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // استخدام next/navigation
import { usePathname } from 'next/navigation'; // استيراد usePathname
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { auth } from '@/app/api/firebase'; // استيراد إعدادات Firebase
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // حالة المستخدم
  const pathname = usePathname(); // الحصول على المسار الحالي
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  // التحقق من حالة المستخدم عند تحميل الصفحة
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('المستخدم المسجل:', user); // تحقق من المستخدم في الكونسول
        setUser(user); // تعيين المستخدم إذا كان مسجلًا
      } else {
        console.log('لا يوجد مستخدم مسجل'); // تحقق من الحالة في الكونسول
        setUser(null); // إذا لم يكن هناك مستخدم
      }
    });

    // تنظيف الاشتراك عند مغادرة الصفحة
    return () => unsubscribe();
  }, []);

  // وظيفة تسجيل الخروج
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('تم تسجيل الخروج');
      router.push('/login'); // إعادة التوجيه إلى صفحة تسجيل الدخول
    } catch (err) {
      console.error('فشل تسجيل الخروج:', err.message);
    }
  };

=======
'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // استيراد usePathname
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // الحصول على المسار الحالي

  const toggleMenu = () => setIsOpen(!isOpen);

>>>>>>> 9a3c4b20b9ad04518eddd022f8c93edbf677f4f3
  // قائمة الروابط لتسهيل الإدارة
  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/projects', label: 'المشاريع' },
    { href: '/rent', label: 'الخدمات' },
    { href: '/about', label: 'من نحن' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <nav className="bg-[#000] text-gold-500 px-6 py-4 flex items-center justify-between flex-wrap fixed top-0 w-full z-50" dir="rtl">
      <div className="text-[#d4af37] text-xl font-bold flex justify-center items-center">
        <img src="/logo.png" className="w-[60px]" alt="logo" />
        Libya Al-Ghad
      </div>

      <div className="block md:hidden text-white" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`w-full md:w-auto md:flex md:items-center gap-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden md:flex'}`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href; // التحقق مما إذا كان الرابط هو الصفحة الحالية
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded ${
                  isActive
                    ? 'bg-[#d4af37] text-white' // تنسيق الرابط النشط
                    : 'text-white hover:bg-[#d4af37] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
<<<<<<< HEAD

        {/* إضافة الأزرار فقط إذا كان المستخدم مسجلاً */}
        {user && (
          <>
            <li>
              <button
                onClick={() => router.push('/login/dashboard')}
                className="block px-4 py-2 rounded text-black bg-amber-50 hover:text-white hover:bg-[#d4af37]"
              >
                لوحة التحكم
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600"
              >
                تسجيل الخروج
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
=======
      </ul>
    </nav>
  );
}
>>>>>>> 9a3c4b20b9ad04518eddd022f8c93edbf677f4f3
