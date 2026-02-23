export const metadata = {
  title: "Marilyn — Renaud-Delorme — Artiste",
  description: "Marilyn (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Marilyn — Renaud-Delorme",
    description: "Marilyn (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/marilyn",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/serigraphies/marilyn/renaud-delorme-artiste-marilyn-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marilyn — Renaud-Delorme",
    description: "Marilyn (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import MarilynClient from "./MarilynClient";

export default function MarilynPage() {
  return <MarilynClient />;
}