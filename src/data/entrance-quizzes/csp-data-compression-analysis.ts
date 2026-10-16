/**
 * Entrance Quiz — Data Compression & Analysis (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cpdc-ent-1a', partNumber: 1, partTitle: 'Lossless vs Lossy, Compression Techniques, and Data Analysis',
    question: 'A compression scheme writes each run of a repeated letter as a count followed by the letter, so aaab becomes 3a1b. How is wwwwwbbwww encoded?',
    options: ['5w2b', '5w2b3w', 'w5b2w3', '8w2b'],
    correctIndex: 1,
    explanation: 'The text has three runs: five w, two b, then three w. Each run is written in order as count then letter, and the separate runs of w stay separate, giving 5w2b3w.',
  },
  {
    id: 'cpdc-ent-1b', partNumber: 1, partTitle: 'Lossless vs Lossy, Compression Techniques, and Data Analysis',
    question: 'A hospital sends X-ray images that doctors use for diagnosis, and a news site sends small thumbnail photos to phones on slow connections. Which choice of compression fits best?',
    options: ['X-rays lossy, thumbnails lossless', 'X-rays lossless, thumbnails lossy', 'X-rays and thumbnails both lossy', 'X-rays and thumbnails both lossless'],
    correctIndex: 1,
    explanation: 'A diagnostic image must be rebuilt exactly, so it needs lossless compression. For the thumbnails, size and transfer time matter more than tiny details, so lossy compression fits.',
  },
  {
    id: 'cpdc-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'Which file would lossless compression be able to shrink the most?',
    options: ['A long string of randomly chosen characters', 'A file that was already compressed losslessly', 'A long text that repeats one word over and over', 'A five-letter word with no repeated letters'],
    correctIndex: 2,
    explanation: 'Lossless compression saves space by replacing redundancy, such as repeated patterns, with shorter codes. Random or already compressed data has little redundancy left to remove.',
  },
  {
    id: 'cpdc-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'A text file is compressed losslessly from 80 KB to 30 KB. Which statement about the compressed file is true?',
    options: ['It holds less than half of the original text', 'It can be decoded only to an approximation', 'Decoding it gives back the exact original', 'It dropped words that readers would not notice'],
    correctIndex: 2,
    explanation: 'Lossless compression stores exactly the same information in fewer bits, and decoding rebuilds the original exactly. Fewer bits does not necessarily mean less information.',
  },
  {
    id: 'cpdc-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'The text banana bandana has 14 characters, counting the space. Using the key # = "an", every "an" is replaced by #. How many characters long is the compressed text?',
    options: ['12', '10', '8', '14'],
    correctIndex: 1,
    explanation: 'The text contains "an" four times, two in each word, so the result is b##a b#d#a. Each replacement turns two characters into one, saving 4, so the length is 10.',
  },
  {
    id: 'cpdc-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'Which situation is the best fit for lossy compression?',
    options: ['Streaming a movie to a phone on a slow network', 'Storing signed contracts for a law firm', 'Backing up a spreadsheet of bank balances', 'Archiving the source code of a program'],
    correctIndex: 0,
    explanation: 'Lossy compression fits when minimizing size or transmission time matters most and small losses in detail are acceptable. Code, contracts and financial records must be rebuilt exactly, so they need lossless compression.',
  },
  {
    id: 'cpdc-ent-4a', partNumber: 4, partTitle: 'Extracting Information and Metadata',
    question: 'A photographer corrects the date stored in a photo\'s metadata. What happens to the image itself?',
    options: ['It is recompressed with lower quality', 'Its colors shift to match the new date', 'The pixels are unchanged', 'It is deleted and saved again as new data'],
    correctIndex: 2,
    explanation: 'Metadata describe the data but are separate from it, so editing them does not change the primary data. Every pixel stays exactly as it was.',
  },
  {
    id: 'cpdc-ent-4b', partNumber: 4, partTitle: 'Extracting Information and Metadata',
    question: 'A researcher has a data set of students\' test scores and wants to know whether hours of sleep affect those scores. What is the main limitation of this data set?',
    options: ['Programs cannot analyze test scores', 'The data must be compressed first', 'Scores are metadata about students', 'It needs another source with those habits'],
    correctIndex: 3,
    explanation: 'A single data source often lacks what is needed to draw a conclusion. Sleep information must be combined with the scores, and even then a correlation would not prove that one causes the other.',
  },
  {
    id: 'cpdc-ent-5a', partNumber: 5, partTitle: 'Challenges of Processing Data',
    question: 'Which challenge does each example show? Example 1: a school roster lists a student\'s age as 150. Example 2: some survey takers left the age field blank.',
    options: ['1 is incomplete data, 2 is invalid data', '1 is invalid data, 2 is incomplete data', '1 is invalid data, 2 needs cleaning', '1 needs combining, 2 is incomplete data'],
    correctIndex: 1,
    explanation: 'An age of 150 is a value that cannot be correct, which makes it invalid data. A field left blank is missing a value, which makes the data incomplete.',
  },
  {
    id: 'cpdc-ent-5b', partNumber: 5, partTitle: 'Challenges of Processing Data',
    question: 'A restaurant collects reviews only from customers who have joined its rewards program and then uses them to judge what all diners think. What is the main concern?',
    options: ['Enough reviews will cancel out any bias', 'The data are too small to store', 'Reviews cannot contain any bias', 'The results may lean toward its regular guests'],
    correctIndex: 3,
    explanation: 'Bias often comes from the source of the data: rewards members are not typical of all diners. Collecting more reviews from the same group does not remove that bias.',
  },
  {
    id: 'cpdc-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop: Using Programs With Data',
    question: 'What is displayed?\nnums ← [12, 7, 30, 18, 5]\nkept ← []\nFOR EACH n IN nums\n{\nIF (n MOD 3 = 0)\n{\nAPPEND(kept, n)\n}\n}\nDISPLAY(kept)',
    options: ['[12, 30, 18]', '[7, 5]', '[12, 18]', '[12, 30, 18, 5]'],
    correctIndex: 0,
    explanation: 'The program filters the list, keeping each value that leaves remainder 0 when divided by 3. 12, 30 and 18 qualify and are appended in order; 7 and 5 do not.',
  },
  {
    id: 'cpdc-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop: Using Programs With Data',
    question: 'gpas is the list [3.2, 3.9, 2.8, 3.5]. What is displayed?\nbest ← gpas[1]\nFOR EACH g IN gpas\n{\nIF (g < best)\n{\nbest ← g\n}\n}\nDISPLAY(best)',
    options: ['3.9', '3.2', '2.8', '3.5'],
    correctIndex: 2,
    explanation: 'Lists start at index 1, so best begins as 3.2. The test g < best replaces it with any smaller value, so the program finds the minimum, 2.8.',
  },
  {
    id: 'cpdc-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Which statement about compression is accurate?',
    options: ['Lossless compression shrinks every file to half its size', 'Lossy files can be rebuilt exactly with a key', 'Compressed files always hold less information', 'Lossy compression can shrink data more than lossless'],
    correctIndex: 3,
    explanation: 'Lossy compression keeps only an approximation, so it can usually remove more bits than lossless compression. Lossless savings depend on the data, and they never lose information.',
  },
  {
    id: 'cpdc-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'A scheme that writes each run of a repeated letter as a count followed by the letter is applied to the text abcdef. What happens to its length?',
    options: ['It grows longer', 'It cannot be encoded at all', 'It keeps exactly the same length', 'It shrinks to half its length'],
    correctIndex: 0,
    explanation: 'Each letter is a run of one, so the encoding is 1a1b1c1d1e1f, which has 12 characters instead of 6. Compression depends on the data, and data without repeats can get bigger.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Lossless vs Lossy, Compression Techniques, and Data Analysis' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Extracting Information and Metadata' },
    { partNumber: 5, partTitle: 'Challenges of Processing Data' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop: Using Programs With Data' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
