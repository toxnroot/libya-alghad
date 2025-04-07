// src/app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // إعداد الناقل (Transporter) لإرسال البريد
    const transporter = nodemailer.createTransport({
      service: "gmail", // يمكنك استخدام مزود بريد آخر
      auth: {
        user: "mohammedking.655@gmail.com", // استبدل ببريدك الإلكتروني
        pass: "igee lgid lxrd qdge", // استبدل بكلمة مرور التطبيق
      },
    });

    // إعداد خيارات البريد
    const mailOptions = {
      from: email,
      to: "Alhamaliabdalmajed@gmail.com", // البريد المستقبل
      subject: `رسالة جديدة من ${name} عبر موقع شركة ليبيا الغد`,
      text: `
        الاسم: ${name}
        البريد الإلكتروني: ${email}
        الرسالة: ${message}
      `,
      html: `
<div style="font-family: 'Cairo', Arial, sans-serif; background: #f4f4f4; padding: 0; margin: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #d4af37, #b89630); padding: 20px; text-align: center;">
              <h2 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: 700;">رسالة جديدة من موقع الشركة</h2>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="font-size: 16px; color: #333333; margin: 0;">
                      <strong style="color: #d4af37;">الاسم:</strong> 
                      <span style="color: #555555;">${name}</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="font-size: 16px; color: #333333; margin: 0;">
                      <strong style="color: #d4af37;">البريد الإلكتروني:</strong> 
                      <span style="color: #555555;">${email}</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 10px;">
                    <p style="font-size: 16px; color: #333333; margin: 0;">
                      <strong style="color: #d4af37;">الرسالة:</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style="background: #f9f9f9; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px; font-size: 16px; color: #444444; line-height: 1.5;">
                      ${message}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background: #131313; padding: 20px; text-align: center;">
              <p style="font-size: 14px; color: #d4af37; margin: 0;">
                شركة ليبيا الغد الرائدة للمقاولات العامة والاستثمار العقاري
              </p>
              <p style="font-size: 12px; color: #aaaaaa; margin: 5px 0 0 0;">
                © 2025 جميع الحقوق محفوظة
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>
    `
    ,
    };

    // إرسال البريد
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "تم الإرسال بنجاح" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "فشل في إرسال البريد" },
      { status: 500 }
    );
  }
}