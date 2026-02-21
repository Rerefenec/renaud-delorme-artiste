export const metadata = {
  title: "Hotesse de l'air — Renaud-Delorme — Artiste",
  description: "Hotesse de l'air  par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Clint — Renaud-Delorme",
    description: "Clint (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/hotesse",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/serigraphies/hotesse-de-l-air/renaud-delorme-artiste-hotesse-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotesse de l'air — Renaud-Delorme",
    description: "Clint (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import HotesseClient from "./HotesseClient";
import ClintClient from "./HotesseClient";

export default function HotessePage() {
  return <HotesseClient />;
}