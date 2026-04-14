export const psychRetrievalPart5Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Retrieval and Forgetting

      **Part 5 of 7 — Improving Retention and Recall**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **retrieval practice**: active recall used to strengthen later remembering
      - **desirable difficulties**: challenging learning conditions that improve long-term retention
      - **retrieval cue**: stimulus that helps access stored information

      ### Concrete Real-World Example
      A team is studying classroom interventions using low-stakes quizzes. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'retrieval-forgetting-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about classroom interventions using low-stakes quizzes, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'retrieval practice',
              'desirable difficulties',
              'retrieval cue',
              'encoding specificity'
            ],
            correctAnswer: 0,
            explanation: 'retrieval practice is correct because it directly matches this mechanism: active recall used to strengthen later remembering. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'retrieval cue',
              'desirable difficulties',
              'proactive interference',
              'state-dependent memory'
            ],
            correctAnswer: 3,
            explanation: 'state-dependent memory is the strongest match here (recall improves when internal state matches learning state). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing classroom interventions using low-stakes quizzes, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | retrieval practice | active recall used to strengthen later remembering | experimental manipulation with random assignment | possible demand characteristics |
      | desirable difficulties | challenging learning conditions that improve long-term retention | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | retrieval cue | stimulus that helps access stored information | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | encoding specificity | retrieval is best when cues match encoding conditions | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'retrieval-forgetting-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: active recall used to strengthen later remembering

      2) Write the concept that matches: challenging learning conditions that improve long-term retention

      3) Write the concept that matches: stimulus that helps access stored information

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['retrieval practice', 'desirable difficulties', 'retrieval cue'],
        hint1: 'Starts with: R',
        hint2: 'Starts with: D',
        hint3: 'Starts with: R',
        explanation: 'Expected answers: retrieval practice, desirable difficulties, and retrieval cue. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'retrieval-forgetting-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: active recall used to strengthen later remembering',
            options: ['proactive interference', 'retrieval cue', 'retrieval practice', 'encoding specificity']
          },
          {
            label: 'Select the concept that best matches: challenging learning conditions that improve long-term retention',
            options: ['retrieval cue', 'proactive interference', 'desirable difficulties', 'state-dependent memory']
          },
          {
            label: 'Select the concept that best matches: stimulus that helps access stored information',
            options: ['retrieval cue', 'encoding specificity', 'proactive interference', 'retrieval practice']
          }
        ],
        correctAnswers: ['retrieval practice', 'desirable difficulties', 'retrieval cue'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are retrieval practice, desirable difficulties, and retrieval cue. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'retrieval-forgetting-p5-s6-strategy',
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
      - In scenario questions about classroom interventions using low-stakes quizzes, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'retrieval-forgetting-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating classroom interventions using low-stakes quizzes finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'desirable difficulties',
              'retrieval cue',
              'encoding specificity',
              'retrieval practice'
            ],
            correctAnswer: 2,
            explanation: 'encoding specificity is best because it reflects this mechanism (retrieval is best when cues match encoding conditions). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'desirable difficulties',
              'state-dependent memory',
              'retrieval cue',
              'proactive interference'
            ],
            correctAnswer: 1,
            explanation: 'state-dependent memory is the strongest interpretation because it maps to the measured pattern and proposed mechanism: recall improves when internal state matches learning state. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
