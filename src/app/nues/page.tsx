export const metadata = {
  title: "Nues — Renaud-Delorme — Artiste",
  description: "Nues (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Nues — Renaud-Delorme",
    description: "Nues (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/nues",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/plexiglas/nues/renaud-delorme-artiste-nues-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nues — Renaud-Delorme",
    description: "Nues (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import NuesClient from "./NuesClient";

export default function NuesPage() {
  return <NuesClient />;
}