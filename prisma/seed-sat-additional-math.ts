import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating additional comprehensive SAT Math content...')

  const sat = await prisma.course.findUnique({
    where: { slug: 'sat-prep' }
  })

  if (!sat) {
    throw new Error('SAT Prep course not found')
  }

  // Create Additional Math Topics category
  const additionalMath = await prisma.category.upsert({
    where: { slug: 'sat-additional-topics' },
    update: {},
    create: {
      slug: 'sat-additional-topics',
      name: 'Additional Topics in Math',
      order: 4,
      courseId: sat.id
    }
  })

  // Topic 1: Geometry - Lines, Angles, and Triangles
  const geometry = await prisma.topic.upsert({
    where: { slug: 'sat-geometry-basics' },
    update: {},
    create: {
      slug: 'sat-geometry-basics',
      title: 'Geometry: Lines, Angles, and Triangles',
      description: 'Essential geometry concepts including angles, triangles, and geometric relationships',
      order: 1,
      categoryId: additionalMath.id,
      isPremium: false,
      textContent: `
# Geometry: Lines, Angles, and Triangles (SAT)

## Angles

### Types of Angles
- **Acute:** $< 90°$
- **Right:** $= 90°$
- **Obtuse:** $> 90°$ and $< 180°$
- **Straight:** $= 180°$
- **Reflex:** $> 180°$

### Angle Relationships

**Complementary Angles:** Sum to $90°$
$$\\text{If } \\angle A + \\angle B = 90°$$

**Supplementary Angles:** Sum to $180°$
$$\\text{If } \\angle A + \\angle B = 180°$$

**Vertical Angles:** Opposite angles when lines intersect (EQUAL)

**Linear Pair:** Adjacent angles on a straight line (sum to $180°$)

## Parallel Lines and Transversals

When a line crosses two parallel lines:

**Equal angles:**
- **Corresponding angles** (same position)
- **Alternate interior angles** (inside, opposite sides)
- **Alternate exterior angles** (outside, opposite sides)

**Supplementary angles:**
- **Consecutive interior angles** (same side interior)

## Triangles

### Triangle Angle Sum
**All triangles: angles sum to $180°$**

$$\\angle A + \\angle B + \\angle C = 180°$$

### Types of Triangles

**By angles:**
- **Acute:** All angles $< 90°$
- **Right:** One angle $= 90°$
- **Obtuse:** One angle $> 90°$

**By sides:**
- **Equilateral:** All sides equal, all angles $60°$
- **Isosceles:** Two sides equal, two angles equal
- **Scalene:** No sides equal

### Triangle Inequality
**The sum of any two sides must be greater than the third side**

If sides are $a$, $b$, $c$:
$$a + b > c$$
$$a + c > b$$
$$b + c > a$$

### Pythagorean Theorem
**For right triangles only:**
$$a^2 + b^2 = c^2$$

Where $c$ is the hypotenuse (longest side, opposite right angle)

### Common Pythagorean Triples
Memorize these for speed:
- **3-4-5** (and multiples: 6-8-10, 9-12-15)
- **5-12-13** (and multiples: 10-24-26)
- **8-15-17**
- **7-24-25**

### Special Right Triangles

**45-45-90 Triangle:**
- Sides in ratio $x : x : x\\sqrt{2}$
- If legs are 1, hypotenuse is $\\sqrt{2}$
- If hypotenuse is $s$, legs are $\\frac{s}{\\sqrt{2}} = \\frac{s\\sqrt{2}}{2}$

**30-60-90 Triangle:**
- Sides in ratio $x : x\\sqrt{3} : 2x$
- Opposite $30°$: shortest side ($x$)
- Opposite $60°$: middle side ($x\\sqrt{3}$)
- Opposite $90°$: hypotenuse ($2x$)

### Triangle Area

**Standard formula:**
$$A = \\frac{1}{2}bh$$

Where $b$ = base, $h$ = height (perpendicular to base)

**For right triangles:**
$$A = \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$$

### Exterior Angle Theorem
**An exterior angle of a triangle equals the sum of the two remote interior angles**

## Similar Triangles

**Definition:** Same shape, different size (all corresponding angles equal)

**Properties:**
- Corresponding sides are proportional
- Ratio of areas = (ratio of sides)²

**Example:**
If triangles are similar with ratio 2:3, then:
- Sides: $2:3$
- Perimeters: $2:3$
- Areas: $4:9$ (ratio squared!)

## SAT Geometry Strategies

### Draw and Label
**Always draw the figure if not provided!**

### Look for Special Triangles
**45-45-90 and 30-60-90 appear frequently**

### Use Pythagorean Theorem
**Check if you can create right triangles**

### Mark Equal Angles and Sides
**Visual marking helps spot relationships**

### Check for Similar Triangles
**AA (two angles equal) proves similarity**

## Common SAT Traps

### Trap 1: Assuming Figures Are Drawn to Scale
**SAT says "figure not drawn to scale" - use given info only!**

### Trap 2: Forgetting Triangle Angle Sum
**Always = $180°$, even if triangle looks weird**

### Trap 3: Mixing Up Special Triangles
**30-60-90 vs 45-45-90 - check carefully!**

### Trap 4: Using Wrong Pythagorean Triple
**Verify: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ ✓**

### Trap 5: Exterior Angle Confusion
**Exterior angle = sum of TWO remote interior angles**

## SAT Tips

- **Memorize special right triangles:** 30-60-90 and 45-45-90
- **Know Pythagorean triples:** 3-4-5, 5-12-13, 8-15-17
- **Triangle angles always sum to $180°$**
- **Vertical angles are equal**
- **Draw the figure** if not given
- **Label what you know** on the diagram
- **Look for parallel lines** - lots of equal angles!
- **Similar triangles:** Corresponding sides are proportional
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: geometry.id,
        order: 1,
        difficulty: 'EASY',
        question: 'In a triangle, two angles measure $45°$ and $70°$. What is the measure of the third angle?',
        solution: `
**Solution:**

Triangle angle sum: All angles add to $180°$

$$45° + 70° + x = 180°$$
$$115° + x = 180°$$
$$x = 65°$$

**Answer:** $65°$

**SAT Tip:** Triangle angles ALWAYS sum to $180°$ - use this constantly!
`
      },
      {
        topicId: geometry.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'In a right triangle, one leg is 5 and the hypotenuse is 13. What is the length of the other leg?',
        solution: `
**Solution:**

Use Pythagorean theorem: $a^2 + b^2 = c^2$

$$5^2 + b^2 = 13^2$$
$$25 + b^2 = 169$$
$$b^2 = 144$$
$$b = 12$$

**Answer:** $12$

**Recognition:** This is the **5-12-13 Pythagorean triple**!

**SAT Tip:** Knowing common triples (3-4-5, 5-12-13, 8-15-17) saves time!
`
      },
      {
        topicId: geometry.id,
        order: 3,
        difficulty: 'HARD',
        question: 'In a 30-60-90 triangle, the side opposite the $30°$ angle is 6. What is the length of the hypotenuse?',
        solution: `
**Solution:**

**30-60-90 ratio:** $x : x\\sqrt{3} : 2x$
- Opposite $30°$: $x$ (shortest)
- Opposite $60°$: $x\\sqrt{3}$
- Opposite $90°$ (hypotenuse): $2x$

Given: Side opposite $30°$ is 6
$$x = 6$$

Hypotenuse:
$$2x = 2(6) = 12$$

**Answer:** $12$

**SAT Tip:** Memorize 30-60-90 ratios - they appear frequently!
Side opposite 30° is half the hypotenuse!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: geometry.id,
        front: 'What is the ratio of sides in a 30-60-90 triangle?',
        back: 'x : x√3 : 2x (opposite 30°, opposite 60°, hypotenuse)'
      },
      {
        topicId: geometry.id,
        front: 'What is the ratio of sides in a 45-45-90 triangle?',
        back: 'x : x : x√2 (leg, leg, hypotenuse)'
      },
      {
        topicId: geometry.id,
        front: 'What are the three most common Pythagorean triples?',
        back: '3-4-5, 5-12-13, and 8-15-17 (and their multiples)'
      }
    ]
  })

  console.log('✓ Created topic: Geometry - Lines, Angles, and Triangles (3 examples, 3 flashcards)')

  // Topic 2: Circles and Arc Measures
  const circles = await prisma.topic.upsert({
    where: { slug: 'sat-circles' },
    update: {},
    create: {
      slug: 'sat-circles',
      title: 'Circles and Arc Measures',
      description: 'Circle properties, equations, arc length, and sector area',
      order: 2,
      categoryId: additionalMath.id,
      isPremium: false,
      textContent: `
# Circles and Arc Measures (SAT)

## Circle Basics

### Key Components
- **Center:** Point equidistant from all points on circle
- **Radius ($r$):** Distance from center to any point on circle
- **Diameter ($d$):** Distance across circle through center ($d = 2r$)
- **Chord:** Line segment connecting two points on circle
- **Tangent:** Line touching circle at exactly one point

### Circumference (Perimeter)
$$C = 2\\pi r = \\pi d$$

**Example:** If $r = 5$, then $C = 2\\pi(5) = 10\\pi$

### Area
$$A = \\pi r^2$$

**Example:** If $r = 3$, then $A = \\pi(3)^2 = 9\\pi$

## Circle Equations

### Standard Form
$$(x - h)^2 + (y - k)^2 = r^2$$

- Center: $(h, k)$
- Radius: $r$

**Example:** $(x - 2)^2 + (y + 3)^2 = 25$
- Center: $(2, -3)$
- Radius: $\\sqrt{25} = 5$

### Finding Center and Radius
Given equation, identify $h$, $k$, and $r$

**Watch out for signs!**
- $(x - 2)$ means $h = +2$
- $(y + 3)$ means $k = -3$

## Arcs and Sectors

### Arc Length
**Fraction of circumference**

$$\\text{Arc length} = \\frac{\\theta}{360°} \\times 2\\pi r$$

Where $\\theta$ is the central angle in degrees

**Example:** $r = 6$, $\\theta = 60°$
$$\\text{Arc length} = \\frac{60}{360} \\times 2\\pi(6) = \\frac{1}{6} \\times 12\\pi = 2\\pi$$

### Sector Area
**Fraction of circle area**

$$\\text{Sector area} = \\frac{\\theta}{360°} \\times \\pi r^2$$

**Example:** $r = 6$, $\\theta = 60°$
$$\\text{Sector area} = \\frac{60}{360} \\times \\pi(6)^2 = \\frac{1}{6} \\times 36\\pi = 6\\pi$$

## Angles in Circles

### Central Angle
**Vertex at center of circle**
- Measure = arc it intercepts

### Inscribed Angle
**Vertex on circle**
- Measure = **half** the arc it intercepts

**Inscribed Angle Theorem:**
$$\\text{Inscribed angle} = \\frac{1}{2} \\times \\text{central angle}$$

### Angle in Semicircle
**Any angle inscribed in a semicircle is a right angle ($90°$)**

## Tangent Lines

### Properties:
1. **Tangent ⊥ radius** at point of tangency
2. **Two tangents from external point** have equal length

### Power of a Point
**For tangent from external point:**

If tangent has length $t$ and point is distance $d$ from center with radius $r$:
$$t^2 = d^2 - r^2$$

(This is Pythagorean theorem!)

## Circle Problems on SAT

### Type 1: Find Area or Circumference
Given radius or diameter, apply formulas

### Type 2: Arc Length and Sector Area
Use fraction of circle based on angle

### Type 3: Equation of Circle
Identify center and radius from standard form

### Type 4: Inscribed Angles
Remember: inscribed angle = ½ central angle

### Type 5: Tangent Lines
Use perpendicularity and Pythagorean theorem

## SAT Strategies

### Leave in Terms of π
**Unless told to approximate, leave π in answer**

Example: Area = $25\\pi$ (not 78.5)

### Check Units
**Radius vs diameter - easy to confuse!**

### Use Fractions for Arcs
**Arc = fraction × whole circle**

$\\frac{60°}{360°} = \\frac{1}{6}$ of circle

### Draw Radii
**Creates right triangles with tangents!**

### Memorize Formulas
- Circumference: $C = 2\\pi r$
- Area: $A = \\pi r^2$
- Standard form: $(x-h)^2 + (y-k)^2 = r^2$

## Common SAT Traps

### Trap 1: Radius vs Diameter
**Area given diameter 10:**
- Wrong: $A = \\pi(10)^2 = 100\\pi$ ❌
- Right: $r = 5$, so $A = \\pi(5)^2 = 25\\pi$ ✓

### Trap 2: Sign Errors in Equation
**$(x + 3)^2$ means center is at $x = -3$ (not $+3$)**

### Trap 3: Central vs Inscribed Angle
**Inscribed = ½ central**

### Trap 4: Forgetting to Square Radius
**Area = $\\pi r^2$ not $\\pi r$**

### Trap 5: Arc vs Sector
**Arc length** = distance along edge
**Sector area** = area of "pizza slice"

## SAT Tips

- **Circumference:** $2\\pi r$ or $\\pi d$
- **Area:** $\\pi r^2$ (square the radius!)
- **Arc length:** Fraction of circumference
- **Sector area:** Fraction of total area
- **Inscribed angle** = ½ central angle
- **Tangent ⊥ radius** at point of contact
- **Leave answers in terms of $\\pi$** unless told otherwise
- **Standard form:** $(x-h)^2 + (y-k)^2 = r^2$ with center $(h,k)$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: circles.id,
        order: 1,
        difficulty: 'EASY',
        question: 'A circle has a diameter of 12. What is its area?',
        solution: `
**Solution:**

**Given:** Diameter = 12
**Find radius:** $r = \\frac{d}{2} = \\frac{12}{2} = 6$

**Area formula:** $A = \\pi r^2$
$$A = \\pi(6)^2 = 36\\pi$$

**Answer:** $36\\pi$

**SAT Tip:** Always convert diameter to radius first! Area uses radius, not diameter.
`
      },
      {
        topicId: circles.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'What is the center and radius of the circle $(x - 4)^2 + (y + 1)^2 = 9$?',
        solution: `
**Solution:**

**Standard form:** $(x - h)^2 + (y - k)^2 = r^2$

Compare to given equation:
$$(x - 4)^2 + (y - (-1))^2 = 3^2$$

**Center:** $(h, k) = (4, -1)$
**Radius:** $r = \\sqrt{9} = 3$

**Answer:** Center: $(4, -1)$, Radius: $3$

**SAT Tip:** Watch the signs! $(y + 1)$ means $k = -1$, not $+1$
`
      },
      {
        topicId: circles.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A circle has radius 9. A sector of this circle has a central angle of $40°$. What is the area of the sector?',
        solution: `
**Solution:**

**Sector area** = (fraction of circle) × (total area)

**Fraction:** $\\frac{40°}{360°} = \\frac{40}{360} = \\frac{1}{9}$

**Total area:** $A = \\pi r^2 = \\pi(9)^2 = 81\\pi$

**Sector area:**
$$\\frac{1}{9} \\times 81\\pi = 9\\pi$$

**Answer:** $9\\pi$

**SAT Tip:** Sector = "pizza slice." Find what fraction of the whole circle it is!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: circles.id,
        front: 'What are the formulas for circumference and area of a circle?',
        back: 'Circumference: C = 2πr = πd; Area: A = πr²'
      },
      {
        topicId: circles.id,
        front: 'What is the relationship between an inscribed angle and the central angle?',
        back: 'Inscribed angle = ½ × central angle (when they intercept the same arc)'
      },
      {
        topicId: circles.id,
        front: 'In the circle equation (x-h)²+(y-k)²=r², what do h, k, and r represent?',
        back: 'Center: (h, k), Radius: r (watch signs: (x+3) means h=-3!)'
      }
    ]
  })

  console.log('✓ Created topic: Circles and Arc Measures (3 examples, 3 flashcards)')

  // Topic 3: Complex Numbers (SAT occasionally includes these)
  const complexNumbers = await prisma.topic.upsert({
    where: { slug: 'sat-complex-numbers' },
    update: {},
    create: {
      slug: 'sat-complex-numbers',
      title: 'Complex Numbers',
      description: 'Operations with imaginary and complex numbers',
      order: 3,
      categoryId: additionalMath.id,
      isPremium: false,
      textContent: `
# Complex Numbers (SAT)

## Imaginary Unit

### Definition of $i$
$$i = \\sqrt{-1}$$
$$i^2 = -1$$

### Powers of $i$
**Pattern repeats every 4:**

$$i^1 = i$$
$$i^2 = -1$$
$$i^3 = i^2 \\cdot i = -1 \\cdot i = -i$$
$$i^4 = i^2 \\cdot i^2 = (-1)(-1) = 1$$
$$i^5 = i^4 \\cdot i = 1 \\cdot i = i$$ (pattern repeats)

**To find $i^n$:** Divide $n$ by 4, use remainder
- Remainder 0 → $i^n = 1$
- Remainder 1 → $i^n = i$
- Remainder 2 → $i^n = -1$
- Remainder 3 → $i^n = -i$

## Complex Numbers

### Standard Form
$$a + bi$$

Where:
- $a$ = real part
- $b$ = imaginary part (coefficient of $i$)

**Examples:**
- $3 + 4i$ → real: 3, imaginary: 4
- $5 - 2i$ → real: 5, imaginary: -2
- $7i$ → real: 0, imaginary: 7
- $-3$ → real: -3, imaginary: 0

## Operations with Complex Numbers

### Addition and Subtraction
**Combine real parts and imaginary parts separately**

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

**Example:**
$$(3 + 2i) + (1 - 4i) = 4 - 2i$$

$$(5 + 3i) - (2 + i) = 3 + 2i$$

### Multiplication
**Use distributive property (FOIL)**

Remember: $i^2 = -1$

$$(a + bi)(c + di) = ac + adi + bci + bdi^2$$
$$= ac + (ad + bc)i + bd(-1)$$
$$= (ac - bd) + (ad + bc)i$$

**Example:**
$$(2 + 3i)(1 + 4i)$$
$$= 2 + 8i + 3i + 12i^2$$
$$= 2 + 11i + 12(-1)$$
$$= 2 + 11i - 12$$
$$= -10 + 11i$$

### Division
**Multiply by conjugate to eliminate $i$ from denominator**

**Conjugate:** Change sign of imaginary part
- Conjugate of $a + bi$ is $a - bi$
- Conjugate of $a - bi$ is $a + bi$

**Key property:** $(a + bi)(a - bi) = a^2 + b^2$ (real number!)

**Example:**
$$\\frac{3 + 2i}{1 - i}$$

Multiply by conjugate of denominator:
$$\\frac{3 + 2i}{1 - i} \\cdot \\frac{1 + i}{1 + i}$$

$$= \\frac{(3 + 2i)(1 + i)}{(1 - i)(1 + i)}$$

Numerator: $3 + 3i + 2i + 2i^2 = 3 + 5i - 2 = 1 + 5i$

Denominator: $1 - i^2 = 1 - (-1) = 2$

$$= \\frac{1 + 5i}{2} = \\frac{1}{2} + \\frac{5}{2}i$$

## Simplifying Square Roots of Negatives

$$\\sqrt{-a} = i\\sqrt{a}$$

**Examples:**
$$\\sqrt{-9} = i\\sqrt{9} = 3i$$
$$\\sqrt{-16} = 4i$$
$$\\sqrt{-5} = i\\sqrt{5}$$

## Conjugate Pairs

**Property:** If $a + bi$ is a solution to polynomial equation with real coefficients, then $a - bi$ is also a solution

**Example:**
If $3 + 2i$ is a solution, then $3 - 2i$ must also be a solution

## SAT Complex Number Questions

### Type 1: Simplify Powers of $i$
Find $i^{27}$

Divide: $27 ÷ 4 = 6$ remainder $3$
Answer: $i^3 = -i$

### Type 2: Add/Subtract Complex Numbers
$(5 + 3i) - (2 - i) = ?$

Combine like terms: $3 + 4i$

### Type 3: Multiply Complex Numbers
$(2 + i)(3 - i) = ?$

FOIL and simplify

### Type 4: Simplify $\\sqrt{-n}$
$\\sqrt{-25} = ?$

Answer: $5i$

## SAT Strategies

### Remember $i^2 = -1$
**Always substitute when you see $i^2$**

### Pattern of Powers
**$i, -1, -i, 1$ repeats**

### Combine Like Terms
**Real with real, imaginary with imaginary**

### Rationalize Denominators
**Multiply by conjugate**

## Common SAT Traps

### Trap 1: Forgetting $i^2 = -1$
$$3i^2 = 3(-1) = -3$$ (not $3i^2$ left alone!)

### Trap 2: Sign Errors with Conjugates
**Conjugate of $3 - 4i$ is $3 + 4i$ (flip the sign!)**

### Trap 3: Not Simplifying Completely
$$(1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$$
(Don't stop at $1 + 2i + i^2$!)

### Trap 4: Dividing Incorrectly
**Must multiply by conjugate, not just cross-multiply**

## SAT Tips

- **$i^2 = -1$** (most important rule!)
- **Powers of $i$ repeat:** $i, -1, -i, 1, i, -1, -i, 1...$
- **Add/subtract:** Combine real and imaginary parts separately
- **Multiply:** FOIL and replace $i^2$ with $-1$
- **Divide:** Multiply by conjugate to eliminate $i$ from denominator
- **$\\sqrt{-a} = i\\sqrt{a}$**
- **Conjugate:** Flip the sign of imaginary part
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: complexNumbers.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What is $i^{18}$?',
        solution: `
**Solution:**

**Powers of $i$ repeat every 4:** $i, -1, -i, 1$

Divide exponent by 4:
$$18 ÷ 4 = 4 \\text{ remainder } 2$$

**Remainder 2** → $i^2 = -1$

**Answer:** $-1$

**SAT Tip:** Find remainder when dividing by 4:
- Remainder 0 → 1
- Remainder 1 → $i$
- Remainder 2 → $-1$
- Remainder 3 → $-i$
`
      },
      {
        topicId: complexNumbers.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Simplify: $(3 + 2i) + (1 - 5i)$',
        solution: `
**Solution:**

**Combine real parts:** $3 + 1 = 4$
**Combine imaginary parts:** $2i - 5i = -3i$

**Answer:** $4 - 3i$

**SAT Tip:** Treat real and imaginary parts separately, like combining like terms!
`
      },
      {
        topicId: complexNumbers.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Simplify: $(2 + i)(3 - 2i)$',
        solution: `
**Solution:**

**FOIL:**
$$F: 2 \\times 3 = 6$$
$$O: 2 \\times (-2i) = -4i$$
$$I: i \\times 3 = 3i$$
$$L: i \\times (-2i) = -2i^2$$

Combine:
$$6 - 4i + 3i - 2i^2$$

**Substitute $i^2 = -1$:**
$$6 - i - 2(-1)$$
$$= 6 - i + 2$$
$$= 8 - i$$

**Answer:** $8 - i$

**SAT Tip:** Don't forget to replace $i^2$ with $-1$ at the end!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: complexNumbers.id,
        front: 'What is i² equal to?',
        back: 'i² = -1 (this is the fundamental property of the imaginary unit)'
      },
      {
        topicId: complexNumbers.id,
        front: 'What is the pattern of powers of i?',
        back: 'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then repeats (cycle of 4)'
      },
      {
        topicId: complexNumbers.id,
        front: 'What is the conjugate of a + bi?',
        back: 'a - bi (flip the sign of the imaginary part)'
      }
    ]
  })

  console.log('✓ Created topic: Complex Numbers (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created comprehensive SAT Additional Topics in Math!')
  console.log('   New category: Additional Topics in Math')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
