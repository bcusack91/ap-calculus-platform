export const csaExpressionsOperatorsPart5Data = {
  topicSlug: 'csa-expressions-operators',
  sections: [
    {
      id: 'csaexpre5-intro',
      type: 'text' as const,
      content: `
# ➗ Expressions & Operators

**Part 5 of 7 — Compound Assignment and Tracing Updates**

---

Compound assignment operators combine an arithmetic operation with assignment (CED Topic 1.6). Part 1 listed them. This part traces them, including the case that catches most students: the **entire** right side is evaluated before the operator is applied.

| In this part |
|---|
| The whole right side goes first |
| ++ and -- |
| Worked example: a trace table of updates |
| += with Strings |
      `
    },
    {
      id: 'csaexpre5-rhs',
      type: 'text' as const,
      content: `
## The Whole Right Side Goes First

\`x op= expression;\` means \`x = x op (expression);\` — with parentheses around the entire right side.

\`\`\`java
int x = 4;
x *= 2 + 3;     // x = 4 * (2 + 3) = 20, not 4 * 2 + 3 = 11
\`\`\`

Each row below starts fresh with \`x = 10\`:

| Statement | Means | New x |
|---|---|---|
| \`x += 5;\` | x = x + 5 | 15 |
| \`x -= 2 * 3;\` | x = x - (2 * 3) | 4 |
| \`x *= 1 + 1;\` | x = x * (1 + 1) | 20 |
| \`x /= 4;\` | x = x / 4 | 2 |
| \`x %= 4;\` | x = x % 4 | 2 |
| \`x /= 2 + 3;\` | x = x / (2 + 3) | 2 |

### Type Still Matters
- With an int, \`/=\` truncates: \`int y = 7; y /= 2;\` leaves \`y\` at 3.
- With a double, it does not: \`double d = 7; d /= 2;\` leaves \`d\` at 3.5.

## ++ and --
\`count++;\` adds 1 to \`count\`, and \`count--;\` subtracts 1. In AP CSA these appear only as **standalone statements** (and in \`for\` loop headers). Using them inside a larger expression, such as \`y = x++ + 1;\`, or in prefix form (\`++x\`) is outside the course.
      `
    },
    {
      id: 'csaexpre5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After int x = 6; x -= 2 + 1; executes, what is the value of x?',
            options: [
              '3',
              '5',
              '9',
              '1'
            ],
            correctAnswer: 0,
            explanation: 'The whole right side is evaluated first, so x = 6 - (2 + 1) = 3. Getting 5 means computing 6 - 2 + 1 without the implied parentheses.'
          },
          {
            question: 'After int y = 9; y /= 2; y *= 2; executes, what is the value of y?',
            options: [
              '8',
              '9',
              '4',
              '18'
            ],
            correctAnswer: 0,
            explanation: 'y /= 2 is int division, so y becomes 4, and y *= 2 makes it 8. Dividing and then multiplying by 2 does not restore 9 once the remainder is lost.'
          }
        ]
      }
    },
    {
      id: 'csaexpre5-trace',
      type: 'text' as const,
      content: `
## Worked Example: A Trace Table of Updates

\`\`\`java
int a = 5;
int b = 3;
a += b;       // line 3
b *= a - 6;   // line 4
a %= b;       // line 5
b -= a;       // line 6
a++;          // line 7
\`\`\`

| After line | a | b | Work |
|---|---|---|---|
| 2 | 5 | 3 | |
| 3 | 8 | 3 | 5 + 3 |
| 4 | 8 | 6 | 3 * (8 - 6) |
| 5 | 2 | 6 | 8 % 6 |
| 6 | 2 | 4 | 6 - 2 |
| 7 | 3 | 4 | 2 + 1 |

Line 4 is where most mistakes happen. Writing \`3 * 8 - 6 = 18\` ignores the implied parentheses; the right side \`a - 6\` is 2, and 3 * 2 = 6.
      `
    },
    {
      id: 'csaexpre5-strings',
      type: 'text' as const,
      content: `
## += with Strings

\`+=\` also works on a String variable: \`s += x;\` means \`s = s + (x);\`. Because the right side is still evaluated first, it can behave differently from writing the \`+\` signs out:

\`\`\`java
String code = "A";
code += 1 + 2;          // code = "A" + (1 + 2), which is "A3"
code += "B" + 4;        // code = "A3" + ("B" + 4), which is "A3B4"

String other = "A";
other = other + 1 + 2;  // left to right: "A1", then "A12"
\`\`\`

The first line adds 1 + 2 as numbers because both are ints and they are evaluated before the String is involved. In the last line, \`other + 1\` is already a String, so the 2 is joined as text.
      `
    },
    {
      id: 'csaexpre5-input',
      type: 'input-boxes' as const,
      content: `
**Trace It** ✍️

\`\`\`java
int p = 12;
p -= 4;      // line 2
p *= p - 5;  // line 3
p %= 7;      // line 4
p++;         // line 5
\`\`\`

1) The value of p after line 2 is _______.

2) The value of p after line 3 is _______.

3) The value of p after line 5 is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '24', '4'],
        hint1: '12 - 4.',
        hint2: 'p * (p - 5) with p = 8.',
        hint3: '24 % 7, then add 1.',
        explanation: 'p goes 12, then 8, then 8 * (8 - 5) = 24, then 24 % 7 = 3, then 4.'
      }
    },
    {
      id: 'csaexpre5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
String s = "x";
s += 2 + 3;
s = s + 2 + 3;
System.out.println(s);
\`\`\`

**Segment B**
\`\`\`java
int total = 100;
total /= 3;
total *= 3;
total += total % 4;
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              'x523',
              'x55',
              'x2323',
              'x235'
            ],
            correctAnswer: 0,
            explanation: 'In the compound statement, 2 + 3 is evaluated first as 5, giving x5. In the next line, s + 2 is already a String, so 2 and 3 are joined as text, giving x523.'
          },
          {
            question: 'What is the value of total after Segment B executes?',
            options: [
              '102',
              '33',
              '99',
              '2'
            ],
            correctAnswer: 0,
            explanation: '100 / 3 is 33 with int division, and 33 * 3 is 99, not 100, because the remainder is gone. Then 99 % 4 is 3, and 99 + 3 is 102.'
          }
        ]
      }
    }
  ]
}
