export const bioGeneRegPart3Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'bio-gene-regulation-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Gene Regulation: Eukaryotic Regulation
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through enhancer-driven tissue-specific expression.
      
      ### Worked biological example
      A student team investigates enhancer-driven tissue-specific expression. Their first interpretation step is to identify how **repressor** and **enhancer** work together in the same pathway.
      
      - They classify the primary signal using **repressor**: regulatory protein reducing transcription when bound.
      - They trace the downstream response using **enhancer**: DNA element increasing transcription from a distance.
      - They then compare outcomes with **epigenetic mark** and **DNA methylation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **repressor**
      - **enhancer**
      - **epigenetic mark**
      - **DNA methylation**
      `
    },
    {
      id: 'bio-gene-regulation-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Eukaryotic Regulation, what best describes repressor?',
            options: [
              'heritable chromatin modification not changing DNA sequence',
              'DNA element increasing transcription from a distance',
              'chemical tagging often associated with reduced transcription',
              'regulatory protein reducing transcription when bound'
            ],
            correctAnswer: 3,
            explanation: 'repressor is best matched with: regulatory protein reducing transcription when bound.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of enhancer?',
            options: [
              'heritable chromatin modification not changing DNA sequence',
              'regulatory protein reducing transcription when bound',
              'chromatin modification generally increasing accessibility',
              'DNA element increasing transcription from a distance'
            ],
            correctAnswer: 3,
            explanation: 'enhancer is best matched with: DNA element increasing transcription from a distance.'
          }
        ]
      }
    },
    {
      id: 'bio-gene-regulation-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Eukaryotic Regulation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → repressor
      - **Immediate processing** → enhancer
      - **System-level consequence** → epigenetic mark
      - **Measured readout** → DNA methylation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | repressor | regulatory protein reducing transcription when bound | Early shift in the primary variable |
      | enhancer | DNA element increasing transcription from a distance | Mid-pathway change in process rate |
      | epigenetic mark | heritable chromatin modification not changing DNA sequence | Downstream phenotype trend |
      | DNA methylation | chemical tagging often associated with reduced transcription | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-gene-regulation-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **regulatory protein reducing transcription when bound**
      2) Term for this definition: **DNA element increasing transcription from a distance**
      3) Term for this definition: **heritable chromatin modification not changing DNA sequence**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['repressor', 'enhancer', 'epigenetic mark'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'regulatory protein reducing transcription when bound\'.',
        hint2: 'Second blank points to enhancer; think about the role \'DNA element increasing transcription from a distance\'.',
        hint3: 'Third blank is epigenetic mark; connect it to \'heritable chromatin modification not changing DNA sequence\'.',
        explanation: 'Correct set: repressor, enhancer, epigenetic mark. These three terms define the core mechanism chain for Eukaryotic Regulation.'
      }
    },
    {
      id: 'bio-gene-regulation-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'repressor',
            options: ['chemical tagging often associated with reduced transcription', 'regulatory protein reducing transcription when bound', 'heritable chromatin modification not changing DNA sequence', 'DNA element increasing transcription from a distance']
          },
          {
            label: 'enhancer',
            options: ['chemical tagging often associated with reduced transcription', 'DNA element increasing transcription from a distance', 'heritable chromatin modification not changing DNA sequence', 'chromatin modification generally increasing accessibility']
          },
          {
            label: 'epigenetic mark',
            options: ['chromatin modification generally increasing accessibility', 'chemical tagging often associated with reduced transcription', 'small RNA that suppresses gene expression post-transcriptionally', 'heritable chromatin modification not changing DNA sequence']
          }
        ],
        correctAnswers: ['regulatory protein reducing transcription when bound', 'DNA element increasing transcription from a distance', 'heritable chromatin modification not changing DNA sequence'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'repressor, enhancer, and epigenetic mark should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-gene-regulation-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because repressor regulatory protein reducing transcription when bound, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Prokaryotic and eukaryotic regulation share principles but differ in architecture.
      - Post-transcriptional control can strongly influence final protein output.
      - Gene presence does not imply constant expression.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-gene-regulation-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In enhancer-driven tissue-specific expression, the observed pattern is: chemical tagging often associated with reduced transcription. What term should anchor the explanation?',
            options: [
              'epigenetic mark',
              'enhancer',
              'DNA methylation',
              'repressor'
            ],
            correctAnswer: 2,
            explanation: 'Use DNA methylation because it directly maps to the described biological pattern: chemical tagging often associated with reduced transcription.'
          },
          {
            question: 'In an AP-style free-response about eukaryotic regulation, the observed pattern is: chromatin modification generally increasing accessibility. What term should anchor the explanation?',
            options: [
              'epigenetic mark',
              'DNA methylation',
              'miRNA',
              'histone acetylation'
            ],
            correctAnswer: 3,
            explanation: 'Use histone acetylation because it directly maps to the described biological pattern: chromatin modification generally increasing accessibility.'
          }
        ]
      }
    }
  ]
};
