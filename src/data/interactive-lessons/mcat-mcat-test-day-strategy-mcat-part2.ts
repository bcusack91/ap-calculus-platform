export const mcatTestDayPart2Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td2-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 2 of 7 — Time Management**

### Pacing Strategy

| Passage Type | Reading | Questions | Total |
|-------------|---------|-----------|-------|
| Science (5-7 questions) | 2-3 min | 1 min each | ~8-9 min |
| CARS (5-7 questions) | 3-4 min | 1-1.5 min each | ~10 min |
| Discrete (standalone) | N/A | ~1 min | ~1 min |

### Time Checkpoints

For a 59-question science section (95 minutes):
- After 5 passages (~25 questions): ~40 minutes used
- After 8 passages (~45 questions): ~70 minutes used
- Last 14 questions (discretes + final passage): ~25 minutes

### When to Move On

Move on if you've spent 2+ minutes on a single question:
1. Eliminate what you can
2. Flag the question
3. Pick your best guess
4. Move on confidently — you can return later

### Flag Strategy

- **Flag**: Any question you're unsure about
- **Don't flag everything**: Only flag questions where you narrowed to 2 choices
- **Review time**: Plan 5-10 minutes at the end for flagged questions
- Often your first instinct is correct — don't change unless you have a clear reason`
    },
    {
      id: 'td2-worked',
      type: 'text' as const,
      content: `### Worked Example — Building a Pacing Plan and Catching Up

A science section has **95 minutes for 59 questions**.

**Step 1 — Find the per-question budget.** $\\frac{95\\ \\text{min}}{59\\ \\text{q}} \\approx 1.6\\ \\text{min/question}$ — about **1 minute 36 seconds** each on average.

**Step 2 — Set midpoint checkpoints.** Halfway is question ~30. At 1.6 min each, you should reach Q30 by about $30 \\times 1.6 = 48$ minutes — call it the **48-minute / Q30** checkpoint. If the clock reads 48 minutes and you're on Q24, you're behind.

**Step 3 — Diagnose a slip.** Suppose at the 48-minute mark you've done only 24 questions. You're 6 questions behind with $95 - 48 = 47$ minutes left for $59 - 24 = 35$ questions. New pace needed: $\\frac{47}{35} \\approx 1.34$ min/question — you must speed up by roughly 15 seconds each.

**Step 4 — Recover the right way.** Don't sprint randomly. Trim time on the *highest-cost* items: a question you've already spent 2+ minutes on gets a flag + best guess immediately. Protecting the many cheap questions ahead beats salvaging one expensive one.

**Step 5 — Reserve review time.** Aim to finish the last question with ~5 minutes left so flagged items get a second look. Finishing exactly at 0:00 with five blind guesses left is worse than answering everything and reviewing two flags.

**Rule of thumb:** every question is worth the same point — spend your *minutes* like a budget, not your *pride*.`
    },
    {
      id: 'td2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Time Management** 🎯`,
      exercise: {
        questions: [
          {
            question: `You've been stuck on a question for 2 minutes and can't decide between two answers. The best strategy is:`,
            options: [`Pick your best guess, flag it, and move on — protecting time for remaining questions`, `Keep working until you figure it out`, `Skip it without answering`, `Close your eyes and pick randomly`],
            correctAnswer: 0,
            explanation: `Every question is worth the same amount. Spending 4+ minutes on one hard question costs you easy questions later. Always answer something (no penalty for guessing), flag it, and move on. Your first instinct is often correct.`
          },
          {
            question: `In a 95-minute, 59-question section, your approximate per-question budget is:`,
            options: [`About 1.6 minutes (roughly 1 minute 36 seconds)`, `About 3 minutes`, `About 45 seconds`, `Exactly 2 minutes`],
            correctAnswer: 0,
            explanation: `$95 \\div 59 \\approx 1.6$ minutes per question. Knowing this average lets you set checkpoints (e.g., ~Q30 by the 48-minute mark) and detect when you are falling behind.`
          },
          {
            question: `At the 48-minute mark you have completed 24 of 59 questions. The smartest reaction is to:`,
            options: [`Recognize you are behind and trim time on the most expensive questions, flagging and guessing where needed`, `Slow down to be more careful`, `Skip directly to the last passage`, `Leave the rest blank to avoid mistakes`],
            correctAnswer: 0,
            explanation: `You should be near Q30 by 48 minutes, so 24 means you are behind. Recover by capping time on costly questions (flag + best guess) to protect the many remaining questions, never by leaving items blank — there is no guessing penalty.`
          }
        ]
      }
    },
    {
      id: 'td2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Flagging & Review** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which use of the flag feature is MOST effective?`,
            options: [`Flag questions you narrowed to two plausible choices, so review time targets the highest-yield items`, `Flag every single question to be thorough`, `Never flag anything to save clicks`, `Flag only the easiest questions`],
            correctAnswer: 0,
            explanation: `Flagging is a triage tool. Marking questions where you got down to a 50/50 means your limited review time goes to items most likely to flip with a fresh look — not to items you already feel confident about.`
          },
          {
            question: `During end-of-section review you reach a flagged item. You should change your original answer only if:`,
            options: [`You find a concrete reason — a misread stem or recalled fact — that your first choice was wrong`, `It just feels safer to switch`, `The original answer was choice C`, `You have time, regardless of any new reasoning`],
            correctAnswer: 0,
            explanation: `First instincts are correct more often than not. Change an answer only when you can identify a specific error or new information; switching on vague doubt tends to lower scores.`
          },
          {
            question: `Ideally, you want to reach the last question of a section with:`,
            options: [`A few minutes left to revisit flagged questions`, `Exactly zero seconds remaining`, `Half the questions still unanswered for review`, `No answers entered yet, planning to fill them at the end`],
            correctAnswer: 0,
            explanation: `Pacing so that you finish with a small buffer lets you give flagged items a second look. Running to 0:00 with blind guesses, or saving all answers for the end, sacrifices both accuracy and safety.`
          }
        ]
      }
    },
    {
      id: 'td2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- ~8-9 minutes per science passage; budget ~1.6 minutes per question
- Set checkpoints (e.g., ~Q30 by 48 minutes) to catch pacing slips early
- Never spend more than 2 minutes on a single question — flag and guess
- Always answer before moving on (no penalty for wrong answers)
- Flag judiciously (50/50 items) and finish with a few minutes for review`
    }
  ]
};
