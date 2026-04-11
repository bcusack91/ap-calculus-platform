export const precalcLawSinesCosinesPart1Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# ⚖️ Law of Sines

**Part 1 of 7**

The Law of Sines lets us solve **oblique triangles** (no right angle) when we know an angle–side pair.

### The Law of Sines

For any triangle with sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$:

$$\\boxed{\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}}$$

Equivalently: $\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$

### When to Use It

| Known | Case Name | Law of Sines? |
|:------|:----------|:-------------|
| Two angles + one side (AAS or ASA) | Angle–Angle–Side | ✅ Yes |
| Two sides + angle opposite one (SSA) | Side–Side–Angle | ✅ Yes (watch for ambiguous case!) |
| Two sides + included angle (SAS) | Side–Angle–Side | ❌ Use Law of Cosines |
| Three sides (SSS) | Side-Side-Side | ❌ Use Law of Cosines |
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: AAS — Find a Missing Side

In $\\triangle ABC$: $A = 42°$, $B = 73°$, $a = 12$.

**Step 1:** Find $C$: $C = 180° - 42° - 73° = 65°$

**Step 2:** Use Law of Sines to find $b$:
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$$
$$\\frac{12}{\\sin 42°} = \\frac{b}{\\sin 73°}$$
$$b = \\frac{12 \\sin 73°}{\\sin 42°} = \\frac{12(0.9563)}{0.6691} \\approx 17.15$$

### Example 2: ASA — Find a Missing Side

In $\\triangle ABC$: $A = 50°$, $C = 60°$, $b = 20$.

$B = 180° - 50° - 60° = 70°$

$$\\frac{b}{\\sin B} = \\frac{a}{\\sin A} \\implies a = \\frac{20 \\sin 50°}{\\sin 70°} \\approx \\frac{20(0.766)}{0.940} \\approx 16.30$$

### Example 3: Finding an Angle

In $\\triangle ABC$: $a = 10$, $b = 15$, $A = 30°$.

$$\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\implies \\sin B = \\frac{15 \\sin 30°}{10} = \\frac{15(0.5)}{10} = 0.75$$
$$B = \\arcsin(0.75) \\approx 48.6°$$
      `
    },
    {
      id: 'p1-strategy',
      type: 'text' as const,
      content: `
## 🧠 Step-by-Step Strategy

### Solving AAS/ASA Triangles

1. **Find the third angle** using $A + B + C = 180°$
2. **Set up the proportion** using the known angle–side pair
3. **Cross-multiply and solve**

### Key Formula Rearrangements

To find side $b$: $b = \\frac{a \\sin B}{\\sin A}$

To find angle $B$: $\\sin B = \\frac{b \\sin A}{a}$, then $B = \\arcsin(\\ldots)$

### Triangle Area with Law of Sines

The area of any triangle can be found using:
$$\\boxed{\\text{Area} = \\frac{1}{2}ab\\sin C}$$

This formula uses two sides and their **included angle**.

**Example:** $a = 8$, $b = 11$, $C = 40°$

$$\\text{Area} = \\frac{1}{2}(8)(11)\\sin 40° = 44(0.6428) \\approx 28.3 \\text{ sq units}$$
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Law of Sines Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In $\\triangle ABC$, $A = 35°$, $B = 80°$, $a = 9$. What is $C$?',
            options: [
              '$55°$',
              '$65°$',
              '$75°$',
              '$45°$'
            ],
            correctAnswer: 1,
            explanation: '$C = 180° - 35° - 80° = 65°$.'
          },
          {
            question: 'Which case CANNOT be solved with the Law of Sines alone?',
            options: [
              'AAS',
              'ASA',
              'SAS',
              'SSA'
            ],
            correctAnswer: 2,
            explanation: 'SAS (two sides and included angle) requires the Law of Cosines because no angle–side pair is complete.'
          },
          {
            question: 'In $\\triangle ABC$, $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. If $a = 6$, $A = 30°$, $B = 45°$, then $b$ equals:',
            options: [
              '$6\\sqrt{2}$',
              '$3\\sqrt{2}$',
              '$6$',
              '$12$'
            ],
            correctAnswer: 0,
            explanation: '$b = \\frac{6\\sin 45°}{\\sin 30°} = \\frac{6 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 6\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Solve Triangles** 🧮

Round to the nearest integer.

**1)** $\\triangle ABC$: $A = 40°$, $B = 60°$, $a = 10$. Find $C$ in degrees. (e.g., if $A = 50°, B = 70°$, then $C = 180 - 50 - 70 = 60$)

**2)** Same triangle: find $b$ to nearest integer. Use $b = \\frac{a \\sin B}{\\sin A}$. (e.g., $\\frac{10 \\cdot \\sin 45°}{\\sin 30°} = \\frac{10(0.707)}{0.5} = 14$)

**3)** Area of triangle with $a = 10$, $b = 14$, included angle $= 50°$. Round to nearest integer. (e.g., Area $= \\frac{1}{2}(8)(10)\\sin 60° = 40(0.866) = 35$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['80', '13', '54'],
        hint1: '$C = 180° - 40° - 60° = 80°$.',
        hint2: '$b = \\frac{10 \\sin 60°}{\\sin 40°} = \\frac{10(0.866)}{0.643} \\approx 13.5 \\approx 13$.',
        hint3: 'Area $= \\frac{1}{2}(10)(14)\\sin 50° = 70(0.766) \\approx 53.6 \\approx 54$.',
        explanation: '1) $80°$. 2) $\\approx 13$. 3) $\\approx 54$ sq units.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Law of Sines relates',
            options: ['Sides to their opposite angles', 'Sides to their adjacent angles', 'All three sides to one angle', 'Angles to the perimeter']
          },
          {
            label: 'Given AAS information, the first step is usually',
            options: ['Find the third angle', 'Use Law of Cosines', 'Find the area', 'Check for the ambiguous case']
          },
          {
            label: 'The formula $\\text{Area} = \\frac{1}{2}ab\\sin C$ requires',
            options: ['Two sides and their included angle', 'Two sides and any angle', 'Three sides', 'One side and two angles']
          },
          {
            label: 'To find angle $B$ using Law of Sines, compute',
            options: ['$\\cos^{-1}(\\frac{b\\sin A}{a})$', '$\\sin^{-1}(\\frac{b\\sin A}{a})$', '$\\tan^{-1}(\\frac{b}{a})$', '$\\frac{a\\sin B}{b}$']
          }
        ],
        correctAnswers: ['Sides to their opposite angles', 'Find the third angle', 'Two sides and their included angle', '$\\sin^{-1}(\\frac{b\\sin A}{a})$'],
        hint1: 'Each ratio pairs a side with the sine of the angle across from it.',
        hint2: 'With two angles known, find the third via $A + B + C = 180°$.',
        hint3: '$C$ must be the angle between sides $a$ and $b$.',
        explanation: 'Law of Sines: side/sin(opposite angle). AAS → find third angle first. Area needs included angle. Find $B$ via $\\arcsin$.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In $\\triangle ABC$: $A = 30°$, $C = 90°$, $c = 20$. Find $a$.',
            options: [
              '$10$',
              '$10\\sqrt{3}$',
              '$20$',
              '$20\\sqrt{3}$'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{a}{\\sin 30°} = \\frac{20}{\\sin 90°}$. $a = 20 \\sin 30° = 20 \\cdot \\frac{1}{2} = 10$.'
          },
          {
            question: 'The area of $\\triangle ABC$ with $b = 7$, $c = 10$, $A = 90°$ is:',
            options: [
              '$35$',
              '$70$',
              '$17$',
              '$24.5$'
            ],
            correctAnswer: 0,
            explanation: 'Area $= \\frac{1}{2}(7)(10)\\sin 90° = \\frac{1}{2}(70)(1) = 35$.'
          }
        ]
      }
    }
  ]
};
