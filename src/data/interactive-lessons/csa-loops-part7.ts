export const csaLoopsPart7Data = {
  topicSlug: 'csa-loops',
  sections: [
    {
      id: 'csaloops7-intro',
      type: 'text' as const,
      content: `
# 🔄 Loops (Advanced)

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: how nested loops run (CED Topic 2.11), the algorithms built from them, and how to count statement executions (CED Topic 2.12). Use the tables as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| Restart rule (Part 2) | the inner loop re-initializes and runs to completion on every outer pass | thinking j keeps its value from the last pass |
| Dependent bounds (Part 2) | a header such as \`j <= i\` gives rows of different lengths | \`<\` vs \`<=\` leaves a blank first or last row |
| println placement (Part 2) | a statement runs as often as the loop it sits in | a println inside the inner loop |
| Pairs (Part 3) | start the inner loop at \`a + 1\` for unordered pairs of different values | starting at a or 1 double-counts or self-pairs |
| Tables and primes (Part 3) | reset the row String or divisor count inside the outer loop | declaring it above the outer loop |
| Letter pairs (Part 3) | compare \`substring(i, i + 1)\` with \`substring(j, j + 1)\` using equals | using == on Strings |
| Single-loop counts (Part 4) | list the values; condition checks = passes + 1 | counting \`<=\` as \`<\` |
| Nested counts (Part 4) | constant bounds multiply; dependent bounds add row by row | multiplying when the rows differ |
| Comparing segments (Part 5) | same result, different counts; an early return can save work | assuming an early return always helps |
      `
    },
    {
      id: 'csaloops7-worked',
      type: 'text' as const,
      content: `
## Worked Example: Putting It Together

\`\`\`java
String word = "seesaw";
int pairs = 0;
for (int i = 0; i < word.length(); i++) {
    for (int j = i + 1; j < word.length(); j++) {
        if (word.substring(i, i + 1).equals(word.substring(j, j + 1))) {
            pairs++;
        }
    }
}
int total = word.length() * (word.length() - 1) / 2;
System.out.println(pairs + " of " + total);
\`\`\`

**Step 1 — Index the word.** s(0) e(1) e(2) s(3) a(4) w(5), length 6.

**Step 2 — Trace by outer pass.**

| i | Letter | j values | Comparisons | Matches |
|---|---|---|---|---|
| 0 | s | 1 to 5 | 5 | j = 3 ("s") |
| 1 | e | 2 to 5 | 4 | j = 2 ("e") |
| 2 | e | 3 to 5 | 3 | none |
| 3 | s | 4, 5 | 2 | none |
| 4 | a | 5 | 1 | none |
| 5 | w | none | 0 | none |

**Step 3 — Count.** pairs is 2, and the equals call runs 5 + 4 + 3 + 2 + 1 + 0 = 15 times, which matches \`total\` = 6 * 5 / 2 = 15.

**Step 4 — Output.** \`2 of 15\`. The \`+\` operators join left to right, and the int division in \`total\` is exact because 6 * 5 is even.
      `
    },
    {
      id: 'csaloops7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

**Segment A**
\`\`\`java
for (int i = 1; i <= 3; i++) {
    String line = "";
    for (int j = 3; j >= i; j--) {
        line += j;
    }
    System.out.print(line + " ");
}
\`\`\`

**Segment B**
\`\`\`java
int c = 0;
for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 10; j += 2) {
        c++;
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '321 32 3',
              '123 23 3',
              '3 32 321',
              '321 21 1'
            ],
            correctAnswer: 0,
            explanation: 'For each i the inner loop counts down from 3 and stops after j = i, so the lines are "321", "32" and "3". The outer variable sets where each row ends, not where it starts.'
          },
          {
            question: 'Segment A is changed so that String line = ""; appears once, before the outer loop. What is printed now?',
            options: [
              '321 32132 321323',
              '321 32 3',
              '321 321 321',
              '3 32 321'
            ],
            correctAnswer: 0,
            explanation: 'line is no longer reset, so each pass appends to what is already there: "321", then "321" + "32", then that plus "3". Each print shows the whole accumulated String.'
          },
          {
            question: 'What is the value of c after Segment B runs?',
            options: [
              '50',
              '100',
              '55',
              '45'
            ],
            correctAnswer: 0,
            explanation: 'The inner loop runs for j = 0, 2, 4, 6 and 8, which is 5 passes, on each of 10 outer passes. Constant bounds multiply, so c is 10 * 5 = 50.'
          }
        ]
      }
    },
    {
      id: 'csaloops7-reference',
      type: 'text' as const,
      content: `
## Counting Reference

| Loop shape | Inner statement executes |
|---|---|
| outer n passes, inner m passes (constant) | n * m |
| both loops 0 to n - 1, independent | n * n |
| inner \`j < i\`, outer i = 0 to n - 1 | 0 + 1 + ... + (n - 1) = n(n - 1) / 2 |
| inner \`j <= i\` or \`j = i; j < n\` | n(n + 1) / 2 |
| inner \`j = i + 1; j < n\` (each pair once) | n(n - 1) / 2 |
| doubling or halving loop | list the values until the test fails |
| any loop condition | checked once more than the body runs |

## Error Catalogue

| Symptom | Likely cause | Fix |
|---|---|---|
| later rows blank or rows pile up | counter or accumulator declared above the outer loop | declare it inside the outer loop |
| program never stops | inner header updates the wrong variable | update the inner variable |
| does not compile | inner header redeclares the outer variable | use a new name such as j |
| every value on its own line | println inside the inner loop | move it after the inner loop |
| a pair counted twice or matched with itself | inner loop starts at 0 or at i | start at i + 1 |
| StringIndexOutOfBoundsException | a substring index reaches past the end | keep \`i < length()\` when calling \`substring(i, i + 1)\` |

> 🎯 **AP Connection:** When a count question offers both n * n and n(n - 1) / 2, look at where the inner loop starts. Constant bounds give the product; a start that moves with the outer variable gives a sum.
      `
    },
    {
      id: 'csaloops7-quick',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The outer loop runs 7 times and the inner loop runs 4 times on every pass, so the inner statement executes ___ times',
            options: ['28', '11', '32', '35']
          },
          {
            label: 'For outer i = 1 to 5 and inner j = 1 to i, the inner statement executes ___ times',
            options: ['15', '10', '25', '20']
          },
          {
            label: 'To visit each unordered pair of different positions once, the inner loop starts at ___',
            options: ['j = i + 1', 'j = 0', 'j = i', 'j = i - 1']
          }
        ],
        correctAnswers: ['28', '15', 'j = i + 1'],
        hint1: 'Constant bounds multiply.',
        hint2: 'Add 1 + 2 + 3 + 4 + 5.',
        hint3: 'The inner position must always be greater than the outer one.',
        explanation: 'Constant bounds give 7 * 4 = 28. A dependent bound gives 1 + 2 + 3 + 4 + 5 = 15. Starting at i + 1 keeps j > i, so each pair of different positions appears exactly once.'
      }
    },
    {
      id: 'csaloops7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Segment X has one loop whose body runs n times. Segment Y has nested loops whose inner statement runs n * n times. For n = 50, how many more times does Y execute its inner statement than X executes its body?',
            options: [
              '2,450',
              '2,500',
              '100',
              '50'
            ],
            correctAnswer: 0,
            explanation: 'Y executes its inner statement 50 * 50 = 2,500 times and X executes its body 50 times, a difference of 2,450. The value 2,500 is Y alone.'
          },
          {
            question: 'A nested loop builds and prints one row per outer pass, but its String accumulator is declared before the outer loop instead of inside it. What happens?',
            options: [
              'Each row also holds the earlier rows',
              'Every row after the first one is printed empty',
              'The segment no longer compiles without errors',
              'Only the first row is printed by the segment'
            ],
            correctAnswer: 0,
            explanation: 'The accumulator is never reset, so each printed line contains everything appended on the earlier passes too. It still compiles, and every row is printed.'
          },
          {
            question: 'Which change can reduce the number of comparisons a search for a repeated letter makes?',
            options: [
              'Returning true as soon as the first match is found',
              'Starting the inner loop at j = 0 instead',
              'Storing the result in a boolean flag variable',
              'Printing each comparison as it is made'
            ],
            correctAnswer: 0,
            explanation: 'An early return ends both loops at the first match, so later pairs are never checked. A flag still checks every pair, and starting at 0 adds comparisons and wrongly matches each letter with itself.'
          }
        ]
      }
    }
  ]
}
