export const bioBiotechPart1Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Biotechnology: Restriction Enzymes
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through a plasmid-based insulin production workflow.
      
      ### Worked biological example
      A student team investigates a plasmid-based insulin production workflow. Their first interpretation step is to identify how **restriction enzyme** and **DNA ligase** work together in the same pathway.
      
      - They classify the primary signal using **restriction enzyme**: cuts DNA at a specific recognition sequence.
      - They trace the downstream response using **DNA ligase**: joins DNA fragments by sealing phosphodiester bonds.
      - They then compare outcomes with **gel electrophoresis** and **PCR** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **restriction enzyme**
      - **DNA ligase**
      - **gel electrophoresis**
      - **PCR**
      `
    },
    {
      id: 'bio-biotechnology-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Restriction Enzymes, what best describes restriction enzyme?',
            options: [
              'separates DNA fragments by size through a matrix',
              'joins DNA fragments by sealing phosphodiester bonds',
              'cuts DNA at a specific recognition sequence',
              'amplifies a target DNA region through thermal cycling'
            ],
            correctAnswer: 2,
            explanation: 'restriction enzyme is best matched with: cuts DNA at a specific recognition sequence.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of DNA ligase?',
            options: [
              'separates DNA fragments by size through a matrix',
              'cuts DNA at a specific recognition sequence',
              'carries foreign DNA into host cells for replication',
              'joins DNA fragments by sealing phosphodiester bonds'
            ],
            correctAnswer: 3,
            explanation: 'DNA ligase is best matched with: joins DNA fragments by sealing phosphodiester bonds.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Restriction Enzymes
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → restriction enzyme
      - **Immediate processing** → DNA ligase
      - **System-level consequence** → gel electrophoresis
      - **Measured readout** → PCR
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | restriction enzyme | cuts DNA at a specific recognition sequence | Early shift in the primary variable |
      | DNA ligase | joins DNA fragments by sealing phosphodiester bonds | Mid-pathway change in process rate |
      | gel electrophoresis | separates DNA fragments by size through a matrix | Downstream phenotype trend |
      | PCR | amplifies a target DNA region through thermal cycling | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-biotechnology-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **cuts DNA at a specific recognition sequence**

      2) Term for this definition: **joins DNA fragments by sealing phosphodiester bonds**

      3) Term for this definition: **separates DNA fragments by size through a matrix**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['restriction enzyme', 'DNA ligase', 'gel electrophoresis'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'cuts DNA at a specific recognition sequence\'.',
        hint2: 'Second blank points to DNA ligase; think about the role \'joins DNA fragments by sealing phosphodiester bonds\'.',
        hint3: 'Third blank is gel electrophoresis; connect it to \'separates DNA fragments by size through a matrix\'.',
        explanation: 'Correct set: restriction enzyme, DNA ligase, gel electrophoresis. These three terms define the core mechanism chain for Restriction Enzymes.'
      }
    },
    {
      id: 'bio-biotechnology-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'restriction enzyme',
            options: ['cuts DNA at a specific recognition sequence', 'separates DNA fragments by size through a matrix', 'amplifies a target DNA region through thermal cycling', 'joins DNA fragments by sealing phosphodiester bonds']
          },
          {
            label: 'DNA ligase',
            options: ['separates DNA fragments by size through a matrix', 'carries foreign DNA into host cells for replication', 'joins DNA fragments by sealing phosphodiester bonds', 'amplifies a target DNA region through thermal cycling']
          },
          {
            label: 'gel electrophoresis',
            options: ['uptake of external DNA by a bacterial cell', 'separates DNA fragments by size through a matrix', 'carries foreign DNA into host cells for replication', 'amplifies a target DNA region through thermal cycling']
          }
        ],
        correctAnswers: ['cuts DNA at a specific recognition sequence', 'joins DNA fragments by sealing phosphodiester bonds', 'separates DNA fragments by size through a matrix'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'restriction enzyme, DNA ligase, and gel electrophoresis should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-biotechnology-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because restriction enzyme cuts DNA at a specific recognition sequence, we expect ...".
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
      id: 'bio-biotechnology-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In a plasmid-based insulin production workflow, the observed pattern is: amplifies a target DNA region through thermal cycling. What term should anchor the explanation?',
            options: [
              'restriction enzyme',
              'DNA ligase',
              'PCR',
              'gel electrophoresis'
            ],
            correctAnswer: 2,
            explanation: 'Use PCR because it directly maps to the described biological pattern: amplifies a target DNA region through thermal cycling.'
          },
          {
            question: 'In an AP-style free-response about restriction enzymes, the observed pattern is: carries foreign DNA into host cells for replication. What term should anchor the explanation?',
            options: [
              'gel electrophoresis',
              'plasmid vector',
              'transformation',
              'PCR'
            ],
            correctAnswer: 1,
            explanation: 'Use plasmid vector because it directly maps to the described biological pattern: carries foreign DNA into host cells for replication.'
          }
        ]
      }
    }
  ]
};
