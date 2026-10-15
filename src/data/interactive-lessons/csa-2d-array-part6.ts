export const csa2dArrayPart6Data = {
  topicSlug: 'csa-2d-array',
  sections: [
    {
      id: 'csa2darr6-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Arrays

**Part 6 of 7 — AP-Style Practice**

---

2D arrays appear on the exam in multiple-choice traces and in free-response question 4, where you write methods that create, fill and read a grid. This part practices both, using only the Java Quick Reference subset. (The standard grid algorithms, such as row sums, maximums and neighbor checks, are practiced in the companion topic on 2D array algorithms.)

### How to Attack a 2D Array Question

| Step | Do this |
|---|---|
| 1 | Sketch the grid with row numbers down the side and column numbers across the top. Note \`length\` (rows) and \`[0].length\` (columns). |
| 2 | For each loop, write its first and last value, and check that the variable bounded by rows sits in the first bracket. |
| 3 | Decide the visit order: which loop is outer? Row-major or column-major? |
| 4 | For every \`=\`, ask whether the left side is an element (it sticks) or a variable such as an enhanced for variable or a row reference being moved (it does not). |
| 5 | Draw arrows for row references. \`int[] r = g[1]\` and \`g[0] = g[1]\` share rows rather than copy them. |

> 🔑 **Key Concept:** Most wrong answers on 2D traces come from three slips: swapping rows and columns, tracing a column-major loop in row-major order, and treating a shared row as a copy.
      `
    },
    {
      id: 'csa2darr6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

**Segment A**
\`\`\`java
int[][] g = new int[2][4];
for (int r = 0; r < g.length; r++) {
    for (int c = 0; c < g[0].length; c += 2) {
        g[r][c] = r * 10 + c;
    }
}
\`\`\`

**Segment B**
\`\`\`java
int[][] p = {{1, 2, 3}, {4, 5, 6}};
int[] top = p[0];
p[0] = p[1];
top[2] = 0;
p[1][0] = 9;
System.out.println(p[0][0] + " " + p[0][2] + " " + top[0]);
\`\`\`

**Segment C**
\`\`\`java
int[][] s = {{3, 6}, {9, 12}};
int out = 0;
for (int[] row : s) {
    for (int v : row) {
        v = v / 3;
        out = out * 10 + v;
    }
}
System.out.println(out + " " + s[1][1]);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does g[1] hold after Segment A?',
            options: [
              '{10, 0, 12, 0}',
              '{10, 11, 12, 13}',
              '{0, 10, 0, 12}',
              '{10, 12, 0, 0}'
            ],
            correctAnswer: 0,
            explanation: 'The inner loop visits only columns 0 and 2, storing 10 + 0 and 10 + 2 in row 1. Columns 1 and 3 keep the default 0, and each value stays in its own column.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '9 6 1',
              '4 6 1',
              '9 0 1',
              '9 6 9'
            ],
            correctAnswer: 0,
            explanation: 'After p[0] = p[1], both rows of p are the old row 1, so p[1][0] = 9 shows up in p[0][0], and p[0][2] is 6. top still refers to the old row 0, whose first element is 1; top[2] = 0 changed only that row.'
          },
          {
            question: 'What is printed by Segment C?',
            options: [
              '1234 12',
              '1234 4',
              '1324 12',
              '1324 4'
            ],
            correctAnswer: 0,
            explanation: 'The enhanced loops go row by row, so v takes 1, 2, 3 and 4 after the division, and out builds 1234. v is a copy, so s[1][1] keeps 12.'
          }
        ]
      }
    },
    {
      id: 'csa2darr6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Task 1 — numberSeats

**Prompt.** Write a static method \`numberSeats\` that returns a new grid with \`rows\` rows and \`cols\` columns. The seats are numbered 1, 2, 3, ... **down each column**: column 0 from top to bottom, then column 1, and so on. Assume both sizes are at least 1.

| Call | Returns |
|---|---|
| \`numberSeats(2, 3)\` | \`{{1, 3, 5}, {2, 4, 6}}\` |
| \`numberSeats(3, 2)\` | \`{{1, 4}, {2, 5}, {3, 6}}\` |
| \`numberSeats(1, 4)\` | \`{{1, 2, 3, 4}}\` |

### Plan Before You Write

- The method **returns** a new grid, so it creates one with \`new int[rows][cols]\`.
- "Down each column" is column-major order: the column loop is outer, the row loop is inner.
- One counter runs across the whole grid, so it is declared **before** both loops and never reset.

### Solution

\`\`\`java
public static int[][] numberSeats(int rows, int cols) {
    int[][] seats = new int[rows][cols];
    int num = 1;
    for (int c = 0; c < cols; c++) {
        for (int r = 0; r < rows; r++) {
            seats[r][c] = num;
            num++;
        }
    }
    return seats;
}
\`\`\`

The indices stay in the order \`seats[r][c]\` even though the column loop is outer: the bracket order is set by what the grid means, not by which loop runs first.

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Create | a new int grid with \`rows\` rows and \`cols\` columns |
| Order | column loop outer, row loop inner, each covering its full range with no out-of-bounds access |
| Count | one counter starting at 1, stored then increased at every visit |
| Return | returns the new grid |
      `
    },
    {
      id: 'csa2darr6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About numberSeats** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student swaps the two loops, so the row loop is outer, and changes nothing else. What does numberSeats(3, 2) return?',
            options: [
              '{{1, 2}, {3, 4}, {5, 6}}',
              '{{1, 4}, {2, 5}, {3, 6}}',
              '{{1, 3, 5}, {2, 4, 6}}',
              '{{1, 2, 3}, {4, 5, 6}}'
            ],
            correctAnswer: 0,
            explanation: 'With the row loop outer, the counter runs across each row before moving down, which is row-major numbering. The grid keeps 3 rows and 2 columns, because new int[rows][cols] is unchanged.'
          },
          {
            question: 'A student declares int num = 1; as the first statement inside the column loop instead of before it. What does numberSeats(3, 2) return?',
            options: [
              '{{1, 1}, {2, 2}, {3, 3}}',
              '{{1, 4}, {2, 5}, {3, 6}}',
              '{{1, 2}, {1, 2}, {1, 2}}',
              '{{1, 1}, {1, 1}, {1, 1}}'
            ],
            correctAnswer: 0,
            explanation: 'The counter is reset to 1 at the start of each column, so every column is numbered 1, 2, 3 from the top. Numbering that continues across columns needs one counter declared before both loops.'
          },
          {
            question: 'A student writes the column loop header as for (int c = 0; c < rows; c++). What happens for numberSeats(2, 3)?',
            options: [
              'It returns {{1, 3, 0}, {2, 4, 0}}',
              'It returns {{1, 3, 5}, {2, 4, 6}} as intended',
              'It throws an exception when c reaches 2',
              'It returns {{1, 2, 0}, {3, 4, 0}} in row order'
            ],
            correctAnswer: 0,
            explanation: 'With rows equal to 2, c stops after column 1, so column 2 keeps its default 0s. No index is out of range here; the same bug with numberSeats(3, 2) would throw at column 2.'
          }
        ]
      }
    },
    {
      id: 'csa2darr6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Task 2 — columnString

**Prompt.** Write a static method \`columnString\` that returns one String made by joining the elements of \`letters\` in **column-major** order. Elements that are null are skipped. \`letters\` has at least one row and one column.

| Call (grid written row by row) | Returns |
|---|---|
| \`columnString({{"d", "g"}, {"o", null}})\` | \`"dog"\` |
| \`columnString({{"h", "l"}, {"e", "o"}, {"l", null}})\` | \`"hello"\` |
| \`columnString({{null, null}, {null, null}})\` | \`""\` |

### Solution

\`\`\`java
public static String columnString(String[][] letters) {
    String result = "";
    for (int c = 0; c < letters[0].length; c++) {
        for (int r = 0; r < letters.length; r++) {
            if (letters[r][c] != null) {
                result += letters[r][c];
            }
        }
    }
    return result;
}
\`\`\`

### Why the null Check Matters Here

Joining a String with null does **not** throw: Java appends the four characters \`null\`. Without the check, the first example returns \`"dognull"\`. A version that called \`letters[r][c].length()\` without a check would throw a NullPointerException instead. Either way the output is wrong, and the rubric expects the check.

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Traversal | every element visited, column loop outer, rows in the first bracket |
| Skip | each element compared with null (\`!= null\`) before it is used |
| Build | non-null elements joined in order onto a String that starts as \`""\` |
| Return | returns the String after both loops finish, not inside them |
      `
    },
    {
      id: 'csa2darr6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What does \`columnString\` return for the grid \`{{"h", "l"}, {"e", "o"}, {"l", null}}\` if the loops are swapped so the row loop is outer? _______

2) What does \`columnString\` return for \`{{"d", "g"}, {"o", null}}\` if the null check is removed? _______

3) For a grid with 3 rows and 2 columns, how many times is the null check evaluated? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['hleol', 'dognull', '6'],
        hint1: 'Row-major order reads h, l from row 0, then e, o, then l.',
        hint2: 'Joining null to a String appends the word null.',
        hint3: 'The check runs once for every element in the grid.',
        explanation: 'With the row loop outer, the letters come out row by row: h, l, e, o, l. Without the check, the null element is joined as the text null, giving dognull. The check runs once per element, and 3 x 2 = 6.'
      }
    },
    {
      id: 'csa2darr6-deductions',
      type: 'text' as const,
      content: `
## Common Deductions on 2D Array Code

| Mistake | Why it costs points |
|---|---|
| \`grid[c][r]\`, or \`grid.length\` bounding the column loop | wrong elements, or an index out of bounds on a non-square grid |
| row loop outer when the prompt asks for column order | the visit order is wrong |
| a counter or accumulator declared inside the outer loop | it resets for every row or column |
| assigning an enhanced for variable to change an int element | the grid never changes |
| calling a method on an element that may be null | NullPointerException |
| \`==\` to compare String elements | compares references; use \`equals\` |
| returning inside the loops | the method stops after the first element |
| creating a new grid when the prompt says to change the given one, or the reverse | the caller sees the wrong grid |

> 🎯 **AP Connection:** Read the method header first. A return type of \`int[][]\` means create, fill and return a new grid; \`void\` with a grid parameter means change the elements of the grid you were given.
      `
    }
  ]
}
