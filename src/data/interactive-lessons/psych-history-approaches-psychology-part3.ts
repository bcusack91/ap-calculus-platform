export const psychHistoryApproachesPart3Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo3-methods',
      type: 'text' as const,
      content: `
## Research Methods in Psychology

### The Scientific Method

1. **Observe** a phenomenon
2. **Form a hypothesis** (testable prediction)
3. **Design and conduct** an experiment
4. **Analyze data** using statistics
5. **Draw conclusions** and replicate

### Types of Research

| Method | Description | Strengths | Weaknesses |
|--------|------------|-----------|------------|
| **Experiment** | Manipulate IV, measure DV | Establishes causation | Artificial setting |
| **Correlational** | Measure relationship between variables | Real-world data | Cannot prove causation |
| **Survey** | Self-report questionnaires | Large samples | Social desirability bias |
| **Case study** | In-depth study of one individual | Rich detail | Cannot generalize |
| **Naturalistic observation** | Observe in natural setting | Ecological validity | No control |
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
              'Correlation',
              'Survey',
              'Experiment',
              'Case study'
            ],
            correctAnswer: 2,
            explanation: 'Only experiments (with random assignment, control groups, and manipulation of variables) can establish causation.'
          }
        ]
      }
    },
    {
      id: 'histo3-variables',
      type: 'text' as const,
      content: `
## Variables & Experimental Design

### Key Terms

- **Independent variable (IV):** what the researcher manipulates
- **Dependent variable (DV):** what is measured
- **Control group:** no treatment (comparison)
- **Experimental group:** receives treatment
- **Random assignment:** each participant has equal chance of being in any group
- **Confounding variable:** uncontrolled variable that may affect results

### Example
Research question: Does caffeine improve test performance?
- IV: caffeine (yes/no)
- DV: test scores
- Control group: no caffeine
- Experimental group: caffeine given
      `
    },
    {
      id: 'histo3-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What type of research method is the ONLY one that can establish cause-and-effect?

      2) What is the term for the variable that the researcher manipulates? (two words)

      3) What process ensures each participant has an equal chance of being in any group? (two words)

      Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['experiment', 'independent variable', 'random assignment'],
        hint1: 'Starts with: E',
        hint2: 'Two words, starts with: I V',
        hint3: 'Two words, starts with: R A',
        explanation: 'Expected answers: experiment (only method establishing causation), independent variable (what is manipulated), and random assignment (ensures equivalent groups).'
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
            label: 'Correlation does NOT prove ___',
            options: ['association', 'causation', 'relationship', 'correlation']
          },
          {
            label: '___ assignment ensures groups are equivalent',
            options: ['Self', 'Random', 'Alphabetical', 'Age-based']
          },
          {
            label: 'The variable that is measured in an experiment is the ___',
            options: ['independent variable', 'dependent variable', 'confound', 'control']
          }
        ],
        correctAnswers: ['causation', 'Random', 'dependent variable'],
        hint1: 'The mantra of psychology: correlation ≠ ?',
        hint2: 'This eliminates selection bias.',
        hint3: 'This variable "depends" on what the researcher does.',
        explanation: 'Correlation cannot prove causation. Random assignment creates equivalent groups. The dependent variable is what is measured.'
      }
    },
    {
      id: 'histo3-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Correlation does NOT mean there is no relationship — it means you CANNOT conclude causation. A strong correlation (r = 0.90) is still NOT proof of cause-and-effect.
      - Random ASSIGNMENT is NOT the same as random SAMPLING — assignment distributes participants into groups; sampling selects who participates from the population.
      - A confounding variable is NOT the same as an extraneous variable — a confound systematically varies WITH the IV; an extraneous variable is any other variable.
      - Naturalistic observation is NOT the same as a case study — observation studies behavior in natural settings; case studies do in-depth investigation of individuals.

      ### AP Strategy Moves
      - When the AP exam asks "can we conclude causation?", check for: (1) manipulation of IV, (2) random assignment, (3) control group. All three needed.
      - Know the strengths AND weaknesses of each research method — the exam often asks you to evaluate a study's design.
      - "Correlation ≠ causation" is tested in nearly every AP Psychology exam — be ready to explain WHY (third variables, directionality problem).
      - For FRQ: if asked to design an experiment, always include IV, DV, control group, random assignment, and operational definitions.
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
            question: 'A study finds that students who sleep more have higher GPAs. A newspaper headline reads: "More sleep leads to better grades!" What is wrong with this headline?',
            options: [
              'It implies causation from a correlational finding — a third variable like motivation could explain both',
              'The study used too large a sample size',
              'Sleep and grades cannot be correlated',
              'The headline correctly reports the finding'
            ],
            correctAnswer: 0,
            explanation: 'This is a classic correlation ≠ causation error. The study only found an association. A third variable (e.g., motivation or time management) could cause BOTH more sleep and higher grades. Without random assignment and manipulation, causation cannot be claimed.'
          },
          {
            question: 'A researcher wants to study the effects of caffeine on reaction time. She has 50 participants drink either coffee or water, then measures their reaction time on a computer task. However, she lets participants choose which group they want to be in. What is the biggest problem with this design?',
            options: [
              'No random assignment — participants who choose coffee may differ systematically from those who choose water',
              'The sample size is too small',
              'She should have used a survey instead',
              'Reaction time cannot be measured on a computer'
            ],
            correctAnswer: 0,
            explanation: 'Without random assignment, the groups may differ in ways besides caffeine intake (e.g., regular coffee drinkers may choose coffee, and they may already have faster reaction times). This creates a confounding variable that makes causal conclusions impossible.'
          }
        ]
      }
    }
  ]
}
