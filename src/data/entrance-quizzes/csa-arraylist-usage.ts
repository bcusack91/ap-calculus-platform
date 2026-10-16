/**
 * Entrance Quiz — ArrayList Algorithms (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cau-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'nums is an ArrayList of Integer holding [4, 4, 7, 4, 4, 2]. What does it hold after this loop?\nfor (int i = 0; i < nums.size(); i++) {\nif (nums.get(i) == 4) {\nnums.remove(i);\n}\n}',
    options: ['[7, 2]', '[4, 7, 2]', '[7, 4, 2]', '[4, 7, 4, 2]'],
    correctIndex: 3,
    explanation: 'Each removal slides the next element into index i, and then i++ moves past it unchecked. The 4 after each removed 4 is skipped, leaving [4, 7, 4, 2].',
  },
  {
    id: 'cau-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A method must delete every element equal to "x" from words, an ArrayList of String, using words.remove(i) on each match. Which traversal works with no other changes to the loop?',
    options: ['Index 0 upward, moving on after each match', 'Loop backward from the last index', 'An enhanced for loop over the words', 'Index 0 upward, stopping at the first match'],
    correctIndex: 1,
    explanation: 'Removing at i only shifts the elements after i, and a backward loop has already visited those. A forward loop skips the element that slides into i, and changing the size inside an enhanced for loop can throw.',
  },
  {
    id: 'cau-ent-2a', partNumber: 2, partTitle: 'Standard Algorithms on ArrayLists',
    question: 'nums is an ArrayList of Integer holding [6, 3, 8, 3, 9]. What value does best hold after this code segment runs?\nint best = 0;\nfor (int i = 1; i < nums.size(); i++) {\nif (nums.get(i) <= nums.get(best)) {\nbest = i;\n}\n}',
    options: ['1', '4', '3', '0'],
    correctIndex: 2,
    explanation: 'best tracks the index of the smallest value. The 3 at index 1 replaces index 0, and because the test is <=, the tied 3 at index 3 replaces it again.',
  },
  {
    id: 'cau-ent-2b', partNumber: 2, partTitle: 'Standard Algorithms on ArrayLists',
    question: 'A method should return true if any String in words has length greater than 5. It loops for (String w : words) and has return false; after the loop. Which loop body is correct?',
    options: ['if (w.length() > 5) { return true; } else { return false; }', 'if (w.length() <= 5) { return false; }', 'if (w.length() > 5) { return true; }', 'if (w.length() > 5) { return false; }'],
    correctIndex: 2,
    explanation: 'One long word settles an "any" question, so the method returns true inside the loop and false only after every word has failed. An else that returns, or an early false, decides from the first word alone.',
  },
  {
    id: 'cau-ent-3a', partNumber: 3, partTitle: 'Inserting and Removing in Place',
    question: 'nums is an ArrayList of Integer holding [5, -2, -3]. What does it hold after this loop?\nfor (int i = 0; i < nums.size(); i++) {\nif (nums.get(i) < 0) {\nnums.add(i + 1, 0);\ni++;\n}\n}',
    options: ['[5, -2, 0, -3]', '[5, -2, -3, 0]', '[5, -2, 0, -3, 0]', 'It loops forever'],
    correctIndex: 2,
    explanation: 'A 0 is inserted after each negative, and the extra i++ skips the inserted 0 so the next pass lands on the next original element. The size() test sees the growing list, so -3 is reached and also gets a 0.',
  },
  {
    id: 'cau-ent-3b', partNumber: 3, partTitle: 'Inserting and Removing in Place',
    question: 'nums is an ArrayList of Integer holding [1, 2, 3, 4, 5]. What does it hold after these statements?\nnums.add(0, nums.remove(nums.size() - 1));\nnums.add(nums.remove(0));\nnums.add(nums.remove(1));',
    options: ['[1, 3, 4, 5, 2]', '[5, 1, 3, 4, 2]', '[1, 2, 3, 4, 5]', '[2, 3, 4, 5, 1]'],
    correctIndex: 0,
    explanation: 'remove returns the element it took out. The first line moves 5 to the front, the second moves it back to the end, and the third moves the element at index 1, the 2, to the end.',
  },
  {
    id: 'cau-ent-4a', partNumber: 4, partTitle: 'Building New Lists and Combining Lists',
    question: 'a holds [A, B, C] and b holds [x]. A method builds result like this:\nint i = 0;\nwhile (i < a.size() && i < b.size()) {\nresult.add(a.get(i));\nresult.add(b.get(i));\ni++;\n}\nWhat does result hold?',
    options: ['[A, x, B, C]', '[A, x]', '[A, x, B]', '[A, B, C, x]'],
    correctIndex: 1,
    explanation: 'With &&, the loop stops as soon as the shorter list runs out, after one pass. Interleaving everything needs || in the loop test and a size check before each get.',
  },
  {
    id: 'cau-ent-4b', partNumber: 4, partTitle: 'Building New Lists and Combining Lists',
    question: 'a holds [fig, kiwi, lime, plum] and b holds [kiwi]. What does result hold after this code segment runs?\nboolean inB = false;\nfor (String s : a) {\nfor (String t : b) {\nif (t.equals(s)) { inB = true; }\n}\nif (inB) { result.add(s); }\n}',
    options: ['[kiwi, lime, plum]', '[kiwi]', '[fig, kiwi, lime, plum]', '[lime, plum]'],
    correctIndex: 0,
    explanation: 'The flag is declared once, outside the outer loop, so after it turns true at kiwi it is never reset. Every later word is added too; declaring inB inside the outer loop fixes it.',
  },
  {
    id: 'cau-ent-5a', partNumber: 5, partTitle: 'Data Analysis With ArrayList',
    question: 'A TripLog keeps trips, an ArrayList of Trip, holding (Al, 10), (Bo, 30), (Al, 20), (Cy, 5) as driver and miles. A student writes averageFor(driver) by adding the miles of that driver\'s trips into total and returning (double) total / trips.size(). What does averageFor("Al") return?',
    options: ['7.5', '15.0', '7.0', '30.0'],
    correctIndex: 0,
    explanation: 'Al\'s miles total 30, but dividing by trips.size() divides by all 4 trips instead of Al\'s 2, giving 7.5. The average needs a separate count of the matching trips, which would give 15.0.',
  },
  {
    id: 'cau-ent-5b', partNumber: 5, partTitle: 'Data Analysis With ArrayList',
    question: 'Trip has a private int miles and a getter getMiles(). Inside TripLog, which expression gives the miles of the trip at index i of trips?',
    options: ['trips.get(i).miles', 'trips[i].getMiles()', 'trips.get(getMiles(i))', 'trips.get(i).getMiles()'],
    correctIndex: 3,
    explanation: 'get(i) returns the Trip object, and its private field can be read from TripLog only through the public getter. Lists do not use brackets, and TripLog has no getMiles method of its own to call.',
  },
  {
    id: 'cau-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'list is an ArrayList of Integer holding [4, 9, 1, 7, 3]. What does it hold after this loop?\nint i = 1;\nwhile (i < list.size()) {\nif (list.get(i) < list.get(i - 1)) {\nlist.remove(i);\n} else {\ni++;\n}\n}',
    options: ['[4, 9, 7]', '[4, 9]', '[4, 9, 7, 3]', '[4, 1, 3]'],
    correctIndex: 1,
    explanation: 'Each element smaller than the one before it is removed, and i stays put so the element that slides in is checked against 9. The 1, then the 7, then the 3 are all smaller than 9.',
  },
  {
    id: 'cau-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'sessions holds (a, 5), (b, 8), (c, 30), (d, 4) as subject and minutes. A student removes every session shorter than 10 minutes with this loop:\nfor (int i = 0; i < sessions.size(); i++) {\nif (sessions.get(i).getMinutes() < 10) {\nsessions.remove(i);\n}\n}\nWhat does sessions hold afterward?',
    options: ['(b, 8) and (c, 30)', '(c, 30) only', '(c, 30) and (d, 4)', '(b, 8), (c, 30) and (d, 4)'],
    correctIndex: 0,
    explanation: 'Removing (a, 5) slides (b, 8) into index 0, and i moves on to 1 without checking it. (d, 4) is still removed later, so (b, 8) survives by mistake.',
  },
  {
    id: 'cau-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'insertSorted(nums, v) steps i forward while i < nums.size() and nums.get(i) < v, then calls nums.add(i, v). Starting from an empty list, 6, 2, 6 and 3 are inserted in that order. Then a loop removes each element equal to the one before it, and finally nums.add(0, nums.remove(nums.size() - 1)); runs. What does nums hold?',
    options: ['[3, 6, 2]', '[2, 3, 6]', '[6, 2, 3]', '[6, 2, 3, 6]'],
    correctIndex: 2,
    explanation: 'The inserts produce [2, 3, 6, 6], and removing the repeated 6 leaves [2, 3, 6]. The last statement moves the final element to the front, giving [6, 2, 3].',
  },
  {
    id: 'cau-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'names and scores are parallel lists. A method must return a new list of the names whose score is at least 90. Which loop fits the task?',
    options: ['An enhanced for loop over names only', 'A backward loop that removes low scores', 'Nested loops over both lists', 'An indexed loop that uses one i for both lists'],
    correctIndex: 3,
    explanation: 'Parallel lists pair elements by index, so one index must reach scores.get(i) and names.get(i) together. Removing would change the caller\'s lists, and nested loops would pair names with the wrong scores.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Standard Algorithms on ArrayLists' },
    { partNumber: 3, partTitle: 'Inserting and Removing in Place' },
    { partNumber: 4, partTitle: 'Building New Lists and Combining Lists' },
    { partNumber: 5, partTitle: 'Data Analysis With ArrayList' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
