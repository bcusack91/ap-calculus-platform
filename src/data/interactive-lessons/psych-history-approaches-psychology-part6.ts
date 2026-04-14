export const psychHistoryApproachesPart6Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo6-workshop',
      type: 'text' as const,
      content: `
## Research Methods Problem-Solving

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
## Tips

- Always identify IV and DV first
- Check for random assignment before claiming causation
- Look for confounding variables
- Remember: correlation ≠ causation
- Consider both reliability AND validity
      `
    },
    {
      id: 'histo6-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What type of assignment is required to establish a cause-and-effect relationship?

      2) What is the variable that the experimenter manipulates?

      3) What procedure ensures neither participants nor researchers know group assignments?

      Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['random assignment', 'independent variable', 'double-blind'],
        hint1: 'Two words: random ___',
        hint2: 'Two words: ___ variable — the one the researcher changes',
        hint3: 'Two words: ___-blind — both sides are "blind"',
        explanation: 'Expected answers: random assignment (needed for causation), independent variable (the manipulated variable), and double-blind (neither party knows group assignments).'
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
    },
    {
      id: 'histo6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Random ASSIGNMENT ≠ random SAMPLING. Assignment creates equivalent groups for experiments; sampling selects who participates from the population.
      - Correlation does NOT equal causation — even a strong correlation (r = 0.95) cannot prove one variable causes another without an experiment.
      - A double-blind study is NOT the same as a single-blind study. In single-blind, only participants are unaware; in double-blind, BOTH participants and researchers interacting with them are unaware.
      - A large sample size does NOT fix a biased sampling method — surveying 10,000 people at a gym doesn't represent the general population.
      - Case studies provide depth but NOT generalizability — you can't draw broad conclusions from one person.

      ### AP Strategy Moves
      - When a question describes a study, FIRST identify the IV and DV. The IV is what the researcher manipulates; the DV is what's measured.
      - If the question says "relationship" or "association," think correlational study. If it says "effect" or "cause," think experiment with random assignment.
      - For "reduce bias" questions: experimenter bias → double-blind; participant bias → single-blind; sampling bias → random sampling.
      - Watch for the word "randomly" — random assignment ≠ random sampling, and the AP loves testing this distinction.
      `
    },
    {
      id: 'histo6-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A school principal notices that students who participate in after-school sports have higher GPAs. She concludes that sports participation improves academic performance. What is the flaw in her reasoning?',
            options: [
              'She is inferring causation from a correlational observation — a third variable like motivation could explain both',
              'Her sample size is too small to draw conclusions',
              'She should have used a double-blind procedure',
              'She forgot to get IRB approval for her observation'
            ],
            correctAnswer: 0,
            explanation: 'This is a classic correlation ≠ causation error. Students who play sports may also be more disciplined, motivated, or from families that emphasize academics. Without random assignment to "sports" vs. "no sports" groups, she cannot claim sports CAUSE better grades.'
          },
          {
            question: 'A pharmaceutical company tests a new antidepressant. Neither the patients nor the doctors administering the pills know which patients receive the real drug and which receive a sugar pill. This describes a:',
            options: [
              'single-blind experiment with random sampling',
              'double-blind experiment with a placebo control',
              'correlational study with a control group',
              'naturalistic observation with random assignment'
            ],
            correctAnswer: 1,
            explanation: 'Double-blind = neither participants nor researchers know group assignments. The sugar pill is a placebo, and the group receiving it is the placebo control group. This design minimizes both participant expectations (placebo effect) and experimenter bias.'
          }
        ]
      }
    }
  ]
}
