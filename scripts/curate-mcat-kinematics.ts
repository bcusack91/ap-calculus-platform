/**
 * One-shot (idempotent) content fix for MCAT Kinematics per owner review:
 * - Aligns the outdated "three kinematic equations" flashcard with the deck's
 *   Big 5 + inventory method, adds 5 new cards matching the curated deck.
 * - Upserts the curated slide deck (generateSlideDeck now returns it).
 *   PROD=1 npx tsx scripts/curate-mcat-kinematics.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

const SLUG = 'mcat-physics-mechanics-kinematics-mcat'

const NEW_CARDS: { front: string; back: string }[] = [
  {
    front: 'What is the FIRST step in any kinematics problem?',
    back: 'Take an inventory: list every variable given (explicit AND implicit) and mark the one asked for. In 2D, build one inventory per axis — x and y share only time $t$.',
  },
  {
    front: 'How do you choose which Big 5 kinematic equation to use?',
    back: 'Find the variable that is neither given nor asked — exactly one of ($\\Delta x$, $v_0$, $v$, $a$, $t$) will be. Use the equation that does NOT contain it: one equation, one unknown.',
  },
  {
    front: 'What implicit values do "dropped", "comes to rest", "at the peak", and "constant velocity" give you?',
    back: '"Dropped"/"starts from rest": $v_0 = 0$. "Comes to rest": $v = 0$. "At the peak": $v_y = 0$. "Constant velocity": $a = 0$. The wording is data — add it to your inventory.',
  },
  {
    front: 'Projectile range: formula, and which launch angle maximizes it?',
    back: '$R = \\frac{v_0^2 \\sin(2\\theta)}{g}$ — maximum at $45°$; complementary angles (e.g. $30°$ and $60°$) give equal range.',
  },
  {
    front: 'On the MCAT, what value of $g$ should you use, and who falls faster — heavy or light objects?',
    back: 'Use $g \\approx 10\\;\\text{m/s}^2$ for fast mental math. Ignoring air resistance, ALL objects fall at the same rate regardless of mass.',
  },
]

const UPDATED_BIG5_BACK =
  'The Big 5 each omit one variable: $v = v_0 + at$ (no $\\Delta x$); $\\Delta x = v_0t + \\frac{1}{2}at^{2}$ (no $v$); $v^{2} = v_0^{2} + 2a\\Delta x$ (no $t$); $\\Delta x = \\frac{1}{2}(v_0+v)t$ (no $a$); $\\Delta x = vt - \\frac{1}{2}at^{2}$ (no $v_0$).\n\nPick the one that omits the variable you neither know nor need. All five assume constant $a$.'

async function main() {
  const prisma = new PrismaClient()
  const topic = await prisma.topic.findUnique({
    where: { slug: SLUG },
    select: { id: true, flashcards: { select: { id: true, front: true } } },
  })
  if (!topic) throw new Error('topic not found')

  // Align the legacy "three equations" card with the Big 5 the deck teaches.
  const legacy = topic.flashcards.find((c) => c.front.includes('three kinematic equations'))
  if (legacy) {
    await prisma.flashcard.update({
      where: { id: legacy.id },
      data: {
        front: 'State the Big 5 kinematic equations and how to pick between them.',
        back: UPDATED_BIG5_BACK,
      },
    })
    console.log('updated legacy Big 5 card')
  } else {
    console.log('legacy card not found (already updated?)')
  }

  const existingFronts = new Set(topic.flashcards.map((c) => c.front))
  let added = 0
  for (const card of NEW_CARDS) {
    if (existingFronts.has(card.front)) continue
    await prisma.flashcard.create({ data: { topicId: topic.id, front: card.front, back: card.back, isPremium: false } })
    added++
  }
  console.log(`added ${added} new cards`)

  // Store the curated deck (generateSlideDeck returns the curated override).
  const { generateSlideDeck } = await import('../src/lib/slide-deck')
  const deck = await generateSlideDeck(SLUG)
  const slides = deck.slides
  if (slides[0].kind !== 'title' || slides[slides.length - 1].kind !== 'quiz') throw new Error('bad deck frame')
  const pollCount = slides.filter((s) => s.kind === 'poll').length
  await prisma.topicSlideDeck.upsert({
    where: { topicSlug: SLUG },
    update: { title: deck.title, slides, slideCount: slides.length, pollCount, generatedAt: new Date() },
    create: { topicSlug: SLUG, courseSlug: 'mcat-prep', title: deck.title, slides, slideCount: slides.length, pollCount },
  })
  console.log(`stored curated deck: ${slides.length} slides, ${pollCount} polls`)

  const after = await prisma.flashcard.count({ where: { topicId: topic.id } })
  console.log(`topic now has ${after} flashcards`)
  await prisma.$disconnect()
}
main()
