export const psychRetrievalPart2Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Retrieval and Forgetting

      **Part 2 of 7 — Forgetting Curves and Interference**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **state-dependent memory**: recall improves when internal state matches learning state
      - **proactive interference**: old learning disrupts new learning
      - **retroactive interference**: new learning disrupts old memories

      ### Concrete Real-World Example
      A team is studying language learning with overlapping vocabulary. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'retrieval-forgetting-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about language learning with overlapping vocabulary, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'tip-of-the-tongue',
              'proactive interference',
              'retroactive interference',
              'state-dependent memory'
            ],
            correctAnswer: 3,
            explanation: 'state-dependent memory is correct because it directly matches this mechanism: recall improves when internal state matches learning state. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'reconstructive memory',
              'misinformation effect',
              'proactive interference',
              'retroactive interference'
            ],
            correctAnswer: 0,
            explanation: 'reconstructive memory is the strongest match here (remembering by rebuilding details from fragments and schemas). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing language learning with overlapping vocabulary, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | state-dependent memory | recall improves when internal state matches learning state | experimental manipulation with random assignment | possible demand characteristics |
      | proactive interference | old learning disrupts new learning | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | retroactive interference | new learning disrupts old memories | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | tip-of-the-tongue | temporary inability to retrieve known information | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'retrieval-forgetting-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: recall improves when internal state matches learning state
      2) Write the concept that matches: old learning disrupts new learning
      3) Write the concept that matches: new learning disrupts old memories

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['state-dependent memory', 'proactive interference', 'retroactive interference'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: P',
        hint3: 'Starts with: R',
        explanation: 'Expected answers: state-dependent memory, proactive interference, and retroactive interference. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'retrieval-forgetting-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: recall improves when internal state matches learning state',
            options: ['reconstructive memory', 'misinformation effect', 'state-dependent memory', 'proactive interference']
          },
          {
            label: 'Select the concept that best matches: old learning disrupts new learning',
            options: ['reconstructive memory', 'proactive interference', 'state-dependent memory', 'tip-of-the-tongue']
          },
          {
            label: 'Select the concept that best matches: new learning disrupts old memories',
            options: ['reconstructive memory', 'retroactive interference', 'tip-of-the-tongue', 'state-dependent memory']
          }
        ],
        correctAnswers: ['state-dependent memory', 'proactive interference', 'retroactive interference'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are state-dependent memory, proactive interference, and retroactive interference. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'retrieval-forgetting-p2-s6-strategy',
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
      - In scenario questions about language learning with overlapping vocabulary, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'retrieval-forgetting-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating language learning with overlapping vocabulary finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'tip-of-the-tongue',
              'retroactive interference',
              'state-dependent memory',
              'proactive interference'
            ],
            correctAnswer: 0,
            explanation: 'tip-of-the-tongue is best because it reflects this mechanism (temporary inability to retrieve known information). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'reconstructive memory',
              'proactive interference',
              'retroactive interference',
              'misinformation effect'
            ],
            correctAnswer: 0,
            explanation: 'reconstructive memory is the strongest interpretation because it maps to the measured pattern and proposed mechanism: remembering by rebuilding details from fragments and schemas. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
