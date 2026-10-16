/**
 * Entrance Quiz — Procedures & Lists (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cpl-ent-1a', partNumber: 1, partTitle: 'List Operations, Traversals, and Procedure Design',
    question: 'What is displayed when this code runs?\n\nnums ← [10, 20, 30, 40]\nREMOVE(nums, 2)\nINSERT(nums, 1, 5)\nAPPEND(nums, 50)\nDISPLAY(nums[3])',
    options: ['10', '20', '30', '40'],
    correctIndex: 2,
    explanation: 'Removing index 2 gives [10, 30, 40], inserting 5 at index 1 gives [5, 10, 30, 40], and appending gives [5, 10, 30, 40, 50]. The element at index 3 is 30.',
  },
  {
    id: 'cpl-ent-1b', partNumber: 1, partTitle: 'List Operations, Traversals, and Procedure Design',
    question: 'What is displayed when this code runs?\n\nlist ← [1, 2, 3]\nFOR EACH item IN list {\nitem ← item * 10\n}\nDISPLAY(list)',
    options: ['[1, 2, 3]', '[10, 20, 30]', '[10, 2, 3]', '[1, 2, 30]'],
    correctIndex: 0,
    explanation: 'FOR EACH gives item a copy of each value, so changing item never changes the list. To change the elements, the loop would need to assign to list[i].',
  },
  {
    id: 'cpl-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'What is displayed when this code runs?\n\nPROCEDURE scale(list, factor) {\nresult ← []\nFOR EACH x IN list {\nAPPEND(result, x * factor)\n}\nRETURN(result)\n}\nnums ← [2, 5]\nDISPLAY(scale(nums, 3))\nDISPLAY(nums)',
    options: ['[6, 15] [6, 15]', '[2, 5] [6, 15]', '[5, 8] [2, 5]', '[6, 15] [2, 5]'],
    correctIndex: 3,
    explanation: 'The procedure builds and returns a new list of tripled values, [6, 15]. It never changes the list passed in, so nums is still [2, 5].',
  },
  {
    id: 'cpl-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'A program defines PROCEDURE average(scores) and later runs the call average(myScores). Which statement is correct?',
    options: ['scores is the parameter and myScores is the argument', 'myScores is the parameter and scores is the argument', 'both scores and myScores are arguments', 'both scores and myScores are parameters'],
    correctIndex: 0,
    explanation: 'A parameter is the variable named in the procedure definition, here scores. The argument is the value supplied in the call, here myScores.',
  },
  {
    id: 'cpl-ent-3a', partNumber: 3, partTitle: 'List Traversal Algorithms',
    question: 'Which procedure performs a partial traversal of its list?',
    options: ['One that adds every element to a running total', 'One that returns the index of the first match it finds', 'One that appends every even element to a new list', 'One that tracks the smallest element seen so far'],
    correctIndex: 1,
    explanation: 'Returning at the first match stops the loop early, so some elements may never be accessed. A total, a filter and a minimum all need to look at every element.',
  },
  {
    id: 'cpl-ent-3b', partNumber: 3, partTitle: 'List Traversal Algorithms',
    question: 'What is displayed when this code runs?\n\nPROCEDURE f(nums, k) {\ncount ← 0\nFOR EACH n IN nums {\nIF (n MOD k = 0) {\ncount ← count + 1\n}\n}\nRETURN(count)\n}\nDISPLAY(f([12, 7, 9, 30, 4], 3))',
    options: ['2', '4', '51', '3'],
    correctIndex: 3,
    explanation: 'The procedure counts the elements divisible by 3: 12, 9 and 30. It returns the count, 3, not their sum of 51.',
  },
  {
    id: 'cpl-ent-4a', partNumber: 4, partTitle: 'Data Abstraction and Procedural Abstraction',
    question: 'What is displayed when this code runs?\n\naList ← [1, 2, 3]\nbList ← aList\nAPPEND(bList, 4)\nDISPLAY(LENGTH(aList))',
    options: ['3', '4', '0', '2'],
    correctIndex: 0,
    explanation: 'On the exam reference sheet, bList ← aList assigns a copy of aList. Appending to the copy leaves aList with its original 3 elements.',
  },
  {
    id: 'cpl-ent-4b', partNumber: 4, partTitle: 'Data Abstraction and Procedural Abstraction',
    question: 'PROCEDURE countAbove(nums, cutoff) is meant to count the elements strictly greater than cutoff. Which single test is most likely to catch a bug that uses ≥ instead of >?',
    options: ['countAbove([10, 20, 30], 50), expecting 0', 'countAbove([50, 50, 51], 50), expecting 1', 'countAbove([60, 70, 80], 50), expecting 3', 'countAbove([90, 95, 99], 50), expecting 3'],
    correctIndex: 1,
    explanation: 'Only a test with values equal to the cutoff tells > apart from ≥: the buggy version would return 3 instead of 1. Values far from the cutoff give the same answer either way.',
  },
  {
    id: 'cpl-ent-5a', partNumber: 5, partTitle: 'Inserting, Removing, and Updating Elements',
    question: 'This code is meant to remove every negative value from nums. What is nums afterward if it starts as [-1, -2, 4, -3, -5]?\n\ni ← 1\nREPEAT UNTIL (i > LENGTH(nums)) {\nIF (nums[i] < 0) {\nREMOVE(nums, i)\n}\ni ← i + 1\n}',
    options: ['[4]', '[-2, 4]', '[-2, 4, -5]', '[-2, 4, -3]'],
    correctIndex: 2,
    explanation: 'Each REMOVE shifts the next element into position i, but i still increases, so that element is skipped. Removing -1 skips -2, and removing -3 skips -5, leaving [-2, 4, -5].',
  },
  {
    id: 'cpl-ent-5b', partNumber: 5, partTitle: 'Inserting, Removing, and Updating Elements',
    question: 'What is displayed when this code runs?\n\nlist ← [3, 6, 9, 12]\nREMOVE(list, 2)\nlist[2] ← 0\nINSERT(list, 2, 5)\nDISPLAY(list)',
    options: ['[3, 5, 9, 12]', '[3, 0, 5, 12]', '[5, 3, 0, 12]', '[3, 5, 0, 12]'],
    correctIndex: 3,
    explanation: 'REMOVE gives [3, 9, 12], assigning index 2 replaces 9 to give [3, 0, 12], and INSERT puts 5 at index 2 and shifts the rest right: [3, 5, 0, 12].',
  },
  {
    id: 'cpl-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'What is the value of total after this code runs with nums ← [1, 2, 3, 4, 5]?\n\ntotal ← 0\nFOR EACH n IN nums {\nIF (n MOD 2 = 1) {\ntotal ← total + n * n\n}\n}',
    options: ['35', '20', '55', '9'],
    correctIndex: 0,
    explanation: 'The IF keeps the odd values 1, 3 and 5, and the accumulator adds their squares: 1 + 9 + 25 = 35.',
  },
  {
    id: 'cpl-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'For which call does this procedure cause an error?\n\nPROCEDURE firstK(list, k) {\nresult ← []\ni ← 1\nREPEAT k TIMES {\nAPPEND(result, list[i])\ni ← i + 1\n}\nRETURN(result)\n}',
    options: ['firstK([4, 7], 2)', 'firstK([4, 7], 3)', 'firstK([4, 7], 0)', 'firstK([4, 7, 1], 1)'],
    correctIndex: 1,
    explanation: 'With k = 3 the loop reaches list[3], but the list has only 2 elements, so the index is out of range. With k = 0 the loop simply runs zero times and returns an empty list.',
  },
  {
    id: 'cpl-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'A student writes PROCEDURE average and PROCEDURE highest, then writes PROCEDURE report, which calls both to print a class summary. This design is an example of',
    options: ['storing many related values under a single list name', 'reading every element of a list from first to last', 'solving subproblems with separate procedures', 'testing a procedure with values at the boundaries'],
    correctIndex: 2,
    explanation: 'Building report from smaller procedures that each solve one subproblem is modularity, a form of procedural abstraction. The other choices describe data abstraction, traversal and testing.',
  },
  {
    id: 'cpl-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'What is displayed when this code runs?\n\nlist ← [4, 8, 15]\nAPPEND(list, LENGTH(list))\nDISPLAY(list[LENGTH(list)] + list[1])',
    options: ['19', '12', '7', '6'],
    correctIndex: 2,
    explanation: 'LENGTH(list) is 3 when it is appended, giving [4, 8, 15, 3]. The last element is now 3, and 3 + 4 = 7.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'List Operations, Traversals, and Procedure Design' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'List Traversal Algorithms' },
    { partNumber: 4, partTitle: 'Data Abstraction and Procedural Abstraction' },
    { partNumber: 5, partTitle: 'Inserting, Removing, and Updating Elements' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
