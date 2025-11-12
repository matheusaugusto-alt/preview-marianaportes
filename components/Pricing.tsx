import React from 'react';
import { CheckCircleIcon, NotebookIcon, ArrowRightIcon } from './icons';

const Pricing: React.FC = () => {
    const features = [
        "Acesso completo a formação",
        "+250 perguntas estratégicas (por competências)",
        "+25 indicadores de comportamentos",
        "Planilha prática para classificar e ranquear",
        "Ferramentas práticas",
        "Acesso vitalício",
        "7 dias de garantia incondicional",
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 flex justify-center bg-slate-950">
            <div className="relative max-w-md w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-75"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center text-white">
                    <div className="flex justify-center mb-6">
                        <div className="bg-slate-800 border border-blue-500/30 p-3 rounded-full">
                           <NotebookIcon className="w-8 h-8 text-blue-400" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold">Adquira a Formação de Condutores de Entrevista com uma <span className="text-blue-400">oferta exclusiva:</span></h3>
                    
                    <ul className="mt-8 space-y-4 text-left text-slate-300">
                        {features.map((feature, index) => (
                             <li key={index} className="flex items-start">
                                <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="my-8">
                        <p className="text-red-500 line-through">De: R$297,00</p>
                        <p className="text-lg text-white">Por apenas:</p>
                        <p className="text-6xl font-extrabold text-green-500 my-2">R$89,90</p>
                    </div>

                    <a href="#" className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30">
                        QUERO APROVEITAR ESSA OFERTA
                        <ArrowRightIcon className="w-6 h-6 ml-3" />
                    </a>
                    <p className="mt-4 text-sm text-slate-500">Compra 100% segura</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;