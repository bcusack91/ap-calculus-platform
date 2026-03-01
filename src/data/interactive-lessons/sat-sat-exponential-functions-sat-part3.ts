export const satExponentialFnPart3Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef3-intro',
      type: 'text' as const,
      content: `
# 💰 Compound Interest

**Part 3 of 7 — $A=P(1+r/n)^{nt}$, Continuous Compounding, Comparing Accounts**

Compound interest is one of the most tested exponential applications on the SAT.

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

| Variable | Meaning |
|----------|---------|
| $A$ | Final amount |
| $P$ | Principal (initial deposit) |
| $r$ | Annual interest rate (decimal) |
| $n$ | Number of times compounded per year |
| $t$ | Time in years |

**Common compounding frequencies:**

| Frequency | $n$ |
|-----------|-----|
| Annually | 1 |
| Semi-annually | 2 |
| Quarterly | 4 |
| Monthly | 12 |
| Daily | 365 |
      `
    },
    {
      id: 'sat-ef3-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Annual compounding:**
\$2,000 is invested at 5 % compounded annually for 3 years.

$$A = 2000\\left(1 + \\frac{0.05}{1}\\right)^{1 \\cdot 3} = 2000(1.05)^3$$

$$(1.05)^3 = 1.157625 \\implies A = \$2{,}315.25$$

**Example 2 — Quarterly compounding:**
\$5,000 at 8 % compounded quarterly for 2 years.

$$A = 5000\\left(1 + \\frac{0.08}{4}\\right)^{4 \\cdot 2} = 5000(1.02)^8$$

$$(1.02)^8 \\approx 1.17166 \\implies A \\approx \$5{,}858.30$$

**Example 3 — Monthly compounding:**
\$10,000 at 6 % compounded monthly for 5 years.

$$A = 10000\\left(1 + \\frac{0.06}{12}\\right)^{12 \\cdot 5} = 10000(1.005)^{60}$$

$$(1.005)^{60} \\approx 1.34885 \\implies A \\approx \$13{,}488.50$$

**SAT Tip:** Don't forget to convert the percentage rate to a decimal before plugging in!
      `
    },
    {
      id: 'sat-ef3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Compound Interest Setup** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '\$3,000 is invested at 4 % interest compounded semi-annually. Which expression gives the amount after 6 years?',
            options: ['$3000(1.04)^6$', '$3000(1.02)^{12}$', '$3000(1.04)^{12}$', '$3000(1.02)^6$'],
            correctAnswer: 1,
            explanation: '$r/n = 0.04/2 = 0.02$ and $nt = 2 \\times 6 = 12$. So $A = 3000(1.02)^{12}$.'
          },
          {
            question: '\$1,000 earns 10 % interest compounded annually. After how many years will the investment first exceed \$1,331?',
            options: ['$2$', '$3$', '$4$', '$5$'],
            correctAnswer: 1,
            explanation: '$1000(1.10)^3 = 1000(1.331) = 1331$. After 3 years the amount equals \$1,331, which is the first time it reaches that threshold.'
          }
        ]
      }
    },
    {
      id: 'sat-ef3-continuous',
      type: 'text' as const,
      content: `
## Continuous Compounding

When interest is compounded **continuously**, we use:

$$A = Pe^{rt}$$

where $e \\approx 2.71828$.

**Example 4:**
\$4,000 invested at 3 % compounded continuously for 10 years.

$$A = 4000 \\cdot e^{0.03 \\times 10} = 4000 \\cdot e^{0.3}$$

$$e^{0.3} \\approx 1.34986 \\implies A \\approx \$5{,}399.44$$

**Comparing continuous vs annual:**
- Annual: $4000(1.03)^{10} \\approx \$5{,}375.67$
- Continuous: $4000e^{0.3} \\approx \$5{,}399.44$

Continuous compounding always yields slightly more, but the difference is small for moderate rates.

**SAT Tip:** Continuous compounding problems are less common on the SAT, but when they appear, always use $A = Pe^{rt}$.
      `
    },
    {
      id: 'sat-ef3-input1',
      type: 'input-boxes' as const,
      content: `
**Compound Interest Calculations** 🧮

Round all answers to the nearest whole dollar (no $ sign).

1) \$6,000 at 5 % compounded annually for 4 years. What is the final amount?
2) What is the total interest earned in problem 1?
3) \$2,000 at 12 % compounded quarterly for 1 year. What is the final amount?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7293', '1293', '2255'],
        hint1: '$A = 6000(1.05)^4 = 6000 \\times 1.21551$.',
        hint2: 'Interest = Final amount $-$ Principal = $A - 6000$.',
        hint3: '$A = 2000(1 + 0.12/4)^{4} = 2000(1.03)^4 \\approx 2000(1.12551)$.',
        explanation: '1) $6000(1.05)^4 \\approx 7{,}293$. 2) $7{,}293 - 6{,}000 = 1{,}293$. 3) $2000(1.03)^4 \\approx 2{,}255$.'
      }
    },
    {
      id: 'sat-ef3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Compound Interest Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $A = P(1 + r/n)^{nt}$, increasing $n$ while keeping everything else constant will …',
            options: ['decrease A', 'increase A', 'not change A', 'double A']
          },
          {
            label: 'The formula for continuous compounding is …',
            options: ['$A = P(1+r)^t$', '$A = Prt$', '$A = Pe^{rt}$', '$A = P(1+r/n)^{nt}$']
          },
          {
            label: 'If an account earns 6 % compounded monthly, the monthly rate is …',
            options: ['$6\\%$', '$0.06\\%$', '$0.5\\%$', '$0.6\\%$']
          }
        ],
        correctAnswers: ['increase A', '$A = Pe^{rt}$', '$0.5\\%$'],
        hint1: 'More frequent compounding → interest earns interest sooner.',
        hint2: 'Continuous compounding uses the natural base $e$.',
        hint3: '$6\\% / 12 = 0.5\\%$ per month.',
        explanation: 'More compounding increases $A$. Continuous compounding uses $A = Pe^{rt}$. Monthly rate = annual rate / 12 = $0.5\\%$.'
      }
    },
    {
      id: 'sat-ef3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Maria deposits \$8,000 in an account that compounds interest quarterly at an annual rate of 4 %. Which expression represents the amount in the account after 5 years?',
            options: ['$8000(1.04)^5$', '$8000(1.01)^{20}$', '$8000(1.04)^{20}$', '$8000(1.01)^5$'],
            correctAnswer: 1,
            explanation: '$r/n = 0.04/4 = 0.01$ and $nt = 4 \\times 5 = 20$. So $A = 8000(1.01)^{20}$.'
          },
          {
            question: 'Two accounts both start with \$1,000 at 6 % interest. Account X compounds annually; Account Y compounds monthly. After 1 year, which account has more money, and by approximately how much?',
            options: ['X has more, by about \$1.50', 'Y has more, by about \$1.68', 'They are equal', 'Y has more, by about \$6.00'],
            correctAnswer: 1,
            explanation: 'X: $1000(1.06)^1 = 1060.00$. Y: $1000(1.005)^{12} \\approx 1061.68$. Difference $\\approx \$1.68$ in favour of Y.'
          }
        ]
      }
    }
  ]
};
