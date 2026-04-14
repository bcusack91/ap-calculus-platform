export const bioMendelianPart2Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'bio-mendelian-genetics-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Mendelian Genetics: Monohybrid Crosses
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through single-gene dominance interpretation.
      
      ### Worked biological example
      A student team investigates single-gene dominance interpretation. Their first interpretation step is to identify how **law of independent assortment** and **dominant allele** work together in the same pathway.
      
      - They classify the primary signal using **law of independent assortment**: different gene pairs assort independently when unlinked.
      - They trace the downstream response using **dominant allele**: allele expressed in heterozygous genotype.
      - They then compare outcomes with **recessive allele** and **heterozygous** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **law of independent assortment**
      - **dominant allele**
      - **recessive allele**
      - **heterozygous**
      `
    },
    {
      id: 'bio-mendelian-genetics-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Monohybrid Crosses, what best describes law of independent assortment?',
            options: [
              'allele expressed in heterozygous genotype',
              'allele expressed when no dominant allele is present',
              'different gene pairs assort independently when unlinked',
              'genotype carrying two different alleles'
            ],
            correctAnswer: 2,
            explanation: 'law of independent assortment is best matched with: different gene pairs assort independently when unlinked.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of dominant allele?',
            options: [
              'different gene pairs assort independently when unlinked',
              'allele expressed when no dominant allele is present',
              'genotype carrying two identical alleles',
              'allele expressed in heterozygous genotype'
            ],
            correctAnswer: 3,
            explanation: 'dominant allele is best matched with: allele expressed in heterozygous genotype.'
          }
        ]
      }
    },
    {
      id: 'bio-mendelian-genetics-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Monohybrid Crosses
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → law of independent assortment
      - **Immediate processing** → dominant allele
      - **System-level consequence** → recessive allele
      - **Measured readout** → heterozygous
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | law of independent assortment | different gene pairs assort independently when unlinked | Early shift in the primary variable |
      | dominant allele | allele expressed in heterozygous genotype | Mid-pathway change in process rate |
      | recessive allele | allele expressed when no dominant allele is present | Downstream phenotype trend |
      | heterozygous | genotype carrying two different alleles | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-mendelian-genetics-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **different gene pairs assort independently when unlinked**

      2) Term for this definition: **allele expressed in heterozygous genotype**

      3) Term for this definition: **allele expressed when no dominant allele is present**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['law of independent assortment', 'dominant allele', 'recessive allele'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'different gene pairs assort independently when unlinked\'.',
        hint2: 'Second blank points to dominant allele; think about the role \'allele expressed in heterozygous genotype\'.',
        hint3: 'Third blank is recessive allele; connect it to \'allele expressed when no dominant allele is present\'.',
        explanation: 'Correct set: law of independent assortment, dominant allele, recessive allele. These three terms define the core mechanism chain for Monohybrid Crosses.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'law of independent assortment',
            options: ['genotype carrying two different alleles', 'different gene pairs assort independently when unlinked', 'allele expressed in heterozygous genotype', 'allele expressed when no dominant allele is present']
          },
          {
            label: 'dominant allele',
            options: ['allele expressed when no dominant allele is present', 'allele expressed in heterozygous genotype', 'genotype carrying two different alleles', 'genotype carrying two identical alleles']
          },
          {
            label: 'recessive allele',
            options: ['genotype carrying two different alleles', 'genotype carrying two identical alleles', 'grid method for predicting genotype combinations', 'allele expressed when no dominant allele is present']
          }
        ],
        correctAnswers: ['different gene pairs assort independently when unlinked', 'allele expressed in heterozygous genotype', 'allele expressed when no dominant allele is present'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'law of independent assortment, dominant allele, and recessive allele should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because law of independent assortment different gene pairs assort independently when unlinked, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Independent assortment requires genes not tightly linked on the same chromosome.
      - Phenotype ratios do not directly equal genotype ratios in all models.
      - Pedigree interpretation must consider sex linkage and incomplete family data.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-mendelian-genetics-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In single-gene dominance interpretation, the observed pattern is: genotype carrying two different alleles. What term should anchor the explanation?',
            options: [
              'recessive allele',
              'dominant allele',
              'heterozygous',
              'law of independent assortment'
            ],
            correctAnswer: 2,
            explanation: 'Use heterozygous because it directly maps to the described biological pattern: genotype carrying two different alleles.'
          },
          {
            question: 'In an AP-style free-response about monohybrid crosses, the observed pattern is: genotype carrying two identical alleles. What term should anchor the explanation?',
            options: [
              'Punnett square',
              'homozygous',
              'recessive allele',
              'heterozygous'
            ],
            correctAnswer: 1,
            explanation: 'Use homozygous because it directly maps to the described biological pattern: genotype carrying two identical alleles.'
          }
        ]
      }
    }
  ]
};
