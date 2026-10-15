export const csaLoopsPart3Data = {
  topicSlug: 'csa-loops',
  sections: [
    {
      id: 'csaloops3-intro',
      type: 'text' as const,
      content: `
# 🔄 Loops (Advanced)

**Part 3 of 7 — Nested Loop Algorithms: Pairs, Tables, and Primes**

---

Part 2 traced how nested loops run. This part puts them to work (CED Topic 2.11). Reach for a nested loop whenever a problem says **every combination**: every pair of numbers, every row and column of a table, every possible divisor of every number in a range, or every letter of one word against every letter of another.

| Pattern | Outer loop chooses | Inner loop chooses |
|---|---|---|
| Counting pairs | the first value | the second value |
| Building a table | the row | the column |
| Primes in a range | the number to test | each possible divisor |
| Letter pairs in Strings | a position in one word | a position in the other word, or later in the same word |
      `
    },
    {
      id: 'csaloops3-pairs',
      type: 'text' as const,
      content: `
## Counting Pairs

How many ways can two six-sided dice show a total of 7? Let a be the first die and b the second.

\`\`\`java
int count = 0;
for (int a = 1; a <= 6; a++) {
    for (int b = 1; b <= 6; b++) {
        if (a + b == 7) {
            count++;
        }
    }
}
System.out.println(count);
\`\`\`

The inner body checks all 6 x 6 = 36 combinations. Six of them add to 7: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2) and (6, 1), so the program prints \`6\`.

### Ordered or Unordered?

Here (2, 5) and (5, 2) are different outcomes, because the dice are different. When order does **not** matter, such as choosing two players from a team, start the inner loop later so each pair is visited once.

| Inner header | Pairs visited when both values run from 1 to 4 | How many | Use it when |
|---|---|---|---|
| \`int b = 1; b <= 4; b++\` | every (a, b): both (1, 3) and (3, 1), and (2, 2) | 16 | order matters |
| \`int b = a; b <= 4; b++\` | only pairs with a <= b, including (2, 2) | 10 | order does not matter, and a value may pair with itself |
| \`int b = a + 1; b <= 4; b++\` | only pairs with a < b | 6 | order does not matter, and the two items must differ |

> 🔑 **Key Concept:** Starting the inner loop at \`a + 1\` visits each unordered pair of different values exactly once. With that header, the dice code finds only (1, 6), (2, 5) and (3, 4).
      `
    },
    {
      id: 'csaloops3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use the dice code above.
      `,
      exercise: {
        questions: [
          {
            question: 'The inner loop header is changed to for (int b = a + 1; b <= 6; b++). What is printed?',
            options: [
              '3',
              '6',
              '2',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'Only pairs with a < b are visited now, and three of them add to 7: (1, 6), (2, 5) and (3, 4). The value 6 counts each pair in both orders.'
          },
          {
            question: 'With the original headers, the condition is changed to a * b == 12. What is printed?',
            options: [
              '4',
              '2',
              '3',
              '6'
            ],
            correctAnswer: 0,
            explanation: 'The ordered pairs (2, 6), (3, 4), (4, 3) and (6, 2) have a product of 12. A value of 2 would count each pair in only one order, and (1, 12) is impossible on a die.'
          }
        ]
      }
    },
    {
      id: 'csaloops3-table',
      type: 'text' as const,
      content: `
## Building a Table Row by Row

\`\`\`java
for (int r = 1; r <= 4; r++) {
    String row = "";
    for (int c = 1; c <= 4; c++) {
        row += r * c + " ";
    }
    System.out.println(row);
}
\`\`\`

Output:
\`\`\`
1 2 3 4
2 4 6 8
3 6 9 12
4 8 12 16
\`\`\`

Trace of the pass r = 2: row starts as \`""\`, then becomes \`"2 "\`, \`"2 4 "\`, \`"2 4 6 "\` and \`"2 4 6 8 "\`, and the println shows it.

- \`String row = ""\` sits **inside** the outer loop, so every row starts empty. If it were declared above the outer loop, the second line would print \`1 2 3 4 2 4 6 8 \`, because the String would keep everything from the first row.
- \`row += r * c + " "\` evaluates the right side first: \`r * c\` is an int product, and \`+ " "\` turns it into text before it is appended.

## Primes in a Range: A Divisor Loop for Every Number

\`\`\`java
for (int n = 2; n <= 20; n++) {
    int divisors = 0;
    for (int d = 2; d < n; d++) {
        if (n % d == 0) {
            divisors++;
        }
    }
    if (divisors == 0) {
        System.out.print(n + " ");
    }
}
\`\`\`

| n | d values tried | Divisors found | Printed? |
|---|---|---|---|
| 2 | none (\`2 < 2\` is false) | none | yes |
| 3 | 2 | none | yes |
| 4 | 2, 3 | 2 | no |
| 5 | 2, 3, 4 | none | yes |
| 6 | 2 to 5 | 2 and 3 | no |
| 7 | 2 to 6 | none | yes |
| 8 | 2 to 7 | 2 and 4 | no |
| 9 | 2 to 8 | 3 | no |

The whole loop prints \`2 3 5 7 11 13 17 19 \`. Two details matter: \`int divisors = 0\` must be reset inside the outer loop, and for n = 2 the inner loop runs zero times, which is exactly why 2 is correctly reported as prime.

## A while Loop Inside a for Loop

The inner loop does not have to be a for loop. Here the inner loop counts how many times a starting value can be doubled before it passes 20.

\`\`\`java
for (int start = 1; start <= 5; start++) {
    int value = start;
    int steps = 0;
    while (value <= 20) {
        value *= 2;
        steps++;
    }
    System.out.println(start + ": " + steps);
}
\`\`\`

| start | Values that pass \`value <= 20\` | steps printed |
|---|---|---|
| 1 | 1, 2, 4, 8, 16 | 5 |
| 2 | 2, 4, 8, 16 | 4 |
| 3 | 3, 6, 12 | 3 |
| 4 | 4, 8, 16 | 3 |
| 5 | 5, 10, 20 | 3 |

The number of inner passes is not fixed: it depends on \`start\`, and you find it by listing values until the condition fails.
      `
    },
    {
      id: 'csaloops3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) If the primes code runs n from 2 to 30 instead of 2 to 20, how many numbers does it print? _______

2) In the doubling code, how many steps would be printed for start = 6? _______

3) In the multiplication table code, what is the last number printed? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '2', '16'],
        hint1: 'Add the primes from 21 to 30 to the eight already printed.',
        hint2: 'List the values: 6, then 12, then 24. How many of them pass value <= 20?',
        hint3: 'The last row is r = 4, and its last column is c = 4.',
        explanation: 'The primes up to 30 are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29, which is 10 numbers. For start = 6 only 6 and 12 pass the test, so steps is 2. The last product is 4 * 4 = 16.'
      }
    },
    {
      id: 'csaloops3-strings',
      type: 'text' as const,
      content: `
## Letter Pairs in Strings

Nested loops can compare letters in pairs. These two algorithms are new; they are not the single-loop traversals from the Strings topic.

### Does Any Letter Repeat?

\`\`\`java
public static boolean hasRepeat(String word) {
    for (int i = 0; i < word.length(); i++) {
        for (int j = i + 1; j < word.length(); j++) {
            String a = word.substring(i, i + 1);
            String b = word.substring(j, j + 1);
            if (a.equals(b)) {
                return true;
            }
        }
    }
    return false;
}
\`\`\`

- The inner loop starts at \`i + 1\`, so each pair of positions is checked once and no letter is compared with itself.
- \`hasRepeat("abca")\`: i = 0 compares "a" with "b", then "c", then "a", and returns true after 3 comparisons.
- \`hasRepeat("planet")\` checks all 15 pairs, finds no match, and returns false only **after** both loops finish.

### Count Matching Letter Pairs Between Two Words

\`\`\`java
public static int countMatches(String first, String second) {
    int count = 0;
    for (int i = 0; i < first.length(); i++) {
        for (int j = 0; j < second.length(); j++) {
            if (first.substring(i, i + 1).equals(second.substring(j, j + 1))) {
                count++;
            }
        }
    }
    return count;
}
\`\`\`

Every letter of \`first\` is compared with every letter of \`second\`, so the inner loop starts at 0 each time.

| Call | Matching pairs | Returns |
|---|---|---|
| \`countMatches("cat", "act")\` | c-c, a-a, t-t | 3 |
| \`countMatches("too", "oat")\` | t-t, and each "o" of "too" with the "o" of "oat" | 3 |
| \`countMatches("noon", "on")\` | each of the four letters matches one letter of "on" | 4 |
| \`countMatches("abc", "xyz")\` | none | 0 |

> 🎯 **AP Connection:** In free-response code, pull single letters out with \`substring(k, k + 1)\` and compare them with \`equals\`. The Java Quick Reference methods are enough for every letter-pair task.
      `
    },
    {
      id: 'csaloops3-strings',
      type: 'multiple-choice' as const,
      content: `
**Letter Pairs Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does countMatches("see", "eye") return?',
            options: [
              '4',
              '2',
              '3',
              '6'
            ],
            correctAnswer: 0,
            explanation: 'The "s" matches nothing. Each of the two "e" letters in "see" matches both "e" letters in "eye", which gives 2 + 2 = 4.'
          },
          {
            question: 'The inner loop of hasRepeat is changed to start at j = 0. What does hasRepeat("planet") return now?',
            options: [
              'true',
              'false',
              'It throws an exception',
              'It does not compile'
            ],
            correctAnswer: 0,
            explanation: 'With j starting at 0, the first comparison is position 0 against position 0, so the method compares "p" with itself and returns true at once. Every nonempty word would now report a repeat.'
          },
          {
            question: 'Why does hasRepeat put return false after both loops rather than in an else branch inside the inner loop?',
            options: [
              'A missing match is known only once every pair is checked',
              'An else branch inside a loop does not compile in Java',
              'Returning inside a loop skips the next outer pass only',
              'The inner loop would restart and overwrite the result'
            ],
            correctAnswer: 0,
            explanation: 'One equal pair proves a repeat, but no repeat can be claimed until all pairs have been checked. An else that returned false would stop after the first comparison.'
          }
        ]
      }
    }
  ]
}
