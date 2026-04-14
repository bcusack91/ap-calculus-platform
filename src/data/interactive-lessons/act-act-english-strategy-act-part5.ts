export const actEnglishStratPart5Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es5-intro',
      type: 'text' as const,
      content: `
# ⏱️ Time Management

**Part 5 of 7 — Pacing, Skipping & Guessing Strategy**

With only **36 seconds per question**, the ACT English section rewards efficient test-takers. Good time management can be the difference between a 28 and a 32+.

**The Pacing Goal:**
- Spend about **8–9 minutes per passage** (15 questions each).
- Finish all 75 questions with **1–2 minutes** left for review.

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

Use these benchmarks during the test:

| Checkpoint | Target Time Remaining |
|-----------|----------------------|
| After Passage 1 (Q 15) | ~36 minutes left |
| After Passage 2 (Q 30) | ~27 minutes left |
| After Passage 3 (Q 45) | ~18 minutes left |
| After Passage 4 (Q 60) | ~9 minutes left |
| After Passage 5 (Q 75) | 0 minutes (done!) |

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
            question: 'If you finish Passage 2 with 30 minutes remaining, you are …',
            options: [
              'Ahead of pace — target is ~27 min remaining after Passage 2.',
              'Right on pace — 30 min remaining is exactly correct.',
              'Behind pace — you should have 33 min remaining.',
              'Way behind — you need to skip the next passage.'
            ],
            correctAnswer: 0,
            explanation: 'The target is ~27 minutes remaining after Passage 2. Having 30 minutes means you are about 3 minutes ahead — in good shape!'
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
1. Mark the question in your test booklet (circle the number).
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

1) 45 minutes ÷ 5 passages = __________ minutes per passage.

2) If you're at question 45 with 20 minutes left, you are __________ of pace (ahead/behind).

3) When skipping a question, you should still bubble in a __________ answer.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', 'ahead', 'guess'],
        hint1: 'Simple division: 45 ÷ 5.',
        hint2: 'Q 45 is after Passage 3. Target is ~18 min left. You have 20.',
        hint3: 'Never leave a bubble blank — there\'s no penalty for wrong answers.',
        explanation: '9 minutes per passage. At Q 45 with 20 min left you\'re ~2 min ahead of the 18 min target. Always bubble a guess when skipping.'
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

**"Shortest answer" heuristic:** When you must guess blindly on a Usage/Mechanics question, the **shortest answer** is correct more often than chance would predict. Why? Many errors involve wordiness, and the fix is the most concise option.

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
        hint1: '36 seconds is the target. 50 seconds is already over budget.',
        hint2: 'No penalty for guessing — never leave bubbles blank.',
        hint3: 'Wordiness questions often reward the most concise option.',
        explanation: 'At 50 seconds, make your best guess and move on. With 3 minutes and 8 questions left, bubble guesses for all (no penalty). The shortest-answer heuristic applies to wordiness questions.'
      }
    }
  ]
};
