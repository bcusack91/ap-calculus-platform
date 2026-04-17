export const macroAdAsPart7Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {
      id: 'macroada7-intro',
      type: 'text' as const,
      content: `
# 📈 Aggregate Demand & Aggregate Supply

**Part 7 of 7 — AP Review**

Comprehensive review of Aggregate Demand & Aggregate Supply for the AP exam. Focus on key concepts, common question types, and exam strategies.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Key vocabulary** | Essential terms and definitions for Aggregate Demand & Aggregate Supply |
| **Common question types** | The most frequent ways Aggregate Demand & Aggregate Supply is tested on the AP exam |
| **Exam strategy** | Approaches for answering Aggregate Demand & Aggregate Supply questions effectively |
      `
    },
    {
      id: 'macroada7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The most important exam strategy for Aggregate Demand & Aggregate Supply is:',
            options: [
              'Guess randomly',
              'Know key terms, use specific examples, and connect to course themes',
              'Skip these questions',
              'Only memorize definitions'
            ],
            correctAnswer: 1,
            explanation: 'Effective exam strategy combines vocabulary knowledge, specific examples, and connections to broader themes.'
          },
          {
            question: 'AP multiple-choice questions about Aggregate Demand & Aggregate Supply often test:',
            options: [
              'Random trivia',
              'Application of concepts to new scenarios',
              'Spelling',
              'Personal opinions'
            ],
            correctAnswer: 1,
            explanation: 'AP multiple-choice questions typically present a new scenario and ask students to apply concepts rather than just recall facts.'
          }
        ]
      }
    },
    {
      id: 'macroada7-content',
      type: 'text' as const,
      content: `
## AP Review — Deeper Dive

### Key vocabulary
Essential terms and definitions for Aggregate Demand & Aggregate Supply. Understanding this concept is essential for mastering Aggregate Demand & Aggregate Supply in AP Macroeconomics.

### Common question types
The most frequent ways Aggregate Demand & Aggregate Supply is tested on the AP exam. This builds on the previous concept and connects to broader themes in the course.

### Exam strategy
Approaches for answering Aggregate Demand & Aggregate Supply questions effectively. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'macroada7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to essential terms and definitions for Aggregate Demand & Aggregate Supply?

2) What concept describes the most frequent ways Aggregate Demand & Aggregate Supply is tested on the AP exam?

3) Name the term for approaches for answering Aggregate Demand & Aggregate Supply questions effectively.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Key vocabulary', 'Common question types', 'Exam strategy'],
        hint1: 'Starts with: K',
        hint2: 'Starts with: C',
        hint3: 'Starts with: E',
        explanation: 'Expected answers: Key vocabulary (Essential terms and definitions for Aggregate Demand & Aggregate Supply), Common question types (The most frequent ways Aggregate Demand & Aggregate Supply is tested on the AP exam), and Exam strategy (Approaches for answering Aggregate Demand & Aggregate Supply questions effectively).'
      }
    },
    {
      id: 'macroada7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Essential terms and definitions for Aggregate Demand & Aggregate Supply is called ___',
            options: ['Key vocabulary', 'Common question types', 'Exam strategy', 'None of these']
          },
          {
            label: 'The most frequent ways Aggregate Demand & Aggregate Supply is tested on the AP exam describes ___',
            options: ['Key vocabulary', 'Common question types', 'Exam strategy', 'All of these']
          },
          {
            label: 'Approaches for answering Aggregate Demand & Aggregate Supply questions effectively is known as ___',
            options: ['Exam strategy', 'Key vocabulary', 'Common question types', 'None of these']
          }
        ],
        correctAnswers: ['Key vocabulary', 'Common question types', 'Exam strategy'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Key vocabulary — Essential terms and definitions for Aggregate Demand & Aggregate Supply. Common question types — The most frequent ways Aggregate Demand & Aggregate Supply is tested on the AP exam. Exam strategy — Approaches for answering Aggregate Demand & Aggregate Supply questions effectively.'
      }
    },
    {
      id: 'macroada7-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Key vocabulary** with **Common question types** — while related, they address different aspects of Aggregate Demand & Aggregate Supply.
- **Exam strategy** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about ap review, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect ap review to broader themes in AP Macroeconomics for higher scores.
      `
    },
    {
      id: 'macroada7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On the AP exam, a question presents a scenario you have never seen before about Aggregate Demand & Aggregate Supply. You should:',
            options: [
              'Panic',
              'Apply the key concepts and processes you learned to analyze the new scenario',
              'Skip it',
              'Write about something else'
            ],
            correctAnswer: 1,
            explanation: 'The AP exam tests application — use your knowledge of concepts and processes to analyze unfamiliar scenarios.'
          },
          {
            question: 'For free-response questions on Aggregate Demand & Aggregate Supply, the most common mistake is:',
            options: [
              'Writing too clearly',
              'Being too vague and not using specific examples or key vocabulary',
              'Showing too much knowledge',
              'Answering the question directly'
            ],
            correctAnswer: 1,
            explanation: 'The most common FRQ mistake is vagueness — AP graders look for specific terms, definitions, and concrete examples.'
          }
        ]
      }
    }
  ]
}
