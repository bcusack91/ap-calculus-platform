export const calcabTheoremsPart4Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm4-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 4 of 7 \u2014 Rolle\u2019s Theorem**

### Statement

If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$:

$$\\boxed{\\exists\\, c \\in (a,b) \\text{ such that } f'(c) = 0}$$

### Rolle\u2019s Theorem vs. MVT

| Feature | Rolle\u2019s | MVT |
|:---|:---:|:---:|
| Extra condition | $f(a) = f(b)$ | None beyond MVT |
| Conclusion | $f'(c) = 0$ | $f'(c) = \\frac{f(b)-f(a)}{b-a}$ |
| Relationship | Special case of MVT | General theorem |

> **Key Fact:** Rolle\u2019s Theorem IS the Mean Value Theorem when $f(a) = f(b)$, because the average rate of change is $\\frac{f(b)-f(a)}{b-a} = 0$.

### Geometric Meaning

If the function starts and ends at the same height, it must have a horizontal tangent somewhere in between.

### Worked Example

> $f(x) = x^2 - 4x + 3$ on $[1, 3]$. Verify Rolle\u2019s and find $c$.

Check: $f(1) = 1 - 4 + 3 = 0$, $f(3) = 9 - 12 + 3 = 0$. \u2713 $f(1) = f(3) = 0$.

$f$ is a polynomial, so continuous and differentiable everywhere. \u2713

$f'(x) = 2x - 4 = 0 \\Rightarrow x = 2 \\in (1,3)$. \u2713

### Real-World Application

If a ball is thrown up and returns to its starting height, at some moment the velocity was exactly zero (at the peak).`
    },
    {
      id: 'thm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Rolle\u2019s Theorem** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f(0) = 3$ and $f(4) = 3$. $f$ is continuous on $[0,4]$ and differentiable on $(0,4)$. What can we conclude?',
            options: ['$f\'(c) = 0$ for some $c \\in (0,4)$', '$f$ is constant', '$f$ has a max at $c$', '$f\'(c) = 3$'],
            correctAnswer: 0,
            explanation: 'By Rolle\u2019s: $f(0) = f(4) = 3$, continuous, differentiable $\\Rightarrow f\'(c) = 0$ for some $c \\in (0,4)$.'
          },
          {
            question: 'Can Rolle\u2019s Theorem be applied to $f(x) = |x - 1|$ on $[0, 2]$?',
            options: ['No \u2014 $f$ is not differentiable at $x = 1$', 'Yes \u2014 $f(0) = f(2) = 1$', 'Yes \u2014 $f$ is continuous', 'No \u2014 $f(0) \\ne f(2)$'],
            correctAnswer: 0,
            explanation: '$f(0) = 1 = f(2)$, but $f$ has a corner at $x = 1$, so it\u2019s not differentiable on $(0,2)$.'
          },
          {
            question: 'Rolle\u2019s Theorem is a special case of:',
            options: ['MVT', 'IVT', 'EVT', 'FTC'],
            correctAnswer: 0,
            explanation: 'When $f(a) = f(b)$, MVT gives $f\'(c) = 0$, which is exactly Rolle\u2019s.'
          }
        ]
      }
    },
    {
      id: 'thm4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Verify Rolle\u2019s Theorem.** \ud83d\udd0d\n\n$f(x) = \\sin x$ on $[0, \\pi]$.',
      exercise: {
        dropdowns: [
          {
            label: '$f(0)$ and $f(\\pi)$:',
            options: ['Both equal $0$', '$f(0) = 0, f(\\pi) = 1$', '$f(0) = 1, f(\\pi) = 0$', 'Both equal $1$'],
            correctAnswers: ['Both equal $0$'],
            hints: ['$\\sin 0 = 0$ and $\\sin \\pi = 0$.'],
            explanation: '$f(0) = \\sin 0 = 0$ and $f(\\pi) = \\sin \\pi = 0$.'
          },
          {
            label: 'Is $f$ continuous and differentiable?',
            options: ['Yes \u2014 $\\sin x$ is smooth everywhere', 'No \u2014 not differentiable at $\\pi$', 'Only continuous', 'Cannot determine'],
            correctAnswers: ['Yes \u2014 $\\sin x$ is smooth everywhere'],
            hints: ['$\\sin x$ is infinitely differentiable.'],
            explanation: '$\\sin x$ is continuous and differentiable on all of $\\mathbb{R}$.'
          },
          {
            label: '$f\'(c) = \\cos c = 0$ at $c =$',
            options: ['$\\pi/2$', '$\\pi$', '$0$', '$\\pi/4$'],
            correctAnswers: ['$\\pi/2$'],
            hints: ['$\\cos c = 0$ in $(0,\\pi)$.'],
            explanation: '$\\cos(\\pi/2) = 0$. And $\\pi/2 \\in (0, \\pi)$. \u2713'
          }
        ]
      }
    },
    {
      id: 'thm4-input',
      type: 'input-box' as const,
      content: '**Apply Rolle\u2019s Theorem.** \u270d\ufe0f',
      exercise: {
        question: '$f(x) = x^3 - 12x$ satisfies $f(-2\\sqrt{3}) = f(2\\sqrt{3}) = 0$.\n\nFind the positive value of $c$ where $f\'(c) = 0$.\n\nIf $c = a$, enter **$a$** (as an integer if possible, or $a$ if $c = \\sqrt{a}$, enter **$a$**).',
        correctAnswer: '2',
        acceptableAnswers: ['2'],
        hints: [
          '$f\'(x) = 3x^2 - 12 = 0$.',
          '$x^2 = 4$, so $x = \\pm 2$.',
          'Positive value: $c = 2$.'
        ],
        explanation: '$f\'(c) = 3c^2 - 12 = 0 \\Rightarrow c = 2$.'
      }
    },
    {
      id: 'thm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- Rolle\u2019s: $f(a) = f(b)$ + continuous + differentiable $\\Rightarrow f'(c) = 0$
- Special case of MVT where average rate is $0$
- Geometric: horizontal tangent between equal endpoints
- Must verify all three conditions`
    }
  ]
};
