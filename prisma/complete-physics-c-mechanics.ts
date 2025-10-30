import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding AP Physics C: Mechanics - Missing Topic: Parallel Axis Theorem\n');

  // Find the Parallel Axis Theorem topic
  const parallelAxisTopic = await prisma.topic.findFirst({
    where: {
      slug: 'parallel-axis-theorem',
      category: {
        course: {
          slug: 'ap-physics-c-mechanics'
        }
      }
    }
  });

  if (parallelAxisTopic) {
    // Example Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: parallelAxisTopic.id,
          question: 'A thin uniform rod of mass M and length L has a moment of inertia I_cm = (1/12)ML² about its center. What is its moment of inertia about an axis through one end, perpendicular to the rod?',
          solution: 'Use the parallel axis theorem:\nI = I_cm + Md²\n\nwhere:\n• I_cm = moment of inertia about center of mass = (1/12)ML²\n• M = mass of rod\n• d = distance from center to end = L/2\n\nI = (1/12)ML² + M(L/2)²\nI = (1/12)ML² + (1/4)ML²\nI = (1/12)ML² + (3/12)ML²\nI = (4/12)ML² = (1/3)ML²\n\nThe moment of inertia about the end is I = (1/3)ML².\n\nNote: This is larger than I_cm because mass is farther from the axis on average.',
          difficulty: 'MEDIUM',
          order: 1,
          isPremium: false
        },
        {
          topicId: parallelAxisTopic.id,
          question: 'A uniform disk of mass 2 kg and radius 0.5 m rotates about an axis parallel to and 0.3 m from its central axis. Calculate the moment of inertia about this parallel axis.',
          solution: 'For a disk about its center:\nI_cm = (1/2)MR²\nI_cm = (1/2)(2 kg)(0.5 m)² = 0.25 kg·m²\n\nUsing parallel axis theorem:\nI = I_cm + Md²\n\nwhere d = 0.3 m\n\nI = 0.25 + (2)(0.3)²\nI = 0.25 + 0.18\nI = 0.43 kg·m²\n\nThe moment of inertia about the parallel axis is 0.43 kg·m².',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: parallelAxisTopic.id,
          question: 'A uniform sphere of mass M and radius R has I_cm = (2/5)MR² about its center. A physical pendulum is made by suspending the sphere from a point on its surface. What is the moment of inertia about the pivot point?',
          solution: 'The pivot is on the surface, so:\nd = R (distance from center to surface)\n\nParallel axis theorem:\nI = I_cm + Md²\nI = (2/5)MR² + MR²\nI = (2/5)MR² + (5/5)MR²\nI = (7/5)MR²\n\nThe moment of inertia about the pivot is I = (7/5)MR².\n\nThis is why a physical pendulum made from a sphere has different behavior than a simple pendulum - the extended mass distribution matters!',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: parallelAxisTopic.id,
          question: 'Two identical uniform rods, each of mass m and length L, are welded together at right angles to form an "L" shape. Calculate the moment of inertia about an axis through the junction point, perpendicular to the plane of the L.',
          solution: 'Each rod: I_cm = (1/12)mL² about its center\nDistance from each rod\'s center to junction: d = L/2\n\nFor each rod using parallel axis theorem:\nI_rod = I_cm + md²\nI_rod = (1/12)mL² + m(L/2)²\nI_rod = (1/12)mL² + (1/4)mL²\nI_rod = (1/3)mL²\n\nTotal for both rods:\nI_total = 2 × (1/3)mL² = (2/3)mL²\n\nAlternatively, recognizing total mass M = 2m:\nI_total = (1/3)ML²\n\nThe moment of inertia is (2/3)mL² or (1/3)ML².',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: parallelAxisTopic.id,
          question: 'A thin rectangular plate has dimensions a × b and mass M. Its moment of inertia about an axis through its center, parallel to side b, is I_cm = (1/12)Ma². Find the moment of inertia about an axis along one edge parallel to side b.',
          solution: 'The edge is distance d = a/2 from the center.\n\nParallel axis theorem:\nI = I_cm + Md²\nI = (1/12)Ma² + M(a/2)²\nI = (1/12)Ma² + (1/4)Ma²\n\nConvert to common denominator:\nI = (1/12)Ma² + (3/12)Ma²\nI = (4/12)Ma²\nI = (1/3)Ma²\n\nThe moment of inertia about the edge is I = (1/3)Ma².\n\nPattern recognition: For many objects, moving the axis from center to edge increases I by factor of (I_edge/I_cm = 4 for length dimension), following the pattern I = (1/12)ML² → (1/3)ML².',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: parallelAxisTopic.id,
          front: 'What is the parallel axis theorem?',
          back: 'I = I_cm + Md²\n\nThe moment of inertia about any axis equals the moment of inertia about a parallel axis through the center of mass plus M times the square of the distance between the axes.',
          hint: 'Relates I about any axis to I about center of mass',
          isPremium: false
        },
        {
          topicId: parallelAxisTopic.id,
          front: 'Why is the parallel axis theorem useful?',
          back: 'It allows us to calculate moment of inertia about any axis if we know:\n1. I about the center of mass (often tabulated)\n2. The distance d between the two parallel axes\n\nThis saves deriving I from scratch for every axis.',
          hint: 'Connects different rotation axes',
          isPremium: false
        },
        {
          topicId: parallelAxisTopic.id,
          front: 'What does d represent in the parallel axis theorem I = I_cm + Md²?',
          back: 'd is the perpendicular distance between:\n• The axis through the center of mass\n• The parallel axis about which you want to find I\n\nBoth axes must be parallel to each other.',
          hint: 'Distance between the two parallel axes',
          isPremium: false
        },
        {
          topicId: parallelAxisTopic.id,
          front: 'Is I about an axis through the center of mass the minimum or maximum moment of inertia?',
          back: 'MINIMUM. I_cm is the smallest possible moment of inertia for any axis in that direction.\n\nSince I = I_cm + Md² and Md² ≥ 0, any other parallel axis has I ≥ I_cm.',
          hint: 'The Md² term is always positive or zero',
          isPremium: false
        },
        {
          topicId: parallelAxisTopic.id,
          front: 'For a uniform rod of mass M and length L, how do I_center and I_end compare?',
          back: 'I_center = (1/12)ML²\nI_end = (1/3)ML²\n\nI_end = 4 × I_center\n\nThe moment of inertia about the end is 4 times larger because mass is distributed farther from the axis.',
          hint: 'Use parallel axis theorem with d = L/2',
          isPremium: true
        },
        {
          topicId: parallelAxisTopic.id,
          front: 'Can you use the parallel axis theorem to relate two axes that are NOT parallel?',
          back: 'NO. The parallel axis theorem only works for parallel axes.\n\nFor non-parallel axes, you must calculate I separately using the definition I = ∫r²dm.',
          hint: 'The name gives it away - parallel axis theorem!',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Parallel Axis Theorem');
  }

  console.log('\n🎉 AP Physics C: Mechanics is now 100% complete!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
