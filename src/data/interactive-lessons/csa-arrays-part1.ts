export const csaArraysPart1Data = {
  topicSlug: 'csa-arrays',
  sections: [
    {
      id: 'csaas1-intro',
      type: 'text' as const,
      content: `
# 📊 Array Algorithms

**Part 1 of 7 — Searching, Shifting, and Array Manipulation**

---

## Linear Search

\`\`\`java
public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;  // Return index of target
        }
    }
    return -1;  // Not found
}
\`\`\`

| Property | Detail |
|----------|--------|
| **Best case** | Target is at index 0: 1 comparison |
| **Worst case** | Target not found: n comparisons |
| **Average case** | n/2 comparisons |
| **Works on** | Sorted or unsorted arrays |

---

## Shifting Elements

### Removing an Element (Shift Left)
\`\`\`java
// Remove element at index 2 from {10, 20, 30, 40, 50}
// Shift elements left to fill the gap
for (int i = 2; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
// Result: {10, 20, 40, 50, 50}
// Note: array size unchanged; last element duplicated
\`\`\`

### Inserting an Element (Shift Right)
\`\`\`java
// Insert 25 at index 2 in {10, 20, 30, 40, 50}
// Shift elements right first (start from end!)
for (int i = arr.length - 1; i > 2; i--) {
    arr[i] = arr[i - 1];
}
arr[2] = 25;
// Result: {10, 20, 25, 30, 40}
// Note: last element (50) is lost
\`\`\`

> 🔑 **Shifting direction matters!** Shift LEFT = go forward. Shift RIGHT = go backward to avoid overwriting.
      `
    },
    {
      id: 'csaas1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a linear search, what is returned if the target is NOT found in the array?',
            options: [
              '0',
              'null',
              '-1',
              'The last element'
            ],
            correctAnswer: 2,
            explanation: 'By convention, linear search returns -1 to indicate the target was not found. This is because 0 is a valid index, so it cannot be used as a "not found" indicator.'
          },
          {
            question: 'When inserting an element into an array by shifting right, you should start the shift from:',
            options: [
              'The beginning of the array',
              'The insertion point',
              'The end of the array (working backward)',
              'The middle of the array'
            ],
            correctAnswer: 2,
            explanation: 'Shifting right starting from the end prevents overwriting data. If you start from the insertion point, each shift overwrites the next element before it can be moved.'
          }
        ]
      }
    },
    {
      id: 'csaas1-content',
      type: 'text' as const,
      content: `
## Reversing an Array

\`\`\`java
public void reverse(int[] arr) {
    for (int i = 0; i < arr.length / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
\`\`\`

Key insight: Only loop through **half** the array. Swap element i with element (length - 1 - i).

## Consecutive Pairs

\`\`\`java
// Check if any consecutive elements are equal
public boolean hasConsecutiveDuplicates(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            return true;
        }
    }
    return false;
}
\`\`\`

> ⚠️ Loop to \`arr.length - 1\` (not \`arr.length\`) when comparing arr[i] with arr[i + 1] to avoid ArrayIndexOutOfBoundsException.

## Selection Sort (AP Exam Reference)

\`\`\`java
for (int i = 0; i < arr.length - 1; i++) {
    int minIdx = i;
    for (int j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    // Swap arr[i] and arr[minIdx]
    int temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
}
\`\`\`
      `
    },
    {
      id: 'csaas1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Linear search checks each element one by one and has worst-case complexity of _______ comparisons for an array of n elements.

2) When comparing consecutive pairs arr[i] and arr[i+1], the loop should run to arr.length - _______.

3) To swap two values, you need a _______ variable to hold one value temporarily.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['n', '1', 'temp'],
        hint1: 'It may need to check every single element.',
        hint2: 'Stopping one before the end prevents going out of bounds.',
        hint3: 'A holding variable for the swap.',
        explanation: 'Linear search = O(n) worst case. Loop to length - 1 for consecutive pairs. temp variable for swapping.'
      }
    },
    {
      id: 'csaas1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Algorithm** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find if a value exists in an unsorted array, use ___',
            options: ['Linear search', 'Binary search', 'Selection sort first', 'Hash lookup']
          },
          {
            label: 'When reversing an array in-place, the loop runs ___',
            options: ['arr.length / 2 times', 'arr.length times', 'arr.length - 1 times', '1 time']
          },
          {
            label: 'Selection sort finds the minimum of the unsorted portion and ___',
            options: ['Swaps it to the front of the unsorted portion', 'Inserts it at the end', 'Deletes it', 'Copies the entire array']
          }
        ],
        correctAnswers: ['Linear search', 'arr.length / 2 times', 'Swaps it to the front of the unsorted portion'],
        hint1: 'Binary search requires a sorted array.',
        hint2: 'Swap pairs from both ends toward the middle.',
        hint3: 'Select the minimum, place it in position.',
        explanation: 'Unsorted = linear search. Reverse loops halfway. Selection sort = find min, swap to front.'
      }
    },
    {
      id: 'csaas1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Array Algorithms

- **Linear search** returns -1 for not found — check the return value in conditionals
- **Shifting arrays** is a very common FRQ task — know both left and right shifts
- When shifting RIGHT, start from the END to avoid overwriting
- **Reversing** only needs length/2 iterations — do not double-swap!
- Know how to write a **swap** using a temp variable — this is fundamental
- Selection sort and insertion sort are on the AP quick reference — know how they work
      `
    },
    {
      id: 'csaas1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After running this code on arr = {1, 2, 3, 4, 5}, what is the array?\nfor (int i = 0; i < arr.length - 1; i++) {\n    arr[i] = arr[i + 1];\n}',
            options: [
              '{2, 3, 4, 5, 5}',
              '{1, 1, 2, 3, 4}',
              '{5, 4, 3, 2, 1}',
              '{2, 3, 4, 5, 1}'
            ],
            correctAnswer: 0,
            explanation: 'This shifts all elements LEFT by one position. arr[0]=arr[1]=2, arr[1]=arr[2]=3, arr[2]=arr[3]=4, arr[3]=arr[4]=5. The last element (arr[4]) remains 5. Result: {2,3,4,5,5}.'
          },
          {
            question: 'How many comparisons does selection sort make on an array of 5 elements?',
            options: [
              '5',
              '10',
              '25',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'Pass 1: 4 comparisons. Pass 2: 3 comparisons. Pass 3: 2 comparisons. Pass 4: 1 comparison. Total: 4+3+2+1 = 10. For n elements: n(n-1)/2 comparisons.'
          }
        ]
      }
    }
  ]
};
