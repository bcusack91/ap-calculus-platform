export const psychRetrievalPart4Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Retrieval and Forgetting

      **Part 4 of 7 — Eyewitness and Applied Memory**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **reconstructive memory**: remembering by rebuilding details from fragments and schemas
      - **misinformation effect**: post-event information alters memory reports
      - **retrieval practice**: active recall used to strengthen later remembering

      ### Concrete Real-World Example
      A team is studying study condition matching for exam preparation. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'retrieval-forgetting-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about study condition matching for exam preparation, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'retrieval practice',
              'misinformation effect',
              'reconstructive memory',
              'desirable difficulties'
            ],
            correctAnswer: 2,
            explanation: 'reconstructive memory is correct because it directly matches this mechanism: remembering by rebuilding details from fragments and schemas. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'retrieval cue',
              'encoding specificity',
              'retrieval practice',
              'misinformation effect'
            ],
            correctAnswer: 0,
            explanation: 'retrieval cue is the strongest match here (stimulus that helps access stored information). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing study condition matching for exam preparation, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | reconstructive memory | remembering by rebuilding details from fragments and schemas | experimental manipulation with random assignment | possible demand characteristics |
      | misinformation effect | post-event information alters memory reports | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | retrieval practice | active recall used to strengthen later remembering | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | desirable difficulties | challenging learning conditions that improve long-term retention | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'retrieval-forgetting-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: remembering by rebuilding details from fragments and schemas
      2) Write the concept that matches: post-event information alters memory reports
      3) Write the concept that matches: active recall used to strengthen later remembering

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['reconstructive memory', 'misinformation effect', 'retrieval practice'],
        hint1: 'Starts with: R',
        hint2: 'Starts with: M',
        hint3: 'Starts with: R',
        explanation: 'Expected answers: reconstructive memory, misinformation effect, and retrieval practice. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'retrieval-forgetting-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: remembering by rebuilding details from fragments and schemas',
            options: ['encoding specificity', 'reconstructive memory', 'desirable difficulties', 'retrieval cue']
          },
          {
            label: 'Select the concept that best matches: post-event information alters memory reports',
            options: ['retrieval cue', 'misinformation effect', 'retrieval practice', 'encoding specificity']
          },
          {
            label: 'Select the concept that best matches: active recall used to strengthen later remembering',
            options: ['retrieval cue', 'retrieval practice', 'misinformation effect', 'encoding specificity']
          }
        ],
        correctAnswers: ['reconstructive memory', 'misinformation effect', 'retrieval practice'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are reconstructive memory, misinformation effect, and retrieval practice. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'retrieval-forgetting-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Forgetting is not always decay; retrieval competition and cue mismatch are common causes.
      - Confidence in a memory report does not guarantee accuracy.
      - Repeated testing can outperform repeated rereading for long-term recall.
      - Distortion can emerge from normal reconstruction, not intentional lying.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about study condition matching for exam preparation, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'retrieval-forgetting-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating study condition matching for exam preparation finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'reconstructive memory',
              'retrieval practice',
              'desirable difficulties',
              'misinformation effect'
            ],
            correctAnswer: 2,
            explanation: 'desirable difficulties is best because it reflects this mechanism (challenging learning conditions that improve long-term retention). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'retrieval practice',
              'retrieval cue',
              'encoding specificity',
              'misinformation effect'
            ],
            correctAnswer: 1,
            explanation: 'retrieval cue is the strongest interpretation because it maps to the measured pattern and proposed mechanism: stimulus that helps access stored information. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
