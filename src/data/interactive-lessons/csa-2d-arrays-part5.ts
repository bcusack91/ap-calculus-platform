export const csa2dArraysPart5Data = {
  topicSlug: 'csa-2d-arrays',
  sections: [
    {
      id: 'csa2darr5-intro',
      type: 'text' as const,
      content: `
# 🔢 2D Array Algorithms

**Part 5 of 7 — Building and Transforming Grids**

---

So far every algorithm read a grid or changed it in place. This part **builds** new data from a grid (CED Topic 4.13): a turned or flipped copy, a 2D grid made from a 1D array, a 1D array or an ArrayList made from a grid, and results gathered from a grid of objects.

| Task | New structure | Index rule |
|---|---|---|
| Transpose | \`new int[cols][rows]\` | \`result[c][r] = grid[r][c]\` |
| Mirror left to right | \`new int[rows][cols]\` | \`result[r][cols - 1 - c] = grid[r][c]\` |
| Flip top to bottom | \`new int[rows][cols]\` | \`result[rows - 1 - r][c] = grid[r][c]\` |
| 1D array to grid, row-major | \`new int[rows][cols]\` | \`grid[k / cols][k % cols] = arr[k]\` |
| Grid to 1D array, row-major | \`new int[rows * cols]\` | \`arr[r * cols + c] = grid[r][c]\` |
| Grid to list | an ArrayList of Integer | \`list.add(grid[r][c])\` when the value qualifies |

> 🔑 **Key Concept:** When the result has a different shape, write its dimensions down before writing any loop. Then check every subscript against **the array it indexes**: \`result[c][r]\` must fit the result, and \`grid[r][c]\` must fit the original.
      `
    },
    {
      id: 'csa2darr5-transform',
      type: 'text' as const,
      content: `
## Transpose: Rows Become Columns

\`\`\`java
public static int[][] transpose(int[][] grid) {
    int[][] result = new int[grid[0].length][grid.length];
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            result[c][r] = grid[r][c];
        }
    }
    return result;
}
\`\`\`

\`transpose({{1, 2, 3}, {4, 5, 6}})\` returns the 3 x 2 grid \`{{1, 4}, {2, 5}, {3, 6}}\`. Row 0 of the original, \`1 2 3\`, is now column 0.

**Wrong dimensions.** With \`new int[grid.length][grid[0].length]\` the result is 2 x 3, the same shape as the original. When c reaches 2 in row 0, the loop writes \`result[2][0]\`, and row index 2 does not exist in a 2-row array, so Java throws an ArrayIndexOutOfBoundsException.

## Mirror and Flip

\`\`\`java
int rows = grid.length;
int cols = grid[0].length;
int[][] mirror = new int[rows][cols];
int[][] flip = new int[rows][cols];
for (int r = 0; r < rows; r++) {
    for (int c = 0; c < cols; c++) {
        mirror[r][cols - 1 - c] = grid[r][c];   // left to right
        flip[rows - 1 - r][c] = grid[r][c];     // top to bottom
    }
}
\`\`\`

| Original | Mirror | Flip | Turned 90 degrees clockwise |
|---|---|---|---|
| \`{{1, 2, 3}, {4, 5, 6}}\` | \`{{3, 2, 1}, {6, 5, 4}}\` | \`{{4, 5, 6}, {1, 2, 3}}\` | \`{{4, 1}, {5, 2}, {6, 3}}\` |

The clockwise turn combines the two ideas: \`new int[cols][rows]\` and \`result[c][rows - 1 - r] = grid[r][c]\`.

### Why a New Grid?

Writing the mirror back into the same grid, \`grid[r][cols - 1 - c] = grid[r][c]\`, overwrites values before they are read. Row \`{1, 2, 3}\` becomes \`{1, 2, 1}\`: the 3 is lost when the 1 is copied over it. Either build a new grid or swap pairs with a temp variable, as Part 3 did for reversing rows.
      `
    },
    {
      id: 'csa2darr5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
int[][] q = {{1, 2}, {3, 4}, {5, 6}};
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does transpose(q) return?',
            options: [
              '{{1, 3, 5}, {2, 4, 6}}',
              '{{2, 1}, {4, 3}, {6, 5}}',
              '{{5, 6}, {3, 4}, {1, 2}}',
              '{{1, 2, 3}, {4, 5, 6}}'
            ],
            correctAnswer: 0,
            explanation: 'q has 3 rows and 2 columns, so the result has 2 rows and 3 columns, and column 0 of q (1, 3, 5) becomes row 0. The other grids are the mirror, the flip, and the six values refilled in row-major order.'
          },
          {
            question: 'transpose creates its result with new int[grid.length][grid[0].length] by mistake. What happens when transpose(q) runs?',
            options: [
              'It throws an ArrayIndexOutOfBoundsException',
              'It returns a copy of q unchanged',
              'It returns {{1, 3, 5}, {2, 4, 6}}',
              'It fills the first two rows only'
            ],
            correctAnswer: 0,
            explanation: 'The result is then 3 x 2, the same shape as q. Writing result[c][r] works while r is 0 or 1, but at r = 2 the code writes result[0][2], and each row of the result has only 2 columns, so Java throws.'
          },
          {
            question: 'Which assignment, inside loops over r and c, builds a left-to-right mirror of grid in result?',
            options: [
              'result[r][n - 1 - c] = grid[r][c];',
              'result[r][c - 1] = grid[r][c];',
              'result[c][r] = grid[r][c];',
              'result[r][n - c] = grid[r][c];'
            ],
            correctAnswer: 0,
            explanation: 'A mirror keeps each element in its row and sends column c to column n - 1 - c, where n is the number of columns. Swapping the indices transposes, while c - 1 and n - c each go out of bounds, at c = 0.'
          }
        ]
      }
    },
    {
      id: 'csa2darr5-convert',
      type: 'text' as const,
      content: `
## A 1D Array Into a Grid (Row-Major)

Element k of the 1D array goes to row \`k / cols\` and column \`k % cols\`: integer division counts the full rows before it, and the remainder is its place in the current row.

\`\`\`java
public static int[][] toGrid(int[] arr, int rows, int cols) {
    int[][] grid = new int[rows][cols];
    for (int k = 0; k < arr.length; k++) {
        grid[k / cols][k % cols] = arr[k];
    }
    return grid;
}
\`\`\`

| Call | Result |
|---|---|
| \`toGrid({10, 20, 30, 40, 50, 60}, 2, 3)\` | \`{{10, 20, 30}, {40, 50, 60}}\` |
| same, with \`grid[k % rows][k / rows]\` (column-major fill) | \`{{10, 30, 50}, {20, 40, 60}}\` |
| same, with \`grid[k / rows][k % rows]\` (wrong divisor) | ArrayIndexOutOfBoundsException when k is 4 |

In a 3 x 4 grid, k = 7 lands at row 7 / 4 = 1, column 7 % 4 = 3.

## A Grid Into a 1D Array

\`\`\`java
int[] flat = new int[grid.length * grid[0].length];
int k = 0;
for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < grid[0].length; c++) {
        flat[k] = grid[r][c];          // or flat[r * grid[0].length + c]
        k++;
    }
}
\`\`\`

Both forms flatten \`{{1, 2, 3}, {4, 5, 6}}\` to \`{1, 2, 3, 4, 5, 6}\`. The formula multiplies by the number of **columns**, because each earlier row holds that many elements. Multiplying by the number of rows instead writes two values into index 2 and gives \`{1, 2, 4, 5, 6, 0}\`.

To copy just one column into a 1D array, the new array has one slot per **row**: \`int[] col = new int[grid.length];\` then \`col[r] = grid[r][c];\` for each r. Column 3 of the Part 2 \`sales\` grid gives \`{4, 15, 15}\`.

## A Grid Into an ArrayList

When the number of results is not known in advance, collect them in an ArrayList (the Quick Reference methods \`add\`, \`get\`, \`set\`, \`remove\` and \`size\` are enough):

\`\`\`java
import java.util.ArrayList;

public static ArrayList<Integer> evensList(int[][] grid) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] % 2 == 0) {
                result.add(grid[r][c]);       // autoboxed to Integer
            }
        }
    }
    return result;
}
\`\`\`

\`evensList(sales)\` returns \`[12, 4, 18, 6]\`, in row-major order. Going the other way, a list of 6 values can fill a 3 x 2 grid with \`grid[k / 2][k % 2] = list.get(k);\`: the list \`[8, 3, 5, 1, 9, 4]\` becomes \`{{8, 3}, {5, 1}, {9, 4}}\`.
      `
    },
    {
      id: 'csa2darr5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A 1D array is copied into a 3 x 4 grid in row-major order. In which row does \`arr[10]\` land? _______

2) A 4 x 5 grid is flattened in row-major order. At what index of the 1D array does the element at row 1, column 2 end up? _______

3) What does \`evensList(new int[][] {{3, 8, 6}, {5, 2, 7}}).size()\` return? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '7', '3'],
        hint1: 'Divide k by the number of columns.',
        hint2: 'Each earlier row holds 5 elements.',
        hint3: 'Count the even values: 8, 6 and 2.',
        explanation: 'Row 10 / 4 is 2 (and column 10 % 4 is 2). Row 1 starts after 5 elements, so row 1, column 2 is at 1 * 5 + 2 = 7. The list holds 8, 6 and 2, so its size is 3.'
      }
    },
    {
      id: 'csa2darr5-objects',
      type: 'text' as const,
      content: `
## Grids of Objects

A 2D array of objects stores references, and any slot that was never assigned holds \`null\`. Calling a method through \`null\` throws a NullPointerException, so every traversal checks the slot first.

\`\`\`java
public class Plant {
    private String name;
    private int height;

    public Plant(String n, int h) {
        name = n;
        height = h;
    }
    public String getName() { return name; }
    public int getHeight() { return height; }
}

Plant[][] garden = new Plant[2][3];          // every slot starts as null
garden[0][0] = new Plant("fern", 30);
garden[0][2] = new Plant("mint", 12);
garden[1][1] = new Plant("sage", 48);
\`\`\`

### Average Height of the Plants That Exist

\`\`\`java
int total = 0;
int count = 0;
for (int r = 0; r < garden.length; r++) {
    for (int c = 0; c < garden[0].length; c++) {
        if (garden[r][c] != null) {
            total += garden[r][c].getHeight();
            count++;
        }
    }
}
double avg = (double) total / count;         // 90 / 3 = 30.0
\`\`\`

The divisor is \`count\`, the number of plants, not the 6 slots: dividing by 6 gives 15.0. Without the null check, the loop throws a NullPointerException at \`garden[0][1]\`.

### The Tallest Plant's Name

\`\`\`java
Plant tallest = null;
for (int r = 0; r < garden.length; r++) {
    for (int c = 0; c < garden[0].length; c++) {
        Plant p = garden[r][c];
        if (p != null && (tallest == null || p.getHeight() > tallest.getHeight())) {
            tallest = p;
        }
    }
}
// tallest.getName() is "sage"
\`\`\`

The first plant found becomes the first candidate, which is the object version of starting a maximum at the first element. The \`null\` test must come first in each \`&&\` and \`||\`, so the method call is skipped whenever the reference is null.

## Misconceptions When Building Grids

| Misconception | What actually happens |
|---|---|
| "A transposed grid has the same dimensions." | It is \`new int[cols][rows]\`; the same shape throws unless the grid is square |
| "Row-major position k is at \`[k / rows][k % rows]\`." | divide by the number of **columns** |
| "Mirroring can copy straight back into the same grid." | values are overwritten before they are read |
| "A new \`Plant[2][3]\` holds six Plant objects." | it holds six \`null\` references until objects are assigned |
| "Average over a grid of objects divides by rows x cols." | divide by the number of real objects counted |
      `
    },
    {
      id: 'csa2darr5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

**Segment A**
\`\`\`java
Plant[][] yard = new Plant[2][2];
yard[0][1] = new Plant("ivy", 20);
yard[1][0] = new Plant("moss", 5);
int total = 0;
int count = 0;
for (int r = 0; r < yard.length; r++) {
    for (int c = 0; c < yard[0].length; c++) {
        if (yard[r][c] != null && yard[r][c].getHeight() > 0) {
            total += yard[r][c].getHeight();
            count++;
        }
    }
}
System.out.println((double) total / count);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '12.5',
              '6.25',
              '12.0',
              '25.0'
            ],
            correctAnswer: 0,
            explanation: 'Two plants exist, with heights 20 and 5, so the total is 25 and the count is 2. The cast makes 25 / 2 a double division, giving 12.5; 6.25 would come from dividing by all four slots.'
          },
          {
            question: 'The condition is rewritten as yard[r][c].getHeight() > 0 && yard[r][c] != null. What happens now?',
            options: [
              'It throws an exception',
              'It prints 12.5, as before',
              'It skips the empty slots safely',
              'It counts each empty slot as 0'
            ],
            correctAnswer: 0,
            explanation: 'The first slot, yard[0][0], is null, and the rewritten test calls getHeight on it before the null check is reached. That throws a NullPointerException; the original order skips the call for null slots.'
          },
          {
            question: 'Why is an ArrayList a natural choice for the result of evensList?',
            options: [
              'The number of matches is not known in advance',
              'An int array cannot hold values from a 2D array',
              'An ArrayList keeps the values in row-major order',
              'An int array cannot be returned from a static method'
            ],
            correctAnswer: 0,
            explanation: 'evensList does not know how many even values it will find until it has checked them all, and an ArrayList grows with each add. An int array would need a separate counting pass first; it can hold the values and can be returned.'
          }
        ]
      }
    }
  ]
}
