import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Libya Al-Ghad",
  description: "Libya Al-Ghad the leading company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
