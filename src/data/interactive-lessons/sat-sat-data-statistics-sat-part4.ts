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
| Selected from sports players: in the club? | "From" the sports group | $30/55 ≈ 54.5\\%$ |
| Selected from club members: plays sports? | "From" the club group | $30/80 = 37.5\\%$ |`
    },
    {
      id: 'ds4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Two-Way Tables** 🎯\n\n|  | Cat | Dog |\n| --- | --- | --- |\n| Male | 30 | 50 |\n| Female | 40 | 30 |',
      exercise: {
        questions: [
          {
            question: 'Using the table above, what percentage of males prefer cats?',
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

Two variables show **no association** when each group has the SAME rate — e.g., juniors and seniors choosing pizza at equal percentages. The SAT asks this as "do the data support an association?", always comparing group rates in words.

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
            question: 'In a survey, 200 students were asked about music preference. What fraction of pop fans are male?\n\n|  | Rock | Pop |\n| --- | --- | --- |\n| Male | 60 | 40 |\n| Female | 30 | 70 |',
            options: ['$4/11$', '$40/200$', '$40/100$', '$4/20$'],
            correctAnswer: 0,
            explanation: 'Total pop fans = $40 + 70 = 110$. Males who like pop = 40. Fraction = $40/110 = 4/11$.'
          },
          {
            question: 'Using the sports/club table below, what percentage of non-athletes are in a club?\n\n|  | Club | No Club |\n| --- | --- | --- |\n| Sports | 30 | 25 |\n| No Sports | 50 | 15 |',
            options: ['$76.9\\%$', '$62.5\\%$', '$41.7\\%$', '$50\\%$'],
            correctAnswer: 0,
            explanation: 'Non-athletes: $65$ total. In club: $50$. $50/65 ≈ 76.9\\%$.'
          },
          {
            question: 'A table shows 40 of 100 surveyed teens and 20 of 50 surveyed adults own a bike. Do the data suggest an association between age group and bike ownership?',
            options: ['No — both groups own bikes at the same 40% rate', 'Yes — teens are twice as likely to own bikes', 'Yes — more teens than adults own bikes', 'Cannot be determined from a table'],
            correctAnswer: 0,
            explanation: 'Compare RATES, not counts: teens 40/100 = 40%, adults 20/50 = 40%. Equal rates → the data do not suggest an association.'
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
          { label: '"Is there an association between gender and pet preference?"', options: ['Compare each group\'s preference rate', 'Look at grand total only', 'Check if totals are equal', 'Compare row totals'] }
        ],
        correctAnswers: ['Grand total', 'Cat column total', 'Female row total', 'Compare each group\'s preference rate'],
        hint1: '"Of ALL respondents" → grand total.',
        hint2: '"Of those who prefer cats" tells you the group to restrict to → cat column total.',
        hint3: 'To check for association, compare each group\'s rate — different rates suggest an association.',
        explanation: '"All respondents" → grand total. "Of cat owners" → cat total. "Of females" → female total. Association → compare each group\'s rate.'
      }
    },
    {
      id: 'ds4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Question Type | Denominator | Example |
|--------------|-------------|---------|
| "Of all..." | Grand total | male-and-dog cell over $150$ |
| "Of [group]..." | Group total | cats among males: $30/80$ |
| "…AND…" (no restriction) | Grand total | one cell over everyone |
| "…from those who…" | That group's total | the SAT's conditional wording |

| Skill | How-to |
|-------|--------|
| Fill in table | Use row/column totals to find missing cells |
| Check for association | Compare each group's rate — equal rates → no association |
| Convert to relative freq. | Divide each cell by grand total |

- The SAT's #1 trap in two-way tables is using the **wrong denominator**
- Always re-read the question to identify the "of" phrase — that gives you the denominator`
    }
  ]
};
