export const csaArraysPart6Data = {
  topicSlug: 'csa-arrays',
  sections: [
    {
      id: 'csaarray6-intro',
      type: 'text' as const,
      content: `
# 📊 Array Algorithms

**Part 6 of 7 — AP-Style Practice**

---

Array algorithms appear in multiple-choice questions as traces ("what does the array contain afterward?") and counts ("how many elements are examined?"). The free-response section has no question devoted to one-dimensional arrays alone, but the same traversal patterns (total, count, extreme, search, any/all) are the building blocks of question 3 (data analysis with a list) and question 4 (two-dimensional arrays). This part practices tracing and writing these methods, using only the Java Quick Reference subset.

### How to Attack an Array Question

| Step | Do this |
|---|---|
| 1 | Write the array with its indexes underneath. Most errors are index errors. |
| 2 | Find the loop's first and last index, and check whether \`i + 1\` or \`i - 1\` stays inside 0 to \`length - 1\`. |
| 3 | When an assignment overwrites an element, redraw the array after each pass. |
| 4 | For search and sort counts, list each comparison rather than estimating. |
| 5 | For recursion, write each call with its own parameter values, then fill in the returns from the bottom up. |

> 🔑 **Key Concept:** A rearranging loop changes the array **while** it reads it. Trace with the current contents, not the original ones.
      `
    },
    {
      id: 'csaarray6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

**Segment A**
\`\`\`java
int[] arr = {3, 6, 1, 8, 2};
int m = 0;
for (int i = 1; i < arr.length; i++) {
    if (arr[i] < arr[m]) {
        m = i;
    }
}
int temp = arr[0];
arr[0] = arr[m];
arr[m] = temp;
\`\`\`

**Segment B**
\`\`\`java
int[] vals = {2, 7, 7, 3, 7, 1};
int count = 0;
for (int i = 0; i < vals.length; i++) {
    for (int j = i + 1; j < vals.length; j++) {
        if (vals[i] == vals[j]) {
            count++;
        }
    }
}
System.out.println(count);
\`\`\`

**Segment C**
\`\`\`java
int[] nums = {1, 2, 3, 4, 5, 6};
int half = nums.length / 2;
for (int i = 0; i < half; i++) {
    int temp = nums[i];
    nums[i] = nums[i + half];
    nums[i + half] = temp;
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does arr contain after Segment A runs?',
            options: [
              '{1, 6, 3, 8, 2}',
              '{1, 3, 6, 8, 2}',
              '{2, 6, 1, 8, 3}',
              '{1, 6, 1, 8, 2}'
            ],
            correctAnswer: 0,
            explanation: 'The loop finds the smallest value, 1, at index 2, and the three statements swap it with index 0. This is one pass of selection sort; {1, 6, 1, 8, 2} is what happens when the swap skips the temp variable.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '3',
              '6',
              '12',
              '15'
            ],
            correctAnswer: 0,
            explanation: 'The three 7s form three pairs: indexes 1 and 2, 1 and 4, and 2 and 4. No other value repeats, and starting j at i + 1 counts each pair once.'
          },
          {
            question: 'What does nums contain after Segment C runs?',
            options: [
              '{4, 5, 6, 1, 2, 3}',
              '{6, 5, 4, 3, 2, 1}',
              '{4, 5, 6, 4, 5, 6}',
              '{2, 1, 4, 3, 6, 5}'
            ],
            correctAnswer: 0,
            explanation: 'Each pass swaps an element in the first half with the element half positions later, so the two halves trade places with their order kept. Reversal would need the partner nums.length - 1 - i.'
          },
          {
            question: 'In Segment C, the loop test is changed to i < nums.length. What happens?',
            options: [
              'It throws an ArrayIndexOutOfBoundsException',
              'It restores the original order',
              'It swaps the halves only once',
              'It reverses the whole array'
            ],
            correctAnswer: 0,
            explanation: 'The first three passes swap the halves as before, but when i is 3 the code reads nums[6], and the last index is 5. Java checks every index at run time, so the program stops with an exception.'
          }
        ]
      }
    },
    {
      id: 'csaarray6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Task 1 — isSorted and countRuns

### Part (a): isSorted

**Prompt.** Return true if every element of \`arr\` is less than or equal to the element after it, and false otherwise.

\`\`\`java
public static boolean isSorted(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
\`\`\`

| Call | Returns | Comparisons |
|---|---|---|
| \`isSorted({2, 4, 4, 9})\` | true | 3 |
| \`isSorted({1, 3, 2, 5})\` | false | 2 |
| \`isSorted({7})\` | true | 0 |

This is the "all" pattern from Part 2: one out-of-order neighbor pair is a counterexample, and true is returned only after every pair has passed. Equal neighbors are allowed, so the test is \`>\`, not \`>=\`.

### Part (b): countRuns

**Prompt.** A **run** is a block of two or more adjacent equal values that cannot be made longer. Return the number of runs in \`arr\`.

| Call | Runs | Returns |
|---|---|---|
| \`countRuns({1, 1, 2, 3, 3, 3, 4, 1, 1})\` | 1 1, then 3 3 3, then 1 1 | 3 |
| \`countRuns({5, 5, 5, 5})\` | 5 5 5 5 | 1 |
| \`countRuns({1, 2, 3})\` | none | 0 |
| \`countRuns({4, 4, 1, 4, 4})\` | 4 4, then 4 4 | 2 |

**Plan.** Count each run once, at the position where it **starts**: index i starts a run when \`arr[i]\` equals \`arr[i + 1]\` and either i is 0 or \`arr[i - 1]\` is different.

\`\`\`java
public static int countRuns(int[] arr) {
    int runs = 0;
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1] && (i == 0 || arr[i - 1] != arr[i])) {
            runs++;
        }
    }
    return runs;
}
\`\`\`

The test \`i == 0\` comes first so that short-circuit evaluation skips \`arr[i - 1]\` when i is 0.

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Traversal | visits every neighbor pair without going out of bounds |
| Comparison | compares \`arr[i]\` with \`arr[i + 1]\` using the correct operator |
| Logic | returns false at the first counterexample (a) / counts each run exactly once (b) |
| Result | returns the boolean or count **after** the loop, rather than printing it |
      `
    },
    {
      id: 'csaarray6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About the Solutions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes countRuns with only the test arr[i] == arr[i + 1]. What does that version actually count?',
            options: [
              'Equal neighbor pairs',
              'Runs of three or more equal values',
              'Values that appear in more than one run',
              'Distinct values that are ever repeated'
            ],
            correctAnswer: 0,
            explanation: 'Without the start-of-run check, every adjacent equal pair adds one, so a run of three values counts twice. For {1, 1, 2, 3, 3, 3, 4, 1, 1} that version returns 4 instead of 3.'
          },
          {
            question: 'The countRuns test is rewritten as arr[i] == arr[i + 1] && (arr[i - 1] != arr[i] || i == 0). What happens on {1, 1, 2}?',
            options: [
              'It throws an exception',
              'It returns 1, the same result as before',
              'It returns 0 since the first run is skipped',
              'It returns 2 by counting the run twice'
            ],
            correctAnswer: 0,
            explanation: 'At i = 0 the neighbors are equal, so Java evaluates arr[i - 1], which is arr[-1], before it reaches i == 0. The order of the two tests inside the parentheses is what protects the index.'
          },
          {
            question: 'A student writes the isSorted loop as i < arr.length. Which call still returns the correct value?',
            options: [
              'isSorted({5, 2, 8})',
              'isSorted({2, 5, 8})',
              'isSorted({2, 2, 8})',
              'isSorted({8})'
            ],
            correctAnswer: 0,
            explanation: 'For {5, 2, 8} the first comparison finds 5 > 2 and returns false before i reaches the last index. The other arrays are sorted, so the loop keeps going until arr[i + 1] is out of bounds.'
          }
        ]
      }
    },
    {
      id: 'csaarray6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Task 2 — rotateRight

**Prompt.** Return a **new** array in which every element of \`arr\` has moved k positions to the right, with elements that pass the end wrapping around to the front. Assume k is at least 0 and \`arr\` is not changed.

| Call | Returns |
|---|---|
| \`rotateRight({1, 2, 3, 4, 5}, 2)\` | \`{4, 5, 1, 2, 3}\` |
| \`rotateRight({1, 2, 3, 4, 5}, 5)\` | \`{1, 2, 3, 4, 5}\` |
| \`rotateRight({1, 2, 3, 4, 5}, 0)\` | \`{1, 2, 3, 4, 5}\` |
| \`rotateRight({6, 7, 8}, 4)\` | \`{8, 6, 7}\` |

### Solution

\`\`\`java
public static int[] rotateRight(int[] arr, int k) {
    int n = arr.length;
    int[] result = new int[n];
    for (int i = 0; i < n; i++) {
        result[(i + k) % n] = arr[i];
    }
    return result;
}
\`\`\`

- **The new position is \`(i + k) % n\`.** The remainder wraps any position past \`n - 1\` back to the front, so k = 5 on 5 elements, and k = 4 on 3 elements, work without any special case.
- **Each element is written exactly once.** Because the result is a separate array, no value is overwritten before it is read, so no temp variable is needed.
- **The direction is in the subscript.** Writing \`result[i] = arr[(i + k) % n]\` instead moves every element k places **left**: \`{1, 2, 3, 4, 5}\` with k = 2 becomes \`{3, 4, 5, 1, 2}\`.

### An In-Place Alternative

Calling the Part 3 \`rotateRight(arr)\` method k times also works, but it changes the original array and moves every element k separate times.
      `
    },
    {
      id: 'csaarray6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What does \`countRuns({3, 3, 3, 8, 8, 1, 9, 9})\` return? _______

2) How many times does \`isSorted\` evaluate \`arr[i] > arr[i + 1]\` for \`{2, 5, 9, 4, 10}\`? _______

3) For \`rotateRight({4, 8, 15, 16, 23, 42}, 2)\`, what value is at index 0 of the returned array? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '3', '23'],
        hint1: 'Group the values: 3 3 3, then 8 8, then 1, then 9 9.',
        hint2: 'It compares 2 and 5, then 5 and 9, then 9 and 4.',
        hint3: 'Index 0 receives the element whose index i makes (i + 2) % 6 equal 0.',
        explanation: 'The runs are 3 3 3, 8 8 and 9 9, and the lone 1 is not a run. isSorted returns false on its third comparison, 9 > 4. Index 0 receives arr[4], which is 23, because (4 + 2) % 6 is 0.'
      }
    },
    {
      id: 'csaarray6-deductions',
      type: 'text' as const,
      content: `
## Common FRQ Deductions on Array Algorithms

| Mistake | Why it costs points |
|---|---|
| Loop bound \`i < arr.length\` while reading \`arr[i + 1]\` | the last pass reads past the end of the array |
| Returning inside the loop on both branches | the method decides after looking at one element |
| Starting a maximum or minimum at 0 | wrong for arrays whose values are all negative, or all positive |
| Shifting right with a forward loop | one value is copied into every slot |
| Using the same index for the old array and a shorter new one | skips slots or throws an exception |
| Comparing Strings or objects with \`==\` | compares references, not contents |
| Printing the answer instead of returning it | the method must return a value to its caller |

> 🎯 **AP Connection:** Before writing any array loop, write down three things: the first index, the last index, and every index expression in the body. If the body uses \`i + 1\`, the last i must be \`arr.length - 2\`.
      `
    }
  ]
}
