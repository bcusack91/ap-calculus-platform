export const csaVariablesTypesPart2Data = {
  topicSlug: 'csa-variables-types',
  sections: [
    {
      id: 'csavaria2-intro',
      type: 'text' as const,
      content: `
# 📦 Variables & Data Types

**Part 2 of 7 — Compiling, Errors, and What a Variable Holds**

---

Before a Java program does anything, two things happen. The **compiler** checks your source code and translates it, and then the **Java Virtual Machine (JVM)** runs the translated program. Knowing which stage catches which mistake (CED Topic 1.1) explains most "does not compile" answer choices. Knowing what a variable actually stores (CED Topic 1.2) explains most trace questions.

| In this part |
|---|
| From source code to a running program |
| Three kinds of errors |
| Primitive variables vs. reference variables |
| Choosing a type for the data |
      `
    },
    {
      id: 'csavaria2-pipeline',
      type: 'text' as const,
      content: `
## From Source Code to a Running Program

| Stage | What happens | What it catches |
|---|---|---|
| **Write** | You type source code in a \`.java\` file | Nothing yet |
| **Compile** | The compiler checks the syntax and the types, then translates the code into bytecode | Syntax errors and type mismatches |
| **Run** | The JVM executes the bytecode one statement at a time | Run-time errors (exceptions) |
| **Test** | You compare the output with what you expected | Logic errors |

## Three Kinds of Errors

| Error | When it is found | Example | What you see |
|---|---|---|---|
| **Syntax (compile-time) error** | During compiling | \`int count = 5\` (missing semicolon) | The program does not run at all |
| **Run-time error (exception)** | While running | \`int each = total / 0;\` | The program stops with an \`ArithmeticException\` |
| **Logic error** | Only by testing | \`double avg = (a + b) / 2;\` with int \`a\` and \`b\` | The program runs but prints a wrong answer |

A **type mismatch** is also caught by the compiler. \`int n = 3.5;\` is rejected because a double cannot be stored in an int variable without a cast.

> 🔑 **The compiler never runs your code.** It cannot know that a variable will hold 0 at run time, so \`total / count\` compiles even when \`count\` turns out to be 0. That division fails only when it actually executes.
      `
    },
    {
      id: 'csavaria2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A program compiles and runs to the end, but it prints 4.0 when the correct average is 4.5. Which kind of error does the program contain?',
            options: [
              'A logic error',
              'A syntax error',
              'A run-time error',
              'A type-mismatch error'
            ],
            correctAnswer: 0,
            explanation: 'The program compiled and finished, so it has no syntax, type-mismatch or run-time error. It simply computes the wrong value, which is a logic error found only by testing.'
          },
          {
            question: 'Which statement causes a compile-time error?',
            options: [
              'int n = 3 * 2.0 + 1;',
              'double d = 3;',
              'int q = 7 / 2;',
              'boolean b = 3 > 2;'
            ],
            correctAnswer: 0,
            explanation: '3 * 2.0 + 1 is a double expression (7.0), and a double cannot be stored in an int without a cast. An int widens to double automatically, 7 / 2 is an int, and 3 > 2 is a boolean.'
          }
        ]
      }
    },
    {
      id: 'csavaria2-variables',
      type: 'text' as const,
      content: `
## What a Variable Holds

A **variable** is a named storage location. Every variable is declared with a **type**, and the type decides which values it can hold and which operations are allowed on it.

| Category | Types in the AP subset | What the variable stores |
|---|---|---|
| **Primitive** | \`int\`, \`double\`, \`boolean\` | The value itself |
| **Reference** | \`String\` and every other class type | A reference to an object, or \`null\` |

\`\`\`java
int seats = 30;          // stores the value 30
boolean full = false;    // stores the value false
String room = "B12";     // stores a reference to a String object
\`\`\`

### Rules the Compiler Enforces
- A variable must be declared with a type before it is used, and its type never changes. After the lines above, \`seats = "thirty";\` is a compile-time error.
- A variable can be declared only once in the same scope. To change \`seats\` later, write \`seats = 32;\`, not \`int seats = 32;\`.
- Java is case-sensitive: \`Seats\` and \`seats\` are two different identifiers.

## Choosing a Type

| Data to store | Best type | Reason |
|---|---|---|
| Number of students in a class | \`int\` | A whole-number count |
| Average temperature for a week | \`double\` | Can have a fractional part |
| Whether a door is locked | \`boolean\` | Exactly two states |
| A student's name | \`String\` | Text, stored as an object |
      `
    },
    {
      id: 'csavaria2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Pick the Best Type** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The number of laps a runner completes should be stored in a ___',
            options: ['int', 'double', 'boolean', 'String']
          },
          {
            label: 'A price such as 3.49 should be stored in a ___',
            options: ['double', 'int', 'boolean', 'String']
          },
          {
            label: 'Whether a student has turned in a permission form should be stored in a ___',
            options: ['boolean', 'int', 'double', 'String']
          }
        ],
        correctAnswers: ['int', 'double', 'boolean'],
        hint1: 'Laps are counted in whole numbers.',
        hint2: 'Prices have cents, a fractional part.',
        hint3: 'The form is either turned in or it is not.',
        explanation: 'Whole counts use int, values with a fractional part use double, and yes/no facts use boolean.'
      }
    },
    {
      id: 'csavaria2-worked',
      type: 'text' as const,
      content: `
## Worked Example: Naming the Error

\`\`\`java
int total = 17;
int count = 4
double avg = total / count;
System.out.println(avg);
\`\`\`

**Step 1 — Compile.** Line 2 is missing its semicolon. That is a syntax error, so nothing runs and nothing prints.

**Step 2 — Fix and run.** With the semicolon added, the code compiles and prints \`4.0\`. The correct average of 17 and 4 is 4.25, so the program still has a **logic error**: \`total / count\` is int division (17 / 4 is 4), and the 4 is widened to 4.0 only when it is stored.

**Step 3 — Fix the logic.** Write \`double avg = (double) total / count;\`. Now 17.0 / 4 is 4.25.

**A separate risk.** If \`count\` were 0, the statement \`int each = total / count;\` would still compile, but it would throw an \`ArithmeticException\` when it ran, because an int cannot be divided by zero.

> 🔑 **AP Connection:** When an answer choice says "Nothing is printed because of a compile-time error," check every line's types and punctuation **before** you start tracing values.
      `
    },
    {
      id: 'csavaria2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The program that checks Java source code and translates it into bytecode is called the _______.

2) An error reported while a program is running, such as dividing an int by zero, is called a run-time error or an _______.

3) How many primitive types are in the AP Java subset? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['compiler', 'exception', '3'],
        hint1: 'It runs before the program does and reports syntax errors.',
        hint2: 'ArithmeticException is one kind.',
        hint3: 'int, double, and ...',
        explanation: 'The compiler translates source code. A run-time error is an exception. The AP subset has three primitive types: int, double, and boolean.'
      }
    },
    {
      id: 'csavaria2-strategy',
      type: 'text' as const,
      content: `
## Summary

| Question to ask | Where the answer comes from |
|---|---|
| Will this line compile? | Syntax and type rules, checked by the compiler |
| Will this line crash? | Values at run time, such as an int divided by 0 |
| Is the output right? | Testing against the expected answer |
| What does this variable hold? | Its type: a value for primitives, a reference for objects |
      `
    },
    {
      id: 'csavaria2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
int score = 88;
score = 91.5;
System.out.println(score);
\`\`\`

**Segment B** (meant to print 2.5)
\`\`\`java
int apples = 10;
int people = 4;
double share = apples / people;
System.out.println(share);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the result of running Segment A?',
            options: [
              'It does not compile',
              'It prints the value 91',
              'It prints the value 91.5',
              'It throws an exception'
            ],
            correctAnswer: 0,
            explanation: 'Assigning the double 91.5 to an int variable is a type mismatch that the compiler rejects, so the code never runs. Java does not silently truncate to 91 or store 91.5 in an int.'
          },
          {
            question: 'Which statement best describes Segment B?',
            options: [
              'A logic error: it prints 2.0',
              'A syntax error: it fails to compile',
              'A run-time error: it throws an exception',
              'No error: it prints 2.5 as intended'
            ],
            correctAnswer: 0,
            explanation: 'Every line compiles and runs, but 10 / 4 is int division, giving 2, which is stored as 2.0. The output is wrong, so this is a logic error.'
          }
        ]
      }
    }
  ]
}
