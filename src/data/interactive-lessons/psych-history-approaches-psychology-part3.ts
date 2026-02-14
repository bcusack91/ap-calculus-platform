export const psychHistoryApproachesPart3Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo3-methods',
      type: 'text' as const,
      content: `
# ## Research Methods in Psychology

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
# ## Variables & Experimental Design

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
      id: 'histo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an experiment testing if music affects study performance, the independent variable is:',
            options: [
              'Study performance',
              'Music (present or absent)',
              'The time of day',
              'The participants\' age'
            ],
            correctAnswer: 1,
            explanation: 'The independent variable is what the researcher manipulates — in this case, whether music is present or absent during studying.'
          }
        ]
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
    }
  ]
}
