export const metadata = {
  title: "Celebrity — Renaud-Delorme — Artiste",
  description: "Celebrity (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Celebrity — Renaud-Delorme",
    description: "Celebrity (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/celebrity",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/plexiglas/celebrity/renaud-delorme-artiste-celebrity-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebrity — Renaud-Delorme",
    description: "Celebrity (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import CelebrityClient from "./CelebrityClient";

export default function CelebrityPage() {
  return <CelebrityClient />;
}