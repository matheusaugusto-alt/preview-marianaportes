
import React from 'react';
import { ArrowRightIcon } from './icons';

const TickerItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center mx-6">
    <span className="text-sm font-bold tracking-widest uppercase text-white">{text}</span>
    <ArrowRightIcon className="w-5 h-5 ml-4 text-blue-400" />
  </div>
);

const Ticker: React.FC = () => {
  const items = [
    "Entrevistas Estruturadas",
    "Fit Comportamental",
    "Decisão Assertiva",
    "Redução de Turnover",
    "Gestão Eficiente",
  ];
  const duplicatedItems = [...items, ...items, ...items, ...items]; // Repeat for seamless loop

  return (
    <div className="bg-slate-900 py-4 border-t border-b border-slate-800 overflow-hidden whitespace-nowrap">
      <div className="flex animate-scroll">
        {duplicatedItems.map((item, index) => (
          <TickerItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
};

export default Ticker;
