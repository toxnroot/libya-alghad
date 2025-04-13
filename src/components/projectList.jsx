"use client";
import { useState, useEffect } from 'react';
import { db } from '@/app/api/firebase';
import { collection, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import axios from 'axios';

<<<<<<< HEAD
export default function ProjectList({userRole}) {
=======
export default function ProjectList() {
>>>>>>> 9a3c4b20b9ad04518eddd022f8c93edbf677f4f3
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    const completedProjectsRef = collection(db, 'completedProjects');
    const ongoingProjectsRef = collection(db, 'ongoingProjects');

    const unsubCompleted = onSnapshot(completedProjectsRef, (snapshot) => {
      const completedProjects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), status: 'completed' }));
      setProjects(prev => {
        const ongoing = prev.filter(p => p.status === 'ongoing');
        return [...completedProjects, ...ongoing];
      });
    });

    const unsubOngoing = onSnapshot(ongoingProjectsRef, (snapshot) => {
      const ongoingProjects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), status: 'ongoing' }));
      setProjects(prev => {
        const completed = prev.filter(p => p.status === 'completed');
        return [...completed, ...ongoingProjects];
      });
    });

    return () => {
      unsubCompleted();
      unsubOngoing();
    };
  }, []);

  const handleDelete = async (id, status, imageUrl) => {
    try {
      const collectionName = status === 'completed' ? 'completedProjects' : 'ongoingProjects';
      await deleteDoc(doc(db, collectionName, id));
      if (imageUrl) {
        const response = await axios.delete('/api/delete-image', {
          params: { url: imageUrl }
        });
        console.log('Delete response:', response.data);
      }
    } catch (error) {
      console.error('Error deleting project or image:', error.response?.data || error.message);
    }
  };

  const handleEditClick = (project) => {
    setEditingProject(project.id);
    setEditedTitle(project.title || '');
    setEditedDescription(project.description || '');
    setImagePreview(project.image || '');
    setNewImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadImageToCloudinary = async (file) => {
    try {
      if (!file) throw new Error('No image file selected');
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'your_upload_preset');

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      console.log('Image uploaded successfully:', response.data.secure_url);
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      throw error;
    }
  };

  const handleEditSave = async (id, status, oldImageUrl) => {
    try {
      const collectionName = status === 'completed' ? 'completedProjects' : 'ongoingProjects';
      const projectRef = doc(db, collectionName, id);
      let updatedData = { 
        title: editedTitle, 
        description: editedDescription 
      };
  
      if (newImage) {
        console.log('Uploading new image...');
        const newImageUrl = await uploadImageToCloudinary(newImage);
        updatedData.image = `${newImageUrl}?t=${new Date().getTime()}`;
        console.log('New image URL:', updatedData.image);
  
        if (oldImageUrl) {
          console.log('Attempting to delete old image:', oldImageUrl);
          const response = await axios.delete('/api/delete-image', {
            params: { url: oldImageUrl }
          });
          console.log('Old image delete response:', response.data);
        }
      }
  
      console.log('Updating Firestore with data:', updatedData);
      await updateDoc(projectRef, updatedData);
      console.log('Project updated successfully');
  
      setEditingProject(null);
      setEditedTitle('');
      setEditedDescription('');
      setNewImage(null);
      setImagePreview('');
    } catch (error) {
      console.error('Error saving edits:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        stack: error.stack,
      });
      throw error;
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">قائمة المشاريع</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {editingProject === project.id ? (
              <div className="p-6">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="عنوان المشروع"
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="وصف المشروع"
                />
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">تغيير الصورة</label>
                  {imagePreview && (
                    <img 
                      src={imagePreview} 
                      alt="معاينة" 
                      className="w-full h-40 object-cover rounded-lg mb-2" 
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => handleEditSave(project.id, project.status, project.image)}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                  >
                    حفظ
                  </button>
                  <button
                    onClick={() => {
                      setEditingProject(null);
                      setImagePreview('');
                      setNewImage(null);
                    }}
                    className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.image && (
                  <img
                    src={`${project.image}?t=${new Date().getTime()}`}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <p className="text-sm text-gray-500 mb-4">
                  الحالة: {project.status === 'completed' ? 'منجز' : 'قيد الإنجاز'}
                </p>
<<<<<<< HEAD
                {userRole === 'moderator' && (
                  <div className="flex justify-end space-x-3">
=======
                <div className="flex justify-end space-x-3">
>>>>>>> 9a3c4b20b9ad04518eddd022f8c93edbf677f4f3
                  <button
                    onClick={() => handleEditClick(project)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handleDelete(project.id, project.status, project.image)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                  >
                    حذف
                  </button>
                </div>
<<<<<<< HEAD
                )}
                
=======
>>>>>>> 9a3c4b20b9ad04518eddd022f8c93edbf677f4f3
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}