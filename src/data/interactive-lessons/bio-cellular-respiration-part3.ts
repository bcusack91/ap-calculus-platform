export const bioCellRespirationPart3Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'bio-cellular-respiration-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Cellular Respiration: Pyruvate Oxidation
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through mitochondrial entry of pyruvate-derived carbons.
      
      ### Worked biological example
      A student team investigates mitochondrial entry of pyruvate-derived carbons. Their first interpretation step is to identify how **citric acid cycle** and **electron transport chain** work together in the same pathway.
      
      - They classify the primary signal using **citric acid cycle**: oxidizes acetyl groups and generates NADH/FADH2.
      - They trace the downstream response using **electron transport chain**: transfers electrons to oxygen through membrane complexes.
      - They then compare outcomes with **chemiosmosis** and **ATP synthase** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **citric acid cycle**
      - **electron transport chain**
      - **chemiosmosis**
      - **ATP synthase**
      `
    },
    {
      id: 'bio-cellular-respiration-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Pyruvate Oxidation, what best describes citric acid cycle?',
            options: [
              'enzyme complex that phosphorylates ADP using proton flow',
              'uses proton gradient energy to drive ATP synthesis',
              'oxidizes acetyl groups and generates NADH/FADH2',
              'transfers electrons to oxygen through membrane complexes'
            ],
            correctAnswer: 2,
            explanation: 'citric acid cycle is best matched with: oxidizes acetyl groups and generates NADH/FADH2.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of electron transport chain?',
            options: [
              'high-energy electron carrier delivering reducing power',
              'oxidizes acetyl groups and generates NADH/FADH2',
              'transfers electrons to oxygen through membrane complexes',
              'uses proton gradient energy to drive ATP synthesis'
            ],
            correctAnswer: 2,
            explanation: 'electron transport chain is best matched with: transfers electrons to oxygen through membrane complexes.'
          }
        ]
      }
    },
    {
      id: 'bio-cellular-respiration-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Pyruvate Oxidation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → citric acid cycle
      - **Immediate processing** → electron transport chain
      - **System-level consequence** → chemiosmosis
      - **Measured readout** → ATP synthase
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | citric acid cycle | oxidizes acetyl groups and generates NADH/FADH2 | Early shift in the primary variable |
      | electron transport chain | transfers electrons to oxygen through membrane complexes | Mid-pathway change in process rate |
      | chemiosmosis | uses proton gradient energy to drive ATP synthesis | Downstream phenotype trend |
      | ATP synthase | enzyme complex that phosphorylates ADP using proton flow | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cellular-respiration-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **oxidizes acetyl groups and generates NADH/FADH2**
      2) Term for this definition: **transfers electrons to oxygen through membrane complexes**
      3) Term for this definition: **uses proton gradient energy to drive ATP synthesis**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['citric acid cycle', 'electron transport chain', 'chemiosmosis'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'oxidizes acetyl groups and generates NADH/FADH2\'.',
        hint2: 'Second blank points to electron transport chain; think about the role \'transfers electrons to oxygen through membrane complexes\'.',
        hint3: 'Third blank is chemiosmosis; connect it to \'uses proton gradient energy to drive ATP synthesis\'.',
        explanation: 'Correct set: citric acid cycle, electron transport chain, chemiosmosis. These three terms define the core mechanism chain for Pyruvate Oxidation.'
      }
    },
    {
      id: 'bio-cellular-respiration-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'citric acid cycle',
            options: ['uses proton gradient energy to drive ATP synthesis', 'transfers electrons to oxygen through membrane complexes', 'enzyme complex that phosphorylates ADP using proton flow', 'oxidizes acetyl groups and generates NADH/FADH2']
          },
          {
            label: 'electron transport chain',
            options: ['transfers electrons to oxygen through membrane complexes', 'uses proton gradient energy to drive ATP synthesis', 'enzyme complex that phosphorylates ADP using proton flow', 'high-energy electron carrier delivering reducing power']
          },
          {
            label: 'chemiosmosis',
            options: ['high-energy electron carrier delivering reducing power', 'electron carrier feeding electrons at a lower-energy entry point', 'enzyme complex that phosphorylates ADP using proton flow', 'uses proton gradient energy to drive ATP synthesis']
          }
        ],
        correctAnswers: ['oxidizes acetyl groups and generates NADH/FADH2', 'transfers electrons to oxygen through membrane complexes', 'uses proton gradient energy to drive ATP synthesis'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'citric acid cycle, electron transport chain, and chemiosmosis should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cellular-respiration-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because citric acid cycle oxidizes acetyl groups and generates NADH/FADH2, we expect ...".
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
      id: 'bio-cellular-respiration-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In mitochondrial entry of pyruvate-derived carbons, the observed pattern is: enzyme complex that phosphorylates ADP using proton flow. What term should anchor the explanation?',
            options: [
              'electron transport chain',
              'ATP synthase',
              'citric acid cycle',
              'chemiosmosis'
            ],
            correctAnswer: 1,
            explanation: 'Use ATP synthase because it directly maps to the described biological pattern: enzyme complex that phosphorylates ADP using proton flow.'
          },
          {
            question: 'In an AP-style free-response about pyruvate oxidation, the observed pattern is: high-energy electron carrier delivering reducing power. What term should anchor the explanation?',
            options: [
              'FADH2',
              'NADH',
              'chemiosmosis',
              'ATP synthase'
            ],
            correctAnswer: 1,
            explanation: 'Use NADH because it directly maps to the described biological pattern: high-energy electron carrier delivering reducing power.'
          }
        ]
      }
    }
  ]
};
