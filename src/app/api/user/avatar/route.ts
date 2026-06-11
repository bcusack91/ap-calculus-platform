import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { validateAvatarData } from '@/lib/avatar-validation';

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await request.json();

    // avatarData is republished on the public leaderboard — enforce a strict
    // schema (known fields/values only) and a 2KB serialized-size cap.
    const validated = validateAvatarData(payload);
    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    // Update user's avatar
    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: { avatarData: validated.data },
    });

    return NextResponse.json({ success: true, avatarData: user.avatarData });
  } catch (error) {
    console.error('Error saving avatar:', error);
    return NextResponse.json(
      { error: 'Failed to save avatar' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { avatarData: true },
    });

    return NextResponse.json({ avatarData: user?.avatarData || null });
  } catch (error) {
    console.error('Error fetching avatar:', error);
    return NextResponse.json(
      { error: 'Failed to fetch avatar' },
      { status: 500 }
    );
  }
}
