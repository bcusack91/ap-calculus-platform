/**
 * Entrance Quiz — Iteration (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cit-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nint sum = 0;\nfor (int i = 1; i <= 7; i += 2) {\nsum += i;\n}\nSystem.out.println(sum);',
    options: ['9', '16', '28', '15'],
    correctIndex: 1,
    explanation: 'i takes the values 1, 3, 5 and 7, because 7 <= 7 is still true, and their sum is 16. Stopping before 7 gives 9, and adding every number from 1 to 7 gives 28.',
  },
  {
    id: 'cit-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nString s = "loop";\nString t = "";\nfor (int i = s.length() - 1; i > 0; i--) {\nt += s.substring(i, i + 1);\n}\nSystem.out.println(t);',
    options: ['pool', 'loop', 'poo', 'An exception'],
    correctIndex: 2,
    explanation: 'i runs 3, 2, 1 and appends p, o and o. The test i > 0 stops before index 0, so the first letter is never added; i >= 0 would produce the full reverse.',
  },
  {
    id: 'cit-ent-2a', partNumber: 2, partTitle: 'while Loops and Trace Tables',
    question: 'What is printed?\nint a = 5;\nint b = 40;\nint n = 0;\nwhile (a < b) {\na = a + 6;\nb = b - 3;\nn++;\n}\nSystem.out.println(n + " " + a + " " + b);',
    options: ['3 23 31', '4 29 28', '5 35 25', '4 23 28'],
    correctIndex: 1,
    explanation: 'The pairs after each pass are (11, 37), (17, 34), (23, 31) and (29, 28). The next check, 29 < 28, is false, so the loop ends after 4 passes with those final values.',
  },
  {
    id: 'cit-ent-2b', partNumber: 2, partTitle: 'while Loops and Trace Tables',
    question: 'Which code segment never ends?',
    options: ['int i = 0;\nwhile (i != 9) { i += 2; }', 'int i = 1;\nwhile (i != 11) { i += 2; }', 'int i = 20;\nwhile (i >= 9) { i -= 4; }', 'int i = 0;\nwhile (i <= 10) { i += 4; }'],
    correctIndex: 0,
    explanation: 'Starting at 0 and adding 2 gives only even numbers, so i steps from 8 to 10 and is never exactly 9. Starting at 1, the odd values reach 11 exactly, and the other two loops move toward failing their tests.',
  },
  {
    id: 'cit-ent-3a', partNumber: 3, partTitle: 'for Loops: Counting Passes and Converting to while',
    question: 'How many times does the body of this loop execute?\nfor (int k = 4; k <= 50; k += 6)',
    options: ['7', '9', '10', '8'],
    correctIndex: 3,
    explanation: 'The first value is 4 and the last value that passes is 46, since 52 fails. (46 - 4) / 6 + 1 = 8 passes.',
  },
  {
    id: 'cit-ent-3b', partNumber: 3, partTitle: 'for Loops: Counting Passes and Converting to while',
    question: 'A student rewrites for (int j = 3; j < 12; j += 3) { sum += j; } as the while loop below. Starting from sum = 0, what does the while version leave in sum?\nint j = 3;\nwhile (j < 12) {\nj += 3;\nsum += j;\n}',
    options: ['18', '27', '30', '15'],
    correctIndex: 1,
    explanation: 'The update now runs before the add, so the loop adds 6, 9 and 12 instead of 3, 6 and 9. The total is 27, while the original for loop gives 18.',
  },
  {
    id: 'cit-ent-4a', partNumber: 4, partTitle: 'Standard Algorithms I: Sum, Average, Frequency, Divisibility',
    question: 'What is the value of find(13, 30) + find(25, 35)?\npublic static int find(int lo, int hi) {\nfor (int k = lo; k <= hi; k++) {\nif (k % 4 == 0 && k % 6 == 0) {\nreturn k;\n}\n}\nreturn -1;\n}',
    options: ['24', '60', '23', '48'],
    correctIndex: 2,
    explanation: 'The first number from 13 to 30 divisible by both 4 and 6 is 24, returned at once. From 25 to 35 there is none (36 is too large), so the loop finishes and returns -1, and 24 + (-1) is 23.',
  },
  {
    id: 'cit-ent-4b', partNumber: 4, partTitle: 'Standard Algorithms I: Sum, Average, Frequency, Divisibility',
    question: 'What is printed?\nint sum = 0;\nfor (int d = 1; d < 12; d++) {\nif (12 % d == 0) {\nsum += d;\n}\n}\nSystem.out.println(sum);',
    options: ['28', '15', '6', '16'],
    correctIndex: 3,
    explanation: 'The loop adds every d below 12 that divides 12 evenly: 1, 2, 3, 4 and 6, for 16. Including 12 itself would give 28.',
  },
  {
    id: 'cit-ent-5a', partNumber: 5, partTitle: 'Standard Algorithms II: Digits, Min/Max, and Loop Bugs',
    question: 'What is printed?\nint n = 50816;\nint s = 0;\nwhile (n > 0) {\nif (n % 10 > 4) {\ns += n % 10;\n}\nn /= 10;\n}\nSystem.out.println(s);',
    options: ['19', '20', '14', '3'],
    correctIndex: 0,
    explanation: 'The digits come off right to left: 6, 1, 8, 0, 5. Those greater than 4 are 6, 8 and 5, and their sum is 19.',
  },
  {
    id: 'cit-ent-5b', partNumber: 5, partTitle: 'Standard Algorithms II: Digits, Min/Max, and Loop Bugs',
    question: 'What is printed?\nint minVal = Integer.MAX_VALUE;\nint pos = -1;\nfor (int x = 0; x <= 6; x++) {\nint y = (x - 2) * (x - 5);\nif (y <= minVal) {\nminVal = y;\npos = x;\n}\n}\nSystem.out.println(minVal + " " + pos);',
    options: ['-2 3', '-2 4', '0 4', '-2 5'],
    correctIndex: 1,
    explanation: 'The y values are 10, 4, 0, -2, -2, 0 and 4, so the minimum, -2, occurs at x = 3 and x = 4. Because the test is <=, the tie at x = 4 replaces the earlier position.',
  },
  {
    id: 'cit-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What does countSteps(20) return?\npublic static int countSteps(int n) {\nint steps = 0;\nwhile (n != 1) {\nif (n % 3 == 0) {\nn = n / 3;\n} else {\nn = n - 1;\n}\nsteps++;\n}\nreturn steps;\n}',
    options: ['4', '6', '5', '7'],
    correctIndex: 2,
    explanation: 'n goes 20, 19, 18, 6, 2, 1, so the body runs 5 times. The check that finds n equal to 1 ends the loop without adding a step.',
  },
  {
    id: 'cit-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is wrong with this method?\npublic static int countMultiples(int lo, int hi, int d) {\nfor (int k = lo; k <= hi; k++) {\nint count = 0;\nif (k % d == 0) {\ncount++;\n}\n}\nreturn count;\n}',
    options: ['The loop skips hi because it uses <=', 'k % d == 0 tests whether k divides d', 'count++ should come before the if statement', 'count is declared inside the loop body'],
    correctIndex: 3,
    explanation: 'A variable declared in the loop body exists only inside the loop and restarts at 0 on every pass, so the statement after the loop cannot use it. Declaring count before the loop fixes both problems.',
  },
  {
    id: 'cit-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nint n = 7;\nint steps = 0;\nwhile (n > 1) {\nif (n % 2 == 0) {\nn = n / 2;\n} else {\nn = n - 3;\n}\nsteps++;\n}\nSystem.out.println(n + " " + steps);',
    options: ['1 3', '1 4', '0 3', '2 2'],
    correctIndex: 0,
    explanation: 'n goes from 7 to 4 (odd), then 2 and 1 (even), using 3 passes. The check 1 > 1 is false, so the loop ends with n at 1.',
  },
  {
    id: 'cit-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nint sum = 0;\nint c = 0;\nfor (int k = 1; k <= 10; k++) {\nif (k % 3 == 1) {\nsum += k;\nc++;\n}\n}\ndouble avg = sum / c;\nSystem.out.println(avg);',
    options: ['5.5', '5', '22.0', '5.0'],
    correctIndex: 3,
    explanation: 'The values with remainder 1 are 1, 4, 7 and 10, so sum is 22 and c is 4. sum / c is int division, 5, which is stored as 5.0; a cast to double before dividing would give 5.5.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'while Loops and Trace Tables' },
    { partNumber: 3, partTitle: 'for Loops: Counting Passes and Converting to while' },
    { partNumber: 4, partTitle: 'Standard Algorithms I: Sum, Average, Frequency, Divisibility' },
    { partNumber: 5, partTitle: 'Standard Algorithms II: Digits, Min/Max, and Loop Bugs' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
