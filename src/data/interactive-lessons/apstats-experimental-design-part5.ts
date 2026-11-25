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

$$\\text{Explanatory} \\leftarrow \\text{Confounder} \\rightarrow \\text{Response}$$

---

### Types of Bias

| Bias | Description | Example |
|------|------------|---------|
| **Undercoverage** | Some groups have little or no chance of being selected | Surveying only gym members about exercise |
| **Response bias** | Subjects give inaccurate answers | Asking about illegal behavior |
| **Nonresponse bias** | Many selected subjects don’t respond | Low survey return rate |
| **Response bias (wording)** | Question wording pushes answers one way | Leading questions |
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A confounding variable:',
            options: ['Appears only in experiments', 'Is linked to both explanatory and response', 'Disappears when the sample is large', 'Is the response variable itself'],
            correctAnswer: 1,
            explanation: 'A confounder is linked to both variables, making it impossible to isolate the explanatory variable’s effect.'
          },
          {
            question: 'Double-blinding means:',
            options: ['Giving every subject two different placebos', 'Neither subjects nor evaluators know', 'Running the whole experiment twice over', 'Using two separate control groups at once'],
            correctAnswer: 1,
            explanation: 'Double-blind: both subjects and evaluators are unaware of treatment assignments.'
          },
          {
            question: 'Which scenario shows voluntary response bias?',
            options: ['A random phone survey', 'A call-in poll on a TV show', 'A census of all employees', 'A stratified random sample'],
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

**1)** A study finds coffee drinkers live longer, but the coffee drinkers in it also had higher incomes. What kind of variable is income in this study? (confounding/response/explanatory)

**2)** In a drug trial, the patients do not know whether they get the real drug, but the doctors who evaluate them do. What kind of blinding does the trial have? (single/double)

**3)** A magazine asks readers to mail in a survey. What type of bias is this? (voluntary response/undercoverage/nonresponse)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['confounding', 'single', 'voluntary response'],
        acceptableAnswers: [['confounding variable', 'lurking', 'lurking variable'], ['single-blind', 'single blinding'], ['voluntary response bias', 'voluntary']],
        hint1: 'Income is linked to both coffee drinking and lifespan.',
        hint2: 'Count who is kept unaware: the patients, the evaluators or both.',
        hint3: 'Only motivated readers respond',
        explanation: '1) Confounding: income is associated with both coffee drinking and lifespan, so its effect cannot be separated from the effect of coffee. 2) Single-blind: only the patients are unaware of their treatment. 3) Voluntary response bias — only interested readers participate.'
      }
    }
  ]
};
