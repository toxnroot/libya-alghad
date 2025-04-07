'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // استيراد usePathname
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // الحصول على المسار الحالي

  const toggleMenu = () => setIsOpen(!isOpen);

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
        <img src="/logo.ico" className="w-[60px]" alt="logo" />
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
      </ul>
    </nav>
  );
}