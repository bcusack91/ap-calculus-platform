import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * The College Board's 2024-25 AP Physics 1 CED renamed the Simple Harmonic
 * Motion unit to "Oscillations" (it's now Unit 7). We keep the existing
 * category slug `simple-harmonic-motion` so any in-flight TopicProgress and
 * shared links continue to work; we just update the user-facing name and
 * description so the course page reads correctly.
 */
async function main() {
  const updated = await prisma.category.update({
    where: { slug: 'simple-harmonic-motion' },
    data: {
      name: 'Oscillations',
      description: 'Simple harmonic motion, springs, pendulums, and energy in oscillating systems',
    },
    select: { id: true, name: true, slug: true },
  })
  console.log(`✓ Renamed category → "${updated.name}" (slug=${updated.slug})`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
