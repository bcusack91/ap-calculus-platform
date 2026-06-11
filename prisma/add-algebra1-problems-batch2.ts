import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 2 (3 topics)...');

  // Find the topics
  const solvingSystems = await prisma.topic.findFirst({
    where: { slug: 'solving-systems-algebra1' }
  });

  const factoring = await prisma.topic.findFirst({
    where: { slug: 'factoring-algebra1' }
  });

  const ratiosRates = await prisma.topic.findFirst({
    where: { slug: 'ratios-rates-algebra1' }
  });

  if (!solvingSystems || !factoring || !ratiosRates) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Solving Systems of Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: solvingSystems.id,
        question: 'Solve the system using substitution:\ny = 2x + 1\ny = -x + 7',
        solution: `Step 1: Both equations are already solved for y, so set them equal:
2x + 1 = -x + 7

Step 2: Solve for x:
2x + x = 7 - 1
3x = 6
x = 2

Step 3: Substitute x = 2 into either original equation (using the first):
y = 2(2) + 1
y = 4 + 1
y = 5

Step 4: Check in both equations:
Equation 1: 5 = 2(2) + 1 → 5 = 5 ✓
Equation 2: 5 = -(2) + 7 → 5 = 5 ✓

Answer: (2, 5)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        question: 'Solve the system using elimination:\n2x + 3y = 12\n2x - y = 4',
        solution: `Step 1: Notice that both equations have 2x, so we can eliminate x by subtracting:
(2x + 3y) - (2x - y) = 12 - 4
2x + 3y - 2x + y = 8
4y = 8
y = 2

Step 2: Substitute y = 2 into either original equation (using the second):
2x - 2 = 4
2x = 6
x = 3

Step 3: Check in both equations:
Equation 1: 2(3) + 3(2) = 6 + 6 = 12 ✓
Equation 2: 2(3) - 2 = 6 - 2 = 4 ✓

Answer: (3, 2)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        question: 'Solve the system:\n3x + 2y = 16\nx - y = 2',
        solution: `Step 1: Use substitution. Solve the second equation for x:
x = y + 2

Step 2: Substitute into the first equation:
3(y + 2) + 2y = 16
3y + 6 + 2y = 16
5y + 6 = 16
5y = 10
y = 2

Step 3: Substitute y = 2 back into x = y + 2:
x = 2 + 2
x = 4

Step 4: Check in both equations:
Equation 1: 3(4) + 2(2) = 12 + 4 = 16 ✓
Equation 2: 4 - 2 = 2 ✓

Answer: (4, 2)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        question: 'Solve the system using elimination:\n4x + 5y = 23\n3x - 2y = 0',
        solution: `Step 1: To eliminate y, multiply the first equation by 2 and the second by 5:
2(4x + 5y = 23) → 8x + 10y = 46
5(3x - 2y = 0) → 15x - 10y = 0

Step 2: Add the equations:
8x + 10y + 15x - 10y = 46 + 0
23x = 46
x = 2

Step 3: Substitute x = 2 into either original equation (using the second):
3(2) - 2y = 0
6 - 2y = 0
-2y = -6
y = 3

Step 4: Check in both equations:
Equation 1: 4(2) + 5(3) = 8 + 15 = 23 ✓
Equation 2: 3(2) - 2(3) = 6 - 6 = 0 ✓

Answer: (2, 3)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        question: 'A theater sold 450 tickets. Adult tickets cost $12 and child tickets cost $8. If total sales were $4,800, how many of each type of ticket were sold?',
        solution: `Step 1: Define variables:
Let a = number of adult tickets
Let c = number of child tickets

Step 2: Write equations from the problem:
Total tickets: a + c = 450
Total sales: 12a + 8c = 4800

Step 3: Solve using substitution. From equation 1:
c = 450 - a

Step 4: Substitute into equation 2:
12a + 8(450 - a) = 4800
12a + 3600 - 8a = 4800
4a + 3600 = 4800
4a = 1200
a = 300

Step 5: Find c:
c = 450 - 300 = 150

Step 6: Check:
Total tickets: 300 + 150 = 450 ✓
Total sales: 12(300) + 8(150) = 3600 + 1200 = 4800 ✓

Answer: 300 adult tickets and 150 child tickets`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: solvingSystems.id,
        front: 'What is a system of equations?',
        back: 'Two or more equations with the same variables. The solution is an ordered pair (x, y) that satisfies all equations simultaneously.',
        hint: 'Think about what values of x and y work in both equations at the same time',
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        front: 'When should you use the substitution method?',
        back: 'When one equation is already solved for a variable (like y = ...) or can be easily solved for a variable.',
        hint: 'Look for equations where a variable is already isolated or easy to isolate',
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        front: 'When should you use the elimination method?',
        back: 'When the coefficients of one variable are the same or opposites, or when you can easily make them the same by multiplying.',
        hint: 'Look for matching coefficients or coefficients that can be made to match',
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        front: 'How do you check if your solution to a system is correct?',
        back: 'Substitute both x and y values into both original equations. Both equations must be true.',
        hint: 'Your ordered pair should make both equations work',
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        front: 'What does it mean if a system has no solution?',
        back: 'The lines are parallel (same slope, different y-intercepts). They never intersect. This is called an inconsistent system.',
        hint: 'Think about parallel lines - they never meet',
        isPremium: false
      },
      {
        topicId: solvingSystems.id,
        front: 'What does it mean if a system has infinitely many solutions?',
        back: 'The equations represent the same line. Every point on the line is a solution. This is called a dependent system.',
        hint: 'The two equations are actually the same line',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: solving-systems-algebra1');

  // TOPIC 2: Factoring Polynomials
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: factoring.id,
        question: 'Factor completely: 6x + 12',
        solution: `Step 1: Find the greatest common factor (GCF) of the terms:
Factors of 6: 1, 2, 3, 6
Factors of 12: 1, 2, 3, 4, 6, 12
GCF = 6

Step 2: Factor out the GCF:
6x + 12 = 6(x + 2)

Step 3: Check by distributing:
6(x + 2) = 6x + 12 ✓

Answer: 6(x + 2)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: factoring.id,
        question: 'Factor: x² + 7x + 12',
        solution: `Step 1: This is in the form x² + bx + c. Find two numbers that:
- Multiply to c = 12
- Add to b = 7

Step 2: List factor pairs of 12:
1 and 12 → 1 + 12 = 13 ✗
2 and 6 → 2 + 6 = 8 ✗
3 and 4 → 3 + 4 = 7 ✓

Step 3: Write the factored form:
x² + 7x + 12 = (x + 3)(x + 4)

Step 4: Check using FOIL:
(x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓

Answer: (x + 3)(x + 4)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: factoring.id,
        question: 'Factor: x² - 9',
        solution: `Step 1: Recognize this as a difference of squares: a² - b²
x² - 9 = x² - 3²

Step 2: Use the formula: a² - b² = (a + b)(a - b)
x² - 3² = (x + 3)(x - 3)

Step 3: Check using FOIL:
(x + 3)(x - 3) = x² - 3x + 3x - 9 = x² - 9 ✓

Note: The middle terms cancel out, which is characteristic of difference of squares.

Answer: (x + 3)(x - 3)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: factoring.id,
        question: 'Factor completely: 2x² + 11x + 12',
        solution: `Step 1: This is in the form ax² + bx + c where a ≠ 1.
a = 2, b = 11, c = 12

Step 2: Find two numbers that multiply to ac = 2(12) = 24 and add to b = 11:
Factor pairs of 24:
1 and 24 → 1 + 24 = 25 ✗
2 and 12 → 2 + 12 = 14 ✗
3 and 8 → 3 + 8 = 11 ✓

Step 3: Rewrite the middle term using 3 and 8:
2x² + 11x + 12 = 2x² + 3x + 8x + 12

Step 4: Factor by grouping:
= (2x² + 3x) + (8x + 12)
= x(2x + 3) + 4(2x + 3)
= (2x + 3)(x + 4)

Step 5: Check using FOIL:
(2x + 3)(x + 4) = 2x² + 8x + 3x + 12 = 2x² + 11x + 12 ✓

Answer: (2x + 3)(x + 4)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: factoring.id,
        question: 'Factor completely: 3x³ - 48x',
        solution: `Step 1: First, look for a GCF:
GCF of 3x³ and 48x is 3x

Step 2: Factor out the GCF:
3x³ - 48x = 3x(x² - 16)

Step 3: Check if what remains can be factored further:
x² - 16 is a difference of squares: x² - 4²

Step 4: Factor the difference of squares:
3x(x² - 16) = 3x(x + 4)(x - 4)

Step 5: Check by multiplying:
3x(x + 4)(x - 4) = 3x(x² - 16) = 3x³ - 48x ✓

Important: Always factor out the GCF first, then look for other factoring patterns!

Answer: 3x(x + 4)(x - 4)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: factoring.id,
        front: 'What should you ALWAYS do first when factoring?',
        back: 'Look for and factor out the Greatest Common Factor (GCF) of all terms.',
        hint: 'GCF stands for Greatest Common Factor',
        isPremium: false
      },
      {
        topicId: factoring.id,
        front: 'How do you factor x² + bx + c?',
        back: 'Find two numbers that multiply to c and add to b. Write as (x + m)(x + n) where m and n are those numbers.',
        hint: 'Think: multiply to the last term, add to the middle coefficient',
        isPremium: false
      },
      {
        topicId: factoring.id,
        front: 'What is the difference of squares pattern?',
        back: 'a² - b² = (a + b)(a - b). For example: x² - 9 = (x + 3)(x - 3)',
        hint: 'Two perfect squares separated by subtraction',
        isPremium: false
      },
      {
        topicId: factoring.id,
        front: 'How can you check if your factoring is correct?',
        back: 'Multiply the factors back together using FOIL or the distributive property. You should get the original expression.',
        hint: 'Multiply your answer to see if you get back to where you started',
        isPremium: false
      },
      {
        topicId: factoring.id,
        front: 'When factoring ax² + bx + c (where a ≠ 1), what two numbers do you look for?',
        back: 'Two numbers that multiply to ac (a times c) and add to b.',
        hint: 'Multiply a and c together first',
        isPremium: false
      },
      {
        topicId: factoring.id,
        front: 'What does it mean to factor completely?',
        back: 'Factor until no factor can be factored further. Always factor out GCF first, then look for other patterns.',
        hint: 'Keep factoring until you cannot factor anymore',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: factoring-algebra1');

  // TOPIC 3: Ratios and Rates
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: ratiosRates.id,
        question: 'Simplify the ratio 12:18',
        solution: `Step 1: Find the GCF of 12 and 18:
Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 18: 1, 2, 3, 6, 9, 18
GCF = 6

Step 2: Divide both numbers by the GCF:
12 ÷ 6 = 2
18 ÷ 6 = 3

Step 3: Write the simplified ratio:
12:18 = 2:3

You can also write this as 2/3 or "2 to 3"

Answer: 2:3`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        question: 'A car travels 240 miles in 4 hours. What is the unit rate (speed) in miles per hour?',
        solution: `Step 1: Understand what a unit rate means:
A unit rate has a denominator of 1. Here we want miles per 1 hour.

Step 2: Set up the rate:
240 miles / 4 hours

Step 3: Divide to get the unit rate:
240 ÷ 4 = 60 miles per 1 hour

Step 4: Write with proper units:
60 miles/hour or 60 mph

Answer: 60 miles per hour`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        question: 'A recipe calls for flour and sugar in the ratio 3:2. If you use 9 cups of flour, how many cups of sugar do you need?',
        solution: `Step 1: Set up a proportion:
flour/sugar = 3/2 = 9/?

Step 2: Write the proportion:
3/2 = 9/x

Step 3: Cross multiply:
3x = 2(9)
3x = 18

Step 4: Solve for x:
x = 18/3
x = 6

Step 5: Check the ratio:
9:6 simplifies to 3:2 (divide both by 3) ✓

Answer: 6 cups of sugar`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        question: 'Which is the better buy: 16 oz of juice for $2.40 or 24 oz for $3.36?',
        solution: `Step 1: Find the unit price for the first option:
$2.40 / 16 oz = $0.15 per oz

Step 2: Find the unit price for the second option:
$3.36 / 24 oz = $0.14 per oz

Step 3: Compare the unit prices:
$0.15 per oz vs $0.14 per oz

Step 4: The lower unit price is the better buy:
$0.14 < $0.15, so 24 oz for $3.36 is better

Answer: The 24 oz bottle for $3.36 is the better buy (saves $0.01 per oz)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        question: 'On a map, 2 inches represents 50 actual miles. If two cities are 7 inches apart on the map, what is the actual distance between them?',
        solution: `Step 1: Set up the scale as a ratio:
map distance / actual distance = 2 inches / 50 miles

Step 2: Set up a proportion with the unknown:
2 inches / 50 miles = 7 inches / x miles

Step 3: Cross multiply:
2x = 50(7)
2x = 350

Step 4: Solve for x:
x = 350/2
x = 175

Step 5: Check using the scale:
If 2 inches = 50 miles, then 1 inch = 25 miles
7 inches × 25 miles/inch = 175 miles ✓

Answer: 175 miles`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: ratiosRates.id,
        front: 'What is a ratio?',
        back: 'A comparison of two quantities by division. Can be written as a:b, a/b, or "a to b".',
        hint: 'Think about comparing two numbers',
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        front: 'What is a unit rate?',
        back: 'A rate with a denominator of 1. For example, 60 miles per 1 hour or $3 per 1 pound.',
        hint: 'The word "per" means "for each one"',
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        front: 'How do you simplify a ratio?',
        back: 'Divide both numbers by their greatest common factor (GCF), just like simplifying a fraction.',
        hint: 'Same process as simplifying fractions',
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        front: 'What is the difference between part-to-part and part-to-whole ratios?',
        back: 'Part-to-part compares one part to another part (boys to girls). Part-to-whole compares one part to the total (boys to total students).',
        hint: 'Is it comparing parts to each other or a part to the whole thing?',
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        front: 'How do you find a unit price?',
        back: 'Divide the total price by the quantity. This tells you the price per one unit (like price per ounce).',
        hint: 'Price divided by amount',
        isPremium: false
      },
      {
        topicId: ratiosRates.id,
        front: 'How do you solve ratio problems using proportions?',
        back: 'Set up two equivalent ratios in fraction form (a/b = c/d), then cross multiply to solve for the unknown.',
        hint: 'Cross multiply means multiply diagonally: a × d = b × c',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: ratios-rates-algebra1');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
