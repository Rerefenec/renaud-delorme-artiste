"use client";

import Image from "next/image";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  // 🔹 Image selon la page
 let heroImage: string | null = "/details/bg.jpg";

if (pathname === "/tondos") {
  heroImage = "/details/pierre-arnould-artist-tondo-detail-01.jpg";
} else if (pathname === "/geometrique") {
  heroImage = "/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-16.jpg";
} else if (pathname === "/cloisonnes") {
  heroImage = "/details/pierre-arnould-artist-cloisonnes-detail-4.jpg";
} else if (pathname === "/apropos") {
  heroImage = "/details/pierre-arnould-artist-cloisonnes-detail-10.jpg"; 
} else if (pathname === "/contact") {
  heroImage = "/details/pierre-arnould-artist-cloisonnes-detail-15.jpg";
}



  console.log("🖼️ Current pathname:", pathname);
  console.log("🖼️ Loading image:", heroImage);

  // 🔹 Texte du titre
  let textHeader;
  if (pathname === "/tondos") {
    textHeader = <>Tondos</>;
  } else if (pathname === "/baroques") {
    textHeader = <>Baroques</>;
  } else if (pathname === "/cloisonnes") {
    textHeader = <>Cloisonnés</>;
  } else if (pathname === "/cloisonnes+geometriques") {
    textHeader = <>Cloisonnés et Géométriques</>;
  } else if (pathname === "/collections") {
    textHeader = <>Collections</>; 
    } else if (pathname === "/geometrique") {
    textHeader = <>Géométriques</>; } 
    else if (pathname === "/apropos") {
    textHeader = <>À propos</>;  
  } else if (pathname === "/contact") {
    textHeader = <>Contact</>;  
  }else {
    textHeader = (
      <>
        Renaud Delorme
        <br />
        Plasticien
      </>
    );
  }

  // 🔹 Hauteur du Hero selon la page
  let heroHeight = "h-[200px] sm:h-[220px] md:h-[300px] lg:h-[300px]";

 if (pathname === "/") {
  heroHeight = "h-[720px] md:h-[800px] lg:h-screen";
}


   return (
        <>
            {/* 🔹 Header (doit rester en haut) */}
            <Header />

            {/* 🔹 Section Hero avec hauteur dynamique (DEVIENT LE CONTENEUR PRINCIPAL) */}
            <section
                className={`${heroHeight} flex flex-col justify-center text-center text-white relative overflow-hidden`} 
            >
                {/* 🔹 Image de fond (maintenant un enfant direct de la section) */}
                <div className="absolute inset-0 z-0"> 
                    {heroImage && (
                      <Image
                          src={heroImage}
                          alt="Pierre Arnould, plasticien"
                          fill
                          priority
                          className="object-cover object-center"
                      />
                    )}
                    {/* Filtre noir */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* 🔹 Titre du Hero (z-index supérieur pour être lisible) */}
                <h1
                    className="animate__animated animate__fadeInDown relative z-10 
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
                       font-bold leading-tight "
                >
                    <span>{textHeader}</span>
                </h1>
                
            </section>
        </>
    );
}