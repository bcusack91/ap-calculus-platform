export const csaExpressionsOperatorsPart3Data = {
  topicSlug: 'csa-expressions-operators',
  sections: [
    {
      id: 'csaexpre3-intro',
      type: 'text' as const,
      content: `
# ➗ Expressions & Operators

**Part 3 of 7 — Precedence, Associativity, and Type Promotion**

---

Part 1 gave the precedence table. This part covers the two rules that decide the hard cases: operators at the **same** level run **left to right**, and the **type** of each operation is decided one operation at a time. It ends with the one arithmetic run-time error in Unit 1: dividing an int by zero.

| In this part |
|---|
| Left to right within a precedence level |
| Type promotion, one operation at a time |
| Worked example: converting temperatures |
| Dividing by zero |
      `
    },
    {
      id: 'csaexpre3-assoc',
      type: 'text' as const,
      content: `
## Left to Right Within a Precedence Level

\`*\`, \`/\` and \`%\` share one precedence level, and \`+\` and \`-\` share a lower one. When operators share a level, Java applies them **left to right**.

| Expression | Steps | Result |
|---|---|---|
| \`20 / 4 * 5\` | 20 / 4 = 5, then 5 * 5 | 25 |
| \`20 / (4 * 5)\` | 4 * 5 = 20, then 20 / 20 | 1 |
| \`17 % 5 * 3\` | 17 % 5 = 2, then 2 * 3 | 6 |
| \`10 - 4 - 3\` | 10 - 4 = 6, then 6 - 3 | 3 |
| \`2 * 7 / 4\` | 2 * 7 = 14, then 14 / 4 | 3 |
| \`7 / 4 * 2\` | 7 / 4 = 1, then 1 * 2 | 2 |

The last two rows use the same numbers and get different answers. With int division, **the order of \`*\` and \`/\` changes the result**, so you cannot rearrange them the way you would in algebra.

### Full Precedence Order (AP subset)
1. Parentheses
2. Casts and unary minus, such as \`(int)\` and \`-x\`
3. \`*\`, \`/\`, \`%\`
4. \`+\`, \`-\`
5. Assignment: \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\`
      `
    },
    {
      id: 'csaexpre3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of the expression 36 / 6 / 2?',
            options: [
              '3',
              '12',
              '18',
              '3.0'
            ],
            correctAnswer: 0,
            explanation: 'Division is applied left to right: 36 / 6 = 6, then 6 / 2 = 3, and int operands give an int result. Getting 12 means dividing 6 by 2 first, which Java does not do.'
          },
          {
            question: 'What is the value of the expression 5 + 12 % 5 * 2?',
            options: [
              '9',
              '7',
              '4',
              '2'
            ],
            correctAnswer: 0,
            explanation: '% and * share a level and go left to right: 12 % 5 = 2, then 2 * 2 = 4, and the addition comes last, giving 9. Computing 5 * 2 first would give 5 + 2 = 7.'
          }
        ]
      }
    },
    {
      id: 'csaexpre3-promotion',
      type: 'text' as const,
      content: `
## Type Promotion Happens One Operation at a Time

Each operator looks only at its own two operands:
- int with int gives an **int** (division truncates).
- If either operand is a double, the other is promoted and the result is a **double**.

A double that appears **later** in an expression cannot undo an int division that already happened.

| Expression | Step by step | Result |
|---|---|---|
| \`3 / 2 * 2.0\` | 3 / 2 = 1 (int); 1 * 2.0 = 2.0 | 2.0 |
| \`3 * 2.0 / 2\` | 3 * 2.0 = 6.0; 6.0 / 2 = 3.0 | 3.0 |
| \`1 / 2 + 1 / 2.0\` | 1 / 2 = 0; 1 / 2.0 = 0.5; 0 + 0.5 | 0.5 |
| \`5 + 7 / 2 * 1.0\` | 7 / 2 = 3; 3 * 1.0 = 3.0; 5 + 3.0 | 8.0 |

### Worked Example: Converting Temperatures
The formula is F = 9/5 × C + 32.

\`\`\`java
int c = 25;
double f1 = 9 / 5 * c + 32;     // 9 / 5 is 1, so 1 * 25 + 32 = 57, stored as 57.0
double f2 = 9.0 / 5 * c + 32;   // 1.8 * 25 + 32 = 77.0
double f3 = c * 9 / 5 + 32;     // 225 / 5 = 45, then 45 + 32 = 77, stored as 77.0
\`\`\`

- **f1** is wrong because \`9 / 5\` is int division.
- **f2** is right: the double literal 9.0 makes every later operation double arithmetic.
- **f3** is right only by luck. With \`c = 26\`, \`234 / 5\` is 46, giving 78.0 instead of the true 78.8.
      `
    },
    {
      id: 'csaexpre3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Track the Type** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '7 / 2 * 2.0 evaluates to ___',
            options: ['6.0', '7.0', '6', '3.5']
          },
          {
            label: '7 * 2.0 / 2 evaluates to ___',
            options: ['7.0', '6.0', '7', '14.0']
          },
          {
            label: '1 / 4 + 3 / 4.0 evaluates to ___',
            options: ['0.75', '1.0', '0.0', '1']
          }
        ],
        correctAnswers: ['6.0', '7.0', '0.75'],
        hint1: '7 / 2 is an int division that happens first.',
        hint2: '7 * 2.0 is already a double.',
        hint3: '1 / 4 is 0; 3 / 4.0 is a double.',
        explanation: '7 / 2 = 3, then 3 * 2.0 = 6.0. 7 * 2.0 = 14.0, then 14.0 / 2 = 7.0. 1 / 4 = 0 and 3 / 4.0 = 0.75, so the sum is 0.75.'
      }
    },
    {
      id: 'csaexpre3-div0',
      type: 'text' as const,
      content: `
## Dividing by Zero

Dividing an int by zero, or taking \`% 0\`, throws an **\`ArithmeticException\`** at run time:

\`\`\`java
int students = 0;
int perStudent = 120 / students;   // compiles, then throws ArithmeticException
\`\`\`

The code **compiles**, because the compiler does not track the value of \`students\`. The error appears only when the division executes. In the next topic you will guard against this with an \`if\` statement that checks the divisor first.

> 🔑 **AP Connection:** \`ArithmeticException\` is the only exception CED Topic 1.3 attaches to arithmetic. When a multiple-choice option says an exception is thrown, look for an int \`/\` or \`%\` whose right operand can be 0.
      `
    },
    {
      id: 'csaexpre3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
int total = 45;
int groups = 4;
double avg = total / groups * 1.0;
double avg2 = 1.0 * total / groups;
System.out.println(avg + " " + avg2);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '11.0 11.25',
              '11.25 11.25',
              '11.0 11.0',
              '11 11.25'
            ],
            correctAnswer: 0,
            explanation: 'In avg, 45 / 4 is int division (11) before the 1.0 appears, giving 11.0. In avg2, 1.0 * 45 is 45.0 first, so the division gives 11.25.'
          },
          {
            question: 'Which expression throws an ArithmeticException when it is evaluated?',
            options: [
              '15 / (3 - 3)',
              '(3 - 3) / 5',
              '5.0 / 2',
              '3 % 5'
            ],
            correctAnswer: 0,
            explanation: '3 - 3 is 0, and dividing the int 15 by 0 throws. Zero divided by a nonzero number is just 0, 3 % 5 is 3, and 5.0 / 2 is ordinary double division.'
          }
        ]
      }
    },
    {
      id: 'csaexpre3-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate** ✍️

1) 50 / 10 / 5 evaluates to _______.

2) 50 / (10 / 5) evaluates to _______.

3) 2 + 3 * 4 % 5 evaluates to _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '25', '4'],
        hint1: 'Left to right: 50 / 10 first.',
        hint2: 'The parentheses go first: 10 / 5 is 2.',
        hint3: '3 * 4 is 12, then 12 % 5, then add.',
        explanation: '50 / 10 = 5, then 5 / 5 = 1. 10 / 5 = 2, then 50 / 2 = 25. 3 * 4 = 12, 12 % 5 = 2, and 2 + 2 = 4.'
      }
    }
  ]
}
