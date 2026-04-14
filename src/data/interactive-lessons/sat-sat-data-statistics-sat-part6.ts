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
            options: ['Students in the library may study more than the average student', 'The library is too quiet for surveys', 'All students study equally', 'Libraries are representative of all locations'],
            correctAnswer: 0,
            explanation: 'This is selection bias — library-goers likely study more, making the sample unrepresentative of all students.'
          },
          {
            question: 'A study finds that ice cream sales and drowning rates are positively correlated. Can we conclude ice cream causes drowning?',
            options: ['No — this is observational, a confounding variable (hot weather) likely explains both', 'Yes — the correlation is clear', 'Only if the sample size is large', 'Yes — if the p-value is small'],
            correctAnswer: 0,
            explanation: 'Correlation ≠ causation. Hot weather is a confounding variable that increases both ice cream sales and swimming (leading to more drownings).'
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
            options: ['Between 42% and 48% of the population likely favors the law', 'Exactly 45% of the population favors the law', 'The law should not be passed', '3% of adults are uncertain'],
            correctAnswer: 0,
            explanation: 'The margin of error creates a range (42%–48%) for the true population value. We cannot say "exactly 45%."'
          },
          {
            question: 'A study selects volunteers and randomly assigns them to exercise or no-exercise groups. The exercise group has lower blood pressure. Why can\'t we generalize to all adults?',
            options: ['Volunteers are not a random sample of the population', 'The study was too short', 'Blood pressure varies too much', 'The sample size was too small'],
            correctAnswer: 0,
            explanation: 'Random assignment → can conclude causation. But volunteers ≠ random sample → cannot generalize to all adults (only to "people like these volunteers").'
          },
          {
            question: 'A survey asks: "Don\'t you agree that taxes are too high?" This is an example of:',
            options: ['Response bias (leading question)', 'Selection bias', 'Voluntary response bias', 'Random sampling'],
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
          { label: 'A website asks visitors to rate their satisfaction with the product', options: ['Voluntary response survey (biased)', 'Random sample survey', 'Experiment', 'Observational study'] },
          { label: 'A doctor prescribes a new drug to patients who ask for it and tracks outcomes', options: ['Observational (no random assignment)', 'Experiment', 'Randomized trial', 'Survey'] }
        ],
        correctAnswers: ['Observational study', 'Experiment', 'Voluntary response survey (biased)', 'Observational (no random assignment)'],
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
