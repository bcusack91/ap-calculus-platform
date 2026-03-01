export const satDataStatsPart6Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-ds6-intro',
      type: 'text' as const,
      content: `
# 🔎 Study Design & Sampling

**Part 6 of 7 — Experiments, Surveys, and Bias**

| Study Type | Description | Shows Causation? |
|-----------|-----------|:---------------:|
| **Observational** | Observe without intervening | ❌ Only association |
| **Survey** | Ask questions | ❌ Only association |
| **Experiment** | Assign treatments, measure effects | ✅ Yes (if randomized) |

**The golden rule:** Only a **randomized controlled experiment** establishes cause and effect.

**SAT phrasing clues:**
- ✅ "suggests an **association** between X and Y" — always valid
- ❌ "**proves** X **causes** Y" — only valid for randomized experiments
      `
    },
    {
      id: 'sat-ds6-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers found breakfast eaters score higher on tests. No one was assigned to eat or skip. Valid conclusion?',
            options: [
              'Breakfast causes higher scores',
              'There is an association between breakfast and scores',
              'Skipping breakfast has no effect',
              'The study proves breakfast is beneficial'
            ],
            correctAnswer: 1,
            explanation: 'This is observational — no random assignment. We can only claim **association**, not causation. A confounders (more sleep, better health) could explain it.'
          }
        ]
      }
    },
    {
      id: 'sat-ds6-sampling',
      type: 'text' as const,
      content: `
**Sampling Methods & Bias**

| Method | How It Works | Quality |
|--------|-------------|---------|
| **Simple random sample** | Every member has equal chance | ✅ Gold standard |
| **Stratified** | Divide into groups, sample from each | ✅ Ensures representation |
| **Convenience** | Whoever is easiest to reach | ❌ Usually biased |
| **Voluntary response** | People choose to participate | ❌ Strong opinions overrepresented |

**Common biases:**
- **Selection bias:** Sample doesn't represent the population
- **Response bias:** Questions worded to influence answers
- **Undercoverage:** Some groups excluded from sampling

**Example:** Surveying only cafeteria students = convenience sampling with selection bias — students who bring lunch aren't included.
      `
    },
    {
      id: 'sat-ds6-practice',
      type: 'input-boxes' as const,
      content: `
**Answer each question.** 🧮

1) A population has 10,000 people. 500 are randomly selected. What is the sample size?

2) "Don't you agree taxes are too high?" is an example of what type of bias? Enter: 1 = Selection, 2 = Response, 3 = Undercoverage

3) A poll of 2,500 people has margin of error approximately $1/\\sqrt{n}$. What is the approximate margin of error as a percentage? (Round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['500', '2', '2'],
        hint1: 'Sample size = number selected, not population size.',
        hint2: '"Don\'t you agree..." is a leading question.',
        hint3: '$1/\\sqrt{2500} = 1/50 = 0.02 = 2\\%$.',
        explanation: '1) 500. 2) Response bias — leading wording. 3) $1/\\sqrt{2500} = 2\\%$.'
      }
    },
    {
      id: 'sat-ds6-margin',
      type: 'text' as const,
      content: `
**Margin of Error and Confidence**

Key facts for the SAT:
- **Larger sample** → smaller margin of error
- **To halve the margin of error:** quadruple the sample size (because margin ∝ $1/\\sqrt{n}$)
- A 95% confidence interval means: if we repeated this survey many times, ~95% of intervals would contain the true value

**SAT phrasing:** "We are 95% confident that between 54% and 62% of adults support the policy" means the sample proportion ± margin of error = the interval.
      `
    },
    {
      id: 'sat-ds6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A poll of 400 voters has margin of error 5%. To reduce it to 2.5%, how many voters should be polled?',
            options: [
              '800',
              '1200',
              '1600',
              '2000'
            ],
            correctAnswer: 2,
            explanation: 'Halving the margin requires quadrupling the sample: $400 \\times 4 = 1600$. Margin ∝ $1/\\sqrt{n}$.'
          },
          {
            question: 'To determine if a drug lowers blood pressure, which design best establishes causation?',
            options: [
              'Survey patients about their blood pressure',
              'Observe patients who choose the drug',
              'Randomly assign patients to drug vs. placebo',
              'Interview doctors about effectiveness'
            ],
            correctAnswer: 2,
            explanation: 'Only a randomized controlled experiment (random assignment to treatment vs. control) can establish causation.'
          }
        ]
      }
    }
  ]
}
