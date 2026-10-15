export const calcbcAdvIntegrationPart2Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'ai2-intro',
      type: 'text' as const,
      content: `# Trigonometric Integrals and Substitution

**Part 2 of 7 — Working with Trig Functions**

### Powers of Sine and Cosine

$$\\int \\sin^m x \\cos^n x\\,dx$$

| Case | Strategy |
|------|----------|
| $m$ odd | Save one $\\sin x$, convert rest to $\\cos$ via $\\sin^2 = 1 - \\cos^2$, $u = \\cos x$ |
| $n$ odd | Save one $\\cos x$, convert rest to $\\sin$ via $\\cos^2 = 1 - \\sin^2$, $u = \\sin x$ |
| Both even | Use half-angle: $\\sin^2 x = \\frac{1-\\cos 2x}{2}$, $\\cos^2 x = \\frac{1+\\cos 2x}{2}$ |

> **Key Fact:** "Save one" means factor out one copy to pair with $dx$ for substitution.`
    },
    {
      id: 'ai2-example',
      type: 'text' as const,
      content: `### Worked Example

$\\int \\sin^3 x \\cos^2 x\\,dx$ ($m = 3$ is odd)

| Step | Work |
|------|------|
| Save one $\\sin x$ | $\\int \\sin^2 x \\cos^2 x \\cdot \\sin x\\,dx$ |
| Convert $\\sin^2 x$ | $\\int (1 - \\cos^2 x)\\cos^2 x \\sin x\\,dx$ |
| Let $u = \\cos x$ | $du = -\\sin x\\,dx$ |
| Substitute | $-\\int (1 - u^2)u^2\\,du = -\\int (u^2 - u^4)\\,du$ |
| Integrate | $-\\frac{u^3}{3} + \\frac{u^5}{5} + C$ |
| Back-sub | $-\\frac{\\cos^3 x}{3} + \\frac{\\cos^5 x}{5} + C$ |

### Trigonometric Substitution

| Expression | Substitution | Identity used |
|-----------|-------------|---------------|
| $\\sqrt{a^2 - x^2}$ | $x = a\\sin\\theta$ | $1 - \\sin^2\\theta = \\cos^2\\theta$ |
| $\\sqrt{a^2 + x^2}$ | $x = a\\tan\\theta$ | $1 + \\tan^2\\theta = \\sec^2\\theta$ |
| $\\sqrt{x^2 - a^2}$ | $x = a\\sec\\theta$ | $\\sec^2\\theta - 1 = \\tan^2\\theta$ |`
    },
    {
      id: 'ai2-trigsub',
      type: 'text' as const,
      content: `### Trig Substitution Example

$\\int \\frac{dx}{\\sqrt{4 - x^2}}$

Let $x = 2\\sin\\theta$, $dx = 2\\cos\\theta\\,d\\theta$.

$\\sqrt{4 - x^2} = \\sqrt{4 - 4\\sin^2\\theta} = 2\\cos\\theta$

$$\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\frac{x}{2} + C$$

> **AP Tip:** Many trig substitution problems on the BC exam reduce to inverse trig results. Recognizing the pattern $1/\\sqrt{a^2 - x^2}$ directly gives $\\arcsin(x/a)$ without going through the full substitution.`
    },
    {
      id: 'ai2-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'For $\\int \\sin^2 x\\,dx$, the correct approach is:',
            options: ['Use the half-angle identity for $\\sin^2 x$', 'Let $u = \\sin x$, so $du = \\cos x\\,dx$', 'Apply the power rule to $\\sin^2 x$', 'Rewrite it as $1 - \\cos^2 x$'],
            correctAnswer: 0,
            explanation: 'An even power of sine with no odd cosine factor calls for the half-angle identity $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$, giving $\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$. $u = \\sin x$ needs a $\\cos x$ factor that is not there, the power rule ignores the chain rule (it would give $\\frac{\\sin^3 x}{3}$), and $1 - \\cos^2 x$ just trades one even power for another.'
          },
          {
            question: 'For $\\int \\sqrt{x^2 - 9}\\,dx$, the trig substitution is:',
            options: ['$x = 3\\sec\\theta$', '$x = 3\\sin\\theta$', '$x = 3\\tan\\theta$', '$x = 9\\sec\\theta$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x^2 - a^2}$ pattern with $a = 3$ → $x = 3\\sec\\theta$.'
          },
          {
            question: '$\\int \\cos^3 x\\,dx =$',
            options: ['$\\sin x - \\frac{\\sin^3 x}{3} + C$', '$\\frac{\\cos^4 x}{4} + C$', '$\\sin^3 x/3 + C$', '$\\cos^2 x \\sin x + C$'],
            correctAnswer: 0,
            explanation: '$\\int \\cos^2 x \\cos x\\,dx = \\int (1-\\sin^2 x)\\cos x\\,dx$. With $u = \\sin x$: $\\int (1-u^2)\\,du = u - u^3/3 + C$.'
          }
        ]
      }
    },
    {
      id: 'ai2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Trig Integral Strategy**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\sin^5 x \\cos^4 x\\,dx$: since $m = 5$ is odd, you should:',
            options: ['Save one $\\sin x$, write $\\sin^4 x$ in cosines, let $u = \\cos x$', 'Apply half-angle identities to $\\sin^2 x$ and $\\cos^2 x$', 'Save one $\\cos x$, write $\\cos^3 x$ in sines, let $u = \\sin x$', 'Use the reduction formula for $\\int \\sin^n x\\,dx$'],
            correctAnswers: ['Save one $\\sin x$, write $\\sin^4 x$ in cosines, let $u = \\cos x$'],
            hints: ['Odd power of sine → save one $\\sin x$.'],
            explanation: 'Save $\\sin x$ for $du$, convert remaining $\\sin^4 x = (1-\\cos^2 x)^2$, then $u = \\cos x$. Saving a $\\cos x$ fails because the leftover $\\cos^3 x$ is an odd power, and half-angle identities are the tool when both powers are even.'
          },
          {
            label: '$\\int \\sin^2 x \\cos^2 x\\,dx$: both even, so use:',
            options: ['$\\sin^2 x \\cos^2 x = \\frac{1}{8}(1-\\cos 4x)$', '$\\sin^2 x \\cos^2 x = \\frac{1}{4}(1-\\cos 4x)$', '$\\sin^2 x \\cos^2 x = \\frac{1}{8}(1-\\cos 2x)$', '$\\sin^2 x \\cos^2 x = \\frac{1}{2}\\sin^2(2x)$'],
            correctAnswers: ['$\\sin^2 x \\cos^2 x = \\frac{1}{8}(1-\\cos 4x)$'],
            hints: ['$\\sin x \\cos x = \\frac{1}{2}\\sin 2x$, then apply half-angle again.'],
            explanation: 'Double angle first: $\\sin x\\cos x = \\frac{1}{2}\\sin 2x$, so $\\sin^2 x \\cos^2 x = \\frac{1}{4}\\sin^2(2x)$. Then half-angle: $\\sin^2(2x) = \\frac{1-\\cos 4x}{2}$, giving $\\frac{1}{8}(1-\\cos 4x)$. Forgetting to square the $\\frac{1}{2}$, dropping the half-angle $\\frac{1}{2}$, or not doubling the angle gives the other forms.'
          }
        ]
      }
    },
    {
      id: 'ai2-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: '$\\int_0^{\\pi/2} \\sin^2 x\\,dx$. Evaluate the definite integral. (Use pi for $\\pi$.)',
        correctAnswer: 'pi/4',
        acceptableAnswers: ['pi/4', 'π/4', '0.785', '0.7854'],
        hints: ['$\\int_0^{\\pi/2} \\frac{1-\\cos 2x}{2}\\,dx = \\frac{1}{2}[x - \\frac{\\sin 2x}{2}]_0^{\\pi/2}$.'],
        explanation: '$\\frac{1}{2}[\\frac{\\pi}{2} - 0] - \\frac{1}{2}[0 - 0] = \\frac{\\pi}{4}$.'
      }
    },
    {
      id: 'ai2-summary',
      type: 'text' as const,
      content: `### Key Strategies

$$\\boxed{\\text{Odd power} \\to \\text{save one, convert, } u\\text{-sub} \\qquad \\text{Even powers} \\to \\text{half-angle}}$$

| Trig Sub Pattern | Use when you see |
|-----------------|-----------------|
| $x = a\\sin\\theta$ | $\\sqrt{a^2 - x^2}$ |
| $x = a\\tan\\theta$ | $\\sqrt{a^2 + x^2}$ |
| $x = a\\sec\\theta$ | $\\sqrt{x^2 - a^2}$ |

**Next: Part 3 — Long Division, Completing the Square, and Algebraic Manipulation**`
    }
  ]
};
