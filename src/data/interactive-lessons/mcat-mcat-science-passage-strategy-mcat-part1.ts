export const mcatSciPassagePart1Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp1-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 1 of 7 — Understanding MCAT Science Passages**

### Passage Types on the MCAT

| Type | Description | What to Focus On |
|------|-------------|-----------------|
| **Experiment-based** | Describes research with methods + results | Independent/dependent variables, controls, data trends |
| **Information-based** | Presents new scientific concepts | Key definitions, relationships, comparisons |
| **Research study** | Multiple experiments with data tables | How experiments differ, what each tests |

### The 4-Minute Passage Strategy

For a typical 6-question passage, spend:
- **~2-3 minutes** reading the passage
- **~1 minute per question** (some faster, some slower)
- **Total ~8-9 minutes** per passage

### Active Reading for Science Passages

DO:
- Identify the research question/hypothesis
- Note independent and dependent variables
- Circle key numbers, equations, and units
- Understand figure axes and trends BEFORE answering questions

DON'T:
- Memorize every detail on first read
- Get stuck on complex mechanisms you don't understand
- Spend more than 3 minutes reading the passage`
    },
    {
      id: 'sp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Passage Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `When reading a science passage with multiple experiments, the MOST important first step is:`,
            options: [`Identify what each experiment is testing (IV, DV) and how they differ from each other`, `Memorize all the numbers in the data tables`, `Read every word carefully before looking at questions`, `Skip the passage and go straight to questions`],
            correctAnswer: 0,
            explanation: `Understanding the experimental design is the foundation. Once you know what's being tested (independent variable) and measured (dependent variable), you can answer most questions. Data tables can be referenced as needed — no need to memorize.`
          }
        ]
      }
    },
    {
      id: 'sp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Three passage types: experiment-based, information-based, research study
- Read actively: identify hypothesis, variables, and data trends
- Don't memorize everything — reference back as needed
- Budget ~8-9 minutes per passage (reading + questions)`
    }
  ]
};
