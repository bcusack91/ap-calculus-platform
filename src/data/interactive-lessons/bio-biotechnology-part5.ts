export const bioBiotechPart5Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Biotechnology: CRISPR & Gene Editing
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through CRISPR correction of a disease-associated allele.
      
      ### Worked biological example
      A student team investigates CRISPR correction of a disease-associated allele. Their first interpretation step is to identify how **plasmid vector** and **transformation** work together in the same pathway.
      
      - They classify the primary signal using **plasmid vector**: carries foreign DNA into host cells for replication.
      - They trace the downstream response using **transformation**: uptake of external DNA by a bacterial cell.
      - They then compare outcomes with **CRISPR-Cas9** and **gRNA** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **plasmid vector**
      - **transformation**
      - **CRISPR-Cas9**
      - **gRNA**
      `
    },
    {
      id: 'bio-biotechnology-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For CRISPR & Gene Editing, what best describes plasmid vector?',
            options: [
              'uptake of external DNA by a bacterial cell',
              'base-pairs with target DNA to position Cas9',
              'uses guide RNA to direct sequence-specific DNA cutting',
              'carries foreign DNA into host cells for replication'
            ],
            correctAnswer: 3,
            explanation: 'plasmid vector is best matched with: carries foreign DNA into host cells for replication.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of transformation?',
            options: [
              'banding profile used for identity comparison',
              'carries foreign DNA into host cells for replication',
              'uptake of external DNA by a bacterial cell',
              'uses guide RNA to direct sequence-specific DNA cutting'
            ],
            correctAnswer: 2,
            explanation: 'transformation is best matched with: uptake of external DNA by a bacterial cell.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: CRISPR & Gene Editing
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → plasmid vector
      - **Immediate processing** → transformation
      - **System-level consequence** → CRISPR-Cas9
      - **Measured readout** → gRNA
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | plasmid vector | carries foreign DNA into host cells for replication | Early shift in the primary variable |
      | transformation | uptake of external DNA by a bacterial cell | Mid-pathway change in process rate |
      | CRISPR-Cas9 | uses guide RNA to direct sequence-specific DNA cutting | Downstream phenotype trend |
      | gRNA | base-pairs with target DNA to position Cas9 | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-biotechnology-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **carries foreign DNA into host cells for replication**

      2) Term for this definition: **uptake of external DNA by a bacterial cell**

      3) Term for this definition: **uses guide RNA to direct sequence-specific DNA cutting**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['plasmid vector', 'transformation', 'CRISPR-Cas9'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'carries foreign DNA into host cells for replication\'.',
        hint2: 'Second blank points to transformation; think about the role \'uptake of external DNA by a bacterial cell\'.',
        hint3: 'Third blank is CRISPR-Cas9; connect it to \'uses guide RNA to direct sequence-specific DNA cutting\'.',
        explanation: 'Correct set: plasmid vector, transformation, CRISPR-Cas9. These three terms define the core mechanism chain for CRISPR & Gene Editing.'
      }
    },
    {
      id: 'bio-biotechnology-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'plasmid vector',
            options: ['carries foreign DNA into host cells for replication', 'base-pairs with target DNA to position Cas9', 'uses guide RNA to direct sequence-specific DNA cutting', 'uptake of external DNA by a bacterial cell']
          },
          {
            label: 'transformation',
            options: ['banding profile used for identity comparison', 'base-pairs with target DNA to position Cas9', 'uptake of external DNA by a bacterial cell', 'uses guide RNA to direct sequence-specific DNA cutting']
          },
          {
            label: 'CRISPR-Cas9',
            options: ['cuts DNA at a specific recognition sequence', 'banding profile used for identity comparison', 'base-pairs with target DNA to position Cas9', 'uses guide RNA to direct sequence-specific DNA cutting']
          }
        ],
        correctAnswers: ['carries foreign DNA into host cells for replication', 'uptake of external DNA by a bacterial cell', 'uses guide RNA to direct sequence-specific DNA cutting'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'plasmid vector, transformation, and CRISPR-Cas9 should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-biotechnology-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because plasmid vector carries foreign DNA into host cells for replication, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - A brighter gel band does not always mean a larger fragment; it often indicates more DNA mass.
      - PCR does not start from nothing; it requires an initial template.
      - CRISPR targeting is specific but can still have off-target effects.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-biotechnology-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In CRISPR correction of a disease-associated allele, the observed pattern is: base-pairs with target DNA to position Cas9. What term should anchor the explanation?',
            options: [
              'gRNA',
              'plasmid vector',
              'CRISPR-Cas9',
              'transformation'
            ],
            correctAnswer: 0,
            explanation: 'Use gRNA because it directly maps to the described biological pattern: base-pairs with target DNA to position Cas9.'
          },
          {
            question: 'In an AP-style free-response about crispr & gene editing, the observed pattern is: banding profile used for identity comparison. What term should anchor the explanation?',
            options: [
              'gRNA',
              'CRISPR-Cas9',
              'DNA fingerprint',
              'restriction enzyme'
            ],
            correctAnswer: 2,
            explanation: 'Use DNA fingerprint because it directly maps to the described biological pattern: banding profile used for identity comparison.'
          }
        ]
      }
    }
  ]
};
