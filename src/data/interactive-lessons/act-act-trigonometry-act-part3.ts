export const actTrigPart3Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t3-intro',
      type: 'text' as const,
      content: `
# Unit Circle

**Part 3 of 7 — Unit Circle**

Unit circle: radius 1, centered at origin.

(cos θ, sin θ) are coordinates on the unit circle.
      `
    },
    {
      id: 'act-t3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Unit circle?',
            options: [
              'radius 1, centered at origin.',
              '(cos θ, sin θ) are coordinates on the unit circle.',
              'Radian conversion: degrees × π/180 = radians.',
              'Key values: 0°, 30°, 45°, 60°, 90° and multiples.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Unit circle: radius 1, centered at origin. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Key values: 0°, 30°, 45°, 60°, 90° and multiples.',
              'radius 1, centered at origin.',
              '(cos θ, sin θ) are coordinates on the unit circle.',
              'Radian conversion: degrees × π/180 = radians.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Key values: 0°, 30°, 45°, 60°, 90° and multiples. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-t3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Key values: 0°, 30°, 45°, 60°, 90° and multiples.

**ACT Tip:** Radian conversion: degrees × π/180 = radians.
      `
    },
    {
      id: 'act-t3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Unit Circle, which correctly describes ACT Tip?',
            options: [
              'radius 1, centered at origin.',
              '(cos θ, sin θ) are coordinates on the unit circle.',
              'Radian conversion: degrees × π/180 = radians.',
              'Key values: 0°, 30°, 45°, 60°, 90° and multiples.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Radian conversion: degrees × π/180 = radians. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Unit circle',
            options: ['radius 1, centered at origin.', 'Radian conversion: degrees × π/180 = radians.', '(cos θ, sin θ) are coordinates on the unit circle.', 'Key values: 0°, 30°, 45°, 60°, 90° and multiples.']
          },
          {
            label: 'Key Insight',
            options: ['radius 1, centered at origin.', '(cos θ, sin θ) are coordinates on the unit circle.', 'Radian conversion: degrees × π/180 = radians.', 'Key values: 0°, 30°, 45°, 60°, 90° and multiples.']
          },
          {
            label: 'ACT Tip',
            options: ['radius 1, centered at origin.', '(cos θ, sin θ) are coordinates on the unit circle.', 'Radian conversion: degrees × π/180 = radians.', 'Key values: 0°, 30°, 45°, 60°, 90° and multiples.']
          }
        ],
        correctAnswers: ['radius 1, centered at origin.', 'Key values: 0°, 30°, 45°, 60°, 90° and multiples.', 'Radian conversion: degrees × π/180 = radians.'],
        hint1: 'Think about what each concept specifically describes in Unit Circle.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Unit Circle describes a specific idea. Unit circle: radius 1, centered at origin. Key Insight: Key values: 0°, 30°, 45°, 60°, 90° and multiples. ACT Tip: Radian conversion: degrees × π/180 = radians.'
      }
    }
  ]
}
