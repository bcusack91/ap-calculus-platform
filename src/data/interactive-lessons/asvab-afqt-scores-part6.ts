export const asvabAfqtScoresPart6Data = {
  topicSlug: 'asvab-afqt-scores',
  sections: [
    {
      id: 'afqt6-intro',
      type: 'text' as const,
      content: `# 🎖️ Your AFQT, Line Scores and Job Eligibility

**Part 6 of 7 — Retests, PiCAT and Score Strategy**

### Which score counts

- Your **most recent valid score** is your score of record, **not your highest**. A retest that goes down replaces the better score.
- Scores can be used to enlist for **2 years** from the test date (they stay valid longer for people already in the Delayed Entry Program).
- Under Army rules, answering even **one question** counts as having taken the test.

### Retest waiting periods (Department of Defense policy)

| Attempt | Earliest date |
|:---|:---|
| First retest | 1 calendar month after the first test |
| Second retest | 1 calendar month after the first retest |
| Every retest after that | 6 months after the previous test |

The same waits apply whether your earlier test was a high-school (CEP) test or an enlistment test. If your AFQT jumps **20 or more points** within 6 months, you will be asked to take a **confirmation test (C-Test)**, which can be given right away. Being caught cheating means a 6-month wait.

**Strategy:** because the newest score replaces the old one, retest only when you have actually prepared. A month of real study between attempts is the minimum the rules allow, not a reason to rush back.`
    },
    {
      id: 'afqt6-picat',
      type: 'text' as const,
      content: `## Other ways scores are produced

| Version | Key rules |
|:---|:---|
| **PiCAT** (at home, unproctored CAT-ASVAB) | Only if you have **never taken the ASVAB**, and only **once**. Your recruiter gives you a code that expires 30 days after it is issued. No time limit per subtest, but you must finish within **48 hours** of starting (it usually takes 2–3 hours). Bring your own scratch paper and pencil. Only the recruiter sees the score. |
| **Verification test (Vtest)** | If your PiCAT score may qualify you, you take a short proctored Vtest (about 25–30 minutes) at a MEPS or MET site within **45 days**. It gives no score of its own; it confirms the PiCAT, which then becomes your score of record. |
| **APT** (AFQT Predictor Test) | 20 adaptive questions on AR, MK, WK and PC only, about 20–30 minutes, unlimited retakes. Only the recruiter sees it. It **predicts** your AFQT; it does not replace the ASVAB. |
| **CEP** (high-school ASVAB) | Grades 10–12 and postsecondary students. Juniors, seniors and postsecondary students can use their scores to enlist for up to 2 years. A test given by school staff needs a Vtest before it counts. The report shows Verbal (WK + PC), Math (MK + AR) and Science/Technical (GS + EI + MC) career exploration scores, plus the AFQT labeled "Military Entrance Score." The CEP has no Assembling Objects subtest. |`
    },
    {
      id: 'afqt6-strategy',
      type: 'text' as const,
      content: `## Where your study time buys the most AFQT

1. **Verbal counts double.** VE appears twice in AR + MK + 2 × VE. A 3-point VE gain adds 6 points to the sum, worth roughly 6 percentile points near the middle of the table.
2. **Inside VE, Word Knowledge counts more** than Paragraph Comprehension.
3. **Math is the other half.** AR and MK each count once. If you have been out of school a while, re-learning fractions, percents and basic algebra is usually the fastest way to raise them.

### Time per question on the AFQT subtests (CAT-ASVAB, without tryout items)

| Subtest | Questions | Minutes | Average time per question |
|:---|:---:|:---:|:---:|
| Arithmetic Reasoning | 15 | 55 | about 3 min 40 s |
| Word Knowledge | 15 | 9 | 36 s |
| Paragraph Comprehension | 10 | 27 | about 2 min 42 s |
| Mathematics Knowledge | 15 | 31 | about 2 min 4 s |

Word Knowledge is the fast one: you either know the word or you use a strategy quickly. AR gives you time to set up each problem on scratch paper.

### Common score traps

| Trap | The truth |
|:---|:---|
| "My AFQT is my percent correct." | It is a **percentile** against a national reference group. |
| "My best score counts." | The **most recent** valid score counts. |
| "Science and AO help my AFQT." | Only **AR, MK, WK and PC** count. The rest feed line scores. |
| "31 is the target." | 31 is a common **floor** (as of October 2026; confirm with a recruiter). Jobs depend on line scores. |
| "VE is WK + PC." | VE is a **weighted, re-scaled** blend, with WK counting more. |`
    },
    {
      id: 'afqt6-mc',
      type: 'multiple-choice' as const,
      content: '**Retests and score rules.** 🎯',
      exercise: {
        questions: [
          {
            question: "Rosa scored an AFQT of 54 in March and retested in April, scoring 49. Which score is her score of record?",
            options: ['The 54, because the higher score always counts', 'The 49, because the most recent valid score counts', 'An average of the two scores, about 52', 'Neither, until she takes a third test'],
            correctAnswer: 1,
            explanation: 'The most recent valid score is the score of record, not the highest. That is why you should retest only after real preparation.'
          },
          {
            question: "An applicant took the ASVAB on June 3 and the first retest on July 5. When is the earliest the second retest can happen?",
            options: ['August 5', 'January 5 of the next year', 'July 6', 'December 3'],
            correctAnswer: 0,
            explanation: 'The second retest may come 1 calendar month after the first retest, so August 5. The 6-month wait applies only from the third retest onward.'
          },
          {
            question: "Who can take the PiCAT at home?",
            options: ['Anyone, as many times as they like', 'Only applicants retesting after one month', 'Only applicants who have never taken the ASVAB', 'Only high-school juniors and seniors'],
            correctAnswer: 2,
            explanation: 'The PiCAT is for people who have never taken the ASVAB, and it can be taken only once. A qualifying result must then be confirmed by a proctored Vtest within 45 days.'
          },
          {
            question: "An applicant's AFQT rises from 38 to 61 within four months. What should the applicant expect?",
            options: ['The new score is thrown out automatically', 'A confirmation test, because the gain is 20 or more points', 'A required wait of 6 months before enlisting', 'Nothing, since the most recent score always stands'],
            correctAnswer: 1,
            explanation: 'A gain of 20 or more AFQT points within 6 months triggers a confirmation test (C-Test), which can be given right away. The gain here is 23 points.'
          }
        ]
      }
    },
    {
      id: 'afqt6-input',
      type: 'input-boxes' as const,
      content: `**Where do the points come from?** ✍️

A recruit currently has AR 49, MK 47 and VE 50.

**1)** The current AFQT sum:

**2)** The new sum if VE rises by 3 points (AR and MK unchanged):

**3)** The new sum if instead AR rises by 3 points (MK and VE unchanged):`,
      exercise: {
        boxes: 3,
        correctAnswers: ['196', '202', '199'],
        hint1: '$49 + 47 + 2(50)$.',
        hint2: 'Each VE point adds 2 to the sum.',
        hint3: 'Each AR point adds 1 to the sum.',
        explanation: '(1) $49 + 47 + 100 = 196$. (2) VE 53 gives $49 + 47 + 106 = 202$, the 50th percentile. (3) AR 52 gives $52 + 47 + 100 = 199$. The same 3-point gain is worth twice as much on VE.'
      }
    },
    {
      id: 'afqt6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- The **most recent** valid score counts, not the highest; scores are good for **2 years**.
- Retests: **1 month, 1 month, then 6 months**. A **20+ point** AFQT jump within 6 months brings a confirmation test.
- **PiCAT**: first-timers only, once, finish within 48 hours, confirm with a **Vtest within 45 days**. **APT** only predicts.
- Study time: **VE counts double**, WK counts more than PC, and AR + MK are the other half.

> **Up Next:** Part 7 — mastery check across the whole topic.`
    }
  ]
};
