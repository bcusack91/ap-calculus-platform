/**
 * Entrance Quiz — 2D Array Algorithms (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'c2s-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Inside nested loops over the rectangular grid grid, which condition is true exactly for the elements on its outer border?',
    options: ['r == 0 || c == 0', 'r == grid.length - 1 && c == grid[0].length - 1', 'r == 0 || r == grid.length || c == 0 || c == grid[0].length', 'r == 0 || r == grid.length - 1 || c == 0 || c == grid[0].length - 1'],
    correctIndex: 3,
    explanation: 'An element is on the border when it is in the first or last row or the first or last column, and the last valid indices are length - 1. Testing against length itself never matches, so the bottom and right edges would be missed.',
  },
  {
    id: 'c2s-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nint[][] g = {{3, 1, 4}, {1, 5, 9}, {2, 6, 5}};\nint sum = 0;\nfor (int i = 0; i < g.length; i++) {\nsum += g[i][i];\n}\nint col = 0;\nfor (int r = 0; r < g.length; r++) {\ncol += g[r][2];\n}\nSystem.out.println(sum + " " + col);',
    options: ['13 18', '13 8', '11 18', '18 13'],
    correctIndex: 0,
    explanation: 'The main diagonal holds g[0][0], g[1][1] and g[2][2]: 3 + 5 + 5 = 13. Column 2 fixes the column and varies the row: 4 + 9 + 5 = 18.',
  },
  {
    id: 'c2s-ent-2a', partNumber: 2, partTitle: 'Whole-Grid Algorithms: Totals, Extremes, Counts, and Searches',
    question: 'What is printed?\nint[][] p = {{6, 2, 9}, {9, 4, 1}};\nint bestR = 0;\nint bestC = 0;\nfor (int r = 0; r < p.length; r++) {\nfor (int c = 0; c < p[0].length; c++) {\nif (p[r][c] >= p[bestR][bestC]) {\nbestR = r;\nbestC = c;\n}\n}\n}\nSystem.out.println(bestR + " " + bestC);',
    options: ['1 0', '1 2', '0 2', '0 0'],
    correctIndex: 0,
    explanation: 'In row-major order the location moves to the 9 at row 0, column 2. Because the test is >=, the tied 9 at row 1, column 0 replaces it, so the last copy wins.',
  },
  {
    id: 'c2s-ent-2b', partNumber: 2, partTitle: 'Whole-Grid Algorithms: Totals, Extremes, Counts, and Searches',
    question: 'This method returns false for {{4, 1}, {0, 6}} even though the grid holds a 0. What is wrong?\npublic static boolean anyZero(int[][] grid) {\nfor (int r = 0; r < grid.length; r++) {\nfor (int c = 0; c < grid[0].length; c++) {\nif (grid[r][c] == 0) { return true; }\n}\nreturn false;\n}\nreturn false;\n}',
    options: ['The inner loop starts at column 1', 'The test == 0 should be written <= 0', 'Row 1 is skipped because r starts at 1', 'It gives up as soon as row 0 is finished'],
    correctIndex: 3,
    explanation: 'The first return false sits between the two closing braces, inside the outer loop, so it runs right after row 0. The default answer belongs after both loops.',
  },
  {
    id: 'c2s-ent-3a', partNumber: 3, partTitle: 'Row and Column Results',
    question: 'A method should return an array holding one total for each row of grid. Which declaration creates the result array correctly?',
    options: ['int[] totals = new int[grid[0].length];', 'int[][] totals = new int[grid.length][1];', 'int[] totals = new int[grid.length];', 'int[] totals = new int[grid.length * grid[0].length];'],
    correctIndex: 2,
    explanation: 'There is one result per row, and grid.length is the number of rows. grid[0].length counts columns, which gives the wrong size whenever the grid is not square.',
  },
  {
    id: 'c2s-ent-3b', partNumber: 3, partTitle: 'Row and Column Results',
    question: 'What is the value of count after this code segment runs?\nint[][] g = {{2, 5, 1}, {3, 5, 0}, {4, 6, 2}};\nint count = 0;\nfor (int r = 1; r < g.length; r++) {\nfor (int c = 0; c < g[0].length; c++) {\nif (g[r][c] > g[r - 1][c]) {\ncount++;\n}\n}\n}',
    options: ['4', '3', '5', '6'],
    correctIndex: 0,
    explanation: 'Each element is compared with the one above it. In row 1 only the 3 beats the 2 above it (5 ties 5); in row 2 all three elements beat row 1, for 1 + 3 = 4.',
  },
  {
    id: 'c2s-ent-4a', partNumber: 4, partTitle: 'Neighbors, Diagonals, and Regions',
    question: 'neighborSum(grid, r, c) adds the up, down, left and right neighbors of grid[r][c] that exist, guarding each one with a bounds test. For g = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}, what does neighborSum(g, 2, 1) return?',
    options: ['29', '21', '14', '30'],
    correctIndex: 1,
    explanation: 'Row 2 is the bottom row, so there is no neighbor below. The neighbors that exist are 5 above, 7 to the left and 9 to the right, which add to 21.',
  },
  {
    id: 'c2s-ent-4b', partNumber: 4, partTitle: 'Neighbors, Diagonals, and Regions',
    question: 'sq is an n by n grid. Which expression is the element of the anti-diagonal (top-right to bottom-left) in row i?',
    options: ['sq[i][n - i]', 'sq[n - i][i]', 'sq[i][i]', 'sq[i][n - 1 - i]'],
    correctIndex: 3,
    explanation: 'In row 0 the anti-diagonal is in the last column, n - 1, and each later row moves one column left. sq[i][n - i] reads column n in row 0, which is out of bounds.',
  },
  {
    id: 'c2s-ent-5a', partNumber: 5, partTitle: 'Building and Transforming Grids',
    question: 'A 1D array arr is copied into a grid with 4 rows and 6 columns in row-major order, using grid[k / 6][k % 6] = arr[k]. Where does arr[15] land?',
    options: ['row 3, column 3', 'row 2, column 5', 'row 2, column 3', 'row 3, column 2'],
    correctIndex: 2,
    explanation: 'Each row holds 6 elements, so 15 / 6 = 2 full rows come before it and 15 % 6 = 3 is its column. Dividing by the number of rows, 4, would give row 3, column 3.',
  },
  {
    id: 'c2s-ent-5b', partNumber: 5, partTitle: 'Building and Transforming Grids',
    question: 'A transpose method for a grid with 3 rows and 5 columns creates result = new int[grid.length][grid[0].length]; and then runs result[c][r] = grid[r][c]; for every r and c. What happens?',
    options: ['It returns a 5 by 3 grid with the right values', 'It throws an exception once c reaches 3', 'It returns a 3 by 5 grid with zeros at the end', 'It does not compile, since the shapes differ'],
    correctIndex: 1,
    explanation: 'The result has the original shape, 3 rows, but result[c][r] uses c as a row index. When c reaches 3, result[3] does not exist; a transpose needs new int[grid[0].length][grid.length].',
  },
  {
    id: 'c2s-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'An ElevationMap constructor computes numCols = data.length / numRows, creates heights = new int[numRows][numCols], and stores heights[k / numCols][k % numCols] = data[k] for every k. After new ElevationMap(new int[] {3, 1, 4, 1, 5, 9, 2, 6}, 2), what is heights[1][2]?',
    options: ['5', '9', '2', '6'],
    correctIndex: 2,
    explanation: 'With 8 values and 2 rows there are 4 columns, so row 1 holds data[4] through data[7]: 5, 9, 2, 6. Column 2 of that row is data[6], which is 2.',
  },
  {
    id: 'c2s-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'In the ElevationMap constructor, a student writes int[][] heights = new int[numRows][numCols]; and fills that array correctly. heights is also the name of the instance variable. What happens when countFlatSpots() later loops over heights?',
    options: ['It counts the flat spots correctly', 'A NullPointerException', 'A compile-time error in the constructor', 'It counts every location as flat'],
    correctIndex: 1,
    explanation: 'The declaration creates a local variable that shadows the field, so the filled grid disappears when the constructor ends. The instance variable is still null, and reading heights.length throws.',
  },
  {
    id: 'c2s-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'w is {{4, 7, 2}, {9, 3, 7}, {7, 6, 5}}. A search with the column loop outside and the row loop inside returns the location of the first 7 it meets as {row, col}. What does it return?',
    options: ['{0, 1}', '{1, 2}', '{2, 0}', '{0, 2}'],
    correctIndex: 2,
    explanation: 'Column-major order checks all of column 0 first: 4, 9, then the 7 at row 2. A row-major search would stop sooner, at row 0, column 1.',
  },
  {
    id: 'c2s-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is the value of count after this code segment runs?\nint[][] v = {{1, 4, 3}, {5, 7, 9}};\nint count = 0;\nboolean allOdd = true;\nfor (int c = 0; c < v[0].length; c++) {\nfor (int r = 0; r < v.length; r++) {\nif (v[r][c] % 2 == 0) {\nallOdd = false;\n}\n}\nif (allOdd) {\ncount++;\n}\n}',
    options: ['2', '1', '0', '3'],
    correctIndex: 1,
    explanation: 'Column 0 is all odd and is counted. The flag is declared outside the outer loop, so after column 1 sets it to false it is never reset, and the all-odd column 2 is missed.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Whole-Grid Algorithms: Totals, Extremes, Counts, and Searches' },
    { partNumber: 3, partTitle: 'Row and Column Results' },
    { partNumber: 4, partTitle: 'Neighbors, Diagonals, and Regions' },
    { partNumber: 5, partTitle: 'Building and Transforming Grids' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
