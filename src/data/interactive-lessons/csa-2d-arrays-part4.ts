export const csa2dArraysPart4Data = {
  topicSlug: 'csa-2d-arrays',
  sections: [
    {
      id: 'csa2darr4-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Array Algorithms

**Part 4 of 7 — Neighbors, Diagonals, and Regions**

---

Game boards, images and maps all ask questions about an element **and the elements around it**. This part covers neighbor checks, the second diagonal, interior regions, 2 x 2 blocks and symmetry (CED Topic 4.13). Every one of them comes down to the same skill: computing an index and proving it stays inside the grid.

| Region | Index pattern | Guard needed |
|---|---|---|
| 4 neighbors (up, down, left, right) | \`[r - 1][c]\`, \`[r + 1][c]\`, \`[r][c - 1]\`, \`[r][c + 1]\` | one test per direction |
| 8 neighbors | \`[r + dr][c + dc]\` for dr and dc from -1 to 1 | a range test, and skip the element itself |
| Anti-diagonal of an n x n grid | \`[i][n - 1 - i]\` | none when i runs 0 to n - 1 |
| Interior elements | r from 1 to \`length - 2\` | none: every interior element has all 4 neighbors |
| 2 x 2 blocks | top-left corner \`[r][c]\` | r stops at \`length - 2\`, c at \`[0].length - 2\` |

Most examples use this 3 x 4 height map:

\`\`\`java
int[][] h = {
    {3, 5, 2, 4},
    {6, 9, 1, 7},
    {2, 8, 4, 3}
};
\`\`\`

> 🔑 **Key Concept:** Before you read \`grid[r - 1][c]\`, prove that \`r - 1\` is at least 0. Before you read \`grid[r + 1][c]\`, prove that \`r + 1\` is at most \`grid.length - 1\`. Java checks every index at run time and stops the program with an ArrayIndexOutOfBoundsException when the proof is missing.
      `
    },
    {
      id: 'csa2darr4-neighbors',
      type: 'text' as const,
      content: `
## The Four Neighbors

\`\`\`java
public static int neighborSum(int[][] grid, int r, int c) {
    int sum = 0;
    if (r > 0) {
        sum += grid[r - 1][c];          // up
    }
    if (r < grid.length - 1) {
        sum += grid[r + 1][c];          // down
    }
    if (c > 0) {
        sum += grid[r][c - 1];          // left
    }
    if (c < grid[0].length - 1) {
        sum += grid[r][c + 1];          // right
    }
    return sum;
}
\`\`\`

| Call | Neighbors that exist | Returns |
|---|---|---|
| \`neighborSum(h, 1, 1)\` | up 5, down 8, left 6, right 1 | 20 |
| \`neighborSum(h, 0, 0)\` | down 6, right 5 | 11 |
| \`neighborSum(h, 0, 2)\` | down 1, left 5, right 4 | 10 |

A **corner** element has 2 neighbors, an **edge** element that is not a corner has 3, and an **interior** element has 4.

### Guard Order Matters

Java evaluates \`&&\` left to right and stops at the first false, so the bounds test must come **first**:

| Condition at r = 0 | Result |
|---|---|
| \`r > 0 && grid[r - 1][c] > 5\` | false; the array is never read |
| \`grid[r - 1][c] > 5 && r > 0\` | ArrayIndexOutOfBoundsException: index -1 is read first |

## The Eight Neighbors

Two small loops over the offsets -1, 0 and 1 reach all eight surrounding elements:

\`\`\`java
public static int countBig(int[][] grid, int r, int c, int limit) {
    int count = 0;
    for (int dr = -1; dr <= 1; dr++) {
        for (int dc = -1; dc <= 1; dc++) {
            int nr = r + dr;
            int nc = c + dc;
            if ((dr != 0 || dc != 0) && nr >= 0 && nr < grid.length
                    && nc >= 0 && nc < grid[0].length) {
                if (grid[nr][nc] > limit) {
                    count++;
                }
            }
        }
    }
    return count;
}
\`\`\`

- \`(dr != 0 || dc != 0)\` skips the offset (0, 0), which is the element itself.
- \`countBig(h, 1, 2, 5)\` returns 3: of the eight neighbors of the 1, the values 9, 7 and 8 exceed 5.
- \`countBig(h, 0, 0, 5)\` returns 2: the corner has only three neighbors (5, 6 and 9).
- Without the skip test, \`countBig(h, 1, 1, 5)\` counts the 9 itself and returns 3 instead of 2.
      `
    },
    {
      id: 'csa2darr4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
int[][] m = {
    {4, 1, 6},
    {2, 8, 3},
    {5, 7, 9},
    {1, 0, 2}
};
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does neighborSum(m, 2, 1) return?',
            options: [
              '22',
              '29',
              '13',
              '17'
            ],
            correctAnswer: 0,
            explanation: 'The neighbors of the 7 are 8 above, 0 below, 5 to the left and 9 to the right, for 22. The 0 below still counts as a neighbor, and 29 wrongly adds the 7 itself.'
          },
          {
            question: 'How many 4-neighbors does the element at row 2, column 0 of m have?',
            options: [
              '3',
              '2',
              '4',
              '8'
            ],
            correctAnswer: 0,
            explanation: 'The 5 is on the left edge but is not a corner, so it has an up, a down and a right neighbor. Only corners have 2, and only interior elements have all 4.'
          },
          {
            question: 'A student guards the up neighbor with if (r >= 0) instead of if (r > 0). What happens when neighborSum(m, 0, 0) runs?',
            options: [
              'It throws an exception',
              'It returns 3, the same sum',
              'It wraps around to m[3][0]',
              'It treats the missing value as 0'
            ],
            correctAnswer: 0,
            explanation: 'With r equal to 0 the test r >= 0 is true, so the method reads m[-1][0]. Java does not wrap around or substitute 0; it throws an ArrayIndexOutOfBoundsException.'
          }
        ]
      }
    },
    {
      id: 'csa2darr4-regions',
      type: 'text' as const,
      content: `
## The Anti-Diagonal

Part 1 used \`grid[i][i]\` for the main diagonal (top-left to bottom-right) of a square grid. The **anti-diagonal** runs from top-right to bottom-left: in row i, the column is \`n - 1 - i\`.

\`\`\`java
int[][] sq = {
    {2, 7, 1, 5},
    {4, 3, 8, 6},
    {9, 0, 6, 2},
    {1, 5, 4, 7}
};
int n = sq.length;
int anti = 0;
for (int i = 0; i < n; i++) {
    anti += sq[i][n - 1 - i];       // 5 + 8 + 0 + 1
}
// anti is 14; the main diagonal (2 + 3 + 6 + 7) is 18
\`\`\`

Writing \`sq[i][n - i]\` reads \`sq[0][4]\` on the first pass and throws. To test whether an element is on **either** diagonal, use \`r == c || r + c == n - 1\`: a 4 x 4 grid has 8 such elements, and a 5 x 5 grid has 9, because the center belongs to both.

## Interior Elements

Shrinking both loops by one at each end leaves only elements that have all four neighbors, so the body needs no guards:

\`\`\`java
for (int r = 1; r < grid.length - 1; r++) {
    for (int c = 1; c < grid[0].length - 1; c++) {
        // grid[r - 1][c], grid[r + 1][c], grid[r][c - 1], grid[r][c + 1] are all safe
    }
}
\`\`\`

\`h\` has (3 - 2) x (4 - 2) = 2 interior elements: the 9 and the 1 in row 1. A 5 x 6 grid has 3 x 4 = 12.

## 2 x 2 Blocks

Each block is named by its top-left corner, so the corner must leave room for one more row and one more column:

\`\`\`java
int bestSum = 0;
int bestR = 0;
int bestC = 0;
for (int r = 0; r < grid.length - 1; r++) {
    for (int c = 0; c < grid[0].length - 1; c++) {
        int s = grid[r][c] + grid[r][c + 1] + grid[r + 1][c] + grid[r + 1][c + 1];
        if ((r == 0 && c == 0) || s > bestSum) {
            bestSum = s;
            bestR = r;
            bestC = c;
        }
    }
}
\`\`\`

| Top-left corner | (0, 0) | (0, 1) | (0, 2) | (1, 0) | (1, 1) | (1, 2) |
|---|---|---|---|---|---|---|
| Block sum in \`h\` | 23 | 17 | 14 | **25** | 22 | 15 |

A 3 x 4 grid has (3 - 1) x (4 - 1) = 6 blocks, and the best is the block whose corner is row 1, column 0. With \`c < grid[0].length\`, the last corner in each row reads column 4 and throws.

## Symmetry

A square grid is **symmetric** when \`grid[r][c] == grid[c][r]\` for every r and c. Comparing only the elements above the diagonal checks each pair once:

\`\`\`java
public static boolean isSymmetric(int[][] grid) {
    for (int r = 0; r < grid.length; r++) {
        for (int c = r + 1; c < grid.length; c++) {
            if (grid[r][c] != grid[c][r]) {
                return false;
            }
        }
    }
    return true;
}
\`\`\`

\`{{1, 4, 7}, {4, 2, 5}, {7, 5, 3}}\` is symmetric after 3 comparisons. A 4 x 4 grid needs 3 + 2 + 1 = 6 comparisons, and a 5 x 5 grid needs 10.
      `
    },
    {
      id: 'csa2darr4-patterns',
      type: 'dropdown-select' as const,
      content: `
**Pick the Index** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On an n x n grid, the anti-diagonal element in row i is grid[i][___]',
            options: ['n - 1 - i', 'n - i', 'i', 'n - 1']
          },
          {
            label: 'An interior-only loop starts r at 1 and continues while r is less than ___',
            options: ['grid.length - 1', 'grid.length', 'grid.length - 2', 'grid.length + 1']
          },
          {
            label: 'A 3 x 4 grid contains ___ different 2 x 2 blocks',
            options: ['6', '12', '4', '9']
          }
        ],
        correctAnswers: ['n - 1 - i', 'grid.length - 1', '6'],
        hint1: 'In row 0 the anti-diagonal is in the last column.',
        hint2: 'The last interior row is the one just before the bottom row.',
        hint3: 'Count the possible top-left corners.',
        explanation: 'Row 0 needs column n - 1 and row n - 1 needs column 0, which n - 1 - i gives. The last interior row is grid.length - 2, so the loop runs while r is less than grid.length - 1. Top-left corners fill a 2 x 3 area, so there are 6 blocks.'
      }
    },
    {
      id: 'csa2darr4-worked',
      type: 'text' as const,
      content: `
## Worked Example: Counting Peaks

**Task.** An element is a **peak** if it is strictly greater than every 4-neighbor that exists. Return the number of peaks in a grid.

\`\`\`java
public static boolean isPeak(int[][] grid, int r, int c) {
    int v = grid[r][c];
    if (r > 0 && grid[r - 1][c] >= v) {
        return false;
    }
    if (r < grid.length - 1 && grid[r + 1][c] >= v) {
        return false;
    }
    if (c > 0 && grid[r][c - 1] >= v) {
        return false;
    }
    if (c < grid[0].length - 1 && grid[r][c + 1] >= v) {
        return false;
    }
    return true;
}

public static int countPeaks(int[][] grid) {
    int count = 0;
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (isPeak(grid, r, c)) {
                count++;
            }
        }
    }
    return count;
}
\`\`\`

**Step 1 — Read the helper.** \`isPeak\` is the "all" pattern: any neighbor that is at least as large is a counterexample. Each test puts its bounds check before \`&&\`, so missing neighbors are skipped rather than read.

**Step 2 — Trace the candidates in \`h\`.**

| Element | Neighbors that exist | Peak? |
|---|---|---|
| 9 at (1, 1) | 5, 8, 6, 1 | yes |
| 7 at (1, 3) | 4 above, 3 below, 1 to the left | yes: it is on the right edge |
| 8 at (2, 1) | 9 above, 2, 4 | no: 9 is larger |
| 5 at (0, 1) | 9 below, 3, 2 | no |
| 6 at (1, 0) | 3, 2, 9 | no |

Every other element has a larger neighbor right beside it.

**Step 3 — Answer.** \`countPeaks(h)\` returns 2.

**Step 4 — Why not use the interior loop?** An interior-only loop needs no guards, but it never visits edge elements, so it would miss the 7 and return 1. Use interior bounds only when the task excludes the edges.
      `
    },
    {
      id: 'csa2darr4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
int[][] a = {
    {1, 6, 2},
    {7, 3, 8},
    {2, 9, 4}
};
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does countPeaks(a) return?',
            options: [
              '4',
              '1',
              '2',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'The 6, 7, 8 and 9 each beat all of their existing neighbors; the corners and the center 3 do not. An interior-only loop would examine just the 3 and find no peaks at all.'
          },
          {
            question: 'The test (dr != 0 || dc != 0) is deleted from countBig. What does countBig(h, 1, 1, 5) return now?',
            options: [
              '3',
              '2',
              '8',
              '9'
            ],
            correctAnswer: 0,
            explanation: 'Without the test the offset (0, 0) is included, so the 9 at row 1, column 1 is counted as its own neighbor. The real neighbors above 5 are only the 6 and the 8, which gives 2.'
          },
          {
            question: 'Why does isSymmetric start its inner loop at c = r + 1?',
            options: [
              'Each pair is checked once',
              'Starting at 0 would go out of bounds',
              'Values below the diagonal cannot differ',
              'The diagonal must be checked separately'
            ],
            correctAnswer: 0,
            explanation: 'Above the diagonal, every pair (r, c) and (c, r) appears exactly once, and the diagonal itself always matches. Starting at 0 would still be in bounds; it would just repeat every comparison.'
          },
          {
            question: 'How many comparisons does isSymmetric make on a symmetric 5 x 5 grid?',
            options: [
              '10',
              '25',
              '20',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'The inner loop runs 4 + 3 + 2 + 1 + 0 times. The value 25 would count every element, and 20 would count every element off the diagonal, checking each pair twice.'
          }
        ]
      }
    }
  ]
}
