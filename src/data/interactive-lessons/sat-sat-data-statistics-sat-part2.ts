export const satDataStatsPart2Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds2-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 2 of 7 — Standard Deviation & Data Spread**

### Standard Deviation (σ)

Measures how spread out values are from the mean. You won't calculate it on the SAT, but you must understand it.

- **Low SD**: values are close to the mean (consistent data)
- **High SD**: values are far from the mean (varied data)
- **SD = 0**: all values are the same

### Comparing Standard Deviations

Data A: $\\{48, 49, 50, 51, 52\\}$ → low SD (clustered near 50)

Data B: $\\{10, 30, 50, 70, 90\\}$ → high SD (spread out)

Both have mean 50, but B has a much larger standard deviation.

### Effect of Transformations

| Transformation | Mean | SD |
|---------------|------|-----|
| Add $k$ to all values | Mean $+ k$ | **Same** |
| Multiply all by $k$ | Mean $\\times k$ | SD $\\times |k|$ |

Adding a constant shifts all data equally — spread doesn't change.
Multiplying stretches the data — spread increases.`
    },
    {
      id: 'ds2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Standard Deviation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which data set has the largest standard deviation?',
            options: ['$\\{1, 50, 99\\}$', '$\\{48, 50, 52\\}$', '$\\{50, 50, 50\\}$', '$\\{40, 50, 60\\}$'],
            correctAnswer: 0,
            explanation: '$\\{1, 50, 99\\}$ has values most spread from the mean (50). The differences are ±49, much larger than the other sets.'
          },
          {
            question: 'A data set has mean 30 and SD 5. If 10 is added to every value, the new SD is:',
            options: ['$5$', '$15$', '$50$', '$35$'],
            correctAnswer: 0,
            explanation: 'Adding a constant shifts all values equally — the spread doesn\'t change. New mean = 40, but SD stays 5.'
          },
          {
            question: 'A data set has mean 20 and SD 4. If every value is doubled, the new SD is:',
            options: ['$8$', '$4$', '$16$', '$24$'],
            correctAnswer: 0,
            explanation: 'Multiplying by $k$ multiplies the SD by $|k|$. New SD $= 4 \\times 2 = 8$.'
          }
        ]
      }
    },
    {
      id: 'ds2-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Comparing Spread Visually

**Two dot plots both have mean 50:**
- Plot A: values at 48, 49, 50, 51, 52
- Plot B: values at 30, 40, 50, 60, 70

| Measure | Plot A | Plot B |
|---------|--------|--------|
| Range | 4 | 40 |
| SD | Low | High |

Plot B has values much farther from the mean → larger SD.

### Worked Example 2 — Transformation Chain

**A dataset has mean 40 and SD 6. Every value is tripled, then 5 is subtracted. Find the new mean and SD.**

| Transformation | Mean | SD |
|---------------|------|-----|
| Original | 40 | 6 |
| Multiply by 3 | $40 \\times 3 = 120$ | $6 \\times 3 = 18$ |
| Subtract 5 | $120 - 5 = 115$ | $18$ (unchanged) |

Adding/subtracting does NOT change SD. Multiplying DOES.

### Percentiles and Quartiles

| Measure | Meaning |
|---------|---------|
| $Q_1$ (25th percentile) | 25% of data below |
| $Q_2$ (median, 50th) | 50% of data below |
| $Q_3$ (75th percentile) | 75% of data below |
| IQR = $Q_3 - Q_1$ | Spread of the middle 50% |

A value is an **outlier** if it's more than $1.5 \\times \\text{IQR}$ beyond $Q_1$ or $Q_3$.`
    },
    {
      id: 'ds2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Spread & Transformations** 🎯',
      exercise: {
        questions: [
          {
            question: 'Dataset has mean 100 and SD 15. Every value is divided by 5. New SD?',
            options: ['$3$', '$15$', '$75$', '$20$'],
            correctAnswer: 0,
            explanation: 'Dividing by 5 = multiplying by $1/5$. SD $= 15 \\times (1/5) = 3$.'
          },
          {
            question: 'If $Q_1 = 20$ and $Q_3 = 50$, what is the IQR?',
            options: ['$30$', '$35$', '$70$', '$50$'],
            correctAnswer: 0,
            explanation: 'IQR $= Q_3 - Q_1 = 50 - 20 = 30$.'
          },
          {
            question: 'Two datasets have the same range but different SDs. How is this possible?',
            options: ['One has values clustered near the mean; the other is spread evenly', 'This is impossible', 'They must have different means', 'Range and SD always match'],
            correctAnswer: 0,
            explanation: 'Range only uses the max and min. SD uses ALL values. Clustering near the mean → low SD even with a wide range.'
          }
        ]
      }
    },
    {
      id: 'ds2-dropdown',
      type: 'dropdown-select' as const,
      content: '**What Happens to the SD?** 🔍\n\nDetermine the effect of each transformation on standard deviation.',
      exercise: {
        dropdowns: [
          { label: 'Add 100 to every value', options: ['SD stays the same', 'SD increases by 100', 'SD doubles', 'SD becomes 0'] },
          { label: 'Multiply every value by −2', options: ['SD is multiplied by 2', 'SD is multiplied by −2', 'SD stays the same', 'SD becomes negative'] },
          { label: 'Replace every value with the mean', options: ['SD becomes 0', 'SD stays the same', 'SD increases', 'SD doubles'] },
          { label: 'Remove the value closest to the mean', options: ['SD increases (slightly)', 'SD decreases', 'SD stays the same', 'SD becomes 0'] }
        ],
        correctAnswers: ['SD stays the same', 'SD is multiplied by 2', 'SD becomes 0', 'SD increases (slightly)'],
        hint1: 'Adding a constant shifts all values equally — distances from mean don\'t change.',
        hint2: 'Multiplying by $k$ multiplies SD by $|k|$. The absolute value removes the sign.',
        hint3: 'If all values are identical, every distance from the mean is 0, so SD = 0.',
        explanation: 'Adding → same spread → same SD. Multiplying by $-2$: SD × $|-2|$ = SD × 2. All values = mean → zero spread → SD = 0. Removing the most "average" point leaves the more extreme values, slightly increasing SD.'
      }
    },
    {
      id: 'ds2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Key Rule |
|---------|----------|
| SD measures | Spread / distance from mean |
| Add constant $k$ | Mean + $k$; **SD unchanged** |
| Multiply by $k$ | Mean × $k$; **SD × $|k|$** |
| SD = 0 | All values identical |
| IQR | $Q_3 - Q_1$; spread of middle 50% |
| Outlier threshold | Beyond $Q_1 - 1.5(\\text{IQR})$ or $Q_3 + 1.5(\\text{IQR})$ |

- SD is ALWAYS ≥ 0 (it can never be negative)
- On the SAT, you compare SDs visually — more clustered = lower SD`
    }
  ]
};
