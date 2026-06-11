import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function seedNegativeNumbersGrade6() {
  console.log('Seeding Negative Numbers topic for Grade 6...');

  // 1. Find or create the Grade 6 Math course
  const course = await prisma.course.findFirst({
    where: { slug: 'grade-6-math' },
  });
  if (!course) {
    throw new Error('Course grade-6-math not found. Run grade 6 seed first.');
  }

  // 2. Upsert the Integers category
  const category = await prisma.category.upsert({
    where: { slug: 'grade6-integers' },
    update: {},
    create: {
      name: 'Integers',
      slug: 'grade6-integers',
      order: 4,
      courseId: course.id,
    },
  });


  // 3. Upsert the Negative Numbers topic
  const textContent = `# Negative Numbers

## What Are Negative Numbers?

**Negative numbers** are numbers less than zero. They are written with a minus sign (−) in front of them, such as $-3$, $-7$, or $-15$.

You encounter negative numbers in everyday life:
- **Temperature:** $-5°F$ means 5 degrees below zero
- **Elevation:** $-200$ feet means 200 feet below sea level
- **Money:** $-\\$50$ means you owe $50

---

## The Number Line

A **number line** helps us visualize negative numbers. Zero sits in the middle, positive numbers go to the right, and negative numbers go to the left.

$$\\cdots\\;\\; -5 \\;\\; -4 \\;\\; -3 \\;\\; -2 \\;\\; -1 \\;\\; 0 \\;\\; 1 \\;\\; 2 \\;\\; 3 \\;\\; 4 \\;\\; 5 \\;\\;\\cdots$$

**Key ideas:**
- Numbers get **smaller** as you move left
- Numbers get **larger** as you move right
- $-4$ is to the **left** of $-1$, so $-4 < -1$

---

## Comparing Negative Numbers

When comparing two negative numbers, the one **closer to zero** is greater.

| Comparison | Result | Why? |
|---|---|---|
| $-2$ vs $-7$ | $-2 > -7$ | $-2$ is closer to zero |
| $-10$ vs $-3$ | $-10 < -3$ | $-3$ is closer to zero |
| $0$ vs $-5$ | $0 > -5$ | Zero is always greater than any negative |

---

## Absolute Value

The **absolute value** of a number is its distance from zero on the number line, regardless of direction.

$$|{-6}| = 6 \\qquad |{6}| = 6 \\qquad |{0}| = 0$$

Absolute value is always **non-negative** (zero or positive).

---

## Adding Negative Numbers

**Same signs → add the absolute values, keep the sign:**
$$(-3) + (-5) = -(3+5) = -8$$

**Different signs → subtract the smaller absolute value from the larger, keep the sign of the larger:**
$$7 + (-4) = 7 - 4 = 3$$
$$(-9) + 2 = -(9-2) = -7$$

---

## Subtracting Negative Numbers

**Subtracting a negative = adding a positive:**
$$5 - (-3) = 5 + 3 = 8$$
$$(-4) - (-6) = -4 + 6 = 2$$

Think of it as "two negatives make a positive" when they're right next to each other.

---

## Ordering Negative Numbers

To order a set of numbers from least to greatest, place them on a number line:

**Example:** Order $-3, 5, -8, 0, 2$ from least to greatest.

$$-8 < -3 < 0 < 2 < 5$$

---

## Quick Reference

| Operation | Rule | Example |
|---|---|---|
| Negative + Negative | Add, keep negative | $(-3)+(-4)=-7$ |
| Positive + Negative | Subtract, sign of larger | $8+(-3)=5$ |
| Subtract a Negative | Add the positive | $6-(-2)=8$ |
| Absolute Value | Distance from zero | $\\lvert{-9}\\rvert=9$ |
`;

  const topic = await prisma.topic.upsert({
    where: { slug: 'negative-numbers-grade6' },
    update: {
      title: 'Negative Numbers',
      description: 'Learn about negative numbers, the number line, comparing and ordering negatives, absolute value, and adding and subtracting negative numbers.',
      textContent,
      order: 2,
      categoryId: category.id,
    },
    create: {
      title: 'Negative Numbers',
      slug: 'negative-numbers-grade6',
      description: 'Learn about negative numbers, the number line, comparing and ordering negatives, absolute value, and adding and subtracting negative numbers.',
      textContent,
      order: 2,
      categoryId: category.id,
    },
  });

  console.log(`Topic created/updated: ${topic.title} (${topic.slug})`);

  // 4. Delete existing problems & flashcards for this topic
  await prisma.exampleProblem.deleteMany({ where: { topicId: topic.id } });
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  // 5. Create example problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic.id,
        question: 'Which number is greater: $-6$ or $-2$?',
        solution: '$-2$ is greater because it is closer to zero on the number line. $-2 > -6$.',
        difficulty: Difficulty.EASY,
        order: 1,
      },
      {
        topicId: topic.id,
        question: 'What is $(-5) + (-3)$?',
        solution: 'Both numbers are negative, so add the absolute values and keep the negative sign: $5 + 3 = 8$, so $(-5) + (-3) = -8$.',
        difficulty: Difficulty.EASY,
        order: 2,
      },
      {
        topicId: topic.id,
        question: 'What is $\\lvert{-14}\\rvert$?',
        solution: 'The absolute value of $-14$ is its distance from zero, which is $14$. So $\\lvert{-14}\\rvert = 14$.',
        difficulty: Difficulty.EASY,
        order: 3,
      },
      {
        topicId: topic.id,
        question: 'Calculate: $9 + (-13)$.',
        solution: 'The signs are different. Subtract the smaller absolute value from the larger: $13 - 9 = 4$. The number with the larger absolute value is $-13$ (negative), so the answer is $-4$.',
        difficulty: Difficulty.MEDIUM,
        order: 4,
      },
      {
        topicId: topic.id,
        question: 'Calculate: $(-7) - (-10)$.',
        solution: 'Subtracting a negative means adding its positive: $(-7) - (-10) = -7 + 10 = 3$.',
        difficulty: Difficulty.MEDIUM,
        order: 5,
      },
      {
        topicId: topic.id,
        question: 'Order these numbers from least to greatest: $4, -9, -1, 0, 7, -5$.',
        solution: 'On the number line, from left to right: $-9 < -5 < -1 < 0 < 4 < 7$.',
        difficulty: Difficulty.MEDIUM,
        order: 6,
      },
      {
        topicId: topic.id,
        question: 'The temperature at midnight was $-8°F$. By noon it had risen $15$ degrees. What was the noon temperature?',
        solution: '$-8 + 15 = 7$. The noon temperature was $7°F$.',
        difficulty: Difficulty.HARD,
        order: 7,
      },
    ],
  });

  console.log('Created 7 example problems.');

  // 6. Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: topic.id,
        front: 'What are negative numbers?',
        back: 'Numbers less than zero, written with a minus sign (e.g., $-3$, $-7$).',
        hint: 'Think about temperatures below zero.',
      },
      {
        topicId: topic.id,
        front: 'On a number line, which direction do negative numbers go?',
        back: 'Negative numbers go to the **left** of zero.',
        hint: 'Positive goes right, negative goes...',
      },
      {
        topicId: topic.id,
        front: 'Which is greater: $-5$ or $-2$?',
        back: '$-2$ is greater because it is closer to zero.',
        hint: 'The closer a negative number is to zero, the greater it is.',
      },
      {
        topicId: topic.id,
        front: 'What is the absolute value of a number?',
        back: 'Its distance from zero on the number line. It is always non-negative. Example: $\\lvert{-8}\\rvert = 8$.',
        hint: 'Think of it as "how far from zero" — direction doesn\'t matter.',
      },
      {
        topicId: topic.id,
        front: 'What is $(-4) + (-6)$?',
        back: '$-10$. Same signs: add the absolute values ($4+6=10$) and keep the negative sign.',
        hint: 'When both numbers are negative, the answer is more negative.',
      },
      {
        topicId: topic.id,
        front: 'What does subtracting a negative number mean?',
        back: 'Subtracting a negative is the same as adding a positive. Example: $5 - (-3) = 5 + 3 = 8$.',
        hint: 'Two negatives next to each other become a positive.',
      },
    ],
  });

  console.log('Created 6 flashcards.');
  console.log('Done seeding Negative Numbers for Grade 6!');
}

seedNegativeNumbersGrade6()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
