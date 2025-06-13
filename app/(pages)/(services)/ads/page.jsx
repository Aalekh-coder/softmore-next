

import dynamic from 'next/dynamic';

// ✅ Don't use ssr: false here — just do dynamic import:
const Ads = dynamic(() => import('./Ads'));


export const metadata = {
  // Main page title for the browser tab and search results
  title: "Pay Per Click Agency in Delhi NCR, India | Softmore IT Solution",

  // Meta description for search engine snippets
  description: "Need PPC service? Software It Solution Boosts your business with the top Pay Per Click Agency in Delhi NCR, India. Get instant traffic and leads!",

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://www.softmoreit.co.in/ads",
  },

  // Open Graph metadata for social media sharing
  openGraph: {
    title: "Pay Per Click Agency in Delhi NCR, India | Softmore IT Solution",
    description: "Need PPC service? Software It Solution Boosts your business with the top Pay Per Click Agency in Delhi NCR, India. Get instant traffic and leads!",
    images: [
      {
        url: "https://www.softmoreit.co.in/ads/ads-Photoroom.png", // OG image URL
        width: 1200, // Recommended width for OG images (add if known)
        height: 630, // Recommended height for OG images (add if known)
        alt: "Pay Per Click Services by Softmore IT Solution", // Alt text for the image
      },
    ],
    url: "https://www.softmoreit.co.in/ads", // Canonical URL for OG
    type: "website", // Type of content (e.g., website, article)
    siteName: "Softmore IT Solution", // Name of your website
  },
};


export default function Page() {
  return <Ads />;
}