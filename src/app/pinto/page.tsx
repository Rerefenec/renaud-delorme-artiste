export const metadata = {
  title: "Pinto — Renaud-Delorme — Artiste",
  description: "Pinto (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Pinto — Renaud-Delorme",
    description: "Pinto (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/pinto",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/serigraphies/pinto/renaud-delorme-artiste-pinto-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinto — Renaud-Delorme",
    description: "Pinto (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import PintoClient from "./PintoClient";

export default function PintoPage() {
  return <PintoClient />;
}