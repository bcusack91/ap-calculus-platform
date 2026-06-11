import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 6 (3 topics)...');

  // Find the topics
  const proportions = await prisma.topic.findFirst({
    where: { slug: 'proportions-algebra1' }
  });

  const radicalOperations = await prisma.topic.findFirst({
    where: { slug: 'radical-operations-algebra1' }
  });

  const percentProblems = await prisma.topic.findFirst({
    where: { slug: 'percent-problems-algebra1' }
  });

  if (!proportions || !radicalOperations || !percentProblems) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Solving Proportions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: proportions.id,
        question: 'Solve for x: x/5 = 12/15',
        solution: `Step 1: Use cross multiplication:
In a proportion a/b = c/d, we have ad = bc

Step 2: Apply cross multiplication:
x · 15 = 5 · 12
15x = 60

Step 3: Solve for x:
x = 60/15
x = 4

Step 4: Check by substituting back:
4/5 = 12/15
4/5 = 4/5 ✓ (both simplify to 4/5)

Answer: x = 4`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: proportions.id,
        question: 'Solve: 3/8 = x/24',
        solution: `Step 1: Cross multiply:
3 · 24 = 8 · x
72 = 8x

Step 2: Solve for x:
x = 72/8
x = 9

Step 3: Check:
3/8 = 9/24
3/8 = 3/8 ✓ (9/24 simplifies to 3/8 by dividing by 3)

Answer: x = 9`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: proportions.id,
        question: 'A recipe calls for 2 cups of flour for every 3 cups of sugar. If you use 8 cups of flour, how much sugar do you need?',
        solution: `Step 1: Set up a proportion:
Let x = cups of sugar needed

flour/sugar = flour/sugar
2/3 = 8/x

Step 2: Cross multiply:
2 · x = 3 · 8
2x = 24

Step 3: Solve for x:
x = 24/2
x = 12

Step 4: Check the ratio:
Original ratio: 2:3
New ratio: 8:12 = 2:3 ✓ (divide both by 4)

Answer: 12 cups of sugar`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: proportions.id,
        question: 'Solve: (x-2)/4 = 6/8',
        solution: `Step 1: Simplify the right side first:
6/8 = 3/4

So we have: (x-2)/4 = 3/4

Step 2: Cross multiply:
4(x - 2) = 4 · 3
4(x - 2) = 12

Step 3: Divide both sides by 4:
x - 2 = 3

Step 4: Solve for x:
x = 3 + 2
x = 5

Step 5: Check:
(5-2)/4 = 3/4 ✓
3/4 = 3/4 ✓

Answer: x = 5`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: proportions.id,
        question: 'On a map, 2.5 inches represents 75 actual miles. If two cities are 6 inches apart on the map, what is the actual distance between them?',
        solution: `Step 1: Set up a proportion:
Let x = actual distance in miles

map distance/actual distance = map distance/actual distance
2.5/75 = 6/x

Step 2: Cross multiply:
2.5 · x = 75 · 6
2.5x = 450

Step 3: Solve for x:
x = 450/2.5
x = 180

Step 4: Check using unit rate:
75 miles ÷ 2.5 inches = 30 miles per inch
6 inches × 30 miles/inch = 180 miles ✓

Step 5: Interpret:
The scale is 1 inch = 30 miles
6 inches on the map = 180 actual miles

Answer: 180 miles`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: proportions.id,
        front: 'What is a proportion?',
        back: 'An equation stating that two ratios are equal. For example: a/b = c/d',
        hint: 'Two equal ratios',
        isPremium: false
      },
      {
        topicId: proportions.id,
        front: 'What is cross multiplication?',
        back: 'If a/b = c/d, then ad = bc. Multiply diagonally across the equal sign.',
        hint: 'Multiply the diagonal products',
        isPremium: false
      },
      {
        topicId: proportions.id,
        front: 'How do you solve a proportion for an unknown variable?',
        back: 'Use cross multiplication to create an equation, then solve for the variable.',
        hint: 'Cross multiply, then solve the resulting equation',
        isPremium: false
      },
      {
        topicId: proportions.id,
        front: 'What are the means and extremes in a proportion?',
        back: 'In a/b = c/d: extremes are a and d (outer terms), means are b and c (inner terms).',
        hint: 'Extremes are on the outside, means are in the middle',
        isPremium: false
      },
      {
        topicId: proportions.id,
        front: 'How can you check if two ratios form a proportion?',
        back: 'Cross multiply. If the products are equal, the ratios form a proportion.',
        hint: 'Cross products should be equal',
        isPremium: false
      },
      {
        topicId: proportions.id,
        front: 'What is a scale on a map?',
        back: 'A ratio that compares map distance to actual distance. Example: 1 inch = 50 miles.',
        hint: 'Map distance : actual distance',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: proportions-algebra1');

  // TOPIC 2: Adding and Subtracting Radicals
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: radicalOperations.id,
        question: 'Simplify: 5√3 + 2√3',
        solution: `Step 1: Check if the radicals are like radicals:
Both terms have √3, so they are like radicals.

Step 2: Add the coefficients:
Just like adding 5x + 2x = 7x
5√3 + 2√3 = (5 + 2)√3

Step 3: Simplify:
= 7√3

Think of √3 as the "unit" you're counting.

Answer: 7√3`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        question: 'Simplify: 8√5 - 3√5',
        solution: `Step 1: Check if the radicals are like radicals:
Both terms have √5, so they are like radicals.

Step 2: Subtract the coefficients:
Just like 8x - 3x = 5x
8√5 - 3√5 = (8 - 3)√5

Step 3: Simplify:
= 5√5

Answer: 5√5`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        question: 'Simplify: 3√2 + 4√3 - √2',
        solution: `Step 1: Identify like radicals:
Terms with √2: 3√2 and -√2
Terms with √3: 4√3 (only one, cannot be combined)

Step 2: Combine like radicals:
3√2 - √2 = (3 - 1)√2 = 2√2
(Note: √2 is the same as 1√2)

Step 3: Write the final answer:
2√2 + 4√3

This cannot be simplified further because √2 and √3 are not like radicals.

Answer: 2√2 + 4√3`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        question: 'Simplify: √12 + √27',
        solution: `Step 1: Simplify each radical first:

√12 = √(4 × 3) = √4 × √3 = 2√3

√27 = √(9 × 3) = √9 × √3 = 3√3

Step 2: Rewrite the expression with simplified radicals:
2√3 + 3√3

Step 3: Now they are like radicals! Add the coefficients:
(2 + 3)√3 = 5√3

Important: Always simplify radicals first before trying to combine them.

Answer: 5√3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        question: 'Simplify: 2√50 - 3√8 + √32',
        solution: `Step 1: Simplify each radical:

2√50 = 2√(25 × 2) = 2 × 5√2 = 10√2

3√8 = 3√(4 × 2) = 3 × 2√2 = 6√2

√32 = √(16 × 2) = 4√2

Step 2: Rewrite with simplified radicals:
10√2 - 6√2 + 4√2

Step 3: All are like radicals! Combine coefficients:
(10 - 6 + 4)√2
= 8√2

Step 4: Verify each simplification:
2√50 = 2√(25·2) = 10√2 ✓
3√8 = 3√(4·2) = 6√2 ✓
√32 = √(16·2) = 4√2 ✓

Answer: 8√2`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: radicalOperations.id,
        front: 'What are like radicals?',
        back: 'Radicals that have the same radicand (number under the radical). Example: 3√5 and 7√5 are like radicals.',
        hint: 'Same root part underneath',
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        front: 'Can you add √2 + √3?',
        back: 'No, they are not like radicals. You can only add/subtract radicals with the same radicand.',
        hint: 'Just like you cannot add 2x + 3y',
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        front: 'How do you add 4√7 + 5√7?',
        back: 'Add the coefficients: (4 + 5)√7 = 9√7. Keep the radical part the same.',
        hint: 'Add the numbers in front, keep the radical',
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        front: 'What should you do before adding or subtracting radicals?',
        back: 'Simplify each radical first to see if any become like radicals that can be combined.',
        hint: 'Simplify first!',
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        front: 'What does 1√5 equal?',
        back: 'Just √5. The coefficient of 1 is usually not written.',
        hint: 'The invisible 1',
        isPremium: false
      },
      {
        topicId: radicalOperations.id,
        front: 'How do you subtract 8√3 - 2√3?',
        back: 'Subtract the coefficients: (8 - 2)√3 = 6√3. Keep the radical part the same.',
        hint: 'Subtract the numbers in front, keep the radical',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: radical-operations-algebra1');

  // TOPIC 3: Percent Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: percentProblems.id,
        question: 'What is 25% of 80?',
        solution: `Step 1: Convert the percent to a decimal:
25% = 25/100 = 0.25

Step 2: Multiply by the whole:
"of" means multiply
0.25 × 80 = 20

Step 3: Alternative method - use a proportion:
part/whole = percent/100
x/80 = 25/100
100x = 2000
x = 20

Answer: 20`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        question: 'A shirt originally costs $40. It is on sale for 30% off. What is the sale price?',
        solution: `Step 1: Find the discount amount:
30% of $40 = 0.30 × 40 = $12

Step 2: Subtract from original price:
$40 - $12 = $28

Alternative method (finding what you pay):
If it's 30% off, you pay 70%
70% of $40 = 0.70 × 40 = $28

Answer: $28`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        question: '18 is what percent of 60?',
        solution: `Step 1: Set up the percent equation:
part = percent × whole
18 = x × 60

Step 2: Solve for x:
x = 18/60
x = 0.3

Step 3: Convert to percent:
0.3 = 30/100 = 30%

Alternative - use a proportion:
part/whole = percent/100
18/60 = x/100
60x = 1800
x = 30

Answer: 30%`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        question: 'A population increased from 500 to 650. What is the percent increase?',
        solution: `Step 1: Find the amount of change:
Change = New - Old
Change = 650 - 500 = 150

Step 2: Use the percent change formula:
Percent change = (amount of change/original amount) × 100%

Step 3: Substitute and calculate:
Percent increase = (150/500) × 100%
= 0.3 × 100%
= 30%

Step 4: Check:
30% of 500 = 150
500 + 150 = 650 ✓

Answer: 30% increase`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        question: 'After a 20% discount, a laptop costs $640. What was the original price?',
        solution: `Step 1: Understand what we know:
After 20% off, the price is $640
If 20% is taken off, we're paying 80% of the original

Step 2: Set up the equation:
Let x = original price
80% of x = $640
0.80x = 640

Step 3: Solve for x:
x = 640/0.80
x = 800

Step 4: Check:
20% off of $800:
Discount = 0.20 × 800 = $160
Sale price = 800 - 160 = $640 ✓

Alternative check:
80% of $800 = 0.80 × 800 = $640 ✓

Answer: $800`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: percentProblems.id,
        front: 'How do you convert a percent to a decimal?',
        back: 'Divide by 100 or move the decimal point two places left. Example: 35% = 0.35',
        hint: 'Percent means "per hundred"',
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        front: 'What are the three types of percent problems?',
        back: 'Finding the part (% of a number), finding the percent (what % is this?), finding the whole (% of what number?).',
        hint: 'Part, percent, or whole',
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        front: 'What does "of" mean in a percent problem?',
        back: 'Multiply. "25% of 80" means 0.25 × 80.',
        hint: 'Of = multiply',
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        front: 'What is the percent increase formula?',
        back: 'Percent increase = (amount of increase / original amount) × 100%',
        hint: 'Change divided by original, times 100',
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        front: 'If something is 30% off, what percent do you pay?',
        back: '70%. If 30% is discounted, you pay 100% - 30% = 70% of the original.',
        hint: 'Subtract from 100%',
        isPremium: false
      },
      {
        topicId: percentProblems.id,
        front: 'How do you find the original price before a discount?',
        back: 'Divide the sale price by the percent you paid (as a decimal). If 25% off, divide by 0.75.',
        hint: 'Work backwards - divide by the percent paid',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: percent-problems-algebra1');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
