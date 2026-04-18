export const csaArrayPart1Data = {
  topicSlug: 'csa-array',
  sections: [
    {
      id: 'csaar1-intro',
      type: 'text' as const,
      content: `
# 📊 Arrays

**Part 1 of 7 — Declaration, Initialization, and Traversal**

---

## Array Basics

\`\`\`java
// Declaration and initialization
int[] scores = new int[5];           // {0, 0, 0, 0, 0}
int[] grades = {95, 87, 92, 78, 88}; // Literal initialization

// Accessing elements
scores[0] = 100;     // Set first element
int val = grades[2]; // Get third element (92)

// Length (field, not method!)
int size = grades.length;  // 5 (no parentheses!)
\`\`\`

> 🔑 **Arrays are fixed-size** — once created, an array cannot grow or shrink. Use \`ArrayList\` for dynamic sizing.

---

## Array Properties

| Property | Detail |
|----------|--------|
| **Zero-indexed** | First element at index 0, last at length - 1 |
| **Fixed size** | Cannot change size after creation |
| **Default values** | int: 0, double: 0.0, boolean: false, objects: null |
| **Length** | \`arr.length\` (field, no parentheses) |
| **Type safety** | All elements must be the same type |

### Common Error: ArrayIndexOutOfBoundsException
\`\`\`java
int[] arr = new int[5];
arr[5] = 10;  // ERROR! Valid indices are 0-4
arr[-1] = 5;  // ERROR! No negative indices
\`\`\`
      `
    },
    {
      id: 'csaar1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the default value of elements in new int[10]?',
            options: [
              '-1',
              'null',
              '0',
              'Undefined'
            ],
            correctAnswer: 2,
            explanation: 'When an int array is created with new, all elements are initialized to 0. double arrays default to 0.0, boolean arrays to false, and object arrays to null.'
          },
          {
            question: 'int[] arr = {10, 20, 30}; What is arr.length?',
            options: [
              '2',
              '3',
              '4',
              '30'
            ],
            correctAnswer: 1,
            explanation: 'The array has 3 elements. arr.length returns the total number of elements (3), not the last index (2). Note: length is a field (no parentheses), unlike String length().'
          }
        ]
      }
    },
    {
      id: 'csaar1-content',
      type: 'text' as const,
      content: `
## Array Traversal

### Standard For Loop (Most Common)
\`\`\`java
int[] arr = {3, 7, 2, 9, 5};

// Forward traversal
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Backward traversal
for (int i = arr.length - 1; i >= 0; i--) {
    System.out.println(arr[i]);
}
\`\`\`

### Enhanced For Loop (For-Each)
\`\`\`java
for (int value : arr) {
    System.out.println(value);
}
\`\`\`

### When to Use Which Loop?

| Use Standard For Loop When: | Use Enhanced For Loop When: |
|----------------------------|---------------------------|
| You need the index | You only need the values |
| You need to modify elements | You are just reading elements |
| You traverse backwards | Forward traversal is fine |
| You process two arrays simultaneously | Processing one array simply |

## Common Array Algorithms

| Algorithm | Approach |
|-----------|---------|
| **Sum/Average** | Accumulator pattern: sum += arr[i] |
| **Find max/min** | Start with arr[0], compare each element |
| **Search** | Linear search: check each element |
| **Count matches** | Counter pattern with if condition |
      `
    },
    {
      id: 'csaar1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In Java, array indices start at _______ and end at length - 1.

2) To get the number of elements in an array arr, use arr._______ (no parentheses).

3) Trying to access an index outside the valid range causes an _______ exception.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', 'length', 'ArrayIndexOutOfBoundsException'],
        hint1: 'Zero-based indexing.',
        hint2: 'A field property, not a method.',
        hint3: 'The index is out of bounds of the array.',
        explanation: 'Arrays start at index 0. arr.length (no parentheses). ArrayIndexOutOfBoundsException for invalid indices.'
      }
    },
    {
      id: 'csaar1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Right Approach** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To set each element of an array to its index value, use a ___',
            options: ['Standard for loop (need index to assign values)', 'Enhanced for-each loop', 'While loop only', 'Do-while loop only']
          },
          {
            label: 'After int[] a = new int[3]; the values are ___',
            options: ['{0, 0, 0}', '{1, 2, 3}', '{null, null, null}', 'Uninitialized (random)']
          },
          {
            label: 'arr.length vs. str.length(): the array version ___',
            options: ['Has no parentheses (it is a field)', 'Has parentheses (it is a method)', 'Returns the last index', 'Returns the number of non-zero elements']
          }
        ],
        correctAnswers: ['Standard for loop (need index to assign values)', '{0, 0, 0}', 'Has no parentheses (it is a field)'],
        hint1: 'You need the index i to do arr[i] = i.',
        hint2: 'int arrays default to 0.',
        hint3: 'arr.length vs. str.length() — spot the difference.',
        explanation: 'Need index → standard for. int[] defaults to 0s. arr.length is a field (no parens).'
      }
    },
    {
      id: 'csaar1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Arrays

- **arr.length** (no parentheses) vs **str.length()** (has parentheses) — this is tested every year
- Enhanced for loop CANNOT modify array elements — it only reads copies of values
- Common error: for (int i = 0; i <= arr.length; i++) — the \`<=\` causes ArrayIndexOutOfBoundsException
- Know all standard array algorithms: sum, average, max, min, search, count, shift, reverse
- Arrays are **reference types** — assigning one array to another creates an alias, not a copy
      `
    },
    {
      id: 'csaar1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of max after this code?\nint[] arr = {4, 8, 2, 9, 1};\nint max = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    if (arr[i] > max) {\n        max = arr[i];\n    }\n}',
            options: [
              '4',
              '8',
              '9',
              '1'
            ],
            correctAnswer: 2,
            explanation: 'max starts at 4. Then: 8 > 4 (max=8), 2 > 8 (no), 9 > 8 (max=9), 1 > 9 (no). Final max = 9. Starting i at 1 is efficient since max already has arr[0].'
          },
          {
            question: 'What does this enhanced for loop print?\nint[] nums = {5, 10, 15};\nfor (int n : nums) {\n    n = n * 2;\n}\nSystem.out.println(nums[1]);',
            options: [
              '10',
              '20',
              '15',
              '30'
            ],
            correctAnswer: 0,
            explanation: 'The enhanced for loop variable n is a COPY of each element. Modifying n does not change the original array. nums[1] remains 10.'
          }
        ]
      }
    }
  ]
};
