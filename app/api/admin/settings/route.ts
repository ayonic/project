import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/auth-options';
import { getSettings, updateSettings } from '@/lib/api/settings';

async function isAdmin(session: any) {
  return session?.user?.role === 'admin';
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !await isAdmin(session)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await getSettings();
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Get Settings Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !await isAdmin(session)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const settings = await updateSettings(data);
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Update Settings Error:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}