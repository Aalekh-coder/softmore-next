
import dynamic from 'next/dynamic';

// ✅ Don't use ssr: false here — just do dynamic import:
const WebSiteDesign = dynamic(() => import('./WebSiteDesign'));
export const metadata = {
  title: 'Best Web Designing Company in Delhi | Softmore IT Solution',
  description: 'Looking for the best website designing Company in Delhi? As Softmore IT Solution, we provide top-notch web design services at affordable prices. Contact us now.',
  alternates: {
    canonical: 'https://www.softmoreit.co.in/services/seo',
  },
  openGraph: {
    title: 'Best Web Designing Company in Delhi | Softmore IT Solution',
    description: 'Looking for the best web designing Company in Delhi? As Softmore IT Solution, we provide top-notch web designing services at affordable prices. Contact us now.',
    url: 'https://www.softmoreit.co.in/services/seo',
    siteName: 'Softmore IT Solution',
    images: [
      {
        url: 'https://www.softmoreit.co.in/seo.png',
        alt: 'Best Web Designing Company in Delhi',
      },
    ],
    type: 'website',
  },
};


export default function Page() {
  return <WebSiteDesign />;
}