import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MastersBEngSection from './components/MastersBEngSection';
import AnnouncementBar from './components/AnnouncementBar';
import WhyTimorLeste from './components/WhyTimorLeste';
import TimorLesteIntro from './components/TimorLesteIntro';
import MBBSProgram from './components/MBBSProgram';
import UniversitySection from './components/UniversitySection';
import FeeStructure from './components/FeeStructure';
import Accommodation from './components/Accommodation';
import Eligibility from './components/Eligibility';
import AdmissionProcess from './components/AdmissionProcess';
import Documents from './components/Documents';
import Services from './components/Services';
import IndianStudents from './components/IndianStudents';
import CareerPath from './components/CareerPath';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function RouteScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const routeToIdMap = {
      '/why-timor-leste': 'why-timor-leste',
      '/about': 'why-timor-leste',
      '/mbbs-timor-leste': 'mbbs-program',
      '/program': 'mbbs-program',
      '/university': 'university',
      '/fees': 'fees',
      '/eligibility': 'eligibility',
      '/admission-process': 'process',
      '/process': 'process',
      '/faq': 'faq',
      '/contact': 'contact'
    };

    const targetId = routeToIdMap[location.pathname];
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
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
  );
}

function App() {
  return (
    <Router>
      <RouteScrollHandler />
      <div className="min-h-screen bg-[#FAFAF7] text-[#071C42] flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/why-timor-leste" element={<HomePage />} />
          <Route path="/mbbs-timor-leste" element={<HomePage />} />
          <Route path="/program" element={<HomePage />} />
          <Route path="/university" element={<HomePage />} />
          <Route path="/fees" element={<HomePage />} />
          <Route path="/eligibility" element={<HomePage />} />
          <Route path="/admission-process" element={<HomePage />} />
          <Route path="/process" element={<HomePage />} />
          <Route path="/faq" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
