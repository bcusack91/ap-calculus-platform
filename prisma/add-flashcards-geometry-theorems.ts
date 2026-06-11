import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Geometry theorem flashcards...\n');

  const topicSlugs = [
    'triangle-angle-sum',
    'congruent-triangles',
    'similar-triangles-geometry',
    'pythagorean-theorem',
    'parallel-lines-transversals',
    'circle-basics-geometry',
    'area-triangles-quadrilaterals',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'triangle-angle-sum' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Triangle Angle Sum Theorem?', back: 'The three interior angles of a triangle add up to **180°**.', hint: 'Always 180° — no exceptions for any triangle.' },
        { topicId: t1.id, front: 'Exterior Angle Theorem?', back: 'An exterior angle of a triangle equals the **sum of the two remote interior angles**.\n\nIf the exterior angle is at vertex C, then the exterior angle = angle A + angle B.', hint: 'The outside angle = sum of the two non-adjacent inside angles.' },
      ],
    });
    console.log('✅ Triangle Angle Sum flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'congruent-triangles' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What are the 5 triangle congruence postulates/theorems?', back: '**SSS** — Side-Side-Side\n**SAS** — Side-Angle-Side\n**ASA** — Angle-Side-Angle\n**AAS** — Angle-Angle-Side\n**HL** — Hypotenuse-Leg (right triangles only)\n\n⚠ SSA and AAA do NOT prove congruence.', hint: '5 ways to prove triangles are congruent.' },
        { topicId: t2.id, front: 'What does CPCTC stand for?', back: '**Corresponding Parts of Congruent Triangles are Congruent.**\n\nUsed AFTER proving two triangles are congruent to show that specific sides or angles are equal.', hint: 'First prove congruence, then use CPCTC.' },
      ],
    });
    console.log('✅ Congruent Triangles flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'similar-triangles-geometry' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What are the 3 ways to prove triangles are similar?', back: '**AA** — Angle-Angle (two angles equal)\n**SAS~** — Side-Angle-Side (proportional sides with included angle)\n**SSS~** — Side-Side-Side (all sides proportional)\n\nSimilar means same shape, different size.', hint: 'Similar = proportional sides, equal angles.' },
        { topicId: t3.id, front: 'If two triangles are similar with scale factor $k$, how do areas compare?', back: 'Area ratio = $k^2$\n\nIf the sides are in ratio 2:3, the areas are in ratio 4:9.\nVolume ratio (for similar solids) = $k^3$.', hint: 'Sides: k, Area: k², Volume: k³.' },
      ],
    });
    console.log('✅ Similar Triangles flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'pythagorean-theorem' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'Pythagorean Theorem?', back: 'In a right triangle: $a^2 + b^2 = c^2$\n\nwhere $c$ is the hypotenuse (the longest side, opposite the right angle).', hint: 'Only works for right triangles.' },
        { topicId: t4.id, front: 'Common Pythagorean triples?', back: '**3-4-5** (and multiples: 6-8-10, 9-12-15)\n**5-12-13**\n**8-15-17**\n**7-24-25**\n\nRecognizing these saves time on tests.', hint: 'Memorize 3-4-5 and 5-12-13 at minimum.' },
        { topicId: t4.id, front: 'Converse of the Pythagorean Theorem?', back: 'If $a^2 + b^2 = c^2$, the triangle is **right**.\nIf $a^2 + b^2 > c^2$, the triangle is **acute**.\nIf $a^2 + b^2 < c^2$, the triangle is **obtuse**.', hint: 'Use it to classify triangles.' },
      ],
    });
    console.log('✅ Pythagorean Theorem flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'parallel-lines-transversals' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'When a transversal crosses parallel lines, which angle pairs are congruent?', back: '**Corresponding angles** — same position\n**Alternate interior angles** — opposite sides, between parallel lines\n**Alternate exterior angles** — opposite sides, outside parallel lines', hint: 'All congruent pairs.' },
        { topicId: t5.id, front: 'When a transversal crosses parallel lines, which angle pairs are supplementary?', back: '**Co-interior (same-side interior) angles** add up to 180°.\n\nAlso called **consecutive interior angles**.', hint: 'Same side, between the parallel lines = supplementary.' },
      ],
    });
    console.log('✅ Parallel Lines & Transversals flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'circle-basics-geometry' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'Inscribed angle theorem?', back: 'An inscribed angle is **half** the central angle that intercepts the same arc.\n\nInscribed angle = $\\frac{1}{2}$ × intercepted arc', hint: 'Inscribed angle is always half its arc.' },
        { topicId: t6.id, front: 'What is the relationship between a tangent line and a radius?', back: 'A tangent line is **perpendicular** to the radius drawn to the point of tangency. They form a 90° angle.', hint: 'Tangent ⊥ radius at the point of contact.' },
        { topicId: t6.id, front: 'Standard form of a circle equation?', back: '$(x - h)^2 + (y - k)^2 = r^2$\n\nCenter: $(h, k)$, Radius: $r$', hint: 'The center coordinates are subtracted inside the parentheses.' },
      ],
    });
    console.log('✅ Circle Basics flashcards');
  }

  const t7 = await prisma.topic.findFirst({ where: { slug: 'area-triangles-quadrilaterals' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'Area formulas for common shapes?', back: '**Triangle**: $A = \\frac{1}{2}bh$\n**Rectangle**: $A = lw$\n**Parallelogram**: $A = bh$\n**Trapezoid**: $A = \\frac{1}{2}(b_1 + b_2)h$\n**Circle**: $A = \\pi r^2$', hint: 'Memorize all five — they appear frequently.' },
        { topicId: t7.id, front: 'Volume formulas for 3D solids?', back: '**Rectangular prism**: $V = lwh$\n**Cylinder**: $V = \\pi r^2 h$\n**Cone**: $V = \\frac{1}{3}\\pi r^2 h$\n**Sphere**: $V = \\frac{4}{3}\\pi r^3$\n**Pyramid**: $V = \\frac{1}{3}Bh$', hint: 'Cones and pyramids are ⅓ of their prism/cylinder counterparts.' },
      ],
    });
    console.log('✅ Area & Volume flashcards');
  }

  console.log('\n✅ All Geometry theorem flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
