export const satGeometryPart2Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo2-intro',
      type: 'text' as const,
      content: `# Triangle Properties & Theorems

**Part 2 of 7 — Special Triangles, Similarity, Congruence**

### Special Right Triangles

The SAT provides these in the reference sheet, but memorizing them saves time:

**45-45-90 Triangle:**
- Legs: $x$, $x$
- Hypotenuse: $x\\sqrt{2}$

**30-60-90 Triangle:**
- Short leg: $x$ (opposite 30°)
- Long leg: $x\\sqrt{3}$ (opposite 60°)
- Hypotenuse: $2x$ (opposite 90°)

### Example

A 30-60-90 triangle has a hypotenuse of 10. Find the legs.

- Hypotenuse $= 2x = 10$ → $x = 5$
- Short leg $= 5$
- Long leg $= 5\\sqrt{3} \\approx 8.66$

### Triangle Inequality Theorem

For any triangle with sides $a$, $b$, $c$:
$$a + b > c$$

The sum of any two sides must exceed the third.

**Example:** Can a triangle have sides 3, 5, and 9?  
$3 + 5 = 8 < 9$ → **No!**

### Similar Triangles (AA Similarity)

If two angles of one triangle equal two angles of another, the triangles are **similar** (same shape, proportional sides).

$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$

### SAT Trap ⚠️

In 30-60-90 triangles, students often mix up which leg is which. Remember: the **shortest side** is opposite the **smallest angle** (30°).`
    },
    {
      id: 'geo2-quiz',
      type: 'multiple-choice' as const,
      content: '**Triangle Properties Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 45-45-90 triangle has a hypotenuse of $10\\sqrt{2}$. What is the length of each leg?',
            options: ['$10$', '$10\\sqrt{2}$', '$5\\sqrt{2}$', '$20$'],
            correctAnswer: 0,
            explanation: 'Hypotenuse $= x\\sqrt{2} = 10\\sqrt{2}$, so $x = 10$. Each leg is $10$.'
          },
          {
            question: 'Which set of three lengths CANNOT form a triangle?',
            options: ['$2, 3, 6$', '$3, 4, 5$', '$5, 5, 8$', '$7, 10, 12$'],
            correctAnswer: 0,
            explanation: 'Check: $2 + 3 = 5 < 6$. The sum of the two shorter sides must EXCEED the longest side. Since $5 < 6$, these cannot form a triangle.'
          },
          {
            question: 'Two similar triangles have a scale factor of $3:5$. If the perimeter of the smaller triangle is 24, what is the perimeter of the larger?',
            options: ['$40$', '$30$', '$36$', '$72$'],
            correctAnswer: 0,
            explanation: 'Perimeters of similar triangles are in the same ratio as their sides: $\\frac{24}{P} = \\frac{3}{5}$ → $P = \\frac{24 \\times 5}{3} = 40$.'
          }
        ]
      }
    },
    {
      id: 'geo2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Applying Triangle Properties

### Worked Example 1: Special Triangle → Area

| Step | Work |
|---|---|
| **Problem** | An equilateral triangle has side length 8. Find its area. |
| **Strategy** | Split into two 30-60-90 triangles by drawing the height. |
| **Find height** | Half-base $= 4$ (short leg). Height $= 4\\sqrt{3}$ (long leg of 30-60-90). |
| **Area** | $A = \\frac{1}{2}(8)(4\\sqrt{3}) = 16\\sqrt{3} \\approx 27.7$ |

> **SAT shortcut:** Area of equilateral triangle $= \\frac{s^2\\sqrt{3}}{4}$. Plug in: $\\frac{64\\sqrt{3}}{4} = 16\\sqrt{3}$ ✓

### Worked Example 2: Similar Triangles with Algebra

| Step | Work |
|---|---|
| **Problem** | △ABC ~ △DEF. In △ABC: $AB = 6$, $BC = 9$. In △DEF: $DE = 10$, $EF = ?$ |
| **Set up proportion** | $\\frac{AB}{DE} = \\frac{BC}{EF}$ → $\\frac{6}{10} = \\frac{9}{EF}$ |
| **Cross multiply** | $6 \\cdot EF = 90$ → $EF = 15$ |

### Pythagorean Triples to Memorize

| Triple | Multiples You'll See |
|---|---|
| $3, 4, 5$ | $6, 8, 10$; $9, 12, 15$; $15, 20, 25$ |
| $5, 12, 13$ | $10, 24, 26$ |
| $8, 15, 17$ | Less common but appears |
| $7, 24, 25$ | Rare on SAT |

Recognizing these saves you from using the Pythagorean theorem every time.

### Triangle Inequality: Finding the Range

If two sides are $5$ and $11$, the third side $x$ must satisfy:
$$11 - 5 < x < 11 + 5$$
$$6 < x < 16$$`
    },
    {
      id: 'geo2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Triangle Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 30-60-90 triangle has a long leg of $9\\sqrt{3}$. What is the hypotenuse?',
            options: ['$18$', '$9$', '$9\\sqrt{2}$', '$18\\sqrt{3}$'],
            correctAnswer: 0,
            explanation: 'Long leg $= x\\sqrt{3} = 9\\sqrt{3}$, so $x = 9$ (short leg). Hypotenuse $= 2x = 18$.'
          },
          {
            question: 'Two sides of a triangle are 7 and 13. Which CANNOT be the third side?',
            options: ['$20$', '$8$', '$10$', '$15$'],
            correctAnswer: 0,
            explanation: 'Third side must satisfy $13 - 7 < x < 13 + 7$, so $6 < x < 20$. Since $20$ is not strictly less than $20$, it cannot form a triangle.'
          },
          {
            question: 'Two similar triangles have corresponding sides in ratio $2:3$. If the area of the larger triangle is 54, what is the area of the smaller?',
            options: ['$24$', '$36$', '$18$', '$12$'],
            correctAnswer: 0,
            explanation: 'Area ratio $= $ (side ratio)$^2 = (2/3)^2 = 4/9$. Smaller area $= 54 \\times \\frac{4}{9} = 24$.'
          }
        ]
      }
    },
    {
      id: 'geo2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the Triangle Property** — Select the correct value for each scenario.',
      exercise: {
        dropdowns: [
          '45-45-90 triangle, leg = 7. Hypotenuse = [$7\\sqrt{2}$|14|$7\\sqrt{3}$|7]',
          '30-60-90 triangle, hypotenuse = 12. Short leg = [6|4|$6\\sqrt{3}$|$12\\sqrt{3}$]',
          'Sides 5 and 12, right angle between them. Hypotenuse = [13|17|$\\sqrt{119}$|10]',
          'Similar triangles, scale factor 1:4. Area ratio = [1:16|1:4|1:8|1:64]'
        ],
        correctAnswers: ['$7\\sqrt{2}$', '6', '13', '1:16'],
        hint1: 'For 45-45-90: hypotenuse = leg × $\\sqrt{2}$.',
        hint2: 'For 30-60-90: hypotenuse = 2 × short leg.',
        hint3: 'Area ratio = $(side ratio)^{2}$.',
        explanation: '45-45-90: hyp = $7\\sqrt{2}$. 30-60-90: short leg = 12/2 = 6. Pythagorean: $\\sqrt{25+144}$ = $\\sqrt{169}$ = 13 (a 5-12-13 triple). Area scales as the square of the side ratio: $(1/4)^{2}$ = 1/16.'
      }
    },
    {
      id: 'geo2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary: Triangle Properties

| Property | Key Facts |
|---|---|
| 45-45-90 | Legs $= x$, hyp $= x\\sqrt{2}$ |
| 30-60-90 | Short $= x$, long $= x\\sqrt{3}$, hyp $= 2x$ |
| Pythagorean theorem | $a^2 + b^2 = c^2$ (right triangles only) |
| Triangle inequality | Sum of two sides $>$ third side |
| Similar triangles | Equal angles → proportional sides |
| Area ratio (similar) | $= $ (side ratio)$^2$ |

### SAT Strategy
- **Spot Pythagorean triples** (3-4-5, 5-12-13) before computing.
- For special right triangles, identify which angle or side you're given first, then find $x$.
- In similar triangle problems, **match corresponding sides** carefully — order matters.

*Next: Area, perimeter, and quadrilateral properties →*`
    }
  ]
};