export const bioCellRespirationPart6Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'bio-cellular-respiration-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Cellular Respiration: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through energy accounting with pathway data.
      
      ### Worked biological example
      A student team investigates energy accounting with pathway data. Their first interpretation step is to identify how **ATP synthase** and **NADH** work together in the same pathway.
      
      - They classify the primary signal using **ATP synthase**: enzyme complex that phosphorylates ADP using proton flow.
      - They trace the downstream response using **NADH**: high-energy electron carrier delivering reducing power.
      - They then compare outcomes with **FADH2** and **substrate-level phosphorylation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **ATP synthase**
      - **NADH**
      - **FADH2**
      - **substrate-level phosphorylation**
      `
    },
    {
      id: 'bio-cellular-respiration-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes ATP synthase?',
            options: [
              'electron carrier feeding electrons at a lower-energy entry point',
              'enzyme complex that phosphorylates ADP using proton flow',
              'high-energy electron carrier delivering reducing power',
              'direct ATP formation from a phosphorylated intermediate'
            ],
            correctAnswer: 1,
            explanation: 'ATP synthase is best matched with: enzyme complex that phosphorylates ADP using proton flow.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of NADH?',
            options: [
              'enzyme complex that phosphorylates ADP using proton flow',
              'high-energy electron carrier delivering reducing power',
              'electron carrier feeding electrons at a lower-energy entry point',
              'splits glucose into pyruvate while producing ATP and NADH'
            ],
            correctAnswer: 1,
            explanation: 'NADH is best matched with: high-energy electron carrier delivering reducing power.'
          }
        ]
      }
    },
    {
      id: 'bio-cellular-respiration-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → ATP synthase
      - **Immediate processing** → NADH
      - **System-level consequence** → FADH2
      - **Measured readout** → substrate-level phosphorylation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | ATP synthase | enzyme complex that phosphorylates ADP using proton flow | Early shift in the primary variable |
      | NADH | high-energy electron carrier delivering reducing power | Mid-pathway change in process rate |
      | FADH2 | electron carrier feeding electrons at a lower-energy entry point | Downstream phenotype trend |
      | substrate-level phosphorylation | direct ATP formation from a phosphorylated intermediate | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cellular-respiration-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **enzyme complex that phosphorylates ADP using proton flow**
      2) Term for this definition: **high-energy electron carrier delivering reducing power**
      3) Term for this definition: **electron carrier feeding electrons at a lower-energy entry point**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ATP synthase', 'NADH', 'FADH2'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'enzyme complex that phosphorylates ADP using proton flow\'.',
        hint2: 'Second blank points to NADH; think about the role \'high-energy electron carrier delivering reducing power\'.',
        hint3: 'Third blank is FADH2; connect it to \'electron carrier feeding electrons at a lower-energy entry point\'.',
        explanation: 'Correct set: ATP synthase, NADH, FADH2. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-cellular-respiration-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ATP synthase',
            options: ['high-energy electron carrier delivering reducing power', 'enzyme complex that phosphorylates ADP using proton flow', 'direct ATP formation from a phosphorylated intermediate', 'electron carrier feeding electrons at a lower-energy entry point']
          },
          {
            label: 'NADH',
            options: ['direct ATP formation from a phosphorylated intermediate', 'splits glucose into pyruvate while producing ATP and NADH', 'electron carrier feeding electrons at a lower-energy entry point', 'high-energy electron carrier delivering reducing power']
          },
          {
            label: 'FADH2',
            options: ['electron carrier feeding electrons at a lower-energy entry point', 'converts pyruvate to acetyl-CoA and releases CO2', 'splits glucose into pyruvate while producing ATP and NADH', 'direct ATP formation from a phosphorylated intermediate']
          }
        ],
        correctAnswers: ['enzyme complex that phosphorylates ADP using proton flow', 'high-energy electron carrier delivering reducing power', 'electron carrier feeding electrons at a lower-energy entry point'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'ATP synthase, NADH, and FADH2 should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cellular-respiration-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because ATP synthase enzyme complex that phosphorylates ADP using proton flow, we expect ...".
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
      id: 'bio-cellular-respiration-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In energy accounting with pathway data, the observed pattern is: direct ATP formation from a phosphorylated intermediate. What term should anchor the explanation?',
            options: [
              'substrate-level phosphorylation',
              'NADH',
              'ATP synthase',
              'FADH2'
            ],
            correctAnswer: 0,
            explanation: 'Use substrate-level phosphorylation because it directly maps to the described biological pattern: direct ATP formation from a phosphorylated intermediate.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: splits glucose into pyruvate while producing ATP and NADH. What term should anchor the explanation?',
            options: [
              'FADH2',
              'glycolysis',
              'substrate-level phosphorylation',
              'pyruvate oxidation'
            ],
            correctAnswer: 1,
            explanation: 'Use glycolysis because it directly maps to the described biological pattern: splits glucose into pyruvate while producing ATP and NADH.'
          }
        ]
      }
    }
  ]
};
