/**
 * Entrance Quiz — Variables & Data Types (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cvt-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What value is stored in r?\ndouble r = 9 / 4 + 1.5;',
    options: ['3.75', '3.5', '4.0', '2.0'],
    correctIndex: 1,
    explanation: '9 / 4 is int division and gives 2, and 2 + 1.5 is 3.5. The value 3.75 would need 9 / 4 to keep its fractional part, which int division drops.',
  },
  {
    id: 'cvt-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A method begins with final double TAX_RATE = 0.05;. Which later statement in the method causes a compile-time error?',
    options: ['double fee = TAX_RATE * 200;', 'int pct = (int) (TAX_RATE * 100);', 'TAX_RATE = 0.06;', 'double r2 = TAX_RATE + 1;'],
    correctIndex: 2,
    explanation: 'A final variable cannot be reassigned after it gets its value, so TAX_RATE = 0.06; does not compile. Reading TAX_RATE in an expression, or casting an expression that uses it, is allowed.',
  },
  {
    id: 'cvt-ent-2a', partNumber: 2, partTitle: 'Compiling, Errors, and What a Variable Holds',
    question: 'What happens when this code segment is compiled and run?\nint total = 45;\nint count = 0;\nint avg = total / count;\nSystem.out.println(avg);',
    options: ['It throws an ArithmeticException', 'It fails to compile because count holds 0', 'It prints 0 and the program keeps going', 'It prints 45 since the division is skipped'],
    correctIndex: 0,
    explanation: 'The compiler checks only syntax and types, so the segment compiles. Dividing an int by zero fails only when the statement executes, which throws an ArithmeticException.',
  },
  {
    id: 'cvt-ent-2b', partNumber: 2, partTitle: 'Compiling, Errors, and What a Variable Holds',
    question: 'Which of these code segments compiles without error?',
    options: ['int seats = 30;\nseats = 31.5;', 'int seats = 30;\nint seats = 31;', 'double seats = 30;\nseats = seats + 1;', 'int seats;\nSeats = 30;'],
    correctIndex: 2,
    explanation: 'Storing the int 30 in a double widens it to 30.0, and adding 1 is fine. The others store a double in an int, declare the same variable twice, or use Seats, a different identifier from seats.',
  },
  {
    id: 'cvt-ent-3a', partNumber: 3, partTitle: 'Assignment Statements and Trace Tables',
    question: 'What are the values of a and b after this code segment runs?\nint a = 4;\nint b = 10;\nb = b - a;\na = a + b;\nb = a - b;',
    options: ['a is 10 and b is 6', 'a is 14 and b is 4', 'a is 4 and b is 10', 'a is 10 and b is 4'],
    correctIndex: 3,
    explanation: 'b becomes 10 - 4 = 6, then a becomes 4 + 6 = 10, then b becomes 10 - 6 = 4. Each line uses the most recent values, so the segment swaps the two numbers.',
  },
  {
    id: 'cvt-ent-3b', partNumber: 3, partTitle: 'Assignment Statements and Trace Tables',
    question: 'The int variables x and y hold 3 and 8. Which code segment leaves x holding 8 and y holding 3?',
    options: ['int t = x;\nx = y;\ny = t;', 'x = y;\ny = x;', 'int t = x;\ny = t;\nx = y;', 'int t = y;\nx = t;\ny = x;'],
    correctIndex: 0,
    explanation: 'Saving x in t first keeps the 3, so after x = y and y = t the values are swapped. Writing x = y; y = x; loses the 3 and leaves both variables at 8.',
  },
  {
    id: 'cvt-ent-4a', partNumber: 4, partTitle: 'Range, Overflow, Rounding, and Round-off',
    question: 'What is printed?\nint big = Integer.MAX_VALUE;\nint r = big + 2;\nSystem.out.println(r);',
    options: ['-2147483648', '2147483649', '-2147483647', 'An ArithmeticException'],
    correctIndex: 2,
    explanation: 'Adding 1 to Integer.MAX_VALUE wraps to Integer.MIN_VALUE, -2147483648, and adding 1 more gives -2147483647. Overflow is silent, so no exception is thrown.',
  },
  {
    id: 'cvt-ent-4b', partNumber: 4, partTitle: 'Range, Overflow, Rounding, and Round-off',
    question: 'For double price = 4.35;, the expression price * 100 evaluates to 434.99999999999994. Which statement stores 435 in cents?',
    options: ['int cents = (int) price * 100;', 'int cents = (int) (price + 0.5) * 100;', 'int cents = (int) (price * 100) + 0.5;', 'int cents = (int) (price * 100 + 0.5);'],
    correctIndex: 3,
    explanation: 'Adding 0.5 before the cast gives 435.49999..., which truncates to 435. Casting price first gives 400 or 500, and adding 0.5 after the cast produces a double that cannot be stored in an int.',
  },
  {
    id: 'cvt-ent-5a', partNumber: 5, partTitle: 'Type Compatibility, Cast Placement, and Misconceptions',
    question: 'With int a = 9; and int b = 4;, what value is stored in r?\ndouble r = (double) (a / b) + a / (double) b;',
    options: ['4.25', '4.5', '4.0', '6.25'],
    correctIndex: 0,
    explanation: 'Inside the parentheses a / b is int division, 2, so the first term is 2.0. The second term divides 9 by 4.0 and gives 2.25, for a total of 4.25.',
  },
  {
    id: 'cvt-ent-5b', partNumber: 5, partTitle: 'Type Compatibility, Cast Placement, and Misconceptions',
    question: 'Which statement compiles?',
    options: ['boolean flag = (boolean) 1;', 'int whole = Math.sqrt(25);', 'String text = Math.sqrt(25);', 'double d = Math.sqrt(25);'],
    correctIndex: 3,
    explanation: 'Math.sqrt returns a double, which can be stored in a double. No cast converts a number to a boolean, a double cannot go into an int without a cast, and a double cannot be stored in a String.',
  },
  {
    id: 'cvt-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice: Tracing and Writing Declarations',
    question: 'What is printed?\nint m = 17;\nint n = 5;\ndouble q = (m % n) * 1.5 + m / n;\nSystem.out.println(q);',
    options: ['6.4', '6.0', '4.5', '6'],
    correctIndex: 1,
    explanation: '17 % 5 is 2, so the first term is 3.0, and 17 / 5 is int division, 3. Their sum is the double 6.0; 6.4 would need 17 / 5 to give 3.4.',
  },
  {
    id: 'cvt-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice: Tracing and Writing Declarations',
    question: 'The positive int variables totalPoints and numQuizzes are declared and assigned. Which statement stores the average quiz score, rounded to the nearest whole number?',
    options: ['int avg = (int) (totalPoints / numQuizzes + 0.5);', 'int avg = (int) ((double) totalPoints / numQuizzes + 0.5);', 'int avg = (int) (double) totalPoints / numQuizzes;', 'double avg = (int) (totalPoints / numQuizzes);'],
    correctIndex: 1,
    explanation: 'The cast to double makes the division exact, and adding 0.5 before truncating rounds to the nearest whole number. Without the cast the int division has already dropped the fraction, so the result is truncated, not rounded.',
  },
  {
    id: 'cvt-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What are the values of full, left and avg after this code segment runs?\nfinal int GROUP_SIZE = 4;\nint people = 18;\nint full = people / GROUP_SIZE;\nint left = people - full * GROUP_SIZE;\ndouble avg = people / (double) GROUP_SIZE;',
    options: ['4, 2 and 4.0', '4.5, 0 and 4.5', '4, 2 and 4.5', '5, 2 and 4.5'],
    correctIndex: 2,
    explanation: '18 / 4 is 4 with int division, and 18 - 4 * 4 is 2. Casting GROUP_SIZE to double makes the last division 18 / 4.0, which is 4.5.',
  },
  {
    id: 'cvt-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What happens with this code segment?\nint a = 7;\ndouble b = a / 2;\nint c = b * 2;\nSystem.out.println(c);',
    options: ['It prints 6', 'It prints 6.0', 'It throws an exception at line 4', 'It does not compile'],
    correctIndex: 3,
    explanation: 'b is a double, so b * 2 is a double, and storing a double in the int c without a cast does not compile. Nothing runs, so nothing is printed.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Compiling, Errors, and What a Variable Holds' },
    { partNumber: 3, partTitle: 'Assignment Statements and Trace Tables' },
    { partNumber: 4, partTitle: 'Range, Overflow, Rounding, and Round-off' },
    { partNumber: 5, partTitle: 'Type Compatibility, Cast Placement, and Misconceptions' },
    { partNumber: 6, partTitle: 'AP-Style Practice: Tracing and Writing Declarations' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
