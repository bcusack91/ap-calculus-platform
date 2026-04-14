export const apStatsExpDesignPart5Data = {
  topicSlug: 'experimental-design-apstats',
  sections: [
    {
      id: 'experimentaldesign-p5-intro',
      type: 'text' as const,
      content: `# ⚠️ Confounding and Bias

**Part 5 of 7 — Sources of Error**

---

### Confounding Variables

A **confounding variable** is associated with both the explanatory and response variables, making it impossible to determine which causes the effect.

$$\\\\text{Explanatory} \\\\leftarrow \\\\text{Confounder} \\\\rightarrow \\\\text{Response}$$

---

### Types of Bias

| Bias | Description | Example |
|------|------------|---------|
| **Selection bias** | Sample is not representative | Surveying only gym members about exercise |
| **Response bias** | Subjects give inaccurate answers | Asking about illegal behavior |
| **Nonresponse bias** | Many selected subjects don’t respond | Low survey return rate |
| **Measurement bias** | Instruments or questions are flawed | Leading questions |
| **Voluntary response bias** | Only motivated people respond | Online reviews |

### Placebo Effect and Blinding

- **Placebo:** An inactive treatment that looks identical to the real one
- **Single-blind:** Subjects don’t know which treatment they receive
- **Double-blind:** Neither subjects NOR researchers know who gets what

> 🔑 Double-blinding prevents both placebo effect AND researcher bias.`
    },    {
      id: 'experimentaldesign-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A confounding variable:',
            options: ['Only appears in experiments', 'Is associated with both the explanatory and response variables', 'Can be eliminated by using a large sample', 'Is the same as a lurking variable'],
            correctAnswer: 1,
            explanation: 'A confounder is linked to both variables, making it impossible to isolate the explanatory variable’s effect.'
          },
          {
            question: 'Double-blinding means:',
            options: ['Using two placebos', 'Neither subjects nor researchers know group assignments', 'Running the experiment twice', 'Using two control groups'],
            correctAnswer: 1,
            explanation: 'Double-blind: both subjects and evaluators are unaware of treatment assignments.'
          },
          {
            question: 'Which scenario shows voluntary response bias?',
            options: ['A random phone survey', 'An online poll asking viewers to call in', 'A census of all employees', 'A stratified random sample'],
            correctAnswer: 1,
            explanation: 'Call-in polls attract people with strong opinions, creating voluntary response bias.'
          }
        ]
      }
    },    {
      id: 'experimentaldesign-p5-input',
      type: 'input-boxes' as const,
      content: `
**Bias Identification** 🧮

**1)** A study finds coffee drinkers live longer. Name a possible confounding variable.

**2)** In a drug trial, patients know whether they get the real drug. What kind of blinding is missing? (single/double)

**3)** A magazine asks readers to mail in a survey. What type of bias is this? (voluntary response/selection/nonresponse)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['socioeconomic status', 'single', 'voluntary response'],
        hint1: 'What else differs between coffee drinkers and non-drinkers?',
        hint2: 'Patients should not know their treatment',
        hint3: 'Only motivated readers respond',
        explanation: '1) Socioeconomic status (or income, lifestyle, etc.). 2) Single-blinding is missing. 3) Voluntary response bias — only interested readers participate.'
      }
    }
  ]
};
