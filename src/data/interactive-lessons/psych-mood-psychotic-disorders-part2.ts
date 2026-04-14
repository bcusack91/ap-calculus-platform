export const psychMoodPsychPart2Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Mood and Psychotic Disorders

      **Part 2 of 7 — Depressive Disorders**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **mania**: elevated or irritable mood with increased energy and reduced need for sleep
      - **bipolar disorder**: disorder involving episodes of depression and mania or hypomania
      - **delusion**: a fixed false belief resistant to contradictory evidence

      ### Concrete Real-World Example
      A team is studying distinguishing grief from depressive episodes. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'mood-psychotic-disorders-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about distinguishing grief from depressive episodes, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'mania',
              'delusion',
              'hallucination',
              'bipolar disorder'
            ],
            correctAnswer: 0,
            explanation: 'mania is correct because it directly matches this mechanism: elevated or irritable mood with increased energy and reduced need for sleep. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'delusion',
              'diathesis-stress model',
              'negative symptoms',
              'bipolar disorder'
            ],
            correctAnswer: 2,
            explanation: 'negative symptoms is the strongest match here (reductions in normal emotional or motivational functioning). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing distinguishing grief from depressive episodes, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | mania | elevated or irritable mood with increased energy and reduced need for sleep | experimental manipulation with random assignment | possible demand characteristics |
      | bipolar disorder | disorder involving episodes of depression and mania or hypomania | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | delusion | a fixed false belief resistant to contradictory evidence | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | hallucination | perception-like experience without an external stimulus | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'mood-psychotic-disorders-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: elevated or irritable mood with increased energy and reduced need for sleep

      2) Write the concept that matches: disorder involving episodes of depression and mania or hypomania

      3) Write the concept that matches: a fixed false belief resistant to contradictory evidence

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['mania', 'bipolar disorder', 'delusion'],
        hint1: 'Starts with: M',
        hint2: 'Starts with: B',
        hint3: 'Starts with: D',
        explanation: 'Expected answers: mania, bipolar disorder, and delusion. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: elevated or irritable mood with increased energy and reduced need for sleep',
            options: ['delusion', 'mania', 'bipolar disorder', 'hallucination']
          },
          {
            label: 'Select the concept that best matches: disorder involving episodes of depression and mania or hypomania',
            options: ['delusion', 'bipolar disorder', 'mania', 'negative symptoms']
          },
          {
            label: 'Select the concept that best matches: a fixed false belief resistant to contradictory evidence',
            options: ['diathesis-stress model', 'mania', 'delusion', 'hallucination']
          }
        ],
        correctAnswers: ['mania', 'bipolar disorder', 'delusion'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are mania, bipolar disorder, and delusion. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Mood changes alone are insufficient for diagnosis without duration and impairment criteria.
      - Psychotic symptoms can occur in several disorders and must be interpreted in context.
      - Bipolar disorder is not simply rapid mood swings; episodes have specific patterns.
      - Treatment planning should address comorbidity and functioning, not only symptom labels.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about distinguishing grief from depressive episodes, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'mood-psychotic-disorders-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating distinguishing grief from depressive episodes finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'mania',
              'bipolar disorder',
              'delusion',
              'hallucination'
            ],
            correctAnswer: 3,
            explanation: 'hallucination is best because it reflects this mechanism (perception-like experience without an external stimulus). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'diathesis-stress model',
              'negative symptoms',
              'delusion',
              'bipolar disorder'
            ],
            correctAnswer: 1,
            explanation: 'negative symptoms is the strongest interpretation because it maps to the measured pattern and proposed mechanism: reductions in normal emotional or motivational functioning. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
