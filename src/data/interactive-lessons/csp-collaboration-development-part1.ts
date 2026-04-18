export const cspCollaborationDevelopmentPart1Data = {
  topicSlug: 'csp-collaboration-development',
  sections: [
    {
      id: 'cspcdev1-intro',
      type: 'text' as const,
      content: `
# 🤝 Collaboration & Program Development

**Part 1 of 7 — Version Control, Testing Strategies, and Program Correctness**

---

## Version Control and Collaborative Tools

Version control systems track changes to code over time, allowing teams to work simultaneously without overwriting each other.

| Feature | Description |
|---------|-----------|
| **Commit** | Save a snapshot of your code at a point in time |
| **Branch** | Independent line of development (experiment without affecting main code) |
| **Merge** | Combine changes from different branches |
| **Conflict** | When two people edit the same line; must be resolved manually |
| **History** | Log of all changes — can revert to any previous version |

> 🔑 Version control lets teams work on different features simultaneously and merge their work together safely.

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
              'Testing is too expensive',
              'The number of possible inputs is often infinite or astronomically large',
              'Computers cannot run test cases',
              'Testing only works on small programs'
            ],
            correctAnswer: 1,
            explanation: 'For most programs, the number of possible inputs is effectively infinite. A text field alone accepts any combination of characters. Instead, testers select representative test cases including edge cases.'
          },
          {
            question: 'What is a boundary (edge) test case for a function that accepts ages 0-120?',
            options: [
              'Age = 50',
              'Age = 0 or Age = 120',
              'Age = "hello"',
              'Not providing any input'
            ],
            correctAnswer: 1,
            explanation: 'Boundary cases test the limits of valid input. For ages 0-120, the boundaries are exactly 0 and 120. Many bugs occur at boundaries where conditions use < vs <=.'
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
| **Overflow error** | When a value exceeds storage capacity | Storing 999999999999 in a 32-bit integer |

### Debugging Strategies
1. **Add print/display statements** to trace variable values
2. **Use a debugger** to step through code line by line
3. **Rubber duck debugging** — explain the code out loud to find the flaw
4. **Binary search debugging** — comment out half the code to isolate the bug
5. **Check recent changes** — the bug is likely in code you just modified

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

3) A version control feature that lets you experiment without affecting the main codebase is called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['syntax', 'logic', 'branch'],
        hint1: 'Related to the structure/grammar of the code.',
        hint2: 'The logic of the program is flawed.',
        hint3: 'Like a branch of a tree — a separate path.',
        explanation: 'Syntax = grammar mistakes. Logic = wrong results. Branch = independent development line.'
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
- Version control terminology (commit, branch, merge) appears in conceptual questions
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
              'A syntax error',
              'A logic error',
              'A runtime error caused by division by zero on empty input',
              'An overflow error'
            ],
            correctAnswer: 2,
            explanation: 'An empty list has 0 elements. Dividing the sum by 0 causes a runtime error. This is why testing with empty/boundary inputs is essential.'
          },
          {
            question: 'Two programmers edit the same line of code in different branches and try to merge. What happens?',
            options: [
              'The changes are automatically combined',
              'A merge conflict occurs that must be resolved manually',
              'Both changes are deleted',
              'The program crashes'
            ],
            correctAnswer: 1,
            explanation: 'When two branches modify the same line, a merge conflict occurs. The version control system cannot automatically decide which change to keep, so a human must resolve it.'
          }
        ]
      }
    }
  ]
};
