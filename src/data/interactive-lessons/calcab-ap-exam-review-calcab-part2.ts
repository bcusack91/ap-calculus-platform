export const calcabExamReviewPart2Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'examrev2-intro',
      type: 'text' as const,
      content: `# AP Exam Review \u2014 Differentiation Rules

**Part 2 of 7**

---

### Differentiation Rules Reference

| Rule | Formula |
|:---|:---|
| Power | $\\frac{d}{dx}[x^n] = nx^{n-1}$ |
| Product | $(fg)' = f'g + fg'$ |
| Quotient | $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ |
| Chain | $\\frac{d}{dx}[f(g(x))] = f'(g(x))\\cdot g'(x)$ |
| $e^x$ | $\\frac{d}{dx}[e^{g(x)}] = e^{g(x)}\\cdot g'(x)$ |
| $\\ln x$ | $\\frac{d}{dx}[\\ln u] = \\frac{u'}{u}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ |

### When to Use Each Rule

| Scenario | Rule | Example |
|:---|:---|:---|
| Two functions multiplied | Product | $x^2 \\sin x$ |
| One function divided by another | Quotient | $\\frac{\\ln x}{x}$ |
| Function inside a function | Chain | $\\sin(x^3)$ |
| Product inside a composition | Chain + Product | $e^{x\\sin x}$ |

> **Key Fact:** The chain rule is the most-tested differentiation rule on the AP exam.

---

### Worked Example \u2014 Multi-Rule Problem

Find $f'(x)$ for $f(x) = \\frac{x^2 e^{3x}}{\\cos x}$.

**Step 1:** Identify \u2014 quotient rule with numerator = product.

**Numerator:** $h(x) = x^2 e^{3x}$

$h'(x) = 2x\\,e^{3x} + x^2\\cdot 3e^{3x} = e^{3x}(2x + 3x^2)$

**Step 2:** Quotient rule:

$$f'(x) = \\frac{e^{3x}(2x+3x^2)\\cos x - x^2 e^{3x}(-\\sin x)}{\\cos^2 x}$$

$$= \\frac{x\\,e^{3x}[(2+3x)\\cos x + x\\sin x]}{\\cos^2 x}$$`
    },
    {
      id: 'examrev2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Differentiation Rules Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}[x^3 \\ln x] =$',
            options: ['$x^2(3\\ln x + 1)$', '$3x^2 \\ln x$', '$\\frac{x^2}{x}$', '$3x^2 + \\frac{1}{x}$'],
            correctAnswer: 0,
            explanation: 'Product rule: $3x^2 \\ln x + x^3 \\cdot \\frac{1}{x} = 3x^2 \\ln x + x^2 = x^2(3\\ln x+1)$.'
          },
          {
            question: '$\\frac{d}{dx}[\\sin(x^2)] =$',
            options: ['$2x\\cos(x^2)$', '$\\cos(x^2)$', '$2x\\sin(x^2)$', '$x^2\\cos(x^2)$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $\\cos(x^2)\\cdot 2x = 2x\\cos(x^2)$.'
          },
          {
            question: 'If $f(x) = e^{\\sin x}$, then $f\'(x) =$',
            options: ['$e^{\\sin x}\\cos x$', '$e^{\\cos x}$', '$\\cos x \\cdot e^x$', '$e^{\\sin x}\\sin x$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $e^{\\sin x}\\cdot \\cos x$.'
          }
        ]
      }
    },
    {
      id: 'examrev2-implicit',
      type: 'text' as const,
      content: `### Implicit Differentiation Review

For equations not solved for $y$, differentiate both sides with respect to $x$, treating $y$ as a function of $x$.

$$\\boxed{\\text{Every } y \\text{ term gets a } \\frac{dy}{dx} \\text{ factor (chain rule)}}$$

**Example:** $x^2 + y^2 = 25$

$2x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{x}{y}$

### AP Tips for Derivative Problems

| Tip | Why It Matters |
|:---|:---|
| Simplify BEFORE differentiating | Avoids unnecessary product/quotient rules |
| Check for chain rule | Most common error is forgetting inner derivative |
| Read carefully for $f'(a)$ vs $f(a)$ | Question may ask for the derivative at a point |
| Know trig derivatives cold | These appear frequently in MC |`
    },
    {
      id: 'examrev2-quiz2',
      type: 'multiple-choice' as const,
      content: '**More Practice** \ud83d\udcdd',
      exercise: {
        questions: [
          {
            question: 'If $x^2y + y^3 = 10$, find $\\frac{dy}{dx}$ at $(1, 2)$.',
            options: ['$-\\frac{2}{7}$', '$-\\frac{4}{13}$', '$\\frac{2}{7}$', '$-\\frac{1}{6}$'],
            correctAnswer: 1,
            explanation: '$2xy + x^2\\frac{dy}{dx} + 3y^2\\frac{dy}{dx} = 0$. $\\frac{dy}{dx}(x^2+3y^2) = -2xy$. At $(1,2): \\frac{dy}{dx} = \\frac{-4}{1+12} = -\\frac{4}{13}$.'
          },
          {
            question: '$\\frac{d}{dx}[\\ln(\\cos x)] =$',
            options: ['$-\\tan x$', '$\\frac{1}{\\cos x}$', '$\\tan x$', '$-\\sec x$'],
            correctAnswer: 0,
            explanation: '$\\frac{-\\sin x}{\\cos x} = -\\tan x$.'
          }
        ]
      }
    },
    {
      id: 'examrev2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the rule.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}[\\tan^2(3x)]$ requires:',
            options: ['Power + Chain', 'Product rule', 'Quotient rule', 'Only chain rule'],
            correctAnswers: ['Power + Chain'],
            hints: ['$\\tan^2(3x) = [\\tan(3x)]^2$. Bring down the 2, then chain.'],
            explanation: 'Power rule on the outer square, chain rule on $\\tan(3x)$, chain again on $3x$.'
          },
          {
            label: '$\\frac{d}{dx}\\left[\\frac{e^x}{x}\\right]$ requires:',
            options: ['Quotient rule', 'Product rule', 'Chain rule only', 'Power rule'],
            correctAnswers: ['Quotient rule'],
            hints: ['A function divided by another function.'],
            explanation: '$\\frac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\frac{e^x(x-1)}{x^2}$.'
          },
          {
            label: '$\\frac{d}{dx}[x\\sin x\\cos x]$ requires:',
            options: ['Product rule (twice)', 'Chain rule', 'Quotient rule', 'Power rule'],
            correctAnswers: ['Product rule (twice)'],
            hints: ['Three functions multiplied together.'],
            explanation: 'Triple product: differentiate one factor at a time while keeping the others.'
          }
        ]
      }
    },
    {
      id: 'examrev2-input',
      type: 'input-box' as const,
      content: '**Compute the derivative.** \u270d\ufe0f',
      exercise: {
        question: 'If $f(x) = (2x+1)^5$, find $f\'(1)$. Enter the numerical value.',
        correctAnswer: '810',
        acceptableAnswers: ['810'],
        hints: [
          'Chain rule: $f\'(x) = 5(2x+1)^4 \\cdot 2 = 10(2x+1)^4$.',
          'At $x=1$: $f\'(1) = 10(3)^4$.',
          '$3^4 = 81$. $f\'(1) = 10 \\cdot 81 = 810$.'
        ],
        explanation: '$f\'(x) = 10(2x+1)^4$. $f\'(1) = 10(3)^4 = 810$.'
      }
    },
    {
      id: 'examrev2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- Master the product, quotient, and chain rules
- Chain rule applies whenever a function is composed with another
- Implicit differentiation: every $y$ gets $\\frac{dy}{dx}$
- Simplify before differentiating when possible`
    }
  ]
};
