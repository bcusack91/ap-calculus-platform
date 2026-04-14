export const psychPrenatalPart6Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p6-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Prenatal and Childhood Development

      **Part 6 of 7 — Applied Development Cases**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **zygote**: fertilized egg in the earliest stage of development
      - **embryo**: developing organism from implantation to about eight weeks
      - **fetus**: prenatal stage from roughly nine weeks to birth

      ### Concrete Real-World Example
      A team is studying developmental case data interpretation. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'prenatal-childhood-development-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about developmental case data interpretation, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'teratogen',
              'embryo',
              'zygote',
              'fetus'
            ],
            correctAnswer: 2,
            explanation: 'zygote is correct because it directly matches this mechanism: fertilized egg in the earliest stage of development. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'fetus',
              'object permanence',
              'embryo',
              'critical period'
            ],
            correctAnswer: 3,
            explanation: 'critical period is the strongest match here (time window when specific experiences strongly shape development). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p6-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing developmental case data interpretation, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | zygote | fertilized egg in the earliest stage of development | experimental manipulation with random assignment | possible demand characteristics |
      | embryo | developing organism from implantation to about eight weeks | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | fetus | prenatal stage from roughly nine weeks to birth | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | teratogen | environmental agent that can harm prenatal development | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'prenatal-childhood-development-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: fertilized egg in the earliest stage of development

      2) Write the concept that matches: developing organism from implantation to about eight weeks

      3) Write the concept that matches: prenatal stage from roughly nine weeks to birth

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['zygote', 'embryo', 'fetus'],
        hint1: 'Starts with: Z',
        hint2: 'Starts with: E',
        hint3: 'Starts with: F',
        explanation: 'Expected answers: zygote, embryo, and fetus. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'prenatal-childhood-development-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: fertilized egg in the earliest stage of development',
            options: ['teratogen', 'zygote', 'object permanence', 'fetus']
          },
          {
            label: 'Select the concept that best matches: developing organism from implantation to about eight weeks',
            options: ['teratogen', 'critical period', 'zygote', 'embryo']
          },
          {
            label: 'Select the concept that best matches: prenatal stage from roughly nine weeks to birth',
            options: ['zygote', 'fetus', 'embryo', 'teratogen']
          }
        ],
        correctAnswers: ['zygote', 'embryo', 'fetus'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are zygote, embryo, and fetus. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'prenatal-childhood-development-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Development is not strictly linear; domains can progress at different rates.
      - Attachment quality reflects patterns over time, not one isolated event.
      - Cognitive stages describe trends, but individual variation is expected.
      - Early adversity raises risk but does not guarantee poor outcomes.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about developmental case data interpretation, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'prenatal-childhood-development-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating developmental case data interpretation finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'fetus',
              'embryo',
              'teratogen',
              'zygote'
            ],
            correctAnswer: 2,
            explanation: 'teratogen is best because it reflects this mechanism (environmental agent that can harm prenatal development). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'fetus',
              'critical period',
              'embryo',
              'object permanence'
            ],
            correctAnswer: 1,
            explanation: 'critical period is the strongest interpretation because it maps to the measured pattern and proposed mechanism: time window when specific experiences strongly shape development. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
