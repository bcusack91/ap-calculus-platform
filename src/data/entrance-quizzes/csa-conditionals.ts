/**
 * Entrance Quiz — Conditionals (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'ccd-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nint x = -2;\nint y = 5;\nif (x > 0)\nif (y > 0)\nSystem.out.println("A");\nelse\nSystem.out.println("B");\nSystem.out.println("C");',
    options: ['B then C', 'C only', 'A then C', 'Nothing'],
    correctIndex: 1,
    explanation: 'Without braces, the else pairs with the nearest if, the inner one, so the whole inner if-else is the body of if (x > 0). x > 0 is false, so that body is skipped and only C prints.',
  },
  {
    id: 'ccd-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which single statement is equivalent to this code?\nif (count % 2 == 0) {\nreturn false;\n} else {\nreturn true;\n}',
    options: ['return count % 2 == 0;', 'return !count % 2 == 0;', 'return (count % 2 == 0) == true;', 'return count % 2 != 0;'],
    correctIndex: 3,
    explanation: 'The method returns true exactly when count % 2 == 0 is false, which is the condition count % 2 != 0. Returning count % 2 == 0, with or without == true, gives the opposite result, and !count does not compile for an int.',
  },
  {
    id: 'ccd-ent-2a', partNumber: 2, partTitle: 'Multiway Selection: Ordering else-if Chains',
    question: 'A chain should set size to "S" for oz up to 8, "M" for 9 through 16, and "L" for more than 16.\nif (oz > 8) { size = "M"; }\nelse if (oz > 16) { size = "L"; }\nelse { size = "S"; }\nWhich inputs get the wrong size?',
    options: ['The value 16 only', 'Values above 16', 'Values from 9 to 16', 'The value 8 only'],
    correctIndex: 1,
    explanation: 'Any oz greater than 16 is also greater than 8, so the first test catches it and assigns "M". The "L" branch can never be reached; testing the larger threshold first would fix it.',
  },
  {
    id: 'ccd-ent-2b', partNumber: 2, partTitle: 'Multiway Selection: Ordering else-if Chains',
    question: 'Using this chain, what is fine when over is 10, and when over is 20?\nif (over > 20) { fine = 200; }\nelse if (over > 10) { fine = 100; }\nelse if (over >= 1) { fine = 50; }\nelse { fine = 0; }',
    options: ['50 and 100', '100 and 200', '50 and 200', '100 and 100'],
    correctIndex: 0,
    explanation: 'For 10, both strict tests over > 20 and over > 10 fail, so over >= 1 assigns 50. For 20, over > 20 fails but over > 10 passes, which assigns 100.',
  },
  {
    id: 'ccd-ent-3a', partNumber: 3, partTitle: 'Nested Decisions and Their Compound Equivalents',
    question: 'What is pts when vip is false and n is 6, and when vip is true and n is 3?\nif (vip) {\nif (n >= 3) { pts = 30; } else { pts = 20; }\n} else {\nif (n >= 5) { pts = 10; } else { pts = 0; }\n}',
    options: ['0 and 20', '0 and 30', '10 and 30', '10 and 0'],
    correctIndex: 2,
    explanation: 'With vip false, the outer else runs, and 6 >= 5 is true, so pts is 10. With vip true, the inner test 3 >= 3 is true, so pts is 30.',
  },
  {
    id: 'ccd-ent-3b', partNumber: 3, partTitle: 'Nested Decisions and Their Compound Equivalents',
    question: 'Which segment behaves exactly like this one for every value of the booleans a and b?\nif (a) {\nif (b) { show("X"); }\n} else {\nshow("Y");\n}',
    options: ['if (a && b) { show("X"); } else { show("Y"); }', 'if (a && b) { show("X"); } else if (!a) { show("Y"); }', 'if (a || b) { show("X"); } else if (!a) { show("Y"); }', 'if (a && b) { show("X"); } else if (!b) { show("Y"); }'],
    correctIndex: 1,
    explanation: 'X needs both a and b, and Y needs only a to be false; when a is true and b is false, nothing is shown. A plain else would also show Y in that case, and testing !b would show Y when a is true.',
  },
  {
    id: 'ccd-ent-4a', partNumber: 4, partTitle: 'Truth Tables, De Morgan\'s Laws, and Equivalence',
    question: 'A student claims that !(a || b) && c is equivalent to !a || !b && c. Which values of the booleans form a counterexample?',
    options: ['a true, b true, c true', 'a false, b false, c true', 'a true, b false, c true', 'a true, b false, c false'],
    correctIndex: 2,
    explanation: 'With a true, b false and c true, the first expression is !(true) && true, which is false. The second is false || (true && true), which is true, so one row is enough to show they differ.',
  },
  {
    id: 'ccd-ent-4b', partNumber: 4, partTitle: 'Truth Tables, De Morgan\'s Laws, and Equivalence',
    question: 'For int variables x and y, which expression always has the same value as x > 3 || (x > 3 && y < 2)?',
    options: ['x > 3 && y < 2', 'x > 3 || y < 2', 'x > 3', 'x <= 3 || y < 2'],
    correctIndex: 2,
    explanation: 'Whenever the part in parentheses is true, x > 3 is already true, so it never changes the result. The whole expression is true exactly when x > 3 is true.',
  },
  {
    id: 'ccd-ent-5a', partNumber: 5, partTitle: 'Comparing Objects: Aliases, null, and equals',
    question: 'Which pair of expressions are both true after this code segment runs?\nString a = "sun";\nString b = new String("sun");\nString c = "su";\nc += "n";\nString d = b;',
    options: ['a.equals(c) and b == d', 'a == b and b == d', 'a == c and a.equals(b)', 'b.equals(d) and a == b'],
    correctIndex: 0,
    explanation: 'a and c hold the same characters, so a.equals(c) is true, and d is an alias of b, so b == d is true. a == b and a == c are false because new and += each build a separate String object.',
  },
  {
    id: 'ccd-ent-5b', partNumber: 5, partTitle: 'Comparing Objects: Aliases, null, and equals',
    question: 'The String variable word might be null. Which condition is true exactly when word holds the text yes, without ever throwing an exception?',
    options: ['word.equals("yes")', 'word == "yes"', 'word.equals("yes") && word != null', '"yes".equals(word)'],
    correctIndex: 3,
    explanation: 'The call runs on the literal, which always exists, and equals returns false for a null argument. Calling equals on word throws when word is null, even when the null check comes second, and == compares references.',
  },
  {
    id: 'ccd-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is printed?\nint x = 4;\nint y = 9;\nif (x > 5) {\nif (y > 5) { x = 0; } else { y = x + y; }\n} else if (y > 5) {\ny = y - x;\n}\nx = x + y;\nSystem.out.println(x + " " + y);',
    options: ['13 9', '9 5', '4 5', '13 5'],
    correctIndex: 1,
    explanation: 'x > 5 is false, so the nested if is skipped and the else if tests y > 5, which is true, making y 5. The last statement runs on every path, so x becomes 4 + 5 = 9.',
  },
  {
    id: 'ccd-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'kind should return "three" when all three values are equal, "two" when exactly two are equal, and "none" otherwise. It returns the wrong label for kind(4, 4, 4). Which change fixes the method?\npublic static String kind(int a, int b, int c) {\nif (a == b || b == c || a == c) { return "two"; }\nif (a == b && b == c) { return "three"; }\nreturn "none";\n}',
    options: ['Change || to && in the first if statement', 'Return "three" in place of "none" at the end', 'Use equals instead of == in both tests', 'Test the all-equal case before the two-equal case'],
    correctIndex: 3,
    explanation: 'When all three are equal, a == b is true, so the first test returns "two" before the all-equal test is reached. Once the all-equal case returns first, the || test can only see calls with exactly two equal values.',
  },
  {
    id: 'ccd-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nint n = 25;\nString s = "";\nif (n % 4 == 0) { s += "A"; }\nelse if (n % 5 == 0) { s += "B"; }\nif (n % 5 == 0 && n % 4 != 0) { s += "C"; }\nif (!(n < 10 || n > 30)) { s += "D"; }\nSystem.out.println(s);',
    options: ['BCD', 'BD', 'CD', 'B'],
    correctIndex: 0,
    explanation: '25 % 4 is 1, so the else if runs and adds "B". The separate C test is also true because 25 % 5 == 0 and 25 % 4 != 0, and !(false || false) is true, so "D" is added.',
  },
  {
    id: 'ccd-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nString a = "go";\nString b = "g";\nb += "o";\nif (a == b) {\nSystem.out.print("S");\n} else if (a.equals(b)) {\nSystem.out.print("E");\n} else {\nSystem.out.print("D");\n}',
    options: ['E', 'SE', 'S', 'D'],
    correctIndex: 0,
    explanation: 'b += "o" builds a new String object at run time, so a == b compares two different references and is false. The two Strings hold the same characters, so the equals branch runs.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Multiway Selection: Ordering else-if Chains' },
    { partNumber: 3, partTitle: 'Nested Decisions and Their Compound Equivalents' },
    { partNumber: 4, partTitle: 'Truth Tables, De Morgan\'s Laws, and Equivalence' },
    { partNumber: 5, partTitle: 'Comparing Objects: Aliases, null, and equals' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
