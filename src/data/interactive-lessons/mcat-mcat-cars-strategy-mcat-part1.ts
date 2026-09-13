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
2. **Reasoning Within the Text** (~30%): Why did the author say it? How does the argument work? What can we infer from it?
3. **Reasoning Beyond the Text** (~40%): How would these ideas apply to a new situation, or change given new information?

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
            options: [`Reasoning Within the Text — drawing an unstated conclusion the passage supports`, `Foundations of Comprehension — locating the answer stated directly in the text`, `Reasoning Beyond the Text — applying the passage's ideas to a new situation`, `Outside knowledge — recalling what experts know about the passage's topic`],
            correctAnswer: 0,
            explanation: `An inference asks for a conclusion that the passage supports but does not state outright. In the AAMC framework, working out what follows from the passage's own content is Reasoning Within the Text. Reasoning Beyond the Text instead applies the passage's ideas to a new situation or weighs new information, and Foundations of Comprehension retrieves what the text says directly.`
          },
          {
            question: `A student runs out of time on CARS with 8 questions remaining. The best strategy is:`,
            options: [`Guess on all 8 — wrong answers carry no penalty`, `Leave them blank so random guesses cannot lower the score`, `Start reading the remaining passage and answer only the items reached`, `Go back and change earlier answers that felt uncertain`],
            correctAnswer: 0,
            explanation: `There is NO penalty for guessing on the MCAT. Always fill in an answer for every question. With 8 left, select the same letter for each one — you should get ~2 right by chance.`
          },
          {
            question: `With 90 minutes for roughly 9 passages, about how much time should you budget per passage including its questions?`,
            options: [`About 10 minutes per passage`, `About 5 minutes per passage`, `About 20 minutes per passage`, `As long as each passage takes`],
            correctAnswer: 0,
            explanation: `90 minutes divided by 9 passages is about 10 minutes each (roughly 4 minutes reading, 6 minutes on questions). Internalizing this budget prevents one hard passage from stealing time from later ones.`
          },
          {
            question: `A question asks, "According to the passage, the author defines 'modernism' as..." This is primarily a question of:`,
            options: [`Foundations of Comprehension — locating what the text explicitly states`, `Reasoning Beyond the Text — applying the passage's idea to a new case`, `Reasoning Within the Text — analyzing why the author makes the argument`, `Outside knowledge — recalling how literary scholars define modernism`],
            correctAnswer: 0,
            explanation: `"According to the passage" with a definition signals a comprehension/retrieval question: the information is explicitly in the text. You should return to the passage and find the stated definition rather than infer or apply.`
          },
          {
            question: `Why is spending six extra minutes to perfect one difficult CARS question usually a poor trade?`,
            options: [`The time comes out of later passages, costing questions you could have answered`, `Difficult questions are weighted less, so each earns fewer points than an easy one`, `The exam deducts points when a single question takes too long to answer`, `The hardest questions are designed so that no amount of time will solve them`],
            correctAnswer: 0,
            explanation: `All questions are worth the same, and time is fixed. Overinvesting in one item sacrifices time for multiple later items you might have gotten right. Flagging and moving on protects your overall score; questions are not weighted by difficulty.`
          },
          {
            question: `Which statement about CARS content is accurate?`,
            options: [`CARS uses humanities and social-science passages; everything needed is in the text`, `CARS includes physics and chemistry passages that require applying formulas`, `CARS rewards memorized facts about the topics its passages tend to cover`, `CARS lets test-takers consult reference materials during the section`],
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
