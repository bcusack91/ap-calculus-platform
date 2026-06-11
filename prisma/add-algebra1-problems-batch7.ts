import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 7 (3 topics)...');

  // Find the topics
  const polynomialOperations = await prisma.topic.findFirst({
    where: { slug: 'polynomial-operations-algebra1' }
  });

  const quadraticFormula = await prisma.topic.findFirst({
    where: { slug: 'quadratic-formula-detailed-algebra1' }
  });

  const systemsWordProblems = await prisma.topic.findFirst({
    where: { slug: 'systems-word-problems-algebra1' }
  });

  if (!polynomialOperations || !quadraticFormula || !systemsWordProblems) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Adding and Subtracting Polynomials
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialOperations.id,
        question: 'Add: (3x + 5) + (2x + 7)',
        solution: `Step 1: Remove parentheses (addition doesn't change signs):
3x + 5 + 2x + 7

Step 2: Group like terms:
(3x + 2x) + (5 + 7)

Step 3: Combine like terms:
5x + 12

Answer: 5x + 12`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        question: 'Subtract: (5x² + 3x - 2) - (2x² - x + 4)',
        solution: `Step 1: Distribute the negative sign (change all signs in the second polynomial):
5x² + 3x - 2 - 2x² + x - 4

Step 2: Group like terms:
(5x² - 2x²) + (3x + x) + (-2 - 4)

Step 3: Combine like terms:
3x² + 4x - 6

Important: When subtracting, distribute the negative to every term!

Answer: 3x² + 4x - 6`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        question: 'Add: (4x² - 3x + 7) + (2x² + 5x - 1)',
        solution: `Step 1: Remove parentheses:
4x² - 3x + 7 + 2x² + 5x - 1

Step 2: Group like terms by degree:
(4x² + 2x²) + (-3x + 5x) + (7 - 1)

Step 3: Combine each group:
6x² + 2x + 6

Step 4: Check that terms are in descending order by degree:
x² term first, x term second, constant last ✓

Answer: 6x² + 2x + 6`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        question: 'Simplify: (3x³ + 2x² - x + 5) - (x³ - 4x² + 3x - 2)',
        solution: `Step 1: Distribute the negative sign to the second polynomial:
3x³ + 2x² - x + 5 - x³ + 4x² - 3x + 2

Step 2: Group like terms:
(3x³ - x³) + (2x² + 4x²) + (-x - 3x) + (5 + 2)

Step 3: Combine each group:
2x³ + 6x² - 4x + 7

Step 4: Verify all signs:
3x³ - x³ = 2x³ ✓
2x² + 4x² = 6x² ✓
-x - 3x = -4x ✓
5 + 2 = 7 ✓

Answer: 2x³ + 6x² - 4x + 7`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        question: 'Simplify: (5a² - 3ab + 2b²) + (2a² + 4ab - b²) - (3a² - ab + 3b²)',
        solution: `Step 1: Work left to right. First add the first two polynomials:
(5a² - 3ab + 2b²) + (2a² + 4ab - b²)
= 5a² + 2a² - 3ab + 4ab + 2b² - b²
= 7a² + ab + b²

Step 2: Now subtract the third polynomial from this result:
(7a² + ab + b²) - (3a² - ab + 3b²)

Step 3: Distribute the negative:
7a² + ab + b² - 3a² + ab - 3b²

Step 4: Group like terms:
(7a² - 3a²) + (ab + ab) + (b² - 3b²)

Step 5: Combine:
4a² + 2ab - 2b²

Answer: 4a² + 2ab - 2b²`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polynomialOperations.id,
        front: 'What are like terms?',
        back: 'Terms with the same variables raised to the same powers. Example: 3x² and 5x² are like terms.',
        hint: 'Same variable part',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'Can you combine 3x² + 5x?',
        back: 'No, these are not like terms. x² and x have different exponents.',
        hint: 'Different powers mean different terms',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'What is the most important step when subtracting polynomials?',
        back: 'Distribute the negative sign to every term in the polynomial being subtracted. Change all the signs!',
        hint: 'Distribute the minus sign',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'What is standard form for a polynomial?',
        back: 'Terms arranged in descending order by degree (exponent). Highest power first, constant last.',
        hint: 'Highest to lowest exponents',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'How do you add polynomials?',
        back: 'Remove parentheses, group like terms, then combine the coefficients of like terms.',
        hint: 'Combine like terms',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'What changes when you subtract (3x - 5)?',
        back: 'It becomes -3x + 5. Every term inside changes sign when you distribute the negative.',
        hint: 'Change all signs',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polynomial-operations-algebra1');

  // TOPIC 2: The Quadratic Formula
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: quadraticFormula.id,
        question: 'Solve using the quadratic formula: x² + 5x + 6 = 0',
        solution: `Step 1: Identify a, b, and c:
Standard form: ax² + bx + c = 0
a = 1, b = 5, c = 6

Step 2: Write the quadratic formula:
x = [-b ± √(b² - 4ac)] / (2a)

Step 3: Substitute values:
x = [-5 ± √(5² - 4(1)(6))] / (2·1)
x = [-5 ± √(25 - 24)] / 2
x = [-5 ± √1] / 2
x = [-5 ± 1] / 2

Step 4: Find both solutions:
x = (-5 + 1)/2 = -4/2 = -2
x = (-5 - 1)/2 = -6/2 = -3

Answer: x = -2 or x = -3`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        question: 'Solve: x² - 4x + 1 = 0',
        solution: `Step 1: Identify a, b, c:
a = 1, b = -4, c = 1

Step 2: Substitute into the quadratic formula:
x = [-(-4) ± √((-4)² - 4(1)(1))] / (2·1)
x = [4 ± √(16 - 4)] / 2
x = [4 ± √12] / 2

Step 3: Simplify the radical:
√12 = √(4 × 3) = 2√3

x = [4 ± 2√3] / 2

Step 4: Simplify by factoring out 2:
x = 2(2 ± √3) / 2
x = 2 ± √3

Two solutions:
x = 2 + √3 ≈ 3.732
x = 2 - √3 ≈ 0.268

Answer: x = 2 + √3 or x = 2 - √3`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        question: 'How many real solutions does x² + 2x + 5 = 0 have? Use the discriminant.',
        solution: `Step 1: Recall the discriminant:
The discriminant is b² - 4ac
- If positive: 2 real solutions
- If zero: 1 real solution
- If negative: 0 real solutions (2 complex solutions)

Step 2: Identify a, b, c:
a = 1, b = 2, c = 5

Step 3: Calculate the discriminant:
b² - 4ac = 2² - 4(1)(5)
= 4 - 20
= -16

Step 4: Interpret:
Since -16 < 0, the discriminant is negative.
This means there are NO real solutions.

The equation has 2 complex (imaginary) solutions.

Answer: 0 real solutions`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        question: 'Solve: 2x² + 7x - 4 = 0',
        solution: `Step 1: Identify a, b, c:
a = 2, b = 7, c = -4

Step 2: Substitute into the quadratic formula:
x = [-7 ± √(7² - 4(2)(-4))] / (2·2)
x = [-7 ± √(49 + 32)] / 4
x = [-7 ± √81] / 4
x = [-7 ± 9] / 4

Step 3: Find both solutions:
x = (-7 + 9)/4 = 2/4 = 1/2
x = (-7 - 9)/4 = -16/4 = -4

Step 4: Check both solutions:
For x = 1/2: 2(1/2)² + 7(1/2) - 4 = 2(1/4) + 7/2 - 4 = 1/2 + 7/2 - 4 = 0 ✓
For x = -4: 2(-4)² + 7(-4) - 4 = 32 - 28 - 4 = 0 ✓

Answer: x = 1/2 or x = -4`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        question: 'A ball is thrown upward with initial velocity 48 ft/s from a height of 6 feet. Its height is h = -16t² + 48t + 6. When will it hit the ground?',
        solution: `Step 1: Understand what "hit the ground" means:
When h = 0 (height equals zero)

Step 2: Set up the equation:
0 = -16t² + 48t + 6
or: -16t² + 48t + 6 = 0

Step 3: Identify a, b, c:
a = -16, b = 48, c = 6

Step 4: Use the quadratic formula:
t = [-48 ± √(48² - 4(-16)(6))] / (2·-16)
t = [-48 ± √(2304 + 384)] / (-32)
t = [-48 ± √2688] / (-32)
t = [-48 ± 51.845] / (-32)

Step 5: Find both values:
t = (-48 + 51.845)/(-32) ≈ -0.12 (reject - negative time)
t = (-48 - 51.845)/(-32) ≈ 3.12

Step 6: Interpret:
The ball hits the ground after approximately 3.12 seconds.

Answer: About 3.12 seconds`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: quadraticFormula.id,
        front: 'What is the quadratic formula?',
        back: 'x = [-b ± √(b² - 4ac)] / (2a), used to solve ax² + bx + c = 0',
        hint: 'Memorize this formula!',
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        front: 'What is the discriminant?',
        back: 'b² - 4ac (the part under the square root). It determines the number and type of solutions.',
        hint: 'The expression under the radical',
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        front: 'What does it mean if the discriminant is positive?',
        back: 'The equation has 2 distinct real solutions.',
        hint: 'Positive discriminant = 2 real solutions',
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        front: 'What does it mean if the discriminant equals zero?',
        back: 'The equation has exactly 1 real solution (a repeated root).',
        hint: 'Zero discriminant = 1 solution',
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        front: 'What does it mean if the discriminant is negative?',
        back: 'The equation has no real solutions (2 complex solutions).',
        hint: 'Negative discriminant = no real solutions',
        isPremium: false
      },
      {
        topicId: quadraticFormula.id,
        front: 'When should you use the quadratic formula?',
        back: 'When factoring is difficult or impossible, or when you need exact decimal approximations.',
        hint: 'It always works for any quadratic equation',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: quadratic-formula-detailed-algebra1');

  // TOPIC 3: Systems of Equations Word Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: systemsWordProblems.id,
        question: 'The sum of two numbers is 25 and their difference is 7. Find the two numbers.',
        solution: `Step 1: Define variables:
Let x = first number
Let y = second number

Step 2: Write equations from the problem:
"Sum is 25": x + y = 25
"Difference is 7": x - y = 7

Step 3: Solve using elimination (add the equations):
  x + y = 25
+ x - y = 7
-----------
  2x = 32
  x = 16

Step 4: Substitute x = 16 into the first equation:
16 + y = 25
y = 9

Step 5: Check:
Sum: 16 + 9 = 25 ✓
Difference: 16 - 9 = 7 ✓

Answer: The numbers are 16 and 9`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        question: 'Tickets to a movie cost $8 for adults and $5 for children. If 120 tickets were sold for a total of $750, how many of each type were sold?',
        solution: `Step 1: Define variables:
Let a = adult tickets
Let c = child tickets

Step 2: Write equations:
Total tickets: a + c = 120
Total money: 8a + 5c = 750

Step 3: Solve the first equation for a:
a = 120 - c

Step 4: Substitute into the second equation:
8(120 - c) + 5c = 750
960 - 8c + 5c = 750
960 - 3c = 750
-3c = -210
c = 70

Step 5: Find a:
a = 120 - 70 = 50

Step 6: Check:
Total tickets: 50 + 70 = 120 ✓
Total money: 8(50) + 5(70) = 400 + 350 = 750 ✓

Answer: 50 adult tickets and 70 child tickets`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        question: 'A store sells notebooks for $3 and pens for $2. Sarah bought 12 items for $31. How many of each did she buy?',
        solution: `Step 1: Define variables:
Let n = number of notebooks
Let p = number of pens

Step 2: Write equations:
Total items: n + p = 12
Total cost: 3n + 2p = 31

Step 3: Solve the first equation for n:
n = 12 - p

Step 4: Substitute into the second equation:
3(12 - p) + 2p = 31
36 - 3p + 2p = 31
36 - p = 31
-p = -5
p = 5

Step 5: Find n:
n = 12 - 5 = 7

Step 6: Check:
Total items: 7 + 5 = 12 ✓
Total cost: 3(7) + 2(5) = 21 + 10 = 31 ✓

Answer: 7 notebooks and 5 pens`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        question: 'A rectangle has a perimeter of 40 inches. The length is 4 inches more than twice the width. Find the dimensions.',
        solution: `Step 1: Define variables:
Let w = width
Let l = length

Step 2: Write equations:
Perimeter: 2l + 2w = 40 (or l + w = 20)
Length-width relationship: l = 2w + 4

Step 3: Simplify the perimeter equation:
2l + 2w = 40
Divide by 2: l + w = 20

Step 4: Substitute l = 2w + 4 into l + w = 20:
(2w + 4) + w = 20
3w + 4 = 20
3w = 16
w = 16/3 ≈ 5.33 inches

Step 5: Find l:
l = 2(16/3) + 4 = 32/3 + 12/3 = 44/3 ≈ 14.67 inches

Step 6: Check:
Perimeter: 2(44/3) + 2(16/3) = 88/3 + 32/3 = 120/3 = 40 ✓
l = 2w + 4: 44/3 = 2(16/3) + 4 = 32/3 + 12/3 = 44/3 ✓

Answer: Width = 16/3 inches (≈5.33), Length = 44/3 inches (≈14.67)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        question: 'A chemist needs to mix a 20% acid solution with a 50% acid solution to get 30 liters of a 35% acid solution. How much of each should be used?',
        solution: `Step 1: Define variables:
Let x = liters of 20% solution
Let y = liters of 50% solution

Step 2: Write equations:
Total volume: x + y = 30
Amount of acid: 0.20x + 0.50y = 0.35(30)

Step 3: Simplify the acid equation:
0.20x + 0.50y = 10.5

Step 4: Solve the first equation for x:
x = 30 - y

Step 5: Substitute into the acid equation:
0.20(30 - y) + 0.50y = 10.5
6 - 0.20y + 0.50y = 10.5
6 + 0.30y = 10.5
0.30y = 4.5
y = 15

Step 6: Find x:
x = 30 - 15 = 15

Step 7: Check:
Total volume: 15 + 15 = 30 ✓
Acid amount: 0.20(15) + 0.50(15) = 3 + 7.5 = 10.5
Target: 0.35(30) = 10.5 ✓

Answer: 15 liters of 20% solution and 15 liters of 50% solution`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: systemsWordProblems.id,
        front: 'What is the first step in solving a word problem with systems?',
        back: 'Define variables - clearly state what each variable represents with units if applicable.',
        hint: 'Let x = ... and y = ...',
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        front: 'How many equations do you need for a system with two variables?',
        back: 'Two equations. You need as many equations as you have variables.',
        hint: 'Two variables = two equations',
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        front: 'What does "sum" mean in a word problem?',
        back: 'Add. "The sum of x and y" means x + y.',
        hint: 'Sum = addition',
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        front: 'What does "difference" mean in a word problem?',
        back: 'Subtract. "The difference of x and y" means x - y.',
        hint: 'Difference = subtraction',
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        front: 'How do you check your solution to a word problem?',
        back: 'Substitute your values back into both original equations AND verify they make sense in the context.',
        hint: 'Check both equations and the real-world meaning',
        isPremium: false
      },
      {
        topicId: systemsWordProblems.id,
        front: 'What formula is used for mixture problems?',
        back: '(concentration₁)(amount₁) + (concentration₂)(amount₂) = (final concentration)(total amount)',
        hint: 'Percent times amount for each part',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: systems-word-problems-algebra1');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
