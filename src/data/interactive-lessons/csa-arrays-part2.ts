export const csaArraysPart2Data = {
  topicSlug: 'csa-arrays',
  sections: [
    {
      id: 'csaarray2-intro',
      type: 'text' as const,
      content: `
# 📊 Array Algorithms

**Part 2 of 7 — Standard Algorithms: Totals, Extremes, Counts, and Any/All**

---

Most array code on the AP exam is built from a handful of standard algorithms (CED Topic 4.5). Part 1 covered linear search, shifting, reversing and neighbor checks. This part covers the algorithms that **summarize** an array: they read every element and boil the whole array down to one number or one true/false answer.

| Algorithm | Answers the question | Result type |
|---|---|---|
| Sum and average | What is the total? The mean? | int or double |
| Minimum or maximum | What is the extreme value, and where is it? | element or index |
| Count | How many elements meet a condition? | int |
| At least one / all | Does any element qualify? Does every element? | boolean |
| Duplicates and frequency | Does a value repeat? How often does it appear? | boolean or int |

> 🔑 **Key Concept:** Every summarizing algorithm has the same three pieces: a variable set up **before** the loop, an update **inside** the loop, and an answer used **after** the loop. Most bugs are in the first or last piece.
      `
    },
    {
      id: 'csaarray2-accumulate',
      type: 'text' as const,
      content: `
## Sum and Average

\`\`\`java
int[] temps = {68, 74, 71, 80, 65, 77};
int sum = 0;
for (int t : temps) {
    sum += t;
}
double average = (double) sum / temps.length;
\`\`\`

sum ends at 435. The average depends on where the cast goes:

| Expression | Value | Why |
|---|---|---|
| \`sum / temps.length\` | 72 | int / int is int division: 435 / 6 drops the .5 |
| \`(double) sum / temps.length\` | 72.5 | the cast turns sum into 435.0 **before** dividing |
| \`(double) (sum / temps.length)\` | 72.0 | the parentheses divide first, so the .5 is already gone |

Storing an int quotient in a double variable does not help: \`double avg = sum / temps.length;\` stores 72.0.

## Extremes: Track the Index

\`\`\`java
int maxIndex = 0;
for (int i = 1; i < temps.length; i++) {
    if (temps[i] > temps[maxIndex]) {
        maxIndex = i;
    }
}
// maxIndex is 3, and temps[maxIndex] is 80
\`\`\`

Keeping the **index** gives you both answers: the position is \`maxIndex\` and the value is \`temps[maxIndex]\`. The loop starts at 1 because index 0 is already the first candidate. Changing \`>\` to \`<\` finds the minimum: index 4, value 65.

### Choosing the Starting Value

| Start max at | Correct? | Reason |
|---|---|---|
| \`arr[0]\` | yes, for any nonempty array | the first element is a real candidate |
| \`Integer.MIN_VALUE\` | yes | no int is smaller, so the first element replaces it |
| \`0\` | no | for \`{-5, -2, -9}\` nothing beats 0, so the method reports 0, a value that is not in the array |

The same trap works in reverse: a minimum that starts at 0 reports 0 for \`{4, 9, 6}\`.

### Ties

For \`{5, 9, 2, 9}\`, the test \`arr[i] > arr[maxIndex]\` keeps the **first** 9 and ends with index 1. The test \`arr[i] >= arr[maxIndex]\` moves to every later 9 it meets and ends with index 3. Read the specification: "the first occurrence" and "the last occurrence" call for different operators.

> 🎯 **AP Connection:** Free-response questions often ask for the **index** of the largest or smallest element. Returning the value instead of the index loses the point even if the loop is perfect.
      `
    },
    {
      id: 'csaarray2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
int[] nums = {3, 8, 2, 6};
int sum = 0;
for (int n : nums) {
    sum += n;
}
double avg = sum / nums.length;
System.out.println(avg);
\`\`\`

**Segment B**
\`\`\`java
int[] vals = {-3, -8, -1};
int max = 0;
for (int v : vals) {
    if (v > max) {
        max = v;
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '4.0',
              '4.75',
              '4',
              '5.0'
            ],
            correctAnswer: 0,
            explanation: 'sum is 19, and 19 / 4 is int division, which gives 4. Storing that 4 in a double makes it 4.0, so 4.75 would need a cast on sum before the division.'
          },
          {
            question: 'What is the value of max after Segment B runs?',
            options: [
              '0',
              '-1',
              '-3',
              '-8'
            ],
            correctAnswer: 0,
            explanation: 'Every element is negative, so no element is greater than the starting value 0 and max never changes. Starting at vals[0] would give the correct maximum, -1.'
          },
          {
            question: 'Segment B should work for any nonempty array. Which replacement for int max = 0; achieves that?',
            options: [
              'int max = vals[0];',
              'int max = -1;',
              'int max = vals.length;',
              'int max = vals[1];'
            ],
            correctAnswer: 0,
            explanation: 'Starting with the first element guarantees that max is a real element of the array. Starting at -1 fails for arrays whose values are all below -1, vals.length is not an element at all, and vals[1] fails for a one-element array.'
          }
        ]
      }
    },
    {
      id: 'csaarray2-anyall',
      type: 'text' as const,
      content: `
## Counting Elements That Meet a Condition

\`\`\`java
int count = 0;
for (int t : temps) {
    if (t > 70) {
        count++;
    }
}
// count is 4: the values 74, 71, 80 and 77
\`\`\`

The count goes up only inside the if, and it is used only after the loop.

## At Least One vs. All

\`\`\`java
public static boolean anyNegative(int[] arr) {
    for (int value : arr) {
        if (value < 0) {
            return true;      // one example proves it
        }
    }
    return false;             // known only after checking everything
}

public static boolean allEven(int[] arr) {
    for (int value : arr) {
        if (value % 2 != 0) {
            return false;     // one counterexample disproves it
        }
    }
    return true;
}
\`\`\`

| Question | Return inside the loop | Return after the loop | Empty array returns |
|---|---|---|---|
| Does **at least one** element qualify? | \`true\` when a match appears | \`false\` | \`false\` |
| Does **every** element qualify? | \`false\` when a counterexample appears | \`true\` | \`true\` |

The two methods are mirror images. An empty array has no example, so "at least one" is false, and it has no counterexample, so "all" is true.

### The Classic Bug: Deciding Too Early

\`\`\`java
for (int i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        return true;
    } else {
        return false;
    }
}
\`\`\`

Both branches return, so the loop never gets past index 0: the method answers using the first element only.

## Any Duplicates? Check Every Pair Once

Part 1 compared neighbors. A repeated value can be anywhere, so compare every pair of positions:

\`\`\`java
public static boolean hasDuplicate(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
}
\`\`\`

- The inner loop starts at \`i + 1\`, so each pair is checked once and no element is compared with itself. Starting at 0 would compare \`arr[0]\` with itself and return true for every nonempty array.
- \`{4, 1, 7, 1}\` returns true on the 5th comparison, when \`arr[1]\` meets \`arr[3]\`.
- \`{6, 2, 8, 3, 5}\` checks all 4 + 3 + 2 + 1 = 10 pairs and returns false.

## Frequency of One Value

\`\`\`java
public static int countOf(int[] arr, int target) {
    int count = 0;
    for (int value : arr) {
        if (value == target) {
            count++;
        }
    }
    return count;
}
\`\`\`

\`countOf(new int[] {4, 7, 4, 2, 7, 7, 1}, 7)\` returns 3.
      `
    },
    {
      id: 'csaarray2-patterns',
      type: 'dropdown-select' as const,
      content: `
**Pick the Pattern** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In anyNegative, the statement after the loop is return ___',
            options: ['false', 'true', 'value < 0', 'count > 0']
          },
          {
            label: 'For an empty array, allEven returns ___ and anyNegative returns ___ (in that order)',
            options: ['true, false', 'false, true', 'true, true', 'false, false']
          },
          {
            label: 'In hasDuplicate, the inner loop starts at ___',
            options: ['j = i + 1', 'j = 0', 'j = i', 'j = 1']
          }
        ],
        correctAnswers: ['false', 'true, false', 'j = i + 1'],
        hint1: 'A true answer would already have been returned inside the loop.',
        hint2: 'An empty array has no examples and no counterexamples.',
        hint3: 'Each pair should be checked once, and never against itself.',
        explanation: 'Reaching the end of anyNegative means no negative value was found, so it returns false. With no elements, allEven finds no counterexample and returns true, while anyNegative finds no example and returns false. Starting at i + 1 checks each pair of positions exactly once.'
      }
    },
    {
      id: 'csaarray2-worked',
      type: 'text' as const,
      content: `
## Worked Example: The Most Frequent Value

**Task.** Return the value that appears most often in a nonempty array. If two values tie, return the one that reaches the top count first.

\`\`\`java
public static int mostFrequent(int[] arr) {
    int best = arr[0];
    int bestCount = 0;
    for (int i = 0; i < arr.length; i++) {
        int count = 0;
        for (int j = 0; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                count++;
            }
        }
        if (count > bestCount) {
            bestCount = count;
            best = arr[i];
        }
    }
    return best;
}
\`\`\`

**Step 1 — See the two algorithms.** The inner loop is the frequency count for \`arr[i]\`. The outer loop is a maximum search over those counts. \`count\` is reset inside the outer loop so every value is counted from zero.

**Step 2 — Trace \`{4, 7, 4, 2, 7, 7, 1}\`.**

| i | arr[i] | count | count > bestCount? | best, bestCount afterward |
|---|---|---|---|---|
| 0 | 4 | 2 | yes (2 > 0) | 4, 2 |
| 1 | 7 | 3 | yes (3 > 2) | 7, 3 |
| 2 | 4 | 2 | no | 7, 3 |
| 3 | 2 | 1 | no | 7, 3 |
| 4 | 7 | 3 | no (3 > 3 is false) | 7, 3 |
| 5 | 7 | 3 | no | 7, 3 |
| 6 | 1 | 1 | no | 7, 3 |

**Step 3 — Answer.** The method returns 7.

**Step 4 — Count the work.** The inner comparison runs 7 x 7 = 49 times, because both loops cover the whole array. The value 7 is counted three separate times; the method is simple, not efficient.

**Step 5 — Check the tie rule.** With \`>\`, a later value that only ties the best count does not replace it. Changing the test to \`>=\` would let every tie replace it, so the method would return the tied value checked last.
      `
    },
    {
      id: 'csaarray2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
public static boolean allPositive(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'For which array does allPositive return an incorrect result?',
            options: [
              '{4, -2, 6}',
              '{-4, 2, 6}',
              '{4, 2, 6}',
              '{-4, -2, -6}'
            ],
            correctAnswer: 0,
            explanation: 'The method decides from index 0 alone. For {4, -2, 6} it sees 4 and returns true even though -2 is negative; each of the other arrays happens to get the right answer from its first element.'
          },
          {
            question: 'Which rewrite of the loop body makes allPositive correct?',
            options: [
              'if (arr[i] <= 0) { return false; }',
              'if (arr[i] > 0) { return true; }',
              'if (arr[i] < 0) { return false; }',
              'if (arr[i] >= 0) { return true; }'
            ],
            correctAnswer: 0,
            explanation: 'One element that is zero or negative disproves "all positive," so the loop returns false there and the return true after the loop handles the rest. Testing only < 0 would wrongly accept 0, and returning true inside the loop is the "at least one" pattern.'
          },
          {
            question: 'mostFrequent from the worked example is called with {3, 5, 3, 5, 1}. What does it return?',
            options: [
              '3',
              '5',
              '2',
              '1'
            ],
            correctAnswer: 0,
            explanation: 'Both 3 and 5 appear twice. The value 3 reaches a count of 2 first, at i = 0, and the later 5 only ties it, so 2 > 2 is false and best stays 3.'
          }
        ]
      }
    }
  ]
}
