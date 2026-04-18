export const cspVariablesControlPart1Data = {
  topicSlug: 'csp-variables-control',
  sections: [
    {
      id: 'cspvc1-intro',
      type: 'text' as const,
      content: `
# 🔧 Variables & Control Structures

**Part 1 of 7 — Variables, Assignments, Conditionals, and Loops**

---

## Variables and Assignment

In the AP CSP pseudocode:
\`\`\`
score ← 0           // Assign 0 to score
name ← "Alice"      // Assign "Alice" to name
score ← score + 10  // Update score (now 10)
\`\`\`

| Concept | Pseudocode | Meaning |
|---------|-----------|---------|
| **Assignment** | \`x ← 5\` | Store 5 in variable x |
| **Update** | \`x ← x + 1\` | Add 1 to current value of x |
| **Display** | \`DISPLAY(x)\` | Show value of x on screen |

> 🔑 The **left arrow (←)** means "gets the value of." It is NOT an equality check — it is an assignment. The right side is evaluated first, then stored in the left side.

---

## Data Types

| Type | Examples | Operations |
|------|---------|-----------|
| **Number** | 42, 3.14, -7 | +, -, *, /, MOD |
| **String** | "hello", "123" | Concatenation, length |
| **Boolean** | true, false | AND, OR, NOT |
| **List** | [1, 2, 3] | Access, insert, append, remove |
      `
    },
    {
      id: 'cspvc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After these statements, what is the value of x?\nx ← 5\ny ← x\nx ← 10',
            options: [
              'x = 5, y = 10',
              'x = 10, y = 10',
              'x = 10, y = 5',
              'x = 5, y = 5'
            ],
            correctAnswer: 2,
            explanation: 'Line 1: x gets 5. Line 2: y gets the current value of x (5). Line 3: x gets 10. Changing x later does NOT change y — y already stored its own copy of 5.'
          },
          {
            question: 'What does x ← x + 1 do?',
            options: [
              'Checks if x equals x + 1',
              'Creates a new variable called x + 1',
              'Adds 1 to the current value of x and stores the result back in x',
              'Causes an error because x cannot equal x + 1'
            ],
            correctAnswer: 2,
            explanation: 'The right side (x + 1) is evaluated first using the current value of x. The result is then stored back in x.This is an update, not an equation.'
          }
        ]
      }
    },
    {
      id: 'cspvc1-content',
      type: 'text' as const,
      content: `
## Conditionals (Selection)

\`\`\`
IF (condition)
{
    // Runs if condition is true
}
ELSE
{
    // Runs if condition is false
}
\`\`\`

### Comparison Operators
| Operator | Meaning |
|----------|---------|
| = | Equal to |
| ≠ | Not equal to |
| > | Greater than |
| < | Less than |
| ≥ | Greater than or equal to |
| ≤ | Less than or equal to |

### Boolean Operators
| Operator | Description |
|----------|-----------|
| **AND** | True only if BOTH are true |
| **OR** | True if at LEAST one is true |
| **NOT** | Reverses true/false |

## Loops (Iteration)

### REPEAT n TIMES
\`\`\`
REPEAT 5 TIMES
{
    DISPLAY("Hello")
}
// Displays "Hello" five times
\`\`\`

### REPEAT UNTIL (condition)
\`\`\`
x ← 1
REPEAT UNTIL (x > 5)
{
    DISPLAY(x)
    x ← x + 1
}
// Displays: 1, 2, 3, 4, 5
\`\`\`

> ⚠️ REPEAT UNTIL checks the condition BEFORE each iteration. If the condition is already true, the loop body never executes.
      `
    },
    {
      id: 'cspvc1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The assignment operator in AP CSP pseudocode is the _______ arrow (←).

2) The Boolean operator that returns true only when BOTH conditions are true is _______.

3) REPEAT UNTIL checks the condition _______ each iteration (not after).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['left', 'AND', 'before'],
        hint1: 'Points from right to left.',
        hint2: 'Both must be true.',
        hint3: 'Pre-check, like a while loop.',
        explanation: 'Left arrow for assignment. AND = both true. REPEAT UNTIL checks before running.'
      }
    },
    {
      id: 'cspvc1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Evaluate the Expression** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NOT (true AND false) evaluates to ___',
            options: ['true', 'false', 'error', 'null']
          },
          {
            label: '(5 > 3) OR (2 > 10) evaluates to ___',
            options: ['true', 'false', 'error', 'null']
          },
          {
            label: 'After: x ← 3, x ← x * x, the value of x is ___',
            options: ['9', '3', '6', '27']
          }
        ],
        correctAnswers: ['true', 'true', '9'],
        hint1: 'true AND false = false. NOT false = true.',
        hint2: 'OR needs at least one true. 5 > 3 is true.',
        hint3: 'x = 3, then x = 3 * 3 = 9.',
        explanation: 'NOT(false) = true. OR with one true = true. 3 * 3 = 9.'
      }
    },
    {
      id: 'cspvc1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Variables & Control

- **Trace code carefully** — write down variable values after each line
- Assignment (←) is NOT equality — the right side is evaluated first
- Know De Morgan: NOT(A AND B) = NOT A OR NOT B; NOT(A OR B) = NOT A AND NOT B
- REPEAT UNTIL is like a while loop that continues UNTIL the condition becomes true (opposite of while)
- Every IF needs a corresponding condition; nested IFs test conditions in order
- Swapping two variables requires a temp variable: temp ← a, a ← b, b ← temp
      `
    },
    {
      id: 'cspvc1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is displayed?\nx ← 10\ny ← 20\ntemp ← x\nx ← y\ny ← temp\nDISPLAY(x)\nDISPLAY(y)',
            options: [
              '10 then 20',
              '20 then 10',
              '20 then 20',
              '10 then 10'
            ],
            correctAnswer: 1,
            explanation: 'This is the classic swap algorithm. temp saves x (10). x gets y (20). y gets temp (10). Result: x=20, y=10. The temp variable prevents losing a value during the swap.'
          },
          {
            question: 'count ← 0\nREPEAT UNTIL (count ≥ 3)\n{\n    count ← count + 1\n}\nDISPLAY(count)',
            options: [
              '2',
              '3',
              '4',
              '0'
            ],
            correctAnswer: 1,
            explanation: 'count starts at 0. Loop: 0 < 3 (run, count=1), 1 < 3 (run, count=2), 2 < 3 (run, count=3), 3 >= 3 (stop). Display: 3.'
          }
        ]
      }
    }
  ]
};
