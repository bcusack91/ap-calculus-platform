export const calcABTheoremsPart7Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'theor7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Read what the question asks" refer to in calculus?',
            options: [
              '"Is it possible" → provide an example or counterexample',
              '"must there exist," "is it possible," "show that"',
              'Connect the theorem\'s conclusion to the specific quantities in the problem',
              '"Must there exist" → use a theorem (IVT, MVT, EVT)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Read what the question asks: "must there exist," "is it possible," "show that". The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about "Is it possible" → provide an example…?',
            options: [
              '"Is it possible" → provide an example or counterexample',
              'Connect the theorem\'s conclusion to the specific quantities in the problem',
              '"Must there exist" → use a theorem (IVT, MVT, EVT)',
              '"must there exist," "is it possible," "show that"'
            ],
            correctAnswer: 0,
            explanation: 'Correct — "Is it possible" → provide an example or counterexample. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'theor7-detail',
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
      id: 'theor7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Connect the theorem\'s conclusion to the…?',
            options: [
              '"Must there exist" → use a theorem (IVT, MVT, EVT)',
              'Connect the theorem\'s conclusion to the specific quantities in the problem',
              '"must there exist," "is it possible," "show that"',
              '"Is it possible" → provide an example or counterexample'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Connect the theorem\'s conclusion to the specific quantities in the problem. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'theor7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Read what the question asks',
            options: ['"Is it possible" → provide an example or counterexample', '"Must there exist" → use a theorem (IVT, MVT, EVT)', '"must there exist," "is it possible," "show that"', 'Connect the theorem\'s conclusion to the specific quantities in the problem']
          },
          {
            label: '"Must there exist" → use a theorem…',
            options: ['"must there exist," "is it possible," "show that"', '"Is it possible" → provide an example or counterexample', '"Must there exist" → use a theorem (IVT, MVT, EVT)', 'Connect the theorem\'s conclusion to the specific quantities in the problem']
          },
          {
            label: '"Is it possible" → provide an example…',
            options: ['Connect the theorem\'s conclusion to the specific quantities in the problem', '"must there exist," "is it possible," "show that"', '"Is it possible" → provide an example or counterexample', '"Must there exist" → use a theorem (IVT, MVT, EVT)']
          }
        ],
        correctAnswers: ['"must there exist," "is it possible," "show that"', '"Must there exist" → use a theorem (IVT, MVT, EVT)', '"Is it possible" → provide an example or counterexample'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Read what the question asks: "must there exist," "is it possible," "show that". "Must there exist" → use a theorem (IVT, MVT, EVT). "Is it possible" → provide an example or counterexample.'
      }
    }
  ]
}
