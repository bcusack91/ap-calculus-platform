export const satCirclesTrigPart5Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct5-intro',
      type: 'text' as const,
      content: `
# 🎯 Trig on the SAT

**Part 5 of 7 — Complementary Angles, Pythagorean Identity & SAT Favorites**

Two high-frequency SAT trig concepts:

**1. Complementary Angle Relationship:**

If $A + B = 90°$, then:

$$\\sin A = \\cos B \\qquad \\text{and} \\qquad \\cos A = \\sin B$$

This comes from the fact that in a right triangle, the two acute angles add to $90°$, and one angle's opposite side is the other angle's adjacent side.

**2. Pythagorean Identity:**

$$\\sin^2 \\theta + \\cos^2 \\theta = 1$$

This is always true — for every angle. Two useful rearrangements:

$$\\sin^2 \\theta = 1 - \\cos^2 \\theta \\qquad \\cos^2 \\theta = 1 - \\sin^2 \\theta$$
      `
    },
    {
      id: 'sat-ct5-complementary',
      type: 'text' as const,
      content: `
## Complementary Angles — Worked Examples

**Example 1:** If $\\sin 32° = 0.53$, what is $\\cos 58°$?

Since $32° + 58° = 90°$, they are complementary.

$$\\cos 58° = \\sin 32° = 0.53$$

**Example 2:** In right triangle $PQR$ with a right angle at $Q$, $\\sin P = \\frac{4}{5}$. What is $\\cos R$?

Angles $P$ and $R$ are complementary ($P + R = 90°$), so: $\\cos R = \\sin P = \\frac{4}{5}$.

---

**SAT Tip:** If a question says "$\\sin x° = \\cos y°$," immediately conclude $x + y = 90$ (assuming $0 < x, y < 90$).
      `
    },
    {
      id: 'sat-ct5-pythagorean',
      type: 'text' as const,
      content: `
## Pythagorean Identity — Worked Examples

**Example 1:** If $\\cos \\theta = \\frac{3}{5}$ and $\\theta$ is in Quadrant I, find $\\sin \\theta$.

$$\\sin^2 \\theta = 1 - \\cos^2 \\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$$
$$\\sin \\theta = \\frac{4}{5} \\quad (\\text{positive in QI})$$

**Example 2:** Simplify $\\frac{\\sin^2 x + \\cos^2 x}{\\cos x}$.

$$= \\frac{1}{\\cos x} = \\sec x$$

**Example 3:** If $\\sin \\theta = 0.6$, what is $\\sin^2 \\theta + \\cos^2 \\theta$?

$$= 1 \\quad \\text{(always, by identity)}$$

The SAT might try to distract you — don't compute; just recognize the identity.
      `
    },
    {
      id: 'sat-ct5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — SAT Trig Concepts** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\sin(3x + 10)° = \\cos(2x - 5)°$, what is $x$?',
            options: ['$15$', '$17$', '$19$', '$25$'],
            correctAnswer: 1,
            explanation: 'Since $\\sin A = \\cos B$ when $A + B = 90$: $(3x+10) + (2x-5) = 90 \\Rightarrow 5x + 5 = 90 \\Rightarrow 5x = 85 \\Rightarrow x = 17$.'
          },
          {
            question: 'If $\\sin \\theta = \\frac{5}{13}$ and $\\theta$ is acute, what is $\\cos \\theta$?',
            options: ['$\\frac{8}{13}$', '$\\frac{12}{13}$', '$\\frac{5}{12}$', '$\\frac{1}{13}$'],
            correctAnswer: 1,
            explanation: '$\\cos^2 \\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$. $\\cos \\theta = \\frac{12}{13}$ (positive since $\\theta$ is acute). This is a $5\\text{-}12\\text{-}13$ right triangle.'
          }
        ]
      }
    },
    {
      id: 'sat-ct5-input',
      type: 'input-boxes' as const,
      content: `
**Compute each value.** 🧮

1) If $\\sin(2x)° = \\cos(x + 15)°$ and both angles are acute, what is $x$?

2) If $\\cos \\theta = 0.8$, what is $\\sin^2 \\theta$? (Enter as a decimal.)

3) $\\sin^2 40° + \\cos^2 40° = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '0.36', '1'],
        hint1: 'Complementary: $2x + (x + 15) = 90 \\Rightarrow 3x + 15 = 90 \\Rightarrow x = 25$.',
        hint2: '$\\sin^2 \\theta = 1 - \\cos^2 \\theta = 1 - 0.64 = 0.36$.',
        hint3: 'The Pythagorean identity says this always equals $1$.',
        explanation: '1) $3x = 75$, $x = 25$. 2) $1 - 0.8^2 = 0.36$. 3) Always $1$.'
      }
    },
    {
      id: 'sat-ct5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to its equivalent.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\cos 75°$',
            options: ['$\\sin 15°$', '$\\sin 75°$', '$\\cos 15°$', '$\\tan 75°$']
          },
          {
            label: '$1 - \\sin^2 \\theta$',
            options: ['$\\sin^2 \\theta$', '$\\cos^2 \\theta$', '$\\tan^2 \\theta$', '$1$']
          },
          {
            label: '$\\sin 0°$',
            options: ['$0$', '$1$', '$-1$', '$\\frac{1}{2}$']
          }
        ],
        correctAnswers: ['$\\sin 15°$', '$\\cos^2 \\theta$', '$0$'],
        hint1: 'Complementary: $\\cos 75° = \\sin(90° - 75°) = \\sin 15°$.',
        hint2: 'Rearrange the Pythagorean identity: $\\cos^2 \\theta = 1 - \\sin^2 \\theta$.',
        hint3: 'At $0°$, the point on the unit circle is $(1, 0)$. $\\sin = y = 0$.',
        explanation: 'These are the three most common trig identities tested on the SAT.'
      }
    },
    {
      id: 'sat-ct5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In right triangle $DEF$, angle $F = 90°$ and $\\sin D = \\frac{7}{25}$. What is $\\cos E$?',
            options: ['$\\frac{7}{25}$', '$\\frac{24}{25}$', '$\\frac{7}{24}$', '$\\frac{18}{25}$'],
            correctAnswer: 0,
            explanation: 'Since $D + E = 90°$ in a right triangle, $\\cos E = \\sin D = \\frac{7}{25}$.'
          },
          {
            question: 'If $\\cos x = k$, which expression equals $\\sin^2 x$?',
            options: ['$k^2$', '$1 - k$', '$1 - k^2$', '$\\sqrt{1 - k^2}$'],
            correctAnswer: 2,
            explanation: 'By the Pythagorean identity: $\\sin^2 x = 1 - \\cos^2 x = 1 - k^2$. Note: $\\sqrt{1-k^2}$ would be $|\\sin x|$, not $\\sin^2 x$.'
          }
        ]
      }
    }
  ]
}
