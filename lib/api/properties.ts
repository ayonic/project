import { prisma } from '@/lib/db/prisma';
import type { PropertyFilters } from '@/lib/types/property';

export async function getProperties(filters: PropertyFilters) {
  const { location, type, priceRange, page = 1, limit = 10 } = filters;
  const skip = (page - 1) * limit;

  const where: any = {};
  
  if (location) where.location = { contains: location, mode: 'insensitive' };
  if (type) where.type = type;
  if (priceRange) {
    const [min, max] = priceRange.split('-').map(Number);
    where.price = { gte: min };
    if (max) where.price.lte = max;
  }

  const [properties, total] = await Promise.all([
    prisma.property.findMany({
      where,
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.property.count({ where })
  ]);

  return {
    properties,
    pagination: {
      total,
      pages: Math.ceil(total / limit),
      current: page,
    },
  };
}