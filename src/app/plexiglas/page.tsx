"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PlexiglasGallery from "@/components/PlexiglasGallery";

export default function HomePage() {
  return (
    <div>
      <main className="overflow-x-hidden">
        
        <div className="relative">

      {/* <Hero /> */}
      <Hero />
      </div>
      {/* Fondo de la galería en blanco para cubrir progresivamente el Hero */}
      <div className="relative pt-26 pb-1 bg-black ">
        <PlexiglasGallery />
      </div>
    </main>
    <Footer />
    </div>
  );
}