export const csa2dArrayPart2Data = {
  topicSlug: 'csa-2d-array',
  sections: [
    {
      id: 'csa2darr2-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Arrays

**Part 2 of 7 — Creating 2D Arrays: Arrays of Arrays**

---

Part 1 showed how to declare a 2D array, read \`matrix[r][c]\`, and loop over it. This part looks at what \`new\` actually builds (CED Topic 4.11). Nearly every tricky 2D question on the exam comes back to one picture:

> 🔑 **Key Concept:** A 2D array is a 1D array whose elements are references to 1D arrays. The outer array holds one reference per **row**; each row is its own array of elements.

\`\`\`
grid ──► outer array
           [0] ──► {1, 2, 3}     row 0
           [1] ──► {4, 5, 6}     row 1
\`\`\`

| In this part |
|---|
| Sizes computed from expressions, and default values |
| What an initializer list must look like |
| \`grid[r]\` is a whole row: a 1D array you can name |
| Which index an ArrayIndexOutOfBoundsException comes from |
| 2D array variables, aliases and \`==\` |
| Passing a 2D array to a method and returning a new one |
      `
    },
    {
      id: 'csa2darr2-create',
      type: 'text' as const,
      content: `
## Creating a Grid With new

The first size is the number of rows, the second the number of columns. Either size can be any int expression; both are evaluated once, when \`new\` runs.

\`\`\`java
int n = 3;
double[][] temps = new double[n][n + 4];      // 3 rows, 7 columns, all 0.0
boolean[][] seen = new boolean[2][5];         // 2 rows, 5 columns, all false
String[][] names = new String[2][3];          // 2 rows of 3 slots, all null
\`\`\`

\`new double[n][n + 4]\` builds **four** array objects: one outer array of length 3, plus three row arrays of length 7. Changing \`n\` later does not resize anything.

| Element type | Every element after \`new\` | \`grid.length\` for \`new T[2][5]\` | \`grid[0].length\` |
|---|---|---|---|
| \`int\` | 0 | 2 | 5 |
| \`double\` | 0.0 | 2 | 5 |
| \`boolean\` | false | 2 | 5 |
| \`String\` or any class | null | 2 | 5 |

### Rows Exist; Elements May Be null

\`new String[2][3]\` creates the rows, so \`names[0]\` is a real array of length 3. Only the **elements** are null.

\`\`\`java
System.out.println(names[0].length);      // 3: row 0 exists
System.out.println(names[1][2]);          // prints null
int k = names[0][0].length();             // NullPointerException
\`\`\`

Printing a null element is fine. The exception comes only when a method such as \`length()\` is called through the null reference.

## Initializer Lists

\`\`\`java
int[][] scores = {{90, 85, 77},
                  {68, 94, 81}};          // 2 rows, 3 columns
\`\`\`

- Each inner pair of braces is one row, written in order from row 0. The number of inner lists is \`scores.length\`; the number of values in each is \`scores[0].length\`.
- On the AP exam every row has the same length, so the grid is a rectangle.
- As with 1D arrays, the braces form is allowed only in the declaration. \`scores = {{1, 2}, {3, 4}};\` on its own line does not compile.
      `
    },
    {
      id: 'csa2darr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
int k = 2;
String[][] board = new String[k + 1][k * 2];
board[0][3] = "X";
board[2][0] = "O";
k = 5;
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'After Segment A runs, what are board.length and board[0].length?',
            options: [
              '3 and 4',
              '6 and 10',
              '4 and 3',
              '2 and 4'
            ],
            correctAnswer: 0,
            explanation: 'The sizes k + 1 and k * 2 are evaluated when new runs, giving 3 rows and 4 columns. Changing k afterward does not resize the grid, and the row count comes first.'
          },
          {
            question: 'Which statement, placed after Segment A, throws a NullPointerException?',
            options: [
              'int len = board[1][1].length();',
              'String b = board[1][1] + "!";',
              'int c = board[2][0].length();',
              'int d = board[1].length;'
            ],
            correctAnswer: 0,
            explanation: 'board[1][1] was never assigned, so calling length() through it throws. Joining null to a String gives "null!", board[2][0] holds "O", and board[1] is a real row of length 4.'
          },
          {
            question: 'Which statement, placed after Segment A, throws an ArrayIndexOutOfBoundsException?',
            options: [
              'board[3][0] = "X";',
              'board[0][3] = "O";',
              'board[2][3] = "X";',
              'board[1][0] = "O";'
            ],
            correctAnswer: 0,
            explanation: 'The grid has rows 0 to 2 and columns 0 to 3, so row index 3 does not exist. Column index 3 is the last valid column, which is why the other three statements run normally.'
          }
        ]
      }
    },
    {
      id: 'csa2darr2-rows',
      type: 'text' as const,
      content: `
## grid[r] Is a Whole Row

With one index, \`grid[r]\` is not an element; it is the reference to row \`r\`, a 1D array. You can store it in an \`int[]\` variable, and that variable becomes an **alias** for the row.

\`\`\`java
int[][] grid = {{1, 2, 3},
                {4, 5, 6}};
int[] row = grid[1];                  // row refers to the real row 1
row[0] = 40;
System.out.println(grid[1][0]);      // 40
System.out.println(row.length);      // 3
\`\`\`

No values were copied: \`row\` and \`grid[1]\` are two names for one array, so a change through either is seen through both.

### Assigning One Row to Another Shares It

\`\`\`java
grid[0] = grid[1];                   // both outer slots now refer to row 1
grid[0][2] = 9;
System.out.println(grid[1][2]);      // 9
\`\`\`

| After the statement | grid[0] refers to | grid[1] refers to |
|---|---|---|
| start | {1, 2, 3} | {40, 5, 6} |
| \`grid[0] = grid[1];\` | the same array as grid[1] | {40, 5, 6} |
| \`grid[0][2] = 9;\` | {40, 5, 9} | the same {40, 5, 9} |

The old row \`{1, 2, 3}\` is no longer reachable. To **copy** the values instead, assign element by element, so each row stays its own array:

\`\`\`java
for (int c = 0; c < grid[0].length; c++) {
    grid[0][c] = grid[1][c];
}
\`\`\`

## Which Index Is Out of Bounds?

For the 2 by 3 \`grid\`, valid rows are 0 to 1 and valid columns are 0 to 2.

| Expression | Result | Why |
|---|---|---|
| \`grid[1][2]\` | 6 | last row, last column |
| \`grid[2][0]\` | ArrayIndexOutOfBoundsException | row index 2; only 2 rows |
| \`grid[0][3]\` | ArrayIndexOutOfBoundsException | column index 3; rows have length 3 |
| \`grid[2][5]\` | ArrayIndexOutOfBoundsException | Java finds \`grid[2]\` first, so the bad row index is reported |

> 🎯 **AP Connection:** When an answer choice says an exception is thrown, find the first access that is out of range. \`grid[r][c]\` is evaluated left to right: the row is looked up before the column.
      `
    },
    {
      id: 'csa2darr2-rowref',
      type: 'dropdown-select' as const,
      content: `
**Follow the Rows** 🔍

\`\`\`java
int[][] m = {{1, 2}, {3, 4}, {5, 6}};
int[] a = m[2];
int[] b = m[0];
a[1] = 0;
m[0] = m[1];
m[0][0] = 7;
b[1] = 8;
\`\`\`
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After the segment, m[2] holds ___',
            options: ['{5, 0}', '{5, 6}', '{0, 6}', '{7, 4}']
          },
          {
            label: 'After the segment, m[1] holds ___',
            options: ['{7, 4}', '{3, 4}', '{1, 8}', '{7, 8}']
          },
          {
            label: 'After the segment, b holds ___',
            options: ['{1, 8}', '{7, 8}', '{1, 2}', '{7, 4}']
          }
        ],
        correctAnswers: ['{5, 0}', '{7, 4}', '{1, 8}'],
        hint1: 'a is an alias for row 2, so a[1] = 0 changes that row.',
        hint2: 'After m[0] = m[1], the statement m[0][0] = 7 changes the row that m[1] also refers to.',
        hint3: 'b still refers to the original row 0, even though m[0] no longer does.',
        explanation: 'a and row 2 are one array, so a[1] = 0 gives {5, 0}. m[0] = m[1] makes both slots share row 1, so m[0][0] = 7 shows up as m[1] holding {7, 4}. b kept the old row 0, which b[1] = 8 changes to {1, 8} even though the grid no longer reaches it.'
      }
    },
    {
      id: 'csa2darr2-methods',
      type: 'text' as const,
      content: `
## A 2D Array Variable Holds a Reference Too

\`\`\`java
int[][] p = {{1, 2}, {3, 4}};
int[][] q = {{1, 2}, {3, 4}};
int[][] r = p;              // alias: one grid, two names
r[1][1] = 0;
System.out.println(p[1][1]);       // 0
System.out.println(p == q);        // false: two different grids
System.out.println(p == r);        // true: the same grid
System.out.println(p[0] == q[0]);  // false: two different rows
\`\`\`

\`==\` on grids or rows compares references. To ask whether two grids hold the same values, compare them element by element with nested loops. Printing a grid with \`System.out.println(p)\` shows a reference code, not the values.

## Passing a 2D Array to a Method

The parameter receives a copy of the reference, so it is an alias for the caller's grid.

| Inside the method | Effect on the caller |
|---|---|
| \`g[r][c] = ...\` (assign an element) | sticks: same grid |
| \`g[r] = ...\` (replace a whole row) | sticks: the caller's outer array now refers to the new row |
| \`g = new int[...][...]\` (assign the parameter) | none: only the local variable moves |

## Worked Example: What Sticks?

\`\`\`java
public static void mark(int[][] g, int v) {
    g[0][0] = v;           // changes the caller's grid
    g[1] = new int[2];     // replaces the caller's row 1 with {0, 0}
    g = new int[2][2];     // g now refers to a brand-new grid
    g[0][1] = v;           // changes only the new grid
}
\`\`\`

\`\`\`java
int[][] data = {{1, 2}, {3, 4}};
mark(data, 9);
\`\`\`

**Step 1 — Element.** \`g[0][0] = 9\` reaches the shared grid: data is \`{{9, 2}, {3, 4}}\`.

**Step 2 — Row.** \`g[1] = new int[2]\` stores a new row in the shared outer array: data is \`{{9, 2}, {0, 0}}\`.

**Step 3 — Parameter.** \`g = new int[2][2]\` moves only the local \`g\`. From here on, the method works on a grid the caller never sees.

**Step 4 — Result.** data ends as \`{{9, 2}, {0, 0}}\`.

## Returning a New Grid

\`\`\`java
public static int[][] makeGrid(int rows, int cols, int v) {
    int[][] result = new int[rows][cols];
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            result[r][c] = v;
        }
    }
    return result;
}
\`\`\`

\`int[][] sevens = makeGrid(2, 3, 7);\` stores a reference to the new grid \`{{7, 7, 7}, {7, 7, 7}}\`. The return type \`int[][]\` says the method hands back a 2D array.
      `
    },
    {
      id: 'csa2darr2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
public static void update(int[][] g, int[] extra) {
    g[1][1] = g[0][1] + 10;
    g[0] = extra;
    extra[0] = 50;
    g = new int[2][2];
    g[1][0] = 99;
}
\`\`\`

\`\`\`java
int[][] grid = {{1, 2}, {3, 4}};
int[] e = {5, 6};
update(grid, e);
System.out.println(grid[0][0] + " " + grid[1][0] + " " + grid[1][1]);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?',
            options: [
              '50 3 12',
              '5 3 12',
              '50 99 12',
              '1 3 12'
            ],
            correctAnswer: 0,
            explanation: 'g[1][1] becomes 2 + 10 = 12, and g[0] = extra makes row 0 of grid the same array as e, so extra[0] = 50 shows up in grid[0][0]. The 99 goes into a new grid the caller never sees, so grid[1][0] stays 3.'
          },
          {
            question: 'Which expression is true after the call?',
            options: [
              'grid[0] == e',
              'grid[1][0] == 99',
              'grid[0][1] == 2',
              'grid[1][1] == 4'
            ],
            correctAnswer: 0,
            explanation: 'Row 0 of grid and e are the same array, so == compares equal references. grid[0][1] is 6 because row 0 is now e, grid[1][1] was changed to 12, and the 99 never reached grid.'
          },
          {
            question: 'Which single change makes the client print 50 99 12?',
            options: [
              'Remove the line g = new int[2][2];',
              'Remove the line extra[0] = 50;',
              'Remove the line g[0] = extra;',
              'Remove the line g[1][0] = 99;'
            ],
            correctAnswer: 0,
            explanation: 'Without the new grid, g still refers to grid when g[1][0] = 99 runs, so the 99 sticks. Removing the extra[0] line prints 5 3 12, removing the row assignment prints 1 3 12, and removing the 99 line changes nothing the caller sees.'
          }
        ]
      }
    }
  ]
}
