import React from 'react';
import { CheckCircleIcon } from './icons';

const WhatYouGet: React.FC = () => {
    const items = [
        "+250 perguntas estratégicas prontas para entrevistas (divididas por competência e situação).",
        "+25 competências comportamentais com indicadores observáveis na fala do candidato.",
        "Planilha de ranqueamento para comparar candidatos de forma objetiva (peso por competência, notas e observações).",
        "Tudo pronto para copiar e aplicar — ideal para quem precisa de clareza e segurança já na próxima entrevista.",
    ];

  return (
    <section className="bg-slate-950 text-slate-200 pt-20 pb-20 rounded-3xl md:rounded-[50px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDIwNjE3IiAvPjxwYXRoIGQ9Ik0tMSwxIGwyLC0yIE0wLDEwIGwyLC0yIE0tMSwxMCBsMiwtMiBNMywzIGwyLC0yIE0yLDggbDIsLTIgTTUsNSBsMiwtMiBNNCwxMCBsMiwtMiBNNyw3IGwyLC0yIE02LDEyIGwyLC0yIE05LDkgbDIsLTIgTTgsMTIgbDIsLTIiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSIxIiAvPjwvc3ZnPg==')]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-100">
                O que você vai <span className="text-purple-500">receber:</span>
            </h2>
        </div>
        <div className="mt-12 p-8 bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                    <img src="https://i.imgur.com/aLt0c7c.png" alt="Materiais do Curso" className="w-full h-auto" />
                </div>
                <ul className="space-y-6 text-left text-lg">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start text-slate-300">
                            <CheckCircleIcon className="w-7 h-7 mr-3 text-purple-500 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;