export const bioEvidencePart3Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Evidence for Evolution: Molecular Evidence
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through DNA sequence divergence analysis.
      
      ### Worked biological example
      A student team investigates DNA sequence divergence analysis. Their first interpretation step is to identify how **analogous structure** and **molecular homology** work together in the same pathway.
      
      - They classify the primary signal using **analogous structure**: similar function evolved independently in different lineages.
      - They trace the downstream response using **molecular homology**: sequence similarity indicating evolutionary relatedness.
      - They then compare outcomes with **phylogeny** and **biogeography** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **analogous structure**
      - **molecular homology**
      - **phylogeny**
      - **biogeography**
      `
    },
    {
      id: 'bio-evidence-evolution-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Molecular Evidence, what best describes analogous structure?',
            options: [
              'hypothesized pattern of evolutionary relationships',
              'similar function evolved independently in different lineages',
              'sequence similarity indicating evolutionary relatedness',
              'geographic distribution of species across regions and time'
            ],
            correctAnswer: 1,
            explanation: 'analogous structure is best matched with: similar function evolved independently in different lineages.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of molecular homology?',
            options: [
              'sequence similarity indicating evolutionary relatedness',
              'hypothesized pattern of evolutionary relationships',
              'similar function evolved independently in different lineages',
              'reduced structure inherited from an ancestral function'
            ],
            correctAnswer: 0,
            explanation: 'molecular homology is best matched with: sequence similarity indicating evolutionary relatedness.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Molecular Evidence
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → analogous structure
      - **Immediate processing** → molecular homology
      - **System-level consequence** → phylogeny
      - **Measured readout** → biogeography
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | analogous structure | similar function evolved independently in different lineages | Early shift in the primary variable |
      | molecular homology | sequence similarity indicating evolutionary relatedness | Mid-pathway change in process rate |
      | phylogeny | hypothesized pattern of evolutionary relationships | Downstream phenotype trend |
      | biogeography | geographic distribution of species across regions and time | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-evidence-evolution-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **similar function evolved independently in different lineages**

      2) Term for this definition: **sequence similarity indicating evolutionary relatedness**

      3) Term for this definition: **hypothesized pattern of evolutionary relationships**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['analogous structure', 'molecular homology', 'phylogeny'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'similar function evolved independently in different lineages\'.',
        hint2: 'Second blank points to molecular homology; think about the role \'sequence similarity indicating evolutionary relatedness\'.',
        hint3: 'Third blank is phylogeny; connect it to \'hypothesized pattern of evolutionary relationships\'.',
        explanation: 'Correct set: analogous structure, molecular homology, phylogeny. These three terms define the core mechanism chain for Molecular Evidence.'
      }
    },
    {
      id: 'bio-evidence-evolution-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'analogous structure',
            options: ['sequence similarity indicating evolutionary relatedness', 'similar function evolved independently in different lineages', 'geographic distribution of species across regions and time', 'hypothesized pattern of evolutionary relationships']
          },
          {
            label: 'molecular homology',
            options: ['sequence similarity indicating evolutionary relatedness', 'reduced structure inherited from an ancestral function', 'geographic distribution of species across regions and time', 'hypothesized pattern of evolutionary relationships']
          },
          {
            label: 'phylogeny',
            options: ['hypothesized pattern of evolutionary relationships', 'reduced structure inherited from an ancestral function', 'environmental factor that alters differential survival', 'geographic distribution of species across regions and time']
          }
        ],
        correctAnswers: ['similar function evolved independently in different lineages', 'sequence similarity indicating evolutionary relatedness', 'hypothesized pattern of evolutionary relationships'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'analogous structure, molecular homology, and phylogeny should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-evidence-evolution-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because analogous structure similar function evolved independently in different lineages, we expect ...".
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
      id: 'bio-evidence-evolution-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In DNA sequence divergence analysis, the observed pattern is: geographic distribution of species across regions and time. What term should anchor the explanation?',
            options: [
              'molecular homology',
              'phylogeny',
              'analogous structure',
              'biogeography'
            ],
            correctAnswer: 3,
            explanation: 'Use biogeography because it directly maps to the described biological pattern: geographic distribution of species across regions and time.'
          },
          {
            question: 'In an AP-style free-response about molecular evidence, the observed pattern is: reduced structure inherited from an ancestral function. What term should anchor the explanation?',
            options: [
              'phylogeny',
              'selection pressure',
              'biogeography',
              'vestigial trait'
            ],
            correctAnswer: 3,
            explanation: 'Use vestigial trait because it directly maps to the described biological pattern: reduced structure inherited from an ancestral function.'
          }
        ]
      }
    }
  ]
};
