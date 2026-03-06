export const satProbSolvDataPart3Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd3-intro',
      type: 'text' as const,
      content: `# Two-Way Tables & Data Interpretation

**Part 3 of 7 — Reading Tables and Finding Probabilities**

### Two-Way Tables
These organize data by two categories. Example:

|  | Freshman | Sophomore | Total |
|---|---|---|---|
| Male | 120 | 100 | 220 |
| Female | 130 | 150 | 280 |
| Total | 250 | 250 | 500 |

### Conditional Probability from Tables
"What fraction of sophomores are female?"
- Look at the **Sophomore column**: 150 female out of 250 total = 150/250 = **3/5**

### "Given that" = Restrict to a Subgroup
"Given that a student is male, what is the probability they are a freshman?"
- Restrict to Male row: 120 freshman out of 220 male = 120/220 = **6/11**

### Marginal vs. Conditional
- **Marginal**: P(Female) = 280/500 — uses the grand total
- **Conditional**: P(Female | Sophomore) = 150/250 — uses a column/row total

### Association vs. Independence
Two variables are **independent** if knowing one doesn't change the probability of the other.
- If P(Female) = P(Female | Sophomore), gender and class year are independent
- If those probabilities differ, there's an association`
    },
    {
      id: 'psd3-q1',
      type: 'quiz' as const,
      question: 'Using the table: 120 male freshmen, 100 male sophomores, 130 female freshmen, 150 female sophomores (500 total). What is P(Freshman | Female)?',
      options: [
        '120/500',
        '130/500',
        '130/280',
        '250/500'
      ],
      correctAnswer: 2,
      explanation: '"Given Female" means restrict to the Female row (total 280). Female freshmen = 130. So P(Freshman | Female) = 130/280 = 13/28.'
    }
  ]
};
