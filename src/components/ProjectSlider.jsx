// components/ProjectSlider.js
'use client';

import { useEffect, useState } from 'react';
import { db } from '@/app/api/firebase'; // تأكد من تعديل المسار حسب مشروعك
import { collection, getDocs } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import ProjectDialog from './ProjectDialog'; 
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlider = () => {
  const [completedProjects, setCompletedProjects] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
  const router = useRouter()

  // جلب البيانات من Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const completedSnapshot = await getDocs(collection(db, 'completedProjects'));
        const completedData = completedSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })).slice(0, 3);
        setCompletedProjects(completedData);

        const ongoingSnapshot = await getDocs(collection(db, 'ongoingProjects'));
        const ongoingData = ongoingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })).slice(0, 3);
        setOngoingProjects(ongoingData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // دمج المشاريع
  const allProjects = [...completedProjects, ...ongoingProjects];

  // فتح النافذة المنبثقة
  const openDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  // إغلاق النافذة المنبثقة
  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-6 text-[#d4af37] text-center bg-[#272727] p-2 rounded-lg shadow-md">
        المشاريع المميزة
      </h2>
      <div className="w-full">
        {loading ? (
          <p className="text-center text-gray-600">جارٍ التحميل...</p>
        ) : allProjects.length === 0 ? (
          <p className="text-center text-gray-600">لا توجد مشاريع حاليًا</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {allProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="group relative rounded-xl overflow-hidden shadow-md bg-[#272727] hover:shadow-xl transition duration-300">
                  <div className="relative w-full h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition duration-500 group-hover:opacity-90 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => openDialog(project)}
                      className="bg-[#d4af37] font-bold px-4 py-2 rounded text-white cursor-pointer hover:bg-[#b8932e] transition duration-300"
                    >
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <button type="button" onClick={() => router.push('/projects')} className="view-more mt-10 border-2 border-[#d4af37] font-bold px-4 py-2 rounded text-white cursor-pointer hover:bg-[#d4af37] transition duration-300">
         عرض المزيد من المشاريع
      </button>

      {/* استدعاء مكون الـ Dialog */}
      <ProjectDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectSlider;