export const calcabTheoremsPart1Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm1-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 1 of 7 \u2014 The Intermediate Value Theorem (IVT)**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Intermediate Value Theorem (IVT)** |
| 2 | Mean Value Theorem (MVT) |
| 3 | Extreme Value Theorem (EVT) |
| 4 | Rolle\u2019s Theorem |
| 5 | FTC & Theorem Selection |
| 6 | AP-Style Free-Response Workshop |
| 7 | Comprehensive Assessment |

---

### Statement of the IVT

$$\\boxed{\\text{If } f \\text{ is continuous on } [a,b] \\text{ and } N \\text{ is between } f(a) \\text{ and } f(b), \\text{ then } \\exists\\, c \\in (a,b): f(c) = N}$$

### What IVT Tells You (and Doesn\u2019t)

| IVT Guarantees | IVT Does NOT Tell You |
|:---|:---|
| At least one $c$ exists | Where $c$ is located |
| $f(c) = N$ for that $c$ | How many solutions there are |
| $c$ is in the open interval $(a,b)$ | The exact value of $c$ |

> **Key Fact:** IVT requires ONLY **continuity**. Differentiability is not needed.

### AP Writing Template

> "Since $f$ is continuous on $[a,b]$, $f(a) = 2$ and $f(b) = 7$, and $5$ is between $2$ and $7$, by the Intermediate Value Theorem there exists $c \\in (a,b)$ such that $f(c) = 5$."

### Worked Example \u2014 Proving a Root Exists

> Show that $f(x) = x^3 - 4x + 1$ has a root on $[0, 2]$.

$f(0) = 1 > 0$ and $f(2) = 8 - 8 + 1 = 1 > 0$. Hmm, both positive. Try $[0,1]$: $f(1) = 1 - 4 + 1 = -2 < 0$.

Since $f$ is continuous (polynomial), $f(0) = 1 > 0$ and $f(1) = -2 < 0$. By IVT, $\\exists\\, c \\in (0,1)$ such that $f(c) = 0$.`
    },
    {
      id: 'thm1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 IVT** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f$ is continuous on $[0, 4]$, $f(0) = -3$, $f(4) = 5$. Which must be true?',
            options: ['$f(c) = 0$ for some $c \\in (0, 4)$', '$f(c) = 0$ for exactly one $c$', '$f$ has a max of $5$', '$f\'(c) = 0$ for some $c$'],
            correctAnswer: 0,
            explanation: '$-3 < 0 < 5$. Since $f$ is continuous, IVT guarantees $f(c) = 0$ for some $c \\in (0,4)$.'
          },
          {
            question: 'Which hypothesis is needed for IVT?',
            options: ['Continuity on $[a,b]$', 'Differentiability on $(a,b)$', '$f$ is increasing', '$f\' > 0$'],
            correctAnswer: 0,
            explanation: 'IVT requires only continuity on the closed interval.'
          },
          {
            question: '$g$ is continuous with $g(1) = 7$ and $g(5) = 7$. Can IVT guarantee $g(c) = 10$ for some $c \\in (1,5)$?',
            options: ['No \u2014 $10$ is not between $7$ and $7$', 'Yes \u2014 $g$ is continuous', 'Only if $g$ is differentiable', 'Yes \u2014 by MVT'],
            correctAnswer: 0,
            explanation: '$10$ is not between $g(1) = 7$ and $g(5) = 7$, so IVT does not apply. ($g$ might never reach $10$.)'
          }
        ]
      }
    },
    {
      id: 'thm1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Apply IVT step by step.** \ud83d\udd0d\n\n$f$ is continuous. $f(2) = -1$, $f(6) = 5$.',
      exercise: {
        dropdowns: [
          {
            label: 'Can IVT guarantee $f(c) = 3$ for some $c \\in (2,6)$?',
            options: ['Yes \u2014 $3$ is between $-1$ and $5$', 'No \u2014 $f$ might not pass through $3$', 'Only by MVT', 'Need differentiability'],
            correctAnswers: ['Yes \u2014 $3$ is between $-1$ and $5$'],
            hints: ['$f(2) = -1 < 3 < 5 = f(6)$.'],
            explanation: '$-1 < 3 < 5$. IVT applies since $f$ is continuous.'
          },
          {
            label: 'The required hypothesis is:',
            options: ['$f$ is continuous on $[2,6]$', '$f$ is differentiable on $(2,6)$', '$f$ is increasing', '$f\'(c) = 1$'],
            correctAnswers: ['$f$ is continuous on $[2,6]$'],
            hints: ['IVT needs continuity only.'],
            explanation: 'IVT requires continuity on the closed interval $[2,6]$.'
          },
          {
            label: 'Can IVT guarantee $f(c) = -5$ for some $c \\in (2,6)$?',
            options: ['No \u2014 $-5$ is not between $-1$ and $5$', 'Yes', 'Only on a larger interval', 'Need more data'],
            correctAnswers: ['No \u2014 $-5$ is not between $-1$ and $5$'],
            hints: ['$-5 < -1 = f(2)$, so $-5$ is below both values.'],
            explanation: '$-5 < -1$. The target value is not between $f(2)$ and $f(6)$, so IVT cannot be applied.'
          }
        ]
      }
    },
    {
      id: 'thm1-input',
      type: 'input-box' as const,
      content: '**Use IVT.** \u270d\ufe0f',
      exercise: {
        question: '$f(x) = x^2 - 3$ is continuous. $f(1) = -2$ and $f(3) = 6$.\n\nBy IVT, $f(c) = 0$ for some $c \\in (1,3)$. Find $c$ exactly.\n\nIf $c = \\sqrt{n}$, enter **$n$**.',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          '$x^2 - 3 = 0$.',
          '$x = \\sqrt{3}$.',
          '$\\sqrt{3} \\in (1, 3)$. So $n = 3$.'
        ],
        explanation: '$f(c) = c^2 - 3 = 0 \\Rightarrow c = \\sqrt{3}$. So $n = 3$.'
      }
    },
    {
      id: 'thm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- IVT requires only continuity on $[a,b]$
- Guarantees existence, not location or uniqueness
- Target value $N$ must be between $f(a)$ and $f(b)$
- Always cite the theorem by name on the AP exam`
    }
  ]
};
