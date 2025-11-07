
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO, IMAGE_URLS } from '../constants';
import { services } from '../data/services';

const ServicesHubPage: React.FC = () => {
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
                "name": "Services"
            }
        ]
    };

    return (
        <div>
            <SEO
                title={`Our Services | ${BUSINESS_INFO.name}`}
                description={`Explore the full range of porta potty and portable sanitation services offered by ${BUSINESS_INFO.name} in Cleveland, TX. From standard units to luxury trailers.`}
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/services`}
                schema={breadcrumbSchema}
            />

            <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: `linear-gradient(rgba(0, 23, 71, 0.7), rgba(0, 23, 71, 0.7)), url(${IMAGE_URLS.portableToilets})` }}>
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Porta Potty Services</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Comprehensive Portable Sanitation Solutions for Every Need</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'Services' }]} />
                
                <div className="text-center my-8">
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                        At Arthur Rental Works, we provide a complete selection of portable restrooms and sanitation equipment to ensure your event, job site, or project is fully equipped. We guarantee clean, well-maintained units and timely, professional service. Explore our offerings below to find the perfect solution for you.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.slug} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={service.image} alt={`${service.title} - ${service.shortDescription}`} className="w-full h-56 object-cover" loading="lazy" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h2>
                                <p className="text-gray-600 mb-4 flex-grow">{service.shortDescription}</p>
                                <Link to={`/services/${service.slug}`} className="mt-auto inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-center hover:bg-blue-700 transition-colors">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesHubPage;