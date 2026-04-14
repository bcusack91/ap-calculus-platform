export const bioMendelianPart3Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'bio-mendelian-genetics-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Mendelian Genetics: Dihybrid Crosses
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through independent assortment in two-gene crosses.
      
      ### Worked biological example
      A student team investigates independent assortment in two-gene crosses. Their first interpretation step is to identify how **dominant allele** and **recessive allele** work together in the same pathway.
      
      - They classify the primary signal using **dominant allele**: allele expressed in heterozygous genotype.
      - They trace the downstream response using **recessive allele**: allele expressed when no dominant allele is present.
      - They then compare outcomes with **heterozygous** and **homozygous** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **dominant allele**
      - **recessive allele**
      - **heterozygous**
      - **homozygous**
      `
    },
    {
      id: 'bio-mendelian-genetics-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Dihybrid Crosses, what best describes dominant allele?',
            options: [
              'allele expressed when no dominant allele is present',
              'allele expressed in heterozygous genotype',
              'genotype carrying two different alleles',
              'genotype carrying two identical alleles'
            ],
            correctAnswer: 1,
            explanation: 'dominant allele is best matched with: allele expressed in heterozygous genotype.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of recessive allele?',
            options: [
              'allele expressed in heterozygous genotype',
              'allele expressed when no dominant allele is present',
              'genotype carrying two different alleles',
              'grid method for predicting genotype combinations'
            ],
            correctAnswer: 1,
            explanation: 'recessive allele is best matched with: allele expressed when no dominant allele is present.'
          }
        ]
      }
    },
    {
      id: 'bio-mendelian-genetics-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Dihybrid Crosses
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → dominant allele
      - **Immediate processing** → recessive allele
      - **System-level consequence** → heterozygous
      - **Measured readout** → homozygous
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | dominant allele | allele expressed in heterozygous genotype | Early shift in the primary variable |
      | recessive allele | allele expressed when no dominant allele is present | Mid-pathway change in process rate |
      | heterozygous | genotype carrying two different alleles | Downstream phenotype trend |
      | homozygous | genotype carrying two identical alleles | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-mendelian-genetics-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **allele expressed in heterozygous genotype**

      2) Term for this definition: **allele expressed when no dominant allele is present**

      3) Term for this definition: **genotype carrying two different alleles**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['dominant allele', 'recessive allele', 'heterozygous'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'allele expressed in heterozygous genotype\'.',
        hint2: 'Second blank points to recessive allele; think about the role \'allele expressed when no dominant allele is present\'.',
        hint3: 'Third blank is heterozygous; connect it to \'genotype carrying two different alleles\'.',
        explanation: 'Correct set: dominant allele, recessive allele, heterozygous. These three terms define the core mechanism chain for Dihybrid Crosses.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'dominant allele',
            options: ['genotype carrying two different alleles', 'genotype carrying two identical alleles', 'allele expressed in heterozygous genotype', 'allele expressed when no dominant allele is present']
          },
          {
            label: 'recessive allele',
            options: ['genotype carrying two different alleles', 'grid method for predicting genotype combinations', 'allele expressed when no dominant allele is present', 'genotype carrying two identical alleles']
          },
          {
            label: 'heterozygous',
            options: ['grid method for predicting genotype combinations', 'genotype carrying two identical alleles', 'genotype carrying two different alleles', 'cross with homozygous recessive to reveal unknown genotype']
          }
        ],
        correctAnswers: ['allele expressed in heterozygous genotype', 'allele expressed when no dominant allele is present', 'genotype carrying two different alleles'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'dominant allele, recessive allele, and heterozygous should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because dominant allele allele expressed in heterozygous genotype, we expect ...".
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
      id: 'bio-mendelian-genetics-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In independent assortment in two-gene crosses, the observed pattern is: genotype carrying two identical alleles. What term should anchor the explanation?',
            options: [
              'recessive allele',
              'dominant allele',
              'heterozygous',
              'homozygous'
            ],
            correctAnswer: 3,
            explanation: 'Use homozygous because it directly maps to the described biological pattern: genotype carrying two identical alleles.'
          },
          {
            question: 'In an AP-style free-response about dihybrid crosses, the observed pattern is: grid method for predicting genotype combinations. What term should anchor the explanation?',
            options: [
              'homozygous',
              'heterozygous',
              'test cross',
              'Punnett square'
            ],
            correctAnswer: 3,
            explanation: 'Use Punnett square because it directly maps to the described biological pattern: grid method for predicting genotype combinations.'
          }
        ]
      }
    }
  ]
};
