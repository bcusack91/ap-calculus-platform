/**
 * Entrance Quiz — Nested Loops & Loop Analysis (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'clp-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Successive calls to getNext() return 4, 7, 2 and then -1. What is printed?\nint sum = 0;\nint count = 0;\nint v = getNext();\nwhile (v != -1) {\nsum += v;\ncount++;\nv = getNext();\n}\nSystem.out.println(sum + " " + count);',
    options: ['12 4', '13 3', '13 4', '9 2'],
    correctIndex: 1,
    explanation: 'The first value is read before the loop and each later value at the end of the body, so the loop processes 4, 7 and 2 and stops when it reads -1. The sentinel is never added or counted.',
  },
  {
    id: 'clp-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nfor (int r = 1; r <= 2; r++) {\nfor (int c = 1; c <= 3; c++) {\nSystem.out.print(r * c);\n}\nSystem.out.println();\n}',
    options: ['123\n123', '123246', '12\n24\n36', '123\n246'],
    correctIndex: 3,
    explanation: 'For each r the inner loop prints r * c for c = 1 to 3 on one line, and the println after the inner loop ends that line. Row 1 is 123 and row 2 is 246.',
  },
  {
    id: 'clp-ent-2a', partNumber: 2, partTitle: 'Nested Loops: How the Inner Loop Restarts',
    question: 'An outer loop runs i from 1 to 4, an inner loop prints j, and a println follows the inner loop. Which inner header prints the rows 4, 43, 432 and 4321?',
    options: ['int j = 4; j > 3 - i; j--', 'int j = 4; j >= 5 - i; j--', 'int j = i; j >= 1; j--', 'int j = 4; j >= i; j--'],
    correctIndex: 1,
    explanation: 'Row i needs i values counting down from 4, so the last value printed is 5 - i, which is what j >= 5 - i allows. j >= i gives the rows in the opposite order, and j > 3 - i prints one value too many in every row.',
  },
  {
    id: 'clp-ent-2b', partNumber: 2, partTitle: 'Nested Loops: How the Inner Loop Restarts',
    question: 'What is printed?\nint total = 0;\nfor (int i = 1; i <= 3; i++) {\nfor (int j = 1; j <= i; j++) {\ntotal += i * j;\n}\n}\nSystem.out.println(total);',
    options: ['36', '14', '25', '19'],
    correctIndex: 2,
    explanation: 'The inner loop restarts at 1 on every outer pass and runs up to i. The passes add 1, then 2 + 4, then 3 + 6 + 9, for a total of 25.',
  },
  {
    id: 'clp-ent-3a', partNumber: 3, partTitle: 'Nested Loop Algorithms: Pairs, Tables, and Primes',
    question: 'What is printed?\nint count = 0;\nfor (int a = 1; a <= 8; a++) {\nfor (int b = a; b <= 8; b++) {\nif (a + b == 10) {\ncount++;\n}\n}\n}\nSystem.out.println(count);',
    options: ['7', '3', '8', '4'],
    correctIndex: 3,
    explanation: 'Starting b at a visits only pairs with a <= b, including a value paired with itself. The pairs adding to 10 are (2, 8), (3, 7), (4, 6) and (5, 5).',
  },
  {
    id: 'clp-ent-3b', partNumber: 3, partTitle: 'Nested Loop Algorithms: Pairs, Tables, and Primes',
    question: 'What is printed?\nString x = "seen";\nString y = "need";\nint count = 0;\nfor (int i = 0; i < x.length(); i++) {\nfor (int j = 0; j < y.length(); j++) {\nif (x.substring(i, i + 1).equals(y.substring(j, j + 1))) {\ncount++;\n}\n}\n}\nSystem.out.println(count);',
    options: ['5', '3', '4', '6'],
    correctIndex: 0,
    explanation: 'Each letter of "seen" is compared with every letter of "need". The s matches nothing, each e matches the two e\'s (2 + 2), and the n matches one n, for 5.',
  },
  {
    id: 'clp-ent-4a', partNumber: 4, partTitle: 'Informal Run-Time Analysis: Counting Statement Executions',
    question: 'In terms of n, how many times does statement S execute?\nfor (int i = 0; i < n; i++) {\nfor (int j = i + 1; j < n; j++) {\nS;\n}\n}',
    options: ['n * n', 'n(n - 1) / 2', 'n * (n - 1)', '2n - 1'],
    correctIndex: 1,
    explanation: 'The inner loop runs n - 1 times when i is 0, then n - 2, down to 0 when i is n - 1. That sum, (n - 1) + (n - 2) + ... + 0, equals n(n - 1) / 2.',
  },
  {
    id: 'clp-ent-4b', partNumber: 4, partTitle: 'Informal Run-Time Analysis: Counting Statement Executions',
    question: 'How many times is the condition k <= 20 evaluated?\nfor (int i = 0; i < 5; i++) {\nfor (int k = 1; k <= 20; k = k * 2) {\ncount++;\n}\n}',
    options: ['25', '6', '35', '30'],
    correctIndex: 3,
    explanation: 'On each outer pass k takes the values 1, 2, 4, 8 and 16, which pass, and then 32, which fails, so the condition is checked 6 times. Over 5 outer passes that is 30 checks.',
  },
  {
    id: 'clp-ent-5a', partNumber: 5, partTitle: 'Comparing Algorithms and Nested-Loop Pitfalls',
    question: 'What is printed?\nint j = 0;\nfor (int i = 0; i < 3; i++) {\nwhile (j < 2) {\nSystem.out.print("#");\nj++;\n}\nSystem.out.print("|");\n}',
    options: ['##|##|##|', '##|||', '#|#|#|', '###|||'],
    correctIndex: 1,
    explanation: 'j is declared before the outer loop, so it is never reset. The while loop prints two # on the first pass, and on the later passes j is already 2, so only the bars print.',
  },
  {
    id: 'clp-ent-5b', partNumber: 5, partTitle: 'Comparing Algorithms and Nested-Loop Pitfalls',
    question: 'This method returns at the first matching pair. How many times does it call equals for hasRepeat("abcb")?\npublic static boolean hasRepeat(String w) {\nfor (int i = 0; i < w.length(); i++) {\nfor (int j = i + 1; j < w.length(); j++) {\nif (w.substring(i, i + 1).equals(w.substring(j, j + 1))) {\nreturn true;\n}\n}\n}\nreturn false;\n}',
    options: ['6', '3', '4', '5'],
    correctIndex: 3,
    explanation: 'With i = 0, "a" is compared with b, c and b, which is 3 calls with no match. With i = 1, "b" is compared with "c" and then with "b", which matches on the 5th call and returns.',
  },
  {
    id: 'clp-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is printed?\nint count = 0;\nfor (int i = 1; i <= 4; i++) {\nfor (int j = 1; j <= 4; j++) {\nif (i * j % 3 == 0) {\ncount++;\n}\n}\n}\nSystem.out.println(count);',
    options: ['7', '8', '4', '6'],
    correctIndex: 0,
    explanation: 'A product of numbers from 1 to 4 is a multiple of 3 only when i or j is 3. Row i = 3 gives 4 pairs, and j = 3 adds one pair in each of the other 3 rows, for 7.',
  },
  {
    id: 'clp-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is the length of the String returned by steps(5)?\npublic static String steps(int n) {\nString r = "";\nfor (int row = 1; row <= n; row++) {\nfor (int k = 1; k <= row; k++) {\nr += row;\n}\nr += "/";\n}\nreturn r;\n}',
    options: ['15', '19', '20', '25'],
    correctIndex: 2,
    explanation: 'The inner loop appends one digit per pass, 1 + 2 + 3 + 4 + 5 = 15 digits in all. The outer loop adds a slash after every row, including the last, so the length is 15 + 5 = 20.',
  },
  {
    id: 'clp-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nfor (int i = 3; i >= 1; i--) {\nString line = "";\nfor (int j = 1; j <= i; j++) {\nline += j;\n}\nSystem.out.print(line + " ");\n}',
    options: ['1 12 123', '321 32 3', '123 12 1', '123 123 123'],
    correctIndex: 2,
    explanation: 'line is reset on each outer pass, and the inner loop appends 1 up to the current i. With i going 3, 2, 1, the rows are 123, 12 and 1.',
  },
  {
    id: 'clp-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is the value of c after this code segment runs?\nint c = 0;\nfor (int i = 0; i < 8; i++) {\nfor (int j = 0; j < 8; j += 3) {\nc++;\n}\n}',
    options: ['24', '64', '21', '32'],
    correctIndex: 0,
    explanation: 'The inner loop runs for j = 0, 3 and 6, three passes, on every one of the 8 outer passes. Constant bounds multiply, so c is 8 times 3, or 24.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Nested Loops: How the Inner Loop Restarts' },
    { partNumber: 3, partTitle: 'Nested Loop Algorithms: Pairs, Tables, and Primes' },
    { partNumber: 4, partTitle: 'Informal Run-Time Analysis: Counting Statement Executions' },
    { partNumber: 5, partTitle: 'Comparing Algorithms and Nested-Loop Pitfalls' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
