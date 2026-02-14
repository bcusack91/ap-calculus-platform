export const psychHistoryApproachesPart6Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo6-workshop',
      type: 'text' as const,
      content: `
# ## Research Methods Problem-Solving

### Common AP Question Types

1. **Identify variables** in an experiment (IV, DV, confounds)
2. **Choose the appropriate research method** for a scenario
3. **Interpret statistical results** (mean, SD, p-value)
4. **Identify ethical violations** in research scenarios
5. **Distinguish correlation from causation**

### Practice Scenario

A researcher wants to know if sleep deprivation affects memory. She randomly assigns 40 college students to either a sleep-deprived group (4 hours) or a control group (8 hours), then tests their memory the next day.

- **IV:** Amount of sleep (4 hours vs 8 hours)
- **DV:** Memory test scores
- **Random assignment:** Yes → can establish causation
- **Potential confound:** Prior sleep habits, caffeine use
      `
    },
    {
      id: 'histo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A study finds that students who eat breakfast get higher grades. This is:',
            options: [
              'Proof that breakfast causes better grades',
              'A correlational finding',
              'An experimental result',
              'A case study'
            ],
            correctAnswer: 1,
            explanation: 'This is correlational — it shows a relationship but doesn\'t prove causation. Maybe motivated students both eat breakfast AND study more.'
          },
          {
            question: 'A researcher studies one patient with a rare brain injury in great detail. This is a:',
            options: [
              'Correlational study',
              'Naturalistic observation',
              'Case study',
              'Double-blind experiment'
            ],
            correctAnswer: 2,
            explanation: 'A case study is an in-depth investigation of a single individual, useful for rare conditions but limited in generalizability.'
          }
        ]
      }
    },
    {
      id: 'histo6-tips',
      type: 'text' as const,
      content: `
# ## Tips

- Always identify IV and DV first
- Check for random assignment before claiming causation
- Look for confounding variables
- Remember: correlation ≠ causation
- Consider both reliability AND validity
      `
    },
    {
      id: 'histo6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To reduce experimenter bias, a researcher should use:',
            options: [
              'A larger sample size',
              'A double-blind procedure',
              'Naturalistic observation',
              'Self-report surveys'
            ],
            correctAnswer: 1,
            explanation: 'In a double-blind procedure, neither the participants nor the researchers who interact with them know which group is which, reducing bias.'
          }
        ]
      }
    },
    {
      id: 'histo6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Random ___ is needed to establish causation',
            options: ['sampling', 'assignment', 'selection', 'distribution']
          },
          {
            label: 'A study that cannot be replicated lacks ___',
            options: ['validity', 'reliability', 'significance', 'power']
          },
          {
            label: 'Surveying 10 people is problematic because of small ___',
            options: ['effect size', 'sample size', 'standard deviation', 'p-value']
          }
        ],
        correctAnswers: ['assignment', 'reliability', 'sample size'],
        hint1: 'This ensures equivalent groups in experiments.',
        hint2: 'Consistent results = reliable.',
        hint3: 'Larger samples better represent the population.',
        explanation: 'Random assignment enables causal claims. Replicability requires reliability. Small sample sizes limit generalizability.'
      }
    }
  ]
}
