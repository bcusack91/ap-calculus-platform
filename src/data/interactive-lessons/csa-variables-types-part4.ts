export const csaVariablesTypesPart4Data = {
  topicSlug: 'csa-variables-types',
  sections: [
    {
      id: 'csavaria4-intro',
      type: 'text' as const,
      content: `
# 📦 Variables & Data Types

**Part 4 of 7 — Range, Overflow, Rounding, and Round-off**

---

Java stores every \`int\` in 32 bits, so an int has a fixed range. A \`double\` stores an approximation of most decimal values. Both facts produce surprising output, and CED Topic 1.5 tests both directly.

| In this part |
|---|
| The range of int and integer overflow |
| Rounding a double to the nearest int |
| Round-off error with double |
      `
    },
    {
      id: 'csavaria4-range',
      type: 'text' as const,
      content: `
## The Range of int

| Constant (Java Quick Reference) | Value |
|---|---|
| \`Integer.MAX_VALUE\` | 2147483647, which is 2 to the 31st power minus 1 |
| \`Integer.MIN_VALUE\` | -2147483648, which is negative 2 to the 31st power |

When an int expression produces a result outside this range, **integer overflow** occurs. Java does not report an error. The value wraps around to the other end of the range, like an odometer rolling over:

\`\`\`java
int big = Integer.MAX_VALUE;
big = big + 1;
System.out.println(big);    // -2147483648
\`\`\`

Going the other way, \`Integer.MIN_VALUE - 1\` evaluates to \`Integer.MAX_VALUE\`.

Overflow can happen in the middle of an expression even when the final answer looks reasonable:

\`\`\`java
int a = 50000;
int b = a * a;              // 2,500,000,000 is too big for an int
System.out.println(b);      // -1794967296
\`\`\`

> 🔑 **Overflow is not an exception.** The program keeps running with a wrong value, which makes it a logic error that only testing reveals.
      `
    },
    {
      id: 'csavaria4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by System.out.println(Integer.MAX_VALUE + 1);?',
            options: [
              '-2147483648',
              '2147483648',
              'An ArithmeticException',
              '2147483647'
            ],
            correctAnswer: 0,
            explanation: 'Adding 1 to the largest int overflows and wraps around to the smallest int, -2147483648. The value 2147483648 cannot be stored in an int, and overflow does not throw an exception.'
          },
          {
            question: 'Which statement about int overflow in Java is true?',
            options: [
              'The value wraps around and the program keeps running',
              'The program stops with an ArithmeticException',
              'The compiler rejects code that could overflow',
              'The result is automatically widened to a double'
            ],
            correctAnswer: 0,
            explanation: 'Overflow silently wraps the value to the other end of the int range. The compiler cannot predict run-time values, no exception is thrown, and Java never widens an int result on its own.'
          }
        ]
      }
    },
    {
      id: 'csavaria4-rounding',
      type: 'text' as const,
      content: `
## Rounding to the Nearest Integer

A cast to \`int\` **truncates** toward zero: \`(int) 3.7\` is 3 and \`(int) -3.7\` is -3. To round to the nearest integer instead, shift by 0.5 first and then truncate (CED Topic 1.5):

| x | Expression | After the shift | Result |
|---|---|---|---|
| 3.7 | \`(int) (x + 0.5)\` | 4.2 | 4 |
| 3.2 | \`(int) (x + 0.5)\` | 3.7 | 3 |
| -3.7 | \`(int) (x - 0.5)\` | -4.2 | -4 |
| -3.2 | \`(int) (x - 0.5)\` | -3.7 | -3 |

**Rule:** for a nonnegative x use \`(int) (x + 0.5)\`; for a negative x use \`(int) (x - 0.5)\`.

### Worked Example: Rounding an Average
\`\`\`java
int sum = 257;
int n = 3;
double avg = (double) sum / n;     // 85.666...
int rounded = (int) (avg + 0.5);   // (int) 86.166... is 86
\`\`\`

The parentheses matter. \`(int) avg + 0.5\` casts first, giving 85 + 0.5 = 85.5, a double that cannot be stored in the int \`rounded\` without another cast.
      `
    },
    {
      id: 'csavaria4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Round It** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '(int) (6.5 + 0.5) evaluates to ___',
            options: ['7', '6', '6.5', '7.0']
          },
          {
            label: '(int) (-2.6 - 0.5) evaluates to ___',
            options: ['-3', '-2', '-4', '-3.1']
          },
          {
            label: '(int) (0.49 + 0.5) evaluates to ___',
            options: ['0', '1', '0.99', '1.0']
          }
        ],
        correctAnswers: ['7', '-3', '0'],
        hint1: '6.5 + 0.5 is 7.0; then truncate.',
        hint2: '-2.6 - 0.5 is -3.1; truncating moves toward zero.',
        hint3: '0.49 + 0.5 is 0.99, which is still below 1.',
        explanation: 'Shift by 0.5, then truncate: 7.0 becomes 7, -3.1 becomes -3, and 0.99 becomes 0. A cast to int always produces an int, never a value like 7.0.'
      }
    },
    {
      id: 'csavaria4-roundoff',
      type: 'text' as const,
      content: `
## Round-off Error with double

A double stores a limited number of binary digits, so many decimals, such as 0.1, are stored as very close approximations. Arithmetic can expose the tiny difference:

\`\`\`java
double total = 0.1 + 0.2;
System.out.println(total);          // 0.30000000000000004
System.out.println(total == 0.3);   // false
\`\`\`

### What to Do About It
- Do not compare computed doubles with \`==\`. Check that they are close instead: \`Math.abs(total - 0.3) < 0.000001\` (\`Math.abs\` is on the Java Quick Reference).
- Money is often stored as an int number of **cents**, because int arithmetic is exact as long as it stays in range.
- When converting a double to an int, rounding with + 0.5 protects against values like 1998.9999999999998 that are a hair below a whole number.

> 🔑 **AP Connection:** The CED separates the two problems. **Overflow** is an int going out of range. **Round-off error** is a double that cannot be stored exactly. Expect a question about each.
      `
    },
    {
      id: 'csavaria4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The largest value an int can hold is stored in the constant Integer._______.

2) The expression (int) (7.5 + 0.5) evaluates to _______.

3) When an int result falls outside the int range and wraps around, it is called integer _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['MAX_VALUE', '8', 'overflow'],
        hint1: 'MIN_VALUE is its partner.',
        hint2: '7.5 + 0.5 is 8.0.',
        hint3: 'The value "flows over" the top of the range.',
        explanation: 'Integer.MAX_VALUE is 2147483647. 7.5 + 0.5 = 8.0, which truncates to 8. Going past the range is integer overflow.'
      }
    },
    {
      id: 'csavaria4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
double price = 19.99;
int cents = (int) (price * 100 + 0.5);
System.out.println(cents);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '1999',
              '1998',
              '1999.0',
              '2000'
            ],
            correctAnswer: 0,
            explanation: 'Because of round-off error, price * 100 is stored as 1998.9999999999998. Adding 0.5 and truncating gives 1999; casting without the 0.5 would have given 1998.'
          },
          {
            question: 'Which expression evaluates to the same value as Integer.MIN_VALUE?',
            options: [
              'Integer.MAX_VALUE + 1',
              'Integer.MAX_VALUE - 1',
              'Integer.MIN_VALUE + 1',
              '-Integer.MAX_VALUE'
            ],
            correctAnswer: 0,
            explanation: 'MAX_VALUE + 1 overflows and wraps to MIN_VALUE. Negating MAX_VALUE gives -2147483647, which is one more than MIN_VALUE, and the other two stay inside the range.'
          }
        ]
      }
    }
  ]
}
