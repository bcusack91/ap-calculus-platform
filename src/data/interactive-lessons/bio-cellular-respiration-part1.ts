export const bioCellRespirationPart1Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'bio-cellular-respiration-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Cellular Respiration: Overview of Cell Respiration
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through ATP demand during sprinting and recovery.
      
      ### Worked biological example
      A student team investigates ATP demand during sprinting and recovery. Their first interpretation step is to identify how **glycolysis** and **pyruvate oxidation** work together in the same pathway.
      
      - They classify the primary signal using **glycolysis**: splits glucose into pyruvate while producing ATP and NADH.
      - They trace the downstream response using **pyruvate oxidation**: converts pyruvate to acetyl-CoA and releases CO2.
      - They then compare outcomes with **citric acid cycle** and **electron transport chain** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **glycolysis**
      - **pyruvate oxidation**
      - **citric acid cycle**
      - **electron transport chain**
      `
    },
    {
      id: 'bio-cellular-respiration-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Overview of Cell Respiration, what best describes glycolysis?',
            options: [
              'oxidizes acetyl groups and generates NADH/FADH2',
              'transfers electrons to oxygen through membrane complexes',
              'converts pyruvate to acetyl-CoA and releases CO2',
              'splits glucose into pyruvate while producing ATP and NADH'
            ],
            correctAnswer: 3,
            explanation: 'glycolysis is best matched with: splits glucose into pyruvate while producing ATP and NADH.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of pyruvate oxidation?',
            options: [
              'uses proton gradient energy to drive ATP synthesis',
              'oxidizes acetyl groups and generates NADH/FADH2',
              'converts pyruvate to acetyl-CoA and releases CO2',
              'splits glucose into pyruvate while producing ATP and NADH'
            ],
            correctAnswer: 2,
            explanation: 'pyruvate oxidation is best matched with: converts pyruvate to acetyl-CoA and releases CO2.'
          }
        ]
      }
    },
    {
      id: 'bio-cellular-respiration-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Overview of Cell Respiration
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → glycolysis
      - **Immediate processing** → pyruvate oxidation
      - **System-level consequence** → citric acid cycle
      - **Measured readout** → electron transport chain
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | glycolysis | splits glucose into pyruvate while producing ATP and NADH | Early shift in the primary variable |
      | pyruvate oxidation | converts pyruvate to acetyl-CoA and releases CO2 | Mid-pathway change in process rate |
      | citric acid cycle | oxidizes acetyl groups and generates NADH/FADH2 | Downstream phenotype trend |
      | electron transport chain | transfers electrons to oxygen through membrane complexes | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cellular-respiration-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **splits glucose into pyruvate while producing ATP and NADH**
      2) Term for this definition: **converts pyruvate to acetyl-CoA and releases CO2**
      3) Term for this definition: **oxidizes acetyl groups and generates NADH/FADH2**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['glycolysis', 'pyruvate oxidation', 'citric acid cycle'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'splits glucose into pyruvate while producing ATP and NADH\'.',
        hint2: 'Second blank points to pyruvate oxidation; think about the role \'converts pyruvate to acetyl-CoA and releases CO2\'.',
        hint3: 'Third blank is citric acid cycle; connect it to \'oxidizes acetyl groups and generates NADH/FADH2\'.',
        explanation: 'Correct set: glycolysis, pyruvate oxidation, citric acid cycle. These three terms define the core mechanism chain for Overview of Cell Respiration.'
      }
    },
    {
      id: 'bio-cellular-respiration-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'glycolysis',
            options: ['splits glucose into pyruvate while producing ATP and NADH', 'converts pyruvate to acetyl-CoA and releases CO2', 'transfers electrons to oxygen through membrane complexes', 'oxidizes acetyl groups and generates NADH/FADH2']
          },
          {
            label: 'pyruvate oxidation',
            options: ['converts pyruvate to acetyl-CoA and releases CO2', 'oxidizes acetyl groups and generates NADH/FADH2', 'transfers electrons to oxygen through membrane complexes', 'uses proton gradient energy to drive ATP synthesis']
          },
          {
            label: 'citric acid cycle',
            options: ['enzyme complex that phosphorylates ADP using proton flow', 'uses proton gradient energy to drive ATP synthesis', 'transfers electrons to oxygen through membrane complexes', 'oxidizes acetyl groups and generates NADH/FADH2']
          }
        ],
        correctAnswers: ['splits glucose into pyruvate while producing ATP and NADH', 'converts pyruvate to acetyl-CoA and releases CO2', 'oxidizes acetyl groups and generates NADH/FADH2'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'glycolysis, pyruvate oxidation, and citric acid cycle should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cellular-respiration-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because glycolysis splits glucose into pyruvate while producing ATP and NADH, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Most ATP in aerobic respiration is generated during oxidative phosphorylation, not glycolysis.
      - Oxygen is the terminal electron acceptor, not a direct reactant in every step.
      - NADH and FADH2 are not ATP themselves; they transfer electron energy.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cellular-respiration-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In ATP demand during sprinting and recovery, the observed pattern is: transfers electrons to oxygen through membrane complexes. What term should anchor the explanation?',
            options: [
              'citric acid cycle',
              'glycolysis',
              'electron transport chain',
              'pyruvate oxidation'
            ],
            correctAnswer: 2,
            explanation: 'Use electron transport chain because it directly maps to the described biological pattern: transfers electrons to oxygen through membrane complexes.'
          },
          {
            question: 'In an AP-style free-response about overview of cell respiration, the observed pattern is: uses proton gradient energy to drive ATP synthesis. What term should anchor the explanation?',
            options: [
              'chemiosmosis',
              'ATP synthase',
              'electron transport chain',
              'citric acid cycle'
            ],
            correctAnswer: 0,
            explanation: 'Use chemiosmosis because it directly maps to the described biological pattern: uses proton gradient energy to drive ATP synthesis.'
          }
        ]
      }
    }
  ]
};
