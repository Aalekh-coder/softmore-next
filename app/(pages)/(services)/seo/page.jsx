

import dynamic from 'next/dynamic';

// ✅ Don't use ssr: false here — just do dynamic import:
const Seo = dynamic(() => import('./Seo'));



export const metadata = {
  // Main page title for the browser tab and search results
  title: "Best SEO Services in India | Softmore IT Solution",

  // Meta description for search engine snippets
  description: "Looking for SEO services? Softmore IT offers top-rated SEO solutions in India to help your business rank #1 on search engines and drive real growth. Book now!",

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://www.softmoreit.co.in/seo",
  },

  // Open Graph metadata for social media sharing
  openGraph: {
    title: "Best SEO Services in India | Softmore IT Solution",
    description: "Looking for SEO services? Softmore IT offers top-rated SEO solutions in India to help your business rank #1 on search engines and drive real growth. Book now!",
    images: [
      {
        url: "https://www.softmoreit.co.in/seo.png", // OG image URL
        width: 1200, // Recommended width for OG images (add if known)
        height: 630, // Recommended height for OG images (add if known)
        alt: "SEO Services by Softmore IT Solution", // Alt text for the image
      },
    ],
    url: "https://www.softmoreit.co.in/seo", // Canonical URL for OG
    type: "website", // Type of content (e.g., website, article)
    siteName: "Softmore IT Solution", // Name of your website
  },
};


export default function Page() {
  return <Seo />;
}