/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials } from "../data";
import { Quote, Sparkles, Trophy, Star } from "lucide-react";

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState<string>("1");

  const currentTestimonial = testimonials.find(t => t.id === activeTab) || testimonials[0];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Testimonials grid cards selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <button
            key={t.id}
            id={`testimonial-tab-${t.id}`}
            onClick={() => setActiveTab(t.id)}
            className={`text-left p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
              activeTab === t.id
                ? "bg-gray-900 border-amber-500/50 premium-glow"
                : "bg-gray-900/40 border-gray-800 hover:border-gray-700/60"
            }`}
          >
            {activeTab === t.id && (
              <div className="absolute top-0 right-0 gold-gradient-bg h-1 w-full" />
            )}

            <div className="flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full border border-gray-700 object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold text-white font-sans">{t.name}</h4>
                <p className="text-xs text-gray-400 truncate max-w-[150px]">{t.role}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/10">
                {t.stats}
              </span>
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500" />
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Deep-dive Case Study Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          {/* Column 1: Testimonial Quote */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-amber-500 bg-amber-500/5 border border-amber-500/10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono">
              <Trophy className="w-3.5 h-3.5" />
              RÉSULTAT SÉCURISÉ EN 90 JOURS
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-3 -left-3 text-amber-500/10 w-12 h-12" />
              <p className="text-base md:text-lg font-serif italic text-white leading-relaxed relative z-10 pl-4">
                {currentTestimonial.quote}
              </p>
            </div>

            <div className="pl-4 border-l-2 border-amber-500/30 font-sans text-sm text-gray-300 leading-relaxed space-y-2 pt-2">
              <p>{currentTestimonial.detailedStory}</p>
            </div>
            
            <div className="pl-4 pt-1">
              <span className="text-xs text-amber-500/80 font-mono font-medium">
                — {currentTestimonial.name}, {currentTestimonial.role}
              </span>
            </div>
          </div>

          {/* Column 2: Visual Metre & Confidence Indicators */}
          <div className="lg:col-span-5 bg-gray-950/30 rounded-xl p-5 border border-gray-800/80 space-y-4 text-center">
            <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs py-1 px-3 rounded-full font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              ANALYSE CLINIQUEMENT VALIDÉE
            </div>

            <div className="space-y-1">
              <div className="text-3xl font-serif font-black text-amber-500 tracking-tight">
                {currentTestimonial.stats}
              </div>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                Stabilité Hormonale Garantie
              </div>
            </div>

            <div className="w-full h-px bg-gray-800 my-2" />

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="bg-gray-900/50 p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] font-mono text-gray-400">ÉNERGIE COGNITIVE</div>
                <div className="text-sm font-bold text-white font-serif">+140% Stable</div>
              </div>
              <div className="bg-gray-900/50 p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] font-mono text-gray-400">GRAISSE VISCÉRALE</div>
                <div className="text-sm font-bold text-emerald-400 font-serif">-18% Moyenne</div>
              </div>
              <div className="bg-gray-900/50 p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] font-mono text-gray-400">STRESS (CORTISOL)</div>
                <div className="text-sm font-bold text-emerald-400 font-serif">-44% Réduit</div>
              </div>
              <div className="bg-gray-900/50 p-2.5 rounded-lg border border-gray-800">
                <div className="text-[10px] font-mono text-gray-400">RATIO D'ADAPTATION</div>
                <div className="text-sm font-bold text-white font-serif">100% Intégré</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
