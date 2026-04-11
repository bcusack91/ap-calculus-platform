export const precalcSystemsPart6Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🌍 Applications of Systems

**Part 6 of 7**

### Mixture Problems

**Problem**: Mix a 30% acid solution with a 70% acid solution to get 100 mL of 40% acid.

Let $x$ = mL of 30%, $y$ = mL of 70%.

$$\\begin{cases} x + y = 100 \\\\ 0.30x + 0.70y = 40 \\end{cases}$$

From eq1: $y = 100-x$. Substitute:

$0.30x + 0.70(100-x) = 40$

$0.30x + 70 - 0.70x = 40$

$-0.40x = -30 \\implies x = 75$

**Answer**: 75 mL of 30% and 25 mL of 70%.
      `
    },
    {
      id: 'p6-motion',
      type: 'text' as const,
      content: `
## ✈️ Distance/Rate/Time Problems

### With Wind / Current

| Direction | Rate | Time | Distance |
|:----------|:-----|:-----|:---------|
| With wind | $p + w$ | $t_1$ | $d$ |
| Against wind | $p - w$ | $t_2$ | $d$ |

**Example**: Plane flies 600 mi with wind in 2 hrs, return in 3 hrs.

$$\\begin{cases} (p+w) \\cdot 2 = 600 \\\\ (p-w) \\cdot 3 = 600 \\end{cases}$$

$p+w = 300$ and $p-w = 200$.

Add: $2p = 500 \\implies p = 250$ mph. $w = 50$ mph.

### Relative Motion

Two trains leave same station in opposite directions at 60 and 80 mph. When are they 350 mi apart?

$60t + 80t = 350 \\implies 140t = 350 \\implies t = 2.5$ hours.
      `
    },
    {
      id: 'p6-money',
      type: 'text' as const,
      content: `
## 💰 Investment & Work Problems

### Investment

\\$10,000 split between 5% and 8% annual interest, earning \\$680 total.

$$\\begin{cases} x + y = 10000 \\\\ 0.05x + 0.08y = 680 \\end{cases}$$

$x = 10000-y$: $0.05(10000-y)+0.08y=680$

$500-0.05y+0.08y=680 \\implies 0.03y=180 \\implies y=6000$

**\\$4,000 at 5%** and **\\$6,000 at 8%**.

### Work Rate Problems

Worker A: job in 6 hrs. Worker B: job in 4 hrs. Together?

Rates: $\\frac{1}{6} + \\frac{1}{4} = \\frac{2+3}{12} = \\frac{5}{12}$

Time together: $\\frac{12}{5} = 2.4$ hours.

> 💡 The key to word problems: **define variables clearly** and **write equations for each constraint**.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Applications Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Tickets: adults \\$8, kids \\$5. 200 tickets, \\$1,300. How many adults?',
            options: ['100', '120', '80', '150'],
            correctAnswer: 0,
            explanation: '$8a+5(200-a)=1300 \\implies 3a=300 \\implies a=100$.'
          },
          {
            question: 'Boat: 12 km/hr in still water, current 3 km/hr. Upstream speed?',
            options: ['9 km/hr', '15 km/hr', '12 km/hr', '6 km/hr'],
            correctAnswer: 0,
            explanation: 'Upstream: $12-3 = 9$ km/hr.'
          },
          {
            question: 'If workers A and B can each finish alone in 5 and 10 hrs, their combined rate is:',
            options: ['$1/15$', '$3/10$', '$1/5$', '$2/15$'],
            correctAnswer: 1,
            explanation: '$1/5 + 1/10 = 2/10 + 1/10 = 3/10$ of the job per hour.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Word Problems** 🧮

**1)** Sum of two numbers is 20, difference is 6. Larger number = ?

**2)** 40% + 60% solutions mixed to get 200 mL of 45%. How many mL of 40%?

**3)** \\$5,000 at rate $r$ earns \\$350/yr. Rate (%) = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '150', '7'],
        hint1: '$x+y=20, x-y=6 \\implies 2x=26$.',
        hint2: '$0.4x+0.6(200-x)=90 \\implies -0.2x=-30$.',
        hint3: '$5000r = 350 \\implies r = 0.07 = 7\\%$.',
        explanation: '1) $13$. 2) $150$ mL. 3) $7$%.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Problem Setup** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mixture problems always have:',
            options: ['A total amount equation', 'A concentration equation', 'Both', 'Neither'],
            correctAnswer: 2
          },
          {
            label: 'Against the current, effective speed is:',
            options: ['Boat + current', 'Boat - current', 'Boat × current', 'Current - boat'],
            correctAnswer: 1
          },
          {
            label: 'First step in any word problem:',
            options: ['Solve the equation', 'Define variables', 'Graph the system', 'Use matrices'],
            correctAnswer: 1
          },
          {
            label: 'Work rate formula: combined rate =',
            options: ['$r_1 + r_2$', '$r_1 \\times r_2$', '$1/(r_1 + r_2)$', '$r_1 - r_2$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Both', 'Boat - current', 'Define variables', '$r_1 + r_2$'],
        hint1: 'Total volume AND total solute.',
        hint2: 'Current opposes: subtract.',
        hint3: 'Can\'t write equations without knowing what $x$ and $y$ represent.',
        explanation: 'Mixtures: total + concentration. Against current: subtract. First: define variables. Rates add.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two numbers: product 72, sum 18. What are they?',
            options: ['6 and 12', '8 and 10', '9 and 9', '4 and 14'],
            correctAnswer: 0,
            explanation: '$x(18-x)=72 \\implies x^2-18x+72=0 \\implies (x-6)(x-12)=0$.'
          },
          {
            question: 'Train A (60 mph) leaves 1 hr before Train B (80 mph), same direction. When does B catch A?',
            options: ['3 hours after B leaves', '4 hours after B leaves', '2 hours after B leaves', 'Never'],
            correctAnswer: 0,
            explanation: '$60(t+1) = 80t \\implies 60t+60=80t \\implies 20t=60 \\implies t=3$ hrs.'
          }
        ]
      }
    }
  ]
};
