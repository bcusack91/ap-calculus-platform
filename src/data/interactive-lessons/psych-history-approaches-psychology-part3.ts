export const psychHistoryApproachesPart3Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo3-methods',
      type: 'text' as const,
      content: `
# 🧠 History & Approaches to Psychology

**Part 3 of 7 — Research Methods**

> 🔑 **Key Concept:** The first question to ask about any study is whether it is **experimental** (the researcher manipulates an independent variable and randomly assigns participants to groups) or **non-experimental** (case study, correlation, meta-analysis, or naturalistic observation). Only experiments can show cause and effect (skill 2.A).

### The Research Cycle

1. **Observe** a phenomenon and ask a question
2. **Form a hypothesis** (a falsifiable prediction)
3. **Operationally define** the variables and choose a method
4. **Collect and analyze data**
5. **Draw conclusions**, then share the work for **peer review** and **replication**

### Types of Research

| Method | Description | Strengths | Weaknesses |
|--------|------------|-----------|------------|
| **Experiment** | Manipulate an IV, randomly assign participants, measure a DV | Can establish causation | Lab settings may feel artificial |
| **Correlational study** | Measure two or more variables to see how they relate | Studies variables that cannot be manipulated | Cannot show causation (third variables, directionality) |
| **Case study** | In-depth study of one person or a small group | Rich detail; useful for rare conditions | Results may not generalize |
| **Naturalistic observation** | Observe behavior in its natural setting without interfering | Shows behavior as it really occurs | No control over variables; observers can be biased |
| **Meta-analysis** | Statistically combine the results of many studies on one question | Gives a stronger overall estimate than any single study | Only as good as the studies it includes |

**Surveys** are a technique that many non-experimental studies use. They reach many people quickly, but self-reports can suffer from **self-report bias** and **social desirability bias** (answering in the way that looks good).
      `
    },
    {
      id: 'histo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which research method can establish a cause-and-effect relationship?',
            options: [
              'Correlational study',
              'Meta-analysis',
              'Experiment',
              'Case study'
            ],
            correctAnswer: 2,
            explanation: 'Only an experiment, with a manipulated independent variable and random assignment, can establish causation.'
          },
          {
            question: 'A researcher gathers 45 published studies on exercise and mood and statistically combines their results into one overall estimate. This method is',
            options: [
              'a meta-analysis',
              'a case study',
              'a naturalistic observation',
              'an experiment'
            ],
            correctAnswer: 0,
            explanation: 'Combining the results of many studies on the same question into one estimate is a meta-analysis.'
          }
        ]
      }
    },
    {
      id: 'histo3-variables',
      type: 'text' as const,
      content: `
## Variables and Experimental Design

### Key Terms

- **Independent variable (IV):** what the researcher manipulates
- **Dependent variable (DV):** what is measured
- **Operational definition:** exactly how a variable is measured or manipulated, precise enough that someone else could replicate the study
- **Experimental group:** receives the treatment
- **Control group:** does not receive the treatment (or receives a placebo), for comparison
- **Random assignment:** each participant has an equal chance of being placed in any group, so groups start out similar
- **Confounding variable:** a variable other than the IV that differs between groups and could explain the results

### Example
Research question: Does caffeine improve test performance?
- IV: caffeine (200 mg in a drink vs. the same drink with no caffeine)
- DV: score on a 30-question vocabulary test (operational definition: number correct out of 30)
- Control group: decaffeinated drink
- Possible confound: if the caffeine group tests in the morning and the control group at night, time of day is confounded with caffeine

## Sampling: Who Is Studied

- **Population:** the whole group the researcher wants to draw conclusions about
- **Sample:** the participants actually studied
- **Random sampling:** every member of the population has an equal chance of being chosen, which makes the sample more **representative**
- **Convenience sampling:** studying whoever is easy to reach (such as one class), which risks **sampling bias**
- **Generalizability:** how far the results apply beyond the sample; it depends on how representative the sample is

**Representation matters.** If a sample leaves out groups (for example, only college students from one country), the results may not apply to those groups, and conclusions about "people in general" can be wrong.

### Measurement: Quantitative vs. Qualitative

| Type | What it produces | Example |
|------|-----------------|---------|
| **Quantitative** | Numbers that can be analyzed statistically | A Likert scale from 1 (strongly disagree) to 5 (strongly agree) |
| **Qualitative** | Descriptions in words | A structured interview asking open-ended questions |
      `
    },
    {
      id: 'histo3-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What type of research method is the ONLY one that can establish cause and effect?

      2) What is the term for the variable that the researcher manipulates? (two words)

      3) What process gives each participant an equal chance of being in any group? (two words)

      Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['experiment', 'independent variable', 'random assignment'],
        hint1: 'Starts with: E',
        hint2: 'Two words, starts with: I V',
        hint3: 'Two words, starts with: R A',
        explanation: 'Expected answers: experiment (the only method that establishes causation), independent variable (what is manipulated), and random assignment (creates equivalent groups).'
      }
    },
    {
      id: 'histo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Correlation does NOT prove _____',
            options: ['association', 'causation', 'relationship', 'correlation']
          },
          {
            label: 'Choosing participants so that every member of the population has an equal chance of being selected is random _____',
            options: ['assignment', 'sampling', 'variation', 'control']
          },
          {
            label: 'The variable that is measured in an experiment is the _____',
            options: ['independent variable', 'dependent variable', 'confound', 'control']
          }
        ],
        correctAnswers: ['causation', 'sampling', 'dependent variable'],
        hint1: 'The mantra of psychology: correlation does not equal ___.',
        hint2: 'This decides WHO is in the study, not which group they join.',
        hint3: 'This variable "depends" on what the researcher does.',
        explanation: 'Correlation cannot prove causation. Random sampling selects a representative sample from the population. The dependent variable is what is measured.'
      }
    },
    {
      id: 'histo3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Correlation does NOT mean there is no relationship. It means you CANNOT conclude causation. Even a strong correlation (r = +.90) is not proof of cause and effect.
- Random ASSIGNMENT is NOT random SAMPLING. Assignment places participants into groups (supports causation); sampling selects who participates (supports generalizability).
- A confounding variable is a variable that changes along WITH the IV, so you cannot tell which one caused the change in the DV.
- Naturalistic observation is NOT a case study. Observation watches behavior in natural settings; a case study investigates one person or small group in depth.

### AP Strategy Moves
- When asked "can we conclude causation?", check for (1) a manipulated IV, (2) random assignment, and (3) a comparison group. All three are needed.
- For correlations, name the specific problem: a **third variable** that could cause both, or a **directionality problem** (which variable came first?).
- On the AAQ, you will be asked to identify the research method and state an operational definition. Quote the study's own measure: "number correct out of 30," not "how smart they are."
      `
    },
    {
      id: 'histo3-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A study finds that students who sleep more have higher GPAs. A headline reads: "More sleep leads to better grades!" What is wrong with this headline?',
            options: [
              'It claims causation from a correlation, and a third variable such as motivation could explain both',
              'It overstates the result, since a sample this large exaggerates small differences in GPA',
              'It reverses the direction, since the study shows that higher grades lead to more sleep',
              'Nothing, since a link between sleep and grades shows that sleep improves academic performance'
            ],
            correctAnswer: 0,
            explanation: 'The study found an association, not a cause. A third variable such as motivation or time management could produce both more sleep and higher grades.'
          },
          {
            question: 'A researcher studies the effect of caffeine on reaction time. She lets 50 participants choose whether to drink coffee or water before the task. What is the biggest problem with this design?',
            options: [
              'Too small a sample, so 50 people cannot reveal any effect on reaction time',
              'No random assignment, so the groups may differ in ways besides caffeine',
              'Wrong method, since a survey of caffeine habits would show cause and effect more directly',
              'No valid measure, since reaction time cannot be measured reliably on a computer task'
            ],
            correctAnswer: 1,
            explanation: 'Without random assignment, the groups may differ in ways besides caffeine, such as regular coffee drinkers already being more alert. That confound prevents a causal conclusion.'
          },
          {
            question: 'A researcher surveys students in her own psychology class about study habits and concludes that "American teenagers study about 2 hours a night." What is the main weakness?',
            options: [
              'The survey used a quantitative measure instead of a qualitative one',
              'A convenience sample like this may not represent the population',
              'Survey questions about study habits cannot be operationally defined',
              'The study lacked a placebo group, so its findings cannot be trusted'
            ],
            correctAnswer: 1,
            explanation: 'One class is a convenience sample that is unlikely to represent American teenagers as a whole, so the results have limited generalizability.'
          }
        ]
      }
    }
  ]
}
