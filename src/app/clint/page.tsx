export const metadata = {
  title: "Clint — Renaud-Delorme — Artiste",
  description: "Clint (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Clint — Renaud-Delorme",
    description: "Clint (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/clint",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/serigraphies/clint/renaud-delorme-artiste-clint-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clint — Renaud-Delorme",
    description: "Clint (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import ClintClient from "./ClintClient";

export default function ClintPage() {
  return <ClintClient />;
}