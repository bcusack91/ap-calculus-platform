export const bioCellRespirationPart4Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'bio-cellular-respiration-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Cellular Respiration: Citric Acid Cycle
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through electron carrier production in the matrix.
      
      ### Worked biological example
      A student team investigates electron carrier production in the matrix. Their first interpretation step is to identify how **electron transport chain** and **chemiosmosis** work together in the same pathway.
      
      - They classify the primary signal using **electron transport chain**: transfers electrons to oxygen through membrane complexes.
      - They trace the downstream response using **chemiosmosis**: uses proton gradient energy to drive ATP synthesis.
      - They then compare outcomes with **ATP synthase** and **NADH** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **electron transport chain**
      - **chemiosmosis**
      - **ATP synthase**
      - **NADH**
      `
    },
    {
      id: 'bio-cellular-respiration-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Citric Acid Cycle, what best describes electron transport chain?',
            options: [
              'transfers electrons to oxygen through membrane complexes',
              'uses proton gradient energy to drive ATP synthesis',
              'high-energy electron carrier delivering reducing power',
              'enzyme complex that phosphorylates ADP using proton flow'
            ],
            correctAnswer: 0,
            explanation: 'electron transport chain is best matched with: transfers electrons to oxygen through membrane complexes.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of chemiosmosis?',
            options: [
              'enzyme complex that phosphorylates ADP using proton flow',
              'uses proton gradient energy to drive ATP synthesis',
              'transfers electrons to oxygen through membrane complexes',
              'electron carrier feeding electrons at a lower-energy entry point'
            ],
            correctAnswer: 1,
            explanation: 'chemiosmosis is best matched with: uses proton gradient energy to drive ATP synthesis.'
          }
        ]
      }
    },
    {
      id: 'bio-cellular-respiration-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Citric Acid Cycle
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → electron transport chain
      - **Immediate processing** → chemiosmosis
      - **System-level consequence** → ATP synthase
      - **Measured readout** → NADH
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | electron transport chain | transfers electrons to oxygen through membrane complexes | Early shift in the primary variable |
      | chemiosmosis | uses proton gradient energy to drive ATP synthesis | Mid-pathway change in process rate |
      | ATP synthase | enzyme complex that phosphorylates ADP using proton flow | Downstream phenotype trend |
      | NADH | high-energy electron carrier delivering reducing power | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cellular-respiration-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **transfers electrons to oxygen through membrane complexes**
      2) Term for this definition: **uses proton gradient energy to drive ATP synthesis**
      3) Term for this definition: **enzyme complex that phosphorylates ADP using proton flow**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['electron transport chain', 'chemiosmosis', 'ATP synthase'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'transfers electrons to oxygen through membrane complexes\'.',
        hint2: 'Second blank points to chemiosmosis; think about the role \'uses proton gradient energy to drive ATP synthesis\'.',
        hint3: 'Third blank is ATP synthase; connect it to \'enzyme complex that phosphorylates ADP using proton flow\'.',
        explanation: 'Correct set: electron transport chain, chemiosmosis, ATP synthase. These three terms define the core mechanism chain for Citric Acid Cycle.'
      }
    },
    {
      id: 'bio-cellular-respiration-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'electron transport chain',
            options: ['high-energy electron carrier delivering reducing power', 'transfers electrons to oxygen through membrane complexes', 'uses proton gradient energy to drive ATP synthesis', 'enzyme complex that phosphorylates ADP using proton flow']
          },
          {
            label: 'chemiosmosis',
            options: ['high-energy electron carrier delivering reducing power', 'enzyme complex that phosphorylates ADP using proton flow', 'electron carrier feeding electrons at a lower-energy entry point', 'uses proton gradient energy to drive ATP synthesis']
          },
          {
            label: 'ATP synthase',
            options: ['direct ATP formation from a phosphorylated intermediate', 'electron carrier feeding electrons at a lower-energy entry point', 'high-energy electron carrier delivering reducing power', 'enzyme complex that phosphorylates ADP using proton flow']
          }
        ],
        correctAnswers: ['transfers electrons to oxygen through membrane complexes', 'uses proton gradient energy to drive ATP synthesis', 'enzyme complex that phosphorylates ADP using proton flow'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'electron transport chain, chemiosmosis, and ATP synthase should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cellular-respiration-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because electron transport chain transfers electrons to oxygen through membrane complexes, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Pathway location matters for interpretation of transport and regulation questions.
      - Most ATP in aerobic respiration is generated during oxidative phosphorylation, not glycolysis.
      - Oxygen is the terminal electron acceptor, not a direct reactant in every step.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cellular-respiration-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In electron carrier production in the matrix, the observed pattern is: high-energy electron carrier delivering reducing power. What term should anchor the explanation?',
            options: [
              'ATP synthase',
              'electron transport chain',
              'NADH',
              'chemiosmosis'
            ],
            correctAnswer: 2,
            explanation: 'Use NADH because it directly maps to the described biological pattern: high-energy electron carrier delivering reducing power.'
          },
          {
            question: 'In an AP-style free-response about citric acid cycle, the observed pattern is: electron carrier feeding electrons at a lower-energy entry point. What term should anchor the explanation?',
            options: [
              'substrate-level phosphorylation',
              'NADH',
              'FADH2',
              'ATP synthase'
            ],
            correctAnswer: 2,
            explanation: 'Use FADH2 because it directly maps to the described biological pattern: electron carrier feeding electrons at a lower-energy entry point.'
          }
        ]
      }
    }
  ]
};
