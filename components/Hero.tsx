import React from 'react';
import { ArrowRightIcon } from './icons';

const CtaButton: React.FC<{ text: string }> = ({ text }) => (
  <a href="#" className="inline-flex items-center justify-center px-8 py-4 mt-8 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1">
    {text}
    <ArrowRightIcon className="w-6 h-6 ml-3" />
  </a>
);

const Hero: React.FC = () => {
  return (
    <header className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Text readability overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.85)_0%,rgba(0,0,0,0)_45%)]"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100">
            Monte equipes mais eficientes e evite prejuízos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">contratações equivocadas</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
            Descubra um método simples, direto e prático para conduzir entrevistas estruturadas, revelar fit comportamental e tomar decisões assertivas — mesmo que você nunca tenha usado um processo formal antes.
          </p>
          <CtaButton text="QUERO UMA EQUIPE EFICIENTE AGORA" />
        </div>
        <div className="relative flex justify-center items-center h-[500px] md:h-auto md:self-stretch">
          {/* Subtle halo effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(173,216,230,0.06)_0%,transparent_70%)] z-10"></div>
          <img 
            src="https://i.imgur.com/SsNHQd1.png" 
            alt="Mariana Portes Gelais" 
            className="relative z-20 w-auto h-full max-w-none md:max-w-full object-contain [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;