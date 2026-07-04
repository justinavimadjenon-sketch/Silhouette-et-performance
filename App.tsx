/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  copyPersuasive, 
  challenges, 
  methodSteps, 
  benefits, 
  faqList 
} from "./data";
import MetabolicQuiz from "./components/MetabolicQuiz";
import BookingCalendar from "./components/BookingCalendar";
import TestimonialSection from "./components/TestimonialSection";
import { 
  Users, 
  Star, 
  Flame, 
  Activity, 
  Compass, 
  CheckCircle2, 
  Plus, 
  Minus, 
  ChevronDown, 
  FileText, 
  Clock, 
  Lock, 
  Award,
  BookOpen
} from "lucide-react";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;

    // Intersection Observer pour animations scroll
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // References for smooth scrolling
  const quizSectionRef = useRef<HTMLDivElement>(null);
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  // Determine current copywriting dataset (Laisse SEULEMENT la version PERSUASIVE)
  const copy = copyPersuasive;

  const scrollToQuiz = () => {
    quizSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    bookingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 selection:bg-amber-500/30 selection:text-amber-200 relative overflow-x-hidden">
      
      {/* 1. Dynamic Control Panel Header (Floating on top) */}
      <div className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-amber-500/10 py-3.5 px-4 mb-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
          {/* Logo Brand / Human Identifier */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-wider font-mono text-gray-200">
              SILHOUETTE & PERFORMANCE
            </span>
          </div>

          {/* Call to action header */}
          <button
            id="header-cta"
            onClick={scrollToQuiz}
            className="text-xs font-bold font-mono text-amber-500 bg-amber-500/5 hover:bg-amber-500/15 border border-amber-500/20 hover:border-amber-500/40 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1"
          >
            Bilan Métabolique →
          </button>
        </div>
      </div>

      {/* Hero Visual Accent Shadow */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-12 pb-20 px-4 md:px-6 w-full overflow-hidden">
        {/* Full-bleed subtle sports background with overlay and mask */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.06] mix-blend-luminosity">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1600&auto=format&fit=crop" 
            alt="Sports Performance Background" 
            className="w-full h-full object-cover filter blur-[1px] scale-102" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-transparent to-[#0b0f19]" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f19]/70 to-[#0b0f19]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {/* Tagline / Badge */}
            <motion.div 
              key="hero-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: isFirstRender.current ? 0.05 : 0
              }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-xs text-amber-500 font-mono font-medium tracking-wide uppercase"
            >
              <Award className="w-3.5 h-3.5" />
              {copy.hero.badge}
            </motion.div>

            {/* Core Master Headline (Typography Pairing: Playfair Display + Plus Jakarta Sans) */}
            <AnimatePresence mode="wait">
              <motion.h1
                key="hero-headline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isFirstRender.current ? 0.18 : 0
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] pb-1"
              >
                {copy.hero.headline}
              </motion.h1>
            </AnimatePresence>

            {/* Subheading */}
            <AnimatePresence mode="wait">
              <motion.p
                key="hero-subheadline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isFirstRender.current ? 0.31 : 0
                }}
                className="text-base sm:text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed"
              >
                {copy.hero.subheadline}
              </motion.p>
            </AnimatePresence>

            {/* Action Trigger Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: isFirstRender.current ? 0.44 : 0
              }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
            >
              <button
                id="hero-cta-quiz"
                onClick={scrollToQuiz}
                className="w-full sm:w-auto px-8 py-4 gold-gradient-bg hover:opacity-90 text-gray-950 font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>{copy.hero.ctaPrimary}</span>
                <Activity className="w-4 h-4 shrink-0" />
              </button>
              
              <button
                id="hero-cta-book"
                onClick={scrollToBooking}
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 border border-gray-800 hover:border-amber-500/40 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>{copy.hero.ctaSecondary}</span>
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              </button>
            </motion.div>

            {/* Reassurance Phrases */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: isFirstRender.current ? 0.57 : 0
              }}
              className="pt-2 flex flex-col items-center gap-2 text-xs text-gray-400 font-sans"
            >
              <p className="flex items-center justify-center gap-1.5 text-amber-500/90 font-mono">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                {copy.hero.reassurance}
              </p>
              {/* Trustpilot Score visual */}
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <span className="font-mono text-gray-300 text-xs">
                  <strong>{copy.hero.trustPilotScore}</strong> ({copy.hero.trustPilotCount})
                </span>
              </div>
            </motion.div>
          </div>

          {/* Embedded Interactive Core Element : Metabolic Assessment Anchor */}
          <motion.div 
            ref={quizSectionRef} 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: isFirstRender.current ? 0.7 : 0
            }}
            className="pt-16 scroll-mt-24"
          >
            <MetabolicQuiz onQuizComplete={() => {}} bookingRef={bookingSectionRef} />
          </motion.div>
        </div>
      </section>


      {/* SECTION 2 — PROBLÈME / IDENTIFICATION */}
      <section data-animate id="section-problem" className="bg-gray-950/60 py-20 border-y border-gray-900 px-4 md:px-6 relative overflow-hidden">
        {/* Full-bleed subtle sports background representing tension/power */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.05] mix-blend-luminosity">
          <img 
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop" 
            alt="Physical training strength tension" 
            className="w-full h-full object-cover filter blur-[2px]" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-transparent to-[#0b0f19]" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f19]/70 to-[#0b0f19]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Key Left Column Context */}
          <div className="lg:col-span-5 space-y-5">
            <span data-animate className="text-xs font-mono text-amber-500 tracking-wider uppercase block">
              {copy.problem.sectionBadge}
            </span>
            <h2 data-animate className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              {copy.problem.sectionTitle}
            </h2>
            <p data-animate className="text-sm text-gray-400 font-sans">
              {copy.problem.sectionSubtitle}
            </p>

            {/* Emotional Quote card */}
            <div data-animate className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 italic text-gray-300 font-sans text-sm leading-relaxed relative">
              <span className="text-4xl text-amber-500/20 absolute top-2 left-2 pointer-events-none font-serif">“</span>
              <p className="relative z-10 pl-3">
                {copy.problem.keyQuote}
              </p>
            </div>
          </div>

          {/* List of 3 challenges / Costs of status-quo */}
          <div className="lg:col-span-7 space-y-6">
            <div data-animate className="text-sm text-gray-300 font-sans space-y-4 md:leading-relaxed">
              <p>{copy.problem.introParagraph}</p>
            </div>

            <div className="space-y-4 pt-2">
              {challenges.map((challenge) => (
                <div 
                  key={challenge.id}
                  id={`challenge-${challenge.id}`}
                  data-animate
                  className="bg-gray-900/40 p-5 rounded-xl border border-gray-900 hover:border-amber-500/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-amber-500/80 font-bold bg-amber-500/5 px-2 py-1 rounded border border-amber-500/10">
                      {challenge.id}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white font-serif">{challenge.title}</h4>
                      <p className="text-xs text-gray-400 font-sans">
                        <strong className="text-gray-300">Le Symptôme :</strong> {challenge.symptom}
                      </p>
                      <p className="text-xs text-red-300/90 font-sans">
                        <strong className="text-red-400/90">La Conséquence :</strong> {challenge.consequence}
                      </p>
                      <p className="text-xs text-gray-500 italic font-mono pt-1">
                        Le coût matériel : {challenge.costOfStatusQuo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div data-animate className="bg-amber-500/5 border border-amber-500/10 p-4 rounded-xl text-center text-xs text-amber-200/90 font-mono">
              ⚠️ {copy.problem.outroCallout}
            </div>
          </div>

        </div>
      </section>

       {/* SECTION 3 — SOLUTION / MÉTHODE */}
      <section data-animate id="section-method" className="relative w-full overflow-hidden py-20 px-4 md:px-6">
        {/* Full-bleed subtle sports background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.04] mix-blend-luminosity">
          <img 
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop" 
            alt="Athletic training precision" 
            className="w-full h-full object-cover filter blur-[2px]" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-transparent to-[#0b0f19]" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f19]/70 to-[#0b0f19]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span data-animate className="text-xs font-mono text-amber-500 tracking-wider uppercase block">
              {copy.method.sectionBadge}
            </span>
            <h2 data-animate className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              {copy.method.sectionTitle}
            </h2>
            <p data-animate className="text-sm sm:text-base text-gray-400 font-sans">
              {copy.method.sectionSubtitle}
            </p>
          </div>

          {/* Steps mapping block */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {methodSteps.map((step, index) => (
              <div 
                key={index}
                id={`method-step-${index}`}
                data-animate
                className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-amber-500 font-bold bg-amber-500/10 p-1.5 rounded-lg">
                      PHASE {step.number}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      {step.metric}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-semibold text-white font-serif mb-2">{step.title}</h3>
                  <p className="text-xs text-amber-400 font-mono mb-3">{step.shortDesc}</p>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{step.detailedDesc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex justify-between items-center text-[11px] font-mono text-gray-500">
                  <span>Protocole Scientifique</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Garanti actif
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              id="method-cta-quiz"
              onClick={scrollToQuiz}
              data-animate
              className="px-6 py-3 bg-transparent border border-amber-500/30 hover:border-amber-500/80 text-amber-400 text-xs font-mono font-bold tracking-wider rounded-lg uppercase transition-all cursor-pointer"
            >
              Démarrer mon évaluation d'entrée →
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 4 — BÉNÉFICES */}
      <section data-animate id="section-benefits" className="bg-gray-950/60 py-20 border-y border-gray-900 px-4 md:px-6 relative overflow-hidden">
        {/* Full-bleed subtle sports background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.05] mix-blend-luminosity">
          <img 
            src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200" 
            alt="Athletic flow and dynamic performance" 
            className="w-full h-full object-cover filter blur-[2px]" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-transparent to-[#0b0f19]" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f19]/70 to-[#0b0f19]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span data-animate className="text-xs font-mono text-amber-500 tracking-wider uppercase block">
              {copy.benefits.sectionBadge}
            </span>
            <h2 data-animate className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              {copy.benefits.sectionTitle}
            </h2>
            <p data-animate className="text-sm text-gray-400 font-sans">
              {copy.benefits.sectionSubtitle}
            </p>
          </div>

          {/* Benefits detailed layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                id={`benefit-card-${index}`}
                data-animate
                className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 space-y-3 hover:border-amber-500/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/15">
                    {benefit.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-600">0{index + 1} / 04</span>
                </div>

                <h3 className="text-base font-serif font-semibold text-white">{benefit.title}</h3>
                
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {benefit.persuasiveText}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Mesures vérifiées cliniquement</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 5 — PREUVES / RÉASSURANCE */}
      <section data-animate id="section-proof" className="relative w-full overflow-hidden py-20 px-4 md:px-6">
        {/* Full-bleed subtle sports background for high trust / proof */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.05] mix-blend-luminosity">
          <img 
            src="https://images.unsplash.com/photo-1502904585520-fac4372c3bea?q=80&w=1200" 
            alt="Elite sport athletic stride" 
            className="w-full h-full object-cover filter blur-[2px]" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-transparent to-[#0b0f19]" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f19]/70 to-[#0b0f19]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span data-animate className="text-xs font-mono text-amber-500 tracking-wider uppercase block">
              {copy.proof.sectionBadge}
            </span>
            <h2 data-animate className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              {copy.proof.sectionTitle}
            </h2>
            <p data-animate className="text-sm text-gray-400 font-sans">
              {copy.proof.sectionSubtitle}
            </p>
          </div>

          {/* Dynamic testimonial tab section */}
          <div data-animate className="scale-animation">
            <TestimonialSection />
          </div>
        </div>
      </section>


      {/* SECTION 6 — FAQ (ACCORDION WITH MICRO-ANIMATIONS) */}
      <section data-animate id="section-faq" className="bg-gray-950/60 py-20 border-t border-gray-900 px-4 md:px-6 relative overflow-hidden">
        {/* Full-bleed subtle sports background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.04] mix-blend-luminosity">
          <img 
            src="https://images.unsplash.com/photo-1510051646316-c3f25d078bad?q=80&w=1200" 
            alt="Athletic statistics physical metrics" 
            className="w-full h-full object-cover filter blur-[3px]" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-transparent to-[#0b0f19]" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f19]/80 to-[#0b0f19]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="text-center space-y-4 mb-12">
            <div data-animate className="inline-flex items-center gap-1 bg-amber-500/10 px-3 py-1 rounded-full text-xs font-mono text-amber-500">
              <BookOpen className="w-3.5 h-3.5" />
              RÉTICENCES ET QUESTIONS FRÉQUENTES
            </div>
            <h2 data-animate className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Réponses rationnelles à vos interrogations légitimes
            </h2>
            <p data-animate className="text-xs text-gray-400 font-mono uppercase">
              Aucun tabou ou promesse fallacieuse : la transparence est notre premier pilier.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  id={`faq-${index}`}
                  data-animate
                  className="bg-gray-900 border border-gray-850 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 cursor-pointer hover:bg-gray-850/50 transition-colors"
                  >
                    <div className="flex gap-3 items-center">
                      <span className="text-[10px] font-mono text-amber-500/85 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                        {faq.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-white font-sans">{faq.question}</h4>
                    </div>
                    <div className="text-amber-500 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-gray-850 bg-gray-950/40"
                      >
                        <p className="p-5 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div data-animate className="text-center pt-8">
            <span className="text-xs font-sans text-gray-400">
              Une objection précise reste en suspens ? Évoquons-la directement en toute bienveillance.
            </span>
          </div>

        </div>
      </section>


      {/* SECTION 7 — CALENDRIER EN DIRECT & CTA FINAL */}
      <section ref={bookingSectionRef} data-animate id="section-booking" className="relative w-full overflow-hidden py-20 px-4 md:px-6 scroll-mt-24">
        {/* Full-bleed subtle sports background representing ultimate focus and achievement (stadium track) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.06] mix-blend-luminosity">
          <img 
            src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=1600" 
            alt="Stadium tracks focus" 
            className="w-full h-full object-cover filter blur-[1px]" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-transparent to-[#0b0f19]" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f19]/70 to-[#0b0f19]" />
        </div>

        {/* Background Ambient Aura */}
        <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[350px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12 relative z-10">
            <h2 data-animate className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              {copy.ctaFinal.headline}
            </h2>

            <p data-animate className="text-sm md:text-base text-gray-300 font-sans max-w-2xl mx-auto">
              {copy.ctaFinal.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center text-xs text-gray-400 font-mono mt-4">
              <span data-animate className="bg-gray-900 border border-gray-800 px-3 py-1 rounded flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                {copy.ctaFinal.bullet1}
              </span>
              <span data-animate className="bg-gray-900 border border-gray-800 px-3 py-1 rounded flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                {copy.ctaFinal.bullet2}
              </span>
              <span data-animate className="bg-gray-900 border border-gray-800 px-3 py-1 rounded flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                {copy.ctaFinal.bullet3}
              </span>
            </div>
          </div>

          {/* Interactive Booking Module */}
          <div data-animate className="relative z-10 scale-animation">
            <BookingCalendar />
          </div>

          {/* Final Reassurance Lines */}
          <div data-animate className="text-center pt-8 text-xs text-gray-400 font-mono">
            🔒 {copy.ctaFinal.reassurance}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-animate className="bg-gray-950 border-t border-gray-900 py-10 px-4 md:px-6 text-center text-gray-500 text-xs mt-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex justify-center items-center gap-2">
            <span className="w-2 rounded-full bg-amber-500 h-2" />
            <span className="font-semibold text-gray-400">Silhouette & Performance</span>
          </div>
          <p className="max-w-2xl mx-auto font-sans leading-relaxed text-[11px]">
            La physiologie et la re-sensibilisation hormonale exigent un bilan approfondi. Cet outil de calcul n'est qu'un estimateur statistique d'usage général. Silhouette & Performance s'engage auprès des décideurs de confiance.
          </p>
          <div className="pt-2 flex justify-center gap-4 text-[10px] font-mono">
            <a href="#mentions" className="hover:text-amber-500 transition-colors">Mentions Légales & RGPD</a>
            <span>•</span>
            <a href="#proctole" className="hover:text-amber-500 transition-colors">Charte Médicale d'Académie</a>
            <span>•</span>
            <a href="#politique" className="hover:text-amber-500 transition-colors">Politique de Confidentialité des Données</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
