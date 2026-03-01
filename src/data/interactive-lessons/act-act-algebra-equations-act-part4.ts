export const actAlgebraPart4Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg4-intro',
      type: 'text' as const,
      content: `
# 📝 Linear Word Problems

**Part 4 of 7 — Translating Words to Equations, Rate/Distance/Time & Mixtures**

The hardest part of word problems is **translation** — turning English into algebra.

| Phrase | Operation |
|--------|-----------|
| "sum of" / "more than" | $+$ |
| "difference" / "less than" | $-$ |
| "product of" / "times" | $\\times$ |
| "quotient" / "per" | $\\div$ |
| "is" / "equals" | $=$ |

**ACT Tip:** Underline what they're asking for *before* you set up the equation.
      `
    },
    {
      id: 'act-alg4-rate',
      type: 'text' as const,
      content: `
## Rate × Time = Distance

The classic formula: $d = rt$.

**Example 1:** A car travels at 55 mph for 3 hours. Distance?

$$d = 55 \\times 3 = 165 \\text{ miles}$$

**Example 2:** Two trains leave the same station in opposite directions. Train A travels at 60 mph and Train B at 80 mph. After how many hours are they 420 miles apart?

$$60t + 80t = 420 \\implies 140t = 420 \\implies t = 3 \\text{ hours}$$

**Example 3:** You drive to work at 30 mph and return at 50 mph. The total trip is 40 miles each way. What is your average speed for the round trip?

Time there: $\\frac{40}{30} = \\frac{4}{3}$ hr. Time back: $\\frac{40}{50} = \\frac{4}{5}$ hr.

$$\\text{Avg speed} = \\frac{\\text{total distance}}{\\text{total time}} = \\frac{80}{\\frac{4}{3} + \\frac{4}{5}} = \\frac{80}{\\frac{32}{15}} = \\frac{80 \\times 15}{32} = 37.5 \\text{ mph}$$

**ACT Tip:** Average speed is NOT the average of the two speeds. Use total distance ÷ total time.
      `
    },
    {
      id: 'act-alg4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Translation Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"Five more than twice a number is 23." Which equation?',
            options: ['$5 + x = 23$', '$2x + 5 = 23$', '$5(2 + x) = 23$', '$2(x + 5) = 23$'],
            correctAnswer: 1,
            explanation: '"Twice a number" = $2x$. "Five more than that" = $2x + 5$.'
          },
          {
            question: 'A runner covers 12 miles in 1.5 hours. What is the speed in mph?',
            options: ['$6$', '$8$', '$10$', '$18$'],
            correctAnswer: 1,
            explanation: '$r = d / t = 12 / 1.5 = 8$ mph.'
          }
        ]
      }
    },
    {
      id: 'act-alg4-input1',
      type: 'input-boxes' as const,
      content: `
**Word Problem Workout** 🧮

1) The sum of three consecutive integers is 48. What is the smallest?
2) A cyclist travels at 15 mph for $t$ hours covering 60 miles. What is $t$?
3) A phone plan charges \\$25/month plus \\$0.10 per text. If the bill is \\$40, how many texts were sent?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '4', '150'],
        hint1: 'Let the integers be $n, n+1, n+2$. Then $3n + 3 = 48$.',
        hint2: '$d = rt \\implies 60 = 15t$.',
        hint3: '$25 + 0.10t = 40 \\implies 0.10t = 15$.',
        explanation: '1) $n = 15$ (integers are 15, 16, 17). 2) $t = 4$ hours. 3) 150 texts.'
      }
    },
    {
      id: 'act-alg4-mixture',
      type: 'text' as const,
      content: `
## Mixture Problems

**Example:** A chemist mixes a 40% acid solution with a 70% acid solution to get 12 liters of 50% acid. How many liters of each?

Let $x$ = liters of 40%, so $12 - x$ = liters of 70%.

$$0.40x + 0.70(12 - x) = 0.50(12)$$

$$0.40x + 8.4 - 0.70x = 6$$

$$-0.30x = -2.4 \\implies x = 8$$

**Answer:** 8 liters of 40% and 4 liters of 70%.

**ACT Tip:** For mixture problems, set up: (amount₁)(concentration₁) + (amount₂)(concentration₂) = (total)(target concentration).
      `
    },
    {
      id: 'act-alg4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match the Formula** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Distance equals …',
            options: ['rate + time', 'rate × time', 'rate ÷ time', 'rate − time']
          },
          {
            label: 'Average speed for a round trip uses …',
            options: ['Average of the two speeds', 'Total distance ÷ total time', 'Faster speed only', 'Sum of speeds']
          },
          {
            label: 'In a mixture problem, you set up …',
            options: ['amount₁ + amount₂ = target', 'concentration₁ × concentration₂ = target', 'amount × concentration for each part = total amount × target %', 'rate × time = distance']
          }
        ],
        correctAnswers: ['rate × time', 'Total distance ÷ total time', 'amount × concentration for each part = total amount × target %'],
        hint1: '$d = rt$ is the fundamental relationship.',
        hint2: 'Average speed is never just the arithmetic mean of two speeds.',
        hint3: 'Each component contributes (its volume)(its concentration) to the total.',
        explanation: 'Distance = rate × time. Average speed = total distance ÷ total time. Mixtures: sum of (amount × concentration) for each part equals the total mixture\'s (amount × concentration).'
      }
    },
    {
      id: 'act-alg4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store sells notebooks for \\$3 each and binders for \\$5 each. Tanya buys 11 items for \\$41. How many notebooks did she buy?',
            options: ['$4$', '$7$', '$5$', '$6$'],
            correctAnswer: 1,
            explanation: '$3n + 5(11 - n) = 41 \\implies 3n + 55 - 5n = 41 \\implies -2n = -14 \\implies n = 7$.'
          },
          {
            question: 'Two cars start from the same point. Car A goes north at 45 mph, Car B goes east at 60 mph. After 2 hours, how far apart are they?',
            options: ['$150$ mi', '$210$ mi', '$75$ mi', '$105$ mi'],
            correctAnswer: 0,
            explanation: 'North: $90$ mi. East: $120$ mi. Distance $= \\sqrt{90^2 + 120^2} = \\sqrt{8100 + 14400} = \\sqrt{22500} = 150$ mi.'
          }
        ]
      }
    }
  ]
};
