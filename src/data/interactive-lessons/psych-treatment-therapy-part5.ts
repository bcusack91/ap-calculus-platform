export const psychTreatmentPart5Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Treatment and Therapy

      **Part 5 of 7 — Effectiveness, Alliance, and Culture**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **relapse prevention**: strategies that reduce risk of symptom return
      - **evidence-based practice**: integration of best research, clinical expertise, and client values
      - **psychotherapy**: structured psychological treatment delivered by a trained professional

      ### Concrete Real-World Example
      A team is studying culture-sensitive adaptations to treatment plans. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'treatment-therapy-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about culture-sensitive adaptations to treatment plans, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'evidence-based practice',
              'relapse prevention',
              'cognitive restructuring',
              'psychotherapy'
            ],
            correctAnswer: 1,
            explanation: 'relapse prevention is correct because it directly matches this mechanism: strategies that reduce risk of symptom return. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'behavior activation',
              'exposure therapy',
              'psychotherapy',
              'evidence-based practice'
            ],
            correctAnswer: 1,
            explanation: 'exposure therapy is the strongest match here (gradual and systematic confrontation of feared stimuli). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing culture-sensitive adaptations to treatment plans, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | relapse prevention | strategies that reduce risk of symptom return | experimental manipulation with random assignment | possible demand characteristics |
      | evidence-based practice | integration of best research, clinical expertise, and client values | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | psychotherapy | structured psychological treatment delivered by a trained professional | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | cognitive restructuring | identifying and modifying maladaptive thought patterns | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'treatment-therapy-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: strategies that reduce risk of symptom return

      2) Write the concept that matches: integration of best research, clinical expertise, and client values

      3) Write the concept that matches: structured psychological treatment delivered by a trained professional

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['relapse prevention', 'evidence-based practice', 'psychotherapy'],
        hint1: 'Starts with: R',
        hint2: 'Starts with: E',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: relapse prevention, evidence-based practice, and psychotherapy. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'treatment-therapy-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: strategies that reduce risk of symptom return',
            options: ['exposure therapy', 'behavior activation', 'evidence-based practice', 'relapse prevention']
          },
          {
            label: 'Select the concept that best matches: integration of best research, clinical expertise, and client values',
            options: ['evidence-based practice', 'cognitive restructuring', 'psychotherapy', 'relapse prevention']
          },
          {
            label: 'Select the concept that best matches: structured psychological treatment delivered by a trained professional',
            options: ['behavior activation', 'relapse prevention', 'psychotherapy', 'cognitive restructuring']
          }
        ],
        correctAnswers: ['relapse prevention', 'evidence-based practice', 'psychotherapy'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are relapse prevention, evidence-based practice, and psychotherapy. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'treatment-therapy-p5-s6-strategy',
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
      - In scenario questions about culture-sensitive adaptations to treatment plans, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'treatment-therapy-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating culture-sensitive adaptations to treatment plans finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'cognitive restructuring',
              'psychotherapy',
              'evidence-based practice',
              'relapse prevention'
            ],
            correctAnswer: 0,
            explanation: 'cognitive restructuring is best because it reflects this mechanism (identifying and modifying maladaptive thought patterns). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'behavior activation',
              'exposure therapy',
              'evidence-based practice',
              'psychotherapy'
            ],
            correctAnswer: 1,
            explanation: 'exposure therapy is the strongest interpretation because it maps to the measured pattern and proposed mechanism: gradual and systematic confrontation of feared stimuli. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
