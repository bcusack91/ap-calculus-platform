export const asvabAfqtScoresPart2Data = {
  topicSlug: 'asvab-afqt-scores',
  sections: [
    {
      id: 'afqt2-intro',
      type: 'text' as const,
      content: `# 🎖️ Your AFQT, Line Scores and Job Eligibility

**Part 2 of 7 — Standard Scores and the VE Composite**

### What a standard score measures

Every ASVAB subtest is reported as a **standard score**. Standard scores compare you with a national reference group: about 6,000 young people aged 18 to 23 who took the CAT-ASVAB in 1997 (the "PAY97" sample). The current national norms based on that sample have been in use since 2004.

The scale is built so that:

| Standard score | What it means |
|:---:|:---|
| 50 | The average of the reference group (about half score 50 or higher) |
| 60 | One standard deviation above average (only about 16% score 60 or higher) |
| 10 points | One standard deviation, the "step size" of the scale |

So each subtest score tells you **where you stand**, not how many questions you got right.

### Why the CAT-ASVAB does not count right answers

On the computer test, your score is an **ability estimate**. It depends on *which* questions you answered correctly: how hard they were, how well they separate strong and weak test-takers, and how easy they are to guess. Two people with the same number right can get different standard scores. That is why no official table turns "number correct" into a CAT standard score, and why any practice-test score (including ours) is an **estimate with a range**.`
    },
    {
      id: 'afqt2-ve',
      type: 'text' as const,
      content: `## VE: Word Knowledge and Paragraph Comprehension combined

The AFQT does not use WK and PC separately. It uses one verbal composite called **VE (Verbal Expression)**.

- VE is a **weighted blend** of the WK and PC standard scores.
- **WK counts more.** Point for point, PC gets about 0.62 of WK's weight.
- The blend is then put back on the same scale as every subtest: **mean 50, standard deviation 10**.

That last step matters. **VE is not WK + PC.** A recruit with WK 55 and PC 55 does not have a VE of 110. VE is a standard score like any other, so it lands near the other scores; with WK and PC both at 55, VE will also be in the mid-50s.

### Worked example

Two recruits each improve one verbal subtest by 5 standard-score points.

- Recruit 1 raises **WK** from 48 to 53.
- Recruit 2 raises **PC** from 48 to 53.

Both VE scores go up, but Recruit 1's goes up **more**, because WK carries the larger weight. (Practically: WK has 15 questions in 9 minutes, so vocabulary study pays off quickly.)

### A second composite you will see: AS

On the CAT, Auto Information (AI) and Shop Information (SI) are separate subtests, but the services combine them into one **AS (Auto & Shop)** composite with **equal** weights, again re-scaled to mean 50, SD 10. Line-score formulas use AS, not AI and SI.`
    },
    {
      id: 'afqt2-mc',
      type: 'multiple-choice' as const,
      content: '**Read the scale.** 🎯',
      exercise: {
        questions: [
          {
            question: "A recruit's Mathematics Knowledge standard score is 50. What does that tell you?",
            options: ['The recruit got half of the MK questions right', 'The recruit scored at the reference-group average', 'The recruit is in the top 16% for Mathematics Knowledge', 'The recruit just missed the passing mark for MK'],
            correctAnswer: 1,
            explanation: 'Standard scores have a mean of 50, so 50 is exactly average for the reference group. It is not a percent correct, the top 16% begins around 60, and there is no passing mark.'
          },
          {
            question: "About what share of the reference group scores 60 or higher on a subtest?",
            options: ['About 50%', 'About 60%', 'About 16%', 'About 6%'],
            correctAnswer: 2,
            explanation: 'A 60 is one standard deviation above the mean of 50, and only about 16% of the reference group reaches it. About half score 50 or higher.'
          },
          {
            question: "Two CAT-ASVAB test-takers each answer 11 of 15 Arithmetic Reasoning questions correctly. Which statement is true?",
            options: ['Their AR standard scores must be identical', 'The one who finished faster gets the higher standard score', 'Both standard scores are exactly 11 out of 15, or 73', 'Their scores can differ, depending on which items they got right'],
            correctAnswer: 3,
            explanation: 'The CAT score is an ability estimate that depends on the difficulty and other properties of the questions each person answered correctly, so equal counts can give different scores. Speed does not earn points.'
          }
        ]
      }
    },
    {
      id: 'afqt2-dropdown',
      type: 'dropdown-select' as const,
      content: '**VE and AS.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'VE is built from:',
            options: ['Word Knowledge and Paragraph Comprehension', 'Arithmetic Reasoning and Word Knowledge', 'Paragraph Comprehension and General Science', 'Word Knowledge and Mathematics Knowledge'],
            correctAnswer: 0
          },
          {
            label: 'Inside VE, the subtest with the larger weight is:',
            options: ['Word Knowledge', 'Paragraph Comprehension', 'neither, they are weighted equally', 'whichever score is higher'],
            correctAnswer: 0
          },
          {
            label: 'A recruit with WK 58 and PC 58 has a VE score:',
            options: ['in the high 50s, on the same scale', 'of exactly 116', 'below 50, because PC is weighted less', 'that cannot be above 50'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Word Knowledge and Paragraph Comprehension', 'Word Knowledge', 'in the high 50s, on the same scale'],
        hint1: 'VE is the verbal composite.',
        hint2: 'PC gets about 0.62 of the weight WK gets.',
        hint3: 'VE is re-scaled to mean 50, SD 10, like every subtest.',
        explanation: 'VE blends WK and PC, with WK weighted more heavily, and is then re-scaled to mean 50 and standard deviation 10. So when WK and PC are both 58, VE is also in the high 50s, not 116.'
      }
    },
    {
      id: 'afqt2-mc2',
      type: 'multiple-choice' as const,
      content: '**Which composite?** 🧩',
      exercise: {
        questions: [
          {
            question: "Service line-score formulas use a composite called AS. Which two CAT-ASVAB subtests does it combine?",
            options: ['Arithmetic Reasoning and Shop Information', 'Auto Information and Shop Information', 'Assembling Objects and Science', 'Auto Information and Assembling Objects'],
            correctAnswer: 1,
            explanation: 'AS is the Auto & Shop composite: Auto Information and Shop Information with equal weights, re-scaled to mean 50, SD 10. On the paper test these two are already one combined subtest.'
          },
          {
            question: "Dana can spend one more week studying either Word Knowledge or Paragraph Comprehension, and expects the same standard-score gain either way. Which choice raises VE more?",
            options: ['Paragraph Comprehension, because it has fewer questions', 'Either one, because VE adds them equally', 'Word Knowledge, because it carries more weight in VE', 'Neither, because VE does not affect the AFQT'],
            correctAnswer: 2,
            explanation: 'WK has the larger weight in VE (PC counts about 0.62 as much per point), so an equal gain on WK moves VE further. VE matters a great deal for the AFQT, as Part 3 shows.'
          }
        ]
      }
    },
    {
      id: 'afqt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Standard scores: **mean 50, standard deviation 10**, compared with a 1997 national sample of 18- to 23-year-olds (norms in use since 2004). About 16% score 60 or higher.
- CAT scores are **ability estimates**, not counts of right answers, so practice scores are estimates with a range.
- **VE** = a weighted blend of **WK and PC**, with **WK counting more**, re-scaled to mean 50. It is **not** WK + PC.
- **AS** = Auto Information and Shop Information, equally weighted.

> **Up Next:** Part 3 — the AFQT formula, and how the sum turns into a percentile.`
    }
  ]
};
