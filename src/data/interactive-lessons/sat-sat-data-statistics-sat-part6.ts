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

✓ "The study suggests an **association** between X and Y" — appropriate for observational studies.`
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
      id: 'ds6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Only **randomized experiments** can show causation
- Observational studies show **association**, not causation
- Random sampling → results generalize to the population
- Watch for bias: selection, response, and voluntary response bias
- **Confounding variables** can create misleading correlations`
    }
  ]
};
