export interface Work {
  title: string;
  image: string;
  slug: string;
  description: string;
  year: string;
  lien: string;
}

export const seriesData: Record<string, Work[]> = {

    // =======================================================
  // pochoirs : 6 images
  // =======================================================
  pochoirs: [

    {
      title: " detail",
      image: `/pochoirs/renaud-delorme-artiste-rihana-1.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "pochoirs",
    },
    {
      title: "Entrée du Labyrinthe",
      image: `/pochoirs/renaud-delorme-artiste-rihana-2.jpg`,
      slug:"",
      description: "Relief, résine/enduit, peintures métalliques sur bois 60x80 cm",
      year: "1982",
      lien: "pochoirs",
    },
    {
      title: "Guerrier Géométrique",
      image: `/pochoirs/renaud-delorme-artiste-rihana-3.jpg`,
      slug:"",
      description: "Technique mixte en relief, finition martelée 50x75 cm",
      year: "1985",
      lien: "pochoirs",
    },
   
  ],
  // =======================================================
  // Vanitées : 6 images
  // =======================================================
  vanitees: [

    {
      title: " detail",
      image: `/vanitee/vanitee-1.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "vanitees",
    },
    {
      title: "Entrée du Labyrinthe",
      image: `/vanitee/vanitee-2.jpg`,
      slug:"",
      description: "Relief, résine/enduit, peintures métalliques sur bois 60x80 cm",
      year: "1982",
      lien: "vanitees",
    },
    {
      title: "Guerrier Géométrique",
      image: `/vanitee/vanitee-3.jpg`,
      slug:"",
      description: "Technique mixte en relief, finition martelée 50x75 cm",
      year: "1985",
      lien: "vanitees",
    },
    {
      title: "L'Archétype",
      image: `/vanitee/vanitee-4.jpg`,
      slug:"",
      description: "Terre texturée, pigments et feuilles de métal",
      year: "1986",
      lien: "vanitees",
    },
    {
      title: "L'Éclatement Central",
      image: `/vanitee/vanitee-5.jpg`,
      slug:"",
      description: "Technique mixte sur panneau 80x60 cm",
      year: "1986",
      lien: "vanitees",
    },
    {
      title: "Le Dédale Tribal",
      image: `/vanitee/vanitee-6.jpg`,
      slug:"",
      description: "Pigments or et bleu nuit sur bois 90x65 cm",
      year: "1986",
      lien: "vanitees",
    },
    {
      title: "Formes de la Métamorphose",
      image: `/vanitee/vanitee-7.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau 50x75 cm",
      year: "1986",
      lien: "vanitees",
    },
  ],

  // =======================================================
  // Brigitte Bardot : 12 œuvres
  // =======================================================

  bb: [
    // 🎨 EXEMPLES DÉTAILLÉS (Cloisonnés 1 à 4)
    {
      title: "Paléo-Bolide",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-1.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2003",
      lien: "bb",
    },
    {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-2.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
    {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-3.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
   {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-4.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
     {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-5.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
     {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-6.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
     {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-7.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
     {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-8.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
     {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-9.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
     {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-10.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
     {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-11.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
     {
      title: "Engrenage Galactique",
      image: `/serigraphies/bb-mini/renaud-delorme-artiste-bb-12.webp`,
      slug:"",
      description: "technique mixte Ø 90 cm",
      year: "2004",
      lien: "bb",
    },
  ],

  // =======================================================
  // Clint : 23 œuvres
  // =======================================================
  // baroques: Array.from({ length: 23 }, (_, i) => ({
  //   title: `Baroques #${i + 1}`,
  //   image: `/2021-2025-Baroques/pierre-arnould-artiste-baroque-${i + 1}.jpg`,
  //   style: "Baroques",
  //   description: `[À personnaliser] Description de l'œuvre Baroque n°${
  //     i + 1
  //   }`,
  //   year: "2025",
  //   lien: "baroques",
  // })),*
  clint: [
 {
      title: "Arbre à palabres",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-1.jpg`,
      slug:"",
      description: "technique mixte 20x30 cm",
      year: "1979",
      lien: "clint",
    },
     {
      title: "Dédale",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-2.jpg`,
      slug:"",
      description: "technique mixte 20x30 cm",
      year: "2011",
      lien: "clint",
    },
     {
      title: "Port d'attaches",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-3.jpg`,
      slug:"",
      description: "technique mixte 50x50 cm",
      year: "2024",
      lien: "clint",
    },

 {
      title: "Jeu de pistes",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-4.jpg`,
     slug:"",
      description: "technique mixte 100x100 cm",
      year: "1979",
      lien: "clint",
    },
     {
      title: "Composition Jaune",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-5.jpg`,
     slug:"",
      description: "technique mixte 40x70 cm",
      year: "2002",
      lien: "clint",
    },
     {
      title: "Imagine",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-6.jpg`,
     slug:"",
      description: "technique mixte 30x40 cm",
      year: "2022",
      lien: "clint",
    },
     {
      title: "Hyménoptère",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-7.jpg`,
      slug:"",
      description: "technique mixte 40x44 cm",
      year: "2023",
      lien: "clint",
    },
    {
      title: "Rotor hydrique",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-8.jpg`,
      slug:"",
      description: "technique mixte 30x38 cm",
      year: "2021",
      lien: "clint",
    },
     {
      title: "Astronef",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-9.jpg`,
      slug:"",
      description: "technique mixte 35x50 cm",
      year: "2023",
      lien: "clint",
    },
 
 {
      title: "Pico Pico",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-10.jpg`,
      slug:"",
      description: "technique mixte 35x55 cm",
      year: "2023",
      lien: "clint",
    },
     {
      title: "Récup' dorée",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-11.jpg`,
    slug:"",
      description: "technique mixte 50x80 cm",
      year: "1998",
      lien: "clint",
    },
     {
      title: "Patterne beige",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-12.jpg`,
     slug:"",
      description: "technique mixte 50x80 cm",
      year: "1999",
      lien: "clint",
    },
     
  ],

  // =======================================================
  // GÉOMÉTRIQUES (2021-2025) : 24 œuvres
  // =======================================================
  // geometrique: Array.from({ length: 24 }, (_, i) => ({
  //   title: `Geometrique #${i + 1}`,
  //   image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-${
  //     i + 1
  //   }.jpg`,
  //   style: "Géometrique",
  //   description: `[À personnaliser] Description de l'œuvre Géométrique n°${
  //     i + 1
  //   }`,
  //   year: "2025",
  //   lien: "geometrique",
  // })),
  hotesse: [
 {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-1.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
     {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-2.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
  {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-3.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
     {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-4.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
     {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-5.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
         {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-6.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
         {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-7.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
             {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-8.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
             {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-9.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
             {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-10.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
             {
      title: "Fraise vanille",
      image: `/serigraphie/hotesse-de-l-air/renaud-delorme-artiste-hotesse-11.jpg`,
    slug:"",
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "hotesse",
    },
  ],

  collectionneuse: [

    {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-1.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
      {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-2.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
        {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-3.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
        {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-4.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
        {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-5.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
        {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-6.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
       {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-7.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
       {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-8.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
        {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-9.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
        {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-10.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
        {
      title: " detail",
      image: `/serigraphie/la-collectionneuse-d-art/renaud-delorme-artiste-collectionneuse-11.jpg`,
      slug:"",
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "collectionneuse",
    },
  ],

    // =======================================================
  //Marilyn : 10 œuvres
  // =======================================================

  marilyn: [
 {
      title: "Arbre à palabres",
      image: `/serigraphies/marilyn/renaud-delorme-artiste-marilyn-1.jpg`,
      slug:"",
      description: "technique mixte 20x30 cm",
      year: "1979",
      lien: "marilyn",
    },
     {
      title: "Dédale",
      image: `/serigraphies/marilyn/renaud-delorme-artiste-marilyn-2.jpg`,
      slug:"",
      description: "technique mixte 20x30 cm",
      year: "2011",
      lien: "marilyn",
    },
     {
      title: "Port d'attaches",
      image: `/serigraphies/marilyn/renaud-delorme-artiste-marilyn-3.jpg`,
      slug:"",
      description: "technique mixte 50x50 cm",
      year: "2024",
      lien: "marilyn",
    },

 {
      title: "Jeu de pistes",
      image: `/serigraphies/marilyn/renaud-delorme-artiste-marilyn-4.jpg`,
     slug:"",
      description: "technique mixte 100x100 cm",
      year: "1979",
      lien: "marilyn",
    },
     {
      title: "Composition Jaune",
      image: `/serigraphies/marilyn/renaud-delorme-artiste-marilyn-5.jpg`,
     slug:"",
      description: "technique mixte 40x70 cm",
      year: "2002",
      lien: "marilyn",
    },
     {
      title: "Imagine",
      image: `/serigraphies/marilyn/renaud-delorme-artiste-marilyn-6.jpg`,
     slug:"",
      description: "technique mixte 30x40 cm",
      year: "2022",
      lien: "marilyn",
    },
     {
      title: "Hyménoptère",
      image: `/serigraphies/marilyn/renaud-delorme-artiste-marilyn-7.jpg`,
      slug:"",
      description: "technique mixte 40x44 cm",
      year: "2023",
      lien: "marilyn",
    },
    {
      title: "Rotor hydrique",
      image: `/serigraphies/Marilyn/renaud-delorme-artiste-Marilyn-8.jpg`,
      slug:"",
      description: "technique mixte 30x38 cm",
      year: "2021",
      lien: "Marilyn",
    },
     {
      title: "Astronef",
      image: `/serigraphies/Marilyn/renaud-delorme-artiste-Marilyn-9.jpg`,
      slug:"",
      description: "technique mixte 35x50 cm",
      year: "2023",
      lien: "Marilyn",
    },
 
 {
      title: "Pico Pico",
      image: `/serigraphies/Marilyn/renaud-delorme-artiste-Marilyn-10.jpg`,
      slug:"",
      description: "technique mixte 35x55 cm",
      year: "2023",
      lien: "Marilyn",
    },
   
  ]
}
