
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { attractions } from '../data/attractions';
import { BUSINESS_INFO } from '../constants';
import NotFoundPage from './NotFoundPage';
import { MapPin } from 'lucide-react';

const AttractionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const attraction = attractions.find(a => a.slug === slug);

  if (!attraction) {
    return <NotFoundPage />;
  }

  const attractionSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": attraction.name,
    "description": attraction.description,
    "url": `https://www.${BUSINESS_INFO.domain}/local-attractions/${attraction.slug}`
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
            "name": "Local Attractions",
            "item": `https://www.${BUSINESS_INFO.domain}/local-attractions`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": attraction.name
        }
    ]
  };

  return (
    <div>
      <SEO
        title={`${attraction.name} | Local Attraction Guide`}
        description={attraction.description.substring(0, 160)}
        canonicalUrl={`https://www.${BUSINESS_INFO.domain}/local-attractions/${attraction.slug}`}
        ogImage={attraction.image}
        schema={[attractionSchema, breadcrumbSchema]}
      />
      
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={[{ name: 'Local Attractions', path: '/local-attractions' }, { name: attraction.name }]} />

        <article className="max-w-4xl mx-auto mt-8">
            <img src={attraction.image} alt={attraction.name} className="w-full h-96 object-cover rounded-lg shadow-lg mb-8" />
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">{attraction.name}</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
                <MapPin size={20} className="mr-2" />
                <span>{attraction.location}</span>
            </div>
            
            <div className="prose lg:prose-xl max-w-none text-gray-800">
                <p>{attraction.description}</p>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <h3 className="font-bold text-blue-900">Planning a Visit or Event?</h3>
                <p className="text-blue-800 mt-2">
                    While this guide is informational, many local attractions host events that require portable sanitation. If you're planning an event at this or any other location, <Link to="/contact" className="font-semibold underline hover:text-blue-600">contact {BUSINESS_INFO.name}</Link> for your porta potty rental needs.
                </p>
            </div>
        </article>
      </div>
    </div>
  );
};

export default AttractionDetailPage;