export const bioMendelianPart1Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'bio-mendelian-genetics-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Mendelian Genetics: Mendel's Laws
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through pea trait inheritance under controlled crosses.
      
      ### Worked biological example
      A student team investigates pea trait inheritance under controlled crosses. Their first interpretation step is to identify how **law of segregation** and **law of independent assortment** work together in the same pathway.
      
      - They classify the primary signal using **law of segregation**: allele pairs separate during gamete formation.
      - They trace the downstream response using **law of independent assortment**: different gene pairs assort independently when unlinked.
      - They then compare outcomes with **dominant allele** and **recessive allele** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **law of segregation**
      - **law of independent assortment**
      - **dominant allele**
      - **recessive allele**
      `
    },
    {
      id: 'bio-mendelian-genetics-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Mendel\'s Laws, what best describes law of segregation?',
            options: [
              'allele expressed in heterozygous genotype',
              'different gene pairs assort independently when unlinked',
              'allele pairs separate during gamete formation',
              'allele expressed when no dominant allele is present'
            ],
            correctAnswer: 2,
            explanation: 'law of segregation is best matched with: allele pairs separate during gamete formation.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of law of independent assortment?',
            options: [
              'genotype carrying two different alleles',
              'allele expressed in heterozygous genotype',
              'different gene pairs assort independently when unlinked',
              'allele pairs separate during gamete formation'
            ],
            correctAnswer: 2,
            explanation: 'law of independent assortment is best matched with: different gene pairs assort independently when unlinked.'
          }
        ]
      }
    },
    {
      id: 'bio-mendelian-genetics-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Mendel's Laws
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → law of segregation
      - **Immediate processing** → law of independent assortment
      - **System-level consequence** → dominant allele
      - **Measured readout** → recessive allele
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | law of segregation | allele pairs separate during gamete formation | Early shift in the primary variable |
      | law of independent assortment | different gene pairs assort independently when unlinked | Mid-pathway change in process rate |
      | dominant allele | allele expressed in heterozygous genotype | Downstream phenotype trend |
      | recessive allele | allele expressed when no dominant allele is present | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-mendelian-genetics-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **allele pairs separate during gamete formation**
      2) Term for this definition: **different gene pairs assort independently when unlinked**
      3) Term for this definition: **allele expressed in heterozygous genotype**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['law of segregation', 'law of independent assortment', 'dominant allele'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'allele pairs separate during gamete formation\'.',
        hint2: 'Second blank points to law of independent assortment; think about the role \'different gene pairs assort independently when unlinked\'.',
        hint3: 'Third blank is dominant allele; connect it to \'allele expressed in heterozygous genotype\'.',
        explanation: 'Correct set: law of segregation, law of independent assortment, dominant allele. These three terms define the core mechanism chain for Mendel\'s Laws.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'law of segregation',
            options: ['allele pairs separate during gamete formation', 'allele expressed in heterozygous genotype', 'different gene pairs assort independently when unlinked', 'allele expressed when no dominant allele is present']
          },
          {
            label: 'law of independent assortment',
            options: ['allele expressed when no dominant allele is present', 'genotype carrying two different alleles', 'allele expressed in heterozygous genotype', 'different gene pairs assort independently when unlinked']
          },
          {
            label: 'dominant allele',
            options: ['genotype carrying two identical alleles', 'allele expressed in heterozygous genotype', 'allele expressed when no dominant allele is present', 'genotype carrying two different alleles']
          }
        ],
        correctAnswers: ['allele pairs separate during gamete formation', 'different gene pairs assort independently when unlinked', 'allele expressed in heterozygous genotype'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'law of segregation, law of independent assortment, and dominant allele should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-mendelian-genetics-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because law of segregation allele pairs separate during gamete formation, we expect ...".
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
      id: 'bio-mendelian-genetics-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In pea trait inheritance under controlled crosses, the observed pattern is: allele expressed when no dominant allele is present. What term should anchor the explanation?',
            options: [
              'law of segregation',
              'law of independent assortment',
              'dominant allele',
              'recessive allele'
            ],
            correctAnswer: 3,
            explanation: 'Use recessive allele because it directly maps to the described biological pattern: allele expressed when no dominant allele is present.'
          },
          {
            question: 'In an AP-style free-response about mendel\'s laws, the observed pattern is: genotype carrying two different alleles. What term should anchor the explanation?',
            options: [
              'heterozygous',
              'recessive allele',
              'dominant allele',
              'homozygous'
            ],
            correctAnswer: 0,
            explanation: 'Use heterozygous because it directly maps to the described biological pattern: genotype carrying two different alleles.'
          }
        ]
      }
    }
  ]
};
