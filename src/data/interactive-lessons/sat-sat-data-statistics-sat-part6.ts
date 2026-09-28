export const satDataStatsPart6Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds6-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 6 of 7 — Sampling and Study Design**

### Types of Studies

| Type | Description | Can show causation? |
|------|-------------|-------------------|
| Observational | Observe without intervention | No (only association) |
| Experiment | Randomly assign treatments | Yes! |
| Survey | Ask questions | No (only opinion) |

### Random Sampling

A sample is **representative** if every member of the population has an equal chance of being selected.

- **Random sample**: conclusions can be generalized to the population
- **Convenience sample** (e.g., only surveying friends): results may be biased

### Bias

- **Selection bias**: sample doesn't represent the population
- **Response bias**: wording of questions influences answers
- **Voluntary response bias**: only people with strong opinions respond

### SAT Wording to Watch For

❌ "The study **proves** that X causes Y" — only experiments with random assignment can suggest causation.

✓ "The study suggests an **association** between X and Y" — appropriate for observational studies.

---

### Worked Example 1 — Is the Conclusion Valid?

**A researcher gives Vitamin C to 50 volunteers and a placebo to 50 others (randomly assigned). The Vitamin C group had fewer colds. Conclusion: "Vitamin C reduces colds."**

| Check | Answer |
|-------|--------|
| Study type | Experiment (random assignment) |
| Random assignment? | Yes |
| Can conclude causation? | Yes — this is valid |

### Worked Example 2 — Why Only Association?

**A study surveys 1,000 adults and finds that coffee drinkers exercise more. Conclusion: "Coffee causes people to exercise."**

| Check | Answer |
|-------|--------|
| Study type | Observational (no intervention) |
| Confound? | Maybe: health-conscious people both drink coffee and exercise |
| Valid conclusion? | "Coffee consumption is **associated** with more exercise" — NOT "causes" |

### Margin of Error

When the SAT says "95% confidence interval is $52\\% \\pm 3\\%$":
- Plausible range: $49\\%$ to $55\\%$
- Larger sample → smaller margin of error
- The margin does NOT mean 3% of people changed their mind`
    },
    {
      id: 'ds6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Study Design** 🎯',
      exercise: {
        questions: [
          {
            question: 'A researcher surveys students in the library about study habits. Why might this sample be biased?',
            options: ['People found there may study more than typical students', 'The number of students surveyed may be too small', 'Students were not randomly assigned to study habits', 'Surveys cannot measure how students study'],
            correctAnswer: 0,
            explanation: 'This is selection bias — library-goers likely study more, making the sample unrepresentative of all students. A small sample makes results less precise but is not the source of this bias, and random assignment matters for experiments, not for choosing whom to survey.'
          },
          {
            question: 'A study finds that ice cream sales and drowning rates are positively correlated. Can we conclude ice cream causes drowning?',
            options: ['No, because a third factor like hot weather may drive both', 'Yes, because the positive correlation is strong and clear', 'Yes, as long as the study used a large enough sample', 'No, because the correlation between them is not perfect'],
            correctAnswer: 0,
            explanation: 'This is an observational study, and correlation ≠ causation. Hot weather is a confounding variable that increases both ice cream sales and swimming (leading to more drownings). A larger sample or a stronger correlation would not fix that; only random assignment could.'
          },
          {
            question: 'Which study design can establish a cause-and-effect relationship?',
            options: ['Randomized controlled experiment', 'Observational study with a large sample', 'Survey with random sampling', 'Any study with a control group'],
            correctAnswer: 0,
            explanation: 'Only a randomized controlled experiment (random assignment to treatment/control groups) can establish causation.'
          }
        ]
      }
    },
    {
      id: 'ds6-text2',
      type: 'text' as const,
      content: `### Generalizability vs. Causation — Two Separate Questions

| Feature | Allows |
|---------|--------|
| Random **sampling** from population | Generalize results to the population |
| Random **assignment** to treatments | Conclude cause and effect |
| Both | Generalize + causation |
| Neither | Only describes the sample |

### SAT Conclusion Wording Guide

| Study Design | Valid Conclusion Wording |
|-------------|------------------------|
| Random sample, observational | "People who [X] tend to [Y]" |
| Random sample + random assignment | "[X] causes [Y] in the population" |
| Convenience sample, observational | "Among these participants, [X] is associated with [Y]" |

### Worked Example 3 — Margin of Error

**A poll of 400 voters: $58\\% \\pm 4\\%$ support a candidate.**

| Question | Answer |
|----------|--------|
| Confidence interval | $54\\%$ to $62\\%$ |
| Can we say majority support? | Yes — even the low end ($54\\%$) exceeds $50\\%$ |
| If interval were $48\\%$ to $62\\%$? | No — the interval includes values below $50\\%$ |`
    },
    {
      id: 'ds6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Evaluating Conclusions** 🎯',
      exercise: {
        questions: [
          {
            question: 'A poll of 1,200 randomly selected adults shows 45% ± 3% favor a new law. Which conclusion is valid?',
            options: ['Between 42% and 48% of all adults likely favor the law', 'Between 45% and 48% of all adults likely favor the law', 'Exactly 45% of all adults in the population favor the law', 'Between 39% and 51% of all adults likely favor the law'],
            correctAnswer: 0,
            explanation: 'The margin of error extends 3 points on BOTH sides of the estimate: $45\\% - 3\\% = 42\\%$ to $45\\% + 3\\% = 48\\%$. A sample cannot show "exactly 45%," and the margin is applied once, not doubled (which would give 39% to 51%).'
          },
          {
            question: 'A study selects volunteers and randomly assigns them to exercise or no-exercise groups. The exercise group has lower blood pressure. Why can\'t we generalize to all adults?',
            options: ['The participants were not a random sample of the whole population', 'The participants were not randomly assigned to the two groups', 'Blood pressure varies too much from day to day', 'The participants were too few to be useful'],
            correctAnswer: 0,
            explanation: 'The volunteers WERE randomly assigned, so the study supports causation for people like them. But volunteers are not a random sample of all adults, so the results cannot be generalized to all adults.'
          },
          {
            question: 'A survey asks: "Don\'t you agree that taxes are too high?" This is an example of:',
            options: ['Response bias', 'Selection bias', 'Voluntary response bias', 'Random sampling'],
            correctAnswer: 0,
            explanation: '"Don\'t you agree..." leads respondents toward one answer. This is response bias from a poorly worded question.'
          }
        ]
      }
    },
    {
      id: 'ds6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Study Type** 🔍\n\nClassify each scenario.',
      exercise: {
        dropdowns: [
          { label: 'Researchers track 5,000 people over 10 years, recording diet and heart disease rates', options: ['Observational study', 'Experiment', 'Survey', 'Census'] },
          { label: 'Students are randomly assigned to use flashcards or re-reading, then tested', options: ['Experiment', 'Observational study', 'Survey', 'Case study'] },
          { label: 'A website asks visitors to rate their satisfaction with the product', options: ['Voluntary response survey', 'Random sample survey', 'Experiment', 'Observational study'] },
          { label: 'A doctor prescribes a new drug to patients who ask for it and tracks outcomes', options: ['Observational study', 'Experiment', 'Randomized trial', 'Survey'] }
        ],
        correctAnswers: ['Observational study', 'Experiment', 'Voluntary response survey', 'Observational study'],
        hint1: 'If researchers just observe/record without intervening → observational.',
        hint2: 'Random assignment to groups → experiment.',
        hint3: 'Only people who choose to respond → voluntary response bias. Doctor prescribing based on requests → no random assignment → observational.',
        explanation: 'Tracking without intervention = observational. Random assignment to groups = experiment. Website opt-in = voluntary response (biased — people with strong feelings respond). Doctor prescribing on request = no random assignment = observational.'
      }
    },
    {
      id: 'ds6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Concept | Key Rule |
|---------|----------|
| Causation | Only from randomized experiments |
| Generalization | Only from random sampling |
| Association | Observational studies can show this |
| Confounding variable | Third variable explaining a correlation |
| Margin of error | Confidence interval = estimate ± margin |
| Larger sample | Smaller margin of error |

| Bias Type | Example |
|-----------|---------|
| Selection | Surveying only library users |
| Response | Leading questions |
| Voluntary response | Online opt-in polls |

- On the SAT, the wrong answer often claims causation from an observational study — always check!`
    }
  ]
};
