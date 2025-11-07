
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { locations } from '../data/locations';
import { services } from '../data/services';
import { BUSINESS_INFO } from '../constants';
import NotFoundPage from './NotFoundPage';
import { CheckCircle, MapPin } from 'lucide-react';

const LocationDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const location = locations.find(l => l.slug === slug);

    if (!location) {
        return <NotFoundPage />;
    }
    
    const pageTitle = `Porta Potty Rental ${location.name}, ${location.state}`;
    const pageDescription = `Reliable porta potty rentals in ${location.name}, TX. Arthur Rental Works offers fast delivery of portable toilets for events and construction sites in ${location.name}.`;

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": BUSINESS_INFO.name,
        "image": "https://ik.imagekit.io/e5qb76enw/Lancaster-ca-porta-potty.jpeg",
        "telephone": BUSINESS_INFO.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address.split(',')[0],
            "addressLocality": BUSINESS_INFO.city,
            "addressRegion": BUSINESS_INFO.state,
            "postalCode": BUSINESS_INFO.zip,
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": location.name
        },
        "description": `Providing top-quality porta potty rentals to ${location.name}, ${location.state}.`
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
                "name": "Service Areas",
                "item": `https://www.${BUSINESS_INFO.domain}/#/service-areas`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": location.name
            }
        ]
    };
    
    // Get 3 other locations for cross-linking, excluding the current one
    const otherLocations = locations.filter(loc => loc.slug !== slug).slice(0, 3);

    return (
        <div>
            <SEO
                title={pageTitle}
                description={pageDescription}
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/#/service-areas/${location.slug}`}
                schema={[locationSchema, breadcrumbSchema]}
            />
            
            <div className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Porta Potty Rental in {location.name}, {location.state}</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Your Local Source for Fast, Clean Portable Toilets</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas' }, { name: location.name }]} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
                    <main className="lg:col-span-2">
                        <section className="prose lg:prose-lg max-w-none text-gray-700">
                            <h2 className="text-3xl font-bold text-blue-900">Portable Toilet Rental in {location.name}, {location.state}</h2>
                            <p>{location.content.intro}</p>
                            
                            <h3 className="text-2xl font-bold text-blue-900 mt-8">Why Choose Us in {location.name}?</h3>
                            <p>{location.content.whyChooseUs}</p>

                            <h3 className="text-2xl font-bold text-blue-900 mt-8">Our Services in {location.name}</h3>
                             <p>{location.content.servicesDescription}</p>
                        </section>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            {services.slice(0, 6).map(service => (
                                <div key={service.slug} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                    <h4 className="font-bold text-blue-800">{service.title}</h4>
                                    <p className="text-sm text-gray-600">{service.shortDescription}</p>
                                    <Link to={`/services/${service.slug}`} className="text-sm font-semibold text-blue-600 hover:underline mt-2 inline-block">Learn More &rarr;</Link>
                                </div>
                            ))}
                        </div>

                        <section className="mt-12">
                             <h3 className="text-2xl font-bold text-blue-900 mb-4">Different Types of Porta Potties Available in {location.name}, {location.state}</h3>
                             <p className="text-gray-700 mb-6">We provide a variety of portable restroom options to suit the specific requirements of your {location.name} event or project. Choose from standard units for durability, deluxe models for added comfort, or fully-equipped restroom trailers for a luxury experience.</p>
                             <div className="flex justify-center">
                                 <Link to="/services" className="inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors">
                                     Explore All Unit Types
                                 </Link>
                             </div>
                        </section>
                    </main>

                    <aside className="lg:col-span-1">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md sticky top-28">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">Get a Quote for {location.name}</h3>
                            <p className="text-gray-600 mb-6">Ready to book your porta potty rental in {location.name}? Contact us today for a free, no-hassle quote.</p>
                            <Link to="/contact" className="w-full text-center inline-block bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105">
                                Request a Quote Online
                            </Link>
                            <div className="text-center my-4 text-gray-500">OR</div>
                            <a href={BUSINESS_INFO.phoneHref} className="w-full text-center inline-block bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800">
                                Call {BUSINESS_INFO.phone}
                            </a>
                        </div>
                         <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                             <h4 className="font-bold text-xl text-blue-900 mb-4">Serving all of {location.name}</h4>
                             <p className="font-semibold text-gray-700">Neighborhoods:</p>
                             <p className="text-sm text-gray-600 mb-3">{location.neighborhoods.join(', ')}</p>
                             <p className="font-semibold text-gray-700">ZIP Codes:</p>
                             <p className="text-sm text-gray-600">{location.zipCodes.join(', ')}</p>
                         </div>
                    </aside>
                </div>

                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">Map of {location.name}</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                       <iframe
                            src={location.mapEmbedUrl}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map of ${location.name}, ${location.state}`}
                        ></iframe>
                    </div>
                </div>

                <div className="mt-16 border-t pt-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Also Serving Nearby Communities</h3>
                    <div className="flex justify-center flex-wrap gap-4">
                        {otherLocations.map(loc => (
                             <Link 
                                key={loc.slug} 
                                to={`/service-areas/${loc.slug}`} 
                                className="block bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-50 transition-all"
                            >
                                <div className="flex items-center">
                                    <MapPin className="text-blue-600 mr-2" size={16}/>
                                    <span className="font-semibold text-blue-800">{loc.name}, {loc.state}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LocationDetailPage;
