export const psychGroupPart5Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Group Behavior and Prejudice

      **Part 5 of 7 — Aggression and Group Decision Errors**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **contact hypothesis**: structured intergroup contact can reduce prejudice
      - **groupthink**: poor group decisions from pressure to maintain consensus
      - **social identity**: part of self-concept derived from group membership

      ### Concrete Real-World Example
      A team is studying team decision failures in a high-stakes project. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'group-behavior-prejudice-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about team decision failures in a high-stakes project, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'social identity',
              'groupthink',
              'ingroup bias',
              'contact hypothesis'
            ],
            correctAnswer: 3,
            explanation: 'contact hypothesis is correct because it directly matches this mechanism: structured intergroup contact can reduce prejudice. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'obedience',
              'conformity',
              'social identity',
              'groupthink'
            ],
            correctAnswer: 1,
            explanation: 'conformity is the strongest match here (adjusting behavior or beliefs to align with a group). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing team decision failures in a high-stakes project, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | contact hypothesis | structured intergroup contact can reduce prejudice | experimental manipulation with random assignment | possible demand characteristics |
      | groupthink | poor group decisions from pressure to maintain consensus | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | social identity | part of self-concept derived from group membership | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | ingroup bias | favoring one's own group over outgroups | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'group-behavior-prejudice-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: structured intergroup contact can reduce prejudice
      2) Write the concept that matches: poor group decisions from pressure to maintain consensus
      3) Write the concept that matches: part of self-concept derived from group membership

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['contact hypothesis', 'groupthink', 'social identity'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: G',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: contact hypothesis, groupthink, and social identity. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'group-behavior-prejudice-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: structured intergroup contact can reduce prejudice',
            options: ['groupthink', 'social identity', 'contact hypothesis', 'conformity']
          },
          {
            label: 'Select the concept that best matches: poor group decisions from pressure to maintain consensus',
            options: ['social identity', 'groupthink', 'obedience', 'ingroup bias']
          },
          {
            label: 'Select the concept that best matches: part of self-concept derived from group membership',
            options: ['groupthink', 'social identity', 'ingroup bias', 'obedience']
          }
        ],
        correctAnswers: ['contact hypothesis', 'groupthink', 'social identity'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are contact hypothesis, groupthink, and social identity. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'group-behavior-prejudice-p5-s6-strategy',
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
      - In scenario questions about team decision failures in a high-stakes project, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'group-behavior-prejudice-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating team decision failures in a high-stakes project finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'groupthink',
              'social identity',
              'ingroup bias',
              'contact hypothesis'
            ],
            correctAnswer: 2,
            explanation: 'ingroup bias is best because it reflects this mechanism (favoring one\'s own group over outgroups). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'social identity',
              'groupthink',
              'obedience',
              'conformity'
            ],
            correctAnswer: 3,
            explanation: 'conformity is the strongest interpretation because it maps to the measured pattern and proposed mechanism: adjusting behavior or beliefs to align with a group. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
