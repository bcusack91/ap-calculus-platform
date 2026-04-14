export const psychGeneticsPart3Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Genetics and Behavior

      **Part 3 of 7 — Heritability and Population Statistics**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **gene-environment interaction**: when environmental effects differ by genotype
      - **epigenetics**: changes in gene expression without altering DNA sequence
      - **concordance**: the degree to which related individuals share a trait

      ### Concrete Real-World Example
      A team is studying population-level variation in reading achievement. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'genetics-behavior-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about population-level variation in reading achievement, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'gene-environment interaction',
              'epigenetics',
              'concordance',
              'reaction range'
            ],
            correctAnswer: 0,
            explanation: 'gene-environment interaction is correct because it directly matches this mechanism: when environmental effects differ by genotype. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'nonshared environment',
              'epigenetics',
              'concordance',
              'adoption study'
            ],
            correctAnswer: 3,
            explanation: 'adoption study is the strongest match here (design comparing adoptees to biological and adoptive relatives). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing population-level variation in reading achievement, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | gene-environment interaction | when environmental effects differ by genotype | experimental manipulation with random assignment | possible demand characteristics |
      | epigenetics | changes in gene expression without altering DNA sequence | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | concordance | the degree to which related individuals share a trait | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | reaction range | genetically influenced limits within which environment shapes outcomes | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'genetics-behavior-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: when environmental effects differ by genotype

      2) Write the concept that matches: changes in gene expression without altering DNA sequence

      3) Write the concept that matches: the degree to which related individuals share a trait

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['gene-environment interaction', 'epigenetics', 'concordance'],
        hint1: 'Starts with: G',
        hint2: 'Starts with: E',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: gene-environment interaction, epigenetics, and concordance. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'genetics-behavior-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: when environmental effects differ by genotype',
            options: ['adoption study', 'gene-environment interaction', 'reaction range', 'concordance']
          },
          {
            label: 'Select the concept that best matches: changes in gene expression without altering DNA sequence',
            options: ['concordance', 'reaction range', 'gene-environment interaction', 'epigenetics']
          },
          {
            label: 'Select the concept that best matches: the degree to which related individuals share a trait',
            options: ['nonshared environment', 'concordance', 'gene-environment interaction', 'reaction range']
          }
        ],
        correctAnswers: ['gene-environment interaction', 'epigenetics', 'concordance'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are gene-environment interaction, epigenetics, and concordance. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'genetics-behavior-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - High heritability does not mean a trait is fixed or unchangeable.
      - Heritability applies to populations, not to an individual person.
      - Genes set probabilities, not precise destinies, for complex behavior.
      - Shared family context does not explain all sibling similarity.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about population-level variation in reading achievement, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'genetics-behavior-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating population-level variation in reading achievement finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'epigenetics',
              'reaction range',
              'gene-environment interaction',
              'concordance'
            ],
            correctAnswer: 1,
            explanation: 'reaction range is best because it reflects this mechanism (genetically influenced limits within which environment shapes outcomes). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'adoption study',
              'epigenetics',
              'nonshared environment',
              'concordance'
            ],
            correctAnswer: 0,
            explanation: 'adoption study is the strongest interpretation because it maps to the measured pattern and proposed mechanism: design comparing adoptees to biological and adoptive relatives. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
