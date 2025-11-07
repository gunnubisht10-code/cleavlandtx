
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO, IMAGE_URLS } from '../constants';
import { locations } from '../data/locations';
import { MapPin } from 'lucide-react';

const LocationsHubPage: React.FC = () => {
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
                "name": "Service Areas"
            }
        ]
    };

    return (
        <div>
            <SEO
                title={`Service Areas | ${BUSINESS_INFO.name}`}
                description={`We provide porta potty rentals to numerous cities around Cleveland, TX, including Conroe, The Woodlands, Spring, and more. Find your city and get a quote.`}
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/service-areas`}
                schema={breadcrumbSchema}
            />

            <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: `linear-gradient(rgba(0, 23, 71, 0.7), rgba(0, 23, 71, 0.7)), url(${IMAGE_URLS.serviceAreasBackground})` }}>
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Service Areas</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Proudly Serving Cleveland, TX and Surrounding Communities</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'Service Areas' }]} />
                
                <div className="text-center my-8">
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                        Arthur Rental Works delivers clean, reliable portable toilets across a wide region of Southeast Texas. Our local knowledge ensures prompt delivery and service, no matter where your project or event is located. If you don't see your city listed, give us a call! We frequently expand our service radius.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {locations.map(location => (
                        <Link 
                            key={location.slug} 
                            to={`/service-areas/${location.slug}`} 
                            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-50 transition-all transform hover:scale-105"
                        >
                            <div className="flex items-center">
                                <MapPin className="text-blue-600 mr-3" />
                                <h2 className="text-xl font-bold text-blue-900">{location.name}, {location.state}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationsHubPage;