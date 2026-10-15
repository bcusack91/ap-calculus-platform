export const csaExpressionsOperatorsPart4Data = {
  topicSlug: 'csa-expressions-operators',
  sections: [
    {
      id: 'csaexpre4-intro',
      type: 'text' as const,
      content: `
# ➗ Expressions & Operators

**Part 4 of 7 — Integer Division and Modulus Patterns**

---

Integer division and \`%\` are partners. For nonnegative ints, \`a / b\` counts how many whole groups of \`b\` fit into \`a\`, and \`a % b\` is what is left over. Together they solve a family of problems that appears on nearly every AP CSA exam: unit conversions, making change, pulling digits out of a number, and wrapping around a cycle.

| In this part |
|---|
| The division identity |
| Worked examples: time and coins |
| Digit patterns |
| Wraparound and divisibility |
      `
    },
    {
      id: 'csaexpre4-identity',
      type: 'text' as const,
      content: `
## The Division Identity

For nonnegative \`a\` and positive \`b\`:

**a == (a / b) * b + a % b**

| a | b | a / b | a % b | Check |
|---|---|---|---|---|
| 50 | 12 | 4 | 2 | 4 * 12 + 2 = 50 |
| 47 | 5 | 9 | 2 | 9 * 5 + 2 = 47 |
| 30 | 6 | 5 | 0 | 5 * 6 + 0 = 30 |
| 3 | 7 | 0 | 3 | 0 * 7 + 3 = 3 |

Read the first row as: 50 eggs fill 4 cartons of 12, with 2 eggs left over.

### Facts That Follow
- \`a % b\` is always between 0 and \`b - 1\`.
- When \`a\` is smaller than \`b\`, \`a / b\` is 0 and \`a % b\` is \`a\` itself. This last row is the most common trap: \`3 % 7\` is 3, not 0.
- \`a % b == 0\` exactly when \`b\` divides \`a\` evenly.

The examples in this lesson use nonnegative operands, which is how \`%\` appears in AP problems.
      `
    },
    {
      id: 'csaexpre4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of the expression 4 % 9?',
            options: [
              '4',
              '0',
              '9',
              '5'
            ],
            correctAnswer: 0,
            explanation: '9 goes into 4 zero times with 4 left over, so the remainder is 4. A smaller left operand is returned unchanged by %.'
          },
          {
            question: 'For positive ints a and b, which expression always has the same value as a?',
            options: [
              'a / b * b + a % b',
              'a % b * b + a / b',
              'a / b + a % b',
              'a / b * b'
            ],
            correctAnswer: 0,
            explanation: 'a / b * b is the part of a that fills whole groups, and a % b is the leftover, so their sum rebuilds a. Leaving off the remainder loses the leftover, and the other two mix up which part gets multiplied.'
          }
        ]
      }
    },
    {
      id: 'csaexpre4-worked',
      type: 'text' as const,
      content: `
## Worked Example 1: Seconds to Hours, Minutes, Seconds

\`\`\`java
int totalSeconds = 7385;
int hours = totalSeconds / 3600;            // 2
int minutes = totalSeconds % 3600 / 60;     // 185 / 60 is 3
int seconds = totalSeconds % 60;            // 5
System.out.println(hours + "h " + minutes + "m " + seconds + "s");
\`\`\`

Output: \`2h 3m 5s\`

| Step | Work |
|---|---|
| Whole hours | 7385 / 3600 = 2 (7200 seconds used) |
| Seconds left after the hours | 7385 % 3600 = 185 |
| Whole minutes in those | 185 / 60 = 3 |
| Seconds left over | 7385 % 60 = 5 |

\`%\` and \`/\` share a precedence level, so \`totalSeconds % 3600 / 60\` runs left to right: the remainder first, then the division.

## Worked Example 2: Making Change

\`\`\`java
int cents = 87;
int quarters = cents / 25;   // 3
cents = cents % 25;          // 12
int dimes = cents / 10;      // 1
cents = cents % 10;          // 2
int nickels = cents / 5;     // 0
int pennies = cents % 5;     // 2
\`\`\`

The pattern repeats: \`/\` counts the coins of one size, and \`%\` keeps the amount still owed. 3 quarters + 1 dime + 0 nickels + 2 pennies = 75 + 10 + 0 + 2 = 87 cents.
      `
    },
    {
      id: 'csaexpre4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Convert 500 Minutes** 🔍

Use \`int n = 500;\` (a number of minutes).
      `,
      exercise: {
        dropdowns: [
          {
            label: 'n / 60 evaluates to ___',
            options: ['8', '8.33', '20', '480']
          },
          {
            label: 'n % 60 evaluates to ___',
            options: ['20', '8', '0', '33']
          },
          {
            label: 'Written as hours and minutes, n minutes is ___',
            options: ['8 h 20 min', '8 h 33 min', '5 h 0 min', '8 h 2 min']
          }
        ],
        correctAnswers: ['8', '20', '8 h 20 min'],
        hint1: 'How many whole 60s fit in 500?',
        hint2: '8 * 60 = 480; what is left?',
        hint3: 'Combine the two results.',
        explanation: '500 / 60 = 8 whole hours (480 minutes), and 500 % 60 = 20 minutes left over, so 500 minutes is 8 h 20 min.'
      }
    },
    {
      id: 'csaexpre4-digits',
      type: 'text' as const,
      content: `
## Digit Patterns

Part 1 used \`n % 10\` and \`n / 10\`. The general rule: dividing by 10, 100 or 1000 **removes** digits from the right, and \`% 10\`, \`% 100\` or \`% 1000\` **keeps** digits from the right.

| Goal (n = 4729) | Expression | Result |
|---|---|---|
| Ones digit | \`n % 10\` | 9 |
| Tens digit | \`n / 10 % 10\` | 2 |
| Hundreds digit | \`n / 100 % 10\` | 7 |
| Last two digits | \`n % 100\` | 29 |
| Drop the last two digits | \`n / 100\` | 47 |

### Worked Example: Digit Sum of a Three-Digit Number
\`\`\`java
int n = 583;
int sum = n % 10 + n / 10 % 10 + n / 100;   // 3 + 8 + 5 = 16
\`\`\`
\`n / 10 % 10\` runs left to right: 583 / 10 = 58, then 58 % 10 = 8. In Unit 2 you will repeat this with a loop to handle numbers of any length.

## Wraparound and Divisibility

| Pattern | Example | Result |
|---|---|---|
| Clock hours numbered 0 to 11 | \`(9 + 5) % 12\` | 2 |
| Days numbered 0 (Sunday) to 6 (Saturday) | \`(4 + 10) % 7\` | 0, a Sunday |
| Divisibility test | \`n % 3 == 0\` | true when 3 divides \`n\` |

\`% k\` always lands in the range 0 to k - 1, so adding first and then taking \`% k\` wraps any total back into the cycle.
      `
    },
    {
      id: 'csaexpre4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
int n = 9046;
int a = n / 100 % 10;
int b = n % 100 / 10;
System.out.println(a + b);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '4',
              '13',
              '04',
              '46'
            ],
            correctAnswer: 0,
            explanation: 'a is 90 % 10 = 0, the hundreds digit, and b is 46 / 10 = 4, the tens digit. Both are ints, so a + b is the sum 4, not the joined text 04.'
          },
          {
            question: 'Days are numbered 0 (Sunday) through 6 (Saturday), and today is day 5. Which expression gives the day number 100 days from now?',
            options: [
              '(5 + 100) % 7',
              '5 + 100 % 7',
              '(5 + 100) / 7',
              '100 % 7'
            ],
            correctAnswer: 0,
            explanation: 'Adding first and then taking % 7 wraps the total into the range 0 to 6: 105 % 7 = 0, a Sunday. Without parentheses, 5 + 100 % 7 is 7, which is not a valid day number, and 100 % 7 ignores that today is day 5.'
          }
        ]
      }
    },
    {
      id: 'csaexpre4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) 1234 / 100 % 10 evaluates to _______.

2) (10 + 15) % 12 evaluates to _______.

3) After as many quarters (25 cents each) as possible are taken out of 140 cents, the number of cents left is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '15'],
        hint1: '1234 / 100 is 12.',
        hint2: '25 % 12: two full 12s is 24.',
        hint3: 'That is 140 % 25.',
        explanation: '1234 / 100 = 12 and 12 % 10 = 2. 25 % 12 = 1. 140 % 25 = 15, because five quarters use 125 cents.'
      }
    }
  ]
}
