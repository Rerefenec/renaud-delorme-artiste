export const metadata = {
  title: "Print3D — Renaud-Delorme — Artiste",
  description: "Print3D (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  openGraph: {
    title: "Print3D — Renaud-Delorme",
    description: "Print3D (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/print3D",
    images: ["https://renaud-delorme-artiste-sage.vercel.app/print3D/renaud-delorme-artiste-angelina-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print3Dt — Renaud-Delorme",
    description: "Print3D (1995–2020) par Pierre Arnould — série de peintures rondes et études chromatiques.",
  },
};

import Print3DClient from "./Print3DClient";

export default function Print3DPage() {
  return <Print3DClient />;
}