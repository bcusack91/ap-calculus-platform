export const satExponentialFnPart2Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef2-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 2 of 7 — Compound Interest**

### The Compound Interest Formula

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

| Variable | Meaning |
|----------|---------|
| $A$ | Final amount |
| $P$ | Principal (starting amount) |
| $r$ | Annual interest rate (as decimal) |
| $n$ | Number of times compounded per year |
| $t$ | Number of years |

### Common Compounding Periods

| $n$ | Compounding |
|-----|------------|
| 1 | Annually |
| 4 | Quarterly |
| 12 | Monthly |
| 365 | Daily |

### Example

\\$5,000 invested at 6% compounded monthly for 3 years:

$$A = 5000\\left(1 + \\frac{0.06}{12}\\right)^{12 \\times 3} = 5000(1.005)^{36} \\approx \\$5{,}983.40$$

### Continuous Compounding (Rare on SAT)

$$A = Pe^{rt}$$`
    },
    {
      id: 'ef2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compound Interest** 🎯',
      exercise: {
        questions: [
          {
            question: '\\$2,000 is invested at 4% compounded annually. Which expression gives the value after 5 years?',
            options: ['$2000(1.04)^5$', '$2000(1.4)^5$', '$2000 + 2000(0.04)(5)$', '$2000 \\cdot 5 \\cdot 1.04$'],
            correctAnswer: 0,
            explanation: 'Compounded annually: $n = 1$. $A = 2000(1 + 0.04)^5 = 2000(1.04)^5$.'
          },
          {
            question: 'In the formula $A = 1000(1.02)^{4t}$, what is the annual interest rate?',
            options: ['$8\\%$ (approximately)', '$2\\%$', '$4\\%$', '$20\\%$'],
            correctAnswer: 0,
            explanation: 'The base $1.02$ with exponent $4t$ means quarterly compounding ($n = 4$) with rate $r/4 = 0.02$, so $r = 0.08 = 8\\%$.'
          },
          {
            question: 'Simple interest: $I = Prt$. Compound interest: $A = P(1+r)^t$. After 10 years at 10%, \\$1000 invested: compound interest exceeds simple interest by approximately:',
            options: ['\\$594', '\\$100', '\\$1000', '\\$259'],
            correctAnswer: 0,
            explanation: 'Simple: $1000 + 1000(0.10)(10) = \\$2{,}000$. Compound: $1000(1.10)^{10} ≈ \\$2{,}594$. Difference ≈ \\$594.'
          }
        ]
      }
    },
    {
      id: 'ef2-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Identifying Components

**$A = 3000\\left(1 + \\frac{0.08}{4}\\right)^{4 \\times 5}$**

| Component | Value | Meaning |
|-----------|-------|---------|
| $P$ | $3{,}000$ | Initial investment |
| $r$ | $0.08$ | 8% annual rate |
| $n$ | $4$ | Compounded quarterly |
| $t$ | $5$ | 5 years |
| $r/n$ | $0.02$ | 2% per quarter |
| $nt$ | $20$ | 20 total compounding periods |

### Worked Example 2 — Comparing Compounding Frequencies

**\\$10,000 at 6% for 1 year:**

| Compounding | Calculation | Result |
|-------------|-------------|--------|
| Annually ($n=1$) | $10000(1.06)^1$ | $\\$10{,}600.00$ |
| Monthly ($n=12$) | $10000(1.005)^{12}$ | $\\$10{,}616.78$ |
| Daily ($n=365$) | $10000(1.000164)^{365}$ | $\\$10{,}618.31$ |

More frequent compounding → slightly more interest, but diminishing returns.

### Simple vs. Compound Interest

| | Simple | Compound |
|---|--------|----------|
| Formula | $A = P(1 + rt)$ | $A = P(1 + r/n)^{nt}$ |
| Growth | Linear | Exponential |
| Interest earned on | Principal only | Principal + prior interest |`
    },
    {
      id: 'ef2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Interest Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'In $A = 5000(1.015)^{4t}$, the annual interest rate is:',
            options: ['$6\\%$', '$1.5\\%$', '$4\\%$', '$15\\%$'],
            correctAnswer: 0,
            explanation: 'Exponent $4t$ → quarterly compounding ($n = 4$). Rate per quarter $= 0.015 = 1.5\\%$. Annual rate $= 4 \\times 1.5\\% = 6\\%$.'
          },
          {
            question: '\\$1,000 earns simple interest at 5%. \\$1,000 earns compound interest at 5% annually. After 20 years, the difference is approximately:',
            options: ['\\$653', '\\$500', '\\$100', '\\$1,000'],
            correctAnswer: 0,
            explanation: 'Simple: $1000(1 + 0.05 \\times 20) = \\$2{,}000$. Compound: $1000(1.05)^{20} \\approx \\$2{,}653$. Difference ≈ \\$653.'
          },
          {
            question: 'An account has $A = P(1 + r/n)^{nt}$. If you double $P$, the future value $A$:',
            options: ['Doubles', 'More than doubles', 'Less than doubles', 'Stays the same'],
            correctAnswer: 0,
            explanation: '$A = P \\cdot (\\text{some factor})$. Doubling $P$ doubles $A$ since the exponential factor doesn\'t change.'
          }
        ]
      }
    },
    {
      id: 'ef2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Decode the Formula** 🔍\n\nIdentify the meaning of each part.',
      exercise: {
        dropdowns: [
          { label: 'In $A = 2000(1.03)^{12t}$: what is the compounding period?', options: ['Monthly', 'Annually', 'Quarterly', 'Weekly'] },
          { label: 'Same formula: what is the annual interest rate?', options: ['36%', '3%', '12%', '1.03%'] },
          { label: 'In $A = P(1.06)^t$: how often is interest compounded?', options: ['Annually', 'Monthly', 'Quarterly', 'Daily'] },
          { label: 'In $A = 500(1.005)^{365t}$: what is the daily rate?', options: ['0.5%', '5%', '0.05%', '50%'] }
        ],
        correctAnswers: ['Monthly', '36%', 'Annually', '0.5%'],
        hint1: 'Exponent $12t$ → 12 times per year → monthly.',
        hint2: 'Monthly rate is 3%, annual = $12 \\times 3\\% = 36\\%$ (nominal rate).',
        hint3: 'Exponent $t$ (not $nt$) → $n = 1$ → annually. Rate per day = base − 1 = 0.005 = 0.5%.',
        explanation: '$12t$ → monthly. Annual rate = $12 \\times 3\\% = 36\\%$. Exponent $t$ alone → annual. Base $1.005$ → 0.5% per period.'
      }
    },
    {
      id: 'ef2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Formula / Rule |
|---------|---------------|
| Compound interest | $A = P(1 + r/n)^{nt}$ |
| Simple interest | $A = P(1 + rt)$ |
| Find annual rate | $r = n \\times (\\text{period rate})$ |
| Period rate | $r/n$ = base minus 1 |
| More compounding | Slightly more interest (diminishing returns) |

| If you see... | It means... |
|--------------|-------------|
| $(1.02)^{12t}$ | 2% per month, compounded monthly |
| $(1.06)^t$ | 6% per year, compounded annually |
| $(1.015)^{4t}$ | 1.5% per quarter, compounded quarterly |

- To find the annual rate: multiply the period rate by $n$`
    }
  ]
};
