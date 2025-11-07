
import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO, IMAGE_URLS } from '../constants';
import { Users, Target, Heart, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "url": `https://www.${BUSINESS_INFO.domain}/about`,
        "name": `About ${BUSINESS_INFO.name}`,
        "description": `Learn about ${BUSINESS_INFO.name}, a locally owned business dedicated to providing the best porta potty rental services in Cleveland, TX.`,
        "publisher": {
            "@type": "Organization",
            "name": BUSINESS_INFO.name
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
                "name": "About Us"
            }
        ]
    };
    
    return (
        <div>
            <SEO
                title={`About Us | ${BUSINESS_INFO.name}`}
                description={`Learn about ${BUSINESS_INFO.name}, a leading provider of porta potty and portable toilet rentals in Cleveland, Texas. Discover our commitment to quality and service.`}
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/about`}
                schema={[aboutSchema, breadcrumbSchema]}
            />

            <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: `linear-gradient(rgba(0, 23, 71, 0.7), rgba(0, 23, 71, 0.7)), url(${IMAGE_URLS.aboutBackground})` }}>
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">About Arthur Rental Works</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Your Local Partner for Clean, Reliable Portable Sanitation in Cleveland, TX</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'About Us' }]} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
                    <div className="prose lg:prose-lg max-w-none text-gray-700">
                        <h2 className="text-3xl font-bold text-blue-900">Our Story</h2>
                        <p>Arthur Rental Works was founded right here in Texas with a simple but powerful mission: to provide the Cleveland community with a porta potty rental service that is dependable, clean, and straightforward. Tired of dealing with unreliable providers and dirty units, our founder saw a need for a company that puts customer satisfaction and hygiene first.</p>
                        <p>Starting with just a few units and a single service truck, we've grown by building lasting relationships with our clients—from local construction foremen to event planners and families. We are proud to be a locally owned and operated business, which means we're not just serving customers; we're serving our neighbors.</p>
                        
                        <h3 className="text-2xl font-bold text-blue-900 mt-8">What We Stand For</h3>
                        <p>Our business is built on a foundation of core values that guide every decision we make and every service we provide. These principles are our promise to you.</p>
                    </div>
                    <div>
                        <img src={IMAGE_URLS.cleaningTruck} alt="A clean porta potty rental service truck from Arthur Rental Works" className="rounded-lg shadow-2xl" loading="lazy" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center">
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <Heart size={48} className="mx-auto text-blue-600 mb-4" />
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">Customer First</h3>
                        <p className="text-gray-600">Your satisfaction is our top priority. We listen to your needs and provide flexible, responsive service 24/7.</p>
                    </div>
                     <div className="bg-gray-100 p-8 rounded-lg">
                        <ShieldCheck size={48} className="mx-auto text-blue-600 mb-4" />
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">Uncompromising Quality</h3>
                        <p className="text-gray-600">We maintain the highest standards of cleanliness and quality for our equipment. Every unit is thoroughly sanitized before delivery.</p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <Target size={48} className="mx-auto text-blue-600 mb-4" />
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">Reliability</h3>
                        <p className="text-gray-600">We do what we say we'll do. You can count on us for on-time deliveries, scheduled services, and prompt pickups.</p>
                    </div>
                     <div className="bg-gray-100 p-8 rounded-lg">
                        <Users size={48} className="mx-auto text-blue-600 mb-4" />
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">Community Focus</h3>
                        <p className="text-gray-600">As a local business, we are invested in the well-being of Cleveland and the surrounding communities we serve.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;