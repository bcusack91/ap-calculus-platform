import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT physics equations flashcards...\n');

  const topicSlugs = [
    'mcat-physics-mechanics-kinematics-mcat',
    'mcat-physics-mechanics-forces-newton-laws-mcat',
    'mcat-physics-mechanics-work-energy-power-mcat',
    'mcat-physics-electricity-electrostatics-mcat',
    'mcat-physics-electricity-circuits-mcat',
    'mcat-physics-electricity-optics-mcat',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'mcat-physics-mechanics-kinematics-mcat' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Kinematic equation: displacement with constant acceleration?', back: '$x = v_0 t + \\frac{1}{2}at^2$\n\n$v = v_0 + at$\n$v^2 = v_0^2 + 2ax$', hint: 'Three key equations — pick the one missing the variable you don\'t know.' },
        { topicId: t1.id, front: 'Projectile motion: what determines hang time?', back: 'Only the **vertical component** of velocity determines hang time.\n\n$t_{\\text{total}} = \\frac{2v_0 \\sin\\theta}{g}$\n\nHorizontal motion is independent and uniform.', hint: 'Horizontal and vertical motions are independent.' },
      ],
    });
    console.log('✅ Kinematics flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'mcat-physics-mechanics-forces-newton-laws-mcat' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: "Newton's Second Law?", back: '$F_{\\text{net}} = ma$\n\nNet force equals mass times acceleration. Units: Newtons (kg·m/s²).', hint: 'The most important equation in mechanics.' },
        { topicId: t2.id, front: 'Friction force formula?', back: '$f = \\mu N$\n\n$\\mu_s$ (static) > $\\mu_k$ (kinetic)\nN = normal force (perpendicular to surface)', hint: 'Static friction prevents motion; kinetic friction opposes motion.' },
        { topicId: t2.id, front: 'Weight vs. mass?', back: '$W = mg$\n\nWeight is a **force** (Newtons). Mass is **matter** (kg). $g = 9.8$ m/s² on Earth.', hint: 'Weight changes with gravity; mass does not.' },
      ],
    });
    console.log('✅ Forces & Newton\'s Laws flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'mcat-physics-mechanics-work-energy-power-mcat' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'Work formula?', back: '$W = Fd\\cos\\theta$\n\nWork = force × displacement × cos(angle between force and displacement).\nUnits: Joules (J).', hint: 'Only the component of force along displacement does work.' },
        { topicId: t3.id, front: 'Kinetic energy formula?', back: '$KE = \\frac{1}{2}mv^2$', hint: 'Energy of motion — depends on velocity squared.' },
        { topicId: t3.id, front: 'Gravitational potential energy?', back: '$PE = mgh$\n\nh = height above reference point.', hint: 'Energy stored due to position in a gravitational field.' },
        { topicId: t3.id, front: 'Power formula?', back: '$P = \\frac{W}{t} = Fv$\n\nUnits: Watts (J/s).', hint: 'Rate of doing work.' },
      ],
    });
    console.log('✅ Work, Energy & Power flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'mcat-physics-electricity-electrostatics-mcat' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: "Coulomb's Law?", back: '$F = k\\frac{q_1 q_2}{r^2}$\n\n$k = 8.99 \\times 10^9$ N·m²/C²\n\nLike charges repel; opposite charges attract.', hint: 'Inverse square law for electric force.' },
        { topicId: t4.id, front: 'Electric field formula?', back: '$E = \\frac{F}{q} = k\\frac{Q}{r^2}$\n\nUnits: N/C or V/m.\nField points **away from positive** charges.', hint: 'Force per unit test charge.' },
        { topicId: t4.id, front: 'Electric potential energy?', back: '$U = k\\frac{q_1 q_2}{r}$\n\nPositive for like charges (repulsion stores energy).\nNegative for opposite charges (attraction).', hint: 'No square in the denominator — unlike force.' },
      ],
    });
    console.log('✅ Electrostatics flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'mcat-physics-electricity-circuits-mcat' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: "Ohm's Law?", back: '$V = IR$\n\nVoltage = Current × Resistance.\nUnits: V (volts), A (amps), Ω (ohms).', hint: 'The foundation of circuit analysis.' },
        { topicId: t5.id, front: 'Resistors in series vs. parallel?', back: '**Series**: $R_{\\text{total}} = R_1 + R_2 + \\cdots$ (current is same)\n\n**Parallel**: $\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$ (voltage is same)', hint: 'Series adds; parallel gives less than smallest.' },
        { topicId: t5.id, front: 'Power in circuits?', back: '$P = IV = I^2R = \\frac{V^2}{R}$\n\nAll three forms are useful depending on what\'s known.', hint: 'Three equivalent formulas.' },
      ],
    });
    console.log('✅ Circuits flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'mcat-physics-electricity-optics-mcat' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: "Snell's Law?", back: '$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$\n\nLight bends toward normal when entering a denser medium ($n_2 > n_1$).', hint: 'Index of refraction × sin(angle).' },
        { topicId: t6.id, front: 'Thin lens equation?', back: '$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$\n\n$m = -\\frac{d_i}{d_o}$\n\nConverging lens: $f > 0$. Diverging lens: $f < 0$.', hint: 'Also works for mirrors with sign conventions.' },
      ],
    });
    console.log('✅ Optics flashcards');
  }

  console.log('\n✅ All MCAT physics equations flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
