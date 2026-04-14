export const psychGroupPart2Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Group Behavior and Prejudice

      **Part 2 of 7 — Conformity and Obedience**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **conformity**: adjusting behavior or beliefs to align with a group
      - **obedience**: compliance with direct commands from authority
      - **fundamental attribution error**: overattributing others' behavior to disposition rather than situation

      ### Concrete Real-World Example
      A team is studying students conforming during a classroom demonstration. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'group-behavior-prejudice-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about students conforming during a classroom demonstration, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'obedience',
              'stereotype',
              'conformity',
              'fundamental attribution error'
            ],
            correctAnswer: 2,
            explanation: 'conformity is correct because it directly matches this mechanism: adjusting behavior or beliefs to align with a group. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'discrimination',
              'fundamental attribution error',
              'prejudice',
              'obedience'
            ],
            correctAnswer: 2,
            explanation: 'prejudice is the strongest match here (an unjustified negative attitude toward a group). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing students conforming during a classroom demonstration, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | conformity | adjusting behavior or beliefs to align with a group | experimental manipulation with random assignment | possible demand characteristics |
      | obedience | compliance with direct commands from authority | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | fundamental attribution error | overattributing others' behavior to disposition rather than situation | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | stereotype | a generalized belief about members of a group | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'group-behavior-prejudice-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: adjusting behavior or beliefs to align with a group

      2) Write the concept that matches: compliance with direct commands from authority

      3) Write the concept that matches: overattributing others' behavior to disposition rather than situation

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['conformity', 'obedience', 'fundamental attribution error'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: O',
        hint3: 'Starts with: F',
        explanation: 'Expected answers: conformity, obedience, and fundamental attribution error. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'group-behavior-prejudice-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: adjusting behavior or beliefs to align with a group',
            options: ['stereotype', 'conformity', 'prejudice', 'obedience']
          },
          {
            label: 'Select the concept that best matches: compliance with direct commands from authority',
            options: ['discrimination', 'fundamental attribution error', 'conformity', 'obedience']
          },
          {
            label: 'Select the concept that best matches: overattributing others\' behavior to disposition rather than situation',
            options: ['conformity', 'obedience', 'fundamental attribution error', 'stereotype']
          }
        ],
        correctAnswers: ['conformity', 'obedience', 'fundamental attribution error'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are conformity, obedience, and fundamental attribution error. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'group-behavior-prejudice-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Stereotypes can be positive or negative, but both can distort judgment.
      - Conformity can reflect informational needs, not only fear of rejection.
      - Reducing prejudice requires sustained structural conditions, not one-time exposure alone.
      - Group cohesion helps performance until dissent is suppressed.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about students conforming during a classroom demonstration, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'group-behavior-prejudice-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating students conforming during a classroom demonstration finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'stereotype',
              'conformity',
              'obedience',
              'fundamental attribution error'
            ],
            correctAnswer: 0,
            explanation: 'stereotype is best because it reflects this mechanism (a generalized belief about members of a group). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'obedience',
              'discrimination',
              'fundamental attribution error',
              'prejudice'
            ],
            correctAnswer: 3,
            explanation: 'prejudice is the strongest interpretation because it maps to the measured pattern and proposed mechanism: an unjustified negative attitude toward a group. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
