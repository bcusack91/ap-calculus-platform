export const calcabContinuityIVTPart1Data = {
  topicSlug: 'continuity-ivt-calcab',
  sections: [
    {
      id: 'ci1-intro',
      type: 'text' as const,
      content: `# ∫ Continuity & the Intermediate Value Theorem

**Part 1 of 7 — What Does It Mean for a Function to Be Continuous?**

---

### Topics in This Part

| Section |
|---------|
| 📖 The Three Conditions for Continuity |
| Types of Discontinuities |
| 📌 Continuity on an Interval |
| One-Sided Continuity |

> 🔑 **Key Concept:** Continuity is one of the most foundational ideas in calculus. A function is continuous at a point when you can draw its graph through that point without lifting your pencil — but the precise definition involves three testable conditions.`
    },
    {
      id: 'ci1-three-conditions',
      type: 'text' as const,
      content: `
## 📖 The Three Conditions for Continuity at $x = a$

A function $f$ is **continuous at $x = a$** if and only if all three conditions hold:

$$\\boxed{\\begin{aligned} &1. \\quad f(a) \\text{ is defined} \\\\ &2. \\quad \\lim_{x \\to a} f(x) \\text{ exists} \\\\ &3. \\quad \\lim_{x \\to a} f(x) = f(a) \\end{aligned}}$$

If **any** condition fails, $f$ is **discontinuous** at $x = a$.

---

### Checking Continuity: A Systematic Approach

**Example 1:** Is $f(x) = \\frac{x^2 - 4}{x - 2}$ continuous at $x = 2$?

1. $f(2) = \\frac{0}{0}$ — **undefined**. ❌ Condition 1 fails.

$f$ is discontinuous at $x = 2$ (even though $\\lim_{x \\to 2} f(x) = 4$ exists).

---

**Example 2:** $g(x) = \\begin{cases} x^2 & x \\neq 3 \\\\ 5 & x = 3 \\end{cases}$

1. $g(3) = 5$ ✓
2. $\\lim_{x \\to 3} g(x) = 9$ ✓
3. $9 \\neq 5$ ❌ Condition 3 fails.

---

**Example 3:** $h(x) = x^2 + 1$ at $x = 3$:

1. $h(3) = 10$ ✓
2. $\\lim_{x \\to 3} h(x) = 10$ ✓
3. $10 = 10$ ✓ Continuous!

> **AP Tip:** On the AP exam, always check all three conditions in order. Even if you can see the answer, showing the systematic check earns full credit.`
    },
    {
      id: 'ci1-types',
      type: 'text' as const,
      content: `
## Types of Discontinuities

### 1. Removable Discontinuity (Hole)

The limit exists, but either $f(a)$ is undefined or $f(a) \\neq \\lim f(x)$.

$$f(x) = \\frac{x^2-1}{x-1} \\text{ at } x = 1$$

The limit is $2$, but $f(1)$ is undefined. **Can be "fixed"** by defining $f(1) = 2$.

### 2. Jump Discontinuity

The left-hand and right-hand limits both exist but are **not equal**.

$$g(x) = \\begin{cases} x+1 & x < 2 \\\\ x^2 & x \\geq 2 \\end{cases}$$

$\\lim_{x \\to 2^-} g(x) = 3$ but $\\lim_{x \\to 2^+} g(x) = 4$. **Cannot be fixed.**

### 3. Infinite Discontinuity

The function approaches $\\pm\\infty$: $f(x) = \\frac{1}{x}$ at $x = 0$.

### 4. Oscillating Discontinuity

The function oscillates infinitely: $f(x) = \\sin(1/x)$ at $x = 0$.

---

| Type | Limit Exists? | Fixable? | Example |
|------|--------------|----------|---------|
| Removable | Yes | Yes | $\\frac{x^2-1}{x-1}$ at $x=1$ |
| Jump | No (one-sided exist) | No | Piecewise at boundary |
| Infinite | No | No | $\\frac{1}{x}$ at $x=0$ |
| Oscillating | No | No | $\\sin(1/x)$ at $x=0$ |`
    },
    {
      id: 'ci1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Continuity Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\frac{x^2-9}{x-3}$, the discontinuity at $x = 3$ is:',
            options: ['Removable', 'Jump', 'Infinite', 'There is no discontinuity'],
            correctAnswer: 0,
            explanation: '$\\frac{x^2-9}{x-3} = x+3$ for $x \\neq 3$. The limit at $3$ is $6$, but $f(3)$ is undefined. This is a removable discontinuity (a hole).'
          },
          {
            question: 'Which condition for continuity fails for $g(x) = \\begin{cases} 2x & x \\leq 1 \\\\ x+3 & x > 1 \\end{cases}$ at $x=1$?',
            options: ['$g(1)$ is undefined', 'The limit does not exist', 'The limit $\\neq g(1)$', 'No condition fails; $g$ is continuous'],
            correctAnswer: 1,
            explanation: '$g(1) = 2$. $\\lim_{x \\to 1^-} = 2$, $\\lim_{x \\to 1^+} = 4$. Since left ≠ right, the two-sided limit does not exist.'
          },
          {
            question: 'At how many points is $f(x) = \\frac{1}{x^2-4}$ discontinuous?',
            options: ['$0$', '$1$', '$2$', '$4$'],
            correctAnswer: 2,
            explanation: '$x^2 - 4 = 0$ at $x = 2$ and $x = -2$. These are infinite discontinuities (vertical asymptotes).'
          }
        ]
      }
    },
    {
      id: 'ci1-interval-continuity',
      type: 'text' as const,
      content: `
## 📌 Continuity on an Interval

$f$ is **continuous on an open interval** $(a,b)$ if it is continuous at every point in $(a,b)$.

$f$ is **continuous on a closed interval** $[a,b]$ if:
- $f$ is continuous on $(a,b)$
- $\\lim_{x \\to a^+} f(x) = f(a)$ (right-continuous at left endpoint)
- $\\lim_{x \\to b^-} f(x) = f(b)$ (left-continuous at right endpoint)

---

### Functions That Are Continuous Everywhere

These function types are continuous on their **entire domains**:

| Function Type | Continuous On |
|--------------|---------------|
| Polynomials | $(-\\infty, \\infty)$ |
| $\\sin x, \\cos x$ | $(-\\infty, \\infty)$ |
| $e^x$ | $(-\\infty, \\infty)$ |
| $\\ln x$ | $(0, \\infty)$ |
| $\\sqrt{x}$ | $[0, \\infty)$ |
| $\\frac{p(x)}{q(x)}$ | Where $q(x) \\neq 0$ |
| $\\tan x$ | Where $\\cos x \\neq 0$ |

> 🔑 **Key Concept:** The sum, difference, product, quotient (where defined), and **composition** of continuous functions are continuous. This lets you determine continuity of complex expressions without checking the three conditions directly.`
    },
    {
      id: 'ci1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Continuity Analysis** 🧮

**1)** $f(x) = \\frac{x^2-x-6}{x-3}$. What value should $f(3)$ be defined as to make $f$ continuous at $x=3$?

**2)** $g(x) = \\begin{cases} ax+1 & x < 2 \\\\ 3x & x \\geq 2 \\end{cases}$. Find the value of $a$ that makes $g$ continuous at $x=2$.

**3)** How many points of discontinuity does $h(x) = \\frac{x+1}{x^2-x-2}$ have?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '5/2', '2'],
        hint1: 'Factor: $\\frac{(x-3)(x+2)}{x-3} = x+2$. At $x=3$: $3+2=5$.',
        hint2: 'Need $\\lim_{x \\to 2^-}(ax+1) = g(2) = 6$. So $2a+1=6$, giving $a=5/2$.',
        hint3: 'Denominator: $x^2-x-2 = (x-2)(x+1) = 0$ at $x=2$ and $x=-1$. Check: at $x=-1$ both numerator and denominator are $0$, still a discontinuity.',
        explanation: '1) $f(3) = 5$. 2) $a = 5/2$. 3) $2$ points ($x=2$ and $x=-1$).'
      }
    },
    {
      id: 'ci1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Classify the Discontinuity** 🔽`,
      exercise: {
        dropdowns: [
          { label: '$f(x) = \\frac{|x|}{x}$ at $x = 0$', options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'] },
          { label: '$g(x) = \\frac{\\sin x}{x}$ at $x = 0$ (undefined)', options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'] },
          { label: '$h(x) = \\frac{1}{(x-1)^2}$ at $x = 1$', options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'] },
          { label: '$k(x) = x^3 - 2x$ at $x = 1$', options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'] }
        ],
        correctAnswers: ['Jump', 'Removable', 'Infinite', 'No discontinuity'],
        hint1: '$|x|/x = 1$ for $x > 0$ and $-1$ for $x < 0$. Left and right limits differ.',
        hint2: '$\\lim_{x \\to 0} \\sin x/x = 1$ exists, but $g(0)$ is undefined. Defining $g(0)=1$ would fix it.',
        hint3: '$(x-1)^2 \\to 0^+$, so $1/(x-1)^2 \\to +\\infty$.',
        explanation: '$f$: jump ($-1$ vs $1$). $g$: removable (limit exists). $h$: infinite (vertical asymptote). $k$: continuous (polynomial).'
      }
    },
    {
      id: 'ci1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Continuity Basics** ✅`,
      exercise: {
        questions: [
          {
            question: 'If $f$ is continuous at $x = 4$ and $f(4) = 7$, then $\\lim_{x \\to 4} f(x) = $',
            options: ['$0$', '$4$', '$7$', 'Cannot determine'],
            correctAnswer: 2,
            explanation: 'By the definition of continuity, $\\lim_{x \\to a} f(x) = f(a)$. So the limit equals $f(4) = 7$.'
          },
          {
            question: 'A polynomial $p(x)$ has a discontinuity at:',
            options: ['Every integer', 'Its zeros', 'Nowhere — polynomials are always continuous', 'Points where $p\'(x) = 0$'],
            correctAnswer: 2,
            explanation: 'Polynomials are continuous on $(-\\infty, \\infty)$. They have no discontinuities.'
          }
        ]
      }
    }
  ]
}
