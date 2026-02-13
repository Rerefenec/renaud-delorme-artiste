export interface Work {
  title: string;
  image: string;
  
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
      
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "pochoirs",
    },
    {
      title: "Entrée du Labyrinthe",
      image: `/pochoirs/renaud-delorme-artiste-rihana-2.jpg`,
      
      description: "Relief, résine/enduit, peintures métalliques sur bois 60x80 cm",
      year: "1982",
      lien: "pochoirs",
    },
    {
      title: "Guerrier Géométrique",
      image: `/pochoirs/renaud-delorme-artiste-rihana-3.jpg`,
      
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
      
      description: "Relief pigmenté sur panneau, patine 50x75 cm",
      year: "1980",
      lien: "vanitees",
    },
    {
      title: "Entrée du Labyrinthe",
      image: `/vanitee/vanitee-2.jpg`,
      
      description: "Relief, résine/enduit, peintures métalliques sur bois 60x80 cm",
      year: "1982",
      lien: "vanitees",
    },
    {
      title: "Guerrier Géométrique",
      image: `/vanitee/vanitee-3.jpg`,
      
      description: "Technique mixte en relief, finition martelée 50x75 cm",
      year: "1985",
      lien: "vanitees",
    },
    {
      title: "L'Archétype",
      image: `/vanitee/vanitee-4.jpg`,
      
      description: "Terre texturée, pigments et feuilles de métal",
      year: "1986",
      lien: "vanitees",
    },
    {
      title: "L'Éclatement Central",
      image: `/vanitee/vanitee-5.jpg`,
      
      description: "Technique mixte sur panneau 80x60 cm",
      year: "1986",
      lien: "vanitees",
    },
    {
      title: "Le Dédale Tribal",
      image: `/vanitee/vanitee-6.jpg`,
      
      description: "Pigments or et bleu nuit sur bois 90x65 cm",
      year: "1986",
      lien: "vanitees",
    },
    {
      title: "Formes de la Métamorphose",
      image: `/vanitee/vanitee-7.jpg`,
      
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
      image: `/serigraphie/bb/renaud-delorme-artiste-bb-1.jpg`,
      
      description: "technique mixte Ø 90 cm",
      year: "2003",
      lien: "bb",
    },
    {
      title: "Engrenage Galactique",
      image: `/serigraphie/bb-mini/renaud-delorme-artiste-bb-2.webp`,
      
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
      
      description: "technique mixte 20x30 cm",
      year: "1979",
      lien: "clint",
    },
     {
      title: "Dédale",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-2.jpg`,
      
      description: "technique mixte 20x30 cm",
      year: "2011",
      lien: "clint",
    },
     {
      title: "Port d'attaches",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-3.jpg`,
      
      description: "technique mixte 50x50 cm",
      year: "2024",
      lien: "clint",
    },

 {
      title: "Jeu de pistes",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-4.jpg`,
     
      description: "technique mixte 100x100 cm",
      year: "1979",
      lien: "clint",
    },
     {
      title: "Composition Jaune",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-5.jpg`,
     
      description: "technique mixte 40x70 cm",
      year: "2002",
      lien: "clint",
    },
     {
      title: "Imagine",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-6.jpg`,
     
      description: "technique mixte 30x40 cm",
      year: "2022",
      lien: "clint",
    },
     {
      title: "Hyménoptère",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-7.jpg`,
      
      description: "technique mixte 40x44 cm",
      year: "2023",
      lien: "clint",
    },
    {
      title: "Rotor hydrique",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-8.jpg`,
      
      description: "technique mixte 30x38 cm",
      year: "2021",
      lien: "clint",
    },
     {
      title: "Astronef",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-9.jpg`,
      
      description: "technique mixte 35x50 cm",
      year: "2023",
      lien: "clint",
    },
 
 {
      title: "Pico Pico",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-10.jpg`,
      
      description: "technique mixte 35x55 cm",
      year: "2023",
      lien: "clint",
    },
     {
      title: "Récup' dorée",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-11.jpg`,
    
      description: "technique mixte 50x80 cm",
      year: "1998",
      lien: "clint",
    },
     {
      title: "Patterne beige",
      image: `/serigraphie/clint/renaud-delorme-artiste-clint-12.jpg`,
     
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
  geometrique: [
 {
      title: "Fraise vanille",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-1.jpg`,
    
      description: "technique mixte 50x50 cm",
      year: "2025",
      lien: "geometrique",
    },
 {
      title: "Germination",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-2.jpg`,
    
      description: "technique mixte 40x40 cm",
      year: "1969",
      lien: "geometrique",
    },
 {
      title: "Octo-ventilo",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-3.jpg`,
     
      description: "technique mixte 80x80 cm",
      year: "1999",
      lien: "geometrique",
    },
     {
      title: "Byzance",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-4.jpg`,
    
      description: "technique mixte 80x80 cm",
      year: "1999",
      lien: "geometrique",
    },
 {
      title: "Mayapolis",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-5.jpg`,
     
      description: "technique mixte 40x40 cm",
      year: "2010",
      lien: "geometrique",
    },
 {
      title: "Hokkaido zen",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-6.jpg`,
    
      description: "technique mixte 40x40 cm",
      year: "1997",
      lien: "geometrique",
    },
     {
      title: "Gotic",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-7.jpg`,
      
      description: "technique mixte 90x90 cm",
      year: "1991",
      lien: "geometrique",
    },

     {
      title: "Zoulou",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-8.jpg`,
    
      description: "technique mixte 90x90 cm",
      year: "1988",
      lien: "geometrique",
    },
     {
      title: "Forum",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-9.jpg`,
     
      description: "technique mixte 45x45 cm",
      year: "2025",
      lien: "geometrique",
    },
     {
      title: "Temple sacrificiel",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-10.jpg`,
     
      description: "technique mixte 45x45 cm",
      year: "2025",
      lien: "geometrique",
    },
     {
      title: "Bauhaus",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-11.jpg`,
     
      description: "technique mixte 35x35 cm",
      year: "2020",
      lien: "geometrique",
    },
     {
      title: "Epimedic",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-12.jpg`,
     
      description: "technique mixte 40x40 cm",
      year: "2000",
      lien: "geometrique",
    },
     {
      title: "Architectonic",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-13.jpg`,
    
      description: "technique mixte 40x50 cm",
      year: "1967",
      lien: "geometrique",
    },
     {
      title: "Pacific Maori ",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-14.jpg`,
     
      description: "technique mixte 50x55 cm",
      year: "1992",
      lien: "geometrique",
    },
     {
      title: "Message planette rouge",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-15.jpg`,
     
      description: "technique mixte 40x40 cm",
      year: "1998",
      lien: "geometrique",
    },
     {
      title: "Echiquier andalou",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-16.jpg`,
     
      description: "technique mixte 90x90 cm",
      year: "1995",
      lien: "geometrique",
    },
     {
      title: "Temple d'albatre",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-17.jpg`,
    
      description: "technique mixte 25x45 cm",
      year: "2025",
      lien: "geometrique",
    },
     {
      title: "Parcours-piège",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-18.jpg`,
      
      description: "technique mixte 30x30 cm",
      year: "1990",
      lien: "geometrique",
    },
     {
      title: "Dans l'armurerie",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-19.jpg`,
     
      description: "technique mixte 35x35 cm",
      year: "2001",
      lien: "geometrique",
    },
     {
      title: "Embarquement comète",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-20.jpg`,
     
      description: "technique mixte 80x80 cm",
      year: "1996",
      lien: "geometrique",
    },
     {
      title: "Braille Tetris",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-21.jpg`,
      
      description: "technique mixte 35x45 cm",
      year: "1992",
      lien: "geometrique",
    },
     {
      title: "Composition au carré",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-22.jpg`,
      
      description: "technique mixte 50x75 cm",
      year: "1989",
      lien: "geometrique",
    },
     {
      title: "Composition au moule à gateau",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-23.jpg`,
      
      description: "technique mixte 40x60 cm",
      year: "2020",
      lien: "geometrique",
    },
     {
      title: "Composition tressée",
      image: `/2021-2025-Geometriques/pierre-arnould-artiste-geometrique-24.jpg`,
     
      description: "technique mixte 40x75 cm",
      year: "1978",
      lien: "geometrique",
    },
  ],
}
