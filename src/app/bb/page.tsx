export const metadata = {
  title: "Brigitte bardot —Renaud-Delorme — Artiste",
  description: "Brigitte bardot (1969–1994) par Renaud Delorme — œuvres fines et détails dorés typiques de la période.",
  openGraph: {
    title: "Brigitte bardot — ",
    description: "Brigitte bardot (1969–1994) par Renaud Delorme — œuvres fines et détails dorés typiques de la période.",
    type: "website",
    url: "https://renaud-delorme-artiste-sage.vercel.app/bb",
    images: ["/1969-1994-Cloisonnes/pierre-arnould-artiste-cloisonnes-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brigitte bardot — Renaud Delorme",
    description: "Brigitte bardot (1969–1994) par Renaud Delorme — œuvres fines et détails dorés typiques de la période.",
  },
};

import BbClient from "./BbClient";

export default function VaniteesPage() {
  return <BbClient />;
}







