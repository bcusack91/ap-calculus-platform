export const psychSensationPart4Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Sensation and Sensory Processing

      **Part 4 of 7 — Top-Down and Bottom-Up Processing**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **bottom-up processing**: analysis that begins with sensory features
      - **top-down processing**: perception shaped by expectations and prior knowledge
      - **sensory adaptation**: reduced sensitivity to constant stimulation

      ### Concrete Real-World Example
      A team is studying driving while filtering irrelevant distractions. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'sensation-sensory-processing-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about driving while filtering irrelevant distractions, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'bottom-up processing',
              'top-down processing',
              'just noticeable difference',
              'sensory adaptation'
            ],
            correctAnswer: 0,
            explanation: 'bottom-up processing is correct because it directly matches this mechanism: analysis that begins with sensory features. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'top-down processing',
              'transduction',
              'sensory adaptation',
              'sensation'
            ],
            correctAnswer: 3,
            explanation: 'sensation is the strongest match here (detection of physical energy by sensory receptors). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing driving while filtering irrelevant distractions, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | bottom-up processing | analysis that begins with sensory features | experimental manipulation with random assignment | possible demand characteristics |
      | top-down processing | perception shaped by expectations and prior knowledge | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | sensory adaptation | reduced sensitivity to constant stimulation | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | just noticeable difference | minimum change needed to notice a difference | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'sensation-sensory-processing-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: analysis that begins with sensory features

      2) Write the concept that matches: perception shaped by expectations and prior knowledge

      3) Write the concept that matches: reduced sensitivity to constant stimulation

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['bottom-up processing', 'top-down processing', 'sensory adaptation'],
        hint1: 'Starts with: B',
        hint2: 'Starts with: T',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: bottom-up processing, top-down processing, and sensory adaptation. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'sensation-sensory-processing-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: analysis that begins with sensory features',
            options: ['sensation', 'transduction', 'bottom-up processing', 'top-down processing']
          },
          {
            label: 'Select the concept that best matches: perception shaped by expectations and prior knowledge',
            options: ['bottom-up processing', 'transduction', 'top-down processing', 'sensation']
          },
          {
            label: 'Select the concept that best matches: reduced sensitivity to constant stimulation',
            options: ['sensory adaptation', 'sensation', 'just noticeable difference', 'bottom-up processing']
          }
        ],
        correctAnswers: ['bottom-up processing', 'top-down processing', 'sensory adaptation'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are bottom-up processing, top-down processing, and sensory adaptation. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'sensation-sensory-processing-p4-s6-strategy',
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
      - In scenario questions about driving while filtering irrelevant distractions, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'sensation-sensory-processing-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating driving while filtering irrelevant distractions finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'top-down processing',
              'bottom-up processing',
              'just noticeable difference',
              'sensory adaptation'
            ],
            correctAnswer: 2,
            explanation: 'just noticeable difference is best because it reflects this mechanism (minimum change needed to notice a difference). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'sensory adaptation',
              'sensation',
              'top-down processing',
              'transduction'
            ],
            correctAnswer: 1,
            explanation: 'sensation is the strongest interpretation because it maps to the measured pattern and proposed mechanism: detection of physical energy by sensory receptors. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
