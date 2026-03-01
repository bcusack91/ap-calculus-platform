export const psychPrenatalPart4Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Prenatal and Childhood Development

      **Part 4 of 7 — Attachment and Socioemotional Development**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **secure attachment**: caregiver bond marked by trust and comfort in reunion
      - **authoritative parenting**: high warmth with firm, consistent expectations
      - **scaffolding**: supporting a child just beyond current independent ability

      ### Concrete Real-World Example
      A team is studying daycare transition and attachment behavior. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'prenatal-childhood-development-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about daycare transition and attachment behavior, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'secure attachment',
              'scaffolding',
              'authoritative parenting',
              'theory of mind'
            ],
            correctAnswer: 0,
            explanation: 'secure attachment is correct because it directly matches this mechanism: caregiver bond marked by trust and comfort in reunion. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'scaffolding',
              'zygote',
              'embryo',
              'authoritative parenting'
            ],
            correctAnswer: 1,
            explanation: 'zygote is the strongest match here (fertilized egg in the earliest stage of development). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing daycare transition and attachment behavior, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | secure attachment | caregiver bond marked by trust and comfort in reunion | experimental manipulation with random assignment | possible demand characteristics |
      | authoritative parenting | high warmth with firm, consistent expectations | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | scaffolding | supporting a child just beyond current independent ability | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | theory of mind | understanding that others have distinct beliefs and perspectives | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'prenatal-childhood-development-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: caregiver bond marked by trust and comfort in reunion
      2) Write the concept that matches: high warmth with firm, consistent expectations
      3) Write the concept that matches: supporting a child just beyond current independent ability

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['secure attachment', 'authoritative parenting', 'scaffolding'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: A',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: secure attachment, authoritative parenting, and scaffolding. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'prenatal-childhood-development-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: caregiver bond marked by trust and comfort in reunion',
            options: ['theory of mind', 'zygote', 'secure attachment', 'scaffolding']
          },
          {
            label: 'Select the concept that best matches: high warmth with firm, consistent expectations',
            options: ['theory of mind', 'scaffolding', 'authoritative parenting', 'zygote']
          },
          {
            label: 'Select the concept that best matches: supporting a child just beyond current independent ability',
            options: ['secure attachment', 'authoritative parenting', 'zygote', 'scaffolding']
          }
        ],
        correctAnswers: ['secure attachment', 'authoritative parenting', 'scaffolding'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are secure attachment, authoritative parenting, and scaffolding. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'prenatal-childhood-development-p4-s6-strategy',
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
      - In scenario questions about daycare transition and attachment behavior, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'prenatal-childhood-development-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating daycare transition and attachment behavior finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'scaffolding',
              'authoritative parenting',
              'secure attachment',
              'theory of mind'
            ],
            correctAnswer: 3,
            explanation: 'theory of mind is best because it reflects this mechanism (understanding that others have distinct beliefs and perspectives). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'zygote',
              'scaffolding',
              'embryo',
              'authoritative parenting'
            ],
            correctAnswer: 0,
            explanation: 'zygote is the strongest interpretation because it maps to the measured pattern and proposed mechanism: fertilized egg in the earliest stage of development. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
