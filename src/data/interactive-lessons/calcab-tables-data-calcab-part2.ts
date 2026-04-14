export const calcabTablesDataPart2Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td2-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 2 of 7 \u2014 Riemann Sums from Tables**

### Approximating Integrals from Data

When given a table with **unequal subintervals**, each subinterval has its own width:

$$\\boxed{\\int_a^b f(x)\\,dx \\approx \\sum_{i=1}^{n} f(x_i^*) \\cdot \\Delta x_i}$$

### Riemann Sum Types

| Type | Value Used | Description |
|:---|:---:|:---|
| Left | $f(x_{i-1})$ | Left endpoint of each subinterval |
| Right | $f(x_i)$ | Right endpoint of each subinterval |
| Midpoint | $f(\\bar{x}_i)$ | Midpoint value (if available) |

> **Key Fact:** With unequal subintervals, you MUST use each subinterval's own width $\\Delta x_i$. Do NOT assume equal widths!

### Worked Example

| $t$ (hrs) | 0 | 2 | 5 | 8 | 10 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $R(t)$ (gal/hr) | 4 | 6 | 3 | 8 | 5 |

Subintervals: $[0,2], [2,5], [5,8], [8,10]$ with widths $2, 3, 3, 2$.

**Left Riemann Sum:**

$$R(0) \\cdot 2 + R(2) \\cdot 3 + R(5) \\cdot 3 + R(8) \\cdot 2 = 8 + 18 + 9 + 16 = 51 \\text{ gal}$$

**Right Riemann Sum:**

$$R(2) \\cdot 2 + R(5) \\cdot 3 + R(8) \\cdot 3 + R(10) \\cdot 2 = 12 + 9 + 24 + 10 = 55 \\text{ gal}$$

> **AP Tip:** The integral $\\int_a^b R(t)\\,dt$ represents the **total quantity** (total gallons pumped). Always interpret the meaning of the integral in context.`
    },
    {
      id: 'td2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Riemann Sums** \ud83c\udfaf\n\n| $t$ (min) | 0 | 3 | 7 | 12 |\n|:---:|:---:|:---:|:---:|:---:|\n| $v(t)$ (ft/min) | 5 | 8 | 2 | 6 |',
      exercise: {
        questions: [
          {
            question: 'Using a left Riemann sum, estimate $\\int_0^{12} v(t)\\,dt$.',
            options: ['$57$ ft', '$55$ ft', '$47$ ft', '$62$ ft'],
            correctAnswer: 0,
            explanation: 'Subintervals: $[0,3],[3,7],[7,12]$ with widths $3,4,5$. Left: $v(0)\\cdot3 + v(3)\\cdot4 + v(7)\\cdot5 = 15 + 32 + 10 = 57$ ft.'
          },
          {
            question: 'Using a right Riemann sum, estimate $\\int_0^{12} v(t)\\,dt$.',
            options: ['$62$ ft', '$57$ ft', '$55$ ft', '$50$ ft'],
            correctAnswer: 0,
            explanation: 'Right: $v(3)\\cdot3 + v(7)\\cdot4 + v(12)\\cdot5 = 24+8+30 = 62$ ft.'
          },
          {
            question: 'If $v(t) \\ge 0$ on $[0,12]$, the integral $\\int_0^{12} v(t)\\,dt$ represents:',
            options: ['Total distance traveled', 'Average velocity', 'Displacement only', 'Acceleration'],
            correctAnswer: 0,
            explanation: 'When $v(t) \\ge 0$, displacement equals total distance: $\\int_0^{12} v(t)\\,dt$ = total distance traveled.'
          }
        ]
      }
    },
    {
      id: 'td2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Build a Riemann sum.** \ud83d\udd0d\n\n| $x$ | 1 | 4 | 6 | 10 |\n|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 3 | 7 | 5 | 9 |',
      exercise: {
        dropdowns: [
          {
            label: 'The subinterval widths are:',
            options: ['$3, 2, 4$', '$1, 4, 6$', '$3, 3, 3$', '$4, 2, 4$'],
            correctAnswers: ['$3, 2, 4$'],
            hints: ['$[1,4]: 4-1=3$; $[4,6]: 6-4=2$; $[6,10]: 10-6=4$.'],
            explanation: '$\\Delta x_1 = 3$, $\\Delta x_2 = 2$, $\\Delta x_3 = 4$.'
          },
          {
            label: 'Left Riemann sum $=$',
            options: ['$3(3)+7(2)+5(4) = 43$', '$3(3)+7(3)+5(3) = 45$', '$7(3)+5(2)+9(4) = 67$', '$3+7+5 = 15$'],
            correctAnswers: ['$3(3)+7(2)+5(4) = 43$'],
            hints: ['Use left endpoints: $f(1), f(4), f(6)$.'],
            explanation: '$f(1)\\cdot3 + f(4)\\cdot2 + f(6)\\cdot4 = 9 + 14 + 20 = 43$.'
          },
          {
            label: 'Right Riemann sum $=$',
            options: ['$7(3)+5(2)+9(4) = 67$', '$3(3)+7(2)+5(4) = 43$', '$9(3)+5(2)+3(4) = 49$', '$7+5+9 = 21$'],
            correctAnswers: ['$7(3)+5(2)+9(4) = 67$'],
            hints: ['Use right endpoints: $f(4), f(6), f(10)$.'],
            explanation: '$f(4)\\cdot3 + f(6)\\cdot2 + f(10)\\cdot4 = 21 + 10 + 36 = 67$.'
          }
        ]
      }
    },
    {
      id: 'td2-input',
      type: 'input-box' as const,
      content: '**Calculate the Riemann sum.** \u270d\ufe0f\n\n| $t$ (s) | 0 | 5 | 8 | 14 |\n|:---:|:---:|:---:|:---:|:---:|\n| $a(t)$ (m/s\u00b2) | 2 | 6 | 4 | 10 |',
      exercise: {
        question: 'Use a left Riemann sum to estimate $\\int_0^{14} a(t)\\,dt$.\n\n(Enter an integer.)',
        correctAnswer: '54',
        acceptableAnswers: ['54'],
        hints: [
          'Subintervals: $[0,5],[5,8],[8,14]$ with widths $5, 3, 6$.',
          'Left endpoints: $a(0)=2, a(5)=6, a(8)=4$.',
          '$2(5) + 6(3) + 4(6) = 10 + 18 + 24 = 54$.'
        ],
        explanation: '$a(0)\\cdot5 + a(5)\\cdot3 + a(8)\\cdot6 = 10 + 18 + 24 = 54$ m/s.'
      }
    },
    {
      id: 'td2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- Each subinterval has its own width $\\Delta x_i$
- Left sum: use left endpoint values
- Right sum: use right endpoint values
- The integral represents the total accumulated quantity`
    }
  ]
};
