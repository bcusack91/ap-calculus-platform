export const calcABOptimizationPart2Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'optim2-intro',
      type: 'text' as const,
      content: `
# Setting Up Optimization Problems

**Part 2 of 7 — Setting Up Optimization Problems**

### 1. Write the quantity to optimize as a function of one variable

Write the quantity to optimize as a function of one variable

### 2. Use the constraint to eliminate one variable

Use the constraint to eliminate one variable

### 3. Determine the domain (often a closed interval)

Determine the domain (often a closed interval)

### 4. Draw a picture and label all relevant quantities

Draw a picture and label all relevant quantities
      `
    },
    {
      id: 'optim2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Write the quantity to optimize as a…" refer to in calculus?',
            options: [
              'Draw a picture and label all relevant quantities',
              'Use the constraint to eliminate one variable',
              'Determine the domain (often a closed interval)',
              'Write the quantity to optimize as a function of one variable'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Write the quantity to optimize as a function of one variable. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Determine the domain (often a closed…:',
            options: [
              'Use the constraint to eliminate one variable',
              'Determine the domain (often a closed interval)',
              'Write the quantity to optimize as a function of one variable',
              'Draw a picture and label all relevant quantities'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Determine the domain (often a closed interval). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'optim2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Write the quantity to optimize as a function of one variable**
- **Use the constraint to eliminate one variable**
- **Determine the domain (often a closed interval)**
- **Draw a picture and label all relevant quantities**
      `
    },
    {
      id: 'optim2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Draw a picture and label all relevant… is correct?',
            options: [
              'Determine the domain (often a closed interval)',
              'Use the constraint to eliminate one variable',
              'Write the quantity to optimize as a function of one variable',
              'Draw a picture and label all relevant quantities'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Draw a picture and label all relevant quantities. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'optim2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Write the quantity to optimize as a…',
            options: ['Determine the domain (often a closed interval)', 'Use the constraint to eliminate one variable', 'Write the quantity to optimize as a function of one variable', 'Draw a picture and label all relevant quantities']
          },
          {
            label: 'Use the constraint to eliminate one…',
            options: ['Determine the domain (often a closed interval)', 'Write the quantity to optimize as a function of one variable', 'Use the constraint to eliminate one variable', 'Draw a picture and label all relevant quantities']
          },
          {
            label: 'Determine the domain (often a closed…',
            options: ['Determine the domain (often a closed interval)', 'Draw a picture and label all relevant quantities', 'Use the constraint to eliminate one variable', 'Write the quantity to optimize as a function of one variable']
          }
        ],
        correctAnswers: ['Write the quantity to optimize as a function of one variable', 'Use the constraint to eliminate one variable', 'Determine the domain (often a closed interval)'],
        hint1: 'Think about what each concept specifically describes in Setting Up Optimization Problems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Setting Up Optimization Problems describes a specific idea. Write the quantity to optimize as a function of one variable. Use the constraint to eliminate one variable. Determine the domain (often a closed interval).'
      }
    }
  ]
}
