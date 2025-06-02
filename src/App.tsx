import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import FeatureSection from './components/FeatureSection';
import CommunitySection from './components/CommunitySection';
import NumbersSection from './components/NumbersSection';
import BonusSection from './components/BonusSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <FeatureSection />
      <CommunitySection />
      <NumbersSection />
      <BonusSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;