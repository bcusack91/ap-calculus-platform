export const bioCellStructurePart7Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'bio-cell-structure-organelles-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Structure and Organelles: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through cross-topic cell organization synthesis.
      
      ### Worked biological example
      A student team investigates cross-topic cell organization synthesis. Their first interpretation step is to identify how **mitochondrion** and **chloroplast** work together in the same pathway.
      
      - They classify the primary signal using **mitochondrion**: site of aerobic ATP production.
      - They trace the downstream response using **chloroplast**: site of photosynthesis in plants and algae.
      - They then compare outcomes with **cytoskeleton** and **plasma membrane** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **mitochondrion**
      - **chloroplast**
      - **cytoskeleton**
      - **plasma membrane**
      `
    },
    {
      id: 'bio-cell-structure-organelles-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes mitochondrion?',
            options: [
              'site of photosynthesis in plants and algae',
              'site of aerobic ATP production',
              'protein network for structure, transport, and movement',
              'selective barrier controlling exchange with the environment'
            ],
            correctAnswer: 1,
            explanation: 'mitochondrion is best matched with: site of aerobic ATP production.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of chloroplast?',
            options: [
              'stores DNA and regulates gene expression',
              'protein network for structure, transport, and movement',
              'site of aerobic ATP production',
              'site of photosynthesis in plants and algae'
            ],
            correctAnswer: 3,
            explanation: 'chloroplast is best matched with: site of photosynthesis in plants and algae.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-structure-organelles-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → mitochondrion
      - **Immediate processing** → chloroplast
      - **System-level consequence** → cytoskeleton
      - **Measured readout** → plasma membrane
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | mitochondrion | site of aerobic ATP production | Early shift in the primary variable |
      | chloroplast | site of photosynthesis in plants and algae | Mid-pathway change in process rate |
      | cytoskeleton | protein network for structure, transport, and movement | Downstream phenotype trend |
      | plasma membrane | selective barrier controlling exchange with the environment | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **site of aerobic ATP production**
      2) Term for this definition: **site of photosynthesis in plants and algae**
      3) Term for this definition: **protein network for structure, transport, and movement**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['mitochondrion', 'chloroplast', 'cytoskeleton'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'site of aerobic ATP production\'.',
        hint2: 'Second blank points to chloroplast; think about the role \'site of photosynthesis in plants and algae\'.',
        hint3: 'Third blank is cytoskeleton; connect it to \'protein network for structure, transport, and movement\'.',
        explanation: 'Correct set: mitochondrion, chloroplast, cytoskeleton. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'mitochondrion',
            options: ['site of aerobic ATP production', 'protein network for structure, transport, and movement', 'site of photosynthesis in plants and algae', 'selective barrier controlling exchange with the environment']
          },
          {
            label: 'chloroplast',
            options: ['stores DNA and regulates gene expression', 'site of photosynthesis in plants and algae', 'selective barrier controlling exchange with the environment', 'protein network for structure, transport, and movement']
          },
          {
            label: 'cytoskeleton',
            options: ['selective barrier controlling exchange with the environment', 'protein network for structure, transport, and movement', 'stores DNA and regulates gene expression', 'translates mRNA into polypeptide chains']
          }
        ],
        correctAnswers: ['site of aerobic ATP production', 'site of photosynthesis in plants and algae', 'protein network for structure, transport, and movement'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'mitochondrion, chloroplast, and cytoskeleton should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because mitochondrion site of aerobic ATP production, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Mitochondria are not only in animal cells; many eukaryotes have them.
      - Cell structure should be interpreted with function, not memorized as a static list.
      - All cells share core features, but not all cells contain every organelle type.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In cross-topic cell organization synthesis, the observed pattern is: selective barrier controlling exchange with the environment. What term should anchor the explanation?',
            options: [
              'plasma membrane',
              'cytoskeleton',
              'chloroplast',
              'mitochondrion'
            ],
            correctAnswer: 0,
            explanation: 'Use plasma membrane because it directly maps to the described biological pattern: selective barrier controlling exchange with the environment.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: stores DNA and regulates gene expression. What term should anchor the explanation?',
            options: [
              'plasma membrane',
              'cytoskeleton',
              'ribosome',
              'nucleus'
            ],
            correctAnswer: 3,
            explanation: 'Use nucleus because it directly maps to the described biological pattern: stores DNA and regulates gene expression.'
          }
        ]
      }
    }
  ]
};
