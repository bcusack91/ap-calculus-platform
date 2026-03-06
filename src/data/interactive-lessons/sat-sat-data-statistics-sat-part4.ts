export const satDataStatsPart4Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds4-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 4 of 7 — Two-Way Tables**

### Reading Two-Way Tables

|  | Cat | Dog | Total |
|--|-----|-----|-------|
| **Male** | 30 | 50 | 80 |
| **Female** | 40 | 30 | 70 |
| **Total** | 70 | 80 | 150 |

### Types of Questions

**Marginal frequency**: What percent prefer dogs? $80/150 ≈ 53.3\\%$

**Joint frequency**: What percent are female AND prefer cats? $40/150 ≈ 26.7\\%$

**Conditional frequency**: Of those who prefer cats, what percent are female? $40/70 ≈ 57.1\\%$

### SAT Trap ⚠️

"What fraction of cat owners are female?" → $40/70$ (denominator = cat total)

vs.

"What fraction of females own cats?" → $40/70$ also... wait, here denominator = female total = $40/70$

WRONG! "Of females, what fraction own cats?" → $40/70$ is NOT right. Female total = 70, cat females = 40. So $40/70 ≈ 57.1\\%$.

The trick is identifying the correct denominator (row total, column total, or grand total).`
    },
    {
      id: 'ds4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Two-Way Tables** 🎯',
      exercise: {
        questions: [
          {
            question: 'Using the table (Male/Cat=30, Male/Dog=50, Female/Cat=40, Female/Dog=30): What percentage of males prefer cats?',
            options: ['$37.5\\%$', '$42.9\\%$', '$20\\%$', '$30\\%$'],
            correctAnswer: 0,
            explanation: 'Of males (total 80), 30 prefer cats: $30/80 = 37.5\\%$. The denominator is the male row total.'
          },
          {
            question: 'Using the same table, what is the probability that a randomly chosen person is male AND prefers dogs?',
            options: ['$1/3$', '$5/8$', '$1/2$', '$50/80$'],
            correctAnswer: 0,
            explanation: 'Joint probability = $50/150 = 1/3$. The denominator is the grand total.'
          },
          {
            question: 'Among dog owners, which gender is more represented?',
            options: ['Males ($50/80 = 62.5\\%$ of dog owners are male)', 'Females ($30/80 = 37.5\\%$)', 'Equal', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Of 80 dog owners, 50 are male (62.5%) and 30 are female (37.5%). Males dominate the dog preference.'
          }
        ]
      }
    },
    {
      id: 'ds4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **"Of all..."**: denominator = grand total
- **"Of [group]..."**: denominator = that group's total (row or column)
- Conditional: "Of those who ___" tells you the denominator
- Always identify the correct denominator before calculating`
    }
  ]
};
