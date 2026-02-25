export const metadata = {
  title: "Romy — Renaud-Delorme — Artiste",
  description: "Romy (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Romy — Renaud-Delorme",
    description: "Romy (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/romy",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/serigraphies/romy/renaud-delorme-artiste-romy-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romy — Renaud-Delorme",
    description: "Romy (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import RomyClient from "./RomyClient";

export default function RomyPage() {
  return <RomyClient />;
}