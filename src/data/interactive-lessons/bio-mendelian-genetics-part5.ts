export const bioMendelianPart5Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'bio-mendelian-genetics-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Mendelian Genetics: Pedigree Analysis
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through pedigree inference of inheritance mode.
      
      ### Worked biological example
      A student team investigates pedigree inference of inheritance mode. Their first interpretation step is to identify how **heterozygous** and **homozygous** work together in the same pathway.
      
      - They classify the primary signal using **heterozygous**: genotype carrying two different alleles.
      - They trace the downstream response using **homozygous**: genotype carrying two identical alleles.
      - They then compare outcomes with **Punnett square** and **test cross** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **heterozygous**
      - **homozygous**
      - **Punnett square**
      - **test cross**
      `
    },
    {
      id: 'bio-mendelian-genetics-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Pedigree Analysis, what best describes heterozygous?',
            options: [
              'cross with homozygous recessive to reveal unknown genotype',
              'genotype carrying two different alleles',
              'genotype carrying two identical alleles',
              'grid method for predicting genotype combinations'
            ],
            correctAnswer: 1,
            explanation: 'heterozygous is best matched with: genotype carrying two different alleles.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of homozygous?',
            options: [
              'family diagram tracking trait inheritance across generations',
              'grid method for predicting genotype combinations',
              'genotype carrying two identical alleles',
              'genotype carrying two different alleles'
            ],
            correctAnswer: 2,
            explanation: 'homozygous is best matched with: genotype carrying two identical alleles.'
          }
        ]
      }
    },
    {
      id: 'bio-mendelian-genetics-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Pedigree Analysis
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → heterozygous
      - **Immediate processing** → homozygous
      - **System-level consequence** → Punnett square
      - **Measured readout** → test cross
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | heterozygous | genotype carrying two different alleles | Early shift in the primary variable |
      | homozygous | genotype carrying two identical alleles | Mid-pathway change in process rate |
      | Punnett square | grid method for predicting genotype combinations | Downstream phenotype trend |
      | test cross | cross with homozygous recessive to reveal unknown genotype | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-mendelian-genetics-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **genotype carrying two different alleles**

      2) Term for this definition: **genotype carrying two identical alleles**

      3) Term for this definition: **grid method for predicting genotype combinations**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['heterozygous', 'homozygous', 'Punnett square'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'genotype carrying two different alleles\'.',
        hint2: 'Second blank points to homozygous; think about the role \'genotype carrying two identical alleles\'.',
        hint3: 'Third blank is Punnett square; connect it to \'grid method for predicting genotype combinations\'.',
        explanation: 'Correct set: heterozygous, homozygous, Punnett square. These three terms define the core mechanism chain for Pedigree Analysis.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'heterozygous',
            options: ['genotype carrying two different alleles', 'cross with homozygous recessive to reveal unknown genotype', 'grid method for predicting genotype combinations', 'genotype carrying two identical alleles']
          },
          {
            label: 'homozygous',
            options: ['cross with homozygous recessive to reveal unknown genotype', 'family diagram tracking trait inheritance across generations', 'genotype carrying two identical alleles', 'grid method for predicting genotype combinations']
          },
          {
            label: 'Punnett square',
            options: ['cross with homozygous recessive to reveal unknown genotype', 'allele pairs separate during gamete formation', 'grid method for predicting genotype combinations', 'family diagram tracking trait inheritance across generations']
          }
        ],
        correctAnswers: ['genotype carrying two different alleles', 'genotype carrying two identical alleles', 'grid method for predicting genotype combinations'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'heterozygous, homozygous, and Punnett square should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because heterozygous genotype carrying two different alleles, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Dominant does not mean more common in populations.
      - Independent assortment requires genes not tightly linked on the same chromosome.
      - Phenotype ratios do not directly equal genotype ratios in all models.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-mendelian-genetics-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In pedigree inference of inheritance mode, the observed pattern is: cross with homozygous recessive to reveal unknown genotype. What term should anchor the explanation?',
            options: [
              'Punnett square',
              'test cross',
              'heterozygous',
              'homozygous'
            ],
            correctAnswer: 1,
            explanation: 'Use test cross because it directly maps to the described biological pattern: cross with homozygous recessive to reveal unknown genotype.'
          },
          {
            question: 'In an AP-style free-response about pedigree analysis, the observed pattern is: family diagram tracking trait inheritance across generations. What term should anchor the explanation?',
            options: [
              'Punnett square',
              'pedigree',
              'test cross',
              'law of segregation'
            ],
            correctAnswer: 1,
            explanation: 'Use pedigree because it directly maps to the described biological pattern: family diagram tracking trait inheritance across generations.'
          }
        ]
      }
    }
  ]
};
