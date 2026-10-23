const figUnitCircle = {
  svg: '<svg viewBox="0 0 370 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><title>Unit circle with the point at angle theta, its reflection across the x-axis at angle minus theta (same x-coordinate, opposite y-coordinate) and its reflection across the line y = x at angle pi/2 minus theta (coordinates swapped)</title><g class="fig-muted"><circle cx="135" cy="135" r="90" fill="none" stroke="currentColor" stroke-width="1.2"/></g><g stroke="currentColor" stroke-width="1.3"><line x1="18" y1="135" x2="252" y2="135"/><line x1="135" y1="252" x2="135" y2="18"/></g><g class="fig-muted"><line x1="214.5" y1="55.5" x2="55.5" y2="214.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/></g><g class="fig-accent"><line x1="135" y1="135" x2="208.2" y2="82.7" stroke="currentColor" stroke-width="1.8"/></g><g class="fig-accent"><circle cx="208.2" cy="82.7" r="4" fill="currentColor"/></g><g class="fig-accent"><text x="216.2" y="78.7" font-size="10.5" fill="currentColor" text-anchor="start">(cos θ, sin θ)</text></g><g class="fig-accent-2"><line x1="135" y1="135" x2="208.2" y2="187.3" stroke="currentColor" stroke-width="1.8"/></g><g class="fig-accent-2"><circle cx="208.2" cy="187.3" r="4" fill="currentColor"/></g><g class="fig-accent-2"><text x="216.2" y="199.3" font-size="10.5" fill="currentColor" text-anchor="start">(cos θ, −sin θ)</text></g><g class="fig-accent-2"><line x1="135" y1="135" x2="187.3" y2="61.8" stroke="currentColor" stroke-width="1.8"/></g><g class="fig-accent-2"><circle cx="187.3" cy="61.8" r="4" fill="currentColor"/></g><g class="fig-accent-2"><text x="195.3" y="55.8" font-size="10.5" fill="currentColor" text-anchor="start">(sin θ, cos θ)</text></g><g class="fig-accent"><text x="177" y="123.5" font-size="11" fill="currentColor" text-anchor="middle">θ</text></g><g class="fig-accent-2"><text x="177" y="150.5" font-size="11" fill="currentColor" text-anchor="middle">−θ</text></g><g class="fig-accent-2"><text x="147" y="65.2" font-size="10.5" fill="currentColor" text-anchor="end">π/2 − θ</text></g><g class="fig-muted"><text x="258" y="36" font-size="10.5" fill="currentColor" text-anchor="end">y = x</text></g></svg>',
  alt: 'Unit circle showing the point at angle theta with coordinates (cos theta, sin theta); its reflection across the x-axis at angle negative theta with coordinates (cos theta, negative sin theta); and its reflection across the dashed line y = x at angle pi/2 minus theta with coordinates (sin theta, cos theta).',
  caption: 'Negating $\\theta$ reflects the point across the $x$-axis; replacing $\\theta$ by $\\frac{\\pi}{2} - \\theta$ reflects it across the line $y = x$.',
  size: 'md' as const,
}

export const precalcTrigIdentitiesPart3Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🪞 Trigonometric Identities — Even-Odd & Cofunction Identities

**Part 3 of 7**

**Even-odd** identities describe what happens when you negate an angle. **Cofunction** identities link a function to its complement. Both are equivalent forms you can read straight off the unit circle, and both are special cases of the sum and difference identities in Part 4.

### Even-Odd Identities

| Function | $f(-\\theta)$ | Type |
|:---------|:-------------|:-----|
| $\\cos(-\\theta)$ | $\\cos\\theta$ | **Even** |
| $\\sin(-\\theta)$ | $-\\sin\\theta$ | **Odd** |
| $\\tan(-\\theta)$ | $-\\tan\\theta$ | **Odd** |

The reciprocal and quotient functions inherit these: $\\sec(-\\theta) = \\sec\\theta$ (even, like cosine), while $\\csc(-\\theta) = -\\csc\\theta$ and $\\cot(-\\theta) = -\\cot\\theta$ (odd, like sine and tangent).

> **Why**: cosine is the $x$-coordinate, which a reflection across the $x$-axis leaves unchanged, so cosine (and secant, its reciprocal) is even. Every other function involves $\\sin\\theta$, the $y$-coordinate, which flips sign, so they are odd.

### Cofunction Identities (Complementary Angles)

$$\\boxed{\\sin\\theta = \\cos\\!\\left(\\frac{\\pi}{2} - \\theta\\right) \\qquad \\cos\\theta = \\sin\\!\\left(\\frac{\\pi}{2} - \\theta\\right)}$$

The same swap works for the other pairs: $\\tan\\theta = \\cot(\\frac{\\pi}{2} - \\theta)$ and $\\sec\\theta = \\csc(\\frac{\\pi}{2} - \\theta)$.

> The **co** in cosine, cosecant, cotangent stands for **complement**!
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Simplify $\\sin(-\\theta)\\cos(-\\theta)$

$$\\sin(-\\theta)\\cos(-\\theta) = (-\\sin\\theta)(\\cos\\theta) = -\\sin\\theta\\cos\\theta$$

Sine is odd (picks up a negative), cosine is even (stays the same).

### Example 2: Evaluate $\\cos(-\\frac{\\pi}{3})$ without a calculator

$\\cos$ is even, so $\\cos(-\\frac{\\pi}{3}) = \\cos \\frac{\\pi}{3} = \\frac{1}{2}$.

### Example 3: Rewrite $\\sin \\frac{2\\pi}{5}$ as a cosine

$$\\sin \\frac{2\\pi}{5} = \\cos\\!\\left(\\frac{\\pi}{2} - \\frac{2\\pi}{5}\\right) = \\cos \\frac{\\pi}{10}$$

(Work in tenths: $\\frac{\\pi}{2} = \\frac{5\\pi}{10}$ and $\\frac{2\\pi}{5} = \\frac{4\\pi}{10}$.)

### Example 4: Show that $\\sin\\!\\left(x + \\frac{\\pi}{2}\\right)$ and $\\cos x$ are equivalent

Use the cofunction identity and the fact that cosine is even:

$$\\sin\\!\\left(x + \\frac{\\pi}{2}\\right) = \\cos\\!\\left(\\frac{\\pi}{2} - \\left(x + \\frac{\\pi}{2}\\right)\\right) = \\cos(-x) = \\cos x$$

> 💡 **Phase shifts as identities:** this is exactly why shifting the sine graph **left** by $\\frac{\\pi}{2}$ produces the cosine graph. The algebra and the picture agree. (Part 4 gives a second proof with the sum identity.)
      `
    },
    {
      id: 'p3-unit-circle',
      type: 'text' as const,
      figure: figUnitCircle,
      content: `
## 🔍 Why These Work — Unit Circle Reasoning

### Even-Odd: Reflection Across the $x$-axis

Negating $\\theta$ reflects the point $(\\cos\\theta,\\,\\sin\\theta)$ to $(\\cos\\theta,\\,-\\sin\\theta)$.

| Coordinate | After Reflection | Conclusion |
|:-----------|:----------------|:-----------|
| $x$-coordinate ($\\cos$) | Unchanged | $\\cos(-\\theta) = \\cos\\theta$ — **even** |
| $y$-coordinate ($\\sin$) | Flipped sign | $\\sin(-\\theta) = -\\sin\\theta$ — **odd** |

### Cofunction: Reflection Across the Line $y = x$

The point at angle $\\theta$ has coordinates $(\\cos\\theta, \\sin\\theta)$.

The point at angle $\\frac{\\pi}{2} - \\theta$ has coordinates $(\\sin\\theta, \\cos\\theta)$ — the $x$ and $y$ swap, which is what reflecting across the line $y = x$ does. (It is **not** a rotation: a quarter-turn rotation would send the point to $(-\\sin\\theta, \\cos\\theta)$.)

This swap is exactly why $\\sin\\theta = \\cos(\\frac{\\pi}{2} - \\theta)$.

### Quick Decision Table

| I want to … | Use … |
|:------------|:------|
| Remove a negative angle | Even-odd identities |
| Replace $\\sin$ with $\\cos$ (or vice versa) | Cofunction identities |
| Both at once | Chain them: even-odd first, cofunction second |
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\sin(-\\theta)\\csc(-\\theta)$ equals:',
            options: [
              '$1$',
              '$-1$',
              '$\\cos^2\\theta$',
              '$\\sin^2\\theta$'
            ],
            correctAnswer: 0,
            explanation: '$\\sin(-\\theta) = -\\sin\\theta$ and $\\csc(-\\theta) = -\\csc\\theta$. So $(-\\sin\\theta)(-\\csc\\theta) = \\sin\\theta \\cdot \\csc\\theta = 1$.'
          },
          {
            question: 'Which equals $\\cos \\frac{\\pi}{5}$?',
            options: [
              '$\\sin \\frac{\\pi}{5}$',
              '$\\sin \\frac{3\\pi}{10}$',
              '$-\\cos \\frac{\\pi}{5}$',
              '$\\cos \\frac{3\\pi}{10}$'
            ],
            correctAnswer: 1,
            explanation: 'Cofunction: $\\cos \\frac{\\pi}{5} = \\sin(\\frac{\\pi}{2} - \\frac{\\pi}{5}) = \\sin \\frac{3\\pi}{10}$. Changing only the function without changing the angle, or changing only the angle without changing the function, breaks the identity.'
          },
          {
            question: 'Which point on the unit circle corresponds to the angle $-\\theta$, if the angle $\\theta$ corresponds to $(a, b)$?',
            options: [
              '$(-a, b)$',
              '$(b, a)$',
              '$(a, -b)$',
              '$(-a, -b)$'
            ],
            correctAnswer: 2,
            explanation: 'Negating the angle reflects the point across the $x$-axis, keeping $x = a = \\cos\\theta$ and flipping $y$ to $-b = -\\sin\\theta$. $(b, a)$ is the reflection across $y = x$ (the angle $\\frac{\\pi}{2} - \\theta$), $(-a, b)$ is the angle $\\pi - \\theta$, and $(-a, -b)$ is $\\theta + \\pi$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Even-Odd & Cofunction Practice** 🧮

**1)** $\\cos(-\\frac{2\\pi}{3}) = \\cos(\\,?\\cdot\\pi)$ with the angle in $[0, \\pi]$. Enter its coefficient of $\\pi$ (type \`3/4\` for $\\frac{3\\pi}{4}$). (e.g., $\\cos(-\\frac{\\pi}{4}) = \\cos \\frac{\\pi}{4}$ since cosine is even)

**2)** $\\sin \\frac{\\pi}{12} = \\cos(\\,?\\cdot\\pi)$ with the angle in $[0, \\pi]$. Enter the coefficient of that angle (the complementary angle). (e.g., $\\sin \\frac{\\pi}{6} = \\cos \\frac{\\pi}{3}$ since $\\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}$)

**3)** Evaluate $\\tan(-\\frac{\\pi}{4})$. Write as an integer. (e.g., $\\sin(-\\frac{\\pi}{6}) = -\\sin \\frac{\\pi}{6} = -1/2$ since sine is odd)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2/3', '5/12', '-1'],
        hint1: 'Cosine is an even function: $\\cos(-\\theta) = \\cos\\theta$.',
        hint2: 'Cofunction: $\\sin\\theta = \\cos(\\frac{\\pi}{2} - \\theta)$. What is $\\frac{\\pi}{2} - \\frac{\\pi}{12} = \\frac{6\\pi}{12} - \\frac{\\pi}{12}$?',
        hint3: 'Tangent is odd: $\\tan(-\\frac{\\pi}{4}) = -\\tan \\frac{\\pi}{4}$. And $\\tan \\frac{\\pi}{4} = 1$.',
        explanation: '1) $\\cos(-\\frac{2\\pi}{3}) = \\cos \\frac{2\\pi}{3}$ (even). 2) $\\sin \\frac{\\pi}{12} = \\cos(\\frac{\\pi}{2} - \\frac{\\pi}{12}) = \\cos \\frac{5\\pi}{12}$. 3) $\\tan(-\\frac{\\pi}{4}) = -\\tan \\frac{\\pi}{4} = -1$ (odd).'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classification & Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sec(-\\theta)$ equals',
            options: ['$\\sec\\theta$', '$-\\sec\\theta$', '$\\csc\\theta$', '$-\\csc\\theta$']
          },
          {
            label: '$\\csc(-\\theta)$ equals',
            options: ['$\\csc\\theta$', '$-\\csc\\theta$', '$\\sec\\theta$', '$-\\sec\\theta$']
          },
          {
            label: '$\\tan \\frac{3\\pi}{10}$ equals',
            options: ['$\\cot \\frac{3\\pi}{10}$', '$\\cot \\frac{\\pi}{5}$', '$\\tan \\frac{\\pi}{5}$', '$-\\tan \\frac{3\\pi}{10}$']
          },
          {
            label: 'Cosine and secant are classified as',
            options: ['Odd functions', 'Even functions', 'Neither even nor odd', 'Cofunctions']
          }
        ],
        correctAnswers: ['$\\sec\\theta$', '$-\\csc\\theta$', '$\\cot \\frac{\\pi}{5}$', 'Even functions'],
        hint1: 'Secant inherits the even/odd property of cosine.',
        hint2: 'Cosecant inherits the even/odd property of sine.',
        hint3: '$\\tan\\theta = \\cot(\\frac{\\pi}{2} - \\theta)$. What is $\\frac{5\\pi}{10} - \\frac{3\\pi}{10}$?',
        explanation: '$\\sec(-\\theta) = \\sec\\theta$ (even). $\\csc(-\\theta) = -\\csc\\theta$ (odd). $\\tan \\frac{3\\pi}{10} = \\cot(\\frac{\\pi}{2}-\\frac{3\\pi}{10}) = \\cot \\frac{\\pi}{5}$ (cofunction). Cosine and secant are even.'
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
            question: 'Simplify $\\sin(-\\theta)\\sec(-\\theta)$.',
            options: [
              '$\\tan\\theta$',
              '$-\\tan\\theta$',
              '$\\cot\\theta$',
              '$-\\cot\\theta$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin(-\\theta) = -\\sin\\theta$ (odd). $\\sec(-\\theta) = \\sec\\theta$ (even). Product: $-\\sin\\theta \\cdot \\sec\\theta = -\\sin\\theta/\\cos\\theta = -\\tan\\theta$.'
          },
          {
            question: 'If $\\cos\\alpha = 0.6$ and $\\alpha + \\beta = \\frac{\\pi}{2}$, what is $\\sin\\beta$?',
            options: [
              '$0.8$',
              '$0.6$',
              '$0.4$',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Cofunction: $\\sin\\beta = \\sin(\\frac{\\pi}{2} - \\alpha) = \\cos\\alpha = 0.6$.'
          }
        ]
      }
    }
  ]
};
