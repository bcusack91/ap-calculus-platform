/**
 * Entrance Quiz — Algorithms (AP CS Principles)
 * 14 questions · 7 parts (2 per part)
 * Big Idea 3: algorithm definition, efficiency, search, sort, undecidability — with code-tracing in AP CSP pseudocode.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cspa-ent-1a', question: 'An algorithm is BEST defined as:', options: ['A specific programming language', 'A finite sequence of well-defined steps that solves a problem or performs a task', 'A computer chip', 'Any random list of instructions'], correctIndex: 1, explanation: 'An algorithm is a finite, well-defined procedure for solving a problem. It exists independently of any programming language.', partNumber: 1, partTitle: 'What Is an Algorithm' },
  { id: 'cspa-ent-1b', question: 'Two algorithms produce identical outputs for every possible input. Which statement is MOST accurate?', options: ['They must use the same code in the same language', 'They are equivalent in terms of behavior, even if their internal steps differ', 'One must be wrong', 'Both must run in identical time'], correctIndex: 1, explanation: 'Algorithms can be implemented many ways yet still be behaviorally equivalent (same output for every input). Implementation details and speed may differ.', partNumber: 1, partTitle: 'What Is an Algorithm' },
  { id: 'cspa-ent-2a', question: 'Consider the AP CSP pseudocode below.\n  count ← 0\n  FOR EACH n IN [3, 5, 8, 4, 9]\n  {\n    IF (n MOD 2 = 1)\n    {\n      count ← count + 1\n    }\n  }\n  DISPLAY(count)\nWhat is displayed?', options: ['2', '3', '4', '5'], correctIndex: 1, explanation: 'The loop counts odd numbers (n MOD 2 = 1). The list [3, 5, 8, 4, 9] has three odd values: 3, 5, 9. So count = 3.', partNumber: 2, partTitle: 'Code Tracing' },
  { id: 'cspa-ent-2b', question: 'Trace the AP CSP pseudocode below.\n  x ← 10\n  REPEAT 3 TIMES\n  {\n    x ← x + x\n  }\n  DISPLAY(x)\nWhat value is displayed?', options: ['30', '40', '60', '80'], correctIndex: 3, explanation: 'Iteration 1: x = 10 + 10 = 20. Iteration 2: x = 20 + 20 = 40. Iteration 3: x = 40 + 40 = 80.', partNumber: 2, partTitle: 'Code Tracing' },
  { id: 'cspa-ent-3a', question: 'Which factor is NOT typically used to compare the efficiency of two algorithms?', options: ['Number of operations they perform', 'Memory usage', 'How they grow as the input size grows', 'The font in which the code is written'], correctIndex: 3, explanation: 'Efficiency is about resources (time, memory) and how they scale with input size — not about presentation choices like font.', partNumber: 3, partTitle: 'Algorithm Efficiency' },
  { id: 'cspa-ent-3b', question: 'Algorithm A takes a number of steps proportional to the size of the input. Algorithm B takes a number of steps proportional to the SQUARE of the input size. For very large inputs, which is generally faster?', options: ['Algorithm A', 'Algorithm B', 'They are always equal', 'Cannot be determined'], correctIndex: 0, explanation: 'Linear (proportional to n) grows much more slowly than quadratic (proportional to n²) for large inputs. Algorithm A is more efficient at scale.', partNumber: 3, partTitle: 'Algorithm Efficiency' },
  { id: 'cspa-ent-4a', question: 'Linear search is BEST described as:', options: ['Repeatedly cutting the search range in half', 'Checking each element of a list one at a time until the target is found or the list ends', 'A search that requires the list to be sorted', 'A randomized search'], correctIndex: 1, explanation: 'Linear (sequential) search inspects each element in order. It works on any list — sorted or not.', partNumber: 4, partTitle: 'Search Algorithms' },
  { id: 'cspa-ent-4b', question: 'Binary search requires that:', options: ['The list be in random order', 'The list be sorted', 'The list contain only numbers', 'The list be empty'], correctIndex: 1, explanation: 'Binary search works by repeatedly halving the range, which only works if the data is sorted so the algorithm knows which half to keep.', partNumber: 4, partTitle: 'Search Algorithms' },
  { id: 'cspa-ent-5a', question: 'For a sorted list of 1,000,000 items, a binary search examines AT MOST about how many items?', options: ['1,000,000', '1,000', '20', '100,000'], correctIndex: 2, explanation: 'Binary search performs about log₂(n) comparisons. log₂(1,000,000) ≈ 20. This is dramatically faster than linear search.', partNumber: 5, partTitle: 'Comparing Searches' },
  { id: 'cspa-ent-5b', question: 'Linear search and binary search are both run on the same sorted list of 10,000 items, looking for the LAST element. Which finishes faster?', options: ['Linear search, by a wide margin', 'Binary search, because it halves the range each step regardless of where the target is', 'They run at the same speed', 'It depends on the operating system'], correctIndex: 1, explanation: 'Binary search’s log₂(10,000) ≈ 14 comparisons beats linear search’s 10,000 worst-case comparisons.', partNumber: 5, partTitle: 'Comparing Searches' },
  { id: 'cspa-ent-6a', question: 'A sorting algorithm rearranges items into:', options: ['Random order', 'A defined order (e.g., ascending or descending) according to a comparison rule', 'Encrypted form', 'Smaller files'], correctIndex: 1, explanation: 'Sorting puts items into a defined order using a comparison (e.g., numeric ascending, alphabetical).', partNumber: 6, partTitle: 'Sorting & Decidability' },
  { id: 'cspa-ent-6b', question: 'Some computational problems are UNDECIDABLE, meaning:', options: ['No algorithm can solve every instance of the problem', 'They are easy if you have a fast computer', 'They have multiple correct answers', 'They are not really problems'], correctIndex: 0, explanation: 'An undecidable problem (e.g., the Halting Problem) provably cannot be solved by ANY algorithm for every possible input — a fundamental limit of computation.', partNumber: 6, partTitle: 'Sorting & Decidability' },
  { id: 'cspa-ent-7a', question: 'A heuristic is BEST described as:', options: ['A guaranteed-optimal algorithm', 'An approach that uses reasonable rules to find a good-enough solution when an optimal one is too costly to compute', 'A type of compression', 'A network protocol'], correctIndex: 1, explanation: 'Heuristics trade optimality for practicality. They are used when finding the best solution would take too long (e.g., GPS route suggestions).', partNumber: 7, partTitle: 'AP Review' },
  { id: 'cspa-ent-7b', question: 'Trace the AP CSP pseudocode below.\n  total ← 0\n  FOR EACH n IN [4, 7, 2, 9, 5]\n  {\n    IF (n > 4)\n    {\n      total ← total + n\n    }\n  }\n  DISPLAY(total)\nWhat is displayed?', options: ['9', '14', '16', '21'], correctIndex: 3, explanation: 'Values greater than 4: 7, 9, 5. Sum = 7 + 9 + 5 = 21.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Is an Algorithm' },
    { partNumber: 2, partTitle: 'Code Tracing' },
    { partNumber: 3, partTitle: 'Algorithm Efficiency' },
    { partNumber: 4, partTitle: 'Search Algorithms' },
    { partNumber: 5, partTitle: 'Comparing Searches' },
    { partNumber: 6, partTitle: 'Sorting & Decidability' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
