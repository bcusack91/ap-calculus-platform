export const bioCellRespirationPart5Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'bio-cellular-respiration-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Cellular Respiration: Oxidative Phosphorylation
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through proton motive force and ATP synthase coupling.
      
      ### Worked biological example
      A student team investigates proton motive force and ATP synthase coupling. Their first interpretation step is to identify how **chemiosmosis** and **ATP synthase** work together in the same pathway.
      
      - They classify the primary signal using **chemiosmosis**: uses proton gradient energy to drive ATP synthesis.
      - They trace the downstream response using **ATP synthase**: enzyme complex that phosphorylates ADP using proton flow.
      - They then compare outcomes with **NADH** and **FADH2** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **chemiosmosis**
      - **ATP synthase**
      - **NADH**
      - **FADH2**
      `
    },
    {
      id: 'bio-cellular-respiration-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Oxidative Phosphorylation, what best describes chemiosmosis?',
            options: [
              'enzyme complex that phosphorylates ADP using proton flow',
              'high-energy electron carrier delivering reducing power',
              'uses proton gradient energy to drive ATP synthesis',
              'electron carrier feeding electrons at a lower-energy entry point'
            ],
            correctAnswer: 2,
            explanation: 'chemiosmosis is best matched with: uses proton gradient energy to drive ATP synthesis.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of ATP synthase?',
            options: [
              'direct ATP formation from a phosphorylated intermediate',
              'uses proton gradient energy to drive ATP synthesis',
              'enzyme complex that phosphorylates ADP using proton flow',
              'high-energy electron carrier delivering reducing power'
            ],
            correctAnswer: 2,
            explanation: 'ATP synthase is best matched with: enzyme complex that phosphorylates ADP using proton flow.'
          }
        ]
      }
    },
    {
      id: 'bio-cellular-respiration-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Oxidative Phosphorylation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → chemiosmosis
      - **Immediate processing** → ATP synthase
      - **System-level consequence** → NADH
      - **Measured readout** → FADH2
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | chemiosmosis | uses proton gradient energy to drive ATP synthesis | Early shift in the primary variable |
      | ATP synthase | enzyme complex that phosphorylates ADP using proton flow | Mid-pathway change in process rate |
      | NADH | high-energy electron carrier delivering reducing power | Downstream phenotype trend |
      | FADH2 | electron carrier feeding electrons at a lower-energy entry point | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cellular-respiration-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **uses proton gradient energy to drive ATP synthesis**
      2) Term for this definition: **enzyme complex that phosphorylates ADP using proton flow**
      3) Term for this definition: **high-energy electron carrier delivering reducing power**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['chemiosmosis', 'ATP synthase', 'NADH'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'uses proton gradient energy to drive ATP synthesis\'.',
        hint2: 'Second blank points to ATP synthase; think about the role \'enzyme complex that phosphorylates ADP using proton flow\'.',
        hint3: 'Third blank is NADH; connect it to \'high-energy electron carrier delivering reducing power\'.',
        explanation: 'Correct set: chemiosmosis, ATP synthase, NADH. These three terms define the core mechanism chain for Oxidative Phosphorylation.'
      }
    },
    {
      id: 'bio-cellular-respiration-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'chemiosmosis',
            options: ['enzyme complex that phosphorylates ADP using proton flow', 'uses proton gradient energy to drive ATP synthesis', 'high-energy electron carrier delivering reducing power', 'electron carrier feeding electrons at a lower-energy entry point']
          },
          {
            label: 'ATP synthase',
            options: ['enzyme complex that phosphorylates ADP using proton flow', 'high-energy electron carrier delivering reducing power', 'direct ATP formation from a phosphorylated intermediate', 'electron carrier feeding electrons at a lower-energy entry point']
          },
          {
            label: 'NADH',
            options: ['high-energy electron carrier delivering reducing power', 'direct ATP formation from a phosphorylated intermediate', 'splits glucose into pyruvate while producing ATP and NADH', 'electron carrier feeding electrons at a lower-energy entry point']
          }
        ],
        correctAnswers: ['uses proton gradient energy to drive ATP synthesis', 'enzyme complex that phosphorylates ADP using proton flow', 'high-energy electron carrier delivering reducing power'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'chemiosmosis, ATP synthase, and NADH should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cellular-respiration-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because chemiosmosis uses proton gradient energy to drive ATP synthesis, we expect ...".
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
      id: 'bio-cellular-respiration-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In proton motive force and ATP synthase coupling, the observed pattern is: electron carrier feeding electrons at a lower-energy entry point. What term should anchor the explanation?',
            options: [
              'ATP synthase',
              'FADH2',
              'chemiosmosis',
              'NADH'
            ],
            correctAnswer: 1,
            explanation: 'Use FADH2 because it directly maps to the described biological pattern: electron carrier feeding electrons at a lower-energy entry point.'
          },
          {
            question: 'In an AP-style free-response about oxidative phosphorylation, the observed pattern is: direct ATP formation from a phosphorylated intermediate. What term should anchor the explanation?',
            options: [
              'substrate-level phosphorylation',
              'FADH2',
              'NADH',
              'glycolysis'
            ],
            correctAnswer: 0,
            explanation: 'Use substrate-level phosphorylation because it directly maps to the described biological pattern: direct ATP formation from a phosphorylated intermediate.'
          }
        ]
      }
    }
  ]
};
