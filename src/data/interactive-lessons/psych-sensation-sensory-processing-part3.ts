export const psychSensationPart3Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Sensation and Sensory Processing

      **Part 3 of 7 — Somatosensory and Chemical Senses**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **signal detection theory**: framework separating sensitivity from response bias under uncertainty
      - **selective attention**: focusing cognitive resources on relevant input
      - **bottom-up processing**: analysis that begins with sensory features

      ### Concrete Real-World Example
      A team is studying taste and smell changes during illness. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'sensation-sensory-processing-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about taste and smell changes during illness, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'signal detection theory',
              'top-down processing',
              'bottom-up processing',
              'selective attention'
            ],
            correctAnswer: 0,
            explanation: 'signal detection theory is correct because it directly matches this mechanism: framework separating sensitivity from response bias under uncertainty. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'selective attention',
              'bottom-up processing',
              'sensory adaptation',
              'just noticeable difference'
            ],
            correctAnswer: 2,
            explanation: 'sensory adaptation is the strongest match here (reduced sensitivity to constant stimulation). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing taste and smell changes during illness, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | signal detection theory | framework separating sensitivity from response bias under uncertainty | experimental manipulation with random assignment | possible demand characteristics |
      | selective attention | focusing cognitive resources on relevant input | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | bottom-up processing | analysis that begins with sensory features | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | top-down processing | perception shaped by expectations and prior knowledge | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'sensation-sensory-processing-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: framework separating sensitivity from response bias under uncertainty
      2) Write the concept that matches: focusing cognitive resources on relevant input
      3) Write the concept that matches: analysis that begins with sensory features

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['signal detection theory', 'selective attention', 'bottom-up processing'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: S',
        hint3: 'Starts with: B',
        explanation: 'Expected answers: signal detection theory, selective attention, and bottom-up processing. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'sensation-sensory-processing-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: framework separating sensitivity from response bias under uncertainty',
            options: ['sensory adaptation', 'bottom-up processing', 'signal detection theory', 'just noticeable difference']
          },
          {
            label: 'Select the concept that best matches: focusing cognitive resources on relevant input',
            options: ['bottom-up processing', 'selective attention', 'sensory adaptation', 'top-down processing']
          },
          {
            label: 'Select the concept that best matches: analysis that begins with sensory features',
            options: ['sensory adaptation', 'just noticeable difference', 'bottom-up processing', 'top-down processing']
          }
        ],
        correctAnswers: ['signal detection theory', 'selective attention', 'bottom-up processing'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are signal detection theory, selective attention, and bottom-up processing. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'sensation-sensory-processing-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Sensation and perception are related but distinct processes.
      - Missed signals can reflect response criterion shifts, not only poor sensory ability.
      - Adaptation reduces awareness of constant stimuli while preserving sensitivity to change.
      - Expectation can bias perception without conscious intent.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about taste and smell changes during illness, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'sensation-sensory-processing-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating taste and smell changes during illness finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'bottom-up processing',
              'selective attention',
              'top-down processing',
              'signal detection theory'
            ],
            correctAnswer: 2,
            explanation: 'top-down processing is best because it reflects this mechanism (perception shaped by expectations and prior knowledge). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'selective attention',
              'sensory adaptation',
              'just noticeable difference',
              'bottom-up processing'
            ],
            correctAnswer: 1,
            explanation: 'sensory adaptation is the strongest interpretation because it maps to the measured pattern and proposed mechanism: reduced sensitivity to constant stimulation. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
