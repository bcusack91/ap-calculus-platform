export const bioMendelianPart6Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'bio-mendelian-genetics-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Mendelian Genetics: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through cross-data troubleshooting in exam sets.
      
      ### Worked biological example
      A student team investigates cross-data troubleshooting in exam sets. Their first interpretation step is to identify how **homozygous** and **Punnett square** work together in the same pathway.
      
      - They classify the primary signal using **homozygous**: genotype carrying two identical alleles.
      - They trace the downstream response using **Punnett square**: grid method for predicting genotype combinations.
      - They then compare outcomes with **test cross** and **pedigree** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **homozygous**
      - **Punnett square**
      - **test cross**
      - **pedigree**
      `
    },
    {
      id: 'bio-mendelian-genetics-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes homozygous?',
            options: [
              'cross with homozygous recessive to reveal unknown genotype',
              'family diagram tracking trait inheritance across generations',
              'genotype carrying two identical alleles',
              'grid method for predicting genotype combinations'
            ],
            correctAnswer: 2,
            explanation: 'homozygous is best matched with: genotype carrying two identical alleles.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of Punnett square?',
            options: [
              'genotype carrying two identical alleles',
              'cross with homozygous recessive to reveal unknown genotype',
              'grid method for predicting genotype combinations',
              'allele pairs separate during gamete formation'
            ],
            correctAnswer: 2,
            explanation: 'Punnett square is best matched with: grid method for predicting genotype combinations.'
          }
        ]
      }
    },
    {
      id: 'bio-mendelian-genetics-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → homozygous
      - **Immediate processing** → Punnett square
      - **System-level consequence** → test cross
      - **Measured readout** → pedigree
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | homozygous | genotype carrying two identical alleles | Early shift in the primary variable |
      | Punnett square | grid method for predicting genotype combinations | Mid-pathway change in process rate |
      | test cross | cross with homozygous recessive to reveal unknown genotype | Downstream phenotype trend |
      | pedigree | family diagram tracking trait inheritance across generations | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-mendelian-genetics-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **genotype carrying two identical alleles**

      2) Term for this definition: **grid method for predicting genotype combinations**

      3) Term for this definition: **cross with homozygous recessive to reveal unknown genotype**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['homozygous', 'Punnett square', 'test cross'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'genotype carrying two identical alleles\'.',
        hint2: 'Second blank points to Punnett square; think about the role \'grid method for predicting genotype combinations\'.',
        hint3: 'Third blank is test cross; connect it to \'cross with homozygous recessive to reveal unknown genotype\'.',
        explanation: 'Correct set: homozygous, Punnett square, test cross. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'homozygous',
            options: ['family diagram tracking trait inheritance across generations', 'genotype carrying two identical alleles', 'grid method for predicting genotype combinations', 'cross with homozygous recessive to reveal unknown genotype']
          },
          {
            label: 'Punnett square',
            options: ['allele pairs separate during gamete formation', 'family diagram tracking trait inheritance across generations', 'cross with homozygous recessive to reveal unknown genotype', 'grid method for predicting genotype combinations']
          },
          {
            label: 'test cross',
            options: ['cross with homozygous recessive to reveal unknown genotype', 'family diagram tracking trait inheritance across generations', 'allele pairs separate during gamete formation', 'different gene pairs assort independently when unlinked']
          }
        ],
        correctAnswers: ['genotype carrying two identical alleles', 'grid method for predicting genotype combinations', 'cross with homozygous recessive to reveal unknown genotype'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'homozygous, Punnett square, and test cross should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because homozygous genotype carrying two identical alleles, we expect ...".
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
      id: 'bio-mendelian-genetics-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In cross-data troubleshooting in exam sets, the observed pattern is: family diagram tracking trait inheritance across generations. What term should anchor the explanation?',
            options: [
              'pedigree',
              'Punnett square',
              'homozygous',
              'test cross'
            ],
            correctAnswer: 0,
            explanation: 'Use pedigree because it directly maps to the described biological pattern: family diagram tracking trait inheritance across generations.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: allele pairs separate during gamete formation. What term should anchor the explanation?',
            options: [
              'law of independent assortment',
              'test cross',
              'law of segregation',
              'pedigree'
            ],
            correctAnswer: 2,
            explanation: 'Use law of segregation because it directly maps to the described biological pattern: allele pairs separate during gamete formation.'
          }
        ]
      }
    }
  ]
};
