import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

// GET /api/user/preferences
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Preferences are stored in user metadata (JSON column) or kept client-side
  // For now, return empty to let client-side localStorage take precedence
  return NextResponse.json({ preferences: null })
}

// PUT /api/user/preferences
export async function PUT() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Acknowledge the update — full server persistence can be added
  // when a preferences JSON column is added to the User model
  return NextResponse.json({ success: true })
}
