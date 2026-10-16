/**
 * Entrance Quiz — Arrays (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'car-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nint[] a = {5, 9, 2, 7};\nint[] b = new int[a.length];\nfor (int i = 0; i < a.length; i++) {\nb[i] = a[a.length - 1 - i];\n}\nSystem.out.println(b[0] + " " + b.length);',
    options: ['5 4', '7 3', '7 4', '2 4'],
    correctIndex: 2,
    explanation: 'When i is 0, b[0] gets a[3], the last element, 7. a.length is 4, so b was created with 4 elements, and length is a field written without parentheses.',
  },
  {
    id: 'car-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nint[] t = {-4, -9, -2, -7};\nint max = 0;\nfor (int v : t) {\nif (v > max) {\nmax = v;\n}\n}\nSystem.out.println(max);',
    options: ['0', '-2', '-9', '-4'],
    correctIndex: 0,
    explanation: 'Every element is negative, so none is greater than the starting value 0, and max is never replaced. Starting max at t[0] would give the true maximum, -2.',
  },
  {
    id: 'car-ent-2a', partNumber: 2, partTitle: 'Creating Arrays: Sizes, Defaults, and References',
    question: 'What is printed?\npublic static int[] grow(int[] src) {\nint[] r = new int[src.length + 1];\nfor (int i = 0; i < src.length; i++) {\nr[i] = src[i];\n}\nsrc[0] = -1;\nreturn r;\n}\nint[] a = {7, 8};\nint[] b = grow(a);\nSystem.out.println(a[0] + " " + b[0] + " " + b.length);',
    options: ['7 7 3', '-1 7 3', '-1 -1 3', '7 -1 2'],
    correctIndex: 1,
    explanation: 'src is a copy of the reference in a, so setting src[0] changes the caller\'s array. The copy r was filled before that change and is a separate array of length 3, so b[0] is still 7.',
  },
  {
    id: 'car-ent-2b', partNumber: 2, partTitle: 'Creating Arrays: Sizes, Defaults, and References',
    question: 'After these statements, which expression throws a NullPointerException when it is evaluated?\nString[] s = new String[4];\ns[1] = "ab";\ns[3] = "cde";',
    options: ['s[1].length() + 1', '"x" + s[0] + s[2]', 's[2].length()', 's[3].substring(1)'],
    correctIndex: 2,
    explanation: 'new String[4] fills every slot with null, and s[2] was never assigned, so calling length() on it throws. Concatenating a null element is allowed and produces the text null.',
  },
  {
    id: 'car-ent-3a', partNumber: 3, partTitle: 'Indexed Traversals and Bounds Errors',
    question: 'What does r contain after this code segment runs?\nint[] r = {2, 3, 1, 4};\nfor (int i = 1; i < r.length; i++) {\nr[i] = r[i] * r[i - 1];\n}',
    options: ['{2, 6, 3, 4}', '{2, 5, 4, 5}', '{6, 3, 4, 4}', '{2, 6, 6, 24}'],
    correctIndex: 3,
    explanation: 'The loop runs forward, so each pass uses the neighbor that was already updated: 3 * 2 = 6, then 1 * 6 = 6, then 4 * 6 = 24. Using only the original values would give {2, 6, 3, 4}.',
  },
  {
    id: 'car-ent-3b', partNumber: 3, partTitle: 'Indexed Traversals and Bounds Errors',
    question: 'What is the result of running this code segment?\nint[] d = {4, 6, 5, 9};\nint c = 0;\nfor (int i = 0; i < d.length; i++) {\nif (i > 0 && d[i] > d[i - 1]) {\nc++;\n}\n}\nSystem.out.println(c);',
    options: ['It prints 2', 'It prints 3', 'It prints 1', 'An ArrayIndexOutOfBoundsException'],
    correctIndex: 0,
    explanation: 'When i is 0, i > 0 is false, so && stops before d[-1] is ever read. The rises 4 to 6 and 5 to 9 are counted, so c is 2.',
  },
  {
    id: 'car-ent-4a', partNumber: 4, partTitle: 'Enhanced for Loops: Copies, Objects, and Limits',
    question: 'A Cell class has a constructor Cell(int v), a method add(int n) that adds n to its value, and get(). What is printed?\nCell[] cs = {new Cell(1), new Cell(2), new Cell(3)};\nfor (Cell c : cs) {\nc.add(c.get());\nc = new Cell(100);\n}\nSystem.out.println(cs[0].get() + cs[2].get());',
    options: ['4', '200', '6', '8'],
    correctIndex: 3,
    explanation: 'The loop variable is a copy of each reference, so add changes the object in the array, doubling the values to 2, 4 and 6. Reassigning c only moves the local variable, so the sum is 2 + 6 = 8.',
  },
  {
    id: 'car-ent-4b', partNumber: 4, partTitle: 'Enhanced for Loops: Copies, Objects, and Limits',
    question: 'Which task cannot be done correctly with an enhanced for loop over an array?',
    options: ['Adding up all the values in a double array', 'Counting the Strings longer than 3 in an array', 'Calling a mutator on every object in an array', 'Replacing each negative int in an int array with 0'],
    correctIndex: 3,
    explanation: 'The loop variable holds a copy of each int, so assigning 0 to it never reaches the array; that needs an indexed loop that assigns arr[i]. Reading values and calling mutators through copied references both work.',
  },
  {
    id: 'car-ent-5a', partNumber: 5, partTitle: 'Data Sets and Text Files',
    question: 'What is printed?\nString line = "kiwi,7,2.5";\nString[] p = line.split(",");\nSystem.out.println(p.length + p[1] + 1 + " " + (Integer.parseInt(p[1]) + 1));',
    options: ['371 8', '11 8', '371 71', '38 8'],
    correctIndex: 0,
    explanation: 'split gives three Strings, so p.length is 3, and 3 + "7" + 1 joins as text to "371". Parsing "7" gives the int 7, so the parenthesized sum is 8.',
  },
  {
    id: 'car-ent-5b', partNumber: 5, partTitle: 'Data Sets and Text Files',
    question: 'A city collects opinions on a new bus route only through a smartphone app and then uses the data to decide where to add stops. What is the main concern about this data set?',
    options: ['The app cannot record more than one answer per person', 'Residents without smartphones are left out', 'Smartphone answers are less accurate than paper ones', 'Answers come in faster, so the results are more reliable'],
    correctIndex: 1,
    explanation: 'How data is collected decides whose data is missing. Residents without smartphones, who may depend on buses most, have no voice in the results, which can bias the decision.',
  },
  {
    id: 'car-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What does arr contain after this code segment runs?\nint[] arr = {5, 2, 8, 1, 6};\nfor (int i = arr.length - 2; i >= 0; i--) {\nif (arr[i] < arr[i + 1]) {\narr[i] = arr[i + 1];\n}\n}',
    options: ['{8, 8, 8, 6, 6}', '{8, 8, 8, 8, 6}', '{5, 8, 8, 6, 6}', '{2, 8, 8, 6, 6}'],
    correctIndex: 0,
    explanation: 'Working from the right, index 3 becomes 6, index 2 keeps 8, index 1 becomes 8, and index 0 then compares with the updated 8 and becomes 8. Each element ends up as the largest value at or to its right.',
  },
  {
    id: 'car-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'A method should return a new array of the even elements of data. It counts the evens, creates int[] result = new int[count];, and then fills it with this loop:\nfor (int i = 0; i < data.length; i++) {\nif (data[i] % 2 == 0) {\nresult[i] = data[i];\n}\n}\nWhat happens when data is {3, 4, 6, 5, 8}?',
    options: ['It throws an exception when i is 2', 'It throws an exception when i is 3', 'It throws an exception when i is 4', 'It returns {4, 6, 8}'],
    correctIndex: 2,
    explanation: 'There are 3 evens, so result has indices 0 to 2. Using the source index, the 4 and 6 go to indices 1 and 2, but the 8 at i = 4 needs result[4], which throws; a separate result index fixes it.',
  },
  {
    id: 'car-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\npublic static int[] diffs(int[] a) {\nint[] r = new int[a.length - 1];\nfor (int i = 0; i < r.length; i++) {\nr[i] = a[i + 1] - a[i];\n}\nreturn r;\n}\nint[] d = {2, 7, 4, 10};\nint[] same = d;\nint[] r = diffs(d);\nsame[3] = 0;\nint t = 0;\nfor (int x : r) {\nt += x;\n}\nSystem.out.println(d[3] + " " + r[2] + " " + t);',
    options: ['10 6 8', '0 6 8', '0 -4 -2', '10 -4 8'],
    correctIndex: 1,
    explanation: 'diffs builds the separate array {5, -3, 6} before the change, so r[2] stays 6 and the sum is 8. same is an alias of d, so same[3] = 0 changes d[3] to 0.',
  },
  {
    id: 'car-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'This code does not compile:\npublic static int[] load(String name) {\nScanner in = new Scanner(new File(name));\nint n = in.nextInt();\nint[] v = new int[n];\nfor (int i = 0; i < n; i++) { v[i] = in.nextInt(); }\nin.close();\nreturn v;\n}\nWhich change fixes it?',
    options: ['Change the return type to void', 'Call in.close() before reading', 'Add throws IOException to the header', 'Use nextLine instead of nextInt'],
    correctIndex: 2,
    explanation: 'Opening a File with a Scanner can fail, and Java requires the method to acknowledge that with throws IOException. The other changes do not address the compile error, and closing first would break the reads.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Creating Arrays: Sizes, Defaults, and References' },
    { partNumber: 3, partTitle: 'Indexed Traversals and Bounds Errors' },
    { partNumber: 4, partTitle: 'Enhanced for Loops: Copies, Objects, and Limits' },
    { partNumber: 5, partTitle: 'Data Sets and Text Files' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
