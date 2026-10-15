export const csaArraysPart4Data = {
  topicSlug: 'csa-arrays',
  sections: [
    {
      id: 'csaarray4-intro',
      type: 'text' as const,
      content: `
# 📊 Array Algorithms

**Part 4 of 7 — Searching: Linear Search Variants and Binary Search**

---

Part 1 wrote the basic linear search: check each element from the front and return the first matching index, or -1. This part covers the variations the exam uses (CED Topic 4.14) and then a much faster search for **sorted** data, binary search (CED Topic 4.17).

| In this part |
|---|
| Searching from the back, and searching with a while loop |
| Searching arrays of String and arrays of objects |
| Binary search: the code and a full trace |
| Counting the elements each search examines |
| When binary search gives a wrong answer |
      `
    },
    {
      id: 'csaarray4-linear',
      type: 'text' as const,
      content: `
## Linear Search Variants

### The Last Occurrence: Search Backward

\`\`\`java
public static int lastIndexOf(int[] arr, int target) {
    for (int i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
\`\`\`

With \`int[] w = {12, 5, 9, 5, 30, 7};\`, here is what each search returns and how many elements it compares:

| target | First index (comparisons) | Last index (comparisons) |
|---|---|---|
| 5 | 1 (2) | 3 (3) |
| 30 | 4 (5) | 4 (2) |
| 8 | -1 (6) | -1 (6) |

A search that finds its target at the k-th element it checks makes k comparisons. A search for a missing value checks all n elements.

### Searching with a while Loop

\`\`\`java
int i = 0;
while (i < arr.length && arr[i] != target) {
    i++;
}
// now i is the first matching index, or arr.length if there is no match
\`\`\`

The loop stops for one of two reasons, so the code after it must check which: \`i < arr.length\` means the target was found at index i. The **order** of the two tests matters. With \`arr[i] != target && i < arr.length\`, a missing target drives i to \`arr.length\`, and \`arr[i]\` is evaluated before the bounds test, throwing an ArrayIndexOutOfBoundsException. In the correct order, short-circuit evaluation skips \`arr[i]\` once \`i < arr.length\` is false.

### Arrays of String

\`\`\`java
public static int find(String[] names, String target) {
    for (int i = 0; i < names.length; i++) {
        if (names[i].equals(target)) {
            return i;
        }
    }
    return -1;
}
\`\`\`

Use \`equals\`, not \`==\`. The \`==\` operator checks whether two variables refer to the **same object**, so two separate String objects with the same letters can compare as not equal.

### Arrays of Objects: Search by an Accessor

Assume a \`Book\` class with a \`getTitle()\` method.

\`\`\`java
public static Book findByTitle(Book[] shelf, String title) {
    for (Book b : shelf) {
        if (b.getTitle().equals(title)) {
            return b;
        }
    }
    return null;
}
\`\`\`

The method returns the matching **object**, or \`null\` if there is none. Code that calls it must check for null before calling a method on the result, or it risks a NullPointerException.

> 🎯 **AP Connection:** Free-response questions often search a collection of objects using an accessor such as \`getName()\` or \`getScore()\`. The pattern is the same for an array and for a list: compare String results with \`equals\` and number results with \`==\`.
      `
    },
    {
      id: 'csaarray4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use \`int[] w = {12, 5, 9, 5, 30, 7};\` and the code above.
      `,
      exercise: {
        questions: [
          {
            question: 'What does lastIndexOf(w, 5) return, and how many elements does it compare?',
            options: [
              '3, after 3 comparisons',
              '1, after 2 comparisons',
              '3, after 4 comparisons',
              '1, after 5 comparisons'
            ],
            correctAnswer: 0,
            explanation: 'The backward loop checks 7, then 30, then the 5 at index 3, and returns there. Index 1 is the first occurrence, which the backward search never reaches.'
          },
          {
            question: 'The while-loop search is rewritten with the condition arr[i] != target && i < arr.length. What happens when the target is missing?',
            options: [
              'It throws an ArrayIndexOutOfBoundsException',
              'It stops with i equal to arr.length',
              'It stops with i equal to -1',
              'It keeps running forever'
            ],
            correctAnswer: 0,
            explanation: 'When i reaches arr.length, arr[i] is evaluated first and that index is out of bounds. In the original order, the false bounds test short-circuits the && so arr[i] is never read.'
          },
          {
            question: 'Why does findByTitle compare titles with equals rather than ==?',
            options: [
              'equals compares the characters of both titles',
              '== does not compile when used on a method call',
              'equals is faster than == on long String values',
              '== compares only the first letter of each title'
            ],
            correctAnswer: 0,
            explanation: 'The equals method compares the contents of two Strings, while == checks whether both sides refer to the same object. Using == on two Strings compiles, which is why the bug is easy to miss.'
          }
        ]
      }
    },
    {
      id: 'csaarray4-binary',
      type: 'text' as const,
      content: `
## Binary Search

Binary search works only on an array that is **sorted**. It checks the middle element and, depending on the result, throws away the half of the remaining range that cannot contain the target.

\`\`\`java
public static int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;              // target can only be to the right
        } else {
            high = mid - 1;             // target can only be to the left
        }
    }
    return -1;
}
\`\`\`

\`(low + high) / 2\` is int division, so the middle of an even-sized range rounds **down**. The updates \`mid + 1\` and \`mid - 1\` drop arr[mid] itself, because it has already been checked.

### Trace 1: A Target That Is Present

\`int[] d = {3, 8, 12, 17, 21, 26, 30, 35, 41, 47, 52};\` (indexes 0 to 10), searching for 35:

| Pass | low | high | mid | d[mid] | Action |
|---|---|---|---|---|---|
| 1 | 0 | 10 | 5 | 26 | 26 < 35, so low = 6 |
| 2 | 6 | 10 | 8 | 41 | 41 > 35, so high = 7 |
| 3 | 6 | 7 | 6 | 30 | 30 < 35, so low = 7 |
| 4 | 7 | 7 | 7 | 35 | found: return 7 |

Midpoints visited: 5, 8, 6, 7.

### Trace 2: A Target That Is Missing

Searching the same array for 10:

| Pass | low | high | mid | d[mid] | Action |
|---|---|---|---|---|---|
| 1 | 0 | 10 | 5 | 26 | 26 > 10, so high = 4 |
| 2 | 0 | 4 | 2 | 12 | 12 > 10, so high = 1 |
| 3 | 0 | 1 | 0 | 3 | 3 < 10, so low = 1 |
| 4 | 1 | 1 | 1 | 8 | 8 < 10, so low = 2 |
| — | 2 | 1 | — | — | low > high: the loop ends and the method returns -1 |

Midpoints visited: 5, 2, 0, 1. The loop ends when low passes high, which means the range that could hold the target is empty. At that moment low is the index where 10 **would** be inserted to keep the array sorted.
      `
    },
    {
      id: 'csaarray4-midpoints',
      type: 'dropdown-select' as const,
      content: `
**Trace the Midpoints** 🔍

Use the sorted array \`d\` from the traces above.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Searching d for 47, the midpoints visited are ___',
            options: ['5, 8, 9', '5, 8, 10', '5, 7, 9', '5, 9, 10']
          },
          {
            label: 'Searching d for 20, the loop ends with low and high equal to ___',
            options: ['4 and 3', '3 and 4', '3 and 3', '4 and 4']
          },
          {
            label: 'Searching d for 3, the search examines ___ elements',
            options: ['3', '4', '1', '6']
          }
        ],
        correctAnswers: ['5, 8, 9', '4 and 3', '3'],
        hint1: 'After mid 5 the range is 6 to 10, and after mid 8 it is 9 to 10.',
        hint2: 'The midpoints are 5, 2, 3 and 4, and 21 at index 4 is greater than 20.',
        hint3: 'Each pass moves high left of mid: from 10 to 4, then to 1.',
        explanation: 'For 47 the ranges are 0 to 10, 6 to 10 and 9 to 10, so the midpoints are 5, 8 and 9. For 20 the last pass sets high = 3 while low is 4. For 3 the midpoints are 5, 2 and 0, so three elements are examined.'
      }
    },
    {
      id: 'csaarray4-counts',
      type: 'text' as const,
      content: `
## How Many Elements Does Each Search Examine?

Each binary search pass examines one element and at least halves the range that is left. Linear search examines elements one at a time.

| Search in \`d\` (11 elements) | Linear search examines | Binary search examines |
|---|---|---|
| 26 (index 5) | 6 | 1 |
| 35 (index 7) | 8 | 4 |
| 10 (missing) | 11 | 4 |

The largest number of passes binary search can need grows very slowly:

| Array length n | Linear search, worst case | Binary search, worst case |
|---|---|---|
| 7 | 7 | 3 |
| 15 | 15 | 4 |
| 100 | 100 | 7 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |

Doubling the length adds only **one** pass to binary search's worst case, while it doubles linear search's.

## When Binary Search Goes Wrong

| Situation | What happens | Example |
|---|---|---|
| Array not sorted | it can miss a value that is present | \`{9, 2, 7, 4, 5}\` searched for 9: midpoints 2, 3, 4, then -1, although 9 is at index 0 |
| Repeated values | it returns **an** index of the target, not necessarily the first | \`{2, 4, 4, 4, 9}\` searched for 4 returns 2, not 1 |
| \`low = mid\` instead of \`mid + 1\` | the range can stop shrinking, so the loop never ends | in \`d\`, searching for 52 gets stuck with low 9 and high 10 |
| Condition \`low < high\` | a one-element range is never checked | the last remaining candidate is skipped |

## Binary Search on Strings

A sorted array of String is searched the same way, using \`compareTo\` in place of \`<\` and \`>\`:

\`\`\`java
int cmp = words[mid].compareTo(target);
if (cmp == 0) {
    return mid;
} else if (cmp < 0) {
    low = mid + 1;       // words[mid] comes before target
} else {
    high = mid - 1;
}
\`\`\`

In \`{"ant", "bee", "cat", "dog", "eel", "fox", "gnu"}\`, a search for "eel" examines "dog" (index 3), "fox" (index 5) and then "eel" (index 4).

> 🎯 **AP Connection:** Exam questions ask which elements binary search examines, how many passes it makes, or what it returns for a missing value. Compute every midpoint with int division, and update low and high with mid + 1 and mid - 1 exactly as the code says.
      `
    },
    {
      id: 'csaarray4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`int[] e = {4, 9, 15, 22, 28, 33, 40, 46, 51};\` is searched with the binarySearch method.
      `,
      exercise: {
        questions: [
          {
            question: 'Which values of e[mid] are examined, in order, in a search for 30?',
            options: [
              '28, 40, 33',
              '28, 33, 40',
              '28, 15, 22',
              '28, 40, 46'
            ],
            correctAnswer: 0,
            explanation: 'The first midpoint is index 4, holding 28, so low becomes 5. The range 5 to 8 gives index 6, holding 40, so high becomes 5, and index 5 holds 33. Then low is 6 and high is 5, so the method returns -1.'
          },
          {
            question: 'A linear search and a binary search both look for 40 in e. How many more elements does the linear search examine?',
            options: [
              '5',
              '4',
              '7',
              '2'
            ],
            correctAnswer: 0,
            explanation: 'Linear search checks indexes 0 through 6, which is 7 elements. Binary search examines 28 at index 4 and then 40 at index 6, which is 2 elements, so the difference is 5.'
          },
          {
            question: 'A sorted array holds 1,000 values. What is the greatest number of elements binary search can examine in one search?',
            options: [
              '10',
              '500',
              '1,000',
              '100'
            ],
            correctAnswer: 0,
            explanation: 'Each pass at least halves the remaining range, and 1,000 values can be halved about ten times before the range is empty. Linear search, not binary search, can need all 1,000 checks.'
          },
          {
            question: 'The search of d for 10 in Trace 2 ended with low = 2 and high = 1. What does the final value of low tell you?',
            options: [
              'The index where 10 would be inserted to keep the order',
              'The number of elements that were examined',
              'The index of the last element examined',
              'The index of the largest smaller value'
            ],
            correctAnswer: 0,
            explanation: 'When the range becomes empty, every value left of low is smaller than 10 and every value from low onward is larger, so 10 belongs at index 2. Four elements were examined, and the last one was at index 1.'
          }
        ]
      }
    }
  ]
}
