/**
 * Entrance Quiz — Collaboration in Development (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cpcl-ent-1a', partNumber: 1, partTitle: 'Collaboration Tools, Testing Strategies, and Program Correctness',
    question: 'A programmer adds one feature at a time and tests the program after each addition. When a new bug shows up, why is this approach helpful?',
    options: ['Each feature can then skip its own tests', 'No documentation is needed anymore', 'Bugs in earlier features fix themselves', 'The bug is most likely in the newest code'],
    correctIndex: 3,
    explanation: 'Because every earlier piece was tested before the latest addition, a new failure points to the code just added. That makes errors much easier to locate and fix.',
  },
  {
    id: 'cpcl-ent-1b', partNumber: 1, partTitle: 'Collaboration Tools, Testing Strategies, and Program Correctness',
    question: 'In the AP pseudocode, lists are indexed starting at 1. A program that is written correctly in every other way tries to access scores[0], and the program stops with an error message as it runs. What kind of error is this?',
    options: ['A syntax error', 'A run-time error', 'An overflow error', 'A logic error'],
    correctIndex: 1,
    explanation: 'The code follows the language rules, so it starts running, and the error happens only when the bad index is used during execution. An error that stops a running program is a run-time error.',
  },
  {
    id: 'cpcl-ent-2a', partNumber: 2, partTitle: 'Diverse Perspectives and Interpersonal Skills',
    question: 'A team building a public transit app includes some members who use wheelchairs and some who rarely ride transit. What is the main benefit of this mix?',
    options: ['Needs like step-free routes get noticed', 'The team can skip testing with outside users', 'Every decision will be made faster', 'The app will need less documentation'],
    correctIndex: 0,
    explanation: 'Diverse perspectives help a team anticipate user needs and avoid bias. Members with different experiences notice requirements that a uniform team could overlook.',
  },
  {
    id: 'cpcl-ent-2b', partNumber: 2, partTitle: 'Diverse Perspectives and Interpersonal Skills',
    question: 'Two teammates disagree about whether a quiz should have a timer. They settle on making the timer optional, a choice both of them can accept. Which interpersonal skill are they using?',
    options: ['Crowdsourcing', 'Negotiation', 'Pair programming', 'Direct observation'],
    correctIndex: 1,
    explanation: 'Finding a compromise when teammates want different things is negotiation. Crowdsourcing, pair programming and direct observation are collaboration or investigation methods, not ways of settling a disagreement.',
  },
  {
    id: 'cpcl-ent-3a', partNumber: 3, partTitle: 'Pair Programming, Online Tools, and Crowdsourcing',
    question: 'A map app updates its traffic conditions using reports sent in automatically by thousands of drivers\' phones. Which practice is this an example of?',
    options: ['Pair programming', 'Open-source licensing', 'Crowdsourcing', 'Direct observation'],
    correctIndex: 2,
    explanation: 'Obtaining input or information from a large number of people through the Internet is crowdsourcing. The app combines many small contributions into one result.',
  },
  {
    id: 'cpcl-ent-3b', partNumber: 3, partTitle: 'Pair Programming, Online Tools, and Crowdsourcing',
    question: 'In pair programming, what does the navigator do while the driver writes the code?',
    options: ['Writes a second copy of the same code', 'Waits to test the program once it is done', 'Reviews each line as it is typed and plans ahead', 'Types the comments for every procedure'],
    correctIndex: 2,
    explanation: 'The navigator reviews the code as it is written and thinks about the next steps, so errors are caught early. The two partners switch roles regularly.',
  },
  {
    id: 'cpcl-ent-4a', partNumber: 4, partTitle: 'Gathering Input From Users',
    question: 'A team wants to learn how students actually check out library books today, not how they say they do it. Which investigation method fits best?',
    options: ['Sending a survey to every student', 'Interviewing two students about it', 'Asking teachers how it works', 'Watching students during real visits'],
    correctIndex: 3,
    explanation: 'Direct observation shows what people really do. Surveys and interviews report what people say they do, which can differ from their actual behavior.',
  },
  {
    id: 'cpcl-ent-4b', partNumber: 4, partTitle: 'Gathering Input From Users',
    question: 'A fitness app team surveys only the members of the school track team about which features to build. What risk does this create?',
    options: ['The survey answers will arrive too slowly', 'Track athletes cannot use a fitness app', 'It may miss other users\' needs', 'The team will collect too much data to store'],
    correctIndex: 2,
    explanation: 'Consulting a single narrow group can build that group\'s preferences, and its bias, into the program. Less active users may need very different features.',
  },
  {
    id: 'cpcl-ent-5a', partNumber: 5, partTitle: 'Computing Innovations and Their Purpose',
    question: 'The AP framework sorts computing innovations into physical devices, nonphysical software, and nonphysical computing concepts. Which of these is a nonphysical computing concept?',
    options: ['A fitness tracker', 'Online banking', 'A photo-editing program', 'A self-driving car'],
    correctIndex: 1,
    explanation: 'Online banking, like e-commerce, is an idea that depends on programs but is not one device or one application. A tracker and a car are physical innovations, and a photo editor is nonphysical software.',
  },
  {
    id: 'cpcl-ent-5b', partNumber: 5, partTitle: 'Computing Innovations and Their Purpose',
    question: 'A smart thermostat program reads the room temperature from a sensor and turns on a heater when the room is too cold. Which of these is an output of the program?',
    options: ['The command sent to turn the heat on', 'The temperature reading from the sensor', 'The user\'s chosen target temperature', 'The time of day used in its schedule'],
    correctIndex: 0,
    explanation: 'Output is data the program sends to a device, here the command that switches the heater on. The sensor reading, the chosen target and the time are inputs the program uses to decide.',
  },
  {
    id: 'cpcl-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'Four teammates will each write one procedure of a quiz app and then combine them. What should they agree on before anyone starts coding?',
    options: ['Which teammate will present the finished app', 'What color scheme the screens will use', 'How many lines of code each person writes', 'The name, inputs and result of every piece'],
    correctIndex: 3,
    explanation: 'Agreeing on each procedure\'s name, parameters and return value lets the pieces fit together when they are combined. Each member can then test a piece on its own before it is added.',
  },
  {
    id: 'cpcl-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A tester finds that checkAnswer("b", "B") returns false. Which feedback is most useful to the teammate who wrote the procedure?',
    options: ['Your procedure is broken and needs fixing', 'checkAnswer fails sometimes, so look at it', 'You should test your own code better next time', 'It gave false for b and B, though true was expected'],
    correctIndex: 3,
    explanation: 'Useful feedback is specific and about the work: the failing input, the expected result and the actual result. The other comments give no way to reproduce the problem.',
  },
  {
    id: 'cpcl-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Which situation shows effective collaboration rather than just many people working in the same room?',
    options: ['The loudest member makes each decision quickly', 'Each member codes alone and merges at the end', 'Every member\'s ideas are heard and critiqued fairly', 'The team adds more members to finish sooner'],
    correctIndex: 2,
    explanation: 'Effective collaboration is inclusive: every voice contributes, and feedback targets the ideas, not the people. One dominant voice or isolated work loses the benefit of diverse perspectives.',
  },
  {
    id: 'cpcl-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'A program divides a total by the number of entries in a list. It works for most lists but halts with an error message when the list is empty. What kind of error is this?',
    options: ['A run-time error', 'A syntax error', 'An overflow error', 'A logic error'],
    correctIndex: 0,
    explanation: 'With an empty list the program divides by zero while it is running, which stops it. The code follows the language rules, so it is not a syntax error.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Collaboration Tools, Testing Strategies, and Program Correctness' },
    { partNumber: 2, partTitle: 'Diverse Perspectives and Interpersonal Skills' },
    { partNumber: 3, partTitle: 'Pair Programming, Online Tools, and Crowdsourcing' },
    { partNumber: 4, partTitle: 'Gathering Input From Users' },
    { partNumber: 5, partTitle: 'Computing Innovations and Their Purpose' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
