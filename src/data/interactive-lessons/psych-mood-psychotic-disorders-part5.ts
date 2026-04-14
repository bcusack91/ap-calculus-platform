export const psychMoodPsychPart5Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Mood and Psychotic Disorders

      **Part 5 of 7 — Biopsychosocial Risk Models**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **comorbidity**: co-occurrence of two or more disorders
      - **prodromal phase**: early period of subtle symptoms before full disorder onset
      - **major depressive disorder**: persistent low mood or loss of interest with functional impairment

      ### Concrete Real-World Example
      A team is studying family history and stress-load risk assessment. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'mood-psychotic-disorders-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about family history and stress-load risk assessment, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'prodromal phase',
              'comorbidity',
              'persistent depressive disorder',
              'major depressive disorder'
            ],
            correctAnswer: 1,
            explanation: 'comorbidity is correct because it directly matches this mechanism: co-occurrence of two or more disorders. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'mania',
              'bipolar disorder',
              'prodromal phase',
              'major depressive disorder'
            ],
            correctAnswer: 0,
            explanation: 'mania is the strongest match here (elevated or irritable mood with increased energy and reduced need for sleep). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing family history and stress-load risk assessment, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | comorbidity | co-occurrence of two or more disorders | experimental manipulation with random assignment | possible demand characteristics |
      | prodromal phase | early period of subtle symptoms before full disorder onset | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | major depressive disorder | persistent low mood or loss of interest with functional impairment | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | persistent depressive disorder | chronic depressed mood lasting at least two years | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'mood-psychotic-disorders-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: co-occurrence of two or more disorders

      2) Write the concept that matches: early period of subtle symptoms before full disorder onset

      3) Write the concept that matches: persistent low mood or loss of interest with functional impairment

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['comorbidity', 'prodromal phase', 'major depressive disorder'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: P',
        hint3: 'Starts with: M',
        explanation: 'Expected answers: comorbidity, prodromal phase, and major depressive disorder. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: co-occurrence of two or more disorders',
            options: ['comorbidity', 'mania', 'prodromal phase', 'persistent depressive disorder']
          },
          {
            label: 'Select the concept that best matches: early period of subtle symptoms before full disorder onset',
            options: ['prodromal phase', 'mania', 'persistent depressive disorder', 'major depressive disorder']
          },
          {
            label: 'Select the concept that best matches: persistent low mood or loss of interest with functional impairment',
            options: ['major depressive disorder', 'prodromal phase', 'mania', 'persistent depressive disorder']
          }
        ],
        correctAnswers: ['comorbidity', 'prodromal phase', 'major depressive disorder'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are comorbidity, prodromal phase, and major depressive disorder. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p5-s6-strategy',
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
      - In scenario questions about family history and stress-load risk assessment, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'mood-psychotic-disorders-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating family history and stress-load risk assessment finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'comorbidity',
              'major depressive disorder',
              'prodromal phase',
              'persistent depressive disorder'
            ],
            correctAnswer: 3,
            explanation: 'persistent depressive disorder is best because it reflects this mechanism (chronic depressed mood lasting at least two years). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'major depressive disorder',
              'mania',
              'prodromal phase',
              'bipolar disorder'
            ],
            correctAnswer: 1,
            explanation: 'mania is the strongest interpretation because it maps to the measured pattern and proposed mechanism: elevated or irritable mood with increased energy and reduced need for sleep. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
