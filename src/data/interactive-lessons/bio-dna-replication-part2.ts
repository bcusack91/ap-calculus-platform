export const bioDnaReplicationPart2Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'bio-dna-replication-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## DNA Replication: Semiconservative Replication
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through experimental evidence supporting semiconservative models.
      
      ### Worked biological example
      A student team investigates experimental evidence supporting semiconservative models. Their first interpretation step is to identify how **helicase** and **primase** work together in the same pathway.
      
      - They classify the primary signal using **helicase**: unwinds the DNA double helix at the replication fork.
      - They trace the downstream response using **primase**: synthesizes short RNA primers for DNA polymerase.
      - They then compare outcomes with **DNA polymerase** and **leading strand** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **helicase**
      - **primase**
      - **DNA polymerase**
      - **leading strand**
      `
    },
    {
      id: 'bio-dna-replication-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Semiconservative Replication, what best describes helicase?',
            options: [
              'unwinds the DNA double helix at the replication fork',
              'synthesized continuously toward the replication fork',
              'synthesizes short RNA primers for DNA polymerase',
              'extends DNA strands in the 5\' to 3\' direction'
            ],
            correctAnswer: 0,
            explanation: 'helicase is best matched with: unwinds the DNA double helix at the replication fork.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of primase?',
            options: [
              'synthesizes short RNA primers for DNA polymerase',
              'extends DNA strands in the 5\' to 3\' direction',
              'unwinds the DNA double helix at the replication fork',
              'synthesized discontinuously as Okazaki fragments'
            ],
            correctAnswer: 0,
            explanation: 'primase is best matched with: synthesizes short RNA primers for DNA polymerase.'
          }
        ]
      }
    },
    {
      id: 'bio-dna-replication-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Semiconservative Replication
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → helicase
      - **Immediate processing** → primase
      - **System-level consequence** → DNA polymerase
      - **Measured readout** → leading strand
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | helicase | unwinds the DNA double helix at the replication fork | Early shift in the primary variable |
      | primase | synthesizes short RNA primers for DNA polymerase | Mid-pathway change in process rate |
      | DNA polymerase | extends DNA strands in the 5' to 3' direction | Downstream phenotype trend |
      | leading strand | synthesized continuously toward the replication fork | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-dna-replication-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **unwinds the DNA double helix at the replication fork**
      2) Term for this definition: **synthesizes short RNA primers for DNA polymerase**
      3) Term for this definition: **extends DNA strands in the 5' to 3' direction**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['helicase', 'primase', 'DNA polymerase'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'unwinds the DNA double helix at the replication fork\'.',
        hint2: 'Second blank points to primase; think about the role \'synthesizes short RNA primers for DNA polymerase\'.',
        hint3: 'Third blank is DNA polymerase; connect it to \'extends DNA strands in the 5\' to 3\' direction\'.',
        explanation: 'Correct set: helicase, primase, DNA polymerase. These three terms define the core mechanism chain for Semiconservative Replication.'
      }
    },
    {
      id: 'bio-dna-replication-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'helicase',
            options: ['synthesized continuously toward the replication fork', 'extends DNA strands in the 5\' to 3\' direction', 'unwinds the DNA double helix at the replication fork', 'synthesizes short RNA primers for DNA polymerase']
          },
          {
            label: 'primase',
            options: ['extends DNA strands in the 5\' to 3\' direction', 'synthesized discontinuously as Okazaki fragments', 'synthesized continuously toward the replication fork', 'synthesizes short RNA primers for DNA polymerase']
          },
          {
            label: 'DNA polymerase',
            options: ['synthesized discontinuously as Okazaki fragments', 'extends DNA strands in the 5\' to 3\' direction', 'joins adjacent DNA fragments after primer replacement', 'synthesized continuously toward the replication fork']
          }
        ],
        correctAnswers: ['unwinds the DNA double helix at the replication fork', 'synthesizes short RNA primers for DNA polymerase', 'extends DNA strands in the 5\' to 3\' direction'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'helicase, primase, and DNA polymerase should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-dna-replication-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because helicase unwinds the DNA double helix at the replication fork, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Leading and lagging refer to synthesis pattern, not strand importance.
      - Proofreading reduces errors but does not eliminate all mutations.
      - Primers are required because DNA polymerase cannot start de novo.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-dna-replication-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In experimental evidence supporting semiconservative models, the observed pattern is: synthesized continuously toward the replication fork. What term should anchor the explanation?',
            options: [
              'primase',
              'helicase',
              'DNA polymerase',
              'leading strand'
            ],
            correctAnswer: 3,
            explanation: 'Use leading strand because it directly maps to the described biological pattern: synthesized continuously toward the replication fork.'
          },
          {
            question: 'In an AP-style free-response about semiconservative replication, the observed pattern is: synthesized discontinuously as Okazaki fragments. What term should anchor the explanation?',
            options: [
              'DNA ligase',
              'DNA polymerase',
              'leading strand',
              'lagging strand'
            ],
            correctAnswer: 3,
            explanation: 'Use lagging strand because it directly maps to the described biological pattern: synthesized discontinuously as Okazaki fragments.'
          }
        ]
      }
    }
  ]
};
