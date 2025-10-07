import type { DonationStage, Quote, ChartData, ClubInfo } from "../types";

export const donationStages: DonationStage[] = [
  { amount: 5000, label: "Étape 1" },
  { amount: 10000, label: "Étape 2" },
  { amount: 25000, label: "Étape 3" },
];

export const quotes: Quote[] = [
  {
    text: "Chaque contribution, même petite, peut faire une grande différence dans la lutte contre le cancer du sein.",
    author: "Équipe Octobre Rose",
  },
  {
    text: "Ensemble, nous construisons un avenir où chaque femme a accès aux soins et au soutien dont elle a besoin.",
    author: "Communauté de soutien",
  },
  {
    text: "Votre générosité aujourd'hui peut sauver des vies demain. Merci de votre soutien précieux.",
    author: "Fondation de recherche",
  },
];

export const focusAreasData: ChartData[] = [
  { name: "Prévention", value: 30, color: "#ec4899" },
  { name: "Dépistage", value: 25, color: "#f472b6" },
  { name: "Recherche", value: 30, color: "#f9a8d4" },
  { name: "Support", value: 15, color: "#fce7f3" },
];

export const clubsInfo: ClubInfo[] = [
  {
    name: "Nexus Club",
    description:
      "Nexus Club est le club scientifique de IFAG Higher Institute. Fondé par des étudiants pour les étudiants, il a pour mission de rapprocher le monde professionnel et académique, mais aussi d'aider les étudiants dans leurs parcours. Le club valorise la collaboration, l’apprentissage continu et la mise en pratique des compétences pour un impact réel sur la communauté étudiante.",
    website: "https://nexus-club-zeta.vercel.app",
  },
  {
    name: "MS Club",
    description:
      "MS club ALEEEEEED JE SAIS PAS QUOI METTRE!!!!!!!!",
  },
];

export const didYouKnowFacts = [
  "Le dépistage précoce peut augmenter le taux de guérison à plus de 90%",
  "1 femme sur 8 développera un cancer du sein au cours de sa vie",
  "L'activité physique régulière peut réduire le risque de 20 à 30%",
];
