export const calcabLimitsInfinityPart2Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai2-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity — Radicals & Exponentials

**Part 2 of 7 — Beyond Rational Functions**

---

### Topics in This Part

| Section |
|---------|
| 📖 Limits with Radicals |
| Exponential & Logarithmic Limits at Infinity |
| 📌 Growth Rate Hierarchy |
| Worked Examples |

> 🔑 **Key Concept:** Different function families grow at vastly different rates. Understanding this hierarchy is critical for evaluating limits at infinity.`
    },
    {
      id: 'lai2-radicals',
      type: 'text' as const,
      content: `
## 📖 Limits Involving Radicals

When a radical appears in a limit at infinity, careful algebraic manipulation is required.

### Key Technique: Factor Out $x$ from Under the Radical

For $x > 0$: $\\sqrt{x^2} = x$

For $x < 0$: $\\sqrt{x^2} = -x$ (since $\\sqrt{x^2} = |x|$)

---

### Example 1: $\\lim_{x \\to \\infty} \\frac{x}{\\sqrt{x^2 + 3}}$

**Step 1:** Factor $x^2$ from under the radical:

$$\\frac{x}{\\sqrt{x^2 + 3}} = \\frac{x}{\\sqrt{x^2(1 + 3/x^2)}} = \\frac{x}{|x|\\sqrt{1 + 3/x^2}}$$

**Step 2:** Since $x \\to \\infty$, we have $x > 0$, so $|x| = x$:

$$= \\frac{x}{x\\sqrt{1 + 3/x^2}} = \\frac{1}{\\sqrt{1 + 3/x^2}} \\to \\frac{1}{\\sqrt{1+0}} = 1$$

---

### Example 2: $\\lim_{x \\to -\\infty} \\frac{x}{\\sqrt{x^2 + 3}}$

Same algebra, but now $x < 0$, so $|x| = -x$:

$$\\frac{x}{-x\\sqrt{1 + 3/x^2}} = \\frac{-1}{\\sqrt{1 + 0}} = -1$$

> ⚠️ **Warning:** The sign of $x$ matters critically when extracting $x$ from $\\sqrt{x^2}$. This is the most common source of errors on the AP exam for this topic.

---

### Example 3: $\\lim_{x \\to \\infty} (\\sqrt{x^2 + x} - x)$

Multiply by conjugate:

$$\\frac{(\\sqrt{x^2+x}-x)(\\sqrt{x^2+x}+x)}{\\sqrt{x^2+x}+x} = \\frac{x^2+x-x^2}{\\sqrt{x^2+x}+x} = \\frac{x}{\\sqrt{x^2+x}+x}$$

Divide numerator and denominator by $x$ (with $x > 0$):

$$= \\frac{1}{\\sqrt{1+1/x}+1} \\to \\frac{1}{1+1} = \\frac{1}{2}$$`
    },
    {
      id: 'lai2-exp-log',
      type: 'text' as const,
      content: `
## Exponential & Logarithmic Limits at Infinity

### Exponential Functions

$$\\lim_{x \\to \\infty} e^x = \\infty \\qquad \\lim_{x \\to -\\infty} e^x = 0$$

$$\\lim_{x \\to \\infty} e^{-x} = 0 \\qquad \\lim_{x \\to -\\infty} e^{-x} = \\infty$$

For any base $a > 1$: $\\lim_{x \\to \\infty} a^x = \\infty$ and $\\lim_{x \\to -\\infty} a^x = 0$.

### Logarithmic Functions

$$\\lim_{x \\to \\infty} \\ln x = \\infty \\qquad \\text{(but very slowly)}$$

The logarithm grows, but **slower than any positive power of $x$**:

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^p} = 0 \\quad \\text{for any } p > 0$$

---

## 📌 Growth Rate Hierarchy

From **slowest** to **fastest** growth as $x \\to \\infty$:

$$\\boxed{\\ln x \\ll x^{1/2} \\ll x \\ll x^2 \\ll x^n \\ll e^x \\ll x!}$$

| Function | At $x = 10$ | At $x = 100$ |
|----------|------------|-------------|
| $\\ln x$ | 2.3 | 4.6 |
| $\\sqrt{x}$ | 3.2 | 10 |
| $x$ | 10 | 100 |
| $x^2$ | 100 | 10,000 |
| $e^x$ | 22,026 | $2.69 \\times 10^{43}$ |

> 🔑 **Key Concept:** Exponentials **always beat** polynomials at infinity, and polynomials **always beat** logarithms. This hierarchy is essential for evaluating limits when different function types compete.

---

### Applying the Hierarchy

$$\\lim_{x \\to \\infty} \\frac{x^{100}}{e^x} = 0 \\qquad \\text{(exponential dominates polynomial)}$$

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}} = 0 \\qquad \\text{(power function dominates logarithm)}$$

$$\\lim_{x \\to \\infty} x^3 e^{-x} = 0 \\qquad \\text{(rewrite: } \\frac{x^3}{e^x} \\to 0)$$`
    },
    {
      id: 'lai2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Growth Rates & Radicals Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which limit equals $0$?',
            options: ['$\\lim_{x \\to \\infty} \\frac{e^x}{x^{10}}$', '$\\lim_{x \\to \\infty} \\frac{x^{10}}{e^x}$', '$\\lim_{x \\to \\infty} \\frac{x^2}{\\ln x}$', '$\\lim_{x \\to \\infty} \\frac{e^x}{\\ln x}$'],
            correctAnswer: 1,
            explanation: 'Exponentials dominate polynomials: $\\frac{x^{10}}{e^x} \\to 0$. All other options diverge to $\\infty$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{3x}{\\sqrt{4x^2+1}}$.',
            options: ['$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$\\frac{3}{4}$', '$-\\frac{3}{4}$'],
            correctAnswer: 1,
            explanation: 'For $x < 0$, $\\sqrt{4x^2} = -2x$. So $\\frac{3x}{-2x\\sqrt{1+1/(4x^2)}} = \\frac{-3}{2\\sqrt{1+0}} = -\\frac{3}{2}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} (\\sqrt{x^2+4x} - x)$.',
            options: ['$0$', '$2$', '$4$', '$\\infty$'],
            correctAnswer: 1,
            explanation: 'Multiply by conjugate: $\\frac{4x}{\\sqrt{x^2+4x}+x}$. Divide by $x$: $\\frac{4}{\\sqrt{1+4/x}+1} \\to \\frac{4}{2} = 2$.'
          }
        ]
      }
    },
    {
      id: 'lai2-worked-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 4: $\\lim_{x \\to \\infty} \\frac{2e^x + 3}{5e^x - 1}$

Divide numerator and denominator by $e^x$:

$$\\frac{2 + 3e^{-x}}{5 - e^{-x}} \\to \\frac{2 + 0}{5 - 0} = \\frac{2}{5}$$

---

### Example 5: $\\lim_{x \\to \\infty} \\frac{e^{2x}}{e^x + 1}$

Divide by $e^x$:

$$\\frac{e^x}{1 + e^{-x}} \\to \\frac{\\infty}{1} = \\infty$$

---

### Example 6: $\\lim_{x \\to -\\infty} \\frac{e^{2x}}{e^x + 1}$

As $x \\to -\\infty$, $e^{2x} \\to 0$ and $e^x \\to 0$:

$$\\frac{0}{0+1} = 0$$

---

### Example 7: $\\lim_{x \\to \\infty} x \\sin\\left(\\frac{1}{x}\\right)$

Let $u = \\frac{1}{x}$, so $u \\to 0^+$:

$$\\lim_{u \\to 0^+} \\frac{\\sin u}{u} = 1$$

> **AP Tip:** The identity $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$ frequently appears in disguise in limits at infinity.`
    },
    {
      id: 'lai2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Limits at Infinity Drill — Advanced** 🧮

Evaluate each limit. Enter a number or fraction. Enter "0" or "infinity" as appropriate.

**1)** $\\lim_{x \\to \\infty} \\frac{3e^x - 2}{7e^x + 4}$

**2)** $\\lim_{x \\to \\infty} \\frac{5x}{\\sqrt{25x^2 + 9}}$

**3)** $\\lim_{x \\to \\infty} \\frac{(\\ln x)^2}{x}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3/7', '1', '0'],
        hint1: 'Divide numerator and denominator by $e^x$: $\\frac{3 - 2e^{-x}}{7 + 4e^{-x}} \\to \\frac{3}{7}$.',
        hint2: 'Factor $25x^2$ from the radical: $\\frac{5x}{5x\\sqrt{1+9/(25x^2)}} = \\frac{1}{\\sqrt{1+0}} = 1$.',
        hint3: 'Logarithms always lose to polynomials: $(\\ln x)^2$ grows slower than $x$, so the limit is $0$.',
        explanation: '1) $3/7$. 2) $1$. 3) $0$ by the growth hierarchy.'
      }
    },
    {
      id: 'lai2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Classify the Growth Rate** 🔽\n\nRank each pair — which function dominates as $x \\to \\infty$?`,
      exercise: {
        dropdowns: [
          { label: '$x^5$ vs. $e^x$: which dominates?', options: ['$x^5$', '$e^x$', 'They grow equally'] },
          { label: '$\\ln x$ vs. $x^{0.01}$: which dominates?', options: ['$\\ln x$', '$x^{0.01}$', 'They grow equally'] },
          { label: '$3^x$ vs. $x^{100}$: which dominates?', options: ['$3^x$', '$x^{100}$', 'They grow equally'] },
          { label: '$e^x$ vs. $e^{2x}$: which dominates?', options: ['$e^x$', '$e^{2x}$', 'They grow equally'] }
        ],
        correctAnswers: ['$e^x$', '$x^{0.01}$', '$3^x$', '$e^{2x}$'],
        hint1: 'Any exponential function with base $> 1$ dominates any polynomial.',
        hint2: 'Any positive power of $x$ dominates $\\ln x$, even $x^{0.01}$.',
        hint3: '$3^x$ is exponential, $x^{100}$ is polynomial.',
        explanation: 'Exponentials always beat polynomials, which always beat logarithms. $e^{2x} = (e^x)^2$ grows faster than $e^x$.'
      }
    },
    {
      id: 'lai2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Radicals & Growth Rates** ✅`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{\\sqrt{9x^4 + x}}{x^2 + 2}$.',
            options: ['$0$', '$3$', '$9$', '$\\infty$'],
            correctAnswer: 1,
            explanation: '$\\sqrt{9x^4 + x} \\approx \\sqrt{9x^4} = 3x^2$. So $\\frac{3x^2}{x^2+2} \\to 3$.'
          },
          {
            question: 'As $x \\to \\infty$, which expression approaches a finite nonzero number?',
            options: ['$\\frac{e^x}{x^3}$', '$\\frac{\\ln x}{x}$', '$\\frac{3x^2+1}{7x^2-2}$', '$\\frac{x^4}{e^x}$'],
            correctAnswer: 2,
            explanation: '$\\frac{3x^2+1}{7x^2-2} \\to \\frac{3}{7}$, a finite nonzero number. The others approach $\\infty$ or $0$.'
          }
        ]
      }
    }
  ]
}
