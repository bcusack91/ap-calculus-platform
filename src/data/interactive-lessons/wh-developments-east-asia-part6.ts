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
              'Korea and Japan both adopted Chinese writing and studied Confucian classics',
              'Japan adopted selected Chinese cultural elements but kept its feudal governance',
              'China and Japan built identical exam-based bureaucracies staffed by scholars',
              'The Mongols unified China, Korea, and Japan under a single Yuan administration'
            ],
            correctAnswer: 1,
            explanation: 'Japan adopting selected Chinese cultural elements while preserving feudal governance shows both similarity and difference. Shared writing shows diffusion only, Japan never built a Song-style exam bureaucracy, and the Mongols failed to conquer Japan.'
          },
          {
            question: 'For an SAQ, which response move is most effective?',
            options: [
              'Make a broad claim about the region and let it stand without evidence',
              'Use one specific example and explain how it supports the claim',
              'List as many relevant names and dates as possible without explanation',
              'Describe the example in detail but leave its link to the claim unstated'
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
            options: ['Confucian administrative traditions', 'A warrior class ruled by a shogun', 'Islamic law courts in the capital', 'Christian missions at the royal court'],
            correctAnswer: 0,
            explanation: 'Korean elite and administrative traditions, including civil service exams, reflected major Confucian influence from China. Shogunal rule was Japanese, and Islam and Christianity did not shape the Korean court in this era.'
          },
          {
            question: 'Which is the strongest evidence of political divergence in Japan?',
            options: ['Feudal shogunate structure', 'Exam bureaucracy identical to Song China', 'Yuan imperial administration', 'Direct rule from Beijing'],
            correctAnswer: 0,
            explanation: 'Japan maintained decentralized military-feudal institutions distinct from Chinese bureaucratic centralization.'
          },
          {
            question: 'Which analytical phrase best links both pieces of evidence?',
            options: ['Diffusion with divergence', 'Uniform assimilation', 'Isolated development', 'Conquest-driven uniformity'],
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
            options: ['historical reasoning', 'additional dates', 'a longer quotation', 'a list of names']
          },
          {
            label: 'A claim supported by one specific example and explanation is: ___',
            options: ['AP-effective', 'insufficient', 'off-task', 'overgeneralized']
          },
          {
            label: 'Comparing China and Japan should emphasize: ___',
            options: ['both shared influence and institutional differences', 'their shared Confucian culture and writing system', 'differences in geography and climate', 'the sequence of dynasties in each country']
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
              'It reflects East Asian traditions linking social order to political legitimacy',
              'It reflects Mongol steppe customs that the Yuan imposed on their Chinese subjects',
              'It reflects Buddhist teachings that rejected worldly rank as an illusion',
              'It reflects merchant values that tied rank to wealth rather than learning'
            ],
            correctAnswer: 0,
            explanation: 'This places the source in regional ideological context and links it to AP themes.'
          },
          {
            question: 'Which sentence best explains significance after citing Japanese feudal institutions?',
            options: [
              'This shows East Asia was politically uniform, since Japan copied China\'s bureaucracy',
              'This shows that a shared cultural sphere could still contain divergent governments',
              'This shows Japanese culture developed without any borrowing from the Asian mainland',
              'This shows Chinese bureaucracy declined everywhere as warrior rule spread across Asia'
            ],
            correctAnswer: 1,
            explanation: 'Strong significance statements connect evidence to a broader analytical claim.'
          }
        ]
      }
    }
  ]
}
