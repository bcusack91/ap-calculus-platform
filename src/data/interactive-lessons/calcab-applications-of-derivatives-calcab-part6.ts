export const calcabAppsDerivativesPart6Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps6-intro',
      type: 'text' as const,
      content: `# 📈 Applications of Derivatives

**Part 6 of 7 — Optimization**

### The Optimization Framework

$$\\boxed{\\text{Optimize} \\to \\text{Constraint} \\to \\text{Single Variable} \\to \\text{Calculus} \\to \\text{Verify}}$$

| Step | Action | Detail |
|:---:|:---:|:---:|
| 1 | **Identify** | What quantity to maximize/minimize? |
| 2 | **Write objective** | Express the quantity as a function |
| 3 | **Find constraint** | A second equation relating the variables |
| 4 | **Eliminate** | Use constraint to get one-variable function |
| 5 | **Differentiate** | Set $f'(x) = 0$, find critical points |
| 6 | **Verify** | Confirm it is a max/min (not neither) and that it is the absolute one |
| 7 | **Answer** | State the answer in context with units |

> **AP Tip:** On free-response optimization problems, you MUST justify why your critical point is a maximum or minimum. Use the First or Second Derivative Test, or the Candidates Test on a closed interval.`
    },
    {
      id: 'apps6-classic',
      type: 'text' as const,
      content: `### Classic Example 1: Maximize Area

A farmer has 200 m of fence. Maximize the area of a rectangular pen against a barn (3 sides needed).

**Objective:** $A = xy$ (maximize)

**Constraint:** $x + 2y = 200$ → $x = 200 - 2y$

**Substitute:** $A(y) = (200-2y)y = 200y - 2y^2$

**Differentiate:** $A'(y) = 200 - 4y = 0$ → $y = 50$

Then $x = 200 - 100 = 100$.

$$\\boxed{A_{\\max} = 100 \\times 50 = 5000 \\text{ m}^2}$$

**Justify:** $A'(y) > 0$ for $0 < y < 50$ and $A'(y) < 0$ for $50 < y < 100$, so $A$ increases and then decreases. Since $y = 50$ is the only critical point on $(0, 100)$, it gives the absolute maximum.

### Classic Example 2: Minimize Material

Make an open-top box with volume $32$ cm$^3$ from a square base. Minimize surface area.

| Variable | Meaning |
|:---:|:---:|
| $x$ | Side of square base |
| $h$ | Height |

**Objective:** $S = x^2 + 4xh$ (minimize, no top)

**Constraint:** $V = x^2 h = 32$ → $h = \\frac{32}{x^2}$

**Substitute:** $S(x) = x^2 + 4x \\cdot \\frac{32}{x^2} = x^2 + \\frac{128}{x}$

**Differentiate:** $S'(x) = 2x - \\frac{128}{x^2} = 0$ → $2x^3 = 128$ → $x = 4$

Then $h = \\frac{32}{16} = 2$.

$$\\boxed{S_{\\min} = 16 + 32 = 48 \\text{ cm}^2}$$

**Justify:** $S'(x) = \\frac{2(x^3 - 64)}{x^2}$ is negative for $0 < x < 4$ and positive for $x > 4$. So $S$ decreases and then increases, and $x = 4$, the only critical point on $(0, \\infty)$, gives the absolute minimum.`
    },
    {
      id: 'apps6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Optimization Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find two positive numbers that sum to 20 and have maximum product.',
            options: ['$10$ and $10$', '$5$ and $15$', '$20$ and $0$', '$-10$ and $30$'],
            correctAnswer: 0,
            explanation: 'Let $x + y = 20$, maximize $P = xy = x(20-x) = 20x - x^2$. $P\' = 20 - 2x = 0$ at $x = 10$. Max product = $100$. Expanding $x(20 - x)$ as $20x - 2x^2$ leads to $5$ and $15$, dropping the $2$ in $P\'$ leads to $20$ and $0$, and a sign slip ($20 + 2x = 0$) leads to $-10$ and $30$.'
          },
          {
            question: 'A rectangle has perimeter 40. Find the maximum area.',
            options: ['$100$', '$10$', '$400$', '$0$'],
            correctAnswer: 0,
            explanation: '$2l + 2w = 40$, $l = 20-w$. $A = w(20-w) = 20w - w^2$. $A\' = 20 - 2w = 0$ at $w = 10$, $l = 10$. $A = 100$ (a square). $10$ is the side length, not the area; using $l + w = 40$ gives $400$; dropping the $2$ in $A\'$ gives $w = 20$, $l = 0$, and area $0$.'
          },
          {
            question: 'Which step is MOST commonly forgotten in optimization problems?',
            options: ['Finding the derivative', 'Setting up the constraint', 'Justifying max vs min', 'Computing the final answer'],
            correctAnswer: 2,
            explanation: 'Students often forget to verify (justify) that a critical point is actually a max or min. This costs AP points!'
          }
        ]
      }
    },
    {
      id: 'apps6-distance',
      type: 'text' as const,
      content: `### Minimizing Distance

Find the point on $y = x^2$ closest to $(0, 1)$.

**Objective:** Minimize $d = \\sqrt{x^2 + (x^2-1)^2}$

> **Key Concept:** Minimize $d^2$ instead! Same critical points, avoids the square root.

$D = d^2 = x^2 + (x^2-1)^2 = x^2 + x^4 - 2x^2 + 1 = x^4 - x^2 + 1$

$D' = 4x^3 - 2x = 2x(2x^2 - 1) = 0$

$x = 0$ or $x = \\pm\\frac{1}{\\sqrt{2}}$

| $x$ | $D = d^2$ | $d$ |
|:---:|:---:|:---:|
| $0$ | $1$ | $1$ |
| $\\pm\\frac{1}{\\sqrt{2}}$ | $\\frac{1}{4} - \\frac{1}{2} + 1 = \\frac{3}{4}$ | $\\frac{\\sqrt{3}}{2}$ |

$$\\boxed{\\text{Closest points: } \\left(\\pm\\frac{1}{\\sqrt{2}},\\, \\frac{1}{2}\\right) \\text{ at distance } \\frac{\\sqrt{3}}{2}}$$

### Common Optimization Setups

| Problem Type | Objective | Typical Constraint |
|:---:|:---:|:---:|
| Fencing | Maximize area | Fixed perimeter |
| Box/can | Minimize surface area | Fixed volume |
| Distance | Minimize $d^2$ | Point on curve |
| Revenue | Maximize $R = p \\cdot q$ | Demand equation |
| Travel time | Minimize $t = \\frac{d}{v}$ | Different speeds on different terrain |`
    },
    {
      id: 'apps6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'A can has volume $250\\pi$ cm$^3$. The surface area $S = 2\\pi r^2 + 2\\pi r h$ is minimized when $r = $?',
            options: ['$5$ cm', '$10$ cm', '$\\sqrt[3]{250}$ cm', '$\\sqrt{250}$ cm'],
            correctAnswer: 0,
            explanation: '$V = \\pi r^2 h = 250\\pi$, so $h = \\frac{250}{r^2}$. $S = 2\\pi r^2 + \\frac{500\\pi}{r}$. $S\' = 4\\pi r - \\frac{500\\pi}{r^2} = 0$. $4r^3 = 500$, $r^3 = 125$, $r = 5$ cm.'
          },
          {
            question: 'Why do we minimize $d^2$ instead of $d$ in distance problems?',
            options: ['Same critical points, no square root', '$d^2$ is always smaller than $d$, so it is easier to use', '$d$ is not differentiable anywhere, so $d^2$ must replace it', 'The minimum value of $d^2$ equals the minimum value of $d$'],
            correctAnswer: 0,
            explanation: 'Since $d \\geq 0$, minimizing $d$ and $d^2$ give the same critical points. But $d^2$ has no square root, making differentiation cleaner. $d^2 < d$ only when $d < 1$, $d$ is differentiable wherever $d > 0$, and the minimum of $d^2$ is the square of the minimum of $d$, not the same value.'
          }
        ]
      }
    },
    {
      id: 'apps6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Optimization Setup: An open box is made by cutting squares of side $x$ from each corner of a $12 \\times 12$ sheet and folding up.** 🔍\n\nDimensions: $(12-2x) \\times (12-2x) \\times x$. Volume: $V(x) = x(12-2x)^2$.',
      exercise: {
        dropdowns: [
          {
            label: 'The domain of $x$ is:',
            options: ['$0 < x < 6$', '$0 < x < 12$', '$0 \\le x \\le 6$', '$x > 0$, $x \\neq 6$'],
            correctAnswers: ['$0 < x < 6$'],
            hints: ['The side length $12 - 2x$ must be positive.'],
            explanation: '$12 - 2x > 0$ requires $x < 6$. Also $x > 0$. Domain: $(0, 6)$. Using $12 - x > 0$ gives $x < 12$, including the endpoints allows boxes with zero volume, and only excluding $x = 6$ forgets that $12 - 2x$ must be positive.'
          },
          {
            label: '$V\'(x) = 12(x-2)(x-6)$. Critical point in domain:',
            options: ['$x = 2$', '$x = 0$ and $x = 6$', '$x = 2$ and $x = 6$', 'No critical point'],
            correctAnswers: ['$x = 2$'],
            hints: ['$x = 6$ is an endpoint (not in the open interval).'],
            explanation: '$V\'(x) = 0$ at $x = 2$ and $x = 6$. Only $x = 2$ is in $(0,6)$. $x = 0$ and $x = 6$ are the zeros of $V$, not of $V\'$.'
          },
          {
            label: 'The maximum volume is:',
            options: ['$128$', '$64$', '$108$', '$96$'],
            correctAnswers: ['$128$'],
            hints: ['$V(2) = 2(12-4)^2 = 2 \\cdot 64$.'],
            explanation: '$V(2) = 2 \\cdot (8)^2 = 2 \\cdot 64 = 128$ cubic units.'
          }
        ]
      }
    },
    {
      id: 'apps6-input',
      type: 'input-box' as const,
      content: '**Solve this optimization problem.** ✍️',
      exercise: {
        question: 'A farmer wants to enclose a rectangular area of $1800$ m$^2$ using the minimum amount of fencing. What is the minimum perimeter (in meters)? Give an exact answer, or a decimal correct to three places.',
        correctAnswer: '120sqrt(2)',
        acceptableAnswers: ['120sqrt(2)', '120*sqrt(2)', '120√2', '169.706', '169.705', '60sqrt(8)', '240/sqrt(2)'],
        hints: [
          'Let the sides be $x$ and $y$ with $xy = 1800$.',
          'Perimeter $P = 2x + 2y = 2x + \\frac{3600}{x}$.',
          '$P\' = 2 - \\frac{3600}{x^2} = 0$ gives $x^2 = 1800$.',
          '$x = \\sqrt{1800} = 30\\sqrt{2}$, and the perimeter is $P = 4 \\cdot 30\\sqrt{2}$.'
        ],
        explanation: '$xy = 1800$, $y = 1800/x$. $P = 2x + 3600/x$.\\n$P\' = 2 - 3600/x^2 = 0 \\Rightarrow x^2 = 1800 \\Rightarrow x = 30\\sqrt{2}$.\\nThen $y = 1800/(30\\sqrt{2}) = 30\\sqrt{2}$ (a square!).\\n$P = 4 \\cdot 30\\sqrt{2} = 120\\sqrt{2} \\approx 169.706$ m.'
      }
    },
    {
      id: 'apps6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

$$\\boxed{\\text{Objective + Constraint} \\to \\text{Single variable} \\to \\text{Calculus}}$$

| Concept | Key Rule |
|:---:|:---:|
| Setup | Identify what to maximize/minimize and the constraint |
| Eliminate | Use constraint to reduce to one variable |
| Solve | $f'(x) = 0$ to find critical points |
| Justify | Use FDT, SDT, or Candidates Test to verify max/min |
| Distance trick | Minimize $d^2$ instead of $d$ |
| Domain | Always determine the feasible domain |

> **Up Next:** Part 7 — Comprehensive Review & Assessment.`
    }
  ]
};
