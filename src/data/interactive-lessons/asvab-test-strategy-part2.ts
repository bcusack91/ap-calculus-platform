export const asvabTestStrategyPart2Data = {
  topicSlug: 'asvab-test-strategy',
  sections: [
    {
      id: 'tstrat2-intro',
      type: 'text' as const,
      content: `# ⏱️ CAT-ASVAB Strategy and Test Day

**Part 2 of 7 — How the Adaptive Test Works**

### The test adjusts to you

"CAT" means **computerized adaptive test**. Inside each subtest:

1. The **first question is of average difficulty**.
2. A **correct answer usually leads to a harder question**; a wrong answer usually leads to an easier one.
3. After **every** question, the computer updates its estimate of your ability.
4. Your subtest score is the final ability estimate, which accounts for how hard each question was, how well it separates strong and weak test-takers, and how easy it is to guess.

That is why the CAT can measure you accurately with only 10 or 15 questions per subtest, while the paper test needs 15 to 35.

### What this means for you

- **Harder questions are a good sign.** If the questions get tough, you are probably doing well. Do not panic.
- **You cannot judge your score by counting.** Two people with the same number right can earn different scores.
- **Every question deserves real effort,** because each answer steers what comes next.`
    },
    {
      id: 'tstrat2-noback',
      type: 'text' as const,
      content: `## No going back

Once you answer a question on the CAT-ASVAB, **you cannot return to it**. The official site states this directly. No official description mentions a skip button either, so plan on this rule: **you answer each question to move on.**

| | CAT-ASVAB (computer) | P&P ASVAB (paper) |
|:---|:---|:---|
| Change an earlier answer? | No, never | Yes, within the subtest you are on, if time remains |
| Pace | Your own; start the next subtest when you finish | Everyone in the room moves together |
| Go back to an earlier subtest? | No | No |

### Tryout questions

Some questions may be unscored **tryout** items being tested for future use. You **cannot tell** which ones they are, so treat every question as scored.

### Worked example

Sam answers a Word Knowledge question, then realizes on the next screen that "candid" means "frank," not "hidden." On the CAT, that answer is locked. The right move is to **let it go** and give full attention to the question on the screen. Dwelling on a locked answer costs time and focus on questions that still count.`
    },
    {
      id: 'tstrat2-mc',
      type: 'multiple-choice' as const,
      content: '**Adaptive rules.** 🎯',
      exercise: {
        questions: [
          {
            question: "On the CAT-ASVAB, you answer a Mathematics Knowledge question correctly. What usually happens next?",
            options: ['The next question is usually harder', 'The next question is usually easier', 'The subtest ends early as a reward', 'The next question is always the same difficulty'],
            correctAnswer: 0,
            explanation: 'A correct answer usually leads to a harder item and a wrong answer to an easier one, so the test homes in on your level.'
          },
          {
            question: "Halfway through Arithmetic Reasoning on the CAT, you want to change an answer from three questions ago. What can you do?",
            options: ['Click Back and change it before the subtest ends', 'Nothing; answered questions cannot be revisited', 'Flag it and return after the last question', 'Ask the test administrator to reopen it'],
            correctAnswer: 1,
            explanation: 'On the CAT-ASVAB you are not allowed to return to a question once you have answered it. Reviewing within a subtest is a paper-test rule.'
          },
          {
            question: "Several Arithmetic Reasoning questions in a row feel much harder than the first one. What is the most likely reason?",
            options: ['The computer has malfunctioned', 'You have reached the tryout questions', 'You answered the earlier ones correctly', 'The subtest always ends with its hardest questions'],
            correctAnswer: 2,
            explanation: 'Correct answers usually lead to harder questions, so rising difficulty usually means you are doing well. Tryout questions cannot be identified, and difficulty is not fixed by position.'
          }
        ]
      }
    },
    {
      id: 'tstrat2-dropdown',
      type: 'dropdown-select' as const,
      content: '**CAT versus paper.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'On the paper test, you may review answers:',
            options: ['within the current subtest only', 'on any subtest at any time', 'never, on any subtest', 'only after the whole test ends'],
            correctAnswer: 0
          },
          {
            label: 'On the CAT, the next subtest starts:',
            options: ['when you finish the current one', 'when the whole room is ready', 'only after the full time limit', 'after a required 10-minute break'],
            correctAnswer: 0
          },
          {
            label: 'You should treat a question that might be a tryout item as:',
            options: ['scored, because you cannot tell', 'a free chance to guess as fast as you can', 'a question to skip', 'a sign the subtest is ending'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['within the current subtest only', 'when you finish the current one', 'scored, because you cannot tell'],
        hint1: 'Paper testers move together subtest by subtest.',
        hint2: 'The CAT is self-paced.',
        hint3: 'Tryout items look exactly like scored items.',
        explanation: 'Paper testers can review within the subtest they are on but not earlier ones. CAT testers move at their own pace. Tryout items cannot be identified, so every question deserves full effort.'
      }
    },
    {
      id: 'tstrat2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- The CAT starts each subtest at **average difficulty** and adjusts after **every** answer.
- Harder questions usually mean you are doing **well**.
- **No going back**: plan to answer each question to move on, and do not dwell on locked answers.
- **Tryout** questions cannot be identified: treat every question as scored.

> **Up Next:** Part 3 — how much time you have per question on each subtest.`
    }
  ]
};
