export const bioCellStructurePart2Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'bio-cell-structure-organelles-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Structure and Organelles: Prokaryotes vs Eukaryotes
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through comparing bacterial and animal cell architecture.
      
      ### Worked biological example
      A student team investigates comparing bacterial and animal cell architecture. Their first interpretation step is to identify how **nucleus** and **ribosome** work together in the same pathway.
      
      - They classify the primary signal using **nucleus**: stores DNA and regulates gene expression.
      - They trace the downstream response using **ribosome**: translates mRNA into polypeptide chains.
      - They then compare outcomes with **rough ER** and **smooth ER** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **nucleus**
      - **ribosome**
      - **rough ER**
      - **smooth ER**
      `
    },
    {
      id: 'bio-cell-structure-organelles-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Prokaryotes vs Eukaryotes, what best describes nucleus?',
            options: [
              'stores DNA and regulates gene expression',
              'synthesizes lipids and supports detoxification',
              'synthesizes and folds proteins for export or membranes',
              'translates mRNA into polypeptide chains'
            ],
            correctAnswer: 0,
            explanation: 'nucleus is best matched with: stores DNA and regulates gene expression.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of ribosome?',
            options: [
              'synthesizes and folds proteins for export or membranes',
              'stores DNA and regulates gene expression',
              'translates mRNA into polypeptide chains',
              'modifies and sorts cargo from the ER'
            ],
            correctAnswer: 2,
            explanation: 'ribosome is best matched with: translates mRNA into polypeptide chains.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-structure-organelles-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Prokaryotes vs Eukaryotes
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → nucleus
      - **Immediate processing** → ribosome
      - **System-level consequence** → rough ER
      - **Measured readout** → smooth ER
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | nucleus | stores DNA and regulates gene expression | Early shift in the primary variable |
      | ribosome | translates mRNA into polypeptide chains | Mid-pathway change in process rate |
      | rough ER | synthesizes and folds proteins for export or membranes | Downstream phenotype trend |
      | smooth ER | synthesizes lipids and supports detoxification | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **stores DNA and regulates gene expression**
      2) Term for this definition: **translates mRNA into polypeptide chains**
      3) Term for this definition: **synthesizes and folds proteins for export or membranes**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['nucleus', 'ribosome', 'rough ER'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'stores DNA and regulates gene expression\'.',
        hint2: 'Second blank points to ribosome; think about the role \'translates mRNA into polypeptide chains\'.',
        hint3: 'Third blank is rough ER; connect it to \'synthesizes and folds proteins for export or membranes\'.',
        explanation: 'Correct set: nucleus, ribosome, rough ER. These three terms define the core mechanism chain for Prokaryotes vs Eukaryotes.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'nucleus',
            options: ['translates mRNA into polypeptide chains', 'synthesizes and folds proteins for export or membranes', 'stores DNA and regulates gene expression', 'synthesizes lipids and supports detoxification']
          },
          {
            label: 'ribosome',
            options: ['translates mRNA into polypeptide chains', 'synthesizes lipids and supports detoxification', 'modifies and sorts cargo from the ER', 'synthesizes and folds proteins for export or membranes']
          },
          {
            label: 'rough ER',
            options: ['site of aerobic ATP production', 'modifies and sorts cargo from the ER', 'synthesizes lipids and supports detoxification', 'synthesizes and folds proteins for export or membranes']
          }
        ],
        correctAnswers: ['stores DNA and regulates gene expression', 'translates mRNA into polypeptide chains', 'synthesizes and folds proteins for export or membranes'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'nucleus, ribosome, and rough ER should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because nucleus stores DNA and regulates gene expression, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Ribosomes are not membrane-bound, yet they are essential organelles.
      - Mitochondria are not only in animal cells; many eukaryotes have them.
      - Cell structure should be interpreted with function, not memorized as a static list.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In comparing bacterial and animal cell architecture, the observed pattern is: synthesizes lipids and supports detoxification. What term should anchor the explanation?',
            options: [
              'rough ER',
              'ribosome',
              'smooth ER',
              'nucleus'
            ],
            correctAnswer: 2,
            explanation: 'Use smooth ER because it directly maps to the described biological pattern: synthesizes lipids and supports detoxification.'
          },
          {
            question: 'In an AP-style free-response about prokaryotes vs eukaryotes, the observed pattern is: modifies and sorts cargo from the ER. What term should anchor the explanation?',
            options: [
              'rough ER',
              'Golgi',
              'smooth ER',
              'mitochondrion'
            ],
            correctAnswer: 1,
            explanation: 'Use Golgi because it directly maps to the described biological pattern: modifies and sorts cargo from the ER.'
          }
        ]
      }
    }
  ]
};
