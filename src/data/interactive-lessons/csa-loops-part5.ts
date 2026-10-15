export const csaLoopsPart5Data = {
  topicSlug: 'csa-loops',
  sections: [
    {
      id: 'csaloops5-intro',
      type: 'text' as const,
      content: `
# 🔄 Loops (Advanced)

**Part 5 of 7 — Comparing Algorithms and Nested-Loop Pitfalls**

---

Two segments can produce the same result and still do very different amounts of work. CED Topic 2.12 asks you to compare iterative code by its statement execution counts, and CED Topic 2.11 questions often hide a nested-loop bug in one answer choice. This part covers both.

| In this part |
|---|
| Same answer, different counts |
| Stopping early with return |
| A catalogue of nested-loop bugs |
      `
    },
    {
      id: 'csaloops5-compare',
      type: 'text' as const,
      content: `
## Same Answer, Different Counts

Both segments count the pairs (a, b) of positive integers with a < b and a + b == n.

**Version A** checks every combination.
\`\`\`java
int count = 0;
for (int a = 1; a <= n; a++) {
    for (int b = 1; b <= n; b++) {
        if (a < b && a + b == n) {
            count++;
        }
    }
}
\`\`\`

**Version B** computes the partner directly.
\`\`\`java
int count = 0;
for (int a = 1; a <= n; a++) {
    int b = n - a;
    if (a < b) {
        count++;
    }
}
\`\`\`

| n | count (both versions) | Version A: if checked | Version B: if checked |
|---|---|---|---|
| 10 | 4 | 10 * 10 = 100 | 10 |
| 20 | 9 | 400 | 20 |
| 100 | 49 | 10,000 | 100 |

Version A's if statement executes n * n times; Version B's executes n times. When n doubles, A's count becomes four times as large while B's only doubles. Both produce the correct answer, but for large n Version B does far less work.

### A Second Comparison

**Segment I**
\`\`\`java
int total = 0;
for (int i = 1; i <= n; i++) {
    total += i;
}
\`\`\`

**Segment II**
\`\`\`java
int total = 0;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        total++;
    }
}
\`\`\`

Both end with total equal to 1 + 2 + ... + n. Segment I executes \`total += i\` n times, and Segment II executes \`total++\` 1 + 2 + ... + n = n(n + 1) / 2 times.
      `
    },
    {
      id: 'csaloops5-early',
      type: 'text' as const,
      content: `
## Stopping Early with return

The \`hasRepeat\` method from Part 3 returns as soon as it finds a matching pair. Compare it with a version that records the answer in a flag and keeps looking.

\`\`\`java
// Version 1: returns at the first match
public static boolean hasRepeat(String w) {
    for (int i = 0; i < w.length(); i++) {
        for (int j = i + 1; j < w.length(); j++) {
            if (w.substring(i, i + 1).equals(w.substring(j, j + 1))) {
                return true;
            }
        }
    }
    return false;
}

// Version 2: checks every pair, then answers
public static boolean hasRepeatFlag(String w) {
    boolean found = false;
    for (int i = 0; i < w.length(); i++) {
        for (int j = i + 1; j < w.length(); j++) {
            if (w.substring(i, i + 1).equals(w.substring(j, j + 1))) {
                found = true;
            }
        }
    }
    return found;
}
\`\`\`

Number of \`equals\` calls:

| w | Result | Version 1 | Version 2 |
|---|---|---|---|
| \`"aab"\` | true | 1 | 3 |
| \`"abcdea"\` | true | 5 | 15 |
| \`"abcdef"\` | false | 15 | 15 |

Version 2 always checks all 6 * 5 / 2 = 15 pairs of a six-letter word. Version 1 saves work only when a match turns up early; when there is no repeat, it checks every pair too.

> 🔑 **Key Concept:** An execution count can depend on the **input**, not just on n. When an exam question asks for a count, check whether a return can end the loops before the bounds do.
      `
    },
    {
      id: 'csaloops5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use Segments I and II and Versions 1 and 2 above.
      `,
      exercise: {
        questions: [
          {
            question: 'For n = 10, how many times do total += i in Segment I and total++ in Segment II execute?',
            options: [
              '10 and 55',
              '10 and 100',
              '55 and 110',
              '100 and 55'
            ],
            correctAnswer: 0,
            explanation: 'Segment I runs its body once for each i from 1 to 10. Segment II runs its inner statement 1 + 2 + ... + 10 = 55 times, because the inner loop stops at i rather than at 10.'
          },
          {
            question: 'Which is true of Segments I and II for every n greater than 1?',
            options: [
              'The totals match, and II executes more statements',
              'The totals match, and I runs its loop body more often',
              'The totals differ, and II ends with the larger one',
              'The totals differ, and I ends with a larger sum'
            ],
            correctAnswer: 0,
            explanation: 'Both finish with 1 + 2 + ... + n. Segment I does it in n passes, while Segment II needs n(n + 1) / 2 inner passes, which is more than n whenever n is greater than 1.'
          },
          {
            question: 'Version 1 and Version 2 are each called with "abcdef". Which is true?',
            options: [
              'They make the same number of comparisons',
              'Version 1 makes fewer comparisons than Version 2',
              'Version 2 makes fewer comparisons than Version 1',
              'Version 1 returns a different result than Version 2'
            ],
            correctAnswer: 0,
            explanation: 'No letter repeats, so Version 1 never reaches its early return and checks all 15 pairs, exactly like Version 2. Both return false.'
          }
        ]
      }
    },
    {
      id: 'csaloops5-pitfalls',
      type: 'text' as const,
      content: `
## A Catalogue of Nested-Loop Bugs

### 1. The inner counter is never reset

\`\`\`java
int j = 0;
for (int i = 0; i < 3; i++) {
    while (j < 4) {
        System.out.print("*");
        j++;
    }
    System.out.println();
}
\`\`\`

The intent is three rows of four stars. The first pass prints \`****\`, but j is still 4 when the second pass begins, so the while loop runs zero times and the last two lines are blank. Declaring \`int j = 0;\` inside the outer loop fixes it. The same bug happens with a String accumulator such as \`row\` declared above the outer loop: each line then repeats everything printed before it.

### 2. The wrong variable is updated

\`\`\`java
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; i++) {   // i++ instead of j++
        System.out.print("*");
    }
}
\`\`\`

j never changes, so \`j < 4\` stays true forever: an infinite loop.

### 3. The outer variable is reused

Writing \`for (int i = 0; i < 2; i++)\` inside a loop that already declared \`int i\` **does not compile**, because i is already defined in that scope. If i is declared once above both loops and both headers assign to it, the code compiles, but the inner loop resets i on every pass. With an outer test of \`i < 5\` and an inner test of \`i < 2\`, i bounces between 0 and 3 forever.

### 4. The println is in the wrong loop

Inside the inner loop it ends every value's line; after the outer loop it runs only once (Part 2).

### 5. Off by one in a dependent bound

With \`j < i\` where \`j <= i\` was intended, every row is one value short and the first row is empty.

| Bug | Symptom |
|---|---|
| counter or accumulator declared before the outer loop | only the first row is right, or rows pile up |
| inner header updates the outer variable | infinite loop |
| inner header redeclares the outer variable | compile-time error |
| println inside the inner loop | one value per line |
| \`<\` instead of \`<=\` in a dependent bound | rows one short, first row blank |
      `
    },
    {
      id: 'csaloops5-diagnose',
      type: 'dropdown-select' as const,
      content: `
**Diagnose the Bug** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A grid program prints its first row correctly, and every later row is blank. The most likely cause is that ___',
            options: ['the inner counter is declared before the outer loop', 'the println is inside the inner loop', 'the inner test uses j <= 4 instead of j < 4', 'the outer loop counts down instead of up']
          },
          {
            label: 'The inner header is for (int j = 0; j < 4; i++). When the code runs, ___',
            options: ['the inner loop never ends', 'the outer loop never ends', 'the inner loop runs zero times', 'the code throws an exception']
          },
          {
            label: 'Inside a loop on int i, a student writes for (int i = 0; i < 2; i++). The result is ___',
            options: ['a compile-time error', 'an infinite loop', 'a run-time exception', 'a correct nested loop']
          }
        ],
        correctAnswers: ['the inner counter is declared before the outer loop', 'the inner loop never ends', 'a compile-time error'],
        hint1: 'After the first row, what value does the inner counter have when the next row starts?',
        hint2: 'Which variable appears in the condition, and which one changes?',
        hint3: 'A variable cannot be declared twice in the same scope.',
        explanation: 'A counter declared outside the outer loop is never reset, so later rows skip the inner loop. Updating i in the inner header leaves j at 0 forever. Declaring i a second time inside its own scope is rejected by the compiler.'
      }
    },
    {
      id: 'csaloops5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

The segment is meant to print \`1\`, \`12\` and \`123\` on three lines.

\`\`\`java
String row = "";
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        row += j;
    }
    System.out.println(row);
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the last line the segment actually prints?',
            options: [
              '112123',
              '123',
              '112',
              '12123'
            ],
            correctAnswer: 0,
            explanation: 'row is never reset, so it grows from "1" to "112" to "112123". Each println shows everything appended so far.'
          },
          {
            question: 'Which change makes the segment print 1, 12 and 123?',
            options: [
              'Move String row = ""; inside the outer loop',
              'Move println(row) into the inner loop',
              'Change the inner test to j < i',
              'Change row += j; to row += i;'
            ],
            correctAnswer: 0,
            explanation: 'Declaring row as the first statement of the outer loop gives every line a fresh empty String. Printing inside the inner loop shows partial rows, j < i drops a value from each row, and appending i repeats the row number.'
          }
        ]
      }
    }
  ]
}
