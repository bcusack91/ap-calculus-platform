export const bioEvidencePart6Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Evidence for Evolution: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through multi-source evidence integration.
      
      ### Worked biological example
      A student team investigates multi-source evidence integration. Their first interpretation step is to identify how **biogeography** and **vestigial trait** work together in the same pathway.
      
      - They classify the primary signal using **biogeography**: geographic distribution of species across regions and time.
      - They trace the downstream response using **vestigial trait**: reduced structure inherited from an ancestral function.
      - They then compare outcomes with **selection pressure** and **observed evolution** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **biogeography**
      - **vestigial trait**
      - **selection pressure**
      - **observed evolution**
      `
    },
    {
      id: 'bio-evidence-evolution-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes biogeography?',
            options: [
              'environmental factor that alters differential survival',
              'documented heritable change in populations over generations',
              'geographic distribution of species across regions and time',
              'reduced structure inherited from an ancestral function'
            ],
            correctAnswer: 2,
            explanation: 'biogeography is best matched with: geographic distribution of species across regions and time.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of vestigial trait?',
            options: [
              'environmental factor that alters differential survival',
              'geographic distribution of species across regions and time',
              'chronological evidence of historical life forms in rock strata',
              'reduced structure inherited from an ancestral function'
            ],
            correctAnswer: 3,
            explanation: 'vestigial trait is best matched with: reduced structure inherited from an ancestral function.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → biogeography
      - **Immediate processing** → vestigial trait
      - **System-level consequence** → selection pressure
      - **Measured readout** → observed evolution
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | biogeography | geographic distribution of species across regions and time | Early shift in the primary variable |
      | vestigial trait | reduced structure inherited from an ancestral function | Mid-pathway change in process rate |
      | selection pressure | environmental factor that alters differential survival | Downstream phenotype trend |
      | observed evolution | documented heritable change in populations over generations | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-evidence-evolution-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **geographic distribution of species across regions and time**
      2) Term for this definition: **reduced structure inherited from an ancestral function**
      3) Term for this definition: **environmental factor that alters differential survival**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['biogeography', 'vestigial trait', 'selection pressure'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'geographic distribution of species across regions and time\'.',
        hint2: 'Second blank points to vestigial trait; think about the role \'reduced structure inherited from an ancestral function\'.',
        hint3: 'Third blank is selection pressure; connect it to \'environmental factor that alters differential survival\'.',
        explanation: 'Correct set: biogeography, vestigial trait, selection pressure. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-evidence-evolution-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'biogeography',
            options: ['documented heritable change in populations over generations', 'geographic distribution of species across regions and time', 'reduced structure inherited from an ancestral function', 'environmental factor that alters differential survival']
          },
          {
            label: 'vestigial trait',
            options: ['reduced structure inherited from an ancestral function', 'environmental factor that alters differential survival', 'documented heritable change in populations over generations', 'chronological evidence of historical life forms in rock strata']
          },
          {
            label: 'selection pressure',
            options: ['environmental factor that alters differential survival', 'shared anatomy due to common ancestry', 'documented heritable change in populations over generations', 'chronological evidence of historical life forms in rock strata']
          }
        ],
        correctAnswers: ['geographic distribution of species across regions and time', 'reduced structure inherited from an ancestral function', 'environmental factor that alters differential survival'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'biogeography, vestigial trait, and selection pressure should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-evidence-evolution-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because biogeography geographic distribution of species across regions and time, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Analogous traits do not necessarily indicate close relatedness.
      - Evolutionary change can be measured on contemporary timescales.
      - Phylogenetic trees represent hypotheses supported by available data.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-evidence-evolution-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In multi-source evidence integration, the observed pattern is: documented heritable change in populations over generations. What term should anchor the explanation?',
            options: [
              'selection pressure',
              'vestigial trait',
              'observed evolution',
              'biogeography'
            ],
            correctAnswer: 2,
            explanation: 'Use observed evolution because it directly maps to the described biological pattern: documented heritable change in populations over generations.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: chronological evidence of historical life forms in rock strata. What term should anchor the explanation?',
            options: [
              'homologous structure',
              'selection pressure',
              'fossil record',
              'observed evolution'
            ],
            correctAnswer: 2,
            explanation: 'Use fossil record because it directly maps to the described biological pattern: chronological evidence of historical life forms in rock strata.'
          }
        ]
      }
    }
  ]
};
