export const precalcLawSinesCosinesPart3Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📐 Law of Cosines

**Part 3 of 7**

The Law of Cosines generalizes the Pythagorean theorem to **any** triangle — even those without a right angle.

### The Law of Cosines

$$\\boxed{c^2 = a^2 + b^2 - 2ab\\cos C}$$

Equivalently:
- $a^2 = b^2 + c^2 - 2bc\\cos A$
- $b^2 = a^2 + c^2 - 2ac\\cos B$

### Connection to the Pythagorean Theorem

When $C = 90°$: $\\cos 90° = 0$, so $c^2 = a^2 + b^2 - 0 = a^2 + b^2$ ← the Pythagorean theorem!

### When to Use It

| Given Information | Use Law of Cosines? |
|:-----------------|:-------------------|
| SAS (two sides + included angle) | ✅ Find the third side |
| SSS (three sides) | ✅ Find any angle |
| AAS or ASA | ❌ Use Law of Sines |
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: SAS — Find a Side

In $\\triangle ABC$: $a = 7$, $b = 10$, $C = 50°$.

$$c^2 = 7^2 + 10^2 - 2(7)(10)\\cos 50°$$
$$c^2 = 49 + 100 - 140(0.6428) = 149 - 89.99 = 59.01$$
$$c = \\sqrt{59.01} \\approx 7.68$$

### Example 2: SSS — Find an Angle

In $\\triangle ABC$: $a = 5$, $b = 8$, $c = 9$.

Find angle $C$:
$$c^2 = a^2 + b^2 - 2ab\\cos C$$
$$81 = 25 + 64 - 80\\cos C$$
$$81 = 89 - 80\\cos C$$
$$\\cos C = \\frac{89 - 81}{80} = \\frac{8}{80} = 0.1$$
$$C = \\arccos(0.1) \\approx 84.3°$$

### Example 3: Verify with Pythagorean Triple

$a = 3$, $b = 4$, $c = 5$. Find $C$:
$$\\cos C = \\frac{9 + 16 - 25}{24} = \\frac{0}{24} = 0 \\implies C = 90°$$ ✓
      `
    },
    {
      id: 'p3-formula',
      type: 'text' as const,
      content: `
## 🔢 Rearranging for Angles

### The Angle Formula

To find angle $C$ directly:

$$\\boxed{\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}}$$

Similarly:
$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}, \\qquad \\cos B = \\frac{a^2 + c^2 - b^2}{2ac}$$

### Checking Triangle Type

Using the Law of Cosines, we can determine the triangle type:

| If $\\cos C > 0$ | $C < 90°$ | Acute triangle (if all angles are acute) |
|:----------------|:----------|:----------------------------------------|
| If $\\cos C = 0$ | $C = 90°$ | Right triangle |
| If $\\cos C < 0$ | $C > 90°$ | Obtuse triangle |

### Strategy: Which Angle to Find First?

When given SSS, find the **largest angle first** (opposite the longest side). This avoids ambiguity because $\\arccos$ always gives a unique answer.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Law of Cosines Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In $\\triangle ABC$ with $a = 6$, $b = 8$, $C = 60°$, what is $c^2$?',
            options: [
              '$100$',
              '$52$',
              '$148$',
              '$64$'
            ],
            correctAnswer: 1,
            explanation: '$c^2 = 36 + 64 - 2(6)(8)\\cos 60° = 100 - 96(0.5) = 100 - 48 = 52$.'
          },
          {
            question: 'If $a = 5$, $b = 5$, $c = 5$, what is angle $C$?',
            options: [
              '$45°$',
              '$60°$',
              '$90°$',
              '$120°$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos C = \\frac{25 + 25 - 25}{50} = \\frac{25}{50} = 0.5$. $C = 60°$ (equilateral triangle).'
          },
          {
            question: 'When $C = 90°$, the Law of Cosines reduces to:',
            options: [
              '$c^2 = a^2 + b^2$',
              '$c^2 = a^2 - b^2$',
              '$c = a + b$',
              '$c^2 = 2ab$'
            ],
            correctAnswer: 0,
            explanation: '$\\cos 90° = 0$, so the $-2ab\\cos C$ term vanishes, leaving the Pythagorean theorem.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Compute with Law of Cosines** 🧮

**1)** $a = 3$, $b = 5$, $C = 120°$. Find $c^2$. (e.g., $c^2 = 6^2 + 8^2 - 2(6)(8)\\cos 60° = 100 - 48 = 52$)

**2)** $a = 8$, $b = 6$, $c = 10$. Find $\\cos C$ as a fraction in the form p/q. (e.g., $\\cos C = \\frac{25+64-81}{2(5)(8)} = \\frac{8}{80}$, write 8/80)

**3)** In the triangle from #2, is $C$ acute, right, or obtuse? Write: acute, right, or obtuse. (e.g., $\\cos C = 0.5 > 0$ means acute)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['49', '0/96', 'right'],
        hint1: '$c^2 = 9 + 25 - 2(3)(5)\\cos 120° = 34 - 30(-0.5) = 34 + 15 = 49$.',
        hint2: '$\\cos C = \\frac{64 + 36 - 100}{96} = \\frac{0}{96} = 0$.',
        hint3: '$\\cos C = 0$ means $C = 90°$, which is a right angle.',
        explanation: '1) $49$. 2) $\\cos C = 0$. 3) Right triangle (6-8-10 is a Pythagorean triple).'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Approach** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SAS problem (two sides, included angle) → use',
            options: ['Law of Sines', 'Law of Cosines', 'Pythagorean theorem', 'Either law']
          },
          {
            label: 'SSS problem (three sides, find angle) → use',
            options: ['Law of Sines', 'Law of Cosines', 'Pythagorean theorem', 'Either law']
          },
          {
            label: 'If $\\cos C < 0$ then $C$ is',
            options: ['Acute', 'Right', 'Obtuse']
          },
          {
            label: 'The Law of Cosines involves how many sides?',
            options: ['1', '2', '3']
          }
        ],
        correctAnswers: ['Law of Cosines', 'Law of Cosines', 'Obtuse', '3'],
        hint1: 'SAS requires Law of Cosines — no complete angle-side pair for Law of Sines.',
        hint2: 'SSS also requires Law of Cosines (rearranged for the angle).',
        hint3: 'Negative cosine means the angle is greater than 90°.',
        explanation: 'Both SAS and SSS use Law of Cosines. Negative cosine signals obtuse. The formula relates all 3 sides.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A triangle has sides 7, 24, 25. The largest angle is:',
            options: [
              '$85°$',
              '$90°$',
              '$95°$',
              '$120°$'
            ],
            correctAnswer: 1,
            explanation: '$7^2 + 24^2 = 49 + 576 = 625 = 25^2$. This is a Pythagorean triple, so the angle opposite side 25 is $90°$.'
          },
          {
            question: 'In $\\triangle ABC$ with $a = 4$, $b = 4$, $C = 120°$, find $c$.',
            options: [
              '$4$',
              '$4\\sqrt{2}$',
              '$4\\sqrt{3}$',
              '$8$'
            ],
            correctAnswer: 2,
            explanation: '$c^2 = 16 + 16 - 32\\cos 120° = 32 - 32(-\\frac{1}{2}) = 32 + 16 = 48$. $c = \\sqrt{48} = 4\\sqrt{3}$.'
          }
        ]
      }
    }
  ]
};
