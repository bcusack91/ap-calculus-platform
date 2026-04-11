export const precalcTrigIdentitiesPart4Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# ➕ Trigonometric Identities — Sum & Difference Formulas

**Part 4 of 7**

The **sum and difference** identities let you expand $\\sin(A \\pm B)$, $\\cos(A \\pm B)$, and $\\tan(A \\pm B)$ into expressions involving only $\\sin A$, $\\cos A$, $\\sin B$, $\\cos B$.

### The Big Six Formulas

$$\\boxed{\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B}$$

$$\\boxed{\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B}$$

$$\\boxed{\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}}$$

### Sign Pattern Summary

| Formula | Plus version | Minus version |
|:--------|:------------|:-------------|
| $\\sin(A \\pm B)$ | same sign ($+$) | same sign ($-$) |
| $\\cos(A \\pm B)$ | **opposite** sign ($-$) | **opposite** sign ($+$) |
| $\\tan(A \\pm B)$ | numerator $+$, denominator $-$ | numerator $-$, denominator $+$ |

> **Memory aid for cosine**: "Cosine is contrary" — the sign in the formula is **opposite** the sign in the argument.
      `
    },
    {
      id: 'p4-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Find the exact value of $\\cos 75°$

Split: $75° = 45° + 30°$

$$\\cos 75° = \\cos 45°\\cos 30° - \\sin 45°\\sin 30°$$

$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$$

### Example 2: Find the exact value of $\\sin 15°$

Split: $15° = 45° - 30°$

$$\\sin 15° = \\sin 45°\\cos 30° - \\cos 45°\\sin 30°$$

$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$$

### Example 3: Simplify $\\sin(x + \\pi)$

$$\\sin(x + \\pi) = \\sin x\\cos\\pi + \\cos x\\sin\\pi = \\sin x(-1) + \\cos x(0) = -\\sin x$$

This confirms the identity: shifting by $\\pi$ negates sine.

### Example 4: Find $\\tan 75°$

$$\\tan(45° + 30°) = \\frac{\\tan 45° + \\tan 30°}{1 - \\tan 45°\\tan 30°} = \\frac{1 + \\frac{\\sqrt{3}}{3}}{1 - \\frac{\\sqrt{3}}{3}} = \\frac{3 + \\sqrt{3}}{3 - \\sqrt{3}} = 2 + \\sqrt{3}$$
      `
    },
    {
      id: 'p4-strategy',
      type: 'text' as const,
      content: `
## 🎯 Choosing the Right Angle Decomposition

### Common Angle Splits

| Target Angle | Split As | Using |
|:------------|:---------|:------|
| $15°$ | $45° - 30°$ | Difference |
| $75°$ | $45° + 30°$ | Sum |
| $105°$ | $60° + 45°$ | Sum |
| $165°$ | $180° - 15°$ | or $120° + 45°$ |
| $\\frac{\\pi}{12}$ | $\\frac{\\pi}{4} - \\frac{\\pi}{6}$ | Difference |
| $\\frac{5\\pi}{12}$ | $\\frac{\\pi}{4} + \\frac{\\pi}{6}$ | Sum |
| $\\frac{7\\pi}{12}$ | $\\frac{\\pi}{3} + \\frac{\\pi}{4}$ | Sum |

### When to Use Sum/Difference Formulas

| Situation | Example |
|:----------|:--------|
| Exact value of a non-standard angle | $\\sin 75°$, $\\cos 15°$ |
| Expression has $\\sin A\\cos B \\pm \\cos A\\sin B$ | Condense to $\\sin(A \\pm B)$ |
| Proving an identity | Expand one side, simplify to match the other |
| Deriving double-angle formulas | Set $B = A$ in the sum formulas |
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\cos(A + B)$ expands to:',
            options: [
              '$\\cos A\\cos B + \\sin A\\sin B$',
              '$\\cos A\\cos B - \\sin A\\sin B$',
              '$\\sin A\\cos B + \\cos A\\sin B$',
              '$\\sin A\\cos B - \\cos A\\sin B$'
            ],
            correctAnswer: 1,
            explanation: '"Cosine is contrary" — the sum formula uses subtraction: $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$.'
          },
          {
            question: 'Which angle split would you use for $\\sin\\!\\left(\\frac{5\\pi}{12}\\right)$?',
            options: [
              '$\\frac{\\pi}{3} - \\frac{\\pi}{12}$',
              '$\\frac{\\pi}{4} + \\frac{\\pi}{6}$',
              '$\\frac{\\pi}{2} - \\frac{\\pi}{12}$',
              '$\\frac{\\pi}{6} + \\frac{\\pi}{6}$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{\\pi}{4} + \\frac{\\pi}{6} = \\frac{3\\pi}{12} + \\frac{2\\pi}{12} = \\frac{5\\pi}{12}$, and both $\\pi/4$ and $\\pi/6$ have known exact values.'
          },
          {
            question: '$\\sin(x - \\frac{\\pi}{2})$ simplifies to:',
            options: [
              '$\\cos x$',
              '$-\\cos x$',
              '$\\sin x$',
              '$-\\sin x$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin(x - \\frac{\\pi}{2}) = \\sin x\\cos\\frac{\\pi}{2} - \\cos x\\sin\\frac{\\pi}{2} = 0 - \\cos x = -\\cos x$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Exact Value Computation** 🧮

**1)** Find the exact value of $\\cos 15°$. The answer has the form $\\frac{\\sqrt{a}+\\sqrt{b}}{4}$. What is $a + b$? (e.g., if the answer were $\\frac{\\sqrt{5}+\\sqrt{3}}{4}$, you'd enter $8$)

**2)** Simplify $\\cos(x + 2\\pi)$. Write as a single trig function of $x$ (e.g., sin, cos, tan). (e.g., $\\sin(x + 2\\pi) = \\sin x$ by periodicity)

**3)** Evaluate $\\sin 45°\\cos 15° + \\cos 45°\\sin 15°$. This matches $\\sin(A+B)$; enter the result as a fraction. (e.g., $\\sin 30° = 1/2$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', 'cos', 'sqrt(3)/2'],
        hint1: '$\\cos 15° = \\cos(45°-30°)$. Expand and combine. You get $\\frac{\\sqrt{6}+\\sqrt{2}}{4}$, so $a=6, b=2$.',
        hint2: 'Since $\\cos$ has period $2\\pi$, adding $2\\pi$ to the argument changes nothing.',
        hint3: 'Recognize the pattern: $\\sin A\\cos B + \\cos A\\sin B = \\sin(A+B)$. What is $45° + 15°$?',
        explanation: '1) $\\cos 15° = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$, so $a+b=6+2=8$. 2) $\\cos(x+2\\pi) = \\cos x$. 3) $\\sin(45°+15°) = \\sin 60° = \\frac{\\sqrt{3}}{2}$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Formula Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin A\\cos B - \\cos A\\sin B$ equals',
            options: ['$\\sin(A+B)$', '$\\sin(A-B)$', '$\\cos(A+B)$', '$\\cos(A-B)$']
          },
          {
            label: '$\\cos A\\cos B + \\sin A\\sin B$ equals',
            options: ['$\\cos(A+B)$', '$\\cos(A-B)$', '$\\sin(A+B)$', '$\\sin(A-B)$']
          },
          {
            label: 'To find an exact value of $\\sin 105°$, split as',
            options: ['$60° + 45°$', '$90° + 15°$', '$120° - 15°$', '$180° - 75°$']
          },
          {
            label: 'In $\\cos(A+B)$, the sign between the two terms is',
            options: ['Plus ($+$)', 'Minus ($-$)', 'Depends on the quadrant', 'Undefined']
          }
        ],
        correctAnswers: ['$\\sin(A-B)$', '$\\cos(A-B)$', '$60° + 45°$', 'Minus ($-$)'],
        hint1: 'The minus between the two products signals the difference formula for sine.',
        hint2: 'Plus between the products is the cosine difference formula (signs are flipped).',
        hint3: 'Both 60° and 45° have known exact values; their sum is 105°.',
        explanation: '$\\sin A\\cos B - \\cos A\\sin B = \\sin(A-B)$. $\\cos A\\cos B + \\sin A\\sin B = \\cos(A-B)$. $105° = 60°+45°$ uses standard angles. Cosine sum has a minus sign.'
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
            question: '$\\cos 40°\\cos 50° - \\sin 40°\\sin 50°$ equals:',
            options: [
              '$\\cos 10°$',
              '$\\cos 90°$',
              '$\\sin 90°$',
              '$\\sin 10°$'
            ],
            correctAnswer: 1,
            explanation: 'This matches $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$ with $A=40°, B=50°$. So $\\cos(40°+50°) = \\cos 90° = 0$.'
          },
          {
            question: 'The exact value of $\\sin 75°$ is:',
            options: [
              '$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$',
              '$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$',
              '$\\frac{\\sqrt{3}+1}{4}$',
              '$\\frac{\\sqrt{3}}{2}$'
            ],
            correctAnswer: 0,
            explanation: '$\\sin 75° = \\sin(45°+30°) = \\sin 45°\\cos 30° + \\cos 45°\\sin 30° = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$.'
          }
        ]
      }
    }
  ]
};
