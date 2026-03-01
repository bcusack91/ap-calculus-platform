export const satExponentialFnPart7Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef7-cheat',
      type: 'text' as const,
      content: `
# 📝 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed SAT Problems, Key Formulas**

## Exponential Functions Cheat Sheet

| Topic | Key Formula / Fact |
|-------|-------------------|
| General form | $f(x) = a \\cdot b^x$ |
| Growth | $b > 1$ |
| Decay | $0 < b < 1$ |
| Growth model | $A = P(1+r)^t$ |
| Decay model | $A = P(1-r)^t$ |
| Half-life | $A = P(1/2)^{t/h}$ |
| Compound interest | $A = P(1 + r/n)^{nt}$ |
| Continuous compounding | $A = Pe^{rt}$ |
| Horizontal asymptote | $y = k$ for $f(x) = a \\cdot b^x + k$ |
| Log definition | $\\log_b(a) = c \\iff b^c = a$ |
| Change of base | $\\log_b(a) = \\frac{\\log a}{\\log b}$ |

**SAT Quick Checks:**
- Table → compute **ratios** to confirm exponential.
- Context → identify $P$ (initial), $r$ (rate), $t$ (time).
- Graph → look for asymptote, then match equation.
- Equation → rewrite with common bases or use logs.
      `
    },
    {
      id: 'sat-ef7-strategy',
      type: 'text' as const,
      content: `
## SAT Strategy Guide

**Step-by-step for exponential SAT questions:**

1. **Read carefully** — identify the initial value, rate, and time period.
2. **Choose the right formula:**
   - Simple growth/decay → $A = P(1 \\pm r)^t$
   - Compound interest → $A = P(1 + r/n)^{nt}$
   - Continuous → $A = Pe^{rt}$
3. **Plug in and compute** — watch your order of operations.
4. **Check your answer** — does the result make sense? (Growth should give a larger value, decay a smaller one.)

**Common traps:**
- Confusing rate with base: "increases by 5 %" → base is $1.05$, not $0.05$.
- Forgetting to divide the rate for compound interest: annual rate ÷ $n$.
- Mixing up half-life: after 2 half-lives, $1/4$ remains (not $1/2$).
- Reading tables: constant *difference* = linear, constant *ratio* = exponential.

**Time-saving tips:**
- If answer choices are "nice" numbers, try plugging them back in.
- For $2^x = 2^n$, just set $x = n$ — no calculation needed.
- Know your powers: $2^{10} = 1024$, $3^5 = 243$, $5^4 = 625$.
      `
    },
    {
      id: 'sat-ef7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A car purchased for \$30,000 depreciates at 15 % per year. Which expression represents its value after $t$ years?',
            options: ['$30000(0.15)^t$', '$30000(0.85)^t$', '$30000(1.15)^t$', '$30000 - 0.15t$'],
            correctAnswer: 1,
            explanation: 'Depreciation of 15 % means the base is $1 - 0.15 = 0.85$. The value is $30000(0.85)^t$.'
          },
          {
            question: 'If $f(x) = 4 \\cdot 2^x + 3$, what is the horizontal asymptote?',
            options: ['$y = 4$', '$y = 2$', '$y = 3$', '$y = 0$'],
            correctAnswer: 2,
            explanation: 'The function has the form $a \\cdot b^x + k$ with $k = 3$. The horizontal asymptote is $y = 3$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef7-mixed',
      type: 'text' as const,
      content: `
## More Worked Problems

**Problem 1:** A bank account earns 6 % interest compounded monthly. If \$5,000 is deposited, how much is in the account after 3 years?

$$A = 5000\\left(1 + \\frac{0.06}{12}\\right)^{12 \\times 3} = 5000(1.005)^{36}$$

$$(1.005)^{36} \\approx 1.19668 \\implies A \\approx \$5{,}983$$

**Problem 2:** Solve $25^x = 125$.

$$25 = 5^2, \\quad 125 = 5^3$$

$$(5^2)^x = 5^3 \\implies 5^{2x} = 5^3 \\implies 2x = 3 \\implies x = \\frac{3}{2}$$

**Problem 3:** A bacteria colony doubles every 4 hours. Starting from 300 bacteria, how many are there after 12 hours?

$$A = 300 \\cdot 2^{12/4} = 300 \\cdot 2^3 = 300 \\cdot 8 = 2{,}400$$

**Problem 4:** Is the data linear or exponential? $f(0)=10, f(1)=30, f(2)=90, f(3)=270$.

Ratios: $30/10 = 3$, $90/30 = 3$, $270/90 = 3$. Constant ratio → **exponential**: $f(x) = 10 \\cdot 3^x$.
      `
    },
    {
      id: 'sat-ef7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Problem Solving** 🧮

1) Solve: $5^{(x-1)} = 125$. What is $x$?
2) A \$10,000 investment grows at 8 % per year. What is its value after 3 years? (Round to nearest dollar, no $ sign.)
3) A substance with a half-life of 4 hours starts at 640 g. How many grams remain after 12 hours?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '12597', '80'],
        hint1: '$125 = 5^3$, so $x - 1 = 3$.',
        hint2: '$A = 10000(1.08)^3 = 10000 \\times 1.259712$.',
        hint3: '$12/4 = 3$ half-lives. $640 \\times (1/2)^3 = 640/8$.',
        explanation: '1) $x - 1 = 3 \\implies x = 4$. 2) $10000(1.08)^3 \\approx 12{,}597$. 3) $640/8 = 80$ g.'
      }
    },
    {
      id: 'sat-ef7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a value doubles every 5 years, the base of the exponential using time in years is …',
            options: ['$2$', '$2^{1/5}$', '$2^5$', '$5^2$']
          },
          {
            label: 'The graph of $f(x) = e^x$ has a $y$-intercept at …',
            options: ['$(0, e)$', '$(0, 1)$', '$(1, 0)$', '$(0, 0)$']
          },
          {
            label: '$\\log_b(b^5) = ?$',
            options: ['$b$', '$5$', '$b^5$', '$5b$']
          }
        ],
        correctAnswers: ['$2^{1/5}$', '$(0, 1)$', '$5$'],
        hint1: 'Doubling every 5 years: $f(t) = P \\cdot 2^{t/5} = P \\cdot (2^{1/5})^t$.',
        hint2: '$e^0 = 1$, so the $y$-intercept is $(0, 1)$.',
        hint3: '$\\log_b(b^5) = 5\\log_b(b) = 5 \\cdot 1 = 5$.',
        explanation: 'The annual base is $2^{1/5}$. The $y$-intercept of $e^x$ is $(0,1)$. By the power rule, $\\log_b(b^5) = 5$.'
      }
    },
    {
      id: 'sat-ef7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Mixed Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The number of subscribers to a streaming service is modeled by $S(t) = 2000 \\cdot (1.15)^t$, where $t$ is in months. According to this model, by what percent does the number of subscribers increase each month?',
            options: ['$1.15\\%$', '$15\\%$', '$115\\%$', '$0.15\\%$'],
            correctAnswer: 1,
            explanation: 'The base is $1.15 = 1 + 0.15$, so the monthly increase is $0.15 = 15\\%$.'
          },
          {
            question: 'If $4^{(2x-1)} = 8^x$, what is the value of $x$?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $(2^2)^{2x-1} = (2^3)^x \\implies 2^{4x-2} = 2^{3x}$. Then $4x - 2 = 3x \\implies x = 2$.'
          }
        ]
      }
    }
  ]
};
