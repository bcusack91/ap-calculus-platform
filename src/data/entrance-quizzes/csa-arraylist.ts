/**
 * Entrance Quiz — ArrayList (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cal-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'names is an empty ArrayList of String. What is printed?\nnames.add("ox");\nnames.add("bee");\nnames.add(1, "cat");\nnames.set(0, "dog");\nnames.remove(2);\nSystem.out.println(names);',
    options: ['[dog, cat]', '[dog, bee]', '[ox, cat]', '[cat, bee]'],
    correctIndex: 0,
    explanation: 'The list goes [ox], [ox, bee], then [ox, cat, bee] after the insert at index 1. set replaces ox with dog, and remove(2) takes out bee, leaving [dog, cat].',
  },
  {
    id: 'cal-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Why must a list of whole numbers be declared as an ArrayList of Integer and not of int?',
    options: ['Integer stores larger numbers than int can', 'int values cannot be added to any collection', 'Integer division is more exact', 'Lists hold only objects, not primitive values'],
    correctIndex: 3,
    explanation: 'The element type of an ArrayList must be a class, so primitives are stored in wrapper objects. Autoboxing then converts between int and Integer automatically.',
  },
  {
    id: 'cal-ent-2a', partNumber: 2, partTitle: 'Wrapper Classes: Integer and Double',
    question: 'temps is an ArrayList of Double that already holds at least one element. Which statement does not compile?',
    options: ['temps.add(72.0);', 'temps.add(72);', 'double t = temps.get(0);', 'temps.add(temps.get(0) + 1);'],
    correctIndex: 1,
    explanation: 'An int can be boxed only into an Integer, never into a Double, so adding the int 72 fails. temps.get(0) + 1 unboxes to a double before the sum is boxed back into a Double.',
  },
  {
    id: 'cal-ent-2b', partNumber: 2, partTitle: 'Wrapper Classes: Integer and Double',
    question: 'scores is an ArrayList of Integer holding [90, 75, 81]. What is printed?\nint total = 0;\nfor (int s : scores) {\ntotal += s;\n}\ndouble avg = total / scores.size();\nSystem.out.println(avg + " " + scores.get(0) / 4);',
    options: ['82.0 22.5', '82.0 22', '82.5 22.5', '82.0 22.0'],
    correctIndex: 1,
    explanation: 'Unboxed values follow the int rules: 246 / 3 is 82, stored as 82.0, and 90 / 4 is int division, 22. Nothing in either division is a double.',
  },
  {
    id: 'cal-ent-3a', partNumber: 3, partTitle: 'The ArrayList Methods in Depth',
    question: 'w is an ArrayList of String holding [a, b, c, d]. What is printed?\nString x = w.set(1, "z");\nString y = w.remove(0);\nw.add(w.size() - 1, x);\nSystem.out.println(x + y + w);',
    options: ['za[z, c, b, d]', 'ba[z, c, d, b]', 'ba[z, c, b, d]', 'ba[c, b, d]'],
    correctIndex: 2,
    explanation: 'set returns the element it replaced, "b", and remove returns "a", leaving [z, c, d]. Inserting "b" at index 2 shifts d up, giving [z, c, b, d].',
  },
  {
    id: 'cal-ent-3b', partNumber: 3, partTitle: 'The ArrayList Methods in Depth',
    question: 'list is an ArrayList of String with size 3. Which call throws an IndexOutOfBoundsException?',
    options: ['list.add(3, "x")', 'list.remove(2)', 'list.get(3)', 'list.set(0, "x")'],
    correctIndex: 2,
    explanation: 'get, set and remove accept indices 0 to size() - 1, so get(3) is out of range. add(index, obj) is the one method that also accepts size(), which appends.',
  },
  {
    id: 'cal-ent-4a', partNumber: 4, partTitle: 'Traversing an ArrayList',
    question: 'v is an ArrayList of Integer holding [1, 6]. What does v hold after this loop?\nfor (int i = 0; i < v.size(); i++) {\nif (v.get(i) > 3) {\nv.add(v.get(i) - 3);\n}\n}',
    options: ['[1, 6]', '[1, 6, 3]', '[1, 6, 3, 0]', 'The loop never ends'],
    correctIndex: 1,
    explanation: 'The test calls size() on every pass, so the loop also visits the 3 it added. 3 > 3 is false, nothing more is added, and the loop ends with [1, 6, 3].',
  },
  {
    id: 'cal-ent-4b', partNumber: 4, partTitle: 'Traversing an ArrayList',
    question: 'words is an ArrayList of String. Which loop can correctly replace each word with its first letter?',
    options: ['An enhanced for loop that reassigns w', 'An enhanced for loop that calls add', 'A loop with i from 1 to words.size()', 'An indexed loop that calls set with each index'],
    correctIndex: 3,
    explanation: 'Replacing an element needs set(i, ...), which needs an index. Reassigning an enhanced for variable changes only a copy, adding inside it can throw, and i up to size() reads past the end.',
  },
  {
    id: 'cal-ent-5a', partNumber: 5, partTitle: 'Lists of Objects, References, and Common Errors',
    question: 'nums is an ArrayList of Integer holding [3, 7, 1, 9]. What is the result of these statements?\nnums.remove(1);\nnums.remove(3);',
    options: ['[1, 9]', '[3, 1]', 'A compile-time error', 'An IndexOutOfBoundsException'],
    correctIndex: 3,
    explanation: 'remove takes an index, not a value. The first call removes index 1, the 7, leaving three elements, so index 3 no longer exists and the second call throws.',
  },
  {
    id: 'cal-ent-5b', partNumber: 5, partTitle: 'Lists of Objects, References, and Common Errors',
    question: 'A Counter starts at 0 and has increment() and getCount(). pts is an empty ArrayList of Counter. What is printed?\nCounter c = new Counter();\npts.add(c);\npts.add(c);\npts.add(new Counter());\nfor (Counter k : pts) {\nk.increment();\n}\nSystem.out.println(pts.get(0).getCount() + " " + pts.get(2).getCount());',
    options: ['1 1', '2 2', '2 1', '3 1'],
    correctIndex: 2,
    explanation: 'The list stores references, and indices 0 and 1 refer to the same Counter, so that object is incremented twice. The third element is a separate Counter, incremented once.',
  },
  {
    id: 'cal-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'nums is an empty ArrayList of Integer. What is printed?\nfor (int k = 1; k <= 4; k++) {\nif (k % 2 == 0) {\nnums.add(0, k);\n} else {\nnums.add(k);\n}\n}\nSystem.out.println(nums);',
    options: ['[4, 2, 1, 3]', '[1, 3, 2, 4]', '[2, 4, 1, 3]', '[4, 2, 3, 1]'],
    correctIndex: 0,
    explanation: 'Odd values are appended and even values are inserted at the front: [1], [2, 1], [2, 1, 3], then [4, 2, 1, 3]. Each insert at index 0 shifts every element up.',
  },
  {
    id: 'cal-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'A student writes capScores, which should replace every element above cap with cap and return how many it changed:\nint changed = 0;\nfor (int s : scores) {\nif (s > cap) {\ns = cap;\nchanged++;\n}\n}\nreturn changed;\nFor scores [88, 104, 95, 110] and cap 100, what is returned, and what does scores hold afterward?',
    options: ['2 and [88, 104, 95, 110]', '2 and [88, 100, 95, 100]', '0 and [88, 104, 95, 110]', '0 and [88, 100, 95, 100]'],
    correctIndex: 0,
    explanation: 'The count is right because the test reads each value, but s is an unboxed copy, so assigning cap to it never reaches the list. Changing the list needs scores.set(i, cap) in an indexed loop.',
  },
  {
    id: 'cal-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'data is an ArrayList of Integer holding [5, 1, 8, 3], and same = data;. What is printed?\nsame.add(0, same.remove(3));\nint old = data.set(1, data.get(1) + data.get(2));\nSystem.out.println(data + " " + old);',
    options: ['[3, 6, 1, 8] 6', '[3, 6, 1, 8] 5', '[5, 9, 8, 3] 1', '[3, 5, 1, 8] 5'],
    correctIndex: 1,
    explanation: 'same is an alias, so the changes happen to data: remove(3) takes out 3 and add(0, 3) puts it at the front, giving [3, 5, 1, 8]. set stores 5 + 1 = 6 at index 1 and returns the old 5.',
  },
  {
    id: 'cal-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'list is an ArrayList of String with at least one element. Which statement compiles?',
    options: ['String s = list[0];', 'int n = list.length - 1;', 'list.add(5);', 'String s = list.get(list.size() - 1);'],
    correctIndex: 3,
    explanation: 'A list uses get and size() in place of brackets and length, and the last valid index is size() - 1. A list of String cannot accept the int 5.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Wrapper Classes: Integer and Double' },
    { partNumber: 3, partTitle: 'The ArrayList Methods in Depth' },
    { partNumber: 4, partTitle: 'Traversing an ArrayList' },
    { partNumber: 5, partTitle: 'Lists of Objects, References, and Common Errors' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
