export const csa2dArraysPart7Data = {
  topicSlug: 'csa-2d-arrays',
  sections: [
    {
      id: 'csa2darr7-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Array Algorithms

**Part 7 of 7 — Synthesis Review**

---

This part ties together the 2D array algorithms of CED Topic 4.13 and the skills that free-response question 4 tests. Use the table as a checklist, then work through the mixed questions.

### The Topic on One Page

| Algorithm | Key fact | Typical trap |
|---|---|---|
| Total and average (Part 2) | divide by \`grid.length * grid[0].length\`, after a cast to double | int division, or dividing by the rows only |
| Max or min with location (Part 2) | keep both indices; start at \`[0][0]\`; \`>\` keeps the first tie in row-major order | starting at 0, or returning only the value |
| Any / all and search (Part 2) | decide inside the inner loop; default return after **both** loops | a default return between the loops checks only row 0 |
| Per-row and per-column results (Part 3) | \`new int[grid.length]\` for rows, \`new int[grid[0].length]\` for columns; the outer loop picks which | a running sum that is never reset |
| Swaps and reversals (Part 3) | rows swap by reference; columns need a loop; reverse to half the length | full-length reversal undoes itself |
| Neighbors (Part 4) | guard each direction, and put the guard first in \`&&\` | reading index -1 or \`length\` |
| Diagonals and regions (Part 4) | anti-diagonal \`[i][n - 1 - i]\`; interior 1 to \`length - 2\`; blocks stop at \`length - 2\` | interior loops skip edge elements |
| Building grids (Part 5) | transpose is \`new int[cols][rows]\`; row-major k is \`[k / cols][k % cols]\` | dividing by the number of rows |
| Grids of objects (Part 5) | check for \`null\` before calling a method | NullPointerException on empty slots |
      `
    },
    {
      id: 'csa2darr7-worked',
      type: 'text' as const,
      content: `
## Worked Example: One Grid, Five Algorithms

\`\`\`java
int[][] w = {
    {4, 7, 2},
    {9, 3, 8},
    {1, 6, 5},
    {7, 2, 9}
};
\`\`\`

**Step 1 — Shape.** \`w.length\` is 4 rows and \`w[0].length\` is 3 columns, so a full traversal visits 12 elements.

**Step 2 — Row and column totals.** \`rowTotals(w)\` is \`{13, 20, 12, 18}\`, so \`bestRow(w)\` returns 1. \`colTotals(w)\` is \`{21, 18, 24}\`: a length-3 array, one slot per column.

**Step 3 — Maximum with location.** The value 9 appears at (1, 0) and (3, 2). With \`>\` the row-major search keeps (1, 0); with \`>=\` it ends at (3, 2).

**Step 4 — Search order.** \`findValue(w, 7)\` returns \`{0, 1}\` after examining 2 elements. A column-major search reaches the 7 in column 0 first and returns \`{3, 0}\`.

**Step 5 — Neighbors.** The 3 at (1, 1) is interior, and all four of its neighbors (7, 6, 9, 8) are larger. \`countPeaks(w)\` returns 6: the 7, 9, 8, 6, 7 and 9 each beat every neighbor they have, including the two corner values in row 3, which have only two neighbors each.

**Step 6 — Transpose.** \`transpose(w)\` is a 3 x 4 grid: \`{{4, 9, 1, 7}, {7, 3, 6, 2}, {2, 8, 5, 9}}\`. Row 1 of the result is column 1 of \`w\`.
      `
    },
    {
      id: 'csa2darr7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

\`\`\`java
int[][] v = {
    {3, 1, 4},
    {1, 5, 9},
    {7, 6, 5}
};
\`\`\`

**Segment A**
\`\`\`java
int s = 0;
for (int i = 0; i < v.length; i++) {
    s += v[i][i] - v[i][v.length - 1 - i];
}
\`\`\`

**Segment B**
\`\`\`java
int count = 0;
for (int c = 0; c < v[0].length; c++) {
    boolean allOdd = true;
    for (int r = 0; r < v.length; r++) {
        if (v[r][c] % 2 == 0) {
            allOdd = false;
        }
    }
    if (allOdd) {
        count++;
    }
}
\`\`\`

**Segment C**
\`\`\`java
ArrayList<Integer> list = new ArrayList<Integer>();
for (int c = 0; c < v[0].length; c++) {
    for (int r = 0; r < v.length; r++) {
        if (v[r][c] > 4) {
            list.add(v[r][c]);
        }
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of s after Segment A runs?',
            options: [
              '-3',
              '3',
              '0',
              '-29'
            ],
            correctAnswer: 0,
            explanation: 'The main diagonal adds 3 + 5 + 5 = 13 and the anti-diagonal subtracts 4 + 5 + 7 = 16, so s is -3. The center 5 is on both diagonals and cancels itself.'
          },
          {
            question: 'What is the value of count after Segment B runs?',
            options: [
              '1',
              '0',
              '2',
              '3'
            ],
            correctAnswer: 0,
            explanation: 'The outer loop is over columns, so count is the number of columns with no even value. Column 0 (3, 1, 7) qualifies; column 1 holds a 6 and column 2 holds a 4.'
          },
          {
            question: 'After Segment C runs, what does list.get(2) return?',
            options: [
              '6',
              '7',
              '9',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'Segment C is column-major, so the list is [7, 5, 6, 9, 5] and index 2 holds 6. A row-major loop would build [5, 9, 7, 6, 5], whose index 2 holds 7.'
          }
        ]
      }
    },
    {
      id: 'csa2darr7-reference',
      type: 'text' as const,
      content: `
## Count Reference

| Region or algorithm | Elements or comparisons for a grid with R rows and C columns |
|---|---|
| Full traversal, or a search for a missing value | R x C |
| Interior elements | (R - 2) x (C - 2) |
| 2 x 2 blocks | (R - 1) x (C - 1) |
| Neighbors of one element | 4-neighbors: 2 at a corner, 3 on an edge, 4 inside; 8-neighbors: 3, 5 or 8 |
| Symmetry check on an n x n grid | n(n - 1) / 2 comparisons when symmetric |
| Elements on either diagonal of an n x n grid | 2n when n is even, 2n - 1 when n is odd |

## Error Catalogue

| Symptom | Likely cause | Fix |
|---|---|---|
| ArrayIndexOutOfBoundsException only on non-square grids | \`grid.length\` used for columns, or \`grid[c][r]\` | columns are \`grid[0].length\`; keep \`[r][c]\` order |
| ArrayIndexOutOfBoundsException at index -1 | a neighbor read with no \`r > 0\` or \`c > 0\` guard, or the guard after \`&&\` | guard first |
| the last row always "wins" | a per-row sum declared outside the outer loop | declare it inside the outer loop |
| a search or "all" check ignores later rows | a return between the two closing braces | move the default return after both loops |
| a mirrored or reversed row repeats values | copying in place without a temp variable or a new grid | swap pairs, or build a new grid |
| NullPointerException in a grid of objects | a method called on an empty slot | test \`!= null\` first |
| average is a whole number | int division | cast to double before dividing |

> 🎯 **AP Connection:** On question 4, read the class header first and note the instance variable's name and type. Then write the nested loops with \`r\` over \`grid.length\` and \`c\` over \`grid[0].length\` before you think about the condition: that skeleton earns the traversal point.
      `
    },
    {
      id: 'csa2darr7-quick',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A 5 x 7 grid has ___ interior elements',
            options: ['15', '35', '24', '20']
          },
          {
            label: 'The transpose of a 4 x 6 grid has ___ rows',
            options: ['6', '4', '24', '10']
          },
          {
            label: 'A grid with 5 columns is filled row-major from arr; arr[13] lands in column ___',
            options: ['3', '2', '1', '13']
          }
        ],
        correctAnswers: ['15', '6', '3'],
        hint1: 'Remove the first and last row and the first and last column.',
        hint2: 'The transpose swaps the two dimensions.',
        hint3: 'The column is the remainder after dividing by the number of columns.',
        explanation: 'Interior elements form a (5 - 2) x (7 - 2) = 3 x 5 block, which is 15. The transpose of a 4 x 6 grid is 6 x 4. Element 13 goes to row 13 / 5 = 2 and column 13 % 5 = 3.'
      }
    },
    {
      id: 'csa2darr7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which loop structure produces one result for each column?',
            options: [
              'Columns in the outer loop, rows in the inner loop',
              'Rows in the outer loop, columns in the inner loop',
              'A single loop over the main diagonal elements',
              'An enhanced for loop over the rows of the grid'
            ],
            correctAnswer: 0,
            explanation: 'The outer loop decides what each result belongs to, so walking columns on the outside and rows on the inside finishes one column at a time. The row-first order produces one result per row.'
          },
          {
            question: 'A method must report where the smallest element of a grid is. Which return type fits?',
            options: [
              'An int array holding the row and column',
              'An int holding the smallest value',
              'A boolean that is true if found',
              'A double holding the grid average'
            ],
            correctAnswer: 0,
            explanation: 'A location needs two numbers, and an int array such as {r, c} returns both. The smallest value alone does not say where it is.'
          },
          {
            question: 'Why must a neighbor guard come before && rather than after it?',
            options: [
              'Java stops at the first false operand',
              'Java evaluates the right side of && first',
              'The guard changes the value of the index',
              'Bounds are checked only when the code compiles'
            ],
            correctAnswer: 0,
            explanation: 'Short-circuit evaluation skips the right operand when the left one is false, so a guard on the left prevents the out-of-bounds read. Java checks array indices when the code runs, not when it compiles.'
          },
          {
            question: 'Which statement describes the array created by new Plant[3][3]?',
            options: [
              'It holds nine null references',
              'It holds nine Plant objects with default values',
              'It throws until every slot is assigned',
              'It holds nine Plant objects with no name'
            ],
            correctAnswer: 0,
            explanation: 'Creating an array of objects creates only the slots, and each slot starts as null. Plant objects exist only after a constructor is called with new Plant(...).'
          }
        ]
      }
    }
  ]
}
