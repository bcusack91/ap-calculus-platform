export const apStatsCollectingDataPart6Data = {
  topicSlug: 'collecting-data-apstats',
  sections: [
    {
      id: 'apstats-collectingdata-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Applying Study Design Concepts**

---

### Strategy for AP Statistics Study Design Questions

1. **Identify the study type** — Is a treatment being imposed? If yes → experiment. If no → observational.
2. **Check for bias** — Look for selection bias, nonresponse, response bias, voluntary response.
3. **Identify confounding** — What other variables could explain the observed relationship?
4. **Evaluate design** — Does it use random assignment? Control group? Blinding? Blocking?

---

### Worked Example 1

**Scenario:** A school wants to test whether a new math curriculum improves test scores. They implement the new curriculum in School A and keep the old one in School B, then compare end-of-year scores.

**Analysis:**
- ❌ Not a randomized experiment — schools were not randomly assigned
- ⚠️ Confounding: Schools may differ in student demographics, teacher quality, funding
- 🔧 Better design: Randomly assign classrooms within the SAME school to old vs. new curriculum

---

### Worked Example 2

**Scenario:** Researchers want to know if a new drug lowers cholesterol. They recruit 200 volunteers, randomly assign 100 to the drug and 100 to a placebo, and measure cholesterol after 3 months. Neither patients nor doctors know who gets which pill.

**Analysis:**
- ✅ Randomized experiment — can establish causation
- ✅ Control group (placebo) — accounts for placebo effect
- ✅ Double-blind — reduces bias from expectations
- ✅ Replication — 100 per group is adequate`
    },
    {
      id: 'apstats-collectingdata-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Workshop Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A study finds that students who eat breakfast score higher on tests. A headline reads "Breakfast causes better test scores." What is wrong?',
            options: ['Nothing — the study proves it', 'The sample was too small', 'Observational study cannot establish causation', 'The test was biased'],
            correctAnswer: 2,
            explanation: 'This is likely an observational study. Confounders (e.g., family income, sleep habits) may explain both breakfast eating and higher scores.'
          },
          {
            question: 'In a double-blind experiment, who does NOT know which treatment a subject receives?',
            options: ['Only the subject', 'Only the researcher', 'Both the subject and the researcher', 'The statistician analyzing the data'],
            correctAnswer: 2,
            explanation: 'Double-blind means neither the subjects nor the researchers interacting with them know the treatment assignment.'
          },
          {
            question: 'A placebo is used in experiments to:',
            options: ['Increase sample size', 'Account for the psychological effect of receiving treatment', 'Make the study observational', 'Reduce the cost of the study'],
            correctAnswer: 1,
            explanation: 'A placebo controls for the placebo effect — the tendency for people to improve simply because they believe they are being treated.'
          }
        ]
      }
    }
  ]
};
