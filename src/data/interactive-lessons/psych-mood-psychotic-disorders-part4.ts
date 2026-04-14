export const psychMoodPsychPart4Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Mood and Psychotic Disorders

      **Part 4 of 7 — Schizophrenia Spectrum**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **negative symptoms**: reductions in normal emotional or motivational functioning
      - **diathesis-stress model**: vulnerability interacts with stress to increase disorder risk
      - **comorbidity**: co-occurrence of two or more disorders

      ### Concrete Real-World Example
      A team is studying community mental health support for first-episode psychosis. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'mood-psychotic-disorders-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about community mental health support for first-episode psychosis, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'negative symptoms',
              'comorbidity',
              'diathesis-stress model',
              'prodromal phase'
            ],
            correctAnswer: 0,
            explanation: 'negative symptoms is correct because it directly matches this mechanism: reductions in normal emotional or motivational functioning. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'comorbidity',
              'diathesis-stress model',
              'major depressive disorder',
              'persistent depressive disorder'
            ],
            correctAnswer: 2,
            explanation: 'major depressive disorder is the strongest match here (persistent low mood or loss of interest with functional impairment). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing community mental health support for first-episode psychosis, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | negative symptoms | reductions in normal emotional or motivational functioning | experimental manipulation with random assignment | possible demand characteristics |
      | diathesis-stress model | vulnerability interacts with stress to increase disorder risk | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | comorbidity | co-occurrence of two or more disorders | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | prodromal phase | early period of subtle symptoms before full disorder onset | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'mood-psychotic-disorders-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: reductions in normal emotional or motivational functioning

      2) Write the concept that matches: vulnerability interacts with stress to increase disorder risk

      3) Write the concept that matches: co-occurrence of two or more disorders

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['negative symptoms', 'diathesis-stress model', 'comorbidity'],
        hint1: 'Starts with: N',
        hint2: 'Starts with: D',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: negative symptoms, diathesis-stress model, and comorbidity. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: reductions in normal emotional or motivational functioning',
            options: ['comorbidity', 'diathesis-stress model', 'negative symptoms', 'prodromal phase']
          },
          {
            label: 'Select the concept that best matches: vulnerability interacts with stress to increase disorder risk',
            options: ['persistent depressive disorder', 'major depressive disorder', 'comorbidity', 'diathesis-stress model']
          },
          {
            label: 'Select the concept that best matches: co-occurrence of two or more disorders',
            options: ['comorbidity', 'negative symptoms', 'major depressive disorder', 'diathesis-stress model']
          }
        ],
        correctAnswers: ['negative symptoms', 'diathesis-stress model', 'comorbidity'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are negative symptoms, diathesis-stress model, and comorbidity. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Mood changes alone are insufficient for diagnosis without duration and impairment criteria.
      - Psychotic symptoms can occur in several disorders and must be interpreted in context.
      - Bipolar disorder is not simply rapid mood swings; episodes have specific patterns.
      - Treatment planning should address comorbidity and functioning, not only symptom labels.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about community mental health support for first-episode psychosis, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'mood-psychotic-disorders-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating community mental health support for first-episode psychosis finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'comorbidity',
              'prodromal phase',
              'diathesis-stress model',
              'negative symptoms'
            ],
            correctAnswer: 1,
            explanation: 'prodromal phase is best because it reflects this mechanism (early period of subtle symptoms before full disorder onset). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'diathesis-stress model',
              'major depressive disorder',
              'comorbidity',
              'persistent depressive disorder'
            ],
            correctAnswer: 1,
            explanation: 'major depressive disorder is the strongest interpretation because it maps to the measured pattern and proposed mechanism: persistent low mood or loss of interest with functional impairment. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
