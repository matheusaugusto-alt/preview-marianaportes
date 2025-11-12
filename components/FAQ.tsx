import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-700 py-6">
            <button onClick={onClick} className="w-full flex justify-between items-center text-left hover:text-blue-500 transition-colors">
                <span className="text-lg font-semibold text-slate-200">{question}</span>
                <ChevronDownIcon className={`w-6 h-6 text-blue-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="mt-4 text-slate-400">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Quando recebo o acesso?",
            answer: "Imediatamente após a confirmação. Você recebe o link no e-mail para baixar os materiais."
        },
        {
            question: "O acesso é vitalício?",
            answer: "Sim, acesso vitalício aos arquivos disponibilizados."
        },
        {
            question: "Preciso ter experiência em RH?",
            answer: "Não. O material foi desenhado para líderes iniciantes e também profissionais experientes que desejam padronizar critérios."
        },
        {
            question: "Como funciona a garantia?",
            answer: "Você tem 7 dias para experimentar. Se preferir não continuar, devolvemos 100% do valor de forma simples."
        },
        {
            question: "Como acesso o produto?",
            answer: "Todo o conteúdo é entregue em arquivos digitais (PDF/planilha). Basta baixar e começar a usar."
        },
        {
            question: "Esse método vai tomar meu tempo?",
            answer: "O objetivo é devolver tempo: com roteiro pronto e planilha de decisão, você acelera entrevistas e reduz retrabalho."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-slate-900 text-slate-300 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mb-12">
                    Perguntas <span className="text-blue-500">Frequentes</span>
                </h2>
                <div className="bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-700">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;