const mapFigure = {
  svg: '<svg viewBox="0 0 360 215" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent"><polyline points="50,150 180,55 310,140" fill="none" stroke="currentColor" stroke-width="3"/></g><circle cx="50" cy="150" r="6" fill="currentColor"/><circle cx="180" cy="55" r="6" fill="currentColor"/><circle cx="310" cy="140" r="6" fill="currentColor"/><text x="50" y="174" font-size="13" fill="currentColor" text-anchor="middle">Ashton</text><text x="180" y="40" font-size="13" fill="currentColor" text-anchor="middle">Baird</text><text x="310" y="164" font-size="13" fill="currentColor" text-anchor="middle">Cole</text><text x="106" y="96" font-size="13" fill="currentColor" text-anchor="end">2 in.</text><text x="254" y="92" font-size="13" fill="currentColor" text-anchor="start">1.5 in.</text><g stroke="currentColor" stroke-width="2"><line x1="40" y1="198" x2="120" y2="198"/><line x1="40" y1="191" x2="40" y2="205"/><line x1="120" y1="191" x2="120" y2="205"/></g><text x="132" y="203" font-size="12" fill="currentColor" text-anchor="start">Scale: 1 inch = 30 miles</text></svg>',
  alt: 'Map of three towns. A road runs from Ashton up to Baird and is labeled 2 in. on the map, then continues from Baird down to Cole and is labeled 1.5 in. A scale bar at the bottom reads: 1 inch = 30 miles.',
  caption: 'Figure 1. Road map with a scale bar.',
  size: 'md' as const,
};

export const asvabArRatiosRatesPart3Data = {
  topicSlug: 'asvab-ar-ratios-rates',
  sections: [
    {
      id: 'arrr3-intro',
      type: 'text' as const,
      content: `# 🚚 Ratios, Proportions and Rates

**Part 3 of 7 — Proportions and Scale**

### What a proportion is

A **proportion** says two ratios are equal. On AR it appears whenever a rate stays the same: the same speed, the same price per item, the same recipe, the same map scale.

### Set it up with matching units

Write each ratio with the **same unit on top** and the **same unit on the bottom**.

**Worked Example.** A press stamps 48 parts in 6 minutes. At the same rate, how many parts does it stamp in 25 minutes?

$$\\frac{48 \\text{ parts}}{6 \\text{ min}} = \\frac{x \\text{ parts}}{25 \\text{ min}}$$

**Cross-multiply:** if $\\frac{a}{b} = \\frac{c}{d}$, then $a \\times d = b \\times c$.

$$6 \\times x = 48 \\times 25 = 1{,}200 \\qquad x = 1{,}200 \\div 6 = 200$$

**The unit-rate way gives the same answer:** $48 \\div 6 = 8$ parts per minute, and $8 \\times 25 = 200$ parts.

**Estimate:** 25 minutes is a little more than $4 \\times 6 = 24$ minutes, so the answer is a little more than $4 \\times 48 = 192$. ✓

### When the unknown is on the bottom

How long does the same press take to stamp 360 parts?

$$\\frac{48}{6} = \\frac{360}{x} \\qquad 48x = 6 \\times 360 = 2{,}160 \\qquad x = 45 \\text{ minutes}$$

Or with the rate: $360 \\div 8 = 45$ minutes.

> **Key Fact:** Use whichever method feels faster. The unit rate is quickest when it divides evenly; cross-multiplying always works.`
    },
    {
      id: 'arrr3-mixtures',
      type: 'text' as const,
      content: `## Recipes and mixtures

A recipe or mixture keeps the **same ratio** no matter how much you make.

**Worked Example: fuel-to-oil mix.** A chainsaw needs 4 ounces of oil for every 2 gallons of gas. How many ounces of oil go into 5 gallons of gas?

$$\\frac{4 \\text{ oz oil}}{2 \\text{ gal gas}} = \\frac{x \\text{ oz oil}}{5 \\text{ gal gas}} \\qquad 2x = 20 \\qquad x = 10 \\text{ ounces}$$

Unit rate: $4 \\div 2 = 2$ ounces per gallon, so $5 \\times 2 = 10$ ounces.

**Reasonableness:** 5 gallons is more gas than 2 gallons, so it needs more oil than 4 ounces. ✓

### The scale-factor shortcut

When the new amount is a whole-number multiple of the old one, just multiply. A soup recipe that serves 6 uses 2 cans of broth. To serve 18, multiply everything by $18 \\div 6 = 3$: you need $2 \\times 3 = 6$ cans.

> **Watch out:** Proportions multiply; they don't add. Going from 6 servings to 18 is "times 3," not "plus 12." Adding 12 cans would be way off.`
    },
    {
      id: 'arrr3-scale',
      type: 'text' as const,
      content: `## Map and blueprint scale

A **scale** is a ratio between a drawing and real life.

| Scale | Drawing to real | Real to drawing |
|:---|:---|:---|
| 1 inch = 40 miles | multiply inches by 40 | divide miles by 40 |
| $\\frac{1}{4}$ inch = 1 foot | multiply inches by 4 | divide feet by 4 |

**Worked Example: map.** The scale is 1 inch = 40 miles. Two towns are $2\\frac{1}{2}$ inches apart on the map.

$$2\\frac{1}{2} \\times 40 = 2 \\times 40 + \\frac{1}{2} \\times 40 = 80 + 20 = 100 \\text{ miles}$$

**Going the other way:** two towns are 140 miles apart. On the map they are $140 \\div 40 = 3\\frac{1}{2}$ inches apart. Real distances are big numbers; map distances are small numbers. If you got 5,600 inches, the scale went the wrong way.

**Worked Example: blueprint.** On a blueprint, $\\frac{1}{4}$ inch = 1 foot. A wall is drawn $3\\frac{1}{2}$ inches long.

- 1 inch holds four quarter-inches, so **1 inch = 4 feet**.
- $3\\frac{1}{2} \\times 4 = 12 + 2 = 14$ feet.

> **Key Fact:** Turn an awkward scale into "1 inch = ___" first. Then drawing-to-real is multiply, and real-to-drawing is divide.`
    },
    {
      id: 'arrr3-map-check',
      type: 'multiple-choice' as const,
      content: '**Use the map above.** 🗺️',
      figure: mapFigure,
      exercise: {
        questions: [
          {
            question: 'On the map, the road from Ashton to Baird measures 2 inches and the road from Baird to Cole measures 1.5 inches. How many miles is the drive from Ashton to Cole through Baird?',
            options: ['60', '45', '90', '105'],
            correctAnswer: 3,
            explanation: 'The whole route measures $2 + 1.5 = 3.5$ inches on the map, and each inch is 30 miles: $3.5 \\times 30 = 90 + 15 = 105$ miles. The answer 60 is the Ashton-to-Baird leg only, 45 is the Baird-to-Cole leg only, and 90 drops the half inch and uses 3 inches.'
          }
        ]
      }
    },
    {
      id: 'arrr3-mc',
      type: 'multiple-choice' as const,
      content: '**Set up the proportion.** Same units in the same positions. 🎯',
      exercise: {
        questions: [
          {
            question: 'A copier produces 75 copies in 5 minutes. At that rate, how many minutes will it take to produce 420 copies?',
            options: ['84', '23', '28', '6,300'],
            correctAnswer: 2,
            explanation: 'Rate: $75 \\div 5 = 15$ copies per minute. Time: $420 \\div 15 = 28$ minutes (estimate: $15 \\times 30 = 450$, so a little under 30). The answer 84 divides 420 by the 5 minutes instead of by the rate, 6,300 multiplies 420 by 15, and 23 is the time for only the extra 345 copies, forgetting the first 5 minutes.'
          },
          {
            question: 'A pancake recipe uses 3 cups of flour to serve 8 people. How many cups of flour are needed to serve 40 people?',
            options: ['35', '15', '24', '5'],
            correctAnswer: 1,
            explanation: '40 people is $40 \\div 8 = 5$ times as many, so use $3 \\times 5 = 15$ cups. The answer 35 adds the 32 extra people to the 3 cups instead of multiplying, 24 multiplies the 3 cups by the 8 people, and 5 is only the scale factor.'
          }
        ]
      }
    },
    {
      id: 'arrr3-input',
      type: 'input-boxes' as const,
      content: `**Read a blueprint.** ✍️

On a blueprint, $\\frac{1}{2}$ inch represents 3 feet. A rectangular storage room is drawn 4 inches long and $2\\frac{1}{2}$ inches wide.

**1)** What is the actual length of the room? (number only, in feet)

**2)** What is the actual width of the room? (number only, in feet)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['24', '15'],
        hint1: 'Turn the scale into "1 inch = ___ feet" first.',
        hint2: 'Two half-inches make an inch, so 1 inch = $2 \\times 3 = 6$ feet.',
        hint3: 'Multiply each drawn length in inches by 6.',
        explanation: 'Since $\\frac{1}{2}$ inch = 3 feet, 1 inch = 6 feet. Length: $4 \\times 6 = 24$ feet. Width: $2\\frac{1}{2} \\times 6 = 12 + 3 = 15$ feet. Check: real lengths in feet are bigger numbers than the drawing in inches, as they should be.'
      }
    },
    {
      id: 'arrr3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Proportion setup.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A pump moves 30 gallons in 4 minutes. To find how many gallons it moves in 10 minutes, a correct proportion is:',
            options: ['$\\frac{30}{4} = \\frac{10}{x}$', '$\\frac{30}{4} = \\frac{x}{10}$', '$\\frac{4}{30} = \\frac{x}{10}$', '$\\frac{30}{10} = \\frac{x}{4}$'],
            correctAnswer: 1
          },
          {
            label: 'On a map where 1 inch = 20 miles, to turn an actual distance in miles into map inches you:',
            options: ['multiply by 20', 'add 20', 'divide by 20', 'subtract 20'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$\\frac{30}{4} = \\frac{x}{10}$', 'divide by 20'],
        hint1: 'Put gallons on top and minutes on the bottom on BOTH sides.',
        hint2: 'Real miles are a big number; map inches are a small number.',
        hint3: 'Ask how many 20-mile chunks fit into the real distance.',
        explanation: 'Gallons over minutes on both sides: $\\frac{30}{4} = \\frac{x}{10}$, which gives $4x = 300$ and $x = 75$ gallons. The other setups mix gallons with minutes in the same position. To go from real miles to map inches, divide by 20: each inch of map covers 20 miles, so 100 miles is $100 \\div 20 = 5$ inches.'
      }
    },
    {
      id: 'arrr3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- A proportion sets two ratios equal; put the **same unit in the same position** on both sides
- **Cross-multiply** ($a \\times d = b \\times c$) or use the **unit rate**; both give the same answer
- Recipes and mixtures **multiply** when they scale up; they never add
- For any scale, rewrite it as **"1 inch = ___"**: drawing to real is **multiply**, real to drawing is **divide**
- Check direction: more time means more output, and real distances are bigger numbers than map distances

> **Up Next:** Part 4 — distance, rate and time: $d = r \\times t$, minutes to hours, two vehicles at once, and average speed.`
    }
  ]
};
