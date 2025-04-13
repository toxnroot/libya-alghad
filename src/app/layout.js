import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import AdminNavbar from "@/components/AdminNavBar";

export const metadata = {
  title: "Libya Al-Ghad",
  description: "Libya Al-Ghad the leading company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="msapplication-TileColor" content="#d4af37" />
  <meta name="msapplication-TileImage" content="/logo.png" />
  <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
  <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
  <link rel="icon" href="/logo.png" type="image/png" sizes="96x96" />
  <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
  <meta name="description" content="منصة ليبيا الغد لعرض المشاريع والخدمات الحديثة داخل ليبيا." />
  <meta name="keywords" content="ليبيا الغد, مشاريع ليبيا, خدمات ليبيا, شركة ليبيا الغد, Libya Al-Ghad" />
  <meta name="author" content="Libya Al-Ghad Team" />
  <meta name="theme-color" content="#d4af37" />


  <meta property="og:type" content="website" />
  <meta property="og:title" content="ليبيا الغد | المشاريع والخدمات" />
  <meta property="og:description" content="اكتشف المشاريع والخدمات المتميزة التي تقدمها ليبيا الغد." />
  <meta property="og:image" content="https://libyaalghad.com/logo.png" />
  <meta property="og:url" content="https://libyaalghad.com/" />


  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ليبيا الغد | المشاريع والخدمات" />
  <meta name="twitter:description" content="اكتشف المشاريع والخدمات المتميزة التي تقدمها ليبيا الغد." />
  <meta name="twitter:image" content="https://libyaalghad.com/logo.png" />
</head>

      <body>
        <AdminNavbar/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
