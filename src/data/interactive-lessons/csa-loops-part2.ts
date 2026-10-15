export const csaLoopsPart2Data = {
  topicSlug: 'csa-loops',
  sections: [
    {
      id: 'csaloops2-intro',
      type: 'text' as const,
      content: `
# 🔄 Loops (Advanced)

**Part 2 of 7 — Nested Loops: How the Inner Loop Restarts**

---

A **nested loop** is a loop whose body contains another loop (CED Topic 2.11). Part 1 showed the star grid and the rule that an outer loop of M passes around an inner loop of N passes runs the inner body M x N times. This part slows down and traces what happens on every pass, because nearly every nested-loop question on the exam turns on one fact:

> 🔑 **Key Concept:** Each time the outer loop body runs, the inner loop starts over from its initialization and runs **to completion** before the outer loop moves on.

| In this part |
|---|
| The restart rule, traced with an (i, j) table |
| Inner bounds that depend on the outer variable |
| Where the println goes |
| Worked example: a countdown times table |
      `
    },
    {
      id: 'csaloops2-restart',
      type: 'text' as const,
      content: `
## The Restart Rule

\`\`\`java
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        System.out.println(i + " " + j);
    }
}
\`\`\`

Trace it one condition check at a time. Each row is one evaluation of the inner condition \`j <= 2\`.

| Step | i | j | j <= 2? | What happens |
|---|---|---|---|---|
| 1 | 1 | 1 | true | prints \`1 1\` |
| 2 | 1 | 2 | true | prints \`1 2\` |
| 3 | 1 | 3 | false | inner loop ends; \`i++\` makes i 2 |
| 4 | 2 | 1 | true | prints \`2 1\` (j started over at 1) |
| 5 | 2 | 2 | true | prints \`2 2\` |
| 6 | 2 | 3 | false | inner loop ends; i becomes 3 |
| 7 | 3 | 1 | true | prints \`3 1\` |
| 8 | 3 | 2 | true | prints \`3 2\` |
| 9 | 3 | 3 | false | inner loop ends; i becomes 4, \`i <= 3\` is false, outer loop ends |

### What the Table Shows

- **j changes fastest.** i changes only after the inner loop has finished, the way the minute hand goes all the way around before the hour hand moves.
- **The inner initialization runs once per outer pass.** \`int j = 1\` executes 3 times here, and each time j is a brand-new variable that starts at 1.
- **The inner condition is checked one more time than the inner body runs**, on every outer pass: 3 checks per pass (2 true, 1 false), so 9 checks in all.
- **j does not exist outside the inner loop.** A variable declared in a for header is in scope only inside that loop, so using j after the inner loop's closing brace does not compile.
      `
    },
    {
      id: 'csaloops2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
for (int i = 0; i < 2; i++) {
    for (int j = 3; j > 0; j--) {
        System.out.print(i + j + " ");
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '3 2 1 4 3 2',
              '03 02 01 13 12 11',
              '3 2 1 3 2 1',
              '3 4 2 3 1 2'
            ],
            correctAnswer: 0,
            explanation: 'For i = 0 the inner loop prints 0 + 3, 0 + 2 and 0 + 1, and for i = 1 it starts over at j = 3 and prints 4, 3 and 2. The + between two ints adds before the " " turns the result into text, so no digits are glued together.'
          },
          {
            question: 'In Segment A, how many times is the statement int j = 3 executed?',
            options: [
              '1',
              '2',
              '3',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'The inner initialization runs once at the start of each outer pass, and the outer loop makes 2 passes. The value 6 is the number of inner body executions, not initializations.'
          },
          {
            question: 'Which statement about the variable j in Segment A is true?',
            options: [
              'It is created again with the value 3 on every outer pass',
              'It keeps its last value from the previous outer pass',
              'It can be printed after the outer loop ends',
              'It counts up from 3 on the second outer pass'
            ],
            correctAnswer: 0,
            explanation: 'A variable declared in a for header is re-created and re-initialized every time that loop starts. It goes out of scope when the inner loop ends, so it cannot be used after the loops.'
          }
        ]
      }
    },
    {
      id: 'csaloops2-dependent',
      type: 'text' as const,
      content: `
## When the Inner Bound Depends on the Outer Variable

When the inner header mentions i, each outer pass gets a different number of inner passes. Every pattern below uses the same frame and changes only the inner header.

\`\`\`java
for (int i = 1; i <= 4; i++) {
    for ( /* inner header */ ) {
        System.out.print(j);
    }
    System.out.println();
}
\`\`\`

| Inner header | Row for i = 1 | i = 2 | i = 3 | i = 4 | Shape |
|---|---|---|---|---|---|
| \`int j = 1; j <= i; j++\` | \`1\` | \`12\` | \`123\` | \`1234\` | grows |
| \`int j = 1; j < i; j++\` | (blank line) | \`1\` | \`12\` | \`123\` | grows, first row empty |
| \`int j = i; j <= 4; j++\` | \`1234\` | \`234\` | \`34\` | \`4\` | shrinks from the left |
| \`int j = i; j >= 1; j--\` | \`1\` | \`21\` | \`321\` | \`4321\` | grows, counting down |
| \`int j = 1; j <= 4 - i; j++\` | \`123\` | \`12\` | \`1\` | (blank line) | shrinks, last row empty |

If the frame prints \`i\` instead of \`j\`, the first header produces \`1\`, \`22\`, \`333\`, \`4444\`: the inner loop decides **how many** values a row has, and the print statement decides **which** value appears.

### How to Read a Dependent Header Quickly

1. For one value of i, write the **first** j and the **last** j that pass the test.
2. For a step of 1, the row has last - first + 1 values. If the first value already fails the test, the row is empty but \`println\` still ends the line.
3. Check the first row and the last row before anything else. Together they usually eliminate three answer choices.

> 🎯 **AP Connection:** Multiple-choice questions often show four similar triangles and ask which header produces one of them. A \`<\` where \`<=\` belongs costs one value per row and leaves a blank first or last line, which is exactly the difference between two of the choices.
      `
    },
    {
      id: 'csaloops2-headers',
      type: 'dropdown-select' as const,
      content: `
**Match the Header** 🔍

Use the frame above (outer loop i = 1 to 4, inner loop prints one value, \`println\` after the inner loop).
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To print 1 / 12 / 123 / 1234 (one row per line), the inner header should be ___',
            options: ['int j = 1; j <= i; j++', 'int j = 1; j < i; j++', 'int j = i; j <= 4; j++', 'int j = i; j >= 1; j--']
          },
          {
            label: 'To print 4321 / 432 / 43 / 4, the inner header should be ___',
            options: ['int j = 4; j >= i; j--', 'int j = i; j >= 1; j--', 'int j = 4; j > i; j--', 'int j = i; j <= 4; j++']
          },
          {
            label: 'With the header int j = 1; j <= i; j++, the rows 1 / 22 / 333 / 4444 appear when the print statement prints ___',
            options: ['i', 'j', 'i + j', 'j - i']
          }
        ],
        correctAnswers: ['int j = 1; j <= i; j++', 'int j = 4; j >= i; j--', 'i'],
        hint1: 'The first row has one value and each row adds one more.',
        hint2: 'Every row starts at 4 and counts down, and the last row is just 4.',
        hint3: 'Each row repeats one digit, and that digit is the row number.',
        explanation: 'Rows that grow from 1 need j to run from 1 up to i. Rows that start at 4 and stop at i need j to count down from 4 while j >= i; using j > i would drop the i itself. Repeating the row number means printing i, the value that stays fixed during the inner loop.'
      }
    },
    {
      id: 'csaloops2-placement',
      type: 'text' as const,
      content: `
## Where the println Goes

A statement runs as many times as the loop it sits in. The same loops give three different outputs depending on where one \`System.out.println();\` is placed.

\`\`\`java
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.print(j);
        // Placement A: System.out.println(); here
    }
    // Placement B: System.out.println(); here
}
// Placement C: System.out.println(); here
\`\`\`

| Placement | Where | How many times println runs | Output |
|---|---|---|---|
| A | inside the inner loop | 3 x 3 = 9 | every digit on its own line (9 lines) |
| B | after the inner loop, inside the outer loop | 3 | \`123\` on three lines |
| C | after the outer loop | 1 | \`123123123\` on one line |

Placement B is the usual "grid" layout: the inner loop builds one row, and the println ends that row before the outer loop starts the next one.

## Worked Example: A Countdown Times Table

\`\`\`java
for (int i = 3; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        System.out.print(i * j + " ");
    }
    System.out.println();
}
\`\`\`

**Step 1 — Outer values.** i takes the values 3, 2, 1. Then i becomes 0, and \`0 >= 1\` is false.

**Step 2 — Inner values for each i.** The inner loop runs j from 1 up to the current i.

| i | j values | i * j | Row printed |
|---|---|---|---|
| 3 | 1, 2, 3 | 3, 6, 9 | \`3 6 9 \` |
| 2 | 1, 2 | 2, 4 | \`2 4 \` |
| 1 | 1 | 1 | \`1 \` |

**Step 3 — Output.**
\`\`\`
3 6 9
2 4
1
\`\`\`

**Step 4 — Check the expression.** \`i * j + " "\` multiplies first, because * has higher precedence than +, and then joins the space. Writing \`i + j + " "\` would add instead, and writing \`"" + i + j\` would glue the two digits together as text.
      `
    },
    {
      id: 'csaloops2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
int total = 0;
for (int i = 1; i <= 3; i++) {
    for (int j = i; j <= 3; j++) {
        total += j;
    }
}
System.out.println(total);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?',
            options: [
              '14',
              '18',
              '6',
              '10'
            ],
            correctAnswer: 0,
            explanation: 'For i = 1 the inner loop adds 1 + 2 + 3 = 6, for i = 2 it adds 2 + 3 = 5, and for i = 3 it adds 3, for a total of 14. The value 18 would need j to restart at 1 on every pass.'
          },
          {
            question: 'Which single change makes the segment print 18?',
            options: [
              'Start the inner loop at j = 1',
              'Start the inner loop at j = i + 1',
              'Start the inner loop at j = i - 1',
              'Change the outer test to i <= 4'
            ],
            correctAnswer: 0,
            explanation: 'Starting j at 1 makes every outer pass add 1 + 2 + 3, and three passes give 18. Starting at i + 1 gives 8, starting at i - 1 gives 17, and an extra outer pass with i = 4 adds nothing, so the total stays 14.'
          }
        ]
      }
    }
  ]
}
