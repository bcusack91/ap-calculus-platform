/**
 * Entrance Quiz — Array Algorithms (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cas-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What does a contain after this code segment runs?\nint[] a = {4, 8, 15, 16, 23};\nfor (int i = 1; i < a.length - 1; i++) {\na[i] = a[i + 1];\n}',
    options: ['{4, 15, 16, 23, 23}', '{4, 15, 16, 23, 0}', '{4, 8, 16, 23, 23}', '{4, 15, 15, 15, 15}'],
    correctIndex: 0,
    explanation: 'Each element from index 1 to 3 copies its right neighbor, removing the 8. The array cannot shrink, so the last element is never overwritten and 23 appears twice.',
  },
  {
    id: 'cas-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What does r contain after this code segment runs?\nint[] r = {1, 2, 3, 4};\nfor (int i = 0; i < r.length; i++) {\nint temp = r[i];\nr[i] = r[r.length - 1 - i];\nr[r.length - 1 - i] = temp;\n}',
    options: ['{4, 3, 2, 1}', '{4, 3, 3, 4}', '{1, 2, 3, 4}', '{1, 3, 2, 4}'],
    correctIndex: 2,
    explanation: 'The loop visits every index instead of stopping at r.length / 2, so each pair is swapped twice. The second half of the loop undoes the first half and the array ends unchanged.',
  },
  {
    id: 'cas-ent-2a', partNumber: 2, partTitle: 'Standard Algorithms: Totals, Extremes, Counts, and Any/All',
    question: 'What is printed?\nint[] v = {6, 9, 4, 9, 2};\nint m = 0;\nfor (int i = 1; i < v.length; i++) {\nif (v[i] >= v[m]) {\nm = i;\n}\n}\nSystem.out.println(m + " " + v[m]);',
    options: ['3 9', '1 9', '4 2', '3 4'],
    correctIndex: 0,
    explanation: 'm tracks the index of the largest value. Because the test is >=, the second 9 at index 3 replaces the first one, so the output is the index 3 and the value 9.',
  },
  {
    id: 'cas-ent-2b', partNumber: 2, partTitle: 'Standard Algorithms: Totals, Extremes, Counts, and Any/All',
    question: 'This method should return true when some value in arr is greater than lim.\npublic static boolean anyOver(int[] arr, int lim) {\nfor (int v : arr) {\nif (v > lim) {\nreturn true;\n} else {\nreturn false;\n}\n}\nreturn false;\n}\nWhy does it return false for arr {3, 12, 5} and lim 10?',
    options: ['The enhanced for loop skips index 1 of the array', 'It decides after only the first element', 'The test v > lim should use >= instead of >', 'The final return false overrides the true found earlier'],
    correctIndex: 1,
    explanation: 'Both branches return on the first pass, so only the 3 is ever checked. The "at least one" pattern returns true inside the loop and false only after the loop has finished.',
  },
  {
    id: 'cas-ent-3a', partNumber: 3, partTitle: 'Rearranging Elements: Rotations, Swaps, and Compaction',
    question: 'This code is meant to rotate the array right by one. What does a contain afterward?\nint[] a = {1, 2, 3, 4};\nint last = a[3];\nfor (int i = 1; i < a.length; i++) {\na[i] = a[i - 1];\n}\na[0] = last;',
    options: ['{4, 1, 2, 3}', '{1, 1, 1, 1}', '{4, 1, 1, 1}', '{4, 4, 4, 4}'],
    correctIndex: 2,
    explanation: 'Looping forward, each step copies the value the previous step just wrote, so the 1 spreads to every later slot. The saved 4 then goes into index 0; a backward loop would give {4, 1, 2, 3}.',
  },
  {
    id: 'cas-ent-3b', partNumber: 3, partTitle: 'Rearranging Elements: Rotations, Swaps, and Compaction',
    question: 'What does arr contain after this code segment runs?\nint[] arr = {0, 5, 0, 8, 2, 0};\nint write = 0;\nfor (int read = 0; read < arr.length; read++) {\nif (arr[read] != 0) {\narr[write] = arr[read];\nwrite++;\n}\n}',
    options: ['{5, 8, 2, 0, 0, 0}', '{5, 8, 2, 0, 2, 0}', '{0, 5, 8, 2, 2, 0}', '{5, 8, 2, 8, 2, 0}'],
    correctIndex: 3,
    explanation: 'The nonzero values 5, 8 and 2 are copied to indexes 0, 1 and 2. Nothing clears the rest, so indexes 3 to 5 keep their old values 8, 2 and 0; filling with zeros needs a second loop.',
  },
  {
    id: 'cas-ent-4a', partNumber: 4, partTitle: 'Searching: Linear Search Variants and Binary Search',
    question: 'The standard iterative binary search (mid = (low + high) / 2, then low = mid + 1 or high = mid - 1) searches {3, 6, 11, 15, 19, 24, 30, 37, 42, 50} for 40. Which elements does it examine, and what does it return?',
    options: ['19, 37, 42, 50, then -1', '19, 37, 42, then -1', '24, 42, 37, 30, then -1', '19, 30, 37, 42, then -1'],
    correctIndex: 1,
    explanation: 'With indexes 0 to 9, the midpoints are 4 (19), then 7 (37), then 8 (42). After 42 > 40, high becomes 7, which is below low, so the range is empty and the method returns -1.',
  },
  {
    id: 'cas-ent-4b', partNumber: 4, partTitle: 'Searching: Linear Search Variants and Binary Search',
    question: 'What happens when this code runs and target does not appear in arr?\nint i = 0;\nwhile (arr[i] != target && i < arr.length) {\ni++;\n}',
    options: ['The loop ends with i equal to arr.length', 'The loop ends with i equal to -1', 'The loop never ends', 'It throws an exception'],
    correctIndex: 3,
    explanation: 'When i reaches arr.length, the left test arr[i] != target runs first and reads past the end. Putting i < arr.length on the left lets short-circuit evaluation stop the loop safely.',
  },
  {
    id: 'cas-ent-5a', partNumber: 5, partTitle: 'Sorting and Recursion: Selection, Insertion, Merge Sort',
    question: 'The array {8, 3, 6, 1, 5} is sorted into increasing order with selection sort. What does it contain after two passes of the outer loop?',
    options: ['{3, 6, 8, 1, 5}', '{1, 3, 6, 8, 5}', '{3, 8, 6, 1, 5}', '{1, 3, 5, 8, 6}'],
    correctIndex: 1,
    explanation: 'Pass 1 swaps the smallest value, 1, into index 0, giving {1, 3, 6, 8, 5}. Pass 2 finds 3 already in index 1, so nothing moves; {3, 6, 8, 1, 5} is what insertion sort gives after two passes.',
  },
  {
    id: 'cas-ent-5b', partNumber: 5, partTitle: 'Sorting and Recursion: Selection, Insertion, Merge Sort',
    question: 'What does mystery(17) return?\npublic static int mystery(int n) {\nif (n <= 0) {\nreturn 0;\n}\nreturn n % 3 + mystery(n / 3);\n}',
    options: ['6', '4', '5', '2'],
    correctIndex: 2,
    explanation: 'mystery(17) is 2 + mystery(5), mystery(5) is 2 + mystery(1), and mystery(1) is 1 + mystery(0), which is the base case 0. The returns add up to 2 + 2 + 1 = 5.',
  },
  {
    id: 'cas-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is printed?\nint[] arr = {2, 2, 2, 5, 5, 1, 2, 2};\nint count = 0;\nfor (int i = 0; i < arr.length - 1; i++) {\nif (arr[i] == arr[i + 1]) {\ncount++;\n}\n}\nSystem.out.println(count);',
    options: ['3', '5', '2', '4'],
    correctIndex: 3,
    explanation: 'The loop counts adjacent equal pairs, not runs: indexes (0, 1), (1, 2), (3, 4) and (6, 7) match, for 4. The run of three 2s contributes two pairs.',
  },
  {
    id: 'cas-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What array does shift({4, 8, 15, 16, 23}, 2) return?\npublic static int[] shift(int[] arr, int k) {\nint n = arr.length;\nint[] result = new int[n];\nfor (int i = 0; i < n; i++) {\nresult[i] = arr[(i + k) % n];\n}\nreturn result;\n}',
    options: ['{15, 16, 23, 4, 8}', '{16, 23, 4, 8, 15}', '{8, 15, 16, 23, 4}', '{15, 16, 23, 0, 0}'],
    correctIndex: 0,
    explanation: 'Each result slot i reads the element k places to its right, wrapping with % n, so result[0] is arr[2] = 15 and result[3] is arr[0] = 4. That is a rotation left by 2; writing result[(i + k) % n] = arr[i] would rotate right.',
  },
  {
    id: 'cas-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Insertion sort counts one comparison each time it evaluates temp < arr[possibleIndex - 1]. How many comparisons does it make when sorting {1, 2, 4, 3, 5}?',
    options: ['5', '4', '6', '10'],
    correctIndex: 0,
    explanation: 'The passes for 2, 4 and 5 each stop after one comparison. The 3 shifts past 4 and then stops at 2, using two, for a total of 5; selection sort would make 10 on any five values.',
  },
  {
    id: 'cas-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A binary search on {9, 2, 7, 4, 5} for the value 9 returns -1, even though 9 is at index 0. What is the cause?',
    options: ['The midpoint should round up instead of down', 'Binary search cannot find the first element', 'The loop condition should be low < high', 'The data is not sorted, so discarding halves can skip the 9'],
    correctIndex: 3,
    explanation: 'Binary search assumes sorted data when it throws away the half that cannot hold the target. Here the first midpoint is 7, which is less than 9, so the search drops the left half, where 9 actually is.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Standard Algorithms: Totals, Extremes, Counts, and Any/All' },
    { partNumber: 3, partTitle: 'Rearranging Elements: Rotations, Swaps, and Compaction' },
    { partNumber: 4, partTitle: 'Searching: Linear Search Variants and Binary Search' },
    { partNumber: 5, partTitle: 'Sorting and Recursion: Selection, Insertion, Merge Sort' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
