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

### Fractions of One Group
"What fraction of sophomores are female?"
- Look at the **Sophomore column**: 150 female out of 250 total = 150/250 = **3/5**

### "Selected From" = Restrict to a Subgroup
"If a student is selected at random from the males, what is the probability the student is a freshman?"
- Restrict to the Male row: 120 freshmen out of 220 males = 120/220 = **6/11**

### Everyone vs. One Group
- **Selected from everyone**: the probability of a female is 280/500 — uses the grand total
- **Selected from the sophomores**: the probability of a female is 150/250 — the named group's total is the denominator

### Is There an Association?
Compare each group's rate, in words.
- If freshmen and sophomores are female at the same rate, the data show no association between class and gender
- If the rates differ, the data suggest an association
- Here: freshmen are $130/250 = 52\\%$ female and sophomores are $150/250 = 60\\%$ female, so the data suggest an association`
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

### Worked Example 2: Checking for an Association

| Step | Work |
|---|---|
| **Question** | "Do the data suggest an association between employment type and having benefits?" |
| **Rate among full-time employees** | $75/120 = 62.5\\%$ have benefits |
| **Rate among part-time employees** | $15/80 = 18.75\\%$ have benefits |
| **Compare** | $62.5\\%$ vs. $18.75\\%$ — very different rates |
| **Conclusion** | Full-time employees are more likely to have benefits → the data suggest an association. |

### Denominator Guide

| Question Phrasing | Denominator |
|---|---|
| "What fraction of ALL students...?" | Grand total |
| "What fraction of males...?" | Row total (Males) |
| "What fraction of freshmen...?" | Column total (Freshman) |
| "Among those who passed..." | Subtotal of those who passed |

### SAT Trap: Joint vs. Conditional

- **Selected from everyone**: male AND freshman $= 120/500$ (out of everyone)
- **Selected from the males**: freshman $= 120/220$ (males only)`
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
            options: ['No association between gender and voting Yes', 'Females were more likely than males to vote Yes', 'A strong association between gender and voting Yes', 'Males were more likely than females to vote Yes'],
            correctAnswer: 0,
            explanation: 'The female rate among Yes-voters equals the female rate overall — knowing someone voted Yes tells you nothing about gender, so the data suggest no association.'
          },
          {
            question: 'A table shows 30 out of 50 seniors passed and 40 out of 100 juniors passed. Which class had a higher pass rate?',
            options: ['Seniors', 'Juniors', 'The rates are equal', 'It cannot be determined'],
            correctAnswer: 0,
            explanation: 'Senior rate: $30/50 = 60\\%$. Junior rate: $40/100 = 40\\%$. Seniors have a higher pass rate, even though more juniors passed. Compare rates, not counts.'
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
          'Selected from the sophomores, probability of a male → [Sophomore total|Male total|Grand total|Male sophomore count]',
          '"What percent of the survey respondents chose Option A?" → [Grand total|Option A count|Other option totals|Number of questions]'
        ],
        correctAnswers: ['Grand total', 'Female total', 'Sophomore total', 'Grand total'],
        hint1: '"Of all students" = grand total in denominator.',
        hint2: '"Among females" = restrict to females = female total.',
        hint3: '"From the sophomores" = restrict to the Sophomore column.',
        explanation: '"All students" → grand total. "Among females" → female total. "From the sophomores" → Sophomore total. "Of survey respondents" → grand total.'
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
- "Selected from" or "among" a group → use that group's subtotal.
- "Of all" = marginal → use the grand total.

*Next: Statistics — mean, median, and standard deviation →*`
    }
  ]
};
