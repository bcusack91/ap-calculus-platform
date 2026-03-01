export const psychGroupPart4Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Group Behavior and Prejudice

      **Part 4 of 7 — Prejudice Reduction Mechanisms**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **prejudice**: an unjustified negative attitude toward a group
      - **discrimination**: unequal behavior toward people based on group membership
      - **contact hypothesis**: structured intergroup contact can reduce prejudice

      ### Concrete Real-World Example
      A team is studying a workplace DEI training using contact-based interventions. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'group-behavior-prejudice-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about a workplace DEI training using contact-based interventions, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'groupthink',
              'contact hypothesis',
              'discrimination',
              'prejudice'
            ],
            correctAnswer: 3,
            explanation: 'prejudice is correct because it directly matches this mechanism: an unjustified negative attitude toward a group. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'ingroup bias',
              'social identity',
              'contact hypothesis',
              'discrimination'
            ],
            correctAnswer: 1,
            explanation: 'social identity is the strongest match here (part of self-concept derived from group membership). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing a workplace DEI training using contact-based interventions, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | prejudice | an unjustified negative attitude toward a group | experimental manipulation with random assignment | possible demand characteristics |
      | discrimination | unequal behavior toward people based on group membership | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | contact hypothesis | structured intergroup contact can reduce prejudice | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | groupthink | poor group decisions from pressure to maintain consensus | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'group-behavior-prejudice-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: an unjustified negative attitude toward a group
      2) Write the concept that matches: unequal behavior toward people based on group membership
      3) Write the concept that matches: structured intergroup contact can reduce prejudice

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['prejudice', 'discrimination', 'contact hypothesis'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: D',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: prejudice, discrimination, and contact hypothesis. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'group-behavior-prejudice-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: an unjustified negative attitude toward a group',
            options: ['contact hypothesis', 'social identity', 'groupthink', 'prejudice']
          },
          {
            label: 'Select the concept that best matches: unequal behavior toward people based on group membership',
            options: ['discrimination', 'ingroup bias', 'social identity', 'contact hypothesis']
          },
          {
            label: 'Select the concept that best matches: structured intergroup contact can reduce prejudice',
            options: ['contact hypothesis', 'prejudice', 'ingroup bias', 'discrimination']
          }
        ],
        correctAnswers: ['prejudice', 'discrimination', 'contact hypothesis'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are prejudice, discrimination, and contact hypothesis. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'group-behavior-prejudice-p4-s6-strategy',
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
      - In scenario questions about a workplace DEI training using contact-based interventions, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'group-behavior-prejudice-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating a workplace DEI training using contact-based interventions finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'contact hypothesis',
              'prejudice',
              'groupthink',
              'discrimination'
            ],
            correctAnswer: 2,
            explanation: 'groupthink is best because it reflects this mechanism (poor group decisions from pressure to maintain consensus). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'contact hypothesis',
              'ingroup bias',
              'social identity',
              'discrimination'
            ],
            correctAnswer: 2,
            explanation: 'social identity is the strongest interpretation because it maps to the measured pattern and proposed mechanism: part of self-concept derived from group membership. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
