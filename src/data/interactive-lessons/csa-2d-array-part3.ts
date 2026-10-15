export const csa2dArrayPart3Data = {
  topicSlug: 'csa-2d-array',
  sections: [
    {
      id: 'csa2darr3-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Arrays

**Part 3 of 7 — Row-Major and Column-Major Traversals in Depth**

---

Part 1 showed the standard row-major and column-major loops on a square grid. Square grids hide the most common mistakes, because the row count and the column count are the same. This part traces nested loops on **non-square** grids (CED Topic 4.12), so every bound has to be the right one.

| In this part |
|---|
| Which length bounds which loop, and which index goes where |
| The swapped-bounds exception: exactly when it is thrown |
| Counting iterations of nested loops |
| Backward, bottom-up and right-to-left traversals |
| Visiting one row, one column, or a sub-rectangle |
| Formatting output with print and println |
      `
    },
    {
      id: 'csa2darr3-bounds',
      type: 'text' as const,
      content: `
## Match Each Loop to Its Length

All the examples use this grid with **2 rows and 4 columns**:

\`\`\`java
int[][] g = {{3, 8, 1, 6},
             {5, 2, 7, 4}};
\`\`\`

| Loop variable | Counts | Bound | Valid values here |
|---|---|---|---|
| \`r\` | rows | \`g.length\` | 0 to 1 |
| \`c\` | columns | \`g[0].length\` (or \`g[r].length\`) | 0 to 3 |

The rule never changes: the variable that is bounded by \`g.length\` goes in the **first** bracket, and the variable bounded by \`g[0].length\` goes in the **second**. Which loop is outer only decides the order of the visits.

### Column-Major on a Non-Square Grid

\`\`\`java
for (int c = 0; c < g[0].length; c++) {
    for (int r = 0; r < g.length; r++) {
        System.out.print(g[r][c] + " ");
    }
    System.out.println();
}
\`\`\`

The visits run (0, 0), (1, 0), (0, 1), (1, 1), (0, 2), (1, 2), (0, 3), (1, 3), so the output has 4 lines of 2 values:

\`\`\`
3 5
8 2
1 7
6 4
\`\`\`

## The Swapped-Bounds Bug

\`\`\`java
for (int r = 0; r < g[0].length; r++) {      // r runs 0 to 3: wrong bound
    for (int c = 0; c < g.length; c++) {     // c runs 0 to 1: wrong bound
        System.out.print(g[r][c] + " ");
    }
}
\`\`\`

| r | c values | Elements printed |
|---|---|---|
| 0 | 0, 1 | 3 8 |
| 1 | 0, 1 | 5 2 |
| 2 | 0 | \`g[2]\` does not exist: ArrayIndexOutOfBoundsException |

The segment prints \`3 8 5 2\` and then throws. Writing the right bounds but the indices in the wrong order, \`g[c][r]\` inside a correct column-major loop, fails in the same place. On a **square** grid neither bug throws: the loops run, but the values come out in the wrong order.

## Counting Iterations

For a grid with R rows and C columns, a row-major nested loop runs its inner body R x C times, because the inner loop runs completely once for each row.

| Count for the 2 by 4 grid | Row-major | Column-major |
|---|---|---|
| inner body (each element) | 2 x 4 = 8 | 4 x 2 = 8 |
| \`println()\` after the inner loop | 2 | 4 |
| inner condition checks | 2 x (4 + 1) = 10 | 4 x (2 + 1) = 12 |
| outer condition checks | 2 + 1 = 3 | 4 + 1 = 5 |

Each condition is checked once more than its loop body runs, because the final false check ends the loop.
      `
    },
    {
      id: 'csa2darr3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
int[][] t = {{4, 9},
             {6, 1},
             {8, 5}};
\`\`\`

**Segment A**
\`\`\`java
for (int c = 0; c < t[0].length; c++) {
    for (int r = 0; r < t.length; r++) {
        System.out.print(t[r][c] + " ");
    }
    System.out.println();
}
\`\`\`

**Segment B**
\`\`\`java
for (int c = 0; c < t.length; c++) {
    for (int r = 0; r < t[0].length; r++) {
        System.out.print(t[r][c] + " ");
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the first line of output from Segment A?',
            options: [
              '4 6 8',
              '4 9',
              '4 6',
              '6 8'
            ],
            correctAnswer: 0,
            explanation: 'The outer loop holds c at 0 while r runs through all three rows, so the first line is column 0: 4, 6 and 8. Printing 4 9 would be row-major order, and stopping after two values would mean the row loop was bounded by the column count.'
          },
          {
            question: 'What happens when Segment B runs?',
            options: [
              'It prints 4 6 9 1, then throws an exception',
              'It prints 4 6 8 9 1 5 and then ends normally',
              'It throws an exception before printing any value',
              'It prints 4 9 6 1 8 5 and then ends normally'
            ],
            correctAnswer: 0,
            explanation: 'The bounds are swapped: r only reaches 1 and c reaches 2. Columns 0 and 1 print 4 6 and 9 1, then t[0][2] asks for a third column the rows do not have.'
          },
          {
            question: 'How many times does Segment A call println?',
            options: [
              '2',
              '3',
              '6',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'The println sits after the inner loop, so it runs once per pass of the outer loop. The outer loop runs once per column, and t has 2 columns.'
          }
        ]
      }
    },
    {
      id: 'csa2darr3-directions',
      type: 'text' as const,
      content: `
## Changing the Direction

Each loop can count down instead of up. Start at the last valid index, \`length - 1\`, and continue while the index is \`>= 0\`. Using this grid with 3 rows and 4 columns:

\`\`\`java
int[][] h = {{2, 4, 6, 8},
             {1, 3, 5, 7},
             {9, 0, 2, 4}};
\`\`\`

| Order | Outer header | Inner header | First line |
|---|---|---|---|
| rows bottom to top, each left to right | \`for (int r = h.length - 1; r >= 0; r--)\` | \`for (int c = 0; c < h[0].length; c++)\` | 9 0 2 4 |
| rows top to bottom, each right to left | \`for (int r = 0; r < h.length; r++)\` | \`for (int c = h[r].length - 1; c >= 0; c--)\` | 8 6 4 2 |
| columns right to left, each top to bottom | \`for (int c = h[0].length - 1; c >= 0; c--)\` | \`for (int r = 0; r < h.length; r++)\` | 8 7 4 |

## Visiting Part of the Grid

**One row** needs only one loop. The row index is fixed, and the loop runs over the columns:

\`\`\`java
int sum = 0;
for (int c = 0; c < h[2].length; c++) {
    sum += h[2][c];          // 9 + 0 + 2 + 4 = 15
}
\`\`\`

**One column** fixes the column index, and the loop runs over the rows:

\`\`\`java
for (int r = 0; r < h.length; r++) {
    System.out.print(h[r][1] + " ");     // 4 3 0
}
\`\`\`

**A sub-rectangle** changes the start and end of each loop. The headers below skip row 0, the first column and the last column.

## Worked Example: A Sub-Rectangle

\`\`\`java
int total = 0;
for (int r = 1; r < h.length; r++) {
    for (int c = 1; c < h[0].length - 1; c++) {
        total += h[r][c];
    }
}
\`\`\`

**Step 1 — The ranges.** \`r\` runs 1 to 2. \`h[0].length - 1\` is 3, so \`c\` runs 1 to 2.

**Step 2 — The visits.**

| r | c | h[r][c] | total |
|---|---|---|---|
| 1 | 1 | 3 | 3 |
| 1 | 2 | 5 | 8 |
| 2 | 1 | 0 | 8 |
| 2 | 2 | 2 | 10 |

**Step 3 — Result.** \`total\` is 10, from a 2 by 2 block of the grid: (3 - 1) rows times (3 - 1) columns.
      `
    },
    {
      id: 'csa2darr3-parts',
      type: 'dropdown-select' as const,
      content: `
**Choose the Visits** 🔍

Use the grid \`h\` and the worked example above.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A loop that prints h[r][2] for r from 0 to 2 prints ___',
            options: ['6 5 2', '2 5 6', '4 3 0', '1 3 5']
          },
          {
            label: 'A row-major traversal whose outer header is for (int r = h.length - 1; r >= 0; r--) prints first the value ___',
            options: ['9', '2', '4', '8']
          },
          {
            label: 'If the inner header in the worked example were for (int c = 1; c < h[0].length; c++), total would be ___',
            options: ['21', '10', '17', '31']
          }
        ],
        correctAnswers: ['6 5 2', '9', '21'],
        hint1: 'The column index is fixed at 2 and the rows run from the top.',
        hint2: 'The outer loop starts at the bottom row, and the inner loop still runs left to right.',
        hint3: 'Now c runs 1 to 3, so add the last column of rows 1 and 2.',
        explanation: 'Column 2 read from the top is 6, 5, 2. Counting r down starts at row 2, whose first element is 9. With c running to 3, rows 1 and 2 contribute 3 + 5 + 7 and 0 + 2 + 4, for a total of 21.'
      }
    },
    {
      id: 'csa2darr3-output',
      type: 'text' as const,
      content: `
## Formatting the Output

Where \`print\` and \`println\` sit decides the shape of what appears. Using the 2 by 2 grid \`{{1, 2}, {3, 4}}\`:

| Placement | Output |
|---|---|
| \`print(v + " ")\` in the inner loop, \`println()\` after the inner loop | two lines: \`1 2\` and \`3 4\` |
| \`println(v)\` in the inner loop | four lines, one value each |
| \`print(v + " ")\` in the inner loop, \`println()\` after **both** loops | one line: \`1 2 3 4\` |
| \`print(v + " ")\` in the inner loop, no \`println()\` at all | \`1 2 3 4\` with no line break at the end |

### Separators Only Between Values

To print \`3,8,1,6\` with no comma at the end, print the comma only when the column is not the last one:

\`\`\`java
for (int r = 0; r < g.length; r++) {
    for (int c = 0; c < g[r].length; c++) {
        System.out.print(g[r][c]);
        if (c < g[r].length - 1) {
            System.out.print(",");
        }
    }
    System.out.println();
}
\`\`\`

For the 2 by 4 grid \`g\` this prints:

\`\`\`
3,8,1,6
5,2,7,4
\`\`\`

> 🎯 **AP Connection:** In an output question, first find the line breaks: count how many times \`println\` runs and what comes before each one. Then fill each line by tracing the inner loop.
      `
    },
    {
      id: 'csa2darr3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
int[][] q = {{1, 2, 3},
             {4, 5, 6}};
\`\`\`

**Segment C**
\`\`\`java
for (int r = q.length - 1; r >= 0; r--) {
    for (int c = q[0].length - 1; c >= 0; c--) {
        System.out.print(q[r][c]);
    }
    System.out.print("|");
}
\`\`\`

**Segment D**
\`\`\`java
int count = 0;
for (int c = 1; c < q[0].length; c++) {
    for (int r = 0; r < q.length; r++) {
        if (q[r][c] % 2 == 0) {
            count++;
        }
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment C?',
            options: [
              '654|321|',
              '321|654|',
              '63|52|41|',
              '456|123|'
            ],
            correctAnswer: 0,
            explanation: 'The outer loop starts at the bottom row and the inner loop reads each row from its last column, so row 1 prints 654 and row 0 prints 321, each followed by a bar.'
          },
          {
            question: 'Which inner header makes Segment C print 456|123| instead?',
            options: [
              'for (int c = 0; c < q[0].length; c++)',
              'for (int c = q.length - 1; c >= 0; c--)',
              'for (int c = 0; c <= q.length - 1; c++)',
              'for (int c = q[0].length; c >= 1; c--)'
            ],
            correctAnswer: 0,
            explanation: 'Each row should now be read left to right across all 3 columns. Bounding c by q.length covers only 2 columns in either direction, and starting c at q[0].length asks for column 3, which does not exist.'
          },
          {
            question: 'What is the value of count after Segment D?',
            options: [
              '2',
              '3',
              '4',
              '1'
            ],
            correctAnswer: 0,
            explanation: 'Segment D visits only columns 1 and 2, which hold 2, 5, 3 and 6. Two of those are even, so count is 2, even though the if statement is tested 4 times.'
          }
        ]
      }
    }
  ]
}
