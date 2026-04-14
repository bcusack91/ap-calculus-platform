export const calcbcIntByPartsPart1Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp1-intro',
      type: 'text' as const,
      content: `# \u222B Integration by Parts

**Part 1 of 7 \u2014 The Formula & LIATE Rule**

Integration by parts is the integration counterpart of the product rule for derivatives. It\u2019s essential for AP Calculus BC and appears on virtually every exam.

| Part | Topic |
|------|-------|
| **1** | **The Formula & LIATE Rule** |
| 2 | Tabular (Column) Method |
| 3 | Cycling (Boomerang) Problems |
| 4 | Definite Integrals with IBP |
| 5 | Special Cases \u2014 Inverse Trig & Logarithms |
| 6 | Problem-Solving Workshop |
| 7 | Comprehensive Review & Assessment |`
    },
    {
      id: 'ibp1-formula',
      type: 'text' as const,
      content: `### The Integration by Parts Formula

Starting from the product rule:
$$\\frac{d}{dx}[u \\cdot v] = u\\frac{dv}{dx} + v\\frac{du}{dx}$$

Integrating both sides and rearranging:

$$\\boxed{\\int u\\,dv = uv - \\int v\\,du}$$

Think of it as \u201cswapping\u201d one integral for a (hopefully) simpler one.

> **Key Fact:** Integration by parts is the go-to technique when the integrand is a product of two different types of functions (e.g., polynomial \u00d7 exponential).`
    },
    {
      id: 'ibp1-liate',
      type: 'text' as const,
      content: `### The LIATE Rule for Choosing $u$

The hardest part is deciding which factor to call $u$ and which to call $dv$. Use the **LIATE** priority:

| Priority | Type | Examples | Why choose as $u$? |
|----------|------|----------|-------------------|
| 1st | **L**ogarithmic | $\\ln x$, $\\log_2 x$ | Differentiates to algebraic |
| 2nd | **I**nverse trig | $\\arctan x$, $\\arcsin x$ | Differentiates to algebraic |
| 3rd | **A**lgebraic | $x^2$, $3x+1$ | Differentiates to simpler polynomial |
| 4th | **T**rigonometric | $\\sin x$, $\\cos x$ | Stays trig but doesn\u2019t grow |
| 5th | **E**xponential | $e^x$, $2^x$ | Integrates easily; stays the same type |

> **AP Tip:** LIATE works for ~95% of IBP problems. The idea: $u$ should get simpler when differentiated, while $dv$ should be easy to integrate.`
    },
    {
      id: 'ibp1-example',
      type: 'text' as const,
      content: `### Worked Example \u2014 $\\int x e^x\\,dx$

| Step | Action | Result |
|------|--------|--------|
| 1 | Choose $u$ and $dv$ | $u = x$ (A), $dv = e^x\\,dx$ (E) |
| 2 | Differentiate $u$ | $du = dx$ |
| 3 | Integrate $dv$ | $v = e^x$ |
| 4 | Apply formula | $xe^x - \\int e^x\\,dx$ |
| 5 | Evaluate remaining integral | $xe^x - e^x + C$ |

$$\\boxed{\\int x e^x\\,dx = e^x(x - 1) + C}$$

**Verification:** $\\frac{d}{dx}[e^x(x-1)] = e^x(x-1) + e^x = xe^x$ \u2714`
    },
    {
      id: 'ibp1-mc1',
      type: 'multiple-choice' as const,
      content: '**Applying the Formula**',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int x\\cos x\\,dx$.',
            options: [
              '$x\\sin x + \\cos x + C$',
              '$x\\sin x - \\cos x + C$',
              '$x\\cos x + \\sin x + C$',
              '$\\frac{x^2}{2}\\sin x + C$'
            ],
            correctAnswer: 0,
            explanation: '$u = x$, $dv = \\cos x\\,dx \\Rightarrow du = dx$, $v = \\sin x$. Then $x\\sin x - \\int \\sin x\\,dx = x\\sin x - (-\\cos x) + C = x\\sin x + \\cos x + C$.'
          },
          {
            question: 'For $\\int x^2 \\sin x\\,dx$, you apply IBP with $u = x^2$, $dv = \\sin x\\,dx$. After one application, the remaining integral is:',
            options: [
              '$\\int 2x\\cos x\\,dx$',
              '$\\int 2x\\sin x\\,dx$',
              '$\\int x^2\\cos x\\,dx$',
              '$\\int \\cos x\\,dx$'
            ],
            correctAnswer: 0,
            explanation: '$v = -\\cos x$. One application gives $-x^2\\cos x - \\int (-\\cos x)(2x)\\,dx = -x^2\\cos x + \\int 2x\\cos x\\,dx$. The remaining integral is $\\int 2x\\cos x\\,dx$.'
          }
        ]
      }
    },
    {
      id: 'ibp1-dropdown',
      type: 'dropdown-select' as const,
      content: '**LIATE Selection Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\int x\\ln x\\,dx$, by LIATE the correct choice for $u$ is:',
            options: ['$u = x$', '$u = \\ln x$', '$u = x\\ln x$'],
            correctAnswers: ['$u = \\ln x$'],
            hints: ['Logarithmic (L) has higher priority than Algebraic (A) in LIATE.'],
            explanation: '$\\ln x$ is Logarithmic (L), which beats Algebraic (A) = $x$. So $u = \\ln x$, $dv = x\\,dx$.'
          },
          {
            label: 'For $\\int e^x \\sin x\\,dx$, the LIATE rule suggests $u$ should be:',
            options: ['$u = e^x$', '$u = \\sin x$', 'Either works'],
            correctAnswers: ['$u = \\sin x$'],
            hints: ['Trigonometric (T) has higher priority than Exponential (E).'],
            explanation: 'Trig (T) beats Exponential (E) in LIATE. But for cycling problems, either choice works \u2014 you\u2019ll see this in Part 3.'
          }
        ]
      }
    },
    {
      id: 'ibp1-input',
      type: 'input-box' as const,
      content: '**Compute an IBP Integral**',
      exercise: {
        question: 'Evaluate $\\int_0^1 xe^x\\,dx$. The formula gives $[xe^x - e^x]_0^1 = (e - e) - (0 - 1)$. What is the exact numerical answer?',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['Plug in bounds: at $x=1$, $xe^x - e^x = e - e = 0$. At $x=0$, $0 - 1 = -1$.', 'Result: $0 - (-1) = 1$.'],
        explanation: '$[e^x(x-1)]_0^1 = e^1(1-1) - e^0(0-1) = 0 - (-1) = 1$.'
      }
    },
    {
      id: 'ibp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

| Concept | Details |
|---------|---------|
| IBP Formula | $\\int u\\,dv = uv - \\int v\\,du$ |
| LIATE Rule | **L**og > **I**nverse trig > **A**lgebraic > **T**rig > **E**xponential |
| Goal | Transform a hard integral into an easier one |
| Key integrals | $\\int xe^x\\,dx = e^x(x-1) + C$ |

> **Coming Up:** Part 2 introduces the **Tabular Method** \u2014 a shortcut for polynomial \u00d7 exponential/trig integrals that eliminates repetitive IBP steps.`
    }
  ]
};
