export const psychSensationPart5Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Sensation and Sensory Processing

      **Part 5 of 7 — Attention and Perceptual Limits**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **sensory adaptation**: reduced sensitivity to constant stimulation
      - **just noticeable difference**: minimum change needed to notice a difference
      - **sensation**: detection of physical energy by sensory receptors

      ### Concrete Real-World Example
      A team is studying attention lapses in long monitoring tasks. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'sensation-sensory-processing-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about attention lapses in long monitoring tasks, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'transduction',
              'sensation',
              'just noticeable difference',
              'sensory adaptation'
            ],
            correctAnswer: 3,
            explanation: 'sensory adaptation is correct because it directly matches this mechanism: reduced sensitivity to constant stimulation. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'absolute threshold',
              'difference threshold',
              'sensation',
              'just noticeable difference'
            ],
            correctAnswer: 0,
            explanation: 'absolute threshold is the strongest match here (minimum stimulus intensity detected 50% of the time). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing attention lapses in long monitoring tasks, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | sensory adaptation | reduced sensitivity to constant stimulation | experimental manipulation with random assignment | possible demand characteristics |
      | just noticeable difference | minimum change needed to notice a difference | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | sensation | detection of physical energy by sensory receptors | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | transduction | conversion of physical stimulus energy into neural signals | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'sensation-sensory-processing-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: reduced sensitivity to constant stimulation
      2) Write the concept that matches: minimum change needed to notice a difference
      3) Write the concept that matches: detection of physical energy by sensory receptors

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sensory adaptation', 'just noticeable difference', 'sensation'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: J',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: sensory adaptation, just noticeable difference, and sensation. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'sensation-sensory-processing-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: reduced sensitivity to constant stimulation',
            options: ['sensation', 'transduction', 'difference threshold', 'sensory adaptation']
          },
          {
            label: 'Select the concept that best matches: minimum change needed to notice a difference',
            options: ['just noticeable difference', 'absolute threshold', 'sensation', 'transduction']
          },
          {
            label: 'Select the concept that best matches: detection of physical energy by sensory receptors',
            options: ['sensory adaptation', 'transduction', 'absolute threshold', 'sensation']
          }
        ],
        correctAnswers: ['sensory adaptation', 'just noticeable difference', 'sensation'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are sensory adaptation, just noticeable difference, and sensation. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'sensation-sensory-processing-p5-s6-strategy',
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
      - In scenario questions about attention lapses in long monitoring tasks, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'sensation-sensory-processing-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating attention lapses in long monitoring tasks finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'sensation',
              'sensory adaptation',
              'transduction',
              'just noticeable difference'
            ],
            correctAnswer: 2,
            explanation: 'transduction is best because it reflects this mechanism (conversion of physical stimulus energy into neural signals). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'just noticeable difference',
              'sensation',
              'difference threshold',
              'absolute threshold'
            ],
            correctAnswer: 3,
            explanation: 'absolute threshold is the strongest interpretation because it maps to the measured pattern and proposed mechanism: minimum stimulus intensity detected 50% of the time. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
