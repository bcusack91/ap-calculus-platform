export const csaLoopsPart6Data = {
  topicSlug: 'csa-loops',
  sections: [
    {
      id: 'csaloops6-intro',
      type: 'text' as const,
      content: `
# 🔄 Loops (Advanced)

**Part 6 of 7 — AP-Style Practice**

---

Nested loops appear in AP multiple-choice questions as output traces and as "how many times" counts, and free-response question 1 (Methods and Control Structures) can ask you to write a method with a loop inside a loop. This part practices both, using only the Java Quick Reference subset.

### How to Attack a Nested-Loop Question

| Step | Do this |
|---|---|
| 1 | Write the outer variable's values first. Check the first and last value against the header. |
| 2 | For each outer value, write the inner variable's first and last value. Watch for bounds that use the outer variable. |
| 3 | Decide where each statement sits: inner body, outer body, or after both loops. |
| 4 | For a count, add the inner passes row by row, or multiply when every row is the same length. |
| 5 | Look for an early return, a variable that is never reset, or an index that runs past the end of a String. |

> 🔑 **Key Concept:** Most wrong answers come from one slip: forgetting that the inner loop restarts, counting a \`<\` bound as \`<=\`, or printing in the wrong loop.
      `
    },
    {
      id: 'csaloops6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing and Counting** 🎯

**Segment A**
\`\`\`java
int count = 0;
for (int i = 0; i < 4; i++) {
    for (int j = i; j < 4; j++) {
        if ((i + j) % 2 == 0) {
            count++;
        }
    }
}
System.out.println(count);
\`\`\`

**Segment B**
\`\`\`java
String a = "tent";
String b = "net";
for (int i = 0; i < a.length(); i++) {
    for (int j = 0; j < b.length(); j++) {
        if (a.substring(i, i + 1).equals(b.substring(j, j + 1))) {
            System.out.print(i + "" + j + " ");
        }
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '6',
              '10',
              '4',
              '8'
            ],
            correctAnswer: 0,
            explanation: 'The inner loop visits the 10 pairs with i <= j. Six of them have an even sum: (0, 0), (0, 2), (1, 1), (1, 3), (2, 2) and (3, 3). The value 10 is the number of times the condition is evaluated.'
          },
          {
            question: 'Which change to Segment A makes the inner loop visit every (i, j) with both values from 0 to 3?',
            options: [
              'Start j at 0',
              'Start j at i + 1',
              'Change j < 4 to j <= 4',
              'Change i < 4 to i <= 4'
            ],
            correctAnswer: 0,
            explanation: 'Starting j at 0 makes every outer pass run j through 0, 1, 2 and 3, for 16 visits. Starting at i + 1 skips pairs, j <= 4 adds out-of-range values, and an outer pass with i = 4 visits nothing new.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '02 11 20 32',
              '20 11 02 23',
              '02 11 20',
              '00 11 22 33'
            ],
            correctAnswer: 0,
            explanation: 'Each letter of "tent" is compared with every letter of "net": "t" at 0 matches position 2, "e" at 1 matches 1, "n" at 2 matches 0, and the second "t" at 3 matches 2. The i + "" makes the two indices print side by side instead of adding.'
          }
        ]
      }
    },
    {
      id: 'csaloops6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Task 1 — countPairsSum

**Prompt.** Write a static method \`countPairsSum\` that returns the number of pairs (a, b) of integers with \`low <= a < b <= high\` and \`a + b == target\`.

| Call | Pairs found | Returns |
|---|---|---|
| \`countPairsSum(1, 6, 7)\` | (1, 6), (2, 5), (3, 4) | 3 |
| \`countPairsSum(1, 10, 10)\` | (1, 9), (2, 8), (3, 7), (4, 6) | 4 |
| \`countPairsSum(3, 5, 8)\` | (3, 5) | 1 |
| \`countPairsSum(5, 5, 10)\` | none: a < b rules out (5, 5) | 0 |

### Plan Before You Write

- The outer loop picks a from low to high, **inclusive**.
- The inner loop picks b from \`a + 1\` to high, so every pair has a < b and is counted once.
- Test the sum, count, and return the count after both loops.

### Solution

\`\`\`java
public static int countPairsSum(int low, int high, int target) {
    int count = 0;
    for (int a = low; a <= high; a++) {
        for (int b = a + 1; b <= high; b++) {
            if (a + b == target) {
                count++;
            }
        }
    }
    return count;
}
\`\`\`

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Outer loop | visits every a from low to high with no value skipped or added |
| Inner loop | starts at a + 1 (or otherwise guarantees a < b) and includes high |
| Test | compares a + b with target using == |
| Result | initializes the count before the loops, increments it, and **returns** it after both loops |
      `
    },
    {
      id: 'csaloops6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About countPairsSum** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student starts the inner loop at b = low instead of b = a + 1. What does countPairsSum(1, 6, 7) return?',
            options: [
              '6',
              '3',
              '7',
              '12'
            ],
            correctAnswer: 0,
            explanation: 'Now every ordered pair is checked, so (1, 6) and (6, 1) are both counted, and the 3 correct pairs are each counted twice. No pair with a == b adds to the odd target 7.'
          },
          {
            question: 'A student writes the inner header as for (int b = a + 1; b < high; b++). Which call still returns the correct value?',
            options: [
              'countPairsSum(1, 10, 10)',
              'countPairsSum(1, 6, 7)',
              'countPairsSum(3, 5, 8)',
              'countPairsSum(1, 4, 5)'
            ],
            correctAnswer: 0,
            explanation: 'The bug skips every pair whose b equals high. For low 1, high 10 and target 10, no correct pair uses b = 10, so the answer 4 survives; each of the other calls needs a pair such as (1, 6), (3, 5) or (1, 4).'
          }
        ]
      }
    },
    {
      id: 'csaloops6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Task 2 — staircase

**Prompt.** Write a static method \`staircase\` that returns a String made of n groups separated by "/". Group k is the digit k written k times. If n is 0, return the empty String.

| Call | Returns |
|---|---|
| \`staircase(1)\` | \`"1"\` |
| \`staircase(3)\` | \`"1/22/333"\` |
| \`staircase(4)\` | \`"1/22/333/4444"\` |
| \`staircase(0)\` | \`""\` |

### Solution

\`\`\`java
public static String staircase(int n) {
    String result = "";
    for (int row = 1; row <= n; row++) {
        for (int k = 1; k <= row; k++) {
            result += row;
        }
        if (row < n) {
            result += "/";
        }
    }
    return result;
}
\`\`\`

- **The inner loop builds one group.** It appends row exactly row times, so its bound depends on the outer variable.
- **The separator goes in the outer loop, after the inner loop.** The test \`row < n\` leaves it off after the last group. Without the if, \`staircase(3)\` would return \`"1/22/333/"\`.
- **Count the work.** \`result += row\` executes 1 + 2 + ... + n times, so 10 times for n = 4.

### The Classic Mistake

Putting the separator inside the inner loop, still guarded by \`row < n\`, places a "/" after every digit of the early groups: \`staircase(3)\` returns \`"1/2/2/333"\`.
      `
    },
    {
      id: 'csaloops6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) How many characters long is the String returned by \`staircase(4)\`? _______

2) How many times does \`result += row\` execute for \`staircase(6)\`? _______

3) For \`countPairsSum(1, 10, 10)\`, how many times is \`a + b == target\` evaluated? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '21', '45'],
        hint1: 'Count the digits in all four groups, then add the separators.',
        hint2: 'Add the group sizes: 1 + 2 + 3 + 4 + 5 + 6.',
        hint3: 'The inner loop runs 9 times for a = 1, then 8, 7, and so on down to 0.',
        explanation: 'staircase(4) has 1 + 2 + 3 + 4 = 10 digits and 3 slashes, for 13 characters. For n = 6 the inner statement runs 21 times. countPairsSum checks 9 + 8 + ... + 1 + 0 = 45 pairs.'
      }
    },
    {
      id: 'csaloops6-deductions',
      type: 'text' as const,
      content: `
## Common FRQ Deductions on Nested Loops

| Mistake | Why it costs points |
|---|---|
| Inner loop starts at the wrong value | pairs are missed, double-counted, or matched with themselves |
| Accumulator or counter declared in the wrong loop | it resets too often or never resets |
| Bound off by one | a value is skipped, or substring runs past the end of the String |
| Return inside the loops on every path | the method stops after one check |
| Printing the answer instead of returning it | the method must return a value to its caller |
| Comparing Strings with == | compares references, not contents |

> 🎯 **AP Connection:** Write each loop header from the specification before writing the body: what is the first value, what is the last value, and is the last value included? Most nested-loop FRQ points are won or lost in the headers.
      `
    }
  ]
}
