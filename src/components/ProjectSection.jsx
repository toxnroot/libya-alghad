// components/ProjectSection.js
"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { db } from '@/app/api/firebase'; // تأكد من تعديل المسار حسب مشروعك
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';

const ProjectSection = ({ title, collectionName }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // عدد المشاريع لكل صفحة

  // جلب البيانات من Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, collectionName));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(data);
      } catch (error) {
        console.error(`Error fetching ${title}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [collectionName, title]);

  // حساب المشاريع المعروضة في الصفحة الحالية
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // وظائف التنقل بين الصفحات
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
          {title}
        </h2>
        {loading ? (
          <p className="text-center text-gray-600">جارٍ التحميل...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-600">
            لا توجد {title.toLowerCase()} حاليًا
          </p>
        ) : (
          <>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-[#131313] shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative w-full h-72">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition duration-500 group-hover:opacity-90 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#d4af37] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* أزرار التصفح */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 gap-4">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg text-white ${
                    currentPage === 1
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-[#d4af37] hover:bg-[#b8932e]'
                  }`}
                >
                  السابق
                </button>
                <span className="text-white">
                  صفحة {currentPage} من {totalPages}
                </span>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg text-white ${
                    currentPage === totalPages
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-[#d4af37] hover:bg-[#b8932e]'
                  }`}
                >
                  التالي
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;