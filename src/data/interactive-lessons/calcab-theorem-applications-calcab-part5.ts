export const calcABTheoremsPart5Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor5-intro',
      type: 'text' as const,
      content: `
# Connecting Theorems to Problems

**Part 5 of 7 — Connecting Theorems to Problems**

### 1. Read what the question asks

"must there exist," "is it possible," "show that"

### 2. "Must there exist" → use a theorem (IVT, MVT, EVT)

"Must there exist" → use a theorem (IVT, MVT, EVT)

### 3. "Is it possible" → provide an example or counterexample

"Is it possible" → provide an example or counterexample

### 4. Connect the theorem's conclusion to the specific quantities in the problem

Connect the theorem's conclusion to the specific quantities in the problem
      `
    },
    {
      id: 'theor5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of connecting theorems to problems?',
            options: [
              'Read what the question asks',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Read what the question asks: "must there exist," "is it possible," "show that"'
          },
          {
            question: 'In the context of connecting theorems to problems, which is accurate?',
            options: [
              '"Is it possible" → provide an example or counterexample',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '"Is it possible" → provide an example or counterexample'
          }
        ]
      }
    },
    {
      id: 'theor5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Read what the question asks**: "must there exist," "is it possible," "show that"
- **"Must there exist" → use a theorem (IVT, MVT, EVT)**
- **"Is it possible" → provide an example or counterexample**
- **Connect the theorem's conclusion to the specific quantities in the problem**
      `
    },
    {
      id: 'theor5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to connecting theorems to problems?',
            options: [
              'Connect the theorem\'s conclusion to the specific quantities in the problem',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Connect the theorem\'s conclusion to the specific quantities in the problem'
          }
        ]
      }
    },
    {
      id: 'theor5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Read what the question asks',
            options: ['"must there exist," "is it possible," "show that"', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '"Must there exist" → use a theorem (IVT, MVT, EVT)',
            options: ['"Must there exist" → use a theorem (IVT, MVT, EVT)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '"Is it possible" → provide an example or counterexample',
            options: ['"Is it possible" → provide an example or counterex', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['"must there exist," "is it possible," "show that"', '"Must there exist" → use a theorem (IVT, MVT, EVT)', '"Is it possible" → provide an example or counterex'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Connecting Theorems to Problems.'
      }
    }
  ]
}
