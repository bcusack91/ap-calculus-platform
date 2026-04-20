export const whEastAsianEmpiresPart3Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheastas3-intro',
      type: 'text' as const,
      content: `
# 🌏 East Asian Empires & Isolation

**Part 3 of 7 — Patterns & Examples**

    This part turns big ideas into specific AP World evidence by using case studies from China, Japan, Korea, and Vietnam.

### Key Concepts

| Concept | Description |
|---------|-------------|
    | **Core pattern** | A repeated regional trend (for example, centralized China vs decentralized Japan) |
    | **Case study evidence** | A specific empire, policy, or event used to support an argument |
    | **Comparative reasoning** | Explaining both similarity and difference across societies |
      `
    },
    {
      id: 'wheastas3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which option is the strongest AP case-study evidence for state-led economic expansion in East Asia before 1450?',
            options: [
              'Song China expanded commerce with paper money, urban markets, and high iron production',
              'Europe had many castles and local lords',
              'The Aztecs developed tribute systems in Mesoamerica',
              'Mali controlled trans-Saharan gold routes'
            ],
            correctAnswer: 0,
            explanation: 'This directly supports the East Asian claim and includes concrete evidence (paper money, production growth, commercial expansion).'
          },
          {
            question: 'A valid comparison of Ming China and Tokugawa Japan would state that both:',
            options: [
              'eliminated social hierarchy and expanded democratic participation',
              'used policies to regulate foreign contact, but under different political systems',
              'adopted Islam as state religion to facilitate Indian Ocean trade',
              'relied on the same feudal military structure'
            ],
            correctAnswer: 1,
            explanation: 'Ming and Tokugawa governments both controlled foreign interaction, but Ming China remained a centralized bureaucratic empire while Tokugawa Japan was a military shogunate.'
          }
        ]
      }
    },
    {
      id: 'wheastas3-content',
      type: 'text' as const,
      content: `
## Patterns & Examples — Deeper Dive

> **Political Organization Diverged**

    - **China (Ming/Qing):** centralized imperial bureaucracy
    - **Japan (Tokugawa):** decentralized feudal order under a shogun

    AP use: explain why shared Confucian influence did not produce identical political systems.

> **Cultural Borrowing Was Selective**

    - **Korea:** civil exams and Neo-Confucian norms, but also **hangul** for vernacular literacy
    - **Vietnam:** Confucian administration with persistent local identity and resistance to direct control

    AP use: support claims about cultural diffusion plus local agency.

> **AP Comparison Anchor**

    - **Ming retreat from long-distance voyages** after Zheng He
    - **European persistence in maritime expansion**

    AP use: compare state priorities and connect decisions to later global power shifts.
      `
    },
    {
      id: 'wheastas3-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What term describes repeated AP patterns such as centralized China vs. decentralized feudal Japan?',
            options: [
              'Core pattern',
              'Case study evidence',
              'Comparative reasoning',
              'Random anomaly'
            ],
            correctAnswer: 0,
            explanation: 'A core pattern is a repeated regional trend. Identifying it helps you organize AP arguments around structural similarities or contrasts.'
          },
          {
            question: 'Using Tokugawa sakoku as proof in an AP argument is an example of what?',
            options: [
              'Case study evidence',
              'Core pattern',
              'Comparative reasoning',
              'Unsupported assertion'
            ],
            correctAnswer: 0,
            explanation: 'Case study evidence means deploying a concrete named example to support a broader claim — exactly what AP rubrics reward.'
          },
          {
            question: 'Explaining both similarity and difference between Ming China and Tokugawa Japan is called what?',
            options: [
              'Comparative reasoning',
              'Case study evidence',
              'Core pattern',
              'Chronological listing'
            ],
            correctAnswer: 0,
            explanation: 'Comparative reasoning requires both/and structure: identifying similarity first, then difference, with evidence for each.'
          }
        ]
      }
    },
    {
      id: 'wheastas3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Select the concept that best matches each description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A repeated regional trend (such as centralized China vs feudal Japan) is a ___',
            options: ['Core pattern', 'Case study evidence', 'Comparative reasoning', 'random anomaly']
          },
          {
            label: 'Using Tokugawa sakoku as proof in an argument is using ___',
            options: ['Core pattern', 'Case study evidence', 'Comparative reasoning', 'unsupported assertion']
          },
          {
            label: 'Explaining both similarity and difference between Ming China and Tokugawa Japan is ___',
            options: ['Comparative reasoning', 'Case study evidence', 'Core pattern', 'chronological listing']
          }
        ],
        correctAnswers: ['Core pattern', 'Case study evidence', 'Comparative reasoning'],
        hint1: 'Think trend language.',
        hint2: 'Think concrete proof.',
        hint3: 'Think both/and comparison writing.',
        explanation: 'Strong AP work separates trend identification, evidence selection, and comparison logic instead of blending them vaguely.'
      }
    },
    {
      id: 'wheastas3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
    - A list of facts is not analysis unless each fact supports a claim.
    - Comparison requires both similarity and difference; one without the other is incomplete.
    - Avoid region drift: keep evidence tied to East Asia unless the prompt asks for cross-region comparison.

### AP Strategy Moves
    - Build paragraphs in this sequence: claim -> evidence -> reasoning.
    - Use named evidence (Zheng He, hangul, sakoku, civil examinations) instead of broad statements.
    - In MCQs, eliminate answers that are true historically but not responsive to the prompt's region/timeframe.
      `
    },
    {
      id: 'wheastas3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student claims East Asia was culturally uniform because China was influential. Which response best rebuts that claim?',
            options: [
              'Agree, because all East Asian states copied Chinese institutions exactly',
              'Cite Japanese feudal governance and Korean hangul as evidence of local variation within Chinese influence',
              'Argue only that geography explains everything',
              'Avoid examples and focus on definitions'
            ],
            correctAnswer: 1,
            explanation: 'This option directly uses specific evidence to show selective adaptation rather than total uniformity.'
          },
          {
            question: 'Which pair is best for an AP comparison sentence about state structure?',
            options: [
              'Ming China and Tokugawa Japan, because both are East Asian but institutionally different',
              'Ming China and ancient Athens, because both are premodern societies',
              'Tokugawa Japan and Aztec Mexico, because both had warriors',
              'Qing China and Song China, because they are from different continents'
            ],
            correctAnswer: 0,
            explanation: 'This pair keeps regional context constant while highlighting meaningful institutional differences, which produces a stronger comparison argument.'
          }
        ]
      }
    }
  ]
}
