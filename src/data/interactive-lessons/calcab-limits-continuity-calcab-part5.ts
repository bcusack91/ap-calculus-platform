export const calcabLimitsPart5Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit5-intro',
      type: 'text' as const,
      content: `# ∫ Continuity & the Intermediate Value Theorem

**Part 5 of 7 — When Functions Behave Nicely**

---

### Topics in This Part

| Section |
|---------|
| 📖 The Three Conditions for Continuity |
| Types of Discontinuities |
| 📌 Continuity on an Interval |
| Functions That Are Always Continuous |
| The Intermediate Value Theorem (IVT) |

> 🔑 **Key Concept:** A function is continuous at a point when its limit equals its function value. The IVT guarantees that continuous functions on closed intervals take on every intermediate value — a powerful existence theorem.`
    },
    {
      id: 'limit5-definition',
      type: 'text' as const,
      content: `
## 📖 The Three Conditions for Continuity at $x = c$

$$\\boxed{f \\text{ is continuous at } x = c \\iff \\begin{cases} 1. \\ f(c) \\text{ is defined} \\\\ 2. \\ \\lim_{x \\to c} f(x) \\text{ exists} \\\\ 3. \\ \\lim_{x \\to c} f(x) = f(c) \\end{cases}}$$

If **any** condition fails → $f$ is discontinuous at $c$.

---

### Checking Continuity: Systematic Approach

**Example:** Is $f(x) = \\frac{x^2-1}{x-1}$ continuous at $x = 1$?

1. $f(1) = \\frac{0}{0}$ — undefined ❌ (Condition 1 fails)

$f$ is discontinuous at $x = 1$, even though $\\lim_{x \\to 1} f(x) = 2$ exists.

---

**Example:** $g(x) = \\begin{cases} x^2 & x \\neq 3 \\\\ 5 & x = 3 \\end{cases}$

1. $g(3) = 5$ ✓
2. $\\lim_{x \\to 3} g(x) = 9$ ✓
3. $9 \\neq 5$ ❌ (Condition 3 fails)

> **AP Tip:** On free-response questions, always check all three conditions explicitly. Even if the answer seems obvious, showing the systematic check earns full credit.`
    },
    {
      id: 'limit5-types',
      type: 'text' as const,
      content: `
## Types of Discontinuities

| Type | Description | Which Condition Fails? | Example |
|------|------------|----------------------|---------|
| **Removable (hole)** | Limit exists but $f(c)$ is missing or wrong | Condition 1 or 3 | $\\frac{x^2-4}{x-2}$ at $x=2$ |
| **Jump** | One-sided limits exist but differ | Condition 2 | Floor function $\\lfloor x \\rfloor$ at integers |
| **Infinite** | Function → $\\pm\\infty$ | Condition 2 | $\\frac{1}{x}$ at $x=0$ |
| **Oscillating** | Function oscillates without settling | Condition 2 | $\\sin(1/x)$ at $x=0$ |

---

### Why "Removable" Matters

A removable discontinuity can be "fixed" by redefining $f(c)$ to equal the limit:

$$f(x) = \\frac{x^2-4}{x-2} \\quad \\text{has a hole at } x = 2$$

Define $f(2) = 4$ (the limit value) → now $f$ is continuous at $x = 2$.

> 🔑 **Key Fact:** A discontinuity is removable if and only if $\\lim_{x \\to c} f(x)$ exists as a finite number.`
    },
    {
      id: 'limit5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What type of discontinuity does $f(x) = \\frac{x^2 - 4}{x - 2}$ have at $x = 2$?',
            options: ['Removable (hole)', 'Jump', 'Infinite (vertical asymptote)', 'No discontinuity'],
            correctAnswer: 0,
            explanation: '$f(x) = \\frac{(x-2)(x+2)}{x-2}$. The limit is $4$, but $f(2)$ is undefined. Removable discontinuity.'
          },
          {
            question: 'What type of discontinuity does $f(x) = \\frac{1}{x-5}$ have at $x = 5$?',
            options: ['Removable', 'Jump', 'Infinite', 'Oscillating'],
            correctAnswer: 2,
            explanation: 'As $x \\to 5$, $f(x) \\to \\pm\\infty$. This is an infinite discontinuity (vertical asymptote).'
          },
          {
            question: 'For $f(x) = \\begin{cases} x^2 & x \\leq 1 \\\\ 2x - k & x > 1 \\end{cases}$, find $k$ so that $f$ is continuous at $x = 1$.',
            options: ['$k = 0$', '$k = 1$', '$k = -1$', '$k = 2$'],
            correctAnswer: 1,
            explanation: 'For continuity: $\\lim_{x \\to 1^-} x^2 = 1$ must equal $\\lim_{x \\to 1^+} (2x-k) = 2-k$. So $1 = 2-k \\Rightarrow k = 1$.'
          }
        ]
      }
    },
    {
      id: 'limit5-always-continuous',
      type: 'text' as const,
      content: `
## 📌 Functions That Are Always Continuous

These functions are continuous **on their entire domain**:

| Function Type | Domain | Continuous On |
|--------------|--------|---------------|
| Polynomials | $(-\\infty, \\infty)$ | All reals |
| $e^x$, $a^x$ | $(-\\infty, \\infty)$ | All reals |
| $\\sin x$, $\\cos x$ | $(-\\infty, \\infty)$ | All reals |
| $\\ln x$ | $(0, \\infty)$ | All positive reals |
| $\\sqrt{x}$ | $[0, \\infty)$ | All non-negative reals |
| $\\frac{1}{x}$ | $x \\neq 0$ | Everywhere except $x=0$ |

---

### Building Continuous Functions

If $f$ and $g$ are continuous at $c$, then these are also continuous at $c$:
- $f + g$, $f - g$, $f \\cdot g$
- $\\frac{f}{g}$ (provided $g(c) \\neq 0$)
- $f(g(x))$ (composition) — continuous at $c$ if $g$ is continuous at $c$ and $f$ is continuous at $g(c)$

> 🔑 **Key Fact:** Most functions you encounter are continuous. Discontinuities typically occur at division by zero, piecewise breakpoints, or domain boundaries.`
    },
    {
      id: 'limit5-ivt',
      type: 'text' as const,
      content: `
## The Intermediate Value Theorem (IVT)

$$\\boxed{\\text{If } f \\text{ is continuous on } [a,b], \\text{ then } f \\text{ takes every value between } f(a) \\text{ and } f(b).}$$

More precisely: if $N$ is between $f(a)$ and $f(b)$, then there exists $c \\in (a,b)$ with $f(c) = N$.

---

### Using IVT to Prove a Root Exists

**Claim:** $x^3 + x - 1 = 0$ has a solution in $[0,1]$.

**Proof:**
1. Let $f(x) = x^3 + x - 1$ (polynomial → continuous on $[0,1]$) ✓
2. $f(0) = -1 < 0$ and $f(1) = 1 > 0$ ✓
3. Since $f$ is continuous on $[0,1]$ and $0$ is between $f(0) = -1$ and $f(1) = 1$, by the IVT there exists $c \\in (0,1)$ with $f(c) = 0$. ✓

---

### AP Exam IVT Justification Template

> "Since $f$ is continuous on $[a,b]$ and $f(a) = \\text{[value]}$ and $f(b) = \\text{[value]}$, and $N = \\text{[target]}$ is between $f(a)$ and $f(b)$, by the IVT there exists $c \\in (a,b)$ with $f(c) = N$."

> **AP Tip:** You MUST state that $f$ is continuous — IVT requires it! Forgetting this is one of the most common point-losing mistakes.`
    },
    {
      id: 'limit5-quiz2',
      type: 'multiple-choice' as const,
      content: `**IVT Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $f$ is continuous on $[1, 5]$, $f(1) = -3$, and $f(5) = 4$, which value is $f$ guaranteed to take?',
            options: ['$-4$', '$0$', '$5$', 'All of the above'],
            correctAnswer: 1,
            explanation: 'By IVT, $f$ takes every value between $-3$ and $4$. Since $0$ is in $[-3, 4]$, it is guaranteed. $-4$ and $5$ are outside this range.'
          },
          {
            question: 'Can we use IVT to conclude that $f(x) = \\frac{1}{x}$ takes the value 0 on $[-1, 1]$?',
            options: ['Yes, because $f(-1) = -1 < 0 < 1 = f(1)$', 'No, because $f$ is not continuous on $[-1, 1]$', 'Yes, because $f$ is a rational function', 'No, because 0 is not in the range of $f$'],
            correctAnswer: 1,
            explanation: '$f(x) = \\frac{1}{x}$ is NOT continuous on $[-1, 1]$ because it is undefined at $x = 0$. IVT requires continuity on the entire interval.'
          }
        ]
      }
    },
    {
      id: 'limit5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Classify the Discontinuities** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$f(x) = \\frac{x^2-9}{x-3}$ at $x = 3$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
          { label: '$h(x) = \\lfloor x \\rfloor$ (floor function) at $x = 2$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
          { label: '$g(x) = x^3 - 2x$ at $x = 1$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] }
        ],
        correctAnswers: ['Removable', 'Jump', 'Continuous'],
        hint1: 'Factor the numerator: $x^2-9 = (x-3)(x+3)$. Can you cancel?',
        hint2: 'The floor function jumps at every integer.',
        hint3: 'Polynomials are continuous everywhere.',
        explanation: '$\\frac{x^2-9}{x-3}$ has a removable hole at $x=3$ (limit = 6). Floor function jumps from 1 to 2 at $x=2$. $x^3 - 2x$ is a polynomial — continuous everywhere.'
      }
    },
    {
      id: 'limit5-input',
      type: 'input-box' as const,
      content: `**Apply the IVT** ✍️`,
      exercise: {
        question: 'Let $f(x) = x^2 - 3$. $f(1) = -2$ and $f(2) = 1$. By IVT, $f(c) = 0$ for some $c$ in $(1, 2)$. What is the exact value of $c$?',
        correctAnswer: 'sqrt(3)',
        acceptableAnswers: ['sqrt(3)', '√3', '1.732', '1.73'],
        hint1: 'Solve $x^2 - 3 = 0$.',
        hint2: '$x^2 = 3 \\Rightarrow x = \\pm\\sqrt{3}$. Which root is in $(1, 2)$?',
        explanation: '$x^2 - 3 = 0 \\Rightarrow x = \\sqrt{3} \\approx 1.732$. Since $\\sqrt{3} \\in (1, 2)$, the IVT-guaranteed value is $c = \\sqrt{3}$.'
      }
    }
  ]
}
