export const apStatsExpDesignPart4Data = {
  topicSlug: 'experimental-design-apstats',
  sections: [
    {
      id: 'experimentaldesign-p4-intro',
      type: 'text' as const,
      content: `# 📋 Types of Studies

**Part 4 of 7 — Observational Studies vs. Experiments**

---

### Two Types of Studies

| Feature | Observational Study | Experiment |
|---------|-------------------|------------|
| **Treatment** | No treatment imposed | Researcher imposes treatments |
| **Causation** | Cannot establish cause and effect | CAN establish cause and effect |
| **Random assignment** | Not applicable | Essential |
| **Examples** | Surveys, medical records | Clinical trials, A/B tests |

---

### Key Rule

> 💡 **Only experiments can establish causation.** Observational studies can only show association.

### Types of Observational Studies

| Type | Description |
|------|------------|
| **Sample survey** | Collects data at one point in time |
| **Prospective** | Follows subjects forward in time |
| **Retrospective** | Looks back at existing data |

### Example

“People who exercise more have lower rates of heart disease.”
- This is an **observational** finding (no one was assigned to exercise)
- We CANNOT say exercise **causes** lower heart disease from this alone
- Confounders: diet, genetics, socioeconomic status`
    },    {
      id: 'experimentaldesign-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'An observational study differs from an experiment because:',
            options: ['It uses larger samples', 'No treatment is imposed on subjects', 'It uses randomization', 'It always uses surveys'],
            correctAnswer: 1,
            explanation: 'In observational studies, researchers observe without imposing treatments.'
          },
          {
            question: 'Which study design CAN establish causation?',
            options: ['Retrospective study', 'Sample survey', 'Randomized experiment', 'Prospective observational study'],
            correctAnswer: 2,
            explanation: 'Only randomized experiments can establish cause-and-effect relationships.'
          },
          {
            question: 'A researcher finds that ice cream sales and drowning rates are correlated. This means:',
            options: ['Ice cream causes drowning', 'Drowning causes ice cream sales', 'There is likely a confounding variable (heat/summer)', 'The study is invalid'],
            correctAnswer: 2,
            explanation: 'Both increase in summer. Temperature is the confounding variable — correlation does not imply causation.'
          }
        ]
      }
    },    {
      id: 'experimentaldesign-p4-input',
      type: 'input-boxes' as const,
      content: `
**Study Classification** 🧮

Classify each as observational (O) or experimental (E):

**1)** Researchers survey 500 people about their diet and measure cholesterol levels.

**2)** 100 volunteers are randomly assigned to take vitamin D or a placebo for 6 months.

**3)** Hospital records are examined to compare outcomes of two surgical approaches.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['O', 'E', 'O'],
        hint1: 'Is any treatment imposed?',
        hint2: 'Random assignment to treatments',
        hint3: 'Looking back at existing data',
        explanation: '1) Observational — no treatment imposed. 2) Experiment — random assignment to treatments. 3) Observational (retrospective) — examining existing records.'
      }
    }
  ]
};
