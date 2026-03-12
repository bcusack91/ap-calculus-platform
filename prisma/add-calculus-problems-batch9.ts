import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding flashcards to AP Calculus - Batch 9: Final Integration + BC Topics Start (6 topics)...');

  // Find the topics - first 2 already have 7 problems, last 4 need problems and flashcards
  const areaBetweenCurves = await prisma.topic.findFirst({
    where: { slug: 'area-between-curves' }
  });

  const volumesDisk = await prisma.topic.findFirst({
    where: { slug: 'volumes-disk-method' }
  });

  const trigSubstitution = await prisma.topic.findFirst({
    where: { slug: 'trig-substitution' }
  });

  const partialFractions = await prisma.topic.findFirst({
    where: { slug: 'partial-fractions' }
  });

  const parametricIntro = await prisma.topic.findFirst({
    where: { slug: 'parametric-equations-intro' }
  });

  const parametricCalculus = await prisma.topic.findFirst({
    where: { slug: 'parametric-calculus' }
  });

  if (!areaBetweenCurves || !volumesDisk || !trigSubstitution || !partialFractions || !parametricIntro || !parametricCalculus) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Area Between Curves (has 7, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: areaBetweenCurves.id,
        front: 'What is the formula for area between two curves?',
        back: 'A = ∫ₐᵇ [f(x) - g(x)] dx, where f(x) ≥ g(x) on [a,b]. Top function minus bottom function.',
        hint: '∫[top - bottom] dx',
        isPremium: false
      },
      {
        topicId: areaBetweenCurves.id,
        front: 'How do you find the limits of integration for area between curves?',
        back: 'Find intersection points by solving f(x) = g(x). These are the limits where the curves meet.',
        hint: 'Solve f(x) = g(x) for intersections',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: area-between-curves (now has 7 problems, 6 flashcards)');

  // TOPIC 2: Volumes: Disk Method (has 5, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: volumesDisk.id,
        front: 'What is the disk method formula?',
        back: 'V = π∫ₐᵇ [R(x)]² dx, where R(x) is the radius. Used when rotating a region around an axis with no gap.',
        hint: 'π∫R² dx',
        isPremium: false
      },
      {
        topicId: volumesDisk.id,
        front: 'When rotating about a horizontal line y = k, what is the radius?',
        back: 'R(x) = |f(x) - k|, the vertical distance from the curve to the line y = k.',
        hint: 'Distance from curve to axis',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: volumes-disk-method (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Trigonometric Substitution (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: trigSubstitution.id,
        question: 'Evaluate ∫√(9 - x²) dx using trigonometric substitution.',
        solution: `Step 1: Identify the form:
√(9 - x²) = √(a² - x²) where a = 3
Use substitution x = a·sin(θ) = 3sin(θ)

Step 2: Find dx:
dx = 3cos(θ) dθ

Step 3: Substitute into √(9 - x²):
√(9 - x²) = √(9 - 9sin²(θ))
          = √(9(1 - sin²(θ)))
          = √(9cos²(θ))
          = 3|cos(θ)|
          = 3cos(θ) (assuming -π/2 ≤ θ ≤ π/2)

Step 4: Substitute into integral:
∫√(9 - x²) dx = ∫3cos(θ)·3cos(θ) dθ
               = ∫9cos²(θ) dθ

Step 5: Use identity cos²(θ) = (1 + cos(2θ))/2:
= ∫9·(1 + cos(2θ))/2 dθ
= (9/2)∫(1 + cos(2θ)) dθ
= (9/2)[θ + sin(2θ)/2] + C

Step 6: Convert back to x:
sin(θ) = x/3, so θ = arcsin(x/3)
sin(2θ) = 2sin(θ)cos(θ) = 2(x/3)·√(9-x²)/3 = 2x√(9-x²)/9

= (9/2)[arcsin(x/3) + x√(9-x²)/9] + C
= (9/2)arcsin(x/3) + (x√(9-x²))/2 + C

Answer: (9/2)arcsin(x/3) + (x√(9-x²))/2 + C`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: trigSubstitution.id,
        question: 'Evaluate ∫dx/(x²√(x² + 4)) using trig substitution.',
        solution: `Step 1: Identify the form:
√(x² + 4) = √(x² + a²) where a = 2
Use substitution x = a·tan(θ) = 2tan(θ)

Step 2: Find dx:
dx = 2sec²(θ) dθ

Step 3: Substitute √(x² + 4):
√(x² + 4) = √(4tan²(θ) + 4)
          = √(4(tan²(θ) + 1))
          = √(4sec²(θ))
          = 2sec(θ)

Step 4: Substitute into integral:
∫dx/(x²√(x² + 4)) = ∫(2sec²(θ) dθ)/((4tan²(θ))·(2sec(θ)))
                   = ∫(2sec²(θ))/(8tan²(θ)sec(θ)) dθ
                   = ∫sec(θ)/(4tan²(θ)) dθ
                   = (1/4)∫(1/cos(θ))·(cos²(θ)/sin²(θ)) dθ
                   = (1/4)∫cos(θ)/sin²(θ) dθ

Step 5: Let u = sin(θ), du = cos(θ) dθ:
= (1/4)∫du/u²
= (1/4)·(-1/u) + C
= -1/(4sin(θ)) + C

Step 6: Convert back to x:
tan(θ) = x/2, so sin(θ) = x/√(x² + 4)

= -1/(4·x/√(x² + 4)) + C
= -√(x² + 4)/(4x) + C

Answer: -√(x² + 4)/(4x) + C`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: trigSubstitution.id,
        front: 'What are the three main trig substitutions?',
        back: '√(a² - x²): use x = a·sin(θ). √(a² + x²): use x = a·tan(θ). √(x² - a²): use x = a·sec(θ).',
        hint: 'sin for minus, tan for plus, sec for x² first',
        isPremium: false
      },
      {
        topicId: trigSubstitution.id,
        front: 'Why does trig substitution work?',
        back: 'Uses Pythagorean identities: sin²+cos²=1, tan²+1=sec², sec²-1=tan² to simplify radicals into trig functions.',
        hint: 'Pythagorean identities simplify radicals',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: trig-substitution (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Integration by Partial Fractions (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: partialFractions.id,
        question: 'Evaluate ∫(3x + 1)/((x - 1)(x + 2)) dx using partial fractions.',
        solution: `Step 1: Set up partial fraction decomposition:
(3x + 1)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2)

Step 2: Clear denominators:
3x + 1 = A(x + 2) + B(x - 1)

Step 3: Method 1 - Solve by substitution:
Let x = 1: 3(1) + 1 = A(3) + 0
          4 = 3A → A = 4/3

Let x = -2: 3(-2) + 1 = 0 + B(-3)
           -5 = -3B → B = 5/3

Step 4: Rewrite integral:
∫(3x + 1)/((x - 1)(x + 2)) dx = ∫[4/(3(x - 1)) + 5/(3(x + 2))] dx

Step 5: Integrate:
= (4/3)ln|x - 1| + (5/3)ln|x + 2| + C
= (1/3)[4ln|x - 1| + 5ln|x + 2|] + C

Step 6: Alternative form using log properties:
= (1/3)ln|(x - 1)⁴(x + 2)⁵| + C

Answer: (4/3)ln|x - 1| + (5/3)ln|x + 2| + C`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: partialFractions.id,
        front: 'When do you use partial fraction decomposition?',
        back: 'When integrating rational functions P(x)/Q(x) where degree of P < degree of Q. Decompose into simpler fractions.',
        hint: 'Rational functions, deg(P) < deg(Q)',
        isPremium: false
      },
      {
        topicId: partialFractions.id,
        front: 'How do you decompose 1/((x-a)(x-b))?',
        back: 'A/(x-a) + B/(x-b). Set up equation, multiply both sides by denominator, solve for A and B.',
        hint: 'Separate into two fractions',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: partial-fractions (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Introduction to Parametric Equations (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: parametricIntro.id,
        question: 'Eliminate the parameter to find a Cartesian equation for x = 2t + 1, y = t² - 3.',
        solution: `Step 1: Solve for t from the simpler equation:
x = 2t + 1
x - 1 = 2t
t = (x - 1)/2

Step 2: Substitute into y equation:
y = t² - 3
y = [(x - 1)/2]² - 3

Step 3: Simplify:
y = (x - 1)²/4 - 3
y = (x - 1)²/4 - 12/4
y = [(x - 1)² - 12]/4

Step 4: Alternative form:
4y = (x - 1)² - 12
(x - 1)² = 4y + 12

Step 5: Identify the curve:
This is a parabola opening upward
Vertex form: (x - 1)² = 4(y + 3)
Vertex: (1, -3)

Answer: y = (x - 1)²/4 - 3 or (x - 1)² = 4y + 12`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: parametricIntro.id,
        front: 'What are parametric equations?',
        back: 'Equations where x and y are both expressed in terms of a third variable (parameter), usually t: x = f(t), y = g(t).',
        hint: 'Both x and y depend on parameter t',
        isPremium: false
      },
      {
        topicId: parametricIntro.id,
        front: 'How do you eliminate the parameter?',
        back: 'Solve one equation for t, then substitute into the other equation to get a relationship between x and y.',
        hint: 'Solve for t, substitute',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: parametric-equations-intro (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Calculus with Parametric Equations (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: parametricCalculus.id,
        question: 'Find dy/dx and d²y/dx² for the parametric curve x = t³, y = t².',
        solution: `Step 1: Find dx/dt and dy/dt:
dx/dt = 3t²
dy/dt = 2t

Step 2: Find dy/dx using chain rule:
dy/dx = (dy/dt)/(dx/dt) = 2t/(3t²) = 2/(3t)

Step 3: Find d²y/dx²:
d²y/dx² = d/dx[dy/dx] = (d/dt[dy/dx])/(dx/dt)

Step 4: Find d/dt[2/(3t)]:
d/dt[2/(3t)] = (2/3)·d/dt[t⁻¹]
             = (2/3)·(-t⁻²)
             = -2/(3t²)

Step 5: Divide by dx/dt:
d²y/dx² = (-2/(3t²))/(3t²)
        = -2/(3t²·3t²)
        = -2/(9t⁴)

Answer: dy/dx = 2/(3t), d²y/dx² = -2/(9t⁴)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: parametricCalculus.id,
        front: 'What is the formula for dy/dx in parametric form?',
        back: 'dy/dx = (dy/dt)/(dx/dt), provided dx/dt ≠ 0.',
        hint: '(dy/dt) ÷ (dx/dt)',
        isPremium: false
      },
      {
        topicId: parametricCalculus.id,
        front: 'What is the formula for d²y/dx² in parametric form?',
        back: 'd²y/dx² = (d/dt[dy/dx])/(dx/dt). Take derivative of dy/dx with respect to t, then divide by dx/dt.',
        hint: '(d/dt of dy/dx) ÷ (dx/dt)',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: parametric-calculus (now has 5 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 9! Integration complete (10/10), started BC topics!');
  
  await prisma.$disconnect();
}

main();
