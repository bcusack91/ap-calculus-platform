export const calcabLimitsPart7Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit7-intro',
      type: 'text' as const,
      content: `
# ∫ Review & AP Exam Applications

**Part 7 of 7 — Putting It All Together**

### Complete Limits Toolkit

**1. Direct Substitution** — Always try first. Works for continuous functions.

**2. Algebraic Manipulation** — For $\\frac{0}{0}$:
- Factor polynomials: $x^2 - a^2 = (x-a)(x+a)$
- Rationalize radicals: multiply by the conjugate
- Simplify complex fractions

**3. Special Trig Limits:**
- $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, $\\lim_{x \\to 0} \\frac{1-\\cos x}{x} = 0$

**4. Limits at Infinity** — Compare degrees of top and bottom.

**5. Squeeze Theorem** — For oscillating functions bounded by converging functions.

**6. One-Sided Limits** — Check both sides for piecewise, absolute value, or asymptotes.

### AP Exam Format Notes

- **Multiple choice:** Often tests recognition of technique + computation
- **Free response:** May ask you to justify continuity or apply IVT with complete sentences
- **Common FRQ prompt:** "Is $f$ continuous at $x = c$? Justify your answer."
  - You must check all three conditions explicitly

### Connections to Coming Topics

Limits lead directly to:
- **Derivatives** (Part 2): $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$
- **Integrals** (Part 4): $\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum f(x_i)\\Delta x$
- **Series** (BC only): $\\sum_{n=1}^{\\infty} a_n = \\lim_{N \\to \\infty} \\sum_{n=1}^{N} a_n$
      `
    },
    {
      id: 'limit7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}$.',
            options: ['$\\frac{3}{2}$', '$1$', '$0$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \\frac{x^2+x+1}{x+1}$. At $x=1$: $\\frac{1+1+1}{1+1} = \\frac{3}{2}$.'
          },
          {
            question: 'The function $f(x) = \\frac{|x-2|}{x-2}$ at $x = 2$ has what type of discontinuity?',
            options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'],
            correctAnswer: 1,
            explanation: 'For $x > 2$: $\\frac{|x-2|}{x-2} = 1$. For $x < 2$: $\\frac{-(x-2)}{x-2} = -1$. The left limit is $-1$ and the right limit is $1$. Since the one-sided limits differ, this is a jump discontinuity.'
          }
        ]
      }
    },
    {
      id: 'limit7-detail',
      type: 'text' as const,
      content: `
### IVT Application Template

**Problem:** Show that $f(x) = 0$ has a solution on $[a,b]$.

**Solution framework:**
1. State that $f$ is continuous on $[a,b]$ (and say why — polynomial, composition of continuous functions, etc.)
2. Compute $f(a)$ and $f(b)$
3. Note that $0$ is between $f(a)$ and $f(b)$
4. Conclude by IVT: there exists $c \\in (a,b)$ with $f(c) = 0$

**Example:** $e^x = 3 - x$ on $[0, 1]$

Let $f(x) = e^x - 3 + x$. Then $f(0) = 1-3+0 = -2 < 0$ and $f(1) = e - 3 + 1 \\approx 0.718 > 0$. Since $f$ is continuous and changes sign, $f(c)=0$ for some $c \\in (0,1)$.
      `
    },
    {
      id: 'limit7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The equation $\\cos(x) = x$ has a solution in which interval?',
            options: ['$[0, \\pi/2]$', '$[\\pi, 2\\pi]$', '$[-\\pi, -\\pi/2]$', 'No solution exists'],
            correctAnswer: 0,
            explanation: 'Let $g(x) = \\cos(x) - x$. Then $g(0) = 1 > 0$ and $g(\\pi/2) = 0 - \\pi/2 < 0$. Since $g$ is continuous and changes sign on $[0, \\pi/2]$, by IVT there exists a solution in this interval.'
          }
        ]
      }
    },
    {
      id: 'limit7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Comprehensive Review** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 2} \\frac{x^2-5x+6}{x-2}$', options: ['-1', '0', '1', '2'] },
          { label: 'Type of discontinuity of $\\frac{1}{(x-1)^2}$ at $x=1$', options: ['Removable', 'Jump', 'Infinite', 'None'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{x}{e^x}$', options: ['0', '1', '∞', 'DNE'] }
        ],
        correctAnswers: ['-1', 'Infinite', '0'],
        hint1: 'Factor: $x^2-5x+6 = (x-2)(x-3)$.',
        hint2: 'What happens to $\\frac{1}{(x-1)^2}$ as $x \\to 1$? The denominator approaches 0 and is always positive.',
        hint3: 'Exponential functions grow much faster than polynomials.',
        explanation: '$\\frac{(x-2)(x-3)}{x-2} = x-3 \\to -1$. $\\frac{1}{(x-1)^2} \\to +\\infty$ (infinite discontinuity). $\\frac{x}{e^x} \\to 0$ because $e^x$ dominates $x$.'
      }
    }
  ]
}
