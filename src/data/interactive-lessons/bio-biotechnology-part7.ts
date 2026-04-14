export const bioBiotechPart7Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Biotechnology: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through integrating biotech methods in AP free-response prompts.
      
      ### Worked biological example
      A student team investigates integrating biotech methods in AP free-response prompts. Their first interpretation step is to identify how **CRISPR-Cas9** and **gRNA** work together in the same pathway.
      
      - They classify the primary signal using **CRISPR-Cas9**: uses guide RNA to direct sequence-specific DNA cutting.
      - They trace the downstream response using **gRNA**: base-pairs with target DNA to position Cas9.
      - They then compare outcomes with **DNA fingerprint** and **restriction enzyme** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **CRISPR-Cas9**
      - **gRNA**
      - **DNA fingerprint**
      - **restriction enzyme**
      `
    },
    {
      id: 'bio-biotechnology-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes CRISPR-Cas9?',
            options: [
              'uses guide RNA to direct sequence-specific DNA cutting',
              'banding profile used for identity comparison',
              'base-pairs with target DNA to position Cas9',
              'cuts DNA at a specific recognition sequence'
            ],
            correctAnswer: 0,
            explanation: 'CRISPR-Cas9 is best matched with: uses guide RNA to direct sequence-specific DNA cutting.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of gRNA?',
            options: [
              'base-pairs with target DNA to position Cas9',
              'joins DNA fragments by sealing phosphodiester bonds',
              'uses guide RNA to direct sequence-specific DNA cutting',
              'banding profile used for identity comparison'
            ],
            correctAnswer: 0,
            explanation: 'gRNA is best matched with: base-pairs with target DNA to position Cas9.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → CRISPR-Cas9
      - **Immediate processing** → gRNA
      - **System-level consequence** → DNA fingerprint
      - **Measured readout** → restriction enzyme
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | CRISPR-Cas9 | uses guide RNA to direct sequence-specific DNA cutting | Early shift in the primary variable |
      | gRNA | base-pairs with target DNA to position Cas9 | Mid-pathway change in process rate |
      | DNA fingerprint | banding profile used for identity comparison | Downstream phenotype trend |
      | restriction enzyme | cuts DNA at a specific recognition sequence | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-biotechnology-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **uses guide RNA to direct sequence-specific DNA cutting**

      2) Term for this definition: **base-pairs with target DNA to position Cas9**

      3) Term for this definition: **banding profile used for identity comparison**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['CRISPR-Cas9', 'gRNA', 'DNA fingerprint'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'uses guide RNA to direct sequence-specific DNA cutting\'.',
        hint2: 'Second blank points to gRNA; think about the role \'base-pairs with target DNA to position Cas9\'.',
        hint3: 'Third blank is DNA fingerprint; connect it to \'banding profile used for identity comparison\'.',
        explanation: 'Correct set: CRISPR-Cas9, gRNA, DNA fingerprint. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-biotechnology-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'CRISPR-Cas9',
            options: ['base-pairs with target DNA to position Cas9', 'cuts DNA at a specific recognition sequence', 'uses guide RNA to direct sequence-specific DNA cutting', 'banding profile used for identity comparison']
          },
          {
            label: 'gRNA',
            options: ['cuts DNA at a specific recognition sequence', 'banding profile used for identity comparison', 'base-pairs with target DNA to position Cas9', 'joins DNA fragments by sealing phosphodiester bonds']
          },
          {
            label: 'DNA fingerprint',
            options: ['separates DNA fragments by size through a matrix', 'cuts DNA at a specific recognition sequence', 'joins DNA fragments by sealing phosphodiester bonds', 'banding profile used for identity comparison']
          }
        ],
        correctAnswers: ['uses guide RNA to direct sequence-specific DNA cutting', 'base-pairs with target DNA to position Cas9', 'banding profile used for identity comparison'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'CRISPR-Cas9, gRNA, and DNA fingerprint should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-biotechnology-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because CRISPR-Cas9 uses guide RNA to direct sequence-specific DNA cutting, we expect ...".
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
      id: 'bio-biotechnology-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In integrating biotech methods in AP free-response prompts, the observed pattern is: cuts DNA at a specific recognition sequence. What term should anchor the explanation?',
            options: [
              'gRNA',
              'restriction enzyme',
              'DNA fingerprint',
              'CRISPR-Cas9'
            ],
            correctAnswer: 1,
            explanation: 'Use restriction enzyme because it directly maps to the described biological pattern: cuts DNA at a specific recognition sequence.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: joins DNA fragments by sealing phosphodiester bonds. What term should anchor the explanation?',
            options: [
              'restriction enzyme',
              'DNA fingerprint',
              'DNA ligase',
              'gel electrophoresis'
            ],
            correctAnswer: 2,
            explanation: 'Use DNA ligase because it directly maps to the described biological pattern: joins DNA fragments by sealing phosphodiester bonds.'
          }
        ]
      }
    }
  ]
};
