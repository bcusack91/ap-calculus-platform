export const bioBiotechPart3Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Biotechnology: PCR
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through PCR amplification of a pathogen marker.
      
      ### Worked biological example
      A student team investigates PCR amplification of a pathogen marker. Their first interpretation step is to identify how **gel electrophoresis** and **PCR** work together in the same pathway.
      
      - They classify the primary signal using **gel electrophoresis**: separates DNA fragments by size through a matrix.
      - They trace the downstream response using **PCR**: amplifies a target DNA region through thermal cycling.
      - They then compare outcomes with **plasmid vector** and **transformation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **gel electrophoresis**
      - **PCR**
      - **plasmid vector**
      - **transformation**
      `
    },
    {
      id: 'bio-biotechnology-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For PCR, what best describes gel electrophoresis?',
            options: [
              'separates DNA fragments by size through a matrix',
              'uptake of external DNA by a bacterial cell',
              'amplifies a target DNA region through thermal cycling',
              'carries foreign DNA into host cells for replication'
            ],
            correctAnswer: 0,
            explanation: 'gel electrophoresis is best matched with: separates DNA fragments by size through a matrix.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of PCR?',
            options: [
              'carries foreign DNA into host cells for replication',
              'amplifies a target DNA region through thermal cycling',
              'uses guide RNA to direct sequence-specific DNA cutting',
              'separates DNA fragments by size through a matrix'
            ],
            correctAnswer: 1,
            explanation: 'PCR is best matched with: amplifies a target DNA region through thermal cycling.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: PCR
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → gel electrophoresis
      - **Immediate processing** → PCR
      - **System-level consequence** → plasmid vector
      - **Measured readout** → transformation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | gel electrophoresis | separates DNA fragments by size through a matrix | Early shift in the primary variable |
      | PCR | amplifies a target DNA region through thermal cycling | Mid-pathway change in process rate |
      | plasmid vector | carries foreign DNA into host cells for replication | Downstream phenotype trend |
      | transformation | uptake of external DNA by a bacterial cell | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-biotechnology-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **separates DNA fragments by size through a matrix**
      2) Term for this definition: **amplifies a target DNA region through thermal cycling**
      3) Term for this definition: **carries foreign DNA into host cells for replication**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['gel electrophoresis', 'PCR', 'plasmid vector'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'separates DNA fragments by size through a matrix\'.',
        hint2: 'Second blank points to PCR; think about the role \'amplifies a target DNA region through thermal cycling\'.',
        hint3: 'Third blank is plasmid vector; connect it to \'carries foreign DNA into host cells for replication\'.',
        explanation: 'Correct set: gel electrophoresis, PCR, plasmid vector. These three terms define the core mechanism chain for PCR.'
      }
    },
    {
      id: 'bio-biotechnology-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'gel electrophoresis',
            options: ['separates DNA fragments by size through a matrix', 'carries foreign DNA into host cells for replication', 'uptake of external DNA by a bacterial cell', 'amplifies a target DNA region through thermal cycling']
          },
          {
            label: 'PCR',
            options: ['uptake of external DNA by a bacterial cell', 'uses guide RNA to direct sequence-specific DNA cutting', 'carries foreign DNA into host cells for replication', 'amplifies a target DNA region through thermal cycling']
          },
          {
            label: 'plasmid vector',
            options: ['base-pairs with target DNA to position Cas9', 'carries foreign DNA into host cells for replication', 'uptake of external DNA by a bacterial cell', 'uses guide RNA to direct sequence-specific DNA cutting']
          }
        ],
        correctAnswers: ['separates DNA fragments by size through a matrix', 'amplifies a target DNA region through thermal cycling', 'carries foreign DNA into host cells for replication'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'gel electrophoresis, PCR, and plasmid vector should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-biotechnology-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because gel electrophoresis separates DNA fragments by size through a matrix, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - CRISPR targeting is specific but can still have off-target effects.
      - A plasmid alone does not guarantee expression without proper regulatory elements.
      - A brighter gel band does not always mean a larger fragment; it often indicates more DNA mass.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-biotechnology-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In PCR amplification of a pathogen marker, the observed pattern is: uptake of external DNA by a bacterial cell. What term should anchor the explanation?',
            options: [
              'gel electrophoresis',
              'PCR',
              'plasmid vector',
              'transformation'
            ],
            correctAnswer: 3,
            explanation: 'Use transformation because it directly maps to the described biological pattern: uptake of external DNA by a bacterial cell.'
          },
          {
            question: 'In an AP-style free-response about pcr, the observed pattern is: uses guide RNA to direct sequence-specific DNA cutting. What term should anchor the explanation?',
            options: [
              'plasmid vector',
              'CRISPR-Cas9',
              'gRNA',
              'transformation'
            ],
            correctAnswer: 1,
            explanation: 'Use CRISPR-Cas9 because it directly maps to the described biological pattern: uses guide RNA to direct sequence-specific DNA cutting.'
          }
        ]
      }
    }
  ]
};
