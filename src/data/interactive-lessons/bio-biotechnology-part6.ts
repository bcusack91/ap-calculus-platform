export const bioBiotechPart6Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Biotechnology: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through interpreting mixed gel and sequencing readouts.
      
      ### Worked biological example
      A student team investigates interpreting mixed gel and sequencing readouts. Their first interpretation step is to identify how **transformation** and **CRISPR-Cas9** work together in the same pathway.
      
      - They classify the primary signal using **transformation**: uptake of external DNA by a bacterial cell.
      - They trace the downstream response using **CRISPR-Cas9**: uses guide RNA to direct sequence-specific DNA cutting.
      - They then compare outcomes with **gRNA** and **DNA fingerprint** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **transformation**
      - **CRISPR-Cas9**
      - **gRNA**
      - **DNA fingerprint**
      `
    },
    {
      id: 'bio-biotechnology-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes transformation?',
            options: [
              'uptake of external DNA by a bacterial cell',
              'base-pairs with target DNA to position Cas9',
              'uses guide RNA to direct sequence-specific DNA cutting',
              'banding profile used for identity comparison'
            ],
            correctAnswer: 0,
            explanation: 'transformation is best matched with: uptake of external DNA by a bacterial cell.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of CRISPR-Cas9?',
            options: [
              'uses guide RNA to direct sequence-specific DNA cutting',
              'base-pairs with target DNA to position Cas9',
              'uptake of external DNA by a bacterial cell',
              'cuts DNA at a specific recognition sequence'
            ],
            correctAnswer: 0,
            explanation: 'CRISPR-Cas9 is best matched with: uses guide RNA to direct sequence-specific DNA cutting.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → transformation
      - **Immediate processing** → CRISPR-Cas9
      - **System-level consequence** → gRNA
      - **Measured readout** → DNA fingerprint
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | transformation | uptake of external DNA by a bacterial cell | Early shift in the primary variable |
      | CRISPR-Cas9 | uses guide RNA to direct sequence-specific DNA cutting | Mid-pathway change in process rate |
      | gRNA | base-pairs with target DNA to position Cas9 | Downstream phenotype trend |
      | DNA fingerprint | banding profile used for identity comparison | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-biotechnology-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **uptake of external DNA by a bacterial cell**

      2) Term for this definition: **uses guide RNA to direct sequence-specific DNA cutting**

      3) Term for this definition: **base-pairs with target DNA to position Cas9**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['transformation', 'CRISPR-Cas9', 'gRNA'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'uptake of external DNA by a bacterial cell\'.',
        hint2: 'Second blank points to CRISPR-Cas9; think about the role \'uses guide RNA to direct sequence-specific DNA cutting\'.',
        hint3: 'Third blank is gRNA; connect it to \'base-pairs with target DNA to position Cas9\'.',
        explanation: 'Correct set: transformation, CRISPR-Cas9, gRNA. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-biotechnology-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'transformation',
            options: ['uptake of external DNA by a bacterial cell', 'banding profile used for identity comparison', 'uses guide RNA to direct sequence-specific DNA cutting', 'base-pairs with target DNA to position Cas9']
          },
          {
            label: 'CRISPR-Cas9',
            options: ['banding profile used for identity comparison', 'base-pairs with target DNA to position Cas9', 'uses guide RNA to direct sequence-specific DNA cutting', 'cuts DNA at a specific recognition sequence']
          },
          {
            label: 'gRNA',
            options: ['banding profile used for identity comparison', 'joins DNA fragments by sealing phosphodiester bonds', 'cuts DNA at a specific recognition sequence', 'base-pairs with target DNA to position Cas9']
          }
        ],
        correctAnswers: ['uptake of external DNA by a bacterial cell', 'uses guide RNA to direct sequence-specific DNA cutting', 'base-pairs with target DNA to position Cas9'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'transformation, CRISPR-Cas9, and gRNA should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-biotechnology-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because transformation uptake of external DNA by a bacterial cell, we expect ...".
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
      id: 'bio-biotechnology-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In interpreting mixed gel and sequencing readouts, the observed pattern is: banding profile used for identity comparison. What term should anchor the explanation?',
            options: [
              'transformation',
              'CRISPR-Cas9',
              'DNA fingerprint',
              'gRNA'
            ],
            correctAnswer: 2,
            explanation: 'Use DNA fingerprint because it directly maps to the described biological pattern: banding profile used for identity comparison.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: cuts DNA at a specific recognition sequence. What term should anchor the explanation?',
            options: [
              'DNA fingerprint',
              'gRNA',
              'DNA ligase',
              'restriction enzyme'
            ],
            correctAnswer: 3,
            explanation: 'Use restriction enzyme because it directly maps to the described biological pattern: cuts DNA at a specific recognition sequence.'
          }
        ]
      }
    }
  ]
};
