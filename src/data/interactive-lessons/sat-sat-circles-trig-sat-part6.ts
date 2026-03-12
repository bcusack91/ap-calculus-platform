export const satCirclesTrigPart6Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct6-intro',
      type: 'text' as const,
      content: `
# 🔶 Circle Theorems & Tangent Lines

**Part 6 of 7 — Inscribed Angles, Central Angles, Tangent-Radius Perpendicularity**

Key circle theorems tested on the SAT:

| Theorem | Statement |
|---------|-----------|
| Central angle | Central angle $=$ intercepted arc |
| Inscribed angle | Inscribed angle $= \\frac{1}{2}$ intercepted arc |
| Tangent-radius | A tangent line is $\\perp$ to the radius at the point of tangency |
| Two tangents | Tangent segments from an external point are **equal** in length |

**Central Angle vs. Inscribed Angle:**

If a central angle and an inscribed angle intercept the **same** arc, the central angle is **twice** the inscribed angle.

$$\\text{Central angle} = 2 \\times \\text{Inscribed angle}$$
      `
    },
    {
      id: 'sat-ct6-inscribed',
      type: 'text' as const,
      content: `
## Inscribed Angles — Worked Examples

**Example 1:** A central angle measures $80°$. An inscribed angle intercepts the same arc. What is the inscribed angle?

$$\\text{Inscribed} = \\frac{80°}{2} = 40°$$

**Example 2:** An inscribed angle in a semicircle?

Any angle inscribed in a semicircle intercepts a $180°$ arc.

$$\\text{Inscribed angle} = \\frac{180°}{2} = 90°$$

This is **Thales' theorem**: an angle inscribed in a semicircle is always a right angle.

**Example 3:** Two inscribed angles intercept the same arc. What can you say?

They are **equal** — inscribed angles that intercept the same arc are congruent.

---

**SAT Tip:** If you see a triangle inscribed in a circle with one side as a diameter, immediately mark a $90°$ angle.
      `
    },
    {
      id: 'sat-ct6-tangent',
      type: 'text' as const,
      content: `
## Tangent Lines — Key Properties

A **tangent** touches the circle at exactly one point and is perpendicular to the radius at that point.

**Worked Example:** Point $P$ is outside a circle with center $O$ and radius $5$. A tangent from $P$ touches the circle at $T$, and $OP = 13$. Find $PT$.

1. $OT \\perp PT$ (tangent-radius), so triangle $OTP$ is a right triangle.
2. $OT = 5$ (radius), $OP = 13$ (given).
3. By the Pythagorean theorem: $PT = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.

**Two tangents from one point:** If two tangent segments are drawn from the same external point, they have **equal length**.

So if $PA$ and $PB$ are tangent to a circle at $A$ and $B$, then $PA = PB$.
      `
    },
    {
      id: 'sat-ct6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Circle Theorems** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'An inscribed angle intercepts an arc of $140°$. What is the measure of the inscribed angle?',
            options: ['$70°$', '$140°$', '$280°$', '$35°$'],
            correctAnswer: 0,
            explanation: 'Inscribed angle $= \\frac{1}{2}$ of intercepted arc $= \\frac{140°}{2} = 70°$.'
          },
          {
            question: 'A tangent segment from an external point to a circle has length $8$. The radius is $6$. What is the distance from the external point to the center?',
            options: ['$14$', '$2$', '$10$', '$\\sqrt{100}$'],
            correctAnswer: 2,
            explanation: 'Right triangle with legs $8$ (tangent) and $6$ (radius): $d = \\sqrt{8^2 + 6^2} = \\sqrt{64+36} = \\sqrt{100} = 10$. Note that options C and D are the same value.'
          }
        ]
      }
    },
    {
      id: 'sat-ct6-input',
      type: 'input-boxes' as const,
      content: `
**Solve each problem.** 🧮

1) A central angle measures $110°$. What is the minor arc it intercepts (in degrees)?

2) An inscribed angle measures $55°$. What is the intercepted arc (in degrees)?

3) Triangle $ABC$ is inscribed in a circle with $BC$ as a diameter. What is angle $A$ (in degrees)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['110', '110', '90'],
        hint1: 'A central angle equals its intercepted arc.',
        hint2: 'Intercepted arc $= 2 \\times$ inscribed angle $= 2 \\times 55° = 110°$.',
        hint3: 'By Thales\' theorem, an angle inscribed in a semicircle is $90°$.',
        explanation: '1) Central angle $=$ arc $= 110°$. 2) Arc $= 2(55°) = 110°$. 3) Thales: $90°$.'
      }
    },
    {
      id: 'sat-ct6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each scenario to the correct conclusion.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Angle inscribed in a semicircle',
            options: ['$45°$', '$90°$', '$180°$', 'Cannot determine']
          },
          {
            label: 'Tangent meets radius at point of tangency',
            options: ['Parallel', 'Perpendicular ($90°$)', 'Supplementary', 'Equal']
          },
          {
            label: 'Central angle of $50°$ → inscribed angle on same arc',
            options: ['$25°$', '$50°$', '$100°$', '$75°$']
          }
        ],
        correctAnswers: ['$90°$', 'Perpendicular ($90°$)', '$25°$'],
        hint1: 'Thales\' theorem: inscribed in a semicircle means the intercepted arc is $180°$.',
        hint2: 'A tangent is always perpendicular to the radius at the point of tangency.',
        hint3: 'Inscribed angle $= \\frac{1}{2} \\times$ central angle $= \\frac{50}{2} = 25°$.',
        explanation: 'These three theorems appear on nearly every SAT that includes circle geometry.'
      }
    },
    {
      id: 'sat-ct6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In the figure, $PA$ and $PB$ are tangent to circle $O$, with $PA = 9$ and $OA = 12$. What is $OP$?',
            options: ['$15$', '$\\sqrt{63}$', '$21$', '$3\\sqrt{7}$'],
            correctAnswer: 0,
            explanation: '$OA \\perp PA$ (tangent-radius). In right triangle $OAP$: $OP = \\sqrt{OA^2 + PA^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15$.'
          },
          {
            question: 'Points $A$, $B$, $C$ lie on a circle. If arc $AB = 100°$ and arc $BC = 130°$, what is the inscribed angle $\\angle ACB$?',
            options: ['$50°$', '$65°$', '$100°$', '$130°$'],
            correctAnswer: 0,
            explanation: 'Inscribed angle $\\angle ACB$ intercepts arc $AB = 100°$. Inscribed angle $= \\frac{100°}{2} = 50°$.'
          }
        ]
      }
    }
  ]
}
