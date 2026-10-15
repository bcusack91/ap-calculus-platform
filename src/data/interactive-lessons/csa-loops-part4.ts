export const csaLoopsPart4Data = {
  topicSlug: 'csa-loops',
  sections: [
    {
      id: 'csaloops4-intro',
      type: 'text' as const,
      content: `
# 🔄 Loops (Advanced)

**Part 4 of 7 — Informal Run-Time Analysis: Counting Statement Executions**

---

How much work does a segment of code do? CED Topic 2.12 answers that question with a **statement execution count**: the number of times a particular statement is executed when the program runs. You find the count informally, by tracing the loop or by reasoning about its header, and the answer is either a number or an expression in a variable such as n.

| In this part |
|---|
| Counting the passes of a single loop |
| Condition checks vs. body executions |
| Nested loops with constant bounds: multiply |
| Nested loops with dependent bounds: add up the rows |
| Loops that double or halve: list the values |

> 🎯 **AP Connection:** Exam questions phrase this as "How many times is the statement executed?" or "How many times is the string printed?" Count exactly. An answer that is off by one is a wrong answer.
      `
    },
    {
      id: 'csaloops4-single',
      type: 'text' as const,
      content: `
## Counting a Single Loop

**Method:** list the values the loop variable has each time the body runs, then count them. For a step of 1, a shortcut works: an exclusive upper bound gives \`end - start\` passes, and an inclusive one gives \`end - start + 1\`.

| Header | Values when the body runs | Body executions |
|---|---|---|
| \`for (int i = 0; i < 10; i++)\` | 0, 1, ..., 9 | 10 |
| \`for (int i = 1; i <= 10; i++)\` | 1, 2, ..., 10 | 10 |
| \`for (int i = 5; i < 12; i++)\` | 5, 6, ..., 11 | 12 - 5 = 7 |
| \`for (int i = 5; i <= 12; i++)\` | 5, 6, ..., 12 | 12 - 5 + 1 = 8 |
| \`for (int i = 0; i < 10; i += 3)\` | 0, 3, 6, 9 | 4 |
| \`for (int i = 20; i > 0; i -= 5)\` | 20, 15, 10, 5 | 4 |
| \`for (int i = 0; i < n; i++)\` | 0, 1, ..., n - 1 | n |
| \`for (int i = 1; i <= n; i++)\` | 1, 2, ..., n | n |

## Condition Checks vs. Body Executions

Different parts of a loop run different numbers of times. For a for loop whose body runs k times:

| Part of the loop | Executions | Example: \`for (int i = 0; i < 3; i++) { sum += i; }\` |
|---|---|---|
| initialization \`int i = 0\` | 1 | 1 |
| condition \`i < 3\` | k + 1 | 4 (true for 0, 1, 2; false for 3) |
| body \`sum += i\` | k | 3 |
| update \`i++\` | k | 3 |

The extra condition check is the one that comes out **false** and ends the loop. A while loop follows the same rule: its condition is checked once more than its body runs.
      `
    },
    {
      id: 'csaloops4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many times does the body of for (int k = 3; k <= 30; k += 3) execute?',
            options: [
              '10',
              '9',
              '11',
              '27'
            ],
            correctAnswer: 0,
            explanation: 'The body runs for k = 3, 6, 9, ..., 30, which is the 10 multiples of 3 from 3 to 30. The value 27 is the difference 30 - 3, not a count of passes.'
          },
          {
            question: 'In the loop for (int k = 0; k < 12; k += 4), how many times is the condition k < 12 evaluated?',
            options: [
              '4',
              '3',
              '12',
              '13'
            ],
            correctAnswer: 0,
            explanation: 'The body runs for k = 0, 4 and 8, which is 3 passes. The condition is checked once more, when k is 12 and the test is false, for 4 evaluations.'
          },
          {
            question: 'Which statement about for (int i = 0; i < n; i++) is true when n is 0?',
            options: [
              'The body runs 0 times',
              'The loop body runs once before the test fails',
              'The condition is never evaluated',
              'The update i++ runs once before stopping'
            ],
            correctAnswer: 0,
            explanation: 'The condition is checked once, finds 0 < 0 false, and the loop ends before the body or the update ever runs. A for loop tests its condition before every pass, including the first.'
          }
        ]
      }
    },
    {
      id: 'csaloops4-nested',
      type: 'text' as const,
      content: `
## Nested Loops with Constant Bounds: Multiply

\`\`\`java
int sum = 0;
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 3; j++) {
        sum += i * j;     // statement S
    }
}
\`\`\`

| Statement | Executions | Reason |
|---|---|---|
| \`int i = 0\` | 1 | runs once |
| \`i < 5\` | 6 | 5 true + 1 false |
| \`int j = 0\` | 5 | once per outer pass |
| \`j < 3\` | 5 x 4 = 20 | 4 checks per outer pass |
| S: \`sum += i * j\` | 5 x 3 = 15 | 3 passes per outer pass |
| \`j++\` | 15 | once per S |
| \`i++\` | 5 | once per outer pass |

When the outer loop runs n times and the inner loop runs m times on every pass, the inner statement executes **n * m** times. When both loops run n times, the inner statement executes **n * n** times. That count grows quickly: n = 10 gives 100 executions, and doubling n to 20 gives 400, four times as many.

## Nested Loops with Dependent Bounds: Add Up the Rows

When the inner bound uses i, the inner loop runs a different number of times on each outer pass, so multiplying does not work. Count each outer pass separately and add.

\`\`\`java
int count = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < i; j++) {
        count++;     // statement S
    }
}
\`\`\`

For n = 5, S runs 0 times when i = 0, once when i = 1, and so on: 0 + 1 + 2 + 3 + 4 = 10.

| Inner header (outer: \`i = 0\` to \`n - 1\`) | Passes for i = 0, 1, 2, 3, 4 | Total for n = 5 | Total for any n |
|---|---|---|---|
| \`int j = 0; j < i; j++\` | 0, 1, 2, 3, 4 | 10 | 0 + 1 + ... + (n - 1) = n(n - 1) / 2 |
| \`int j = 0; j <= i; j++\` | 1, 2, 3, 4, 5 | 15 | 1 + 2 + ... + n = n(n + 1) / 2 |
| \`int j = i; j < n; j++\` | 5, 4, 3, 2, 1 | 15 | n + (n - 1) + ... + 1 = n(n + 1) / 2 |
| \`int j = i + 1; j < n; j++\` | 4, 3, 2, 1, 0 | 10 | (n - 1) + ... + 0 = n(n - 1) / 2 |

The sum shortcut comes from pairing the ends: in 1 + 2 + 3 + 4 + 5, the pairs 1 + 5 and 2 + 4 each make 6, and with the middle 3 the total is 5 x 6 / 2 = 15. You can always fall back on writing the per-pass counts and adding them.
      `
    },
    {
      id: 'csaloops4-counts',
      type: 'dropdown-select' as const,
      content: `
**Count the Inner Statement** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Outer for (int i = 0; i < 8; i++), inner for (int j = 0; j < 8; j++): the inner statement executes ___ times',
            options: ['64', '16', '56', '72']
          },
          {
            label: 'Outer for (int i = 1; i <= 6; i++), inner for (int j = 1; j <= i; j++): the inner statement executes ___ times',
            options: ['21', '15', '36', '30']
          },
          {
            label: 'Outer for (int i = 0; i < 6; i++), inner for (int j = i + 1; j < 6; j++): the inner statement executes ___ times',
            options: ['15', '21', '30', '36']
          }
        ],
        correctAnswers: ['64', '21', '15'],
        hint1: 'Both loops run 8 times and neither depends on the other.',
        hint2: 'The inner loop runs 1, 2, 3, 4, 5, then 6 times.',
        hint3: 'The inner loop runs 5, 4, 3, 2, 1, then 0 times.',
        explanation: 'Constant bounds multiply: 8 * 8 = 64. The dependent bound j <= i gives 1 + 2 + ... + 6 = 21, and starting j at i + 1 gives 5 + 4 + 3 + 2 + 1 + 0 = 15.'
      }
    },
    {
      id: 'csaloops4-doubling',
      type: 'text' as const,
      content: `
## Worked Example: Loops That Double or Halve

Some loops do not step by a constant. Count them by listing the values.

\`\`\`java
int k = 1;
int steps = 0;
while (k < 100) {
    k *= 2;
    steps++;
}
\`\`\`

**Step 1 — List k at each check.** 1, 2, 4, 8, 16, 32, 64, 128.

**Step 2 — Mark the checks that pass.** The first seven values are less than 100, and 128 fails.

**Step 3 — Count.** The body runs **7** times and the condition is checked **8** times. A loop that added 1 to k instead of doubling it would need 99 passes to reach 100.

**Halving works the same way.** With \`int n = 64; while (n > 1) { n /= 2; }\`, n takes the values 64, 32, 16, 8, 4, 2 while the test passes, so the body runs 6 times. Starting from 100 also gives 6 passes, because int division drops the remainder: 100, 50, 25, 12, 6, 3, and then n becomes 1.

**Inside another loop.** A doubling loop nested in an outer loop multiplies like any constant inner loop:

\`\`\`java
int count = 0;
for (int i = 0; i < 4; i++) {
    for (int k = 1; k < 16; k *= 2) {
        count++;
    }
}
\`\`\`

The inner loop runs for k = 1, 2, 4, 8, which is 4 passes, on each of 4 outer passes, so \`count++\` executes 4 * 4 = 16 times.
      `
    },
    {
      id: 'csaloops4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
int count = 0;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        if (j % i == 0) {
            count++;
        }
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'When n is 6, how many times does count++ execute?',
            options: [
              '14',
              '36',
              '6',
              '21'
            ],
            correctAnswer: 0,
            explanation: 'The condition is true when j is a multiple of i, so i = 1 through 6 contribute 6, 3, 2, 1, 1 and 1 matches, which add to 14. The value 36 counts every evaluation of the condition, not only the true ones.'
          },
          {
            question: 'Which expression gives the number of times the condition j % i == 0 is evaluated for any positive n?',
            options: [
              'n * n',
              'n * (n + 1) / 2',
              'n * n - n',
              'n * (n - 1) / 2'
            ],
            correctAnswer: 0,
            explanation: 'Neither bound depends on the other loop variable, so the inner loop runs n times on each of n outer passes. Only the count of true results depends on the values of i and j.'
          },
          {
            question: 'In the doubling loop from the worked example, the test k < 100 is changed to k < 200. How does the number of body executions change?',
            options: [
              'It increases by one, from 7 to 8',
              'It doubles, from 7 to 14',
              'It stays the same at 7',
              'It increases by 100, to 107'
            ],
            correctAnswer: 0,
            explanation: 'The values that pass are now 1, 2, 4, ..., 128, and 256 fails, so the body runs 8 times. Doubling the limit adds only one more doubling step.'
          }
        ]
      }
    }
  ]
}
