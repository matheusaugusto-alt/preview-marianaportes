
import React from 'react';
import { ArrowRightIcon } from './icons';

const IdealFor: React.FC = () => {
  const items = [
      {
          title: "Lidera e precisa contratar com segurança",
          desc: "Ganhe clareza de critérios e elimine o “achismo” na decisão."
      },
      {
          title: "Já estudou R&S, mas não aplicou na prática",
          desc: "Transforme teoria em roteiro prático e decisão comparável."
      },
      {
          title: "Quer diferenciar-se como líder assertivo",
          desc: "Comunique profissionalismo ao candidato e credibilidade ao negócio."
      },
      {
          title: "Sente-se perdida(o) durante entrevistas",
          desc: "Siga passo a passo e saiba o que perguntar e por quê."
      },
      {
          title: "Deseja reduzir turnover e custos ocultos",
          desc: "Evite trocas prematuras com fit comportamental bem avaliado."
      },
      {
          title: "Precisa contratar rápido, sem perder qualidade",
          desc: "Acelere o processo com materiais prontos e planilha de decisão."
      }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
                Ideal para <span className="text-blue-400">você que:</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
                <div key={index} className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500/50 transition-colors">
                    <div className="text-blue-400 font-bold text-xl mb-2 flex items-start">
                         <span className="mr-2 text-3xl opacity-50 font-serif">{index + 1})</span>
                         <span className="mt-1">{item.title}</span>
                    </div>
                    <p className="text-slate-400">{item.desc}</p>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30">
                QUERO UMA EQUIPE EFICIENTE AGORA
                <ArrowRightIcon className="w-6 h-6 ml-3" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default IdealFor;
