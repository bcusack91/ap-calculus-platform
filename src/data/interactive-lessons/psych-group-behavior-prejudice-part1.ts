export const psychGroupPart1Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p1-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Group Behavior and Prejudice

      **Part 1 of 7 — Social Identity and Ingroup Processes**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **social identity**: part of self-concept derived from group membership
      - **ingroup bias**: favoring one's own group over outgroups
      - **conformity**: adjusting behavior or beliefs to align with a group

      ### Concrete Real-World Example
      A team is studying a hiring committee evaluating identical resumes with different names. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'group-behavior-prejudice-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about a hiring committee evaluating identical resumes with different names, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'social identity',
              'ingroup bias',
              'conformity',
              'obedience'
            ],
            correctAnswer: 0,
            explanation: 'social identity is correct because it directly matches this mechanism: part of self-concept derived from group membership. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'fundamental attribution error',
              'ingroup bias',
              'stereotype',
              'conformity'
            ],
            correctAnswer: 0,
            explanation: 'fundamental attribution error is the strongest match here (overattributing others\' behavior to disposition rather than situation). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p1-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing a hiring committee evaluating identical resumes with different names, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | social identity | part of self-concept derived from group membership | experimental manipulation with random assignment | possible demand characteristics |
      | ingroup bias | favoring one's own group over outgroups | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | conformity | adjusting behavior or beliefs to align with a group | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | obedience | compliance with direct commands from authority | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'group-behavior-prejudice-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: part of self-concept derived from group membership

      2) Write the concept that matches: favoring one's own group over outgroups

      3) Write the concept that matches: adjusting behavior or beliefs to align with a group

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['social identity', 'ingroup bias', 'conformity'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: I',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: social identity, ingroup bias, and conformity. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'group-behavior-prejudice-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: part of self-concept derived from group membership',
            options: ['social identity', 'ingroup bias', 'conformity', 'fundamental attribution error']
          },
          {
            label: 'Select the concept that best matches: favoring one\'s own group over outgroups',
            options: ['ingroup bias', 'stereotype', 'conformity', 'social identity']
          },
          {
            label: 'Select the concept that best matches: adjusting behavior or beliefs to align with a group',
            options: ['stereotype', 'ingroup bias', 'fundamental attribution error', 'conformity']
          }
        ],
        correctAnswers: ['social identity', 'ingroup bias', 'conformity'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are social identity, ingroup bias, and conformity. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'group-behavior-prejudice-p1-s6-strategy',
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
      - In scenario questions about a hiring committee evaluating identical resumes with different names, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'group-behavior-prejudice-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating a hiring committee evaluating identical resumes with different names finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'obedience',
              'conformity',
              'ingroup bias',
              'social identity'
            ],
            correctAnswer: 0,
            explanation: 'obedience is best because it reflects this mechanism (compliance with direct commands from authority). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'stereotype',
              'conformity',
              'ingroup bias',
              'fundamental attribution error'
            ],
            correctAnswer: 3,
            explanation: 'fundamental attribution error is the strongest interpretation because it maps to the measured pattern and proposed mechanism: overattributing others\' behavior to disposition rather than situation. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
