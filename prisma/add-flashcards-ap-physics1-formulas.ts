import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Physics 1 formula & concept flashcards...\n');

  const topicSlugs = [
    'one-dimensional-motion',
    'motion-graphs',
    'two-dimensional-motion',
    'projectile-motion',
    'newtons-first-second-laws',
    'newtons-third-law',
    'friction',
    'inclined-planes',
    'work-and-kinetic-energy',
    'gravitational-potential-energy',
    'elastic-potential-energy',
    'conservation-of-energy',
    'momentum-and-impulse',
    'conservation-of-momentum',
    'collisions',
    'uniform-circular-motion',
    'centripetal-force',
    'universal-gravitation',
    'introduction-to-shm',
    'energy-in-shm',
    'torque-and-equilibrium',
    'rotational-kinematics',
    'angular-momentum',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) {
      console.log(`⚠ Topic not found: ${slug}`);
      continue;
    }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  // One-Dimensional Motion
  const t1 = await prisma.topic.findFirst({ where: { slug: 'one-dimensional-motion' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What are the four kinematic equations for constant acceleration?', back: '1. $v = v_0 + at$\n2. $x = x_0 + v_0 t + \\frac{1}{2}at^2$\n3. $v^2 = v_0^2 + 2a(x - x_0)$\n4. $x = x_0 + \\frac{1}{2}(v_0 + v)t$', hint: 'These only apply when acceleration is constant.' },
        { topicId: t1.id, front: 'What is the difference between distance and displacement?', back: 'Distance is a scalar — total path length traveled (always positive). Displacement is a vector — the change in position from start to finish ($\\Delta x = x_f - x_i$), which can be positive, negative, or zero.', hint: 'Displacement has direction; distance does not.' },
        { topicId: t1.id, front: 'What is the acceleration due to gravity near Earth\'s surface?', back: '$g \\approx 9.8$ m/s² (or $\\approx 10$ m/s² for estimation). Objects in free fall accelerate downward at this rate, regardless of mass (ignoring air resistance).', hint: 'About 10 m/s² — same for all masses.' },
      ],
    });
    console.log('✅ One-Dimensional Motion flashcards');
  }

  // Motion Graphs
  const t2 = await prisma.topic.findFirst({ where: { slug: 'motion-graphs' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What does the slope of a position-time graph represent?', back: 'Velocity. The slope at any point gives the instantaneous velocity. A straight line means constant velocity; a curve means changing velocity (acceleration).', hint: 'Slope of x-t = v.' },
        { topicId: t2.id, front: 'What does the area under a velocity-time graph represent?', back: 'Displacement. The total area between the curve and the time axis gives the change in position. Area above the axis is positive displacement; below is negative.', hint: 'Area under v-t = Δx.' },
        { topicId: t2.id, front: 'What does the slope of a velocity-time graph represent?', back: 'Acceleration. A positive slope means speeding up (if velocity is positive) or slowing down (if velocity is negative). A horizontal v-t line means zero acceleration.', hint: 'Slope of v-t = a.' },
      ],
    });
    console.log('✅ Motion Graphs flashcards');
  }

  // Projectile Motion
  const t4 = await prisma.topic.findFirst({ where: { slug: 'projectile-motion' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What are the key principles of projectile motion?', back: 'Horizontal: constant velocity ($a_x = 0$), so $x = v_{0x} t$. Vertical: constant acceleration ($a_y = -g$), using kinematic equations. The two components are independent.', hint: 'Horizontal and vertical motions are independent.' },
        { topicId: t4.id, front: 'How do you find the range of a projectile launched from ground level?', back: '$R = \\frac{v_0^2 \\sin(2\\theta)}{g}$. Maximum range occurs at $\\theta = 45°$. Complementary angles (e.g., 30° and 60°) give the same range.', hint: 'sin(2θ) is maximized at θ = 45°.' },
        { topicId: t4.id, front: 'At the highest point of a projectile\'s path, what is the velocity?', back: 'The vertical component $v_y = 0$, but the horizontal component $v_x = v_0 \\cos\\theta$ is unchanged. Speed is at its minimum (equal to $v_x$). Acceleration is still $g$ downward.', hint: 'vy = 0, but vx is still there.' },
      ],
    });
    console.log('✅ Projectile Motion flashcards');
  }

  // Newton's First & Second Laws
  const t5 = await prisma.topic.findFirst({ where: { slug: 'newtons-first-second-laws' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: "State Newton's First Law (Law of Inertia).", back: 'An object at rest stays at rest, and an object in motion continues at constant velocity, unless acted upon by a net external force. $\\sum \\vec{F} = 0 \\Rightarrow$ constant velocity.', hint: 'No net force = no change in motion.' },
        { topicId: t5.id, front: "State Newton's Second Law.", back: '$\\vec{F}_{\\text{net}} = m\\vec{a}$, or equivalently $\\vec{a} = \\frac{\\vec{F}_{\\text{net}}}{m}$. The acceleration is in the direction of the net force and inversely proportional to mass.', hint: 'F = ma — foundation of mechanics.' },
        { topicId: t5.id, front: 'What is a free-body diagram and why is it important?', back: 'A diagram showing all forces acting ON a single object as vectors from the object\'s center. Essential for applying Newton\'s Second Law by setting up $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$.', hint: 'Draw all forces on ONE object only.' },
      ],
    });
    console.log("✅ Newton's First & Second Laws flashcards");
  }

  // Friction
  const t7 = await prisma.topic.findFirst({ where: { slug: 'friction' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'What is the formula for friction force?', back: 'Static friction: $f_s \\le \\mu_s F_N$ (maximum is $\\mu_s F_N$). Kinetic friction: $f_k = \\mu_k F_N$. Where $F_N$ is the normal force and $\\mu$ is the coefficient of friction.', hint: 'Static friction is an inequality; kinetic is an equality.' },
        { topicId: t7.id, front: 'Is $\\mu_s$ typically greater or less than $\\mu_k$?', back: '$\\mu_s > \\mu_k$. It takes more force to start an object sliding than to keep it sliding. That\'s why objects seem to "break free" suddenly.', hint: 'Harder to start moving than to keep moving.' },
      ],
    });
    console.log('✅ Friction flashcards');
  }

  // Work and Kinetic Energy
  const t9 = await prisma.topic.findFirst({ where: { slug: 'work-and-kinetic-energy' } });
  if (t9) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t9.id, front: 'What is the formula for work?', back: '$W = Fd\\cos\\theta$, where $F$ is force magnitude, $d$ is displacement, and $\\theta$ is the angle between the force and displacement vectors. Units: Joules (J).', hint: 'Only the component of force along the displacement does work.' },
        { topicId: t9.id, front: 'State the Work-Energy Theorem.', back: '$W_{\\text{net}} = \\Delta KE = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$. The net work done on an object equals its change in kinetic energy.', hint: 'Net work = change in kinetic energy.' },
        { topicId: t9.id, front: 'What is kinetic energy?', back: '$KE = \\frac{1}{2}mv^2$. Energy of motion. It is always non-negative and depends on speed squared, so doubling speed quadruples KE.', hint: 'Half mass times velocity squared.' },
      ],
    });
    console.log('✅ Work and Kinetic Energy flashcards');
  }

  // Conservation of Energy
  const t12 = await prisma.topic.findFirst({ where: { slug: 'conservation-of-energy' } });
  if (t12) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t12.id, front: 'State the law of conservation of energy.', back: 'In an isolated system (no external work), the total mechanical energy is constant: $KE_i + PE_i = KE_f + PE_f$. If non-conservative forces (like friction) act, $KE_i + PE_i + W_{nc} = KE_f + PE_f$.', hint: 'Energy is not created or destroyed, only transformed.' },
        { topicId: t12.id, front: 'What is gravitational potential energy?', back: '$PE_g = mgh$, where $h$ is the height above a chosen reference level. The reference level is arbitrary — only changes in PE matter.', hint: 'mgh — choose a convenient reference point.' },
        { topicId: t12.id, front: 'What is elastic potential energy?', back: "$PE_e = \\frac{1}{2}kx^2$, where $k$ is the spring constant and $x$ is the displacement from equilibrium. Follows from Hooke's Law: $F = -kx$.", hint: 'Half k x squared — from spring/Hooke\'s Law.' },
      ],
    });
    console.log('✅ Conservation of Energy flashcards');
  }

  // Momentum and Impulse
  const t13 = await prisma.topic.findFirst({ where: { slug: 'momentum-and-impulse' } });
  if (t13) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t13.id, front: 'What is momentum?', back: '$\\vec{p} = m\\vec{v}$. Momentum is a vector quantity with units kg·m/s. Direction is the same as velocity. More mass or more speed means more momentum.', hint: 'Mass times velocity — a vector.' },
        { topicId: t13.id, front: 'What is the impulse-momentum theorem?', back: '$\\vec{J} = \\vec{F}_{\\text{avg}} \\cdot \\Delta t = \\Delta \\vec{p} = m\\vec{v}_f - m\\vec{v}_i$. Impulse equals the change in momentum. Area under an F-t graph = impulse.', hint: 'Force × time = change in momentum.' },
      ],
    });
    console.log('✅ Momentum and Impulse flashcards');
  }

  // Conservation of Momentum
  const t14 = await prisma.topic.findFirst({ where: { slug: 'conservation-of-momentum' } });
  if (t14) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t14.id, front: 'When is momentum conserved?', back: 'Total momentum of a system is conserved when the net external force on the system is zero: $\\vec{p}_{\\text{total,i}} = \\vec{p}_{\\text{total,f}}$. Internal forces (like collision forces) do not change total momentum.', hint: 'No net external force → momentum conserved.' },
      ],
    });
    console.log('✅ Conservation of Momentum flashcards');
  }

  // Collisions
  const t15 = await prisma.topic.findFirst({ where: { slug: 'collisions' } });
  if (t15) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t15.id, front: 'What is the difference between elastic and inelastic collisions?', back: 'Elastic: both momentum AND kinetic energy conserved (objects bounce). Perfectly inelastic: objects stick together, maximum KE lost (momentum still conserved). Most real collisions are inelastic.', hint: 'Elastic = bounce & conserve KE; Inelastic = stick & lose KE.' },
        { topicId: t15.id, front: 'What is the formula for a perfectly inelastic collision?', back: '$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v_f$. The objects stick together and move with a common final velocity $v_f$.', hint: 'Stick together → combined mass × common velocity.' },
      ],
    });
    console.log('✅ Collisions flashcards');
  }

  // Uniform Circular Motion
  const t16 = await prisma.topic.findFirst({ where: { slug: 'uniform-circular-motion' } });
  if (t16) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t16.id, front: 'What is centripetal acceleration?', back: '$a_c = \\frac{v^2}{r}$, directed toward the center of the circular path. Speed is constant but velocity changes direction, requiring this inward acceleration.', hint: 'v²/r, always pointing toward the center.' },
        { topicId: t16.id, front: 'What is the centripetal force?', back: '$F_c = \\frac{mv^2}{r}$. This is NOT a new force — it is the net inward force provided by gravity, tension, friction, normal force, etc. Always identify the real force providing it.', hint: 'Net inward force = mv²/r. It\'s provided by real forces.' },
      ],
    });
    console.log('✅ Uniform Circular Motion flashcards');
  }

  // Universal Gravitation
  const t18 = await prisma.topic.findFirst({ where: { slug: 'universal-gravitation' } });
  if (t18) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t18.id, front: "State Newton's Law of Universal Gravitation.", back: '$F_g = \\frac{Gm_1 m_2}{r^2}$, where $G = 6.67 \\times 10^{-11}$ N·m²/kg². The force is attractive, along the line joining the centers, and obeys Newton\'s Third Law.', hint: 'Inverse-square law: double the distance → 1/4 the force.' },
        { topicId: t18.id, front: 'What is the gravitational field strength?', back: '$g = \\frac{GM}{r^2}$, where $M$ is the mass of the object creating the field and $r$ is the distance from its center. At Earth\'s surface, $g \\approx 9.8$ m/s².', hint: 'Force per unit mass at distance r from mass M.' },
      ],
    });
    console.log('✅ Universal Gravitation flashcards');
  }

  // Simple Harmonic Motion
  const t19 = await prisma.topic.findFirst({ where: { slug: 'introduction-to-shm' } });
  if (t19) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t19.id, front: 'What is simple harmonic motion (SHM)?', back: 'Oscillatory motion where the restoring force is proportional to displacement: $F = -kx$. Results in sinusoidal motion: $x(t) = A\\cos(\\omega t + \\phi)$.', hint: 'Restoring force proportional to displacement.' },
        { topicId: t19.id, front: 'What is the period of a mass-spring system?', back: '$T = 2\\pi\\sqrt{\\frac{m}{k}}$. Period depends on mass and spring constant — NOT on amplitude.', hint: 'Period is independent of amplitude.' },
        { topicId: t19.id, front: 'What is the period of a simple pendulum?', back: '$T = 2\\pi\\sqrt{\\frac{L}{g}}$. Period depends on length and gravity — NOT on mass or amplitude (for small angles).', hint: 'Longer pendulum = longer period. Mass doesn\'t matter.' },
      ],
    });
    console.log('✅ Simple Harmonic Motion flashcards');
  }

  // Torque and Equilibrium
  const t21 = await prisma.topic.findFirst({ where: { slug: 'torque-and-equilibrium' } });
  if (t21) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t21.id, front: 'What is torque?', back: '$\\tau = rF\\sin\\theta$, where $r$ is the distance from the pivot, $F$ is the force, and $\\theta$ is the angle between $\\vec{r}$ and $\\vec{F}$. Units: N·m. Torque causes angular acceleration.', hint: 'Lever arm × force. Perpendicular components only.' },
        { topicId: t21.id, front: 'What are the conditions for static equilibrium?', back: '1. $\\sum \\vec{F} = 0$ (translational equilibrium — no net force). 2. $\\sum \\tau = 0$ about any point (rotational equilibrium — no net torque).', hint: 'No net force AND no net torque.' },
      ],
    });
    console.log('✅ Torque and Equilibrium flashcards');
  }

  // Rotational Kinematics
  const t22 = await prisma.topic.findFirst({ where: { slug: 'rotational-kinematics' } });
  if (t22) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t22.id, front: 'How do rotational kinematic equations compare to linear ones?', back: 'Replace: $x \\to \\theta$, $v \\to \\omega$, $a \\to \\alpha$. Example: $\\omega = \\omega_0 + \\alpha t$, $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$, $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$.', hint: 'Same structure as linear kinematics with angular variables.' },
        { topicId: t22.id, front: "What is Newton's Second Law for rotation?", back: '$\\tau_{\\text{net}} = I\\alpha$, where $I$ is the moment of inertia and $\\alpha$ is angular acceleration. Analogous to $F = ma$.', hint: 'Torque = moment of inertia × angular acceleration.' },
        { topicId: t22.id, front: 'What is rotational kinetic energy?', back: '$KE_{\\text{rot}} = \\frac{1}{2}I\\omega^2$. For rolling without slipping, total $KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ with $v = r\\omega$.', hint: 'Half I ω² — analogous to ½mv².' },
      ],
    });
    console.log('✅ Rotational Kinematics flashcards');
  }

  // Angular Momentum
  const t23 = await prisma.topic.findFirst({ where: { slug: 'angular-momentum' } });
  if (t23) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t23.id, front: 'What is angular momentum?', back: '$L = I\\omega$ for a rigid body. For a point particle: $L = mvr\\sin\\theta$. Units: kg·m²/s.', hint: 'Rotational analog of linear momentum p = mv.' },
        { topicId: t23.id, front: 'When is angular momentum conserved?', back: 'When the net external torque on a system is zero: $L_i = L_f$, so $I_i \\omega_i = I_f \\omega_f$. Classic example: ice skater pulling arms in — $I$ decreases, $\\omega$ increases.', hint: 'No net external torque → angular momentum conserved.' },
      ],
    });
    console.log('✅ Angular Momentum flashcards');
  }

  console.log('\n🎉 All AP Physics 1 flashcards added successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
