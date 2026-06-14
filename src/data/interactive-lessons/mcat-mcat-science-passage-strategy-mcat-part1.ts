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
      id: 'sp1-worked',
      type: 'text' as const,
      content: `### Worked Example — Mapping a Passage Before You Answer

A passage opens:

> *"To test whether the heat-shock protein HSP70 protects cells from thermal stress, researchers incubated two groups of yeast at 42 °C for 30 minutes. Group 1 (wild-type) expressed HSP70 normally; Group 2 carried a deletion in the* HSP70 *gene. After heat exposure, survival was measured as the percentage of cells forming colonies. Results: 78% (wild-type) vs. 21% (deletion)."*

**Step 1 — State the research question.** Does HSP70 protect against heat stress?

**Step 2 — Identify the variables.**
- *Independent variable (manipulated):* presence vs. absence of functional HSP70.
- *Dependent variable (measured):* % survival (colony formation).
- *Held constant:* temperature (42 °C), exposure time (30 min), organism (yeast).

**Step 3 — Find the comparison.** Wild-type (control) = 78%; deletion (experimental) = 21%. The only deliberate difference between groups is HSP70, so the drop in survival is attributable to its loss.

**Step 4 — State the supported conclusion, not an overreach.** The data **support** that HSP70 contributes to thermal protection in yeast. They do **not** prove HSP70 is the *only* protective factor, nor that the same holds in human cells.

This four-step map — question, variables, comparison, bounded conclusion — answers the majority of passage questions before you ever read the answer choices.`
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
          },
          {
            question: `In the HSP70 worked example, what is the dependent variable?`,
            options: [`The percentage of cells forming colonies (survival)`, `The presence or absence of HSP70`, `The incubation temperature of 42 °C`, `The exposure time of 30 minutes`],
            correctAnswer: 0,
            explanation: `The dependent variable is what is measured in response to the manipulation — here, % survival. HSP70 status is the independent variable; temperature and time are held constant.`
          },
          {
            question: `Which conclusion does the HSP70 data BEST support without overreaching?`,
            options: [`HSP70 contributes to thermal protection in yeast`, `HSP70 is the only factor protecting any cell from heat`, `HSP70 protects human neurons from fever`, `HSP70 has no measurable effect on survival`],
            correctAnswer: 0,
            explanation: `The single controlled difference was HSP70, so the survival gap supports a protective role in yeast. Claiming it is the only factor, or extending the result to human cells, goes beyond the data — classic MCAT overreach traps.`
          }
        ]
      }
    },
    {
      id: 'sp1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Reading Strategy Application** 🎯`,
      exercise: {
        questions: [
          {
            question: `You encounter a dense paragraph describing a signaling cascade you've never seen. The smartest move is to:`,
            options: [`Note its role and location, then move on — you can return if a question requires the detail`, `Re-read it five times until you fully memorize every protein`, `Skip the entire passage and guess on all its questions`, `Spend four minutes diagramming the full cascade before any question`],
            correctAnswer: 0,
            explanation: `MCAT passages deliberately include unfamiliar mechanisms. Capture the gist and the location, then let the questions tell you which details actually matter. Memorizing everything wastes time you need for the questions.`
          },
          {
            question: `A passage states a hypothesis and then describes two experiments. Recognizing the passage TYPE matters because:`,
            options: [`A research-study passage means you should focus on how the experiments differ and what each one isolates`, `It tells you the exact answer to every question`, `Information-based passages never have questions`, `The passage type changes the scoring of the section`],
            correctAnswer: 0,
            explanation: `Identifying it as a research-study (multi-experiment) passage tells you the key task: figure out what each experiment isolates and how they complement each other. That framing drives most of the reasoning questions.`
          },
          {
            question: `Roughly how long should you spend READING a typical six-question science passage before answering?`,
            options: [`About 2-3 minutes`, `About 6-7 minutes`, `About 30 seconds`, `As long as it takes to memorize every value`],
            correctAnswer: 0,
            explanation: `Budget ~2-3 minutes to read and map the passage, leaving roughly a minute per question. Over-reading starves your question time; under-reading leaves you re-hunting for the structure.`
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
- Map every experiment: question → variables → comparison → bounded conclusion
- Don't memorize everything — reference back as needed
- Budget ~8-9 minutes per passage (reading + questions)`
    }
  ]
};
