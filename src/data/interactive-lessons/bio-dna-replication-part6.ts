export const bioDnaReplicationPart6Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'bio-dna-replication-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## DNA Replication: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through mutation-rate interpretation from sequence data.
      
      ### Worked biological example
      A student team investigates mutation-rate interpretation from sequence data. Their first interpretation step is to identify how **lagging strand** and **DNA ligase** work together in the same pathway.
      
      - They classify the primary signal using **lagging strand**: synthesized discontinuously as Okazaki fragments.
      - They trace the downstream response using **DNA ligase**: joins adjacent DNA fragments after primer replacement.
      - They then compare outcomes with **proofreading** and **mismatch repair** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **lagging strand**
      - **DNA ligase**
      - **proofreading**
      - **mismatch repair**
      `
    },
    {
      id: 'bio-dna-replication-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes lagging strand?',
            options: [
              'polymerase correction of misincorporated nucleotides',
              'post-replication pathway correcting base-pair errors',
              'synthesized discontinuously as Okazaki fragments',
              'joins adjacent DNA fragments after primer replacement'
            ],
            correctAnswer: 2,
            explanation: 'lagging strand is best matched with: synthesized discontinuously as Okazaki fragments.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of DNA ligase?',
            options: [
              'polymerase correction of misincorporated nucleotides',
              'joins adjacent DNA fragments after primer replacement',
              'synthesized discontinuously as Okazaki fragments',
              'each daughter DNA molecule retains one parental strand'
            ],
            correctAnswer: 1,
            explanation: 'DNA ligase is best matched with: joins adjacent DNA fragments after primer replacement.'
          }
        ]
      }
    },
    {
      id: 'bio-dna-replication-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → lagging strand
      - **Immediate processing** → DNA ligase
      - **System-level consequence** → proofreading
      - **Measured readout** → mismatch repair
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | lagging strand | synthesized discontinuously as Okazaki fragments | Early shift in the primary variable |
      | DNA ligase | joins adjacent DNA fragments after primer replacement | Mid-pathway change in process rate |
      | proofreading | polymerase correction of misincorporated nucleotides | Downstream phenotype trend |
      | mismatch repair | post-replication pathway correcting base-pair errors | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-dna-replication-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **synthesized discontinuously as Okazaki fragments**
      2) Term for this definition: **joins adjacent DNA fragments after primer replacement**
      3) Term for this definition: **polymerase correction of misincorporated nucleotides**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['lagging strand', 'DNA ligase', 'proofreading'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'synthesized discontinuously as Okazaki fragments\'.',
        hint2: 'Second blank points to DNA ligase; think about the role \'joins adjacent DNA fragments after primer replacement\'.',
        hint3: 'Third blank is proofreading; connect it to \'polymerase correction of misincorporated nucleotides\'.',
        explanation: 'Correct set: lagging strand, DNA ligase, proofreading. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-dna-replication-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'lagging strand',
            options: ['post-replication pathway correcting base-pair errors', 'joins adjacent DNA fragments after primer replacement', 'polymerase correction of misincorporated nucleotides', 'synthesized discontinuously as Okazaki fragments']
          },
          {
            label: 'DNA ligase',
            options: ['each daughter DNA molecule retains one parental strand', 'polymerase correction of misincorporated nucleotides', 'joins adjacent DNA fragments after primer replacement', 'post-replication pathway correcting base-pair errors']
          },
          {
            label: 'proofreading',
            options: ['each daughter DNA molecule retains one parental strand', 'unwinds the DNA double helix at the replication fork', 'post-replication pathway correcting base-pair errors', 'polymerase correction of misincorporated nucleotides']
          }
        ],
        correctAnswers: ['synthesized discontinuously as Okazaki fragments', 'joins adjacent DNA fragments after primer replacement', 'polymerase correction of misincorporated nucleotides'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'lagging strand, DNA ligase, and proofreading should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-dna-replication-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because lagging strand synthesized discontinuously as Okazaki fragments, we expect ...".
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
      id: 'bio-dna-replication-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In mutation-rate interpretation from sequence data, the observed pattern is: post-replication pathway correcting base-pair errors. What term should anchor the explanation?',
            options: [
              'lagging strand',
              'DNA ligase',
              'proofreading',
              'mismatch repair'
            ],
            correctAnswer: 3,
            explanation: 'Use mismatch repair because it directly maps to the described biological pattern: post-replication pathway correcting base-pair errors.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: each daughter DNA molecule retains one parental strand. What term should anchor the explanation?',
            options: [
              'proofreading',
              'helicase',
              'mismatch repair',
              'semiconservative replication'
            ],
            correctAnswer: 3,
            explanation: 'Use semiconservative replication because it directly maps to the described biological pattern: each daughter DNA molecule retains one parental strand.'
          }
        ]
      }
    }
  ]
};
