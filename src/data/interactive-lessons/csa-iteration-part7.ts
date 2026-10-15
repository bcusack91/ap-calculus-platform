export const csaIterationPart7Data = {
  topicSlug: 'csa-iteration',
  sections: [
    {
      id: 'csaitera7-intro',
      type: 'text' as const,
      content: `
# 🔁 Iteration

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: how \`while\` and \`for\` loops execute, how to count their passes, and how the standard algorithms of CED Topic 2.9 are assembled from them. Use the tables as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| while execution (Part 2) | condition checked before every pass; the body may run 0 times | expecting the loop to stop in the middle of the body |
| Condition-controlled loops (Part 2) | list the values until the test fails | assuming "end minus start" passes |
| Infinite loops (Part 2) | each update must move toward ending the loop | \`!=\` stepping over the target; \`;\` after the header |
| return in a loop (Part 2) | leaves the whole method at once | returning in both branches of an \`if\` |
| for execution order (Part 3) | initialize once, then check, body, update | thinking the update runs before the first pass |
| Pass counts (Part 3) | (last - first) / step + 1 | \`<\` vs. \`<=\` at the boundary |
| Scope (Part 3) | a header variable does not exist after the loop | printing \`i\` after a \`for\` loop |
| Sum, product, average (Part 4) | start at 0 (1 for products); cast before dividing | int division in the average |
| Frequency and divisibility (Part 4) | \`count++\` inside the \`if\`; \`a % b == 0\` | \`count++\` placed outside the \`if\` counts every value |
| Early-return search (Part 4) | return false inside, true after the loop | \`else return true\` inside the loop |
| Digits (Part 5) | \`% 10\` gets the last digit; \`/ 10\` removes it | 0 has one digit, but the loop runs 0 times |
| Min and max (Part 5) | start at the first value or an extreme constant | starting at 0 |

> 🔑 **Key Concept:** Every loop question reduces to three skills: find where the loop starts and stops, trace one row per check, and know which standard algorithm the loop is implementing.
      `
    },
    {
      id: 'csaitera7-checklist',
      type: 'text' as const,
      content: `
## A Tracing Checklist

1. **Find the loop variable**: its first value, its stop test, and its update.
2. **Count or list** the values it takes. Use the formula for constant steps and a list for multiplying or dividing steps.
3. **Build a trace table**: one row per check, one column per changing variable.
4. **Watch the order** inside the body: is the variable updated before or after it is used?
5. **Stop at the first false check** or at a \`return\`, and read off the final values.
6. **Read the output statements**: inside the loop or after it?

### Worked Example: Selection Inside Iteration

\`\`\`java
int n = 6;
int steps = 0;
while (n != 1) {
    if (n % 2 == 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
    steps++;
}
System.out.println(steps);
\`\`\`

| Check | \`n\` at the check | Even? | \`n\` after | \`steps\` after |
|---|---|---|---|---|
| 1 | 6 | yes | 3 | 1 |
| 2 | 3 | no | 10 | 2 |
| 3 | 10 | yes | 5 | 3 |
| 4 | 5 | no | 16 | 4 |
| 5 | 16 | yes | 8 | 5 |
| 6 | 8 | yes | 4 | 6 |
| 7 | 4 | yes | 2 | 7 |
| 8 | 2 | yes | 1 | 8 |
| 9 | 1, fails | | | |

The program prints \`8\`. The \`if\` chooses an update on each pass, so \`n\` rises and falls, but the loop still ends at the first check where \`n\` is 1. A condition-controlled loop like this has no count formula: the trace is the only way to find the answer.
      `
    },
    {
      id: 'csaitera7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

**Segment A**
\`\`\`java
int count = 0;
for (int i = 20; i >= 1; i -= 3) {
    if (i % 4 == 0) {
        count++;
    }
}
System.out.println(count);
\`\`\`

**Segment B**
\`\`\`java
int sum = 0;
int c = 0;
for (int k = 1; k <= 10; k++) {
    if (k % 3 == 0) {
        sum += k;
        c++;
    }
}
double avg = sum / c;
System.out.println(avg);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '2',
              '3',
              '7',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'i takes the values 20, 17, 14, 11, 8, 5 and 2. Only 20 and 8 are multiples of 4, so count is 2.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '6.0',
              '6',
              '6.5',
              '18.0'
            ],
            correctAnswer: 0,
            explanation: 'The multiples of 3 are 3, 6 and 9, so sum is 18 and c is 3. The int division 18 / 3 is 6, which is stored in a double and printed as 6.0.'
          }
        ]
      }
    },
    {
      id: 'csaitera7-errors',
      type: 'text' as const,
      content: `
## Error Catalogue

| Symptom | Likely cause | Fix |
|---|---|---|
| The program hangs | infinite loop: no update, the wrong variable updated, or \`!=\` stepping past the target | move the tested variable toward the stop value; prefer \`<\` or \`>\` |
| Compile error: the loop variable cannot be found | the loop variable was used after a \`for\` loop | declare it before the loop |
| A sum equals the last value only | the accumulator is reset inside the loop | initialize once, before the loop |
| An average ends in .0 when it should not | int division | \`(double) sum / count\` |
| A count is one too high or too low | \`<\` and \`<=\` swapped, or a wrong starting value | check the first and last values the body sees |
| A maximum of 0 among negative values | max started at 0 | start at the first value or \`Integer.MIN_VALUE\` |
| Every value is counted | \`count++\` outside the \`if\` | move it inside |
| A method answers after one check | \`return\` in both branches inside the loop | return the "every value passed" answer after the loop |
| countDigits(0) returns 0 | the loop condition \`n > 0\` is false at once | handle \`n == 0\` before the loop |

> 🎯 **AP Connection:** If a trace seems to go on forever, look for "nothing is printed because the loop never ends" among the answer choices before assuming you made a mistake.
      `
    },
    {
      id: 'csaitera7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Passes made by for (int i = 0; i <= 12; i += 4): ___',
            options: ['4', '3', '5', '12']
          },
          {
            label: 'sumDigits(505) returns ___',
            options: ['10', '505', '55', '0']
          },
          {
            label: 'countDigits(1000) returns ___',
            options: ['4', '1', '3', '0']
          },
          {
            label: 'Passes made by for (int i = 64; i > 1; i /= 4): ___',
            options: ['3', '4', '16', '2']
          }
        ],
        correctAnswers: ['4', '10', '4', '3'],
        hint1: 'List the values: 0, 4, 8, 12.',
        hint2: 'Add 5, 0 and 5.',
        hint3: 'Zeros are digits too; the loop runs until n is 0.',
        hint4: 'The values are 64, 16 and 4; the next is 1.',
        explanation: 'The first loop visits 0, 4, 8 and 12. The digits of 505 sum to 10. 1000 has four digits because the loop runs until n is 0. The last loop visits 64, 16 and 4, then 1 fails i > 1.'
      }
    },
    {
      id: 'csaitera7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of s after int s = 0; for (int k = 1; k <= 7; k += 2) { s += k * k; } runs?',
            options: [
              '84',
              '140',
              '35',
              '83'
            ],
            correctAnswer: 0,
            explanation: 'k takes the values 1, 3, 5 and 7, so s is 1 + 9 + 25 + 49 = 84. Adding every square from 1 to 7 would give 140.'
          },
          {
            question: 'Which loop is the best fit for repeating an action until a randomly generated value is at least 0.9?',
            options: [
              'A while loop',
              'A for loop that counts to 10',
              'A for loop that counts to 100',
              'A while loop that counts to 50'
            ],
            correctAnswer: 0,
            explanation: 'The number of passes is not known in advance and is decided by a condition, so a condition-controlled while loop that tests the random value fits. Any loop that counts to a fixed number could stop too early or run too long.'
          },
          {
            question: 'Which loop header makes the body run exactly 10 times?',
            options: [
              'for (int i = 20; i >= 11; i--)',
              'for (int i = 1; i < 10; i++)',
              'for (int i = 0; i <= 10; i++)',
              'for (int i = 10; i > 1; i--)'
            ],
            correctAnswer: 0,
            explanation: 'Counting down from 20 to 11 inclusive gives 20 - 11 + 1 = 10 passes. The other headers run 9, 11 and 9 times because of where they start and whether the boundary is included.'
          },
          {
            question: 'A method must return true if every value of f(x) for x from 1 to n is positive. Where should the statement return true; go?',
            options: [
              'After the loop ends',
              'In an else branch in the loop',
              'As the first line of the loop body',
              'Before the loop begins'
            ],
            correctAnswer: 0,
            explanation: 'True can be claimed only after every value has been checked, so it goes after the loop, with return false inside the loop for the first non-positive value. Any earlier return true answers after seeing at most one value.'
          }
        ]
      }
    }
  ]
}
