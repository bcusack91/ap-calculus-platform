export const csaVariablesTypesPart5Data = {
  topicSlug: 'csa-variables-types',
  sections: [
    {
      id: 'csavaria5-intro',
      type: 'text' as const,
      content: `
# 📦 Variables & Data Types

**Part 5 of 7 — Type Compatibility, Cast Placement, and Misconceptions**

---

Most Unit 1 "what is printed" questions turn on two decisions: **will this line compile**, and **when does each cast and division happen**? This part gives you a reliable procedure for both, then names the misconceptions that cost the most points.

| In this part |
|---|
| Which assignments compile |
| Where the cast goes |
| Worked example: computing a percentage |
| Misconceptions to retire |
      `
    },
    {
      id: 'csavaria5-compat',
      type: 'text' as const,
      content: `
## Which Assignments Compile?

| Storing... into... | Compiles? | Example | Result |
|---|---|---|---|
| an int into a double | Yes (widening) | \`double d = 7;\` | \`d\` is 7.0 |
| a double into an int | Only with a cast | \`int n = (int) 7.9;\` | \`n\` is 7 |
| a double into an int, no cast | No | \`int n = 7.9;\` | Compile-time error |
| an int into a boolean | Never | \`boolean b = 1;\` | Compile-time error |
| an int into a String | No | \`String s = 5;\` | Compile-time error |

No cast converts between \`boolean\` and a number: \`(int) true\` and \`(boolean) 1\` are both compile-time errors.

The same widening rule applies to method arguments. \`Math.sqrt\` expects a double, so \`Math.sqrt(16)\` compiles: the int 16 widens to 16.0, and the method returns 4.0.
      `
    },
    {
      id: 'csavaria5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which declaration compiles without an error?',
            options: [
              'double d = 12;',
              'int count = 12.0;',
              'boolean flag = 0;',
              'String name = 12;'
            ],
            correctAnswer: 0,
            explanation: 'An int widens to a double automatically, so d holds 12.0. A double needs a cast to become an int, no number converts to boolean, and an int is not a String.'
          },
          {
            question: 'Which expression produces a compile-time error?',
            options: [
              '(int) false',
              '(int) 4.5 + 2',
              '(double) 9 / 2',
              '(int) (3.0 * 2)'
            ],
            correctAnswer: 0,
            explanation: 'Java has no conversion between boolean and int, so casting false is rejected. The other casts convert between int and double, which is always allowed with an explicit cast.'
          }
        ]
      }
    },
    {
      id: 'csavaria5-placement',
      type: 'text' as const,
      content: `
## Where the Cast Goes Matters

A cast applies to the **single value immediately to its right**, and it happens before \`*\`, \`/\` and \`%\`. To cast a whole expression, wrap the expression in parentheses.

With \`int a = 7;\` and \`int b = 2;\`:

| Expression | Steps | Result |
|---|---|---|
| \`(double) a / b\` | 7.0 / 2 | 3.5 |
| \`a / (double) b\` | 7 / 2.0 | 3.5 |
| \`(double) (a / b)\` | (double) 3 | 3.0 |
| \`(int) a / b\` | 7 / 2 | 3 |
| \`(int) 3.5 * 2\` | 3 * 2 | 6 |
| \`(int) (3.5 * 2)\` | (int) 7.0 | 7 |

### Worked Example: Computing a Percentage
\`\`\`java
int correct = 17;
int total = 20;
double pct1 = correct / total * 100;            // 0 * 100 is 0, stored as 0.0
double pct2 = (double) correct / total * 100;   // 0.85 * 100 is 85.0
double pct3 = 100 * correct / total;            // 1700 / 20 is 85, stored as 85.0
\`\`\`

- **pct1** fails: 17 / 20 is int division, which gives 0 before the multiplication happens.
- **pct2** is correct: the cast makes 17.0, so every later operation is double arithmetic.
- **pct3** happens to work here, but only because 1700 divides evenly by 20. With \`total = 30\` it would give 56.0 instead of about 56.67, because the division is still int division.
      `
    },
    {
      id: 'csavaria5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Evaluate the Cast** 🔍

Use \`int a = 9;\` and \`int b = 4;\`.
      `,
      exercise: {
        dropdowns: [
          {
            label: '(double) a / b evaluates to ___',
            options: ['2.25', '2.0', '2', '2.5']
          },
          {
            label: '(double) (a / b) evaluates to ___',
            options: ['2.0', '2.25', '2', '2.5']
          },
          {
            label: '(int) 2.75 * b evaluates to ___',
            options: ['8', '11', '11.0', '8.0']
          }
        ],
        correctAnswers: ['2.25', '2.0', '8'],
        hint1: 'The cast turns a into 9.0 before the division.',
        hint2: 'The int division 9 / 4 happens inside the parentheses first.',
        hint3: 'The cast applies only to 2.75.',
        explanation: '9.0 / 4 = 2.25. (double) (9 / 4) = (double) 2 = 2.0. (int) 2.75 is 2, and 2 * 4 = 8.'
      }
    },
    {
      id: 'csavaria5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions to Retire

| Belief | Reality |
|---|---|
| "Storing the result in a double makes the division exact." | The right side is evaluated first: \`double d = 7 / 2;\` stores 3.0. |
| "Casting to int rounds." | It truncates toward zero. Round with + 0.5 (Part 4). |
| "\`(double) (a / b)\` fixes integer division." | The int division already happened inside the parentheses. |
| "A double holds any number exactly." | Round-off error makes 0.1 + 0.2 print 0.30000000000000004. |
| "int and double mix freely in assignments." | int to double is automatic; double to int needs a cast. |
| "\`final\` makes a variable read-only from the start, so it needs no value." | A final variable must be given a value once; after that it cannot be reassigned. |

### Constants in Calculations
\`\`\`java
final int MAX_SCORE = 40;
int earned = 34;
double pct = 100.0 * earned / MAX_SCORE;   // 3400.0 / 40 is 85.0
\`\`\`
Starting the expression with the double literal 100.0 makes every later step double arithmetic, so the order of the remaining operations cannot cause int division.
      `
    },
    {
      id: 'csavaria5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
int a = 5;
int b = 2;
double x = a / b;
double y = (double) a / b;
double z = (double) (a / b);
System.out.println(x + " " + y + " " + z);
\`\`\`

**Segment B**
\`\`\`java
int hours = 7;
int days = 2;
double perDay = (int) (hours / (double) days);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '2.0 2.5 2.0',
              '2.5 2.5 2.5',
              '2.0 2.5 2.5',
              '2 2.5 2'
            ],
            correctAnswer: 0,
            explanation: 'x stores the int quotient 2 as 2.0, y casts first and gets 2.5, and z casts the already-truncated 2 to get 2.0. Double variables always print with a decimal point.'
          },
          {
            question: 'What value does perDay hold after Segment B executes?',
            options: [
              '3.0',
              '3.5',
              '3',
              '4.0'
            ],
            correctAnswer: 0,
            explanation: '7 / 2.0 is 3.5, the cast to int truncates it to 3, and storing 3 in a double variable widens it to 3.0. A double variable never holds the int 3 itself.'
          }
        ]
      }
    }
  ]
}
