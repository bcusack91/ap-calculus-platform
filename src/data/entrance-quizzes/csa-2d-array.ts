/**
 * Entrance Quiz — 2D Arrays (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'c2a-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nint[][] m = {{2, 4, 6}, {1, 3, 5}};\nSystem.out.println(m.length + " " + m[0].length + " " + m[1][2]);',
    options: ['2 3 5', '3 2 5', '2 3 3', '3 2 6'],
    correctIndex: 0,
    explanation: 'm.length counts the rows, 2, and m[0].length counts the columns of row 0, 3. m[1][2] is row 1, column 2, which holds 5.',
  },
  {
    id: 'c2a-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed on the second line of output?\nint[][] g = {{1, 2, 3}, {4, 5, 6}};\nfor (int c = 0; c < g[0].length; c++) {\nfor (int r = 0; r < g.length; r++) {\nSystem.out.print(g[r][c] + " ");\n}\nSystem.out.println();\n}',
    options: ['4 5 6', '1 2 3', '2 5', '2 5 3 6'],
    correctIndex: 2,
    explanation: 'The outer loop runs over columns, so each line lists one column from top to bottom. The first line is 1 4 and the second is column 1, which is 2 5.',
  },
  {
    id: 'c2a-ent-2a', partNumber: 2, partTitle: 'Creating 2D Arrays: Arrays of Arrays',
    question: 'What is printed?\nint[][] p = {{1, 2}, {3, 4}, {5, 6}};\nint[] r = p[2];\np[0] = p[1];\nr[0] = 9;\np[0][1] = 0;\nSystem.out.println(p[0][1] + " " + p[1][1] + " " + p[2][0]);',
    options: ['0 0 9', '0 4 9', '0 4 5', '2 0 9'],
    correctIndex: 0,
    explanation: 'p[0] = p[1] makes both slots refer to one row, so setting p[0][1] to 0 also changes p[1][1]. r is an alias for row 2, so r[0] = 9 changes p[2][0].',
  },
  {
    id: 'c2a-ent-2b', partNumber: 2, partTitle: 'Creating 2D Arrays: Arrays of Arrays',
    question: 'After String[][] names = new String[3][4]; runs, which statement is true?',
    options: ['There are 12 String objects, each holding ""', 'There are 3 array objects holding 12 nulls', 'The rows are null until each one is created', 'Four arrays exist, and the 12 String slots are null'],
    correctIndex: 3,
    explanation: 'new builds one outer array plus 3 row arrays of length 4, so the rows exist. Each of the 12 element slots is a reference that starts as null; no String objects are created.',
  },
  {
    id: 'c2a-ent-3a', partNumber: 3, partTitle: 'Row-Major and Column-Major Traversals in Depth',
    question: 'What happens when this code segment runs?\nint[][] g = {{1, 2, 3, 4}, {5, 6, 7, 8}};\nfor (int r = 0; r < g[0].length; r++) {\nfor (int c = 0; c < g.length; c++) {\nSystem.out.print(g[r][c] + " ");\n}\n}',
    options: ['It prints 1 5 2 6 3 7 4 8', 'It prints 1 2 3 4 5 6 7 8', 'It prints 1 2 5 6 and stops normally', 'It prints 1 2 5 6 and then throws an exception'],
    correctIndex: 3,
    explanation: 'The bounds are swapped: r runs 0 to 3 over a grid with only 2 rows. Rows 0 and 1 print their first two elements, and then g[2] does not exist, so an ArrayIndexOutOfBoundsException is thrown.',
  },
  {
    id: 'c2a-ent-3b', partNumber: 3, partTitle: 'Row-Major and Column-Major Traversals in Depth',
    question: 'What is the value of total after this code segment runs?\nint[][] h = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};\nint total = 0;\nfor (int r = 0; r < h.length - 1; r++) {\nfor (int c = 2; c < h[0].length; c++) {\ntotal += h[r][c];\n}\n}',
    options: ['22', '33', '15', '42'],
    correctIndex: 0,
    explanation: 'r runs 0 to 1 (h.length - 1 is 2, excluded) and c runs 2 to 3. The visited elements are 3, 4, 7 and 8, which add to 22.',
  },
  {
    id: 'c2a-ent-4a', partNumber: 4, partTitle: 'Enhanced for Loops on 2D Arrays',
    question: 'What is printed?\nint[][] m = {{2, 5}, {7, 1}};\nfor (int[] row : m) {\nfor (int c = 0; c < row.length; c++) {\nrow[c] = row[c] + row[0];\n}\n}\nSystem.out.println(m[0][1] + " " + m[1][1]);',
    options: ['7 8', '9 15', '9 8', '7 15'],
    correctIndex: 1,
    explanation: 'row is an alias for a real row, so the changes stick, and row[0] is doubled first. Row 0 becomes {4, 9} and row 1 becomes {14, 15}, because each later element adds the already-updated row[0].',
  },
  {
    id: 'c2a-ent-4b', partNumber: 4, partTitle: 'Enhanced for Loops on 2D Arrays',
    question: 'Which code segment sets every element of the int[][] grid g to 0?',
    options: ['for (int[] row : g) { for (int v : row) { v = 0; } }', 'for (int[] row : g) { row = new int[row.length]; }', 'for (int r = 0; r < g.length; r++) { g[r] = g[0]; }', 'for (int[] row : g) { for (int c = 0; c < row.length; c++) { row[c] = 0; } }'],
    correctIndex: 3,
    explanation: 'The outer variable refers to each real row, so assigning row[c] changes the grid. Assigning the inner enhanced variable or the row variable only changes a local copy or reference.',
  },
  {
    id: 'c2a-ent-5a', partNumber: 5, partTitle: 'Grids of Strings and Objects; Modeling Data; Common Errors',
    question: 'A gradebook is int[][] scores = new int[30][5];, where each row is a student and each column is an assignment. Which approach finds the total of assignment 2 for the whole class?',
    options: ['Loop c from 0 to 4 adding scores[2][c]', 'Loop r over every row, adding scores[r][2]', 'Loop r from 0 to 29 adding scores[2][r]', 'Add up every element of scores[2]'],
    correctIndex: 1,
    explanation: 'Assignment 2 is column 2, so the row index varies while the column stays 2, and the row stays in the first bracket. scores[2] is one student\'s row, and scores[2][r] runs past its 5 columns.',
  },
  {
    id: 'c2a-ent-5b', partNumber: 5, partTitle: 'Grids of Strings and Objects; Modeling Data; Common Errors',
    question: 'Seat is a class with a method reserve(String name). What happens when these statements run?\nSeat[][] hall = new Seat[2][3];\nhall[1][2].reserve("Ana");',
    options: ['It reserves the seat in row 1, column 2', 'It throws a NullPointerException', 'It creates a Seat and then reserves it for Ana', 'It does not compile, since hall holds no Seats'],
    correctIndex: 1,
    explanation: 'new Seat[2][3] creates the rows of reference slots, but every slot is null until a Seat is stored there. The code compiles, and calling reserve through the null slot throws at run time.',
  },
  {
    id: 'c2a-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is printed?\nint[][] p = {{1, 2, 3}, {4, 5, 6}};\nint[] bottom = p[1];\np[1] = p[0];\nbottom[0] = 0;\np[0][2] = 9;\nSystem.out.println(p[1][2] + " " + bottom[0] + " " + p[0][0]);',
    options: ['3 0 1', '9 4 1', '9 0 1', '6 0 0'],
    correctIndex: 2,
    explanation: 'After p[1] = p[0], both slots refer to the first row, so p[0][2] = 9 is seen as p[1][2]. bottom still refers to the old second row, which is no longer in the grid, and its first element becomes 0.',
  },
  {
    id: 'c2a-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'A method fills a new int[3][4] grid with 1, 2, 3, ... going down each column: column 0 from top to bottom, then column 1, and so on. What number is stored at row 1, column 2?',
    options: ['7', '6', '10', '8'],
    correctIndex: 3,
    explanation: 'Columns 0 and 1 hold the first 3 + 3 = 6 numbers. Column 2 then holds 7, 8 and 9 from the top, so row 1 gets 8; a row-major fill would put 7 there.',
  },
  {
    id: 'c2a-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nint[][] a = new int[2][3];\nfor (int r = 0; r < a.length; r++) {\nfor (int c = 0; c < a[r].length; c++) {\na[r][c] = c - r;\n}\n}\na[0] = a[1];\na[1][2] = 5;\nint t = 0;\nfor (int[] row : a) {\nfor (int v : row) {\nt += v;\n}\n}\nSystem.out.println(t);',
    options: ['7', '3', '8', '4'],
    correctIndex: 2,
    explanation: 'The fill gives rows {0, 1, 2} and {-1, 0, 1}. After a[0] = a[1], both slots share the second row, which becomes {-1, 0, 5}, and the loops add that row twice: 4 + 4 = 8.',
  },
  {
    id: 'c2a-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A method zap(int[][] g) contains only this loop:\nfor (int[] row : g) {\nrow = new int[row.length];\n}\nAfter zap(data) runs on a grid data, what is true?',
    options: ['Every element of data is 0', 'data now refers to a new grid of zeros', 'data is unchanged', 'Each row of data is replaced by a new row'],
    correctIndex: 2,
    explanation: 'row is a loop variable holding a copy of each row reference, so pointing it at a new array never changes the slots of g. Setting row[c] in an indexed inner loop would change the grid.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Creating 2D Arrays: Arrays of Arrays' },
    { partNumber: 3, partTitle: 'Row-Major and Column-Major Traversals in Depth' },
    { partNumber: 4, partTitle: 'Enhanced for Loops on 2D Arrays' },
    { partNumber: 5, partTitle: 'Grids of Strings and Objects; Modeling Data; Common Errors' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
