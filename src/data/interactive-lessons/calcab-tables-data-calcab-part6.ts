export const calcabTablesDataPart6Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td6-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 6 of 7 \u2014 AP-Style Free-Response Workshop**

### AP FRQ Table Problem Patterns

| Part | Typical Prompt | Method |
|:---:|:---|:---|
| (a) | Approximate $f'(c)$ | Symmetric difference quotient |
| (b) | Approximate $\\int_a^b f(x)\\,dx$ | Trapezoidal rule or Riemann sum |
| (c) | Use MVT to show $f'(c) = k$ | $\\frac{f(b)-f(a)}{b-a}$ and cite MVT |
| (d) | Is the approximation over or under? | Concavity determines this |

---

### Complete Worked FRQ

> The temperature $T(t)$ of a cooling object is recorded at several times. $T$ is continuous and differentiable.

| $t$ (min) | 0 | 3 | 7 | 12 | 20 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $T(t)$ (\u00b0F) | 200 | 170 | 140 | 120 | 100 |

**(a) Estimate $T'(7)$ with units. Explain the meaning.**

$$T'(7) \\approx \\frac{T(12) - T(3)}{12 - 3} = \\frac{120 - 170}{9} = -\\frac{50}{9} \\approx -5.56 \\text{ \u00b0F/min}$$

At $t = 7$ minutes, the temperature is decreasing at approximately $5.56$ \u00b0F per minute.

**(b) Use trapezoidal rule to approximate $\\int_0^{20} T(t)\\,dt$. Interpret.**

$$\\frac{3}{2}(200+170) + \\frac{4}{2}(170+140) + \\frac{5}{2}(140+120) + \\frac{8}{2}(120+100)$$

$$= 555 + 620 + 650 + 880 = 2705$$

The average temperature is $\\frac{1}{20}\\int_0^{20} T\\,dt \\approx \\frac{2705}{20} = 135.25$ \u00b0F.

**(c) Must there be a time $c$ where $T'(c) = -5$?**

$\\frac{T(20)-T(0)}{20-0} = \\frac{100-200}{20} = -5$. By MVT, $\\exists\\, c \\in (0,20)$ with $T'(c) = -5$. \u2713

**(d) Is the trapezoidal estimate an over or underestimate?**

First differences: $-30, -30, -20, -20$. The differences are nondecreasing (getting less negative), so $T'' \\ge 0$ (concave up). Trapezoid overestimates for concave up $\\Rightarrow$ **overestimate**.`
    },
    {
      id: 'td6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-style questions** \ud83c\udfaf\n\n$f$ is twice-differentiable.\n\n| $x$ | 0 | 2 | 6 | 10 |\n|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 1 | 5 | 9 | 21 |',
      exercise: {
        questions: [
          {
            question: 'Estimate $f\'(6)$.',
            options: ['$2$', '$\\frac{9}{6}$', '$3$', '$\\frac{16}{8}$'],
            correctAnswer: 0,
            explanation: '$f\'(6) \\approx \\frac{f(10)-f(2)}{10-2} = \\frac{21-5}{8} = 2$.'
          },
          {
            question: 'Use MVT on $[0,10]$. $f\'(c) =$',
            options: ['$2$', '$\\frac{21}{10}$', '$\\frac{20}{10}$', '$1$'],
            correctAnswer: 0,
            explanation: '$f\'(c) = \\frac{21-1}{10-0} = \\frac{20}{10} = 2$.'
          },
          {
            question: 'First differences: $4, 4, 12$. What does this suggest about concavity?',
            options: ['Concave up \u2014 differences are increasing', 'Concave down \u2014 differences are decreasing', 'Linear \u2014 differences are constant', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Differences $4, 4, 12$ increase (eventually). This suggests $f\'\' > 0$ (concave up), at least on the later interval.'
          }
        ]
      }
    },
    {
      id: 'td6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Work through an FRQ.** \ud83d\udd0d\n\nWater flows into a tank at rate $R(t)$ liters/min.\n\n| $t$ (min) | 0 | 4 | 9 | 15 |\n|:---:|:---:|:---:|:---:|:---:|\n| $R(t)$ (L/min) | 8 | 6 | 10 | 4 |',
      exercise: {
        dropdowns: [
          {
            label: 'Trapezoidal estimate of $\\int_0^{15} R(t)\\,dt$:',
            options: ['$28 + 40 + 42 = 110$ L', '$120$ L', '$100$ L', '$95$ L'],
            correctAnswers: ['$28 + 40 + 42 = 110$ L'],
            hints: ['$\\frac{4}{2}(8+6) + \\frac{5}{2}(6+10) + \\frac{6}{2}(10+4)$.'],
            explanation: '$2(14) + 2.5(16) + 3(14) = 28 + 40 + 42 = 110$ liters.'
          },
          {
            label: 'This integral represents:',
            options: ['Total water added in 15 min', 'Average flow rate', 'Water level at $t=15$', 'Flow rate at $t=15$'],
            correctAnswers: ['Total water added in 15 min'],
            hints: ['$\\int R(t)\\,dt$ = total quantity.'],
            explanation: '$\\int_0^{15} R(t)\\,dt$ = total liters of water added over 15 minutes.'
          },
          {
            label: 'By MVT, $\\exists\\, c$ where $R\'(c) = \\frac{R(15)-R(0)}{15}$:',
            options: ['$-4/15$', '$4/15$', '$-8/15$', '$0$'],
            correctAnswers: ['$-4/15$'],
            hints: ['$\\frac{4-8}{15} = \\frac{-4}{15}$.'],
            explanation: '$R\'(c) = \\frac{4-8}{15} = -\\frac{4}{15}$ L/min\u00b2.'
          }
        ]
      }
    },
    {
      id: 'td6-input',
      type: 'input-box' as const,
      content: '**Trapezoidal approximation.** \u270d\ufe0f\n\n| $t$ (s) | 0 | 3 | 8 | 12 |\n|:---:|:---:|:---:|:---:|:---:|\n| $v(t)$ (m/s) | 5 | 9 | 7 | 3 |',
      exercise: {
        question: 'Use the trapezoidal rule to estimate $\\int_0^{12} v(t)\\,dt$.\n\n(Enter an integer.)',
        correctAnswer: '81',
        acceptableAnswers: ['81'],
        hints: [
          'Subintervals: $[0,3],[3,8],[8,12]$ with widths $3,5,4$.',
          '$\\frac{3}{2}(5+9) + \\frac{5}{2}(9+7) + \\frac{4}{2}(7+3)$.',
          '$= 21 + 40 + 20 = 81$.'
        ],
        explanation: '$T = \\frac{3}{2}(14) + \\frac{5}{2}(16) + \\frac{4}{2}(10) = 21 + 40 + 20 = 81$.'
      }
    },
    {
      id: 'td6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs combine derivative estimates, integrals, MVT, and concavity
- Always include units and contextual interpretation
- Cite MVT/IVT by name and verify hypotheses
- Concavity determines over/under for trapezoidal estimates`
    }
  ]
};
