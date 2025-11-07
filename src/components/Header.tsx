
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-blue-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin size={14} className="mr-1"/> {BUSINESS_INFO.address}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={BUSINESS_INFO.phoneHref} className="flex items-center hover:text-yellow-400"><Phone size={14} className="mr-1"/> {BUSINESS_INFO.phone}</a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="hidden md:flex items-center hover:text-yellow-400"><Mail size={14} className="mr-1"/> {BUSINESS_INFO.email}</a>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-900">
          {BUSINESS_INFO.name}
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <a href={BUSINESS_INFO.phoneHref} className="hidden lg:inline-block bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105">
          Get a Free Quote
        </a>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
      {isOpen && (
        <div className="lg:hidden bg-white py-4">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-lg ${isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
           <div className="px-4 mt-4">
             <a href={BUSINESS_INFO.phoneHref} className="w-full text-center bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105">
               Get a Free Quote
             </a>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;