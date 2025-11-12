import React from 'react';
import { CreatorIcon } from './icons';

const About: React.FC = () => {
    return (
        <section className="bg-slate-950 text-slate-300 py-20 px-4 sm:px-6 lg:px-8 rounded-3xl md:rounded-[50px]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-2">
                    <div className="inline-flex items-center text-blue-400 mb-4 bg-blue-900/50 px-4 py-1 rounded-full border border-blue-800/50">
                        <CreatorIcon className="w-5 h-5 mr-2" />
                        <span className="text-sm font-bold uppercase tracking-wider">Criadora do Método</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100">
                        Prazer, Mariana Portes Gelais
                    </h2>
                    <div className="mt-6 space-y-4 text-lg text-slate-400">
                        <p>
                            Psicóloga (UFF), Pós-graduação em Administração (FGV) e certificação em Coaching Integral Sistêmico (FEBRACIS).
                        </p>
                        <p>
                            Experiência desde 2014 em recrutamento e seleção multi-nível, treinamento, indicadores, sistemas e inovação. Analista de Perfil Comportamental, especialista em alinhamento de candidato à cultura.
                        </p>
                        <p className="italic font-semibold text-purple-400 border-l-4 border-purple-500 pl-4">
                            “Minha missão é promover transformAÇÃO de vidas, acelerando carreiras e potencializando negócios.”
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="https://i.imgur.com/XkXvCnN.png"
                        alt="Mariana Portes Gelais"
                        className="w-80 rounded-3xl shadow-2xl shadow-blue-500/20 border-4 border-slate-800"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;