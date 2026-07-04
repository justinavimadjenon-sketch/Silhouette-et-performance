/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChallengeItem, 
  MethodStep, 
  BenefitItem, 
  Testimonial, 
  FAQItem, 
  CopywritingVersion 
} from "./types";

// COPIES PAR SÉCTION : PERSUASIVE UNIQUEMENT
export const copyPersuasive: CopywritingVersion = {
  hero: {
    badge: "L'ALTERNATIVE ÉCOUTEUR UNIQUE AU SPORT INTENSIF ET AUX DIÈTES INCONGRUENT",
    headline: "Libérez-vous du poids du stress et réveillez la vitalité métabolique d'un athlète.",
    subheadline: "Vous pilotez des équipes et des projets avec succès, mais votre santé et votre énergie s'essoufflent. Intégrez un protocole biologique discret et haut de gamme pour dissoudre la graisse viscérale durablement, sans jamais déclencher de combat contre votre propre faim.",
    ctaPrimary: "Débuter mon diagnostic métabolique",
    ctaSecondary: "Consulter un expert en bio-optimisation",
    reassurance: "Accompagnement basé sur les biomarqueurs sanguins • Zéro poudres miracles • Approche médicale",
    trustPilotScore: "100%",
    trustPilotCount: "Succès durable sans retour de poids garanti"
  },
  problem: {
    sectionBadge: "LE COMBAT SILENCIEUX",
    sectionTitle: "L'engrenage toxique : Responsabilités, Cortisol élevé et Ralentissement thyroïdien",
    sectionSubtitle: "L'illusion du 'manger moins, bouger plus' détruit votre productivité et augmente votre fatigue.",
    keyQuote: "« J'ai tout essayé : le jeûne, le céto, le sport à outrance à 6h du matin... Je perdais 3 kilos pour en reprendre 5 au premier coup de stress majeur de mon entreprise. J'avais le sentiment d'avoir perdu le contrôle secret de mon corps. »",
    introParagraph: "Lorsque vous êtes sous pression constante, votre système nerveux est en mode de survie sympathique. Vos cellules résistent activement à l'insuline et vos graisses sont séquestrées pour parer aux situations d'urgence. Ajouter la rigidité d'une diète hypocalorique classique à cette équation crée une tempête hormonale : votre corps sacrifie vos muscles (votre moteur énergétique) pour préserver les réserves adipeuses de sécurité. C'est l'explication logique de l'effet yoyo.",
    outroCallout: "Continuer à forcer avec de vieilles méthodes équivaut à appuyer sur le frein et l'accélérateur en même temps. Il est temps de changer d'axe systémique."
  },
  method: {
    sectionBadge: "VOTRE ARCHITECTURE DE TRANSFORMATION",
    sectionTitle: "Une approche systémique qui respecte votre niveau d'exigence",
    sectionSubtitle: "Nous ne prescrivons pas des restrictions. Nous concevons une ingénierie de la nutrition qui s'adapte à vos repas d'affaires.",
    introText: "L'accompagnement haut de gamme Silhouette & Performance repose sur une triple équation personnalisée :"
  },
  benefits: {
    sectionBadge: "UN NOUVEAU STANDARD DE DROITE",
    sectionTitle: "Ce qui change lorsque vous optimisez vos leviers métaboliques",
    sectionSubtitle: "La perte de poids de haute précision libère vos facultés et renforce votre présence au plus haut niveau."
  },
  proof: {
    sectionBadge: "PREUVES DISCRÈTES ET INÉBRANLABLES",
    sectionTitle: "Des métamorphoses physiques sans compromis de performance",
    sectionSubtitle: "Découvrez des histoires authentiques d'hommes et de femmes de responsabilités qui ont transcendé leur métabolisme."
  },
  ctaFinal: {
    headline: "Prenez la décision stratégique la plus rentable pour votre seconde moitié de vie",
    subheadline: "Votre entreprise a un plan à cinq ans. Quelle est la feuille de route de votre capital physique ? Le temps presse, sécurisez votre capital vital dès aujourd'hui.",
    bullet1: "Élaboration de votre profil biologique de rétention lymphatique et grasse.",
    bullet2: "Mise en lumière immédiate des 3 erreurs invisibles bloquant votre déstockage.",
    bullet3: "Cartographie de votre tolérance personnalisée aux glucides complexes.",
    ctaBtn: "Réserver mon appel stratégique Silhouette & Performance",
    reassurance: "Entretien privé stratégique de 30 minutes • Places strictement limitées aux dossiers qualifiés"
  }
};

// LES OBSTACLES PRINCIPAUX (SECTION 2 — PROBLÈME)
export const challenges: ChallengeItem[] = [
  {
    id: "01",
    title: "L'éclipse du temps disponible",
    symptom: "Agenda surchargé, réunions interminables et déplacements hebdomadaires incessants.",
    consequence: "Impossible de préparer des repas compliqués ou de passer 2 heures dans une salle de sport 4 fois par semaine.",
    costOfStatusQuo: "Vous compensez par des options rapides, déséquilibrées, souvent trop riches en lipides inflammatoires."
  },
  {
    id: "02",
    title: "Le piège biologique du cortisol",
    symptom: "Niveau de stress élevé lié à vos décisions critiques et responsabilités de management.",
    consequence: "Le cortisol détruit le sommeil profond et pousse à un stockage ciblé : la graisse abdominale profonde.",
    costOfStatusQuo: "Même en mangeant très peu de calories, votre ventre reste bloqué et votre métabolisme ralentit de jour en jour."
  },
  {
    id: "03",
    title: "La fatigue cognitive de fin de journée",
    symptom: "Fatigue mentale intense à partir de 19h après avoir pris des centaines de décisions complexes.",
    consequence: "Votre volonté est épuisée. C'est l'heure où les pulsions de grignotage émotionnel ou l'envie d'alcool de décompression s'imposent.",
    costOfStatusQuo: "Vous annulez vos intentions saines du matin, accumulant déception psychologique et culpabilité récurrente."
  }
];

// LES ÉTAPES DU PROTOCOLE (SECTION 3 — SOLUTIONS / MÉTHODES)
export const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "L'Analyse des Biomarqueurs & Profiling Métabolique",
    shortDesc: "Nous testons, nous ne devinons pas.",
    detailedDesc: "Nous analysons votre tolérance aux glucides, votre courbe de cortisol diurne, votre qualité de sommeil via traceur, et vos marqueurs inflammatoires. Cette étape détermine scientifiquement votre profil bio-individuel avant toute recommandation.",
    metric: "100% Personnalisé"
  },
  {
    number: "02",
    title: "La Nutrition Flexible & Re-sensibilisation Hormonale",
    shortDesc: "La fin du dogme des restrictions caloriques.",
    detailedDesc: "Nous concevons des règles claires et intuitives de combinaisons alimentaires adaptées pour corriger l'insulino-résistance. Le système s'adapte à vos obligations : restaurants d'affaires, déjeuners sur le pouce, événements familiaux.",
    metric: "0 Restriction Sociale"
  },
  {
    number: "03",
    title: "L'Accompagnement Réactif & Haute Redondance",
    shortDesc: "Un partenaire métabolique dans votre poche.",
    detailedDesc: "Vous n'êtes plus seul face à votre écran. Votre physiologiste dédié suit vos retours quotidiens et adapte votre protocole chaque semaine. Vous bénéficiez d'une ligne directe WhatsApp prioritaire pour poser vos questions lors de vos déplacements.",
    metric: "Support sous 2 Heures"
  }
];

// LES BÉNÉFICES CONCRETS (SECTION 4 — BÉNÉFICES)
export const benefits: BenefitItem[] = [
  {
    title: "Énergie constante du matin au soir",
    conciseText: "Plus de somnolence après le déjeuner ou de coup de pompe à 15h. Vous bénéficiez d'une clarté cognitive stable et permanente.",
    persuasiveText: "En stabilisant votre glycémie et vos mitochondries, vous éliminez les montagnes russes énergétiques. Vous vous levez avant l'alarme sans aucun sentiment de lourdeur, prêt à performer au bureau avec l'agilité mentale de vos 25 ans.",
    badge: "PRODUCTIVITÉ"
  },
  {
    title: "Fonte lipidique ciblée et respect de l'agenda",
    conciseText: "Perdez du tissu adipeux viscéral de manière pérenne tout en maintenant des repas gastronomiques de négociation.",
    persuasiveText: "Votre activité professionnelle requiert du réseautage. Notre protocole intègre des stratégies bio-chimiques dites de 'tampon' pour neutraliser l'impact métabolique de l'alcool et des dîners riches, sans jamais passer pour le marginal de la table.",
    badge: "FLEXIBILITÉ PHYSIQUE"
  },
  {
    title: "Protection neuronale & baisse du brouillard mental",
    conciseText: "Optimisez la production de cétones endogènes pour une concentration focalisée sur vos priorités d'affaires.",
    persuasiveText: "La perte de poids réussie stimule le BDNF (facteur neurotrophique dérivé du cerveau). En éliminant l'inflammation d'origine intestinale, vous supprimez le 'brain fog' et facilitez des décisions lucides en situation de crise ou de négociation serrée.",
    badge: "ACUITÉ MENTALE"
  },
  {
    title: "Disparition des rages de faim et pulsions sucrées",
    conciseText: "Régulation naturelle des hormones de la satiété (leptine et ghréline) pour vider votre charge de volonté.",
    persuasiveText: "Les fringales nocturnes ou les envies de sucre de fin d'après-midi ne sont pas un manque de contrôle, mais un signal hormonologique d'insulte cellulaire. Une fois le métabolisme équilibré, la tentation disparaît de façon organique.",
    badge: "PROTECTION HORMONALE"
  }
];

// LES PREUVES SOCIALES RÉELLES (SECTION 5 — PREUVES)
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alexandre L.",
    role: "Fondateur d'un groupe de Tech (42 ans)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
    stats: "-14 kg en 12 semaines",
    quote: "L'accompagnement a changé ma façon de voir la nutrition. Je voyage 2 fois par semaine et j'ai des dîners tous les soirs, mais le protocole s'est imbriqué naturellement.",
    detailedStory: "« J'étais sceptique car je n'ai absolument pas le temps de compter mes macros ou de cuisiner. L'équipe a co-conçu un guide de survie de voyage avec mes hôtels et restaurants favoris. Mon tour de taille a fondu de 16 cm sans que je doive me priver de mes vins préférés lors de mes discussions de conseil d'administration. »",
    accentColor: "#d4a359"
  },
  {
    id: "2",
    name: "Dr. Marianne B.",
    role: "Chirurgienne Hospitalière (38 ans)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    stats: "-9 kg & Vitalité décuplée",
    quote: "Étant dans le milieu médical, j'exigeais une approche purement physiologique. Tout est fondé sur la science. Mes prises de sang sont redevenues impeccables.",
    detailedStory: "« Travaillant sur des gardes de 24h avec un stress intense, mon métabolisme s'était complètement effondré. Ce protocole m'a ré-insufflé l'énergie nécessaire dès le réveil. La diminution de ma masse grasse viscérale s'est faite sans jamais ressentir l'hypoglycémie qui d'habitude m'empêchait de tenir au bloc. »",
    accentColor: "#b28238"
  },
  {
    id: "3",
    name: "Thomas D.",
    role: "Directeur de Cabinet de Conseil (47 ans)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
    stats: "-11 kg & Sommeil Restauré",
    quote: "Le sommeil profond a augmenté de 120% sur ma bague connectée et je n'ai plus ces satanés coups de barre l'après-midi.",
    detailedStory: "« À mon âge, je pensais qu'avoir du ventre était inévitable pour un homme pressé. La méthode Silhouette & Performance m'a permis de comprendre comment réaligner ma chronobiologie alimentaire avec mes pics de sécrétion d'hormone de croissance naturelle. Une efficacité redoutable pour un investissement en temps de moins de 15 min par jour. »",
    accentColor: "#d4a359"
  }
];

// FOIRE AUX QUESTIONS (SECTION 6 — FAQ)
export const faqList: FAQItem[] = [
  {
    category: "CIBLE",
    question: "Pour qui s'adresse précisément cette offre ?",
    answer: "Elle est spécifiquement calibrée pour les dirigeants, repreneurs, cadres supérieurs, professionnels libéraux et parents débordés qui disposent de responsabilités élevées, d'une charge mentale forte et de très peu de temps disponible. Si vous recherchez un régime standard ou des fiches d'exercices génériques, cette approche de haute précision n'est pas adaptée d'un point de vue investissement mutuel."
  },
  {
    category: "LOGISTIQUE",
    question: "Comment se déroule l'accompagnement au fil des semaines ?",
    answer: "Chaque semaine débute par un check-in rapide via notre interface confidentielle (poids, métriques de sommeil, marqueurs d'énergie subjective, stress). Votre coach attitré analyse vos constantes, adapte votre cadre de nutrition et de mouvement fluide, et vous prépare un message/audio personnalisé de réalignement. Entre-temps, vous disposez d'un canal direct WhatsApp pour poser toutes vos questions à chaud avant d'entrer en réunion ou au restaurant."
  },
  {
    category: "TEMPS",
    question: "Combien de temps dois-je investir au quotidien ?",
    answer: "Pratiquement aucun temps additionnel. Vous devez déjà vous nourrir chaque jour ; nous changeons simplement le 'quoi' et le 'comment' sans que vous ayez à planifier, peser ou mesurer. Pour l'activité physique légère d'optimisation enzymatique, elle s'implémente sous forme de routines fluides de 10 à 15 minutes totalement intégrables dans vos temps de transition de journée."
  },
  {
    category: "ADAPTABILITÉ",
    question: "Est-ce adapté si j'ai de fréquents dîners d'affaires ou des déplacements ?",
    answer: "C'est l'essence même de notre cœur d'expertise. Plus de 70% de nos clients dînent au restaurant ou voyagent à l'international à un rythme hebdomadaire. Nous vous apprenons à décoder n'importe quel menu d'hôtel ou de table étoilée pour repérer les assemblages lipidiques porteurs et neutraliser physiologiquement les effets du décalage horaire ou de l'alcool."
  },
  {
    category: "INSCRIPTIONS",
    question: "Puis-je poser des questions personnalisées avant de réserver un appel ?",
    answer: "Absolument. Lors du lancement de votre diagnostic en ligne sur cette page, vous pourrez d'abord évaluer les indices clés de votre métabolisme. Si vous préférez un échange textuel, l'appel d'évaluation d'entrée de 30 minutes reste confidentiel, bienveillant, d'un haut niveau intellectuel, et aucun engagement commercial d'achat forcé n'y est exercé."
  }
];
