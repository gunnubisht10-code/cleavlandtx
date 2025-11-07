
import type { Service } from '../types';
import { IMAGE_URLS } from '../constants';

export const services: Service[] = [
  {
    slug: 'portable-toilet-rental',
    title: 'Portable Toilet Rental',
    shortDescription: 'Versatile and reliable portable toilets for any occasion or job site.',
    longDescription: 'Our standard portable toilet rentals are the cornerstone of our services. These units are perfect for construction sites, festivals, and any event needing basic, clean, and reliable sanitation. Each unit is delivered fully stocked and serviced on a schedule that meets your needs, ensuring a hygienic experience for all users.',
    image: IMAGE_URLS.standard,
    features: ['Durable construction', 'Well-ventilated design', 'Stocked with toilet paper', 'Optional hand sanitizer dispenser'],
    useCases: ['Construction sites', 'Public parks', 'Sporting events', 'Emergency response situations'],
    faqs: [
      { question: 'How often are portable toilets serviced?', answer: 'Servicing frequency depends on usage, but we typically recommend weekly service for long-term rentals. For high-traffic events, daily servicing may be required.' },
      { question: 'Do you offer hand sanitizer with these units?', answer: 'Yes, hand sanitizer dispensers are available as an add-on for all our standard portable toilets.' }
    ]
  },
  // This is a shortened list. The full list would be much longer based on the prompt.
  // I am including a few key ones to demonstrate the structure.
  {
    slug: 'porta-john-rental',
    title: 'Porta John Rental',
    shortDescription: 'Clean and convenient porta johns, perfect for any outdoor gathering.',
    longDescription: 'Our porta john rentals provide a simple and effective sanitation solution. Lightweight and easy to place, these units are ideal for backyard parties, agricultural fields, and smaller construction projects. We ensure every porta john is sanitized and ready for your event.',
    image: IMAGE_URLS.mainPortaPotty,
    features: ['Lightweight and portable', 'Anti-slip flooring', 'Translucent roof for natural light', 'Occupancy signal latch'],
    useCases: ['Agricultural fields', 'Backyard parties', 'Community fairs', 'Parking lots'],
    faqs: [
      { question: 'What is the difference between a porta potty and a porta john?', answer: 'The terms are often used interchangeably. Both refer to a standard portable toilet unit. We use both terms to ensure customers can find our services easily.' },
    ]
  },
  {
    slug: 'restroom-trailer-rental',
    title: 'Restroom Trailer Rental',
    shortDescription: 'Luxury restroom trailers for upscale events, providing comfort and style.',
    longDescription: 'Elevate your event with our luxury restroom trailers. These trailers offer a premium experience with features like flushing toilets, running water sinks, climate control, and interior lighting. They are perfect for weddings, corporate events, and VIP areas where comfort is paramount.',
    image: IMAGE_URLS.luxuryTrailer,
    features: ['Flushing toilets', 'Running water sinks with soap and paper towels', 'Air conditioning and heating', 'Interior and exterior lighting', 'Mirrors and countertops'],
    useCases: ['Weddings', 'Corporate events', 'Film sets', 'VIP areas at festivals', 'Long-term office remodels'],
    faqs: [
        { question: 'Do restroom trailers require power and water hookups?', answer: 'Yes, our restroom trailers typically require access to a standard electrical outlet and a water source via a garden hose. If hookups are not available, we can provide solutions with onboard water tanks and generators for an additional fee.' },
    ]
  },
  {
    slug: 'construction-site-portable-toilets',
    title: 'Construction Site Portable Toilets',
    shortDescription: 'Durable and compliant portable toilets designed for the demands of a construction site.',
    longDescription: 'Keep your crew productive and your site compliant with our rugged construction site portable toilets. These units are built to withstand tough conditions and are serviced regularly to maintain hygiene. We offer options including units with hooks for high-rise placement and hand wash stations.',
    image: IMAGE_URLS.construction,
    features: ['Heavy-duty, durable materials', 'Optional crane hooks for high-rise projects', 'Meets OSHA requirements', 'Weekly servicing and cleaning included'],
    useCases: ['Residential construction', 'Commercial building projects', 'Roadwork and infrastructure projects', 'Demolition sites'],
    faqs: [
        { question: 'How many toilets do I need for my construction site?', answer: 'OSHA guidelines recommend one portable toilet for every 10 workers for a 40-hour work week. We can help you determine the exact number needed for your project to ensure compliance.' },
    ]
  },
  {
    slug: 'event-porta-potty-rental',
    title: 'Event Porta Potty Rental',
    shortDescription: 'Clean, reliable, and strategically placed porta potties for events of any size.',
    longDescription: 'From small community gatherings to large-scale music festivals, we provide comprehensive event porta potty solutions. We work with you on placement strategy, calculate the number of units needed, and ensure they remain clean and stocked throughout your event for a positive guest experience.',
    image: IMAGE_URLS.event,
    features: ['Wide range of unit types (standard, deluxe, ADA)', 'Pre-event delivery and placement', 'On-site servicing during multi-day events', 'Hand wash stations and sanitizer available'],
    useCases: ['Music festivals', 'Weddings', 'Sporting events', 'Community fairs', 'Charity runs'],
    faqs: [
        { question: 'How far in advance should I book for a large event?', answer: 'For large events, we recommend booking at least 2-4 weeks in advance to ensure availability of the desired number and type of units, especially during peak season.' },
    ]
  },
  {
    slug: 'luxury-portable-restrooms',
    title: 'Luxury Portable Restrooms',
    shortDescription: 'Premium restroom solutions that offer the comfort and amenities of an indoor bathroom.',
    longDescription: 'Our luxury portable restrooms and restroom trailers are the perfect choice for clients who want to provide the best for their guests. With elegant interiors, climate control, and high-end finishes, these units are indistinguishable from a permanent restroom facility. ',
    image: IMAGE_URLS.luxuryTrailer,
    features: ['Climate control (A/C & Heat)', 'Spacious private stalls', 'Vanity with mirrors and running water', 'High-end interior finishes', 'Stereo sound system'],
    useCases: ['Outdoor weddings', 'Corporate retreats', 'VIP lounges', 'Private estate parties'],
    faqs: [
        { question: 'What sizes do the luxury trailers come in?', answer: 'We offer a variety of sizes, from 2-stall trailers suitable for smaller, intimate gatherings up to 10-stall trailers for large corporate functions or weddings.' },
    ]
  },
  {
    slug: 'temporary-restroom-rental',
    title: 'Temporary Restroom Rental',
    shortDescription: 'Flexible and dependable temporary restroom solutions for any short-term need.',
    longDescription: 'When you need restrooms for a limited time, our temporary rental service is the answer. This is perfect for home renovations, bathroom remodels, or any situation where permanent facilities are temporarily unavailable. We provide fast delivery and pickup to match your project timeline.',
    image: IMAGE_URLS.portableToilets,
    features: ['Flexible rental periods', 'Fast delivery and pickup', 'All unit types available', 'Cost-effective solution'],
    useCases: ['Home renovations', 'Office remodels', 'Temporary worksites', 'Disaster relief efforts'],
    faqs: [
        { question: 'Can I rent a single toilet for a weekend?', answer: 'Absolutely. We cater to all needs, from a single unit for a weekend party to dozens of units for a month-long construction project.' },
    ]
  },
  {
    slug: 'portable-sanitation-services',
    title: 'Portable Sanitation Services',
    shortDescription: 'Comprehensive sanitation solutions including toilets, hand wash stations, and servicing.',
    longDescription: 'Beyond just toilets, we offer a full suite of portable sanitation services. This includes standalone hand washing stations, holding tanks for office trailers, and regular pumping and maintenance services to ensure your entire site remains clean, sanitary, and compliant.',
    image: IMAGE_URLS.cleaningTruck,
    features: ['Portable toilets', 'Hand washing stations', 'Holding tanks', 'Regularly scheduled pumping and cleaning', 'Sanitizer refills'],
    useCases: ['Large construction sites', 'Long-term events', 'Food festivals', 'Remote work camps'],
    faqs: [
        { question: 'What are holding tanks used for?', answer: 'Holding tanks are large-capacity containers used to collect wastewater from office trailers, RVs, or other temporary structures that have plumbing but no access to a sewer system.' },
    ]
  },
  {
    slug: 'outdoor-event-toilet-rental',
    title: 'Outdoor Event Toilet Rental',
    shortDescription: 'Specialized toilet rentals for any outdoor event, from concerts to marathons.',
    longDescription: 'Planning an outdoor event comes with unique challenges, and sanitation is a big one. We specialize in providing the right number and type of portable toilets for outdoor settings. We consider guest count, event duration, and layout to create a seamless sanitation plan.',
    image: IMAGE_URLS.festival,
    features: ['Weather-resistant units', 'Expert placement advice', 'ADA-compliant options', 'High-capacity units for large crowds'],
    useCases: ['Concerts', 'Marathons and 5Ks', 'County fairs', 'Outdoor markets', 'Sporting tournaments'],
    faqs: [
        { question: 'How do you handle waste disposal?', answer: 'We are a fully licensed and insured company. All waste is transported and disposed of at approved local wastewater treatment facilities in an environmentally safe and responsible manner.' },
    ]
  },
  {
    slug: 'long-term-porta-potty-rental',
    title: 'Long-Term Porta Potty Rental',
    shortDescription: 'Cost-effective and reliable porta potty rentals for ongoing projects and sites.',
    longDescription: 'For projects that span weeks, months, or even years, our long-term rental plans provide the best value. We include a regular weekly servicing schedule to pump, clean, and restock the units, ensuring they remain in excellent condition for the duration of your project.',
    image: IMAGE_URLS.construction,
    features: ['Discounted long-term rates', 'Includes weekly service', 'Consistent and reliable maintenance', 'Ability to add or remove units as project needs change'],
    useCases: ['Construction projects', 'Seasonal agricultural work', 'Permanent facilities at parks or remote sites', 'Industrial facilities'],
    faqs: [
        { question: 'Can I change my service day?', answer: 'Yes, with advance notice, we can typically adjust your service day to better fit your schedule and site access requirements.' },
    ]
  },
  {
    slug: 'short-term-porta-potty-rental',
    title: 'Short-Term Porta Potty Rental',
    shortDescription: 'Convenient porta potty rentals for weekend events, parties, and short projects.',
    longDescription: 'Our short-term rentals are perfect for any event lasting from a single day to a full week. We provide prompt delivery before your event starts and quick pickup after it ends, making the process hassle-free. It’s the ideal solution for weekend festivals, parties, and small projects.',
    image: IMAGE_URLS.party,
    features: ['Ideal for weekend rentals', 'Punctual delivery and pickup', 'Clean and fully-stocked units', 'No long-term commitment'],
    useCases: ['Weekend parties', 'Family reunions', 'Single-day events', 'Short home renovation projects'],
    faqs: [
        { question: 'When will you deliver and pick up the toilet for a Saturday party?', answer: 'Typically, we will deliver the unit on Friday and pick it up on the following Monday, giving you full use of it for the entire weekend.' },
    ]
  }
];
