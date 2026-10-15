export const csa2dArraysPart3Data = {
  topicSlug: 'csa-2d-arrays',
  sections: [
    {
      id: 'csa2darr3-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Array Algorithms

**Part 3 of 7 — Row and Column Results**

---

Part 1 found the sum of **one** row or **one** column. Many free-response tasks need an answer for **every** row or **every** column: each student's total, each day's high, the column that is all the same. This part builds those results (CED Topic 4.13) and then changes rows and columns in place.

| In this part |
|---|
| A results array with one slot per row, or one slot per column |
| The row with the largest sum |
| Row and column checks: increasing, all equal |
| Swapping two columns or two rows; reversing every row |
| Comparing each element with the one above it |
| Worked example: a gradebook report |

Most examples use this gradebook (rows are students, columns are quizzes):

\`\`\`java
int[][] scores = {
    {82, 90, 75},
    {68, 74, 80},
    {95, 88, 91},
    {70, 85, 64}
};
\`\`\`

> 🔑 **Key Concept:** Whatever the **outer** loop walks over is what you get one answer for. For one answer per row, loop over rows on the outside; for one answer per column, loop over columns on the outside.
      `
    },
    {
      id: 'csa2darr3-results',
      type: 'text' as const,
      content: `
## One Result per Row

\`\`\`java
public static int[] rowTotals(int[][] grid) {
    int[] totals = new int[grid.length];          // one slot per row
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            totals[r] += grid[r][c];
        }
    }
    return totals;
}
\`\`\`

\`rowTotals(scores)\` returns \`{247, 222, 274, 219}\`. The new array starts full of 0s, so \`totals[r] +=\` needs no separate reset.

## One Result per Column

\`\`\`java
public static int[] colTotals(int[][] grid) {
    int[] totals = new int[grid[0].length];       // one slot per column
    for (int c = 0; c < grid[0].length; c++) {
        for (int r = 0; r < grid.length; r++) {
            totals[c] += grid[r][c];
        }
    }
    return totals;
}
\`\`\`

\`colTotals(scores)\` returns \`{315, 337, 310}\`.

| Results array sized with | Holds | Mistake to avoid |
|---|---|---|
| \`new int[grid.length]\` | one value per **row** | using it for columns: extra 0 slots when there are more rows than columns, and an ArrayIndexOutOfBoundsException when there are fewer |
| \`new int[grid[0].length]\` | one value per **column** | using it for rows, with the same two failures reversed |

On \`scores\` (4 rows, 3 columns), sizing the column totals with \`grid.length\` gives \`{315, 337, 310, 0}\`: no crash, but a fake fourth column.

## The Row With the Largest Sum

\`\`\`java
public static int bestRow(int[][] grid) {
    int best = 0;
    int bestSum = 0;
    for (int r = 0; r < grid.length; r++) {
        int sum = 0;                              // reset for every row
        for (int c = 0; c < grid[0].length; c++) {
            sum += grid[r][c];
        }
        if (r == 0 || sum > bestSum) {
            best = r;
            bestSum = sum;
        }
    }
    return best;
}
\`\`\`

The test \`r == 0\` makes row 0 the first candidate, the 2D version of starting a maximum at the first element. \`bestRow(scores)\` returns 2, the row whose sum is 274.

**The misplaced declaration.** If \`int sum = 0;\` moves **above** the outer loop, sum is never reset. It holds running totals 247, 469, 743, 962, so with positive values the last row always looks best and the method returns 3.
      `
    },
    {
      id: 'csa2darr3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
int[][] q = {{3, 8, 1}, {6, 2, 7}};
int[] result = colTotals(q);
\`\`\`

**Segment B**
\`\`\`java
int[][] w = {{9, 9}, {1, 2}, {3, 1}};
int best = 0;
int bestSum = 0;
int sum = 0;
for (int r = 0; r < w.length; r++) {
    for (int c = 0; c < w[0].length; c++) {
        sum += w[r][c];
    }
    if (r == 0 || sum > bestSum) {
        best = r;
        bestSum = sum;
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What array does Segment A store in result?',
            options: [
              '{9, 10, 8}',
              '{12, 15}',
              '{3, 8, 1}',
              '{9, 10}'
            ],
            correctAnswer: 0,
            explanation: 'colTotals has one slot per column, and the columns add to 3 + 6, 8 + 2 and 1 + 7. The two-value answers are the row totals or a results array that is one column short.'
          },
          {
            question: 'Suppose colTotals created its array with new int[grid.length] instead. What would Segment A do?',
            options: [
              'Throw an exception',
              'Store {9, 10}',
              'Store {12, 15}',
              'Store {9, 10, 8}'
            ],
            correctAnswer: 0,
            explanation: 'q has 2 rows and 3 columns, so the array would have only 2 slots. Adding column 2 reaches totals[2] and throws an ArrayIndexOutOfBoundsException.'
          },
          {
            question: 'Why does rowTotals need no statement that sets each totals[r] to 0 first?',
            options: [
              'A new int array already starts with every element 0',
              'The inner loop resets it on each pass',
              'Java resets array elements after each loop',
              'The += operator starts from 0 on its own'
            ],
            correctAnswer: 0,
            explanation: 'Creating an int array fills every element with the default value 0, so each slot is ready to accumulate. Nothing resets elements during the loops, and += always adds to the value already stored.'
          },
          {
            question: 'What is the value of best after Segment B runs?',
            options: [
              '2',
              '0',
              '1',
              '-1'
            ],
            correctAnswer: 0,
            explanation: 'sum is declared outside the loops and never reset, so the "row sums" are the running totals 18, 21 and 25 and the last row wins. With the reset inside the outer loop, row 0 (sum 18) is the real answer.'
          }
        ]
      }
    },
    {
      id: 'csa2darr3-checks',
      type: 'text' as const,
      content: `
## Checking a Row or a Column

A row or column check is the "all" pattern from Part 2 applied to one line of the grid.

\`\`\`java
// true if row r is strictly increasing from left to right
public static boolean isRowIncreasing(int[][] grid, int r) {
    for (int c = 0; c < grid[0].length - 1; c++) {
        if (grid[r][c] >= grid[r][c + 1]) {
            return false;
        }
    }
    return true;
}

// true if every element in column c equals the top element
public static boolean isColumnSame(int[][] grid, int c) {
    for (int r = 1; r < grid.length; r++) {
        if (grid[r][c] != grid[0][c]) {
            return false;
        }
    }
    return true;
}
\`\`\`

\`isRowIncreasing(scores, 1)\` is true (68, 74, 80); rows 0, 2 and 3 return false. The bound \`grid[0].length - 1\` keeps \`c + 1\` inside the row.

## Swapping Two Columns vs. Two Rows

\`\`\`java
public static void swapColumns(int[][] grid, int a, int b) {
    for (int r = 0; r < grid.length; r++) {       // one swap in every row
        int temp = grid[r][a];
        grid[r][a] = grid[r][b];
        grid[r][b] = temp;
    }
}
\`\`\`

A **row** is stored as its own 1D array, so two rows can be swapped by swapping the references: \`int[] temp = grid[a]; grid[a] = grid[b]; grid[b] = temp;\`. A **column** is not stored anywhere as an array; it is one element from each row, so swapping columns always needs the loop.

## Reversing Every Row in Place

\`\`\`java
int n = grid[0].length;
for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < n / 2; c++) {
        int temp = grid[r][c];
        grid[r][c] = grid[r][n - 1 - c];
        grid[r][n - 1 - c] = temp;
    }
}
\`\`\`

| Inner bound | Result for \`{{1, 2, 3, 4}, {5, 6, 7, 8}}\` |
|---|---|
| \`c < n / 2\` | \`{{4, 3, 2, 1}, {8, 7, 6, 5}}\` |
| \`c < n\` | unchanged: every pair is swapped twice |

With an odd number of columns, \`n / 2\` skips the middle element, which is already in place. Reversing a column is the same idea with \`r\` and \`grid.length / 2\`.

## Comparing Each Element With the One Above It

\`\`\`java
int count = 0;
for (int r = 1; r < grid.length; r++) {           // row 0 has nothing above it
    for (int c = 0; c < grid[0].length; c++) {
        if (grid[r][c] > grid[r - 1][c]) {
            count++;
        }
    }
}
\`\`\`

For \`scores\` the count is 4: one quiz rises from row 0 to row 1 (75 to 80), and all three rise from row 1 to row 2. Starting r at 0 reads \`grid[-1]\` and throws an ArrayIndexOutOfBoundsException.
      `
    },
    {
      id: 'csa2darr3-patterns',
      type: 'dropdown-select' as const,
      content: `
**Pick the Bound** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To reverse every row in place, the inner loop continues while c is less than ___',
            options: ['grid[0].length / 2', 'grid[0].length', 'grid.length / 2', 'grid[0].length - 1']
          },
          {
            label: 'Two rows can be exchanged without a loop by swapping the ___',
            options: ['row references', 'first elements', 'row indices', 'column lengths']
          },
          {
            label: 'A loop that compares grid[r][c] with grid[r - 1][c] starts r at ___',
            options: ['1', '0', '-1', 'grid.length - 1']
          }
        ],
        correctAnswers: ['grid[0].length / 2', 'row references', '1'],
        hint1: 'Each swap fixes two elements at once.',
        hint2: 'Each row of a 2D array is its own 1D array object.',
        hint3: 'Row 0 has no row above it.',
        explanation: 'Stopping at half the row swaps each pair once; going all the way swaps every pair back. Each row is a separate 1D array, so swapping the two references exchanges the rows. Row 0 has no row above it, so the comparison starts at row 1.'
      }
    },
    {
      id: 'csa2darr3-worked',
      type: 'text' as const,
      content: `
## Worked Example: A Gradebook Report

**Task.** For \`scores\`, find each student's total, the best student, each quiz's average as a double, and the hardest quiz (the lowest average).

**Step 1 — Student totals (one per row).** \`rowTotals(scores)\` gives \`{247, 222, 274, 219}\`.

**Step 2 — Best student.** The largest total is 274, so \`bestRow(scores)\` returns 2.

**Step 3 — Quiz averages (one per column).**

\`\`\`java
int[] colSums = colTotals(scores);
double[] quizAvg = new double[colSums.length];
for (int c = 0; c < colSums.length; c++) {
    quizAvg[c] = (double) colSums[c] / scores.length;   // divide by the number of students
}
\`\`\`

| Quiz (column) | Column total | Average |
|---|---|---|
| 0 | 315 | 78.75 |
| 1 | 337 | 84.25 |
| 2 | 310 | 77.5 |

The divisor is \`scores.length\`, the number of **rows**, because each column has one value per student. Without the cast the averages become 78.0, 84.0 and 77.0.

**Step 4 — Hardest quiz.** Run a minimum-index search over \`quizAvg\`: the lowest value, 77.5, is at index 2.

**Step 5 — Check the shapes.** Student results have length 4 (\`scores.length\`); quiz results have length 3 (\`scores[0].length\`). Mixing them up is the most common error in this kind of report.
      `
    },
    {
      id: 'csa2darr3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

\`\`\`java
int[][] g = {
    {5, 2, 8, 1},
    {3, 9, 4, 6},
    {7, 1, 2, 9}
};
\`\`\`

1) What value is at index 3 of the array returned by \`colTotals(g)\`? _______

2) What does \`bestRow(g)\` return? _______

3) How many elements of g are greater than the element directly above them? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '1', '4'],
        hint1: 'Column 3 holds 1, 6 and 9.',
        hint2: 'The row sums are 16, 22 and 19.',
        hint3: 'Compare row 1 with row 0, then row 2 with row 1.',
        explanation: 'Column 3 adds 1 + 6 + 9 = 16. Row 1 has the largest sum, 22. Two elements of row 1 beat the value above them (9 over 2, 6 over 1), and two in row 2 do (7 over 3, 9 over 6), for 4 in all.'
      }
    }
  ]
}
