export const psychTreatmentPart6Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p6-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Treatment and Therapy

      **Part 6 of 7 — Case Planning and Outcome Data**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **psychotherapy**: structured psychological treatment delivered by a trained professional
      - **cognitive restructuring**: identifying and modifying maladaptive thought patterns
      - **exposure therapy**: gradual and systematic confrontation of feared stimuli

      ### Concrete Real-World Example
      A team is studying interpreting symptom scale changes across sessions. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'treatment-therapy-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about interpreting symptom scale changes across sessions, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'cognitive restructuring',
              'behavior activation',
              'psychotherapy',
              'exposure therapy'
            ],
            correctAnswer: 2,
            explanation: 'psychotherapy is correct because it directly matches this mechanism: structured psychological treatment delivered by a trained professional. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'client-centered therapy',
              'therapeutic alliance',
              'exposure therapy',
              'cognitive restructuring'
            ],
            correctAnswer: 1,
            explanation: 'therapeutic alliance is the strongest match here (collaborative bond and agreement on goals and tasks). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p6-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing interpreting symptom scale changes across sessions, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | psychotherapy | structured psychological treatment delivered by a trained professional | experimental manipulation with random assignment | possible demand characteristics |
      | cognitive restructuring | identifying and modifying maladaptive thought patterns | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | exposure therapy | gradual and systematic confrontation of feared stimuli | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | behavior activation | increasing engagement in rewarding and goal-directed activities | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'treatment-therapy-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: structured psychological treatment delivered by a trained professional

      2) Write the concept that matches: identifying and modifying maladaptive thought patterns

      3) Write the concept that matches: gradual and systematic confrontation of feared stimuli

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['psychotherapy', 'cognitive restructuring', 'exposure therapy'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: C',
        hint3: 'Starts with: E',
        explanation: 'Expected answers: psychotherapy, cognitive restructuring, and exposure therapy. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'treatment-therapy-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: structured psychological treatment delivered by a trained professional',
            options: ['psychotherapy', 'cognitive restructuring', 'behavior activation', 'exposure therapy']
          },
          {
            label: 'Select the concept that best matches: identifying and modifying maladaptive thought patterns',
            options: ['cognitive restructuring', 'therapeutic alliance', 'client-centered therapy', 'psychotherapy']
          },
          {
            label: 'Select the concept that best matches: gradual and systematic confrontation of feared stimuli',
            options: ['psychotherapy', 'client-centered therapy', 'exposure therapy', 'cognitive restructuring']
          }
        ],
        correctAnswers: ['psychotherapy', 'cognitive restructuring', 'exposure therapy'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are psychotherapy, cognitive restructuring, and exposure therapy. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'treatment-therapy-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Medication and psychotherapy are often complementary rather than mutually exclusive.
      - Short-term symptom change does not always predict long-term relapse risk.
      - A strong alliance improves outcomes across many therapy modalities.
      - Evidence-based practice includes client preferences and context, not only trial averages.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about interpreting symptom scale changes across sessions, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'treatment-therapy-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating interpreting symptom scale changes across sessions finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'exposure therapy',
              'cognitive restructuring',
              'psychotherapy',
              'behavior activation'
            ],
            correctAnswer: 3,
            explanation: 'behavior activation is best because it reflects this mechanism (increasing engagement in rewarding and goal-directed activities). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'client-centered therapy',
              'therapeutic alliance',
              'exposure therapy',
              'cognitive restructuring'
            ],
            correctAnswer: 1,
            explanation: 'therapeutic alliance is the strongest interpretation because it maps to the measured pattern and proposed mechanism: collaborative bond and agreement on goals and tasks. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
