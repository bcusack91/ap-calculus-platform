export const satProbSolvDataPart1Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd1-intro',
      type: 'text' as const,
      content: `# Problem Solving: Ratios, Rates & Proportions

**Part 1 of 7 — Setting Up and Solving Proportions**

This is one of the most heavily tested topics on the SAT Math section. About 25-30% of Math questions fall under Problem Solving & Data Analysis.

### Ratios
A ratio compares two quantities: If a recipe uses 3 cups flour to 2 cups sugar, the ratio is **3:2** or **3/2**.

### Setting Up Proportions
**Cross-multiply** to solve:

$$\\frac{3}{5} = \\frac{x}{20} \implies 3 \\times 20 = 5x \implies x = 12$$

### Unit Rates
A unit rate has a denominator of 1:
- 240 miles in 4 hours → **60 mph**
- \$45 for 3 shirts → **\$15 per shirt**

### SAT Trap: Mixing Up Parts and Wholes
If the ratio of boys to girls is 3:5, there are **8 total parts** (not 5).
- Boys = 3/8 of total
- Girls = 5/8 of total

### Dimensional Analysis
Convert units by multiplying fractions:
$$60 \\frac{\\text{miles}}{\\text{hour}} \\times \\frac{1 \\text{ hour}}{60 \\text{ min}} = 1 \\frac{\\text{mile}}{\\text{min}}$$`
    },
    {
      id: 'psd1-q1',
      type: 'quiz' as const,
      question: 'In a class, the ratio of students who passed to those who failed is 7:3. If 40 students took the test, how many passed?',
      options: [
        '7',
        '21',
        '28',
        '30'
      ],
      correctAnswer: 2,
      explanation: 'Total parts = 7 + 3 = 10. Students who passed = (7/10) × 40 = 28. Common trap: choosing 7 (just the ratio number) or 30 (confusing 7:3 with "7 out of 3").'
    },
    {
      id: 'psd1-q2',
      type: 'quiz' as const,
      question: 'A car travels 150 miles using 5 gallons of gas. At this rate, how many gallons are needed for 420 miles?',
      options: [
        '12',
        '14',
        '16',
        '84'
      ],
      correctAnswer: 1,
      explanation: 'Unit rate = 150/5 = 30 mpg. Gallons needed = 420/30 = 14 gallons. Set up: 150/5 = 420/x → 150x = 2100 → x = 14.'
    },
    {
      id: 'psd1-text2',
      type: 'text' as const,
      content: `## Deep Dive: Complex Ratio & Proportion Problems

### Worked Example 1: Multi-Step Ratio

| Step | Work |
|---|---|
| **Problem** | "In a mixture, the ratio of water to concentrate is 5:2. If there are 21 total cups, how much water is needed?" |
| **Total parts** | $5 + 2 = 7$ parts |
| **Each part** | $21 ÷ 7 = 3$ cups per part |
| **Water** | $5 \\times 3 = 15$ cups |

### Worked Example 2: Unit Conversion Chain

| Step | Work |
|---|---|
| **Problem** | "A printer prints 12 pages per minute. How many pages in 2.5 hours?" |
| **Convert hours → minutes** | $2.5 \\times 60 = 150$ minutes |
| **Calculate** | $12 \\times 150 = 1{,}800$ pages |

### Ratio vs. Fraction — Key Difference

| Statement | Ratio | Fraction of Total |
|---|---|---|
| "Boys to girls is 3:5" | $3:5$ | Boys $= \\frac{3}{8}$, Girls $= \\frac{5}{8}$ |
| "Boys to total is 3:8" | $3:8$ | Boys $= \\frac{3}{8}$ |
| "3 out of every 5 are boys" | $3:2$ (boys:girls) | Boys $= \\frac{3}{5}$ |

### Dimensional Analysis — Multi-Step

Convert 45 mph to feet per second:

$$45 \\frac{\\text{mi}}{\\text{hr}} \\times \\frac{5280 \\text{ ft}}{1 \\text{ mi}} \\times \\frac{1 \\text{ hr}}{3600 \\text{ sec}} = 66 \\frac{\\text{ft}}{\\text{sec}}$$`
    },
    {
      id: 'psd1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Ratio & Proportion Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A map scale is 1 inch : 25 miles. Two cities are 3.5 inches apart on the map. What is the actual distance?',
            options: ['$87.5$ miles', '$75$ miles', '$7.14$ miles', '$100$ miles'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{25} = \\frac{3.5}{x}$ → $x = 25 \\times 3.5 = 87.5$ miles.'
          },
          {
            question: 'Red, blue, and green marbles are in the ratio 2:5:3. If there are 150 marbles total, how many are blue?',
            options: ['$75$', '$50$', '$30$', '$45$'],
            correctAnswer: 0,
            explanation: 'Total parts $= 2 + 5 + 3 = 10$. Blue $= \\frac{5}{10} \\times 150 = 75$.'
          },
          {
            question: 'A recipe for 4 servings uses 2.5 cups of flour. How much flour for 10 servings?',
            options: ['$6.25$ cups', '$5$ cups', '$4$ cups', '$25$ cups'],
            correctAnswer: 0,
            explanation: '$\\frac{2.5}{4} = \\frac{x}{10}$ → $x = \\frac{2.5 \\times 10}{4} = 6.25$ cups.'
          }
        ]
      }
    },
    {
      id: 'psd1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Ratio & Proportion Setup** — Select the correct approach.',
      exercise: {
        dropdowns: [
          'Ratio of A to B is 4:7, total is 55. A = [20|28|35|4]',
          '90 miles in 1.5 hours. Speed = [60 mph|45 mph|135 mph|90 mph]',
          'Ratio boys:girls = 3:5. Fraction that are boys = [3/8|3/5|5/8|5/3]',
          '\\$7.50 for 3 lb. Cost of 8 lb = [\\$20|\\$18|\\$24|\\$56.25]'
        ],
        correctAnswers: ['20', '60 mph', '3/8', '\\$20'],
        hint1: 'Total parts = 4 + 7 = 11. Each part = 55/11 = 5.',
        hint2: 'Speed = distance ÷ time = 90 ÷ 1.5.',
        hint3: 'Boys are 3 parts out of 3 + 5 = 8 total parts.',
        explanation: 'A = (4/11) × 55 = 20. Speed = 90/1.5 = 60 mph. Boys = 3/(3+5) = 3/8. Unit price = $2.50/lb, so 8 lb = $20.'
      }
    },
    {
      id: 'psd1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary: Ratios, Rates & Proportions

| Concept | Formula | SAT Trap |
|---|---|---|
| Ratio $a:b$ | Part $= \\frac{a}{a+b} \\times$ total | Confusing part:part with part:whole |
| Cross multiplication | $\\frac{a}{b} = \\frac{c}{d}$ → $ad = bc$ | Setting up the wrong proportion |
| Unit rate | $\\frac{\\text{quantity}}{1 \\text{ unit}}$ | Not reducing to denominator of 1 |
| Dimensional analysis | Cancel matching units | Missing a conversion step |

*Next: Percentages — increase, decrease, and successive changes →*`
    }
  ]
};
