export const bioBiotechPart4Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Biotechnology: Gene Cloning
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through bacterial transformation with a recombinant plasmid.
      
      ### Worked biological example
      A student team investigates bacterial transformation with a recombinant plasmid. Their first interpretation step is to identify how **PCR** and **plasmid vector** work together in the same pathway.
      
      - They classify the primary signal using **PCR**: amplifies a target DNA region through thermal cycling.
      - They trace the downstream response using **plasmid vector**: carries foreign DNA into host cells for replication.
      - They then compare outcomes with **transformation** and **CRISPR-Cas9** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **PCR**
      - **plasmid vector**
      - **transformation**
      - **CRISPR-Cas9**
      `
    },
    {
      id: 'bio-biotechnology-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Gene Cloning, what best describes PCR?',
            options: [
              'uses guide RNA to direct sequence-specific DNA cutting',
              'carries foreign DNA into host cells for replication',
              'uptake of external DNA by a bacterial cell',
              'amplifies a target DNA region through thermal cycling'
            ],
            correctAnswer: 3,
            explanation: 'PCR is best matched with: amplifies a target DNA region through thermal cycling.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of plasmid vector?',
            options: [
              'amplifies a target DNA region through thermal cycling',
              'base-pairs with target DNA to position Cas9',
              'carries foreign DNA into host cells for replication',
              'uptake of external DNA by a bacterial cell'
            ],
            correctAnswer: 2,
            explanation: 'plasmid vector is best matched with: carries foreign DNA into host cells for replication.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Gene Cloning
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → PCR
      - **Immediate processing** → plasmid vector
      - **System-level consequence** → transformation
      - **Measured readout** → CRISPR-Cas9
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | PCR | amplifies a target DNA region through thermal cycling | Early shift in the primary variable |
      | plasmid vector | carries foreign DNA into host cells for replication | Mid-pathway change in process rate |
      | transformation | uptake of external DNA by a bacterial cell | Downstream phenotype trend |
      | CRISPR-Cas9 | uses guide RNA to direct sequence-specific DNA cutting | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-biotechnology-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **amplifies a target DNA region through thermal cycling**

      2) Term for this definition: **carries foreign DNA into host cells for replication**

      3) Term for this definition: **uptake of external DNA by a bacterial cell**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['PCR', 'plasmid vector', 'transformation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'amplifies a target DNA region through thermal cycling\'.',
        hint2: 'Second blank points to plasmid vector; think about the role \'carries foreign DNA into host cells for replication\'.',
        hint3: 'Third blank is transformation; connect it to \'uptake of external DNA by a bacterial cell\'.',
        explanation: 'Correct set: PCR, plasmid vector, transformation. These three terms define the core mechanism chain for Gene Cloning.'
      }
    },
    {
      id: 'bio-biotechnology-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'PCR',
            options: ['amplifies a target DNA region through thermal cycling', 'carries foreign DNA into host cells for replication', 'uptake of external DNA by a bacterial cell', 'uses guide RNA to direct sequence-specific DNA cutting']
          },
          {
            label: 'plasmid vector',
            options: ['uses guide RNA to direct sequence-specific DNA cutting', 'carries foreign DNA into host cells for replication', 'uptake of external DNA by a bacterial cell', 'base-pairs with target DNA to position Cas9']
          },
          {
            label: 'transformation',
            options: ['banding profile used for identity comparison', 'uptake of external DNA by a bacterial cell', 'uses guide RNA to direct sequence-specific DNA cutting', 'base-pairs with target DNA to position Cas9']
          }
        ],
        correctAnswers: ['amplifies a target DNA region through thermal cycling', 'carries foreign DNA into host cells for replication', 'uptake of external DNA by a bacterial cell'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'PCR, plasmid vector, and transformation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-biotechnology-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because PCR amplifies a target DNA region through thermal cycling, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - A plasmid alone does not guarantee expression without proper regulatory elements.
      - A brighter gel band does not always mean a larger fragment; it often indicates more DNA mass.
      - PCR does not start from nothing; it requires an initial template.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-biotechnology-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In bacterial transformation with a recombinant plasmid, the observed pattern is: uses guide RNA to direct sequence-specific DNA cutting. What term should anchor the explanation?',
            options: [
              'PCR',
              'plasmid vector',
              'transformation',
              'CRISPR-Cas9'
            ],
            correctAnswer: 3,
            explanation: 'Use CRISPR-Cas9 because it directly maps to the described biological pattern: uses guide RNA to direct sequence-specific DNA cutting.'
          },
          {
            question: 'In an AP-style free-response about gene cloning, the observed pattern is: base-pairs with target DNA to position Cas9. What term should anchor the explanation?',
            options: [
              'CRISPR-Cas9',
              'gRNA',
              'DNA fingerprint',
              'transformation'
            ],
            correctAnswer: 1,
            explanation: 'Use gRNA because it directly maps to the described biological pattern: base-pairs with target DNA to position Cas9.'
          }
        ]
      }
    }
  ]
};
