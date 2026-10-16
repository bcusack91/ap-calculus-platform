/**
 * Entrance Quiz — Recursion (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'crm-ent-1a', partNumber: 1, partTitle: 'What Recursion Is',
    question: 'Which method reaches its base case for every positive starting value of n?',
    options: ['int f(int n) { if (n == 1) return 1; return f(n - 2); }', 'int f(int n) { if (n <= 1) return 1; return f(n) + 1; }', 'int f(int n) { if (n <= 1) return 1; return f(n + 1); }', 'int f(int n) { if (n <= 1) return 1; return f(n - 2) + 1; }'],
    correctIndex: 3,
    explanation: 'Stepping down by 2 eventually lands on 1 or 0, and n <= 1 catches both. With n == 1, an even start jumps from 2 to 0 and keeps going; f(n) makes no progress, and f(n + 1) moves away from the base case.',
  },
  {
    id: 'crm-ent-1b', partNumber: 1, partTitle: 'What Recursion Is',
    question: 'What does f(10) return?\npublic static int f(int n) {\nif (n <= 2) {\nreturn n;\n}\nreturn f(n - 3) + n;\n}',
    options: ['22', '21', '10', '25'],
    correctIndex: 0,
    explanation: 'The calls go f(10), f(7), f(4), f(1), and f(1) is a base case that returns 1. The returns add up as 1 + 4 + 7 + 10 = 22.',
  },
  {
    id: 'crm-ent-2a', partNumber: 2, partTitle: 'Tracing the Call Stack',
    question: 'What does show(7) print?\npublic static void show(int n) {\nif (n > 0) {\nshow(n - 2);\nSystem.out.print(n + " ");\n}\n}',
    options: ['1 3 5 7', '1 3 5', '7 5 3 1', '7 5 3 1 -1'],
    correctIndex: 0,
    explanation: 'The recursive call comes before the print, so each print waits until the deeper calls finish. The calls go 7, 5, 3, 1, -1, and the prints happen on the way back up: 1 3 5 7.',
  },
  {
    id: 'crm-ent-2b', partNumber: 2, partTitle: 'Tracing the Call Stack',
    question: 'What does echo(3) print?\npublic static void echo(int n) {\nif (n == 0) {\nreturn;\n}\nSystem.out.print(n);\necho(n - 1);\nSystem.out.print(n);\n}',
    options: ['123321', '321123', '321', '3210123'],
    correctIndex: 1,
    explanation: 'The first print runs on the way down (3, 2, 1) and the second runs on the way back up (1, 2, 3). echo(0) returns without printing, so no 0 appears.',
  },
  {
    id: 'crm-ent-3a', partNumber: 3, partTitle: 'Recursion vs. Iteration',
    question: 'r is defined as int r(int n) { if (n == 0) return 1; return 3 * r(n - 1); }. For n >= 0, which loop leaves t equal to r(n)?',
    options: ['int t = 0; for (int i = 1; i <= n; i++) { t = t * 3; }', 'int t = 1; for (int i = 0; i < n; i++) { t = t * 3; }', 'int t = 1; for (int i = 0; i <= n; i++) { t = t * 3; }', 'int t = 3; for (int i = 1; i <= n; i++) { t = t + 3; }'],
    correctIndex: 1,
    explanation: 'r(n) multiplies 1 by 3 exactly n times, so it is 3 to the power n. The loop that starts at 1 and runs n passes matches; starting at 0 always gives 0, and i <= n makes one pass too many.',
  },
  {
    id: 'crm-ent-3b', partNumber: 3, partTitle: 'Recursion vs. Iteration',
    question: 'q is defined as int q(int n) { if (n < 10) return n; return q(n / 10); }. For a positive n, which loop body, followed by return n;, computes the same result?',
    options: ['while (n > 0) { n = n / 10; }', 'while (n >= 10) { n = n % 10; }', 'while (n >= 10) { n = n / 10; }', 'while (n >= 10) { n = n - 10; }'],
    correctIndex: 2,
    explanation: 'q keeps dropping the last digit until one digit is left, so it returns the first digit, and the loop repeats while n has two or more digits. Looping while n > 0 runs one pass too far and returns 0.',
  },
  {
    id: 'crm-ent-4a', partNumber: 4, partTitle: 'Recursion on Strings',
    question: 'What does m("bird") return?\npublic static String m(String s) {\nif (s.length() <= 1) {\nreturn s;\n}\nreturn s.substring(s.length() - 1) + m(s.substring(0, s.length() - 1));\n}',
    options: ['drib', 'irdb', 'bird', 'dbir'],
    correctIndex: 0,
    explanation: 'Each call puts the last letter first and recurses on everything before it: "d" + m("bir"), then "r" + m("bi"), then "i" + "b". The result is the reverse, "drib".',
  },
  {
    id: 'crm-ent-4b', partNumber: 4, partTitle: 'Recursion on Strings',
    question: 'What does d("abc") return?\npublic static String d(String s) {\nif (s.length() == 0) {\nreturn "";\n}\nreturn s.substring(0, 1) + s.substring(0, 1) + d(s.substring(1));\n}',
    options: ['abcabc', 'ccbbaa', 'aabbcc', 'aabbc'],
    correctIndex: 2,
    explanation: 'Each call writes its first letter twice and then appends the result for the rest of the String. The empty String ends the recursion, giving "aa" + "bb" + "cc".',
  },
  {
    id: 'crm-ent-5a', partNumber: 5, partTitle: 'Fibonacci & Multiple Recursive Calls',
    question: 'What does t(3) return, and how many calls to t are made in all, counting the first?\npublic static int t(int n) {\nif (n <= 0) {\nreturn 1;\n}\nreturn t(n - 1) + t(n - 1);\n}',
    options: ['8 and 4', '4 and 7', '8 and 15', '8 and 8'],
    correctIndex: 2,
    explanation: 'Each call makes two calls, so the levels hold 1, 2, 4 and 8 calls, 15 in all. The 8 base-case calls each return 1, and the sums double back up to 8.',
  },
  {
    id: 'crm-ent-5b', partNumber: 5, partTitle: 'Fibonacci & Multiple Recursive Calls',
    question: 'What does k(4) return?\npublic static int k(int n) {\nif (n < 2) {\nreturn n;\n}\nreturn k(n - 1) + 2 * k(n - 2);\n}',
    options: ['6', '3', '11', '5'],
    correctIndex: 3,
    explanation: 'Build up from the base cases k(0) = 0 and k(1) = 1: k(2) = 1 + 0 = 1, k(3) = 1 + 2 = 3, and k(4) = 3 + 2 * 1 = 5.',
  },
  {
    id: 'crm-ent-6a', partNumber: 6, partTitle: 'Recursion on Arrays & Common Pitfalls',
    question: 'What does m(arr, 2) return when arr is {3, 9, 4, 7}?\npublic static int m(int[] a, int i) {\nif (i == a.length - 1) {\nreturn a[i];\n}\nint best = m(a, i + 1);\nif (a[i] > best) {\nreturn a[i];\n}\nreturn best;\n}',
    options: ['9', '7', '4', '3'],
    correctIndex: 1,
    explanation: 'The method returns the largest element from index i to the end. Starting at index 2 it compares only 4 and 7, so the 9 at index 1 is never seen.',
  },
  {
    id: 'crm-ent-6b', partNumber: 6, partTitle: 'Recursion on Arrays & Common Pitfalls',
    question: 'count("axx") gives 0 instead of 2. What is wrong?\npublic static int count(String s) {\nif (s.length() == 0) {\nreturn 0;\n}\ncount(s.substring(1));\nif (s.substring(0, 1).equals("x")) {\nreturn 1;\n}\nreturn 0;\n}',
    options: ['Its base case gives 0 for the last letter', 'It should compare letters with ==', 'It stops before reaching the end of s', 'It discards the result of the recursive call'],
    correctIndex: 3,
    explanation: 'The call on the rest of the String runs, but its value is never used, so the answer depends only on the first letter, "a". It should return 1 + count(...) or 0 + count(...).',
  },
  {
    id: 'crm-ent-7a', partNumber: 7, partTitle: 'Mixed Practice & Mastery Check',
    question: 'What does w(4071) return?\npublic static int w(int n) {\nif (n <= 0) {\nreturn 0;\n}\nreturn n % 10 + w(n / 10);\n}',
    options: ['12', '1704', '11', '4071'],
    correctIndex: 0,
    explanation: 'Each call adds the last digit and recurses on the number without it: 1 + 7 + 0 + 4, then w(0) returns 0. The method sums the digits, 12.',
  },
  {
    id: 'crm-ent-7b', partNumber: 7, partTitle: 'Mixed Practice & Mastery Check',
    question: 'A method has the base case if (s.length() == 1) return s; and otherwise recurses on s.substring(1). For which argument does it throw an exception?',
    options: ['Any String of length 1', 'The empty String ""', 'Any String of even length', 'Any String that contains a space'],
    correctIndex: 1,
    explanation: 'Every nonempty String shrinks to length 1 and stops. The empty String never matches the base case, and calling substring(1) on it throws a StringIndexOutOfBoundsException.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Recursion Is' },
    { partNumber: 2, partTitle: 'Tracing the Call Stack' },
    { partNumber: 3, partTitle: 'Recursion vs. Iteration' },
    { partNumber: 4, partTitle: 'Recursion on Strings' },
    { partNumber: 5, partTitle: 'Fibonacci & Multiple Recursive Calls' },
    { partNumber: 6, partTitle: 'Recursion on Arrays & Common Pitfalls' },
    { partNumber: 7, partTitle: 'Mixed Practice & Mastery Check' },
  ]
}
