import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Precalculus - Polynomial and Rational Functions (Part 3)...');

  // Find the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  });

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found');
  }

  // Find the Polynomial and Rational Functions category
  const polynomialCategory = await prisma.category.findFirst({
    where: {
      courseId: precalcCourse.id,
      name: 'Polynomial and Rational Functions'
    }
  });

  if (!polynomialCategory) {
    throw new Error('Polynomial and Rational Functions category not found');
  }

  // Get current topic count to set proper order
  const existingTopics = await prisma.topic.count({
    where: { categoryId: polynomialCategory.id }
  });

  // Topic 5: Complex Numbers
  const complexNumbersTopic = await prisma.topic.create({
    data: {
      title: 'Complex Numbers and Operations',
      slug: 'complex-numbers',
      description: 'Understand complex numbers, perform operations with complex numbers, and solve equations involving complex solutions.',
      order: existingTopics + 1,
      categoryId: polynomialCategory.id,
      isPremium: false,
      textContent: `
# Complex Numbers and Operations

## Introduction to Complex Numbers

A **complex number** has the form:
$$z = a + bi$$

Where:
- $a$ is the **real part**: $\\text{Re}(z) = a$
- $b$ is the **imaginary part**: $\\text{Im}(z) = b$
- $i$ is the **imaginary unit**: $i = \\sqrt{-1}$, so $i^2 = -1$

### Key Properties of $i$
- $i^1 = i$
- $i^2 = -1$
- $i^3 = i^2 \\cdot i = -i$
- $i^4 = i^2 \\cdot i^2 = 1$
- Pattern repeats: $i^5 = i$, $i^6 = -1$, etc.

To find $i^n$: divide $n$ by 4 and use the remainder.

## Complex Number Operations

### Addition and Subtraction
Combine like terms (real with real, imaginary with imaginary):
$$(a + bi) + (c + di) = (a + c) + (b + d)i$$
$$(a + bi) - (c + di) = (a - c) + (b - d)i$$

### Multiplication
Use the distributive property and $i^2 = -1$:
$$(a + bi)(c + di) = ac + adi + bci + bdi^2$$
$$= ac + adi + bci - bd$$
$$= (ac - bd) + (ad + bc)i$$

**FOIL method works:**
- First: $ac$
- Outer: $adi$
- Inner: $bci$
- Last: $bdi^2 = -bd$

### Division
To divide complex numbers, **multiply by the conjugate** of the denominator:
$$\\frac{a + bi}{c + di} = \\frac{a + bi}{c + di} \\cdot \\frac{c - di}{c - di}$$

The denominator becomes real:
$$\\frac{(a + bi)(c - di)}{c^2 + d^2}$$

## Complex Conjugate

The **conjugate** of $z = a + bi$ is:
$$\\bar{z} = a - bi$$

**Properties:**
- $z \\cdot \\bar{z} = (a + bi)(a - bi) = a^2 + b^2$ (always real and non-negative)
- $(z + w)^* = \\bar{z} + \\bar{w}$
- $(zw)^* = \\bar{z} \\cdot \\bar{w}$
- $\\overline{\\bar{z}} = z$

## Absolute Value (Modulus)

The **absolute value** or **modulus** of $z = a + bi$ is:
$$|z| = \\sqrt{a^2 + b^2}$$

This represents the distance from the origin in the complex plane.

**Properties:**
- $|z| \\geq 0$
- $|z| = 0$ if and only if $z = 0$
- $|zw| = |z| \\cdot |w|$
- $|\\frac{z}{w}| = \\frac{|z|}{|w|}$ (if $w \\neq 0$)
- $|z|^2 = z \\cdot \\bar{z}$

## Complex Plane (Argand Diagram)

Complex numbers can be plotted on a coordinate plane:
- **Horizontal axis**: Real part
- **Vertical axis**: Imaginary part
- $z = a + bi$ corresponds to point $(a, b)$

### Polar Form

A complex number can also be written in **polar form**:
$$z = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta$$

Or using Euler's formula:
$$z = re^{i\\theta}$$

Where:
- $r = |z| = \\sqrt{a^2 + b^2}$ (modulus)
- $\\theta = \\arg(z) = \\arctan(\\frac{b}{a})$ (argument/angle, adjusted for quadrant)

## Solving Equations with Complex Numbers

### Quadratic Equations
For $ax^2 + bx + c = 0$ with discriminant $b^2 - 4ac < 0$:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-b \\pm i\\sqrt{|b^2 - 4ac|}}{2a}$$

**Complex Conjugate Root Theorem:** If $a + bi$ is a root of a polynomial with real coefficients, then $a - bi$ is also a root.

### Higher Degree Equations
Complex solutions come in conjugate pairs for polynomials with real coefficients.

## Key Theorems

1. **Fundamental Theorem of Algebra**: Every polynomial of degree $n \\geq 1$ has exactly $n$ complex roots (counting multiplicity).

2. **Complex Conjugate Root Theorem**: If a polynomial has real coefficients and $a + bi$ is a root, then $a - bi$ is also a root.
`,
      exampleProblems: {
        create: [
          {
            question: 'Simplify $(3 + 2i) + (5 - 4i)$ and $(3 + 2i) - (5 - 4i)$.',
            solution: `**Solution:**

**Part 1: Addition**
$$(3 + 2i) + (5 - 4i)$$

Combine real parts and imaginary parts separately:
- Real parts: $3 + 5 = 8$
- Imaginary parts: $2 + (-4) = -2$

**Answer:** $8 - 2i$

**Part 2: Subtraction**
$$(3 + 2i) - (5 - 4i)$$

Distribute the negative sign and combine:
$$= 3 + 2i - 5 + 4i$$

- Real parts: $3 - 5 = -2$
- Imaginary parts: $2 + 4 = 6$

**Answer:** $-2 + 6i$

**Verification:**
- Addition: Real = 8, Imaginary = -2 ✓
- Subtraction: Real = -2, Imaginary = 6 ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Multiply $(2 + 3i)(4 - i)$ and express in standard form $a + bi$.',
            solution: `**Solution:**

Given: $(2 + 3i)(4 - i)$

**Use FOIL method:**
- **F**irst: $(2)(4) = 8$
- **O**uter: $(2)(-i) = -2i$
- **I**nner: $(3i)(4) = 12i$
- **L**ast: $(3i)(-i) = -3i^2 = -3(-1) = 3$

**Combine:**
$$8 - 2i + 12i + 3$$
$$= (8 + 3) + (-2 + 12)i$$
$$= 11 + 10i$$

**Answer:** $11 + 10i$

**Verification using the formula:**
$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$

Where $a = 2, b = 3, c = 4, d = -1$:
- Real part: $(2)(4) - (3)(-1) = 8 + 3 = 11$ ✓
- Imaginary part: $(2)(-1) + (3)(4) = -2 + 12 = 10$ ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Divide $\\frac{3 + 2i}{1 - 2i}$ and express in standard form $a + bi$.',
            solution: `**Solution:**

Given: $\\frac{3 + 2i}{1 - 2i}$

**Step 1: Multiply by the conjugate of the denominator**

The conjugate of $1 - 2i$ is $1 + 2i$:

$$\\frac{3 + 2i}{1 - 2i} \\cdot \\frac{1 + 2i}{1 + 2i}$$

**Step 2: Multiply the numerators**
$$(3 + 2i)(1 + 2i)$$
- F: $(3)(1) = 3$
- O: $(3)(2i) = 6i$
- I: $(2i)(1) = 2i$
- L: $(2i)(2i) = 4i^2 = -4$

$$= 3 + 6i + 2i - 4 = -1 + 8i$$

**Step 3: Multiply the denominators**
$$(1 - 2i)(1 + 2i) = 1^2 - (2i)^2 = 1 - 4i^2 = 1 + 4 = 5$$

**Step 4: Combine**
$$\\frac{-1 + 8i}{5} = -\\frac{1}{5} + \\frac{8}{5}i$$

**Answer:** $-\\frac{1}{5} + \\frac{8}{5}i$

**Verification:**
Check by multiplying: $(1 - 2i)(-\\frac{1}{5} + \\frac{8}{5}i)$
$$= -\\frac{1}{5} + \\frac{8}{5}i + \\frac{2}{5}i - \\frac{16}{5}i^2$$
$$= -\\frac{1}{5} + \\frac{10}{5}i + \\frac{16}{5}$$
$$= \\frac{15}{5} + \\frac{10}{5}i = 3 + 2i$$ ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', complexNumbersTopic.title);

  // Create flashcards for complex numbers topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: complexNumbersTopic.id,
        front: 'What is the imaginary unit $i$ and what is $i^2$?',
        back: '$i = \\sqrt{-1}$ and $i^2 = -1$. This is the fundamental property of the imaginary unit.'
      },
      {
        topicId: complexNumbersTopic.id,
        front: 'What is the standard form of a complex number?',
        back: '$z = a + bi$ where $a$ is the real part and $b$ is the imaginary part ($a, b \\in \\mathbb{R}$).'
      },
      {
        topicId: complexNumbersTopic.id,
        front: 'What is the complex conjugate of $a + bi$?',
        back: '$\\overline{a + bi} = a - bi$. Change the sign of the imaginary part.'
      },
      {
        topicId: complexNumbersTopic.id,
        front: 'How do you divide complex numbers?',
        back: 'Multiply both numerator and denominator by the conjugate of the denominator to make the denominator real.'
      },
      {
        topicId: complexNumbersTopic.id,
        front: 'What is the absolute value (modulus) of $z = a + bi$?',
        back: '$|z| = \\sqrt{a^2 + b^2}$. This is the distance from the origin in the complex plane.'
      },
      {
        topicId: complexNumbersTopic.id,
        front: 'What is the pattern for powers of $i$?',
        back: '$i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, then the pattern repeats. To find $i^n$, divide $n$ by 4 and use the remainder.'
      },
      {
        topicId: complexNumbersTopic.id,
        front: 'What is the Complex Conjugate Root Theorem?',
        back: 'If a polynomial has real coefficients and $a + bi$ is a root, then $a - bi$ is also a root. Complex roots come in conjugate pairs.'
      }
    ]
  });

  console.log('✓ Created 7 flashcards for', complexNumbersTopic.title);

  // Topic 6: Fundamental Theorem of Algebra
  const fundamentalTheoremTopic = await prisma.topic.create({
    data: {
      title: 'Fundamental Theorem of Algebra and Factoring',
      slug: 'fundamental-theorem-algebra',
      description: 'Apply the Fundamental Theorem of Algebra to find all roots of polynomials and completely factor polynomial expressions.',
      order: existingTopics + 2,
      categoryId: polynomialCategory.id,
      isPremium: false,
      textContent: `
# Fundamental Theorem of Algebra and Factoring

## The Fundamental Theorem of Algebra

**Theorem:** Every polynomial equation of degree $n \\geq 1$ with complex coefficients has exactly $n$ complex roots (counting multiplicity).

### Implications

1. A polynomial of degree $n$ has exactly $n$ roots in the complex number system
2. Some roots may be repeated (multiplicity > 1)
3. Some roots may be real, some may be complex
4. Complex roots with real coefficients come in conjugate pairs

### Example
The polynomial $p(x) = x^3 - 6x^2 + 11x - 6$ is degree 3, so it has exactly 3 roots.

If we factor: $p(x) = (x - 1)(x - 2)(x - 3)$

The three roots are $x = 1, 2, 3$ (all real).

## Relationship Between Roots and Factors

If $r$ is a root of $p(x)$, then $(x - r)$ is a factor of $p(x)$.

**Conversely:** If $(x - r)$ is a factor of $p(x)$, then $r$ is a root of $p(x)$.

### Multiplicity

If $(x - r)^k$ is a factor but $(x - r)^{k+1}$ is not, then $r$ is a root of **multiplicity** $k$.

**Effects of multiplicity on graphs:**
- Multiplicity 1 (simple root): Graph crosses the x-axis
- Multiplicity 2 (double root): Graph touches but doesn't cross (turning point)
- Multiplicity 3: Graph crosses with a flattening
- Even multiplicity: Graph touches x-axis
- Odd multiplicity: Graph crosses x-axis

## Complete Factorization

Every polynomial with **real coefficients** can be factored into:
1. **Linear factors**: $(x - r)$ where $r$ is a real root
2. **Irreducible quadratic factors**: $ax^2 + bx + c$ where $b^2 - 4ac < 0$

### Linear Factorization Theorem

If $p(x)$ is a polynomial of degree $n \\geq 1$, then:
$$p(x) = a_n(x - r_1)(x - r_2)\\cdots(x - r_n)$$

where $a_n$ is the leading coefficient and $r_1, r_2, \\ldots, r_n$ are the roots (possibly complex, possibly repeated).

## Finding All Roots

### Step-by-step process:

1. **Count the roots**: Degree $n$ means $n$ roots total
2. **Find rational roots**: Use Rational Root Theorem
3. **Factor out linear factors**: Use synthetic division
4. **Reduce the polynomial**: Continue until you have a quadratic or simpler
5. **Find remaining roots**: Use quadratic formula if needed
6. **Include complex conjugates**: If you find $a + bi$, also include $a - bi$

## Complex Conjugate Root Theorem

**Theorem:** If a polynomial has **real coefficients** and $a + bi$ (where $b \\neq 0$) is a root, then the complex conjugate $a - bi$ is also a root.

### Consequence for Factoring

If $a + bi$ and $a - bi$ are roots, the corresponding quadratic factor is:
$$[x - (a + bi)][x - (a - bi)] = x^2 - 2ax + (a^2 + b^2)$$

This is a **real** quadratic (no imaginary coefficients).

## Writing Polynomials from Roots

Given roots, we can construct the polynomial:

**Example:** Roots are $2, 3, -1$

Factors: $(x - 2)(x - 3)(x + 1)$

Polynomial: $p(x) = (x - 2)(x - 3)(x + 1) = x^3 - 4x^2 + x + 6$

**With complex roots:** If roots are $1, 2 + i, 2 - i$:

$$p(x) = (x - 1)[x - (2 + i)][x - (2 - i)]$$
$$= (x - 1)[x^2 - 4x + 5]$$
$$= x^3 - 5x^2 + 9x - 5$$

## Number of Real vs Complex Roots

For a polynomial of degree $n$ with **real coefficients**:
- Complex roots come in conjugate pairs
- If $n$ is odd, there is at least one real root
- If $n$ is even, there may be no real roots

### Example Scenarios (degree 4):
- 4 real roots
- 2 real, 2 complex (conjugate pair)
- 0 real, 4 complex (two conjugate pairs)

## Descartes' Rule of Signs

**For positive roots:** Count sign changes in $p(x)$. The number of positive real roots is either equal to the number of sign changes or less by an even number.

**For negative roots:** Count sign changes in $p(-x)$.

### Example
$p(x) = x^3 - 4x^2 + x + 6$

Signs: $+ - + +$ → 2 sign changes
Positive roots: 2 or 0

$p(-x) = -x^3 - 4x^2 - x + 6$

Signs: $- - - +$ → 1 sign change
Negative roots: 1
`,
      exampleProblems: {
        create: [
          {
            question: 'Find all roots of $p(x) = x^3 - 7x^2 + 14x - 8$ and write the complete factorization.',
            solution: `**Solution:**

Given: $p(x) = x^3 - 7x^2 + 14x - 8$

**Step 1: Check for rational roots**

By Rational Root Theorem, possible rational roots are: $\\pm 1, \\pm 2, \\pm 4, \\pm 8$

Test $x = 1$:
$$p(1) = 1 - 7 + 14 - 8 = 0$$ ✓

So $x = 1$ is a root, and $(x - 1)$ is a factor.

**Step 2: Divide by $(x - 1)$ using synthetic division**

$$\\begin{array}{c|cccc}
  & 1 & -7 & 14 & -8 \\\\
1 &   & 1 & -6 & 8 \\\\
\\hline
  & 1 & -6 & 8 & 0
\\end{array}$$

Result: $p(x) = (x - 1)(x^2 - 6x + 8)$

**Step 3: Factor the quadratic**
$$x^2 - 6x + 8 = (x - 2)(x - 4)$$

**Step 4: Complete factorization**
$$p(x) = (x - 1)(x - 2)(x - 4)$$

**All roots:** $x = 1, 2, 4$

**Verification:**
- Degree 3 polynomial → 3 roots ✓
- All roots are real ✓
- Expand: $(x - 1)(x - 2)(x - 4)$
  - $(x - 1)(x^2 - 6x + 8) = x^3 - 6x^2 + 8x - x^2 + 6x - 8 = x^3 - 7x^2 + 14x - 8$ ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A polynomial of degree 4 has roots at $x = 2$ (multiplicity 2) and $x = -1 \\pm i$. Find the polynomial in standard form with leading coefficient 1.',
            solution: `**Solution:**

**Given information:**
- Degree 4
- Root: $x = 2$ with multiplicity 2
- Roots: $x = -1 + i$ and $x = -1 - i$ (complex conjugate pair)

**Step 1: Write factors**

From $x = 2$ (multiplicity 2): $(x - 2)^2$

From $x = -1 + i$: $[x - (-1 + i)] = (x + 1 - i)$

From $x = -1 - i$: $[x - (-1 - i)] = (x + 1 + i)$

**Step 2: Combine complex conjugate factors**

$$[x - (-1 + i)][x - (-1 - i)] = [(x + 1) - i][(x + 1) + i]$$

This is a difference of squares pattern: $(a - b)(a + b) = a^2 - b^2$

$$= (x + 1)^2 - i^2 = (x + 1)^2 - (-1) = (x + 1)^2 + 1$$

$$= x^2 + 2x + 1 + 1 = x^2 + 2x + 2$$

**Step 3: Form the complete polynomial**

$$p(x) = (x - 2)^2(x^2 + 2x + 2)$$

**Step 4: Expand**

First: $(x - 2)^2 = x^2 - 4x + 4$

Then multiply:
$$(x^2 - 4x + 4)(x^2 + 2x + 2)$$

$$= x^4 + 2x^3 + 2x^2 - 4x^3 - 8x^2 - 8x + 4x^2 + 8x + 8$$

$$= x^4 - 2x^3 - 2x^2 + 8$$

**Answer:** $p(x) = x^4 - 2x^3 - 2x^2 + 8$

**Verification:**
- Degree 4 ✓
- Leading coefficient 1 ✓
- Has 4 roots total (counting multiplicity) ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Find all roots of $p(x) = x^4 + 5x^2 + 4$ and write the complete factorization over the complex numbers.',
            solution: `**Solution:**

Given: $p(x) = x^4 + 5x^2 + 4$

**Step 1: Recognize this as quadratic in form**

Let $u = x^2$, then:
$$u^2 + 5u + 4 = 0$$

**Step 2: Factor the quadratic**
$$u^2 + 5u + 4 = (u + 1)(u + 4) = 0$$

So $u = -1$ or $u = -4$

**Step 3: Solve for $x$**

**Case 1:** $x^2 = -1$
$$x = \\pm i$$

**Case 2:** $x^2 = -4$
$$x = \\pm 2i$$

**All roots:** $x = i, -i, 2i, -2i$

**Step 4: Write complete factorization**

$$p(x) = (x - i)(x + i)(x - 2i)(x + 2i)$$

**Or in terms of real quadratics:**

$$(x - i)(x + i) = x^2 + 1$$
$$(x - 2i)(x + 2i) = x^2 + 4$$

$$p(x) = (x^2 + 1)(x^2 + 4)$$

**Answer:** 
- **Complex factorization:** $p(x) = (x - i)(x + i)(x - 2i)(x + 2i)$
- **Real factorization:** $p(x) = (x^2 + 1)(x^2 + 4)$
- **Roots:** $x = \\pm i, \\pm 2i$

**Verification:**
- Degree 4 → 4 roots ✓
- All roots are purely imaginary (no real roots) ✓
- Expand: $(x^2 + 1)(x^2 + 4) = x^4 + 4x^2 + x^2 + 4 = x^4 + 5x^2 + 4$ ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', fundamentalTheoremTopic.title);

  // Create flashcards for fundamental theorem topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: fundamentalTheoremTopic.id,
        front: 'What does the Fundamental Theorem of Algebra state?',
        back: 'Every polynomial of degree $n \\geq 1$ has exactly $n$ complex roots (counting multiplicity).'
      },
      {
        topicId: fundamentalTheoremTopic.id,
        front: 'If $(x - r)$ is a factor of polynomial $p(x)$, what can you conclude?',
        back: '$r$ is a root (or zero) of $p(x)$. Conversely, if $r$ is a root, then $(x - r)$ is a factor.'
      },
      {
        topicId: fundamentalTheoremTopic.id,
        front: 'What is multiplicity and how does it affect the graph?',
        back: 'Multiplicity is how many times a root appears. Odd multiplicity: graph crosses x-axis. Even multiplicity: graph touches but doesn\'t cross x-axis.'
      },
      {
        topicId: fundamentalTheoremTopic.id,
        front: 'If a polynomial with real coefficients has $3 + 2i$ as a root, what else must be true?',
        back: '$3 - 2i$ must also be a root (Complex Conjugate Root Theorem). Complex roots come in conjugate pairs for polynomials with real coefficients.'
      },
      {
        topicId: fundamentalTheoremTopic.id,
        front: 'What is the quadratic factor formed by complex conjugate roots $a + bi$ and $a - bi$?',
        back: '$[x - (a + bi)][x - (a - bi)] = x^2 - 2ax + (a^2 + b^2)$, which is a real quadratic.'
      },
      {
        topicId: fundamentalTheoremTopic.id,
        front: 'If a polynomial of degree 5 has real coefficients, what can you say about its roots?',
        back: 'It must have at least one real root (since complex roots come in pairs and 5 is odd). Possible combinations: 5 real, or 3 real + 2 complex, or 1 real + 4 complex.'
      },
      {
        topicId: fundamentalTheoremTopic.id,
        front: 'What is the Linear Factorization Theorem?',
        back: 'Every polynomial $p(x)$ of degree $n$ can be written as $p(x) = a_n(x - r_1)(x - r_2)\\cdots(x - r_n)$ where $a_n$ is the leading coefficient and $r_i$ are the roots.'
      }
    ]
  });

  console.log('✓ Created 7 flashcards for', fundamentalTheoremTopic.title);

  console.log('\n✅ Successfully seeded AP Precalculus - Polynomial and Rational Functions (Part 3)!');
  console.log('   Topics: 2');
  console.log('   Examples: 6');
  console.log('   Flashcards: 14');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
