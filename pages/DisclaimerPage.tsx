
import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO } from '../constants';

const DisclaimerPage: React.FC = () => {
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
                "name": "Disclaimer"
            }
        ]
    };

    return (
        <div>
            <SEO
                title={`Disclaimer | ${BUSINESS_INFO.name}`}
                description={`Disclaimer for ClevelandPortaPottyRentals.com.`}
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/#/disclaimer`}
                schema={breadcrumbSchema}
            />
            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ name: 'Disclaimer' }]} />
                <div className="prose lg:prose-lg max-w-4xl mx-auto mt-8">
                    <h1>Disclaimer</h1>
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>The information contained on the Service is for general information purposes only.</p>
                    <p>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
                    <p>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.</p>
                    <h2>External Links Disclaimer</h2>
                    <p>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company. Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
                    <h2>Errors and Omissions Disclaimer</h2>
                    <p>The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.</p>
                    <p>The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerPage;
