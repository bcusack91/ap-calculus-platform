export const bioBiotechPart7Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot7-intro-p7',
      type: 'text' as const,
      content: `
# ## Biotechnology: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Biotechnology on the AP exam
2. Connecting techniques to biological concepts
3. Ethical reasoning in biology
4. Experimental design with biotech tools
      `
    },
    {
      id: 'biot7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Biotechnology on the AP exam?',
            options: [
              'Connecting techniques to biological concepts',
              'Ethical reasoning in biology',
              'Biotechnology on the AP exam',
              'Experimental design with biotech tools'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Biotechnology on the AP exam. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Ethical reasoning in biology?',
            options: [
              'Connecting techniques to biological concepts',
              'Biotechnology on the AP exam',
              'Experimental design with biotech tools',
              'Ethical reasoning in biology'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Ethical reasoning in biology. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biot7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Biotechnology on the AP exam**
- **Connecting techniques to biological concepts**
- **Ethical reasoning in biology**
- **Experimental design with biotech tools**
      `
    },
    {
      id: 'biot7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Biotechnology: Synthesis & AP Review, which correctly describes Experimental design with biotech tools?',
            options: [
              'Experimental design with biotech tools',
              'Biotechnology on the AP exam',
              'Connecting techniques to biological concepts',
              'Ethical reasoning in biology'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Experimental design with biotech tools. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'biot7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biotechnology on the AP exam',
            options: ['Experimental design with biotech tools', 'Ethical reasoning in biology', 'Biotechnology on the AP exam', 'Connecting techniques to biological concepts']
          },
          {
            label: 'Connecting techniques to biological…',
            options: ['Connecting techniques to biological concepts', 'Experimental design with biotech tools', 'Ethical reasoning in biology', 'Biotechnology on the AP exam']
          },
          {
            label: 'Ethical reasoning in biology',
            options: ['Experimental design with biotech tools', 'Ethical reasoning in biology', 'Connecting techniques to biological concepts', 'Biotechnology on the AP exam']
          }
        ],
        correctAnswers: ['Biotechnology on the AP exam', 'Connecting techniques to biological concepts', 'Ethical reasoning in biology'],
        hint1: 'Think about what each concept specifically describes in Biotechnology: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Biotechnology: Synthesis & AP Review describes a specific idea. Biotechnology on the AP exam. Connecting techniques to biological concepts. Ethical reasoning in biology.'
      }
    }
  ]
}
