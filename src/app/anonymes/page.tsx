export const metadata = {
  title: "Anonymes — Renaud-Delorme — Artiste",
  description: "Anonymes (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Anonymes — Renaud-Delorme",
    description: "Anonymes (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/anonymes",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/plexiglas/anonymes/renaud-delorme-artiste-anonymes-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anonymes — Renaud-Delorme",
    description: "Anonymes (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import AnonymesClient from "./AnonymesClient";

export default function AnonymesPage() {
  return <AnonymesClient />;
}