
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyCallButton from './components/StickyCallButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LocationsHubPage from './pages/LocationsHubPage';
import LocationDetailPage from './pages/LocationDetailPage';
import AttractionsHubPage from './pages/AttractionsHubPage';
import AttractionDetailPage from './pages/AttractionDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <main className="flex-grow pb-20 lg:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesHubPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/service-areas" element={<LocationsHubPage />} />
            <Route path="/service-areas/:slug" element={<LocationDetailPage />} />
            <Route path="/local-attractions" element={<AttractionsHubPage />} />
            <Route path="/local-attractions/:slug" element={<AttractionDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyCallButton />
      </div>
    </BrowserRouter>
  );
}

export default App;