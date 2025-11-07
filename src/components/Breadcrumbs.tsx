
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="bg-gray-100 py-3 px-4 rounded-md">
      <ol className="list-none p-0 inline-flex items-center">
        <li className="flex items-center">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <ChevronRight size={16} className="mx-2 text-gray-500" />
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.path && index < items.length - 1 ? (
              <Link to={item.path} className="text-blue-600 hover:underline">{item.name}</Link>
            ) : (
              <span className="text-gray-700 font-medium">{item.name}</span>
            )}
            {index < items.length - 1 && <ChevronRight size={16} className="mx-2 text-gray-500" />}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;