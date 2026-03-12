export const bioGeneRegPart2Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'bio-gene-regulation-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Gene Regulation: Prokaryotic Regulation
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through lac operon behavior with lactose availability.
      
      ### Worked biological example
      A student team investigates lac operon behavior with lactose availability. Their first interpretation step is to identify how **operon** and **repressor** work together in the same pathway.
      
      - They classify the primary signal using **operon**: prokaryotic gene cluster transcribed as one mRNA.
      - They trace the downstream response using **repressor**: regulatory protein reducing transcription when bound.
      - They then compare outcomes with **enhancer** and **epigenetic mark** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **operon**
      - **repressor**
      - **enhancer**
      - **epigenetic mark**
      `
    },
    {
      id: 'bio-gene-regulation-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Prokaryotic Regulation, what best describes operon?',
            options: [
              'prokaryotic gene cluster transcribed as one mRNA',
              'regulatory protein reducing transcription when bound',
              'DNA element increasing transcription from a distance',
              'heritable chromatin modification not changing DNA sequence'
            ],
            correctAnswer: 0,
            explanation: 'operon is best matched with: prokaryotic gene cluster transcribed as one mRNA.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of repressor?',
            options: [
              'chemical tagging often associated with reduced transcription',
              'regulatory protein reducing transcription when bound',
              'DNA element increasing transcription from a distance',
              'prokaryotic gene cluster transcribed as one mRNA'
            ],
            correctAnswer: 1,
            explanation: 'repressor is best matched with: regulatory protein reducing transcription when bound.'
          }
        ]
      }
    },
    {
      id: 'bio-gene-regulation-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Prokaryotic Regulation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → operon
      - **Immediate processing** → repressor
      - **System-level consequence** → enhancer
      - **Measured readout** → epigenetic mark
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | operon | prokaryotic gene cluster transcribed as one mRNA | Early shift in the primary variable |
      | repressor | regulatory protein reducing transcription when bound | Mid-pathway change in process rate |
      | enhancer | DNA element increasing transcription from a distance | Downstream phenotype trend |
      | epigenetic mark | heritable chromatin modification not changing DNA sequence | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-gene-regulation-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **prokaryotic gene cluster transcribed as one mRNA**
      2) Term for this definition: **regulatory protein reducing transcription when bound**
      3) Term for this definition: **DNA element increasing transcription from a distance**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['operon', 'repressor', 'enhancer'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'prokaryotic gene cluster transcribed as one mRNA\'.',
        hint2: 'Second blank points to repressor; think about the role \'regulatory protein reducing transcription when bound\'.',
        hint3: 'Third blank is enhancer; connect it to \'DNA element increasing transcription from a distance\'.',
        explanation: 'Correct set: operon, repressor, enhancer. These three terms define the core mechanism chain for Prokaryotic Regulation.'
      }
    },
    {
      id: 'bio-gene-regulation-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'operon',
            options: ['regulatory protein reducing transcription when bound', 'heritable chromatin modification not changing DNA sequence', 'prokaryotic gene cluster transcribed as one mRNA', 'DNA element increasing transcription from a distance']
          },
          {
            label: 'repressor',
            options: ['chemical tagging often associated with reduced transcription', 'DNA element increasing transcription from a distance', 'regulatory protein reducing transcription when bound', 'heritable chromatin modification not changing DNA sequence']
          },
          {
            label: 'enhancer',
            options: ['heritable chromatin modification not changing DNA sequence', 'chemical tagging often associated with reduced transcription', 'DNA element increasing transcription from a distance', 'chromatin modification generally increasing accessibility']
          }
        ],
        correctAnswers: ['prokaryotic gene cluster transcribed as one mRNA', 'regulatory protein reducing transcription when bound', 'DNA element increasing transcription from a distance'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'operon, repressor, and enhancer should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-gene-regulation-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because operon prokaryotic gene cluster transcribed as one mRNA, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Epigenetic regulation changes expression patterns without altering nucleotide sequence.
      - Prokaryotic and eukaryotic regulation share principles but differ in architecture.
      - Post-transcriptional control can strongly influence final protein output.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-gene-regulation-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In lac operon behavior with lactose availability, the observed pattern is: heritable chromatin modification not changing DNA sequence. What term should anchor the explanation?',
            options: [
              'epigenetic mark',
              'repressor',
              'enhancer',
              'operon'
            ],
            correctAnswer: 0,
            explanation: 'Use epigenetic mark because it directly maps to the described biological pattern: heritable chromatin modification not changing DNA sequence.'
          },
          {
            question: 'In an AP-style free-response about prokaryotic regulation, the observed pattern is: chemical tagging often associated with reduced transcription. What term should anchor the explanation?',
            options: [
              'epigenetic mark',
              'enhancer',
              'histone acetylation',
              'DNA methylation'
            ],
            correctAnswer: 3,
            explanation: 'Use DNA methylation because it directly maps to the described biological pattern: chemical tagging often associated with reduced transcription.'
          }
        ]
      }
    }
  ]
};
