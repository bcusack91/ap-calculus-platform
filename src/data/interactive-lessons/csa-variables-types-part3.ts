export const csaVariablesTypesPart3Data = {
  topicSlug: 'csa-variables-types',
  sections: [
    {
      id: 'csavaria3-intro',
      type: 'text' as const,
      content: `
# 📦 Variables & Data Types

**Part 3 of 7 — Assignment Statements and Trace Tables**

---

The assignment operator \`=\` is an **instruction**, not a statement that two things are equal. It tells Java: evaluate the expression on the right, then store the result in the variable on the left, replacing the old value (CED Topic 1.4). Tracing these updates accurately is the most-used skill on the AP CSA exam.

| In this part |
|---|
| How an assignment statement executes |
| Trace tables |
| Worked example: swapping two values |
| Common assignment mistakes |
      `
    },
    {
      id: 'csavaria3-rules',
      type: 'text' as const,
      content: `
## How an Assignment Statement Executes

1. **Evaluate** the expression on the right, using the **current** values of any variables.
2. **Store** the result in the variable on the left. Its old value is gone.

\`\`\`java
int x = 5;
x = x + 3;   // right side: 5 + 3 is 8, so x now holds 8
\`\`\`

In algebra, x = x + 3 has no solution. In Java it is an ordinary update.

| Statement | Legal? | Reason |
|---|---|---|
| \`x = 7;\` | Yes | A variable is on the left |
| \`7 = x;\` | No | The left side must be a variable |
| \`x + 1 = 9;\` | No | The left side must be a variable |
| \`int y = x;\` | Yes | Copies the current value of \`x\` into \`y\` |

### Copies Are Independent
For primitive types, \`int y = x;\` copies the **value**. Changing \`x\` afterward does not change \`y\`.

### A Variable Must Be Assigned Before It Is Read
\`\`\`java
int total;
total = total + 5;   // compile-time error: total might not have been initialized
\`\`\`
A local variable has no value until something is assigned to it, so the compiler rejects any attempt to read it first.
      `
    },
    {
      id: 'csavaria3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After int a = 4; int b = a; a = a * 3; execute, what are the values of a and b?',
            options: [
              'a is 12 and b is 4',
              'a is 12 and b is 12',
              'a is 4 and b is 12',
              'a is 12 and b is 3'
            ],
            correctAnswer: 0,
            explanation: 'b receives a copy of the value 4. The later statement multiplies a by 3, giving 12, and does not touch b.'
          },
          {
            question: 'Which statement is not a legal assignment in Java?',
            options: [
              'count + 1 = total;',
              'total = count + 1;',
              'count = count;',
              'total = total * total;'
            ],
            correctAnswer: 0,
            explanation: 'The left side of = must be a single variable that can receive a value. count + 1 is an expression, so that line does not compile; assigning a variable to itself is legal, if pointless.'
          }
        ]
      }
    },
    {
      id: 'csavaria3-tables',
      type: 'text' as const,
      content: `
## Trace Tables

A **trace table** has one column per variable and one row per statement. Write a new value only in the column that changes.

### Worked Example
\`\`\`java
int a = 3;
int b = 8;
a = b - a;
b = b - a;
a = a + b;
\`\`\`

| After line | a | b | Work |
|---|---|---|---|
| 1 | 3 | — | |
| 2 | 3 | 8 | |
| 3 | 5 | 8 | 8 - 3 |
| 4 | 5 | 3 | 8 - 5 |
| 5 | 8 | 3 | 5 + 3 |

The final values are a = 8 and b = 3: these three lines swap the two values without a third variable.

### Tracing Tips
- One assignment changes exactly one variable.
- Always use the value from the **most recent** row, not the starting value.
- Write intermediate work; most trace errors are arithmetic done in your head.
      `
    },
    {
      id: 'csavaria3-swap',
      type: 'text' as const,
      content: `
## Worked Example: Swapping Two Values

**The broken version**
\`\`\`java
int first = 10;
int second = 20;
first = second;    // first is 20; the 10 is lost
second = first;    // second is 20
\`\`\`
Both variables end at 20, because the original value of \`first\` was overwritten before it was saved.

**The correct version uses a temporary variable**
\`\`\`java
int temp = first;  // temp is 10
first = second;    // first is 20
second = temp;     // second is 10
\`\`\`

> 🔑 **AP Connection:** Swapping two values with a temporary variable is the core step of the selection sort and insertion sort algorithms you will trace in Unit 4.
      `
    },
    {
      id: 'csavaria3-input',
      type: 'input-boxes' as const,
      content: `
**Trace It** ✍️

\`\`\`java
int p = 6;
int q = 2;
p = p * q;    // line 3
q = p - q;    // line 4
p = p / q;    // line 5
\`\`\`

1) The value of p after line 3 is _______.

2) The value of q after line 4 is _______.

3) The value of p after line 5 is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '10', '1'],
        hint1: '6 times 2.',
        hint2: 'Use the new p, not the original 6.',
        hint3: 'Both operands are ints, so the division truncates.',
        explanation: 'Line 3: p = 6 * 2 = 12. Line 4: q = 12 - 2 = 10. Line 5: p = 12 / 10 = 1 with integer division.'
      }
    },
    {
      id: 'csavaria3-mistakes',
      type: 'text' as const,
      content: `
## Common Assignment Mistakes

| Mistake | Example | What actually happens |
|---|---|---|
| Reading \`=\` as "is equal to" | \`x = x + 1;\` | \`x\` increases by 1 |
| Expecting a copy to stay linked | \`int y = x; x = 9;\` | \`y\` keeps the old value of \`x\` |
| Losing a value before saving it | \`first = second; second = first;\` | Both hold the old value of \`second\` |
| Declaring a variable twice | \`int x = 5;\` and later \`int x = 6;\` | Compile-time error: \`x\` is already defined |
| Reading before assigning | \`int t; int u = t + 1;\` | Compile-time error: \`t\` is not initialized |
      `
    },
    {
      id: 'csavaria3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
int x = 2;
int y = 5;
x = y;
y = x + y;
x = x * 2;
\`\`\`

**Segment B**
\`\`\`java
int total = 0;
total = total + 4;
total = total * 3;
total = total - total / 2;
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What are the values of x and y after Segment A executes?',
            options: [
              'x is 10 and y is 10',
              'x is 10 and y is 7',
              'x is 4 and y is 7',
              'x is 5 and y is 10'
            ],
            correctAnswer: 0,
            explanation: 'x becomes 5, then y becomes 5 + 5 = 10, then x becomes 5 * 2 = 10. Each line must use the newest values, not the starting values 2 and 5.'
          },
          {
            question: 'What is the value of total after Segment B executes?',
            options: [
              '6',
              '0',
              '12',
              '2'
            ],
            correctAnswer: 0,
            explanation: 'total goes 0, 4, 12. On the last line, division happens before subtraction: 12 - 12 / 2 = 12 - 6 = 6.'
          }
        ]
      }
    }
  ]
}
