export const bioGeneRegPart6Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'bio-gene-regulation-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Gene Regulation: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through gene-expression dataset interpretation.
      
      ### Worked biological example
      A student team investigates gene-expression dataset interpretation. Their first interpretation step is to identify how **DNA methylation** and **histone acetylation** work together in the same pathway.
      
      - They classify the primary signal using **DNA methylation**: chemical tagging often associated with reduced transcription.
      - They trace the downstream response using **histone acetylation**: chromatin modification generally increasing accessibility.
      - They then compare outcomes with **miRNA** and **RNA interference** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **DNA methylation**
      - **histone acetylation**
      - **miRNA**
      - **RNA interference**
      `
    },
    {
      id: 'bio-gene-regulation-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes DNA methylation?',
            options: [
              'gene-silencing pathway using small RNAs and complementary binding',
              'chemical tagging often associated with reduced transcription',
              'small RNA that suppresses gene expression post-transcriptionally',
              'chromatin modification generally increasing accessibility'
            ],
            correctAnswer: 1,
            explanation: 'DNA methylation is best matched with: chemical tagging often associated with reduced transcription.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of histone acetylation?',
            options: [
              'protein that binds DNA regulatory elements to alter transcription',
              'small RNA that suppresses gene expression post-transcriptionally',
              'chromatin modification generally increasing accessibility',
              'chemical tagging often associated with reduced transcription'
            ],
            correctAnswer: 2,
            explanation: 'histone acetylation is best matched with: chromatin modification generally increasing accessibility.'
          }
        ]
      }
    },
    {
      id: 'bio-gene-regulation-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → DNA methylation
      - **Immediate processing** → histone acetylation
      - **System-level consequence** → miRNA
      - **Measured readout** → RNA interference
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | DNA methylation | chemical tagging often associated with reduced transcription | Early shift in the primary variable |
      | histone acetylation | chromatin modification generally increasing accessibility | Mid-pathway change in process rate |
      | miRNA | small RNA that suppresses gene expression post-transcriptionally | Downstream phenotype trend |
      | RNA interference | gene-silencing pathway using small RNAs and complementary binding | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-gene-regulation-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **chemical tagging often associated with reduced transcription**

      2) Term for this definition: **chromatin modification generally increasing accessibility**

      3) Term for this definition: **small RNA that suppresses gene expression post-transcriptionally**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['DNA methylation', 'histone acetylation', 'miRNA'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'chemical tagging often associated with reduced transcription\'.',
        hint2: 'Second blank points to histone acetylation; think about the role \'chromatin modification generally increasing accessibility\'.',
        hint3: 'Third blank is miRNA; connect it to \'small RNA that suppresses gene expression post-transcriptionally\'.',
        explanation: 'Correct set: DNA methylation, histone acetylation, miRNA. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-gene-regulation-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA methylation',
            options: ['gene-silencing pathway using small RNAs and complementary binding', 'chemical tagging often associated with reduced transcription', 'small RNA that suppresses gene expression post-transcriptionally', 'chromatin modification generally increasing accessibility']
          },
          {
            label: 'histone acetylation',
            options: ['chromatin modification generally increasing accessibility', 'small RNA that suppresses gene expression post-transcriptionally', 'gene-silencing pathway using small RNAs and complementary binding', 'protein that binds DNA regulatory elements to alter transcription']
          },
          {
            label: 'miRNA',
            options: ['prokaryotic gene cluster transcribed as one mRNA', 'small RNA that suppresses gene expression post-transcriptionally', 'protein that binds DNA regulatory elements to alter transcription', 'gene-silencing pathway using small RNAs and complementary binding']
          }
        ],
        correctAnswers: ['chemical tagging often associated with reduced transcription', 'chromatin modification generally increasing accessibility', 'small RNA that suppresses gene expression post-transcriptionally'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'DNA methylation, histone acetylation, and miRNA should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-gene-regulation-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because DNA methylation chemical tagging often associated with reduced transcription, we expect ...".
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
      id: 'bio-gene-regulation-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In gene-expression dataset interpretation, the observed pattern is: gene-silencing pathway using small RNAs and complementary binding. What term should anchor the explanation?',
            options: [
              'histone acetylation',
              'DNA methylation',
              'RNA interference',
              'miRNA'
            ],
            correctAnswer: 2,
            explanation: 'Use RNA interference because it directly maps to the described biological pattern: gene-silencing pathway using small RNAs and complementary binding.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: protein that binds DNA regulatory elements to alter transcription. What term should anchor the explanation?',
            options: [
              'RNA interference',
              'transcription factor',
              'operon',
              'miRNA'
            ],
            correctAnswer: 1,
            explanation: 'Use transcription factor because it directly maps to the described biological pattern: protein that binds DNA regulatory elements to alter transcription.'
          }
        ]
      }
    }
  ]
};
