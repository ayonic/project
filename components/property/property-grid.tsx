'use client';

import { useEffect, useState } from 'react';
import PropertyCard from './property-card';
import { API_ROUTES } from '@/lib/config/constants';

export default function PropertyGrid({ initialFilters = {} }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams(initialFilters);
        const response = await fetch(`${API_ROUTES.PROPERTIES}?${params}`);
        const data = await response.json();
        
        if (!response.ok) throw new Error(data.error);
        
        setProperties(data.properties);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [initialFilters]);

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}