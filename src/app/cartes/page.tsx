export const metadata = {
  title: "cartes-mere — Renaud-Delorme — Artiste",
  description: "cartes-mere (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "cartes-mere — Renaud-Delorme",
    description: "cartes-mere (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/cartes-mere",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/cartes-mere/renaud-delorme-artiste-cartes-mere-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "cartes-mere — Renaud-Delorme",
    description: "cartes-mere (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import CartesClient from "./CartesClient";

export default function CartesPage() {
  return <CartesClient />;
}