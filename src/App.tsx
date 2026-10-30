/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { DoctorSection } from './components/DoctorSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { PatientResourceCenter } from './components/PatientResourceCenter';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { FloatingCallBar } from './components/FloatingCallBar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string | undefined>(undefined);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (doctorOrTreatment?: string) => {
    if (doctorOrTreatment) {
      if (doctorOrTreatment.toLowerCase().includes('min')) {
        setSelectedDoctorForBooking('dr-min');
      } else if (doctorOrTreatment.toLowerCase().includes('nava') || doctorOrTreatment.toLowerCase().includes('bharathi')) {
        setSelectedDoctorForBooking('dr-nava');
      } else {
        setSelectedTreatmentForBooking(doctorOrTreatment);
      }
    } else {
      setSelectedDoctorForBooking(undefined);
      setSelectedTreatmentForBooking(undefined);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      
      {/* Top Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Integrative Healing Philosophy */}
        <PhilosophySection currentLang={currentLang} />

        {/* Doctor Profiles & Clinical Leadership */}
        <DoctorSection
          currentLang={currentLang}
          onOpenBooking={(docName) => handleOpenBooking(docName)}
        />

        {/* Treatments & Specialties */}
        <TreatmentsSection
          currentLang={currentLang}
          onOpenBooking={(treatmentName) => handleOpenBooking(treatmentName)}
        />

        {/* Patient Resource Center (TCM & AYUSH knowledge bases from PDFs) */}
        <PatientResourceCenter currentLang={currentLang} />

        {/* Location & Timings Section */}
        <LocationHoursSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Call & WhatsApp Dock */}
      <FloatingCallBar
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currentLang={currentLang}
        initialDoctor={selectedDoctorForBooking}
        initialTreatment={selectedTreatmentForBooking}
      />

    </div>
  );
}
