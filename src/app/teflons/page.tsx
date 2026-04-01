export const metadata = {
  title: "Teflon — Renaud-Delorme — Artiste",
  description: "Teflon (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Teflon — Renaud-Delorme",
    description: "Teflon (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/teflon",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/teflons/renaud-delorme-artiste-teflons-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teflon — Renaud-Delorme",
    description: "Teflon (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import TeflonsClient from "./TeflonsClient";

export default function TeflonPage() {
  return <TeflonsClient />;
}