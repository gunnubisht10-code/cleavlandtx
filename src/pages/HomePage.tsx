
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';
import { BUSINESS_INFO, IMAGE_URLS } from '../constants';
import { services } from '../data/services';
import { locations } from '../data/locations';
import type { FAQItem } from '../types';
import { CheckCircle, Star, Phone, Award, ClipboardList, CalendarDays, Truck, CheckSquare, Sparkles, Users, ShieldCheck, DollarSign } from 'lucide-react';

const HomePage: React.FC = () => {
    const homeFaqs: FAQItem[] = [
        { question: "How much does it cost to rent a porta potty in Cleveland, TX?", answer: "The cost varies based on the type of unit, rental duration, and servicing frequency. Standard units for a weekend are very affordable. For a precise, no-obligation quote, please call us or fill out our contact form!" },
        { question: "Do you offer same-day delivery in Cleveland?", answer: "Yes! We pride ourselves on our rapid response. In many cases, we can provide same-day delivery for porta potty rentals in Cleveland and nearby areas. Call us now to check availability." },
        { question: "What types of portable toilets can I rent?", answer: "We offer a complete range, including standard porta potties, deluxe units with flushable toilets and sinks, ADA-compliant accessible restrooms, and luxury restroom trailers for upscale events." },
        { question: "How do I know how many porta potties I need for my event?", answer: "A general rule of thumb is one toilet per 50-75 guests for a 4-6 hour event. However, factors like alcohol consumption can increase the need. Our expert team can provide a precise recommendation based on your event details." },
        { question: "What is included in the porta potty rental service?", answer: "Our rental price includes delivery, placement, pickup, and all necessary sanitation supplies like toilet paper. For long-term rentals, it also includes a regular servicing schedule to clean, pump, and restock the unit." }
    ];

    const portaPottyTypes = [
        { name: 'Standard Porta Potty', description: 'The most common and cost-effective choice for construction sites and informal events. Provides basic, reliable sanitation.', link: '/services/portable-toilet-rental', image: IMAGE_URLS.standard },
        { name: 'Deluxe Porta Potty', description: 'A step up from the standard model, often including a flushing toilet, a small sink, and a mirror. Ideal for events where guests appreciate extra comfort.', link: '/services/luxury-portable-restrooms', image: IMAGE_URLS.deluxe },
        { name: 'ADA Accessible Porta Potty', description: 'A spacious unit designed to accommodate wheelchairs, with grab bars and a flat-floor entry. Essential for public events to ensure accessibility for all guests.', link: '/services/event-porta-potty-rental', image: IMAGE_URLS.ada },
        { name: 'Restroom Trailer Rental', description: 'The premium option for weddings and corporate events. These trailers feature multiple stalls, flushing toilets, running water, climate control, and high-end finishes.', link: '/services/restroom-trailer-rental', image: IMAGE_URLS.luxuryTrailer }
    ];

    const whyChooseUs = [
        "Locally Owned & Operated in Texas",
        "24/7 Customer Service & Support",
        "Fast, Same-Day Delivery Available",
        "Clean, Sanitized & Well-Maintained Units",
        "Competitive & Transparent Pricing",
        "Wide Range of Models for All Needs"
    ];

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": `https://www.${BUSINESS_INFO.domain}/`,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `https://www.${BUSINESS_INFO.domain}/?s={search_term_string}`
             },
            "query-input": "required name=search_term_string"
        }
    };

    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": BUSINESS_INFO.name,
        "image": IMAGE_URLS.mainPortaPotty,
        "@id": `https://www.${BUSINESS_INFO.domain}/`,
        "url": `https://www.${BUSINESS_INFO.domain}/`,
        "telephone": BUSINESS_INFO.phone,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address.split(',')[0],
            "addressLocality": BUSINESS_INFO.city,
            "addressRegion": BUSINESS_INFO.state,
            "postalCode": BUSINESS_INFO.zip,
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.347970,
            "longitude": -95.093260
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/Arthurrentalworks",
            "https://www.instagram.com/arthurrentalworks/",
            "https://www.linkedin.com/company/arthur-rental-works",
            "https://www.showmelocal.com/39244921-arthur-rental-works-cleveland",
            "https://ezlocal.com/tx/cleveland/portable-toilet-supplier/0919319573",
            "https://www.merchantcircle.com/arthur-rental-works--cleveland-tx",
            "https://www.yelp.com/biz/arthur-rental-works-cleveland"
        ],
        "description": `Your #1 source for porta potty rentals in Cleveland, TX. We provide clean, affordable portable toilets for construction sites, events, and more, with same-day delivery available. Call ${BUSINESS_INFO.phone} today!`,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Porta Potty Rental Services",
            "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "url": `https://www.${BUSINESS_INFO.domain}/services/${service.slug}`,
                    "description": service.shortDescription
                }
            }))
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Cleveland",
                "url": `https://www.${BUSINESS_INFO.domain}/`
            },
            ...locations.map(location => ({
                "@type": "City",
                "name": location.name,
                "url": `https://www.${BUSINESS_INFO.domain}/service-areas/${location.slug}`
            }))
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": homeFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
    
    return (
        <div>
            <SEO
                title={`Porta Potty Rental Cleveland, TX | ${BUSINESS_INFO.name}`}
                description="Need a porta potty in Cleveland, TX? Arthur Rental Works offers fast, affordable portable toilet rentals for construction, events, and more. Call for a free quote!"
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/`}
                ogImage={IMAGE_URLS.mainPortaPotty}
                schema={[websiteSchema, homeSchema, faqSchema]}
            />

            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white py-24 md:py-32" style={{ backgroundImage: `linear-gradient(rgba(0, 23, 71, 0.8), rgba(0, 23, 71, 0.8)), url(${IMAGE_URLS.mainPortaPotty})` }}>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Porta Potty Rental, Cleveland, TX</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Fast, Reliable, and Affordable Portable Toilet Solutions for Your Event or Job Site.</p>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                         <a href={BUSINESS_INFO.phoneHref} className="inline-block bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-transform transform hover:scale-105">
                            Need a porta potty in Cleveland, TX today? Call Now!
                        </a>
                    </div>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center"><Award size={32} className="mb-2 text-yellow-400" /><span className="font-semibold">5-Star Service</span></div>
                        <div className="flex flex-col items-center"><Phone size={32} className="mb-2 text-yellow-400" /><span className="font-semibold">24/7 Support</span></div>
                        <div className="flex flex-col items-center"><CheckCircle size={32} className="mb-2 text-yellow-400" /><span className="font-semibold">Locally Owned</span></div>
                        <div className="flex flex-col items-center"><Star size={32} className="mb-2 text-yellow-400" /><span className="font-semibold">Top Rated</span></div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Porta Potty Rental Services in Cleveland, Texas</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 mb-12">We offer a comprehensive range of portable sanitation solutions to meet the specific needs of any project or event in the Cleveland area.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.slice(0, 8).map(service => (
                            <div key={service.slug} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                <img src={service.image} alt={`${service.title} offered by ${BUSINESS_INFO.name}`} className="w-full h-48 object-cover" loading="lazy" />
                                <div className="p-6 text-left">
                                    <h3 className="font-bold text-xl mb-2 text-blue-900">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                                    <Link to={`/services/${service.slug}`} className="font-semibold text-blue-600 hover:text-blue-800">Learn More &rarr;</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="mt-12">
                        <Link to="/services" className="inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Same-Day Porta Potty Delivery in Cleveland, TX!</h2>
                    <p className="text-lg mb-8">Caught in a bind? We offer emergency and same-day delivery services to get you the sanitation you need, right when you need it.</p>
                    <a href={BUSINESS_INFO.phoneHref} className="inline-block bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-lg text-xl hover:bg-yellow-600 transition-transform transform hover:scale-105">
                        Call for Immediate Delivery
                    </a>
                </div>
            </section>
            
            {/* How It Works Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Simple Rental Process</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">Renting a porta potty in Cleveland is quick and hassle-free. Here’s how it works:</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                <ClipboardList size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">1. Get a Quote</h3>
                            <p className="text-gray-600">Call us or fill out our form. We’ll provide a clear, no-obligation quote instantly.</p>
                        </div>
                        <div className="text-center p-6">
                             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                <CalendarDays size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">2. Schedule Delivery</h3>
                            <p className="text-gray-600">Pick a date that works for you. We offer flexible scheduling, including same-day delivery.</p>
                        </div>
                        <div className="text-center p-6">
                             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                <Truck size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">3. We Deliver & Service</h3>
                            <p className="text-gray-600">We’ll place the sanitized units where you need them. Long-term rentals include regular cleaning.</p>
                        </div>
                         <div className="text-center p-6">
                             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                <CheckSquare size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">4. Easy Pickup</h3>
                            <p className="text-gray-600">Once your rental period is over, we’ll promptly pick up the units. No hassle, no fuss.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Types of Porta Potties */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Different Types of Porta Potties Available in Cleveland, TX</h2>
                         <p className="max-w-3xl mx-auto text-gray-600">From basic units for construction sites to luxurious trailers for weddings, we have the right portable restroom for your needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {portaPottyTypes.map(type => (
                            <div key={type.name} className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <img src={type.image} alt={type.name} className="w-full h-40 object-contain mb-4 rounded" loading="lazy"/>
                                <h3 className="font-bold text-xl mb-2 text-blue-900">{type.name}</h3>
                                <p className="text-gray-600 mb-4 flex-grow">{type.description}</p>
                                <Link to={type.link} className="font-semibold text-blue-600 hover:text-blue-800 mt-auto">Details &rarr;</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Cleveland's #1 Porta Potty Rental Company</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">Arthur Rental Works isn't just another rental company. We're your local partners, dedicated to providing exceptional service and immaculate portable sanitation solutions. We understand the needs of our Cleveland community and strive to exceed expectations on every job, big or small.</p>
                            <ul className="space-y-4">
                                {whyChooseUs.map(reason => (
                                    <li key={reason} className="flex items-center">
                                        <CheckCircle className="text-green-500 mr-3 flex-shrink-0"/>
                                        <span className="text-lg text-gray-700">{reason}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={BUSINESS_INFO.phoneHref} className="mt-8 inline-block bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors">
                                Get Your Free Quote Today
                            </a>
                        </div>
                        <div className="relative h-full min-h-[400px]">
                            <img src={IMAGE_URLS.team} alt={`The professional team at ${BUSINESS_INFO.name}`} className="rounded-lg shadow-2xl object-cover w-full h-full" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Benefits of Renting Portable Toilets</h2>
                        <p className="max-w-3xl mx-auto text-gray-600">Our services provide essential benefits for any site or event.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6"><Sparkles size={32} className="mx-auto text-blue-600 mb-3"/><h3 className="font-bold text-lg mb-2">Hygiene & Health</h3><p className="text-sm text-gray-600">Promote a safe and sanitary environment for guests or workers with our meticulously cleaned units.</p></div>
                        <div className="text-center p-6"><Users size={32} className="mx-auto text-blue-600 mb-3"/><h3 className="font-bold text-lg mb-2">Guest Convenience</h3><p className="text-sm text-gray-600">Provide accessible and convenient restroom facilities, improving the experience at any event.</p></div>
                        <div className="text-center p-6"><ShieldCheck size={32} className="mx-auto text-blue-600 mb-3"/><h3 className="font-bold text-lg mb-2">OSHA Compliance</h3><p className="text-sm text-gray-600">Ensure your construction site meets all legal requirements for sanitation facilities for your crew.</p></div>
                        <div className="text-center p-6"><DollarSign size={32} className="mx-auto text-blue-600 mb-3"/><h3 className="font-bold text-lg mb-2">Cost-Effective</h3><p className="text-sm text-gray-600">A far more affordable and practical solution than constructing permanent or temporary bathrooms.</p></div>
                    </div>
                </div>
            </section>
            
             {/* Affordable Rental Section */}
            <section className="bg-blue-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable Porta Potty Rental</h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">We believe in fair, transparent pricing. Get a high-quality portable toilet rental in Cleveland that fits your budget. No hidden fees, just great service.</p>
                    <Link to="/contact" className="inline-block bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-lg text-xl hover:bg-yellow-600 transition-transform transform hover:scale-105">
                        Get My Free Quote
                    </Link>
                </div>
            </section>

            {/* About Cleveland Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Serving Cleveland and All of Liberty County</h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">We are proud to serve the historic city of Cleveland, Texas. From events near the Texan Theater to construction projects along US-59, we provide prompt porta potty services to all local neighborhoods and surrounding areas. We know the community and are committed to keeping it clean and functional.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-800 mb-3">Neighborhoods We Serve</h3>
                            <ul className="space-y-1 text-gray-700">
                                <li>Downtown Cleveland</li>
                                <li>Pin Oak</li>
                                <li>North Cleveland</li>
                                <li>Eastside</li>
                                <li>And all rural areas</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-blue-800 mb-3">Local ZIP Codes</h3>
                            <ul className="space-y-1 text-gray-700">
                                <li>77327</li>
                                <li>77328</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-blue-800 mb-3">Key Landmarks</h3>
                            <ul className="space-y-1 text-gray-700">
                                <li>Cleveland Municipal Park</li>
                                <li>Stancil Park</li>
                                <li>Sam Houston National Forest</li>
                                <li>Trinity River</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
             {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div itemScope itemType="https://schema.org/FAQPage">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
                        <FAQAccordion faqs={homeFaqs} />
                    </div>
                </div>
            </section>
            
            {/* Contact Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                         <div className="text-center mb-12">
                             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get a Free, No-Obligation Quote Today!</h2>
                             <p className="max-w-2xl mx-auto text-gray-600">Have questions or ready to book your rental? Fill out the form below or give us a call. Our team is ready to help you find the perfect portable sanitation solution for your needs in Cleveland, TX.</p>
                         </div>
                         <div className="bg-white p-8 rounded-lg shadow-xl">
                            <ContactForm />
                         </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
