export const psychPersonalityPart4Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'personality-theories-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Personality Theories

      **Part 4 of 7 — Biological Contributions**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **projective test**: ambiguous stimulus task intended to reveal underlying motives
      - **self-report inventory**: structured questionnaire for personality assessment
      - **person-situation debate**: question of trait consistency versus situational influence

      ### Concrete Real-World Example
      A team is studying gene-environment links in temperament trajectories. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'personality-theories-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about gene-environment links in temperament trajectories, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'temperament',
              'self-report inventory',
              'person-situation debate',
              'projective test'
            ],
            correctAnswer: 3,
            explanation: 'projective test is correct because it directly matches this mechanism: ambiguous stimulus task intended to reveal underlying motives. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'self-report inventory',
              'person-situation debate',
              'trait',
              'Big Five'
            ],
            correctAnswer: 2,
            explanation: 'trait is the strongest match here (a relatively stable disposition influencing behavior across situations). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing gene-environment links in temperament trajectories, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | projective test | ambiguous stimulus task intended to reveal underlying motives | experimental manipulation with random assignment | possible demand characteristics |
      | self-report inventory | structured questionnaire for personality assessment | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | person-situation debate | question of trait consistency versus situational influence | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | temperament | early-appearing emotional reactivity and regulation tendencies | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'personality-theories-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: ambiguous stimulus task intended to reveal underlying motives
      2) Write the concept that matches: structured questionnaire for personality assessment
      3) Write the concept that matches: question of trait consistency versus situational influence

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['projective test', 'self-report inventory', 'person-situation debate'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: S',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: projective test, self-report inventory, and person-situation debate. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'personality-theories-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: ambiguous stimulus task intended to reveal underlying motives',
            options: ['self-report inventory', 'person-situation debate', 'temperament', 'projective test']
          },
          {
            label: 'Select the concept that best matches: structured questionnaire for personality assessment',
            options: ['trait', 'temperament', 'self-report inventory', 'person-situation debate']
          },
          {
            label: 'Select the concept that best matches: question of trait consistency versus situational influence',
            options: ['person-situation debate', 'self-report inventory', 'projective test', 'temperament']
          }
        ],
        correctAnswers: ['projective test', 'self-report inventory', 'person-situation debate'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are projective test, self-report inventory, and person-situation debate. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'personality-theories-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Traits summarize tendencies, not fixed behaviors in every context.
      - Projective methods can be clinically useful but generally have weaker psychometrics than many inventories.
      - Personality can show both stability and development across lifespan stages.
      - No single theory fully explains personality; each emphasizes different mechanisms.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about gene-environment links in temperament trajectories, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'personality-theories-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating gene-environment links in temperament trajectories finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'temperament',
              'self-report inventory',
              'projective test',
              'person-situation debate'
            ],
            correctAnswer: 0,
            explanation: 'temperament is best because it reflects this mechanism (early-appearing emotional reactivity and regulation tendencies). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'trait',
              'person-situation debate',
              'Big Five',
              'self-report inventory'
            ],
            correctAnswer: 0,
            explanation: 'trait is the strongest interpretation because it maps to the measured pattern and proposed mechanism: a relatively stable disposition influencing behavior across situations. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
