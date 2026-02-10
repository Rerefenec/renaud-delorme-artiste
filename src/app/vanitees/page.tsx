export const metadata = {
  title: "Vanitées —Renaud-Delorme — Artiste",
  description: "Vanitées (1969–1994) par Renaud Delorme — œuvres fines et détails dorés typiques de la période.",
  openGraph: {
    title: "Vanitées — ",
    description: "Vanitées (1969–1994) par Renaud Delorme — œuvres fines et détails dorés typiques de la période.",
    type: "website",
    url: "https://pierre-arnould.vercel.app/cloisonnes",
    images: ["/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanitées — Renaud Delorme",
    description: "Vanitées (1969–1994) par Renaud Delorme — œuvres fines et détails dorés typiques de la période.",
  },
};

import VaniteesClient from "./VaniteesClient";

export default function VaniteesPage() {
  return <VaniteesClient />;
}