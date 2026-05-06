/**
 * Entrance Quiz — Binary & Data Representation (AP CS Principles)
 * 14 questions · 7 parts (2 per part)
 * Big Idea 2: bits, bytes, binary numbers, ASCII, color (RGB), sampling, limits of representation.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cspb-ent-1a', question: 'A bit is BEST defined as:', options: ['Eight binary digits', 'A single binary digit, with a value of either 0 or 1', 'A unit of network speed', 'A pixel on a display'], correctIndex: 1, explanation: 'A bit (binary digit) is the smallest unit of digital information. Eight bits is a byte.', partNumber: 1, partTitle: 'Bits & Binary Numbers' },
  { id: 'cspb-ent-1b', question: 'A field is allocated 4 bits. What is the MAXIMUM number of distinct values it can represent?', options: ['4', '8', '16', '32'], correctIndex: 2, explanation: 'n bits represent 2^n distinct values; 2^4 = 16. (For unsigned integers this is values 0-15.)', partNumber: 1, partTitle: 'Bits & Binary Numbers' },
  { id: 'cspb-ent-2a', question: 'What is the decimal value of the binary number 1101?', options: ['7', '11', '13', '15'], correctIndex: 2, explanation: '1101 in binary = 1*8 + 1*4 + 0*2 + 1*1 = 13.', partNumber: 2, partTitle: 'Number Conversion' },
  { id: 'cspb-ent-2b', question: 'What is the binary representation of the decimal number 19?', options: ['10001', '10011', '11001', '11011'], correctIndex: 1, explanation: '19 = 16 + 2 + 1 = 2^4 + 2^1 + 2^0 = 10011.', partNumber: 2, partTitle: 'Number Conversion' },
  { id: 'cspb-ent-3a', question: 'In an RGB color, each of the three channels is stored in 8 bits. How many distinct colors can this scheme represent?', options: ['256', '768', '16,777,216 (about 16.7 million)', '1,024'], correctIndex: 2, explanation: 'Each channel has 2^8 = 256 levels. Total = 256 * 256 * 256 = 2^24, about 16.7 million colors.', partNumber: 3, partTitle: 'Representing Text & Color' },
  { id: 'cspb-ent-3b', question: 'The character "A" is stored on a computer as the byte 01000001. What kind of data representation does this MOST directly illustrate?', options: ['RGB color encoding', 'Encoding of text using a character set such as ASCII or Unicode', 'Audio sampling', 'Lossy image compression'], correctIndex: 1, explanation: 'Mapping characters to fixed binary values is a character encoding. ASCII represents "A" as 65 (= 01000001 in binary).', partNumber: 3, partTitle: 'Representing Text & Color' },
  { id: 'cspb-ent-4a', question: 'When a continuous analog signal (such as a sound wave) is converted to digital data, the process is called:', options: ['Compression', 'Sampling', 'Encryption', 'Encoding to ASCII'], correctIndex: 1, explanation: 'Sampling records the value of the signal at regular intervals. Each sample is then quantized into a finite set of binary values.', partNumber: 4, partTitle: 'Sampling Analog Data' },
  { id: 'cspb-ent-4b', question: 'A music app records audio at a higher sampling rate. The MOST direct effect on the resulting file is that it:', options: ['Becomes smaller', 'Captures finer detail of the sound but uses more storage', 'Becomes lossless automatically', 'Becomes encrypted'], correctIndex: 1, explanation: 'Higher sampling rate = more samples per second = finer fidelity AND larger file size. Compression and encryption are separate concerns.', partNumber: 4, partTitle: 'Sampling Analog Data' },
  { id: 'cspb-ent-5a', question: 'A program uses an 8-bit unsigned integer to count clicks. The user clicks the button 256 times. What is MOST likely to happen?', options: ['The count is correct because 256 fits in 8 bits', 'An overflow error occurs because 8 bits can only represent values 0-255', 'The program automatically converts to floating-point', 'The program runs faster'], correctIndex: 1, explanation: 'Eight unsigned bits represent 0 through 255. Trying to store 256 exceeds the range, causing overflow (the value may wrap to 0).', partNumber: 5, partTitle: 'Limits of Representation' },
  { id: 'cspb-ent-5b', question: 'A scientist notices that adding 0.1 + 0.2 in a program does not give exactly 0.3. The MOST likely reason is:', options: ['Some real numbers cannot be represented exactly in a fixed number of bits, causing a round-off error', 'The computer is broken', 'Programs always produce wrong arithmetic', 'Decimal numbers are not allowed in computers'], correctIndex: 0, explanation: 'Round-off (precision) error: only a finite subset of the real numbers can be exactly represented in a fixed-bit binary format.', partNumber: 5, partTitle: 'Limits of Representation' },
  { id: 'cspb-ent-6a', question: 'A photo file is 3,000 pixels wide x 2,000 pixels tall, with each pixel using 24 bits of color (8 per RGB channel). Approximately how many BYTES are needed to store the raw pixel data (ignoring headers)?', options: ['About 3,000', 'About 18,000,000 (about 18 MB)', 'About 6,000', 'About 144,000'], correctIndex: 1, explanation: 'Pixels = 3,000 * 2,000 = 6,000,000. Each pixel = 24 bits = 3 bytes. Total = 6,000,000 * 3 = 18,000,000 bytes, about 18 MB.', partNumber: 6, partTitle: 'Applied Practice' },
  { id: 'cspb-ent-6b', question: 'A storage system needs to assign a UNIQUE identifier to each of 1,000 students. What is the SMALLEST number of bits required?', options: ['8 bits', '10 bits', '16 bits', '1,000 bits'], correctIndex: 1, explanation: 'Need 2^n >= 1,000. 2^9 = 512 (too few). 2^10 = 1,024 (enough). So 10 bits.', partNumber: 6, partTitle: 'Applied Practice' },
  { id: 'cspb-ent-7a', question: 'Which statement about binary representation is TRUE?', options: ['Different binary sequences can represent different kinds of data depending on the abstraction (e.g., a number, a character, or a color)', 'Each binary sequence has exactly one possible meaning across all programs', 'Binary cannot represent text', 'Binary can only represent positive integers'], correctIndex: 0, explanation: 'A given pattern of bits has meaning only with respect to an interpretation. The same byte 01000001 can be the number 65, the character "A", or one channel of a color.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'cspb-ent-7b', question: 'A programmer needs to store the temperature of an oven, which can range from 0 to 500 degrees in whole degrees. What is the SMALLEST number of bits sufficient to store any value in this range?', options: ['8 bits', '9 bits', '10 bits', '16 bits'], correctIndex: 1, explanation: 'Need 2^n >= 501 distinct values. 2^8 = 256 (too few). 2^9 = 512 (enough). So 9 bits.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Bits & Binary Numbers' },
    { partNumber: 2, partTitle: 'Number Conversion' },
    { partNumber: 3, partTitle: 'Representing Text & Color' },
    { partNumber: 4, partTitle: 'Sampling Analog Data' },
    { partNumber: 5, partTitle: 'Limits of Representation' },
    { partNumber: 6, partTitle: 'Applied Practice' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
