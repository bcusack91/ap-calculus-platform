export const bioDnaReplicationPart1Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'bio-dna-replication-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## DNA Replication: DNA Structure
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through replication fork progression in rapidly dividing cells.
      
      ### Worked biological example
      A student team investigates replication fork progression in rapidly dividing cells. Their first interpretation step is to identify how **semiconservative replication** and **helicase** work together in the same pathway.
      
      - They classify the primary signal using **semiconservative replication**: each daughter DNA molecule retains one parental strand.
      - They trace the downstream response using **helicase**: unwinds the DNA double helix at the replication fork.
      - They then compare outcomes with **primase** and **DNA polymerase** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **semiconservative replication**
      - **helicase**
      - **primase**
      - **DNA polymerase**
      `
    },
    {
      id: 'bio-dna-replication-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For DNA Structure, what best describes semiconservative replication?',
            options: [
              'unwinds the DNA double helix at the replication fork',
              'each daughter DNA molecule retains one parental strand',
              'extends DNA strands in the 5\' to 3\' direction',
              'synthesizes short RNA primers for DNA polymerase'
            ],
            correctAnswer: 1,
            explanation: 'semiconservative replication is best matched with: each daughter DNA molecule retains one parental strand.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of helicase?',
            options: [
              'synthesized continuously toward the replication fork',
              'unwinds the DNA double helix at the replication fork',
              'synthesizes short RNA primers for DNA polymerase',
              'each daughter DNA molecule retains one parental strand'
            ],
            correctAnswer: 1,
            explanation: 'helicase is best matched with: unwinds the DNA double helix at the replication fork.'
          }
        ]
      }
    },
    {
      id: 'bio-dna-replication-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: DNA Structure
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → semiconservative replication
      - **Immediate processing** → helicase
      - **System-level consequence** → primase
      - **Measured readout** → DNA polymerase
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | semiconservative replication | each daughter DNA molecule retains one parental strand | Early shift in the primary variable |
      | helicase | unwinds the DNA double helix at the replication fork | Mid-pathway change in process rate |
      | primase | synthesizes short RNA primers for DNA polymerase | Downstream phenotype trend |
      | DNA polymerase | extends DNA strands in the 5' to 3' direction | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-dna-replication-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **each daughter DNA molecule retains one parental strand**
      2) Term for this definition: **unwinds the DNA double helix at the replication fork**
      3) Term for this definition: **synthesizes short RNA primers for DNA polymerase**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['semiconservative replication', 'helicase', 'primase'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'each daughter DNA molecule retains one parental strand\'.',
        hint2: 'Second blank points to helicase; think about the role \'unwinds the DNA double helix at the replication fork\'.',
        hint3: 'Third blank is primase; connect it to \'synthesizes short RNA primers for DNA polymerase\'.',
        explanation: 'Correct set: semiconservative replication, helicase, primase. These three terms define the core mechanism chain for DNA Structure.'
      }
    },
    {
      id: 'bio-dna-replication-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'semiconservative replication',
            options: ['each daughter DNA molecule retains one parental strand', 'synthesizes short RNA primers for DNA polymerase', 'unwinds the DNA double helix at the replication fork', 'extends DNA strands in the 5\' to 3\' direction']
          },
          {
            label: 'helicase',
            options: ['synthesized continuously toward the replication fork', 'unwinds the DNA double helix at the replication fork', 'synthesizes short RNA primers for DNA polymerase', 'extends DNA strands in the 5\' to 3\' direction']
          },
          {
            label: 'primase',
            options: ['synthesizes short RNA primers for DNA polymerase', 'extends DNA strands in the 5\' to 3\' direction', 'synthesized continuously toward the replication fork', 'synthesized discontinuously as Okazaki fragments']
          }
        ],
        correctAnswers: ['each daughter DNA molecule retains one parental strand', 'unwinds the DNA double helix at the replication fork', 'synthesizes short RNA primers for DNA polymerase'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'semiconservative replication, helicase, and primase should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-dna-replication-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because semiconservative replication each daughter DNA molecule retains one parental strand, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Replication is bidirectional from origins, not one-direction copying of entire chromosomes.
      - Leading and lagging refer to synthesis pattern, not strand importance.
      - Proofreading reduces errors but does not eliminate all mutations.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-dna-replication-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In replication fork progression in rapidly dividing cells, the observed pattern is: extends DNA strands in the 5\' to 3\' direction. What term should anchor the explanation?',
            options: [
              'helicase',
              'primase',
              'DNA polymerase',
              'semiconservative replication'
            ],
            correctAnswer: 2,
            explanation: 'Use DNA polymerase because it directly maps to the described biological pattern: extends DNA strands in the 5\' to 3\' direction.'
          },
          {
            question: 'In an AP-style free-response about dna structure, the observed pattern is: synthesized continuously toward the replication fork. What term should anchor the explanation?',
            options: [
              'leading strand',
              'primase',
              'DNA polymerase',
              'lagging strand'
            ],
            correctAnswer: 0,
            explanation: 'Use leading strand because it directly maps to the described biological pattern: synthesized continuously toward the replication fork.'
          }
        ]
      }
    }
  ]
};
