/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  PhoneCall, 
  User, 
  ChevronRight, 
  Check, 
  Info, 
  AlertTriangle 
} from "lucide-react";

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingStep, setBookingStep] = useState<'datetime' | 'details' | 'success'>('datetime');
  const [loading, setLoading] = useState<boolean>(false);

  // User input states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [note, setNote] = useState<string>("");

  // Generating next 7 business days (skipping Sunday)
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    let current = new Date(today);

    while (days.length < 7) {
      current.setDate(current.getDate() + 1);
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0) { // Skip Sunday
        const dayString = current.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
        const isoString = current.toISOString().split('T')[0];
        days.push({ label: dayString, value: isoString });
      }
    }
    return days;
  };

  const daysList = getNextDays();

  // Premium time slots
  const slots = [
    "09:00", "10:00", "11:30", "14:00", "15:30", "17:00", "18:30"
  ];

  const handleNextStep = () => {
    if (selectedDate && selectedTime) {
      setBookingStep('details');
    }
  };

  const handleBook = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBookingStep('success');
    }, 1500);
  };

  const formatDateFrench = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 border border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl premium-glow">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left column: Context & Coach Profiling */}
        <div className="lg:col-span-5 bg-gradient-to-b from-gray-950 to-gray-900 p-6 md:p-8 lg:border-r border-gray-800 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs px-2.5 py-1 rounded-full font-mono font-medium mb-4">
              <PhoneCall className="w-3.5 h-3.5" />
              SESSION DE CONSEIL OFFERTE
            </div>
            
            <h3 className="text-xl md:text-2xl font-serif text-white font-semibold leading-snug">
              Votre Diagnostic & Plan D'Action Métabolique Individuel
            </h3>
            
            <p className="text-gray-400 text-sm mt-3 font-sans leading-relaxed">
              Un entretien stratégique confidentiel de 30 minutes avec votre physiologiste sénior. L'objectif est d'étudier votre profil hormonal d'affaires et de valider si notre accompagnement correspond à vos objectifs de silhouettes et d'agenda.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-amber-500/10 p-1.5 text-amber-500 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Durée de l'appel</h4>
                  <p className="text-xs text-gray-400">30 minutes de haute clarté, sans pression commerciale</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-amber-500/10 p-1.5 text-amber-500 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Lieu de l'évaluation</h4>
                  <p className="text-xs text-gray-400">Appel Audio Direct Téléphonique ou visioconférence Zoom sécurisée</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-amber-500/10 p-1.5 text-amber-500 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Animé par</h4>
                  <p className="text-xs text-gray-400">Jean-Baptiste Laurent, Physiologiste du sport et Coach de Dirigeants</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="text-xs text-amber-500/90 font-mono mb-2 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 shrink-0" />
              IMPORTANT AVANT DE RÉSERVER :
            </div>
            <p className="text-xs text-gray-500 italic leading-relaxed">
              Cet appel est réservé aux dirigeants, entrepreneurs ou cadres motivés à investir dans leur santé. Veuillez honorer le créneau sélectionné ou annuler au moins 12h à l'avance.
            </p>
          </div>
        </div>

        {/* Right column: Interactive Scheduling Widget */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-gray-900/60 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {bookingStep === 'datetime' && (
              <motion.div
                key="dt-selector"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-base font-serif font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    1. Choisissez votre date de diagnostic
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                    {daysList.map((day) => (
                      <button
                        key={day.value}
                        id={`date-${day.value}`}
                        onClick={() => { setSelectedDate(day.value); setSelectedTime(""); }}
                        className={`py-2.5 px-3 rounded-lg text-center border text-xs transition-all cursor-pointer ${
                          selectedDate === day.value
                            ? "bg-amber-500 text-gray-950 font-bold border-amber-500"
                            : "bg-gray-800/50 border-gray-700/60 hover:border-amber-500/40 text-gray-200"
                        }`}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <h4 className="text-base font-serif font-semibold text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-amber-500" />
                      2. Choisissez l'horaire de convenance
                    </h4>
                    <p className="text-xs text-gray-400">Fuseau horaire configuré automatiquement d'après votre navigateur.</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {slots.map((time) => (
                        <button
                          key={time}
                          id={`time-${time}`}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 rounded-lg text-center border text-xs font-mono transition-all cursor-pointer ${
                            selectedTime === time
                              ? "bg-amber-500 text-gray-950 font-bold border-amber-500"
                              : "bg-gray-800/30 border-gray-800 hover:border-amber-500/30 text-gray-300"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="pt-4 border-t border-gray-800 flex justify-end">
                  <button
                    id="confirm-datetime"
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className="energy-cta px-6 py-3 bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-600 text-gray-950 font-bold rounded-lg text-sm flex items-center gap-1 transition-all cursor-pointer shadow-lg"
                  >
                    <span>Valider ces informations</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {bookingStep === 'details' && (
              <motion.div
                key="dt-details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-base font-serif font-semibold text-white">
                    3. Complétez vos coordonnées confidentielles
                  </h4>
                  <p className="text-xs text-amber-500 mt-1 font-mono">
                    Session sélectionnée : {formatDateFrench(selectedDate)} à {selectedTime}
                  </p>
                </div>

                <form onSubmit={handleBook} className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">PROFIL NOMINAL</label>
                      <input
                        id="book-name"
                        type="text"
                        required
                        placeholder="ex. Jean-François Aubry"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-950 border border-gray-800 focus:border-amber-500 rounded-lg py-2 px-3 text-white placeholder-gray-600 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">NUMÉRO DE PORTABLE DIRECT</label>
                      <input
                        id="book-phone"
                        type="tel"
                        required
                        placeholder="ex. 06 12 34 56 78"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-gray-950 border border-gray-800 focus:border-amber-500 rounded-lg py-2 px-3 text-white placeholder-gray-600 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">ADRESSE EMAIL PROFESSIONNELLE</label>
                    <input
                      id="book-email"
                      type="email"
                      required
                      placeholder="ex. jf.aubry@societe.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-800 focus:border-amber-500 rounded-lg py-2 px-3 text-white placeholder-gray-600 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">VOTRE CONTEXTE & PREMIER OBSTACLE (Optionnel)</label>
                    <textarea
                      id="book-notes"
                      rows={3}
                      placeholder="ex. Repas d'affaires fréquents, je dors 5 heures par nuit. Objectif : perdre la graisse du ventre..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-800 focus:border-amber-500 rounded-lg py-2 px-3 text-white placeholder-gray-600 outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <div className="pt-3 border-t border-gray-800 flex gap-3 justify-between items-center">
                    <button
                      id="book-back"
                      type="button"
                      onClick={() => setBookingStep('datetime')}
                      className="text-xs font-mono text-gray-400 hover:text-amber-500 cursor-pointer"
                    >
                      ← Revenir en arrière
                    </button>
                    <button
                      id="confirm-booking"
                      type="submit"
                      disabled={loading}
                      className="gold-gradient-bg text-gray-950 font-bold py-3 px-6 rounded-lg text-sm flex items-center gap-1.5 transition-transform hover:-translate-y-0.5 cursor-pointer shadow-lg disabled:opacity-50"
                    >
                      {loading ? (
                        <>Inscription de l'appel...</>
                      ) : (
                        <>
                          <span>Sécuriser mon créneau d'appel</span>
                          <Check className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {bookingStep === 'success' && (
              <motion.div
                key="dt-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-serif font-bold text-white">Votre entretien est confirmé !</h4>
                  <p className="text-sm text-gray-300 px-4">
                    Félicitations {name}, votre session stratégique privée de déblocage métabolique est validée pour le :
                  </p>
                  <p className="text-base font-bold text-amber-500 bg-amber-500/5 border border-amber-500/10 inline-block px-4 py-2 mt-2 rounded">
                    {formatDateFrench(selectedDate)} à {selectedTime}
                  </p>
                </div>

                <div className="bg-gray-950/80 rounded-xl p-5 border border-gray-800 text-left space-y-3 max-w-md mx-auto">
                  <div className="text-xs font-mono text-amber-500 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    CHECKLIST DE PRÉPARATION (3 ÉTAPES) :
                  </div>
                  <ul className="text-xs text-gray-300 space-y-2.5 font-sans leading-relaxed">
                    <li className="flex gap-2">
                      <span className="font-bold text-amber-500">1.</span>
                      <span><strong>Raccrochez à l'heure :</strong> Le coach vous appellera directement sur votre portable au <strong>{phone}</strong>. Soyez dans un endroit calme.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-amber-500">2.</span>
                      <span><strong>Préparez votre historique :</strong> Sachez résumer rapidement vos 2 dernières tentatives de perte de poids et l'erreur que vous ne voulez plus reproduire.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-amber-500">3.</span>
                      <span><strong>Invitation e-mail :</strong> Nous vous avons fait parvenir une invitation d'intégration Google Agenda et Outlook avec les coordonnées détaillées.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    id="reset-booking-view"
                    onClick={() => { setSelectedDate(""); setSelectedTime(""); setBookingStep('datetime'); }}
                    className="text-xs font-mono text-gray-400 hover:text-white cursor-pointer underline"
                  >
                    Besoin de planifier un autre créneau en cas d'urgence ?
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
