export const satExponentialFnPart6Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef6-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 6 of 7 — Rewriting Exponential Expressions**

### Changing the Base

The SAT often asks you to rewrite exponentials in equivalent forms.

**Example:** Express the **annual** growth rate from a **monthly** model:

$P(t) = 100(1.02)^{12t}$

Rewrite: $P(t) = 100 \\left[(1.02)^{12}\\right]^t = 100(1.2682)^t$

So the monthly rate is 2% but the annual rate is about 26.82%.

### Converting Between Growth Periods

$f(t) = 500(1.06)^t$ (annual growth of 6%)

**Quarterly equivalent**: $f(t) = 500(1.06)^{t} = 500((1.06)^{1/4})^{4t} \\approx 500(1.01467)^{4t}$

### Key Trick for SAT

If you see $(1.03)^{4t}$:
- This means 3% growth per **quarter** (since the exponent is $4t$)
- Annual rate: $(1.03)^4 - 1 \\approx 12.55\\%$

If you see $(0.95)^{t/2}$:
- This means 5% decay every **2 years** (since the exponent is $t/2$)
- Annual rate: $(0.95)^{1/2} - 1 \\approx -2.53\\%$`
    },
    {
      id: 'ef6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rewriting Exponentials** 🎯',
      exercise: {
        questions: [
          {
            question: 'In $A(t) = 2000(1.005)^{12t}$, the 1.005 represents:',
            options: ['A monthly growth rate of 0.5%', 'An annual growth rate of 0.5%', 'A monthly growth rate of 5%', 'An annual growth rate of 6%'],
            correctAnswer: 0,
            explanation: 'The exponent $12t$ means compounding 12 times per year (monthly). The base $1.005$ means each month grows by 0.5%.'
          },
          {
            question: 'Rewrite $3(2)^{t/5}$ so the exponent is just $t$:',
            options: ['$3(2^{1/5})^t \\approx 3(1.149)^t$', '$3(2^5)^t = 3(32)^t$', '$3 \\cdot \\frac{2^t}{5}$', '$3(10)^t$'],
            correctAnswer: 0,
            explanation: '$3(2)^{t/5} = 3(2^{1/5})^t$. Since $2^{1/5} \\approx 1.149$, this represents about 14.9% growth per unit time.'
          },
          {
            question: 'A company\'s revenue grows 2% per month. Approximately what is the annual growth rate?',
            options: ['About $26.8\\%$', 'About $24\\%$', 'About $12\\%$', 'About $20\\%$'],
            correctAnswer: 0,
            explanation: 'Annual factor $= (1.02)^{12} \\approx 1.268$. Annual rate $\\approx 26.8\\%$. Note this is more than $12 \\times 2\\% = 24\\%$ due to compounding.'
          }
        ]
      }
    },
    {
      id: 'ef6-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — What Does the Base Represent?

**$P(t) = 2000(1.03)^{4t}$. What does $1.03$ represent?**

| Analysis | Meaning |
|----------|---------|
| Exponent $4t$ | 4 compounding periods per year → quarterly |
| Base $1.03$ | Growth factor per quarter |
| Interpretation | "The quantity grows by 3% each quarter" |

**To find annual rate:** Rewrite as $2000[(1.03)^4]^t = 2000(1.1255)^t$ → annual rate ≈ $12.55\\%$.

### Worked Example 2 — Rewriting for a Different Period

**$A(t) = 500(2)^{t/10}$ models doubling every 10 years. What is the yearly growth factor?**

| Step | Work |
|------|------|
| Rewrite | $500(2^{1/10})^t$ |
| Calculate $2^{1/10}$ | $\\approx 1.0718$ |
| Interpretation | About $7.18\\%$ growth per year |

### Common SAT Rewrite Patterns

| Given Form | Rewritten as $a \\cdot c^t$ | Period Rate |
|-----------|---------------------------|-------------|
| $a(1.02)^{12t}$ | $a(1.2682)^t$ | Monthly rate 2% |
| $a(0.95)^{t/3}$ | $a(0.9830)^t$ | Decays ~5% every 3 periods |
| $a(3)^{t/5}$ | $a(1.2457)^t$ | Triples every 5 periods |`
    },
    {
      id: 'ef6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Equivalence & Interpretation** 🎯',
      exercise: {
        questions: [
          {
            question: '$f(t) = 100(0.90)^{t/3}$. What does this model?',
            options: ['Decays 10% every 3 time periods', 'Decays 90% every 3 time periods', 'Decays 10% every time period', 'Grows 90% every 3 time periods'],
            correctAnswer: 0,
            explanation: 'Base $0.90$ → loses 10%. Exponent $t/3$ → this happens every 3 time units.'
          },
          {
            question: 'Which is equivalent to $200(4)^{t/2}$?',
            options: ['$200(2)^t$', '$200(16)^t$', '$100(4)^t$', '$400(2)^t$'],
            correctAnswer: 0,
            explanation: '$200(4)^{t/2} = 200(4^{1/2})^t = 200(2)^t$.'
          },
          {
            question: 'Monthly growth rate is 1%. What is the approximate annual growth rate?',
            options: ['About $12.7\\%$', 'About $12\\%$', 'About $1\\%$', 'About $10\\%$'],
            correctAnswer: 0,
            explanation: '$(1.01)^{12} \\approx 1.127$. Annual rate $\\approx 12.7\\%$. It\'s higher than $12 \\times 1\\% = 12\\%$ due to compounding.'
          }
        ]
      }
    },
    {
      id: 'ef6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interpret the Exponent** 🔍\n\nWhat does the exponent structure tell you about the time period?',
      exercise: {
        dropdowns: [
          { label: '$f(t) = a(b)^{12t}$', options: ['Rate applies monthly (12 per year)', 'Rate applies every 12 years', 'Rate applies daily', 'Rate applies annually'] },
          { label: '$f(t) = a(b)^{t/5}$', options: ['Rate applies every 5 time units', 'Rate applies 5 times per unit', 'Rate applies every 1/5 unit', 'Rate is divided by 5'] },
          { label: '$f(t) = a(b)^{t}$', options: ['Rate applies per time unit', 'Rate applies monthly', 'No specific period', 'Rate applies daily'] },
          { label: '$f(t) = a(b)^{365t}$', options: ['Rate applies daily (365 per year)', 'Rate applies yearly', 'Rate applies every 365 years', 'Rate applies weekly'] }
        ],
        correctAnswers: ['Rate applies monthly (12 per year)', 'Rate applies every 5 time units', 'Rate applies per time unit', 'Rate applies daily (365 per year)'],
        hint1: 'The number multiplied by $t$ tells you how many times per unit the rate applies.',
        hint2: 'When $t$ is divided, the denominator is the period length.',
        hint3: '$b^{365t}$ → rate of $b$ applies 365 times per year → daily.',
        explanation: '$12t$: 12 per year → monthly. $t/5$: once per 5 units. $t$: once per unit. $365t$: 365 per year → daily.'
      }
    },
    {
      id: 'ef6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Rewrite Goal | Method |
|-------------|--------|
| Find rate per unit time | $a \\cdot b^{ct} = a(b^c)^t$; rate $= b^c - 1$ |
| Find rate per longer period | $a \\cdot b^{t/c} = a(b^{1/c})^t$; rate $= b^{1/c} - 1$ |
| Convert monthly → annual | $(1 + r_{\\text{monthly}})^{12} - 1$ |
| Convert annual → monthly | $(1 + r_{\\text{annual}})^{1/12} - 1$ |

| SAT Interpretation Pattern |
|---|
| $(1.03)^{4t}$: "3% growth per quarter" |
| $(0.95)^{t/2}$: "5% decay every 2 periods" |
| $(2)^{t/10}$: "doubles every 10 periods" |

- Monthly rate × 12 ≠ annual rate (compounding makes it higher)
- Always rewrite so the exponent is just $t$ to find the per-unit rate`
    }
  ]
};
