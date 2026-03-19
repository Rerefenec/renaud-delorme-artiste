"use client";

import Image from "next/image";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  // 🔹 Image selon la page
 let heroImage: string | null = "/details/detail-flat-stephanie.jpg";

if (pathname === "/clint") {
  heroImage = "/details/detail-eastwood.jpg";
} else if (pathname === "/bb") {
  heroImage = "/details/detail-bb.jpg";
} else if (pathname === "/cartes") {
  heroImage = "/details/pierre-arnould-artist-cloisonnes-detail-4.jpg";
  } else if (pathname === "/collectionneuse") {
  heroImage = "/details/detail-collectionneuse.jpg";
  } else if (pathname === "/hotesse") {
  heroImage = "/details/detail-hotesse.jpg";
  } else if (pathname === "/marilyn") {
  heroImage = "/details/detail-marilyn.jpg";
  } else if (pathname === "/pinto") {
  heroImage = "/details/detail-frida.jpg";
  } else if (pathname === "/plexiglas") {
  heroImage = "/details/detail-scarlet.jpg";
  } else if (pathname === "/anonymes") {
  heroImage = "/details/detail-anonyme.jpg";
  } else if (pathname === "/pochoirs") {
  heroImage = "/details/detail-rihanna.jpg";
  } else if (pathname === "/romy") {
  heroImage = "/details/detail-romy.jpg";
  } else if (pathname === "/serigraphies") {
  heroImage = "/details/detail-pinto.jpg";
  } else if (pathname === "/vanitees") {
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
  if (pathname === "/clint") {
    textHeader = <>clint</>;
  } else if (pathname === "/bb") {
    textHeader = <>Brigite Bardot</>;
  } else if (pathname === "/cartes") {
    textHeader = <>Cartes mères</>;
  } else if (pathname === "/collectionneuse") {
    textHeader = <>La collectionneuse d'art</>;
  } else if (pathname === "/collections") {
    textHeader = <>Collections</>; 
    } else if (pathname === "/marilyn") {
    textHeader = <>Marilyn</>;
    } else if (pathname === "/pinto") {
    textHeader = <>Frida Pinto</>;
    } else if (pathname === "/Plexiglas") {
    textHeader = <>Plexiglas</>;
    } else if (pathname === "/pochoirs") {
    textHeader = <>Pochoirs</>;
    } else if (pathname === "/romy") {
    textHeader = <>Romy Schneider</>;
    } else if (pathname === "/serigraphies") {
    textHeader = <>Sérigraphies</>;
    } else if (pathname === "/vanitees") {
    textHeader = <>Vanitées</>;
    } else if (pathname === "/hotesse") {
    textHeader = <>Hotesse de l'air</>; } 
    else if (pathname === "/apropos") {
    textHeader = <>À propos</>;  
  } else if (pathname === "/contact") {
    textHeader = <>Contact</>;  
    } else if (pathname === "/nues") {
    textHeader = <>Les Nus</>;
     } else if (pathname === "/celebrity") {
    textHeader = <>célébrités</>;
       } else if (pathname === "/anonymes") {
    textHeader = <>Anonymes</>;
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