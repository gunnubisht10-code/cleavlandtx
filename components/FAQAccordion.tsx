
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FAQItem } from '../types';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="text-lg font-semibold text-gray-800" itemProp="name">{faq.question}</h3>
            {openIndex === index ? <Minus className="text-blue-600" /> : <Plus className="text-gray-500" />}
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
            itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
          >
            <div className="p-4 pt-0 text-gray-600 leading-relaxed" itemProp="text">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
