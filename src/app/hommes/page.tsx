export const metadata = {
  title: "Hommes — Renaud-Delorme — Artiste",
  description: "Hommes (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Hommes — Renaud-Delorme",
    description: "Hommes (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/hommes",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/plexiglas/hommes/renaud-delorme-artiste-homme-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hommes — Renaud-Delorme",
    description: "Hommes (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import HommesClient from "./HommesClient";

export default function HommesPage() {
  return <HommesClient />;
}