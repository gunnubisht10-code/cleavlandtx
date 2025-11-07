
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Phone } from 'lucide-react';

const StickyCallButton: React.FC = () => {
  return (
    <a
      href={BUSINESS_INFO.phoneHref}
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-yellow-500 text-blue-900 p-4 text-center font-bold text-lg z-50 flex items-center justify-center shadow-lg hover:bg-yellow-600 transition-colors"
    >
      <Phone size={24} className="mr-3 animate-pulse" />
      Click to Call Now: {BUSINESS_INFO.phone}
    </a>
  );
};

export default StickyCallButton;
