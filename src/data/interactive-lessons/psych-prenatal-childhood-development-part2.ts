export const psychPrenatalPart2Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Prenatal and Childhood Development

      **Part 2 of 7 — Brain and Motor Development**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **fetus**: prenatal stage from roughly nine weeks to birth
      - **teratogen**: environmental agent that can harm prenatal development
      - **critical period**: time window when specific experiences strongly shape development

      ### Concrete Real-World Example
      A team is studying early intervention planning for delayed milestones. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'prenatal-childhood-development-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about early intervention planning for delayed milestones, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'critical period',
              'object permanence',
              'teratogen',
              'fetus'
            ],
            correctAnswer: 3,
            explanation: 'fetus is correct because it directly matches this mechanism: prenatal stage from roughly nine weeks to birth. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'secure attachment',
              'critical period',
              'teratogen',
              'authoritative parenting'
            ],
            correctAnswer: 0,
            explanation: 'secure attachment is the strongest match here (caregiver bond marked by trust and comfort in reunion). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing early intervention planning for delayed milestones, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | fetus | prenatal stage from roughly nine weeks to birth | experimental manipulation with random assignment | possible demand characteristics |
      | teratogen | environmental agent that can harm prenatal development | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | critical period | time window when specific experiences strongly shape development | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | object permanence | understanding that objects continue to exist when out of sight | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'prenatal-childhood-development-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: prenatal stage from roughly nine weeks to birth
      2) Write the concept that matches: environmental agent that can harm prenatal development
      3) Write the concept that matches: time window when specific experiences strongly shape development

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['fetus', 'teratogen', 'critical period'],
        hint1: 'Starts with: F',
        hint2: 'Starts with: T',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: fetus, teratogen, and critical period. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'prenatal-childhood-development-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: prenatal stage from roughly nine weeks to birth',
            options: ['fetus', 'secure attachment', 'object permanence', 'authoritative parenting']
          },
          {
            label: 'Select the concept that best matches: environmental agent that can harm prenatal development',
            options: ['teratogen', 'secure attachment', 'authoritative parenting', 'critical period']
          },
          {
            label: 'Select the concept that best matches: time window when specific experiences strongly shape development',
            options: ['critical period', 'object permanence', 'secure attachment', 'teratogen']
          }
        ],
        correctAnswers: ['fetus', 'teratogen', 'critical period'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are fetus, teratogen, and critical period. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'prenatal-childhood-development-p2-s6-strategy',
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
      - In scenario questions about early intervention planning for delayed milestones, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'prenatal-childhood-development-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating early intervention planning for delayed milestones finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'critical period',
              'fetus',
              'teratogen',
              'object permanence'
            ],
            correctAnswer: 3,
            explanation: 'object permanence is best because it reflects this mechanism (understanding that objects continue to exist when out of sight). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'critical period',
              'authoritative parenting',
              'secure attachment',
              'teratogen'
            ],
            correctAnswer: 2,
            explanation: 'secure attachment is the strongest interpretation because it maps to the measured pattern and proposed mechanism: caregiver bond marked by trust and comfort in reunion. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
