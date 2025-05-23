"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/api/firebase';
import { signOut } from 'firebase/auth';

const AdminNavbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log('بدء التحقق من حالة المستخدم...');
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        console.log('حالة المستخدم:', user ? user.uid : 'لا يوجد مستخدم');
        setUser(user);
        setLoading(false);
      },
      (error) => {
        console.error('خطأ في التحقق من المستخدم:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('تم تسجيل الخروج');
      router.push('/login');
    } catch (err) {
      console.error('فشل تسجيل الخروج:', err.message);
    }
  };

  if (loading) {
    return <div>جارٍ تحميل البيانات...</div>;
  }

  if (user) {
    return (
      <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div>
          <button
            onClick={() => router.push('/dashboard')}
            className="bg-[#d4af37] p-2 rounded-lg hover:bg-[#b8932f] transition duration-300"
          >
            الذهاب إلى لوحة التحكم
          </button>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 p-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            تسجيل الخروج
          </button>
        </div>
      </div>
    );
  }

  return <div>لا يوجد مستخدم مسجل</div>;
};

export default AdminNavbar;