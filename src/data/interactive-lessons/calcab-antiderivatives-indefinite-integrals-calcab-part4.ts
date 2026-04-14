export const calcabAntiderivativesPart4Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti4-intro',
      type: 'text' as const,
      content: `# ∫ Antiderivatives

**Part 4 of 7 — Rewriting Before Integrating**

### The Strategy

$$\\boxed{\\text{Can't integrate directly?} \\to \\text{Rewrite algebraically} \\to \\text{Then integrate}}$$

Many integrals look hard but become easy after algebraic manipulation:

| Technique | When to Use | Example |
|:---:|:---:|:---:|
| Expand products | $(...)(...) $ in integrand | $(x+1)(x-3)$ |
| Split fractions | $\\frac{\\text{polynomial}}{\\text{monomial}}$ | $\\frac{x^3+2x}{x^2}$ |
| Rewrite radicals | Roots in integrand | $\\frac{3}{\\sqrt{x}}$ |
| Factor out constants | Coefficient in front | $\\int 5x^3\\,dx$ |

> **Key Concept:** You CANNOT integrate products or quotients by integrating top and bottom separately. You must rewrite into a SUM first.`
    },
    {
      id: 'anti4-examples',
      type: 'text' as const,
      content: `### Technique 1: Expand Products

$$\\int (x+1)(x-3)\\,dx = \\int (x^2 - 2x - 3)\\,dx = \\frac{x^3}{3} - x^2 - 3x + C$$

$$\\int x(x^2 + 4)\\,dx = \\int (x^3 + 4x)\\,dx = \\frac{x^4}{4} + 2x^2 + C$$

### Technique 2: Split Fractions

$$\\int \\frac{x^3 + 2x}{x^2}\\,dx = \\int \\left(x + \\frac{2}{x}\\right)\\,dx = \\frac{x^2}{2} + 2\\ln|x| + C$$

$$\\int \\frac{x^2 - 4x + 1}{\\sqrt{x}}\\,dx = \\int (x^{3/2} - 4x^{1/2} + x^{-1/2})\\,dx$$
$= \\frac{2x^{5/2}}{5} - \\frac{8x^{3/2}}{3} + 2x^{1/2} + C$

### Technique 3: Rewrite Radicals

$$\\int \\frac{3}{\\sqrt{x}}\\,dx = \\int 3x^{-1/2}\\,dx = 6\\sqrt{x} + C$$

$$\\int \\sqrt[3]{x^2}\\,dx = \\int x^{2/3}\\,dx = \\frac{x^{5/3}}{5/3} + C = \\frac{3}{5}x^{5/3} + C$$

> **AP Tip:** Always convert to $x^n$ form before applying the Power Rule. Roots, reciprocals, and radicals are just fractional/negative exponents.`
    },
    {
      id: 'anti4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Simplify Then Integrate** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x^4 - 3x^2 + 1}{x^2}\\,dx$.',
            options: ['$\\frac{x^3}{3} - 3x - \\frac{1}{x} + C$', '$\\frac{x^3}{3} - 3x + \\frac{1}{x} + C$', '$x^2 - 3\\ln|x| + \\frac{1}{x} + C$', '$\\frac{x^3}{3} + 3x - \\frac{1}{x} + C$'],
            correctAnswer: 0,
            explanation: 'Split: $\\int (x^2 - 3 + x^{-2})\\,dx = \\frac{x^3}{3} - 3x + \\frac{x^{-1}}{-1} + C = \\frac{x^3}{3} - 3x - \\frac{1}{x} + C$.'
          },
          {
            question: 'Evaluate $\\int (2x - 1)^2\\,dx$.',
            options: ['$\\frac{(2x-1)^3}{6} + C$', '$\\frac{4x^3}{3} - 2x^2 + x + C$', '$4x^2 - 4x + 1 + C$', '$\\frac{(2x-1)^3}{3} + C$'],
            correctAnswer: 1,
            explanation: 'Expand: $(2x-1)^2 = 4x^2 - 4x + 1$. Then $\\int (4x^2 - 4x + 1)\\,dx = \\frac{4x^3}{3} - 2x^2 + x + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{x+1}{\\sqrt{x}}\\,dx$.',
            options: ['$\\frac{2}{3}x^{3/2} + 2\\sqrt{x} + C$', '$\\frac{2}{3}x^{3/2} + \\sqrt{x} + C$', '$\\sqrt{x}(x+1) + C$', '$\\ln|x| + \\sqrt{x} + C$'],
            correctAnswer: 0,
            explanation: 'Split: $\\frac{x}{\\sqrt{x}} + \\frac{1}{\\sqrt{x}} = x^{1/2} + x^{-1/2}$. $\\int = \\frac{x^{3/2}}{3/2} + \\frac{x^{1/2}}{1/2} + C = \\frac{2}{3}x^{3/2} + 2\\sqrt{x} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti4-trig',
      type: 'text' as const,
      content: `### Technique 4: Trig Identities

Sometimes you need a trig identity before integrating:

| Integral | Identity Used | Result |
|:---:|:---:|:---:|
| $\\int \\tan^2 x\\,dx$ | $\\tan^2 x = \\sec^2 x - 1$ | $\\tan x - x + C$ |
| $\\int \\sin^2 x\\,dx$ | $\\sin^2 x = \\frac{1-\\cos 2x}{2}$ | $\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$ |
| $\\int \\cos^2 x\\,dx$ | $\\cos^2 x = \\frac{1+\\cos 2x}{2}$ | $\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$ |

> **Key Fact:** $\\int \\tan x\\,dx$ and $\\int \\sec x\\,dx$ require techniques you'll see later ($u$-substitution). For now, focus on recognizing when an identity simplifies the integrand.

### Decision Flowchart

| See This in Integrand | Do This |
|:---:|:---:|
| $(a+b)(c+d)$ | FOIL, then integrate terms |
| $\\frac{\\text{polynomial}}{x^n}$ | Divide each term by $x^n$ |
| $\\sqrt[n]{x^m}$ | Rewrite as $x^{m/n}$ |
| $\\frac{1}{x^n}$ | Rewrite as $x^{-n}$ |
| $\\tan^2 x$ or $\\cot^2 x$ | Use Pythagorean identity |`
    },
    {
      id: 'anti4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Trig & Advanced Rewriting** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\tan^2 x\\,dx$.',
            options: ['$\\tan x - x + C$', '$\\sec^2 x + C$', '$-\\ln|\\cos x| + C$', '$\\frac{\\tan^3 x}{3} + C$'],
            correctAnswer: 0,
            explanation: '$\\tan^2 x = \\sec^2 x - 1$. $\\int (\\sec^2 x - 1)\\,dx = \\tan x - x + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{x^3 - 1}{x - 1}\\,dx$ (for $x \\neq 1$).',
            options: ['$\\frac{x^3}{3} + \\frac{x^2}{2} + x + C$', '$\\frac{x^3}{3} - \\frac{x^2}{2} + x + C$', '$\\frac{x^2}{2} + x + \\ln|x-1| + C$', '$\\frac{x^4}{4} - x + C$'],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{x^3-1}{x-1} = x^2 + x + 1$. $\\int (x^2 + x + 1)\\,dx = \\frac{x^3}{3} + \\frac{x^2}{2} + x + C$.'
          }
        ]
      }
    },
    {
      id: 'anti4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the correct rewriting technique.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int x(3x^2 + 1)\\,dx$ — technique:',
            options: ['Expand product', 'Split fraction', 'Rewrite radical', 'Trig identity'],
            correctAnswers: ['Expand product'],
            hints: ['Distribute $x$ into the parentheses.'],
            explanation: 'Expand: $x(3x^2+1) = 3x^3 + x$. Then integrate: $\\frac{3x^4}{4} + \\frac{x^2}{2} + C$.'
          },
          {
            label: '$\\int \\frac{x^2+5}{x}\\,dx$ — technique:',
            options: ['Expand product', 'Split fraction', 'Rewrite radical', 'Trig identity'],
            correctAnswers: ['Split fraction'],
            hints: ['Divide each term by $x$.'],
            explanation: 'Split: $x + \\frac{5}{x}$. Integrate: $\\frac{x^2}{2} + 5\\ln|x| + C$.'
          },
          {
            label: '$\\int \\frac{5}{x^3}\\,dx$ — rewrite as:',
            options: ['$5x^3$', '$5x^{-3}$', '$\\frac{5}{3}\\ln|x|$', '$5 \\cdot \\frac{1}{x^3}$'],
            correctAnswers: ['$5x^{-3}$'],
            hints: ['Move $x^3$ to the numerator with negative exponent.'],
            explanation: '$\\frac{5}{x^3} = 5x^{-3}$. Then $\\int 5x^{-3}\\,dx = \\frac{5x^{-2}}{-2} + C = -\\frac{5}{2x^2} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti4-input',
      type: 'input-box' as const,
      content: '**Evaluate the integral.** ✍️',
      exercise: {
        question: 'Find $\\int_1^4 \\frac{x + 1}{\\sqrt{x}}\\,dx$.\n\nHint: Split the fraction first, then use the power rule.',
        correctAnswer: '20/3',
        acceptableAnswers: ['20/3', '6.67', '6.666', '6.6667'],
        hints: [
          'Rewrite: $\\frac{x}{\\sqrt{x}} + \\frac{1}{\\sqrt{x}} = x^{1/2} + x^{-1/2}$.',
          'Antiderivative: $\\frac{2}{3}x^{3/2} + 2x^{1/2}$.',
          'Evaluate from 1 to 4: $\\left(\\frac{2}{3}(8) + 2(2)\\right) - \\left(\\frac{2}{3}(1) + 2(1)\\right)$.'
        ],
        explanation: '$\\int_1^4 (x^{1/2} + x^{-1/2})\\,dx = \\left[\\frac{2}{3}x^{3/2} + 2x^{1/2}\\right]_1^4$\\n\\n$= \\left(\\frac{16}{3} + 4\\right) - \\left(\\frac{2}{3} + 2\\right) = \\frac{28}{3} - \\frac{8}{3} = \\frac{20}{3}$.'
      }
    },
    {
      id: 'anti4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

$$\\boxed{\\text{Rewrite} \\to \\text{Integrate term by term} \\to \\text{Simplify}}$$

| Technique | Template |
|:---:|:---:|
| Expand products | FOIL or distribute, then integrate each term |
| Split fractions | Divide each numerator term by denominator |
| Rewrite radicals | Convert to $x^{m/n}$, apply Power Rule |
| Trig identities | $\\tan^2 = \\sec^2-1$, double-angle for $\\sin^2, \\cos^2$ |
| Factor & cancel | $\\frac{x^3-1}{x-1} = x^2+x+1$ |

> **Up Next:** Part 5 — Inverse Trig Antiderivatives.`
    }
  ]
};
