"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  XMarkIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  VideoCameraIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useBookSiteVisit } from "@/context/BookSiteVisitContext";
import { projects } from "@/lib/data/projects";

const TOUR_TYPES = [
  {
    id: "in-person",
    label: "In-Person Site Visit",
    icon: BuildingOfficeIcon,
    description: "Guided tour of the active construction site or completed show apartments",
  },
  {
    id: "virtual-tour",
    label: "Guided Virtual Video Tour",
    icon: VideoCameraIcon,
    description: "Live 1-on-1 video walkthrough with an RHA sales architect",
  },
];

const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

export function BookSiteVisitModal() {
  const { isOpen, preselectedProjectSlug, closeModal } = useBookSiteVisit();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string>(
    preselectedProjectSlug || projects[0]?.slug || "rha-heights"
  );
  const [selectedTourType, setSelectedTourType] = useState<string>("in-person");

  // Date selection (Default to tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState<Date>(tomorrow);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("11:30 AM");

  // Visitor Details
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("+92 ");
  const [email, setEmail] = useState("");
  const [attendeesCount, setAttendeesCount] = useState(2);
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (preselectedProjectSlug) {
      setSelectedProjectSlug(preselectedProjectSlug);
    }
  }, [preselectedProjectSlug]);

  useEffect(() => {
    if (!isOpen) {
      // Reset step when closed after small delay
      const timer = setTimeout(() => {
        setStep(1);
        setErrorMessage("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentProject =
    projects.find((p) => p.slug === selectedProjectSlug) || projects[0];

  // Calendar Helper functions
  const formattedDateString = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleNextStep = () => {
    setErrorMessage("");
    if (step === 1 && !selectedProjectSlug) {
      setErrorMessage("Please select a project to proceed.");
      return;
    }
    if (step === 2 && (!selectedDate || !selectedTimeSlot)) {
      setErrorMessage("Please select a date and time slot.");
      return;
    }
    setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
  };

  const handlePrevStep = () => {
    setErrorMessage("");
    setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setErrorMessage("Please fill in your name, phone number, and email.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectSlug: currentProject.slug,
          projectName: currentProject.name,
          tourType: selectedTourType,
          visitDate: formattedDateString,
          visitTimeSlot: selectedTimeSlot,
          fullName,
          phone,
          email,
          attendeesCount,
          notes,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to confirm booking.");
      }

      setBookingRef(json.bookingReference || `RHA-${Math.floor(1000 + Math.random() * 9000)}`);
      setStep(4);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed.";
      setErrorMessage(msg);
    } finally {
      setSubmitting(false);
    }
  };

  // Google Calendar Link Generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(
      `RHA Builder Site Visit — ${currentProject.name}`
    );
    const details = encodeURIComponent(
      `Booking Ref: ${bookingRef}\nTour Type: ${selectedTourType}\nVisitor: ${fullName}\nPhone: ${phone}`
    );
    const location = encodeURIComponent(`${currentProject.name}, ${currentProject.city}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello RHA Builder, I just booked a site visit for ${currentProject.name} on ${formattedDateString} at ${selectedTimeSlot}. My Ref: ${bookingRef}`
    );
    return `https://wa.me/923228015195?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md transition-opacity duration-300 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-visit-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 m-auto">
        {/* Modal Header */}
        <div className="bg-[var(--color-surface-dark)] text-white px-6 md:px-8 py-4 md:py-5 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-accent)]/20 border border-[var(--color-brand-accent)]/30 flex items-center justify-center text-[var(--color-brand-accent)] shrink-0">
              <CalendarDaysIcon className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="site-visit-modal-title"
                className="font-display text-xl font-semibold text-white leading-tight"
              >
                Book a Site Visit
              </h2>
              <p className="text-xs text-[var(--color-text-on-dark-muted)] font-sans">
                Schedule a guided walkthrough with RHA Builder architects
              </p>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-sans text-slate-600 shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--color-brand-primary)]">
                Step {step} of 3:
              </span>
              <span>
                {step === 1 && "Choose Development & Tour Type"}
                {step === 2 && "Select Date & Time"}
                {step === 3 && "Visitor Contact Details"}
              </span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i <= step
                      ? "w-6 bg-[var(--color-brand-accent)]"
                      : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 max-h-[calc(90vh-130px)]">
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
              {errorMessage}
            </div>
          )}

          {/* ── STEP 1: PROJECT & TOUR TYPE SELECTOR ── */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                  1. Select Development Project
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projects.map((proj) => {
                    const isSelected = proj.slug === selectedProjectSlug;
                    const imgSrc = proj.coverImage || proj.heroImage;
                    return (
                      <button
                        key={proj.slug}
                        type="button"
                        onClick={() => setSelectedProjectSlug(proj.slug)}
                        className={`p-3 text-left rounded-2xl border transition-all flex items-center gap-3.5 group ${
                          isSelected
                            ? "border-[var(--color-brand-accent)] bg-[var(--color-surface-secondary)] ring-2 ring-[var(--color-brand-accent)]/60 shadow-md"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-200 relative shadow-sm">
                          <img
                            src={imgSrc}
                            alt={proj.name}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <h4 className="font-display font-semibold text-sm text-[var(--color-text-primary)] truncate">
                              {proj.name}
                            </h4>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded capitalize ${
                              proj.status === 'ongoing' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {proj.status}
                            </span>
                          </div>
                          <p className="text-xs text-[var(--color-text-muted)] truncate font-sans">
                            {proj.locationName}, {proj.city}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                  2. Choose Tour Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TOUR_TYPES.map((t) => {
                    const Icon = t.icon;
                    const isSelected = t.id === selectedTourType;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTourType(t.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-white shadow-lg"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon
                            className={`w-5 h-5 ${
                              isSelected
                                ? "text-[var(--color-brand-accent)]"
                                : "text-[var(--color-brand-primary)]"
                            }`}
                          />
                          <span className="font-semibold text-sm">
                            {t.label}
                          </span>
                        </div>
                        <p
                          className={`text-xs leading-relaxed ${
                            isSelected ? "text-slate-200" : "text-slate-500"
                          }`}
                        >
                          {t.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  style={{
                    backgroundColor: "var(--color-brand-primary)",
                    color: "#ffffff",
                  }}
                  className="px-7 py-3 text-sm font-semibold rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-90 transition-all font-sans"
                >
                  Continue to Date & Time
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: DATE & TIME PICKER ── */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-[var(--color-text-primary)]">
                    Select Preferred Date
                  </label>
                  <span className="text-xs text-[var(--color-brand-secondary)] font-medium">
                    Selected: {formattedDateString}
                  </span>
                </div>

                {/* Quick Date Choice Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                  {[1, 2, 3, 5, 7].map((daysToAdd) => {
                    const dateObj = new Date();
                    dateObj.setDate(dateObj.getDate() + daysToAdd);
                    const isSame =
                      dateObj.toDateString() === selectedDate.toDateString();
                    const dayLabel =
                      daysToAdd === 1
                        ? "Tomorrow"
                        : dateObj.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          });

                    return (
                      <button
                        key={daysToAdd}
                        type="button"
                        onClick={() => setSelectedDate(dateObj)}
                        className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                          isSame
                            ? "border-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/15 text-[var(--color-brand-primary)] ring-2 ring-[var(--color-brand-accent)]"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {dayLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = slot === selectedTimeSlot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                          isSelected
                            ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-white shadow-md"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <ClockIcon className="w-3.5 h-3.5 mx-auto mb-1 opacity-70" />
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Summary Preview */}
              <div className="p-4 rounded-2xl bg-[var(--color-surface-secondary)] border border-[var(--color-border)] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[var(--color-text-muted)] block font-sans">
                    Project Selected
                  </span>
                  <span className="font-semibold text-[var(--color-text-primary)] font-display text-sm">
                    {currentProject.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[var(--color-text-muted)] block font-sans">
                    Appointment Window
                  </span>
                  <span className="font-semibold text-[var(--color-brand-secondary)] font-sans">
                    {formattedDateString} @ {selectedTimeSlot}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNextStep}
                  style={{
                    backgroundColor: "var(--color-brand-primary)",
                    color: "#ffffff",
                  }}
                  className="px-7 py-3 text-sm font-semibold rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-90 transition-all font-sans"
                >
                  Enter Visitor Details
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: VISITOR CONTACT FORM ── */}
          {step === 3 && (
            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] font-sans"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5">
                    Number of Attendees
                  </label>
                  <select
                    value={attendeesCount}
                    onChange={(e) => setAttendeesCount(Number(e.target.value))}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] font-sans bg-white"
                  >
                    <option value={1}>1 Person</option>
                    <option value={2}>2 People (Recommended)</option>
                    <option value={3}>3 People</option>
                    <option value={4}>4+ Family / Investment Team</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5">
                  Specific Requirements or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Interested in 3-bedroom penthouse layout and flexible payment schedules"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] font-sans"
                />
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                  Back
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3.5 text-sm font-extrabold rounded-xl inline-flex items-center gap-2 shadow-lg bg-[#1a2b4a] text-white hover:bg-[#0f172a] hover:shadow-xl transition-all font-sans disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? "Confirming Visit..." : "Confirm & Book Visit"}
                  <CheckCircleIcon className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* ── STEP 4: SUCCESS CONFIRMATION & CALENDAR EXPORT ── */}
          {step === 4 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircleIcon className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  BOOKING CONFIRMED · REF #{bookingRef}
                </span>
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-[var(--color-text-primary)] mt-3">
                  Your Site Visit is Reserved!
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto mt-2 font-sans">
                  We look forward to hosting you at <strong>{currentProject.name}</strong> on <strong>{formattedDateString}</strong> at <strong>{selectedTimeSlot}</strong>.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="p-5 rounded-2xl bg-[var(--color-surface-secondary)] border border-[var(--color-border)] text-left max-w-md mx-auto space-y-2 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-slate-500">Project:</span>
                  <span className="font-semibold text-slate-900">{currentProject.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tour Format:</span>
                  <span className="font-semibold text-slate-900 capitalize">{selectedTourType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-[var(--color-brand-secondary)]">{formattedDateString} @ {selectedTimeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Visitor:</span>
                  <span className="font-semibold text-slate-900">{fullName} ({phone})</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm inline-flex items-center gap-2 font-sans"
                >
                  <CalendarDaysIcon className="w-4 h-4 text-blue-600" />
                  Add to Google Calendar
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm inline-flex items-center gap-2 font-sans"
                >
                  Message on WhatsApp
                </a>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function BookSiteVisitTriggerButton({
  projectSlug,
  className,
  children,
}: {
  projectSlug?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { openModal } = useBookSiteVisit();
  return (
    <button
      type="button"
      onClick={() => openModal(projectSlug)}
      className={
        className ||
        "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-[var(--radius-button)] bg-[var(--color-brand-accent)] text-[var(--color-brand-primary)] hover:opacity-90 transition-all shadow-md"
      }
    >
      {children || (
        <>
          <CalendarDaysIcon className="w-4 h-4" />
          Book a Site Visit
        </>
      )}
    </button>
  );
}

export function FloatingSiteVisitBadge() {
  return null;
}
