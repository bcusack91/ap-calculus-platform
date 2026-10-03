export const actPlaneGeomPart2Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-pg2-intro',
      type: 'text' as const,
      content: `
# 🔺 Triangle Properties

**Part 2 of 7 — Angles, Sides, and Right Triangles**

Triangles are the most tested shape in ACT geometry, because nearly every other figure (rectangles, trapezoids, polygons, even circles) gets solved by finding a triangle inside it.

## Angle Rules

**1. Angle sum.** The three interior angles of every triangle add to **180°**.

**Ratio method:** If the angles are in the ratio $2 : 3 : 7$, there are $2 + 3 + 7 = 12$ equal parts, so each part is $180 \\div 12 = 15°$ and the angles are 30°, 45°, and 105°.

**2. Exterior angle theorem.** Extend one side of a triangle. The **exterior angle** formed equals the **sum of the two remote (non-adjacent) interior angles**.

$$\\text{exterior angle} = \\text{remote angle 1} + \\text{remote angle 2}$$

Why: the exterior angle and the adjacent interior angle form a straight line (180°), and so do the adjacent angle plus the other two. In triangle ABC with $\\angle A = 50°$ and $\\angle B = 60°$, the exterior angle at C is $50 + 60 = 110°$, and the interior angle at C is $180 - 110 = 70°$. The exterior angle is **not** equal to either remote angle alone.

**3. Isosceles triangles.** If two sides are equal, the angles **opposite** those sides (the base angles) are equal, and the reverse is also true. The third angle is the vertex angle.

- Vertex angle 40° → base angles are each $(180 - 40) \\div 2 = 70°$.
- Base angle 40° → vertex angle is $180 - 2(40) = 100°$.

Read carefully which angle you are given; both versions appear on the ACT.

**4. Equilateral triangles.** All three sides equal, so all three angles are **60°**.

## Side Rules

**Triangle inequality.** Each side must be **shorter than the sum of the other two**. For two sides $a$ and $b$, the third side $c$ must satisfy

$$|a - b| < c < a + b$$

With sides 7 and 12, the third side is between 5 and 19, **not including** 5 or 19 (those lengths would flatten the triangle into a line segment).

**Side-angle order.** The **longest side is opposite the largest angle**, and the shortest side is opposite the smallest angle.

## Right Triangles

**Pythagorean theorem** (right triangles only): $a^2 + b^2 = c^2$, where $c$ is the **hypotenuse**, the side opposite the right angle and always the longest side.

- Finding the hypotenuse: **add** the squares. Legs 6 and 8 → $c = \\sqrt{36 + 64} = 10$.
- Finding a leg: **subtract** the squares. Hypotenuse 17, leg 8 → $\\sqrt{289 - 64} = 15$.

**Pythagorean triples** save time. Know these and their multiples:

| Triple | Common multiples |
|--------|------------------|
| 3-4-5 | 6-8-10, 9-12-15, 15-20-25 |
| 5-12-13 | 10-24-26 |
| 8-15-17 | 16-30-34 |
| 7-24-25 | 14-48-50 |

## Special Right Triangles

| Triangle | Side ratio | Opposite each angle |
|----------|-----------|---------------------|
| 45-45-90 (isosceles right) | $x : x : x\\sqrt{2}$ | legs opposite 45°, hypotenuse opposite 90° |
| 30-60-90 | $x : x\\sqrt{3} : 2x$ | short leg opposite 30°, long leg opposite 60°, hypotenuse opposite 90° |

- 45-45-90: leg → hypotenuse, multiply by $\\sqrt{2}$; hypotenuse → leg, divide by $\\sqrt{2}$ (hypotenuse 10 → leg $\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$).
- 30-60-90: always find the **short leg** first. Hypotenuse 14 → short leg 7 → long leg $7\\sqrt{3}$.

## The Equilateral Triangle Shortcut

An altitude of an equilateral triangle with side $s$ bisects the base and the top angle, cutting the triangle into **two 30-60-90 triangles** with hypotenuse $s$ and short leg $\\frac{s}{2}$. So:

$$h = \\frac{s\\sqrt{3}}{2} \\qquad \\text{Area} = \\frac{1}{2} \\cdot s \\cdot \\frac{s\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{4}s^2$$

Side 8 → height $4\\sqrt{3}$, area $16\\sqrt{3}$. If you forget the formula, draw the altitude and rebuild it from the 30-60-90 ratio.
      `
    },
    {
      id: 'act-pg2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Isosceles triangle and an exterior angle</b></summary>

In isosceles triangle ABC, AB = AC and the vertex angle A measures 40°. Side BC is extended past C to point D. Find angle ACD.

1. Base angles B and C are equal: $(180 - 40) \\div 2 = 70°$ each.
2. Angle ACD is the exterior angle at C, so it equals the two remote angles: $40 + 70 = 110°$.
3. Check with the straight line: $180 - 70 = 110°$. ✓
</details>

<details>
<summary><b>Example 2: Area of an equilateral triangle</b></summary>

Find the height and area of an equilateral triangle with side 10.

1. The altitude makes a 30-60-90 triangle with hypotenuse 10 and short leg 5.
2. Height = long leg $= 5\\sqrt{3}$.
3. Area $= \\frac{1}{2}(10)(5\\sqrt{3}) = 25\\sqrt{3}$. Formula check: $\\frac{\\sqrt{3}}{4}(100) = 25\\sqrt{3}$. ✓
</details>

<details>
<summary><b>Example 3: A ladder problem with a triple</b></summary>

A 13-foot ladder reaches 12 feet up a vertical wall. How far is its foot from the wall?

1. The ladder is the hypotenuse (it is opposite the right angle between wall and ground).
2. Spot the 5-12-13 triple, or compute $\\sqrt{169 - 144} = \\sqrt{25} = 5$ feet.
</details>
      `
    },
    {
      id: 'act-pg2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Triangle Rules** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The two base angles of an isosceles triangle each measure 65°. What is the measure of the vertex angle?',
            options: ['57.5°', '50°', '115°', '130°'],
            correctAnswer: 1,
            explanation: `The angles sum to 180°, so the vertex angle is $180 - 65 - 65 = 50°$. The value 115° is $180 - 65$, which subtracts only one base angle, and 130° is the two base angles combined. The value 57.5° is $(180 - 65) \\div 2$, the base angle you would get if 65° were the vertex angle instead.`
          },
          {
            question: 'In triangle ABC, the exterior angle at C measures 130°. Angle A measures $(2x)°$ and angle B measures $(3x)°$. What is the measure of angle B?',
            options: ['50°', '52°', '78°', '108°'],
            correctAnswer: 2,
            explanation: `The exterior angle equals the sum of the two remote interior angles, so $2x + 3x = 130$, giving $x = 26$ and angle B $= 78°$. The value 52° is angle A, and 50° is the interior angle at C ($180 - 130$). Setting $2x + 3x = 180$ (as if A and B were the whole triangle) gives $x = 36$ and 108°.`
          },
          {
            question: 'Two sides of a triangle measure 5 and 9. How many different integer lengths are possible for the third side?',
            options: ['8', '9', '10', '11'],
            correctAnswer: 1,
            explanation: `The third side must be greater than $9 - 5 = 4$ and less than $9 + 5 = 14$, so the integers 5 through 13 work: 9 lengths. Counting 4 and 14 as well gives 11, but those lengths would make a flat segment, not a triangle. Counting one endpoint gives 10, and computing $13 - 5 = 8$ without adding 1 undercounts by one.`
          },
          {
            question: 'In triangle ABC, AB = 7, BC = 10, and AC = 12. Which angle of the triangle has the greatest measure?',
            options: ['Angle A', 'Angle B', 'Angle C', 'All three are equal'],
            correctAnswer: 1,
            explanation: `The largest angle is opposite the longest side. AC = 12 is longest, and the angle opposite AC is angle B. Angle A is opposite BC (10), and angle C is opposite the shortest side AB (7), so C is the smallest angle. The angles cannot all be equal, because equal angles require equal sides.`
          }
        ]
      }
    },
    {
      id: 'act-pg2-input1',
      type: 'input-boxes' as const,
      content: `
**Right Triangles and Isosceles Triangles** 🧮

1) A right triangle has legs 9 and 12. Type the length of the hypotenuse.

2) In a 30-60-90 triangle, the side opposite the 30° angle is 6. Type the length of the hypotenuse.

3) An isosceles triangle has base angles of 70°. Type the measure of the vertex angle in degrees.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '12', '40'],
        hint1: '9-12-15 is the 3-4-5 triple times 3.',
        hint2: 'In a 30-60-90 triangle the hypotenuse is twice the short leg.',
        hint3: 'Subtract both base angles from 180°.',
        explanation: '1) $\\sqrt{81 + 144} = \\sqrt{225} = 15$. 2) Hypotenuse $= 2 \\times 6 = 12$. 3) $180 - 70 - 70 = 40$.'
      }
    },
    {
      id: 'act-pg2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | The angles of a triangle are in the ratio $1 : 2 : 3$. Find the largest angle. | 6 parts of 30°, so 90° |
| 2 | A 45-45-90 triangle has legs of 7. Find the hypotenuse. | $7\\sqrt{2}$ |
| 3 | A 30-60-90 triangle has a long leg of $9\\sqrt{3}$. Find the hypotenuse. | short leg 9, hypotenuse 18 |
| 4 | Find the area of an equilateral triangle with side 6. | $\\frac{\\sqrt{3}}{4}(36) = 9\\sqrt{3}$ |
| 5 | Can 4, 6, and 11 be the sides of a triangle? | No: $4 + 6 = 10 < 11$ |

**ACT Tip:** When the answer choices contain $\\sqrt{2}$ or $\\sqrt{3}$, the problem almost certainly hides a 45-45-90 or 30-60-90 triangle. Look for a 45°, 30°, or 60° angle, a square's diagonal, or an equilateral triangle's altitude.
      `
    },
    {
      id: 'act-pg2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A right triangle has a hypotenuse of 34 and one leg of 16. What is the length of the other leg?',
            options: ['$3\\sqrt{2}$', '$5\\sqrt{2}$', '30', '$2\\sqrt{353}$'],
            correctAnswer: 2,
            explanation: `Subtract the squares to find a leg: $\\sqrt{34^2 - 16^2} = \\sqrt{1156 - 256} = \\sqrt{900} = 30$, the 8-15-17 triple doubled. Adding the squares gives $\\sqrt{1412} = 2\\sqrt{353}$, which treats 34 as a leg. Subtracting or adding the sides before taking the root gives $\\sqrt{34 - 16} = 3\\sqrt{2}$ or $\\sqrt{34 + 16} = 5\\sqrt{2}$; the theorem squares each side first.`
          },
          {
            question: 'An isosceles right triangle has a hypotenuse of length 12. What is the length of each leg?',
            options: ['$6\\sqrt{2}$', '$12\\sqrt{2}$', '6', '$6\\sqrt{3}$'],
            correctAnswer: 0,
            explanation: `An isosceles right triangle is a 45-45-90 triangle, so each leg is the hypotenuse divided by $\\sqrt{2}$: $\\frac{12}{\\sqrt{2}} = 6\\sqrt{2}$. Multiplying by $\\sqrt{2}$ gives $12\\sqrt{2}$, which would be longer than the hypotenuse. A leg of 6 halves the hypotenuse, which is the 30-60-90 rule for the short leg, and $6\\sqrt{3}$ is the 30-60-90 long leg.`
          },
          {
            question: 'An equilateral triangle has an area of $36\\sqrt{3}$ square units. What is the length of each side?',
            options: ['$6\\sqrt{2}$', '$6\\sqrt{3}$', '144', '12'],
            correctAnswer: 3,
            explanation: `Set $\\frac{\\sqrt{3}}{4}s^2 = 36\\sqrt{3}$. Then $s^2 = 144$ and $s = 12$. The value 144 is $s^2$, not the side. Using $\\frac{\\sqrt{3}}{2}$, the height coefficient, in place of $\\frac{\\sqrt{3}}{4}$ gives $s^2 = 72$ and $6\\sqrt{2}$. The value $6\\sqrt{3}$ is the height of an equilateral triangle with side 12, not its side.`
          },
          {
            question: 'In triangle ABC, AB = AC and angle A measures 44°. Side BC is extended beyond C to point D. What is the measure of angle ACD?',
            options: ['68°', '92°', '112°', '88°'],
            correctAnswer: 2,
            explanation: `Since AB = AC, the base angles B and C are equal: $(180 - 44) \\div 2 = 68°$ each. Angle ACD is the exterior angle at C, so it equals $44 + 68 = 112°$ (or $180 - 68$). The value 68° is the interior angle at C. Treating 44° as a base angle would make the vertex angle 92°, but the 44° angle is at A, between the two equal sides. Doubling angle A gives 88°, but the exterior angle is the sum of A and B, not twice A.`
          }
        ]
      }
    },
    {
      id: 'act-pg2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Triangle angles sum to **180°**; for a ratio, divide 180 by the total number of parts.
- **Exterior angle = sum of the two remote interior angles** (and exterior + adjacent interior = 180°).
- **Isosceles:** equal sides ↔ equal base angles opposite them. Check whether you were given the vertex angle or a base angle.
- **Triangle inequality:** $|a - b| < c < a + b$, endpoints excluded. Longest side is opposite the largest angle.
- **Pythagorean theorem** for right triangles only; add squares for the hypotenuse, subtract for a leg. Know 3-4-5, 5-12-13, 8-15-17, 7-24-25 and their multiples.
- **45-45-90:** $x, x, x\\sqrt{2}$. **30-60-90:** $x, x\\sqrt{3}, 2x$; find the short leg first.
- **Equilateral triangle:** the altitude makes two 30-60-90 triangles; $h = \\frac{s\\sqrt{3}}{2}$ and Area $= \\frac{\\sqrt{3}}{4}s^2$.
      `
    }
  ]
}
