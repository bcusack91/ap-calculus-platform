export const bioDnaReplicationPart4Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'bio-dna-replication-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## DNA Replication: Leading vs Lagging Strand
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through Okazaki fragment synthesis and ligation.
      
      ### Worked biological example
      A student team investigates Okazaki fragment synthesis and ligation. Their first interpretation step is to identify how **DNA polymerase** and **leading strand** work together in the same pathway.
      
      - They classify the primary signal using **DNA polymerase**: extends DNA strands in the 5' to 3' direction.
      - They trace the downstream response using **leading strand**: synthesized continuously toward the replication fork.
      - They then compare outcomes with **lagging strand** and **DNA ligase** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **DNA polymerase**
      - **leading strand**
      - **lagging strand**
      - **DNA ligase**
      `
    },
    {
      id: 'bio-dna-replication-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Leading vs Lagging Strand, what best describes DNA polymerase?',
            options: [
              'extends DNA strands in the 5\' to 3\' direction',
              'synthesized discontinuously as Okazaki fragments',
              'synthesized continuously toward the replication fork',
              'joins adjacent DNA fragments after primer replacement'
            ],
            correctAnswer: 0,
            explanation: 'DNA polymerase is best matched with: extends DNA strands in the 5\' to 3\' direction.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of leading strand?',
            options: [
              'synthesized continuously toward the replication fork',
              'polymerase correction of misincorporated nucleotides',
              'extends DNA strands in the 5\' to 3\' direction',
              'synthesized discontinuously as Okazaki fragments'
            ],
            correctAnswer: 0,
            explanation: 'leading strand is best matched with: synthesized continuously toward the replication fork.'
          }
        ]
      }
    },
    {
      id: 'bio-dna-replication-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Leading vs Lagging Strand
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → DNA polymerase
      - **Immediate processing** → leading strand
      - **System-level consequence** → lagging strand
      - **Measured readout** → DNA ligase
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | DNA polymerase | extends DNA strands in the 5' to 3' direction | Early shift in the primary variable |
      | leading strand | synthesized continuously toward the replication fork | Mid-pathway change in process rate |
      | lagging strand | synthesized discontinuously as Okazaki fragments | Downstream phenotype trend |
      | DNA ligase | joins adjacent DNA fragments after primer replacement | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-dna-replication-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **extends DNA strands in the 5' to 3' direction**
      2) Term for this definition: **synthesized continuously toward the replication fork**
      3) Term for this definition: **synthesized discontinuously as Okazaki fragments**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['DNA polymerase', 'leading strand', 'lagging strand'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'extends DNA strands in the 5\' to 3\' direction\'.',
        hint2: 'Second blank points to leading strand; think about the role \'synthesized continuously toward the replication fork\'.',
        hint3: 'Third blank is lagging strand; connect it to \'synthesized discontinuously as Okazaki fragments\'.',
        explanation: 'Correct set: DNA polymerase, leading strand, lagging strand. These three terms define the core mechanism chain for Leading vs Lagging Strand.'
      }
    },
    {
      id: 'bio-dna-replication-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA polymerase',
            options: ['synthesized continuously toward the replication fork', 'joins adjacent DNA fragments after primer replacement', 'extends DNA strands in the 5\' to 3\' direction', 'synthesized discontinuously as Okazaki fragments']
          },
          {
            label: 'leading strand',
            options: ['joins adjacent DNA fragments after primer replacement', 'synthesized continuously toward the replication fork', 'synthesized discontinuously as Okazaki fragments', 'polymerase correction of misincorporated nucleotides']
          },
          {
            label: 'lagging strand',
            options: ['polymerase correction of misincorporated nucleotides', 'post-replication pathway correcting base-pair errors', 'synthesized discontinuously as Okazaki fragments', 'joins adjacent DNA fragments after primer replacement']
          }
        ],
        correctAnswers: ['extends DNA strands in the 5\' to 3\' direction', 'synthesized continuously toward the replication fork', 'synthesized discontinuously as Okazaki fragments'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'DNA polymerase, leading strand, and lagging strand should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-dna-replication-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because DNA polymerase extends DNA strands in the 5' to 3' direction, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Primers are required because DNA polymerase cannot start de novo.
      - Replication is bidirectional from origins, not one-direction copying of entire chromosomes.
      - Leading and lagging refer to synthesis pattern, not strand importance.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-dna-replication-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In Okazaki fragment synthesis and ligation, the observed pattern is: joins adjacent DNA fragments after primer replacement. What term should anchor the explanation?',
            options: [
              'leading strand',
              'lagging strand',
              'DNA polymerase',
              'DNA ligase'
            ],
            correctAnswer: 3,
            explanation: 'Use DNA ligase because it directly maps to the described biological pattern: joins adjacent DNA fragments after primer replacement.'
          },
          {
            question: 'In an AP-style free-response about leading vs lagging strand, the observed pattern is: polymerase correction of misincorporated nucleotides. What term should anchor the explanation?',
            options: [
              'proofreading',
              'DNA ligase',
              'mismatch repair',
              'lagging strand'
            ],
            correctAnswer: 0,
            explanation: 'Use proofreading because it directly maps to the described biological pattern: polymerase correction of misincorporated nucleotides.'
          }
        ]
      }
    }
  ]
};
