
import React from 'react';
import { PlayIcon } from './icons';

const ProductPreview: React.FC = () => {
  return (
    <section className="bg-slate-900 text-slate-200 pt-20 pb-20 rounded-t-3xl md:rounded-t-[50px]">
      <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-100">
          Assista ao vídeo e veja como funciona a <span className="text-purple-500">Formação de Condutores de Entrevista</span>
        </h2>
        <div className="mt-12 max-w-3xl mx-auto">
          {/* Simulated Video Player */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 relative group cursor-pointer transition-all hover:border-purple-500/30">
            
            {/* Thumbnail Image Layer */}
            <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
                <img 
                  src="https://i.imgur.com/EuQRra1.png" 
                  alt="Prévia do vídeo" 
                  className="w-auto h-[130%] object-contain opacity-70 group-hover:opacity-60 transition-all duration-500 transform translate-y-8"
                />
            </div>

            {/* Dark Overlay for Play Button Contrast */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
               <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                 <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center pl-2 shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                    <PlayIcon className="w-8 h-8 text-white" />
                 </div>
               </div>
            </div>

            {/* Call to action label */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
                 <span className="inline-block px-5 py-2 rounded-full bg-black/60 backdrop-blur text-xs font-bold uppercase tracking-widest text-white/90 border border-white/10 group-hover:bg-black/80 transition-colors">
                    Assistir Apresentação
                 </span>
            </div>

          </div>
        </div>
        <a href="#" className="inline-flex items-center justify-center px-8 py-4 mt-12 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30">
          QUERO ACESSAR A FORMAÇÃO AGORA
        </a>
      </div>
    </section>
  );
};

export default ProductPreview;
