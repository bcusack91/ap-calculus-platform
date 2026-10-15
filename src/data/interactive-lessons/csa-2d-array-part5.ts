export const csa2dArrayPart5Data = {
  topicSlug: 'csa-2d-array',
  sections: [
    {
      id: 'csa2darr5-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Arrays

**Part 5 of 7 — Grids of Strings and Objects; Modeling Data; Common Errors**

---

Free-response question 4 on the AP exam is built around a 2D array, and it is often a grid of **objects** or **Strings** that models something real: seats in a theater, plots in a garden, squares on a game board. This part covers grids whose elements are references, how to decide what the rows and columns stand for, and the errors that cost the most points.

| In this part |
|---|
| \`new Seat[3][4]\` creates no Seat objects |
| Calling getters and mutators on grid elements |
| Choosing what rows and columns represent |
| Tracing a counter through row-major and column-major fills |
| A catalogue of common 2D array errors |
      `
    },
    {
      id: 'csa2darr5-objects',
      type: 'text' as const,
      content: `
## A Grid of Objects Starts Full of null

\`\`\`java
public class Seat {
    private String holder;     // null while the seat is open
    private int price;

    public Seat(int p) {
        price = p;
        holder = null;
    }

    public int getPrice() {
        return price;
    }

    public String getHolder() {
        return holder;
    }

    public boolean isOpen() {
        return holder == null;
    }

    public void reserve(String name) {
        holder = name;
    }
}
\`\`\`

\`new Seat[3][4]\` builds the outer array and three rows of four **reference slots**. Every slot is null; no Seat object exists yet, so \`hall[1][2].getPrice()\` would throw a NullPointerException. Each slot must be filled with \`new Seat(...)\`:

\`\`\`java
Seat[][] hall = new Seat[3][4];
for (int r = 0; r < hall.length; r++) {
    for (int c = 0; c < hall[0].length; c++) {
        hall[r][c] = new Seat(40 - 10 * r);   // front rows cost more
    }
}
hall[0][1].reserve("Ana");
hall[2][3].reserve("Ben");
\`\`\`

| Row | Price of each seat | Reserved seats |
|---|---|---|
| 0 | 40 | column 1 (Ana) |
| 1 | 30 | none |
| 2 | 20 | column 3 (Ben) |

## Working Through the Elements

\`hall[r][c]\` is a Seat reference, so a method is called on it directly. Private fields are reached only through methods: \`hall[0][1].holder\` does not compile outside the class.

\`\`\`java
int open = 0;
for (Seat[] row : hall) {
    for (Seat s : row) {
        if (s.isOpen()) {
            open++;
        }
    }
}
// open is 10: 12 seats, 2 reserved
\`\`\`

| Expression | Value |
|---|---|
| \`hall[2][3].getHolder()\` | "Ben" |
| \`hall[1][0].getHolder()\` | null |
| \`hall[0][1].isOpen()\` | false |
| \`hall[2][0].getPrice()\` | 20 |

If some slots might still be null, every method call needs a guard first: \`if (hall[r][c] != null && hall[r][c].isOpen())\`.
      `
    },
    {
      id: 'csa2darr5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use the Seat class and the filled \`hall\` from the lesson.

**Segment A**
\`\`\`java
int total = 0;
for (int c = 0; c < hall[0].length; c++) {
    if (hall[0][c].isOpen()) {
        total += hall[0][c].getPrice();
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'Suppose the program ran only Seat[][] hall = new Seat[3][4]; and then evaluated hall[1][2].getPrice(). What happens?',
            options: [
              'A NullPointerException is thrown',
              'The call returns 0, the default int',
              'The call returns null, the default value',
              'An ArrayIndexOutOfBoundsException is thrown'
            ],
            correctAnswer: 0,
            explanation: 'new Seat[3][4] fills every slot with null, so the getter is called through a null reference. Row 1, column 2 is a valid position, so the indices are not the problem.'
          },
          {
            question: 'What is the value of total after Segment A runs on the filled hall?',
            options: [
              '120',
              '160',
              '40',
              '90'
            ],
            correctAnswer: 0,
            explanation: 'Segment A visits only row 0, where every seat costs 40. The seat at column 1 is reserved, so three open seats add up to 120; dropping the isOpen test would give 160.'
          },
          {
            question: 'Which expression evaluates to the String "Ben"?',
            options: [
              'hall[2][3].getHolder()',
              'hall[3][4].getHolder()',
              'hall[2][3].holder',
              'hall[3][2].getHolder()'
            ],
            correctAnswer: 0,
            explanation: 'Ben reserved row 2, column 3, and holder is private, so the getter must be used. Indices of 3 and 4 count from 1, and row index 3 does not exist in a grid with 3 rows.'
          }
        ]
      }
    },
    {
      id: 'csa2darr5-modeling',
      type: 'text' as const,
      content: `
## Deciding What Rows and Columns Mean

Before writing any loop, decide what the first index stands for and keep it first everywhere. Most problems state it: "each row represents a week".

| Situation | Declaration | Element \`x[r][c]\` means |
|---|---|---|
| theater seats | \`Seat[][] hall = new Seat[10][20];\` | the seat in row r, position c |
| daily rainfall | \`double[][] rain = new double[4][7];\` | week r, day c of that week |
| weekly schedule | \`int[][] minutes = new int[7][24];\` | minutes busy on day r during hour c |
| tic-tac-toe | \`String[][] board = new String[3][3];\` | "X", "O" or null at row r, column c |
| gradebook | \`int[][] scores = new int[30][5];\` | student r's score on assignment c |

So \`rain[2][6]\` is day 7 of week 3 (indices start at 0), and student 4's scores are the single row \`scores[4]\`, while assignment 2 for every student is the column \`scores[r][2]\` as r varies.

## Tracing a Counter Through a Fill

A counter that goes up by one at every visit shows the visit order directly.

\`\`\`java
int[][] nums = new int[3][4];
int k = 1;
for (int r = 0; r < nums.length; r++) {
    for (int c = 0; c < nums[0].length; c++) {
        nums[r][c] = k;
        k++;
    }
}
\`\`\`

| Row-major fill | Col 0 | Col 1 | Col 2 | Col 3 |
|---|---|---|---|---|
| Row 0 | 1 | 2 | 3 | 4 |
| Row 1 | 5 | 6 | 7 | 8 |
| Row 2 | 9 | 10 | 11 | 12 |

Swapping the loops (outer \`c\`, inner \`r\`) numbers the grid down each column instead:

| Column-major fill | Col 0 | Col 1 | Col 2 | Col 3 |
|---|---|---|---|---|
| Row 0 | 1 | 4 | 7 | 10 |
| Row 1 | 2 | 5 | 8 | 11 |
| Row 2 | 3 | 6 | 9 | 12 |

The same position holds different numbers: \`nums[2][1]\` is 10 after the row-major fill and 6 after the column-major fill. To trace a fill, count how many full rows (or full columns) come before the position, then count along.
      `
    },
    {
      id: 'csa2darr5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A row-major fill like the one above runs on \`new int[4][5]\`, starting at k = 1. What number is stored at \`nums[2][3]\`? _______

2) A column-major fill runs on \`new int[3][4]\`, starting at k = 1. What number is stored at \`nums[1][3]\`? _______

3) A schedule is declared as \`int[][] minutes = new int[7][24];\`. What is the value of \`minutes[0].length\`? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '11', '24'],
        hint1: 'Rows 0 and 1 are full before row 2 starts, and each row holds 5 numbers.',
        hint2: 'Columns 0, 1 and 2 are full before column 3 starts, and each column holds 3 numbers.',
        hint3: 'The second size in new gives the length of every row.',
        explanation: 'In the 4 by 5 row-major fill, rows 0 and 1 use 1 to 10, so row 2 holds 11 to 15 and column 3 holds 14. In the column-major fill, columns 0 to 2 use 1 to 9, so column 3 holds 10, 11, 12 and row 1 holds 11. Each of the 7 rows of minutes has 24 elements.'
      }
    },
    {
      id: 'csa2darr5-errors',
      type: 'text' as const,
      content: `
## Common 2D Array Errors

| Error | Example | What goes wrong |
|---|---|---|
| indices in the wrong order | \`grid[c][r]\` | wrong element, or an exception on a non-square grid |
| \`grid.length\` used for columns | \`c < grid.length\` | skips columns or runs past the end of a row |
| assuming objects exist after \`new\` | \`new Seat[3][4]\` then \`hall[0][0].getPrice()\` | NullPointerException |
| forgetting default values | counting zeros in a fresh \`new int[2][3]\` | every unset element counts as 0 |
| method call on a null String | \`board[r][c].equals("X")\` before any check | NullPointerException at the first empty square |
| \`==\` on grids or rows | \`a == b\` | compares references, not contents |
| \`==\` on String elements | \`board[r][c] == "X"\` | compares references; use \`equals\` |
| braces outside a declaration | \`grid = {{1, 2}, {3, 4}};\` | does not compile |
| printing the grid variable | \`System.out.println(grid);\` | prints a reference code, not the values |
| counting from 1 | \`hall[3][4]\` for "row 3, seat 4" | ArrayIndexOutOfBoundsException |

### Worked Example: The Unchecked Board

\`\`\`java
String[][] board = new String[3][3];
board[0][0] = "X";
board[1][1] = "O";
int xCount = 0;
for (String[] row : board) {
    for (String v : row) {
        if (v.equals("X")) {
            xCount++;
        }
    }
}
\`\`\`

**Step 1 — First visit.** \`v\` is "X", so \`equals\` returns true and xCount becomes 1.

**Step 2 — Second visit.** \`v\` is \`board[0][1]\`, which was never assigned, so it is null. Calling \`equals\` through null throws a NullPointerException.

**Step 3 — Fix.** Test for null first: \`if (v != null && v.equals("X"))\`. The loop then visits all 9 squares and xCount ends at 1.

> 🎯 **AP Connection:** In an FRQ, read the class description for what an empty slot holds. If it says a position "may be null", every method call on an element needs a null check first.
      `
    },
    {
      id: 'csa2darr5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
String[][] a = {{"x"}};
String[][] b = {{"x"}};
\`\`\`

A gradebook is stored as \`double[][] scores = new double[30][5];\`, where each row is a student and each column is an assignment.
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression evaluates to true for the grids a and b?',
            options: [
              'a[0][0].equals(b[0][0])',
              'a == b',
              'a[0] == b[0]',
              'a[0][0].length() == 2'
            ],
            correctAnswer: 0,
            explanation: 'equals compares the characters of the two Strings, which match. a == b and a[0] == b[0] compare references to two separate grids and rows, and the String "x" has length 1.'
          },
          {
            question: 'Which loop visits every assignment score of student 4?',
            options: [
              'for (int j = 0; j < scores[0].length; j++) with scores[4][j]',
              'for (int j = 0; j < scores.length; j++) with scores[4][j]',
              'for (int j = 0; j < scores.length; j++) with scores[j][4]',
              'for (int j = 0; j < 5; j++) with scores[j][4]'
            ],
            correctAnswer: 0,
            explanation: 'Student 4 is row 4, so the row index stays at 4 and j runs across the 5 columns. Bounding j by scores.length runs to 29 and fails at column 5, and scores[j][4] reads assignment 4 for different students.'
          },
          {
            question: 'A program calls hall[3][4].reserve("Kim"); to reserve "row 3, seat 4" in the 3 by 4 hall. What happens?',
            options: [
              'An ArrayIndexOutOfBoundsException is thrown',
              'The seat in row 2, column 3 is reserved',
              'The seat in row 3, column 4 is reserved',
              'A NullPointerException is thrown'
            ],
            correctAnswer: 0,
            explanation: 'Indices start at 0, so a hall with 3 rows has rows 0 to 2, and hall[3] does not exist. Java does not shift the indices for you; the intended seat is hall[2][3].'
          }
        ]
      }
    }
  ]
}
