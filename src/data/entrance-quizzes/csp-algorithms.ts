/**
 * Entrance Quiz — Algorithms (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'calg-ent-1a', partNumber: 1, partTitle: 'Sequencing, Selection, Iteration, and Algorithm Analysis',
    question: 'A sorted list has 500 elements. What is the greatest number of elements a binary search might need to check to find a value or decide it is missing?',
    options: ['250', '500', '9', '25'],
    correctIndex: 2,
    explanation: 'Each check halves what remains: 500, 250, 125, 63, 32, 16, 8, 4, 2, 1. That is at most 9 checks, far fewer than the 500 a linear search could need.',
  },
  {
    id: 'calg-ent-1b', partNumber: 1, partTitle: 'Sequencing, Selection, Iteration, and Algorithm Analysis',
    question: 'Which algorithm runs in an unreasonable amount of time as the number of items n grows?',
    options: ['Checking every possible subset of n items for the best one', 'Comparing every pair among n items', 'Searching n unsorted items one at a time', 'Sorting n items by repeatedly finding the smallest one'],
    correctIndex: 0,
    explanation: 'There are 2 multiplied by itself n times possible subsets, an exponential count, so the work becomes impossible for large n. Pair comparisons, linear search and that sort all grow polynomially, which is reasonable.',
  },
  {
    id: 'calg-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'What is displayed when this code runs?\n\nn ← 3\ntotal ← 1\nREPEAT n TIMES {\ntotal ← total * 2\nn ← n + 1\n}\nDISPLAY(total)',
    options: ['16', '8', '6', '4'],
    correctIndex: 1,
    explanation: 'The number of passes for REPEAT n TIMES is fixed at 3 when the loop starts, so changing n inside does not add passes. Doubling 1 three times gives 8.',
  },
  {
    id: 'calg-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'What is the value of grade after this code runs with score ← 92, late ← true and extra ← false?\n\nIF ((score ≥ 90) AND (late = false)) {\ngrade ← "A"\n}\nELSE {\nIF ((score ≥ 80) OR extra) {\ngrade ← "B"\n}\nELSE {\ngrade ← "C"\n}\n}',
    options: ['"A"', '"C"', '"B"', 'no grade is set'],
    correctIndex: 2,
    explanation: 'The AND fails because late is true, so control goes to the ELSE. There, score ≥ 80 is true, and OR needs only one true part, so grade becomes "B".',
  },
  {
    id: 'calg-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'What is displayed when this code runs?\n\nnums ← [5, 1, 7, 1, 3]\nidx ← 1\ni ← 2\nREPEAT UNTIL (i > LENGTH(nums)) {\nIF (nums[i] ≤ nums[idx]) {\nidx ← i\n}\ni ← i + 1\n}\nDISPLAY(idx)',
    options: ['2', '1', '5', '4'],
    correctIndex: 3,
    explanation: 'The code tracks the position of the smallest value. Because the test is ≤, the second 1 at index 4 replaces the first one at index 2, so 4 is displayed.',
  },
  {
    id: 'calg-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'This code is meant to find the product of the values in nums, which is [2, 3, 4]. What does it display, and why?\n\nproduct ← 0\nFOR EACH n IN nums {\nproduct ← product * n\n}\nDISPLAY(product)',
    options: ['0, because the accumulator starts at 0', '24, because each element is multiplied in', '9, because the elements are added instead', '4, because only the last element is kept'],
    correctIndex: 0,
    explanation: 'Multiplying anything by 0 gives 0, so product never changes. A product accumulator must start at 1, its identity value.',
  },
  {
    id: 'calg-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A sorted list holds 1,000,000 records. In the worst case, about how many comparisons do linear search and binary search need?',
    options: ['About 1,000,000 for linear and about 20 for binary', 'About 20 for linear and about 1,000,000 for binary', 'About 1,000,000 for linear and about 500,000 for binary', 'About 1,000 for each search on a sorted list'],
    correctIndex: 0,
    explanation: 'Linear search may check every record, while binary search halves the remaining records with each comparison: 2 doubled 20 times is about 1,000,000, so about 20 checks.',
  },
  {
    id: 'calg-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'Many parts of a program call find(list, target). A developer replaces the linear search inside find with a binary search, and the list is always kept sorted. What must change in the code that calls find?',
    options: ['Every caller must be rewritten, since the algorithm changed', 'Callers must now sort the list before every call', 'Nothing, since only the body of the procedure changed', 'Callers must now expect different results than before'],
    correctIndex: 2,
    explanation: 'Procedural abstraction lets callers rely on what find does, not how it does it. A faster implementation that returns the same results needs no changes elsewhere.',
  },
  {
    id: 'calg-ent-5a', partNumber: 5, partTitle: 'Change Over Time',
    question: 'An algorithm\'s number of steps grows like n × n. It takes 2 seconds on 1,000 items. About how long should it take on 10,000 items?',
    options: ['200 seconds', '20 seconds', '22 seconds', '2,000 seconds'],
    correctIndex: 0,
    explanation: 'Ten times the input means 10 × 10 = 100 times the steps for an n × n algorithm, so 2 seconds becomes about 200 seconds.',
  },
  {
    id: 'calg-ent-5b', partNumber: 5, partTitle: 'Change Over Time',
    question: 'A delivery company must plan a route through 60 stops every morning. Checking every possible order of stops would take far too long. What is the most sensible approach?',
    options: ['Check every possible order, since only that is correct', 'Use a heuristic that finds a good order quickly', 'Stop trying, since the problem is undecidable', 'Run a binary search on the list of stops'],
    correctIndex: 1,
    explanation: 'Trying every order is unreasonable, but the problem is still decidable. A heuristic gives up the guarantee of the best order in exchange for a good one found in reasonable time.',
  },
  {
    id: 'calg-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'What is displayed when this code runs?\n\nPROCEDURE avgPos(list) {\ntotal ← 0\ncount ← 0\nFOR EACH x IN list {\nIF (x > 0) {\ntotal ← total + x\ncount ← count + 1\n}\n}\nIF (count = 0) {\nRETURN(0)\n}\nRETURN(total / count)\n}\nDISPLAY(avgPos([6, -3, 0, 12]))',
    options: ['3.75', '6', '4.5', '9'],
    correctIndex: 3,
    explanation: 'Only 6 and 12 are greater than 0, so total is 18 and count is 2. The average of the positive values is 18 ÷ 2 = 9.',
  },
  {
    id: 'calg-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'This procedure is meant to report whether a list has two equal neighbors. What happens when it is called with [3, 5, 7]?\n\nPROCEDURE hasRun(list) {\ni ← 1\nREPEAT UNTIL (i > LENGTH(list)) {\nIF (list[i] = list[i + 1]) {\nRETURN(true)\n}\ni ← i + 1\n}\nRETURN(false)\n}',
    options: ['It returns false after checking every pair', 'It returns true, because the values increase', 'An error occurs reading past the end', 'It returns false without checking any pair'],
    correctIndex: 2,
    explanation: 'When i reaches 3, the code reads list[4], which does not exist, so the program stops with an error. The loop should start at 2 and compare list[i] with list[i - 1].',
  },
  {
    id: 'calg-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'The input to two algorithms doubles in size. One makes about n × n comparisons; the other is a binary search. About how much work does each now need?',
    options: ['about 2 times as many; about 2 times as many', 'about 4 times as many; about 1 more', 'about 4 times as many; about 4 times as many', 'about the same number; about 4 times as many'],
    correctIndex: 1,
    explanation: 'Doubling n multiplies n × n by 4. Binary search halves the list each step, so a list twice as long needs only one extra check.',
  },
  {
    id: 'calg-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'Which problem is undecidable?',
    options: ['Deciding whether a list of a million numbers is in sorted order', 'Finding the shortest route that visits each of 60 cities', 'Deciding whether a whole number entered by a user is even', 'Deciding whether any given program halts on any given input'],
    correctIndex: 3,
    explanation: 'No algorithm can correctly answer the halting question for every program and input. The shortest-route problem is slow to solve exactly, but an algorithm for it does exist.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Sequencing, Selection, Iteration, and Algorithm Analysis' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
