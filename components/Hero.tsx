
import React from 'react';

const CtaButton: React.FC<{ text: string }> = ({ text }) => (
  <a href="#" className="inline-flex items-center justify-center px-8 py-4 mt-8 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 text-center">
    {text}
  </a>
);

const Hero: React.FC = () => {
  return (
    <header className="pt-10 pb-20 md:py-20 px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Text readability overlay (desktop only) */}
      <div className="absolute inset-0 z-10 hidden md:block bg-[linear-gradient(90deg,rgba(0,0,0,.85)_0%,rgba(0,0,0,0)_45%)]"></div>

      {/* Mobile Image - Updated to match desktop cover */}
      <div className="md:hidden text-center mb-8 relative z-20">
         <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full"></div>
        <img 
          src="https://i.imgur.com/EuQRra1.png" 
          alt="Mariana Portes Gelais" 
          className="inline-block h-auto w-full max-w-sm object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-6xl md:mx-auto gap-8 md:gap-12 items-center relative z-20">
        
        {/* Image section: For desktop only */}
        <div className="hidden md:relative md:flex justify-center items-center md:h-auto md:self-stretch order-2">
          {/* Subtle halo effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(173,216,230,0.06)_0%,transparent_70%)] z-10"></div>
          
          {/* Desktop Image */}
          <img 
            src="https://i.imgur.com/EuQRra1.png" 
            alt="Mariana Portes Gelais" 
            className="relative z-20 w-auto h-full max-w-none md:max-w-full object-contain [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
          />
        </div>

        {/* Text section: Order 1 on both, but image is outside grid on mobile */}
        <div className="text-left order-1">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100">
            Monte equipes mais eficientes e evite prejuízos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">contratações equivocadas</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 md:max-w-xl">
            Descubra um método simples e prático para conduzir entrevistas estruturadas, revelar fit comportamental e tomar decisões assertivas — <strong className="font-semibold text-slate-300">mesmo que você nunca tenha usado um processo formal antes.</strong>
          </p>
          <CtaButton text="QUERO UMA EQUIPE EFICIENTE AGORA" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
