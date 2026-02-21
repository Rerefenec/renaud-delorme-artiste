export const metadata = {
  title: "Collectionneuse d'art — Renaud-Delorme — Artiste",
  description: "Clint (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "collectionneuse d'art — Renaud-Delorme",
    description: "Clint (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/collectionneuse",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/serigraphies/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collectionneuse d'art — Renaud-Delorme",
    description: "Clint (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import CollectionneuseClient from "./CollectionneuseClient";

export default function CollectionneusePage() {
  return <CollectionneuseClient />;
}