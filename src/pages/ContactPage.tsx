
import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import { BUSINESS_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "url": `https://www.${BUSINESS_INFO.domain}/contact`,
        "name": `Contact ${BUSINESS_INFO.name}`,
        "description": `Get in touch with ${BUSINESS_INFO.name} for porta potty rentals in Cleveland, TX. Call us, email us, or fill out our online form for a free quote.`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.${BUSINESS_INFO.domain}/contact`
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `https://www.${BUSINESS_INFO.domain}/`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us"
            }
        ]
    };
    
    return (
        <div>
            <SEO
                title={`Contact Us | ${BUSINESS_INFO.name}`}
                description={`Contact ${BUSINESS_INFO.name} for all your portable toilet needs in Cleveland, TX. Call ${BUSINESS_INFO.phone} or use our contact form for a fast, free quote.`}
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/contact`}
                schema={[contactSchema, breadcrumbSchema]}
            />

            <div className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                    <p className="text-lg md:text-xl mt-4">We're here to help 24/7. Reach out for a quote or any questions.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'Contact Us' }]} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Request a Free Quote</h2>
                        <ContactForm />
                    </div>
                    <div className="text-gray-700">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Information</h2>
                        <p className="mb-8 leading-relaxed">We are always available to answer your questions and provide prompt service. Whether you prefer to call, email, or visit, we look forward to hearing from you. For the fastest service, please give us a call.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin size={24} className="mr-4 mt-1 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold">Address</h3>
                                    <a href={BUSINESS_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">{BUSINESS_INFO.fullAddress}</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone size={24} className="mr-4 mt-1 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <a href={BUSINESS_INFO.phoneHref} className="text-gray-600 hover:text-blue-600">{BUSINESS_INFO.phone}</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail size={24} className="mr-4 mt-1 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold">Email</h3>
                                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-600 hover:text-blue-600">{BUSINESS_INFO.email}</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock size={24} className="mr-4 mt-1 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold">Business Hours</h3>
                                    <p className="text-gray-600">{BUSINESS_INFO.hours} - We're always on call for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Location</h2>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                       <iframe
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.981881775086!2d-95.0954483848815!3d30.34797598183282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864723049386d38b%3A0x28998826d9c6e3b!2s105%20Hubert%20St%2C%20Cleveland%2C%20TX%2077327!5e0!3m2!1sen!2sus!4v1698123456789!5m2!1sen!2sus`}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map of Arthur Rental Works location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;