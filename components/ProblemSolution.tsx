import React from 'react';
import { CheckCircleIcon, XCircleIcon } from './icons';

const ProblemSolution: React.FC = () => {
    const withoutFormation = [
        "Entrevista baseada em “impressão”",
        "Perguntas genéricas, respostas decoradas",
        "Critérios diferentes por candidato",
        "Dúvida na hora de decidir",
        "Alto risco de mismatch e retrabalho",
    ];

    const withFormation = [
        "Roteiro estruturado e replicável",
        "Perguntas estratégicas que revelam comportamento",
        "Matriz de competências com indicadores claros",
        "Classificação objetiva e decisão segura",
        "Melhor aderência cultural e redução de turnover",
    ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-100">
          Transforme a maneira como você <span className="text-blue-500">contrata.</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Without Formation */}
        <div className="bg-slate-900 border border-red-900/50 rounded-2xl p-8 text-left shadow-xl shadow-red-500/10">
          <h3 className="text-2xl font-bold text-red-500 mb-6">Sem a formação:</h3>
          <ul className="space-y-4">
            {withoutFormation.map((item, index) => (
                <li key={index} className="flex items-start text-slate-400">
                    <XCircleIcon className="w-6 h-6 mr-3 text-red-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                </li>
            ))}
          </ul>
        </div>

        {/* With Formation */}
        <div className="bg-slate-900 border border-blue-900/50 rounded-2xl p-8 text-left shadow-xl shadow-blue-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-900/50 rounded-bl-full -mr-4 -mt-4"></div>
          <h3 className="text-2xl font-bold text-blue-500 mb-6 relative z-10">Com a Formação:</h3>
           <ul className="space-y-4 relative z-10">
            {withFormation.map((item, index) => (
                <li key={index} className="flex items-start text-slate-300 font-medium">
                    <CheckCircleIcon className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;