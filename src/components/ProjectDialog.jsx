// components/ProjectDialog.js
'use client';

import Image from 'next/image';

const ProjectDialog = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="bg-[#272727] rounded-xl shadow-xl max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()} // منع إغلاق النافذة عند النقر داخلها
      >
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-[#d4af37] text-2xl"
        >
          &times;
        </button>

        {/* محتوى النافذة */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-64 mb-4">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold text-[#d4af37] mb-2">{project.title}</h3>
          <p className="text-gray-300 text-center">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;