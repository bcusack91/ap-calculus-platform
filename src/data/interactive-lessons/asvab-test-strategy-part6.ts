export const asvabTestStrategyPart6Data = {
  topicSlug: 'asvab-test-strategy',
  sections: [
    {
      id: 'tstrat6-intro',
      type: 'text' as const,
      content: `# ⏱️ CAT-ASVAB Strategy and Test Day

**Part 6 of 7 — Study Plans and Common Traps**

### Three principles behind any plan

1. **AFQT four first and deepest.** AR, MK, WK and PC decide whether you can enlist at all, and VE (from WK and PC) counts double in the AFQT.
2. **Then the line scores for the jobs you want.** Ask your recruiter which line scores your target jobs use, and give extra time to those subtests (for example, MC and AS for mechanical jobs, AO for many Navy ratings).
3. **Practice the way you will test.** Timed, no calculator, scratch paper, and no going back to change an answer.

Start with a diagnostic so you know where you stand, and take a full timed practice test near the end of your plan.`
    },
    {
      id: 'tstrat6-plans',
      type: 'text' as const,
      content: `## The 4-week plan (about 1 hour a day)

| Week | Focus |
|:---:|:---|
| 1 | Diagnostic. Then AR and MK basics: fractions, decimals, percents, ratios, one-variable equations. Daily vocabulary for WK. |
| 2 | AR word problems and MK geometry. PC practice: main idea, details, inference. Keep daily vocabulary going. |
| 3 | Your weakest AFQT subtest, plus the technical subtests your target jobs need. Timed sets of 10 to 15 questions. |
| 4 | A full timed practice test early in the week, review every miss, then light review and rest before test day. |

## The 8-week plan (about 45 minutes a day)

| Weeks | Focus |
|:---:|:---|
| 1–2 | Diagnostic. Rebuild arithmetic by hand: whole numbers, fractions, decimals, percents. Start a vocabulary list and word-parts study. |
| 3–4 | AR word problems (rates, ratios, percents, averages) and MK algebra and geometry. PC strategies twice a week. |
| 5–6 | Technical subtests for your target jobs (GS, EI, AI, SI, MC, AO). Timed sets on every AFQT subtest each week. |
| 7 | Full timed practice test. Review every miss by type: knowledge gap, careless error, or time pressure. |
| 8 | Targeted fixes, a second full practice test if time allows, then rest the day before. |

### How to review a missed question

Sort every miss into one of three bins and fix the cause:

| Why you missed it | Fix |
|:---|:---|
| Did not know the content | Go back to that lesson and redo its checks |
| Careless error | Write each step on scratch paper and check units and signs |
| Ran short on time | Practice timed sets at that subtest's average pace |`
    },
    {
      id: 'tstrat6-traps',
      type: 'text' as const,
      content: `## Common traps on the CAT-ASVAB

| Trap | Why it costs points | Do this instead |
|:---|:---|:---|
| Planning to "come back later" | The CAT never lets you return to an answered question | Give each question your best answer the first time |
| Clicking random answers when time is short | Several wrong answers late in a subtest bring a relatively large penalty | Keep reading and answering genuinely |
| Dwelling on a locked answer | Steals time and focus from questions that still count | Let it go and reset |
| Panicking when questions get hard | Harder questions usually mean you are doing well | Expect it and keep working |
| Practicing with a calculator | No calculator on test day | Do all practice math by hand |
| Ignoring the technical subtests | They set your line scores and job options | Study the ones your target jobs use |
| Guessing that a question is a tryout item | Tryout items cannot be identified | Treat every question as scored |

### Worked example: building a plan

Taylor has 4 weeks, a high-school diploma, and wants a mechanical job. A diagnostic shows strong WK and PC but weak AR. Taylor's plan: AR every day in weeks 1–2, keep verbal skills fresh with short sets, MC and AS study in week 3 (her target job's line scores use them), and a full timed practice test at the start of week 4.`
    },
    {
      id: 'tstrat6-mc',
      type: 'multiple-choice' as const,
      content: '**Plan smart.** 🎯',
      exercise: {
        questions: [
          {
            question: "With only 4 weeks to prepare and an enlistment goal, where should most study time go first?",
            options: ['Assembling Objects and Shop Information', 'AR, MK, WK and PC, the AFQT subtests', 'General Science and Electronics Information', 'Whichever subtest has the most scored questions'],
            correctAnswer: 1,
            explanation: 'The AFQT four decide enlistment eligibility, so they come first. After that, study the subtests behind the line scores your target jobs use.'
          },
          {
            question: "During practice, Chris misses an AR question because he multiplied 0.4 × 30 as 1.2. Which bin does the miss belong in?",
            options: ['Did not know the content', 'Careless error', 'Ran short on time', 'Tryout item'],
            correctAnswer: 1,
            explanation: 'Chris knows how to multiply decimals but slipped on the decimal point, so it is a careless error. The fix is writing each step on scratch paper and checking the size of the answer (0.4 × 30 must be 12).'
          },
          {
            question: "Which practice habit best matches the CAT-ASVAB's rules?",
            options: ['Skipping hard questions and returning to them at the end', 'Using a calculator to save time on arithmetic', 'Answering each question once, timed, with pencil and paper', 'Reviewing every answer before submitting each practice set'],
            correctAnswer: 2,
            explanation: 'The CAT allows no going back and no calculator, so practice should be timed, by hand, one answer per question. The other habits train you for rules the CAT does not have.'
          }
        ]
      }
    },
    {
      id: 'tstrat6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Fix the trap.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The questions in a subtest suddenly feel harder. This usually means:',
            options: ['you are answering correctly', 'you are failing the subtest', 'the computer has frozen', 'you reached a tryout section'],
            correctAnswer: 0
          },
          {
            label: 'Your target job uses a mechanical line score. After the AFQT four, give extra time to:',
            options: ['the subtests in that line score', 'Word Knowledge only', 'no other subtests', 'the subtest with the fewest questions'],
            correctAnswer: 0
          },
          {
            label: 'The best time for a full timed practice test is:',
            options: ['near the end of your plan, with time to review', 'the morning of the real test', 'never, because sets are enough', 'only after you pass the real test'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['you are answering correctly', 'the subtests in that line score', 'near the end of your plan, with time to review'],
        hint1: 'Correct answers usually lead to harder questions.',
        hint2: 'Line scores decide job eligibility.',
        hint3: 'You need time to fix what the practice test shows.',
        explanation: 'Rising difficulty usually means correct answers. After the AFQT four, study the subtests your target job\'s line scores use. Take the full practice test late enough to be realistic but early enough to review.'
      }
    },
    {
      id: 'tstrat6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- **AFQT four first**, then the subtests behind your target jobs' line scores.
- **4-week plan**: about an hour a day, full practice test early in week 4. **8-week plan**: rebuild basics by hand, then technical subtests, then two practice tests.
- Review misses by cause: **content, careless, or time**.
- Avoid the traps: no coming back, no random clicking, no calculator, no panic when it gets hard.

> **Up Next:** Part 7 — mastery check.`
    }
  ]
};
