export const precalcTrigIdentitiesPart4Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# ➕ Trigonometric Identities — Sum & Difference Identities

**Part 4 of 7**

The **sum and difference** identities let you expand $\\sin(A \\pm B)$ and $\\cos(A \\pm B)$ into expressions involving only $\\sin A$, $\\cos A$, $\\sin B$, $\\cos B$.

### The "Distributive" Trap

A tempting but **wrong** move is to treat $\\sin$ like a multiplier: $\\sin(A + B) \\ne \\sin A + \\sin B$. Check it with $A = B = \\frac{\\pi}{6}$:

| Quantity | Exact value |
|:---------|:------------|
| $\\sin(\\frac{\\pi}{6} + \\frac{\\pi}{6}) = \\sin \\frac{\\pi}{3}$ | $\\frac{\\sqrt{3}}{2} \\approx 0.866$ |
| $\\sin \\frac{\\pi}{6} + \\sin \\frac{\\pi}{6}$ | $\\frac{1}{2} + \\frac{1}{2} = 1$ |

The two rows disagree, so there is no "distribute" rule. The identities below are the **correct** rules for splitting an angle into pieces you already know.

### The Four Formulas

$$\\boxed{\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B}$$

$$\\boxed{\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B}$$

Tangent sum and difference identities are not assessed on the AP Precalculus exam; for $\\tan(A + B)$, compute $\\frac{\\sin(A+B)}{\\cos(A+B)}$.

The difference identities are the sum identities in disguise: replace $B$ with $-B$ and use $\\cos(-B) = \\cos B$ and $\\sin(-B) = -\\sin B$ from Part 3.

### Sign Pattern Summary

| Formula | Plus version | Minus version |
|:--------|:------------|:-------------|
| $\\sin(A \\pm B)$ | same sign ($+$) | same sign ($-$) |
| $\\cos(A \\pm B)$ | **opposite** sign ($-$) | **opposite** sign ($+$) |

> **Memory aid for cosine**: "Cosine is contrary" — the sign in the formula is **opposite** the sign in the argument. Also: cosine uses **matched** products ($\\cos\\cos$, $\\sin\\sin$); sine uses **mixed** products ($\\sin\\cos$, $\\cos\\sin$).
      `
    },
    {
      id: 'p4-derivation',
      type: 'text' as const,
      content: `
## 🔍 Where It Comes From

You do not need to memorize the proof, but seeing it builds trust. Place $P = (\\cos A, \\sin A)$ and $Q = (\\cos B, \\sin B)$ on the unit circle. The distance $PQ$ can be computed two ways.

**By the distance formula:**
$$PQ^2 = (\\cos A - \\cos B)^2 + (\\sin A - \\sin B)^2 = 2 - 2(\\cos A\\cos B + \\sin A\\sin B)$$

**By rotating the picture:** rotate both points clockwise by $B$. Rotation keeps distances, $Q$ lands on $(1, 0)$, and $P$ lands on $(\\cos(A - B), \\sin(A - B))$, so
$$PQ^2 = (\\cos(A - B) - 1)^2 + \\sin^2(A - B) = 2 - 2\\cos(A - B)$$

Setting the two equal and cancelling gives $\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$. Replacing $B$ with $-B$ gives $\\cos(A + B)$, and the cofunction identity $\\sin(A + B) = \\cos\\!\\left(\\frac{\\pi}{2} - A - B\\right)$ gives the sine versions.

> 💡 The cofunction identities of Part 3 are the special case $A = \\frac{\\pi}{2}$: $\\cos\\!\\left(\\frac{\\pi}{2} - B\\right) = \\cos\\frac{\\pi}{2}\\cos B + \\sin\\frac{\\pi}{2}\\sin B = \\sin B$.
      `
    },
    {
      id: 'p4-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Find the exact value of $\\cos \\frac{5\\pi}{12}$

Split: $\\frac{5\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{6}$

$$\\cos \\frac{5\\pi}{12} = \\cos \\frac{\\pi}{4}\\cos \\frac{\\pi}{6} - \\sin \\frac{\\pi}{4}\\sin \\frac{\\pi}{6}$$

$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$$

### Example 2: Find the exact value of $\\sin \\frac{\\pi}{12}$

Split: $\\frac{\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}$

$$\\sin \\frac{\\pi}{12} = \\sin \\frac{\\pi}{4}\\cos \\frac{\\pi}{6} - \\cos \\frac{\\pi}{4}\\sin \\frac{\\pi}{6}$$

$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$$

(Examples 1 and 2 agree, as the cofunction identity predicts: $\\frac{\\pi}{12} + \\frac{5\\pi}{12} = \\frac{\\pi}{2}$.)

### Example 3: Simplify $\\sin(x + \\pi)$

$$\\sin(x + \\pi) = \\sin x\\cos\\pi + \\cos x\\sin\\pi = \\sin x(-1) + \\cos x(0) = -\\sin x$$

This confirms the identity: shifting by $\\pi$ negates sine. In the same way, $\\sin(x + \\frac{\\pi}{2}) = \\sin x \\cdot 0 + \\cos x \\cdot 1 = \\cos x$, the graph-shift fact from Part 3.

### Example 4: Find $\\sin(\\alpha + \\beta)$ from given ratios

Given $\\sin\\alpha = \\frac{8}{17}$ and $\\cos\\beta = \\frac{3}{5}$, with both angles in Quadrant I.

First use the Pythagorean identity for the missing values: $\\cos\\alpha = \\sqrt{1 - \\frac{64}{289}} = \\frac{15}{17}$ and $\\sin\\beta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$ (both positive in Quadrant I).

$$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta = \\frac{8}{17}\\cdot\\frac{3}{5} + \\frac{15}{17}\\cdot\\frac{4}{5} = \\frac{24}{85} + \\frac{60}{85} = \\frac{84}{85}$$

### Example 5: The same task outside Quadrant I

Given $\\sin A = \\frac{3}{5}$ with $A$ in Quadrant II, and $\\cos B = -\\frac{5}{13}$ with $B$ in Quadrant III. Find $\\sin(A + B)$.

Assign each missing value its sign from the quadrant **before** multiplying: in QII cosine is negative, so $\\cos A = -\\frac{4}{5}$; in QIII sine is negative, so $\\sin B = -\\frac{12}{13}$.

$$\\sin(A + B) = \\frac{3}{5}\\cdot\\left(-\\frac{5}{13}\\right) + \\left(-\\frac{4}{5}\\right)\\left(-\\frac{12}{13}\\right) = -\\frac{15}{65} + \\frac{48}{65} = \\frac{33}{65}$$

> ⚠️ The most common error on this kind of item is taking both missing values positive. Here that would give $\\frac{63}{65}$, which is wrong.
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
| $\\frac{\\pi}{12}$ | $\\frac{\\pi}{4} - \\frac{\\pi}{6}$ | Difference |
| $\\frac{5\\pi}{12}$ | $\\frac{\\pi}{4} + \\frac{\\pi}{6}$ | Sum |
| $\\frac{7\\pi}{12}$ | $\\frac{\\pi}{3} + \\frac{\\pi}{4}$ | Sum |
| $\\frac{11\\pi}{12}$ | $\\pi - \\frac{\\pi}{12}$ | or $\\frac{2\\pi}{3} + \\frac{\\pi}{4}$ |

In twelfths, the special angles are $\\frac{2\\pi}{12}$, $\\frac{3\\pi}{12}$ and $\\frac{4\\pi}{12}$, so every sum or difference of two of them is a whole multiple of $\\frac{\\pi}{12}$. An angle like $\\frac{\\pi}{5}$ cannot be split this way.

### Don't Forget the Quadrant

Angles like $\\frac{7\\pi}{12}$, $\\frac{13\\pi}{12}$ and $\\frac{19\\pi}{12}$ live **outside** Quadrant I, so the sign of your answer must match the quadrant:

| Angle | Quadrant | $\\sin$ | $\\cos$ |
|:------|:---------|:-------|:-------|
| $\\frac{7\\pi}{12}$ | II | $+$ | $-$ |
| $\\frac{13\\pi}{12}$ | III | $-$ | $-$ |
| $\\frac{19\\pi}{12}$ | IV | $-$ | $+$ |

> ⚠️ A correct expansion with a sign that **contradicts** the quadrant means an arithmetic slip. Go back and check.

### Reading the Formulas Backwards

When you see two products being **added or subtracted**, ask: are the functions *matched* or *mixed*?

- **Matched** ($\\cos A\\cos B \\pm \\sin A\\sin B$) → it is $\\cos(A \\mp B)$.
- **Mixed** ($\\sin A\\cos B \\pm \\cos A\\sin B$) → it is $\\sin(A \\pm B)$.

Then combine the two inner angles. The whole expression collapses to one term you can often evaluate exactly, e.g. $\\sin\\frac{5\\pi}{18}\\cos\\frac{\\pi}{9} - \\cos\\frac{5\\pi}{18}\\sin\\frac{\\pi}{9} = \\sin\\!\\left(\\frac{5\\pi}{18} - \\frac{2\\pi}{18}\\right) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$.

### When to Use Sum/Difference Identities

| Situation | Example |
|:----------|:--------|
| Exact value of a non-standard angle | $\\sin \\frac{5\\pi}{12}$, $\\cos \\frac{\\pi}{12}$ |
| Expression has $\\sin A\\cos B \\pm \\cos A\\sin B$ | Condense to $\\sin(A \\pm B)$ |
| Rewrite a shifted sinusoid | $\\cos\\!\\left(x - \\frac{\\pi}{3}\\right) = \\frac{1}{2}\\cos x + \\frac{\\sqrt{3}}{2}\\sin x$ |
| Deriving double-angle identities | Set $B = A$ in the sum formulas (Part 5) |
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
              '$\\frac{\\pi}{6} + \\frac{\\pi}{12}$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{\\pi}{4} + \\frac{\\pi}{6} = \\frac{3\\pi}{12} + \\frac{2\\pi}{12} = \\frac{5\\pi}{12}$, and both $\\pi/4$ and $\\pi/6$ have known exact values. The other splits contain $\\frac{\\pi}{12}$, whose values are not memorized.'
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
      `,
      exercise: {
        questions: [
          {
            question: '**1)** Find the exact value of $\\cos \\frac{\\pi}{12}$. The answer has the form $\\frac{\\sqrt{a}+\\sqrt{b}}{4}$. What is $a + b$? (e.g., if the answer were $\\frac{\\sqrt{7}+\\sqrt{3}}{4}$, you would enter $10$)',
            answer: '8',
          },
          {
            question: '**2)** Simplify $\\cos(x + 2\\pi)$. Write as a single trig function of $x$ (type \`sin\`, \`cos\` or \`tan\`). (e.g., $\\sin(x + 2\\pi) = \\sin x$ by periodicity)',
            answer: 'cos',
            acceptableAnswers: ['cosx', 'cos(x)', 'cosine', 'cosθ', 'cos(θ)'],
          },
          {
            question: '**3)** Evaluate $\\sin \\frac{\\pi}{4}\\cos \\frac{\\pi}{12} + \\cos \\frac{\\pi}{4}\\sin \\frac{\\pi}{12}$. This matches $\\sin(A+B)$; enter the exact result (e.g., \`sqrt(2)/2\`). (e.g., $\\sin \\frac{\\pi}{6} = 1/2$)',
            answer: 'sqrt(3)/2',
            acceptableAnswers: ['√3/2', 'sqrt3/2'],
          },
        ],
        hint1: 'Expand $\\cos(\\frac{\\pi}{4} - \\frac{\\pi}{6})$ with the cosine difference identity and combine the two terms over $4$.',
        hint2: 'Since $\\cos$ has period $2\\pi$, adding $2\\pi$ to the argument changes nothing.',
        hint3: 'Recognize the pattern: $\\sin A\\cos B + \\cos A\\sin B = \\sin(A+B)$. What is $\\frac{\\pi}{4} + \\frac{\\pi}{12}$?',
        explanation: '1) $\\cos \\frac{\\pi}{12} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$, so $a+b=6+2=8$. 2) $\\cos(x+2\\pi) = \\cos x$. 3) $\\sin(\\frac{\\pi}{4}+\\frac{\\pi}{12}) = \\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.'
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
            label: 'To find an exact value of $\\sin \\frac{7\\pi}{12}$, split it into two special angles as',
            options: ['$\\frac{\\pi}{3} + \\frac{\\pi}{4}$', '$\\frac{\\pi}{2} + \\frac{\\pi}{12}$', '$\\frac{2\\pi}{3} - \\frac{\\pi}{12}$', '$\\pi - \\frac{5\\pi}{12}$']
          },
          {
            label: 'The sign of $\\cos \\frac{13\\pi}{12}$ is',
            options: ['Positive', 'Negative', 'Zero', 'Depends on the split used']
          }
        ],
        correctAnswers: ['$\\sin(A-B)$', '$\\cos(A-B)$', '$\\frac{\\pi}{3} + \\frac{\\pi}{4}$', 'Negative'],
        hint1: 'The minus between the two products signals the difference formula for sine.',
        hint2: 'Plus between the products is the cosine difference formula (signs are flipped).',
        hint3: 'Both $\\frac{\\pi}{3}$ and $\\frac{\\pi}{4}$ have known exact values; their sum is $\\frac{7\\pi}{12}$. For the last one, $\\frac{13\\pi}{12}$ is just past $\\pi$, in Quadrant III.',
        explanation: '$\\sin A\\cos B - \\cos A\\sin B = \\sin(A-B)$. $\\cos A\\cos B + \\sin A\\sin B = \\cos(A-B)$. $\\frac{7\\pi}{12} = \\frac{\\pi}{3}+\\frac{\\pi}{4}$ uses standard angles. $\\frac{13\\pi}{12}$ is in Quadrant III, where cosine is negative, whichever split you use.'
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
            question: '$\\cos \\frac{\\pi}{5}\\cos \\frac{3\\pi}{10} - \\sin \\frac{\\pi}{5}\\sin \\frac{3\\pi}{10}$ equals:',
            options: [
              '$\\cos(-\\frac{\\pi}{10})$',
              '$\\cos \\frac{\\pi}{2}$',
              '$\\sin \\frac{\\pi}{2}$',
              '$\\sin(-\\frac{\\pi}{10})$'
            ],
            correctAnswer: 1,
            explanation: 'This matches $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$ with $A=\\frac{\\pi}{5}, B=\\frac{3\\pi}{10}$. So $\\cos(\\frac{2\\pi}{10}+\\frac{3\\pi}{10}) = \\cos \\frac{\\pi}{2} = 0$. The difference $A - B$ belongs to the plus sign, and the sine options use the wrong function for matched products.'
          },
          {
            question: 'Angle $A$ is in Quadrant II with $\\sin A = \\frac{3}{5}$, and angle $B$ is in Quadrant I with $\\cos B = \\frac{12}{13}$. What is $\\cos(A + B)$?',
            options: [
              '$-\\frac{63}{65}$',
              '$\\frac{33}{65}$',
              '$-\\frac{33}{65}$',
              '$\\frac{63}{65}$'
            ],
            correctAnswer: 0,
            explanation: 'In Quadrant II, $\\cos A = -\\frac{4}{5}$; in Quadrant I, $\\sin B = \\frac{5}{13}$. Then $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B = -\\frac{48}{65} - \\frac{15}{65} = -\\frac{63}{65}$. Taking $\\cos A$ positive gives $\\frac{33}{65}$, and $-\\frac{33}{65}$ or $\\frac{63}{65}$ come from using a plus sign in the cosine formula.'
          }
        ]
      }
    }
  ]
};
