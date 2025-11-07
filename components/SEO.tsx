
import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';
import type { SEOProps } from '../types';

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, ogType = 'website', ogImage, twitterCard = 'summary_large_image', schema }) => {

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    const setProperty = (property: string, content: string) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
        let element = document.querySelector(`link[rel="${rel}"]`);
        if(!element) {
            element = document.createElement('link');
            element.setAttribute('rel', rel);
            document.head.appendChild(element);
        }
        element.setAttribute('href', href);
    }
    
    // Standard Meta Tags
    setMeta('description', description);
    
    // Canonical Link
    setLink('canonical', canonicalUrl);

    // Open Graph Tags
    setProperty('og:title', title);
    setProperty('og:description', description);
    setProperty('og:type', ogType);
    setProperty('og:url', canonicalUrl);
    setProperty('og:site_name', BUSINESS_INFO.name);
    if(ogImage) {
        setProperty('og:image', ogImage);
    }

    // Twitter Card Tags
    setMeta('twitter:card', twitterCard);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if(ogImage) {
        setMeta('twitter:image', ogImage);
    }

    // Cleanup function
    return () => {
        // This component is for a static site, so cleanup on unmount isn't strictly necessary 
        // as the user navigates to a new "page" and this component re-runs.
        // However, it's good practice.
    };

  }, [title, description, canonicalUrl, ogType, ogImage, twitterCard]);

  // Fix: Updated to use `schema` prop and robustly handle script element creation and typing.
  // This resolves the 'property type does not exist on HTMLElement' and 'ReactNode' errors.
  useEffect(() => {
    const scriptId = 'json-ld-schema';
    let scriptEl = document.getElementById(scriptId);

    if (schema) {
      if (!scriptEl || !(scriptEl instanceof HTMLScriptElement)) {
        if (scriptEl) {
          scriptEl.remove();
        }
        const newScript = document.createElement('script');
        newScript.type = 'application/ld+json';
        newScript.id = scriptId;
        document.head.appendChild(newScript);
        scriptEl = newScript;
      }
      // Safely stringify schema if it's an object
      const schemaContent = typeof schema === 'object' ? JSON.stringify(schema, null, 2) : '';
      scriptEl.innerHTML = schemaContent;
    } else if (scriptEl) {
      // Remove script if no schema are provided
      scriptEl.remove();
    }

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema]);


  return null;
};

export default SEO;