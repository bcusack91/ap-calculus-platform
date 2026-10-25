export const asvabTestStrategyPart1Data = {
  topicSlug: 'asvab-test-strategy',
  sections: [
    {
      id: 'tstrat1-intro',
      type: 'text' as const,
      content: `# ⏱️ CAT-ASVAB Strategy and Test Day

**Part 1 of 7 — The CAT-ASVAB at a Glance**

### Topic Overview

| Part | Topic |
|:---:|:---|
| 1 | The CAT-ASVAB at a glance |
| 2 | How the adaptive test works |
| 3 | Pacing each subtest |
| 4 | Guessing, unanswered items and the clock |
| 5 | Test day at MEPS or a MET site |
| 6 | Study plans and common traps |
| 7 | Mastery check |

### Which ASVAB will you take?

- **CAT-ASVAB** (computer adaptive): the version given at every MEPS (Military Entrance Processing Station) and most MET (Military Entrance Test) sites. **This course is built for it.**
- **Paper-and-pencil (P&P) ASVAB**: still used at a few MET sites. Same subjects, more questions, different rules (Part 4).
- **CEP ASVAB**: the high-school Career Exploration Program version, on paper or computer. It has no Assembling Objects subtest.
- **PiCAT**: an at-home, unproctored version of the CAT-ASVAB for first-time testers, confirmed later by a short proctored test.`
    },
    {
      id: 'tstrat1-table',
      type: 'text' as const,
      content: `## The 10 subtests, in the order you take them

| Order | Subtest | Scored questions | Time limit (min) |
|:---:|:---|:---:|:---:|
| 1 | General Science (GS) | 15 | 12 |
| 2 | Arithmetic Reasoning (AR) | 15 | 55 |
| 3 | Word Knowledge (WK) | 15 | 9 |
| 4 | Paragraph Comprehension (PC) | 10 | 27 |
| 5 | Mathematics Knowledge (MK) | 15 | 31 |
| 6 | Electronics Information (EI) | 15 | 10 |
| 7 | Auto Information (AI) | 10 | 7 |
| 8 | Shop Information (SI) | 10 | 6 |
| 9 | Mechanical Comprehension (MC) | 15 | 22 |
| 10 | Assembling Objects (AO) | 15 | 18 |
| | **Total** | **135** | **197** |

- Every question has **4 answer choices**.
- The time limits above apply when no tryout questions are included. Some test-takers also get unscored **tryout** questions, and then the limit for that subtest is longer.
- Most people finish each subtest early, and the whole session takes **about 2 hours on average**.
- The four AFQT subtests (AR, WK, PC, MK) are **2nd through 5th**, early in the session while you are fresh.

> **Key Fact:** 10 subtests, **135 scored questions**, always in the order GS, AR, WK, PC, MK, EI, AI, SI, MC, AO.`
    },
    {
      id: 'tstrat1-worked',
      type: 'text' as const,
      content: `## Worked example: reading the table

**Question.** How many scored questions are on the four AFQT subtests, and how many minutes do they get in total?

**Answer.** AR 15 + WK 15 + PC 10 + MK 15 = **55 questions**. Times: 55 + 9 + 27 + 31 = **122 minutes**.

So more than half of the 197 minutes of time limits belong to the four subtests that decide your AFQT. Arithmetic Reasoning alone gets 55 minutes for 15 questions, the most time per question on the test.`
    },
    {
      id: 'tstrat1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🔥',
      exercise: {
        questions: [
          {
            question: "Which subtest comes first on the CAT-ASVAB?",
            options: ['Arithmetic Reasoning', 'Word Knowledge', 'General Science', 'Assembling Objects'],
            correctAnswer: 2,
            explanation: 'The order is GS, AR, WK, PC, MK, EI, AI, SI, MC, AO. General Science is first and Assembling Objects is last.'
          },
          {
            question: "Which subtest gives you the most time per scored question?",
            options: ['Word Knowledge', 'Arithmetic Reasoning', 'Shop Information', 'Mechanical Comprehension'],
            correctAnswer: 1,
            explanation: 'AR allows 55 minutes for 15 questions, more than 3 minutes each. Mechanical Comprehension allows 88 seconds, and Word Knowledge and Shop Information well under a minute per question.'
          },
          {
            question: "How many answer choices does each CAT-ASVAB question have?",
            options: ['3', '4', '5', 'It varies by subtest'],
            correctAnswer: 1,
            explanation: 'Every question has 4 choices, A through D.'
          }
        ]
      }
    },
    {
      id: 'tstrat1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- The **CAT-ASVAB** is the computer version used at every MEPS and most MET sites.
- **10 subtests, 135 scored questions**, fixed order: GS, AR, WK, PC, MK, EI, AI, SI, MC, AO.
- Time limits add up to **197 minutes**, but most people finish early (about **2 hours** on average).
- Every question has **4 choices**.

> **Up Next:** Part 2 — how the adaptive test picks your questions, and why you cannot go back.`
    }
  ]
};
