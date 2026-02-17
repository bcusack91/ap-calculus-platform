export const calcABTheoremsPart6Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'theor6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Read what the question asks" refer to in calculus?',
            options: [
              '"must there exist," "is it possible," "show that"',
              '"Must there exist" → use a theorem (IVT, MVT, EVT)',
              'Connect the theorem\'s conclusion to the specific quantities in the problem',
              '"Is it possible" → provide an example or counterexample'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Read what the question asks: "must there exist," "is it possible," "show that". The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about "Is it possible" → provide an example…?',
            options: [
              '"Is it possible" → provide an example or counterexample',
              '"Must there exist" → use a theorem (IVT, MVT, EVT)',
              '"must there exist," "is it possible," "show that"',
              'Connect the theorem\'s conclusion to the specific quantities in the problem'
            ],
            correctAnswer: 0,
            explanation: 'Correct — "Is it possible" → provide an example or counterexample. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'theor6-detail',
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
      id: 'theor6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Connect the theorem\'s conclusion to the…?',
            options: [
              '"Is it possible" → provide an example or counterexample',
              '"Must there exist" → use a theorem (IVT, MVT, EVT)',
              'Connect the theorem\'s conclusion to the specific quantities in the problem',
              '"must there exist," "is it possible," "show that"'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Connect the theorem\'s conclusion to the specific quantities in the problem. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'theor6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Read what the question asks',
            options: ['"must there exist," "is it possible," "show that"', '"Must there exist" → use a theorem (IVT, MVT, EVT)', '"Is it possible" → provide an example or counterexample', 'Connect the theorem\'s conclusion to the specific quantities in the problem']
          },
          {
            label: '"Must there exist" → use a theorem…',
            options: ['"must there exist," "is it possible," "show that"', '"Is it possible" → provide an example or counterexample', '"Must there exist" → use a theorem (IVT, MVT, EVT)', 'Connect the theorem\'s conclusion to the specific quantities in the problem']
          },
          {
            label: '"Is it possible" → provide an example…',
            options: ['"Is it possible" → provide an example or counterexample', '"Must there exist" → use a theorem (IVT, MVT, EVT)', '"must there exist," "is it possible," "show that"', 'Connect the theorem\'s conclusion to the specific quantities in the problem']
          }
        ],
        correctAnswers: ['"must there exist," "is it possible," "show that"', '"Must there exist" → use a theorem (IVT, MVT, EVT)', '"Is it possible" → provide an example or counterexample'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Read what the question asks: "must there exist," "is it possible," "show that". "Must there exist" → use a theorem (IVT, MVT, EVT). "Is it possible" → provide an example or counterexample.'
      }
    }
  ]
}
