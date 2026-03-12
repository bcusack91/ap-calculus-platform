export const actEnglishStratPart1Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es1-intro',
      type: 'text' as const,
      content: `
# 📝 ACT English Overview

**Part 1 of 7 — Format, Timing & Question Types**

The ACT English section tests your ability to revise and edit passages. Here's the snapshot:

| Detail | Value |
|--------|-------|
| Total questions | **75** |
| Time limit | **45 minutes** |
| Passages | **5** (15 questions each) |
| Time per question | **36 seconds** |

Questions fall into two broad categories:

1. **Usage / Mechanics** (~40 questions) — grammar, punctuation, sentence structure.
2. **Rhetorical Skills** (~35 questions) — strategy, organization, style.

Every question is **passage-based**: an underlined portion in the text is followed by answer choices that offer revisions (or "NO CHANGE").
      `
    },
    {
      id: 'act-es1-breakdown',
      type: 'text' as const,
      content: `
## Question-Type Breakdown

### Usage / Mechanics
- **Punctuation** (10–15 Qs) — commas, apostrophes, colons, semicolons, dashes.
- **Grammar & Usage** (12–15 Qs) — subject-verb agreement, pronoun case, verb tense.
- **Sentence Structure** (15–18 Qs) — fragments, run-ons, parallelism, modifiers.

### Rhetorical Skills
- **Strategy** (10–12 Qs) — adding/deleting sentences, purpose of a detail.
- **Organization** (10–12 Qs) — sentence/paragraph order, transitions.
- **Style** (10–12 Qs) — wordiness, tone, word choice.

**Key Insight:** About 55% of the section is mechanics (concrete rules you can learn) and 45% is rhetoric (judgment calls requiring context). Practicing both equally is critical.
      `
    },
    {
      id: 'act-es1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Format Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many passages are on the ACT English section, and how many questions accompany each passage?',
            options: [
              '4 passages, 18 questions each',
              '5 passages, 15 questions each',
              '6 passages, 12 questions each',
              '5 passages, 20 questions each'
            ],
            correctAnswer: 1,
            explanation: 'The ACT English section has 5 passages with 15 questions each, totalling 75 questions in 45 minutes.'
          },
          {
            question: 'Which category contains MORE questions on the ACT English section?',
            options: [
              'Rhetorical Skills (~35 Qs)',
              'Usage / Mechanics (~40 Qs)',
              'They are split evenly at 37–38 each',
              'It varies from test to test with no pattern'
            ],
            correctAnswer: 1,
            explanation: 'Usage / Mechanics accounts for roughly 40 of the 75 questions, slightly more than Rhetorical Skills (~35).'
          }
        ]
      }
    },
    {
      id: 'act-es1-scoring',
      type: 'text' as const,
      content: `
## Scoring & Why It Matters

- Your English score is reported on a **1–36 scale**.
- There is **no penalty for guessing** — always fill in an answer.
- English is often the **easiest section to improve** because the rules are finite and learnable.
- A strong English score can **raise your composite** significantly since it's one of the four sections averaged.

**Pro Tip:** Because questions follow passage order, you can pace yourself by knowing where you should be after each passage:

| After Passage | Question # | Elapsed Time Target |
|---------------|-----------|---------------------|
| 1 | 15 | ~9 min |
| 2 | 30 | ~18 min |
| 3 | 45 | ~27 min |
| 4 | 60 | ~36 min |
| 5 | 75 | 45 min |
      `
    },
    {
      id: 'act-es1-input1',
      type: 'input-boxes' as const,
      content: `
**Quick Recall** 📝

1) How many total questions are on the ACT English section? __________
2) How many seconds per question does 75 Qs in 45 min give you? __________
3) The two broad categories are Usage/Mechanics and __________ Skills.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['75', '36', 'Rhetorical'],
        hint1: 'The total is the product of 5 passages × 15 questions each.',
        hint2: '45 minutes = 2,700 seconds. Divide by 75.',
        hint3: 'The "judgment-call" category that covers strategy, organization, and style.',
        explanation: '75 questions in 45 minutes gives 36 seconds per question. The two categories are Usage/Mechanics and Rhetorical Skills.'
      }
    },
    {
      id: 'act-es1-nochange',
      type: 'text' as const,
      content: `
## The "NO CHANGE" Option

Almost every question offers **"NO CHANGE"** as choice (A) or (F). Key facts:

- "NO CHANGE" is correct about **25%** of the time — it's a real answer, not a trick.
- Don't pick it just because the original "sounds fine." Actively check for errors.
- Don't avoid it out of suspicion either — sometimes the passage is already correct.

**Strategy:** Treat "NO CHANGE" like any other option. Read all four choices before deciding.
      `
    },
    {
      id: 'act-es1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Match** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Punctuation, grammar, and sentence structure questions fall under …',
            options: ['Usage / Mechanics', 'Rhetorical Skills', 'Reading Comprehension', 'Science Reasoning']
          },
          {
            label: '"NO CHANGE" is the correct answer approximately … of the time.',
            options: ['10%', '25%', '50%', '75%']
          },
          {
            label: 'The ACT English section gives you about … per question.',
            options: ['15 seconds', '36 seconds', '1 minute', '2 minutes']
          }
        ],
        correctAnswers: ['Usage / Mechanics', '25%', '36 seconds'],
        hint1: 'Grammar and punctuation are concrete rules — that\'s the mechanics side.',
        hint2: 'It\'s roughly one out of every four questions.',
        hint3: '2,700 seconds ÷ 75 questions.',
        explanation: 'Punctuation, grammar, and sentence structure are Usage/Mechanics. "NO CHANGE" is correct ~25% of the time. You have about 36 seconds per question.'
      }
    }
  ]
};
