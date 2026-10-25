/**
 * Entrance Quiz — Stated Details and Sequence (ASVAB Paragraph Comprehension) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Detail Questions on the ASVAB'
const P2 = 'Locating Stated Facts'
const P3 = 'Reworded Facts'
const P4 = 'Sequence of Events and Steps'
const P5 = 'Reasons, Comparisons and EXCEPT Questions'
const P6 = 'Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'pc-details-ent-1a',
    question: `The clinic's walk-in hours are 0800 to 1100 on weekdays. Appointments are required for afternoon visits. The clinic is closed on weekends, and patients with urgent problems should go to the emergency room.\n\nAccording to the passage, a patient with an urgent problem on a Saturday should`,
    options: [
      'walk in between 0800 and 1100',
      'go to the emergency room',
      'make an afternoon appointment',
      'wait until the clinic opens Sunday'
    ],
    correctIndex: 1,
    explanation: 'The last sentence says the clinic is closed on weekends and urgent problems go to the emergency room. Walk-in hours apply to weekdays, and the clinic is not open Sunday either.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'pc-details-ent-1b',
    question: 'A question reads: "All of the following are mentioned in the passage EXCEPT…" Which choice should you pick?',
    options: [
      'The choice that sounds most true in real life',
      'The choice stated most clearly in the passage',
      'The one choice the passage does not state',
      'The choice that appears in the first sentence'
    ],
    correctIndex: 2,
    explanation: 'On an EXCEPT question, three choices can be found in the passage; the answer is the one that cannot. Real-life truth does not matter, only the passage.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'pc-details-ent-2a',
    question: `The obstacle course has twelve stations. Recruits must finish it in under fifteen minutes to pass, and they get three attempts during the training cycle.\n\nAccording to the passage, how many attempts do recruits get?`,
    options: ['Three', 'Twelve', 'Fifteen', 'Two'],
    correctIndex: 0,
    explanation: 'The passage says recruits "get three attempts." Twelve is the number of stations and fifteen is the time limit in minutes, a number-swap trap.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'pc-details-ent-2b',
    question: `Three volunteers organized the food drive. Martinez collected donations at the commissary, Okafor sorted them at the chapel, and Lee drove the boxes to the shelter downtown.\n\nAccording to the passage, who sorted the donations?`,
    options: ['Martinez', 'Okafor', 'Lee', 'The shelter staff'],
    correctIndex: 1,
    explanation: 'The name anchor "Okafor" sits next to "sorted them at the chapel." Martinez collected, Lee drove, and the shelter staff are never said to sort anything.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'pc-details-ent-3a',
    question: `Dehydration can set in quickly during summer training. Early signs include headache, dizziness and dark yellow urine.\n\nThe passage states that one early sign of dehydration is`,
    options: ['feeling lightheaded', 'a high fever', 'blurry vision', 'a sore throat'],
    correctIndex: 0,
    explanation: 'Dizziness is reworded as "feeling lightheaded." Fever, blurry vision and a sore throat are not listed.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'pc-details-ent-3b',
    question: `Unlike gasoline engines, diesel engines have no spark plugs. Instead, they squeeze air so tightly that it becomes hot enough to ignite the fuel.\n\nAccording to the passage, a diesel engine ignites its fuel by`,
    options: [
      'using spark plugs to heat the air',
      'compressing air until it is very hot',
      'mixing the fuel with gasoline first',
      'burning the fuel before it enters'
    ],
    correctIndex: 1,
    explanation: '"Squeeze air so tightly that it becomes hot" is reworded as "compressing air until it is very hot." The spark-plug choice copies words from the passage, which says diesels have no spark plugs.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'pc-details-ent-4a',
    question: `Before a parachute jump, jumpers attend a briefing and then put on and check their equipment. A jumpmaster inspects each jumper's gear before they board the aircraft. Once in the air, jumpers wait for the jumpmaster's signal to stand up and hook up.\n\nWhat happens right before the jumpers board the aircraft?`,
    options: [
      'A jumpmaster inspects their gear',
      'They stand up and hook up',
      'They wait for a signal in the air',
      'They attend a briefing'
    ],
    correctIndex: 0,
    explanation: 'The order is briefing → put on and check equipment → jumpmaster inspection → board → wait for the signal in the air. Right before boarding is the inspection.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'pc-details-ent-4b',
    question: `The bridge finally reopened in May. It had closed the previous October, after inspectors found cracks in two support beams. Repairs began in January, once the replacement steel arrived.\n\nWhich of these happened first?`,
    options: [
      'The bridge reopened',
      'Inspectors found cracks in the beams',
      'Repairs began',
      'The replacement steel arrived'
    ],
    correctIndex: 1,
    explanation: 'The cracks were found before the October closing, which came before the steel arrived and repairs began in January, and the bridge reopened last, in May. The first sentence describes the final event.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'pc-details-ent-5a',
    question: `Many hikers carry a whistle, because its sound travels farther than a shout and takes far less energy to make. Three short blasts is a widely recognized call for help.\n\nAccording to the passage, hikers carry whistles because`,
    options: [
      'a whistle carries farther than a voice and takes less effort',
      'park rules require every hiker to carry one',
      'a whistle can be used to signal other hikers on the trail to stop and wait',
      'whistles scare away dangerous wild animals'
    ],
    correctIndex: 0,
    explanation: 'The reason follows "because": the sound travels farther than a shout and takes less energy. Animals, park rules and signaling hikers to stop are never mentioned.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'pc-details-ent-5b',
    question: `A good first-aid kit for a vehicle includes adhesive bandages, gauze pads, medical tape, disposable gloves and a small pair of scissors.\n\nThe passage lists all of the following EXCEPT`,
    options: ['gloves', 'scissors', 'a splint', 'tape'],
    correctIndex: 2,
    explanation: 'Gloves, scissors and tape are all in the list. A splint is not, so it is the exception.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'pc-details-ent-6a',
    question: `The recycling center accepts glass, metal cans and cardboard on Tuesdays and Thursdays. Electronics are accepted only on the first Saturday of each month.\n\nAccording to the passage, which statement is true?`,
    options: [
      'Cardboard is accepted on Thursdays',
      'Electronics are accepted every Tuesday',
      'Metal cans are accepted only once a month',
      'Glass is accepted on Tuesdays and on every Saturday'
    ],
    correctIndex: 0,
    explanation: 'Cardboard is accepted on Tuesdays and Thursdays, so Thursdays is correct. The glass choice is half right (Tuesdays yes, Saturdays no), and the electronics and metal-can choices swap the schedules.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'pc-details-ent-6b',
    question: 'On the CAT-ASVAB, what can you do after you answer a Paragraph Comprehension question?',
    options: [
      'Nothing; you cannot go back to it',
      'Skip ahead and answer it at the end',
      'Flag it for review before the subtest ends',
      'Return to it later to change your answer'
    ],
    correctIndex: 0,
    explanation: 'The CAT-ASVAB does not let you return to a question once you answer it, so check the passage before you click.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'pc-details-ent-7a',
    question: `Hurricanes and tornadoes both have powerful rotating winds. A hurricane, however, can be hundreds of miles wide and last for days, while a tornado is usually less than a mile wide and often lasts only minutes.\n\nAccording to the passage, compared with a tornado, a hurricane`,
    options: [
      'has no rotating winds at all',
      'is larger but lasts only minutes',
      'is smaller but lasts longer',
      'is much larger and lasts longer'
    ],
    correctIndex: 3,
    explanation: 'Hurricanes can be hundreds of miles wide and last for days; tornadoes are under a mile wide and last minutes. The other choices reverse one part of the comparison or contradict the passage.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'pc-details-ent-7b',
    question: `The museum offers free admission to active-duty service members and their families from Memorial Day through Labor Day. Veterans receive half-price tickets all year.\n\nAccording to the passage, veterans`,
    options: [
      'get in free only during the summer',
      'pay half price at any time of year',
      'must show a family member\'s ID card',
      'get in free from Memorial Day to Labor Day'
    ],
    correctIndex: 1,
    explanation: 'The last sentence says veterans "receive half-price tickets all year." Free summer admission applies to active-duty members and their families, a swap.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
