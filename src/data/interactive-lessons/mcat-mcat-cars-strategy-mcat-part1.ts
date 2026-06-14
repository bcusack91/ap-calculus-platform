export const mcatCarsStratPart1Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs1-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 1 of 7 — Understanding the CARS Section**

### What is CARS?

- **C**ritical **A**nalysis and **R**easoning **S**kills
- 53 questions, 90 minutes (~9 passages, ~6 questions each)
- Passages from humanities and social sciences (NO science content!)
- Tests reading comprehension, not knowledge

### CARS is Different from Science Sections

| Science Sections | CARS |
|-----------------|------|
| Some outside knowledge needed | EVERYTHING is in the passage |
| Data/figure interpretation | Text interpretation only |
| Can study specific content | Cannot "study" — must develop skills |

### The Three Question Types

1. **Foundations of Comprehension** (~30%): What did the author say?
2. **Reasoning Within the Text** (~30%): Why did the author say it? How does the argument work?
3. **Reasoning Beyond the Text** (~40%): How does it apply? What can we infer?

### Timing Strategy

- **~10 minutes per passage** (read + answer)
- First pass reading: 4-5 minutes
- Questions: 5-6 minutes
- Flag and move on — don't get stuck on one question!`
    },
    {
      id: 'cs1-worked',
      type: 'text' as const,
      content: `### Worked Example — Doing the Timing Math

Students lose CARS points less from misreading than from mismanaging the clock. Make the arithmetic concrete.

**The budget.** 90 minutes ÷ 9 passages = **10 minutes per passage**. Within a passage of ~6 questions, that is roughly **4 minutes to read** and **6 minutes for questions** — about **1 minute per question**.

**The pacing checkpoint.** Nine passages over 90 minutes means you should finish passage 3 around the 30-minute mark, passage 6 around 60 minutes, and have all 9 done with a few minutes to spare. Glance at the clock at those checkpoints, *not* after every question (which wastes time and rattles you).

**The most expensive mistake.** Suppose you spend 4 extra minutes wrestling one brutal question on passage 2. That 4 minutes does not come from nowhere — it is stolen from a *later* passage you never reach, costing you ~6 questions you might have answered at 70-80%. You traded a coin-flip on one hard item for six likely points. The math is lopsided: **flag and move.**

**The end-game rule.** Because there is *no penalty for wrong answers*, never leave a bubble blank. If the clock is about to expire with items unanswered, pick a single letter and fill every remaining bubble; random guessing on four options yields ~25%, so you bank roughly one in four for free.

**Takeaway:** Treat the 10-minute-per-passage budget as a hard constraint. Protect later passages from earlier ones, check the clock only at passage boundaries, and guarantee an answer for all 53 questions before time runs out.`
    },
    {
      id: 'cs1-quiz1',
      type: 'multiple-choice' as const,
      content: `**CARS Fundamentals** 🎯`,
      exercise: {
        questions: [
          {
            question: `In CARS, when a question asks "Which of the following can be inferred from the passage?", it is testing:`,
            options: [`Reasoning Beyond the Text — you must draw a conclusion not explicitly stated`, `Foundations of Comprehension — just find the answer in the text`, `Reasoning Within the Text — analyzing argument structure`, `Outside knowledge of the topic`],
            correctAnswer: 0,
            explanation: `Inference questions require you to go beyond what is explicitly stated and draw a logical conclusion. The answer is supported by the passage but not directly stated.`
          },
          {
            question: `A student runs out of time on CARS with 8 questions remaining. The best strategy is:`,
            options: [`Quickly guess on all 8 — there is no penalty for wrong answers`, `Leave them blank`, `Rush through the remaining passage`, `Go back and change previous answers`],
            correctAnswer: 0,
            explanation: `There is NO penalty for guessing on the MCAT. Always fill in an answer for every question. With 8 left, pick one letter and bubble them all — you should get ~2 right by chance.`
          },
          {
            question: `With 90 minutes for roughly 9 passages, about how much time should you budget per passage including its questions?`,
            options: [`About 10 minutes per passage`, `About 5 minutes per passage`, `About 20 minutes per passage`, `As long as each passage takes — pacing does not matter`],
            correctAnswer: 0,
            explanation: `90 minutes divided by 9 passages is about 10 minutes each (roughly 4 minutes reading, 6 minutes on questions). Internalizing this budget prevents one hard passage from stealing time from later ones.`
          },
          {
            question: `A question asks, "According to the passage, the author defines 'modernism' as..." This is primarily a question of:`,
            options: [`Foundations of Comprehension — the answer is stated in the text and must be located`, `Reasoning Beyond the Text — applying the idea to a new case`, `Reasoning Within the Text — analyzing why the author argues something`, `Outside literary knowledge`],
            correctAnswer: 0,
            explanation: `"According to the passage" with a definition signals a comprehension/retrieval question: the information is explicitly in the text. You should return to the passage and find the stated definition rather than infer or apply.`
          },
          {
            question: `Why is spending six extra minutes to perfect one difficult CARS question usually a poor trade?`,
            options: [`Those minutes are taken from later passages, costing several questions you could otherwise answer`, `Difficult questions are worth fewer points than easy ones`, `There is a penalty for answering hard questions slowly`, `The hardest question is always unanswerable`],
            correctAnswer: 0,
            explanation: `All questions are worth the same, and time is fixed. Overinvesting in one item sacrifices time for multiple later items you might have gotten right. Flagging and moving on protects your overall score; questions are not weighted by difficulty.`
          },
          {
            question: `Which statement about CARS content is accurate?`,
            options: [`CARS uses humanities and social-science passages and requires no outside subject knowledge — everything needed is in the text`, `CARS includes physics and chemistry passages requiring formulas`, `CARS rewards memorized facts about the passage topics`, `CARS allows reference materials during the exam`],
            correctAnswer: 0,
            explanation: `CARS draws exclusively from the humanities and social sciences and is designed so that all required information is contained in the passage. Success comes from reading and reasoning skill, not recalled content or formulas, and no references are permitted.`
          }
        ]
      }
    },
    {
      id: 'cs1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- CARS tests critical reading, not content knowledge
- ~10 min per passage (53 questions, 90 minutes; ~1 min per question)
- Three question types: Comprehension, Reasoning Within, Reasoning Beyond
- Protect later passages — don't let one hard item drain the clock
- NEVER leave a question blank — no penalty for guessing`
    }
  ]
};
