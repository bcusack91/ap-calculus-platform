export const precalcSystemsPart4Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'syste4-intro',
      type: 'text' as const,
      content: `
# Nonlinear Systems

**Part 4 of 7 — Nonlinear Systems**

### 1. At least one equation is non-linear (quadratic, exponential, etc.)

At least one equation is non-linear (quadratic, exponential, etc.)

### 2. Substitution is often the best method

Substitution is often the best method

### 3. A line and a conic can intersect in 0, 1, or 2 points

A line and a conic can intersect in 0, 1, or 2 points

### 4. Two conics can intersect in up to 4 points

Two conics can intersect in up to 4 points
      `
    },
    {
      id: 'syste4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "At least one equation is non-linear…" refer to in precalculus?',
            options: [
              'Substitution is often the best method',
              'A line and a conic can intersect in 0, 1, or 2 points',
              'At least one equation is non-linear (quadratic, exponential, etc.)',
              'Two conics can intersect in up to 4 points'
            ],
            correctAnswer: 2,
            explanation: 'Correct — At least one equation is non-linear (quadratic, exponential, etc.). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about A line and a conic can intersect in 0,…?',
            options: [
              'Substitution is often the best method',
              'At least one equation is non-linear (quadratic, exponential, etc.)',
              'A line and a conic can intersect in 0, 1, or 2 points',
              'Two conics can intersect in up to 4 points'
            ],
            correctAnswer: 2,
            explanation: 'Correct — A line and a conic can intersect in 0, 1, or 2 points. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'syste4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **At least one equation is non-linear (quadratic, exponential, etc.)**
- **Substitution is often the best method**
- **A line and a conic can intersect in 0, 1, or 2 points**
- **Two conics can intersect in up to 4 points**
      `
    },
    {
      id: 'syste4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nonlinear systems?',
            options: [
              'Two conics can intersect in up to 4 points',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Two conics can intersect in up to 4 points'
          }
        ]
      }
    },
    {
      id: 'syste4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At least one equation is non-linear…',
            options: ['Substitution is often the best method', 'Two conics can intersect in up to 4 points', 'A line and a conic can intersect in 0, 1, or 2 points', 'At least one equation is non-linear (quadratic, exponential, etc.)']
          },
          {
            label: 'Substitution is often the best method',
            options: ['Substitution is often the best method', 'Two conics can intersect in up to 4 points', 'A line and a conic can intersect in 0, 1, or 2 points', 'At least one equation is non-linear (quadratic, exponential, etc.)']
          },
          {
            label: 'A line and a conic can intersect in 0,…',
            options: ['Substitution is often the best method', 'At least one equation is non-linear (quadratic, exponential, etc.)', 'A line and a conic can intersect in 0, 1, or 2 points', 'Two conics can intersect in up to 4 points']
          }
        ],
        correctAnswers: ['At least one equation is non-linear (quadratic, exponential, etc.)', 'Substitution is often the best method', 'A line and a conic can intersect in 0, 1, or 2 points'],
        hint1: 'Think about what each concept specifically describes in Nonlinear Systems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nonlinear Systems describes a specific idea. At least one equation is non-linear (quadratic, exponential, etc.). Substitution is often the best method. A line and a conic can intersect in 0, 1, or 2 points.'
      }
    }
  ]
}
