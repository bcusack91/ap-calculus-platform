export const psychRetrievalPart3Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Retrieval and Forgetting

      **Part 3 of 7 — Reconstruction and Memory Distortion**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **retroactive interference**: new learning disrupts old memories
      - **tip-of-the-tongue**: temporary inability to retrieve known information
      - **reconstructive memory**: remembering by rebuilding details from fragments and schemas

      ### Concrete Real-World Example
      A team is studying witness interviews after a traffic accident. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'retrieval-forgetting-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about witness interviews after a traffic accident, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'misinformation effect',
              'tip-of-the-tongue',
              'retroactive interference',
              'reconstructive memory'
            ],
            correctAnswer: 2,
            explanation: 'retroactive interference is correct because it directly matches this mechanism: new learning disrupts old memories. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'reconstructive memory',
              'desirable difficulties',
              'retrieval practice',
              'tip-of-the-tongue'
            ],
            correctAnswer: 2,
            explanation: 'retrieval practice is the strongest match here (active recall used to strengthen later remembering). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing witness interviews after a traffic accident, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | retroactive interference | new learning disrupts old memories | experimental manipulation with random assignment | possible demand characteristics |
      | tip-of-the-tongue | temporary inability to retrieve known information | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | reconstructive memory | remembering by rebuilding details from fragments and schemas | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | misinformation effect | post-event information alters memory reports | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'retrieval-forgetting-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: new learning disrupts old memories
      2) Write the concept that matches: temporary inability to retrieve known information
      3) Write the concept that matches: remembering by rebuilding details from fragments and schemas

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['retroactive interference', 'tip-of-the-tongue', 'reconstructive memory'],
        hint1: 'Starts with: R',
        hint2: 'Starts with: T',
        hint3: 'Starts with: R',
        explanation: 'Expected answers: retroactive interference, tip-of-the-tongue, and reconstructive memory. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'retrieval-forgetting-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: new learning disrupts old memories',
            options: ['retroactive interference', 'reconstructive memory', 'misinformation effect', 'retrieval practice']
          },
          {
            label: 'Select the concept that best matches: temporary inability to retrieve known information',
            options: ['tip-of-the-tongue', 'desirable difficulties', 'retrieval practice', 'misinformation effect']
          },
          {
            label: 'Select the concept that best matches: remembering by rebuilding details from fragments and schemas',
            options: ['tip-of-the-tongue', 'reconstructive memory', 'misinformation effect', 'retroactive interference']
          }
        ],
        correctAnswers: ['retroactive interference', 'tip-of-the-tongue', 'reconstructive memory'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are retroactive interference, tip-of-the-tongue, and reconstructive memory. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'retrieval-forgetting-p3-s6-strategy',
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
      - In scenario questions about witness interviews after a traffic accident, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'retrieval-forgetting-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating witness interviews after a traffic accident finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'reconstructive memory',
              'misinformation effect',
              'tip-of-the-tongue',
              'retroactive interference'
            ],
            correctAnswer: 1,
            explanation: 'misinformation effect is best because it reflects this mechanism (post-event information alters memory reports). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'retrieval practice',
              'desirable difficulties',
              'reconstructive memory',
              'tip-of-the-tongue'
            ],
            correctAnswer: 0,
            explanation: 'retrieval practice is the strongest interpretation because it maps to the measured pattern and proposed mechanism: active recall used to strengthen later remembering. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
