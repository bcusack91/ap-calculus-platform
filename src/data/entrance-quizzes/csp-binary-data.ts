/**
 * Entrance Quiz — Binary & Data Representation (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cpbd-ent-1a', partNumber: 1, partTitle: 'Binary Numbers, Conversions, and Digital Information',
    question: 'What is the binary number 100110 in decimal?',
    options: ['38', '25', '19', '76'],
    correctIndex: 0,
    explanation: 'Reading from the right, the place values are 1, 2, 4, 8, 16 and 32. The 1 bits are in the 32, 4 and 2 places, so the value is 32 + 4 + 2 = 38.',
  },
  {
    id: 'cpbd-ent-1b', partNumber: 1, partTitle: 'Binary Numbers, Conversions, and Digital Information',
    question: 'What is the decimal number 27 in binary?',
    options: ['11101', '10111', '11010', '11011'],
    correctIndex: 3,
    explanation: '27 = 16 + 8 + 2 + 1, so the 16, 8, 2 and 1 places hold a 1 and the 4 place holds a 0, giving 11011.',
  },
  {
    id: 'cpbd-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'A school wants to give each of its 40 lockers a different binary code, using the same number of bits for every code. What is the fewest bits that will work?',
    options: ['5', '40', '6', '7'],
    correctIndex: 2,
    explanation: '5 bits give only $2^{5}$ = 32 patterns, which is too few, while 6 bits give 64. The smallest n with $2^{n}$ of at least 40 is 6.',
  },
  {
    id: 'cpbd-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'A code uses 7 bits. If one more bit is added to every code, how does the number of distinct values change?',
    options: ['It grows by one, from 128 to 129 values', 'It doubles, from 128 to 256', 'It grows by eight, from 128 to 136 values', 'It stays the same, at 128 values'],
    correctIndex: 1,
    explanation: 'Each added bit can be 0 or 1 for every existing pattern, so the number of patterns doubles. 7 bits give 128 values and 8 bits give 256.',
  },
  {
    id: 'cpbd-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A file contains the byte 01000001. What does that byte represent?',
    options: ['The number 65, since bytes always store numbers', 'The letter A, since files always store text', 'It depends on the program reading it', 'A shade of gray, since bytes store pixels'],
    correctIndex: 2,
    explanation: 'The same sequence of bits can represent a number, a character, a color channel or something else. Its meaning comes from the program and the convention it uses to read the bits.',
  },
  {
    id: 'cpbd-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A recording app doubles the number of samples it takes each second when it records a song. What is the effect on the recording?',
    options: ['An exact copy of the analog sound', 'The same file size with better quality', 'A smaller file with lower quality', 'A closer copy of the sound that uses more bits'],
    correctIndex: 3,
    explanation: 'Sampling approximates a smooth analog signal with measurements at regular intervals. More frequent samples give a closer approximation, but each sample takes bits, so the file grows; it is still never exact.',
  },
  {
    id: 'cpbd-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A router forwards a packet without knowing whether it holds part of a video or part of an email. Why is this possible?',
    options: ['Videos and emails use the same file format', 'Every kind of data travels as bits', 'Routers decode each file before sending it', 'Emails are turned into videos for the trip'],
    correctIndex: 1,
    explanation: 'Text, images, sound and video are all represented as bits, so the network can move them the same way. Only the programs at the ends interpret what the bits mean.',
  },
  {
    id: 'cpbd-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A music app stores a smooth, real-world sound as a series of digital samples. Using digital data to approximate analog data in this way is an example of which idea?',
    options: ['Data encryption', 'Integer overflow', 'Abstraction', 'Round-off error'],
    correctIndex: 2,
    explanation: 'Representing a continuous signal with discrete samples keeps the important features and leaves out detail, which is an abstraction. It does not involve hiding the data or exceeding a bit limit.',
  },
  {
    id: 'cpbd-ent-5a', partNumber: 5, partTitle: 'Limits of Fixed Bits: Overflow and Round-off',
    question: 'A language stores each integer in 8 bits, so it can hold 0 to 255. What happens when a program in that language computes 200 + 100?',
    options: ['It rounds 300 to the nearest real value', 'It stores 300, since sums are exact', 'It overflows, because 300 needs more than 8 bits', 'It refuses to run the addition'],
    correctIndex: 2,
    explanation: 'The result, 300, needs more bits than a fixed 8-bit integer has, which is an overflow error: the program stops or stores a wrong value. The exam\'s own pseudocode has no such limit, but fixed-bit languages do.',
  },
  {
    id: 'cpbd-ent-5b', partNumber: 5, partTitle: 'Limits of Fixed Bits: Overflow and Round-off',
    question: 'Which list of binary numbers is ordered from least to greatest?',
    options: ['0111, 1001, 1010, 1100', '1001, 0111, 1100, 1010', '1100, 1010, 1001, 0111', '0111, 1010, 1001, 1100'],
    correctIndex: 0,
    explanation: 'In decimal the values are 7, 9, 10 and 12. Comparing from the left, the first position where two equal-length numbers differ decides which is larger.',
  },
  {
    id: 'cpbd-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'An uncompressed image is 200 pixels wide and 100 pixels tall, and each pixel uses 3 bytes. How much storage does the image need?',
    options: ['20,000 bytes', '60,000 bytes', '480,000 bytes', '600 bytes'],
    correctIndex: 1,
    explanation: 'There are 200 × 100 = 20,000 pixels, and each takes 3 bytes, so the image needs 60,000 bytes. 480,000 is the size in bits.',
  },
  {
    id: 'cpbd-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A company needs a unique binary ID for each of 1,500 products, with every ID the same length. What is the fewest bits per ID?',
    options: ['10', '12', '1,500', '11'],
    correctIndex: 3,
    explanation: '10 bits give $2^{10}$ = 1,024 IDs, which is not enough, while 11 bits give 2,048. The smallest n with $2^{n}$ of at least 1,500 is 11.',
  },
  {
    id: 'cpbd-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'What is the largest whole number that can be stored in 7 bits, counting up from 0?',
    options: ['127', '64', '128', '255'],
    correctIndex: 0,
    explanation: '7 bits give $2^{7}$ = 128 different values. Starting from 0, they cover 0 through 127, so the largest is 127.',
  },
  {
    id: 'cpbd-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'A program adds 0.1 and 0.2 and stores the sum in total. The test IF (total = 0.3) turns out to be false. What explains this?',
    options: ['The integer total overflowed its fixed bits', 'The = test compares the values as text', 'The program rounded total up to 1', 'Those decimals are kept only approximately in bits'],
    correctIndex: 3,
    explanation: 'Real numbers are stored in a fixed number of bits, and values such as 0.1 cannot be written exactly in binary. The tiny round-off error makes the sum slightly different from 0.3.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Binary Numbers, Conversions, and Digital Information' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Limits of Fixed Bits: Overflow and Round-off' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
