export const bioCellRespirationPart2Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'bio-cellular-respiration-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Cellular Respiration: Glycolysis
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through substrate-level phosphorylation in glycolysis.
      
      ### Worked biological example
      A student team investigates substrate-level phosphorylation in glycolysis. Their first interpretation step is to identify how **pyruvate oxidation** and **citric acid cycle** work together in the same pathway.
      
      - They classify the primary signal using **pyruvate oxidation**: converts pyruvate to acetyl-CoA and releases CO2.
      - They trace the downstream response using **citric acid cycle**: oxidizes acetyl groups and generates NADH/FADH2.
      - They then compare outcomes with **electron transport chain** and **chemiosmosis** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **pyruvate oxidation**
      - **citric acid cycle**
      - **electron transport chain**
      - **chemiosmosis**
      `
    },
    {
      id: 'bio-cellular-respiration-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Glycolysis, what best describes pyruvate oxidation?',
            options: [
              'uses proton gradient energy to drive ATP synthesis',
              'transfers electrons to oxygen through membrane complexes',
              'oxidizes acetyl groups and generates NADH/FADH2',
              'converts pyruvate to acetyl-CoA and releases CO2'
            ],
            correctAnswer: 3,
            explanation: 'pyruvate oxidation is best matched with: converts pyruvate to acetyl-CoA and releases CO2.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of citric acid cycle?',
            options: [
              'transfers electrons to oxygen through membrane complexes',
              'enzyme complex that phosphorylates ADP using proton flow',
              'oxidizes acetyl groups and generates NADH/FADH2',
              'converts pyruvate to acetyl-CoA and releases CO2'
            ],
            correctAnswer: 2,
            explanation: 'citric acid cycle is best matched with: oxidizes acetyl groups and generates NADH/FADH2.'
          }
        ]
      }
    },
    {
      id: 'bio-cellular-respiration-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Glycolysis
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → pyruvate oxidation
      - **Immediate processing** → citric acid cycle
      - **System-level consequence** → electron transport chain
      - **Measured readout** → chemiosmosis
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | pyruvate oxidation | converts pyruvate to acetyl-CoA and releases CO2 | Early shift in the primary variable |
      | citric acid cycle | oxidizes acetyl groups and generates NADH/FADH2 | Mid-pathway change in process rate |
      | electron transport chain | transfers electrons to oxygen through membrane complexes | Downstream phenotype trend |
      | chemiosmosis | uses proton gradient energy to drive ATP synthesis | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cellular-respiration-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **converts pyruvate to acetyl-CoA and releases CO2**
      2) Term for this definition: **oxidizes acetyl groups and generates NADH/FADH2**
      3) Term for this definition: **transfers electrons to oxygen through membrane complexes**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['pyruvate oxidation', 'citric acid cycle', 'electron transport chain'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'converts pyruvate to acetyl-CoA and releases CO2\'.',
        hint2: 'Second blank points to citric acid cycle; think about the role \'oxidizes acetyl groups and generates NADH/FADH2\'.',
        hint3: 'Third blank is electron transport chain; connect it to \'transfers electrons to oxygen through membrane complexes\'.',
        explanation: 'Correct set: pyruvate oxidation, citric acid cycle, electron transport chain. These three terms define the core mechanism chain for Glycolysis.'
      }
    },
    {
      id: 'bio-cellular-respiration-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'pyruvate oxidation',
            options: ['converts pyruvate to acetyl-CoA and releases CO2', 'uses proton gradient energy to drive ATP synthesis', 'transfers electrons to oxygen through membrane complexes', 'oxidizes acetyl groups and generates NADH/FADH2']
          },
          {
            label: 'citric acid cycle',
            options: ['transfers electrons to oxygen through membrane complexes', 'enzyme complex that phosphorylates ADP using proton flow', 'oxidizes acetyl groups and generates NADH/FADH2', 'uses proton gradient energy to drive ATP synthesis']
          },
          {
            label: 'electron transport chain',
            options: ['enzyme complex that phosphorylates ADP using proton flow', 'high-energy electron carrier delivering reducing power', 'uses proton gradient energy to drive ATP synthesis', 'transfers electrons to oxygen through membrane complexes']
          }
        ],
        correctAnswers: ['converts pyruvate to acetyl-CoA and releases CO2', 'oxidizes acetyl groups and generates NADH/FADH2', 'transfers electrons to oxygen through membrane complexes'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'pyruvate oxidation, citric acid cycle, and electron transport chain should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cellular-respiration-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because pyruvate oxidation converts pyruvate to acetyl-CoA and releases CO2, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Oxygen is the terminal electron acceptor, not a direct reactant in every step.
      - NADH and FADH2 are not ATP themselves; they transfer electron energy.
      - Pathway location matters for interpretation of transport and regulation questions.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cellular-respiration-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In substrate-level phosphorylation in glycolysis, the observed pattern is: uses proton gradient energy to drive ATP synthesis. What term should anchor the explanation?',
            options: [
              'pyruvate oxidation',
              'chemiosmosis',
              'electron transport chain',
              'citric acid cycle'
            ],
            correctAnswer: 1,
            explanation: 'Use chemiosmosis because it directly maps to the described biological pattern: uses proton gradient energy to drive ATP synthesis.'
          },
          {
            question: 'In an AP-style free-response about glycolysis, the observed pattern is: enzyme complex that phosphorylates ADP using proton flow. What term should anchor the explanation?',
            options: [
              'electron transport chain',
              'ATP synthase',
              'NADH',
              'chemiosmosis'
            ],
            correctAnswer: 1,
            explanation: 'Use ATP synthase because it directly maps to the described biological pattern: enzyme complex that phosphorylates ADP using proton flow.'
          }
        ]
      }
    }
  ]
};
