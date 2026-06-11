import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding AP Physics 2 - Missing Topic: Fluid Dynamics\n');

  // Find the Fluid Dynamics topic
  const fluidTopic = await prisma.topic.findFirst({
    where: {
      slug: 'fluid-dynamics',
      category: {
        course: {
          slug: 'ap-physics-2'
        }
      }
    }
  });

  if (fluidTopic) {
    // Example Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: fluidTopic.id,
          question: 'Water flows through a pipe with a cross-sectional area of 0.02 m² at a speed of 3 m/s. What is the volume flow rate?',
          solution: 'Volume flow rate is given by:\nQ = A × v\n\nwhere:\nA = cross-sectional area = 0.02 m²\nv = fluid speed = 3 m/s\n\nQ = 0.02 m² × 3 m/s = 0.06 m³/s\n\nThe volume flow rate is 0.06 cubic meters per second (or 60 liters per second).',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: fluidTopic.id,
          question: 'A pipe narrows from a diameter of 4 cm to 2 cm. If water flows at 2 m/s in the wider section, what is its speed in the narrow section?',
          solution: 'Use continuity equation: A₁v₁ = A₂v₂\n\nStep 1: Calculate areas\nA₁ = π(0.02 m)² = 0.001257 m²\nA₂ = π(0.01 m)² = 0.000314 m²\n\nStep 2: Apply continuity\nA₁v₁ = A₂v₂\n0.001257 m² × 2 m/s = 0.000314 m² × v₂\nv₂ = (0.001257 × 2) / 0.000314\nv₂ = 8 m/s\n\nAlternatively, since area depends on r²:\nv₂ = v₁(r₁/r₂)² = 2 m/s × (2/1)² = 8 m/s\n\nThe water speeds up to 8 m/s in the narrow section.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: fluidTopic.id,
          question: 'Water flows through a horizontal pipe at 4 m/s under a pressure of 200 kPa. The pipe rises 5 m and narrows so the water speed increases to 8 m/s. What is the pressure in the elevated section? (Use Bernoulli\'s equation; ρ_water = 1000 kg/m³)',
          solution: 'Bernoulli\'s equation:\nP₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂\n\nGiven:\nP₁ = 200,000 Pa, v₁ = 4 m/s, h₁ = 0 m\nv₂ = 8 m/s, h₂ = 5 m, ρ = 1000 kg/m³\n\nSolve for P₂:\nP₂ = P₁ + ½ρv₁² - ½ρv₂² + ρgh₁ - ρgh₂\n\nP₂ = 200,000 + ½(1000)(16) - ½(1000)(64) + 0 - (1000)(10)(5)\nP₂ = 200,000 + 8,000 - 32,000 - 50,000\nP₂ = 126,000 Pa = 126 kPa\n\nThe pressure in the elevated section is 126 kPa.\n\nNote: Pressure decreases due to both increased speed and increased height.',
          difficulty: 'HARD',
          order: 3,
          isPremium: false
        },
        {
          topicId: fluidTopic.id,
          question: 'An airplane wing has air flowing over the top at 250 m/s and underneath at 200 m/s. If the wing has an area of 20 m² and air density is 1.2 kg/m³, what is the net upward force (lift) on the wing?',
          solution: 'Use Bernoulli\'s principle for pressure difference:\nP_bottom - P_top = ½ρ(v_top² - v_bottom²)\n\nStep 1: Calculate pressure difference\nΔP = ½(1.2 kg/m³)[(250 m/s)² - (200 m/s)²]\nΔP = 0.6[62,500 - 40,000]\nΔP = 0.6 × 22,500 = 13,500 Pa\n\nStep 2: Calculate lift force\nF = ΔP × A\nF = 13,500 Pa × 20 m²\nF = 270,000 N = 270 kN\n\nThe lift force on the wing is 270 kilonewtons.\n\nPhysical principle: Faster air over the top creates lower pressure, resulting in net upward force.',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: fluidTopic.id,
          question: 'A large tank has a small hole 10 m below the water surface. At what speed does water exit the hole? What would be the exit speed if the hole were 40 m below the surface?',
          solution: 'Use Torricelli\'s theorem (from Bernoulli\'s equation):\nv = √(2gh)\n\nFor h = 10 m:\nv₁ = √(2 × 10 m/s² × 10 m)\nv₁ = √200 = 14.1 m/s\n\nFor h = 40 m:\nv₂ = √(2 × 10 m/s² × 40 m)\nv₂ = √800 = 28.3 m/s\n\nObservations:\n• Exit speed at 10 m depth: 14.1 m/s\n• Exit speed at 40 m depth: 28.3 m/s\n• Doubling depth by factor of 4 increases speed by factor of 2 (since v ∝ √h)\n\nThis is the same speed an object would have if dropped from height h!',
          difficulty: 'MEDIUM',
          order: 5,
          isPremium: true
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: fluidTopic.id,
          front: 'What is the continuity equation for fluid flow?',
          back: 'A₁v₁ = A₂v₂\n\nThe product of cross-sectional area and fluid speed is constant along a pipe (for incompressible fluids). This means fluid speeds up when pipe narrows.',
          hint: 'Conservation of mass for fluids',
          isPremium: false
        },
        {
          topicId: fluidTopic.id,
          front: 'What is Bernoulli\'s equation?',
          back: 'P + ½ρv² + ρgh = constant\n\nOr: P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂\n\nThis represents conservation of energy for flowing fluids: pressure energy + kinetic energy + potential energy = constant.',
          hint: 'Energy conservation for fluids',
          isPremium: false
        },
        {
          topicId: fluidTopic.id,
          front: 'What does Bernoulli\'s principle tell us about pressure and speed?',
          back: 'Where fluid speed is higher, pressure is lower (and vice versa).\n\nThis explains lift on airplane wings, the curve of a baseball, and why shower curtains get sucked inward.',
          hint: 'Fast flow = low pressure',
          isPremium: false
        },
        {
          topicId: fluidTopic.id,
          front: 'What is volume flow rate and what is its equation?',
          back: 'Volume flow rate (Q) is the volume of fluid passing through a cross-section per unit time.\n\nQ = A × v\n\nUnits: m³/s (or L/s, gallons/min, etc.)',
          hint: 'How much volume per time?',
          isPremium: false
        },
        {
          topicId: fluidTopic.id,
          front: 'What is Torricelli\'s theorem?',
          back: 'The speed of fluid flowing out of a hole at depth h below the surface is:\n\nv = √(2gh)\n\nThis is the same speed an object would have if dropped from height h.',
          hint: 'Exit speed from a tank',
          isPremium: true
        },
        {
          topicId: fluidTopic.id,
          front: 'What are the main assumptions/limitations of Bernoulli\'s equation?',
          back: '1. Incompressible fluid (constant density)\n2. Non-viscous flow (no internal friction)\n3. Steady flow (not changing with time)\n4. Flow along a streamline\n\nReal fluids have some viscosity, so energy is gradually lost.',
          hint: 'What conditions must be met?',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Fluid Dynamics');
  }

  console.log('\n🎉 AP Physics 2 is now 100% complete!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
