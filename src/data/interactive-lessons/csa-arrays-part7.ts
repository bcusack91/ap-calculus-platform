export const csaArraysPart7Data = {
  topicSlug: 'csa-arrays',
  sections: [
    {
      id: 'csaarray7-intro',
      type: 'text' as const,
      content: `
# 📊 Array Algorithms

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: the standard array algorithms (CED Topic 4.5), searching (4.14 and 4.17), sorting (4.15 and 4.17) and recursion (4.16). Use the table as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Algorithm | Key fact | Typical trap |
|---|---|---|
| Sum and average (Part 2) | cast before dividing: \`(double) sum / arr.length\` | int division drops the fraction |
| Max or min with index (Part 2) | start from \`arr[0]\`; \`>\` keeps the first tie | starting at 0 |
| Any / all (Part 2) | return inside the loop for the deciding case, the default after it | an else branch that returns early |
| Duplicates (Part 2) | inner loop starts at \`i + 1\` | comparing an element with itself |
| Rotations and shifts (Part 3) | save the value that falls off; shift right with a backward loop | a forward loop copies one value everywhere |
| Compaction and filtering (Part 3) | a second index for the destination | reusing the source index |
| Linear search (Part 4) | works on any data; \`equals\` for Strings | swapping the operands of the while test |
| Binary search (Parts 4 and 5) | sorted data only; \`mid = (low + high) / 2\`, then \`mid + 1\` or \`mid - 1\` | forgetting int division rounds down |
| Selection sort (Part 5) | front holds the smallest values in final places; same comparisons for any order | thinking sorted input saves work |
| Insertion sort (Part 5) | front holds the first values sorted; fast on nearly sorted data | confusing its passes with selection sort's |
| Recursion and merge sort (Part 5) | base case plus a call that moves toward it; split, sort halves, merge | missing or unreachable base case |
      `
    },
    {
      id: 'csaarray7-worked',
      type: 'text' as const,
      content: `
## Worked Example: One Array, Four Algorithms

\`int[] data = {14, 3, 9, 3, 20, 6};\`

**Step 1 — Minimum with index.** Starting from index 0 and testing \`data[i] < data[minIndex]\`, the index moves to 1 (value 3) and stays there: the 3 at index 3 only ties, and \`<\` keeps the first one. Result: index 1.

**Step 2 — Frequency of the minimum.** \`countOf(data, 3)\` returns 2.

**Step 3 — Insertion sort.**

| Pass (j) | temp | Array after the pass |
|---|---|---|
| 1 | 3 | \`{3, 14, 9, 3, 20, 6}\` |
| 2 | 9 | \`{3, 9, 14, 3, 20, 6}\` |
| 3 | 3 | \`{3, 3, 9, 14, 20, 6}\` |
| 4 | 20 | \`{3, 3, 9, 14, 20, 6}\` |
| 5 | 6 | \`{3, 3, 6, 9, 14, 20}\` |

Insertion sort makes 11 comparisons here. Selection sort on the same six values would make 5 + 4 + 3 + 2 + 1 = 15. In pass 3 the second 3 stops behind the first one, because \`3 < 3\` is false.

**Step 4 — Binary search on the sorted array.** Searching \`{3, 3, 6, 9, 14, 20}\` for 20: mid = 2 (value 6), then low = 3 and mid = 4 (value 14), then low = 5 and mid = 5 (value 20). It returns 5 after examining 3 elements. Searching for 9 visits midpoints 2, 4 and 3 and returns 3.
      `
    },
    {
      id: 'csaarray7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

**Segment A**
\`\`\`java
int[] a = {5, 3, 8, 1};
for (int i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
        int temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
    }
}
\`\`\`

**Segment B**
\`\`\`java
int[] b = {2, 9, 4, 7, 6};
int total = 0;
for (int i = b.length - 1; i >= 0; i -= 2) {
    total += b[i];
}
\`\`\`

**Method C**
\`\`\`java
public static int countEven(int[] arr, int i) {
    if (i < 0) {
        return 0;
    }
    if (arr[i] % 2 == 0) {
        return 1 + countEven(arr, i - 1);
    }
    return countEven(arr, i - 1);
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does a contain after Segment A runs?',
            options: [
              '{3, 5, 1, 8}',
              '{1, 3, 5, 8}',
              '{3, 1, 5, 8}',
              '{3, 5, 8, 1}'
            ],
            correctAnswer: 0,
            explanation: 'The pass swaps 5 and 3, leaves 5 and 8, then swaps 8 and 1. One pass carries the largest value to the end but does not finish sorting.'
          },
          {
            question: 'What is the value of total after Segment B runs?',
            options: [
              '12',
              '16',
              '10',
              '28'
            ],
            correctAnswer: 0,
            explanation: 'The loop visits indexes 4, 2 and 0, adding 6 + 4 + 2. The value 16 would come from starting at index 3, and 10 from stopping before index 0.'
          },
          {
            question: 'What does countEven(new int[] {3, 4, 6, 7, 10}, 4) return?',
            options: [
              '3',
              '20',
              '2',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'The calls check indexes 4, 3, 2, 1 and 0, adding 1 for each of 10, 6 and 4, and the call with i = -1 returns 0. The value 20 is the sum of the even numbers, not their count.'
          }
        ]
      }
    },
    {
      id: 'csaarray7-reference',
      type: 'text' as const,
      content: `
## Count Reference

| Algorithm | Comparisons or passes for n elements |
|---|---|
| Linear search | k for a target found at the k-th element checked; n when the target is missing |
| Binary search | at most 3 for n = 7, 4 for 15, 7 for 100, 10 for 1,000 |
| Selection sort | (n - 1) + (n - 2) + ... + 1 = n(n - 1) / 2, for any starting order |
| Insertion sort | n - 1 when already sorted; n(n - 1) / 2 when in reverse order |
| Duplicate check, every pair | up to n(n - 1) / 2; fewer when a duplicate is found early |
| Recursive sum from index 0 | n + 1 calls |

## Error Catalogue

| Symptom | Likely cause | Fix |
|---|---|---|
| ArrayIndexOutOfBoundsException on the last pass | the body uses \`i + 1\` with \`i < arr.length\` | stop at \`arr.length - 1\` |
| one value fills the whole array | shifting right with a forward loop | loop backward |
| average is a whole number | int division | cast to double before dividing |
| any/all method answers from the first element | return in both branches inside the loop | return the default after the loop |
| binary search misses a present value | the array is not sorted, or the low/high updates are wrong | sort first; use mid + 1 and mid - 1 |
| StackOverflowError | no base case, or the recursive call does not move toward it | add or fix the base case |

> 🎯 **AP Connection:** When two answer choices differ only at one index, retrace that single index carefully. Exam distractors are built from the off-by-one, wrong-direction and missing-save mistakes in this table.
      `
    },
    {
      id: 'csaarray7-quick',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Binary search on a sorted array of 63 values examines at most ___ elements',
            options: ['6', '63', '32', '7']
          },
          {
            label: 'To find the largest value in any nonempty array, start max at ___',
            options: ['arr[0]', '0', '-1', 'arr.length']
          },
          {
            label: 'Selection sort on an array of 6 values makes ___ comparisons',
            options: ['15', '36', '30', '21']
          }
        ],
        correctAnswers: ['6', 'arr[0]', '15'],
        hint1: 'The ranges shrink 63, 31, 15, 7, 3, 1.',
        hint2: 'The starting value must be an element of the array.',
        hint3: 'Add 5 + 4 + 3 + 2 + 1.',
        explanation: 'Each binary search pass leaves at most half of the range, so 63 values need at most 6 passes. Starting max at arr[0] works for every nonempty array. Selection sort compares 5 + 4 + 3 + 2 + 1 = 15 times regardless of the data.'
      }
    },
    {
      id: 'csaarray7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What must be true of an array before binary search can be used on it?',
            options: [
              'It is sorted',
              'It has an odd number of elements',
              'It contains no repeated values',
              'Its length is a power of two'
            ],
            correctAnswer: 0,
            explanation: 'Binary search discards half the range by comparing with the middle element, which only makes sense when the values are in order. Repeats and any length are fine.'
          },
          {
            question: 'What does a recursive method need so that its calls eventually stop?',
            options: [
              'A base case it always reaches',
              'A return statement inside a loop',
              'A parameter that is an array or a String',
              'A call to itself as its very last statement'
            ],
            correctAnswer: 0,
            explanation: 'The base case answers without another call, and each recursive call must move closer to it. Without that, the calls continue until a StackOverflowError.'
          },
          {
            question: 'Which statement describes how mergeSortHelper works?',
            options: [
              'It sorts each half recursively, then combines the sorted halves',
              'It swaps the smallest value into place on each pass',
              'It shifts each value left until it finds its spot',
              'It needs the data to be sorted before it begins'
            ],
            correctAnswer: 0,
            explanation: 'mergeSortHelper calls itself on the left half and the right half, then merges them. Swapping the smallest value into place is selection sort, and shifting values into position is insertion sort.'
          },
          {
            question: 'Why can binary search miss a value that is present in an unsorted array?',
            options: [
              'It discards half of the range based on an order that is not there',
              'It checks only the elements stored at even indexes',
              'It stops at the first value larger than the target',
              'It compares int values with equals instead of =='
            ],
            correctAnswer: 0,
            explanation: 'Each comparison with the middle element rules out one half on the assumption that smaller values are on the left. In unsorted data that assumption is false, so the half it discards may hold the target.'
          }
        ]
      }
    }
  ]
}
