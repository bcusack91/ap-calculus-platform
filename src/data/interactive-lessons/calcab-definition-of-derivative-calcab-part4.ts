export const calcabDerivativeDefPart4Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef4-intro',
      type: 'text' as const,
      content: `# ∫ Derivative Notation & Units

**Part 4 of 7 — The Language of Derivatives**

---

### Topics in This Part

| Section |
|---------|
| 📖 The Four Common Notations |
| Leibniz Notation — Why It's Special |
| 📌 Higher-Order Derivatives |
| Units of Derivatives |
| Interpreting Derivatives in Context |

> 🔑 **Key Concept:** Different notations emphasize different aspects of the derivative. Leibniz notation ($dy/dx$) is especially powerful because it suggests the chain rule and carries units naturally.`
    },
    {
      id: 'derdef4-notations',
      type: 'text' as const,
      content: `
## 📖 The Four Common Notations

| Notation | Name | Read As | Best For |
|----------|------|---------|----------|
| $f'(x)$ | Lagrange | "$f$ prime of $x$" | General rules, abstract functions |
| $\\frac{dy}{dx}$ | Leibniz | "dee-why dee-ex" | Chain rule, related rates, implicit diff |
| $\\frac{d}{dx}[f(x)]$ | Operator | "dee-dee-ex of $f(x)$" | "Take the derivative of ___" |
| $\\dot{y}$ | Newton | "$y$ dot" | Time derivatives in physics |

---

### Leibniz Notation: More Than a Symbol

$\\frac{dy}{dx}$ is NOT a fraction, but it **behaves** like one in key situations:

$$\\boxed{\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} \\quad \\text{(Chain Rule — "cancels" like fractions!)}}$$

**Evaluated at a point:** $\\left.\\frac{dy}{dx}\\right|_{x=3}$ means $f'(3)$

> **AP Tip:** The AP exam uses all notations interchangeably. Be comfortable reading $f'(x)$, $\\frac{dy}{dx}$, and $\\frac{d}{dx}[f(x)]$ — they all mean the same thing.`
    },
    {
      id: 'derdef4-higher',
      type: 'text' as const,
      content: `
## 📌 Higher-Order Derivatives

| Order | Lagrange | Leibniz | Meaning |
|-------|----------|---------|---------|
| First | $f'(x)$ | $\\frac{dy}{dx}$ | Slope / rate of change |
| Second | $f''(x)$ | $\\frac{d^2y}{dx^2}$ | Concavity / acceleration |
| Third | $f'''(x)$ | $\\frac{d^3y}{dx^3}$ | Jerk (rate of change of acceleration) |
| $n$-th | $f^{(n)}(x)$ | $\\frac{d^ny}{dx^n}$ | — |

---

### Physical Interpretation Chain

$$\\text{Position } s(t) \\xrightarrow{d/dt} \\text{Velocity } v(t) \\xrightarrow{d/dt} \\text{Acceleration } a(t)$$

$$s'(t) = v(t), \\qquad s''(t) = v'(t) = a(t)$$

> 🔑 **Key Fact:** The second derivative tells you about concavity: $f'' > 0$ → concave up, $f'' < 0$ → concave down.`
    },
    {
      id: 'derdef4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Notation & Higher Derivatives** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $s(t)$ gives position in feet at time $t$ seconds, what are the units of $s\'\'(t)$?',
            options: ['feet', 'feet/second', 'feet/second$^2$', 'seconds/foot'],
            correctAnswer: 2,
            explanation: '$s\'(t)$ = velocity [$\\text{ft/s}$]. $s\'\'(t)$ = acceleration = rate of change of velocity [$\\text{ft/s}^2$].'
          },
          {
            question: 'Which notation represents "the second derivative of $y$ with respect to $x$, evaluated at $x = 1$"?',
            options: ['$f\'\'(1)$', '$\\frac{dy}{dx}\\bigg|_{x=1}$', '$f\'(1)$', '$\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}$'],
            correctAnswer: 3,
            explanation: 'Leibniz for second derivative evaluated at a point: $\\left.\\frac{d^2y}{dx^2}\\right|_{x=1}$. Option A is also correct in Lagrange notation.'
          },
          {
            question: 'The operator notation $\\frac{d}{dx}[x^2 \\sin x]$ means:',
            options: ['Divide $x^2\\sin x$ by $dx$', 'Differentiate $x^2\\sin x$ with respect to $x$', 'Integrate $x^2\\sin x$', 'Evaluate $x^2\\sin x$ at $x = d$'],
            correctAnswer: 1,
            explanation: '$\\frac{d}{dx}$ is the differentiation operator — it says "take the derivative of whatever follows."'
          }
        ]
      }
    },
    {
      id: 'derdef4-units',
      type: 'text' as const,
      content: `
## Units of Derivatives

$$\\boxed{\\text{Units of } \\frac{dy}{dx} = \\frac{\\text{units of } y}{\\text{units of } x}}$$

| Context | $y$ Units | $x$ Units | $dy/dx$ Units | Meaning |
|---------|----------|----------|--------------|---------|
| Position vs time | meters | seconds | m/s | Velocity |
| Water volume vs time | gallons | minutes | gal/min | Flow rate |
| Cost vs quantity | dollars | items | $/item | Marginal cost |
| Population vs time | people | years | people/yr | Growth rate |
| Temperature vs position | °C | cm | °C/cm | Temp gradient |

> **AP Tip:** On AP FRQ, you MUST include units when interpreting a derivative in context. "At $t = 5$ hours, the temperature is changing at a rate of $-3$ degrees per hour."`
    },
    {
      id: 'derdef4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Interpreting Derivatives** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $P(t)$ represents population (thousands) at time $t$ (years), and $P\'(10) = 3$, this means:',
            options: [
              'The population is 3,000 at year 10',
              'At $t = 10$, population is increasing at 3,000 people per year',
              'The population reaches 3,000 in 10 years',
              'The population triples every 10 years'
            ],
            correctAnswer: 1,
            explanation: '$P\'(10) = 3$ means the rate of change at $t=10$ is 3 thousand/year = 3,000 people/year.'
          },
          {
            question: 'If $C(x)$ is the cost in dollars to produce $x$ widgets, what does $C\'(100) = 12$ mean?',
            options: [
              'It costs $12 to make 100 widgets',
              'The 101st widget costs approximately $12',
              'Each widget costs $12',
              'Profit is $12 at 100 widgets'
            ],
            correctAnswer: 1,
            explanation: '$C\'(100) = 12$ means the marginal cost at $x=100$ is $12/widget. The next widget (101st) costs approximately $12.'
          }
        ]
      }
    },
    {
      id: 'derdef4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Notation** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\frac{d}{dx}[x^3]$ equals', options: ['$x^3$', '$3x^2$', '$3x^3$', '$x^2/3$'] },
          { label: '$f\'\'(x)$ in Leibniz notation is', options: ['$\\frac{dy}{dx}$', '$\\frac{d^2y}{dx^2}$', '$\\frac{d^2y}{d^2x}$', '$\\left(\\frac{dy}{dx}\\right)^2$'] },
          { label: 'If distance is in meters and time in seconds, $\\frac{dx}{dt}$ has units', options: ['meters', 'm/s', '$m/s^{2}$', 's/m'] }
        ],
        correctAnswers: ['$3x^2$', '$\\frac{d^2y}{dx^2}$', 'm/s'],
        hint1: 'Power rule: $\\frac{d}{dx}[x^n] = nx^{n-1}$.',
        hint2: 'The second derivative squares the $d$ in the numerator, not the $x$ in the denominator.',
        hint3: 'Derivative units = output units / input units.',
        explanation: 'Power rule → $3x^2$. Leibniz second derivative: $\\frac{d^2y}{dx^2}$. Distance/time = m/s.'
      }
    },
    {
      id: 'derdef4-input',
      type: 'input-box' as const,
      content: `**Interpret in Context** ✍️`,
      exercise: {
        question: 'A tank holds $W(t)$ gallons of water at time $t$ minutes. If $W\'(5) = -8$, at what rate is water leaving the tank at $t = 5$? Give your answer as a positive number in gallons per minute.',
        correctAnswer: '8',
        acceptableAnswers: ['8', '8.0'],
        hint1: '$W\'(5) = -8$ means the water level is changing at $-8$ gal/min.',
        hint2: 'The negative sign means water is leaving. The rate of leaving is $8$ gal/min.',
        explanation: '$W\'(5) = -8$ gal/min. The negative means water is leaving at 8 gallons per minute.'
      }
    }
  ]
}
