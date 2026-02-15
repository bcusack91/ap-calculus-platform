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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of substitution & elimination?',
            options: [
              'Substitution',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Substitution: solve one equation for a variable, plug into the other'
          },
          {
            question: 'In the context of substitution & elimination, which is accurate?',
            options: [
              'Choose the method that makes the algebra simplest',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Choose the method that makes the algebra simplest'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Substitution',
            options: ['solve one equation for a variable, plug into the o', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Elimination',
            options: ['add or subtract equations to eliminate a variable', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Choose the method that makes the algebra simplest',
            options: ['Choose the method that makes the algebra simplest', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['solve one equation for a variable, plug into the o', 'add or subtract equations to eliminate a variable', 'Choose the method that makes the algebra simplest'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Substitution & Elimination.'
      }
    }
  ]
}
