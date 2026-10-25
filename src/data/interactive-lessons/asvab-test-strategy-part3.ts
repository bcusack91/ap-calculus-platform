export const asvabTestStrategyPart3Data = {
  topicSlug: 'asvab-test-strategy',
  sections: [
    {
      id: 'tstrat3-intro',
      type: 'text' as const,
      content: `# ⏱️ CAT-ASVAB Strategy and Test Day

**Part 3 of 7 — Pacing Each Subtest**

### Average time per question

Divide each time limit by the number of scored questions (limits without tryout items):

| Subtest | Questions | Minutes | Average per question |
|:---|:---:|:---:|:---:|
| General Science | 15 | 12 | 48 s |
| Arithmetic Reasoning | 15 | 55 | about 3 min 40 s |
| Word Knowledge | 15 | 9 | 36 s |
| Paragraph Comprehension | 10 | 27 | about 2 min 42 s |
| Mathematics Knowledge | 15 | 31 | about 2 min 4 s |
| Electronics Information | 15 | 10 | 40 s |
| Auto Information | 10 | 7 | 42 s |
| Shop Information | 10 | 6 | 36 s |
| Mechanical Comprehension | 15 | 22 | 88 s |
| Assembling Objects | 15 | 18 | 72 s |

**How to compute it:** minutes × 60 ÷ questions. For Word Knowledge, $9 \\times 60 = 540$ seconds, and $540 \\div 15 = 36$ seconds per question.

### Three pace groups

| Group | Subtests | How to work |
|:---|:---|:---|
| **Fast recall** (under a minute each) | GS, WK, EI, AI, SI | You either know it or you use a quick strategy. Do not stare. |
| **Think it through** (about 1 to 1.5 min) | MC, AO | Picture the setup; sketch if it helps. |
| **Work on paper** (2 to 4 min) | AR, PC, MK | Set up the problem or reread the passage. You have time to be careful. |`
    },
    {
      id: 'tstrat3-checkpoints',
      type: 'text' as const,
      content: `## Use the on-screen counters

The CAT shows the **time remaining** and **questions remaining** in the lower-right corner of the screen. That gives you a simple check at any moment:

$$\\text{time available per remaining question} = \\frac{\\text{minutes left}}{\\text{questions left}}$$

Compare it with the subtest's average.

**Worked example 1.** Arithmetic Reasoning: 8 questions left and 30 minutes left. $30 \\div 8 = 3.75$ minutes per question, about the same as the 3 min 40 s average. You are on pace.

**Worked example 2.** Paragraph Comprehension: 6 questions left and 9 minutes left. $9 \\div 6 = 1.5$ minutes per question, well under the 2 min 42 s average. Speed up: read the question first, then scan the passage for the answer.

**Worked example 3.** Word Knowledge: 10 questions left and 6 minutes left. $6 \\div 10 = 0.6$ minutes = 36 seconds, exactly the average. Keep going at the same rhythm.

> **Key Fact:** The official site says the time limits are generous and most people finish early. Pacing is about **not getting stuck**, not about racing.`
    },
    {
      id: 'tstrat3-input',
      type: 'input-boxes' as const,
      content: `**Compute the average time per question, in seconds.** ✍️

**1)** Mechanical Comprehension: 15 questions in 22 minutes.

**2)** Electronics Information: 15 questions in 10 minutes.

**3)** Assembling Objects: 15 questions in 18 minutes.`,
      exercise: {
        boxes: 3,
        correctAnswers: ['88', '40', '72'],
        hint1: '$22 \\times 60 = 1320$ seconds, then divide by 15.',
        hint2: '$10 \\times 60 = 600$ seconds.',
        hint3: '$18 \\times 60 = 1080$ seconds.',
        explanation: '(1) $1320 \\div 15 = 88$ seconds. (2) $600 \\div 15 = 40$ seconds. (3) $1080 \\div 15 = 72$ seconds.'
      }
    },
    {
      id: 'tstrat3-mc',
      type: 'multiple-choice' as const,
      content: '**Read the counters.** 🎯',
      exercise: {
        questions: [
          {
            question: "During Arithmetic Reasoning, the screen shows 6 questions left and 15 minutes left. The subtest average is about 3 min 40 s per question. What should you do?",
            options: ['Speed up a little; 2.5 minutes remain per question', 'Slow down; you have extra time on every question', 'Guess randomly on the rest to save time', 'Nothing; the counters do not matter on the CAT'],
            correctAnswer: 0,
            explanation: '$15 \\div 6 = 2.5$ minutes per remaining question, less than the 3 min 40 s average, so tighten up while still working each problem. Random guessing is the wrong fix on the CAT (Part 4).'
          },
          {
            question: "Which subtest should you work through fastest, measured by average time per question?",
            options: ['Mathematics Knowledge', 'Paragraph Comprehension', 'Shop Information', 'Mechanical Comprehension'],
            correctAnswer: 2,
            explanation: 'Shop Information gives 6 minutes for 10 questions, 36 seconds each. MK is about 2 minutes, PC about 2 min 42 s, and MC 88 seconds.'
          },
          {
            question: "You have spent about 3 minutes on one Word Knowledge question. What is the best move?",
            options: ['Keep working until you are sure, since accuracy matters most', 'Pick your best answer and move on; the average is 36 s', 'Leave it blank and come back later', 'Ask for extra time by clicking HELP'],
            correctAnswer: 1,
            explanation: 'Word Knowledge averages 36 seconds per question. Make your best choice (eliminate what you can) and move on. There is no coming back on the CAT, and HELP is for problems such as needing more scratch paper.'
          }
        ]
      }
    },
    {
      id: 'tstrat3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Average time per question = **minutes × 60 ÷ questions**.
- **Fast recall** (under a minute): GS, WK, EI, AI, SI. **Think it through**: MC (88 s), AO (72 s). **Work on paper**: AR (about 3 min 40 s), PC (about 2 min 42 s), MK (about 2 min).
- Check pace with the **lower-right counters**: minutes left ÷ questions left, compared with the average.
- Time limits are generous; the goal is never getting stuck.

> **Up Next:** Part 4 — what happens if time runs out, and how to guess on the CAT versus paper.`
    }
  ]
};
