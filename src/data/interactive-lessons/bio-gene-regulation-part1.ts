export const bioGeneRegPart1Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'bio-gene-regulation-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Gene Regulation: Gene Regulation Overview
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through conditional expression in changing nutrient environments.
      
      ### Worked biological example
      A student team investigates conditional expression in changing nutrient environments. Their first interpretation step is to identify how **transcription factor** and **operon** work together in the same pathway.
      
      - They classify the primary signal using **transcription factor**: protein that binds DNA regulatory elements to alter transcription.
      - They trace the downstream response using **operon**: prokaryotic gene cluster transcribed as one mRNA.
      - They then compare outcomes with **repressor** and **enhancer** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **transcription factor**
      - **operon**
      - **repressor**
      - **enhancer**
      `
    },
    {
      id: 'bio-gene-regulation-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Gene Regulation Overview, what best describes transcription factor?',
            options: [
              'protein that binds DNA regulatory elements to alter transcription',
              'prokaryotic gene cluster transcribed as one mRNA',
              'DNA element increasing transcription from a distance',
              'regulatory protein reducing transcription when bound'
            ],
            correctAnswer: 0,
            explanation: 'transcription factor is best matched with: protein that binds DNA regulatory elements to alter transcription.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of operon?',
            options: [
              'heritable chromatin modification not changing DNA sequence',
              'regulatory protein reducing transcription when bound',
              'protein that binds DNA regulatory elements to alter transcription',
              'prokaryotic gene cluster transcribed as one mRNA'
            ],
            correctAnswer: 3,
            explanation: 'operon is best matched with: prokaryotic gene cluster transcribed as one mRNA.'
          }
        ]
      }
    },
    {
      id: 'bio-gene-regulation-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Gene Regulation Overview
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → transcription factor
      - **Immediate processing** → operon
      - **System-level consequence** → repressor
      - **Measured readout** → enhancer
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | transcription factor | protein that binds DNA regulatory elements to alter transcription | Early shift in the primary variable |
      | operon | prokaryotic gene cluster transcribed as one mRNA | Mid-pathway change in process rate |
      | repressor | regulatory protein reducing transcription when bound | Downstream phenotype trend |
      | enhancer | DNA element increasing transcription from a distance | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-gene-regulation-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **protein that binds DNA regulatory elements to alter transcription**
      2) Term for this definition: **prokaryotic gene cluster transcribed as one mRNA**
      3) Term for this definition: **regulatory protein reducing transcription when bound**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['transcription factor', 'operon', 'repressor'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'protein that binds DNA regulatory elements to alter transcription\'.',
        hint2: 'Second blank points to operon; think about the role \'prokaryotic gene cluster transcribed as one mRNA\'.',
        hint3: 'Third blank is repressor; connect it to \'regulatory protein reducing transcription when bound\'.',
        explanation: 'Correct set: transcription factor, operon, repressor. These three terms define the core mechanism chain for Gene Regulation Overview.'
      }
    },
    {
      id: 'bio-gene-regulation-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'transcription factor',
            options: ['regulatory protein reducing transcription when bound', 'prokaryotic gene cluster transcribed as one mRNA', 'DNA element increasing transcription from a distance', 'protein that binds DNA regulatory elements to alter transcription']
          },
          {
            label: 'operon',
            options: ['regulatory protein reducing transcription when bound', 'prokaryotic gene cluster transcribed as one mRNA', 'DNA element increasing transcription from a distance', 'heritable chromatin modification not changing DNA sequence']
          },
          {
            label: 'repressor',
            options: ['chemical tagging often associated with reduced transcription', 'heritable chromatin modification not changing DNA sequence', 'DNA element increasing transcription from a distance', 'regulatory protein reducing transcription when bound']
          }
        ],
        correctAnswers: ['protein that binds DNA regulatory elements to alter transcription', 'prokaryotic gene cluster transcribed as one mRNA', 'regulatory protein reducing transcription when bound'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'transcription factor, operon, and repressor should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-gene-regulation-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because transcription factor protein that binds DNA regulatory elements to alter transcription, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Gene presence does not imply constant expression.
      - Epigenetic regulation changes expression patterns without altering nucleotide sequence.
      - Prokaryotic and eukaryotic regulation share principles but differ in architecture.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-gene-regulation-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In conditional expression in changing nutrient environments, the observed pattern is: DNA element increasing transcription from a distance. What term should anchor the explanation?',
            options: [
              'transcription factor',
              'operon',
              'repressor',
              'enhancer'
            ],
            correctAnswer: 3,
            explanation: 'Use enhancer because it directly maps to the described biological pattern: DNA element increasing transcription from a distance.'
          },
          {
            question: 'In an AP-style free-response about gene regulation overview, the observed pattern is: heritable chromatin modification not changing DNA sequence. What term should anchor the explanation?',
            options: [
              'enhancer',
              'repressor',
              'epigenetic mark',
              'DNA methylation'
            ],
            correctAnswer: 2,
            explanation: 'Use epigenetic mark because it directly maps to the described biological pattern: heritable chromatin modification not changing DNA sequence.'
          }
        ]
      }
    }
  ]
};
