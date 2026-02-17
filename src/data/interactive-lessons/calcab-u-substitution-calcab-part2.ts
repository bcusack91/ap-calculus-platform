export const calcABUSubPart2Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'u-sub2-intro',
      type: 'text' as const,
      content: `
# Choosing u

**Part 2 of 7 — Choosing u**

### 1. Choose u as the "inside" function (the argument of a composite function)

Choose u as the "inside" function (the argument of a composite function)

### 2. du should match (or be a constant multiple of) the remaining factors

du should match (or be a constant multiple of) the remaining factors

### 3. Common choices

u = expression inside a power, inside a trig function, exponent, denominator

### 4. If the first choice doesn't work, try a different u

If the first choice doesn't work, try a different u
      `
    },
    {
      id: 'u-sub2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Choose u as the "inside" function (the…?',
            options: [
              'If the first choice doesn\'t work, try a different u',
              'du should match (or be a constant multiple of) the remaining factors',
              'Choose u as the "inside" function (the argument of a composite function)',
              'u = expression inside a power, inside a trig function, exponent, denominator'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Choose u as the "inside" function (the argument of a composite function). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Choosing u, which explains Common choices?',
            options: [
              'du should match (or be a constant multiple of) the remaining factors',
              'Choose u as the "inside" function (the argument of a composite function)',
              'u = expression inside a power, inside a trig function, exponent, denominator',
              'If the first choice doesn\'t work, try a different u'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Common choices: u = expression inside a power, inside a trig function, exponent, denominator. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'u-sub2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Choose u as the "inside" function (the argument of a composite function)**
- **du should match (or be a constant multiple of) the remaining factors**
- **Common choices**: u = expression inside a power, inside a trig function, exponent, denominator
- **If the first choice doesn't work, try a different u**
      `
    },
    {
      id: 'u-sub2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents If the first choice doesn\'t work, try a…?',
            options: [
              'u = expression inside a power, inside a trig function, exponent, denominator',
              'If the first choice doesn\'t work, try a different u',
              'Choose u as the "inside" function (the argument of a composite function)',
              'du should match (or be a constant multiple of) the remaining factors'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If the first choice doesn\'t work, try a different u. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'u-sub2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Choose u as the "inside" function (the…',
            options: ['Choose u as the "inside" function (the argument of a composite function)', 'du should match (or be a constant multiple of) the remaining factors', 'u = expression inside a power, inside a trig function, exponent, denominator', 'If the first choice doesn\'t work, try a different u']
          },
          {
            label: 'du should match (or be a constant…',
            options: ['du should match (or be a constant multiple of) the remaining factors', 'If the first choice doesn\'t work, try a different u', 'Choose u as the "inside" function (the argument of a composite function)', 'u = expression inside a power, inside a trig function, exponent, denominator']
          },
          {
            label: 'Common choices',
            options: ['Choose u as the "inside" function (the argument of a composite function)', 'du should match (or be a constant multiple of) the remaining factors', 'If the first choice doesn\'t work, try a different u', 'u = expression inside a power, inside a trig function, exponent, denominator']
          }
        ],
        correctAnswers: ['Choose u as the "inside" function (the argument of a composite function)', 'du should match (or be a constant multiple of) the remaining factors', 'u = expression inside a power, inside a trig function, exponent, denominator'],
        hint1: 'Think about what each concept specifically describes in Choosing u.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Choosing u describes a specific idea. Choose u as the "inside" function (the argument of a composite function). du should match (or be a constant multiple of) the remaining factors. Common choices: u = expression inside a power, inside a trig function, exponent, denominator.'
      }
    }
  ]
}
