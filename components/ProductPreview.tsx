import React from 'react';

const ProductPreview: React.FC = () => {
  return (
    <section className="bg-slate-900 text-slate-200 pt-20 pb-20 rounded-t-3xl md:rounded-t-[50px]">
      <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-100">
          Assista ao vídeo e veja como funciona a <span className="text-purple-500">Formação de Condutores de Entrevista</span>
        </h2>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-slate-700 bg-slate-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hL-vP3LF_mo"
              title="Formação de Condutores de Entrevista"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
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