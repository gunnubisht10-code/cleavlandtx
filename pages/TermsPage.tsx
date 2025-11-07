
import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO } from '../constants';

const TermsPage: React.FC = () => {
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
                "name": "Terms and Conditions"
            }
        ]
    };

    return (
        <div>
            <SEO
                title={`Terms and Conditions | ${BUSINESS_INFO.name}`}
                description={`Read the terms and conditions for using ClevelandPortaPottyRentals.com.`}
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/#/terms-and-conditions`}
                schema={breadcrumbSchema}
            />
            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'Terms and Conditions' }]} />
                <div className="prose lg:prose-lg max-w-4xl mx-auto mt-8">
                    <h1>Terms and Conditions</h1>
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>Please read these terms and conditions carefully before using Our Service.</p>
                    
                    <h2>Acknowledgment</h2>
                    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                    <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                    
                    <h2>Links to Other Websites</h2>
                    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                    
                    <h2>Limitation of Liability</h2>
                    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>

                    <h2>Governing Law</h2>
                    <p>The laws of the State of Texas, United States, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                    
                    <h2>Contact Us</h2>
                    <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                    <ul>
                        <li>By email: {BUSINESS_INFO.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
