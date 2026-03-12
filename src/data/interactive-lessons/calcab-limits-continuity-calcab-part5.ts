export const calcabLimitsPart5Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit5-intro',
      type: 'text' as const,
      content: `
# ∫ Continuity & the Intermediate Value Theorem

**Part 5 of 7 — When Functions Behave Nicely**

### 1. Definition of Continuity

A function $f$ is **continuous at** $x = c$ if all three conditions hold:

1. $f(c)$ is defined
2. $\\lim_{x \\to c} f(x)$ exists
3. $\\lim_{x \\to c} f(x) = f(c)$

If any condition fails, $f$ has a **discontinuity** at $c$.

### 2. Types of Discontinuities

**Removable (hole):** The limit exists but $f(c)$ is missing or wrong.
- Example: $f(x) = \\frac{x^2-1}{x-1}$ at $x=1$. The limit is 2, but $f(1)$ is undefined.

**Jump:** The one-sided limits exist but are not equal.
- Example: $f(x) = \\begin{cases} 1 & x < 0 \\\\ 2 & x \\geq 0 \\end{cases}$

**Infinite (vertical asymptote):** The function approaches $\\pm\\infty$.
- Example: $f(x) = \\frac{1}{x}$ at $x = 0$.

### 3. Continuity on an Interval

$f$ is continuous on $[a,b]$ if:
- $f$ is continuous at every point in $(a,b)$
- $\\lim_{x \\to a^+} f(x) = f(a)$ (right-continuous at left endpoint)
- $\\lim_{x \\to b^-} f(x) = f(b)$ (left-continuous at right endpoint)

**Key fact:** Polynomials, $e^x$, $\\sin x$, $\\cos x$, and $\\ln x$ (on its domain) are continuous everywhere they are defined.

### 4. The Intermediate Value Theorem (IVT)

If $f$ is continuous on $[a,b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c \\in (a,b)$ such that $f(c) = N$.

**Application:** Show that $x^3 + x - 1 = 0$ has a solution in $[0,1]$.
- $f(0) = -1 < 0$
- $f(1) = 1 > 0$
- Since $f$ is continuous and changes sign, by IVT there exists $c \\in (0,1)$ with $f(c) = 0$.
      `
    },
    {
      id: 'limit5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What type of discontinuity does $f(x) = \\frac{x^2 - 4}{x - 2}$ have at $x = 2$?',
            options: ['Removable (hole)', 'Jump', 'Infinite (vertical asymptote)', 'No discontinuity — $f$ is continuous at $x=2$'],
            correctAnswer: 0,
            explanation: '$f(x) = \\frac{(x-2)(x+2)}{x-2}$, so $\\lim_{x \\to 2} f(x) = 4$ exists, but $f(2)$ is undefined (division by zero). This is a removable discontinuity — the limit exists but the function value is missing.'
          },
          {
            question: 'If $f$ is continuous on $[1, 5]$, $f(1) = -3$, and $f(5) = 4$, which value is $f$ guaranteed to take in $(1,5)$?',
            options: ['$-4$', '$0$', '$5$', '$f$ is not guaranteed to take any value'],
            correctAnswer: 1,
            explanation: 'By IVT, $f$ takes every value between $f(1) = -3$ and $f(5) = 4$. Since $0$ is between $-3$ and $4$, there must exist $c \\in (1,5)$ with $f(c) = 0$. The value $-4$ is outside the range, and $5$ is above $f(5)$.'
          }
        ]
      }
    },
    {
      id: 'limit5-detail',
      type: 'text' as const,
      content: `
### Continuity Checklist (AP Exam Format)

To show $f$ is continuous at $x=c$, state:
1. "$f(c)$ is defined and equals ___"
2. "$\\lim_{x \\to c} f(x)$ exists and equals ___"
3. "Since $\\lim_{x \\to c} f(x) = f(c)$, $f$ is continuous at $c$"

### IVT on the AP Exam

**Standard IVT justification:**
- "Since $f$ is continuous on $[a,b]$..." ← must state continuity
- "...and $f(a) = \\text{value}$ and $f(b) = \\text{value}$..." ← state the function values
- "...by the IVT, there exists $c \\in (a,b)$ such that $f(c) = N$." ← conclusion
      `
    },
    {
      id: 'limit5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\begin{cases} x^2 & x \\leq 1 \\\\ 2x - k & x > 1 \\end{cases}$, find $k$ so that $f$ is continuous at $x = 1$.',
            options: ['$k = 0$', '$k = 1$', '$k = -1$', '$k = 2$'],
            correctAnswer: 1,
            explanation: 'For continuity: $\\lim_{x \\to 1^-} x^2 = 1$ must equal $\\lim_{x \\to 1^+} (2x-k) = 2-k$. So $1 = 2-k$, giving $k = 1$.'
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
          { label: '$f(x) = \\frac{1}{x-5}$ at $x = 5$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
          { label: '$g(x) = \\frac{x^2-9}{x-3}$ at $x = 3$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
          { label: '$h(x) = \\lfloor x \\rfloor$ (floor function) at $x = 2$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] }
        ],
        correctAnswers: ['Infinite', 'Removable', 'Jump'],
        hint1: 'What happens to $\\frac{1}{x-5}$ as $x$ approaches 5?',
        hint2: 'Factor the numerator of $g$: can you cancel the problematic factor?',
        hint3: 'The floor function "jumps" at every integer — what are the left and right limits at $x=2$?',
        explanation: '$\\frac{1}{x-5} \\to \\pm\\infty$ (infinite/vertical asymptote). $\\frac{x^2-9}{x-3} = x+3$ with limit 6 but undefined at $x=3$ (removable hole). $\\lfloor x \\rfloor$ jumps from 1 to 2 at $x=2$.'
      }
    }
  ]
}
