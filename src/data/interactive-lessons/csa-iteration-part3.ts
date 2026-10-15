export const csaIterationPart3Data = {
  topicSlug: 'csa-iteration',
  sections: [
    {
      id: 'csaitera3-intro',
      type: 'text' as const,
      content: `
# 🔁 Iteration

**Part 3 of 7 — for Loops: Counting Passes and Converting to while**

---

A \`for\` loop packs the three parts of a counting loop (start, test and step) into one header (CED Topic 2.8). Reading that header correctly answers most loop questions before you trace a single pass.

| In this part |
|---|
| The order in which the header runs |
| Counting passes without tracing |
| Scope: where the loop variable exists |
| Converting between for and while |
| The value of a counter after the loop |
      `
    },
    {
      id: 'csaitera3-order',
      type: 'text' as const,
      content: `
## The Order of Execution

\`\`\`java
for (initialization; condition; update) {
    body
}
\`\`\`

| Part | Example | When it runs |
|---|---|---|
| 1. Initialization | \`int i = 1\` | **once**, before anything else |
| 2. Condition | \`i < 20\` | before **every** pass, and once more at the end |
| 3. Body | the statements in braces | once per pass |
| 4. Update | \`i *= 3\` | **after** each pass, before the next check |

The update is written at the top of the loop, but it runs at the bottom.

## Worked Example 1: A Multiplying Update

\`\`\`java
for (int i = 1; i < 20; i *= 3) {
    System.out.print(i + " ");
}
\`\`\`

| Check | \`i\` | \`i < 20\`? | Printed | Update |
|---|---|---|---|---|
| 1 | 1 | true | \`1 \` | \`i\` becomes 3 |
| 2 | 3 | true | \`3 \` | \`i\` becomes 9 |
| 3 | 9 | true | \`9 \` | \`i\` becomes 27 |
| 4 | 27 | false | loop ends | |

The output is \`1 3 9 \`. The last update computes 27, but 27 is never printed, because the condition is checked before the body.
      `
    },
    {
      id: 'csaitera3-counting',
      type: 'text' as const,
      content: `
## Counting Passes Without Tracing

For a step of 1, the bounds give the count directly (assume \`a\` is at most \`b\`):

| Header | Values of \`i\` | Passes |
|---|---|---|
| \`for (int i = a; i < b; i++)\` | a, a + 1, ..., b - 1 | b - a |
| \`for (int i = a; i <= b; i++)\` | a, a + 1, ..., b | b - a + 1 |
| \`for (int i = b; i > a; i--)\` | b, b - 1, ..., a + 1 | b - a |
| \`for (int i = b; i >= a; i--)\` | b, b - 1, ..., a | b - a + 1 |

For any other step, find the **first** value and the **last** value that pass the test, then count:

**passes = (last - first) / step + 1**

| Header | First | Last that passes | Passes |
|---|---|---|---|
| \`for (int i = 3; i <= 40; i += 5)\` | 3 | 38 (43 fails) | (38 - 3) / 5 + 1 = 8 |
| \`for (int i = 50; i > 0; i -= 7)\` | 50 | 1 (-6 fails) | (50 - 1) / 7 + 1 = 8 |
| \`for (int i = 0; i < 10; i += 4)\` | 0 | 8 (12 fails) | (8 - 0) / 4 + 1 = 3 |
| \`for (int i = 5; i < 5; i++)\` | none | none | 0 |

For a multiplying or dividing update, list the values: \`for (int p = 1; p <= 100; p *= 2)\` visits 1, 2, 4, 8, 16, 32, 64, which is 7 passes.

> 🎯 **AP Connection:** Exam questions often ask how many times a body executes. Check both ends: does the first value pass, and is the boundary value included (\`<=\`) or excluded (\`<\`)?
      `
    },
    {
      id: 'csaitera3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check: How Many Passes?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many times does the body of for (int k = 5; k <= 25; k += 5) execute?',
            options: [
              '4',
              '5',
              '6',
              '20'
            ],
            correctAnswer: 1,
            explanation: 'k takes the values 5, 10, 15, 20 and 25, and 25 passes because the test is <=. The formula gives (25 - 5) / 5 + 1 = 5.'
          },
          {
            question: 'How many times does the body of for (int j = 30; j > 2; j -= 4) execute?',
            options: [
              '6',
              '7',
              '8',
              '28'
            ],
            correctAnswer: 1,
            explanation: 'j takes the values 30, 26, 22, 18, 14, 10 and 6. The next value, 2, fails j > 2, so the body runs 7 times.'
          },
          {
            question: 'How many times does the body of for (int p = 3; p < 3; p++) execute?',
            options: [
              '0',
              '1',
              '3',
              '2'
            ],
            correctAnswer: 0,
            explanation: 'The first check, 3 < 3, is false, so the body never runs. A for loop checks its condition before the first pass, just like a while loop.'
          },
          {
            question: 'In a for loop, when does the update expression in the header run?',
            options: [
              'After each pass of the body, before the next check',
              'Before the body runs on every pass',
              'Once, before the condition is first checked',
              'Only after the condition becomes false'
            ],
            correctAnswer: 0,
            explanation: 'The update is written in the header but runs after the body on each pass, and then the condition is checked again. The initialization is the part that runs once, before the first check.'
          }
        ]
      }
    },
    {
      id: 'csaitera3-scope',
      type: 'text' as const,
      content: `
## Scope of the Loop Variable

A variable declared in the header exists only inside the loop.

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.print(i);
}
System.out.println(i);   // compile-time error: i cannot be found here
\`\`\`

To use the counter after the loop, declare it before the loop:

\`\`\`java
int i;
for (i = 0; i < 5; i++) {
    System.out.print(i);
}
System.out.println(" ends at " + i);   // prints 01234 ends at 5
\`\`\`

After a counting loop ends normally, the counter holds the **first value that failed the condition**, not the last value used in the body.

A variable declared **inside the body** is created again on every pass, so it cannot carry a value from one pass to the next. Accumulators and counters must be declared **before** the loop.
      `
    },
    {
      id: 'csaitera3-convert',
      type: 'text' as const,
      content: `
## Converting Between for and while

Any \`for\` loop can be rewritten as a \`while\` loop by moving two pieces of the header.

\`\`\`java
int sum = 0;
for (int i = 2; i <= 10; i += 2) {
    sum += i;
}
\`\`\`

\`\`\`java
int sum = 0;
int i = 2;            // initialization moves above the loop
while (i <= 10) {     // the condition stays in the header
    sum += i;
    i += 2;           // the update moves to the END of the body
}
\`\`\`

Both versions leave \`sum\` at 30 (2 + 4 + 6 + 8 + 10). In the \`while\` version, \`i\` still exists after the loop and holds 12.

### The Update Must Go Last

\`\`\`java
int sum = 0;
int i = 2;
while (i <= 10) {
    i += 2;      // update moved to the top
    sum += i;
}
\`\`\`

| Check | \`i\` at the check | \`i\` after \`i += 2\` | \`sum\` after |
|---|---|---|---|
| 1 | 2 | 4 | 4 |
| 2 | 4 | 6 | 10 |
| 3 | 6 | 8 | 18 |
| 4 | 8 | 10 | 28 |
| 5 | 10 | 12 | 40 |
| 6 | 12, fails | | |

The loop still runs 5 times, but every value is shifted: it skips 2 and adds 12, so \`sum\` is 40 instead of 30.
      `
    },
    {
      id: 'csaitera3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Convert the Loop** 🔍

Rewrite this loop as a \`while\` loop that prints the same output.

\`\`\`java
for (int k = 9; k > 0; k -= 2) {
    System.out.print(k);
}
\`\`\`
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Statement placed before the while loop: ___',
            options: ['int k = 9;', 'int k = 0;', 'k -= 2;', 'int k = 7;']
          },
          {
            label: 'Condition of the while loop: ___',
            options: ['k > 0', 'k >= 9', 'k != 0', 'k < 9']
          },
          {
            label: 'Value of k after the while loop ends: ___',
            options: ['-1', '0', '1', '-2']
          }
        ],
        correctAnswers: ['int k = 9;', 'k > 0', '-1'],
        hint1: 'The initialization runs once, before the first check.',
        hint2: 'The condition is copied unchanged from the header.',
        hint3: 'List the values: 9, 7, 5, 3, 1, then one more update.',
        explanation: 'The initialization moves above the loop, the condition stays the same, and k -= 2 becomes the last statement of the body. The loop prints 97531, and the final update makes k equal to -1, the first value that fails k > 0.'
      }
    },
    {
      id: 'csaitera3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

\`\`\`java
int count = 0;
int i = 1;
while (i < 50) {
    i = i * 2 + 1;
    count++;
}
\`\`\`

1) What is the value of \`count\` after the loop?

2) What is the value of \`i\` after the loop?

3) How many times does the body of \`for (int j = -3; j <= 3; j++)\` execute?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '63', '7'],
        hint1: 'i goes 1, 3, 7, ...',
        hint2: 'The final i is the first value that is not less than 50.',
        hint3: 'Count -3 through 3, including 0.',
        explanation: 'i takes the values 1, 3, 7, 15, 31 and 63, so the body runs 5 times and i ends at 63, the first value that fails i < 50. The for loop visits -3, -2, -1, 0, 1, 2 and 3, which is 3 - (-3) + 1 = 7 passes.'
      }
    },
    {
      id: 'csaitera3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.print(i);
}
System.out.println(i);
\`\`\`

**Segment B**
\`\`\`java
int sum = 0;
int i = 1;
while (i <= 5) {
    i++;
    sum += i;
}
System.out.println(sum);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the result of running Segment A?',
            options: [
              'The code fails to compile',
              'It prints 012345',
              'It prints 01234',
              'It prints 012344'
            ],
            correctAnswer: 0,
            explanation: 'i is declared in the for header, so it does not exist after the loop and the last line is a compile-time error. To print the final counter, declare i before the loop.'
          },
          {
            question: 'Which change makes Segment A compile and print 012345?',
            options: [
              'Declare i before the loop',
              'Change the condition in the header to i <= 5',
              'Replace i++ with i += 1 in the loop header',
              'Add int i; as the first line of the loop body'
            ],
            correctAnswer: 0,
            explanation: 'With int i; above the loop and the header written as for (i = 0; i < 5; i++), i still exists after the loop and holds 5, the first value that failed. The other changes leave i declared only inside the loop, so the last line still does not compile.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '15',
              '20',
              '21',
              '14'
            ],
            correctAnswer: 1,
            explanation: 'Because i++ runs before sum += i, the loop adds 2, 3, 4, 5 and 6, which is 20. Putting the update after the addition would add 1 through 5 for 15.'
          }
        ]
      }
    }
  ]
}
