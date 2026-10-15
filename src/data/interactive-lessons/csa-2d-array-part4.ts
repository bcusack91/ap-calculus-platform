export const csa2dArrayPart4Data = {
  topicSlug: 'csa-2d-array',
  sections: [
    {
      id: 'csa2darr4-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Arrays

**Part 4 of 7 — Enhanced for Loops on 2D Arrays**

---

Part 1 showed the nested enhanced for loop that reads every element of a grid. This part explains exactly what its two loop variables hold (CED Topic 4.12), which decides whether an assignment inside the loop changes the grid or changes nothing.

\`\`\`java
for (int[] row : grid) {       // row: a reference to one row of grid
    for (int v : row) {        // v: a copy of one element of that row
        ...
    }
}
\`\`\`

> 🔑 **Key Concept:** The outer variable is an **alias** for a real row, so changing an element through it sticks. The inner variable of a primitive grid is a **copy** of one element, so assigning to it never reaches the grid.

| In this part |
|---|
| What the outer and inner variables hold |
| Which assignments change the grid |
| Mixing an enhanced outer loop with an indexed inner loop |
| When you must use indices instead |
| Grids of Strings: equals and null checks |
| Grids of objects: mutators through the loop variable |
      `
    },
    {
      id: 'csa2darr4-rowvar',
      type: 'text' as const,
      content: `
## The Two Loop Variables

Each pass of a nested enhanced for loop behaves like these assignments:

| Loop | Each pass acts like | So the variable is |
|---|---|---|
| \`for (int[] row : grid)\` | \`int[] row = grid[r];\` | a reference to the real row r |
| \`for (int v : row)\` | \`int v = row[c];\` | a copy of the int stored at column c |

## Assigning the Inner Variable Changes Nothing

\`\`\`java
int[][] g = {{1, 2}, {3, 4}};
for (int[] row : g) {
    for (int v : row) {
        v = v * 10;            // changes only the copy
    }
}
// g is still {{1, 2}, {3, 4}}
\`\`\`

## Assigning Through the Row Does Change the Grid

Keep the enhanced outer loop, but make the inner loop indexed. \`row[c]\` is an element of the real row:

\`\`\`java
for (int[] row : g) {
    for (int c = 0; c < row.length; c++) {
        row[c] = row[c] * 10;  // row is an alias for a row of g
    }
}
// g is now {{10, 20}, {30, 40}}
\`\`\`

## Reassigning the Row Variable Changes Nothing

\`\`\`java
for (int[] row : g) {
    row = new int[2];          // row now refers to a new array
    row[0] = 5;                // changes only that new array
}
// g is unchanged
\`\`\`

| Statement inside the loops | Does g change? |
|---|---|
| \`v = ...;\` (inner enhanced variable) | no: v is a copy |
| \`row[c] = ...;\` (element of the row) | yes: row refers to a real row |
| \`row = new int[...];\` | no: only the loop variable moves |
| \`row[0] = row[1];\` | yes: both are elements of the real row |

> 🎯 **AP Connection:** In a trace question, ask what is on the left of each \`=\`. An element of an array (\`row[c]\`, \`g[r][c]\`) changes the grid; a plain loop variable (\`v\`, \`row\`) does not.
      `
    },
    {
      id: 'csa2darr4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Each segment starts from a fresh copy of this grid:

\`\`\`java
int[][] m = {{2, 5}, {7, 1}, {4, 6}};
\`\`\`

**Segment A**
\`\`\`java
int total = 0;
for (int[] row : m) {
    for (int v : row) {
        v = v + 1;
        total += v;
    }
}
System.out.println(total + " " + m[1][0]);
\`\`\`

**Segment B**
\`\`\`java
for (int[] row : m) {
    row[0] = row[1];
}
\`\`\`

**Segment C**
\`\`\`java
for (int[] row : m) {
    row = new int[2];
    row[0] = 9;
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '31 7',
              '25 7',
              '31 8',
              '25 8'
            ],
            correctAnswer: 0,
            explanation: 'Each copy v is one more than its element, so total adds 3 + 6 + 8 + 2 + 5 + 7 = 31. The grid itself is never assigned, so m[1][0] is still 7.'
          },
          {
            question: 'What does m hold after Segment B?',
            options: [
              '{{5, 5}, {1, 1}, {6, 6}}',
              '{{2, 5}, {7, 1}, {4, 6}}',
              '{{2, 2}, {7, 7}, {4, 4}}',
              '{{5, 2}, {1, 7}, {6, 4}}'
            ],
            correctAnswer: 0,
            explanation: 'row refers to each real row in turn, so row[0] = row[1] copies the second element of each row into the first. Copying the first into the second would give {{2, 2}, {7, 7}, {4, 4}}.'
          },
          {
            question: 'What is the effect of Segment C on m?',
            options: [
              'It leaves m unchanged',
              'Every row of m now starts with 9',
              'Every row of m is now {9, 0}',
              'Only m[0][0] changes, to 9'
            ],
            correctAnswer: 0,
            explanation: 'row = new int[2] moves the loop variable to a new array, so the 9 goes into that array and is lost. No row of m is touched, and m keeps {{2, 5}, {7, 1}, {4, 6}}.'
          }
        ]
      }
    },
    {
      id: 'csa2darr4-when',
      type: 'text' as const,
      content: `
## Enhanced for Has No Indices

An enhanced for loop always walks the grid in **row-major** order and never tells you where you are. Use indexed loops when the task needs any of these:

| The task needs | Why an enhanced for loop cannot do it |
|---|---|
| column-major order | the outer enhanced loop can only hand out rows |
| the position (r, c) of an element | there is no index variable to report |
| to assign elements of a primitive grid | the inner variable is a copy (an indexed inner loop fixes this) |
| part of the grid, such as rows 1 to 2 | it always visits every row and every element |
| two grids at the same position | it can walk only one array at a time |

## One Task, Three Forms

Counting the positive elements only reads values, so every form works:

\`\`\`java
int[][] g = {{3, -1, 0},
             {-4, 2, 5}};

// indexed outer, indexed inner
int count1 = 0;
for (int r = 0; r < g.length; r++) {
    for (int c = 0; c < g[0].length; c++) {
        if (g[r][c] > 0) {
            count1++;
        }
    }
}

// enhanced outer, enhanced inner
int count2 = 0;
for (int[] row : g) {
    for (int v : row) {
        if (v > 0) {
            count2++;
        }
    }
}

// indexed outer, enhanced inner: g[r] is row r
int count3 = 0;
for (int r = 0; r < g.length; r++) {
    for (int v : g[r]) {
        if (v > 0) {
            count3++;
        }
    }
}
\`\`\`

All three counts are 3. To **rewrite** an indexed loop as an enhanced one, replace \`g[r]\` with the row variable and \`g[r][c]\` with the element variable; this is only safe when the body reads values and never uses \`r\` or \`c\` for anything else.
      `
    },
    {
      id: 'csa2darr4-which',
      type: 'dropdown-select' as const,
      content: `
**Pick the Loop Form** 🔍

For each task, choose the loop form that fits.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Print every element of an int grid in column-major order: use ___',
            options: ['two indexed loops', 'two enhanced for loops', 'an enhanced outer, indexed inner', 'an indexed outer, enhanced inner']
          },
          {
            label: 'Triple every element of an int grid: the inner loop must be ___',
            options: ['indexed, assigning row[c]', 'enhanced, assigning v', 'enhanced, assigning row', 'indexed, assigning v']
          },
          {
            label: 'Count the negative elements of an int grid: ___',
            options: ['any of the forms works', 'only indexed loops work', 'only enhanced loops work', 'no nested form works']
          }
        ],
        correctAnswers: ['two indexed loops', 'indexed, assigning row[c]', 'any of the forms works'],
        hint1: 'An enhanced outer loop can hand out rows only, never columns.',
        hint2: 'The change has to land in an element of a real row.',
        hint3: 'Counting only reads values; it never assigns an element.',
        explanation: 'Column-major order needs the column as the outer index, which only an indexed loop provides. Tripling must assign row[c] or g[r][c], because an enhanced variable is a copy. A count only reads values, so every loop form gives the same answer.'
      }
    },
    {
      id: 'csa2darr4-strings',
      type: 'text' as const,
      content: `
## Grids of Strings

The loop variables work the same way for a String grid: the inner variable is a copy of a **reference**. Two extra rules apply.

- Compare Strings with \`equals\`, not \`==\`.
- An element may be null, so check for null **before** calling a method on it.

\`\`\`java
String[][] seats = {{"Ana", null, "Ben"},
                    {null, "Cai", "Ana"}};
int count = 0;
for (String[] row : seats) {
    for (String name : row) {
        if (name != null && name.equals("Ana")) {
            count++;
        }
    }
}
// count is 2
\`\`\`

When \`name\` is null, \`name != null\` is false and \`&&\` stops, so \`equals\` is never called on null. Writing the condition the other way round, \`name.equals("Ana") && name != null\`, calls \`equals\` through null at \`seats[0][1]\` and throws a NullPointerException.

## Grids of Objects

For a grid of objects, the inner variable is a copy of a reference to a real object. Calling a **mutator** through it changes that object; assigning a new object to it changes nothing.

\`\`\`java
public class Tile {
    private int level;

    public Tile(int lv) {
        level = lv;
    }

    public int getLevel() {
        return level;
    }

    public void raise() {
        level++;
    }
}
\`\`\`

\`\`\`java
Tile[][] map = {{new Tile(1), new Tile(4)},
                {new Tile(2), new Tile(0)}};
for (Tile[] row : map) {
    for (Tile t : row) {
        t.raise();             // changes the real Tile: levels become 2, 5, 3, 1
    }
}
for (Tile[] row : map) {
    for (Tile t : row) {
        t = new Tile(9);       // changes only the loop variable
    }
}
\`\`\`

| Statement on an object element | Does the grid change? |
|---|---|
| \`t.raise();\` | yes: the object that the grid refers to changes |
| \`t = new Tile(9);\` | no: t now refers to a new object the grid never sees |
| \`row[c] = new Tile(9);\` (indexed inner loop) | yes: the grid now refers to the new object |
      `
    },
    {
      id: 'csa2darr4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment D**
\`\`\`java
String[][] w = {{"up", null, "go"},
                {"go", "at", null}};
int n = 0;
for (String[] row : w) {
    for (String s : row) {
        if (s != null && s.equals("go")) {
            n++;
        }
    }
}
\`\`\`

**Segment E** (uses the Tile class and a fresh \`map\` from the lesson)
\`\`\`java
for (Tile[] row : map) {
    for (Tile t : row) {
        t.raise();
        t = new Tile(0);
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of n after Segment D?',
            options: [
              '2',
              '1',
              '3',
              '4'
            ],
            correctAnswer: 0,
            explanation: 'The null slots fail the first test and are skipped, and "go" appears once in each row. A count of 4 would treat every non-null String as a match.'
          },
          {
            question: 'The condition in Segment D is changed to s.equals("go") && s != null. What happens?',
            options: [
              'It throws a NullPointerException at the first null',
              'n is still 2, since && skips the null slots',
              'n is 0, since equals returns false for null',
              'The changed condition no longer compiles'
            ],
            correctAnswer: 0,
            explanation: 'The left operand now calls equals first, and the second element visited, w[0][1], is null. The null test on the right comes too late to protect the call, and the code compiles normally.'
          },
          {
            question: 'What is map[0][1].getLevel() after Segment E?',
            options: [
              '5',
              '0',
              '4',
              '1'
            ],
            correctAnswer: 0,
            explanation: 'raise is called through t, which refers to the real Tile, so its level goes from 4 to 5. Assigning a new Tile to t only moves the loop variable, so the grid keeps the raised Tile.'
          }
        ]
      }
    }
  ]
}
