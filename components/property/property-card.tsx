'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    bedrooms?: number;
    bathrooms?: number;
    size?: number;
    images: string[];
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { id, title, description, price, location, bedrooms, bathrooms, size, images } = property;
  
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={images[0] || '/placeholder-property.jpg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-2xl font-bold mb-4">₦{price.toLocaleString()}</p>
        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
          {bedrooms && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{bedrooms} Beds</span>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{bathrooms} Baths</span>
            </div>
          )}
          {size && (
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{size}m²</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/properties/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}