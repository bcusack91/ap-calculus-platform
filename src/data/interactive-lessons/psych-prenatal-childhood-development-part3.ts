export const psychPrenatalPart3Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Prenatal and Childhood Development

      **Part 3 of 7 — Cognitive Development Models**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **critical period**: time window when specific experiences strongly shape development
      - **object permanence**: understanding that objects continue to exist when out of sight
      - **secure attachment**: caregiver bond marked by trust and comfort in reunion

      ### Concrete Real-World Example
      A team is studying Piaget-style conservation tasks in elementary school. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'prenatal-childhood-development-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about Piaget-style conservation tasks in elementary school, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'secure attachment',
              'authoritative parenting',
              'object permanence',
              'critical period'
            ],
            correctAnswer: 3,
            explanation: 'critical period is correct because it directly matches this mechanism: time window when specific experiences strongly shape development. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'theory of mind',
              'secure attachment',
              'scaffolding',
              'object permanence'
            ],
            correctAnswer: 2,
            explanation: 'scaffolding is the strongest match here (supporting a child just beyond current independent ability). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing Piaget-style conservation tasks in elementary school, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | critical period | time window when specific experiences strongly shape development | experimental manipulation with random assignment | possible demand characteristics |
      | object permanence | understanding that objects continue to exist when out of sight | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | secure attachment | caregiver bond marked by trust and comfort in reunion | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | authoritative parenting | high warmth with firm, consistent expectations | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'prenatal-childhood-development-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: time window when specific experiences strongly shape development

      2) Write the concept that matches: understanding that objects continue to exist when out of sight

      3) Write the concept that matches: caregiver bond marked by trust and comfort in reunion

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['critical period', 'object permanence', 'secure attachment'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: O',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: critical period, object permanence, and secure attachment. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'prenatal-childhood-development-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: time window when specific experiences strongly shape development',
            options: ['theory of mind', 'critical period', 'authoritative parenting', 'secure attachment']
          },
          {
            label: 'Select the concept that best matches: understanding that objects continue to exist when out of sight',
            options: ['object permanence', 'theory of mind', 'secure attachment', 'critical period']
          },
          {
            label: 'Select the concept that best matches: caregiver bond marked by trust and comfort in reunion',
            options: ['theory of mind', 'secure attachment', 'scaffolding', 'object permanence']
          }
        ],
        correctAnswers: ['critical period', 'object permanence', 'secure attachment'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are critical period, object permanence, and secure attachment. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'prenatal-childhood-development-p3-s6-strategy',
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
      - In scenario questions about Piaget-style conservation tasks in elementary school, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'prenatal-childhood-development-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating Piaget-style conservation tasks in elementary school finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'object permanence',
              'secure attachment',
              'critical period',
              'authoritative parenting'
            ],
            correctAnswer: 3,
            explanation: 'authoritative parenting is best because it reflects this mechanism (high warmth with firm, consistent expectations). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'scaffolding',
              'secure attachment',
              'theory of mind',
              'object permanence'
            ],
            correctAnswer: 0,
            explanation: 'scaffolding is the strongest interpretation because it maps to the measured pattern and proposed mechanism: supporting a child just beyond current independent ability. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
