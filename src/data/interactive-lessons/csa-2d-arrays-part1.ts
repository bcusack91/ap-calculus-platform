export const csa2dArraysPart1Data = {
  topicSlug: 'csa-2d-arrays',
  sections: [
    {
      id: 'csa2da1-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Array Algorithms

**Part 1 of 7 — Row/Column Processing, Searching, and Modifying**

---

## Processing Individual Rows or Columns

### Sum of a Specific Row
\`\`\`java
public int rowSum(int[][] matrix, int row) {
    int sum = 0;
    for (int c = 0; c < matrix[row].length; c++) {
        sum += matrix[row][c];
    }
    return sum;
}
\`\`\`

### Sum of a Specific Column
\`\`\`java
public int colSum(int[][] matrix, int col) {
    int sum = 0;
    for (int r = 0; r < matrix.length; r++) {
        sum += matrix[r][col];
    }
    return sum;
}
\`\`\`

> 🔑 **Row processing** fixes the row index and loops over columns. **Column processing** fixes the column index and loops over rows.

---

## Finding a Value in a 2D Array

\`\`\`java
public boolean contains(int[][] matrix, int target) {
    for (int r = 0; r < matrix.length; r++) {
        for (int c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] == target) {
                return true;
            }
        }
    }
    return false;
}
\`\`\`

| Algorithm | Approach |
|-----------|---------|
| **Row sum/avg** | Fix row, loop columns |
| **Column sum/avg** | Fix column, loop rows |
| **Search** | Nested loops, return true if found |
| **Count matches** | Nested loops, increment counter |
| **Find max/min** | Initialize with [0][0], compare all |
      `
    },
    {
      id: 'csa2da1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To sum all elements in column 2 of a 2D array, which loop structure is correct?',
            options: [
              'for (int c = 0; c < matrix[2].length; c++) sum += matrix[2][c];',
              'for (int r = 0; r < matrix.length; r++) sum += matrix[r][2];',
              'for (int r = 0; r < matrix[0].length; r++) sum += matrix[2][r];',
              'for (int c = 0; c < matrix.length; c++) sum += matrix[c][c];'
            ],
            correctAnswer: 1,
            explanation: 'To process a specific column, fix the column index (2) and loop over all rows. matrix[r][2] gives the element in row r, column 2 for each row.'
          },
          {
            question: 'How many elements are checked in the WORST case when searching a 3x4 2D array?',
            options: [
              '3',
              '4',
              '7',
              '12'
            ],
            correctAnswer: 3,
            explanation: 'In the worst case (value not found), every element is checked. A 3x4 array has 3 x 4 = 12 elements. Linear search on a 2D array is O(rows x cols).'
          }
        ]
      }
    },
    {
      id: 'csa2da1-content',
      type: 'text' as const,
      content: `
## Modifying 2D Array Elements

### Multiply All Elements by 2
\`\`\`java
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        matrix[r][c] *= 2;
    }
}
\`\`\`

### Replace Negatives with Zero
\`\`\`java
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] < 0) {
            matrix[r][c] = 0;
        }
    }
}
\`\`\`

## Diagonal Elements

\`\`\`java
// Main diagonal (row == col): top-left to bottom-right
// Only works for square matrices!
for (int i = 0; i < matrix.length; i++) {
    System.out.println(matrix[i][i]);
}
\`\`\`

## Edge Elements (Border)
\`\`\`java
// An element is on the edge if:
// r == 0 (first row), r == rows-1 (last row),
// c == 0 (first col), c == cols-1 (last col)
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        if (r == 0 || r == matrix.length - 1 ||
            c == 0 || c == matrix[r].length - 1) {
            // This element is on the border
        }
    }
}
\`\`\`
      `
    },
    {
      id: 'csa2da1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) To process a single row, fix the _______ index and loop over columns.

2) Diagonal elements in a square matrix satisfy the condition row == _______.

3) An element is on the border of a 2D array if its row or column index equals 0 or the _______ valid index.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['row', 'col', 'last'],
        hint1: 'Keep the row the same, vary the column.',
        hint2: 'Same row number and column number.',
        hint3: 'The maximum index (length - 1).',
        explanation: 'Fix row to process a row. Diagonal: row == col. Border: index is 0 or last.'
      }
    },
    {
      id: 'csa2da1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**2D Array Algorithms** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find the maximum in a 2D array, initialize max with ___ and compare all elements',
            options: ['matrix[0][0]', '0', 'Integer.MAX_VALUE', '-1']
          },
          {
            label: 'Processing the main diagonal of a square matrix requires ___ loop(s)',
            options: ['One loop (for i: matrix[i][i])', 'Two nested loops', 'Three nested loops', 'No loops']
          },
          {
            label: 'An enhanced for loop on a 2D array int[][] m: "for (int[] row : m)" gives each row as ___',
            options: ['A 1D int array', 'A single int', 'An ArrayList', 'A 2D array']
          }
        ],
        correctAnswers: ['matrix[0][0]', 'One loop (for i: matrix[i][i])', 'A 1D int array'],
        hint1: 'Use an actual element as the starting comparison.',
        hint2: 'Diagonal means row index equals column index.',
        hint3: 'The outer array contains 1D arrays (rows).',
        explanation: 'Max init with [0][0]. Diagonal needs one loop. Enhanced for gives 1D rows.'
      }
    },
    {
      id: 'csa2da1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: 2D Array Algorithms

- **Row processing** = fix row, vary column. **Column processing** = fix column, vary row
- Use \`matrix[r].length\` (not \`matrix[0].length\`) in the inner loop — handles jagged arrays
- Searching a 2D array is just nested linear search
- Know how to find: sum, average, max, min for the whole array, a specific row, or a specific column
- Diagonal, border, and neighbor-checking are common FRQ patterns
- When modifying elements, use standard for loops (not enhanced for)
      `
    },
    {
      id: 'csa2da1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'int[][] m = {{1,2,3},{4,5,6},{7,8,9}};\nWhat is the sum of the main diagonal?',
            options: [
              '12',
              '15',
              '18',
              '45'
            ],
            correctAnswer: 1,
            explanation: 'Main diagonal: m[0][0]=1, m[1][1]=5, m[2][2]=9. Sum = 1 + 5 + 9 = 15.'
          },
          {
            question: 'How many border elements does a 4x5 2D array have?',
            options: [
              '14',
              '16',
              '18',
              '20'
            ],
            correctAnswer: 0,
            explanation: 'Border = perimeter. Top row: 5, bottom row: 5, left column (minus corners): 2, right column (minus corners): 2. Total: 5 + 5 + 2 + 2 = 14. Formula: 2(rows + cols) - 4.'
          }
        ]
      }
    }
  ]
};
