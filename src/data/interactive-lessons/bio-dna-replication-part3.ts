export const bioDnaReplicationPart3Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'bio-dna-replication-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## DNA Replication: Enzymes of Replication
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through enzyme coordination at a moving fork.
      
      ### Worked biological example
      A student team investigates enzyme coordination at a moving fork. Their first interpretation step is to identify how **primase** and **DNA polymerase** work together in the same pathway.
      
      - They classify the primary signal using **primase**: synthesizes short RNA primers for DNA polymerase.
      - They trace the downstream response using **DNA polymerase**: extends DNA strands in the 5' to 3' direction.
      - They then compare outcomes with **leading strand** and **lagging strand** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **primase**
      - **DNA polymerase**
      - **leading strand**
      - **lagging strand**
      `
    },
    {
      id: 'bio-dna-replication-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Enzymes of Replication, what best describes primase?',
            options: [
              'synthesizes short RNA primers for DNA polymerase',
              'synthesized discontinuously as Okazaki fragments',
              'synthesized continuously toward the replication fork',
              'extends DNA strands in the 5\' to 3\' direction'
            ],
            correctAnswer: 0,
            explanation: 'primase is best matched with: synthesizes short RNA primers for DNA polymerase.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of DNA polymerase?',
            options: [
              'synthesizes short RNA primers for DNA polymerase',
              'joins adjacent DNA fragments after primer replacement',
              'synthesized continuously toward the replication fork',
              'extends DNA strands in the 5\' to 3\' direction'
            ],
            correctAnswer: 3,
            explanation: 'DNA polymerase is best matched with: extends DNA strands in the 5\' to 3\' direction.'
          }
        ]
      }
    },
    {
      id: 'bio-dna-replication-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Enzymes of Replication
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → primase
      - **Immediate processing** → DNA polymerase
      - **System-level consequence** → leading strand
      - **Measured readout** → lagging strand
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | primase | synthesizes short RNA primers for DNA polymerase | Early shift in the primary variable |
      | DNA polymerase | extends DNA strands in the 5' to 3' direction | Mid-pathway change in process rate |
      | leading strand | synthesized continuously toward the replication fork | Downstream phenotype trend |
      | lagging strand | synthesized discontinuously as Okazaki fragments | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-dna-replication-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **synthesizes short RNA primers for DNA polymerase**
      2) Term for this definition: **extends DNA strands in the 5' to 3' direction**
      3) Term for this definition: **synthesized continuously toward the replication fork**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['primase', 'DNA polymerase', 'leading strand'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'synthesizes short RNA primers for DNA polymerase\'.',
        hint2: 'Second blank points to DNA polymerase; think about the role \'extends DNA strands in the 5\' to 3\' direction\'.',
        hint3: 'Third blank is leading strand; connect it to \'synthesized continuously toward the replication fork\'.',
        explanation: 'Correct set: primase, DNA polymerase, leading strand. These three terms define the core mechanism chain for Enzymes of Replication.'
      }
    },
    {
      id: 'bio-dna-replication-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'primase',
            options: ['synthesized continuously toward the replication fork', 'extends DNA strands in the 5\' to 3\' direction', 'synthesizes short RNA primers for DNA polymerase', 'synthesized discontinuously as Okazaki fragments']
          },
          {
            label: 'DNA polymerase',
            options: ['extends DNA strands in the 5\' to 3\' direction', 'synthesized continuously toward the replication fork', 'synthesized discontinuously as Okazaki fragments', 'joins adjacent DNA fragments after primer replacement']
          },
          {
            label: 'leading strand',
            options: ['synthesized continuously toward the replication fork', 'joins adjacent DNA fragments after primer replacement', 'polymerase correction of misincorporated nucleotides', 'synthesized discontinuously as Okazaki fragments']
          }
        ],
        correctAnswers: ['synthesizes short RNA primers for DNA polymerase', 'extends DNA strands in the 5\' to 3\' direction', 'synthesized continuously toward the replication fork'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'primase, DNA polymerase, and leading strand should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-dna-replication-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because primase synthesizes short RNA primers for DNA polymerase, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Proofreading reduces errors but does not eliminate all mutations.
      - Primers are required because DNA polymerase cannot start de novo.
      - Replication is bidirectional from origins, not one-direction copying of entire chromosomes.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-dna-replication-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In enzyme coordination at a moving fork, the observed pattern is: synthesized discontinuously as Okazaki fragments. What term should anchor the explanation?',
            options: [
              'DNA polymerase',
              'lagging strand',
              'primase',
              'leading strand'
            ],
            correctAnswer: 1,
            explanation: 'Use lagging strand because it directly maps to the described biological pattern: synthesized discontinuously as Okazaki fragments.'
          },
          {
            question: 'In an AP-style free-response about enzymes of replication, the observed pattern is: joins adjacent DNA fragments after primer replacement. What term should anchor the explanation?',
            options: [
              'leading strand',
              'lagging strand',
              'proofreading',
              'DNA ligase'
            ],
            correctAnswer: 3,
            explanation: 'Use DNA ligase because it directly maps to the described biological pattern: joins adjacent DNA fragments after primer replacement.'
          }
        ]
      }
    }
  ]
};
