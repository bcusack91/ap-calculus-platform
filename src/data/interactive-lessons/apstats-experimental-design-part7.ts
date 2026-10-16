export const apStatsExpDesignPart7Data = {
  topicSlug: 'experimental-design-apstats',
  sections: [
    {
      id: 'experimentaldesign-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Concepts Checklist

- [ ] Three principles: Control, Randomization, Replication
- [ ] Observational vs. Experimental studies
- [ ] Completely randomized design
- [ ] Randomized block design & matched pairs
- [ ] Sources of bias (undercoverage, response, nonresponse, voluntary response)
- [ ] Confounding variables
- [ ] Blinding (single and double)
- [ ] Placebo and placebo effect

### AP Exam Tips

- “Explain why” = give a reason connected to bias or variability
- Always mention **random assignment** when describing experiments
- Use the word **cause** only with experiments, never with observational studies`
    },    {
      id: 'experimentaldesign-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which can establish a cause-and-effect relationship?',
            options: ['A large observational study', 'A survey with 10,000 responses', 'A randomized experiment', 'A long retrospective study'],
            correctAnswer: 2,
            explanation: 'Only randomized experiments can establish causation, regardless of sample size.'
          },
          {
            question: 'Replication in experimental design means:',
            options: ['Giving each subject every treatment', 'Using enough units per treatment', 'Using two identical treatments', 'Measuring each response twice'],
            correctAnswer: 1,
            explanation: 'Replication means applying each treatment to enough experimental units that chance variation can be separated from real treatment effects. Giving each subject every treatment describes a matched pairs (or repeated measures) design.'
          },
          {
            question: 'A matched pairs design is best when:',
            options: ['There are many treatment groups', 'Each subject can receive both treatments', 'The sample size is very large', 'Random assignment is impossible'],
            correctAnswer: 1,
            explanation: 'Matched pairs works best when subjects can be paired (or the same subject measured twice) to reduce variability.'
          }
        ]
      }
    },    {
      id: 'experimentaldesign-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Review** 🧮

**1)** In a randomized block design, you randomize WITHIN blocks. True or False?

**2)** Can an observational study prove causation? (yes/no)

**3)** What does a placebo control for? (confounding/placebo effect/sample size)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['true', 'no', 'placebo effect'],
        hint1: 'Blocking groups similar units, then...',
        hint2: 'Only experiments can prove...',
        hint3: 'Why give a fake treatment?',
        explanation: '1) True — randomize within each block. 2) No — only experiments establish causation. 3) The placebo effect — so improvements aren’t just from believing they got treatment.'
      }
    }
  ]
};
