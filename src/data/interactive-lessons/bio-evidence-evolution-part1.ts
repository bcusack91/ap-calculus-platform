export const bioEvidencePart1Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Evidence for Evolution: Fossil Record
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through transitional fossils across sediment layers.
      
      ### Worked biological example
      A student team investigates transitional fossils across sediment layers. Their first interpretation step is to identify how **fossil record** and **homologous structure** work together in the same pathway.
      
      - They classify the primary signal using **fossil record**: chronological evidence of historical life forms in rock strata.
      - They trace the downstream response using **homologous structure**: shared anatomy due to common ancestry.
      - They then compare outcomes with **analogous structure** and **molecular homology** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **fossil record**
      - **homologous structure**
      - **analogous structure**
      - **molecular homology**
      `
    },
    {
      id: 'bio-evidence-evolution-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Fossil Record, what best describes fossil record?',
            options: [
              'chronological evidence of historical life forms in rock strata',
              'sequence similarity indicating evolutionary relatedness',
              'shared anatomy due to common ancestry',
              'similar function evolved independently in different lineages'
            ],
            correctAnswer: 0,
            explanation: 'fossil record is best matched with: chronological evidence of historical life forms in rock strata.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of homologous structure?',
            options: [
              'shared anatomy due to common ancestry',
              'chronological evidence of historical life forms in rock strata',
              'hypothesized pattern of evolutionary relationships',
              'similar function evolved independently in different lineages'
            ],
            correctAnswer: 0,
            explanation: 'homologous structure is best matched with: shared anatomy due to common ancestry.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Fossil Record
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → fossil record
      - **Immediate processing** → homologous structure
      - **System-level consequence** → analogous structure
      - **Measured readout** → molecular homology
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | fossil record | chronological evidence of historical life forms in rock strata | Early shift in the primary variable |
      | homologous structure | shared anatomy due to common ancestry | Mid-pathway change in process rate |
      | analogous structure | similar function evolved independently in different lineages | Downstream phenotype trend |
      | molecular homology | sequence similarity indicating evolutionary relatedness | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-evidence-evolution-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **chronological evidence of historical life forms in rock strata**

      2) Term for this definition: **shared anatomy due to common ancestry**

      3) Term for this definition: **similar function evolved independently in different lineages**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['fossil record', 'homologous structure', 'analogous structure'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'chronological evidence of historical life forms in rock strata\'.',
        hint2: 'Second blank points to homologous structure; think about the role \'shared anatomy due to common ancestry\'.',
        hint3: 'Third blank is analogous structure; connect it to \'similar function evolved independently in different lineages\'.',
        explanation: 'Correct set: fossil record, homologous structure, analogous structure. These three terms define the core mechanism chain for Fossil Record.'
      }
    },
    {
      id: 'bio-evidence-evolution-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'fossil record',
            options: ['chronological evidence of historical life forms in rock strata', 'shared anatomy due to common ancestry', 'similar function evolved independently in different lineages', 'sequence similarity indicating evolutionary relatedness']
          },
          {
            label: 'homologous structure',
            options: ['sequence similarity indicating evolutionary relatedness', 'shared anatomy due to common ancestry', 'similar function evolved independently in different lineages', 'hypothesized pattern of evolutionary relationships']
          },
          {
            label: 'analogous structure',
            options: ['sequence similarity indicating evolutionary relatedness', 'similar function evolved independently in different lineages', 'hypothesized pattern of evolutionary relationships', 'geographic distribution of species across regions and time']
          }
        ],
        correctAnswers: ['chronological evidence of historical life forms in rock strata', 'shared anatomy due to common ancestry', 'similar function evolved independently in different lineages'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'fossil record, homologous structure, and analogous structure should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-evidence-evolution-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because fossil record chronological evidence of historical life forms in rock strata, we expect ...".
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
      id: 'bio-evidence-evolution-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In transitional fossils across sediment layers, the observed pattern is: sequence similarity indicating evolutionary relatedness. What term should anchor the explanation?',
            options: [
              'analogous structure',
              'fossil record',
              'homologous structure',
              'molecular homology'
            ],
            correctAnswer: 3,
            explanation: 'Use molecular homology because it directly maps to the described biological pattern: sequence similarity indicating evolutionary relatedness.'
          },
          {
            question: 'In an AP-style free-response about fossil record, the observed pattern is: hypothesized pattern of evolutionary relationships. What term should anchor the explanation?',
            options: [
              'analogous structure',
              'biogeography',
              'phylogeny',
              'molecular homology'
            ],
            correctAnswer: 2,
            explanation: 'Use phylogeny because it directly maps to the described biological pattern: hypothesized pattern of evolutionary relationships.'
          }
        ]
      }
    }
  ]
};
