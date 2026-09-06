import React from 'react';
import Hero from '../components/Hero';
import MastersBEngSection from '../components/MastersBEngSection';
import AnnouncementBar from '../components/AnnouncementBar';
import WhyTimorLeste from '../components/WhyTimorLeste';
import TimorLesteIntro from '../components/TimorLesteIntro';
import MBBSProgram from '../components/MBBSProgram';
import UniversitySection from '../components/UniversitySection';
import FeeStructure from '../components/FeeStructure';
import Accommodation from '../components/Accommodation';
import Eligibility from '../components/Eligibility';
import AdmissionProcess from '../components/AdmissionProcess';
import Documents from '../components/Documents';
import Services from '../components/Services';
import IndianStudents from '../components/IndianStudents';
import CareerPath from '../components/CareerPath';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LeadForm from '../components/LeadForm';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Aviate Overseas Education - Home" description="Premium overseas education consultancy offering MBBS, Engineering and Masters programs abroad." />
      <main>
        <Hero />
        <MastersBEngSection />
        <AnnouncementBar />
        <WhyTimorLeste />
        <TimorLesteIntro />
        <MBBSProgram />
        <UniversitySection />
        <FeeStructure />
        <Accommodation />
        <Eligibility />
        <AdmissionProcess />
        <Documents />
        <Services />
        <IndianStudents />
        <CareerPath />
        <Testimonials />
        <FAQ />
        <CTASection />
        <LeadForm />
      </main>
    </>
  );
}
