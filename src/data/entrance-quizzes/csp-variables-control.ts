/**
 * Entrance Quiz — Variables & Control Structures (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cvc-ent-1a', partNumber: 1, partTitle: 'Variables, Assignments, Conditionals, and Loops',
    question: 'What is displayed when this code runs?\n\na ← 4\nb ← a + 3\na ← b * 2\nb ← a - b\nDISPLAY(a)\nDISPLAY(b)',
    options: ['14 7', '8 4', '14 3', '7 14'],
    correctIndex: 0,
    explanation: 'After the second line b is 7, then a becomes 7 × 2 = 14. The last assignment uses the new a: b ← 14 − 7 = 7.',
  },
  {
    id: 'cvc-ent-1b', partNumber: 1, partTitle: 'Variables, Assignments, Conditionals, and Loops',
    question: 'What is displayed when this code runs?\n\nx ← 10\nREPEAT UNTIL (x > 8) {\nx ← x + 3\n}\nDISPLAY(x)',
    options: ['13', '11', '16', '10'],
    correctIndex: 3,
    explanation: 'REPEAT UNTIL checks its condition before each pass. Since 10 > 8 is already true, the body never runs and x stays 10.',
  },
  {
    id: 'cvc-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'For which values is this expression true?\n\n(age ≥ 13) AND ((age < 18) OR hasPermit)',
    options: ['age = 20, hasPermit = true', 'age = 12, hasPermit = true', 'age = 20, hasPermit = false', 'age = 10, hasPermit = false'],
    correctIndex: 0,
    explanation: 'With age 20, the first part is true, and the second part is true because hasPermit is true. Age 12 or 10 fails the first part, and age 20 without a permit fails the second.',
  },
  {
    id: 'cvc-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'A program must keep asking a user for a password, stopping only once the entry matches the stored one. Which loop structure fits this task?',
    options: ['REPEAT 3 TIMES', 'REPEAT UNTIL (guess = stored)', 'FOR EACH guess IN stored', 'IF (guess = stored)'],
    correctIndex: 1,
    explanation: 'The number of attempts is not known in advance, so the loop must run until a condition becomes true. REPEAT n TIMES fixes the count, FOR EACH walks a list, and IF does not repeat at all.',
  },
  {
    id: 'cvc-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'What is displayed when list is [4, -2, 6, -5, 1]?\n\nresult ← []\nFOR EACH x IN list {\nIF (x > 0) {\nAPPEND(result, x * 2)\n}\n}\nDISPLAY(result)',
    options: ['[8, 12, 2]', '[4, 6, 1]', '[8, -4, 12, -10, 2]', '[2, 12, 8]'],
    correctIndex: 0,
    explanation: 'This is a filter: only the positive values 4, 6 and 1 pass the IF, and each is doubled before APPEND adds it to the end. The order of the original list is kept.',
  },
  {
    id: 'cvc-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'This code is meant to display the largest value in list. For which list does it display the wrong value?\n\nbest ← 0\nFOR EACH x IN list {\nIF (x > best) {\nbest ← x\n}\n}\nDISPLAY(best)',
    options: ['[0, 5, 3]', '[3, 8, 1]', '[7]', '[-4, -9, -2]'],
    correctIndex: 3,
    explanation: 'Starting best at 0 means a list of all negative values never beats it, so 0 is displayed instead of -2. Starting with best ← list[1] fixes the bug.',
  },
  {
    id: 'cvc-ent-4a', partNumber: 4, partTitle: 'Nested Conditionals and Equivalent Conditions',
    question: 'For which value of n does this code display "B"?\n\nIF (n > 50) {\nIF (n MOD 2 = 0) {\nDISPLAY("A")\n}\nELSE {\nDISPLAY("B")\n}\n}\nELSE {\nIF (n < 10) {\nDISPLAY("C")\n}\nELSE {\nDISPLAY("D")\n}\n}',
    options: ['52', '9', '51', '49'],
    correctIndex: 2,
    explanation: '"B" needs the outer test n > 50 to be true and the inner even test to be false, so n must be an odd number above 50. Of the choices, only 51 qualifies.',
  },
  {
    id: 'cvc-ent-4b', partNumber: 4, partTitle: 'Nested Conditionals and Equivalent Conditions',
    question: 'A program contains IF (NOT ((x > 0) AND (y > 0))). Which condition could replace the one inside the IF without changing what the program does?',
    options: ['(x ≤ 0) AND (y ≤ 0)', '(x ≤ 0) OR (y ≤ 0)', '(x < 0) OR (y < 0)', '(x > 0) OR (y > 0)'],
    correctIndex: 1,
    explanation: 'By De Morgan\'s law, NOT (a AND b) equals (NOT a) OR (NOT b), and NOT (x > 0) is x ≤ 0. Using x < 0 would wrongly treat x = 0 as positive.',
  },
  {
    id: 'cvc-ent-5a', partNumber: 5, partTitle: 'Expressions, MOD, and Strings',
    question: 'What value does the expression 7 + 23 MOD 6 * 2 have?',
    options: ['0', '18', '12', '17'],
    correctIndex: 3,
    explanation: 'MOD and * share precedence and run left to right before +: 23 MOD 6 = 5, then 5 × 2 = 10, and 7 + 10 = 17.',
  },
  {
    id: 'cvc-ent-5b', partNumber: 5, partTitle: 'Expressions, MOD, and Strings',
    question: 'The procedure concat(str1, str2) returns str1 followed by str2, and substring(str, start, length) returns length characters of str beginning at position start (positions start at 1). What is displayed?\n\nw ← concat("rain", "bow")\nDISPLAY(substring(w, 3, 4))',
    options: ['nbow', 'inbo', 'ainb', 'inb'],
    correctIndex: 1,
    explanation: 'The concatenated string is "rainbow". Starting at position 3 (the i) and taking 4 characters gives "inbo".',
  },
  {
    id: 'cvc-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'What is displayed when this code runs?\n\nsum ← 0\ni ← 2\nREPEAT 4 TIMES {\nsum ← sum + i\ni ← i + 3\n}\nDISPLAY(sum)',
    options: ['26', '38', '15', '11'],
    correctIndex: 0,
    explanation: 'The values added are 2, 5, 8 and 11, because i is added before it grows by 3. Their total is 26.',
  },
  {
    id: 'cvc-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'What is the value of grade after this code runs with score ← 85?\n\nIF (score ≥ 70) {\ngrade ← "C"\n}\nELSE {\nIF (score ≥ 80) {\ngrade ← "B"\n}\nELSE {\ngrade ← "F"\n}\n}',
    options: ['"B"', '"F"', '"C"', 'no value is assigned'],
    correctIndex: 2,
    explanation: 'The first test, 85 ≥ 70, is true, so grade becomes "C" and the ELSE branch with the 80 test is never reached. Ranked conditions must check the highest band first.',
  },
  {
    id: 'cvc-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Which code segment never stops running?',
    options: ['x ← 0, then REPEAT UNTIL (x = 10) { x ← x + 2 }', 'x ← 1, then REPEAT UNTIL (x > 10) { x ← x + 2 }', 'x ← 1, then REPEAT UNTIL (x = 10) { x ← x + 2 }', 'x ← 20, then REPEAT UNTIL (x = 10) { x ← x - 2 }'],
    correctIndex: 2,
    explanation: 'Starting at 1 and adding 2 gives only odd values, so x skips over 10 and the condition x = 10 is never true. The other loops reach their exit condition.',
  },
  {
    id: 'cvc-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'Variables a and b hold 3 and 8. Which sequence of assignments swaps their values?',
    options: ['a ← b, then b ← a', 'temp ← a, then b ← a, then a ← temp', 'b ← a, then a ← b', 'temp ← a, then a ← b, then b ← temp'],
    correctIndex: 3,
    explanation: 'Saving a in temp first keeps the 3 from being lost when a takes b\'s value. Without a temporary variable, both variables end up holding the same value.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Variables, Assignments, Conditionals, and Loops' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Nested Conditionals and Equivalent Conditions' },
    { partNumber: 5, partTitle: 'Expressions, MOD, and Strings' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
