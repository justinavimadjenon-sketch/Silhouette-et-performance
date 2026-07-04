/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, RefObject, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Dumbbell, 
  Brain, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  TrendingDown, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  HelpCircle,
  X
} from "lucide-react";

interface TooltipProps {
  term: string;
  definition: string;
}

export function MetabolicTooltip({ term, definition }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block whitespace-nowrap">
      <span
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="underline decoration-dotted decoration-amber-500 hover:decoration-amber-400 cursor-pointer text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-0.5 font-medium select-none"
      >
        {term}
        <HelpCircle className="w-3.5 h-3.5 text-amber-500/70 hover:text-amber-400" />
      </span>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-away overlay */}
            <div 
              className="fixed inset-0 z-40 cursor-default" 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            />
            {/* Popover */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 sm:w-80 bg-gray-950 border border-amber-500/30 p-4 rounded-xl shadow-2xl z-50 text-left font-sans whitespace-normal"
              style={{ top: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="text-[9px] font-mono font-bold tracking-wider text-amber-500 uppercase">
                  Lexique Physiologique
                </span>
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-300 transition-colors p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <h5 className="text-xs font-bold text-white font-serif mb-1">{term}</h5>
              <p className="text-[11px] text-gray-300 leading-relaxed font-sans">{definition}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </span>
  );
}

interface QuizProps {
  onQuizComplete: (data: { name: string; email: string; phone: string; score: number }) => void;
  bookingRef: RefObject<HTMLDivElement | null>;
}

export default function MetabolicQuiz({ onQuizComplete, bookingRef }: QuizProps) {
  const [step, setStep] = useState<number>(1);
  const [activity, setActivity] = useState<string>("");
  const [dietPattern, setDietPattern] = useState<string>("");
  const [stressLevel, setStressLevel] = useState<string>("");
  const [targetWeight, setTargetWeight] = useState<string>("");
  
  // Lead Info
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Diagnostic Results Simulation
  const [resultScore, setResultScore] = useState<number>(50);

  const totalSteps = 5;

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const calculateScore = () => {
    let score = 75; // Initial high metabolic speed
    if (activity === "sedentary") score -= 15;
    if (dietPattern === "skip_business") score -= 10;
    if (dietPattern === "snack_night") score -= 15;
    if (stressLevel === "extreme") score -= 20;
    if (stressLevel === "moderate") score -= 10;
    return Math.max(15, score);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const calculated = calculateScore();
      setResultScore(calculated);
      setIsSubmitting(false);
      setIsSubmitted(true);
      onQuizComplete({ name, email, phone, score: calculated });
    }, 1200);
  };

  const resetQuiz = () => {
    setStep(1);
    setActivity("");
    setDietPattern("");
    setStressLevel("");
    setTargetWeight("");
    setName("");
    setEmail("");
    setPhone("");
    setIsSubmitted(false);
  };

  const scrollConfirm = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-amber-500/20 premium-glow text-gray-200">
      {/* Quiz Progress Header */}
      {!isSubmitted && (
        <div className="mb-8 border-b border-gray-800 pb-5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
            <div>
              <span className="text-[10px] tracking-widest font-mono text-amber-500 font-bold block mb-1">
                SYNTHÈSE PHYSIOLOGIQUE • ANALYSE EN DIRECT
              </span>
              <h2 className="text-lg font-serif font-bold text-white">Évaluation de votre métabolisme</h2>
            </div>
            <div className="text-right sm:text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center gap-2">
              <span className="text-xs font-mono text-gray-300">
                Étape <strong className="text-amber-500 font-bold">{step}</strong> sur {totalSteps}
              </span>
              <span className="text-[11px] font-mono text-amber-500/80 bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded">
                {totalSteps - step === 0 ? (
                  "Dernière étape : Rapport Final"
                ) : (
                  `${totalSteps - step} question${totalSteps - step > 1 ? "s" : ""} restante${totalSteps - step > 1 ? "s" : ""}`
                )}
              </span>
            </div>
          </div>

          {/* Premium segmented progress bar */}
          <div className="grid grid-cols-5 gap-2.5">
            {[1, 2, 3, 4, 5].map((i) => {
              const isActive = i === step;
              const isCompleted = i < step;
              return (
                <div key={i} className="space-y-1.5">
                  <div className="relative h-1.5 rounded-full overflow-hidden bg-gray-800">
                    <div 
                      className={`absolute inset-y-0 left-0 h-full rounded-full transition-all duration-500 ease-out ${
                        isCompleted 
                          ? "bg-amber-500 w-full" 
                          : isActive 
                            ? "bg-gradient-to-r from-amber-400 to-amber-600 w-full animate-pulse" 
                            : "w-0"
                      }`}
                    />
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span 
                      className={`text-[9px] font-mono transition-colors duration-300 ${
                        isActive 
                          ? "text-amber-400 font-bold" 
                          : isCompleted 
                            ? "text-gray-400" 
                            : "text-gray-600"
                      }`}
                    >
                      {i === 5 ? "Bilan" : `Q${i}`}
                    </span>
                    {isCompleted && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 1: Physical Activity */}
        {step === 1 && !isSubmitted && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <Dumbbell className="text-amber-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-white font-serif">Quel est votre niveau d'activité quotidien réel ?</h3>
            </div>
            <div className="text-sm text-gray-400 mb-4 font-sans leading-relaxed">
              L'activité physique structurelle réveille vos{" "}
              <MetabolicTooltip 
                term="récepteurs d'insuline musculaires" 
                definition="L'insuline régule le taux de sucre. Lorsque les muscles y deviennent insensibles (insulinorésistance), le sucre s'accumule sous forme de graisses au niveau de la sangle abdominale." 
              />
              . Soyez honnête avec votre niveau d'entraînement réel.
            </div>
            <div className="space-y-3">
              <button
                id="activity-sedentary"
                onClick={() => { setActivity("sedentary"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activity === "sedentary" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Sédentaire</div>
                <div className="text-xs text-gray-400 mt-1">Essentiellement assis au bureau, trajets en voiture (moins de 4 000 pas/jour)</div>
              </button>
              <button
                id="activity-moderate"
                onClick={() => { setActivity("moderate"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activity === "moderate" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Actif Modéré</div>
                <div className="text-xs text-gray-400 mt-1">Marche quotidienne de transition, 1 séance de sport légère par semaine</div>
              </button>
              <button
                id="activity-intense"
                onClick={() => { setActivity("intense"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activity === "intense" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Déplacements fréquents</div>
                <div className="text-xs text-gray-400 mt-1">Garages, gares, aéroports, piétinement régulier mais pas de sport fixe</div>
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Diet Pattern */}
        {step === 2 && !isSubmitted && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <Flame className="text-amber-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-white font-serif">Comment décririez-vous vos habitudes alimentaires ?</h3>
            </div>
            <div className="text-sm text-gray-400 mb-4 font-sans leading-relaxed">
              La régularité et les combinaisons alimentaires dictent{" "}
              <MetabolicTooltip 
                term="l'assimilation hépatique" 
                definition="Le foie (hépatique) gère la distribution d'énergie. S'il est surmené par de mauvais mélanges d'aliments ou des repas trop rapides, il ralentit la combustion et stocke le surplus." 
              />
              .
            </div>
            <div className="space-y-3">
              <button
                id="diet-skip"
                onClick={() => { setDietPattern("skip_business"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  dietPattern === "skip_business" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Saut de repas & Repas d'Affaires</div>
                <div className="text-xs text-gray-400 mt-1">Peu faim le matin, déjeuner rapide ou chaud d'affaires, dîner copieux en soirée</div>
              </button>
              <button
                id="diet-snack"
                onClick={() => { setDietPattern("snack_night"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  dietPattern === "snack_night" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Grignotage mental de fin de journée</div>
                <div className="text-xs text-gray-400 mt-1">Cadre alimentaire propre en journée, pulsions sucrées/salées après 19h liée au stress</div>
              </button>
              <button
                id="diet-clean"
                onClick={() => { setDietPattern("irregular_fast"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  dietPattern === "irregular_fast" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Repas ultra-rapides désordonnés</div>
                <div className="text-xs text-gray-400 mt-1">Manger devant de multiples écrans de courriels sans conscience, plats préparés rapides</div>
              </button>
            </div>
            <button
              id="back-step1"
              onClick={() => setStep(1)}
              className="mt-2 text-xs font-mono text-gray-400 hover:text-amber-500 flex items-center gap-1 cursor-pointer"
            >
              ← Revenir à l'étape précédente
            </button>
          </motion.div>
        )}

        {/* Step 3: Stress Levels */}
        {step === 3 && !isSubmitted && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <Brain className="text-amber-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-white font-serif">Quel est l'impact du stress lié à vos responsabilités ?</h3>
            </div>
            <div className="text-sm text-gray-400 mb-4 font-sans leading-relaxed">
              Le stress sécrète de manière continue du{" "}
              <MetabolicTooltip 
                term="cortisol" 
                definition="L'hormone suprême du stress. Des pics de cortisol élevés verrouillent la libération des lipides par les adipocytes profonds et réduisent la thermogenèse." 
              />
              , ce qui bloque l'accès cellulaire aux réserves graisseuses profondes.
            </div>
            <div className="space-y-3">
              <button
                id="stress-extreme"
                onClick={() => { setStressLevel("extreme"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  stressLevel === "extreme" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Stress permanent de décideur</div>
                <div className="text-xs text-gray-400 mt-1">Charge décisionnelle omniprésente, sommeil superficiel ou agité récurrent</div>
              </button>
              <button
                id="stress-moderate"
                onClick={() => { setStressLevel("moderate"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  stressLevel === "moderate" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Stress fluctuant habituel</div>
                <div className="text-xs text-gray-400 mt-1">Stress ponctuel gérable mais impacte mon alimentation par vagues</div>
              </button>
            </div>
            <button
              id="back-step2"
              onClick={() => setStep(2)}
              className="mt-2 text-xs font-mono text-gray-400 hover:text-amber-500 flex items-center gap-1 cursor-pointer"
            >
              ← Revenir à l'étape précédente
            </button>
          </motion.div>
        )}

        {/* Step 4: Weight Objective */}
        {step === 4 && !isSubmitted && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-amber-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-white font-serif">Quel est votre objectif prioritaire de métamorphose ?</h3>
            </div>
            <div className="text-sm text-gray-400 mb-4 font-sans leading-relaxed">
              Ciblez-vous l'élimination de la{" "}
              <MetabolicTooltip 
                term="graisse viscérale" 
                definition="La graisse hautement inflammatoire et toxique nichée sous vos muscles abdominaux autour de vos organes, ou souhaitez-vous restructurer votre métabolisme général." 
              />{" "}
              ou la restauration complète de votre{" "}
              <MetabolicTooltip 
                term="dynamisme thyroïdien" 
                definition="La thyroïde est le chef d'orchestre de la dépense calorique. S'il est affaibli (par du stress extrême ou un manque de repos), votre corps brûle beaucoup moins d'énergie, même au calme." 
              />{" "}
              ?
            </div>
            <div className="space-y-3">
              <button
                id="target-visceral"
                onClick={() => { setTargetWeight("visceral"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  targetWeight === "visceral" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Éliminer la graisse abdominale profonde (-8 à -15 kg)</div>
                <div className="text-xs text-gray-400 mt-1">Alléger la charge viscérale, affiner la taille et retrouver mon costume fétiche</div>
              </button>
              <button
                id="target-tonus"
                onClick={() => { setTargetWeight("tonus"); handleNextStep(); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  targetWeight === "tonus" 
                    ? "bg-amber-500/10 border-amber-500 text-white" 
                    : "bg-gray-800/40 border-gray-700/60 hover:border-amber-500/40 text-gray-300"
                }`}
              >
                <div className="font-semibold text-base">Regagner un tonus athlétique pur (-4 à -7 kg)</div>
                <div className="text-xs text-gray-400 mt-1">Me tonifier, sécher en profondeur, dessiner la sangle abdominale sans fonte musculaire</div>
              </button>
            </div>
            <button
              id="back-step3"
              onClick={() => setStep(3)}
              className="mt-2 text-xs font-mono text-gray-400 hover:text-amber-500 flex items-center gap-1 cursor-pointer"
            >
              ← Revenir à l'étape précédente
            </button>
          </motion.div>
        )}

        {/* Step 5: Contact Lead Info Form */}
        {step === 5 && !isSubmitted && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="text-amber-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-white font-serif">Calcul de votre profil métabolique en cours...</h3>
            </div>
            <p className="text-sm text-gray-300 font-sans">
              À qui devons-nous envoyer le rapport d'analyse physiopathologique personnalisé comprenant vos indicateurs thermogéniques ?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">PRENOM / NOM NOMINAL</label>
                <input
                  id="quiz-name"
                  type="text"
                  required
                  placeholder="ex. Jean-François Aubry"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 focus:border-amber-500 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">ADRESSE DE SÉCURITÉ EMAIL DE DEVOIR</label>
                <input
                  id="quiz-email"
                  type="email"
                  required
                  placeholder="ex. jf.aubry@societe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 focus:border-amber-500 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">NIVEAU DE CONFIDENTIALITÉ TÉLÉPHONE (Optionnel - pour SMS d'alerte)</label>
                <input
                  id="quiz-phone"
                  type="tel"
                  placeholder="ex. +33 6 12 34 56 78"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 focus:border-amber-500 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              <div className="bg-amber-500/5 p-3 rounded-lg border border-amber-500/10 flex gap-2 items-start text-xs text-amber-100/80">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Nous garantissons une confidentialité totale de vos données de santé estimées, aucun partage tiers.</span>
              </div>

              <button
                id="submit-quiz"
                type="submit"
                disabled={isSubmitting}
                className="w-full gold-gradient-bg hover:opacity-90 text-gray-950 font-bold py-3 px-6 rounded-lg transition-transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <> Génération de l'analyse... </>
                ) : (
                  <>
                    <span>Accéder à mes Constantes Biologiques</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            <button
              id="back-step4"
              onClick={() => setStep(4)}
              className="mt-2 text-xs font-mono text-gray-400 hover:text-amber-500 flex items-center gap-1 cursor-pointer"
            >
              ← Revenir à l'étape précédente
            </button>
          </motion.div>
        )}

        {/* Results Screen */}
        {isSubmitted && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-white">Analyse Terminée, {name} !</h3>
              <p className="text-sm text-gray-400 font-sans mt-1">Nous venons de vous envoyer la fiche d'ingénierie par e-mail.</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/60 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="text-xs font-mono text-gray-400">INDICE D'EFFICACITÉ MÉTABOLIQUE ESTIMÉ</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-mono font-bold text-amber-500">{resultScore}%</span>
                  <span className="text-xs text-red-400 flex items-center gap-0.5 font-mono">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Ralenti (-{100 - resultScore}%)
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Votre niveau de stress (cortisol sécrété) couplé à votre rythme de vie ralentit la thermogenèse naturelle. Votre corps tend à préserver l'eau et les graisses abdominales.
                </p>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-gray-700/60 pt-4 md:pt-0 md:pl-5 space-y-3">
                <div className="text-xs font-mono text-gray-400">SYNTHÈSE DE STRATÉGIE CONSEILLÉE</div>
                <ul className="text-xs text-gray-300 space-y-2 font-mono">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Inverser l'insulinorésistance chronique</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Modifier les tampons cortisoliques</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>0 restriction sociale requise</span>
                  </li>
                </ul>
                <div className="text-xs text-amber-300 flex items-center gap-1.5 font-mono bg-amber-950/20 px-2 py-1 rounded border border-amber-500/10">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Potentiel réversible en 14 jours</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-amber-900/5 p-5 rounded-xl border border-amber-500/20 text-center space-y-4">
              <h4 className="text-base font-serif font-medium text-white">Étape suivante : Co-définir votre protocole de déblocage</h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans max-w-md mx-auto">
                Pour aller plus loin, nous vous offrons une session d'évaluation clinique et métabolique privée de 30 minutes. Nous analyserons ensemble vos résultats réels et validerons si cette méthode haut de gamme s'aligne à vos impératifs d'agenda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  id="book-via-quiz"
                  onClick={scrollConfirm}
                  className="gold-gradient-bg text-gray-950 text-xs font-bold py-2.5 px-5 rounded-lg flex items-center justify-center gap-1 hover:opacity-90 cursor-pointer shadow-lg"
                >
                  <span>Réserver mon Appel de diagnostic Offert</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  id="restart-quiz"
                  onClick={resetQuiz}
                  className="bg-gray-800 text-gray-300 hover:text-white border border-gray-700 text-xs font-mono py-2.5 px-4 rounded-lg cursor-pointer"
                >
                  Recommencer le test
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
