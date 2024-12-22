import { NextResponse } from 'next/server';
import { getProperties } from '@/lib/api/properties';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/auth-options';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filters = {
      location: searchParams.get('location'),
      type: searchParams.get('type'),
      priceRange: searchParams.get('price'),
      page: Number(searchParams.get('page')) || 1,
    };

    const data = await getProperties(filters);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Properties API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    const property = await prisma.property.create({
      data: {
        ...data,
        userId: session.user.id,
      },
    });

    return NextResponse.json(property);
  } catch (error) {
    console.error('Create Property Error:', error);
    return NextResponse.json(
      { error: 'Failed to create property' },
      { status: 500 }
    );
  }
}