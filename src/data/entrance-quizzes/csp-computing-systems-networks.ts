/**
 * Entrance Quiz — Computing Systems & Networks (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'ccsn-ent-1a', partNumber: 1, partTitle: 'Devices, Networks, and the Internet',
    question: 'A large video file is sent from one computer to another across the Internet. Which statement about its packets is correct?',
    options: ['Packets may take different paths and arrive out of order', 'Every packet must follow the same path and arrive in order', 'Packets carry only data, with no extra information', 'One lost packet shuts down the whole connection'],
    correctIndex: 0,
    explanation: 'Each packet holds a chunk of data plus metadata for routing and reassembly, and the network routes each one on its own. They can arrive in order, out of order, or not at all.',
  },
  {
    id: 'ccsn-ent-1b', partNumber: 1, partTitle: 'Devices, Networks, and the Internet',
    question: 'A school\'s grading program runs on two servers and on every teacher\'s laptop, and they all work together to record and report grades. Which term best describes this whole setup?',
    options: ['A single computing device', 'A computing system', 'A communication protocol', 'A data stream'],
    correctIndex: 1,
    explanation: 'A computing system is a group of computing devices and programs working together for a common purpose. Each laptop or server alone is a computing device.',
  },
  {
    id: 'ccsn-ent-2a', partNumber: 2, partTitle: 'Key Processes: Paths and Routing',
    question: 'A network has these direct connections: P–Q, P–R, Q–S, R–S, S–T, S–U and T–U. Which single device\'s failure would stop all communication between P and U?',
    options: ['S', 'R', 'Q', 'T'],
    correctIndex: 0,
    explanation: 'Every path from P passes through Q or R and then must go through S to reach U or T. Losing Q, R or T still leaves another path, so S is the single point of failure.',
  },
  {
    id: 'ccsn-ent-2b', partNumber: 2, partTitle: 'Key Processes: Paths and Routing',
    question: 'About how long does it take to send a 300-megabyte file over a connection with a bandwidth of 60 megabits per second?',
    options: ['5 seconds', '80 seconds', '40 seconds', '2,400 seconds'],
    correctIndex: 2,
    explanation: 'The file is 300 × 8 = 2,400 megabits, and 2,400 ÷ 60 = 40 seconds. Forgetting to convert bytes to bits gives the 5-second answer.',
  },
  {
    id: 'ccsn-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples: Packets and Protocols',
    question: 'A live video-call app would rather lose a few packets than wait for missing ones to be resent. Which protocol best fits that choice?',
    options: ['UDP, which skips checking that packets arrive', 'HTTP, which requests and delivers Web pages', 'TCP, which resends any packet that goes missing', 'IP, which only addresses packets'],
    correctIndex: 0,
    explanation: 'UDP sends packets without confirming delivery or order, so it is quicker but may lose data. TCP guarantees delivery by resending, which adds delay.',
  },
  {
    id: 'ccsn-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples: Packets and Protocols',
    question: 'Which statement correctly describes how the Internet and the World Wide Web are related?',
    options: ['The Internet is a part of the Web that handles email', 'The Web is a service that runs on the Internet', 'The Web and the Internet are two names for one network', 'The Web uses TCP, while the Internet uses only HTTP'],
    correctIndex: 1,
    explanation: 'The Internet is the network of networks; the Web is one service that runs on it, using HTTP. The Internet also carries many other kinds of traffic.',
  },
  {
    id: 'ccsn-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions: Fault Tolerance and Access',
    question: 'A company adds a second, separate connection between each pair of its office networks. What is the main tradeoff?',
    options: ['Faster single packets in return for weaker security', 'Lower cost in return for reduced reliability', 'More cost in return for fault tolerance', 'Open protocols in return for slower routing'],
    correctIndex: 2,
    explanation: 'Redundant connections cost extra resources, but if one link fails, data can travel the other, so the system keeps working.',
  },
  {
    id: 'ccsn-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions: Fault Tolerance and Access',
    question: 'Which situation is an example of the digital divide?',
    options: ['Rural students lack home broadband for class', 'A website loads slowly because its server is overloaded', 'A school blocks certain websites on its own network', 'A user forgets a password and is locked out'],
    correctIndex: 0,
    explanation: 'The digital divide is unequal access to devices and the Internet based on factors such as geography or income. The other situations are technical or account problems.',
  },
  {
    id: 'ccsn-ent-5a', partNumber: 5, partTitle: 'Parallel and Distributed Computing',
    question: 'A program runs a 15-second setup step that cannot be split, then six independent tasks of 5 seconds each. With 3 processors, how long does it take, and what is the speedup?',
    options: ['15 seconds, speedup 3', '25 seconds, speedup 3', '10 seconds, speedup 4.5', '25 seconds, speedup 1.8'],
    correctIndex: 3,
    explanation: 'Sequentially it takes 15 + 30 = 45 seconds. With 3 processors each runs two tasks, so it takes 15 + 10 = 25 seconds, and the speedup is 45 ÷ 25 = 1.8.',
  },
  {
    id: 'ccsn-ent-5b', partNumber: 5, partTitle: 'Parallel and Distributed Computing',
    question: 'A program has a sequential setup step followed by four independent tasks. What happens as the number of processors grows from 4 to 16?',
    options: ['Time keeps falling in proportion to the processors added', 'Time rises because each processor reruns the setup', 'Time stops falling once every job has a processor of its own', 'Time falls to zero with enough processors'],
    correctIndex: 2,
    explanation: 'With four tasks, a fifth processor has nothing to do, and the setup step can never be split. The sequential portion limits how much faster the program can get.',
  },
  {
    id: 'ccsn-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'Four independent tasks take 9, 7, 5 and 3 seconds. With 2 processors and the best possible split, how long does the whole job take?',
    options: ['9 seconds', '12 seconds', '15 seconds', '24 seconds'],
    correctIndex: 1,
    explanation: 'Splitting the tasks as 9 + 3 and 7 + 5 gives each processor 12 seconds, and the job ends when the busier processor finishes. Any other split leaves one processor with more than 12 seconds.',
  },
  {
    id: 'ccsn-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A network has these direct connections: A–B, B–C, B–D, C–E and D–E. Adding which one connection removes the single point of failure between A and E?',
    options: ['C–D', 'B–E', 'B–C', 'A–C'],
    correctIndex: 3,
    explanation: 'A connects only to B, so B is on every path to E. A new A–C link gives a path that bypasses B; the other choices still route everything through B.',
  },
  {
    id: 'ccsn-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Which statement about bandwidth is correct?',
    options: ['It is the time one packet takes to arrive', 'It is the number of devices on a path', 'It is the most data sent per unit of time', 'It is the number of bytes stored on a server'],
    correctIndex: 2,
    explanation: 'Bandwidth is the maximum amount of data that can be sent in a fixed amount of time, usually measured in bits per second.',
  },
  {
    id: 'ccsn-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'A task takes 80 seconds when run sequentially and 32 seconds when run in parallel. What is the speedup?',
    options: ['0.4', '48', '3.2', '2.5'],
    correctIndex: 3,
    explanation: 'Speedup is the sequential time divided by the parallel time: 80 ÷ 32 = 2.5.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Devices, Networks, and the Internet' },
    { partNumber: 2, partTitle: 'Key Processes: Paths and Routing' },
    { partNumber: 3, partTitle: 'Patterns & Examples: Packets and Protocols' },
    { partNumber: 4, partTitle: 'Connections & Interactions: Fault Tolerance and Access' },
    { partNumber: 5, partTitle: 'Parallel and Distributed Computing' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
