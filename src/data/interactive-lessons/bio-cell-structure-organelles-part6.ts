export const bioCellStructurePart6Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'bio-cell-structure-organelles-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Cell Structure and Organelles: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through interpreting cell diagrams in AP prompts.
      
      ### Worked biological example
      A student team investigates interpreting cell diagrams in AP prompts. Their first interpretation step is to identify how **Golgi** and **mitochondrion** work together in the same pathway.
      
      - They classify the primary signal using **Golgi**: modifies and sorts cargo from the ER.
      - They trace the downstream response using **mitochondrion**: site of aerobic ATP production.
      - They then compare outcomes with **chloroplast** and **cytoskeleton** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **Golgi**
      - **mitochondrion**
      - **chloroplast**
      - **cytoskeleton**
      `
    },
    {
      id: 'bio-cell-structure-organelles-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes Golgi?',
            options: [
              'protein network for structure, transport, and movement',
              'site of photosynthesis in plants and algae',
              'modifies and sorts cargo from the ER',
              'site of aerobic ATP production'
            ],
            correctAnswer: 2,
            explanation: 'Golgi is best matched with: modifies and sorts cargo from the ER.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of mitochondrion?',
            options: [
              'site of aerobic ATP production',
              'modifies and sorts cargo from the ER',
              'selective barrier controlling exchange with the environment',
              'site of photosynthesis in plants and algae'
            ],
            correctAnswer: 0,
            explanation: 'mitochondrion is best matched with: site of aerobic ATP production.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-structure-organelles-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → Golgi
      - **Immediate processing** → mitochondrion
      - **System-level consequence** → chloroplast
      - **Measured readout** → cytoskeleton
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | Golgi | modifies and sorts cargo from the ER | Early shift in the primary variable |
      | mitochondrion | site of aerobic ATP production | Mid-pathway change in process rate |
      | chloroplast | site of photosynthesis in plants and algae | Downstream phenotype trend |
      | cytoskeleton | protein network for structure, transport, and movement | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-cell-structure-organelles-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **modifies and sorts cargo from the ER**
      2) Term for this definition: **site of aerobic ATP production**
      3) Term for this definition: **site of photosynthesis in plants and algae**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Golgi', 'mitochondrion', 'chloroplast'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'modifies and sorts cargo from the ER\'.',
        hint2: 'Second blank points to mitochondrion; think about the role \'site of aerobic ATP production\'.',
        hint3: 'Third blank is chloroplast; connect it to \'site of photosynthesis in plants and algae\'.',
        explanation: 'Correct set: Golgi, mitochondrion, chloroplast. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Golgi',
            options: ['site of aerobic ATP production', 'modifies and sorts cargo from the ER', 'site of photosynthesis in plants and algae', 'protein network for structure, transport, and movement']
          },
          {
            label: 'mitochondrion',
            options: ['selective barrier controlling exchange with the environment', 'protein network for structure, transport, and movement', 'site of photosynthesis in plants and algae', 'site of aerobic ATP production']
          },
          {
            label: 'chloroplast',
            options: ['stores DNA and regulates gene expression', 'selective barrier controlling exchange with the environment', 'protein network for structure, transport, and movement', 'site of photosynthesis in plants and algae']
          }
        ],
        correctAnswers: ['modifies and sorts cargo from the ER', 'site of aerobic ATP production', 'site of photosynthesis in plants and algae'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'Golgi, mitochondrion, and chloroplast should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-cell-structure-organelles-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because Golgi modifies and sorts cargo from the ER, we expect ...".
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
      id: 'bio-cell-structure-organelles-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In interpreting cell diagrams in AP prompts, the observed pattern is: protein network for structure, transport, and movement. What term should anchor the explanation?',
            options: [
              'mitochondrion',
              'Golgi',
              'cytoskeleton',
              'chloroplast'
            ],
            correctAnswer: 2,
            explanation: 'Use cytoskeleton because it directly maps to the described biological pattern: protein network for structure, transport, and movement.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: selective barrier controlling exchange with the environment. What term should anchor the explanation?',
            options: [
              'nucleus',
              'plasma membrane',
              'cytoskeleton',
              'chloroplast'
            ],
            correctAnswer: 1,
            explanation: 'Use plasma membrane because it directly maps to the described biological pattern: selective barrier controlling exchange with the environment.'
          }
        ]
      }
    }
  ]
};
