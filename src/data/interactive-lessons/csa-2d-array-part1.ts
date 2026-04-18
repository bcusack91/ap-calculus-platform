export const csa2dArrayPart1Data = {
  topicSlug: 'csa-2d-array',
  sections: [
    {
      id: 'csa2d1-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Arrays

**Part 1 of 7 — Declaration, Access, and Row-Column Traversal**

---

## What Is a 2D Array?

A 2D array is an "array of arrays" — think of it as a table with rows and columns.

\`\`\`java
// Declaration and initialization
int[][] grid = new int[3][4];  // 3 rows, 4 columns (all 0s)

int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing elements
int val = matrix[1][2];  // Row 1, Column 2 = 6
matrix[0][0] = 10;       // Set top-left to 10
\`\`\`

### Visual Layout

|  | Col 0 | Col 1 | Col 2 |
|--|-------|-------|-------|
| **Row 0** | 1 | 2 | 3 |
| **Row 1** | 4 | 5 | 6 |
| **Row 2** | 7 | 8 | 9 |

> 🔑 **First index = row, Second index = column.** \`matrix[row][col]\` — always row first!

---

## Dimensions

\`\`\`java
int rows = matrix.length;       // Number of rows (3)
int cols = matrix[0].length;    // Number of columns in row 0 (3)
\`\`\`

| Property | Syntax | Description |
|----------|--------|-----------|
| **Number of rows** | \`arr.length\` | Length of the outer array |
| **Number of columns** | \`arr[0].length\` | Length of the first inner array |
| **Total elements** | rows x cols | 3 x 3 = 9 elements |
      `
    },
    {
      id: 'csa2d1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'int[][] grid = new int[4][5]; How many total elements does grid have?',
            options: [
              '4',
              '5',
              '9',
              '20'
            ],
            correctAnswer: 3,
            explanation: '4 rows x 5 columns = 20 total elements. grid.length = 4 (rows), grid[0].length = 5 (columns).'
          },
          {
            question: 'What is matrix[2][0] in the matrix {{1,2,3},{4,5,6},{7,8,9}}?',
            options: [
              '3',
              '7',
              '1',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'matrix[2][0] means row 2, column 0. Row 2 is {7, 8, 9}. Column 0 of that row is 7.'
          }
        ]
      }
    },
    {
      id: 'csa2d1-content',
      type: 'text' as const,
      content: `
## Traversing a 2D Array

### Row-Major Order (Standard)
\`\`\`java
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        System.out.print(matrix[r][c] + " ");
    }
    System.out.println();
}
// Output: 1 2 3
//         4 5 6
//         7 8 9
\`\`\`

### Column-Major Order
\`\`\`java
for (int c = 0; c < matrix[0].length; c++) {
    for (int r = 0; r < matrix.length; r++) {
        System.out.print(matrix[r][c] + " ");
    }
    System.out.println();
}
// Output: 1 4 7
//         2 5 8
//         3 6 9
\`\`\`

### Enhanced For Loop
\`\`\`java
for (int[] row : matrix) {
    for (int val : row) {
        System.out.print(val + " ");
    }
    System.out.println();
}
\`\`\`

| Traversal | Outer Loop | Inner Loop | Order |
|-----------|-----------|-----------|-------|
| **Row-major** | Rows | Columns | Left to right, top to bottom |
| **Column-major** | Columns | Rows | Top to bottom, left to right |
      `
    },
    {
      id: 'csa2d1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) To get the number of rows in a 2D array arr, use arr._______.

2) To get the number of columns, use arr[0]._______.

3) In matrix[r][c], the first index represents the _______ and the second represents the column.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['length', 'length', 'row'],
        hint1: 'Outer array length.',
        hint2: 'Inner array length.',
        hint3: 'Row comes first, then column.',
        explanation: 'arr.length = rows. arr[0].length = columns. First index = row.'
      }
    },
    {
      id: 'csa2d1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**2D Array Access** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Row-major traversal visits elements in order ___',
            options: ['Left to right, top to bottom (row by row)', 'Top to bottom, left to right (column by column)', 'Diagonal only', 'Random order']
          },
          {
            label: 'In the enhanced for loop "for (int[] row : matrix)", each row is ___',
            options: ['A 1D array (one row of the matrix)', 'A single integer', 'The row index', 'A 2D array']
          },
          {
            label: 'new int[3][4] creates a grid with ___ total elements',
            options: ['12', '7', '3', '4']
          }
        ],
        correctAnswers: ['Left to right, top to bottom (row by row)', 'A 1D array (one row of the matrix)', '12'],
        hint1: 'Process each row from left to right.',
        hint2: 'Each element of the outer array is a row (1D array).',
        hint3: '3 rows times 4 columns.',
        explanation: 'Row-major = row by row (L to R). Each row is a 1D array. 3 x 4 = 12 elements.'
      }
    },
    {
      id: 'csa2d1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: 2D Arrays

- Always remember: **arr[row][col]** — row FIRST
- \`arr.length\` = rows, \`arr[0].length\` = columns
- Row-major vs column-major traversal is regularly tested
- Enhanced for loop: outer variable is a 1D array (the row), inner variable is the element
- Common operations: sum all elements, find max/min, count matches, process specific row/column
- FRQ 4 often involves 2D arrays — practice traversal patterns thoroughly
      `
    },
    {
      id: 'csa2d1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the sum of all elements in this 2D array?\nint[][] m = {{1, 2}, {3, 4}, {5, 6}};\nint sum = 0;\nfor (int[] row : m) {\n    for (int val : row) {\n        sum += val;\n    }\n}',
            options: [
              '15',
              '21',
              '6',
              '12'
            ],
            correctAnswer: 1,
            explanation: '1 + 2 + 3 + 4 + 5 + 6 = 21. The enhanced for loop visits every element in row-major order and adds each to sum.'
          },
          {
            question: 'int[][] grid = new int[2][3];\nWhat is grid[1][2]?',
            options: [
              '0',
              '2',
              'null',
              'ArrayIndexOutOfBoundsException'
            ],
            correctAnswer: 0,
            explanation: 'new int[2][3] creates a 2x3 grid filled with default int values (0). grid[1][2] is a valid index (row 1, col 2) and its value is 0.'
          }
        ]
      }
    }
  ]
};
