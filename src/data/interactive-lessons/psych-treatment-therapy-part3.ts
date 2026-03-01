export const psychTreatmentPart3Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Treatment and Therapy

      **Part 3 of 7 — Humanistic and Psychodynamic Therapies**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **therapeutic alliance**: collaborative bond and agreement on goals and tasks
      - **client-centered therapy**: humanistic approach emphasizing empathy and unconditional positive regard
      - **psychopharmacology**: use of medication to treat psychological symptoms

      ### Concrete Real-World Example
      A team is studying depression treatment with behavior activation scheduling. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'treatment-therapy-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about depression treatment with behavior activation scheduling, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'SSRI',
              'psychopharmacology',
              'therapeutic alliance',
              'client-centered therapy'
            ],
            correctAnswer: 2,
            explanation: 'therapeutic alliance is correct because it directly matches this mechanism: collaborative bond and agreement on goals and tasks. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'relapse prevention',
              'client-centered therapy',
              'evidence-based practice',
              'psychopharmacology'
            ],
            correctAnswer: 0,
            explanation: 'relapse prevention is the strongest match here (strategies that reduce risk of symptom return). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing depression treatment with behavior activation scheduling, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | therapeutic alliance | collaborative bond and agreement on goals and tasks | experimental manipulation with random assignment | possible demand characteristics |
      | client-centered therapy | humanistic approach emphasizing empathy and unconditional positive regard | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | psychopharmacology | use of medication to treat psychological symptoms | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | SSRI | selective serotonin reuptake inhibitor commonly used for mood and anxiety disorders | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'treatment-therapy-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: collaborative bond and agreement on goals and tasks
      2) Write the concept that matches: humanistic approach emphasizing empathy and unconditional positive regard
      3) Write the concept that matches: use of medication to treat psychological symptoms

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['therapeutic alliance', 'client-centered therapy', 'psychopharmacology'],
        hint1: 'Starts with: T',
        hint2: 'Starts with: C',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: therapeutic alliance, client-centered therapy, and psychopharmacology. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'treatment-therapy-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: collaborative bond and agreement on goals and tasks',
            options: ['SSRI', 'evidence-based practice', 'therapeutic alliance', 'psychopharmacology']
          },
          {
            label: 'Select the concept that best matches: humanistic approach emphasizing empathy and unconditional positive regard',
            options: ['SSRI', 'psychopharmacology', 'client-centered therapy', 'relapse prevention']
          },
          {
            label: 'Select the concept that best matches: use of medication to treat psychological symptoms',
            options: ['therapeutic alliance', 'evidence-based practice', 'psychopharmacology', 'client-centered therapy']
          }
        ],
        correctAnswers: ['therapeutic alliance', 'client-centered therapy', 'psychopharmacology'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are therapeutic alliance, client-centered therapy, and psychopharmacology. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'treatment-therapy-p3-s6-strategy',
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
      - In scenario questions about depression treatment with behavior activation scheduling, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'treatment-therapy-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating depression treatment with behavior activation scheduling finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'client-centered therapy',
              'SSRI',
              'therapeutic alliance',
              'psychopharmacology'
            ],
            correctAnswer: 1,
            explanation: 'SSRI is best because it reflects this mechanism (selective serotonin reuptake inhibitor commonly used for mood and anxiety disorders). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'evidence-based practice',
              'relapse prevention',
              'psychopharmacology',
              'client-centered therapy'
            ],
            correctAnswer: 1,
            explanation: 'relapse prevention is the strongest interpretation because it maps to the measured pattern and proposed mechanism: strategies that reduce risk of symptom return. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
