export const cspCollaborationDevelopmentPart1Data = {
  topicSlug: 'csp-collaboration-development',
  sections: [
    {
      id: 'cspcdev1-intro',
      type: 'text' as const,
      content: `
# 🤝 Collaboration & Program Development

**Part 1 of 7 — Collaboration Tools, Testing Strategies, and Program Correctness**

---

## Collaborating With Online Tools

Online tools support collaboration by letting programmers share code and documents and give feedback on each other's ideas. Common models such as **pair programming** also help teams work together.

| Collaboration practice | What it does |
|------------------------|--------------|
| **Shared documents and code editors** | Several people view and edit the same work and leave comments |
| **Online feedback tools** | Teammates respond to ideas, designs, and code |
| **Pair programming** | A driver writes code while a navigator reviews and plans; they switch roles |
| **Consulting users** | Feedback from the people who will use the program shapes its design |

> 🔑 Collaboration that includes diverse perspectives helps a team catch problems and avoid bias in what it builds.

---

## Testing for Program Correctness

| Testing Type | What It Tests | Example |
|-------------|-------------|---------|
| **Normal cases** | Typical expected inputs | Entering a valid age like 25 |
| **Boundary cases** | Edge values at limits | Age = 0, Age = 120 |
| **Invalid cases** | Inputs that should be rejected | Age = -5, Age = "abc" |
| **Empty cases** | No input or empty data | Empty string, empty list |

### Test Coverage
Testing EVERY possible input is usually impossible. Good testers focus on:
- **Representative** normal inputs
- **Edge cases** at boundaries
- **Known problematic** inputs from past bugs
      `
    },
    {
      id: 'cspcdev1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is it usually impossible to test a program with every possible input?',
            options: [
              'Testing tools cannot generate inputs for most programs',
              'The set of inputs is far too large, often unbounded',
              'Test results usually change each time the same input runs',
              'Exhaustive testing only works on programs without procedures'
            ],
            correctAnswer: 1,
            explanation: 'For most programs, the number of possible inputs is effectively infinite. A text field alone accepts any combination of characters. Instead, testers select representative test cases including edge cases.'
          },
          {
            question: 'What is a boundary (edge) test case for a function that accepts ages 0-120?',
            options: [
              'Age = 50 or Age = 60',
              'Age = 0 or Age = 120',
              'Age = "hello"',
              'Age = 300 or Age = 999'
            ],
            correctAnswer: 1,
            explanation: 'Boundary cases test the limits of valid input. For ages 0-120, the boundaries are exactly 0 and 120. Many bugs occur at boundaries where conditions use < instead of ≤.'
          }
        ]
      }
    },
    {
      id: 'cspcdev1-content',
      type: 'text' as const,
      content: `
## Types of Errors

| Error Type | When Detected | Example |
|-----------|-------------|---------|
| **Syntax error** | Before running (compile/parse time) | Missing parenthesis, misspelled keyword |
| **Runtime error** | During execution | Division by zero, accessing invalid index |
| **Logic error** | Produces wrong output | Using + instead of -, off-by-one error |
| **Overflow error** | When a value is outside the range that can be represented | A total too large for the fixed number of bits used to store it |

### Ways to Find and Correct Errors
1. **Test cases**: compare expected and actual results for defined inputs
2. **Hand tracing**: step through the code on paper, tracking variable values
3. **Visualizations**: show data or program state as a picture
4. **Debuggers**: pause the program and inspect values line by line
5. **Extra output statements**: DISPLAY values to see what the program is doing

## Incremental Development
Build your program in small pieces, testing each piece before adding more. This approach:
- Makes bugs easier to find (the bug is in the newest code)
- Provides working checkpoints to fall back to
- Builds confidence as features are verified
      `
    },
    {
      id: 'cspcdev1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An error caused by misspelling a keyword or forgetting a parenthesis is called a _______ error.

2) An error where the program runs but produces the wrong output is called a _______ error.

3) In pair programming, the partner who reviews each line and plans ahead is called the _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['syntax', 'logic', 'navigator'],
        hint1: 'Related to the structure/grammar of the code.',
        hint2: 'The logic of the program is flawed.',
        hint3: 'The partner who is not typing guides the way.',
        explanation: 'Syntax = broken language rules. Logic = wrong results. The navigator reviews and plans while the driver types.'
      }
    },
    {
      id: 'cspcdev1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Error** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dividing by zero during execution causes a ___ error',
            options: ['Runtime error', 'Syntax error', 'Logic error', 'Overflow error']
          },
          {
            label: 'A program that calculates area as length + width instead of length * width has a ___ error',
            options: ['Logic error', 'Syntax error', 'Runtime error', 'Overflow error']
          },
          {
            label: 'When a number exceeds the maximum value a variable can store, it is a(n) ___ error',
            options: ['Overflow error', 'Syntax error', 'Logic error', 'Underflow error']
          }
        ],
        correctAnswers: ['Runtime error', 'Logic error', 'Overflow error'],
        hint1: 'Happens while the program is running.',
        hint2: 'Uses the wrong operation — produces wrong results.',
        hint3: 'The value overflows the storage capacity.',
        explanation: 'Division by zero = runtime. Wrong operator = logic. Exceeded capacity = overflow.'
      }
    },
    {
      id: 'cspcdev1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Collaboration & Development

- Know the **four error types**: syntax, runtime, logic, overflow — the exam tests classification
- **Logic errors** are the hardest to find because the program runs without crashing
- Testing should include normal, boundary, and invalid cases
- You CANNOT test every possible input — focus on representative and edge cases
- Incremental development with frequent testing is the recommended approach
- Know the five ways to find errors: test cases, hand tracing, visualizations, debuggers, and extra output statements
      `
    },
    {
      id: 'cspcdev1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes a program to find the average of a list. The program works for most lists but crashes when the list is empty. This is best described as:',
            options: [
              'A syntax error caught before the program runs',
              'A logic error that silently returns the wrong average',
              'A runtime error from dividing by a length of zero',
              'An overflow error from a sum too large to store'
            ],
            correctAnswer: 2,
            explanation: 'An empty list has 0 elements. Dividing the sum by 0 causes a runtime error. This is why testing with empty/boundary inputs is essential.'
          },
          {
            question: 'Two students are asked to use pair programming. Which arrangement follows that model?',
            options: [
              'Each student writes half of the program at a separate computer',
              'A driver types while a navigator reviews, then they swap',
              'One student writes all of the code while the other watches',
              'Both students type into the same file at once without talking'
            ],
            correctAnswer: 1,
            explanation: 'In pair programming, one partner (the driver) writes code while the other (the navigator) reviews and plans, and the partners switch roles regularly.'
          }
        ]
      }
    }
  ]
};
