export const psychMoodPsychPart1Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p1-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Mood and Psychotic Disorders

      **Part 1 of 7 — Diagnostic Features**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **major depressive disorder**: persistent low mood or loss of interest with functional impairment
      - **persistent depressive disorder**: chronic depressed mood lasting at least two years
      - **mania**: elevated or irritable mood with increased energy and reduced need for sleep

      ### Concrete Real-World Example
      A team is studying triaging students at a university counseling center. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'mood-psychotic-disorders-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about triaging students at a university counseling center, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'major depressive disorder',
              'mania',
              'persistent depressive disorder',
              'bipolar disorder'
            ],
            correctAnswer: 0,
            explanation: 'major depressive disorder is correct because it directly matches this mechanism: persistent low mood or loss of interest with functional impairment. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'persistent depressive disorder',
              'hallucination',
              'mania',
              'delusion'
            ],
            correctAnswer: 3,
            explanation: 'delusion is the strongest match here (a fixed false belief resistant to contradictory evidence). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p1-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing triaging students at a university counseling center, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | major depressive disorder | persistent low mood or loss of interest with functional impairment | experimental manipulation with random assignment | possible demand characteristics |
      | persistent depressive disorder | chronic depressed mood lasting at least two years | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | mania | elevated or irritable mood with increased energy and reduced need for sleep | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | bipolar disorder | disorder involving episodes of depression and mania or hypomania | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'mood-psychotic-disorders-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: persistent low mood or loss of interest with functional impairment

      2) Write the concept that matches: chronic depressed mood lasting at least two years

      3) Write the concept that matches: elevated or irritable mood with increased energy and reduced need for sleep

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['major depressive disorder', 'persistent depressive disorder', 'mania'],
        hint1: 'Starts with: M',
        hint2: 'Starts with: P',
        hint3: 'Starts with: M',
        explanation: 'Expected answers: major depressive disorder, persistent depressive disorder, and mania. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: persistent low mood or loss of interest with functional impairment',
            options: ['delusion', 'persistent depressive disorder', 'major depressive disorder', 'bipolar disorder']
          },
          {
            label: 'Select the concept that best matches: chronic depressed mood lasting at least two years',
            options: ['delusion', 'persistent depressive disorder', 'bipolar disorder', 'hallucination']
          },
          {
            label: 'Select the concept that best matches: elevated or irritable mood with increased energy and reduced need for sleep',
            options: ['mania', 'delusion', 'bipolar disorder', 'hallucination']
          }
        ],
        correctAnswers: ['major depressive disorder', 'persistent depressive disorder', 'mania'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are major depressive disorder, persistent depressive disorder, and mania. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p1-s6-strategy',
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
      - In scenario questions about triaging students at a university counseling center, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'mood-psychotic-disorders-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating triaging students at a university counseling center finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'mania',
              'bipolar disorder',
              'major depressive disorder',
              'persistent depressive disorder'
            ],
            correctAnswer: 1,
            explanation: 'bipolar disorder is best because it reflects this mechanism (disorder involving episodes of depression and mania or hypomania). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'delusion',
              'persistent depressive disorder',
              'hallucination',
              'mania'
            ],
            correctAnswer: 0,
            explanation: 'delusion is the strongest interpretation because it maps to the measured pattern and proposed mechanism: a fixed false belief resistant to contradictory evidence. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
