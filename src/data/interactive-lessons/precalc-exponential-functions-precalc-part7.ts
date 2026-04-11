export const precalcExponentialPart7Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Exponential Functions — Full Synthesis

**Part 7 of 7 — Putting It All Together**

This final part combines every exponential skill into multi-step problems — just like the AP exam.

### Your Exponential Toolkit

| Concept (Part) | Key Formula / Idea |
|:---------------|:-------------------|
| Core Form (1) | $f(x) = ab^x$, growth if $b > 1$, decay if $0 < b < 1$ |
| Transformations (2) | $g(x) = a \\cdot b^{x-h} + k$, HA at $y = k$ |
| Compound Interest (3) | $A = P(1 + r/n)^{nt}$ or $A = Pe^{rt}$ |
| Half-Life (4) | $A = A_0(\\frac{1}{2})^{t/T_{1/2}}$, $T_{1/2} = \\frac{\\ln 2}{|k|}$ |
| Solving with Logs (5) | Isolate → $\\ln$ both sides → solve |
| Data Fitting (6) | Ratio test, two-point method, log linearization |
      `
    },
    {
      id: 'p7-multi-step-example',
      type: 'text' as const,
      content: `
## 📋 Multi-Step Problem Walkthrough

> **A pharmaceutical company tests a new drug. At $t = 0$, the bloodstream concentration is $200\\text{ mg/L}$. After $3$ hours, it's $50\\text{ mg/L}$.**
>
> **(a) Find the exponential model. (b) Find the half-life. (c) When does concentration drop below $5\\text{ mg/L}$?**

### Part (a): Find the model

$C(t) = 200 \\cdot b^t$

Using $C(3) = 50$: $200b^3 = 50 \\implies b^3 = 0.25 \\implies b = 0.25^{1/3} \\approx 0.630$

$$\\boxed{C(t) = 200(0.630)^t}$$

### Part (b): Find the half-life

$T_{1/2} = \\frac{\\ln 2}{|\\ln(0.630)|} = \\frac{0.693}{0.462} \\approx 1.5\\text{ hours}$

**Check:** $C(1.5) = 200(0.630)^{1.5} = 200(0.5) = 100$ ✔ (half of $200$)

### Part (c): When $C(t) < 5$?

$200(0.630)^t = 5$

$(0.630)^t = 0.025$

$t = \\frac{\\ln(0.025)}{\\ln(0.630)} = \\frac{-3.689}{-0.462} \\approx 7.98\\text{ hours}$

Concentration drops below $5\\text{ mg/L}$ after about $8$ hours.
      `
    },
    {
      id: 'p7-comparison',
      type: 'text' as const,
      content: `
## ⚖️ Comparing Exponential Models

### When Problems Give Different Formats

| Given Format | Convert To | Method |
|:-------------|:-----------|:-------|
| "Doubles every $T$ years" | $f(t) = a \\cdot 2^{t/T}$ | Base is $2$, exponent is $t/T$ |
| "Grows $r\\%$ per year" | $f(t) = a(1 + r)^t$ | Standard percent form |
| "Continuous rate $k$" | $f(t) = ae^{kt}$ | Natural exponential |
| "Half-life of $T$ hours" | $f(t) = a(\\frac{1}{2})^{t/T}$ | Base is $\\frac{1}{2}$ |

### Comparison Example

> **Investment A: $\\$10{,}000$ at $5\\%$ compounded annually. Investment B: $\\$8{,}000$ at $6\\%$ compounded continuously. When does B overtake A?**

$A(t) = 10000(1.05)^t$

$B(t) = 8000e^{0.06t}$

Set equal: $10000(1.05)^t = 8000e^{0.06t}$

$\\frac{10000}{8000} = \\frac{e^{0.06t}}{(1.05)^t} = \\left(\\frac{e^{0.06}}{1.05}\\right)^t$

$1.25 = (1.01184)^t \\implies t = \\frac{\\ln 1.25}{\\ln 1.01184} \\approx \\frac{0.2231}{0.01177} \\approx 18.9$ years
      `
    },
    {
      id: 'p7-synthesis-quiz',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A population of $1{,}000$ bacteria triples every $4$ hours. How many are there after $12$ hours?',
            options: [
              '$3{,}000$',
              '$9{,}000$',
              '$27{,}000$',
              '$81{,}000$'
            ],
            correctAnswer: 2,
            explanation: '$12$ hours $= 3$ tripling periods. $1000 \\cdot 3^3 = 1000 \\cdot 27 = 27{,}000$.'
          },
          {
            question: 'The function $g(x) = 500e^{-0.1x} + 20$ has horizontal asymptote and $y$-intercept:',
            options: [
              'HA: $y = 20$, $y$-int: $520$',
              'HA: $y = 500$, $y$-int: $520$',
              'HA: $y = 0$, $y$-int: $500$',
              'HA: $y = 20$, $y$-int: $500$'
            ],
            correctAnswer: 0,
            explanation: 'As $x \\to \\infty$, $e^{-0.1x} \\to 0$, so $g(x) \\to 20$. HA at $y = 20$. $g(0) = 500(1) + 20 = 520$.'
          },
          {
            question: '$\\$5{,}000$ invested at $4\\%$ compounded quarterly. After $2$ years, the balance is:',
            options: [
              '$5000(1.04)^2 \\approx \\$5{,}408$',
              '$5000(1.01)^8 \\approx \\$5{,}414$',
              '$5000(1.04)^8 \\approx \\$6{,}843$',
              '$5000e^{0.08} \\approx \\$5{,}416$'
            ],
            correctAnswer: 1,
            explanation: 'Quarterly: $n = 4$, rate per period $= 0.04/4 = 0.01$, total periods $= 4 \\times 2 = 8$. $A = 5000(1.01)^8 \\approx 5414$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Drill** 🧮

**1)** A substance has half-life $6$ hours. Starting from $480\\text{ g}$, how many grams remain after $18$ hours? (e.g., half-life $4$ hours, start $320\\text{ g}$, after $12$ hours: $320 \\cdot (\\frac{1}{2})^3 = 40\\text{ g}$)

**2)** Solve $3 \\cdot 2^x = 96$. (e.g., $5 \\cdot 3^x = 405$: divide by $5$ to get $3^x = 81$, so $x = 4$)

**3)** An account at $8\\%$ compounded annually doubles when $t = \\frac{\\ln 2}{\\ln 1.08}$. Round to one decimal. (e.g., at $10\\%$: $\\frac{0.693}{0.0953} \\approx 7.3$ years)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '5', '9.0'],
        hint1: '$18/6 = 3$ half-lives. $480 \\cdot (\\frac{1}{2})^3$.',
        hint2: 'Divide: $2^x = 32$. What power of $2$ is $32$?',
        hint3: '$\\frac{\\ln 2}{\\ln 1.08} = \\frac{0.693}{0.0770}$.',
        explanation: '1) $3$ half-lives: $480 \\cdot \\frac{1}{8} = 60\\text{ g}$. 2) $2^x = 32 = 2^5$, so $x = 5$. 3) $0.693 / 0.0770 \\approx 9.0$ years (the Rule of 72 gives $72/8 = 9$ — same answer!).'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Formula Selection** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The population doubles every $10$ years" — best model form is',
            options: ['$P = P_0(1+r)^t$', '$P = P_0 \\cdot 2^{t/10}$', '$P = P_0 e^{kt}$', '$P = P_0 - rt$']
          },
          {
            label: 'To check if data is exponential, compute consecutive',
            options: ['differences', 'ratios', 'products', 'squares']
          },
          {
            label: 'The Rule of 72 estimates doubling time as',
            options: ['$72/r\\%$', '$r/72$', '$72 \\cdot r$', '$\\ln 2 / 72$']
          },
          {
            label: 'The graph of $f(x) = 3 \\cdot 2^x - 4$ crosses the $x$-axis when $2^x =$',
            options: ['$3$', '$4/3$', '$4$', '$7$']
          }
        ],
        correctAnswers: ['$P = P_0 \\cdot 2^{t/10}$', 'ratios', '$72/r\\%$', '$4/3$'],
        hint1: 'Doubling = base $2$, period $10$ years.',
        hint2: 'Exponential data has constant multiplicative change.',
        hint3: 'Rule of 72: divide $72$ by the percent rate.',
        explanation: 'Doubling every $10$: use $2^{t/10}$. Constant ratios = exponential. Rule of 72: $72/r\\%$. Set $3 \\cdot 2^x - 4 = 0$: $2^x = 4/3$.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Exponential Functions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Data: $(0, 5)$, $(2, 20)$, $(4, 80)$. The exponential model is:',
            options: [
              '$f(x) = 5 \\cdot 4^x$',
              '$f(x) = 5 \\cdot 2^x$',
              '$f(x) = 5 \\cdot 2^{x/2}$',
              '$f(x) = 20 \\cdot 2^x$'
            ],
            correctAnswer: 1,
            explanation: 'Ratio test (spacing $2$): $20/5 = 4$ and $80/20 = 4$. So $b^2 = 4 \\implies b = 2$. At $x = 0$: $a = 5$. Model: $f(x) = 5 \\cdot 2^x$. Verify: $f(2) = 5 \\cdot 4 = 20$ ✔, $f(4) = 5 \\cdot 16 = 80$ ✔.'
          },
          {
            question: 'A radioactive sample modeled by $A(t) = 1000e^{-0.05t}$ is stored for $20$ years, then $10\\%$ is removed. The remaining amount is:',
            options: [
              '$1000e^{-1} \\approx 368\\text{ g}$',
              '$0.9 \\cdot 1000e^{-1} \\approx 331\\text{ g}$',
              '$1000e^{-1} - 100 \\approx 268\\text{ g}$',
              '$0.9 \\cdot 1000e^{-0.05 \\cdot 20} \\approx 331\\text{ g}$'
            ],
            correctAnswer: 3,
            explanation: 'After $20$ years: $A(20) = 1000e^{-1} \\approx 367.9\\text{ g}$. Remove $10\\%$: keep $90\\% = 0.9 \\cdot 367.9 \\approx 331\\text{ g}$. Both B and D give the same answer, but D shows the complete calculation.'
          }
        ]
      }
    }
  ]
};
