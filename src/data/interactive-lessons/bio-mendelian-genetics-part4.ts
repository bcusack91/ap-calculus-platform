export const bioMendelianPart4Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'bio-mendelian-genetics-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Mendelian Genetics: Probability in Genetics
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through probability trees for offspring outcomes.
      
      ### Worked biological example
      A student team investigates probability trees for offspring outcomes. Their first interpretation step is to identify how **recessive allele** and **heterozygous** work together in the same pathway.
      
      - They classify the primary signal using **recessive allele**: allele expressed when no dominant allele is present.
      - They trace the downstream response using **heterozygous**: genotype carrying two different alleles.
      - They then compare outcomes with **homozygous** and **Punnett square** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **recessive allele**
      - **heterozygous**
      - **homozygous**
      - **Punnett square**
      `
    },
    {
      id: 'bio-mendelian-genetics-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Probability in Genetics, what best describes recessive allele?',
            options: [
              'grid method for predicting genotype combinations',
              'genotype carrying two identical alleles',
              'genotype carrying two different alleles',
              'allele expressed when no dominant allele is present'
            ],
            correctAnswer: 3,
            explanation: 'recessive allele is best matched with: allele expressed when no dominant allele is present.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of heterozygous?',
            options: [
              'allele expressed when no dominant allele is present',
              'genotype carrying two identical alleles',
              'genotype carrying two different alleles',
              'cross with homozygous recessive to reveal unknown genotype'
            ],
            correctAnswer: 2,
            explanation: 'heterozygous is best matched with: genotype carrying two different alleles.'
          }
        ]
      }
    },
    {
      id: 'bio-mendelian-genetics-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Probability in Genetics
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → recessive allele
      - **Immediate processing** → heterozygous
      - **System-level consequence** → homozygous
      - **Measured readout** → Punnett square
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | recessive allele | allele expressed when no dominant allele is present | Early shift in the primary variable |
      | heterozygous | genotype carrying two different alleles | Mid-pathway change in process rate |
      | homozygous | genotype carrying two identical alleles | Downstream phenotype trend |
      | Punnett square | grid method for predicting genotype combinations | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-mendelian-genetics-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **allele expressed when no dominant allele is present**
      2) Term for this definition: **genotype carrying two different alleles**
      3) Term for this definition: **genotype carrying two identical alleles**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['recessive allele', 'heterozygous', 'homozygous'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'allele expressed when no dominant allele is present\'.',
        hint2: 'Second blank points to heterozygous; think about the role \'genotype carrying two different alleles\'.',
        hint3: 'Third blank is homozygous; connect it to \'genotype carrying two identical alleles\'.',
        explanation: 'Correct set: recessive allele, heterozygous, homozygous. These three terms define the core mechanism chain for Probability in Genetics.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'recessive allele',
            options: ['genotype carrying two different alleles', 'allele expressed when no dominant allele is present', 'grid method for predicting genotype combinations', 'genotype carrying two identical alleles']
          },
          {
            label: 'heterozygous',
            options: ['grid method for predicting genotype combinations', 'genotype carrying two different alleles', 'genotype carrying two identical alleles', 'cross with homozygous recessive to reveal unknown genotype']
          },
          {
            label: 'homozygous',
            options: ['genotype carrying two identical alleles', 'cross with homozygous recessive to reveal unknown genotype', 'family diagram tracking trait inheritance across generations', 'grid method for predicting genotype combinations']
          }
        ],
        correctAnswers: ['allele expressed when no dominant allele is present', 'genotype carrying two different alleles', 'genotype carrying two identical alleles'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'recessive allele, heterozygous, and homozygous should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because recessive allele allele expressed when no dominant allele is present, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Pedigree interpretation must consider sex linkage and incomplete family data.
      - Dominant does not mean more common in populations.
      - Independent assortment requires genes not tightly linked on the same chromosome.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-mendelian-genetics-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In probability trees for offspring outcomes, the observed pattern is: grid method for predicting genotype combinations. What term should anchor the explanation?',
            options: [
              'recessive allele',
              'heterozygous',
              'Punnett square',
              'homozygous'
            ],
            correctAnswer: 2,
            explanation: 'Use Punnett square because it directly maps to the described biological pattern: grid method for predicting genotype combinations.'
          },
          {
            question: 'In an AP-style free-response about probability in genetics, the observed pattern is: cross with homozygous recessive to reveal unknown genotype. What term should anchor the explanation?',
            options: [
              'Punnett square',
              'pedigree',
              'test cross',
              'homozygous'
            ],
            correctAnswer: 2,
            explanation: 'Use test cross because it directly maps to the described biological pattern: cross with homozygous recessive to reveal unknown genotype.'
          }
        ]
      }
    }
  ]
};
