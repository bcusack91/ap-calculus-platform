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

"What fraction of cat owners are female?" → denominator = cat total = 70 → $40/70 ≈ 57.1\\%$

"What fraction of females own cats?" → denominator = female total = 70 → $40/70 ≈ 57.1\\%$

In this example they happen to give the same answer because both totals are 70, but in general they're different! The trick is identifying the correct denominator (row total, column total, or grand total).

---

### Worked Example 1 — Filling in a Two-Way Table

**120 students: 55 play sports, 80 are in clubs. 30 do both. Complete the table.**

| Step | Work |
|------|------|
| Sports AND clubs | 30 |
| Sports only | $55 - 30 = 25$ |
| Clubs only | $80 - 30 = 50$ |
| Neither | $120 - 25 - 30 - 50 = 15$ |

|  | In Club | Not in Club | Total |
|--|---------|-------------|-------|
| Sports | 30 | 25 | 55 |
| No Sports | 50 | 15 | 65 |
| Total | 80 | 40 | 120 |

### Worked Example 2 — Conditional vs. Joint

**From the table above:**

| Question | Type | Calculation |
|----------|------|-------------|
| P(sports AND club) | Joint | $30/120 = 25\\%$ |
| P(club \| sports) | Conditional | $30/55 ≈ 54.5\\%$ |
| P(sports \| club) | Conditional | $30/80 = 37.5\\%$ |`
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
      id: 'ds4-text2',
      type: 'text' as const,
      content: `### Independence in Two-Way Tables

Two events $A$ and $B$ are **independent** if $P(A|B) = P(A)$.

From the pet table: $P(\\text{cat}) = 70/150 ≈ 46.7\\%$. But $P(\\text{cat | male}) = 30/80 = 37.5\\%$. Since $37.5\\% \\neq 46.7\\%$, gender and pet preference are **not independent**.

### Worked Example 3 — Relative Frequency Table

Convert a two-way table to relative frequencies (divide everything by grand total):

|  | Cat | Dog | Total |
|--|-----|-----|-------|
| Male | $30/150 = 20\\%$ | $50/150 = 33.3\\%$ | $53.3\\%$ |
| Female | $26.7\\%$ | $20\\%$ | $46.7\\%$ |
| Total | $46.7\\%$ | $53.3\\%$ | $100\\%$ |

### Common SAT Denominator Guide

| Question asks | Denominator |
|--------------|-------------|
| "Of all survey respondents..." | Grand total |
| "Of those who prefer cats..." | Column total for cats |
| "Of the males surveyed..." | Row total for males |
| "What proportion of the total..." | Grand total |`
    },
    {
      id: 'ds4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Two-Way Tables** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a survey, 200 students were asked about music preference. 60 males like rock, 40 males like pop, 30 females like rock, 70 females like pop. What fraction of pop fans are male?',
            options: ['$4/11$', '$40/200$', '$40/100$', '$4/20$'],
            correctAnswer: 0,
            explanation: 'Total pop fans = $40 + 70 = 110$. Males who like pop = 40. Fraction = $40/110 = 4/11$.'
          },
          {
            question: 'Using the sports/club table (30 both, 25 sports-only, 50 club-only, 15 neither): What percentage of non-athletes are in a club?',
            options: ['$76.9\\%$', '$62.5\\%$', '$41.7\\%$', '$50\\%$'],
            correctAnswer: 0,
            explanation: 'Non-athletes: $65$ total. In club: $50$. $50/65 ≈ 76.9\\%$.'
          },
          {
            question: 'Event A and B are independent. $P(A) = 0.4$ and $P(B) = 0.5$. What is $P(A \\text{ and } B)$?',
            options: ['$0.20$', '$0.90$', '$0.45$', '$0.10$'],
            correctAnswer: 0,
            explanation: 'Independent → $P(A \\text{ and } B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.20$.'
          }
        ]
      }
    },
    {
      id: 'ds4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Pick the Right Denominator** 🔍\n\nWhat denominator do you use for each question?',
      exercise: {
        dropdowns: [
          { label: '"What percentage of all respondents prefer dogs?"', options: ['Grand total', 'Dog column total', 'Row total', 'Cannot determine'] },
          { label: '"Of those who prefer cats, what fraction are female?"', options: ['Cat column total', 'Grand total', 'Female row total', 'Dog column total'] },
          { label: '"What proportion of females prefer dogs?"', options: ['Female row total', 'Grand total', 'Dog column total', 'Male row total'] },
          { label: '"Is there an association between gender and pet preference?"', options: ['Compare conditional probabilities', 'Look at grand total only', 'Check if totals are equal', 'Compare row totals'] }
        ],
        correctAnswers: ['Grand total', 'Cat column total', 'Female row total', 'Compare conditional probabilities'],
        hint1: '"Of ALL respondents" → grand total.',
        hint2: '"Of those who prefer cats" tells you the group to restrict to → cat column total.',
        hint3: 'To check for association, see if $P(A|B) = P(A)$. If not, there\'s an association.',
        explanation: '"All respondents" → grand total. "Of cat owners" → cat total. "Of females" → female total. Association → compare conditional to marginal probabilities.'
      }
    },
    {
      id: 'ds4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Question Type | Denominator | Example |
|--------------|-------------|---------|
| "Of all..." | Grand total | $P(\\text{male and dog}) = 50/150$ |
| "Of [group]..." | Group total | $P(\\text{cat} | \\text{male}) = 30/80$ |
| Joint probability | Grand total | $P(A \\cap B)$ |
| Conditional probability | Condition total | $P(A|B) = P(A \\cap B) / P(B)$ |

| Skill | How-to |
|-------|--------|
| Fill in table | Use row/column totals to find missing cells |
| Check independence | Compare $P(A|B)$ to $P(A)$ — if equal, independent |
| Convert to relative freq. | Divide each cell by grand total |

- The SAT's #1 trap in two-way tables is using the **wrong denominator**
- Always re-read the question to identify the "of" phrase — that gives you the denominator`
    }
  ]
};
