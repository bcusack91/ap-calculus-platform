/**
 * Entrance Quiz — Expressions & Operators (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'ceo-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What value is stored in r?\nint r = 18 - 10 % 4 * 3 + 1;',
    options: ['1', '9', '5', '13'],
    correctIndex: 3,
    explanation: '% and * come before - and +, and they run left to right: 10 % 4 is 2 and 2 * 3 is 6. Then 18 - 6 + 1 is 13; working strictly left to right gives the wrong value 1.',
  },
  {
    id: 'ceo-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nSystem.out.println(3 + 4 + "x" + 3 + 4);',
    options: ['7x34', '7x7', '34x7', '34x34'],
    correctIndex: 0,
    explanation: 'Evaluation is left to right. 3 + 4 is int addition, 7, before any String appears; after "x" joins, each later + joins text, so the 3 and 4 are appended as 34.',
  },
  {
    id: 'ceo-ent-2a', partNumber: 2, partTitle: 'Output with print and println',
    question: 'What is printed?\nSystem.out.print("A");\nSystem.out.println("B");\nSystem.out.println();\nSystem.out.print("C");\nSystem.out.println("D");',
    options: ['AB, then CD on the next line', 'AB, then a blank line, then CD', 'A and B on two lines, then CD', 'AB, two blank lines, then CD'],
    correctIndex: 1,
    explanation: 'print leaves the cursor in place, so A and B share a line that println("B") ends. The empty println() ends an empty line, and C and D then print together on the third line.',
  },
  {
    id: 'ceo-ent-2b', partNumber: 2, partTitle: 'Output with print and println',
    question: 'What is printed?\nSystem.out.println("Go\\\\no \\"now\\"");',
    options: ['Go\\\\no "now"', 'Go\\no \\"now\\"', '"Go\\no "now""', 'Go\\no "now"'],
    correctIndex: 3,
    explanation: 'The escape \\\\ prints one backslash, so the n after it is an ordinary letter, and each \\" prints a quotation mark. The outer quotes only mark the literal and are not printed.',
  },
  {
    id: 'ceo-ent-3a', partNumber: 3, partTitle: 'Precedence, Associativity, and Type Promotion',
    question: 'What value is stored in v?\ndouble v = 7 / 2 * 2.0 + 9 % 4 / 2.0;',
    options: ['6.5', '7.5', '6.0', '7.0'],
    correctIndex: 0,
    explanation: '7 / 2 is int division, 3, and 3 * 2.0 is 6.0. Then 9 % 4 is 1 and 1 / 2.0 is 0.5, for 6.5; the later 2.0 cannot undo the earlier int division.',
  },
  {
    id: 'ceo-ent-3b', partNumber: 3, partTitle: 'Precedence, Associativity, and Type Promotion',
    question: 'With int a = 7; and int b = 2;, which expression evaluates to 3.5?',
    options: ['a / b * 1.0', '(double) (a / b)', '1.0 * a / b', 'a / b / 1.0'],
    correctIndex: 2,
    explanation: 'Operators at one level run left to right, so 1.0 * a is 7.0 and 7.0 / b is 3.5. In the other three, a / b runs as int division first and gives 3 before any double is involved.',
  },
  {
    id: 'ceo-ent-4a', partNumber: 4, partTitle: 'Integer Division and Modulus Patterns',
    question: 'What is printed?\nint s = 9135;\nSystem.out.println(s / 3600 + " " + s % 3600 / 60 + " " + s % 60);',
    options: ['2 152 15', '2 32 15', '2 1935 15', '3 32 15'],
    correctIndex: 1,
    explanation: '9135 / 3600 is 2 whole hours, and 9135 % 3600 leaves 1935 seconds, which is 32 whole minutes. 9135 % 60 is 15 leftover seconds.',
  },
  {
    id: 'ceo-ent-4b', partNumber: 4, partTitle: 'Integer Division and Modulus Patterns',
    question: 'Days are numbered 0 (Sunday) through 6 (Saturday), and today is day 5. Which expression gives the day number 100 days from today?',
    options: ['5 + 100 % 7', '(5 + 100) / 7', '(5 + 100) % 7', '(5 + 100) % 6'],
    correctIndex: 2,
    explanation: 'Adding first and then taking % 7 wraps the total into the range 0 to 6, giving 105 % 7 = 0, a Sunday. Without the parentheses, % runs before + and the result 7 is out of range.',
  },
  {
    id: 'ceo-ent-5a', partNumber: 5, partTitle: 'Compound Assignment and Tracing Updates',
    question: 'What is the value of x after this code segment runs?\nint x = 20;\nx -= 2 * 3;\nx /= 1 + 1;\nx %= 5;\nx++;',
    options: ['2', '3', '1', '15'],
    correctIndex: 1,
    explanation: 'x becomes 20 - 6 = 14, then 14 / (1 + 1) = 7, then 7 % 5 = 2, and x++ makes it 3. Reading x /= 1 + 1 as x / 1 + 1 gives 15 and leads to the wrong answer 1.',
  },
  {
    id: 'ceo-ent-5b', partNumber: 5, partTitle: 'Compound Assignment and Tracing Updates',
    question: 'What is the value of s after this code segment runs?\nString s = "7";\ns += 1 + 2 + "a";\ns = 1 + 2 + s;',
    options: ['1273a', '3712a', '373a', '12712a'],
    correctIndex: 2,
    explanation: 'The whole right side of += is evaluated first: 1 + 2 is 3, so s becomes "7" + "3a", which is "73a". Then 1 + 2 is again int addition, and 3 joined to "73a" gives "373a".',
  },
  {
    id: 'ceo-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice: Tracing and Writing Expressions',
    question: 'What is printed?\nint a = 14;\nint b = 3;\nSystem.out.println(a / b * b + a % b + "" + a / (double) 4);',
    options: ['17.5', '143.0', '1223.5', '143.5'],
    correctIndex: 3,
    explanation: 'a / b * b is 12 and a % b is 2, and their int sum 14 becomes "14" when the empty String joins. Then 14 / 4.0 is 3.5, so the output is 143.5.',
  },
  {
    id: 'ceo-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice: Tracing and Writing Expressions',
    question: 'The int variable cm holds a length in centimeters, and 100 centimeters make 1 meter. Which statement stores the length in meters with its fractional part?',
    options: ['double m = cm / 100.0;', 'double m = (double) (cm / 100);', 'double m = cm / 100 * 1.0;', 'double m = cm * (1 / 100);'],
    correctIndex: 0,
    explanation: 'Dividing by the double 100.0 makes the division exact. The other three all perform an int division (cm / 100 or 1 / 100) before any double appears, so the fraction is already lost.',
  },
  {
    id: 'ceo-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is the result of running this code segment?\nint p = 50;\nint q = 7;\nq -= p % q * 7;\nSystem.out.println(p / q);',
    options: ['It prints 1', 'It prints 0', 'It does not compile', 'It throws an ArithmeticException'],
    correctIndex: 3,
    explanation: 'The whole right side runs first: 50 % 7 is 1 and 1 * 7 is 7, so q becomes 7 - 7 = 0. Dividing the int 50 by 0 then throws an ArithmeticException.',
  },
  {
    id: 'ceo-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nint a = 22;\nint b = 4;\nSystem.out.print(a % b + a / b + " ");\nSystem.out.println(a / b + "" + a % b);',
    options: ['25 52', '7 52', '7 7', '52 25'],
    correctIndex: 1,
    explanation: 'In the first statement 22 % 4 and 22 / 4 are added as ints, 2 + 5 = 7, before the space joins. In the second, the empty String turns 5 into text before 2 is joined, giving 52.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Output with print and println' },
    { partNumber: 3, partTitle: 'Precedence, Associativity, and Type Promotion' },
    { partNumber: 4, partTitle: 'Integer Division and Modulus Patterns' },
    { partNumber: 5, partTitle: 'Compound Assignment and Tracing Updates' },
    { partNumber: 6, partTitle: 'AP-Style Practice: Tracing and Writing Expressions' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
