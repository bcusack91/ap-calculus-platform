export const actEnglishStratPart5Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es5-intro',
      type: 'text' as const,
      content: `
# ⏱️ Time Management

**Part 5 of 7 — Pacing, Skipping & Guessing Strategy**

With **50 questions in 35 minutes** — about **42 seconds per question** — the ACT English section rewards efficient test-takers. Good time management can be the difference between a 28 and a 32+.

**The Pacing Goal:**
- Spend about **7 minutes per 10 questions**.
- Aim to finish all 50 questions with **a minute or two** to spare for review.

**Reality check:** Not every question takes the same amount of time.
- Grammar fixes (punctuation, agreement) → ~15–20 seconds.
- Rhetorical judgment (add/delete, organization) → ~40–60 seconds.

So you'll naturally move faster through mechanics questions and spend more time on rhetoric.
      `
    },
    {
      id: 'act-es5-pacing',
      type: 'text' as const,
      content: `
## Pacing Checkpoints

Use these benchmarks during the test (one every 10 questions):

| Checkpoint | Target Time Remaining |
|-----------|----------------------|
| After Q 10 | ~28 minutes left |
| After Q 20 | ~21 minutes left |
| After Q 30 | ~14 minutes left |
| After Q 40 | ~7 minutes left |
| After Q 50 | 0 minutes (done!) |

**What if you're behind?**
- Don't panic. Speed up slightly on easy mechanics questions.
- On any question you've spent 60+ seconds on, make your best guess and move on.
- Remember: the last passage has questions worth the same points as the first.
      `
    },
    {
      id: 'act-es5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Pacing Strategy** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If you finish question 20 with 24 minutes remaining, you are …',
            options: [
              'Ahead of pace — target is ~21 min remaining after Q 20.',
              'Right on pace — 24 min remaining is exactly correct.',
              'Behind pace — you should have 27 min remaining.',
              'Way behind — you need to skip the next passage.'
            ],
            correctAnswer: 0,
            explanation: 'At ~7 minutes per 10 questions, 20 questions should take about 14 minutes, leaving ~21 minutes. Having 24 minutes means you are about 3 minutes ahead — in good shape. Expecting 27 minutes would mean finishing 20 questions in 8 minutes, which is faster than the target, and nothing here calls for skipping a passage.'
          },
          {
            question: 'Which type of question typically takes the LEAST time?',
            options: [
              'Sentence placement (organization)',
              'Adding/deleting a sentence',
              'Comma or apostrophe fix (punctuation)',
              'Main idea of the passage as a whole'
            ],
            correctAnswer: 2,
            explanation: 'Punctuation fixes are the quickest because they involve applying a concrete rule. Strategy and organization questions require reading more context.'
          }
        ]
      }
    },
    {
      id: 'act-es5-skipping',
      type: 'text' as const,
      content: `
## When to Skip (and Come Back)

**Skip-worthy questions:**
- Questions that require reading a large portion of the passage (e.g., "Which choice most effectively concludes the essay?") — come back after you've read the full passage.
- Organization questions asking where to place a sentence — these are time-consuming and worth saving for last.
- Any question where you can't eliminate even one answer in 20 seconds.

**How to skip effectively:**
1. Mark the question — circle the number in your test booklet, or use the flag tool on the online test.
2. **Bubble in your best guess** — never leave it blank in case you run out of time.
3. After finishing the passage, return to skipped questions.

**Never skip:** Simple punctuation or agreement fixes. These are fast points.
      `
    },
    {
      id: 'act-es5-input1',
      type: 'input-boxes' as const,
      content: `
**Pacing Math** 📝

1) 35 minutes ÷ 50 questions × 10 questions = __________ minutes per 10 questions.

2) If you're at question 30 with 17 minutes left, you are __________ of pace (ahead/behind).

3) When skipping a question, you should still bubble in a __________ answer.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', 'ahead', 'guess'],
        hint1: '35 ÷ 50 = 0.7 minutes per question. Multiply by 10.',
        hint2: 'After Q 30 the target is ~14 min left. You have 17.',
        hint3: 'Never leave a bubble blank — there\'s no penalty for wrong answers.',
        explanation: '7 minutes per 10 questions. At Q 30 with 17 min left you\'re ~3 min ahead of the 14 min target. Always bubble a guess when skipping.'
      }
    },
    {
      id: 'act-es5-guessing',
      type: 'text' as const,
      content: `
## When to Guess

**No penalty for guessing!** The ACT does not deduct points for wrong answers, so:
- **Never leave a question blank.**
- If you're running low on time, fill in remaining bubbles with a single letter (e.g., all B/G).

**Strategic guessing vs. random guessing:**
- **Strategic:** Eliminate 1–2 answers, then guess from the remaining options. Going from 4 choices to 2 doubles your odds (25% → 50%).
- **Random:** Pick any letter. Still gives you 25% — better than 0%.

**"Shortest answer" heuristic:** When you must guess blindly on a Usage/Mechanics question, the **shortest answer** is often a reasonable pick. Why? Many errors involve wordiness, and the fix is the most concise option.

**Caution:** This is a last-resort heuristic, not a reliable rule. Always try to apply grammar knowledge first.
      `
    },
    {
      id: 'act-es5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Time Management Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You\'ve spent 50 seconds on a question and can\'t decide between two answers. You should …',
            options: ['spend another minute thinking carefully', 'pick your best guess and move on', 'leave it blank and come back later', 'change the question topic']
          },
          {
            label: 'With 3 minutes left and 8 questions unanswered, you should …',
            options: ['focus carefully on 3 questions and leave 5 blank', 'bubble in your best guesses for all 8', 'skip to the hardest questions', 'close your test booklet']
          },
          {
            label: 'The "shortest answer" heuristic works best for …',
            options: ['reading comprehension questions', 'wordiness and redundancy questions', 'adding/deleting questions', 'math questions']
          }
        ],
        correctAnswers: ['pick your best guess and move on', 'bubble in your best guesses for all 8', 'wordiness and redundancy questions'],
        hint1: 'About 42 seconds is the average budget. 50 seconds is already over it.',
        hint2: 'No penalty for guessing — never leave bubbles blank.',
        hint3: 'Wordiness questions often reward the most concise option.',
        explanation: 'At 50 seconds, make your best guess and move on. With 3 minutes and 8 questions left, bubble guesses for all (no penalty). The shortest-answer heuristic applies to wordiness questions.'
      }
    }
  ]
};
