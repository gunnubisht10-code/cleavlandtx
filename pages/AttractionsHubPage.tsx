
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO, IMAGE_URLS } from '../constants';
import { attractions } from '../data/attractions';
import { Mountain } from 'lucide-react';

const AttractionsHubPage: React.FC = () => {
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
                "name": "Local Attractions"
            }
        ]
    };

    return (
        <div>
            <SEO
                title={`Local Attractions Near Cleveland, TX | ${BUSINESS_INFO.name}`}
                description={`Discover amazing local attractions near Cleveland, Texas. Learn about parks, forests, and entertainment venues in our community guide.`}
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/#/local-attractions`}
                schema={breadcrumbSchema}
            />

            <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: `linear-gradient(rgba(0, 23, 71, 0.7), rgba(0, 23, 71, 0.7)), url(${IMAGE_URLS.serviceAreasBackground})` }}>
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Explore Local Attractions</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Discover the Natural Beauty and Fun Around Cleveland, TX</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'Local Attractions' }]} />
                
                <div className="text-center my-8">
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                       As a local business, we love our community. Southeast Texas is home to incredible natural beauty and exciting destinations. This guide is purely informational, designed to help residents and visitors discover some of the amazing places our area has to offer.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {attractions.map(attraction => (
                         <div key={attraction.slug} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={attraction.image} alt={`A view of ${attraction.name}, a local attraction near Cleveland, TX`} className="w-full h-56 object-cover" loading="lazy" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">{attraction.name}</h2>
                                <p className="text-gray-600 mb-4 flex-grow">{attraction.description.substring(0, 120)}...</p>
                                <Link to={`/local-attractions/${attraction.slug}`} className="mt-auto inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-center hover:bg-blue-700 transition-colors">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AttractionsHubPage;
