import React from 'react';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import ProblemSolution from './components/ProblemSolution';
import ProductPreview from './components/ProductPreview';
import Testimonials from './components/Testimonials';
import WhatYouGet from './components/WhatYouGet';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import About from './components/About';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans overflow-x-hidden">
      <Hero />
      <Ticker />
      <ProductPreview />
      <ProblemSolution />
      <Testimonials />
      <WhatYouGet />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <About />
      <FAQ />
      <div className="py-4 bg-slate-950 border-t border-slate-800">
        <Ticker />
      </div>
    </div>
  );
};

export default App;