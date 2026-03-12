export const bioDnaReplicationPart7Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'bio-dna-replication-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## DNA Replication: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through exam synthesis across replication fidelity topics.
      
      ### Worked biological example
      A student team investigates exam synthesis across replication fidelity topics. Their first interpretation step is to identify how **DNA ligase** and **proofreading** work together in the same pathway.
      
      - They classify the primary signal using **DNA ligase**: joins adjacent DNA fragments after primer replacement.
      - They trace the downstream response using **proofreading**: polymerase correction of misincorporated nucleotides.
      - They then compare outcomes with **mismatch repair** and **semiconservative replication** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **DNA ligase**
      - **proofreading**
      - **mismatch repair**
      - **semiconservative replication**
      `
    },
    {
      id: 'bio-dna-replication-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes DNA ligase?',
            options: [
              'polymerase correction of misincorporated nucleotides',
              'post-replication pathway correcting base-pair errors',
              'joins adjacent DNA fragments after primer replacement',
              'each daughter DNA molecule retains one parental strand'
            ],
            correctAnswer: 2,
            explanation: 'DNA ligase is best matched with: joins adjacent DNA fragments after primer replacement.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of proofreading?',
            options: [
              'post-replication pathway correcting base-pair errors',
              'joins adjacent DNA fragments after primer replacement',
              'polymerase correction of misincorporated nucleotides',
              'unwinds the DNA double helix at the replication fork'
            ],
            correctAnswer: 2,
            explanation: 'proofreading is best matched with: polymerase correction of misincorporated nucleotides.'
          }
        ]
      }
    },
    {
      id: 'bio-dna-replication-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → DNA ligase
      - **Immediate processing** → proofreading
      - **System-level consequence** → mismatch repair
      - **Measured readout** → semiconservative replication
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | DNA ligase | joins adjacent DNA fragments after primer replacement | Early shift in the primary variable |
      | proofreading | polymerase correction of misincorporated nucleotides | Mid-pathway change in process rate |
      | mismatch repair | post-replication pathway correcting base-pair errors | Downstream phenotype trend |
      | semiconservative replication | each daughter DNA molecule retains one parental strand | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-dna-replication-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **joins adjacent DNA fragments after primer replacement**
      2) Term for this definition: **polymerase correction of misincorporated nucleotides**
      3) Term for this definition: **post-replication pathway correcting base-pair errors**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['DNA ligase', 'proofreading', 'mismatch repair'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'joins adjacent DNA fragments after primer replacement\'.',
        hint2: 'Second blank points to proofreading; think about the role \'polymerase correction of misincorporated nucleotides\'.',
        hint3: 'Third blank is mismatch repair; connect it to \'post-replication pathway correcting base-pair errors\'.',
        explanation: 'Correct set: DNA ligase, proofreading, mismatch repair. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-dna-replication-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA ligase',
            options: ['each daughter DNA molecule retains one parental strand', 'joins adjacent DNA fragments after primer replacement', 'post-replication pathway correcting base-pair errors', 'polymerase correction of misincorporated nucleotides']
          },
          {
            label: 'proofreading',
            options: ['each daughter DNA molecule retains one parental strand', 'unwinds the DNA double helix at the replication fork', 'polymerase correction of misincorporated nucleotides', 'post-replication pathway correcting base-pair errors']
          },
          {
            label: 'mismatch repair',
            options: ['post-replication pathway correcting base-pair errors', 'synthesizes short RNA primers for DNA polymerase', 'unwinds the DNA double helix at the replication fork', 'each daughter DNA molecule retains one parental strand']
          }
        ],
        correctAnswers: ['joins adjacent DNA fragments after primer replacement', 'polymerase correction of misincorporated nucleotides', 'post-replication pathway correcting base-pair errors'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'DNA ligase, proofreading, and mismatch repair should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-dna-replication-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because DNA ligase joins adjacent DNA fragments after primer replacement, we expect ...".
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
      id: 'bio-dna-replication-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In exam synthesis across replication fidelity topics, the observed pattern is: each daughter DNA molecule retains one parental strand. What term should anchor the explanation?',
            options: [
              'mismatch repair',
              'semiconservative replication',
              'DNA ligase',
              'proofreading'
            ],
            correctAnswer: 1,
            explanation: 'Use semiconservative replication because it directly maps to the described biological pattern: each daughter DNA molecule retains one parental strand.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: unwinds the DNA double helix at the replication fork. What term should anchor the explanation?',
            options: [
              'helicase',
              'mismatch repair',
              'primase',
              'semiconservative replication'
            ],
            correctAnswer: 0,
            explanation: 'Use helicase because it directly maps to the described biological pattern: unwinds the DNA double helix at the replication fork.'
          }
        ]
      }
    }
  ]
};
