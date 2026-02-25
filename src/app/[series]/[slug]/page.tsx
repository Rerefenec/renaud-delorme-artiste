import { seriesData } from "@/app/data/seriesData";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    series: string;
    slug: string;
  }>;
}

/* ============================= */
/* 1️⃣ Génération statique totale */
/* ============================= */

export async function generateStaticParams() {
  const paths: { series: string; slug: string }[] = [];

  Object.entries(seriesData).forEach(([seriesKey, works]) => {
    works.forEach((work) => {
      paths.push({
        series: seriesKey,
        slug: work.slug,
      });
    });
  });

  return paths;
}

/* ============================= */
/* 2️⃣ Metadata dynamique SEO    */
/* ============================= */

export async function generateMetadata({ params }: Props) {
  const { series, slug } = await params;

  const works = seriesData[series];
  if (!works) return {};

  const work = works.find((w) => w.slug === slug);
  if (!work) return {};

  return {
    title: `${work.title} — Pierre Arnould`,
    description: `${work.title} (${work.year}) — ${work.description}`,
    openGraph: {
      title: `${work.title} — Pierre Arnould`,
      description: work.description,
      images: [work.image],
    },
  };
}

/* ============================= */
/* 3️⃣ Page œuvre                */
/* ============================= */

export default async function WorkPage({ params }: Props) {
  const { series, slug } = await params;

  const works = seriesData[series];
  if (!works) return notFound();

  const work = works.find((w) => w.slug === slug);
  if (!work) return notFound();

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <article className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          {work.title}
        </h1>

        <img
          src={work.image}
          alt={`${work.title}, ${work.year}, œuvre de Pierre Arnould`}
          width="1200"
          height="1200"
          className="w-full object-contain mb-8"
        />

      </article>
    </main>
  );
}