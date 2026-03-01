export const bioMendelianPart7Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'bio-mendelian-genetics-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Mendelian Genetics: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through full AP genetics synthesis tasks.
      
      ### Worked biological example
      A student team investigates full AP genetics synthesis tasks. Their first interpretation step is to identify how **Punnett square** and **test cross** work together in the same pathway.
      
      - They classify the primary signal using **Punnett square**: grid method for predicting genotype combinations.
      - They trace the downstream response using **test cross**: cross with homozygous recessive to reveal unknown genotype.
      - They then compare outcomes with **pedigree** and **law of segregation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **Punnett square**
      - **test cross**
      - **pedigree**
      - **law of segregation**
      `
    },
    {
      id: 'bio-mendelian-genetics-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes Punnett square?',
            options: [
              'family diagram tracking trait inheritance across generations',
              'cross with homozygous recessive to reveal unknown genotype',
              'grid method for predicting genotype combinations',
              'allele pairs separate during gamete formation'
            ],
            correctAnswer: 2,
            explanation: 'Punnett square is best matched with: grid method for predicting genotype combinations.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of test cross?',
            options: [
              'family diagram tracking trait inheritance across generations',
              'grid method for predicting genotype combinations',
              'cross with homozygous recessive to reveal unknown genotype',
              'different gene pairs assort independently when unlinked'
            ],
            correctAnswer: 2,
            explanation: 'test cross is best matched with: cross with homozygous recessive to reveal unknown genotype.'
          }
        ]
      }
    },
    {
      id: 'bio-mendelian-genetics-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → Punnett square
      - **Immediate processing** → test cross
      - **System-level consequence** → pedigree
      - **Measured readout** → law of segregation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | Punnett square | grid method for predicting genotype combinations | Early shift in the primary variable |
      | test cross | cross with homozygous recessive to reveal unknown genotype | Mid-pathway change in process rate |
      | pedigree | family diagram tracking trait inheritance across generations | Downstream phenotype trend |
      | law of segregation | allele pairs separate during gamete formation | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-mendelian-genetics-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **grid method for predicting genotype combinations**
      2) Term for this definition: **cross with homozygous recessive to reveal unknown genotype**
      3) Term for this definition: **family diagram tracking trait inheritance across generations**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Punnett square', 'test cross', 'pedigree'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'grid method for predicting genotype combinations\'.',
        hint2: 'Second blank points to test cross; think about the role \'cross with homozygous recessive to reveal unknown genotype\'.',
        hint3: 'Third blank is pedigree; connect it to \'family diagram tracking trait inheritance across generations\'.',
        explanation: 'Correct set: Punnett square, test cross, pedigree. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Punnett square',
            options: ['family diagram tracking trait inheritance across generations', 'allele pairs separate during gamete formation', 'grid method for predicting genotype combinations', 'cross with homozygous recessive to reveal unknown genotype']
          },
          {
            label: 'test cross',
            options: ['family diagram tracking trait inheritance across generations', 'allele pairs separate during gamete formation', 'different gene pairs assort independently when unlinked', 'cross with homozygous recessive to reveal unknown genotype']
          },
          {
            label: 'pedigree',
            options: ['allele pairs separate during gamete formation', 'family diagram tracking trait inheritance across generations', 'different gene pairs assort independently when unlinked', 'allele expressed in heterozygous genotype']
          }
        ],
        correctAnswers: ['grid method for predicting genotype combinations', 'cross with homozygous recessive to reveal unknown genotype', 'family diagram tracking trait inheritance across generations'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'Punnett square, test cross, and pedigree should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because Punnett square grid method for predicting genotype combinations, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Phenotype ratios do not directly equal genotype ratios in all models.
      - Pedigree interpretation must consider sex linkage and incomplete family data.
      - Dominant does not mean more common in populations.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-mendelian-genetics-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In full AP genetics synthesis tasks, the observed pattern is: allele pairs separate during gamete formation. What term should anchor the explanation?',
            options: [
              'Punnett square',
              'test cross',
              'pedigree',
              'law of segregation'
            ],
            correctAnswer: 3,
            explanation: 'Use law of segregation because it directly maps to the described biological pattern: allele pairs separate during gamete formation.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: different gene pairs assort independently when unlinked. What term should anchor the explanation?',
            options: [
              'pedigree',
              'dominant allele',
              'law of independent assortment',
              'law of segregation'
            ],
            correctAnswer: 2,
            explanation: 'Use law of independent assortment because it directly maps to the described biological pattern: different gene pairs assort independently when unlinked.'
          }
        ]
      }
    }
  ]
};
