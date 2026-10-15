export const csaIterationPart4Data = {
  topicSlug: 'csa-iteration',
  sections: [
    {
      id: 'csaitera4-intro',
      type: 'text' as const,
      content: `
# 🔁 Iteration

**Part 4 of 7 — Standard Algorithms I: Sum, Average, Frequency, Divisibility**

---

CED Topic 2.9 names a short list of standard algorithms that combine selection and iteration. Free-response question 1 is built from them, so you should be able to write each one without thinking about the shape. This part covers the arithmetic group; Part 5 covers digits and minimum/maximum.

| Algorithm | Core idea |
|---|---|
| Sum or product over a range | accumulator outside the loop, update inside |
| Average | sum and count, then divide as a double |
| Frequency | count how often a condition is true |
| Divisibility | \`a % b == 0\` means b divides a evenly |
| Early-return search | stop at the first value that answers the question |
      `
    },
    {
      id: 'csaitera4-sumavg',
      type: 'text' as const,
      content: `
## Accumulating Over a Range

Every accumulator follows the same three steps:

1. **Initialize before the loop**: 0 for a sum or count, 1 for a product.
2. **Update inside the loop**: \`sum += k;\` or \`product *= k;\`
3. **Use after the loop**: return it, print it, or divide it.

\`\`\`java
public static double averageOfRange(int low, int high) {
    // precondition: low <= high
    int sum = 0;
    int count = 0;
    for (int k = low; k <= high; k++) {
        sum += k;
        count++;
    }
    return (double) sum / count;
}
\`\`\`

| Call | \`sum\` | \`count\` | Returns |
|---|---|---|---|
| \`averageOfRange(3, 8)\` | 3 + 4 + 5 + 6 + 7 + 8 = 33 | 6 | 5.5 |

If the return statement were \`return sum / count;\`, Java would compute 33 / 6 with int division, giving 5, and the method would return 5.0. The cast must happen **before** the division.

### Other Accumulators

| Goal | Initialize | Loop | Update | Result |
|---|---|---|---|---|
| 5! (product 1 to 5) | \`int p = 1;\` | \`k = 1\` to \`5\` | \`p *= k;\` | 120 |
| Sum of squares 1 to 4 | \`int s = 0;\` | \`k = 1\` to \`4\` | \`s += k * k;\` | 30 |

A product that starts at 0 stays 0 forever, which is why products start at 1.
      `
    },
    {
      id: 'csaitera4-frequency',
      type: 'text' as const,
      content: `
## Counting How Often a Criterion Holds

\`\`\`java
int count = 0;
for (int k = 1; k <= 10; k++) {
    int y = k * k + 1;
    if (y % 5 == 0) {
        count++;
    }
}
\`\`\`

| \`k\` | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| \`k * k + 1\` | 2 | 5 | 10 | 17 | 26 | 37 | 50 | 65 | 82 | 101 |
| divisible by 5? | | yes | yes | | | | yes | yes | | |

\`count\` ends at 4. The \`count++\` belongs **inside** the \`if\`; outside it, the loop would count every value and \`count\` would end at 10.

## Divisibility with %

| Question | Test |
|---|---|
| Is \`n\` even? | \`n % 2 == 0\` |
| Is \`n\` odd? | \`n % 2 != 0\` |
| Is \`n\` a multiple of 7? | \`n % 7 == 0\` |
| Does \`d\` divide \`n\`? | \`n % d == 0\` |
| Is \`n\` divisible by 3 but not by 9? | \`n % 3 == 0 && n % 9 != 0\` |

Write the odd test as \`n % 2 != 0\`, not \`n % 2 == 1\`. In Java the remainder takes the sign of the left operand, so \`-3 % 2\` is -1, and the \`== 1\` version wrongly reports that -3 is not odd.

> 🎯 **AP Connection:** A test such as \`n % d == 0\` throws an \`ArithmeticException\` when \`d\` is 0. AP problems state preconditions such as "d > 0" so that you do not need to guard against it.
      `
    },
    {
      id: 'csaitera4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
int count = 0;
for (int n = 1; n <= 30; n++) {
    if (n % 4 == 0 || n % 6 == 0) {
        count++;
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of count after the segment runs?',
            options: [
              '10',
              '7',
              '5',
              '2'
            ],
            correctAnswer: 0,
            explanation: 'There are 7 multiples of 4 and 5 multiples of 6 from 1 to 30, but 12 and 24 are multiples of both, and the || test counts each n only once. That gives 7 + 5 - 2 = 10; 2 is the count for &&, not ||.'
          },
          {
            question: 'For a positive int n, which condition is true exactly when n is a multiple of both 4 and 6?',
            options: [
              'n % 12 == 0',
              'n % 24 == 0',
              'n % 4 == 0 || n % 6 == 0',
              'n % 10 == 0'
            ],
            correctAnswer: 0,
            explanation: 'A number is a multiple of both 4 and 6 exactly when it is a multiple of 12, their least common multiple. Testing 24 misses 12 itself, the || test also accepts 4 and 6, and 10 is the sum of 4 and 6, not a common multiple.'
          },
          {
            question: 'In the segment above, the statement count++ is moved below the closing brace of the if statement. What is the value of count after the loop?',
            options: [
              '10',
              '12',
              '30',
              '2'
            ],
            correctAnswer: 2,
            explanation: 'Outside the if, count++ runs on every pass whether or not the condition holds, so it counts all 30 values of n.'
          }
        ]
      }
    },
    {
      id: 'csaitera4-factors',
      type: 'text' as const,
      content: `
## Factors and Sums of Multiples

\`\`\`java
public static void printFactors(int n) {
    for (int d = 1; d <= n; d++) {
        if (n % d == 0) {
            System.out.print(d + " ");
        }
    }
}
\`\`\`

\`printFactors(18)\` prints \`1 2 3 6 9 18 \`. The loop tries every candidate from 1 to \`n\` and keeps the ones that divide evenly.

### Sum of Multiples of 3 or 5 Below 20

**Approach 1: test each number.**
\`\`\`java
int sum = 0;
for (int k = 1; k < 20; k++) {
    if (k % 3 == 0 || k % 5 == 0) {
        sum += k;
    }
}
\`\`\`
It adds 3, 5, 6, 9, 10, 12, 15 and 18, so \`sum\` is 78.

**Approach 2: step by each multiple.** Two loops, one with \`k += 3\` and one with \`k += 5\`, visit fewer values, but 15 is visited by both loops. Their total is 63 + 30 = 93, which counts 15 twice. Stepping loops are fast, but you must handle the overlap.
      `
    },
    {
      id: 'csaitera4-search',
      type: 'text' as const,
      content: `
## Early-Return Searches

Some questions are answered by the **first** value that works. Return it as soon as you find it.

\`\`\`java
/** Returns the smallest k with start <= k <= end that is a multiple of d,
 *  or -1 if there is none. Precondition: d > 0 */
public static int firstMultiple(int start, int end, int d) {
    for (int k = start; k <= end; k++) {
        if (k % d == 0) {
            return k;
        }
    }
    return -1;
}
\`\`\`

\`firstMultiple(20, 30, 7)\` returns 21 on its second pass. \`firstMultiple(22, 27, 7)\` finds nothing, finishes the loop, and returns -1.

### isPrime: Return false Early, true at the End

\`\`\`java
public static boolean isPrime(int n) {
    if (n < 2) {
        return false;
    }
    for (int d = 2; d < n; d++) {
        if (n % d == 0) {
            return false;
        }
    }
    return true;
}
\`\`\`

| Call | Divisors tried | Returns |
|---|---|---|
| \`isPrime(15)\` | 2, then 3 divides 15 | false |
| \`isPrime(13)\` | 2 through 12, none divides | true |
| \`isPrime(2)\` | none (2 < 2 is false) | true |

One divisor is enough to say "not prime", but "prime" can be claimed only after **every** candidate has failed. That is why \`return true\` sits after the loop.

### The Classic Mistake

\`\`\`java
for (int d = 2; d < n; d++) {
    if (n % d == 0) {
        return false;
    } else {
        return true;    // decides after testing only d = 2
    }
}
\`\`\`

This version returns true for every odd number greater than 2, including 9, 15 and 25, because it never gets past \`d = 2\`.
      `
    },
    {
      id: 'csaitera4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Use \`printFactors\`, \`firstMultiple\`, and the correct \`isPrime\` from above.

1) How many numbers does \`printFactors(28)\` print?

2) What does \`firstMultiple(40, 50, 9)\` return?

3) How many times does the correct \`isPrime(49)\` evaluate \`n % d == 0\`?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '45', '6'],
        hint1: 'Pair the factors: 1 and 28, 2 and 14, ...',
        hint2: 'Check 40, 41, 42, ... for a multiple of 9.',
        hint3: 'The method returns as soon as a divisor is found. Which is the smallest divisor of 49 above 1?',
        explanation: 'The factors of 28 are 1, 2, 4, 7, 14 and 28. The first multiple of 9 from 40 on is 45. isPrime(49) tries d = 2, 3, 4, 5, 6 and 7, and returns false at 7, so it evaluates the test 6 times.'
      }
    },
    {
      id: 'csaitera4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Question 1 uses this version of \`averageOfRange\`:

\`\`\`java
public static double averageOfRange(int low, int high) {
    int sum = 0;
    int count = 0;
    for (int k = low; k <= high; k++) {
        sum += k;
        count++;
    }
    return sum / count;
}
\`\`\`

Question 2 uses the classic-mistake version of \`isPrime\` shown above.
      `,
      exercise: {
        questions: [
          {
            question: 'What is returned by averageOfRange(4, 9)?',
            options: [
              '6.0',
              '6.5',
              '6',
              '7.0'
            ],
            correctAnswer: 0,
            explanation: 'The sum is 39 and the count is 6. Both are ints, so 39 / 6 is 6, which is widened to 6.0 when it is returned as a double; the cast is needed to get 6.5.'
          },
          {
            question: 'For which argument does the mistaken isPrime return an incorrect result?',
            options: [
              '15',
              '7',
              '2',
              '3'
            ],
            correctAnswer: 0,
            explanation: 'The mistaken loop returns true as soon as 2 fails to divide n, so every odd number is called prime. That is right for 3 and 7, and 2 skips the loop and correctly returns true, but 15 is not prime.'
          },
          {
            question: 'A student wants the sum of all multiples of 3 or 5 below 20 and writes one loop with k += 3 followed by a second loop with k += 5, each adding k to the same sum. Why is the result too large?',
            options: [
              '15 is added twice',
              'The k += 3 loop also adds 21',
              'Both loops also add the value 20',
              'The k += 5 loop adds 0 and 20'
            ],
            correctAnswer: 0,
            explanation: 'Both stepping loops visit 15, so it is added twice and the total is 93 instead of 78. A single loop that tests k % 3 == 0 || k % 5 == 0 adds each number once.'
          }
        ]
      }
    }
  ]
}
