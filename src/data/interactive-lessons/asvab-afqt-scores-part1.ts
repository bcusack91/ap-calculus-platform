export const asvabAfqtScoresPart1Data = {
  topicSlug: 'asvab-afqt-scores',
  sections: [
    {
      id: 'afqt1-intro',
      type: 'text' as const,
      content: `# 🎖️ Your AFQT, Line Scores and Job Eligibility

**Part 1 of 7 — How ASVAB Scores Work**

### Topic Overview

| Part | Topic |
|:---:|:---|
| 1 | How ASVAB scores work |
| 2 | Standard scores and the VE composite |
| 3 | The AFQT formula and percentile |
| 4 | AFQT categories and branch minimums |
| 5 | Line scores and job eligibility |
| 6 | Retests, PiCAT and score strategy |
| 7 | Mastery check |

### Nobody "passes" the ASVAB

There is no pass mark. The ASVAB gives you a set of scores, and the military uses them for three different jobs:

1. **Enlistment eligibility.** One number, the **AFQT** (Armed Forces Qualification Test score), decides whether a branch can take you.
2. **Job assignment.** Each service combines your subtest scores into **line scores** (also called composites or aptitude areas). Each military job lists the line scores it needs.
3. **Career exploration.** High-school students who take the ASVAB Career Exploration Program (CEP) get scores that compare them with students in their own grade.

So a "good score" depends on what you want: getting in, getting a particular job, or both.`
    },
    {
      id: 'afqt1-four',
      type: 'text' as const,
      content: `## The four subtests that decide whether you can enlist

The CAT-ASVAB (the computer version given at every MEPS) has **10 subtests and 135 scored questions**. Only **four** of them feed the AFQT:

| Subtest | In the AFQT? | Scored questions | Time limit (min) |
|:---|:---:|:---:|:---:|
| General Science (GS) | No | 15 | 12 |
| **Arithmetic Reasoning (AR)** | **Yes** | 15 | 55 |
| **Word Knowledge (WK)** | **Yes** | 15 | 9 |
| **Paragraph Comprehension (PC)** | **Yes** | 10 | 27 |
| **Mathematics Knowledge (MK)** | **Yes** | 15 | 31 |
| Electronics Information (EI) | No | 15 | 10 |
| Auto Information (AI) | No | 10 | 7 |
| Shop Information (SI) | No | 10 | 6 |
| Mechanical Comprehension (MC) | No | 15 | 22 |
| Assembling Objects (AO) | No | 15 | 18 |

The AFQT four are **55 of the 135 questions**. The other six subtests still matter a lot: they feed the line scores that open up specific jobs (Part 5).

> **Key Fact:** The AFQT comes from **AR, MK, WK and PC** only. Science, the technical subtests and Assembling Objects never change your AFQT.`
    },
    {
      id: 'afqt1-report',
      type: 'text' as const,
      content: `## What your score report shows

- A **standard score** for each subtest. It tells you how you compare with a national sample of young adults, not how many questions you got right (Part 2).
- Your **AFQT**, reported as a **percentile from 1 to 99**. An AFQT of 65 means you scored as well as or better than 65% of that national sample (Part 3).
- Your **line scores**, which each service calculates its own way (Part 5).

### Worked example

Jordan sees "AFQT 58" on a score sheet and tells a friend, "I only got 58% right." That is the most common score mistake. The AFQT is a **percentile**, not a percent correct. Jordan did as well as or better than 58% of the reference group, which is an above-average result.`
    },
    {
      id: 'afqt1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** See what you already know. 🔥',
      exercise: {
        questions: [
          {
            question: "Which group of subtests makes up the AFQT?",
            options: ['Arithmetic Reasoning, Mathematics Knowledge, Word Knowledge, Paragraph Comprehension', 'General Science, Arithmetic Reasoning, Word Knowledge, Mechanical Comprehension', 'Arithmetic Reasoning, Mathematics Knowledge, Electronics Information, Assembling Objects', 'Word Knowledge, Paragraph Comprehension, General Science, Auto Information'],
            correctAnswer: 0,
            explanation: 'The AFQT uses only the two math subtests (AR and MK) and the two verbal subtests (WK and PC). General Science, the technical subtests and Assembling Objects count toward line scores, not the AFQT.'
          },
          {
            question: "A recruit's score sheet shows an AFQT of 72. What does that number mean?",
            options: ['The recruit answered 72% of the AFQT questions correctly', 'The recruit matched or beat 72% of the reference group', 'The recruit passed with 72 points out of a possible 100', 'The recruit qualifies for 72% of the jobs in the branch'],
            correctAnswer: 1,
            explanation: 'The AFQT is a percentile from 1 to 99. A 72 means the recruit matched or beat 72% of the reference group of young adults. It is not a percent correct, there is no pass mark, and job eligibility comes from line scores.'
          },
          {
            question: "What decides which military jobs you qualify for?",
            options: ['Only your AFQT percentile', 'The number of subtests you finished early', 'Line scores built from subtest scores', 'Your score on Assembling Objects alone'],
            correctAnswer: 2,
            explanation: 'Each service combines subtest standard scores into line scores (composites), and each job lists the line scores it needs. The AFQT decides whether you can enlist at all.'
          }
        ]
      }
    },
    {
      id: 'afqt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- The ASVAB has **no pass or fail**. It is used for enlistment eligibility, job assignment and career exploration.
- The **AFQT** decides enlistment eligibility and comes from **AR, MK, WK and PC** (55 of the 135 CAT-ASVAB questions).
- **Line scores** from all the subtests decide which jobs you qualify for.
- The AFQT is a **percentile (1–99)**, never a percent correct.

> **Up Next:** Part 2 — what a standard score is, and how Word Knowledge and Paragraph Comprehension combine into VE.`
    }
  ]
};
