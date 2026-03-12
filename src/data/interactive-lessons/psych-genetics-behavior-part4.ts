export const psychGeneticsPart4Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Genetics and Behavior

      **Part 4 of 7 — Gene-Environment Interaction**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **concordance**: the degree to which related individuals share a trait
      - **reaction range**: genetically influenced limits within which environment shapes outcomes
      - **adoption study**: design comparing adoptees to biological and adoptive relatives

      ### Concrete Real-World Example
      A team is studying school enrichment effects across genetic risk profiles. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'genetics-behavior-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about school enrichment effects across genetic risk profiles, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'nonshared environment',
              'adoption study',
              'concordance',
              'reaction range'
            ],
            correctAnswer: 2,
            explanation: 'concordance is correct because it directly matches this mechanism: the degree to which related individuals share a trait. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'reaction range',
              'heritability',
              'adoption study',
              'genotype'
            ],
            correctAnswer: 1,
            explanation: 'heritability is the strongest match here (the proportion of trait variation in a population attributable to genetic differences). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing school enrichment effects across genetic risk profiles, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | concordance | the degree to which related individuals share a trait | experimental manipulation with random assignment | possible demand characteristics |
      | reaction range | genetically influenced limits within which environment shapes outcomes | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | adoption study | design comparing adoptees to biological and adoptive relatives | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | nonshared environment | experiences that make siblings different from one another | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'genetics-behavior-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: the degree to which related individuals share a trait
      2) Write the concept that matches: genetically influenced limits within which environment shapes outcomes
      3) Write the concept that matches: design comparing adoptees to biological and adoptive relatives

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['concordance', 'reaction range', 'adoption study'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: R',
        hint3: 'Starts with: A',
        explanation: 'Expected answers: concordance, reaction range, and adoption study. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'genetics-behavior-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: the degree to which related individuals share a trait',
            options: ['heritability', 'concordance', 'nonshared environment', 'reaction range']
          },
          {
            label: 'Select the concept that best matches: genetically influenced limits within which environment shapes outcomes',
            options: ['reaction range', 'heritability', 'nonshared environment', 'adoption study']
          },
          {
            label: 'Select the concept that best matches: design comparing adoptees to biological and adoptive relatives',
            options: ['reaction range', 'genotype', 'nonshared environment', 'adoption study']
          }
        ],
        correctAnswers: ['concordance', 'reaction range', 'adoption study'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are concordance, reaction range, and adoption study. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'genetics-behavior-p4-s6-strategy',
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
      - In scenario questions about school enrichment effects across genetic risk profiles, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'genetics-behavior-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating school enrichment effects across genetic risk profiles finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'reaction range',
              'nonshared environment',
              'concordance',
              'adoption study'
            ],
            correctAnswer: 1,
            explanation: 'nonshared environment is best because it reflects this mechanism (experiences that make siblings different from one another). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'reaction range',
              'genotype',
              'heritability',
              'adoption study'
            ],
            correctAnswer: 2,
            explanation: 'heritability is the strongest interpretation because it maps to the measured pattern and proposed mechanism: the proportion of trait variation in a population attributable to genetic differences. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
