export const precalcLawSinesCosinesPart4Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🔄 Choosing the Right Law & Combined Problems

**Part 4 of 7**

Knowing when to use Law of Sines vs Law of Cosines is half the battle. This part helps you develop that judgment.

### Decision Guide

$$\\boxed{\\text{Do you have a complete angle–side pair (angle and its opposite side)?}}$$

| Answer | Case | Method |
|:-------|:-----|:-------|
| **Yes** + need another side/angle | AAS, ASA, SSA | Law of Sines |
| **No** + have SAS | Two sides + included angle | Law of Cosines (find side) |
| **No** + have SSS | Three sides | Law of Cosines (find angle) |

### Mixed Strategy

Many problems require **both laws**:
1. Start with Law of Cosines to find a missing side or angle
2. Switch to Law of Sines (which is easier) for the remaining parts
      `
    },
    {
      id: 'p4-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: SAS → Find All Parts

$a = 9$, $b = 12$, $C = 75°$.

**Step 1 (Law of Cosines):** Find $c$.
$$c^2 = 81 + 144 - 216\\cos 75° = 225 - 216(0.2588) = 225 - 55.9 = 169.1$$
$$c \\approx 13.0$$

**Step 2 (Law of Sines):** Find $A$.
$$\\frac{\\sin A}{9} = \\frac{\\sin 75°}{13.0} \\implies \\sin A = \\frac{9(0.9659)}{13.0} \\approx 0.6687$$
$$A \\approx 41.9°$$

**Step 3:** $B = 180° - 75° - 41.9° = 63.1°$

### Example 2: SSS → Find All Angles

$a = 6$, $b = 8$, $c = 11$.

**Step 1:** Find the largest angle (opposite longest side $c$):
$$\\cos C = \\frac{36 + 64 - 121}{96} = \\frac{-21}{96} \\approx -0.219$$
$$C \\approx 102.6°$$

**Step 2 (Law of Sines):** $\\sin A = \\frac{6 \\sin 102.6°}{11} \\approx \\frac{6(0.976)}{11} \\approx 0.532$
$$A \\approx 32.2°$$

**Step 3:** $B = 180° - 102.6° - 32.2° = 45.2°$
      `
    },
    {
      id: 'p4-heron',
      type: 'text' as const,
      content: `
## 📐 Hero's Formula (Heron's Formula)

When you know all three sides, you can find the area directly:

$$\\boxed{\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}}$$

where $s = \\frac{a + b + c}{2}$ is the **semi-perimeter**.

### Example: $a = 5$, $b = 12$, $c = 13$

$s = \\frac{5 + 12 + 13}{2} = 15$

$$\\text{Area} = \\sqrt{15(15-5)(15-12)(15-13)} = \\sqrt{15 \\cdot 10 \\cdot 3 \\cdot 2} = \\sqrt{900} = 30$$

Verify: This is a 5-12-13 right triangle. Area $= \\frac{1}{2}(5)(12) = 30$ ✓

### When to Use Each Area Formula

| Formula | When to Use |
|:--------|:-----------|
| $\\frac{1}{2}bh$ | Base and height known |
| $\\frac{1}{2}ab\\sin C$ | SAS: two sides + included angle |
| Heron's formula | SSS: all three sides |
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Strategy Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You know all three sides of a triangle. To find the area most efficiently, use:',
            options: [
              'Law of Sines then $\\frac{1}{2}ab\\sin C$',
              'Law of Cosines then $\\frac{1}{2}ab\\sin C$',
              'Heron\'s formula directly',
              'Convert to right triangle'
            ],
            correctAnswer: 2,
            explanation: 'Heron\'s formula gives the area directly from three sides — no need to find any angles first.'
          },
          {
            question: 'Given $a=8$, $b=10$, $C=60°$: the correct first step is:',
            options: [
              'Use Law of Sines to find $A$',
              'Use Law of Cosines to find $c$',
              'Find the perimeter',
              'Use Heron\'s formula'
            ],
            correctAnswer: 1,
            explanation: 'This is SAS — no complete angle–side pair exists yet. Start with Law of Cosines to find $c$.'
          },
          {
            question: 'Heron\'s formula with $a = 3$, $b = 4$, $c = 5$: the semi-perimeter $s$ is:',
            options: [
              '$6$',
              '$12$',
              '$5$',
              '$7$'
            ],
            correctAnswer: 0,
            explanation: '$s = \\frac{3+4+5}{2} = \\frac{12}{2} = 6$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Area Calculations** 🧮

**1)** $a = 7$, $b = 10$, $c = 13$. Compute $s$ (semi-perimeter). (e.g., for sides 3, 4, 5: $s = \\frac{3+4+5}{2} = 6$)

**2)** Using $s = 15$ from the triangle with sides $a = 7$, $b = 10$, $c = 13$: Area $= \\sqrt{15 \\cdot 8 \\cdot 5 \\cdot 2}$. What is the area to the nearest integer? (e.g., $\\sqrt{900} = 30$)

**3)** Triangle with $a = 10$, $b = 10$, included angle $C = 30°$. Area = ? (e.g., $\\frac{1}{2}(8)(8)\\sin 60° = 32(0.866) = 28$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '35', '25'],
        hint1: '$s = \\frac{7+10+13}{2} = \\frac{30}{2} = 15$.',
        hint2: '$\\sqrt{15 \\cdot 8 \\cdot 5 \\cdot 2} = \\sqrt{1200} \\approx 34.6 \\approx 35$.',
        hint3: 'Area $= \\frac{1}{2}(10)(10)\\sin 30° = 50(0.5) = 25$.',
        explanation: '1) $s = 15$. 2) $\\sqrt{1200} \\approx 35$. 3) $50 \\sin 30° = 25$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Method Selection** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'AAS: $A=50°$, $B=70°$, $a=12$ → first use',
            options: ['Law of Sines', 'Law of Cosines', 'Heron\'s formula']
          },
          {
            label: 'SAS: $a=5$, $b=7$, $C=110°$ → first use',
            options: ['Law of Sines', 'Law of Cosines', 'Heron\'s formula']
          },
          {
            label: 'SSS: $a=8$, $b=9$, $c=10$ → to find an angle, use',
            options: ['Law of Sines', 'Law of Cosines', 'Heron\'s formula']
          },
          {
            label: 'SSS: to find area WITHOUT finding angles, use',
            options: ['Law of Sines', 'Law of Cosines', 'Heron\'s formula']
          }
        ],
        correctAnswers: ['Law of Sines', 'Law of Cosines', 'Law of Cosines', 'Heron\'s formula'],
        hint1: 'AAS gives a complete angle–side pair, so Law of Sines works.',
        hint2: 'SAS has no complete pair — need Law of Cosines.',
        hint3: 'SSS requires Law of Cosines to find first angle; Heron\'s for area directly.',
        explanation: 'AAS → Law of Sines. SAS → Law of Cosines. SSS → Law of Cosines for angles, Heron\'s for area.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Using Heron\'s formula with $a = 13$, $b = 14$, $c = 15$: $s = 21$. The area is:',
            options: [
              '$\\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$',
              '$\\sqrt{21 \\cdot 7 \\cdot 8 \\cdot 6} = 42$',
              '$\\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} \\approx 74$',
              '$21 \\cdot 8 \\cdot 7 \\cdot 6 = 7056$'
            ],
            correctAnswer: 0,
            explanation: '$s = 21$. Area $= \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$.'
          },
          {
            question: 'To completely solve an SAS triangle, you typically need:',
            options: [
              'Only Law of Sines',
              'Only Law of Cosines',
              'Law of Cosines first, then Law of Sines',
              'Heron\'s formula first'
            ],
            correctAnswer: 2,
            explanation: 'Start with Law of Cosines (find missing side), then switch to Law of Sines (easier for remaining angles).'
          }
        ]
      }
    }
  ]
};
