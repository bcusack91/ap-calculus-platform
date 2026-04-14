export const satRatiosPart4Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp4-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 4 of 7 — Unit Conversions**

### Dimensional Analysis

Convert units by multiplying by fractions equal to 1:

"Convert 30 mph to feet per second"

$$30 \\frac{\\text{miles}}{\\text{hour}} \\times \\frac{5,280 \\text{ feet}}{1 \\text{ mile}} \\times \\frac{1 \\text{ hour}}{3,600 \\text{ seconds}} = 44 \\text{ ft/s}$$

### Common Conversions (SAT-relevant)

| Given | Conversion |
|-------|-----------|
| 1 mile | 5,280 feet |
| 1 kilometer | 1,000 meters |
| 1 hour | 60 minutes = 3,600 seconds |
| 1 gallon | 4 quarts |
| 1 pound | 16 ounces |

### SAT Unit Conversion Strategy

1. Write the starting quantity as a fraction
2. Multiply by conversion factors so unwanted units cancel
3. Compute the result

The SAT provides conversion factors in the problem — you don't need to memorize them. Focus on the METHOD of canceling units.

---

### Worked Example 1 — Multi-Step Conversion

**A pump moves water at 5 gallons per minute. How many quarts per hour is that?**

| Step | Work |
|------|------|
| Start | $5 \\text{ gal/min}$ |
| Gallons → quarts | $× \\frac{4 \\text{ qt}}{1 \\text{ gal}} = 20 \\text{ qt/min}$ |
| Minutes → hours | $× \\frac{60 \\text{ min}}{1 \\text{ hr}} = 1{,}200 \\text{ qt/hr}$ |

### Worked Example 2 — Area Conversion

**A room is 12 feet by 15 feet. What is the area in square yards? (1 yard = 3 feet)**

| Step | Work |
|------|------|
| Area in sq ft | $12 × 15 = 180 \\text{ ft}^2$ |
| Convert | $180 ÷ 9 = 20 \\text{ yd}^2$ |

⚠️ For area, you divide by $3^2 = 9$ (not by 3). For volume, divide by $3^3 = 27$.`
    },
    {
      id: 'rp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Unit Conversions** 🎯',
      exercise: {
        questions: [
          {
            question: 'A faucet drips 3 gallons per hour. How many quarts per minute is this? (1 gallon = 4 quarts)',
            options: ['$0.2$ quarts/min', '$12$ quarts/min', '$0.75$ quarts/min', '$1$ quart/min'],
            correctAnswer: 0,
            explanation: '$3$ gal/hr $\\times$ $4$ qt/gal $\\times$ $1$ hr/$60$ min $= 12/60 = 0.2$ quarts per minute.'
          },
          {
            question: 'A car travels at 90 km/h. What is its speed in m/s? (1 km = 1000 m)',
            options: ['$25$ m/s', '$15$ m/s', '$50$ m/s', '$90$ m/s'],
            correctAnswer: 0,
            explanation: '$90$ km/h $\\times 1000$ m/km $\\times 1$ hr/$3600$ s $= 90000/3600 = 25$ m/s.'
          },
          {
            question: 'If fabric costs \\$8 per yard, what is the cost per foot? (1 yard = 3 feet)',
            options: ['\\$2.67', '\\$3', '\\$24', '\\$8'],
            correctAnswer: 0,
            explanation: '$\\$8$/yd $\\times$ $1$ yd/$3$ ft $= \\$8/3 ≈ \\$2.67$ per foot.'
          }
        ]
      }
    },
    {
      id: 'rp4-text2',
      type: 'text' as const,
      content: `### Conversions with Rates

When converting rates, both the numerator and denominator units may change.

### Worked Example 3

**A factory produces 480 widgets per 8-hour shift. Express this in widgets per minute.**

| Step | Work |
|------|------|
| Per hour | $480 ÷ 8 = 60$ widgets/hr |
| Per minute | $60 ÷ 60 = 1$ widget/min |

### Worked Example 4

**A density is given as 2.7 g/cm³. Convert to kg/m³. (1 kg = 1000 g, 1 m = 100 cm)**

| Step | Work |
|------|------|
| Grams → kg | $÷ 1000$ |
| cm³ → m³ | $÷ (100)^3 = ÷ 1{,}000{,}000$ |
| Combined | $2.7 × \\frac{1{,}000{,}000}{1{,}000} = 2{,}700$ kg/m³ |

The numerator and denominator conversions partially cancel — a common SAT shortcut.

### Conversion Chain Template

$$\\text{Start} × \\frac{\\text{new unit}}{\\text{old unit}} × \\frac{\\text{new unit}}{\\text{old unit}} = \\text{Result}$$

Write every step with units. If units don't cancel correctly, something is flipped.`
    },
    {
      id: 'rp4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Harder Conversions** 🎯',
      exercise: {
        questions: [
          {
            question: 'A pipe fills a pool at 15 liters per minute. How many liters per hour is that?',
            options: ['$900$', '$0.25$', '$150$', '$9{,}000$'],
            correctAnswer: 0,
            explanation: '$15 × 60 = 900$ liters per hour.'
          },
          {
            question: 'A wall is 200 square feet. How many square inches is that? (1 ft = 12 in)',
            options: ['$28{,}800$', '$2{,}400$', '$14{,}400$', '$1{,}200$'],
            correctAnswer: 0,
            explanation: '$200 × 12^2 = 200 × 144 = 28{,}800$ square inches.'
          },
          {
            question: 'Light travels $3 × 10^8$ m/s. How many km does it travel in 1 minute?',
            options: ['$1.8 × 10^7$ km', '$3 × 10^5$ km', '$1.8 × 10^{10}$ km', '$5 × 10^6$ km'],
            correctAnswer: 0,
            explanation: '$3 × 10^8$ m/s $× 60$ s $= 1.8 × 10^{10}$ m. Convert: $÷ 1000 = 1.8 × 10^7$ km.'
          }
        ]
      }
    },
    {
      id: 'rp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which Conversion Factor?** 🔍\n\nPick the correct factor to go from the starting unit to the target unit.',
      exercise: {
        dropdowns: [
          { label: 'Miles → feet', options: ['× 5,280', '÷ 5,280', '× 1,760', '÷ 1,760'] },
          { label: 'Hours → seconds', options: ['× 3,600', '÷ 3,600', '× 60', '÷ 60'] },
          { label: 'Square feet → square yards', options: ['÷ 9', '÷ 3', '× 9', '× 3'] },
          { label: 'kg/m³ → g/cm³', options: ['÷ 1,000', '× 1,000', '÷ 1,000,000', '× 1,000,000'] }
        ],
        correctAnswers: ['× 5,280', '× 3,600', '÷ 9', '÷ 1,000'],
        hint1: '1 mile = 5,280 feet — bigger unit to smaller, so multiply.',
        hint2: '1 hour = 3,600 seconds (60 min × 60 sec).',
        hint3: '$1 \\text{ yd}^2 = (3 \\text{ ft})^2 = 9 \\text{ ft}^2$, so divide by 9.',
        explanation: 'Miles to feet: multiply by 5,280. Hours to seconds: $60 × 60 = 3{,}600$. Square feet to square yards: divide by $3^2 = 9$. kg/m³ to g/cm³: divide by 1,000.'
      }
    },
    {
      id: 'rp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Situation | Key Idea |
|-----------|----------|
| Single unit | Multiply by conversion fraction |
| Rate (two units) | Convert numerator AND denominator |
| Area units | Square the linear factor: ft² → yd² ÷ 9 |
| Volume units | Cube the linear factor: ft³ → yd³ ÷ 27 |

- Write units at every step — if they don't cancel, something is wrong
- SAT always provides conversion factors; focus on the **method**
- Going from bigger to smaller units → multiply; smaller to bigger → divide
- For area/volume: square or cube the conversion factor`
    }
  ]
};
