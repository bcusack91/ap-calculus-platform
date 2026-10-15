export const csa2dArrayPart7Data = {
  topicSlug: 'csa-2d-array',
  sections: [
    {
      id: 'csa2darr7-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Arrays

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: how a 2D array is built and referenced (CED Topic 4.11) and how nested loops traverse it (4.12). Use the table as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| Creating (Parts 1-2) | \`new T[rows][cols]\`; elements start as 0, 0.0, false or null | braces outside a declaration |
| Shape (Parts 1-2) | \`g.length\` is rows; \`g[0].length\` is columns | \`g.length\` used for columns |
| Rows (Part 2) | \`g[r]\` is a reference to a 1D row | \`g[0] = g[1]\` shares a row instead of copying it |
| References (Part 2) | \`==\` compares references; parameters are aliases | expecting \`g = new int[..][..]\` in a method to reach the caller |
| Bounds (Parts 2-3) | the row index is checked first | swapped bounds that only fail on a non-square grid |
| Order (Part 3) | the outer loop decides row-major or column-major | tracing a column-major loop row by row |
| Partial traversals (Part 3) | change a loop's start or end | off-by-one on \`length - 1\` |
| Enhanced for (Part 4) | outer variable aliases a row; inner variable is a copy | \`v = 0\` to change an int element |
| Objects and Strings (Parts 4-5) | slots start null; check \`!= null\` first | \`new Seat[3][4]\` then calling a method |
| Modeling (Part 5) | decide what each index means and keep it first | counting positions from 1 |
      `
    },
    {
      id: 'csa2darr7-worked',
      type: 'text' as const,
      content: `
## Worked Example: Putting It Together

\`\`\`java
int[][] grid = new int[3][2];
for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < grid[0].length; c++) {
        grid[r][c] = r + 2 * c;
    }
}
int[] mid = grid[1];
grid[2] = mid;
mid[0] = 7;
for (int c = 0; c < grid[0].length; c++) {
    for (int r = 0; r < grid.length; r++) {
        System.out.print(grid[r][c] + " ");
    }
    System.out.println();
}
int big = 0;
for (int[] row : grid) {
    for (int v : row) {
        if (v > 2) {
            big++;
        }
    }
}
System.out.println(big);
\`\`\`

**Step 1 — Create and fill.** 3 rows, 2 columns, each element \`r + 2 * c\`:

| | Col 0 | Col 1 |
|---|---|---|
| Row 0 | 0 | 2 |
| Row 1 | 1 | 3 |
| Row 2 | 2 | 4 |

**Step 2 — Share a row.** \`mid\` refers to row 1. \`grid[2] = mid\` makes slot 2 refer to that same row, so the old row \`{2, 4}\` is gone. \`mid[0] = 7\` changes the shared row, which grid now reaches twice: grid is \`{{0, 2}, {7, 3}, {7, 3}}\`.

**Step 3 — Column-major output.** The outer loop runs over the 2 columns, so there are 2 lines, each listing a column from the top:

\`\`\`
0 7 7
2 3 3
\`\`\`

**Step 4 — Enhanced for count.** The loops only read values. The elements greater than 2 are 7, 3, 7 and 3, so \`big\` is 4, and the last line printed is \`4\`.
      `
    },
    {
      id: 'csa2darr7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

**Segment A**
\`\`\`java
int[][] a = new int[2][3];
for (int r = 0; r < a.length; r++) {
    for (int c = 0; c < a[r].length; c++) {
        a[r][c] = c - r;
    }
}
int t = 0;
for (int[] row : a) {
    for (int v : row) {
        t += v;
    }
}
System.out.println(t + " " + a[1][0]);
\`\`\`

**Segment B**
\`\`\`java
String[][] w = {{"a", "b", "c"},
                {"d", "e", "f"}};
for (int c = w[0].length - 1; c >= 0; c--) {
    System.out.print(w[1][c] + w[0][c]);
}
System.out.println();
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '3 -1',
              '-3 1',
              '3 1',
              '4 -1'
            ],
            correctAnswer: 0,
            explanation: 'Row 0 holds 0, 1, 2 and row 1 holds -1, 0, 1, so the total is 3 and a[1][0] is 0 - 1 = -1. Adding only the positive values would give 4.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              'fcebda',
              'cfbead',
              'adbecf',
              'fedcba'
            ],
            correctAnswer: 0,
            explanation: 'c runs from the last column down to 0, and each pass prints the row 1 letter before the row 0 letter: fc, then eb, then da.'
          },
          {
            question: 'Which outer header, used in Segment B, causes an ArrayIndexOutOfBoundsException?',
            options: [
              'for (int c = w[0].length; c >= 0; c--)',
              'for (int c = w.length - 1; c >= 0; c--)',
              'for (int c = w[0].length - 1; c > 0; c--)',
              'for (int c = 0; c < w[0].length - 1; c++)'
            ],
            correctAnswer: 0,
            explanation: 'Starting at w[0].length asks for column 3, but the columns are 0 to 2. Starting at w.length - 1 skips column 2, stopping at c > 0 skips column 0, and the forward header stops before column 2; each of those stays in range.'
          }
        ]
      }
    },
    {
      id: 'csa2darr7-reference',
      type: 'text' as const,
      content: `
## Symptom, Cause, Fix

| Symptom | Likely cause | Fix |
|---|---|---|
| exception only on non-square grids | bounds or indices swapped | bound the row variable by \`g.length\`, put it first |
| values come out in the wrong order | the wrong loop is outer | outer loop on columns for column-major |
| a change to one row shows up in another | two slots share one row (\`g[0] = g[1]\`) | copy element by element |
| the grid does not change | assigning an enhanced for variable, or reassigning a parameter or row variable | assign \`g[r][c]\` or \`row[c]\` |
| NullPointerException in a String or object grid | a method called on an empty slot | test \`!= null\` first, with \`&&\` |
| \`==\` is false for equal-looking grids or Strings | references compared | compare elements; use \`equals\` for Strings |
| a counter restarts on every row | declared inside the outer loop | declare it before both loops |
| the method works on a copy the caller never sees | \`g = new int[..][..]\` inside the method | change \`g[r][c]\`, or return the new grid |

> 🎯 **AP Connection:** For any 2D question, settle three things before tracing: the shape (rows, then columns), the visit order (which loop is outer), and what each \`=\` changes (an element, a row slot, or just a variable).
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
            label: 'After double[][] d = new double[2][3];, d[1][2] holds ___',
            options: ['0.0', '0', 'null', 'no value yet']
          },
          {
            label: 'After String[][] t = new String[2][2];, t[0] is ___',
            options: ['a row of 2 nulls', 'null', 'an empty String', 'a String of length 2']
          },
          {
            label: 'After int[][] x = y;, the expression x == y is ___',
            options: ['true', 'false', 'a compile-time error', 'a run-time exception']
          }
        ],
        correctAnswers: ['0.0', 'a row of 2 nulls', 'true'],
        hint1: 'Every element of a new double grid gets the default for double.',
        hint2: 'new creates the rows; only the elements start empty.',
        hint3: 'x holds a copy of the reference stored in y.',
        explanation: 'A new double grid is filled with 0.0. new String[2][2] creates two real rows whose elements are null, so t[0] is an array, not null. After x = y both variables refer to the same grid, so == is true.'
      }
    },
    {
      id: 'csa2darr7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯

\`\`\`java
public static void clear(int[][] g) {
    for (int[] row : g) {
        for (int c = 0; c < row.length; c++) {
            row[c] = 0;
        }
    }
}

public static void zap(int[][] g) {
    for (int[] row : g) {
        row = new int[row.length];
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'grid holds {{4, 5}, {6, 7}}. What is the result of calling clear(grid) and then zap(grid)?',
            options: [
              'Every element of grid is now 0',
              'grid keeps its values, {{4, 5}, {6, 7}}',
              'grid now refers to a new grid made by zap',
              'Only the first element of each row is 0'
            ],
            correctAnswer: 0,
            explanation: 'In clear, row refers to each real row and row[c] = 0 changes every element. zap only moves its loop variable to new arrays, so it changes nothing, and the zeros from clear remain.'
          },
          {
            question: 'Which task requires indexed loops rather than nested enhanced for loops?',
            options: [
              'Printing the elements in column-major order',
              'Counting the elements greater than 10',
              'Adding up all the elements of an int grid',
              'Calling a mutator on each object in a grid'
            ],
            correctAnswer: 0,
            explanation: 'Enhanced for loops always visit row by row, so column-major order needs the column as an outer index. Counting, adding and calling mutators all work with enhanced loops, because none of them assigns an element of a primitive grid.'
          },
          {
            question: 'How many array objects does new int[4][3] create?',
            options: [
              '5',
              '12',
              '4',
              '7'
            ],
            correctAnswer: 0,
            explanation: 'It creates one outer array of length 4 plus one row array for each of the 4 rows. The 12 is the number of int elements, which are values stored inside the rows, not separate arrays.'
          }
        ]
      }
    }
  ]
}
