export const psychMoodPsychPart3Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Mood and Psychotic Disorders

      **Part 3 of 7 — Bipolar Spectrum**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **delusion**: a fixed false belief resistant to contradictory evidence
      - **hallucination**: perception-like experience without an external stimulus
      - **negative symptoms**: reductions in normal emotional or motivational functioning

      ### Concrete Real-World Example
      A team is studying monitoring sleep and activity changes in bipolar risk. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'mood-psychotic-disorders-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about monitoring sleep and activity changes in bipolar risk, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'negative symptoms',
              'diathesis-stress model',
              'delusion',
              'hallucination'
            ],
            correctAnswer: 2,
            explanation: 'delusion is correct because it directly matches this mechanism: a fixed false belief resistant to contradictory evidence. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'comorbidity',
              'prodromal phase',
              'hallucination',
              'negative symptoms'
            ],
            correctAnswer: 0,
            explanation: 'comorbidity is the strongest match here (co-occurrence of two or more disorders). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing monitoring sleep and activity changes in bipolar risk, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | delusion | a fixed false belief resistant to contradictory evidence | experimental manipulation with random assignment | possible demand characteristics |
      | hallucination | perception-like experience without an external stimulus | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | negative symptoms | reductions in normal emotional or motivational functioning | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | diathesis-stress model | vulnerability interacts with stress to increase disorder risk | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'mood-psychotic-disorders-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: a fixed false belief resistant to contradictory evidence

      2) Write the concept that matches: perception-like experience without an external stimulus

      3) Write the concept that matches: reductions in normal emotional or motivational functioning

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['delusion', 'hallucination', 'negative symptoms'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: H',
        hint3: 'Starts with: N',
        explanation: 'Expected answers: delusion, hallucination, and negative symptoms. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: a fixed false belief resistant to contradictory evidence',
            options: ['delusion', 'comorbidity', 'diathesis-stress model', 'negative symptoms']
          },
          {
            label: 'Select the concept that best matches: perception-like experience without an external stimulus',
            options: ['diathesis-stress model', 'hallucination', 'delusion', 'prodromal phase']
          },
          {
            label: 'Select the concept that best matches: reductions in normal emotional or motivational functioning',
            options: ['negative symptoms', 'delusion', 'diathesis-stress model', 'comorbidity']
          }
        ],
        correctAnswers: ['delusion', 'hallucination', 'negative symptoms'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are delusion, hallucination, and negative symptoms. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p3-s6-strategy',
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
      - In scenario questions about monitoring sleep and activity changes in bipolar risk, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'mood-psychotic-disorders-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating monitoring sleep and activity changes in bipolar risk finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'hallucination',
              'diathesis-stress model',
              'delusion',
              'negative symptoms'
            ],
            correctAnswer: 1,
            explanation: 'diathesis-stress model is best because it reflects this mechanism (vulnerability interacts with stress to increase disorder risk). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'negative symptoms',
              'comorbidity',
              'hallucination',
              'prodromal phase'
            ],
            correctAnswer: 1,
            explanation: 'comorbidity is the strongest interpretation because it maps to the measured pattern and proposed mechanism: co-occurrence of two or more disorders. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
