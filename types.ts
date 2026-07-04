/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  stats: string; // e.g., "-12kg en 12 semaines"
  quote: string;
  detailedStory: string;
  accentColor?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface MethodStep {
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  metric: string;
}

export interface BenefitItem {
  title: string;
  conciseText: string;
  persuasiveText: string;
  badge: string;
}

export interface ChallengeItem {
  id: string;
  title: string;
  symptom: string;
  consequence: string;
  costOfStatusQuo: string;
}

export interface CopywritingVersion {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    reassurance: string;
    trustPilotScore: string;
    trustPilotCount: string;
  };
  problem: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    keyQuote: string;
    introParagraph: string;
    outroCallout: string;
  };
  method: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    introText: string;
  };
  benefits: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  proof: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  ctaFinal: {
    headline: string;
    subheadline: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    ctaBtn: string;
    reassurance: string;
  };
}
