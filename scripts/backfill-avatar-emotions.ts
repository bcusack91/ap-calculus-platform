/**
 * Backfills svgHappy / svgSad on existing v2 (DiceBear) avatars.
 *
 * Expression variants are generated at save time, so avatars saved before that
 * shipped have only the neutral SVG and fall back to the reaction badge. This
 * regenerates the variants from each avatar's stored (style, seed, background),
 * which is deterministic — the neutral face is byte-identical to what is already
 * stored, so nobody's avatar changes appearance.
 *
 * Dry run:  npx tsx scripts/backfill-avatar-emotions.ts
 * Apply:    APPLY=1 npx tsx scripts/backfill-avatar-emotions.ts
 * Prod:     AVATAR_DB=prod APPLY=1 npx tsx scripts/backfill-avatar-emotions.ts
 */
import { config } from 'dotenv'
config({ path: process.env.AVATAR_DB === 'prod' ? '.env' : '.env.local', override: true })

import { PrismaClient } from '@prisma/client'
import { generateAvatarSvg, styleSupportsEmotion } from '../src/lib/avatar-styles'
import { DICEBEAR_STYLE_IDS, type DiceBearStyleId } from '../src/types/avatar'

const APPLY = process.env.APPLY === '1'

async function main() {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany({
    where: { avatarData: { not: Prisma.JsonNull } },
    select: { id: true, avatarData: true },
  })

  let v2 = 0, expressive = 0, alreadyDone = 0, updated = 0, unexpressive = 0
  for (const u of users) {
    const a = u.avatarData as { v?: number; style?: string; seed?: string; backgroundColor?: string; svgHappy?: string } | null
    if (!a || a.v !== 2 || !a.style || !a.seed) continue
    v2++
    if (!(DICEBEAR_STYLE_IDS as readonly string[]).includes(a.style)) continue
    const style = a.style as DiceBearStyleId
    if (!styleSupportsEmotion(style)) { unexpressive++; continue }
    expressive++
    if (a.svgHappy) { alreadyDone++; continue }

    const base = { style, seed: a.seed, ...(a.backgroundColor ? { backgroundColor: a.backgroundColor } : {}) }
    const next = {
      ...a,
      svgHappy: generateAvatarSvg({ ...base, emotion: 'happy' }),
      svgSad: generateAvatarSvg({ ...base, emotion: 'sad' }),
    }
    if (APPLY) {
      await prisma.user.update({ where: { id: u.id }, data: { avatarData: next } })
    }
    updated++
  }

  console.log(`v2 avatars:            ${v2}`)
  console.log(`  expressive styles:   ${expressive}`)
  console.log(`  non-expressive:      ${unexpressive}  (adventurer / open-peeps — badge fallback)`)
  console.log(`  already had variants:${alreadyDone}`)
  console.log(`\n${APPLY ? 'Updated' : 'Would update'}: ${updated}`)
  if (!APPLY && updated > 0) console.log('Re-run with APPLY=1 to write.')
  await prisma.$disconnect()
}

import { Prisma } from '@prisma/client'
main()
