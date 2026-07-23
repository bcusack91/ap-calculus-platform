import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
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

    // v2 (DiceBear) avatars: the client submits params only; the SVG is
    // generated HERE from the allowlisted style + seed and stored alongside
    // them. Never accept SVG from the client — the stored markup renders on
    // other users' screens (leaderboard, matches), so it must stay trusted.
    let toStore: object = validated.data;
    if (validated.kind === 'v2') {
      const { generateAvatarSvg, styleSupportsEmotion } = await import('@/lib/avatar-styles');
      // Expression variants are baked at SAVE time, so match screens can swap to
      // a genuinely smiling face instantly without shipping @dicebear to the
      // client or re-generating per answer.
      const expressive = styleSupportsEmotion(validated.data.style);
      toStore = {
        ...validated.data,
        svg: generateAvatarSvg(validated.data),
        ...(expressive
          ? {
              svgHappy: generateAvatarSvg({ ...validated.data, emotion: 'happy' }),
              svgSad: generateAvatarSvg({ ...validated.data, emotion: 'sad' }),
            }
          : {}),
      };
    }

    // Update user's avatar
    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: { avatarData: toStore },
    });

    // Bust the navbar's server-side avatar cache so a fresh tab or reload picks
    // up the new avatar right away instead of after its 30-minute revalidate.
    // (Live match screens read avatarData directly and were already current.)
    revalidateTag(`avatar-${session.user.id}`);

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
