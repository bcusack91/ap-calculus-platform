export const precalcTrigFunctionsPart6Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'trigo6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. y = a sin(b(x - c)) + d

amplitude |a|, period 2π/|b|, phase shift c, vertical shift d

### 2. y = a cos(b(x - c)) + d follows the same pattern

y = a cos(b(x - c)) + d follows the same pattern

### 3. tan graph has vertical asymptotes at x = π/2 + nπ

tan graph has vertical asymptotes at x = π/2 + nπ

### 4. Reciprocal functions have the same period as their base functions

Reciprocal functions have the same period as their base functions
      `
    },
    {
      id: 'trigo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes y = a sin(b(x - c)) + d?',
            options: [
              'y = a cos(b(x - c)) + d follows the same pattern',
              'Reciprocal functions have the same period as their base functions',
              'amplitude |a|, period 2π/|b|, phase shift c, vertical shift d',
              'tan graph has vertical asymptotes at x = π/2 + nπ'
            ],
            correctAnswer: 2,
            explanation: 'Correct — y = a sin(b(x - c)) + d: amplitude |a|, period 2π/|b|, phase shift c, vertical shift d. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes tan graph has vertical asymptotes at x…:',
            options: [
              'y = a cos(b(x - c)) + d follows the same pattern',
              'amplitude |a|, period 2π/|b|, phase shift c, vertical shift d',
              'tan graph has vertical asymptotes at x = π/2 + nπ',
              'Reciprocal functions have the same period as their base functions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — tan graph has vertical asymptotes at x = π/2 + nπ. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'trigo6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **y = a sin(b(x - c)) + d**: amplitude |a|, period 2π/|b|, phase shift c, vertical shift d
- **y = a cos(b(x - c)) + d follows the same pattern**
- **tan graph has vertical asymptotes at x = π/2 + nπ**
- **Reciprocal functions have the same period as their base functions**
      `
    },
    {
      id: 'trigo6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Reciprocal functions have the same period as their base functions',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Reciprocal functions have the same period as their base functions'
          }
        ]
      }
    },
    {
      id: 'trigo6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'y = a sin(b(x - c)) + d',
            options: ['tan graph has vertical asymptotes at x = π/2 + nπ', 'Reciprocal functions have the same period as their base functions', 'amplitude |a|, period 2π/|b|, phase shift c, vertical shift d', 'y = a cos(b(x - c)) + d follows the same pattern']
          },
          {
            label: 'y = a cos(b(x - c)) + d follows the…',
            options: ['y = a cos(b(x - c)) + d follows the same pattern', 'tan graph has vertical asymptotes at x = π/2 + nπ', 'Reciprocal functions have the same period as their base functions', 'amplitude |a|, period 2π/|b|, phase shift c, vertical shift d']
          },
          {
            label: 'tan graph has vertical asymptotes at x…',
            options: ['amplitude |a|, period 2π/|b|, phase shift c, vertical shift d', 'tan graph has vertical asymptotes at x = π/2 + nπ', 'y = a cos(b(x - c)) + d follows the same pattern', 'Reciprocal functions have the same period as their base functions']
          }
        ],
        correctAnswers: ['amplitude |a|, period 2π/|b|, phase shift c, vertical shift d', 'y = a cos(b(x - c)) + d follows the same pattern', 'tan graph has vertical asymptotes at x = π/2 + nπ'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. y = a sin(b(x - c)) + d: amplitude |a|, period 2π/|b|, phase shift c, vertical shift d. y = a cos(b(x - c)) + d follows the same pattern. tan graph has vertical asymptotes at x = π/2 + nπ.'
      }
    }
  ]
}
