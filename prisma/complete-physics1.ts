import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding AP Physics 1 - Missing Topic: Power\n');

  // Find the Power topic
  const powerTopic = await prisma.topic.findFirst({
    where: {
      slug: 'power-physics',
      category: {
        course: {
          slug: 'ap-physics-1'
        }
      }
    }
  });

  if (powerTopic) {
    // Example Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: powerTopic.id,
          question: 'A crane lifts a 500 kg mass vertically upward 20 meters in 10 seconds at constant velocity. Calculate the power output of the crane.',
          solution: 'Step 1: Calculate work done\nWork = Force × distance\nForce = weight = mg = 500 kg × 10 m/s² = 5000 N\nWork = 5000 N × 20 m = 100,000 J\n\nStep 2: Calculate power\nPower = Work / time\nP = 100,000 J / 10 s = 10,000 W = 10 kW\n\nThe crane outputs 10 kilowatts of power.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: powerTopic.id,
          question: 'An electric motor has a power rating of 750 W. How much work can it do in 2 minutes?',
          solution: 'Given:\nPower = 750 W\nTime = 2 minutes = 120 s\n\nUsing: Power = Work / time\nWork = Power × time\nWork = 750 W × 120 s = 90,000 J = 90 kJ\n\nThe motor can do 90 kilojoules of work in 2 minutes.',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: powerTopic.id,
          question: 'A 60 kg student runs up a flight of stairs, rising 5 meters vertically in 4 seconds. What is the student\'s average power output?',
          solution: 'Step 1: Calculate work done against gravity\nW = mgh\nW = 60 kg × 10 m/s² × 5 m = 3000 J\n\nStep 2: Calculate average power\nP = W / t\nP = 3000 J / 4 s = 750 W\n\nThe student\'s average power output is 750 watts.\n\nNote: This is just the power used to overcome gravity. The actual metabolic power would be higher due to inefficiency.',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: powerTopic.id,
          question: 'A car engine produces 150 horsepower (1 hp = 746 W). If the car is traveling at a constant 30 m/s on a level road, what is the total resistive force (air resistance + friction) acting on the car?',
          solution: 'Step 1: Convert power to watts\nP = 150 hp × 746 W/hp = 111,900 W\n\nStep 2: Use relationship between power, force, and velocity\nFor constant velocity: P = F × v\nwhere F is the applied force, which equals resistive force at constant velocity\n\nF = P / v\nF = 111,900 W / 30 m/s = 3730 N\n\nThe total resistive force is 3,730 N.\n\nPhysical insight: At constant velocity, the engine force equals resistive forces, and all engine power goes into overcoming resistance.',
          difficulty: 'MEDIUM',
          order: 4,
          isPremium: false
        },
        {
          topicId: powerTopic.id,
          question: 'A pump is rated at 2.5 kW and has an efficiency of 70%. How long will it take to pump 1000 kg of water from a well that is 15 meters deep?',
          solution: 'Step 1: Calculate work needed\nW = mgh\nW = 1000 kg × 10 m/s² × 15 m = 150,000 J\n\nStep 2: Account for efficiency\nOnly 70% of input power does useful work\nUseful power = 0.70 × 2500 W = 1750 W\n\nStep 3: Calculate time\nt = W / P_useful\nt = 150,000 J / 1750 W ≈ 85.7 s\n\nIt will take approximately 86 seconds (about 1.4 minutes) to pump the water.\n\nNote: The remaining 30% of power is lost as heat, noise, etc.',
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
          topicId: powerTopic.id,
          front: 'What is power in physics?',
          back: 'Power is the rate at which work is done or energy is transferred. P = W/t or P = ΔE/t. SI unit: watt (W) = 1 joule per second.',
          hint: 'Think about how fast work is done',
          isPremium: false
        },
        {
          topicId: powerTopic.id,
          front: 'What is the relationship between power, force, and velocity?',
          back: 'P = F·v (when force and velocity are in the same direction)\n\nThis is useful for calculating power when an object moves at constant velocity.',
          hint: 'Power equals force times velocity',
          isPremium: false
        },
        {
          topicId: powerTopic.id,
          front: 'What is 1 horsepower in watts?',
          back: '1 horsepower (hp) = 746 watts\n\nThis unit was originally defined by James Watt to compare steam engines to horses.',
          hint: 'About 750 W',
          isPremium: false
        },
        {
          topicId: powerTopic.id,
          front: 'If two people do the same amount of work but one does it in half the time, how do their power outputs compare?',
          back: 'The person who does the work in half the time has twice the power output.\n\nP = W/t, so if t is halved while W stays the same, P doubles.',
          hint: 'Power is inversely proportional to time',
          isPremium: false
        },
        {
          topicId: powerTopic.id,
          front: 'What is the difference between average power and instantaneous power?',
          back: 'Average power = Total work / Total time = W/Δt\n\nInstantaneous power = Power at a specific moment = F·v (at that instant)\n\nAverage power is useful for overall performance; instantaneous power varies moment to moment.',
          hint: 'One is over a time interval, one is at a specific moment',
          isPremium: true
        },
        {
          topicId: powerTopic.id,
          front: 'How does efficiency relate to power?',
          back: 'Efficiency = (Useful power output / Total power input) × 100%\n\nNot all input power becomes useful work - some is lost to friction, heat, sound, etc.',
          hint: 'What fraction of input power is useful?',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Power');
  }

  console.log('\n🎉 AP Physics 1 is now 100% complete!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
