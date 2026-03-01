export const bioGeneRegPart7Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'bio-gene-regulation-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Gene Regulation: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through AP synthesis from multi-layer regulation prompts.
      
      ### Worked biological example
      A student team investigates AP synthesis from multi-layer regulation prompts. Their first interpretation step is to identify how **histone acetylation** and **miRNA** work together in the same pathway.
      
      - They classify the primary signal using **histone acetylation**: chromatin modification generally increasing accessibility.
      - They trace the downstream response using **miRNA**: small RNA that suppresses gene expression post-transcriptionally.
      - They then compare outcomes with **RNA interference** and **transcription factor** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **histone acetylation**
      - **miRNA**
      - **RNA interference**
      - **transcription factor**
      `
    },
    {
      id: 'bio-gene-regulation-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes histone acetylation?',
            options: [
              'small RNA that suppresses gene expression post-transcriptionally',
              'protein that binds DNA regulatory elements to alter transcription',
              'chromatin modification generally increasing accessibility',
              'gene-silencing pathway using small RNAs and complementary binding'
            ],
            correctAnswer: 2,
            explanation: 'histone acetylation is best matched with: chromatin modification generally increasing accessibility.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of miRNA?',
            options: [
              'prokaryotic gene cluster transcribed as one mRNA',
              'chromatin modification generally increasing accessibility',
              'gene-silencing pathway using small RNAs and complementary binding',
              'small RNA that suppresses gene expression post-transcriptionally'
            ],
            correctAnswer: 3,
            explanation: 'miRNA is best matched with: small RNA that suppresses gene expression post-transcriptionally.'
          }
        ]
      }
    },
    {
      id: 'bio-gene-regulation-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → histone acetylation
      - **Immediate processing** → miRNA
      - **System-level consequence** → RNA interference
      - **Measured readout** → transcription factor
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | histone acetylation | chromatin modification generally increasing accessibility | Early shift in the primary variable |
      | miRNA | small RNA that suppresses gene expression post-transcriptionally | Mid-pathway change in process rate |
      | RNA interference | gene-silencing pathway using small RNAs and complementary binding | Downstream phenotype trend |
      | transcription factor | protein that binds DNA regulatory elements to alter transcription | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-gene-regulation-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **chromatin modification generally increasing accessibility**
      2) Term for this definition: **small RNA that suppresses gene expression post-transcriptionally**
      3) Term for this definition: **gene-silencing pathway using small RNAs and complementary binding**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['histone acetylation', 'miRNA', 'RNA interference'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'chromatin modification generally increasing accessibility\'.',
        hint2: 'Second blank points to miRNA; think about the role \'small RNA that suppresses gene expression post-transcriptionally\'.',
        hint3: 'Third blank is RNA interference; connect it to \'gene-silencing pathway using small RNAs and complementary binding\'.',
        explanation: 'Correct set: histone acetylation, miRNA, RNA interference. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-gene-regulation-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'histone acetylation',
            options: ['chromatin modification generally increasing accessibility', 'protein that binds DNA regulatory elements to alter transcription', 'gene-silencing pathway using small RNAs and complementary binding', 'small RNA that suppresses gene expression post-transcriptionally']
          },
          {
            label: 'miRNA',
            options: ['prokaryotic gene cluster transcribed as one mRNA', 'gene-silencing pathway using small RNAs and complementary binding', 'small RNA that suppresses gene expression post-transcriptionally', 'protein that binds DNA regulatory elements to alter transcription']
          },
          {
            label: 'RNA interference',
            options: ['gene-silencing pathway using small RNAs and complementary binding', 'regulatory protein reducing transcription when bound', 'protein that binds DNA regulatory elements to alter transcription', 'prokaryotic gene cluster transcribed as one mRNA']
          }
        ],
        correctAnswers: ['chromatin modification generally increasing accessibility', 'small RNA that suppresses gene expression post-transcriptionally', 'gene-silencing pathway using small RNAs and complementary binding'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'histone acetylation, miRNA, and RNA interference should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-gene-regulation-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because histone acetylation chromatin modification generally increasing accessibility, we expect ...".
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
      id: 'bio-gene-regulation-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In AP synthesis from multi-layer regulation prompts, the observed pattern is: protein that binds DNA regulatory elements to alter transcription. What term should anchor the explanation?',
            options: [
              'histone acetylation',
              'miRNA',
              'RNA interference',
              'transcription factor'
            ],
            correctAnswer: 3,
            explanation: 'Use transcription factor because it directly maps to the described biological pattern: protein that binds DNA regulatory elements to alter transcription.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: prokaryotic gene cluster transcribed as one mRNA. What term should anchor the explanation?',
            options: [
              'RNA interference',
              'repressor',
              'operon',
              'transcription factor'
            ],
            correctAnswer: 2,
            explanation: 'Use operon because it directly maps to the described biological pattern: prokaryotic gene cluster transcribed as one mRNA.'
          }
        ]
      }
    }
  ]
};
