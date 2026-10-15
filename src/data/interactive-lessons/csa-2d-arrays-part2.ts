export const csa2dArraysPart2Data = {
  topicSlug: 'csa-2d-arrays',
  sections: [
    {
      id: 'csa2darr2-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Array Algorithms

**Part 2 of 7 — Whole-Grid Algorithms: Totals, Extremes, Counts, and Searches**

---

Part 1 worked on one row or one column at a time. This part runs the standard algorithms over **every** element of a 2D array (CED Topic 4.13). Each one is a 1D algorithm you already know, wrapped in a row-major nested loop.

| Algorithm | Answers the question | Result |
|---|---|---|
| Total and average | What is the sum of every element? The mean? | int, then double |
| Maximum or minimum with location | What is the extreme value, and in which row and column? | two indices |
| Count | How many elements meet a condition? | int |
| At least one / all | Does any element qualify? Does every element? | boolean |
| Search for a location | Where is the first copy of a target? | an int array \`{r, c}\` |

All examples use this 3 x 4 grid of daily sales (rows are weeks, columns are store locations):

\`\`\`java
int[][] sales = {
    {12,  7, 19,  4},
    { 9, 21,  3, 15},
    {18,  6, 21, 15}
};
\`\`\`

> 🔑 **Key Concept:** In a rectangular grid, \`grid.length\` is the number of rows and \`grid[0].length\` is the number of columns. The number of elements is \`grid.length * grid[0].length\`, here 3 x 4 = 12, and a full traversal visits each one exactly once.
      `
    },
    {
      id: 'csa2darr2-totals',
      type: 'text' as const,
      content: `
## Total and Average

\`\`\`java
int total = 0;
for (int r = 0; r < sales.length; r++) {
    for (int c = 0; c < sales[0].length; c++) {
        total += sales[r][c];
    }
}
double avg = (double) total / (sales.length * sales[0].length);
\`\`\`

\`total\` is declared **before both loops**, so it keeps growing across rows: the row sums 42, 48 and 60 add to 150. The divisor is the element count, 12.

| Expression | Value | Why |
|---|---|---|
| \`(double) total / (sales.length * sales[0].length)\` | 12.5 | the cast makes the division a double division |
| \`total / (sales.length * sales[0].length)\` | 12 | int / int drops the .5, even if stored in a double (12.0) |
| \`(double) total / sales.length\` | 50.0 | divides by the number of rows, which is the average **row sum** |

## Maximum and Minimum With Their Location

To report **where** the extreme value is, keep both indices and compare against the element they point to:

\`\`\`java
int maxRow = 0;
int maxCol = 0;
for (int r = 0; r < sales.length; r++) {
    for (int c = 0; c < sales[0].length; c++) {
        if (sales[r][c] > sales[maxRow][maxCol]) {
            maxRow = r;
            maxCol = c;
        }
    }
}
// maxRow is 1, maxCol is 1, and sales[maxRow][maxCol] is 21
\`\`\`

- Starting at \`[0][0]\` makes the first element the first candidate, so the method works for any grid, including one whose values are all negative.
- Starting a separate \`int max = 0;\` fails for an all-negative grid: nothing is greater than 0, so the answer is 0, which is not in the grid.
- Changing \`>\` to \`<\` finds the minimum: 3, at row 1, column 2.

### Ties in Row-Major Order

The value 21 appears at row 1, column 1 and at row 2, column 2. A row-major traversal meets row 1 first.

| Test | Result | Reason |
|---|---|---|
| \`>\` | row 1, column 1 | a later 21 only ties, so the location stays |
| \`>=\` | row 2, column 2 | every later 21 replaces the location, so the last one wins |

## Counting

\`\`\`java
int count = 0;
for (int r = 0; r < sales.length; r++) {
    for (int c = 0; c < sales[0].length; c++) {
        if (sales[r][c] > 10) {
            count++;
        }
    }
}
// count is 7: 12, 19, 21, 15, 18, 21, 15
\`\`\`

> 🎯 **AP Connection:** Question 4 of the free-response section usually asks for an index, a count, or a changed grid, not for a printed value. If the prompt asks for a **location**, keep the row and the column; returning only the value earns nothing for that step.
      `
    },
    {
      id: 'csa2darr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
int[][] g = {{4, 9, 2}, {7, 1, 4}};
int total = 0;
for (int r = 0; r < g.length; r++) {
    for (int c = 0; c < g[0].length; c++) {
        total += g[r][c];
    }
}
double avg = total / (g.length * g[0].length);
System.out.println(avg);
\`\`\`

**Segment B**
\`\`\`java
int[][] t = {{-6, -2}, {-9, -4}};
int max = 0;
for (int r = 0; r < t.length; r++) {
    for (int c = 0; c < t[0].length; c++) {
        if (t[r][c] > max) {
            max = t[r][c];
        }
    }
}
\`\`\`

**Segment C**
\`\`\`java
int[][] p = {{5, 8, 3}, {8, 2, 8}};
int bestR = 0;
int bestC = 0;
for (int r = 0; r < p.length; r++) {
    for (int c = 0; c < p[0].length; c++) {
        if (p[r][c] >= p[bestR][bestC]) {
            bestR = r;
            bestC = c;
        }
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '4.0',
              '4.5',
              '13.0',
              '9.0'
            ],
            correctAnswer: 0,
            explanation: 'The total is 27 and the divisor is 2 * 3 = 6. Both are int values, so 27 / 6 is 4 before the result is stored in avg, which prints 4.0; 4.5 would need a cast on total.'
          },
          {
            question: 'What is the value of max after Segment B runs?',
            options: [
              '0',
              '-2',
              '-6',
              '-9'
            ],
            correctAnswer: 0,
            explanation: 'Every element is negative, so no element is greater than the starting value 0 and max never changes. Starting at t[0][0] instead would give the real maximum, -2.'
          },
          {
            question: 'After Segment C runs, which location do bestR and bestC describe?',
            options: [
              'row 1, column 2',
              'row 0, column 1',
              'row 1, column 0',
              'row 0, column 2'
            ],
            correctAnswer: 0,
            explanation: 'The test >= lets every 8 replace the location, and row-major order meets the 8s at row 0 column 1, row 1 column 0 and row 1 column 2. The last one stays, while > would have kept row 0, column 1.'
          }
        ]
      }
    },
    {
      id: 'csa2darr2-anyall',
      type: 'text' as const,
      content: `
## At Least One vs. All

The 1D patterns carry over. The deciding \`return\` goes **inside** the inner loop, and the default \`return\` goes **after both loops**.

\`\`\`java
public static boolean anyZero(int[][] grid) {
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 0) {
                return true;            // one example proves it
            }
        }
    }
    return false;                       // only after every element
}

public static boolean allInRange(int[][] grid, int low, int high) {
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] < low || grid[r][c] > high) {
                return false;           // one counterexample disproves it
            }
        }
    }
    return true;
}
\`\`\`

For \`sales\`, \`anyZero\` returns false, \`allInRange(sales, 1, 25)\` returns true, and \`allInRange(sales, 5, 25)\` returns false as soon as it reaches the 4.

### The 2D Bug: A Default Return Between the Loops

\`\`\`java
for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < grid[0].length; c++) {
        if (grid[r][c] == 0) {
            return true;
        }
    }
    return false;       // runs as soon as row 0 is finished
}
\`\`\`

The \`return false\` is inside the outer loop, so the method gives up after **row 0**. For \`{{4, 1}, {0, 6}}\` it returns false even though row 1 holds a 0.

## Searching for a Location

Part 1's search returned only true or false. To report **where** a target is, return the two indices in a new int array, and use \`{-1, -1}\` (not a real location) when the target is missing.

\`\`\`java
public static int[] findValue(int[][] grid, int target) {
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == target) {
                return new int[] {r, c};
            }
        }
    }
    return new int[] {-1, -1};
}
\`\`\`

| Call | Returns | Elements examined |
|---|---|---|
| \`findValue(sales, 21)\` | \`{1, 1}\` | 6 |
| \`findValue(sales, 3)\` | \`{1, 2}\` | 7 |
| \`findValue(sales, 50)\` | \`{-1, -1}\` | 12, every element |

The method finds the **first** copy in row-major order. A column-major version (columns in the outer loop) finds the first copy in column-major order, which can be a different element.
      `
    },
    {
      id: 'csa2darr2-patterns',
      type: 'dropdown-select' as const,
      content: `
**Pick the Pattern** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In anyZero, the statement that comes after both loops is return ___',
            options: ['false', 'true', 'grid[r][c] == 0', 'count']
          },
          {
            label: 'With return false placed between the two closing braces of the loops, the search examines only row ___',
            options: ['0', '1', 'grid.length - 1', 'r + 1']
          },
          {
            label: 'Searching a 3 x 4 grid for a missing value examines ___ elements',
            options: ['12', '7', '4', '3']
          }
        ],
        correctAnswers: ['false', '0', '12'],
        hint1: 'A true answer would already have been returned from inside the loops.',
        hint2: 'The early return runs right after the inner loop finishes for the first time.',
        hint3: 'A missing target means every element is checked once.',
        explanation: 'Reaching the end of anyZero means no 0 was found, so it returns false. A default return between the loops runs as soon as the inner loop finishes for row 0. A missing target forces a check of all 3 x 4 = 12 elements.'
      }
    },
    {
      id: 'csa2darr2-worked',
      type: 'text' as const,
      content: `
## Worked Example: How Many Values Reach the Average?

**Task.** Return the number of elements that are greater than or equal to the average of all elements in \`grid\`.

\`\`\`java
public static int countAtLeastAverage(int[][] grid) {
    int total = 0;
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            total += grid[r][c];
        }
    }
    double avg = (double) total / (grid.length * grid[0].length);

    int count = 0;
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] >= avg) {
                count++;
            }
        }
    }
    return count;
}
\`\`\`

**Step 1 — Why two passes?** The average is not known until every element has been added, so a single traversal cannot compare elements with it. The first pass totals; the second pass counts.

**Step 2 — First pass on \`sales\`.** The total is 150, there are 12 elements, and avg is 12.5.

**Step 3 — Second pass.** Compare each element with 12.5:

| Row | Elements | At least 12.5 |
|---|---|---|
| 0 | 12, 7, 19, 4 | 19 |
| 1 | 9, 21, 3, 15 | 21, 15 |
| 2 | 18, 6, 21, 15 | 18, 21, 15 |

**Step 4 — Answer.** The method returns 6.

**Step 5 — The int-division trap.** Without the cast, \`total / 12\` is 12, and the comparison \`12 >= 12\` is true, so the element 12 is counted too and the method returns 7. The bug is invisible on grids whose total happens to divide evenly, which is why it survives casual testing.
      `
    },
    {
      id: 'csa2darr2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
int[][] pts = {
    {6, 3, 8},
    {3, 9, 3},
    {7, 3, 5}
};
\`\`\`

**Method B**
\`\`\`java
public static boolean anyNegative(int[][] grid) {
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] < 0) {
                return true;
            }
        }
        return false;
    }
    return false;
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does findValue(pts, 3) return?',
            options: [
              '{0, 1}',
              '{1, 0}',
              '{1, 2}',
              '{2, 1}'
            ],
            correctAnswer: 0,
            explanation: 'Row-major order checks row 0 first, and the first 3 it meets is at row 0, column 1. The location row 1, column 0 is what a column-major search would find first.'
          },
          {
            question: 'For which grid does Method B return an incorrect result?',
            options: [
              '{{2, 1}, {-3, 4}}',
              '{{2, -1}, {3, 4}}',
              '{{2, 1}, {3, 4}}',
              '{{-2, 1}, {3, 4}}'
            ],
            correctAnswer: 0,
            explanation: 'The return false between the loops ends the method after row 0. The only negative value in {{2, 1}, {-3, 4}} is in row 1, so the method never sees it; the other grids are answered correctly from row 0 alone.'
          },
          {
            question: 'Why does findValue return {-1, -1} when the target is missing?',
            options: [
              'No real location has a negative index',
              'Java requires a non-null array to be returned',
              'An empty array would cause a compile error',
              'The value -1 means the target was found twice'
            ],
            correctAnswer: 0,
            explanation: 'Every real row and column index is 0 or more, so -1 cannot be mistaken for a location and the caller can test for it. Returning null or an empty array would also compile; -1 is simply a clear signal.'
          },
          {
            question: 'countAtLeastAverage is called with {{2, 5}, {4, 6}}. What does it return, and what would the version without the cast return?',
            options: [
              '2 with the cast, 3 without it',
              '3 with the cast, 2 without it',
              '2 with the cast, 2 without it',
              '3 with the cast, 3 without it'
            ],
            correctAnswer: 0,
            explanation: 'The total is 17, so the true average is 4.25 and only 5 and 6 reach it. Without the cast the average becomes 4, and 4 >= 4 adds a third element.'
          }
        ]
      }
    }
  ]
}
