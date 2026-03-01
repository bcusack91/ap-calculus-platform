export const bioCellRespirationPart7Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'bio-cellular-respiration-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Cellular Respiration: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through integrated AP free-response metabolism analysis.
      
      ### Worked biological example
      A student team investigates integrated AP free-response metabolism analysis. Their first interpretation step is to identify how **NADH** and **FADH2** work together in the same pathway.
      
      - They classify the primary signal using **NADH**: high-energy electron carrier delivering reducing power.
      - They trace the downstream response using **FADH2**: electron carrier feeding electrons at a lower-energy entry point.
      - They then compare outcomes with **substrate-level phosphorylation** and **glycolysis** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **NADH**
      - **FADH2**
      - **substrate-level phosphorylation**
      - **glycolysis**
      `
    },
    {
      id: 'bio-cellular-respiration-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes NADH?',
            options: [
              'high-energy electron carrier delivering reducing power',
              'splits glucose into pyruvate while producing ATP and NADH',
              'direct ATP formation from a phosphorylated intermediate',
              'electron carrier feeding electrons at a lower-energy entry point'
            ],
            correctAnswer: 0,
            explanation: 'NADH is best matched with: high-energy electron carrier delivering reducing power.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of FADH2?',
            options: [
              'direct ATP formation from a phosphorylated intermediate',
              'electron carrier feeding electrons at a lower-energy entry point',
              'converts pyruvate to acetyl-CoA and releases CO2',
              'high-energy electron carrier delivering reducing power'
            ],
            correctAnswer: 1,
            explanation: 'FADH2 is best matched with: electron carrier feeding electrons at a lower-energy entry point.'
          }
        ]
      }
    },
    {
      id: 'bio-cellular-respiration-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → NADH
      - **Immediate processing** → FADH2
      - **System-level consequence** → substrate-level phosphorylation
      - **Measured readout** → glycolysis
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | NADH | high-energy electron carrier delivering reducing power | Early shift in the primary variable |
      | FADH2 | electron carrier feeding electrons at a lower-energy entry point | Mid-pathway change in process rate |
      | substrate-level phosphorylation | direct ATP formation from a phosphorylated intermediate | Downstream phenotype trend |
      | glycolysis | splits glucose into pyruvate while producing ATP and NADH | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cellular-respiration-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **high-energy electron carrier delivering reducing power**
      2) Term for this definition: **electron carrier feeding electrons at a lower-energy entry point**
      3) Term for this definition: **direct ATP formation from a phosphorylated intermediate**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['NADH', 'FADH2', 'substrate-level phosphorylation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'high-energy electron carrier delivering reducing power\'.',
        hint2: 'Second blank points to FADH2; think about the role \'electron carrier feeding electrons at a lower-energy entry point\'.',
        hint3: 'Third blank is substrate-level phosphorylation; connect it to \'direct ATP formation from a phosphorylated intermediate\'.',
        explanation: 'Correct set: NADH, FADH2, substrate-level phosphorylation. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-cellular-respiration-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NADH',
            options: ['splits glucose into pyruvate while producing ATP and NADH', 'electron carrier feeding electrons at a lower-energy entry point', 'high-energy electron carrier delivering reducing power', 'direct ATP formation from a phosphorylated intermediate']
          },
          {
            label: 'FADH2',
            options: ['splits glucose into pyruvate while producing ATP and NADH', 'converts pyruvate to acetyl-CoA and releases CO2', 'electron carrier feeding electrons at a lower-energy entry point', 'direct ATP formation from a phosphorylated intermediate']
          },
          {
            label: 'substrate-level phosphorylation',
            options: ['oxidizes acetyl groups and generates NADH/FADH2', 'converts pyruvate to acetyl-CoA and releases CO2', 'direct ATP formation from a phosphorylated intermediate', 'splits glucose into pyruvate while producing ATP and NADH']
          }
        ],
        correctAnswers: ['high-energy electron carrier delivering reducing power', 'electron carrier feeding electrons at a lower-energy entry point', 'direct ATP formation from a phosphorylated intermediate'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'NADH, FADH2, and substrate-level phosphorylation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cellular-respiration-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because NADH high-energy electron carrier delivering reducing power, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - NADH and FADH2 are not ATP themselves; they transfer electron energy.
      - Pathway location matters for interpretation of transport and regulation questions.
      - Most ATP in aerobic respiration is generated during oxidative phosphorylation, not glycolysis.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cellular-respiration-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In integrated AP free-response metabolism analysis, the observed pattern is: splits glucose into pyruvate while producing ATP and NADH. What term should anchor the explanation?',
            options: [
              'substrate-level phosphorylation',
              'FADH2',
              'NADH',
              'glycolysis'
            ],
            correctAnswer: 3,
            explanation: 'Use glycolysis because it directly maps to the described biological pattern: splits glucose into pyruvate while producing ATP and NADH.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: converts pyruvate to acetyl-CoA and releases CO2. What term should anchor the explanation?',
            options: [
              'citric acid cycle',
              'substrate-level phosphorylation',
              'glycolysis',
              'pyruvate oxidation'
            ],
            correctAnswer: 3,
            explanation: 'Use pyruvate oxidation because it directly maps to the described biological pattern: converts pyruvate to acetyl-CoA and releases CO2.'
          }
        ]
      }
    }
  ]
};
