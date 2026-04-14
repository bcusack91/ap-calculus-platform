export const bioEvidencePart4Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Evidence for Evolution: Biogeography
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through island endemism and dispersal history.
      
      ### Worked biological example
      A student team investigates island endemism and dispersal history. Their first interpretation step is to identify how **molecular homology** and **phylogeny** work together in the same pathway.
      
      - They classify the primary signal using **molecular homology**: sequence similarity indicating evolutionary relatedness.
      - They trace the downstream response using **phylogeny**: hypothesized pattern of evolutionary relationships.
      - They then compare outcomes with **biogeography** and **vestigial trait** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **molecular homology**
      - **phylogeny**
      - **biogeography**
      - **vestigial trait**
      `
    },
    {
      id: 'bio-evidence-evolution-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Biogeography, what best describes molecular homology?',
            options: [
              'sequence similarity indicating evolutionary relatedness',
              'geographic distribution of species across regions and time',
              'hypothesized pattern of evolutionary relationships',
              'reduced structure inherited from an ancestral function'
            ],
            correctAnswer: 0,
            explanation: 'molecular homology is best matched with: sequence similarity indicating evolutionary relatedness.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of phylogeny?',
            options: [
              'sequence similarity indicating evolutionary relatedness',
              'geographic distribution of species across regions and time',
              'environmental factor that alters differential survival',
              'hypothesized pattern of evolutionary relationships'
            ],
            correctAnswer: 3,
            explanation: 'phylogeny is best matched with: hypothesized pattern of evolutionary relationships.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Biogeography
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → molecular homology
      - **Immediate processing** → phylogeny
      - **System-level consequence** → biogeography
      - **Measured readout** → vestigial trait
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | molecular homology | sequence similarity indicating evolutionary relatedness | Early shift in the primary variable |
      | phylogeny | hypothesized pattern of evolutionary relationships | Mid-pathway change in process rate |
      | biogeography | geographic distribution of species across regions and time | Downstream phenotype trend |
      | vestigial trait | reduced structure inherited from an ancestral function | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-evidence-evolution-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **sequence similarity indicating evolutionary relatedness**

      2) Term for this definition: **hypothesized pattern of evolutionary relationships**

      3) Term for this definition: **geographic distribution of species across regions and time**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['molecular homology', 'phylogeny', 'biogeography'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'sequence similarity indicating evolutionary relatedness\'.',
        hint2: 'Second blank points to phylogeny; think about the role \'hypothesized pattern of evolutionary relationships\'.',
        hint3: 'Third blank is biogeography; connect it to \'geographic distribution of species across regions and time\'.',
        explanation: 'Correct set: molecular homology, phylogeny, biogeography. These three terms define the core mechanism chain for Biogeography.'
      }
    },
    {
      id: 'bio-evidence-evolution-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'molecular homology',
            options: ['hypothesized pattern of evolutionary relationships', 'reduced structure inherited from an ancestral function', 'sequence similarity indicating evolutionary relatedness', 'geographic distribution of species across regions and time']
          },
          {
            label: 'phylogeny',
            options: ['environmental factor that alters differential survival', 'hypothesized pattern of evolutionary relationships', 'reduced structure inherited from an ancestral function', 'geographic distribution of species across regions and time']
          },
          {
            label: 'biogeography',
            options: ['environmental factor that alters differential survival', 'geographic distribution of species across regions and time', 'documented heritable change in populations over generations', 'reduced structure inherited from an ancestral function']
          }
        ],
        correctAnswers: ['sequence similarity indicating evolutionary relatedness', 'hypothesized pattern of evolutionary relationships', 'geographic distribution of species across regions and time'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'molecular homology, phylogeny, and biogeography should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-evidence-evolution-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because molecular homology sequence similarity indicating evolutionary relatedness, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Phylogenetic trees represent hypotheses supported by available data.
      - No single line of evidence proves every detail; strength comes from convergence.
      - Analogous traits do not necessarily indicate close relatedness.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-evidence-evolution-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In island endemism and dispersal history, the observed pattern is: reduced structure inherited from an ancestral function. What term should anchor the explanation?',
            options: [
              'biogeography',
              'phylogeny',
              'vestigial trait',
              'molecular homology'
            ],
            correctAnswer: 2,
            explanation: 'Use vestigial trait because it directly maps to the described biological pattern: reduced structure inherited from an ancestral function.'
          },
          {
            question: 'In an AP-style free-response about biogeography, the observed pattern is: environmental factor that alters differential survival. What term should anchor the explanation?',
            options: [
              'vestigial trait',
              'selection pressure',
              'observed evolution',
              'biogeography'
            ],
            correctAnswer: 1,
            explanation: 'Use selection pressure because it directly maps to the described biological pattern: environmental factor that alters differential survival.'
          }
        ]
      }
    }
  ]
};
