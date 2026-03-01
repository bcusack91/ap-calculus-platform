export const satRatiosPart7Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp7-intro',
      type: 'text' as const,
      content: `
# 🏁 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet & Mixed SAT-Style Problems**

## Formula Quick Reference

| Topic | Key Formula / Concept |
|-------|----------------------|
| Simplify ratio | Divide all terms by GCF |
| Part-to-whole | $\\frac{\\text{part}}{\\text{sum of all parts}}$ |
| Proportion | $\\frac{a}{b} = \\frac{c}{d} \\implies ad = bc$ |
| Unit rate | $\\frac{\\text{quantity}}{\\text{units}}$ |
| Percent of | $\\text{part} = \\frac{p}{100} \\times \\text{whole}$ |
| Percent change | $\\frac{|\\text{new} - \\text{old}|}{\\text{old}} \\times 100\\%$ |
| Successive % | Multiply the multipliers |
| Direct variation | $y = kx$ ⟹ $y/x$ constant |
| Inverse variation | $y = k/x$ ⟹ $xy$ constant |
| Scale: length | $\\times k$ |
| Scale: area | $\\times k^2$ |
| Scale: volume | $\\times k^3$ |
      `
    },
    {
      id: 'sat-rp7-tips',
      type: 'text' as const,
      content: `
## Top SAT Strategies for Ratio & Proportion Questions

**1. Set up immediately.** Write the proportion or ratio equation before doing any arithmetic.

**2. Match units.** Make sure numerators correspond to the same quantity and denominators to the same quantity.

**3. Part-to-whole is your friend.** Convert part-to-part ratios to part-to-whole if the problem asks about totals.

**4. Never add percents across steps.** Multiply the multipliers for successive percent changes.

**5. Check for inverse variation.** If "more workers → less time" or "faster speed → less time", it's inverse.

**6. Scale correctly.** Length scales by $k$, area by $k^2$, volume by $k^3$. Don't confuse them.

**7. Estimate first.** Before computing, estimate the answer. If a 25% discount on \$80 is asked, you know it's around \$60 — eliminate wild choices.
      `
    },
    {
      id: 'sat-rp7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A recipe calls for flour and sugar in the ratio $5 : 2$. A baker uses 3.5 cups of sugar. How many cups of flour does the baker use?',
            options: ['$7.0$', '$7.5$', '$8.75$', '$10.0$'],
            correctAnswer: 2,
            explanation: '$\\frac{5}{2} = \\frac{f}{3.5} \\implies f = 5 \\times 1.75 = 8.75$ cups.'
          },
          {
            question: 'A shirt is marked up $40\\%$ from the wholesale price to the retail price, then put on sale for $30\\%$ off retail. What is the final price as a percent of wholesale?',
            options: ['$110\\%$', '$98\\%$', '$108\\%$', '$90\\%$'],
            correctAnswer: 1,
            explanation: '$1.40 \\times 0.70 = 0.98 = 98\\%$ of wholesale — a $2\\%$ loss!'
          }
        ]
      }
    },
    {
      id: 'sat-rp7-mixed1',
      type: 'text' as const,
      content: `
## Worked Mixed Problems

**Problem A — Ratio + Percent:** In a class, the ratio of boys to girls is $3 : 5$. If $40\\%$ of the boys and $60\\%$ of the girls passed an exam, what fraction of the entire class passed?

$$\\text{Let boys} = 3k, \\; \\text{girls} = 5k. \\; \\text{Total} = 8k.$$

$$\\text{Passed} = 0.4(3k) + 0.6(5k) = 1.2k + 3k = 4.2k$$

$$\\text{Fraction} = \\frac{4.2k}{8k} = \\frac{4.2}{8} = \\frac{21}{40} = 52.5\\%$$

**Problem B — Rate + Proportion:** Pipe A fills a pool at 120 gallons/hour. Pipe B fills it at 80 gallons/hour. The pool holds 600 gallons. How long with both pipes?

$$\\text{Combined rate} = 200 \\text{ gal/hr}. \\quad t = \\frac{600}{200} = 3 \\text{ hours.}$$

**Problem C — Scale + Area:** A park on a map (scale $1 : 5{,}000$) measures $4$ cm by $6$ cm. Actual area?

$$\\text{Actual dimensions:} \\; 4 \\times 5{,}000 = 20{,}000 \\text{ cm} = 200 \\text{ m}$$

$$6 \\times 5{,}000 = 30{,}000 \\text{ cm} = 300 \\text{ m}$$

$$\\text{Area} = 200 \\times 300 = 60{,}000 \\text{ m}^2 = 6 \\text{ hectares}$$
      `
    },
    {
      id: 'sat-rp7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

1) If $12$ workers can build a wall in $10$ days, how many days will $15$ workers take? (inverse variation)
2) A price increases by $20\\%$ then decreases by $10\\%$. What single percent change is this equivalent to? (give as a whole number)
3) Two similar triangles have perimeters $30$ cm and $45$ cm. The smaller has area $50$ cm². What is the larger's area? (give as a decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '8', '112.5'],
        hint1: '$k = 12 \\times 10 = 120$. Days $= 120 / 15$.',
        hint2: '$1.20 \\times 0.90 = 1.08$, so $8\\%$ increase.',
        hint3: '$k = 45/30 = 1.5$. Area ratio $= 1.5^2 = 2.25$. $50 \\times 2.25$.',
        explanation: '$120/15 = 8$ days. $1.20 \\times 0.90 = 1.08$ → $8\\%$ increase. $50 \\times 2.25 = 112.5$ cm².'
      }
    },
    {
      id: 'sat-rp7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the ratio of A to B is $7 : 3$, the fraction of the total that is A equals …',
            options: ['$\\frac{7}{3}$', '$\\frac{3}{10}$', '$\\frac{7}{10}$', '$\\frac{3}{7}$']
          },
          {
            label: 'Tripling every side of a cube multiplies its surface area by …',
            options: ['$3$', '$6$', '$9$', '$27$']
          },
          {
            label: 'If speed doubles and distance stays the same, travel time is …',
            options: ['doubled', 'halved', 'unchanged', 'quartered']
          }
        ],
        correctAnswers: ['$\\frac{7}{10}$', '$9$', 'halved'],
        hint1: 'Total parts $= 7 + 3 = 10$.',
        hint2: 'Surface area scales as $k^2$; $3^2 = 9$.',
        hint3: '$t = d/v$. If $v$ doubles, $t$ halves (inverse relationship).',
        explanation: 'A\'s fraction $= 7/10$. Surface area $\\propto k^2 = 9$. Time and speed are inversely related.'
      }
    },
    {
      id: 'sat-rp7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Mixed Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store sells pens and pencils. The ratio of pens to pencils sold on Monday was $5 : 8$. On Tuesday, the store sold $20\\%$ more pens and $25\\%$ fewer pencils than Monday. What is the new ratio of pens to pencils?',
            options: ['$1 : 1$', '$6 : 5$', '$3 : 2$', '$2 : 3$'],
            correctAnswer: 0,
            explanation: 'Monday: pens $= 5k$, pencils $= 8k$. Tuesday: pens $= 5k \\times 1.2 = 6k$, pencils $= 8k \\times 0.75 = 6k$. Ratio $= 6k : 6k = 1 : 1$.'
          },
          {
            question: 'A model airplane is built at $1 : 72$ scale. The real airplane has a wingspan of 36 meters. What is the model\'s wingspan in centimeters?',
            options: ['$50$ cm', '$72$ cm', '$36$ cm', '$25$ cm'],
            correctAnswer: 0,
            explanation: 'Model wingspan $= 36/72 = 0.5$ m $= 50$ cm.'
          }
        ]
      }
    }
  ]
};
