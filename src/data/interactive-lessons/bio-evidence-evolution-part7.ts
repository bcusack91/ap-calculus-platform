export const bioEvidencePart7Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Evidence for Evolution: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through AP argumentation from evidence sets.
      
      ### Worked biological example
      A student team investigates AP argumentation from evidence sets. Their first interpretation step is to identify how **vestigial trait** and **selection pressure** work together in the same pathway.
      
      - They classify the primary signal using **vestigial trait**: reduced structure inherited from an ancestral function.
      - They trace the downstream response using **selection pressure**: environmental factor that alters differential survival.
      - They then compare outcomes with **observed evolution** and **fossil record** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **vestigial trait**
      - **selection pressure**
      - **observed evolution**
      - **fossil record**
      `
    },
    {
      id: 'bio-evidence-evolution-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes vestigial trait?',
            options: [
              'reduced structure inherited from an ancestral function',
              'environmental factor that alters differential survival',
              'documented heritable change in populations over generations',
              'chronological evidence of historical life forms in rock strata'
            ],
            correctAnswer: 0,
            explanation: 'vestigial trait is best matched with: reduced structure inherited from an ancestral function.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of selection pressure?',
            options: [
              'environmental factor that alters differential survival',
              'documented heritable change in populations over generations',
              'reduced structure inherited from an ancestral function',
              'shared anatomy due to common ancestry'
            ],
            correctAnswer: 0,
            explanation: 'selection pressure is best matched with: environmental factor that alters differential survival.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → vestigial trait
      - **Immediate processing** → selection pressure
      - **System-level consequence** → observed evolution
      - **Measured readout** → fossil record
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | vestigial trait | reduced structure inherited from an ancestral function | Early shift in the primary variable |
      | selection pressure | environmental factor that alters differential survival | Mid-pathway change in process rate |
      | observed evolution | documented heritable change in populations over generations | Downstream phenotype trend |
      | fossil record | chronological evidence of historical life forms in rock strata | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-evidence-evolution-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **reduced structure inherited from an ancestral function**

      2) Term for this definition: **environmental factor that alters differential survival**

      3) Term for this definition: **documented heritable change in populations over generations**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['vestigial trait', 'selection pressure', 'observed evolution'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'reduced structure inherited from an ancestral function\'.',
        hint2: 'Second blank points to selection pressure; think about the role \'environmental factor that alters differential survival\'.',
        hint3: 'Third blank is observed evolution; connect it to \'documented heritable change in populations over generations\'.',
        explanation: 'Correct set: vestigial trait, selection pressure, observed evolution. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-evidence-evolution-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'vestigial trait',
            options: ['reduced structure inherited from an ancestral function', 'environmental factor that alters differential survival', 'documented heritable change in populations over generations', 'chronological evidence of historical life forms in rock strata']
          },
          {
            label: 'selection pressure',
            options: ['documented heritable change in populations over generations', 'shared anatomy due to common ancestry', 'environmental factor that alters differential survival', 'chronological evidence of historical life forms in rock strata']
          },
          {
            label: 'observed evolution',
            options: ['shared anatomy due to common ancestry', 'similar function evolved independently in different lineages', 'documented heritable change in populations over generations', 'chronological evidence of historical life forms in rock strata']
          }
        ],
        correctAnswers: ['reduced structure inherited from an ancestral function', 'environmental factor that alters differential survival', 'documented heritable change in populations over generations'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'vestigial trait, selection pressure, and observed evolution should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-evidence-evolution-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because vestigial trait reduced structure inherited from an ancestral function, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Evolutionary change can be measured on contemporary timescales.
      - Phylogenetic trees represent hypotheses supported by available data.
      - No single line of evidence proves every detail; strength comes from convergence.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-evidence-evolution-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In AP argumentation from evidence sets, the observed pattern is: chronological evidence of historical life forms in rock strata. What term should anchor the explanation?',
            options: [
              'observed evolution',
              'fossil record',
              'selection pressure',
              'vestigial trait'
            ],
            correctAnswer: 1,
            explanation: 'Use fossil record because it directly maps to the described biological pattern: chronological evidence of historical life forms in rock strata.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: shared anatomy due to common ancestry. What term should anchor the explanation?',
            options: [
              'analogous structure',
              'homologous structure',
              'observed evolution',
              'fossil record'
            ],
            correctAnswer: 1,
            explanation: 'Use homologous structure because it directly maps to the described biological pattern: shared anatomy due to common ancestry.'
          }
        ]
      }
    }
  ]
};
