export const calcbcConvergencePart4Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'ct4-intro',
      type: 'text' as const,
      content: `# Absolute vs. Conditional Convergence

**Part 4 of 7 — Three Categories**

### Convergence Classification

Every series falls into exactly one category:

| Category | Definition | Example |
|----------|-----------|---------|
| Absolutely convergent | $\\sum |a_n|$ converges | $\\sum (-1)^n/n^2$ |
| Conditionally convergent | $\\sum a_n$ converges but $\\sum |a_n|$ diverges | $\\sum (-1)^n/n$ |
| Divergent | $\\sum a_n$ diverges | $\\sum 1/n$ |

### The Hierarchy

$$\\boxed{\\text{Absolute convergence} \\Rightarrow \\text{Convergence}}$$

The converse is FALSE: convergence does NOT imply absolute convergence.

### Testing Procedure

**Step 1:** Check $\\sum |a_n|$.
- If it converges → **absolutely convergent** (done!)

**Step 2:** If $\\sum |a_n|$ diverges, check $\\sum a_n$.
- If $\\sum a_n$ converges (usually by AST) → **conditionally convergent**
- If $\\sum a_n$ diverges → **divergent**

> **Key Fact:** "Absolute convergence" means you can rearrange the terms in any order and still get the same sum. Conditionally convergent series can be rearranged to sum to ANY value (Riemann's rearrangement theorem).`
    },
    {
      id: 'ct4-examples',
      type: 'text' as const,
      content: `### Example 1: $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^3}$

$\\sum |a_n| = \\sum 1/n^3$. $p$-Series, $p = 3 > 1$ → converges.

**Absolutely convergent.**

### Example 2: $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ (alternating harmonic)

$\\sum |a_n| = \\sum 1/n$ → diverges (harmonic).

$\\sum a_n = \\sum (-1)^{n+1}/n$ → converges by AST.

**Conditionally convergent.**

### Example 3: $\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{n+1}$

$\\lim |a_n| = \\lim n/(n+1) = 1 \\neq 0$.

**Divergent** (by Divergence Test — doesn't even converge).

### Quick Classification Guide

| Series | $\\sum|a_n|$ | $\\sum a_n$ | Classification |
|--------|-----------|----------|---------------|
| $\\sum (-1)^n/n^2$ | Conv ($p = 2$) | Conv | Absolute |
| $\\sum (-1)^n/n$ | Div (harmonic) | Conv (AST) | Conditional |
| $\\sum (-1)^n/\\sqrt[3]{n}$ | Div ($p = 1/3$) | Conv (AST) | Conditional |
| $\\sum (-1)^n$ | Div | Div | Divergent |`
    },
    {
      id: 'ct4-mc1',
      type: 'multiple-choice' as const,
      content: '**Classification Practice**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{2/3}}$ is:',
            options: ['Conditionally convergent ($\\sum 1/n^{2/3}$ diverges, but AST gives convergence)', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\sum 1/n^{2/3}$: $p = 2/3 < 1$, diverges. $\\sum (-1)^n/n^{2/3}$: AST, converges. Conditional.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{\\cos(n\\pi)}{n^4}$. Since $\\cos(n\\pi) = (-1)^n$:',
            options: ['Absolutely convergent ($\\sum 1/n^4$ converges)', 'Conditionally convergent', 'Divergent', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$\\sum |a_n| = \\sum 1/n^4$, $p = 4 > 1$, converges. Absolutely convergent.'
          },
          {
            question: 'If $\\sum |a_n|$ converges, what can you conclude about $\\sum a_n$?',
            options: ['It converges (absolutely)', 'It might converge or diverge', 'It converges conditionally', 'Nothing'],
            correctAnswer: 0,
            explanation: 'Absolute convergence implies convergence. Both $\\sum |a_n|$ and $\\sum a_n$ converge.'
          }
        ]
      }
    },
    {
      id: 'ct4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify These Series**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n!}$:',
            options: ['Absolutely convergent ($\\sum 1/n!$ converges by Ratio Test)', 'Conditionally convergent', 'Divergent', 'Inconclusive'],
            correctAnswers: ['Absolutely convergent ($\\sum 1/n!$ converges by Ratio Test)'],
            hints: ['$\\sum 1/n!$ converges (it equals $e - 1$).'],
            explanation: '$\\sum 1/n!$ converges. Absolutely convergent.'
          },
          {
            label: '$\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{n \\ln n}$:',
            options: ['Conditionally convergent ($\\sum 1/(n \\ln n)$ diverges by Integral Test; AST gives convergence)', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswers: ['Conditionally convergent ($\\sum 1/(n \\ln n)$ diverges by Integral Test; AST gives convergence)'],
            hints: ['$\\sum 1/(n \\ln n)$ diverges (log-$p$-series, $p = 1$). But the alternating version converges by AST.'],
            explanation: '$\\sum |a_n|$ diverges, $\\sum a_n$ converges. Conditionally convergent.'
          }
        ]
      }
    },
    {
      id: 'ct4-input',
      type: 'input-box' as const,
      content: '**Classification**',
      exercise: {
        question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n+1}}$. Is it absolutely convergent, conditionally convergent, or divergent? Enter "absolute", "conditional", or "divergent".',
        correctAnswer: 'conditional',
        acceptableAnswers: ['conditional', 'conditionally convergent', 'conditionally'],
        hints: ['$\\sum 1/\\sqrt{n+1}$ diverges ($p = 1/2$). $\\sum (-1)^n/\\sqrt{n+1}$ converges (AST).'],
        explanation: '$\\sum |a_n|$ diverges ($p = 1/2 < 1$). $\\sum a_n$ converges (AST). Conditionally convergent.'
      }
    },
    {
      id: 'ct4-summary',
      type: 'text' as const,
      content: `### Summary

- Three categories: absolute, conditional, divergent
- Check $\\sum |a_n|$ first; if it converges, done (absolute)
- If $\\sum |a_n|$ diverges but $\\sum a_n$ converges → conditional
- Absolute ⇒ convergent, but not vice versa

> **Next:** Part 5 — The Hardest AP Problems.`
    }
  ]
};
