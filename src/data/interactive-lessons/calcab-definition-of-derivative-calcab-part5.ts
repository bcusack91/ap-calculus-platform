export const calcabDerivativeDefPart5Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef5-intro',
      type: 'text' as const,
      content: `# ∫ Tangent Lines and Linear Approximation

**Part 5 of 7 — The Tangent Line Equation**

---

### Topics in This Part

| Section |
|---------|
| 📖 Equation of the Tangent Line |
| Normal Lines (Perpendicular) |
| 📌 Linear Approximation (Linearization) |
| Over- vs. Under-Estimates |

> 🔑 **Key Concept:** The tangent line at $x = a$ is the best linear approximation to $f$ near $a$. This idea is the foundation of differential calculus.`
    },
    {
      id: 'derdef5-tangent',
      type: 'text' as const,
      content: `
## 📖 Equation of the Tangent Line

$$\\boxed{y - f(a) = f'(a)(x - a)}$$

Three ingredients:
1. The point: $(a, f(a))$
2. The slope: $m = f'(a)$
3. Plug into point-slope form

---

### Worked Example

Find the tangent line to $f(x) = x^3$ at $x = 2$.

| Step | Computation |
|------|------------|
| Point | $f(2) = 8$ → $(2, 8)$ |
| Slope | $f'(x) = 3x^2$ → $f'(2) = 12$ |
| Equation | $y - 8 = 12(x - 2)$ |
| Simplified | $y = 12x - 16$ |

---

### Normal Line

The **normal line** is perpendicular to the tangent. If tangent slope is $m$:

$$\\boxed{\\text{Normal slope} = -\\frac{1}{m}}$$

For the example above: normal slope $= -\\frac{1}{12}$, so $y - 8 = -\\frac{1}{12}(x-2)$.

> **AP Tip:** Normal lines appear less frequently than tangent lines, but they do show up! Remember: perpendicular slopes are negative reciprocals.`
    },
    {
      id: 'derdef5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Tangent Lines** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Find the equation of the tangent line to $f(x) = x^2 + 1$ at $x = 3$.',
            options: ['$y = 6x - 8$', '$y = 6x + 10$', '$y = 3x + 1$', '$y = 6x - 10$'],
            correctAnswer: 0,
            explanation: '$f(3) = 10$, $f\'(3) = 6$. Tangent: $y - 10 = 6(x-3) \\Rightarrow y = 6x - 8$.'
          },
          {
            question: 'The tangent line to $f(x) = \\sin x$ at $x = \\pi$ has slope:',
            options: ['$0$', '$1$', '$-1$', 'undefined'],
            correctAnswer: 2,
            explanation: '$f\'(x) = \\cos x$, so $f\'(\\pi) = \\cos(\\pi) = -1$.'
          },
          {
            question: 'What is the slope of the normal line to $y = e^x$ at $x = 0$?',
            options: ['$1$', '$-1$', '$e$', '$-e$'],
            correctAnswer: 1,
            explanation: 'Tangent slope = $e^0 = 1$. Normal slope = $-1/1 = -1$.'
          }
        ]
      }
    },
    {
      id: 'derdef5-linearization',
      type: 'text' as const,
      content: `
## 📌 Linear Approximation (Linearization)

Near $x = a$, the tangent line approximates the function:

$$\\boxed{f(x) \\approx L(x) = f(a) + f'(a)(x - a)}$$

$L(x)$ is called the **linearization** of $f$ at $x = a$.

---

### Example: Approximate $\\sqrt{4.1}$

Using $f(x) = \\sqrt{x}$ at $a = 4$:

| Component | Value |
|-----------|-------|
| $f(a) = f(4)$ | $2$ |
| $f'(x) = \\frac{1}{2\\sqrt{x}}$ | — |
| $f'(4)$ | $\\frac{1}{4}$ |
| $L(4.1)$ | $2 + \\frac{1}{4}(0.1) = 2.025$ |
| Actual $\\sqrt{4.1}$ | $2.02485...$ |
| Error | $0.00015$ |

The approximation is excellent for small $\\Delta x = x - a$.

> 🔑 **Key Fact:** Linear approximation works best when $x$ is close to $a$. The farther away, the worse the approximation.`
    },
    {
      id: 'derdef5-overunder',
      type: 'text' as const,
      content: `
## Over- vs. Under-Estimates

$$\\boxed{\\text{Concave up} \\implies \\text{tangent below curve} \\implies \\text{underestimate}}$$
$$\\boxed{\\text{Concave down} \\implies \\text{tangent above curve} \\implies \\text{overestimate}}$$

| Concavity | $f''$ Sign | Tangent Relative to Curve | Approximation Is |
|-----------|-----------|--------------------------|------------------|
| Concave up | $f'' > 0$ | Below | Underestimate |
| Concave down | $f'' < 0$ | Above | Overestimate |

---

### Example

For $\\sqrt{4.1}$: $f''(x) = -\\frac{1}{4x^{3/2}} < 0$ → concave down → tangent is **above** → overestimate.

Indeed: $2.025 > 2.02485...$ ✓

> **AP Tip:** "Is this an overestimate or underestimate? Justify your answer." is a classic AP FRQ follow-up. Always cite concavity ($f''$ sign).`
    },
    {
      id: 'derdef5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Linear Approximation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Use the tangent to $f(x) = x^3$ at $x = 2$ to approximate $f(2.1)$.',
            options: ['$9.0$', '$9.2$', '$9.261$', '$8.0$'],
            correctAnswer: 1,
            explanation: '$f(2)=8$, $f\'(2)=12$. $L(2.1) = 8 + 12(0.1) = 9.2$. (Actual $2.1^3 = 9.261$.)'
          },
          {
            question: 'The approximation $f(2.1) \\approx 9.2$ for $f(x) = x^3$ is:',
            options: ['An overestimate', 'An underestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$f\'\'(x) = 6x > 0$ at $x=2$ → concave up → tangent below curve → underestimate. Indeed $9.2 < 9.261$.'
          }
        ]
      }
    },
    {
      id: 'derdef5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Tangent Line Practice** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Slope of tangent to $y=\\sin x$ at $x=0$', options: ['0', '1', '-1', 'undefined'] },
          { label: 'Tangent line to $f(x)=e^x$ at $x=0$', options: ['$y=x$', '$y=x+1$', '$y=ex$', '$y=e$'] },
          { label: 'Normal line slope if tangent slope is $4$', options: ['4', '-4', '$1/4$', '$-1/4$'] }
        ],
        correctAnswers: ['1', '$y=x+1$', '$-1/4$'],
        hint1: '$\\cos(0) = 1$.',
        hint2: '$f(0)=1$, $f\'(0)=1$. $y-1=1(x-0) \\Rightarrow y=x+1$.',
        hint3: 'Normal slope = negative reciprocal = $-1/4$.',
        explanation: '$\\cos(0) = 1$. For $e^x$: $f(0)=1$, $f\'(0)=1$, so $y=x+1$. Normal slope = $-1/4$.'
      }
    },
    {
      id: 'derdef5-input',
      type: 'input-box' as const,
      content: `**Linear Approximation** ✍️`,
      exercise: {
        question: 'Use the linearization of $f(x) = \\sqrt{x}$ at $a = 9$ to approximate $\\sqrt{9.3}$. Give your answer as a decimal.',
        correctAnswer: '3.05',
        acceptableAnswers: ['3.05', '3.050'],
        hint1: '$f(9) = 3$, $f\'(x) = \\frac{1}{2\\sqrt{x}}$, $f\'(9) = \\frac{1}{6}$.',
        hint2: '$L(9.3) = 3 + \\frac{1}{6}(9.3 - 9) = 3 + \\frac{0.3}{6}$.',
        explanation: '$L(9.3) = 3 + \\frac{1}{6}(0.3) = 3 + 0.05 = 3.05$. (Actual: $\\sqrt{9.3} \\approx 3.04959...$)'
      }
    }
  ]
}
