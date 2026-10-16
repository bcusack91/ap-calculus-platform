/**
 * Entrance Quiz — Boolean Expressions & if Statements (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cbi-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'For int variables x and y, which expression is equivalent to !(x > 5 || y == 0)?',
    options: ['x <= 5 || y != 0', 'x < 5 && y != 0', 'x <= 5 && y != 0', '!(x > 5) || y != 0'],
    correctIndex: 2,
    explanation: 'By De Morgan\'s law, negating an || gives an && of the negated parts. The negation of x > 5 is x <= 5, and the negation of y == 0 is y != 0.',
  },
  {
    id: 'cbi-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nint t = 95;\nif (t > 60) {\nSystem.out.println("warm");\n} else if (t > 90) {\nSystem.out.println("hot");\n} else {\nSystem.out.println("cold");\n}',
    options: ['It prints warm', 'It prints hot', 'It prints warm, then hot', 'It prints cold'],
    correctIndex: 0,
    explanation: 'Only the first true branch of an if-else-if chain runs. 95 > 60 is true, so "warm" prints and the later test is never reached, even though it would also be true.',
  },
  {
    id: 'cbi-ent-2a', partNumber: 2, partTitle: 'Algorithms, Flow of Control, and Boolean Values',
    question: 'What are the values of avg and r after this code segment runs?\nint a = 11;\nint b = 4;\ndouble avg = (a + b) / 2;\nboolean r = avg == 7.5 || a / b * b == 8;',
    options: ['7.5 and true', '7.0 and false', '7.5 and false', '7.0 and true'],
    correctIndex: 3,
    explanation: '(a + b) / 2 is int division, 15 / 2 = 7, stored as 7.0, so avg == 7.5 is false. 11 / 4 is 2 and 2 * 4 is 8, so the right side is true and r is true.',
  },
  {
    id: 'cbi-ent-2b', partNumber: 2, partTitle: 'Algorithms, Flow of Control, and Boolean Values',
    question: 'The int variable x has been declared and assigned. Which statement compiles?',
    options: ['boolean ok = 1 < x < 10;', 'boolean ok = "a" < "b";', 'boolean ok = x > 1 && x < 10;', 'boolean ok = true > false;'],
    correctIndex: 2,
    explanation: 'Each comparison of x with a number gives a boolean, and && joins two booleans. A chained 1 < x < 10 compares a boolean with 10, and < is not defined for Strings or booleans.',
  },
  {
    id: 'cbi-ent-3a', partNumber: 3, partTitle: 'One-Way and Two-Way Selection, Traced',
    question: 'What is the result of this code segment?\nint hours = 3;\nint fee;\nif (hours > 2) {\nfee = 10;\n}\nSystem.out.println(fee);',
    options: ['It prints 10', 'It prints 0', 'It does not compile', 'It prints nothing'],
    correctIndex: 2,
    explanation: 'There is no else, so one path through the code leaves fee unassigned, and the compiler rejects reading a local variable that might not have a value. Adding an else that assigns fee would fix it.',
  },
  {
    id: 'cbi-ent-3b', partNumber: 3, partTitle: 'One-Way and Two-Way Selection, Traced',
    question: 'What is the value of bonus(150) + bonus(75) + bonus(50)?\npublic static int bonus(int sales) {\nif (sales > 100) {\nreturn 50;\n}\nif (sales > 50) {\nreturn 20;\n}\nreturn 0;\n}',
    options: ['90', '70', '140', '50'],
    correctIndex: 1,
    explanation: 'A return ends the method at once, so bonus(150) returns 50 without reaching the second test. bonus(75) returns 20, and bonus(50) fails both strict tests and returns 0, for a total of 70.',
  },
  {
    id: 'cbi-ent-4a', partNumber: 4, partTitle: 'Compound Conditions: Precedence and Short-Circuit Guards',
    question: 'With int x = 0; and int y = 7;, which condition can be evaluated without throwing an exception?',
    options: ['y / x > 1 && x != 0', 'x == 0 && y / x > 1', 'y / x > 1 || x == 0', 'x != 0 && y / x > 1'],
    correctIndex: 3,
    explanation: 'x != 0 is false, so && stops and the division never runs. In the others the division by zero is either on the left or is reached because the left side of && is true.',
  },
  {
    id: 'cbi-ent-4b', partNumber: 4, partTitle: 'Compound Conditions: Precedence and Short-Circuit Guards',
    question: 'With int p = 5, q = 1, r = 1;, what are the values of\nA: p > 3 || q > 3 && r > 3\nB: (p > 3 || q > 3) && r > 3',
    options: ['A is true and B is true', 'A is true and B is false', 'A is false and B is false', 'A is false and B is true'],
    correctIndex: 1,
    explanation: '&& is applied before ||, so A is p > 3 || (q > 3 && r > 3), which is true because p > 3 is true. In B the parentheses force the || first, and true && false is false.',
  },
  {
    id: 'cbi-ent-5a', partNumber: 5, partTitle: 'Pitfalls: Sequential ifs, Assignment vs. Equality, and Flags',
    question: 'What is printed?\nint x = 8;\nif (x > 5) { x = x - 6; }\nif (x < 5) { x = x * 3; }\nif (x > 5) { x = x + 1; }\nSystem.out.println(x);',
    options: ['2', '6', '7', '9'],
    correctIndex: 2,
    explanation: 'Separate ifs are each tested with the current value. x becomes 2, then 2 < 5 makes it 6, and then 6 > 5 makes it 7.',
  },
  {
    id: 'cbi-ent-5b', partNumber: 5, partTitle: 'Pitfalls: Sequential ifs, Assignment vs. Equality, and Flags',
    question: 'This code should leave ok true only when len is at least 8 and hasDigit is true.\nboolean ok = true;\nif (len < 8) { ok = false; }\nif (!hasDigit) { ok = false; } else { ok = true; }\nFor which values does it leave ok with the wrong value?',
    options: ['len is 10 and hasDigit is true', 'len is 5 and hasDigit is false', 'len is 10 and hasDigit is false', 'len is 5 and hasDigit is true'],
    correctIndex: 3,
    explanation: 'With len 5 the first check turns the flag off, but the else of the second check turns it back on because hasDigit is true. A flag should only ever be switched one way.',
  },
  {
    id: 'cbi-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is printed?\nint a = 6;\nint b = 20;\nif (b % a == 2) {\nb = b / a;\n} else if (a * 3 > b) {\na = b - a;\n} else {\na = 0;\n}\nSystem.out.println(a + " " + b);',
    options: ['14 20', '6 3', '6 20', '14 3'],
    correctIndex: 1,
    explanation: '20 % 6 is 2, so the first branch runs and b becomes 20 / 6 = 3 with int division. The rest of the chain is skipped, so a stays 6.',
  },
  {
    id: 'cbi-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'A method should return true when day is 6 or 7 and hour is from 10 to 14, inclusive. Which return statement is correct?',
    options: ['return (day == 6 || day == 7) && hour >= 10 && hour <= 14;', 'return day == 6 || day == 7 && hour >= 10 && hour <= 14;', 'return (day == 6 || day == 7) && hour > 10 && hour < 14;', 'return day == 6 && day == 7 && hour >= 10 && hour <= 14;'],
    correctIndex: 0,
    explanation: 'The parentheses make the day test finish before && joins it to the hour range, and an inclusive range needs && between its two ends. Without parentheses, && binds first, so any time on day 6 would pass; strict comparisons drop 10 and 14, and day cannot equal both 6 and 7.',
  },
  {
    id: 'cbi-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nint k = 7;\nif (k > 3 && k % 2 == 0 || k > 6) {\nk = k * 2;\n}\nif (k < 10);\nk = k - 1;\nSystem.out.println(k);',
    options: ['13', '14', '7', '6'],
    correctIndex: 0,
    explanation: 'The condition is (false) || true, so k becomes 14. The semicolon after if (k < 10) is an empty body, so k = k - 1 always runs and the output is 13.',
  },
  {
    id: 'cbi-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Given int n = 4; and boolean ready = false;, which if statement does not compile?',
    options: ['if (ready = true) { n++; }', 'if (n = 4) { n++; }', 'if (!ready) { n++; }', 'if (n % 2 == 0) { n++; }'],
    correctIndex: 1,
    explanation: 'n = 4 is an assignment that produces an int, and a condition must be a boolean. ready = true compiles because it produces a boolean, though it stores true and always runs the body.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Algorithms, Flow of Control, and Boolean Values' },
    { partNumber: 3, partTitle: 'One-Way and Two-Way Selection, Traced' },
    { partNumber: 4, partTitle: 'Compound Conditions: Precedence and Short-Circuit Guards' },
    { partNumber: 5, partTitle: 'Pitfalls: Sequential ifs, Assignment vs. Equality, and Flags' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
