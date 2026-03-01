export const satDataStatsPart3Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-ds3-intro',
      type: 'text' as const,
      content: `
# 📈 Reading Tables & Two-Way Tables

**Part 3 of 7 — Extracting Data**

The SAT loves **two-way frequency tables**. They organize data by two categorical variables.

**Example:**

|  | Prefer Dogs | Prefer Cats | Total |
|--|------------|------------|-------|
| **Boys** | 45 | 30 | 75 |
| **Girls** | 35 | 40 | 75 |
| **Total** | 80 | 70 | 150 |

Key questions:
- "What fraction of students prefer dogs?" → $\\frac{80}{150}$ (use grand total)
- "What fraction of **boys** prefer dogs?" → $\\frac{45}{75}$ (use row total — conditional!)
- "Of those who prefer cats, what fraction are girls?" → $\\frac{40}{70}$ (use column total)

**Critical distinction:** "Of ALL students" uses the **grand total**. "Of boys" or "given that..." uses a **row/column total**.
      `
    },
    {
      id: 'sat-ds3-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Using the table above: What percentage of girls prefer cats? (Rounded)',
            options: [
              '27%',
              '40%',
              '53%',
              '57%'
            ],
            correctAnswer: 2,
            explanation: 'Of girls: $40/75 \\approx 0.533 = 53\\%$. The denominator is 75 (total girls), NOT 70 (cat lovers) or 150 (everyone).'
          }
        ]
      }
    },
    {
      id: 'sat-ds3-probability',
      type: 'text' as const,
      content: `
**Relative Frequency and Conditional Probability**

Two-way tables connect to probability:

**Marginal probability** — uses totals from the margin:
$$P(\\text{prefers dogs}) = \\frac{80}{150}$$

**Joint probability** — uses a specific cell:
$$P(\\text{boy AND prefers dogs}) = \\frac{45}{150}$$

**Conditional probability** — "given that..." restricts the denominator:
$$P(\\text{prefers dogs} \\mid \\text{boy}) = \\frac{45}{75}$$

---

**SAT Tip:** Words like "given that," "among those who," or "of the students who" signal **conditional probability**. The denominator is NOT the grand total.
      `
    },
    {
      id: 'sat-ds3-practice',
      type: 'input-boxes' as const,
      content: `
**Use this table.** 🧮

|  | Pass | Fail | Total |
|--|------|------|-------|
| **Studied** | 72 | 8 | 80 |
| **Didn't Study** | 12 | 8 | 20 |
| **Total** | 84 | 16 | 100 |

1) What percentage of ALL students passed?

2) What percentage of students who studied passed?

3) What percentage of those who failed had NOT studied?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['84', '90', '50'],
        hint1: '$84/100 = 84\\%$.',
        hint2: 'Restrict to "studied" row: $72/80$.',
        hint3: 'Restrict to "fail" column: $8/16$.',
        explanation: '1) $84/100 = 84\\%$. 2) $72/80 = 90\\%$. 3) $8/16 = 50\\%$. The denominator changes depending on which group you are looking at.'
      }
    },
    {
      id: 'sat-ds3-shapes',
      type: 'text' as const,
      content: `
**Histograms and Distribution Shape**

**Histograms** show numerical data in intervals. The shape matters:

| Shape | Description | Mean vs Median |
|-------|------------|---------------|
| Symmetric | Mirror image | Mean ≈ Median |
| Right-skewed | Tail to the right | Mean > Median |
| Left-skewed | Tail to the left | Mean < Median |

**Key rule:** The mean is pulled toward the tail. In a right-skewed distribution, the tail extends right, pulling the mean above the median.

**Bar charts** vs **histograms:** Bar charts are for categories (bars don't touch). Histograms are for continuous data (bars touch, x-axis shows intervals).
      `
    },
    {
      id: 'sat-ds3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A histogram of home prices is strongly skewed right. Which must be true?',
            options: [
              'Mean < Median',
              'Mean = Median',
              'Mean > Median',
              'Mode > Mean'
            ],
            correctAnswer: 2,
            explanation: 'Right-skewed means the tail extends right (toward expensive homes). The mean is pulled toward that tail, so mean > median.'
          },
          {
            question: 'A survey of 200 people: 120 adults, 80 teens. 90 adults and 50 teens exercise regularly. What fraction of regular exercisers are teens?',
            options: [
              '$50/80$',
              '$50/140$',
              '$50/200$',
              '$80/200$'
            ],
            correctAnswer: 1,
            explanation: 'Total exercisers = $90 + 50 = 140$. Of those, 50 are teens. Fraction = $50/140 = 5/14$.'
          }
        ]
      }
    }
  ]
}
