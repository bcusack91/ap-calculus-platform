export const bioEvidencePart5Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Evidence for Evolution: Direct Observation
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through antibiotic resistance monitoring.
      
      ### Worked biological example
      A student team investigates antibiotic resistance monitoring. Their first interpretation step is to identify how **phylogeny** and **biogeography** work together in the same pathway.
      
      - They classify the primary signal using **phylogeny**: hypothesized pattern of evolutionary relationships.
      - They trace the downstream response using **biogeography**: geographic distribution of species across regions and time.
      - They then compare outcomes with **vestigial trait** and **selection pressure** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **phylogeny**
      - **biogeography**
      - **vestigial trait**
      - **selection pressure**
      `
    },
    {
      id: 'bio-evidence-evolution-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Direct Observation, what best describes phylogeny?',
            options: [
              'reduced structure inherited from an ancestral function',
              'geographic distribution of species across regions and time',
              'environmental factor that alters differential survival',
              'hypothesized pattern of evolutionary relationships'
            ],
            correctAnswer: 3,
            explanation: 'phylogeny is best matched with: hypothesized pattern of evolutionary relationships.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of biogeography?',
            options: [
              'geographic distribution of species across regions and time',
              'reduced structure inherited from an ancestral function',
              'hypothesized pattern of evolutionary relationships',
              'documented heritable change in populations over generations'
            ],
            correctAnswer: 0,
            explanation: 'biogeography is best matched with: geographic distribution of species across regions and time.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Direct Observation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → phylogeny
      - **Immediate processing** → biogeography
      - **System-level consequence** → vestigial trait
      - **Measured readout** → selection pressure
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | phylogeny | hypothesized pattern of evolutionary relationships | Early shift in the primary variable |
      | biogeography | geographic distribution of species across regions and time | Mid-pathway change in process rate |
      | vestigial trait | reduced structure inherited from an ancestral function | Downstream phenotype trend |
      | selection pressure | environmental factor that alters differential survival | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-evidence-evolution-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **hypothesized pattern of evolutionary relationships**

      2) Term for this definition: **geographic distribution of species across regions and time**

      3) Term for this definition: **reduced structure inherited from an ancestral function**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['phylogeny', 'biogeography', 'vestigial trait'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'hypothesized pattern of evolutionary relationships\'.',
        hint2: 'Second blank points to biogeography; think about the role \'geographic distribution of species across regions and time\'.',
        hint3: 'Third blank is vestigial trait; connect it to \'reduced structure inherited from an ancestral function\'.',
        explanation: 'Correct set: phylogeny, biogeography, vestigial trait. These three terms define the core mechanism chain for Direct Observation.'
      }
    },
    {
      id: 'bio-evidence-evolution-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'phylogeny',
            options: ['environmental factor that alters differential survival', 'hypothesized pattern of evolutionary relationships', 'geographic distribution of species across regions and time', 'reduced structure inherited from an ancestral function']
          },
          {
            label: 'biogeography',
            options: ['geographic distribution of species across regions and time', 'environmental factor that alters differential survival', 'documented heritable change in populations over generations', 'reduced structure inherited from an ancestral function']
          },
          {
            label: 'vestigial trait',
            options: ['environmental factor that alters differential survival', 'chronological evidence of historical life forms in rock strata', 'reduced structure inherited from an ancestral function', 'documented heritable change in populations over generations']
          }
        ],
        correctAnswers: ['hypothesized pattern of evolutionary relationships', 'geographic distribution of species across regions and time', 'reduced structure inherited from an ancestral function'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'phylogeny, biogeography, and vestigial trait should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-evidence-evolution-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because phylogeny hypothesized pattern of evolutionary relationships, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - No single line of evidence proves every detail; strength comes from convergence.
      - Analogous traits do not necessarily indicate close relatedness.
      - Evolutionary change can be measured on contemporary timescales.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-evidence-evolution-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In antibiotic resistance monitoring, the observed pattern is: environmental factor that alters differential survival. What term should anchor the explanation?',
            options: [
              'biogeography',
              'selection pressure',
              'vestigial trait',
              'phylogeny'
            ],
            correctAnswer: 1,
            explanation: 'Use selection pressure because it directly maps to the described biological pattern: environmental factor that alters differential survival.'
          },
          {
            question: 'In an AP-style free-response about direct observation, the observed pattern is: documented heritable change in populations over generations. What term should anchor the explanation?',
            options: [
              'selection pressure',
              'fossil record',
              'observed evolution',
              'vestigial trait'
            ],
            correctAnswer: 2,
            explanation: 'Use observed evolution because it directly maps to the described biological pattern: documented heritable change in populations over generations.'
          }
        ]
      }
    }
  ]
};
