
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
    { name: "Disclaimer", path: "/disclaimer" }
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-gray-300">Your trusted partner for portable sanitation solutions in Cleveland, TX and surrounding areas. We offer fast, reliable, and affordable porta potty rentals.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.path} className="mb-2">
                  <Link to={link.path} className="text-gray-300 hover:text-yellow-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-yellow-400 flex-shrink-0" />
                <a href={BUSINESS_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">{BUSINESS_INFO.address}</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-yellow-400 flex-shrink-0" />
                <a href={BUSINESS_INFO.phoneHref} className="text-gray-300 hover:text-yellow-400">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-yellow-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-300 hover:text-yellow-400">{BUSINESS_INFO.email}</a>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-3 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">Hours: {BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul>
              {legalLinks.map(link => (
                <li key={link.path} className="mb-2">
                  <Link to={link.path} className="text-gray-300 hover:text-yellow-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Website by a World-Class Senior Frontend React Engineer.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
