export const psychPrenatalPart5Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Prenatal and Childhood Development

      **Part 5 of 7 — Language and Learning in Childhood**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **scaffolding**: supporting a child just beyond current independent ability
      - **theory of mind**: understanding that others have distinct beliefs and perspectives
      - **zygote**: fertilized egg in the earliest stage of development

      ### Concrete Real-World Example
      A team is studying language growth in bilingual household contexts. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'prenatal-childhood-development-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about language growth in bilingual household contexts, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'zygote',
              'scaffolding',
              'theory of mind',
              'embryo'
            ],
            correctAnswer: 1,
            explanation: 'scaffolding is correct because it directly matches this mechanism: supporting a child just beyond current independent ability. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'fetus',
              'theory of mind',
              'teratogen',
              'zygote'
            ],
            correctAnswer: 0,
            explanation: 'fetus is the strongest match here (prenatal stage from roughly nine weeks to birth). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing language growth in bilingual household contexts, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | scaffolding | supporting a child just beyond current independent ability | experimental manipulation with random assignment | possible demand characteristics |
      | theory of mind | understanding that others have distinct beliefs and perspectives | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | zygote | fertilized egg in the earliest stage of development | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | embryo | developing organism from implantation to about eight weeks | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'prenatal-childhood-development-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: supporting a child just beyond current independent ability

      2) Write the concept that matches: understanding that others have distinct beliefs and perspectives

      3) Write the concept that matches: fertilized egg in the earliest stage of development

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['scaffolding', 'theory of mind', 'zygote'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: T',
        hint3: 'Starts with: Z',
        explanation: 'Expected answers: scaffolding, theory of mind, and zygote. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'prenatal-childhood-development-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: supporting a child just beyond current independent ability',
            options: ['embryo', 'zygote', 'teratogen', 'scaffolding']
          },
          {
            label: 'Select the concept that best matches: understanding that others have distinct beliefs and perspectives',
            options: ['embryo', 'theory of mind', 'fetus', 'zygote']
          },
          {
            label: 'Select the concept that best matches: fertilized egg in the earliest stage of development',
            options: ['embryo', 'scaffolding', 'fetus', 'zygote']
          }
        ],
        correctAnswers: ['scaffolding', 'theory of mind', 'zygote'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are scaffolding, theory of mind, and zygote. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'prenatal-childhood-development-p5-s6-strategy',
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
      - In scenario questions about language growth in bilingual household contexts, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'prenatal-childhood-development-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating language growth in bilingual household contexts finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'theory of mind',
              'zygote',
              'embryo',
              'scaffolding'
            ],
            correctAnswer: 2,
            explanation: 'embryo is best because it reflects this mechanism (developing organism from implantation to about eight weeks). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'theory of mind',
              'fetus',
              'zygote',
              'teratogen'
            ],
            correctAnswer: 1,
            explanation: 'fetus is the strongest interpretation because it maps to the measured pattern and proposed mechanism: prenatal stage from roughly nine weeks to birth. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
