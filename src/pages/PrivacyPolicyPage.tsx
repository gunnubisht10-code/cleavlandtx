
import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO } from '../constants';

const PrivacyPolicyPage: React.FC = () => {
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
                "name": "Privacy Policy"
            }
        ]
    };

    return (
        <div>
            <SEO
                title={`Privacy Policy | ${BUSINESS_INFO.name}`}
                description="Read the privacy policy for ClevelandPortaPottyRentals.com."
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/privacy-policy`}
                schema={breadcrumbSchema}
            />
            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'Privacy Policy' }]} />
                <div className="prose lg:prose-lg max-w-4xl mx-auto mt-8">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                    <h2>Interpretation and Definitions</h2>
                    <h3>Interpretation</h3>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h3>Definitions</h3>
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul>
                        <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to {BUSINESS_INFO.name}, {BUSINESS_INFO.address}.</li>
                        <li><strong>Service</strong> refers to the Website.</li>
                        <li><strong>Website</strong> refers to {BUSINESS_INFO.domain}, accessible from https://www.{BUSINESS_INFO.domain}</li>
                        <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                    </ul>

                    <h2>Collecting and Using Your Personal Data</h2>
                    <h3>Types of Data Collected</h3>
                    <h4>Personal Data</h4>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Usage Data</li>
                    </ul>
                    <p>When you submit information via our contact form, that information is used solely for the purpose of responding to your inquiry.</p>

                    <h2>Use of Your Personal Data</h2>
                    <p>The Company may use Personal Data for the following purposes:</p>
                    <ul>
                        <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
                        <li><strong>To contact You:</strong> To contact You by email, telephone calls, or other equivalent forms of electronic communication regarding your inquiries.</li>
                        <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                    </ul>
                    
                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                    <ul>
                        <li>By email: {BUSINESS_INFO.email}</li>
                        <li>By phone number: {BUSINESS_INFO.phone}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;