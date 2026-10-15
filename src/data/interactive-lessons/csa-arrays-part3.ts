export const csaArraysPart3Data = {
  topicSlug: 'csa-arrays',
  sections: [
    {
      id: 'csaarray3-intro',
      type: 'text' as const,
      content: `
# 📊 Array Algorithms

**Part 3 of 7 — Rearranging Elements: Rotations, Swaps, and Compaction**

---

Part 1 shifted elements by one position and lost a value off the end. This part keeps every value: it rotates arrays, swaps neighbors, packs values to the front, and builds new arrays when the result has a different length (CED Topic 4.5).

| In this part |
|---|
| Rotating left and right by one, and why loop direction matters |
| Swapping adjacent pairs |
| Compaction: moving chosen values to the front |
| Building a new array instead of changing the old one |
| Worked example: one pass of compare-and-swap |

> 🔑 **Key Concept:** An assignment \`arr[i] = arr[i + 1]\` **destroys** the old value in \`arr[i]\`. Before you write a rearranging loop, ask which value would be overwritten before it is copied, and either save it in a variable or loop in the direction that reads it first.
      `
    },
    {
      id: 'csaarray3-rotate',
      type: 'text' as const,
      content: `
## Rotate Left by One

The first element moves to the end and every other element moves one place left.

\`\`\`java
public static void rotateLeft(int[] arr) {
    int first = arr[0];                    // save the value that falls off
    for (int i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
}
\`\`\`

\`{10, 20, 30, 40, 50}\` becomes \`{20, 30, 40, 50, 10}\`. Without \`first\`, the last line would have to copy \`arr[0]\`, which already holds 20, and the result would be \`{20, 30, 40, 50, 20}\`.

## Rotate Right by One

\`\`\`java
public static void rotateRight(int[] arr) {
    int last = arr[arr.length - 1];
    for (int i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
}
\`\`\`

\`{10, 20, 30, 40, 50}\` becomes \`{50, 10, 20, 30, 40}\`.

## Why the Right Rotation Loops Backward

Suppose the loop ran forward instead: \`for (int i = 1; i < arr.length; i++) { arr[i] = arr[i - 1]; }\`

| i | Assignment | Array afterward |
|---|---|---|
| 1 | \`arr[1] = arr[0]\` | \`{10, 10, 30, 40, 50}\` |
| 2 | \`arr[2] = arr[1]\` | \`{10, 10, 10, 40, 50}\` |
| 3 | \`arr[3] = arr[2]\` | \`{10, 10, 10, 10, 50}\` |
| 4 | \`arr[4] = arr[3]\` | \`{10, 10, 10, 10, 10}\` |

Each step copies the value the previous step just wrote, so 10 spreads across the whole array. Going backward reads each old value **before** anything overwrites it.

| Move values | Each element copies from | Loop direction | Save first |
|---|---|---|---|
| left | \`arr[i + 1]\` | forward, i from 0 up to \`length - 2\` | \`arr[0]\` |
| right | \`arr[i - 1]\` | backward, i from \`length - 1\` down to 1 | \`arr[length - 1]\` |

Both loops stop one short of the far end, which keeps \`i + 1\` and \`i - 1\` inside the array.
      `
    },
    {
      id: 'csaarray3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'rotateRight is called twice on the array {1, 2, 3, 4, 5}. What does the array contain afterward?',
            options: [
              '{4, 5, 1, 2, 3}',
              '{3, 4, 5, 1, 2}',
              '{5, 1, 2, 3, 4}',
              '{2, 3, 4, 5, 1}'
            ],
            correctAnswer: 0,
            explanation: 'Each call moves the last element to the front: one call gives {5, 1, 2, 3, 4} and a second gives {4, 5, 1, 2, 3}. The array {3, 4, 5, 1, 2} is two left rotations.'
          },
          {
            question: 'The loop in rotateRight is changed to run forward, from i = 1 up to arr.length - 1. What does a call on {10, 20, 30, 40, 50} produce?',
            options: [
              '{50, 10, 10, 10, 10}',
              '{50, 10, 20, 30, 40}',
              '{10, 10, 10, 10, 10}',
              '{50, 50, 50, 50, 50}'
            ],
            correctAnswer: 0,
            explanation: 'The saved 50 survives, but the forward loop copies 10 into every later slot. The final statement then puts 50 into index 0.'
          },
          {
            question: 'Why does rotateLeft store arr[0] in a variable before its loop?',
            options: [
              'The loop overwrites it first',
              'Java must copy before it assigns',
              'A loop cannot read from index 0',
              'Saving it keeps the length the same'
            ],
            correctAnswer: 0,
            explanation: 'The first pass assigns arr[0] = arr[1], so the original first value is gone unless it was saved. The array length never changes, and the loop can read index 0 freely.'
          }
        ]
      }
    },
    {
      id: 'csaarray3-swaps',
      type: 'text' as const,
      content: `
## Swapping Adjacent Pairs

Swap elements 0 and 1, then 2 and 3, and so on.

\`\`\`java
for (int i = 0; i < arr.length - 1; i += 2) {
    int temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
}
\`\`\`

| Array | Result | Note |
|---|---|---|
| \`{1, 2, 3, 4, 5, 6}\` | \`{2, 1, 4, 3, 6, 5}\` | three swaps |
| \`{1, 2, 3, 4, 5}\` | \`{2, 1, 4, 3, 5}\` | the unpaired last element stays put |

Two details decide whether this works:

- **The bound is \`arr.length - 1\`.** With \`i < arr.length\`, an odd-length array reaches i = 4 and reads \`arr[5]\`, throwing an ArrayIndexOutOfBoundsException.
- **The step is \`i += 2\`.** With \`i++\`, each swap carries the same value one step further right: \`{1, 2, 3, 4, 5}\` becomes \`{2, 3, 4, 5, 1}\`, a left rotation.

## Compaction: Move Values to the Front

**Task.** Move every nonzero value to the front, keeping their order, and fill the rest with zeros.

\`\`\`java
public static void compact(int[] arr) {
    int write = 0;                         // next open spot at the front
    for (int read = 0; read < arr.length; read++) {
        if (arr[read] != 0) {
            arr[write] = arr[read];
            write++;
        }
    }
    while (write < arr.length) {
        arr[write] = 0;
        write++;
    }
}
\`\`\`

Trace with \`{0, 7, 0, 0, 3, 9}\`:

| read | arr[read] | Copied to | write afterward | Array afterward |
|---|---|---|---|---|
| 0 | 0 | none | 0 | \`{0, 7, 0, 0, 3, 9}\` |
| 1 | 7 | index 0 | 1 | \`{7, 7, 0, 0, 3, 9}\` |
| 2 | 0 | none | 1 | \`{7, 7, 0, 0, 3, 9}\` |
| 3 | 0 | none | 1 | \`{7, 7, 0, 0, 3, 9}\` |
| 4 | 3 | index 1 | 2 | \`{7, 3, 0, 0, 3, 9}\` |
| 5 | 9 | index 2 | 3 | \`{7, 3, 9, 0, 3, 9}\` |

The while loop then zeros indexes 3 to 5, giving \`{7, 3, 9, 0, 0, 0}\`. Two index variables move at different speeds: \`read\` visits every element, and \`write\` advances only when a value is kept. Because write never passes read, nothing is overwritten before it is read. Leaving out the while loop leaves the old values behind: \`{7, 3, 9, 0, 3, 9}\`.
      `
    },
    {
      id: 'csaarray3-rearrange',
      type: 'dropdown-select' as const,
      content: `
**Predict the Rearrangement** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The pair-swap loop (i += 2) turns {1, 2, 3, 4, 5, 6} into ___',
            options: ['{2, 1, 4, 3, 6, 5}', '{6, 5, 4, 3, 2, 1}', '{2, 3, 4, 5, 6, 1}', '{2, 1, 3, 4, 5, 6}']
          },
          {
            label: 'With i++ in place of i += 2, the pair-swap loop turns {1, 2, 3, 4, 5} into ___',
            options: ['{2, 3, 4, 5, 1}', '{2, 1, 4, 3, 5}', '{5, 1, 2, 3, 4}', '{2, 1, 3, 4, 5}']
          },
          {
            label: 'compact turns {4, 0, 0, 6, 0, 1} into ___',
            options: ['{4, 6, 1, 0, 0, 0}', '{0, 0, 0, 4, 6, 1}', '{4, 6, 1, 6, 0, 1}', '{1, 6, 4, 0, 0, 0}']
          }
        ],
        correctAnswers: ['{2, 1, 4, 3, 6, 5}', '{2, 3, 4, 5, 1}', '{4, 6, 1, 0, 0, 0}'],
        hint1: 'Swap positions 0 and 1, 2 and 3, then 4 and 5.',
        hint2: 'Track where the 1 goes: it is swapped one place right on every pass.',
        hint3: 'Kept values stay in their original order, and the while loop fills the rest with 0.',
        explanation: 'Stepping by 2 swaps three separate pairs. Stepping by 1 swaps the original first value along to the end, which is a left rotation. compact copies 4, 6 and 1 to the front in order and then zeros the remaining slots.'
      }
    },
    {
      id: 'csaarray3-newarrays',
      type: 'text' as const,
      content: `
## Building a New Array Instead

An array's length is fixed when it is created. When the result needs a **different length**, or the original must stay unchanged, build and return a new array.

### Filtering: Count First, Then Fill

\`\`\`java
public static int[] evensOnly(int[] arr) {
    int count = 0;
    for (int v : arr) {
        if (v % 2 == 0) {
            count++;
        }
    }
    int[] result = new int[count];
    int k = 0;                             // next open index in result
    for (int v : arr) {
        if (v % 2 == 0) {
            result[k] = v;
            k++;
        }
    }
    return result;
}
\`\`\`

\`evensOnly(new int[] {5, 8, 2, 7, 4})\` returns \`{8, 2, 4}\`. The first loop finds the size, because the new array must be created with its final length. The second loop needs its own index k: using v's position in \`arr\` would skip slots in \`result\` or run past its end. With no even values, the method returns an empty array of length 0.

### Removing One Position

\`\`\`java
public static int[] removeAt(int[] arr, int idx) {
    int[] result = new int[arr.length - 1];
    for (int i = 0; i < idx; i++) {
        result[i] = arr[i];               // before idx: same position
    }
    for (int i = idx + 1; i < arr.length; i++) {
        result[i - 1] = arr[i];           // after idx: one position left
    }
    return result;
}
\`\`\`

\`removeAt(new int[] {10, 20, 30, 40, 50}, 1)\` returns \`{10, 30, 40, 50}\`. Writing \`result[i] = arr[i]\` in the second loop would throw an ArrayIndexOutOfBoundsException when i reaches 4, because \`result\` has only indexes 0 to 3.

### Rotating by k Positions

\`\`\`java
int n = arr.length;
int[] result = new int[n];
for (int i = 0; i < n; i++) {
    result[(i + k) % n] = arr[i];
}
\`\`\`

Each element jumps k places right, and \`% n\` wraps positions past the end back to the front. With k = 2, \`{10, 20, 30, 40, 50}\` gives \`{40, 50, 10, 20, 30}\`. A k of 7 gives the same result, because 7 % 5 is 2.

| Approach | When to use it | Trade-off |
|---|---|---|
| Change \`arr\` in place | same length, original not needed | must avoid overwriting values before reading them |
| Return a new array | new length, or original must survive | needs a separate index for the new array |
      `
    },
    {
      id: 'csaarray3-worked',
      type: 'text' as const,
      content: `
## Worked Example: One Pass of Compare-and-Swap

\`\`\`java
for (int i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}
\`\`\`

**Step 1 — Read the loop.** It compares each neighbor pair from left to right and swaps any pair that is out of order. The bound \`arr.length - 1\` keeps \`i + 1\` inside the array.

**Step 2 — Trace \`{5, 1, 4, 2, 8}\`.**

| i | Compare | Swap? | Array afterward |
|---|---|---|---|
| 0 | 5 > 1 | yes | \`{1, 5, 4, 2, 8}\` |
| 1 | 5 > 4 | yes | \`{1, 4, 5, 2, 8}\` |
| 2 | 5 > 2 | yes | \`{1, 4, 2, 5, 8}\` |
| 3 | 5 > 8 | no | \`{1, 4, 2, 5, 8}\` |

**Step 3 — Notice what moved.** The 5 was carried right until it met a larger value, and then the 8 stayed at the end. A single pass always leaves the largest value in the last position, but it does not sort the array: 4 and 2 are still out of order.

**Step 4 — Count.** The pass made 4 comparisons and 3 swaps. A second pass on \`{1, 4, 2, 5, 8}\` makes one more swap and produces \`{1, 2, 4, 5, 8}\`.
      `
    },
    {
      id: 'csaarray3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use the compare-and-swap loop from the worked example.
      `,
      exercise: {
        questions: [
          {
            question: 'The loop runs once on {7, 3, 9, 2}. What does the array contain afterward?',
            options: [
              '{3, 7, 2, 9}',
              '{2, 3, 7, 9}',
              '{3, 7, 9, 2}',
              '{3, 2, 7, 9}'
            ],
            correctAnswer: 0,
            explanation: 'The pass swaps 7 and 3, leaves 7 and 9 alone, then swaps 9 and 2. Only the largest value is guaranteed to reach its final place after one pass, so 2 is still out of order.'
          },
          {
            question: 'Which is true after one pass on any array of int values?',
            options: [
              'The largest value is last',
              'The smallest value is first',
              'Every adjacent pair is now in order',
              'The array is sorted unless it has repeats'
            ],
            correctAnswer: 0,
            explanation: 'Whenever the pass meets the largest value it swaps it rightward every time after that, so it ends at the last index. The smallest value moves at most one place left per pass, so it need not be first.'
          },
          {
            question: 'The loop header is changed to i < arr.length. What happens when the loop runs?',
            options: [
              'It throws an ArrayIndexOutOfBoundsException',
              'It makes one extra swap with index 0',
              'It skips the last neighbor pair',
              'It sorts the whole array in one pass'
            ],
            correctAnswer: 0,
            explanation: 'On the last pass i is arr.length - 1, and the condition reads arr[i + 1], which is past the end of the array. Java checks every index at run time, so it does not wrap around to index 0.'
          }
        ]
      }
    }
  ]
}
