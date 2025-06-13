



import dynamic from 'next/dynamic';

// ✅ Don't use ssr: false here — just do dynamic import:
const SocialMediaManagement = dynamic(() => import('./SocialMediaManagement'));

export const metadata = {
  // Main page title for the browser tab and search results
  title: "Social Media Marketing Agency in Delhi | Softmore IT Solution",

  // Meta description for search engine snippets
  description: "Want to grow your social Media Handle? We are the best Social Media Marketing Agency in Delhi. We provide social growth and create your social media into a lead-generation platform.",

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://www.softmoreit.co.in/social-media-marketing.php",
  },

  // Open Graph metadata for social media sharing
  openGraph: {
    title: "Social Media Marketing Agency in Delhi | Softmore IT Solution",
    description: "Want to grow your social Media Handle? We are the best Social Media Marketing Agency in Delhi. We provide social growth and create your social media into a lead-generation platform.",
    images: [
      {
        url: "https://www.softmoreit.co.in/social-media/images/box_img.png", // OG image URL
        width: 1200, // Recommended width for OG images (add if known)
        height: 630, // Recommended height for OG images (add if known)
        alt: "Social Media Marketing by Softmore IT Solution", // Alt text for the image
      },
    ],
    url: "https://www.softmoreit.co.in/social-media-marketing.php", // Canonical URL for OG
    type: "website", // Type of content (e.g., website, article)
    siteName: "Softmore IT Solution", // Note: The original had "Softmore IT", I'm using "Softmore IT Solution" for consistency with other metadata provided.
  },
};

export default function Page() {
  return <SocialMediaManagement />;
}