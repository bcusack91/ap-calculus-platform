/**
 * Entrance Quiz — Algorithms & Programming (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cap-ent-1a', partNumber: 1, partTitle: 'Abstraction, Procedures, and Modularity',
    question: 'What is displayed when this code runs?\n\nPROCEDURE f(a, b) {\nRETURN(a * 2 + b)\n}\nx ← f(3, 4)\nDISPLAY(f(x, 1))',
    options: ['21', '10', '11', '20'],
    correctIndex: 0,
    explanation: 'The first call returns 3 × 2 + 4 = 10, which is stored in x. The second call returns 10 × 2 + 1 = 21, and that value is displayed.',
  },
  {
    id: 'cap-ent-1b', partNumber: 1, partTitle: 'Abstraction, Procedures, and Modularity',
    question: 'A game repeats the same 12 lines of score-updating code in five places. A student moves those lines into PROCEDURE updateScore(points) and calls it in each place. What is the main benefit?',
    options: ['The program now runs in far fewer steps', 'A scoring fix now has to be made in just one place', 'The score can no longer be changed elsewhere', 'Each place can now award a different score'],
    correctIndex: 1,
    explanation: 'Procedural abstraction gives the task one definition, so a change to the scoring logic is made once and every call uses it. Moving code into a procedure does not reduce the steps the computer runs.',
  },
  {
    id: 'cap-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'What is displayed when this code runs?\n\nPROCEDURE addTen(n) {\nn ← n + 10\nRETURN(n)\n}\nx ← 5\ny ← addTen(x)\nDISPLAY(x)\nDISPLAY(y)',
    options: ['15 15', '5 5', '15 5', '5 15'],
    correctIndex: 3,
    explanation: 'The parameter n is local to the procedure, so adding 10 to it does not change x, which stays 5. The returned value 15 is stored in y.',
  },
  {
    id: 'cap-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'What is displayed when this code runs?\n\nPROCEDURE m(n) {\nRETURN(n * 2)\nDISPLAY(n)\n}\nDISPLAY(m(m(3)))',
    options: ['12', '3 6 12', '6 12', '3 12'],
    correctIndex: 0,
    explanation: 'RETURN ends the procedure immediately, so the DISPLAY inside it never runs. The inner call returns 6, the outer call returns 12, and only 12 is displayed.',
  },
  {
    id: 'cap-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'What does this procedure return?\n\nPROCEDURE check(list) {\nFOR EACH n IN list {\nIF (n MOD 2 = 0) {\nRETURN(true)\n}\n}\nRETURN(false)\n}',
    options: ['true only if every element is even', 'true if the last element is even', 'the number of even elements', 'true if at least one element is even'],
    correctIndex: 3,
    explanation: 'The procedure returns true as soon as it finds one even element and returns false only after checking them all. That is the "exists" pattern, not a "for-all" check or a count.',
  },
  {
    id: 'cap-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'This procedure is meant to return true when every element of the list is positive. For which list does it return the wrong result?\n\nPROCEDURE allPos(list) {\nFOR EACH n IN list {\nIF (n > 0) {\nRETURN(true)\n}\n}\nRETURN(false)\n}',
    options: ['[-1, -3]', '[2, 5, 9]', '[4, -2, 7]', '[-6]'],
    correctIndex: 2,
    explanation: 'It returns true at the first positive value, 4, without ever seeing the -2, so it wrongly reports that every element is positive. A correct for-all check returns false on the first counter-example.',
  },
  {
    id: 'cap-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A program keeps 30 quiz scores in separate variables s1 through s30. A student rewrites it to keep them in one list named scores. What is the main advantage?',
    options: ['The same code works for any number of scores', 'Each score now uses less memory to store', 'The scores can no longer be changed by mistake', 'The program can now hold decimal scores'],
    correctIndex: 0,
    explanation: 'A list is a data abstraction: one name manages all the values, so loops over it do not change when the number of scores changes. It does not save memory or protect the values.',
  },
  {
    id: 'cap-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A loan app breaks ties between equally qualified applicants by favoring certain ZIP codes. Used by millions of people, what is the main concern with this design choice?',
    options: ['It makes the program run more slowly at scale', 'It makes the results change on every run', 'It could treat whole neighborhoods differently', 'It removes human judgment from the decision'],
    correctIndex: 2,
    explanation: 'One condition in the code can systematically disadvantage people by where they live, and at scale that affects many users. That is a question of bias and impact, not of speed.',
  },
  {
    id: 'cap-ent-5a', partNumber: 5, partTitle: 'Libraries, APIs, and Random Values',
    question: 'The expression RANDOM(1, 4) + RANDOM(1, 4) is evaluated. Which statement about its possible results is correct?',
    options: ['8 values; all are equally likely', '7 values; all are equally likely', '7 values; 5 is the most likely', '16 values; 5 is the most likely'],
    correctIndex: 2,
    explanation: 'The sum ranges from 2 to 8, which is 7 values. More of the 16 equally likely pairs add to 5 (four of them) than to any other total.',
  },
  {
    id: 'cap-ent-5b', partNumber: 5, partTitle: 'Libraries, APIs, and Random Values',
    question: 'About what percent of runs of this code display "win"?\n\nIF (RANDOM(1, 20) ≤ 6) {\nDISPLAY("win")\n}\nELSE {\nDISPLAY("lose")\n}',
    options: ['25%', '6%', '70%', '30%'],
    correctIndex: 3,
    explanation: 'RANDOM(1, 20) returns 20 equally likely integers, and 6 of them (1 through 6) make the condition true. That is 6 ÷ 20 = 30% of runs.',
  },
  {
    id: 'cap-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'What is displayed when this code runs?\n\nPROCEDURE find(list, t) {\ni ← 1\nREPEAT UNTIL (i > LENGTH(list)) {\nIF (list[i] ≥ t) {\nRETURN(i)\n}\ni ← i + 1\n}\nRETURN(-1)\n}\nDISPLAY(find([4, 9, 2, 9, 12], 9))',
    options: ['2', '5', '4', '1'],
    correctIndex: 0,
    explanation: 'Lists start at index 1, and the first element at least 9 is the 9 at index 2. The procedure returns as soon as it finds that first match.',
  },
  {
    id: 'cap-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'For which input does this procedure cause an error?\n\nPROCEDURE avg(list) {\ntotal ← 0\nFOR EACH x IN list {\ntotal ← total + x\n}\nRETURN(total / LENGTH(list))\n}',
    options: ['A list holding only negative numbers', 'A list with just one element', 'A list whose elements sum to zero', 'A list containing no elements'],
    correctIndex: 3,
    explanation: 'A list with no elements has length 0, so the procedure divides by zero. Negative values, a single element and a zero total all give a valid average.',
  },
  {
    id: 'cap-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Two procedures give the same result on a list of n elements. Procedure A checks each element once. Procedure B compares every pair of elements, about n × n ÷ 2 comparisons. For a list of 1,000 elements, which is true?',
    options: ['A takes about 1,000 steps and B about 2,000', 'A takes about 1,000 steps, and B about 500,000', 'Both take about 1,000 steps', 'A takes about 500 steps and B about 1,000,000'],
    correctIndex: 1,
    explanation: 'One pass over 1,000 elements takes about 1,000 steps, and 1,000 × 1,000 ÷ 2 = 500,000. Both are polynomial and run in reasonable time, but A is the better choice.',
  },
  {
    id: 'cap-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'This code is meant to display every element of list. What does it display when list is [5, 8, 3]?\n\ni ← 1\nREPEAT UNTIL (i = LENGTH(list)) {\nDISPLAY(list[i])\ni ← i + 1\n}',
    options: ['5 8 3', '5 8', '8 3', 'Nothing, because of an error'],
    correctIndex: 1,
    explanation: 'The loop stops as soon as i equals 3, before the third element is displayed. This off-by-one bug needs the condition i > LENGTH(list).',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Abstraction, Procedures, and Modularity' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Libraries, APIs, and Random Values' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
