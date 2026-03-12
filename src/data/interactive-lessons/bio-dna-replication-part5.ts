export const bioDnaReplicationPart5Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'bio-dna-replication-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## DNA Replication: Proofreading & Repair
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through mismatch correction after polymerase errors.
      
      ### Worked biological example
      A student team investigates mismatch correction after polymerase errors. Their first interpretation step is to identify how **leading strand** and **lagging strand** work together in the same pathway.
      
      - They classify the primary signal using **leading strand**: synthesized continuously toward the replication fork.
      - They trace the downstream response using **lagging strand**: synthesized discontinuously as Okazaki fragments.
      - They then compare outcomes with **DNA ligase** and **proofreading** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **leading strand**
      - **lagging strand**
      - **DNA ligase**
      - **proofreading**
      `
    },
    {
      id: 'bio-dna-replication-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Proofreading & Repair, what best describes leading strand?',
            options: [
              'polymerase correction of misincorporated nucleotides',
              'joins adjacent DNA fragments after primer replacement',
              'synthesized discontinuously as Okazaki fragments',
              'synthesized continuously toward the replication fork'
            ],
            correctAnswer: 3,
            explanation: 'leading strand is best matched with: synthesized continuously toward the replication fork.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of lagging strand?',
            options: [
              'synthesized continuously toward the replication fork',
              'post-replication pathway correcting base-pair errors',
              'joins adjacent DNA fragments after primer replacement',
              'synthesized discontinuously as Okazaki fragments'
            ],
            correctAnswer: 3,
            explanation: 'lagging strand is best matched with: synthesized discontinuously as Okazaki fragments.'
          }
        ]
      }
    },
    {
      id: 'bio-dna-replication-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Proofreading & Repair
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → leading strand
      - **Immediate processing** → lagging strand
      - **System-level consequence** → DNA ligase
      - **Measured readout** → proofreading
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | leading strand | synthesized continuously toward the replication fork | Early shift in the primary variable |
      | lagging strand | synthesized discontinuously as Okazaki fragments | Mid-pathway change in process rate |
      | DNA ligase | joins adjacent DNA fragments after primer replacement | Downstream phenotype trend |
      | proofreading | polymerase correction of misincorporated nucleotides | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-dna-replication-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **synthesized continuously toward the replication fork**
      2) Term for this definition: **synthesized discontinuously as Okazaki fragments**
      3) Term for this definition: **joins adjacent DNA fragments after primer replacement**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['leading strand', 'lagging strand', 'DNA ligase'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'synthesized continuously toward the replication fork\'.',
        hint2: 'Second blank points to lagging strand; think about the role \'synthesized discontinuously as Okazaki fragments\'.',
        hint3: 'Third blank is DNA ligase; connect it to \'joins adjacent DNA fragments after primer replacement\'.',
        explanation: 'Correct set: leading strand, lagging strand, DNA ligase. These three terms define the core mechanism chain for Proofreading & Repair.'
      }
    },
    {
      id: 'bio-dna-replication-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'leading strand',
            options: ['synthesized continuously toward the replication fork', 'joins adjacent DNA fragments after primer replacement', 'synthesized discontinuously as Okazaki fragments', 'polymerase correction of misincorporated nucleotides']
          },
          {
            label: 'lagging strand',
            options: ['synthesized discontinuously as Okazaki fragments', 'polymerase correction of misincorporated nucleotides', 'joins adjacent DNA fragments after primer replacement', 'post-replication pathway correcting base-pair errors']
          },
          {
            label: 'DNA ligase',
            options: ['joins adjacent DNA fragments after primer replacement', 'post-replication pathway correcting base-pair errors', 'polymerase correction of misincorporated nucleotides', 'each daughter DNA molecule retains one parental strand']
          }
        ],
        correctAnswers: ['synthesized continuously toward the replication fork', 'synthesized discontinuously as Okazaki fragments', 'joins adjacent DNA fragments after primer replacement'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'leading strand, lagging strand, and DNA ligase should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-dna-replication-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because leading strand synthesized continuously toward the replication fork, we expect ...".
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
      id: 'bio-dna-replication-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In mismatch correction after polymerase errors, the observed pattern is: polymerase correction of misincorporated nucleotides. What term should anchor the explanation?',
            options: [
              'lagging strand',
              'proofreading',
              'leading strand',
              'DNA ligase'
            ],
            correctAnswer: 1,
            explanation: 'Use proofreading because it directly maps to the described biological pattern: polymerase correction of misincorporated nucleotides.'
          },
          {
            question: 'In an AP-style free-response about proofreading & repair, the observed pattern is: post-replication pathway correcting base-pair errors. What term should anchor the explanation?',
            options: [
              'semiconservative replication',
              'mismatch repair',
              'proofreading',
              'DNA ligase'
            ],
            correctAnswer: 1,
            explanation: 'Use mismatch repair because it directly maps to the described biological pattern: post-replication pathway correcting base-pair errors.'
          }
        ]
      }
    }
  ]
};
