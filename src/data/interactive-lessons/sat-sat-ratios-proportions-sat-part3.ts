export const satRatiosPart3Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp3-intro',
      type: 'text' as const,
      content: `
# ⏱️ Unit Rates & Unit Conversions

**Part 3 of 7 — Rate = Quantity ÷ Time, Dimensional Analysis & Speed Conversions**

A **unit rate** expresses a ratio as "something per one unit":

$$\\text{Unit rate} = \\frac{\\text{total quantity}}{\\text{total units}}$$

**Common examples:**

| Situation | Rate |
|-----------|------|
| 240 miles in 4 hours | $60$ mph |
| \$45 for 9 pounds | \$5 per pound |
| 150 words in 3 minutes | 50 wpm |

**Example 1:** A printer produces 360 pages in 6 minutes. What is the rate in pages per minute?

$$\\text{Rate} = \\frac{360}{6} = 60 \\text{ pages/min}$$
      `
    },
    {
      id: 'sat-rp3-dimensional',
      type: 'text' as const,
      content: `
## Dimensional Analysis (Unit Conversion)

Multiply by conversion factors so that unwanted units cancel:

**Example 2:** Convert 45 miles per hour to feet per second.

$$45 \\;\\frac{\\text{mi}}{\\text{hr}} \\times \\frac{5{,}280 \\;\\text{ft}}{1 \\;\\text{mi}} \\times \\frac{1 \\;\\text{hr}}{3{,}600 \\;\\text{sec}} = \\frac{45 \\times 5{,}280}{3{,}600} = 66 \\;\\frac{\\text{ft}}{\\text{sec}}$$

**Example 3:** A car gets 30 miles per gallon. Gas costs \$4.50 per gallon. How much does it cost to drive 450 miles?

$$\\text{Gallons needed} = \\frac{450}{30} = 15 \\implies \\text{Cost} = 15 \\times 4.50 = \\$67.50$$

**Key conversion factors for the SAT:**

| From | To | Factor |
|------|----|--------|
| 1 mile | 5,280 feet | multiply by 5,280 |
| 1 hour | 60 minutes | multiply by 60 |
| 1 hour | 3,600 seconds | multiply by 3,600 |
| 1 km | 1,000 m | multiply by 1,000 |
| 1 mile | ≈ 1.609 km | multiply by 1.609 |
      `
    },
    {
      id: 'sat-rp3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Unit Rates** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A factory produces 2,400 bolts in an 8-hour shift. What is the production rate in bolts per minute?',
            options: ['$5$', '$30$', '$50$', '$300$'],
            correctAnswer: 0,
            explanation: '$8$ hours $= 480$ minutes. Rate $= 2{,}400 / 480 = 5$ bolts per minute.'
          },
          {
            question: 'A car travels 180 km in 2.5 hours. What is its average speed in km/h?',
            options: ['$45$', '$60$', '$72$', '$90$'],
            correctAnswer: 2,
            explanation: 'Speed $= 180 / 2.5 = 72$ km/h.'
          }
        ]
      }
    },
    {
      id: 'sat-rp3-compare',
      type: 'text' as const,
      content: `
## Comparing Rates

The SAT frequently asks you to compare two rates and decide which is better.

**Example 4:** Store A sells 5 lb of rice for \$8.75. Store B sells 8 lb for \$13.60. Which is the better deal?

$$\\text{Store A: } \\frac{8.75}{5} = \\$1.75/\\text{lb}$$

$$\\text{Store B: } \\frac{13.60}{8} = \\$1.70/\\text{lb}$$

Store B is cheaper per pound.

**Example 5 — Speed comparison:** Runner 1 covers 400 m in 50 s. Runner 2 covers 1 km in 2 min 5 s. Who is faster?

$$\\text{Runner 1: } \\frac{400}{50} = 8 \\text{ m/s}$$

$$\\text{Runner 2: } \\frac{1{,}000}{125} = 8 \\text{ m/s}$$

They have the same speed!
      `
    },
    {
      id: 'sat-rp3-input1',
      type: 'input-boxes' as const,
      content: `
**Unit Conversion Practice** 🧮

1) Convert 90 km/h to m/s. (Give as a whole number.)
2) A worker earns \$18 per hour and works 40 hours per week. What is the weekly pay in dollars?
3) If 1 inch = 2.54 cm, how many centimeters are in 5 inches? (Give to one decimal.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '720', '12.7'],
        hint1: '$90 \\times \\frac{1{,}000}{3{,}600} = 90 \\times \\frac{1}{3.6}$.',
        hint2: '$18 \\times 40$.',
        hint3: '$5 \\times 2.54$.',
        explanation: '$90 \\div 3.6 = 25$ m/s. Weekly pay $= 720$. $5 \\times 2.54 = 12.7$ cm.'
      }
    },
    {
      id: 'sat-rp3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rate Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To convert hours to seconds you multiply by …',
            options: ['60', '360', '3,600', '60,000']
          },
          {
            label: 'If a unit rate is $\\$2.50$ per item and you buy 12 items, the total cost is …',
            options: ['$\\$25.00$', '$\\$30.00$', '$\\$35.00$', '$\\$14.50$']
          },
          {
            label: 'Dimensional analysis works by multiplying by fractions that equal …',
            options: ['zero', 'one', 'the unit rate', 'infinity']
          }
        ],
        correctAnswers: ['3,600', '$\\$30.00$', 'one'],
        hint1: '$1$ hour $= 60$ min $\\times 60$ sec.',
        hint2: '$2.50 \\times 12 = 30$.',
        hint3: 'Each conversion fraction equals 1 (numerator = denominator in different units).',
        explanation: '1 hr $= 3{,}600$ s. $2.50 \\times 12 = \\$30$. Conversion factors are fractions equal to 1.'
      }
    },
    {
      id: 'sat-rp3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A hose fills a 600-gallon tank in 4 hours. A second hose fills the same tank in 6 hours. If both hoses run together, how long does it take to fill the tank?',
            options: ['$2$ hours', '$2.4$ hours', '$3$ hours', '$5$ hours'],
            correctAnswer: 1,
            explanation: 'Hose 1: $150$ gal/hr. Hose 2: $100$ gal/hr. Combined: $250$ gal/hr. Time $= 600/250 = 2.4$ hours.'
          },
          {
            question: 'An athlete runs a 10-km race in 42 minutes. What is the runner\'s average speed in km/h?',
            options: ['$12.0$', '$\\approx 14.3$', '$15.0$', '$\\approx 16.7$'],
            correctAnswer: 1,
            explanation: '$42$ min $= 0.7$ hr. Speed $= 10 / 0.7 \\approx 14.3$ km/h.'
          }
        ]
      }
    }
  ]
};
