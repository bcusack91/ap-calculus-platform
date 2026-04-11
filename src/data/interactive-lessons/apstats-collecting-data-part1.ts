export const apStatsCollectingDataPart1Data = {
  topicSlug: 'collecting-data-apstats',
  sections: [
    {
      id: 'apstats-collectingdata-p1-intro',
      type: 'text' as const,
      content: `# 📊 Collecting Data & Study Design

**Part 1 of 7 — Observational Studies vs. Experiments**

---

### Two Ways to Gather Data

| Study Type | Description | Can Establish Causation? |
|-----------|-------------|------------------------|
| **Observational Study** | Researcher observes without intervening | ❌ No — only association |
| **Experiment** | Researcher actively imposes treatments | ✅ Yes — with proper design |

> 🔑 **Key Principle:** Only a well-designed **experiment** can establish a cause-and-effect relationship.

---

### Observational Studies

In an observational study, researchers simply observe and record data without manipulating any variables.

**Types:**
- **Retrospective** — looks at past data (e.g., medical records)
- **Prospective** — follows subjects forward in time (e.g., tracking diet over 10 years)

**Example:** Studying whether coffee drinkers have lower rates of depression by surveying existing habits.

> ⚠️ **Confounding variables** lurk in observational studies. Maybe coffee drinkers also exercise more — that could be the real reason for lower depression.

---

### Experiments

In an experiment, the researcher **imposes treatments** on subjects and measures the response.

**Key Elements:**
| Element | Definition |
|---------|-----------|
| **Explanatory variable** | What the researcher manipulates (treatment) |
| **Response variable** | What is measured as the outcome |
| **Experimental units** | The individuals being studied |
| **Treatments** | Specific conditions applied to units |`
    },
    {
      id: 'apstats-collectingdata-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher surveys 500 adults about their exercise habits and cholesterol levels. This is:',
            options: ['An experiment', 'An observational study', 'A census', 'A simulation'],
            correctAnswer: 1,
            explanation: 'No treatment was imposed — the researcher only observed existing habits. This is an observational study.'
          },
          {
            question: 'Which study design can establish causation?',
            options: ['Observational study', 'Survey', 'Randomized experiment', 'Case study'],
            correctAnswer: 2,
            explanation: 'Only randomized experiments with proper controls can establish cause-and-effect relationships.'
          },
          {
            question: 'A confounding variable is one that:',
            options: ['Is the response variable', 'Is related to both the explanatory and response variables', 'Is randomly assigned', 'Has no effect on the study'],
            correctAnswer: 1,
            explanation: 'A confounding variable is associated with both the explanatory and response variables, making it impossible to determine which is the true cause.'
          }
        ]
      }
    },
    {
      id: 'apstats-collectingdata-p1-input',
      type: 'input-boxes' as const,
      content: `
**Identifying Study Components** 🧮

A pharmaceutical company randomly assigns 200 patients to receive either a new drug or a placebo, then measures blood pressure after 8 weeks.

**1)** What is the explanatory variable? (drug/placebo or blood pressure)

**2)** How many treatment groups are there?

**3)** Can this study establish causation? (yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['drug/placebo', '2', 'yes'],
        hint1: 'The explanatory variable is what the researcher manipulates.',
        hint2: 'Two groups: drug and placebo.',
        hint3: 'Random assignment + imposed treatment = causation possible.',
        explanation: '1) drug/placebo (what is manipulated). 2) 2 groups. 3) Yes — randomized experiment.'
      }
    },
    {
      id: 'apstats-collectingdata-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Study Design Classification** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: 'Surveying students about study habits and GPA', options: ['Experiment', 'Observational study'] },
          { label: 'Randomly assigning fertilizer types to garden plots', options: ['Experiment', 'Observational study'] },
          { label: 'Reviewing hospital records for surgery outcomes', options: ['Experiment', 'Observational study'] },
          { label: 'Giving half a class tutoring sessions, half none', options: ['Experiment', 'Observational study'] }
        ],
        correctAnswers: ['Observational study', 'Experiment', 'Observational study', 'Experiment'],
        hint1: 'No manipulation → observational.',
        hint2: 'Random assignment of treatments → experiment.',
        hint3: 'Past records, no intervention.',
        explanation: 'Experiments impose treatments; observational studies do not.'
      }
    }
  ]
};
