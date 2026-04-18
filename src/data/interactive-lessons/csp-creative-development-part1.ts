export const cspCreativeDevelopmentPart1Data = {
  topicSlug: 'csp-creative-development',
  sections: [
    {
      id: 'cspcd1-intro',
      type: 'text' as const,
      content: `
# 💡 Creative Development

**Part 1 of 7 — Program Design, Collaboration, and Development Process**

---

## The Development Process

Creating software is not a straight line from idea to finished product. It is an **iterative** process involving planning, designing, coding, testing, and refining.

| Phase | Description | Example |
|-------|-----------|---------|
| **Investigating** | Define the problem and gather requirements | Survey users about what features they need |
| **Designing** | Plan the solution using pseudocode, flowcharts | Draw a flowchart for the checkout process |
| **Prototyping** | Build an initial working version | Create a basic version with core features only |
| **Testing** | Verify correctness and find bugs | Run the program with edge cases |
| **Reflecting** | Evaluate and improve | Collect feedback, plan next iteration |

> 🔑 **Iterative development** means repeating these phases. After reflecting, you go back to investigating or designing to improve.

---

## Program Design with Purpose

Every program is designed to solve a problem or express a creative idea.

- **Purpose**: What the program is intended to do
- **Function**: How the program behaves and what it produces
- **Input**: Data the user provides (clicks, text, sensor data)
- **Output**: What the program displays or produces (text, graphics, sound)
      `
    },
    {
      id: 'cspcd1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes iterative development?',
            options: [
              'Writing all code at once and testing only at the end',
              'Repeating cycles of designing, prototyping, testing, and refining',
              'Having one person write the entire program alone',
              'Copying code from existing programs without changes'
            ],
            correctAnswer: 1,
            explanation: 'Iterative development revisits the design and implementation multiple times. Each cycle adds features, fixes bugs, and improves the product based on feedback.'
          },
          {
            question: 'What is the "purpose" of a program?',
            options: [
              'The programming language it is written in',
              'The number of lines of code it contains',
              'The problem it solves or the creative idea it expresses',
              'The speed at which it runs'
            ],
            correctAnswer: 2,
            explanation: 'A program purpose describes what it is intended to do — the problem it solves for users or the creative expression it enables.'
          }
        ]
      }
    },
    {
      id: 'cspcd1-content',
      type: 'text' as const,
      content: `
## Collaboration in Development

Working with others produces better programs because diverse perspectives identify blind spots, generate more creative solutions, and catch more errors.

### Collaboration Benefits
- **Diverse perspectives** catch edge cases one person might miss
- **Code review** improves quality and finds bugs early
- **Pair programming** combines a "driver" (types code) and a "navigator" (plans logic)
- **Consultation** with users ensures the program meets real needs

### Documentation and Comments

\`\`\`
// This function calculates the average score
// Input: a list of numeric scores
// Output: the mean value as a decimal
PROCEDURE calculateAverage(scores)
{
    sum ← 0
    FOR EACH score IN scores
    {
        sum ← sum + score
    }
    RETURN sum / LENGTH(scores)
}
\`\`\`

Documentation helps:
- Others understand your code
- You remember your own logic later
- Teams work together effectively

## Acknowledging Code Sources
When using code written by others (libraries, APIs, open-source), always credit the original author. This is both ethical and often legally required.
      `
    },
    {
      id: 'cspcd1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The process of repeating design-prototype-test-refine cycles is called _______ development.

2) In pair programming, the person who types the code is called the _______.

3) Written explanations of what code does, placed inside the source code, are called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['iterative', 'driver', 'comments'],
        hint1: 'You iterate (repeat) the process.',
        hint2: 'They drive the keyboard.',
        hint3: 'They comment on what the code does.',
        explanation: 'Iterative = repeated cycles. Driver = types code. Comments = in-code documentation.'
      }
    },
    {
      id: 'cspcd1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Phase** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing a flowchart before writing code belongs to the ___ phase',
            options: ['Designing', 'Testing', 'Investigating', 'Reflecting']
          },
          {
            label: 'Running the program with unusual inputs to find bugs is the ___ phase',
            options: ['Testing', 'Designing', 'Prototyping', 'Investigating']
          },
          {
            label: 'Gathering user feedback after a release belongs to the ___ phase',
            options: ['Reflecting', 'Prototyping', 'Designing', 'Testing']
          }
        ],
        correctAnswers: ['Designing', 'Testing', 'Reflecting'],
        hint1: 'Planning the solution visually.',
        hint2: 'Looking for errors and edge cases.',
        hint3: 'Evaluating the finished product.',
        explanation: 'Flowcharts = design. Bug-finding = testing. Feedback evaluation = reflecting.'
      }
    },
    {
      id: 'cspcd1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Creative Development

- The Create Performance Task requires you to describe the **purpose**, **function**, and **development process** of your program
- Know the difference between **purpose** (why it exists) and **function** (what it does)
- Collaboration questions test whether you understand the BENEFITS (diverse perspectives, bug-catching) not just that teamwork exists
- Always document your code — the AP exam tests your ability to explain your code in writing
- Remember: iterative development is the correct approach. Waterfall (all planning then all coding) is NOT the expected answer
      `
    },
    {
      id: 'cspcd1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student builds an app, gets feedback from friends, redesigns the interface, and releases a new version. This process illustrates:',
            options: [
              'Linear development',
              'Iterative development',
              'Parallel processing',
              'Abstraction'
            ],
            correctAnswer: 1,
            explanation: 'Building, getting feedback, redesigning, and releasing again is a textbook example of iterative development — repeating the cycle to improve the product.'
          },
          {
            question: 'Which is the BEST reason to collaborate on a programming project?',
            options: [
              'It reduces the total amount of code needed',
              'Different perspectives help identify problems and generate creative solutions',
              'It eliminates all bugs in the final product',
              'It makes the program run faster'
            ],
            correctAnswer: 1,
            explanation: 'Diverse perspectives are the primary benefit of collaboration. Different team members bring different experiences, helping catch edge cases and produce more creative solutions.'
          }
        ]
      }
    }
  ]
};
