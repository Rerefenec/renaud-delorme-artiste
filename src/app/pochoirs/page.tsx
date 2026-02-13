export const metadata = {
  title: "Pochoirs — Renaud-Delorme — Artiste",
  description: "Pochoirs (2021–2025) par Pierre Arnould — compositions riches et Pochoirs explorant mouvement et couleur.",
  openGraph: {
    title: "Pochoirs — Pierre Arnould",
    description: "Pochoirs (2021–2025) par Pierre Arnould — compositions riches et Pochoirs explorant mouvement et couleur.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/pochoirs",
    images: ["/pochoirs/renaud-delorme-artiste-rihana-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pochoirs — Pierre Arnould",
    description: "Pochoirs (2021–2025) par Pierre Arnould — compositions riches et Pochoirs explorant mouvement et couleur.",
  },
};

import PochoirsClient from "./PochoirsClient";

export default function PochoirsPage() {
  return <PochoirsClient />;
}