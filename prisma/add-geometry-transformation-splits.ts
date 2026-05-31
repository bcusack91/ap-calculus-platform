import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('📐 Adding split transformation topics (translation / reflection / rotation) to Geometry...\n')

  const course = await prisma.course.findUnique({ where: { slug: 'geometry' } })
  if (!course) {
    console.log('❌ Geometry course not found.')
    return
  }

  // Find the category that currently contains "rigid-transformations-geo" so the
  // three new topics are listed right next to it on the geometry interactive
  // lessons page.
  const rigid = await prisma.topic.findUnique({
    where: { slug: 'rigid-transformations-geo' },
    select: { categoryId: true, order: true },
  })

  if (!rigid) {
    console.log('❌ rigid-transformations-geo topic not found. Run prisma/expand-geometry-ccss.ts first.')
    return
  }

  const categoryId = rigid.categoryId
  const baseOrder = rigid.order

  const topics = [
    {
      slug: 'translation-geo',
      title: 'Translation',
      order: baseOrder + 1,
      description:
        'Slide a figure across the coordinate plane using vectors and coordinate rules — the gentlest rigid transformation.',
      textContent: `# Translation

A **translation** slides every point of a figure by the same vector $\\langle a, b \\rangle$:

$$(x, y) \\to (x + a, y + b)$$

Translations preserve **lengths**, **angles**, and **orientation** — only the position changes. This interactive lesson walks through vector notation, translating whole figures, composing translations, and the common sign mistakes students make.`,
    },
    {
      slug: 'reflection-geo',
      title: 'Reflection',
      order: baseOrder + 2,
      description:
        'Flip a figure across a mirror line — the only basic rigid transformation that reverses orientation.',
      textContent: `# Reflection

A **reflection** across a line $\\ell$ maps each point to its mirror image, with $\\ell$ as the perpendicular bisector of the segment joining the point to its image.

| Mirror | Rule |
|--------|------|
| $x$-axis | $(x, y) \\to (x, -y)$ |
| $y$-axis | $(x, y) \\to (-x, y)$ |
| $y = x$ | $(x, y) \\to (y, x)$ |
| $y = -x$ | $(x, y) \\to (-y, -x)$ |

This interactive lesson covers the geometric definition, the coordinate rules, orientation reversal, and how two reflections compose into a translation or rotation.`,
    },
    {
      slug: 'rotation-geo',
      title: 'Rotation',
      order: baseOrder + 3,
      description:
        'Turn a figure about a center point by a specified angle — preserves distance, angles, and orientation.',
      textContent: `# Rotation

A **rotation** turns every point of a figure about a fixed center by a given angle and direction. Counterclockwise rotations about the origin satisfy:

| Angle | Rule |
|-------|------|
| $90°$ | $(x, y) \\to (-y, x)$ |
| $180°$ | $(x, y) \\to (-x, -y)$ |
| $270°$ | $(x, y) \\to (y, -x)$ |

This interactive lesson covers the three pieces of information a rotation requires (center, angle, direction), the coordinate rules for special angles, rotating about non-origin centers, and composition of rotations.`,
    },
  ]

  for (const t of topics) {
    const existing = await prisma.topic.findUnique({ where: { slug: t.slug } })
    if (existing) {
      await prisma.topic.update({
        where: { slug: t.slug },
        data: {
          title: t.title,
          description: t.description,
          textContent: t.textContent,
          categoryId,
          order: t.order,
        },
      })
      console.log(`  ↻ updated topic: ${t.slug}`)
    } else {
      await prisma.topic.create({
        data: {
          slug: t.slug,
          title: t.title,
          description: t.description,
          textContent: t.textContent,
          order: t.order,
          categoryId,
        },
      })
      console.log(`  ✅ created topic: ${t.slug}`)
    }
  }

  console.log('\nDone.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
