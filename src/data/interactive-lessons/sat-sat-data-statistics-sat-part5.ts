export const satDataStatsPart5Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds5-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 5 of 7 — Probability, the SAT Way**

The digital SAT tests probability as **relative frequency** — a count divided
by a total, almost always read from a table or described in words. You will
NOT see formal notation like P(A|B) or unions/intersections on the test.

### Probability as a fraction

$$\\text{Probability} = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$$

Always between 0 (impossible) and 1 (certain).

### "NOT" questions (complements)

The probability an event does NOT happen is 1 minus the probability it does.

**Example:** If the probability a customer orders coffee is $\\frac{7}{20}$,
the probability a customer does NOT order coffee is $1 - \\frac{7}{20} = \\frac{13}{20}$.

### The SAT's favorite setup: "selected at random from…"

Most SAT probability questions give you a **two-way table** and ask about a
person "selected at random" — sometimes from everyone, sometimes from just
one row or column. The entire skill is choosing the right denominator.`
    },
    {
      id: 'ds5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Probability** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bag has 5 red, 3 blue, and 2 green marbles. One marble is drawn at random. What is the probability it is blue or green?',
            options: ['$1/2$', '$3/10$', '$2/10$', '$5/10$'],
            correctAnswer: 0,
            explanation: 'Blue and green together: $3 + 2 = 5$ marbles out of 10, so $\\frac{5}{10} = \\frac{1}{2}$.'
          },
          {
            question: 'A survey found 12 of 40 students bike to school. If a student is selected at random, what is the probability the student bikes?',
            options: ['$3/10$', '$12/28$', '$1/12$', '$7/10$'],
            correctAnswer: 0,
            explanation: '$\\frac{12}{40} = \\frac{3}{10}$ — favorable over total.'
          },
          {
            question: 'The probability it rains tomorrow is $0.3$. What is the probability it does NOT rain?',
            options: ['$0.7$', '$0.3$', '$1.3$', '$-0.3$'],
            correctAnswer: 0,
            explanation: 'The two possibilities sum to 1: $1 - 0.3 = 0.7$.'
          }
        ]
      }
    },
    {
      id: 'ds5-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Selected From Everyone

**The table shows 200 students by grade and lunch choice.**

| | Pizza | Salad | Total |
|---|---|---|---|
| Juniors | 60 | 30 | 90 |
| Seniors | 70 | 40 | 110 |
| Total | 130 | 70 | 200 |

**If a student is selected at random, what is the probability the student is
a junior who chose pizza?**

One cell over the grand total: $\\frac{60}{200} = \\frac{3}{10}$.

### Worked Example 2 — Selected From One Group (the key SAT move)

**If a student is selected at random from those who chose salad, what is the
probability the student is a senior?**

The words "from those who chose salad" shrink your world to the Salad
column: $\\frac{40}{70} = \\frac{4}{7}$.

**Rule:** the group named after "from" becomes your denominator. This is how
the SAT asks conditional probability — in words, never with notation.

### Worked Example 3 — Comparing Groups

**Which group was more likely to choose pizza?**

Juniors: $\\frac{60}{90} \\approx 67\\%$. Seniors: $\\frac{70}{110} \\approx 64\\%$.
Juniors were slightly more likely. Compare each group's RATE, never the raw counts.`
    },
    {
      id: 'ds5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Table Probability** 🎯',
      exercise: {
        questions: [
          {
            question: 'A table shows 50 employees: 20 work remote (12 satisfied, 8 not) and 30 work on-site (18 satisfied, 12 not). If an employee is selected at random from the remote workers, what is the probability the employee is satisfied?',
            options: ['$3/5$', '$12/50$', '$12/30$', '$2/5$'],
            correctAnswer: 0,
            explanation: '"From the remote workers" makes 20 the denominator: $\\frac{12}{20} = \\frac{3}{5}$.'
          },
          {
            question: 'Using the same table, if an employee is selected at random from ALL 50, what is the probability the employee works on-site AND is satisfied?',
            options: ['$9/25$', '$18/30$', '$3/5$', '$18/20$'],
            correctAnswer: 0,
            explanation: 'One cell (18) over the grand total (50): $\\frac{18}{50} = \\frac{9}{25}$.'
          },
          {
            question: 'A jar holds 4 red and 6 blue marbles. Which change would make drawing red MORE likely than drawing blue?',
            options: ['Adding 5 red marbles', 'Adding 2 red marbles', 'Removing 2 red marbles', 'Adding 3 blue marbles'],
            correctAnswer: 0,
            explanation: 'Adding 5 red gives 9 red vs 6 blue — red is now more likely. Adding only 2 red gives 6 vs 6 (equal).'
          }
        ]
      }
    },
    {
      id: 'ds5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the Right Denominator** 🔍\n\nFor each question about a school survey table, pick the correct denominator.',
      exercise: {
        dropdowns: [
          { label: '"Selected at random from all students surveyed"', options: ['The grand total', 'The row total', 'The column total', 'One cell'] },
          { label: '"Selected at random from the sophomores"', options: ['The sophomore row total', 'The grand total', 'The largest cell', 'The senior row total'] },
          { label: '"Selected at random from those who answered Yes"', options: ['The Yes column total', 'The grand total', 'The No column total', 'One cell'] },
          { label: '"Probability the student is a junior AND answered No"', options: ['The grand total (with the junior-No cell on top)', 'The junior row total', 'The No column total', 'Cannot be found from a table'] }
        ],
        correctAnswers: ['The grand total', 'The sophomore row total', 'The Yes column total', 'The grand total (with the junior-No cell on top)'],
        hint1: 'No restriction mentioned → whole table.',
        hint2: '"From the sophomores" → only that row exists now.',
        hint3: '"From those who answered Yes" → only that column. "A and B" from everyone → cell over grand total.',
        explanation: 'The phrase after "from" names your denominator group. "A and B" questions with no restriction use one cell over the grand total.'
      }
    },
    {
      id: 'ds5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Question wording | Denominator | Numerator |
|------|---------|-------------|
| "…selected from ALL participants" | Grand total | The cell(s) asked about |
| "…selected from [one group]" | That group's row/column total | The cell asked about |
| "…is in group A AND said Yes" | Grand total | The single A-Yes cell |
| "…does NOT…" | Same as the positive version | Total minus the positive count |
| "Which group was MORE likely…" | Each group separately | Compare the two rates |

- The SAT asks probability **in words from tables** — no P(A|B), no union/intersection symbols
- The word "from" is the whole game: it names your denominator
- Compare groups by their rates (fractions), never raw counts`
    }
  ]
};
