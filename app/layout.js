import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Main page title
  title: "India's No. 1 Digital Marketing Agency in Delhi | Softmore IT",

  // Main page description
  description:
    "Get ahead of the competition with our digital marketing services. Our agency specializes in SEO, PPC, social media, and more. Contact us today for a personalized strategy to help your business succeed",

  // Open Graph metadata for social media sharing
  openGraph: {
    title: "India's No. 1 Digital Marketing Agency in Delhi | Softmore IT",
    description:
      "Get ahead of the competition with our digital marketing services. Our agency specializes in SEO, PPC, social media, and more. Contact us today for a personalized strategy to help your business succeed",
    images: [
      {
        url: "https://www.softmoreit.co.in/img/banner/banner-3.jpg", // OG image URL
        width: 1200, // Recommended width for OG images
        height: 630, // Recommended height for OG images
        alt: "Softmore IT Digital Marketing Agency Banner", // Alt text for the image
      },
    ],
    url: "https://www.softmoreit.co.in/", // Canonical URL for OG
    type: "website", // Type of content (e.g., website, article)
    siteName: "Softmore IT", // Name of your website
  },

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.softmoreit.co.in/",
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
