export const whDevelopmentsEastAsiaPart6Data = {
  topicSlug: 'wh-developments-east-asia',
  sections: [
    {
      id: 'whdea6-intro',
      type: 'text' as const,
      content: `
# East Asian Developments (c. 1200-1450)

**Part 6 of 7 - Problem-Solving Workshop**

Use evidence like an AP reader expects: identify, contextualize, and explain significance.
      `
    },
    {
      id: 'whdea6-content',
      type: 'text' as const,
      content: `
## Skills Lab: Evidence to Argument

> **Step 1: Identify the Source Claim**

- **Example claim:** "Chinese influence shaped East Asia."

> **Step 2: Add Specific Evidence**

- Korea's civil administration reflected Confucian learning traditions.
- Japan borrowed Chinese writing and Buddhism but retained feudal military institutions.

> **Step 3: Explain Significance**

- This shows diffusion plus divergence.
- It supports broader AP themes of governance, culture, and regional interaction.

> **AP Comparison Anchor**

- **Quick DBQ/SAQ tip:** One accurate piece of evidence plus one sentence of explanation is usually better than three vague facts.
      `
    },
    {
      id: 'whdea6-quiz',
      type: 'multiple-choice' as const,
      content: `
**Evidence Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which option is strongest evidence for diffusion plus divergence?',
            options: [
              'East Asia had no internal differences',
              'Japan adopted selected Chinese cultural elements while preserving feudal governance',
              'China and Japan used identical political structures',
              'Mongols permanently unified all East Asian states'
            ],
            correctAnswer: 1,
            explanation: 'This evidence directly supports a nuanced argument with both similarity and difference.'
          },
          {
            question: 'For an SAQ, which response move is most effective?',
            options: [
              'Use abstract claims with no examples',
              'Use one specific example and explain how it supports the claim',
              'List as many names as possible without context',
              'Avoid discussing causation'
            ],
            correctAnswer: 1,
            explanation: 'AP scoring rewards precise evidence tied to explicit reasoning.'
          }
        ]
      }
    },
    {
      id: 'whdea6-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the strongest evidence of Chinese cultural influence in Korea?',
            options: ['Confucian administrative traditions', 'Atlantic plantation labor', 'Industrial labor unions', 'Roman senatorial offices'],
            correctAnswer: 0,
            explanation: 'Korean elite and administrative traditions reflected major Confucian influence from China.'
          },
          {
            question: 'Which is the strongest evidence of political divergence in Japan?',
            options: ['Feudal shogunate structure', 'Exam bureaucracy identical to Song China', 'Yuan imperial administration', 'Direct rule from Beijing'],
            correctAnswer: 0,
            explanation: 'Japan maintained decentralized military-feudal institutions distinct from Chinese bureaucratic centralization.'
          },
          {
            question: 'Which analytical phrase best links both pieces of evidence?',
            options: ['Diffusion with divergence', 'Total institutional sameness', 'No regional interaction', 'Pure isolationism'],
            correctAnswer: 0,
            explanation: 'This phrase captures shared influence alongside distinct political structures.'
          }
        ]
      }
    },
    {
      id: 'whdea6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Select the strongest reasoning move, then explain how it improves AP scoring.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Turning a fact into an argument requires adding: ___',
            options: ['historical reasoning', 'more dates only', 'less precision', 'no context']
          },
          {
            label: 'A claim supported by one specific example and explanation is: ___',
            options: ['AP-effective', 'too weak automatically', 'invalid by definition', 'never used in SAQs']
          },
          {
            label: 'Comparing China and Japan should emphasize: ___',
            options: ['both shared influence and institutional differences', 'only similarities', 'only geography', 'no evidence']
          }
        ],
        correctAnswers: ['historical reasoning', 'AP-effective', 'both shared influence and institutional differences'],
        hint1: 'Move from fact to argument with causation/comparison language.',
        hint2: 'Specific evidence plus explanation beats vague detail overload.',
        hint3: 'Nuance earns points in AP comparison prompts.',
        explanation: 'High-scoring AP responses combine evidence, explicit reasoning, and clear analytical linkage.'
      }
    },
    {
      id: 'whdea6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Source Use**
      `,
      exercise: {
        questions: [
          {
            question: 'A document praises Confucian hierarchy in governance. Which contextualization is strongest?',
            options: [
              'It reflects broader East Asian traditions linking social order with political legitimacy',
              'It proves hierarchy did not exist in East Asia',
              'It only applies to modern industrial states',
              'It has no relation to governance'
            ],
            correctAnswer: 0,
            explanation: 'This places the source in regional ideological context and links it to AP themes.'
          },
          {
            question: 'Which sentence best explains significance after citing Japanese feudal institutions?',
            options: [
              'This evidence shows East Asia was politically uniform',
              'This demonstrates that even within a shared cultural sphere, governance structures could diverge sharply',
              'This has no relevance to AP comparison',
              'This proves Chinese bureaucracy never existed'
            ],
            correctAnswer: 1,
            explanation: 'Strong significance statements connect evidence to a broader analytical claim.'
          }
        ]
      }
    }
  ]
}
