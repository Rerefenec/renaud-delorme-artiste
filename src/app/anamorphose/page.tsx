export const metadata = {
  title: "Anamorphose — Renaud-Delorme — Artiste",
  description: "Anamorphose (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Anamorphose — Renaud-Delorme",
    description: "Anamorphose (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/anamorphose",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/anamorphose/renaud-delorme-anamorphose-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anamorphose — Renaud-Delorme",
    description: "Anamorphose (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import AnamorphoseClient from "./AnamorphoseClient";

export default function AnamorphosePage() {
  return <AnamorphoseClient />;
}