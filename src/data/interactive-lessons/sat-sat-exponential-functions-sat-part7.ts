export const satExponentialFnPart7Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef7-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 7 of 7 — Review & Hard Practice**

### Complete Exponential Toolkit

| Model | Formula | Key Feature |
|-------|---------|-------------|
| Basic growth | $y = ab^t$, $b > 1$ | Constant percent increase |
| Basic decay | $y = ab^t$, $0 < b < 1$ | Constant percent decrease |
| Compound interest | $A = P(1 + r/n)^{nt}$ | Interest on interest |
| Half-life | $A = A_0(1/2)^{t/h}$ | Amount halves every $h$ |
| Doubling | $A = A_0 \\cdot 2^{t/d}$ | Amount doubles every $d$ |

### Interpreting in Context

When the SAT gives you $f(t) = 300(0.85)^{t/4}$ and asks what 0.85 means:

"The quantity decreases by 15% every 4 units of time."

The base tells you the rate; the denominator in the exponent tells you the period.

### Hard SAT Pattern: Finding the Equation from Context

"A sample decreases from 200 to 50 in 6 hours."

$50 = 200 \\cdot b^6$ → $b^6 = 1/4$ → $b = (1/4)^{1/6} = 4^{-1/6} = 2^{-1/3}$

Or: $b^6 = 0.25$ → $b = 0.25^{1/6} \\approx 0.794$

So every hour, about 20.6% decays.`
    },
    {
      id: 'ef7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population grows from 1,000 to 4,000 in 10 years. What is the doubling time?',
            options: ['$5$ years', '$2.5$ years', '$10$ years', '$4$ years'],
            correctAnswer: 0,
            explanation: 'Growth: $\\times 4$ in 10 years $= \\times 2$ twice. So it doubles every 5 years. Check: $1000 \\to 2000 \\to 4000$ in 10 years ✓'
          },
          {
            question: 'The function $g(t) = 50(0.90)^t$ models a quantity. After approximately how many time periods will the quantity drop below 25?',
            options: ['About $7$', 'About $5$', 'About $10$', 'About $3$'],
            correctAnswer: 0,
            explanation: 'Solve $0.90^t = 0.5$. Testing: $0.9^6 = 0.531$ and $0.9^7 = 0.478$. So between 6 and 7, approximately 7 periods.'
          },
          {
            question: 'Which model shows the fastest growth for large $t$?',
            options: ['$f(t) = 10(1.5)^t$', '$g(t) = 1000(1.2)^t$', '$h(t) = 100(1.4)^t$', '$k(t) = 10000 + 50t$'],
            correctAnswer: 0,
            explanation: 'For large $t$, the largest base dominates. $f$ has base $1.5$ (highest), so it grows fastest eventually despite the small coefficient.'
          }
        ]
      }
    },
    {
      id: 'ef7-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Finding $b$ from Two Points

**An exponential function passes through $(2, 18)$ and $(5, 486)$. Find the equation.**

| Step | Work |
|------|------|
| Use ratio | $\\frac{f(5)}{f(2)} = \\frac{ab^5}{ab^2} = b^3 = \\frac{486}{18} = 27$ |
| Solve for $b$ | $b = 27^{1/3} = 3$ |
| Solve for $a$ | $a \\cdot 3^2 = 18 \\Rightarrow 9a = 18 \\Rightarrow a = 2$ |
| Answer | $f(t) = 2(3)^t$ |

### Worked Example 2 — Percent Change from a Model

**$f(t) = 800(0.92)^t$ — What does this model?**

| Reading | Meaning |
|---------|---------|
| $a = 800$ | Starts at 800 |
| $b = 0.92$ | Retains 92% each period → loses 8% |
| At $t = 5$ | $800(0.92)^5 \\approx 800(0.6591) \\approx 527$ |
| After 5 periods | About 34% has been lost |

### SAT Exponential Strategy Summary

| Question Type | Strategy |
|--------------|----------|
| "What is the initial value?" | Find $a$ (coefficient) |
| "What is the growth/decay rate?" | Rate $= |b - 1|$ in the appropriate period |
| "What does the base represent?" | Check exponent structure for period |
| "Which model is exponential?" | Look for constant ratios or percent change |
| "Rewrite in different form" | Use exponent rules: $b^{ct} = (b^c)^t$ |
| "When does it reach [value]?" | Solve $ab^t = \\text{value}$, test values |`
    },
    {
      id: 'ef7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT Challenge Round** 🎯',
      exercise: {
        questions: [
          {
            question: 'An exponential function $f(t) = ab^t$ has $f(0) = 12$ and $f(3) = 96$. What is $b$?',
            options: ['$2$', '$8$', '$4$', '$3$'],
            correctAnswer: 0,
            explanation: '$f(0) = a = 12$. $f(3) = 12b^3 = 96$. $b^3 = 8$. $b = 2$.'
          },
          {
            question: '$A(t) = 5000(0.85)^{t/4}$. Approximately what percent decays per year?',
            options: ['About $3.9\\%$', 'About $15\\%$', 'About $3.75\\%$', 'About $60\\%$'],
            correctAnswer: 0,
            explanation: 'Rewrite: $(0.85)^{t/4} = (0.85^{1/4})^t \\approx (0.9606)^t$. Annual decay ≈ $1 - 0.9606 = 3.94\\%$.'
          },
          {
            question: 'A drug loses 30% effectiveness each hour. When is it first below 10% of original effectiveness?',
            options: ['After about 7 hours', 'After about 3 hours', 'After about 5 hours', 'After about 10 hours'],
            correctAnswer: 0,
            explanation: '$(0.70)^t < 0.10$. Test: $(0.70)^6 ≈ 0.118$ (above), $(0.70)^7 ≈ 0.082$ (below). About 7 hours.'
          }
        ]
      }
    },
    {
      id: 'ef7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Exponential Mastery Check** 🔍\n\nAnswer each quick question.',
      exercise: {
        dropdowns: [
          { label: 'In $f(t) = 250(1.08)^t$, the initial value is:', options: ['250', '1.08', '8%', '270'] },
          { label: 'In $g(t) = 1000(0.5)^{t/6}$, the half-life is:', options: ['6', '0.5', '1000', '3'] },
          { label: '$h(t) = 40(3)^t$. After 4 time units, $h =$', options: ['3,240', '120', '480', '160'] },
          { label: 'The Rule of 70 says: growth rate 10% → doubles in about:', options: ['7 periods', '10 periods', '70 periods', '1 period'] }
        ],
        correctAnswers: ['250', '6', '3,240', '7 periods'],
        hint1: 'The coefficient in front of the exponential is the initial value ($t = 0$).',
        hint2: 'Half-life is the denominator when the base is $0.5$: $(0.5)^{t/h}$ → $h = 6$.',
        hint3: '$40 \\times 3^4 = 40 \\times 81 = 3{,}240$. Rule of 70: $70/10 = 7$.',
        explanation: 'Initial = coefficient = 250. Half-life = 6 (from exponent $t/6$). $40(3)^4 = 40(81) = 3240$. Rule of 70: $70/10 = 7$ periods.'
      }
    },
    {
      id: 'ef7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

| Part | Core Skill |
|------|------------|
| 1 | Growth/decay models: $a \\cdot b^t$, identifying rate from base |
| 2 | Compound interest: $P(1 + r/n)^{nt}$, reading period rates |
| 3 | Graphs: asymptotes, y-intercepts, finding equation from graph |
| 4 | Half-life & doubling: counting periods, Rule of 70 |
| 5 | Linear vs. exponential: differences vs. ratios |
| 6 | Rewriting: converting between time periods |
| 7 | Review: finding $b$ from two points, SAT strategy |

### Exponential Quick-Reference

| Formula | Used For |
|---------|----------|
| $y = ab^t$ | General growth/decay |
| $A = P(1 + r/n)^{nt}$ | Compound interest |
| $A = A_0(1/2)^{t/h}$ | Half-life |
| $A = A_0 \\cdot 2^{t/d}$ | Doubling |
| Rule of 70: $d \\approx 70/r\\%$ | Estimate doubling time |
| $b = (y_2/y_1)^{1/(x_2 - x_1)}$ | Find base from two points |`
    }
  ]
};
