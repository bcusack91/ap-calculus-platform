export const psychGroupPart3Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Group Behavior and Prejudice

      **Part 3 of 7 — Stereotypes and Attribution**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **fundamental attribution error**: overattributing others' behavior to disposition rather than situation
      - **stereotype**: a generalized belief about members of a group
      - **prejudice**: an unjustified negative attitude toward a group

      ### Concrete Real-World Example
      A team is studying jury deliberation with strong authority pressure. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'group-behavior-prejudice-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about jury deliberation with strong authority pressure, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'fundamental attribution error',
              'prejudice',
              'discrimination',
              'stereotype'
            ],
            correctAnswer: 0,
            explanation: 'fundamental attribution error is correct because it directly matches this mechanism: overattributing others\' behavior to disposition rather than situation. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'prejudice',
              'stereotype',
              'groupthink',
              'contact hypothesis'
            ],
            correctAnswer: 3,
            explanation: 'contact hypothesis is the strongest match here (structured intergroup contact can reduce prejudice). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing jury deliberation with strong authority pressure, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | fundamental attribution error | overattributing others' behavior to disposition rather than situation | experimental manipulation with random assignment | possible demand characteristics |
      | stereotype | a generalized belief about members of a group | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | prejudice | an unjustified negative attitude toward a group | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | discrimination | unequal behavior toward people based on group membership | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'group-behavior-prejudice-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: overattributing others' behavior to disposition rather than situation
      2) Write the concept that matches: a generalized belief about members of a group
      3) Write the concept that matches: an unjustified negative attitude toward a group

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['fundamental attribution error', 'stereotype', 'prejudice'],
        hint1: 'Starts with: F',
        hint2: 'Starts with: S',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: fundamental attribution error, stereotype, and prejudice. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'group-behavior-prejudice-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: overattributing others\' behavior to disposition rather than situation',
            options: ['prejudice', 'stereotype', 'discrimination', 'fundamental attribution error']
          },
          {
            label: 'Select the concept that best matches: a generalized belief about members of a group',
            options: ['prejudice', 'discrimination', 'fundamental attribution error', 'stereotype']
          },
          {
            label: 'Select the concept that best matches: an unjustified negative attitude toward a group',
            options: ['prejudice', 'discrimination', 'fundamental attribution error', 'contact hypothesis']
          }
        ],
        correctAnswers: ['fundamental attribution error', 'stereotype', 'prejudice'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are fundamental attribution error, stereotype, and prejudice. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'group-behavior-prejudice-p3-s6-strategy',
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
      - In scenario questions about jury deliberation with strong authority pressure, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'group-behavior-prejudice-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating jury deliberation with strong authority pressure finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'prejudice',
              'fundamental attribution error',
              'discrimination',
              'stereotype'
            ],
            correctAnswer: 2,
            explanation: 'discrimination is best because it reflects this mechanism (unequal behavior toward people based on group membership). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'stereotype',
              'groupthink',
              'prejudice',
              'contact hypothesis'
            ],
            correctAnswer: 3,
            explanation: 'contact hypothesis is the strongest interpretation because it maps to the measured pattern and proposed mechanism: structured intergroup contact can reduce prejudice. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
