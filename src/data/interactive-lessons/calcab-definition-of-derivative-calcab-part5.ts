export const calcabDerivativeDefPart5Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef5-intro',
      type: 'text' as const,
      content: `
# ∫ Tangent Lines and Linear Approximation

**Part 5 of 7 — The Tangent Line Equation**

### 1. Equation of the Tangent Line

The tangent line to $f$ at $x = a$ has:
- **Slope:** $m = f'(a)$
- **Point:** $(a, f(a))$

**Point-slope form:** $y - f(a) = f'(a)(x - a)$

### 2. Worked Example

Find the tangent line to $f(x) = x^3$ at $x = 2$.

1. $f(2) = 8$, so the point is $(2, 8)$
2. $f'(x) = 3x^2$, so $f'(2) = 12$
3. Tangent line: $y - 8 = 12(x - 2)$ → $y = 12x - 16$

### 3. Normal Line

The **normal line** is perpendicular to the tangent line. If the tangent slope is $m$, the normal slope is $-\\frac{1}{m}$ (negative reciprocal).

### 4. Tangent Line as a Local Approximation

Near $x = a$, the function $f(x)$ is well-approximated by its tangent line:

$$f(x) \\approx f(a) + f'(a)(x - a)$$

This is called **linearization** or **linear approximation**.

**Example:** Approximate $\\sqrt{4.1}$ using the tangent line to $f(x) = \\sqrt{x}$ at $x = 4$:

$f(4) = 2$, $f'(x) = \\frac{1}{2\\sqrt{x}}$, $f'(4) = \\frac{1}{4}$

$\\sqrt{4.1} \\approx 2 + \\frac{1}{4}(4.1 - 4) = 2 + 0.025 = 2.025$

(Actual: $\\sqrt{4.1} = 2.02485...$)
      `
    },
    {
      id: 'derdef5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Find the equation of the tangent line to $f(x) = x^2 + 1$ at $x = 3$.',
            options: ['$y = 6x - 8$', '$y = 6x + 10$', '$y = 3x + 1$', '$y = 6x - 10$'],
            correctAnswer: 0,
            explanation: '$f(3) = 9+1 = 10$ and $f\'(x) = 2x$, so $f\'(3) = 6$. Tangent: $y - 10 = 6(x-3)$, which gives $y = 6x - 18 + 10 = 6x - 8$.'
          },
          {
            question: 'Use the tangent line to $f(x) = x^3$ at $x = 2$ to approximate $f(2.1)$.',
            options: ['$9.0$', '$9.2$', '$9.261$', '$8.0$'],
            correctAnswer: 1,
            explanation: '$f(2)=8$, $f\'(x)=3x^2$, $f\'(2)=12$. Linear approximation: $f(2.1) \\approx 8 + 12(2.1-2) = 8 + 12(0.1) = 8 + 1.2 = 9.2$. (Actual: $2.1^3 = 9.261$).'
          }
        ]
      }
    },
    {
      id: 'derdef5-detail',
      type: 'text' as const,
      content: `
### Tangent Line Checklist

1. Find $f(a)$ — the $y$-value at the point
2. Find $f'(a)$ — the slope at the point
3. Write: $y - f(a) = f'(a)(x - a)$

### Is the Approximation an Over- or Under-estimate?

- If $f$ is **concave up** near $a$: tangent line is **below** the curve → **underestimate**
- If $f$ is **concave down** near $a$: tangent line is **above** the curve → **overestimate**

This is a common AP FRQ follow-up question!
      `
    },
    {
      id: 'derdef5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The tangent line approximation of $\\sqrt{4.1}$ using $f(x) = \\sqrt{x}$ at $a = 4$ gives $2.025$. Since $f\'\'(x) = -\\frac{1}{4x^{3/2}} < 0$, the approximation is:',
            options: ['An overestimate', 'An underestimate', 'Exactly correct', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$f\'\'(x) < 0$ means $f$ is concave down. When a function is concave down, the tangent line lies above the curve, so the linear approximation is an overestimate. Indeed, $2.025 > 2.02485...$'
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
        hint1: 'The derivative of $\\sin x$ is $\\cos x$. What is $\\cos(0)$?',
        hint2: '$f(0) = e^0 = 1$ and $f\'(0) = e^0 = 1$. Use point-slope form.',
        hint3: 'The normal line is perpendicular — use the negative reciprocal of the slope.',
        explanation: '$\\cos(0) = 1$. For $e^x$: $f(0)=1$, $f\'(0)=1$, so $y-1=1(x-0) \\Rightarrow y=x+1$. Normal slope = $-1/4$.'
      }
    }
  ]
}
