export const psychSensationPart2Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Sensation and Sensory Processing

      **Part 2 of 7 — Vision and Audition Foundations**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **absolute threshold**: minimum stimulus intensity detected 50% of the time
      - **difference threshold**: smallest detectable difference between two stimuli
      - **signal detection theory**: framework separating sensitivity from response bias under uncertainty

      ### Concrete Real-World Example
      A team is studying screen brightness judgments across contexts. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'sensation-sensory-processing-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about screen brightness judgments across contexts, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'absolute threshold',
              'selective attention',
              'difference threshold',
              'signal detection theory'
            ],
            correctAnswer: 0,
            explanation: 'absolute threshold is correct because it directly matches this mechanism: minimum stimulus intensity detected 50% of the time. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'bottom-up processing',
              'top-down processing',
              'difference threshold',
              'signal detection theory'
            ],
            correctAnswer: 0,
            explanation: 'bottom-up processing is the strongest match here (analysis that begins with sensory features). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing screen brightness judgments across contexts, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | absolute threshold | minimum stimulus intensity detected 50% of the time | experimental manipulation with random assignment | possible demand characteristics |
      | difference threshold | smallest detectable difference between two stimuli | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | signal detection theory | framework separating sensitivity from response bias under uncertainty | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | selective attention | focusing cognitive resources on relevant input | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'sensation-sensory-processing-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: minimum stimulus intensity detected 50% of the time

      2) Write the concept that matches: smallest detectable difference between two stimuli

      3) Write the concept that matches: framework separating sensitivity from response bias under uncertainty

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['absolute threshold', 'difference threshold', 'signal detection theory'],
        hint1: 'Starts with: A',
        hint2: 'Starts with: D',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: absolute threshold, difference threshold, and signal detection theory. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'sensation-sensory-processing-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: minimum stimulus intensity detected 50% of the time',
            options: ['signal detection theory', 'top-down processing', 'absolute threshold', 'difference threshold']
          },
          {
            label: 'Select the concept that best matches: smallest detectable difference between two stimuli',
            options: ['top-down processing', 'absolute threshold', 'selective attention', 'difference threshold']
          },
          {
            label: 'Select the concept that best matches: framework separating sensitivity from response bias under uncertainty',
            options: ['difference threshold', 'signal detection theory', 'absolute threshold', 'selective attention']
          }
        ],
        correctAnswers: ['absolute threshold', 'difference threshold', 'signal detection theory'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are absolute threshold, difference threshold, and signal detection theory. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'sensation-sensory-processing-p2-s6-strategy',
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
      - In scenario questions about screen brightness judgments across contexts, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'sensation-sensory-processing-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating screen brightness judgments across contexts finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'absolute threshold',
              'difference threshold',
              'signal detection theory',
              'selective attention'
            ],
            correctAnswer: 3,
            explanation: 'selective attention is best because it reflects this mechanism (focusing cognitive resources on relevant input). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'signal detection theory',
              'top-down processing',
              'difference threshold',
              'bottom-up processing'
            ],
            correctAnswer: 3,
            explanation: 'bottom-up processing is the strongest interpretation because it maps to the measured pattern and proposed mechanism: analysis that begins with sensory features. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
