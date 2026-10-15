export const cspAlgorithmsProgrammingPart1Data = {
  topicSlug: 'csp-algorithms-programming',
  sections: [
    {
      id: 'cspap1-intro',
      type: 'text' as const,
      content: `
# 💻 Algorithms & Programming

**Part 1 of 7 — Abstraction, Procedures, and Modularity**

---

## Abstraction in Programming

**Abstraction** means hiding complex details and exposing only what is necessary. It simplifies programs by managing complexity.

| Abstraction | What it hides |
|-------------|---------------|
| **Variable** | Where and how a value is stored in memory |
| **List** | Many related values managed under one name |
| **Procedure** | The steps that carry out a task |
| **Library / API** | Code someone else wrote and documented |

> 🔑 Abstraction allows programmers to use complex features without understanding their internal implementation. You can call a library procedure that sorts a list without knowing which steps it uses inside.

---

## Procedures (Functions)

A **procedure** is a named group of instructions that performs a specific task.

\`\`\`
PROCEDURE greet(name)
{
    DISPLAY("Hello, ")
    DISPLAY(name)
}

greet("Alice")    // Output: Hello, Alice
greet("Bob")      // Output: Hello, Bob
\`\`\`

### Benefits of Procedures
| Benefit | Description |
|---------|-----------|
| **Reusability** | Write once, call many times |
| **Readability** | Named procedures explain the code purpose |
| **Modularity** | Break large programs into manageable pieces |
| **Debugging** | Fix a bug in one place, fixed everywhere |
| **Collaboration** | Team members work on different procedures |
      `
    },
    {
      id: 'cspap1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the main purpose of abstraction in programming?',
            options: [
              'To make programs run faster on any hardware',
              'To manage complexity by hiding unnecessary details',
              'To make programs use less memory while running',
              'To catch logic errors before the program runs'
            ],
            correctAnswer: 1,
            explanation: 'Abstraction manages complexity. When you call a library procedure that sorts a list, you do not need to know which steps it uses internally. This lets you focus on WHAT you want to do, not HOW it works.'
          },
          {
            question: 'A procedure is called three times in a program. How many times is the procedure code written?',
            options: [
              'Three times, once for each place it is called',
              'Once, since it is defined in one place',
              'Zero times, if the procedure is built into the language',
              'It depends on which programming language is used'
            ],
            correctAnswer: 1,
            explanation: 'A key benefit of procedures is reusability. The procedure is DEFINED once but can be CALLED as many times as needed. This avoids code duplication.'
          }
        ]
      }
    },
    {
      id: 'cspap1-content',
      type: 'text' as const,
      content: `
## Parameters and Return Values

\`\`\`
PROCEDURE square(n)
{
    RETURN(n * n)
}

result ← square(5)     // result = 25
DISPLAY(square(3))      // Displays 9
\`\`\`

| Term | Definition |
|------|-----------|
| **Parameter** | Variable in the procedure definition that receives input |
| **Argument** | Actual value passed when calling the procedure |
| **Return value** | Value sent back to the caller |

### Procedural Abstraction
When you call \`calculateAverage(scores)\`, you do not need to know the implementation. The procedure name and parameters tell you WHAT it does, not HOW.

## APIs and Libraries
An **API** (Application Programming Interface) defines how software components interact. A **library** is a collection of pre-written procedures.

\`\`\`
// Using a library to create a random number
randomNum ← RANDOM(1, 100)  // Returns random integer between 1 and 100
\`\`\`

> 🔑 APIs enable **modularity** — complex systems built from independent, interchangeable components. You can swap one component without affecting the rest.

## Simulations
Programs that model real-world processes. Simulations use:
- **Random number generation** for unpredictable events
- **Simplifying assumptions** to make the model manageable
- Benefits: cheaper, faster, and safer than real experiments
- Limitation: only as accurate as the assumptions made
      `
    },
    {
      id: 'cspap1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A named group of instructions that performs a specific task is called a _______.

2) The value passed into a procedure call is called an _______.

3) A collection of pre-written procedures made available for programmers to use is a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['procedure', 'argument', 'library'],
        hint1: 'Also called a function or method.',
        hint2: 'The actual value you provide when calling.',
        hint3: 'A library of reusable code.',
        explanation: 'Procedure = named code block. Argument = value passed in. Library = pre-built procedures.'
      }
    },
    {
      id: 'cspap1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calling a library procedure that sorts a list, without knowing its internal steps, demonstrates ___',
            options: ['Abstraction', 'Iteration', 'Decomposition', 'Sequencing']
          },
          {
            label: 'In PROCEDURE add(a, b), a and b are ___',
            options: ['Parameters', 'Arguments', 'Return values', 'Procedure names']
          },
          {
            label: 'A program that models traffic flow using random events is a ___',
            options: ['Simulation', 'Database', 'Compiler', 'Search engine']
          }
        ],
        correctAnswers: ['Abstraction', 'Parameters', 'Simulation'],
        hint1: 'Hiding internal details.',
        hint2: 'They receive values in the definition.',
        hint3: 'It simulates reality.',
        explanation: 'Hiding details = abstraction. Definition variables = parameters. Modeling reality = simulation.'
      }
    },
    {
      id: 'cspap1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Algorithms & Programming

- **Abstraction** reduces complexity — know examples: variables, lists, procedures, libraries, and APIs
- Know the difference: **parameter** (in definition) vs **argument** (in call)
- Procedures that RETURN values vs procedures that just DISPLAY — the AP exam distinguishes these
- **RANDOM(a, b)** returns an integer from a to b inclusive — used in simulations
- Simulations are NOT perfectly accurate — they depend on assumptions and simplifications
- APIs and libraries are examples of procedural abstraction
      `
    },
    {
      id: 'cspap1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'PROCEDURE mystery(a, b)\n{\n    RETURN(a + b)\n}\nx ← mystery(3, mystery(1, 2))\nWhat is the value of x?',
            options: [
              '3',
              '5',
              '6',
              '9'
            ],
            correctAnswer: 2,
            explanation: 'Inner call: mystery(1, 2) returns 1 + 2 = 3. Outer call: mystery(3, 3) returns 3 + 3 = 6. Nested procedure calls are evaluated from the inside out.'
          },
          {
            question: 'A student uses a simulation to model the spread of a disease. Which is a limitation of this approach?',
            options: [
              'Simulations always produce identical results on every run',
              'Results are only as accurate as the assumptions built in',
              'Simulations always take longer than real experiments',
              'Simulations cannot use random numbers to model chance'
            ],
            correctAnswer: 1,
            explanation: 'Simulations simplify reality. If the model assumes the disease spreads at a fixed rate but it actually varies, the results will be inaccurate. Simulations are limited by their assumptions.'
          }
        ]
      }
    }
  ]
};
