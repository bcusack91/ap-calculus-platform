export const bioBiotechPart2Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Biotechnology: Gel Electrophoresis
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through forensic DNA profiling from short tandem repeats.
      
      ### Worked biological example
      A student team investigates forensic DNA profiling from short tandem repeats. Their first interpretation step is to identify how **DNA ligase** and **gel electrophoresis** work together in the same pathway.
      
      - They classify the primary signal using **DNA ligase**: joins DNA fragments by sealing phosphodiester bonds.
      - They trace the downstream response using **gel electrophoresis**: separates DNA fragments by size through a matrix.
      - They then compare outcomes with **PCR** and **plasmid vector** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **DNA ligase**
      - **gel electrophoresis**
      - **PCR**
      - **plasmid vector**
      `
    },
    {
      id: 'bio-biotechnology-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Gel Electrophoresis, what best describes DNA ligase?',
            options: [
              'amplifies a target DNA region through thermal cycling',
              'joins DNA fragments by sealing phosphodiester bonds',
              'separates DNA fragments by size through a matrix',
              'carries foreign DNA into host cells for replication'
            ],
            correctAnswer: 1,
            explanation: 'DNA ligase is best matched with: joins DNA fragments by sealing phosphodiester bonds.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of gel electrophoresis?',
            options: [
              'uptake of external DNA by a bacterial cell',
              'separates DNA fragments by size through a matrix',
              'joins DNA fragments by sealing phosphodiester bonds',
              'amplifies a target DNA region through thermal cycling'
            ],
            correctAnswer: 1,
            explanation: 'gel electrophoresis is best matched with: separates DNA fragments by size through a matrix.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Gel Electrophoresis
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → DNA ligase
      - **Immediate processing** → gel electrophoresis
      - **System-level consequence** → PCR
      - **Measured readout** → plasmid vector
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | DNA ligase | joins DNA fragments by sealing phosphodiester bonds | Early shift in the primary variable |
      | gel electrophoresis | separates DNA fragments by size through a matrix | Mid-pathway change in process rate |
      | PCR | amplifies a target DNA region through thermal cycling | Downstream phenotype trend |
      | plasmid vector | carries foreign DNA into host cells for replication | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-biotechnology-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **joins DNA fragments by sealing phosphodiester bonds**
      2) Term for this definition: **separates DNA fragments by size through a matrix**
      3) Term for this definition: **amplifies a target DNA region through thermal cycling**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['DNA ligase', 'gel electrophoresis', 'PCR'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'joins DNA fragments by sealing phosphodiester bonds\'.',
        hint2: 'Second blank points to gel electrophoresis; think about the role \'separates DNA fragments by size through a matrix\'.',
        hint3: 'Third blank is PCR; connect it to \'amplifies a target DNA region through thermal cycling\'.',
        explanation: 'Correct set: DNA ligase, gel electrophoresis, PCR. These three terms define the core mechanism chain for Gel Electrophoresis.'
      }
    },
    {
      id: 'bio-biotechnology-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA ligase',
            options: ['joins DNA fragments by sealing phosphodiester bonds', 'carries foreign DNA into host cells for replication', 'amplifies a target DNA region through thermal cycling', 'separates DNA fragments by size through a matrix']
          },
          {
            label: 'gel electrophoresis',
            options: ['amplifies a target DNA region through thermal cycling', 'uptake of external DNA by a bacterial cell', 'carries foreign DNA into host cells for replication', 'separates DNA fragments by size through a matrix']
          },
          {
            label: 'PCR',
            options: ['uptake of external DNA by a bacterial cell', 'carries foreign DNA into host cells for replication', 'amplifies a target DNA region through thermal cycling', 'uses guide RNA to direct sequence-specific DNA cutting']
          }
        ],
        correctAnswers: ['joins DNA fragments by sealing phosphodiester bonds', 'separates DNA fragments by size through a matrix', 'amplifies a target DNA region through thermal cycling'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'DNA ligase, gel electrophoresis, and PCR should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-biotechnology-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because DNA ligase joins DNA fragments by sealing phosphodiester bonds, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - PCR does not start from nothing; it requires an initial template.
      - CRISPR targeting is specific but can still have off-target effects.
      - A plasmid alone does not guarantee expression without proper regulatory elements.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-biotechnology-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In forensic DNA profiling from short tandem repeats, the observed pattern is: carries foreign DNA into host cells for replication. What term should anchor the explanation?',
            options: [
              'PCR',
              'gel electrophoresis',
              'plasmid vector',
              'DNA ligase'
            ],
            correctAnswer: 2,
            explanation: 'Use plasmid vector because it directly maps to the described biological pattern: carries foreign DNA into host cells for replication.'
          },
          {
            question: 'In an AP-style free-response about gel electrophoresis, the observed pattern is: uptake of external DNA by a bacterial cell. What term should anchor the explanation?',
            options: [
              'plasmid vector',
              'CRISPR-Cas9',
              'PCR',
              'transformation'
            ],
            correctAnswer: 3,
            explanation: 'Use transformation because it directly maps to the described biological pattern: uptake of external DNA by a bacterial cell.'
          }
        ]
      }
    }
  ]
};
