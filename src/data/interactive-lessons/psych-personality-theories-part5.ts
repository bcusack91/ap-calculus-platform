export const psychPersonalityPart5Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'personality-theories-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Personality Theories

      **Part 5 of 7 — Assessment Methods**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **person-situation debate**: question of trait consistency versus situational influence
      - **temperament**: early-appearing emotional reactivity and regulation tendencies
      - **trait**: a relatively stable disposition influencing behavior across situations

      ### Concrete Real-World Example
      A team is studying comparing personality test validity in hiring. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'personality-theories-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about comparing personality test validity in hiring, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'person-situation debate',
              'trait',
              'Big Five',
              'temperament'
            ],
            correctAnswer: 0,
            explanation: 'person-situation debate is correct because it directly matches this mechanism: question of trait consistency versus situational influence. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'temperament',
              'self-actualization',
              'trait',
              'psychodynamic'
            ],
            correctAnswer: 3,
            explanation: 'psychodynamic is the strongest match here (approach emphasizing unconscious processes and early relationships). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing comparing personality test validity in hiring, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | person-situation debate | question of trait consistency versus situational influence | experimental manipulation with random assignment | possible demand characteristics |
      | temperament | early-appearing emotional reactivity and regulation tendencies | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | trait | a relatively stable disposition influencing behavior across situations | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | Big Five | five broad trait dimensions: openness, conscientiousness, extraversion, agreeableness, neuroticism | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'personality-theories-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: question of trait consistency versus situational influence

      2) Write the concept that matches: early-appearing emotional reactivity and regulation tendencies

      3) Write the concept that matches: a relatively stable disposition influencing behavior across situations

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['person-situation debate', 'temperament', 'trait'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: T',
        hint3: 'Starts with: T',
        explanation: 'Expected answers: person-situation debate, temperament, and trait. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'personality-theories-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: question of trait consistency versus situational influence',
            options: ['person-situation debate', 'Big Five', 'self-actualization', 'psychodynamic']
          },
          {
            label: 'Select the concept that best matches: early-appearing emotional reactivity and regulation tendencies',
            options: ['trait', 'Big Five', 'temperament', 'self-actualization']
          },
          {
            label: 'Select the concept that best matches: a relatively stable disposition influencing behavior across situations',
            options: ['trait', 'psychodynamic', 'Big Five', 'person-situation debate']
          }
        ],
        correctAnswers: ['person-situation debate', 'temperament', 'trait'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are person-situation debate, temperament, and trait. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'personality-theories-p5-s6-strategy',
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
      - In scenario questions about comparing personality test validity in hiring, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'personality-theories-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating comparing personality test validity in hiring finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'Big Five',
              'temperament',
              'trait',
              'person-situation debate'
            ],
            correctAnswer: 0,
            explanation: 'Big Five is best because it reflects this mechanism (five broad trait dimensions: openness, conscientiousness, extraversion, agreeableness, neuroticism). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'trait',
              'self-actualization',
              'temperament',
              'psychodynamic'
            ],
            correctAnswer: 3,
            explanation: 'psychodynamic is the strongest interpretation because it maps to the measured pattern and proposed mechanism: approach emphasizing unconscious processes and early relationships. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
