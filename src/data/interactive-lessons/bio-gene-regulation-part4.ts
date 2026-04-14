export const bioGeneRegPart4Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'bio-gene-regulation-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Gene Regulation: Epigenetics
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through chromatin modifications and transcription access.
      
      ### Worked biological example
      A student team investigates chromatin modifications and transcription access. Their first interpretation step is to identify how **enhancer** and **epigenetic mark** work together in the same pathway.
      
      - They classify the primary signal using **enhancer**: DNA element increasing transcription from a distance.
      - They trace the downstream response using **epigenetic mark**: heritable chromatin modification not changing DNA sequence.
      - They then compare outcomes with **DNA methylation** and **histone acetylation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **enhancer**
      - **epigenetic mark**
      - **DNA methylation**
      - **histone acetylation**
      `
    },
    {
      id: 'bio-gene-regulation-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Epigenetics, what best describes enhancer?',
            options: [
              'heritable chromatin modification not changing DNA sequence',
              'DNA element increasing transcription from a distance',
              'chemical tagging often associated with reduced transcription',
              'chromatin modification generally increasing accessibility'
            ],
            correctAnswer: 1,
            explanation: 'enhancer is best matched with: DNA element increasing transcription from a distance.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of epigenetic mark?',
            options: [
              'DNA element increasing transcription from a distance',
              'chemical tagging often associated with reduced transcription',
              'small RNA that suppresses gene expression post-transcriptionally',
              'heritable chromatin modification not changing DNA sequence'
            ],
            correctAnswer: 3,
            explanation: 'epigenetic mark is best matched with: heritable chromatin modification not changing DNA sequence.'
          }
        ]
      }
    },
    {
      id: 'bio-gene-regulation-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Epigenetics
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → enhancer
      - **Immediate processing** → epigenetic mark
      - **System-level consequence** → DNA methylation
      - **Measured readout** → histone acetylation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | enhancer | DNA element increasing transcription from a distance | Early shift in the primary variable |
      | epigenetic mark | heritable chromatin modification not changing DNA sequence | Mid-pathway change in process rate |
      | DNA methylation | chemical tagging often associated with reduced transcription | Downstream phenotype trend |
      | histone acetylation | chromatin modification generally increasing accessibility | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-gene-regulation-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **DNA element increasing transcription from a distance**

      2) Term for this definition: **heritable chromatin modification not changing DNA sequence**

      3) Term for this definition: **chemical tagging often associated with reduced transcription**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['enhancer', 'epigenetic mark', 'DNA methylation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'DNA element increasing transcription from a distance\'.',
        hint2: 'Second blank points to epigenetic mark; think about the role \'heritable chromatin modification not changing DNA sequence\'.',
        hint3: 'Third blank is DNA methylation; connect it to \'chemical tagging often associated with reduced transcription\'.',
        explanation: 'Correct set: enhancer, epigenetic mark, DNA methylation. These three terms define the core mechanism chain for Epigenetics.'
      }
    },
    {
      id: 'bio-gene-regulation-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'enhancer',
            options: ['chemical tagging often associated with reduced transcription', 'DNA element increasing transcription from a distance', 'heritable chromatin modification not changing DNA sequence', 'chromatin modification generally increasing accessibility']
          },
          {
            label: 'epigenetic mark',
            options: ['chemical tagging often associated with reduced transcription', 'small RNA that suppresses gene expression post-transcriptionally', 'heritable chromatin modification not changing DNA sequence', 'chromatin modification generally increasing accessibility']
          },
          {
            label: 'DNA methylation',
            options: ['chromatin modification generally increasing accessibility', 'gene-silencing pathway using small RNAs and complementary binding', 'chemical tagging often associated with reduced transcription', 'small RNA that suppresses gene expression post-transcriptionally']
          }
        ],
        correctAnswers: ['DNA element increasing transcription from a distance', 'heritable chromatin modification not changing DNA sequence', 'chemical tagging often associated with reduced transcription'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'enhancer, epigenetic mark, and DNA methylation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-gene-regulation-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because enhancer DNA element increasing transcription from a distance, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Post-transcriptional control can strongly influence final protein output.
      - Gene presence does not imply constant expression.
      - Epigenetic regulation changes expression patterns without altering nucleotide sequence.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-gene-regulation-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In chromatin modifications and transcription access, the observed pattern is: chromatin modification generally increasing accessibility. What term should anchor the explanation?',
            options: [
              'enhancer',
              'histone acetylation',
              'epigenetic mark',
              'DNA methylation'
            ],
            correctAnswer: 1,
            explanation: 'Use histone acetylation because it directly maps to the described biological pattern: chromatin modification generally increasing accessibility.'
          },
          {
            question: 'In an AP-style free-response about epigenetics, the observed pattern is: small RNA that suppresses gene expression post-transcriptionally. What term should anchor the explanation?',
            options: [
              'miRNA',
              'DNA methylation',
              'RNA interference',
              'histone acetylation'
            ],
            correctAnswer: 0,
            explanation: 'Use miRNA because it directly maps to the described biological pattern: small RNA that suppresses gene expression post-transcriptionally.'
          }
        ]
      }
    }
  ]
};
