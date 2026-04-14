export const bioEvidencePart2Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Evidence for Evolution: Homologous Structures
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through vertebrate limb comparisons across taxa.
      
      ### Worked biological example
      A student team investigates vertebrate limb comparisons across taxa. Their first interpretation step is to identify how **homologous structure** and **analogous structure** work together in the same pathway.
      
      - They classify the primary signal using **homologous structure**: shared anatomy due to common ancestry.
      - They trace the downstream response using **analogous structure**: similar function evolved independently in different lineages.
      - They then compare outcomes with **molecular homology** and **phylogeny** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **homologous structure**
      - **analogous structure**
      - **molecular homology**
      - **phylogeny**
      `
    },
    {
      id: 'bio-evidence-evolution-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Homologous Structures, what best describes homologous structure?',
            options: [
              'shared anatomy due to common ancestry',
              'sequence similarity indicating evolutionary relatedness',
              'similar function evolved independently in different lineages',
              'hypothesized pattern of evolutionary relationships'
            ],
            correctAnswer: 0,
            explanation: 'homologous structure is best matched with: shared anatomy due to common ancestry.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of analogous structure?',
            options: [
              'geographic distribution of species across regions and time',
              'similar function evolved independently in different lineages',
              'shared anatomy due to common ancestry',
              'sequence similarity indicating evolutionary relatedness'
            ],
            correctAnswer: 1,
            explanation: 'analogous structure is best matched with: similar function evolved independently in different lineages.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Homologous Structures
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → homologous structure
      - **Immediate processing** → analogous structure
      - **System-level consequence** → molecular homology
      - **Measured readout** → phylogeny
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | homologous structure | shared anatomy due to common ancestry | Early shift in the primary variable |
      | analogous structure | similar function evolved independently in different lineages | Mid-pathway change in process rate |
      | molecular homology | sequence similarity indicating evolutionary relatedness | Downstream phenotype trend |
      | phylogeny | hypothesized pattern of evolutionary relationships | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-evidence-evolution-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **shared anatomy due to common ancestry**

      2) Term for this definition: **similar function evolved independently in different lineages**

      3) Term for this definition: **sequence similarity indicating evolutionary relatedness**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['homologous structure', 'analogous structure', 'molecular homology'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'shared anatomy due to common ancestry\'.',
        hint2: 'Second blank points to analogous structure; think about the role \'similar function evolved independently in different lineages\'.',
        hint3: 'Third blank is molecular homology; connect it to \'sequence similarity indicating evolutionary relatedness\'.',
        explanation: 'Correct set: homologous structure, analogous structure, molecular homology. These three terms define the core mechanism chain for Homologous Structures.'
      }
    },
    {
      id: 'bio-evidence-evolution-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'homologous structure',
            options: ['shared anatomy due to common ancestry', 'similar function evolved independently in different lineages', 'sequence similarity indicating evolutionary relatedness', 'hypothesized pattern of evolutionary relationships']
          },
          {
            label: 'analogous structure',
            options: ['geographic distribution of species across regions and time', 'sequence similarity indicating evolutionary relatedness', 'hypothesized pattern of evolutionary relationships', 'similar function evolved independently in different lineages']
          },
          {
            label: 'molecular homology',
            options: ['geographic distribution of species across regions and time', 'reduced structure inherited from an ancestral function', 'sequence similarity indicating evolutionary relatedness', 'hypothesized pattern of evolutionary relationships']
          }
        ],
        correctAnswers: ['shared anatomy due to common ancestry', 'similar function evolved independently in different lineages', 'sequence similarity indicating evolutionary relatedness'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'homologous structure, analogous structure, and molecular homology should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-evidence-evolution-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because homologous structure shared anatomy due to common ancestry, we expect ...".
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
      id: 'bio-evidence-evolution-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In vertebrate limb comparisons across taxa, the observed pattern is: hypothesized pattern of evolutionary relationships. What term should anchor the explanation?',
            options: [
              'molecular homology',
              'phylogeny',
              'homologous structure',
              'analogous structure'
            ],
            correctAnswer: 1,
            explanation: 'Use phylogeny because it directly maps to the described biological pattern: hypothesized pattern of evolutionary relationships.'
          },
          {
            question: 'In an AP-style free-response about homologous structures, the observed pattern is: geographic distribution of species across regions and time. What term should anchor the explanation?',
            options: [
              'phylogeny',
              'biogeography',
              'molecular homology',
              'vestigial trait'
            ],
            correctAnswer: 1,
            explanation: 'Use biogeography because it directly maps to the described biological pattern: geographic distribution of species across regions and time.'
          }
        ]
      }
    }
  ]
};
