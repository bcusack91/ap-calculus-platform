export const satExponentsPart4Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er4-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 4 of 7 — Solving Equations with Exponents**

### Strategy 1: Make the Bases Match

If $2^{3x} = 8^{x+1}$:
- Rewrite $8 = 2^3$: $2^{3x} = (2^3)^{x+1} = 2^{3x+3}$
- Bases match → $3x = 3x + 3$? That gives $0 = 3$, so **no solution**.

### Strategy 2: Use Logarithmic Thinking

If $3^x = 15$, the SAT won't expect you to compute $\\log_3 15$, but it might ask:
- "Between which two integers is $x$?" Since $3^2 = 9$ and $3^3 = 27$, $x$ is between 2 and 3.

### Strategy 3: Exponential Equations from Context

"A population doubles every 5 years. Starting at 1000, when will it reach 8000?"

$1000 \\cdot 2^{t/5} = 8000$ → $2^{t/5} = 8 = 2^3$ → $t/5 = 3$ → $t = 15$ years.

---

### Worked Example 1

**Solve $25^{x-1} = 125$.**

| Step | Work |
|------|------|
| Rewrite as powers of 5 | $5^{2(x-1)} = 5^3$ |
| Set exponents equal | $2(x-1) = 3$ |
| Solve | $2x - 2 = 3$ → $x = 5/2$ |

### Worked Example 2

**If $2^a = 5$, express $2^{3a}$ in terms of a number.**

| Step | Work |
|------|------|
| Use power rule | $2^{3a} = (2^a)^3$ |
| Substitute | $= 5^3 = 125$ |`
    },
    {
      id: 'er4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $4^x = 32$, what is $x$?',
            options: ['$5/2$', '$8$', '$3$', '$4$'],
            correctAnswer: 0,
            explanation: '$4^x = 32$ → $(2^2)^x = 2^5$ → $2^{2x} = 2^5$ → $2x = 5$ → $x = 5/2$.'
          },
          {
            question: 'A population of bacteria triples every 4 hours. Starting with 500 bacteria, the population after $t$ hours is $P(t) = 500 \\cdot 3^{t/4}$. After 12 hours, the population is:',
            options: ['$13{,}500$', '$4{,}500$', '$1{,}500$', '$40{,}500$'],
            correctAnswer: 0,
            explanation: '$P(12) = 500 \\cdot 3^{12/4} = 500 \\cdot 3^3 = 500 \\cdot 27 = 13{,}500$.'
          },
          {
            question: 'If $9^{a} = 3^{a+4}$, what is $a$?',
            options: ['$4$', '$2$', '$8$', '$-4$'],
            correctAnswer: 0,
            explanation: '$9^a = (3^2)^a = 3^{2a}$. So $3^{2a} = 3^{a+4}$ → $2a = a + 4$ → $a = 4$.'
          }
        ]
      }
    },
    {
      id: 'er4-text2',
      type: 'text' as const,
      content: `### Exponential Growth and Decay

| Model | Formula | Example |
|-------|---------|---------|
| Growth | $A = A_0 \\cdot r^{t/k}$ | Population doubling ($r = 2$) |
| Decay | $A = A_0 \\cdot r^{t/k}$ | Radioactive half-life ($r = 1/2$) |
| Percent growth | $A = A_0(1 + p)^t$ | 5% annual growth ($p = 0.05$) |
| Percent decay | $A = A_0(1 - p)^t$ | 3% depreciation ($p = 0.03$) |

### Worked Example 3

**A car worth \\$20,000 depreciates 15% per year. When is it worth \\$10,000?**

| Step | Work |
|------|------|
| Model | $20000(0.85)^t = 10000$ |
| Simplify | $(0.85)^t = 0.5$ |
| Estimate | $0.85^4 \\approx 0.52$, $0.85^5 \\approx 0.44$ |
| Answer | Between 4 and 5 years |

### Worked Example 4

**$2^x \\cdot 4^{x+1} = 8^3$. Find $x$.**

| Step | Work |
|------|------|
| Convert to base 2 | $2^x \\cdot 2^{2(x+1)} = 2^9$ |
| Simplify left side | $2^{x + 2x + 2} = 2^9$ |
| Set exponents equal | $3x + 2 = 9$ |
| Solve | $x = 7/3$ |`
    },
    {
      id: 'er4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Growth & Decay** 🎯',
      exercise: {
        questions: [
          {
            question: 'A substance has a half-life of 10 years. Starting with 400 grams, how much remains after 30 years?',
            options: ['$50$ grams', '$100$ grams', '$25$ grams', '$200$ grams'],
            correctAnswer: 0,
            explanation: '30 years = 3 half-lives. $400 \\to 200 \\to 100 \\to 50$ grams.'
          },
          {
            question: 'If $2^x = 10$, what is $2^{x+3}$?',
            options: ['$80$', '$30$', '$13$', '$1000$'],
            correctAnswer: 0,
            explanation: '$2^{x+3} = 2^x \\cdot 2^3 = 10 \\cdot 8 = 80$.'
          },
          {
            question: 'A town\'s population grows 6% per year from 5000. The model is:',
            options: ['$P = 5000(1.06)^t$', '$P = 5000(0.06)^t$', '$P = 5000 + 300t$', '$P = 5000(6)^t$'],
            correctAnswer: 0,
            explanation: '6% growth means multiply by $1.06$ each year. $P = 5000(1 + 0.06)^t = 5000(1.06)^t$.'
          }
        ]
      }
    },
    {
      id: 'er4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the Base** 🔍\n\nRewrite each number as a power of 2 or 3.',
      exercise: {
        dropdowns: [
          { label: '$64$ as a power of 2', options: ['2^6', '2^5', '2^8', '2^4'] },
          { label: '$\\frac{1}{27}$ as a power of 3', options: ['3^(-3)', '3^(-2)', '3^3', '(-3)^3'] },
          { label: '$\\sqrt{8}$ as a power of 2', options: ['2^(3/2)', '2^(1/2)', '2^3', '2^(2/3)'] },
          { label: '$16^{1/2}$ simplified', options: ['4', '8', '2', '256'] }
        ],
        correctAnswers: ['2^6', '3^(-3)', '2^(3/2)', '4'],
        hint1: '$64 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2$.',
        hint2: '$\\frac{1}{27} = \\frac{1}{3^3} = 3^{-3}$.',
        hint3: '$\\sqrt{8} = 8^{1/2} = (2^3)^{1/2} = 2^{3/2}$.',
        explanation: '$64 = 2^6$. $1/27 = 3^{-3}$. $\\sqrt{8} = (2^3)^{1/2} = 2^{3/2}$. $16^{1/2} = \\sqrt{16} = 4$.'
      }
    },
    {
      id: 'er4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Strategy | When to Use |
|----------|-------------|
| Match bases | Both sides can be written as same base |
| "Between which integers" | Can't match bases; evaluate at integer exponents |
| $2^{x+k} = 2^x \\cdot 2^k$ | "If $2^x = n$, find $2^{x+k}$" |
| Growth: $(1 + r)^t$ | Percent increase per period |
| Decay: $(1 - r)^t$ | Percent decrease per period |
| Half-life: $(1/2)^{t/k}$ | Quantity halves every $k$ units |`
    }
  ]
};
