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
      id: 'ef6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Rewrite $a \\cdot b^{ct}$ as $a \\cdot (b^c)^t$ to find the rate per unit time
- Rewrite $a \\cdot b^{t/c}$ as $a \\cdot (b^{1/c})^t$ similarly
- Monthly rate ≠ annual rate ÷ 12 (compounding makes it higher)
- Exponent $nt$: the base gives the rate per $1/n$ of a time unit`
    }
  ]
};
