export const psychTreatmentPart2Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Treatment and Therapy

      **Part 2 of 7 — Behavioral and Cognitive-Behavioral Approaches**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **exposure therapy**: gradual and systematic confrontation of feared stimuli
      - **behavior activation**: increasing engagement in rewarding and goal-directed activities
      - **therapeutic alliance**: collaborative bond and agreement on goals and tasks

      ### Concrete Real-World Example
      A team is studying panic treatment using exposure hierarchies. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'treatment-therapy-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about panic treatment using exposure hierarchies, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'behavior activation',
              'therapeutic alliance',
              'exposure therapy',
              'client-centered therapy'
            ],
            correctAnswer: 2,
            explanation: 'exposure therapy is correct because it directly matches this mechanism: gradual and systematic confrontation of feared stimuli. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'SSRI',
              'psychopharmacology',
              'behavior activation',
              'therapeutic alliance'
            ],
            correctAnswer: 1,
            explanation: 'psychopharmacology is the strongest match here (use of medication to treat psychological symptoms). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing panic treatment using exposure hierarchies, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | exposure therapy | gradual and systematic confrontation of feared stimuli | experimental manipulation with random assignment | possible demand characteristics |
      | behavior activation | increasing engagement in rewarding and goal-directed activities | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | therapeutic alliance | collaborative bond and agreement on goals and tasks | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | client-centered therapy | humanistic approach emphasizing empathy and unconditional positive regard | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'treatment-therapy-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: gradual and systematic confrontation of feared stimuli

      2) Write the concept that matches: increasing engagement in rewarding and goal-directed activities

      3) Write the concept that matches: collaborative bond and agreement on goals and tasks

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['exposure therapy', 'behavior activation', 'therapeutic alliance'],
        hint1: 'Starts with: E',
        hint2: 'Starts with: B',
        hint3: 'Starts with: T',
        explanation: 'Expected answers: exposure therapy, behavior activation, and therapeutic alliance. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'treatment-therapy-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: gradual and systematic confrontation of feared stimuli',
            options: ['client-centered therapy', 'behavior activation', 'therapeutic alliance', 'exposure therapy']
          },
          {
            label: 'Select the concept that best matches: increasing engagement in rewarding and goal-directed activities',
            options: ['behavior activation', 'SSRI', 'client-centered therapy', 'exposure therapy']
          },
          {
            label: 'Select the concept that best matches: collaborative bond and agreement on goals and tasks',
            options: ['therapeutic alliance', 'psychopharmacology', 'client-centered therapy', 'exposure therapy']
          }
        ],
        correctAnswers: ['exposure therapy', 'behavior activation', 'therapeutic alliance'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are exposure therapy, behavior activation, and therapeutic alliance. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'treatment-therapy-p2-s6-strategy',
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
      - In scenario questions about panic treatment using exposure hierarchies, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'treatment-therapy-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating panic treatment using exposure hierarchies finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'client-centered therapy',
              'therapeutic alliance',
              'behavior activation',
              'exposure therapy'
            ],
            correctAnswer: 0,
            explanation: 'client-centered therapy is best because it reflects this mechanism (humanistic approach emphasizing empathy and unconditional positive regard). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'psychopharmacology',
              'SSRI',
              'therapeutic alliance',
              'behavior activation'
            ],
            correctAnswer: 0,
            explanation: 'psychopharmacology is the strongest interpretation because it maps to the measured pattern and proposed mechanism: use of medication to treat psychological symptoms. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
