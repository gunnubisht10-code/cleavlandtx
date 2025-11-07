
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import { services } from '../data/services';
import { BUSINESS_INFO } from '../constants';
import NotFoundPage from './NotFoundPage';
import { CheckCircle } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
        "@type": "LocalBusiness",
        "name": BUSINESS_INFO.name,
        "address": BUSINESS_INFO.fullAddress
    },
    "areaServed": {
        "@type": "City",
        "name": "Cleveland, TX"
    },
    "description": service.longDescription,
    "name": service.title
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
            "name": "Services",
            "item": `https://www.${BUSINESS_INFO.domain}/services`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": service.title
        }
    ]
  };

  return (
    <div>
      <SEO
        title={`${service.title} | ${BUSINESS_INFO.name}`}
        description={service.shortDescription}
        canonicalUrl={`https://www.${BUSINESS_INFO.domain}/services/${service.slug}`}
        ogImage={service.image}
        schema={[serviceSchema, breadcrumbSchema]}
      />

      <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: `linear-gradient(rgba(0, 23, 71, 0.7), rgba(0, 23, 71, 0.7)), url(${service.image})` }}>
          <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
              <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">{service.shortDescription}</p>
          </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: service.title }]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 prose lg:prose-lg max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-blue-900">About {service.title}</h2>
                <p>{service.longDescription}</p>

                <h3 className="text-2xl font-bold text-blue-900 mt-8">Key Features</h3>
                 <ul className="list-none p-0 space-y-2">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <h3 className="text-2xl font-bold text-blue-900 mt-8">Ideal For</h3>
                <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{useCase}</span>
                    ))}
                </div>
            </div>
            <aside className="lg:col-span-1">
                <div className="bg-gray-100 p-8 rounded-lg shadow-md sticky top-28">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Need This Service?</h3>
                    <p className="text-gray-600 mb-6">Get a fast, free quote for your event or project today. Our team is ready to assist you!</p>
                    <Link to="/contact" className="w-full text-center inline-block bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105">
                        Request a Quote
                    </Link>
                    <a href={BUSINESS_INFO.phoneHref} className="w-full text-center mt-4 inline-block bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">
                        Or Call Us: {BUSINESS_INFO.phone}
                    </a>
                </div>
            </aside>
        </div>

        {service.faqs.length > 0 && (
            <div className="mt-16">
                 <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
                 <FAQAccordion faqs={service.faqs} />
            </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailPage;