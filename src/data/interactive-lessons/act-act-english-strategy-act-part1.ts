export const actEnglishStratPart1Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es1-intro',
      type: 'text' as const,
      content: `
# 📝 ACT English Overview

**Part 1 of 7 — Format, Timing & Question Types**

The ACT English section tests your ability to revise and edit passages. Here's the snapshot of the enhanced ACT (2025 and later):

| Detail | Value |
|--------|-------|
| Total questions | **50** |
| Time limit | **35 minutes** |
| Answer choices | **4** per question |
| Average time per question | **~42 seconds** |

The ACT reports your English performance in three official categories:

1. **Production of Writing** — topic development, purpose, organization, and cohesion (adding/deleting, transitions, the writer's goal, sentence placement).
2. **Knowledge of Language** — precise, concise word choice and a consistent style and tone.
3. **Conventions of Standard English** — sentence structure, punctuation, and usage (agreement, pronouns, verb tense).

In this lesson we group those into **two working approaches**:
- **Usage / Mechanics** (= Conventions) — rule-based questions with a definite right answer.
- **Rhetorical Skills** (= Production of Writing + Knowledge of Language, the ACT's older label for these skills) — judgment calls that depend on context and purpose.

Every question is **passage-based**: an underlined portion in the text is followed by answer choices that offer revisions (or "NO CHANGE").
      `
    },
    {
      id: 'act-es1-breakdown',
      type: 'text' as const,
      content: `
## Question-Type Breakdown

### Usage / Mechanics (Conventions of Standard English)
- **Punctuation** — commas, apostrophes, colons, semicolons, dashes.
- **Grammar & Usage** — subject-verb agreement, pronoun case, verb tense.
- **Sentence Structure** — fragments, run-ons, parallelism, modifiers.

### Rhetorical Skills (Production of Writing + Knowledge of Language)
- **Strategy** — adding/deleting sentences, the purpose of a detail, "which choice best accomplishes the writer's goal?"
- **Organization** — sentence/paragraph order, transitions, introductions and conclusions.
- **Style** — wordiness, tone, precise word choice.

**Key Insight:** Mechanics questions reward concrete rules you can memorize; rhetoric questions reward reading for context and purpose. Both carry a large share of the score, so practice both.
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
            question: 'On the enhanced ACT, how many questions are on the English section, and how much time do you get?',
            options: [
              '75 questions in 45 minutes',
              '50 questions in 35 minutes',
              '45 questions in 50 minutes',
              '36 questions in 40 minutes'
            ],
            correctAnswer: 1,
            explanation: 'Enhanced ACT English is 50 questions in 35 minutes (about 42 seconds each). The 75-question, 45-minute section was the old format; 45 questions in 50 minutes is the Math section; 36 questions in 40 minutes is the Reading section.'
          },
          {
            question: 'Which official ACT English reporting category covers comma, subject-verb agreement, and verb-tense questions?',
            options: [
              'Production of Writing',
              'Knowledge of Language',
              'Conventions of Standard English',
              'Integration of Knowledge and Ideas'
            ],
            correctAnswer: 2,
            explanation: 'Punctuation, agreement, and tense are rule-based conventions, so they fall under Conventions of Standard English. Production of Writing covers development, organization, and transitions; Knowledge of Language covers concision, word choice, and tone; Integration of Knowledge and Ideas is a Reading category, not an English one.'
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
- Your **composite** is the average of **English, Math, and Reading**. Science is optional and reported separately, so English is a full **one-third** of your composite.

**Pro Tip:** Because questions follow passage order, you can pace yourself with checkpoints every 10 questions (~7 minutes each):

| After Question # | Elapsed Time Target |
|------------------|---------------------|
| 10 | ~7 min |
| 20 | ~14 min |
| 30 | ~21 min |
| 40 | ~28 min |
| 50 | 35 min |
      `
    },
    {
      id: 'act-es1-input1',
      type: 'input-boxes' as const,
      content: `
**Quick Recall** 📝

1) How many total questions are on the enhanced ACT English section? __________

2) How many seconds per question does 50 Qs in 35 min give you? __________

3) Your composite score is the average of English, Math, and __________.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '42', 'Reading'],
        hint1: 'The enhanced ACT trimmed the English section to a round number of questions.',
        hint2: '35 minutes = 2,100 seconds. Divide by 50.',
        hint3: 'Science is optional and not part of the composite. Which other required section is there?',
        explanation: '50 questions in 35 minutes gives 42 seconds per question. The composite averages English, Math, and Reading; Science is optional and reported separately.'
      }
    },
    {
      id: 'act-es1-nochange',
      type: 'text' as const,
      content: `
## The "NO CHANGE" Option

Most questions offer **"NO CHANGE"** as choice (A) or (F). Key facts:

- "NO CHANGE" is a **real answer, not a trick** — sometimes the passage is already correct.
- Don't pick it just because the original "sounds fine." Actively check for errors.
- Don't avoid it out of suspicion either — assuming every underline is wrong leads you to "fix" correct text.

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
            label: 'Your ACT composite score is the average of English, Math, and …',
            options: ['Reading', 'Science', 'Writing', 'all four sections']
          },
          {
            label: 'The enhanced ACT English section gives you about … per question.',
            options: ['20 seconds', '42 seconds', '1 minute', '2 minutes']
          }
        ],
        correctAnswers: ['Usage / Mechanics', 'Reading', '42 seconds'],
        hint1: 'Grammar and punctuation are concrete rules — that\'s the mechanics side.',
        hint2: 'Science is now optional and reported separately.',
        hint3: '2,100 seconds ÷ 50 questions.',
        explanation: 'Punctuation, grammar, and sentence structure are Usage/Mechanics (the Conventions category). The composite averages English, Math, and Reading. You have about 42 seconds per question.'
      }
    }
  ]
};
