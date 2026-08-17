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
- **"From" questions**: selected from the sophomores, P(female) = 150/250 — the named group's total is the denominator

### Association vs. Independence
Two variables are **independent** if knowing one doesn't change the probability of the other.
- If the female rate among sophomores equals the female rate overall, the data show no associatiot
- If those probabilities differ, there's an association`
    },
    {
      id: 'psd3-q1',
      type: 'quiz' as const,
      question: 'Using the table: 120 male freshmen, 100 male sophomores, 130 female freshmen, 150 female sophomores (500 total). If a student is selected at random from the females, what is the probability the student is a freshman?',
      options: [
        '120/500',
        '130/500',
        '130/280',
        '250/500'
      ],
      correctAnswer: 2,
      explanation: '"From the females" restricts you to the Female row (total 280). Female freshmen = 130, so 130/280 = 13/28.'
    },
    {
      id: 'psd3-text2',
      type: 'text' as const,
      content: `## Deep Dive: Navigating Two-Way Tables

### Worked Example 1: Filling In a Table

| Step | Work |
|---|---|
| **Problem** | "200 employees: 120 full-time, 80 part-time. 90 have benefits; of those, 75 are full-time. Complete the table." |
| **Full-time + benefits** | $75$ |
| **Full-time, no benefits** | $120 - 75 = 45$ |
| **Part-time + benefits** | $90 - 75 = 15$ |
| **Part-time, no benefits** | $80 - 15 = 65$ |

| | Benefits | No Benefits | Total |
|---|---|---|---|
| Full-time | 75 | 45 | 120 |
| Part-time | 15 | 65 | 80 |
| Total | 90 | 110 | 200 |

### Worked Example 2: Testing for Independence

| Step | Work |
|---|---|
| **Question** | "Is having benefits independent of employment type?" |
| **Probability a random employee gets benefits** | $90/200 = 0.45$ |
| **…selected from the full-time employees** | $75/120 = 0.625$ |
| **Compare** | $0.45 \\neq 0.625$ → NOT independent |
| **Conclusion** | Full-time employees are more likely to have benefits → there IS an association. |

### Denominator Guide

| Question Phrasing | Denominator |
|---|---|
| "What fraction of ALL students...?" | Grand total |
| "What fraction of males...?" | Row total (Males) |
| "What fraction of freshmen...?" | Column total (Freshman) |
| "Among those who passed..." | Subtotal of those who passed |

### SAT Trap: Joint vs. Conditional

- **Joint**: P(male AND freshman) $= 120/500$ (out of everyone)
- **"From" questions**: selected from the males, P(freshman) $= 120/220$ (males only)`
    },
    {
      id: 'psd3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Two-Way Table Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'From the table: 75 full-time with benefits, 45 full-time without, 15 part-time with, 65 part-time without. If an employee is selected at random from those WITHOUT benefits, what is the probability the employee is part-time?',
            options: ['$65/110$', '$65/200$', '$65/80$', '$110/200$'],
            correctAnswer: 0,
            explanation: '"From those without benefits" restricts to the 110 without benefits. Part-time among them $= 65$, so $65/110$.'
          },
          {
            question: 'In a survey, 55% of ALL respondents are female, and 55% of those who voted Yes are female. What do the data suggest?',
            options: ['No association between gender and voting Yes', 'More females voted Yes', 'Gender and voting are strongly associated', 'We need more data'],
            correctAnswer: 0,
            explanation: 'The female rate among Yes-voters equals the female rate overall — knowing someone voted Yes tells you nothing about gender, so the data suggest no association.'
          },
          {
            question: 'A table shows 30 out of 50 seniors passed and 40 out of 100 juniors passed. Which class had a higher pass rate?',
            options: ['Seniors ($60\\%$ vs. $40\\%$)', 'Juniors', 'Same rate', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Senior rate: $30/50 = 60\\%$. Junior rate: $40/100 = 40\\%$. Seniors have a higher pass rate.'
          }
        ]
      }
    },
    {
      id: 'psd3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Pick the Right Denominator** — What goes in the denominator for each question?',
      exercise: {
        dropdowns: [
          '"What fraction of all students are male freshmen?" → [Grand total|Male total|Freshman total|Male freshman count]',
          '"Among females, what fraction are sophomores?" → [Female total|Grand total|Sophomore total|Female sophomore count]',
          'Selected from the sophomores, P(male) → [Sophomore total|Male total|Grand total|Male sophomore count]',
          '"What percent of the survey respondents chose Option A?" → [Grand total|Option A count|Other option totals|Number of questions]'
        ],
        correctAnswers: ['Grand total', 'Female total', 'Sophomore total', 'Grand total'],
        hint1: '"Of all students" = grand total in denominator.',
        hint2: '"Among females" = restrict to females = female total.',
        hint3: '"Given Sophomore" = restrict to Sophomore column.',
        explanation: '"All students" → grand total. "Among females" → female total. "Given Sophomore" → Sophomore total. "Of survey respondents" → grand total.'
      }
    },
    {
      id: 'psd3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary: Two-Way Tables

| Concept | Key Fact |
|---|---|
| Marginal probability | Uses the grand total as denominator |
| Conditional probability | Restricts to a row or column total |
| Joint probability | One specific cell ÷ grand total |
| Association check | Compare each group's rate — equal rates → no association |
| Filling in tables | Rows and columns must sum to their totals |

### SAT Strategy
- **Read the question word-for-word** to find the correct denominator.
- "Given that" or "among" = conditional → use a subtotal.
- "Of all" = marginal → use the grand total.

*Next: Statistics — mean, median, and standard deviation →*`
    }
  ]
};
