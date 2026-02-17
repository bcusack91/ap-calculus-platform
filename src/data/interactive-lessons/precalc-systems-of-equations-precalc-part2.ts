export const precalcSystemsPart2Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'syste2-intro',
      type: 'text' as const,
      content: `
# Substitution & Elimination

**Part 2 of 7 — Substitution & Elimination**

### 1. Substitution

solve one equation for a variable, plug into the other

### 2. Elimination

add or subtract equations to eliminate a variable

### 3. Choose the method that makes the algebra simplest

Choose the method that makes the algebra simplest

### 4. Graphical interpretation

intersection point(s) of lines
      `
    },
    {
      id: 'syste2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Substitution" refer to in precalculus?',
            options: [
              'solve one equation for a variable, plug into the other',
              'add or subtract equations to eliminate a variable',
              'Choose the method that makes the algebra simplest',
              'intersection point(s) of lines'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Substitution: solve one equation for a variable, plug into the other. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Choose the method that makes the…?',
            options: [
              'solve one equation for a variable, plug into the other',
              'add or subtract equations to eliminate a variable',
              'Choose the method that makes the algebra simplest',
              'intersection point(s) of lines'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Choose the method that makes the algebra simplest. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'syste2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Substitution**: solve one equation for a variable, plug into the other
- **Elimination**: add or subtract equations to eliminate a variable
- **Choose the method that makes the algebra simplest**
- **Graphical interpretation**: intersection point(s) of lines
      `
    },
    {
      id: 'syste2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to substitution & elimination?',
            options: [
              'intersection point(s) of lines',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Graphical interpretation: intersection point(s) of lines'
          }
        ]
      }
    },
    {
      id: 'syste2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Substitution',
            options: ['Choose the method that makes the algebra simplest', 'intersection point(s) of lines', 'solve one equation for a variable, plug into the other', 'add or subtract equations to eliminate a variable']
          },
          {
            label: 'Elimination',
            options: ['solve one equation for a variable, plug into the other', 'add or subtract equations to eliminate a variable', 'intersection point(s) of lines', 'Choose the method that makes the algebra simplest']
          },
          {
            label: 'Graphical interpretation',
            options: ['add or subtract equations to eliminate a variable', 'intersection point(s) of lines', 'solve one equation for a variable, plug into the other', 'Choose the method that makes the algebra simplest']
          }
        ],
        correctAnswers: ['solve one equation for a variable, plug into the other', 'add or subtract equations to eliminate a variable', 'intersection point(s) of lines'],
        hint1: 'Think about what each concept specifically describes in Substitution & Elimination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Substitution & Elimination describes a specific idea. Substitution: solve one equation for a variable, plug into the other. Elimination: add or subtract equations to eliminate a variable. Graphical interpretation: intersection point(s) of lines.'
      }
    }
  ]
}
