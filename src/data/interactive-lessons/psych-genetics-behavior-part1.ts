export const psychGeneticsPart1Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p1-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Genetics and Behavior

      **Part 1 of 7 — Genes, Environment, and Phenotype**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **heritability**: the proportion of trait variation in a population attributable to genetic differences
      - **genotype**: an organism's genetic makeup
      - **phenotype**: observable characteristics produced by genes and environment

      ### Concrete Real-World Example
      A team is studying interpreting twin data on anxiety symptoms. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'genetics-behavior-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about interpreting twin data on anxiety symptoms, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'heritability',
              'polygenic',
              'genotype',
              'phenotype'
            ],
            correctAnswer: 0,
            explanation: 'heritability is correct because it directly matches this mechanism: the proportion of trait variation in a population attributable to genetic differences. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'phenotype',
              'gene-environment interaction',
              'epigenetics',
              'genotype'
            ],
            correctAnswer: 1,
            explanation: 'gene-environment interaction is the strongest match here (when environmental effects differ by genotype). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p1-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing interpreting twin data on anxiety symptoms, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | heritability | the proportion of trait variation in a population attributable to genetic differences | experimental manipulation with random assignment | possible demand characteristics |
      | genotype | an organism's genetic makeup | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | phenotype | observable characteristics produced by genes and environment | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | polygenic | influenced by many genes with small effects | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'genetics-behavior-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: the proportion of trait variation in a population attributable to genetic differences
      2) Write the concept that matches: an organism's genetic makeup
      3) Write the concept that matches: observable characteristics produced by genes and environment

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['heritability', 'genotype', 'phenotype'],
        hint1: 'Starts with: H',
        hint2: 'Starts with: G',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: heritability, genotype, and phenotype. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'genetics-behavior-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: the proportion of trait variation in a population attributable to genetic differences',
            options: ['genotype', 'polygenic', 'heritability', 'phenotype']
          },
          {
            label: 'Select the concept that best matches: an organism\'s genetic makeup',
            options: ['polygenic', 'phenotype', 'gene-environment interaction', 'genotype']
          },
          {
            label: 'Select the concept that best matches: observable characteristics produced by genes and environment',
            options: ['polygenic', 'genotype', 'heritability', 'phenotype']
          }
        ],
        correctAnswers: ['heritability', 'genotype', 'phenotype'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are heritability, genotype, and phenotype. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'genetics-behavior-p1-s6-strategy',
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
      - In scenario questions about interpreting twin data on anxiety symptoms, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'genetics-behavior-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating interpreting twin data on anxiety symptoms finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'polygenic',
              'heritability',
              'phenotype',
              'genotype'
            ],
            correctAnswer: 0,
            explanation: 'polygenic is best because it reflects this mechanism (influenced by many genes with small effects). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'phenotype',
              'gene-environment interaction',
              'epigenetics',
              'genotype'
            ],
            correctAnswer: 1,
            explanation: 'gene-environment interaction is the strongest interpretation because it maps to the measured pattern and proposed mechanism: when environmental effects differ by genotype. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
