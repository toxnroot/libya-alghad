"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/app/api/firebase';
import { collection, addDoc } from 'firebase/firestore';
import axios from 'axios';
import ProjectList from '@/components/projectList';

export default function Dashboard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('completed');
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'toxnroot');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/do88eynar/image/upload',
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent);
          },
        }
      );
      return response.data.secure_url;
    } catch (err) {
      throw new Error('فشل رفع الصورة إلى Cloudinary');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUploadProgress(0);

    try {
      let imageUrl = '';
      if (image) {
        imageUrl = await handleImageUpload(image);
      }

      const collectionName = status === 'completed' ? 'completedProjects' : 'ongoingProjects';
      await addDoc(collection(db, collectionName), {
        title,
        description,
        image: imageUrl,
        createdAt: new Date().toISOString(),
      });

      setTitle('');
      setDescription('');
      setImage(null);
      setStatus('completed');
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6" dir="rtl">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#d4af37] mb-6 text-center">لوحة التحكم</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">عنوان المشروع</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="description">الوصف</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="image">الصورة</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">حالة المشروع</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            >
              <option value="completed">منجز</option>
              <option value="ongoing">قيد الإنجاز</option>
            </select>
          </div>

          {uploadProgress > 0 && (
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-[#d4af37] h-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-center mt-1 text-gray-700">{uploadProgress}%</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d4af37] text-white p-3 rounded-lg hover:bg-[#b8932f] transition duration-300 disabled:bg-gray-400"
          >
            {loading ? 'جارٍ الإضافة...' : 'إضافة المشروع'}
          </button>
        </form>
      </div>
      <ProjectList />
    </div>
  );
}
