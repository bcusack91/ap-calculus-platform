export const satProbSolvDataPart6Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd6-intro',
      type: 'text' as const,
      content: `# Probability & Predictions

**Part 6 of 7 — SAT Probability Essentials**

The digital SAT keeps probability concrete: counts, tables, and proportions,
always in plain words. You will never see formal notation like P(A|B) or
union/intersection symbols on the test.

### Basic Probability
$$\\text{Probability} = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

### "NOT" Questions
The probability something does NOT happen is 1 minus the probability it does —
or just count the non-favorable outcomes directly.

**Example:** 4 red, 6 blue, 5 green marbles. P(not red) — count the 11
non-red marbles: $\\frac{11}{15}$.

### The Three SAT Probability Setups
1. **From a table**: "If a student is selected at random from those who…"
2. **From counts**: "A bag holds 3 red and 5 blue marbles…"
3. **From a survey**: "Based on the results, what proportion…"

### Predicting a Count ("how many would you expect")
$$\\text{Expected count} = \\text{Total} \\times \\text{proportion}$$

Example: 200 people surveyed, 35% prefer A → expect $200 \\times 0.35 = 70$
of the next 200 to prefer A.

### Relative Frequency
Just another word for proportion:
$$\\text{Relative frequency of A} = \\frac{\\text{count of A}}{\\text{total count}}$$`
    },
    {
      id: 'psd6-q1',
      type: 'quiz' as const,
      question: 'A bag has 4 red, 6 blue, and 5 green marbles. What is the probability of NOT drawing a red marble?',
      options: [
        '4/15',
        '11/15',
        '6/15',
        '2/3'
      ],
      correctAnswer: 1,
      explanation: 'Count the non-red marbles directly: 6 + 5 = 11 of the 15 marbles, so P(not red) = 11/15. (Same as 1 − 4/15.)'
    },
    {
      id: 'psd6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Table Probability — the SAT's Favorite Question

### Worked Example 1: One Cell Over the Grand Total

| | Passed | Did Not Pass | Total |
|---|---|---|---|
| Attended review | 32 | 8 | 40 |
| Skipped review | 18 | 22 | 40 |
| Total | 50 | 30 | 80 |

**"If a student is selected at random from all 80, what is the probability
the student attended the review AND passed?"**

One cell over the grand total: $\\frac{32}{80} = \\frac{2}{5}$.

### Worked Example 2: The "From" Rule (conditional, in words)

**"If a student is selected at random from those who SKIPPED the review,
what is the probability the student passed?"**

"From those who skipped" restricts you to that row: $\\frac{18}{40} = \\frac{9}{20}$.

**The word after "from" names your denominator.** This is exactly how the
SAT asks conditional probability — no notation, just words.

### Worked Example 3: Predicting a Count

**"In a random sample, 42% prefer Brand A. If 500 people are surveyed from
the same population, how many would you expect to prefer Brand A?"**

$500 \\times 0.42 = 210$ people.

### SAT Probability from Tables — the Full Playbook
1. **No restriction** ("from all participants"): cell ÷ grand total
2. **Restricted group** ("from the seniors" / "from those who said yes"):
   cell ÷ that row or column total
3. **"NOT"**: count the other cells, or use 1 minus`
    },
    {
      id: 'psd6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Table Probability Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A survey of 60 students: 25 juniors (15 have jobs, 10 do not) and 35 seniors (21 have jobs, 14 do not). If a student is selected at random from the seniors, what is the probability the student has a job?',
            options: ['$\\frac{3}{5}$', '$\\frac{21}{60}$', '$\\frac{21}{36}$', '$\\frac{36}{60}$'],
            correctAnswer: 0,
            explanation: '"From the seniors" makes 35 the denominator: $\\frac{21}{35} = \\frac{3}{5}$.'
          },
          {
            question: 'Using the same survey, if a student is selected at random from ALL 60 students, what is the probability the student is a junior who has a job?',
            options: ['$\\frac{1}{4}$', '$\\frac{15}{25}$', '$\\frac{3}{5}$', '$\\frac{15}{36}$'],
            correctAnswer: 0,
            explanation: 'One cell (15 juniors with jobs) over the grand total (60): $\\frac{15}{60} = \\frac{1}{4}$.'
          },
          {
            question: 'In a survey, 70% of respondents drink coffee, 40% drink tea, and 25% drink both. What percent drink neither coffee nor tea?',
            options: ['$15\\%$', '$10\\%$', '$25\\%$', '$30\\%$'],
            correctAnswer: 0,
            explanation: 'Coffee or tea (or both): 70 + 40 counts the 25% both-drinkers twice, so 70 + 40 − 25 = 85%. Neither: 100 − 85 = 15%.'
          }
        ]
      }
    },
    {
      id: 'psd6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Pick the Right Denominator** — Match each question to the correct setup.',
      exercise: {
        dropdowns: [
          '"Selected at random from all students in the table" → [Cell ÷ grand total|Cell ÷ row total|Row total ÷ column total|Always 1/2]',
          '"Selected at random from those who answered Yes" → [Cell ÷ Yes-column total|Cell ÷ grand total|Yes total ÷ grand total|Cell ÷ No-column total]',
          '"What is the probability the spinner does NOT land on red?" → [Non-red sections ÷ all sections|Red sections ÷ all sections|1 ÷ red sections|Red ÷ non-red]',
          '"58% of a sample supports the plan. How many of 300 residents would you expect to support it?" → [300 × 0.58|300 ÷ 0.58|0.58 ÷ 300|300 − 58]'
        ],
        correctAnswers: ['Cell ÷ grand total', 'Cell ÷ Yes-column total', 'Non-red sections ÷ all sections', '300 × 0.58'],
        hint1: 'No restriction → the whole table is your world.',
        hint2: '"From those who answered Yes" → only the Yes column exists now.',
        hint3: '"NOT" → count the other outcomes. Expected count → total × proportion.',
        explanation: 'Unrestricted → grand total. "From [group]" → that group\'s total. NOT → count the complement. "How many would you expect" → multiply the total by the proportion.'
      }
    },
    {
      id: 'psd6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary: Probability

| Question type | Setup | Key words |
|---|---|---|
| Basic | Favorable ÷ total | "probability of" |
| NOT | Count the other outcomes (or 1 minus) | "not", "does not" |
| Table, unrestricted | Cell ÷ grand total | "from all…" |
| Table, restricted | Cell ÷ row or column total | "from those who…" |
| Compare groups | Compute each group's rate | "more likely" |
| Predict a count | Total × proportion | "how many would you expect" |

- The word **"from"** names your denominator — that's the whole skill
- The SAT never uses P(A|B) or ∪/∩ symbols — everything is words and tables

*Next: Comprehensive review and mixed practice →*`
    }
  ]
};
