import React from 'react';
import { ArrowRightIcon } from './icons';

const Guarantee: React.FC = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-purple-500 rounded-full border-dashed animate-spin-slow"></div>
                        <div className="text-center">
                            <span className="text-xs text-purple-400 font-bold tracking-widest uppercase">DIAS DE GARANTIA</span>
                            <p className="text-8xl font-extrabold my-2 text-slate-100">7</p>
                            <span className="text-xs text-purple-400 font-bold tracking-widest uppercase">RISCO ZERO</span>
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Garantia incondicional de <span className="text-purple-500">7 dias</span></h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Baixe, use nas suas entrevistas e avalie. Se por algum motivo achar que não é pra você, devolvemos 100% do seu investimento.
                    </p>
                    <a href="#" className="inline-flex items-center justify-center px-8 py-4 mt-8 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/30">
                        QUERO APROVEITAR ESSA OFERTA
                        <ArrowRightIcon className="w-6 h-6 ml-3" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;