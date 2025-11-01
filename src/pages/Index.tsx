import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import AboutPoai from "@/components/AboutPoai";
import Focus from "@/components/Focus";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ChallengeChampions from "@/components/ChallengeChampions";
import HowItWorks from "@/components/HowItWorks";
import VibeExpect from "@/components/VibeExpect";
import Schedule from "@/components/Schedule";
import RegistrationForm from "@/components/RegistrationForm";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  const handleRegisterClick = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar onRegisterClick={handleRegisterClick} />
      <Hero onRegisterClick={handleRegisterClick} />
      <Sponsors />
      <WhoThisIsFor />
      <Focus onRegisterClick={handleRegisterClick} />
      <ChallengeChampions />
      <VibeExpect />
      <HowItWorks />
      <AboutPoai />
      <Schedule />
      <RegistrationForm />
      <Partners />
      <Footer />
      <StickyMobileCTA onRegisterClick={handleRegisterClick} />
    </div>
  );
};

export default Index;
