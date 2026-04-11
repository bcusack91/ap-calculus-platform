export const precalcLawSinesCosinesPart7Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Law of Sines & Cosines — Full Synthesis

**Part 7 of 7**

Master review covering all concepts: Law of Sines (including ambiguous case), Law of Cosines, area formulas, and applications.

### Complete Decision Tree

$$\\boxed{\\text{Given info} \\to \\text{Identify case} \\to \\text{Choose law} \\to \\text{Solve}}$$

| Case | Law | Steps |
|:-----|:----|:------|
| AAS/ASA | Sines | Find 3rd angle, then use proportions |
| SSA | Sines | Check ambiguous case first |
| SAS | Cosines | Find opposite side, then switch to Sines |
| SSS | Cosines | Find largest angle (opposite longest side) |

### Complete Area Formulas

$$\\text{Area} = \\frac{1}{2}bh = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}$$

### Complete Circle Formulas

$$R = \\frac{a}{2\\sin A}, \\qquad r = \\frac{\\text{Area}}{s}$$
      `
    },
    {
      id: 'p7-mixed',
      type: 'text' as const,
      content: `
## 📝 Mixed Review Problems

### Problem 1: Identify and Solve (AAS)
$A = 48°$, $B = 67°$, $a = 15$.
$C = 180° - 48° - 67° = 65°$.
$b = \\frac{15\\sin 67°}{\\sin 48°} = \\frac{15(0.921)}{0.743} \\approx 18.6$.

### Problem 2: SSS — Is it Obtuse?
$a = 4$, $b = 5$, $c = 8$.
$\\cos C = \\frac{16 + 25 - 64}{40} = \\frac{-23}{40} = -0.575$.
$C = \\arccos(-0.575) \\approx 125.1°$. Yes, it's obtuse.

### Problem 3: SAS Application
Two roads diverge at $30°$. After 5 km on one road and 8 km on the other, the distance between endpoints:
$d^2 = 25 + 64 - 80\\cos 30° = 89 - 69.3 = 19.7$
$d \\approx 4.44$ km.

### Problem 4: Complete Solution
$a = 11$, $b = 14$, $C = 72°$.
$c^2 = 121 + 196 - 308\\cos 72° = 317 - 95.2 = 221.8$, $c \\approx 14.9$.
$\\sin A = \\frac{11\\sin 72°}{14.9} \\approx 0.702$, $A \\approx 44.6°$.
$B = 180° - 72° - 44.6° = 63.4°$.
      `
    },
    {
      id: 'p7-mistakes',
      type: 'text' as const,
      content: `
## ⚠️ Common Exam Mistakes

| Mistake | Correction |
|:--------|:----------|
| Using Law of Sines for SAS | No complete pair exists — use Law of Cosines first |
| Forgetting the ambiguous case in SSA | Always check if $\\sin B < 1$ allows two values |
| Wrong angle in area formula | $\\frac{1}{2}ab\\sin C$ — $C$ must be the **included** angle between $a$ and $b$ |
| Confusing supplement: $\\cos(180°-\\theta) = -\\cos\\theta$ | In force problems, the triangle angle is the supplement of the physical angle |
| Rounding too early | Keep at least 4 decimal places in intermediate steps |

### Quick Formula Sheet

- **Law of Sines:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
- **Law of Cosines:** $c^2 = a^2 + b^2 - 2ab\\cos C$
- **Angle from SSS:** $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$
- **Area (SAS):** $\\frac{1}{2}ab\\sin C$
- **Area (SSS):** $\\sqrt{s(s-a)(s-b)(s-c)}$
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a triangle with sides 7, 8, 13, the triangle is:',
            options: [
              'Acute',
              'Right',
              'Obtuse',
              'Not a valid triangle'
            ],
            correctAnswer: 2,
            explanation: '$\\cos C = \\frac{49 + 64 - 169}{112} = \\frac{-56}{112} = -0.5$. $C = 120°$, so it\'s obtuse.'
          },
          {
            question: 'Given $a = 5$, $b = 7$, $A = 30°$, $\\sin B = \\frac{7\\sin 30°}{5} = 0.7$. How many triangles?',
            options: [
              '0',
              '1',
              '2',
              'Cannot determine'
            ],
            correctAnswer: 2,
            explanation: '$\\sin B = 0.7 < 1$, $A = 30°$ is acute, and $a < b$. $B_1 \\approx 44.4°$, $B_2 \\approx 135.6°$. $30° + 135.6° = 165.6° < 180°$. Two triangles.'
          },
          {
            question: 'The area of a triangle with $a = 9$, $b = 12$, $C = 150°$ is:',
            options: [
              '$27$',
              '$54$',
              '$27\\sqrt{3}$',
              '$108$'
            ],
            correctAnswer: 0,
            explanation: 'Area $= \\frac{1}{2}(9)(12)\\sin 150° = 54 \\cdot \\frac{1}{2} = 27$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Calculations** 🧮

**1)** Triangle with $a = 5$, $b = 12$, $c = 13$. Is the largest angle 90°? Enter the value of $\\cos C$ (where $C$ is opposite side 13). (e.g., $\\cos C = \\frac{49+64-169}{112} = \\frac{-56}{112}$, write $-0.5$)

**2)** Circumradius of a triangle where $a = 10$ and $A = 30°$. (e.g., $R = \\frac{8}{2\\sin 45°} \\approx 5.66$)

**3)** Area using Heron's formula: $a = 5$, $b = 12$, $c = 13$. $s = 15$. Area = ? (e.g., $\\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '10', '30'],
        hint1: '$\\cos C = \\frac{25 + 144 - 169}{120} = \\frac{0}{120} = 0$.',
        hint2: '$R = \\frac{10}{2\\sin 30°} = \\frac{10}{1} = 10$.',
        hint3: '$\\sqrt{15 \\cdot 10 \\cdot 3 \\cdot 2} = \\sqrt{900} = 30$.',
        explanation: '1) $\\cos C = 0$ (right triangle). 2) $R = 10$. 3) Area $= 30$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Master Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SSA with $a > b$ always gives',
            options: ['0 triangles', '1 triangle', '2 triangles', 'Depends on the angle']
          },
          {
            label: 'The area formula $\\frac{1}{2}ab\\sin C$ requires $C$ to be',
            options: ['Any angle in the triangle', 'The angle BETWEEN sides $a$ and $b$', 'The largest angle', 'An acute angle']
          },
          {
            label: 'If $\\cos C = 0$, the triangle is',
            options: ['Acute', 'Right', 'Obtuse', 'Equilateral']
          },
          {
            label: 'The most efficient way to find the area given SSS is',
            options: ['Law of Sines + $\\frac{1}{2}ab\\sin C$', 'Law of Cosines + $\\frac{1}{2}ab\\sin C$', 'Heron\'s formula', 'Base × height']
          }
        ],
        correctAnswers: ['1 triangle', 'The angle BETWEEN sides $a$ and $b$', 'Right', 'Heron\'s formula'],
        hint1: 'When $a > b$, sine of $B$ is always less than $\\sin A < 1$, and $B$ must be smaller than $A$.',
        hint2: '$C$ is the included angle between the two given sides.',
        hint3: '$\\cos C = 0 \\implies C = 90°$.',
        explanation: '$a > b$ → 1 triangle. Area formula needs included angle. $\\cos C = 0$ → right. SSS → Heron\'s formula.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A triangle has sides 10, 10, and 12. The angle opposite the side of length 12 is:',
            options: [
              '$\\arccos(\\frac{56}{200}) \\approx 73.7°$',
              '$\\arccos(\\frac{-56}{200}) \\approx 106.3°$',
              '$\\arccos(0.28) \\approx 73.7°$',
              'Both A and C'
            ],
            correctAnswer: 3,
            explanation: '$\\cos C = \\frac{100 + 100 - 144}{200} = \\frac{56}{200} = 0.28$. $C = \\arccos(0.28) \\approx 73.7°$. A and C are the same answer.'
          },
          {
            question: 'Two sides of a parallelogram are 7 and 11 with an included angle of 60°. The longer diagonal is:',
            options: [
              '$\\sqrt{49 + 121 + 154} \\approx 18$',
              '$\\sqrt{49 + 121 - 77} \\approx 9.6$',
              '$\\sqrt{49 + 121 + 77} \\approx 15.7$',
              '$7 + 11 = 18$'
            ],
            correctAnswer: 2,
            explanation: 'Longer diagonal: $d^2 = 49 + 121 + 2(7)(11)\\cos 60° = 170 + 77 = 247$. $d = \\sqrt{247} \\approx 15.7$.'
          }
        ]
      }
    }
  ]
};
