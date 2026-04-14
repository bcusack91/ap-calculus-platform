export const psychRetrievalPart1Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p1-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Retrieval and Forgetting

      **Part 1 of 7 — Retrieval Cues and Context**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **retrieval cue**: stimulus that helps access stored information
      - **encoding specificity**: retrieval is best when cues match encoding conditions
      - **state-dependent memory**: recall improves when internal state matches learning state

      ### Concrete Real-World Example
      A team is studying students forgetting formulas between units. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'retrieval-forgetting-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about students forgetting formulas between units, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'state-dependent memory',
              'retrieval cue',
              'proactive interference',
              'encoding specificity'
            ],
            correctAnswer: 1,
            explanation: 'retrieval cue is correct because it directly matches this mechanism: stimulus that helps access stored information. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'tip-of-the-tongue',
              'retroactive interference',
              'state-dependent memory',
              'encoding specificity'
            ],
            correctAnswer: 1,
            explanation: 'retroactive interference is the strongest match here (new learning disrupts old memories). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p1-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing students forgetting formulas between units, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | retrieval cue | stimulus that helps access stored information | experimental manipulation with random assignment | possible demand characteristics |
      | encoding specificity | retrieval is best when cues match encoding conditions | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | state-dependent memory | recall improves when internal state matches learning state | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | proactive interference | old learning disrupts new learning | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'retrieval-forgetting-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: stimulus that helps access stored information

      2) Write the concept that matches: retrieval is best when cues match encoding conditions

      3) Write the concept that matches: recall improves when internal state matches learning state

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['retrieval cue', 'encoding specificity', 'state-dependent memory'],
        hint1: 'Starts with: R',
        hint2: 'Starts with: E',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: retrieval cue, encoding specificity, and state-dependent memory. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'retrieval-forgetting-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: stimulus that helps access stored information',
            options: ['proactive interference', 'encoding specificity', 'retrieval cue', 'retroactive interference']
          },
          {
            label: 'Select the concept that best matches: retrieval is best when cues match encoding conditions',
            options: ['proactive interference', 'encoding specificity', 'state-dependent memory', 'retrieval cue']
          },
          {
            label: 'Select the concept that best matches: recall improves when internal state matches learning state',
            options: ['state-dependent memory', 'encoding specificity', 'retroactive interference', 'proactive interference']
          }
        ],
        correctAnswers: ['retrieval cue', 'encoding specificity', 'state-dependent memory'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are retrieval cue, encoding specificity, and state-dependent memory. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'retrieval-forgetting-p1-s6-strategy',
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
      - In scenario questions about students forgetting formulas between units, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'retrieval-forgetting-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating students forgetting formulas between units finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'encoding specificity',
              'proactive interference',
              'retrieval cue',
              'state-dependent memory'
            ],
            correctAnswer: 1,
            explanation: 'proactive interference is best because it reflects this mechanism (old learning disrupts new learning). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'tip-of-the-tongue',
              'encoding specificity',
              'state-dependent memory',
              'retroactive interference'
            ],
            correctAnswer: 3,
            explanation: 'retroactive interference is the strongest interpretation because it maps to the measured pattern and proposed mechanism: new learning disrupts old memories. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
