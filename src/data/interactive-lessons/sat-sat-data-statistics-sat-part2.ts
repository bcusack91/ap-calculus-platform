export const satDataStatsPart2Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-ds2-intro',
      type: 'text' as const,
      content: `
# 📏 Spread & Variability

**Part 2 of 7 — Range, IQR, and Standard Deviation**

Central tendency tells you the center — **spread** tells you how far data extends from that center. The SAT tests three measures:

| Measure | Formula | Resistant to Outliers? |
|---------|---------|----------------------|
| **Range** | Max − Min | ❌ No |
| **IQR** | $Q_3 - Q_1$ | ✅ Yes |
| **Standard Deviation** | $\\sigma = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n}}$ | ❌ No |

**Key insight:** The SAT rarely asks you to *calculate* standard deviation. It asks you to **compare** or **interpret** it.
      `
    },
    {
      id: 'sat-ds2-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Set A: {10, 10, 10, 10, 10}. Set B: {2, 6, 10, 14, 18}. Both have mean 10. Which has greater standard deviation?',
            options: [
              'Set A',
              'Set B',
              'They are equal',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Set A has zero spread — every value equals the mean, so $\\sigma = 0$. Set B has values spread from 2 to 18. Greater spread = greater standard deviation.'
          }
        ]
      }
    },
    {
      id: 'sat-ds2-quartiles',
      type: 'text' as const,
      content: `
**Quartiles and IQR — Step by Step**

**Quartiles** divide sorted data into four equal parts:
- $Q_1$ (25th percentile) — median of the lower half
- $Q_2$ (50th percentile) — the overall median
- $Q_3$ (75th percentile) — median of the upper half

**Example:** Data: 2, 4, 5, 7, 8, 10, 12, 15, 18

1. Median ($Q_2$) = 8 (5th of 9 values)
2. Lower half: 2, 4, 5, 7 → $Q_1 = \\frac{4+5}{2} = 4.5$
3. Upper half: 10, 12, 15, 18 → $Q_3 = \\frac{12+15}{2} = 13.5$
4. **IQR** = $Q_3 - Q_1 = 13.5 - 4.5 = 9$

---

**SAT Tip:** An outlier is formally any value more than $1.5 \\times \\text{IQR}$ below $Q_1$ or above $Q_3$.
      `
    },
    {
      id: 'sat-ds2-practice',
      type: 'input-boxes' as const,
      content: `
**Calculate the following.** 🧮

1) Find the range of: 3, 8, 15, 22, 7, 11

2) Data: 1, 3, 5, 7, 9, 11, 13. What is the IQR?

3) If every value in a data set is multiplied by 3, the standard deviation is multiplied by what factor?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['19', '8', '3'],
        hint1: 'Range = Max − Min = $22 - 3$.',
        hint2: '$Q_1$ = median of {1,3,5} = 3. $Q_3$ = median of {9,11,13} = 11.',
        hint3: 'Multiplying all data by constant $c$ multiplies SD by $|c|$.',
        explanation: '1) $22 - 3 = 19$. 2) IQR = $11 - 3 = 8$. 3) Scaling data by 3 scales SD by 3.'
      }
    },
    {
      id: 'sat-ds2-sd-concepts',
      type: 'text' as const,
      content: `
**Standard Deviation — What the SAT Actually Asks**

You won't compute SD by hand. Instead:

**Type 1: Compare spreads.** "Which set has greater SD?" → More spread from mean = higher SD.

**Type 2: Effect of changes.**
- Add/subtract a constant to every value → SD **unchanged**
- Multiply/divide every value by $c$ → SD multiplied by $|c|$
- Add an outlier → SD **increases**

**Type 3: 68-95-99.7 rule** (for normal distributions):
- ~68% within 1 SD of mean
- ~95% within 2 SDs
- ~99.7% within 3 SDs
      `
    },
    {
      id: 'sat-ds2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A teacher adds 10 bonus points to every score. How does this affect the standard deviation?',
            options: [
              'Increases by 10',
              'Decreases by 10',
              'Stays the same',
              'Doubles'
            ],
            correctAnswer: 2,
            explanation: 'Adding a constant shifts all values equally. The distances between values do not change, so SD stays the same.'
          },
          {
            question: 'In a normal distribution with mean 50 and SD 8, approximately what percentage of values fall between 42 and 58?',
            options: [
              '50%',
              '68%',
              '95%',
              '99.7%'
            ],
            correctAnswer: 1,
            explanation: '$42 = 50 - 8$ (1 SD below) and $58 = 50 + 8$ (1 SD above). By the 68-95-99.7 rule, about 68% of values fall within 1 SD.'
          }
        ]
      }
    }
  ]
}
