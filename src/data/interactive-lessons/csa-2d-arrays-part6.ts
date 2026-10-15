export const csa2dArraysPart6Data = {
  topicSlug: 'csa-2d-arrays',
  sections: [
    {
      id: 'csa2darr6-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Array Algorithms

**Part 6 of 7 — AP-Style Practice**

---

Question 4 of the free-response section is the 2D array question. It typically describes a class whose instance variable is a 2D array and asks for code that builds the grid, traverses all or part of it, and reports a count, a location or a changed grid. Multiple-choice questions trace the same algorithms. This part practices both, using only the Java Quick Reference subset.

### How to Attack a 2D Array Question

| Step | Do this |
|---|---|
| 1 | Draw the grid with row numbers down the side and column numbers across the top. |
| 2 | Write the number of rows (\`grid.length\`) and columns (\`grid[0].length\`) next to it. |
| 3 | For each loop, note which index it controls and its first and last value. |
| 4 | For every \`r - 1\`, \`r + 1\`, \`c - 1\` or \`c + 1\`, find the guard that keeps it in bounds. |
| 5 | When the code changes the grid while reading it, redraw the grid after each row. |

> 🔑 **Key Concept:** Free-response rubrics reward each separate skill: traversing the whole grid, staying in bounds, applying the condition, and returning the right result. A solution with one bug still earns the points for the skills it shows, so write the full method even when one step is uncertain.
      `
    },
    {
      id: 'csa2darr6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

**Segment A**
\`\`\`java
int[][] m = {{2, 5, 1}, {4, 3, 6}};
int result = 0;
for (int c = 0; c < m[0].length; c++) {
    int best = m[0][c];
    for (int r = 1; r < m.length; r++) {
        if (m[r][c] > best) {
            best = m[r][c];
        }
    }
    result += best;
}
\`\`\`

**Segment B**
\`\`\`java
int[][] g = {{1, 2, 3}, {4, 5, 6}};
for (int r = 0; r < g.length; r++) {
    for (int c = 1; c < g[0].length; c++) {
        g[r][c] += g[r][c - 1];
    }
}
\`\`\`

**Segment C**
\`\`\`java
int[][] d = {{1, 2}, {3, 4}, {5, 6}};
for (int r = 1; r < d.length; r++) {
    for (int c = 0; c < d[0].length; c++) {
        d[r][c] = d[r - 1][c];
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of result after Segment A runs?',
            options: [
              '15',
              '11',
              '21',
              '6'
            ],
            correctAnswer: 0,
            explanation: 'The outer loop is over columns, so best is the largest value in each column: 4, 5 and 6, which add to 15. Adding the largest value in each row (5 and 6) gives 11, and 21 is the sum of every element.'
          },
          {
            question: 'What is the value of g[1][2] after Segment B runs?',
            options: [
              '15',
              '11',
              '6',
              '9'
            ],
            correctAnswer: 0,
            explanation: 'Each element adds the already-updated element to its left, so row 1 becomes 4, 9, 15: a running total. The value 11 is 5 + 6, which assumes the left neighbor still holds its original value.'
          },
          {
            question: 'What does d contain after Segment C runs?',
            options: [
              '{{1, 2}, {1, 2}, {1, 2}}',
              '{{1, 2}, {1, 2}, {3, 4}}',
              '{{3, 4}, {5, 6}, {5, 6}}',
              '{{1, 2}, {3, 4}, {5, 6}}'
            ],
            correctAnswer: 0,
            explanation: 'Row 1 copies row 0, and then row 2 copies the row 1 that was just overwritten, so row 0 spreads all the way down. Shifting the rows down by one would need the loop to run from the bottom up.'
          },
          {
            question: 'Which change makes Segment C shift each row down by one, keeping row 0?',
            options: [
              'Run the outer loop backward',
              'Start the outer loop at r = 0',
              'Swap the inner and outer loops',
              'Copy from d[r + 1][c] instead'
            ],
            correctAnswer: 0,
            explanation: 'Going from the last row up to row 1 reads each row before it is overwritten, giving {{1, 2}, {1, 2}, {3, 4}}. Starting at r = 0 reads d[-1], and copying from r + 1 shifts upward and runs off the bottom.'
          }
        ]
      }
    },
    {
      id: 'csa2darr6-frq',
      type: 'text' as const,
      content: `
## FRQ-Style Task — ElevationMap

A hiking app stores ground heights in a grid.

\`\`\`java
public class ElevationMap {
    private int[][] heights;

    /** Precondition: data.length is a multiple of numRows, and data.length > 0.
     *  Fills heights in row-major order using every value of data. */
    public ElevationMap(int[] data, int numRows) { /* part (a) */ }

    /** A location is flat if every 4-neighbor that exists differs from it
     *  by at most 1. Returns the number of flat locations. */
    public int countFlatSpots() { /* part (b) */ }
}
\`\`\`

**Example.** \`new ElevationMap(new int[] {5, 5, 6, 9, 4, 5, 5, 8, 2, 4, 6, 6}, 3)\` builds:

|  | col 0 | col 1 | col 2 | col 3 |
|---|---|---|---|---|
| row 0 | 5 | 5 | 6 | 9 |
| row 1 | 4 | 5 | 5 | 8 |
| row 2 | 2 | 4 | 6 | 6 |

\`countFlatSpots()\` returns 3: the locations (0, 0), (0, 1) and (1, 1). For instance, the 6 at (2, 2) is not flat, because its left neighbor 4 differs by 2.

### Part (a) Solution

\`\`\`java
public ElevationMap(int[] data, int numRows) {
    int numCols = data.length / numRows;
    heights = new int[numRows][numCols];
    for (int k = 0; k < data.length; k++) {
        heights[k / numCols][k % numCols] = data[k];
    }
}
\`\`\`

The number of columns is not given, so it is computed first. The instance variable is assigned, not redeclared: writing \`int[][] heights = new int[...]\` would create a local variable and leave the field \`null\`.

### Part (b) Solution

\`\`\`java
public int countFlatSpots() {
    int count = 0;
    for (int r = 0; r < heights.length; r++) {
        for (int c = 0; c < heights[0].length; c++) {
            if (isFlat(r, c)) {
                count++;
            }
        }
    }
    return count;
}

private boolean isFlat(int r, int c) {
    int h = heights[r][c];
    if (r > 0 && Math.abs(heights[r - 1][c] - h) > 1) {
        return false;
    }
    if (r < heights.length - 1 && Math.abs(heights[r + 1][c] - h) > 1) {
        return false;
    }
    if (c > 0 && Math.abs(heights[r][c - 1] - h) > 1) {
        return false;
    }
    if (c < heights[0].length - 1 && Math.abs(heights[r][c + 1] - h) > 1) {
        return false;
    }
    return true;
}
\`\`\`

A private helper method is allowed and keeps the four neighbor tests out of the nested loops. \`Math.abs\` turns "differs by at most 1" into one comparison in either direction.

### Rubric Checklist

| Part | A full-credit answer |
|---|---|
| (a) | computes the number of columns from \`data.length\` and \`numRows\` |
| (a) | creates the array with the right dimensions and assigns it to the instance variable |
| (a) | places every element of \`data\` at \`[k / numCols][k % numCols]\` (or uses a separate counter) |
| (b) | traverses every location of \`heights\` without going out of bounds |
| (b) | guards each neighbor before reading it, and compares with \`Math.abs(...) > 1\` or an equivalent |
| (b) | counts a location only when **all** existing neighbors pass, and returns the count |
      `
    },
    {
      id: 'csa2darr6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About the Solution** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'countFlatSpots is rewritten to visit only interior locations (r from 1 to heights.length - 2, c likewise). What does it return for the example?',
            options: [
              '1',
              '3',
              '0',
              '2'
            ],
            correctAnswer: 0,
            explanation: 'The example has only two interior locations, (1, 1) and (1, 2), and only (1, 1) is flat. The flat locations (0, 0) and (0, 1) are on the edge, so they are skipped.'
          },
          {
            question: 'Part (a) creates the grid with new int[numRows][data.length]. What does heights look like for the example?',
            options: [
              'Row 0 gets all 12 values and the other rows stay 0',
              'Each row gets 4 values, as before',
              'Rows 1 and 2 get every value and row 0 stays 0',
              'The values wrap around and fill every row twice'
            ],
            correctAnswer: 0,
            explanation: 'With 12 columns, k / 12 is 0 for every k, so every value lands in row 0 at column k. Rows 1 and 2 keep their default 0s, and no exception occurs.'
          },
          {
            question: 'Why does the part (a) solution compute numCols before it creates heights?',
            options: [
              'The column count is required by the new expression',
              'numRows must be checked against data.length',
              'The loop must stop before it reaches numCols',
              'It keeps k / numRows from going out of bounds'
            ],
            correctAnswer: 0,
            explanation: 'The expression new int[numRows][numCols] needs both sizes, and only the number of rows is a parameter. The precondition already guarantees that data.length divides evenly, and the loop runs over k, not over numCols.'
          },
          {
            question: 'Why does isFlat test r > 0 before it reads heights[r - 1][c]?',
            options: [
              'So the up neighbor is read only when it exists',
              'So the top row is never counted as flat',
              'So that Math.abs receives a positive value',
              'So that each location is compared only once'
            ],
            correctAnswer: 0,
            explanation: 'Row 0 has no row above it, and short-circuit evaluation skips the read when r > 0 is false. Top-row locations can still be flat, as (0, 0) and (0, 1) show.'
          }
        ]
      }
    },
    {
      id: 'csa2darr6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What does \`countFlatSpots()\` return for the grid \`{{3, 3}, {4, 6}}\`? _______

2) After \`new ElevationMap(new int[] {2, 4, 6, 8, 10, 12, 14, 16}, 2)\`, what is \`heights[1][1]\`? _______

3) How many comparisons does \`isSymmetric\` from Part 4 make on a symmetric 6 x 6 grid? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '12', '15'],
        hint1: 'Check each of the four locations against its two neighbors.',
        hint2: 'There are 8 / 2 = 4 columns, so row 1 starts at data[4].',
        hint3: 'Add 5 + 4 + 3 + 2 + 1.',
        explanation: 'Only the 3 at (0, 0) is flat: its neighbors are 3 and 4. With 4 columns, heights[1][1] is data[1 * 4 + 1], which is 12. The inner loop of isSymmetric runs 5 + 4 + 3 + 2 + 1 = 15 times.'
      }
    },
    {
      id: 'csa2darr6-deductions',
      type: 'text' as const,
      content: `
## Common FRQ Deductions on 2D Arrays

| Mistake | Why it costs points |
|---|---|
| \`grid.length\` used as the number of columns | wrong bound on non-square grids: skipped columns or an exception |
| Reading \`grid[r - 1][c]\` with no \`r > 0\` guard (or the guard after \`&&\`) | the first row reads index -1 |
| Redeclaring the instance variable inside the constructor | the field stays \`null\` and later methods fail |
| Dividing by the wrong count, or using int division for an average | the result is wrong or loses its fraction |
| Returning or deciding inside the loops too early | the method answers from part of the grid |
| Changing the grid while still reading values that the result depends on | later elements use already-changed values |
| Printing the answer instead of returning it | the method must return a value to its caller |

> 🎯 **AP Connection:** Name your loop variables \`r\` and \`c\` (or \`row\` and \`col\`) and keep them in that order in every subscript. Most 2D errors on the exam come from writing \`grid[c][r]\`, which works only by accident on square grids.
      `
    }
  ]
}
