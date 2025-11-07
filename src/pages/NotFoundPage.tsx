
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants';

const NotFoundPage: React.FC = () => {
    return (
        <div>
            <SEO
                title={`404 - Page Not Found | ${BUSINESS_INFO.name}`}
                description="The page you are looking for does not exist."
                canonicalUrl={`https://www.${BUSINESS_INFO.domain}/404`}
            />
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-6xl font-bold text-blue-600">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2">Sorry, we couldn't find the page you're looking for.</p>
                <div className="mt-8">
                    <Link
                        to="/"
                        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;