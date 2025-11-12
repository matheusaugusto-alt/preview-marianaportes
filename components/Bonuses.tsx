import React from 'react';

const BonusCard: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-slate-900 text-slate-200 rounded-2xl h-40 p-4 flex items-center justify-center text-center font-bold text-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all border border-slate-800">
        {title}
    </div>
);

const Bonuses: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-950">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase text-slate-100">
                Ferramentas <span className="text-blue-500">Práticas Inclusas</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">Tudo o que você precisa para estruturar suas entrevistas:</p>
        </div>
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <BonusCard title="+250 Perguntas Estratégicas" />
            <BonusCard title="Matriz de Competências" />
            <BonusCard title="Planilha de Ranqueamento" />
            <BonusCard title="Acesso Vitalício" />
        </div>
    </section>
  );
};

export default Bonuses;