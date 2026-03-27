"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PlexiglasGallery from "@/components/PlexiglasGallery";

export default function HomePage() {
  return (
    <div className="bg-black">
      <div>
         <main className="overflow-x-hidden">
        
        <div className="relative">

        {/* <Hero /> */}
        <Hero />
          <div
      className="
       relative 
        -mt-10 sm:-mt-14 md:-mt-15   /* remonte sur le Hero */
     
        backdrop-blur-sm 
        text-gray-200 
        text-justify
        px-4 py-6 
        max-w-6xl mx-auto 
        rounded-xl 
        shadow-lg
      "
     >
       Ces séries sont constituées de peintures noirs sur des vitres en plexiglas transparentes derrière lesquelles je fixe différents objets manufacturés donnant des couleurs aux portraits.
      </div>
        </div>
        {/* Fondo de la galería en blanco para cubrir progresivamente el Hero */}
        <div className="relative pt-26 pb-1 bg-black ">
          <PlexiglasGallery />
        </div>
        </main>
        <Footer />
       </div>
     </div>
  );
}