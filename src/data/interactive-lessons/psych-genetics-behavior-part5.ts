export const psychGeneticsPart5Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Genetics and Behavior

      **Part 5 of 7 — Epigenetics and Development**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **adoption study**: design comparing adoptees to biological and adoptive relatives
      - **nonshared environment**: experiences that make siblings different from one another
      - **heritability**: the proportion of trait variation in a population attributable to genetic differences

      ### Concrete Real-World Example
      A team is studying stress exposure and epigenetic markers across adolescence. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'genetics-behavior-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about stress exposure and epigenetic markers across adolescence, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'adoption study',
              'heritability',
              'genotype',
              'nonshared environment'
            ],
            correctAnswer: 0,
            explanation: 'adoption study is correct because it directly matches this mechanism: design comparing adoptees to biological and adoptive relatives. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'nonshared environment',
              'polygenic',
              'heritability',
              'phenotype'
            ],
            correctAnswer: 3,
            explanation: 'phenotype is the strongest match here (observable characteristics produced by genes and environment). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing stress exposure and epigenetic markers across adolescence, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | adoption study | design comparing adoptees to biological and adoptive relatives | experimental manipulation with random assignment | possible demand characteristics |
      | nonshared environment | experiences that make siblings different from one another | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | heritability | the proportion of trait variation in a population attributable to genetic differences | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | genotype | an organism's genetic makeup | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'genetics-behavior-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: design comparing adoptees to biological and adoptive relatives

      2) Write the concept that matches: experiences that make siblings different from one another

      3) Write the concept that matches: the proportion of trait variation in a population attributable to genetic differences

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['adoption study', 'nonshared environment', 'heritability'],
        hint1: 'Starts with: A',
        hint2: 'Starts with: N',
        hint3: 'Starts with: H',
        explanation: 'Expected answers: adoption study, nonshared environment, and heritability. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'genetics-behavior-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: design comparing adoptees to biological and adoptive relatives',
            options: ['genotype', 'adoption study', 'phenotype', 'polygenic']
          },
          {
            label: 'Select the concept that best matches: experiences that make siblings different from one another',
            options: ['nonshared environment', 'genotype', 'adoption study', 'phenotype']
          },
          {
            label: 'Select the concept that best matches: the proportion of trait variation in a population attributable to genetic differences',
            options: ['heritability', 'genotype', 'adoption study', 'nonshared environment']
          }
        ],
        correctAnswers: ['adoption study', 'nonshared environment', 'heritability'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are adoption study, nonshared environment, and heritability. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'genetics-behavior-p5-s6-strategy',
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
      - In scenario questions about stress exposure and epigenetic markers across adolescence, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'genetics-behavior-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating stress exposure and epigenetic markers across adolescence finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'genotype',
              'adoption study',
              'heritability',
              'nonshared environment'
            ],
            correctAnswer: 0,
            explanation: 'genotype is best because it reflects this mechanism (an organism\'s genetic makeup). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'nonshared environment',
              'polygenic',
              'phenotype',
              'heritability'
            ],
            correctAnswer: 2,
            explanation: 'phenotype is the strongest interpretation because it maps to the measured pattern and proposed mechanism: observable characteristics produced by genes and environment. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
