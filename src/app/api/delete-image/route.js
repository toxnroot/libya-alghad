import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const imageUrl = searchParams.get('url');

    if (!imageUrl) {
      return NextResponse.json({ success: false, message: 'لم يتم توفير رابط الصورة' }, { status: 400 });
    }

    console.log('Image URL:', imageUrl);

    // استخراج public_id من الرابط مع تجاهل معلمات الاستعلام
    const baseUrl = imageUrl.split('?')[0]; // إزالة أي معلمات مثل ?t=...
    const regex = /\/v\d+\/([^/]+)\.\w{3,4}$/;
    const match = baseUrl.match(regex);
    const publicId = match ? match[1] : null;

    console.log('Extracted public_id:', publicId);

    if (!publicId) {
      return NextResponse.json({ success: false, message: 'تعذر استخراج public_id من الرابط' }, { status: 400 });
    }

    const timestamp = Math.round(new Date().getTime() / 1000);
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    // تصحيح السلسلة الموقّعة باستخدام &
    const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');

    console.log('Timestamp:', timestamp);
    console.log('String to sign:', stringToSign);
    console.log('Signature:', signature);

    const formData = new URLSearchParams();
    formData.append('public_id', publicId);
    formData.append('signature', signature);
    formData.append('api_key', process.env.CLOUDINARY_API_KEY);
    formData.append('timestamp', timestamp.toString());

    const cloudinaryResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/destroy`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await cloudinaryResponse.json();
    console.log('Cloudinary Response:', result);

    if (result.result === 'ok') {
      return NextResponse.json({ success: true, message: 'تم حذف الصورة بنجاح' });
    } else {
      return NextResponse.json({ success: false, message: 'فشل في حذف الصورة', error: result }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in DELETE route:', error);
    return NextResponse.json({ success: false, message: 'حدث خطأ أثناء معالجة الطلب', error: error.message }, { status: 500 });
  }
}