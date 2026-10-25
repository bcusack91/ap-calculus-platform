export const asvabTestStrategyPart4Data = {
  topicSlug: 'asvab-test-strategy',
  sections: [
    {
      id: 'tstrat4-intro',
      type: 'text' as const,
      content: `# ⏱️ CAT-ASVAB Strategy and Test Day

**Part 4 of 7 — Guessing, Unanswered Items and the Clock**

### If time runs out on the CAT

When a subtest's time limit ends before you finish, the CAT applies a **penalty procedure** to the questions you did not reach. Your unfinished questions are scored **as if you had guessed at random** on them. The official site adds that the penalty "is almost never needed because time limits are generous."

### Why random guessing at the end is a bad plan on the CAT

The official advice for the CAT is: if time is short, **keep reading and genuinely answering** rather than clicking answers at random. The test "applies a relatively large penalty when several incorrect answers are provided toward the end of a subtest."

Put the two rules together:

| Situation near the end of a CAT subtest | What it does to your score |
|:---|:---|
| You keep working real questions, quickly | Best option: every real answer is your best estimate |
| You click random answers to "finish" | Several wrong answers late in the subtest bring a relatively large penalty |
| Time simply runs out on unreached questions | They are scored like random guesses |

So the CAT strategy is: **work steadily, keep answering for real, and do not rapid-fire random answers.**`
    },
    {
      id: 'tstrat4-pp',
      type: 'text' as const,
      content: `## Guessing on the paper test is different

On the paper-and-pencil ASVAB:

- **Unanswered questions are scored as wrong.**
- The official advice is to **answer every question**: "there is no penalty for guessing."
- So in the last minute of a paper subtest, fill in an answer for every remaining question.

| | CAT-ASVAB | P&P ASVAB |
|:---|:---|:---|
| Unfinished questions | Scored as if guessed at random | Scored as wrong |
| Best move when time is short | Keep reading and answering genuinely | Make sure every bubble is filled |
| Rapid random guesses at the end | Risky: a large penalty for several wrong answers late in the subtest | No penalty for guessing |

### Educated guessing works on both

When you are unsure, the official tips are to read carefully, **rule out wrong choices**, then make an **educated guess**. Eliminating even one choice raises your odds from 1 in 4 to 1 in 3; eliminating two makes it 1 in 2.

### Worked example

Ana has 2 minutes left in Mathematics Knowledge on the CAT with 3 questions to go. She reads the next question, crosses out two choices that are clearly too large, picks the better of the remaining two, and moves on to the next real question. She does **not** click through the last three at random.`
    },
    {
      id: 'tstrat4-mc',
      type: 'multiple-choice' as const,
      content: '**CAT or paper?** 🎯',
      exercise: {
        questions: [
          {
            question: "Time runs out on a CAT-ASVAB subtest with two questions you never reached. How are those two questions scored?",
            options: ['They are dropped and do not affect the score', 'As if you had guessed at random on them', 'As automatically correct, since time was the problem', 'They are saved for you to finish at the end'],
            correctAnswer: 1,
            explanation: 'The CAT applies a penalty that scores unfinished questions as if you had answered them at random. There is no way to come back to them.'
          },
          {
            question: "On the CAT, you have 90 seconds left and 4 questions to go. What does the official guidance recommend?",
            options: ['Click any answer on all four to finish', 'Stop and let the clock run out', 'Keep reading and genuinely answering as many as you can', 'Skip to the last question and work backward'],
            correctAnswer: 2,
            explanation: 'The official CAT advice is to keep reading and genuinely answering, because several incorrect answers toward the end of a subtest bring a relatively large penalty.'
          },
          {
            question: "On the paper ASVAB, you have 30 seconds left and 5 unanswered questions. What should you do?",
            options: ['Leave them blank to avoid a guessing penalty', 'Fill in an answer for every one of them', 'Answer only the first one carefully', 'Erase your least confident earlier answers'],
            correctAnswer: 1,
            explanation: 'On paper, blanks are scored as wrong and there is no penalty for guessing, so fill in every remaining answer.'
          },
          {
            question: "You can rule out two of the four choices on a question. What are your odds of guessing right among the rest?",
            options: ['1 in 4', '1 in 3', '1 in 2', '3 in 4'],
            correctAnswer: 2,
            explanation: 'Two choices remain, so a guess between them is right 1 time in 2, double the 1 in 4 of a blind guess.'
          }
        ]
      }
    },
    {
      id: 'tstrat4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the rule to the format.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: '"There is no penalty for guessing" is official advice for:',
            options: ['the paper test', 'the CAT', 'both formats equally', 'neither format'],
            correctAnswer: 0
          },
          {
            label: 'A relatively large penalty for several wrong answers late in a subtest applies to:',
            options: ['the CAT', 'the paper test', 'both formats equally', 'neither format'],
            correctAnswer: 0
          },
          {
            label: 'Unanswered questions are scored as wrong on:',
            options: ['the paper test', 'the CAT', 'both formats equally', 'neither format'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['the paper test', 'the CAT', 'the paper test'],
        hint1: 'Where should every bubble be filled?',
        hint2: 'Which format adapts and watches your answer pattern?',
        hint3: 'On the CAT, unfinished items are scored as random guesses instead.',
        explanation: 'Paper: guess on everything, blanks are wrong. CAT: unfinished questions are scored like random guesses, and several wrong answers late in a subtest bring a relatively large penalty, so keep answering genuinely.'
      }
    },
    {
      id: 'tstrat4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **CAT:** unfinished questions are scored **as if guessed at random**; several wrong answers **late in a subtest** bring a relatively large penalty. If time is short, **keep reading and genuinely answering**.
- **Paper:** blanks are **wrong** and there is **no guessing penalty**, so answer everything.
- On both, **eliminate** wrong choices before an educated guess.
- The time limits are generous; the penalty is almost never needed.

> **Up Next:** Part 5 — test day at MEPS or a MET site.`
    }
  ]
};
