/**
 * Entrance Quiz — Creative Development (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cpcd-ent-1a', partNumber: 1, partTitle: 'Program Design, Collaboration, and Development Process',
    question: 'A student\'s app lets users log each glass of water they drink and shows a running daily total. Which statement describes the program\'s purpose rather than its function?',
    options: ['Adding each logged amount to a running total', 'Helping people stay hydrated', 'Displaying the daily total on the screen', 'Accepting amounts typed in by the user'],
    correctIndex: 1,
    explanation: 'Purpose is why the program exists, the problem it addresses. Adding to a total, displaying it and accepting input describe what the program does, which is its function.',
  },
  {
    id: 'cpcd-ent-1b', partNumber: 1, partTitle: 'Program Design, Collaboration, and Development Process',
    question: 'A team builds the login screen and tests it fully, then builds the search feature and tests it on its own before adding it to the working login code. Which kind of process is this?',
    options: ['Iterative development', 'Event-driven programming', 'Incremental development', 'Sequential design'],
    correctIndex: 2,
    explanation: 'Building and testing small pieces, then adding each working piece to the whole, is incremental development. Iterative development means repeatedly revising based on feedback and revisiting earlier phases.',
  },
  {
    id: 'cpcd-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'A team\'s prototype worked well when the developers tried it, but students in a pilot class could not find the submit button. What should the team do next?',
    options: ['Release it, since the developers found no bugs', 'Add more features before any further testing', 'Write the documentation and stop work', 'Revise the design, then retest it with those users'],
    correctIndex: 3,
    explanation: 'Iterative development uses feedback from real users to refine the design and test again. Testing only with the developers missed a problem that the target users found right away.',
  },
  {
    id: 'cpcd-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'Which statement about the comments in a program is accurate?',
    options: ['They let the computer skip lines that have errors', 'They do not affect how it runs', 'They are needed for the program to compile', 'They should be written only once coding is done'],
    correctIndex: 1,
    explanation: 'Comments are written for people and are ignored when the program runs. They are written throughout development, not only at the end, and a program can run without any.',
  },
  {
    id: 'cpcd-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A game must play a sound whenever the player presses the space bar, no matter what else the program is doing. Which approach fits this requirement?',
    options: ['Event-driven code that responds to the key', 'A loop that repeats the sound forever', 'A long sequence of statements in fixed order', 'Selection that checks the score after each level'],
    correctIndex: 0,
    explanation: 'In event-driven programming, a statement runs when an event such as a key press triggers it, not through the normal sequential flow. The other designs would play the sound at the wrong times or not at all.',
  },
  {
    id: 'cpcd-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A quiz app calls the procedure gradeAnswer(answer, key) in five places. A teammate rewrites the steps inside gradeAnswer to make it faster, and it still returns the same results. What must change in the five calls?',
    options: ['Each call must repeat the new steps itself', 'Each call needs an extra parameter', 'None of the five calls needs editing', 'The calls must move inside the procedure'],
    correctIndex: 2,
    explanation: 'Procedural abstraction lets callers depend only on what a procedure does, not how it does it. As long as the name, parameters and results stay the same, the calls need no change.',
  },
  {
    id: 'cpcd-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A program that should display the average of a list runs without stopping, but for [2, 4, 9] it displays 4 instead of 5. What kind of error is this?',
    options: ['A syntax error', 'A run-time error', 'An overflow error', 'A logic error'],
    correctIndex: 3,
    explanation: 'The program follows the language rules and runs to completion, but its output is wrong, which is a logic error. Only testing reveals errors like this.',
  },
  {
    id: 'cpcd-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'Which activity belongs to the design phase of development rather than to investigation?',
    options: ['Surveying users about the features they want', 'Observing users as they do the task by hand', 'Diagramming the user interface and planning the tests', 'Interviewing teachers about their class needs'],
    correctIndex: 2,
    explanation: 'Investigation gathers requirements through surveys, observation and interviews. The design phase outlines how to meet the specification, including diagramming the interface and planning how to test.',
  },
  {
    id: 'cpcd-ent-5a', partNumber: 5, partTitle: 'Documentation and Acknowledging Code',
    question: 'A student\'s program uses a procedure that a generative AI tool wrote. What should the student do?',
    options: ['Nothing, since AI output belongs to the user', 'Rename its variables to make it original', 'Credit the AI tool and test and understand the code', 'Remove its comments so it looks hand-written'],
    correctIndex: 2,
    explanation: 'Code from another source, including an AI tool, should be acknowledged in the documentation. AI code can contain errors, so the student is also responsible for testing it and being able to explain it.',
  },
  {
    id: 'cpcd-ent-5b', partNumber: 5, partTitle: 'Documentation and Acknowledging Code',
    question: 'A programming environment does not support comments. Where can the program documentation go?',
    options: ['In the program\'s variable names only', 'In a separate written document', 'Documentation is then not needed', 'In the program\'s output to the user'],
    correctIndex: 1,
    explanation: 'Documentation describes what the code does and how it was developed, and it can be kept outside the program when comments are not available. It is still needed for developing and maintaining correct programs.',
  },
  {
    id: 'cpcd-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop: Finding and Fixing Errors',
    question: 'This procedure should count the values from 10 to 20, inclusive. Which test input reveals its error?\nPROCEDURE countInRange(nums)\n{\ncount ← 0\nFOR EACH n IN nums\n{\nIF ((n > 10) AND (n ≤ 20))\n{\ncount ← count + 1\n}\n}\nRETURN(count)\n}',
    options: ['[15, 18]', '[5, 25]', '[20, 21]', '[10, 15]'],
    correctIndex: 3,
    explanation: 'The value 10 should be counted, but n > 10 is false for it, so [10, 15] returns 1 instead of 2. The other inputs give the expected counts, because they avoid the lower boundary.',
  },
  {
    id: 'cpcd-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop: Finding and Fixing Errors',
    question: 'A procedure should accept ages from 13 to 19, inclusive, and reject all others. Which set of test inputs best checks its boundaries?',
    options: ['12, 13, 19, 20', '14, 15, 16, 17', '1, 50, 100, 200', '13, 14, 15, 16'],
    correctIndex: 0,
    explanation: 'Good tests include the values at each boundary and just beyond them, so 12, 13, 19 and 20 check that both ends are handled. The other sets never test the upper boundary, or never test a value just outside the range.',
  },
  {
    id: 'cpcd-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'A language stores integers in a fixed number of bits. Adding two very large positive values produces a result outside the range it can represent. What kind of error is this?',
    options: ['An overflow error', 'A syntax error', 'A logic error', 'A run-time error'],
    correctIndex: 0,
    explanation: 'An overflow error occurs when a computed number falls outside the range of values the fixed number of bits can represent. The code itself may be written correctly.',
  },
  {
    id: 'cpcd-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'After release, users report that an app stops working whenever they upload a photo larger than 10 MB. Which is the best next step for the team?',
    options: ['Tell users to upload only small photos', 'Lower the upload limit to 5 MB for safety', 'Rewrite the upload code without testing it', 'Reproduce the bug with a big photo and fix it'],
    correctIndex: 3,
    explanation: 'The development cycle continues after release: investigate the reported problem, correct it and test again. The other choices dodge the bug or change code without testing the change.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Program Design, Collaboration, and Development Process' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Documentation and Acknowledging Code' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop: Finding and Fixing Errors' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
