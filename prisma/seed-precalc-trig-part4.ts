import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Precalculus - Trigonometric Functions (Part 4)...');

  // Find the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  });

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found');
  }

  // Find the Trigonometric Functions category
  const trigCategory = await prisma.category.findFirst({
    where: {
      courseId: precalcCourse.id,
      name: 'Trigonometric Functions'
    }
  });

  if (!trigCategory) {
    throw new Error('Trigonometric Functions category not found');
  }

  // Get current topic count to set proper order
  const existingTopics = await prisma.topic.count({
    where: { categoryId: trigCategory.id }
  });

  // Topic 6: Law of Sines and Law of Cosines
  const lawsOfTrianglesTopic = await prisma.topic.create({
    data: {
      title: 'Law of Sines and Law of Cosines',
      slug: 'law-of-sines-cosines',
      description: 'Apply the Law of Sines and Law of Cosines to solve oblique triangles and find missing sides and angles.',
      order: existingTopics + 1,
      categoryId: trigCategory.id,
      isPremium: false,
      textContent: `
# Law of Sines and Law of Cosines

## Introduction to Oblique Triangles

An **oblique triangle** is any triangle that is not a right triangle (no 90° angle).

For oblique triangles, we cannot use basic trigonometry (SOH CAH TOA). Instead, we use:
- **Law of Sines**: Relates sides and their opposite angles
- **Law of Cosines**: Generalizes the Pythagorean theorem

## Triangle Notation

For any triangle with vertices $A$, $B$, and $C$:
- Angles: $\\angle A$, $\\angle B$, $\\angle C$ (or simply $A$, $B$, $C$)
- Sides: 
  - Side $a$ is opposite angle $A$
  - Side $b$ is opposite angle $B$
  - Side $c$ is opposite angle $C$

**Sum of angles:** $A + B + C = 180°$ (or $\\pi$ radians)

## Law of Sines

### Formula

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

Or equivalently:

$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$

### When to Use

Use the Law of Sines when you have:
1. **AAS** (Angle-Angle-Side): Two angles and one side
2. **ASA** (Angle-Side-Angle): Two angles and the included side
3. **SSA** (Side-Side-Angle): Two sides and a non-included angle ⚠️ **Ambiguous case**

### Solving with Law of Sines

**Given:** Two angles and one side (AAS or ASA)

**Steps:**
1. Find the third angle: $C = 180° - A - B$
2. Use the law of sines to find the unknown sides
3. Use the ratio $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$

### The Ambiguous Case (SSA)

When given two sides and a non-included angle (SSA), there may be:
- **0 solutions** (no triangle exists)
- **1 solution** (one unique triangle)
- **2 solutions** (two different triangles)

**Why it's ambiguous:** The side opposite the known angle might "swing" to create two different triangles.

**To determine the number of solutions:**

Given sides $a$, $b$ and angle $A$ (where $a$ is opposite $A$):

1. If $a < b\\sin A$: **No triangle** (side too short)
2. If $a = b\\sin A$: **One triangle** (right triangle)
3. If $b\\sin A < a < b$: **Two triangles** (ambiguous case)
4. If $a \\geq b$: **One triangle**

## Law of Cosines

### Formulas

For any triangle:

$$a^2 = b^2 + c^2 - 2bc\\cos A$$
$$b^2 = a^2 + c^2 - 2ac\\cos B$$
$$c^2 = a^2 + b^2 - 2ab\\cos C$$

**Note:** When $C = 90°$, $\\cos C = 0$, and this reduces to the Pythagorean theorem: $c^2 = a^2 + b^2$

### Solving for an Angle

Rearrange to solve for the cosine:

$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$
$$\\cos B = \\frac{a^2 + c^2 - b^2}{2ac}$$
$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$

Then use $A = \\arccos(\\frac{b^2 + c^2 - a^2}{2bc})$

### When to Use

Use the Law of Cosines when you have:
1. **SAS** (Side-Angle-Side): Two sides and the included angle
2. **SSS** (Side-Side-Side): All three sides

## Strategy for Solving Triangles

### Given Information → Method

| Given | Method | Steps |
|-------|--------|-------|
| AAS or ASA | Law of Sines | Find third angle, then use ratios |
| SAS | Law of Cosines | Find third side, then use Law of Sines |
| SSS | Law of Cosines | Find one angle, then use Law of Sines |
| SSA | Law of Sines | Check ambiguous case first |

## Area of a Triangle

Using the Law of Sines, we can derive:

$$\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B$$

This is useful when you know two sides and the included angle.

## Common Applications

1. **Navigation**: Finding distances and bearings
2. **Surveying**: Measuring inaccessible distances
3. **Engineering**: Analyzing forces in structures
4. **Physics**: Resolving vector components

## Tips for Success

1. **Draw a diagram** and label all known values
2. **Identify the given information** (AAS, SAS, SSS, etc.)
3. **Choose the appropriate law** (Sines or Cosines)
4. **Check your answer** using the angle sum ($A + B + C = 180°$)
5. **Watch for the ambiguous case** with SSA
6. **Use calculator in correct mode** (degrees or radians)
`,
      exampleProblems: {
        create: [
          {
            question: 'In triangle $ABC$, $A = 35°$, $B = 65°$, and $c = 10$ cm. Find the length of side $a$.',
            solution: `**Solution:**

**Given:**
- $A = 35°$
- $B = 65°$
- $c = 10$ cm
- **Find:** $a$

**Step 1: Identify the case**

This is **AAS** (two angles and one side), so use the **Law of Sines**.

**Step 2: Find the third angle**
$$C = 180° - A - B = 180° - 35° - 65° = 80°$$

**Step 3: Apply Law of Sines**
$$\\frac{a}{\\sin A} = \\frac{c}{\\sin C}$$

Substitute:
$$\\frac{a}{\\sin 35°} = \\frac{10}{\\sin 80°}$$

**Step 4: Solve for $a$**
$$a = \\frac{10 \\sin 35°}{\\sin 80°}$$

Calculate:
$$a = \\frac{10 \\times 0.5736}{0.9848} \\approx \\frac{5.736}{0.9848} \\approx 5.82 \\text{ cm}$$

**Answer:** $a \\approx 5.82$ cm

**Verification:**
- All angles sum to $180°$ ✓
- $a < c$ makes sense since $A < C$ (smaller angle opposite smaller side) ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'In triangle $ABC$, $a = 8$, $b = 5$, and $C = 60°$. Find the length of side $c$.',
            solution: `**Solution:**

**Given:**
- $a = 8$
- $b = 5$
- $C = 60°$
- **Find:** $c$

**Step 1: Identify the case**

This is **SAS** (two sides and the included angle), so use the **Law of Cosines**.

**Step 2: Apply Law of Cosines**
$$c^2 = a^2 + b^2 - 2ab\\cos C$$

Substitute:
$$c^2 = 8^2 + 5^2 - 2(8)(5)\\cos 60°$$

**Step 3: Calculate**

$$c^2 = 64 + 25 - 80 \\cdot \\frac{1}{2}$$
$$c^2 = 64 + 25 - 40$$
$$c^2 = 49$$
$$c = 7$$

**Answer:** $c = 7$

**Bonus: Find angle $A$**

Now use Law of Sines:
$$\\frac{\\sin A}{a} = \\frac{\\sin C}{c}$$
$$\\frac{\\sin A}{8} = \\frac{\\sin 60°}{7}$$
$$\\sin A = \\frac{8 \\sin 60°}{7} = \\frac{8 \\times \\frac{\\sqrt{3}}{2}}{7} = \\frac{4\\sqrt{3}}{7} \\approx 0.9897$$
$$A = \\arcsin(0.9897) \\approx 81.8°$$

**Verification:**
- $c^2 = 49$ gives $c = 7$ ✓
- When $C = 60°$, $\\cos 60° = 0.5$ ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'In triangle $ABC$, $a = 20$, $b = 15$, and $c = 25$. Find all three angles.',
            solution: `**Solution:**

**Given:**
- $a = 20$
- $b = 15$
- $c = 25$
- **Find:** All angles

**Step 1: Identify the case**

This is **SSS** (all three sides), so use the **Law of Cosines**.

**Step 2: Find angle $C$ (largest angle, opposite longest side)**

$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$

Substitute:
$$\\cos C = \\frac{20^2 + 15^2 - 25^2}{2(20)(15)}$$
$$\\cos C = \\frac{400 + 225 - 625}{600}$$
$$\\cos C = \\frac{0}{600} = 0$$

Therefore:
$$C = \\arccos(0) = 90°$$

This is a **right triangle**!

**Step 3: Find angle $A$**

Now we can use Law of Sines:
$$\\frac{\\sin A}{a} = \\frac{\\sin C}{c}$$
$$\\frac{\\sin A}{20} = \\frac{\\sin 90°}{25}$$
$$\\frac{\\sin A}{20} = \\frac{1}{25}$$
$$\\sin A = \\frac{20}{25} = \\frac{4}{5} = 0.8$$
$$A = \\arcsin(0.8) \\approx 53.1°$$

**Step 4: Find angle $B$**

$$B = 180° - A - C = 180° - 53.1° - 90° = 36.9°$$

**Answer:**
- $A \\approx 53.1°$
- $B \\approx 36.9°$
- $C = 90°$

**Verification:**
- $A + B + C \\approx 53.1° + 36.9° + 90° = 180°$ ✓
- Check Pythagorean theorem: $20^2 + 15^2 = 400 + 225 = 625 = 25^2$ ✓
- This confirms it's a right triangle! ✓

**Note:** This is a 3-4-5 right triangle scaled by 5 (sides 15, 20, 25).`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', lawsOfTrianglesTopic.title);

  // Create flashcards for law of sines/cosines topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: lawsOfTrianglesTopic.id,
        front: 'What is the Law of Sines?',
        back: '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$ where lowercase letters are sides and uppercase letters are opposite angles.'
      },
      {
        topicId: lawsOfTrianglesTopic.id,
        front: 'When should you use the Law of Sines?',
        back: 'Use for AAS (two angles, one side), ASA (angle-side-angle), or SSA (side-side-angle, but watch for ambiguous case).'
      },
      {
        topicId: lawsOfTrianglesTopic.id,
        front: 'What is the Law of Cosines for finding side $c$?',
        back: '$c^2 = a^2 + b^2 - 2ab\\cos C$. This generalizes the Pythagorean theorem to any triangle.'
      },
      {
        topicId: lawsOfTrianglesTopic.id,
        front: 'When should you use the Law of Cosines?',
        back: 'Use for SAS (two sides and included angle) or SSS (all three sides known).'
      },
      {
        topicId: lawsOfTrianglesTopic.id,
        front: 'What is the ambiguous case (SSA)?',
        back: 'When given two sides and a non-included angle, there may be 0, 1, or 2 possible triangles. The ambiguity arises because the side opposite the known angle might create two different valid triangles.'
      },
      {
        topicId: lawsOfTrianglesTopic.id,
        front: 'How do you find the area of a triangle given two sides and the included angle?',
        back: '$\\text{Area} = \\frac{1}{2}ab\\sin C$ where $a$ and $b$ are the sides and $C$ is the included angle.'
      },
      {
        topicId: lawsOfTrianglesTopic.id,
        front: 'How can you rearrange the Law of Cosines to solve for an angle?',
        back: '$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$, then $C = \\arccos(\\frac{a^2 + b^2 - c^2}{2ab})$'
      }
    ]
  });

  console.log('✓ Created 7 flashcards for', lawsOfTrianglesTopic.title);

  console.log('\n✅ Successfully seeded AP Precalculus - Trigonometric Functions (Part 4)!');
  console.log('   Topics: 1');
  console.log('   Examples: 3');
  console.log('   Flashcards: 7');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
