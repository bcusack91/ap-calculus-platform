export const csaArraysPart5Data = {
  topicSlug: 'csa-arrays',
  sections: [
    {
      id: 'csaarray5-intro',
      type: 'text' as const,
      content: `
# 📊 Array Algorithms

**Part 5 of 7 — Sorting and Recursion: Selection, Insertion, Merge Sort**

---

This part covers the three sorting algorithms in the course and the idea that two of the search and sort algorithms depend on: **recursion**.

| CED topic | In this part |
|---|---|
| 4.15 Sorting algorithms | selection sort pass by pass, insertion sort code and trace, comparison counts |
| 4.16 Recursion | base case and recursive call, tracing calls and return values |
| 4.17 Recursive searching and sorting | merge sort, recursive binary search |

> 🔑 **Key Concept:** On the exam you **trace** these algorithms: predict the array after a given pass, count comparisons, or follow recursive calls. You are not asked to write merge sort or other recursive code from scratch.
      `
    },
    {
      id: 'csaarray5-sorts',
      type: 'text' as const,
      content: `
## Selection Sort, Pass by Pass

Part 1 showed the code. Each pass i finds the smallest value in \`arr[i]\` through the end and swaps it into position i. Tracing \`{29, 10, 14, 37, 13}\`:

| Pass (i) | Smallest in the unsorted part | Swap | Array after the pass |
|---|---|---|---|
| 0 | 10 at index 1 | indexes 0 and 1 | \`{10, 29, 14, 37, 13}\` |
| 1 | 13 at index 4 | indexes 1 and 4 | \`{10, 13, 14, 37, 29}\` |
| 2 | 14 at index 2 | with itself | \`{10, 13, 14, 37, 29}\` |
| 3 | 29 at index 4 | indexes 3 and 4 | \`{10, 13, 14, 29, 37}\` |

After pass i, positions 0 through i hold the smallest values in the whole array, in their **final** places. The inner loop makes 4 + 3 + 2 + 1 = 10 comparisons no matter how the data starts.

## Insertion Sort

Insertion sort keeps a sorted section at the front. Each pass takes the next element, shifts every larger element in the sorted section one place right, and drops the element into the gap.

\`\`\`java
public static void insertionSort(int[] arr) {
    for (int j = 1; j < arr.length; j++) {
        int temp = arr[j];
        int possibleIndex = j;
        while (possibleIndex > 0 && temp < arr[possibleIndex - 1]) {
            arr[possibleIndex] = arr[possibleIndex - 1];
            possibleIndex--;
        }
        arr[possibleIndex] = temp;
    }
}
\`\`\`

Tracing \`{29, 10, 14, 37, 13}\`. A comparison is one evaluation of \`temp < arr[possibleIndex - 1]\`.

| Pass (j) | temp | Shifted right | temp placed at | Array after the pass | Comparisons |
|---|---|---|---|---|---|
| 1 | 10 | 29 | index 0 | \`{10, 29, 14, 37, 13}\` | 1 |
| 2 | 14 | 29 | index 1 | \`{10, 14, 29, 37, 13}\` | 2 |
| 3 | 37 | nothing | index 3 | \`{10, 14, 29, 37, 13}\` | 1 |
| 4 | 13 | 37, 29, 14 | index 1 | \`{10, 13, 14, 29, 37}\` | 4 |

In pass 1, after 29 shifts, possibleIndex is 0, so \`possibleIndex > 0\` is false and short-circuit evaluation skips the comparison that would read \`arr[-1]\`. The total is 8 comparisons.

## Comparing the Two Sorts

| Data | Selection sort comparisons | Insertion sort comparisons |
|---|---|---|
| \`{1, 2, 3, 4, 5}\` (already sorted) | 10 | 4 |
| \`{5, 4, 3, 2, 1}\` (reverse order) | 10 | 10 |
| \`{29, 10, 14, 37, 13}\` | 10 | 8 |
| 10 values, already sorted | 45 | 9 |
| 10 values, reverse order | 45 | 45 |

Selection sort always scans the whole unsorted part, so its count depends only on the length. Insertion sort stops each pass as soon as temp finds its place, so nearly sorted data makes it fast and reverse-ordered data is its worst case.

> 🎯 **AP Connection:** To tell the sorts apart from a partly sorted array: after k passes, selection sort's front holds the k **smallest** values of the whole array, while insertion sort's front holds the first k + 1 **original** values in sorted order.
      `
    },
    {
      id: 'csaarray5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

The array \`{7, 2, 9, 4, 5}\` is sorted in increasing order.
      `,
      exercise: {
        questions: [
          {
            question: 'What does the array contain after the first two passes of selection sort?',
            options: [
              '{2, 4, 9, 7, 5}',
              '{2, 4, 5, 7, 9}',
              '{2, 7, 9, 4, 5}',
              '{2, 4, 7, 9, 5}'
            ],
            correctAnswer: 0,
            explanation: 'Pass 0 swaps the smallest value, 2, into index 0. Pass 1 finds 4 at index 3 and swaps it with the 7 at index 1, leaving 9, 7 and 5 unsorted.'
          },
          {
            question: 'What does the array contain after the first two passes of insertion sort?',
            options: [
              '{2, 7, 9, 4, 5}',
              '{2, 4, 9, 7, 5}',
              '{2, 4, 7, 9, 5}',
              '{2, 7, 4, 9, 5}'
            ],
            correctAnswer: 0,
            explanation: 'Pass 1 inserts 2 in front of 7, and pass 2 finds that 9 is already larger than 7, so nothing moves. Only the first three original values have been sorted so far.'
          },
          {
            question: 'An array of 50 values is already in increasing order. Which statement about sorting it is true?',
            options: [
              'Insertion sort makes 49 comparisons and selection sort makes 1,225',
              'Both sorts make 49 comparisons since no values need to move',
              'Both sorts make 1,225 comparisons on any input of that size',
              'Selection sort makes 49 comparisons, insertion sort 1,225'
            ],
            correctAnswer: 0,
            explanation: 'Each insertion sort pass makes one comparison and stops, giving 49. Selection sort still scans the whole unsorted part on every pass: 49 + 48 + ... + 1 = 1,225.'
          }
        ]
      }
    },
    {
      id: 'csaarray5-recursion',
      type: 'text' as const,
      content: `
## Recursion: A Method That Calls Itself

A **recursive method** is a method that calls itself (CED Topic 4.16). Every recursive method needs two parts:

| Part | Job |
|---|---|
| Base case | an input simple enough to answer directly, with no recursive call |
| Recursive call | a call on a smaller or simpler version of the problem, moving toward the base case |

Without a base case, or with a call that never moves toward it, the calls never stop. This is **infinite recursion**, and the program crashes with a StackOverflowError. Any recursive method can also be written with a loop.

### Example 1: Sum of an Array from Index i

\`\`\`java
public static int sum(int[] arr, int i) {
    if (i == arr.length) {
        return 0;                       // base case: no elements left
    }
    return arr[i] + sum(arr, i + 1);    // this element plus the rest
}
\`\`\`

Calling \`sum(arr, 0)\` with \`arr = {4, 7, 2}\`:

| Call | i | Returns |
|---|---|---|
| \`sum(arr, 0)\` | 0 | 4 + sum(arr, 1) = 4 + 9 = **13** |
| \`sum(arr, 1)\` | 1 | 7 + sum(arr, 2) = 7 + 2 = 9 |
| \`sum(arr, 2)\` | 2 | 2 + sum(arr, 3) = 2 + 0 = 2 |
| \`sum(arr, 3)\` | 3 | 0 (base case) |

Read the table **down** to see the calls being made and **up** to see the values coming back. Each call has its own copy of the parameter i, so four different i values exist at the deepest point. A 3-element array takes 4 calls, one more than its length.

### Example 2: Work Before and After the Call

\`\`\`java
public static void echo(int n) {
    if (n > 0) {
        System.out.print(n + " ");
        echo(n - 1);
        System.out.print(n + " ");
    }
}
\`\`\`

\`echo(3)\` prints \`3 2 1 1 2 3 \`. The base case is n = 0, which does nothing. The first print runs on the way **down**, as each call starts (3, 2, 1). The second print waits until the call it follows has completely finished, so it runs on the way back **up**, deepest call first (1, 2, 3).

### Example 3: Recursion on a String

\`\`\`java
public static String reverse(String s) {
    if (s.length() <= 1) {
        return s;
    }
    return reverse(s.substring(1)) + s.substring(0, 1);
}
\`\`\`

\`reverse("code")\` calls \`reverse("ode")\`, which calls \`reverse("de")\`, which calls \`reverse("e")\`, the base case. The returns build the answer from the inside out: "e", then "e" + "d" = "ed", then "ed" + "o" = "edo", and finally "edo" + "c" = "edoc".
      `
    },
    {
      id: 'csaarray5-trace',
      type: 'input-boxes' as const,
      content: `
**Trace the Recursion** ✍️

\`\`\`java
public static int digitSum(int n) {
    if (n < 10) {
        return n;
    }
    return digitSum(n / 10) + n % 10;
}

public static int f(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * f(n - 2);
}
\`\`\`

1) What does \`digitSum(375)\` return? _______

2) What does \`f(7)\` return? _______

3) For an array of 5 elements, how many calls to \`sum\`, including the first, does \`sum(arr, 0)\` make? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '105', '6'],
        hint1: 'digitSum(375) is digitSum(37) + 5, and digitSum(37) is digitSum(3) + 7.',
        hint2: 'f(7) is 7 * f(5), and the calls continue down to f(1).',
        hint3: 'The calls use i = 0, 1, 2, 3, 4, and then one more call for the base case.',
        explanation: 'digitSum adds the last digit to the digit sum of the rest: 3 + 7 + 5 = 15. f(7) = 7 * 5 * 3 * f(1) = 105. sum makes one call for each index 0 to 4 plus the base-case call with i = 5, for 6 calls.'
      }
    },
    {
      id: 'csaarray5-mergesort',
      type: 'text' as const,
      content: `
## Merge Sort

Merge sort is a recursive sorting algorithm (CED Topic 4.17):

1. If the range has one element, it is already sorted (the base case).
2. Otherwise, split the range in half and merge sort each half (two recursive calls).
3. Merge the two sorted halves into one sorted range.

\`\`\`java
public static void mergeSort(int[] arr) {
    int[] temp = new int[arr.length];
    mergeSortHelper(arr, 0, arr.length - 1, temp);
}

private static void mergeSortHelper(int[] arr, int from, int to, int[] temp) {
    if (from < to) {
        int middle = (from + to) / 2;
        mergeSortHelper(arr, from, middle, temp);
        mergeSortHelper(arr, middle + 1, to, temp);
        merge(arr, from, middle, to, temp);
    }
}
\`\`\`

The \`merge\` method (not shown) repeatedly compares the front values of the two sorted halves, copies the smaller one into \`temp\`, then copies any leftovers and finally copies \`temp\` back into \`arr\`.

### The Merge Step

Merging the sorted halves \`{2, 5, 6, 8}\` and \`{1, 3, 7, 9}\`:

| Fronts compared | Taken | Merged so far |
|---|---|---|
| 2 and 1 | 1 | 1 |
| 2 and 3 | 2 | 1 2 |
| 5 and 3 | 3 | 1 2 3 |
| 5 and 7 | 5 | 1 2 3 5 |
| 6 and 7 | 6 | 1 2 3 5 6 |
| 8 and 7 | 7 | 1 2 3 5 6 7 |
| 8 and 9 | 8 | 1 2 3 5 6 7 8 |
| left half is empty | 9 | 1 2 3 5 6 7 8 9 |

That merge makes 7 comparisons. Because each half is already sorted, the smallest remaining value is always at one of the two fronts.

### Array States for \`{5, 2, 8, 6, 1, 9, 3, 7}\`

| Merge | Halves merged (index ranges) | Array afterward |
|---|---|---|
| 1 | 0 to 0 with 1 to 1 | \`{2, 5, 8, 6, 1, 9, 3, 7}\` |
| 2 | 2 to 2 with 3 to 3 | \`{2, 5, 6, 8, 1, 9, 3, 7}\` |
| 3 | 0 to 1 with 2 to 3 | \`{2, 5, 6, 8, 1, 9, 3, 7}\` |
| 4 | 4 to 4 with 5 to 5 | \`{2, 5, 6, 8, 1, 9, 3, 7}\` |
| 5 | 6 to 6 with 7 to 7 | \`{2, 5, 6, 8, 1, 9, 3, 7}\` |
| 6 | 4 to 5 with 6 to 7 | \`{2, 5, 6, 8, 1, 3, 7, 9}\` |
| 7 | 0 to 3 with 4 to 7 | \`{1, 2, 3, 5, 6, 7, 8, 9}\` |

The left half is completely sorted before any work happens on the right half, because the first recursive call must finish before the second one starts. Some merges change nothing when the halves are already in order. On large arrays that are not already nearly sorted, merge sort makes far fewer comparisons than selection or insertion sort, at the cost of the extra \`temp\` array.

## Recursive Binary Search

\`\`\`java
public static int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) {
        return -1;                       // base case: empty range
    }
    int mid = (low + high) / 2;
    if (arr[mid] == target) {
        return mid;                      // base case: found
    } else if (target < arr[mid]) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }
}
\`\`\`

The first call is \`binarySearch(arr, target, 0, arr.length - 1)\`. Each recursive call replaces one pass of the while loop from Part 4, so it visits exactly the same midpoints. With \`d = {3, 8, 12, 17, 21, 26, 30, 35, 41, 47, 52}\`:

| Target | Calls (low, high) | Midpoints | Returns |
|---|---|---|---|
| 47 | (0, 10), (6, 10), (9, 10) | 5, 8, 9 | 9 |
| 20 | (0, 10), (0, 4), (3, 4), (4, 4), (4, 3) | 5, 2, 3, 4 | -1 |

The found index is returned by the deepest call and passed back unchanged by every call above it, because each one says \`return binarySearch(...)\`.
      `
    },
    {
      id: 'csaarray5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'mergeSort is called on {6, 4, 9, 1, 7}. What does the array contain just before the final merge?',
            options: [
              '{4, 6, 9, 1, 7}',
              '{4, 6, 1, 7, 9}',
              '{6, 4, 9, 1, 7}',
              '{1, 4, 6, 9, 7}'
            ],
            correctAnswer: 0,
            explanation: 'The left half, indexes 0 to 2, is sorted first into 4, 6, 9, and the right half, indexes 3 and 4, is already in order as 1, 7. The final merge combines those two halves.'
          },
          {
            question: 'Which change to echo makes echo(3) print 1 2 3 and nothing else?',
            options: [
              'Delete the print that comes before the recursive call',
              'Delete the print that comes after the recursive call',
              'Delete the if statement but keep both prints',
              'Call echo(n + 1) instead of echo(n - 1)'
            ],
            correctAnswer: 0,
            explanation: 'The print after the call runs on the way back up, deepest call first, which prints 1 2 3. Deleting it instead leaves 3 2 1, while deleting the if or calling echo(n + 1) means the base case is never reached.'
          },
          {
            question: 'The recursive binarySearch looks for 8 in d. How many calls are made, including the first one?',
            options: [
              '4',
              '3',
              '5',
              '11'
            ],
            correctAnswer: 0,
            explanation: 'The calls use the ranges (0, 10), (0, 4), (0, 1) and (1, 1), with midpoints 5, 2, 0 and 1. The fourth call finds 8 at index 1.'
          }
        ]
      }
    }
  ]
}
