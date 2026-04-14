export const bioGeneRegPart5Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'bio-gene-regulation-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Gene Regulation: RNA Interference
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through microRNA control of translation.
      
      ### Worked biological example
      A student team investigates microRNA control of translation. Their first interpretation step is to identify how **epigenetic mark** and **DNA methylation** work together in the same pathway.
      
      - They classify the primary signal using **epigenetic mark**: heritable chromatin modification not changing DNA sequence.
      - They trace the downstream response using **DNA methylation**: chemical tagging often associated with reduced transcription.
      - They then compare outcomes with **histone acetylation** and **miRNA** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **epigenetic mark**
      - **DNA methylation**
      - **histone acetylation**
      - **miRNA**
      `
    },
    {
      id: 'bio-gene-regulation-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For RNA Interference, what best describes epigenetic mark?',
            options: [
              'heritable chromatin modification not changing DNA sequence',
              'chemical tagging often associated with reduced transcription',
              'chromatin modification generally increasing accessibility',
              'small RNA that suppresses gene expression post-transcriptionally'
            ],
            correctAnswer: 0,
            explanation: 'epigenetic mark is best matched with: heritable chromatin modification not changing DNA sequence.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of DNA methylation?',
            options: [
              'chromatin modification generally increasing accessibility',
              'gene-silencing pathway using small RNAs and complementary binding',
              'chemical tagging often associated with reduced transcription',
              'heritable chromatin modification not changing DNA sequence'
            ],
            correctAnswer: 2,
            explanation: 'DNA methylation is best matched with: chemical tagging often associated with reduced transcription.'
          }
        ]
      }
    },
    {
      id: 'bio-gene-regulation-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: RNA Interference
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → epigenetic mark
      - **Immediate processing** → DNA methylation
      - **System-level consequence** → histone acetylation
      - **Measured readout** → miRNA
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | epigenetic mark | heritable chromatin modification not changing DNA sequence | Early shift in the primary variable |
      | DNA methylation | chemical tagging often associated with reduced transcription | Mid-pathway change in process rate |
      | histone acetylation | chromatin modification generally increasing accessibility | Downstream phenotype trend |
      | miRNA | small RNA that suppresses gene expression post-transcriptionally | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-gene-regulation-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **heritable chromatin modification not changing DNA sequence**

      2) Term for this definition: **chemical tagging often associated with reduced transcription**

      3) Term for this definition: **chromatin modification generally increasing accessibility**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['epigenetic mark', 'DNA methylation', 'histone acetylation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'heritable chromatin modification not changing DNA sequence\'.',
        hint2: 'Second blank points to DNA methylation; think about the role \'chemical tagging often associated with reduced transcription\'.',
        hint3: 'Third blank is histone acetylation; connect it to \'chromatin modification generally increasing accessibility\'.',
        explanation: 'Correct set: epigenetic mark, DNA methylation, histone acetylation. These three terms define the core mechanism chain for RNA Interference.'
      }
    },
    {
      id: 'bio-gene-regulation-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'epigenetic mark',
            options: ['heritable chromatin modification not changing DNA sequence', 'chemical tagging often associated with reduced transcription', 'chromatin modification generally increasing accessibility', 'small RNA that suppresses gene expression post-transcriptionally']
          },
          {
            label: 'DNA methylation',
            options: ['chemical tagging often associated with reduced transcription', 'chromatin modification generally increasing accessibility', 'small RNA that suppresses gene expression post-transcriptionally', 'gene-silencing pathway using small RNAs and complementary binding']
          },
          {
            label: 'histone acetylation',
            options: ['gene-silencing pathway using small RNAs and complementary binding', 'small RNA that suppresses gene expression post-transcriptionally', 'protein that binds DNA regulatory elements to alter transcription', 'chromatin modification generally increasing accessibility']
          }
        ],
        correctAnswers: ['heritable chromatin modification not changing DNA sequence', 'chemical tagging often associated with reduced transcription', 'chromatin modification generally increasing accessibility'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'epigenetic mark, DNA methylation, and histone acetylation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-gene-regulation-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because epigenetic mark heritable chromatin modification not changing DNA sequence, we expect ...".
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
      id: 'bio-gene-regulation-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In microRNA control of translation, the observed pattern is: small RNA that suppresses gene expression post-transcriptionally. What term should anchor the explanation?',
            options: [
              'histone acetylation',
              'epigenetic mark',
              'DNA methylation',
              'miRNA'
            ],
            correctAnswer: 3,
            explanation: 'Use miRNA because it directly maps to the described biological pattern: small RNA that suppresses gene expression post-transcriptionally.'
          },
          {
            question: 'In an AP-style free-response about rna interference, the observed pattern is: gene-silencing pathway using small RNAs and complementary binding. What term should anchor the explanation?',
            options: [
              'transcription factor',
              'miRNA',
              'histone acetylation',
              'RNA interference'
            ],
            correctAnswer: 3,
            explanation: 'Use RNA interference because it directly maps to the described biological pattern: gene-silencing pathway using small RNAs and complementary binding.'
          }
        ]
      }
    }
  ]
};
