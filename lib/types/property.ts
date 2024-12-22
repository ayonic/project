export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: string;
  status: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: number;
  images: string[];
  features: string[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyFilters {
  location?: string | null;
  type?: string | null;
  priceRange?: string | null;
  page?: number;
  limit?: number;
}