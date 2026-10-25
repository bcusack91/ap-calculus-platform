/**
 * Entrance Quiz — Word Problems with Whole Numbers (ASVAB Arithmetic Reasoning) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Word Problems on the AR Subtest
  {
    id: 'ar-whole-number-problems-ent-1a',
    question: 'A recruit does 35 push-ups a day for 6 days. How many push-ups does she do in all?',
    options: ['41', '29', '210', '245'],
    correctIndex: 2,
    explanation: 'The same 35 push-ups repeat for 6 days, so multiply: $35 \\times 6 = 180 + 30 = 210$. The answer 41 adds the two numbers, 29 subtracts them, and 245 multiplies by 7, as if she did them for a full week.',
    partNumber: 1,
    partTitle: 'Word Problems on the AR Subtest',
  },
  {
    id: 'ar-whole-number-problems-ent-1b',
    question: 'Which statement about the Arithmetic Reasoning subtest of the CAT-ASVAB is true?',
    options: ['A basic four-function calculator appears on the screen', 'You may skip a question and come back to it later', 'Calculators aren\'t allowed; you use scratch paper', 'Every question offers five answer choices to pick from'],
    correctIndex: 2,
    explanation: 'No version of the ASVAB allows a calculator, and at MEPS you work on scratch paper. There is no on-screen calculator, you cannot go back to a question once you answer it, and every question has four answer choices, not five.',
    partNumber: 1,
    partTitle: 'Word Problems on the AR Subtest',
  },
  // Part 2 — Turning Words into Operations
  {
    id: 'ar-whole-number-problems-ent-2a',
    question: 'Parking Lot A holds 315 vehicles and Parking Lot B holds 178. How many more vehicles does Lot A hold?',
    options: ['493', '137', '263', '147'],
    correctIndex: 1,
    explanation: '"How many more" compares, so subtract: $315 - 178 = 137$ (check: $178 + 137 = 315$). The answer 493 adds the two lots because of the word "more"; 263 subtracts the smaller digit from the larger in each column; 147 forgets to reduce the tens digit after borrowing.',
    partNumber: 2,
    partTitle: 'Turning Words into Operations',
  },
  {
    id: 'ar-whole-number-problems-ent-2b',
    question: 'A crate weighed 214 pounds after 58 pounds of gear were taken out of it. How much did the crate weigh before the gear was removed?',
    options: ['156', '262', '12,412', '272'],
    correctIndex: 3,
    explanation: '$\\text{weight before} - 58 = 214$, so undo the subtraction: $214 + 58 = 272$ pounds. The answer 156 subtracts again, which can\'t be right because the crate was heavier before; 262 forgets to carry from $4 + 8 = 12$; 12,412 multiplies the two numbers.',
    partNumber: 2,
    partTitle: 'Turning Words into Operations',
  },
  // Part 3 — Multi-Step Problems and Order of Operations
  {
    id: 'ar-whole-number-problems-ent-3a',
    question: 'Marco buys 2 pairs of work boots at \\$65 a pair and a belt for \\$18. He pays with two \\$100 bills. How much change does he get?',
    options: ['\\$52', '\\$148', '\\$117', '\\$70'],
    correctIndex: 0,
    explanation: 'Boots: $2 \\times 65 = 130$. Total: $130 + 18 = 148$. Change: $200 - 148 = 52$, so \\$52. \\$148 is the total spent, one step early; \\$117 charges for only one pair of boots; \\$70 forgets the belt.',
    partNumber: 3,
    partTitle: 'Multi-Step Problems and Order of Operations',
  },
  {
    id: 'ar-whole-number-problems-ent-3b',
    question: 'What is the value of $20 + 16 \\div 4 \\times 2$?',
    options: ['9', '18', '22', '28'],
    correctIndex: 3,
    explanation: 'Divide and multiply first, left to right: $16 \\div 4 = 4$, then $4 \\times 2 = 8$. Then add: $20 + 8 = 28$. The answer 18 works straight left to right, adding first; 22 multiplies $4 \\times 2$ before dividing; 9 adds first and stops after dividing.',
    partNumber: 3,
    partTitle: 'Multi-Step Problems and Order of Operations',
  },
  // Part 4 — Measurement: Units, Perimeter and Area
  {
    id: 'ar-whole-number-problems-ent-4a',
    question: 'A training video runs 2 hours 15 minutes. How many minutes long is the video?',
    options: ['135', '17', '120', '215'],
    correctIndex: 0,
    explanation: 'Hours to minutes is big to small, so multiply: $2 \\times 60 + 15 = 135$ minutes. The answer 215 reads 2:15 as if it were the number 215, 120 forgets the extra 15 minutes, and 17 just adds 2 and 15.',
    partNumber: 4,
    partTitle: 'Measurement: Units, Perimeter and Area',
  },
  {
    id: 'ar-whole-number-problems-ent-4b',
    question: 'A hallway 9 ft wide and 21 ft long will be covered with rubber matting. Matting costs \\$20 per square yard. What will the matting cost?',
    options: ['\\$3,780', '\\$420', '\\$1,260', '\\$1,200'],
    correctIndex: 1,
    explanation: 'Area: $9 \\times 21 = 189$ sq ft, and $189 \\div 9 = 21$ sq yd (or 3 yd by 7 yd). Cost: $21 \\times 20 = 420$, so \\$420. \\$3,780 never converts to square yards, \\$1,260 divides by 3 instead of 9, and \\$1,200 prices the perimeter (60 ft).',
    partNumber: 4,
    partTitle: 'Measurement: Units, Perimeter and Area',
  },
  // Part 5 — Remainders, Rounding Up and Estimation
  {
    id: 'ar-whole-number-problems-ent-5a',
    question: 'An office must store 245 files. Each storage box holds 30 files. How many boxes are needed to store all the files?',
    options: ['8', '5', '215', '9'],
    correctIndex: 3,
    explanation: '$245 \\div 30 = 8$ remainder 5, because $8 \\times 30 = 240$. The last 5 files still need a box, so 9 boxes. The answer 8 rounds down and leaves 5 files out, 5 is the remainder, and 215 subtracts one box instead of dividing.',
    partNumber: 5,
    partTitle: 'Remainders, Rounding Up and Estimation',
  },
  {
    id: 'ar-whole-number-problems-ent-5b',
    question: 'A coach splits 58 players into teams of 7. Only full teams can play. How many players are left without a team?',
    options: ['8', '2', '9', '51'],
    correctIndex: 1,
    explanation: '$58 \\div 7 = 8$ remainder 2, because $7 \\times 8 = 56$. The question asks for the leftovers, so the remainder is the answer: 2 players. The answer 8 is the number of full teams, 9 rounds up, and 51 subtracts one team instead of dividing.',
    partNumber: 5,
    partTitle: 'Remainders, Rounding Up and Estimation',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'ar-whole-number-problems-ent-6a',
    question: 'A supply room had 120 blankets. It then received 6 boxes, each holding 25 blankets. How many blankets are in the supply room now?',
    options: ['270', '150', '151', '3,000'],
    correctIndex: 0,
    explanation: 'New blankets: $6 \\times 25 = 150$. Add the starting amount: $120 + 150 = 270$. The answer 150 forgets the 120 blankets already there, 151 adds every number in the story, and 3,000 multiplies the starting amount by 25.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'ar-whole-number-problems-ent-6b',
    question: 'Jo earns \\$14 an hour and worked 30 hours this week. Her employer takes out \\$62 for her health plan. What is Jo\'s take-home pay for the week?',
    options: ['\\$358', '\\$420', '\\$482', '\\$368'],
    correctIndex: 0,
    explanation: 'Pay: $30 \\times 14 = 420$. Take-home: $420 - 62 = 358$, so \\$358. \\$420 is her pay before the deduction, one step early; \\$482 adds the deduction instead of subtracting it; \\$368 forgets to reduce the tens digit after borrowing.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ar-whole-number-problems-ent-7a',
    question: 'A rectangular yard is 40 ft by 25 ft. Fencing comes in 12-foot rolls. How many rolls are needed to fence all four sides of the yard?',
    options: ['6', '10', '11', '84'],
    correctIndex: 2,
    explanation: 'Perimeter: $2 \\times 40 + 2 \\times 25 = 130$ ft. Rolls: $130 \\div 12 = 10$ remainder 10, and the last 10 feet still need a roll, so 11. The answer 10 rounds down, 84 uses the area (1,000 sq ft) instead of the distance around, and 6 fences only two sides.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'ar-whole-number-problems-ent-7b',
    question: 'Pat earns \\$15 an hour. Last week she worked 7 hours each day Monday through Friday and 4 hours on Saturday. How much did she earn last week?',
    options: ['\\$165', '\\$525', '\\$480', '\\$585'],
    correctIndex: 3,
    explanation: 'Hours: $5 \\times 7 + 4 = 39$. Pay: $39 \\times 15 = 585$, so \\$585. \\$525 leaves out Saturday, \\$165 adds one day of each ($7 + 4 = 11$ hours), and \\$480 counts Monday through Friday as only 4 days.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Word Problems on the AR Subtest' },
    { partNumber: 2, partTitle: 'Turning Words into Operations' },
    { partNumber: 3, partTitle: 'Multi-Step Problems and Order of Operations' },
    { partNumber: 4, partTitle: 'Measurement: Units, Perimeter and Area' },
    { partNumber: 5, partTitle: 'Remainders, Rounding Up and Estimation' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
