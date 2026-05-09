import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/Componments/Shared/Footer";
import Navbar from "@/Componments/Shared/Navbar";
import { ToastContainer } from "react-toastify";

const outfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "SeaSide - Your Trusted Ecommerce Platform",
  description: "High-quality products at the best price.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfitFont.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col container mx-auto">
        <Navbar />
        <main className="flex-grow">{children}</main>
         <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
