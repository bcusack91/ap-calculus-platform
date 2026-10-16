/**
 * Entrance Quiz — The Silk Roads and the Mongol Empire (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whsi-ent-1a',
    question: 'Few merchants ever traveled the whole Silk Road from China to the Mediterranean. Which feature of the trade best explains this?',
    options: ['Chinese law forbade any merchant from leaving the empire', 'The route was one paved highway open only to Roman traders', 'Goods moved in relays through many middlemen at oasis towns', 'Merchants could sail most of the distance on rivers instead'],
    correctIndex: 2,
    explanation: 'Silk Road commerce was relay trade: goods changed hands at oasis cities and caravanserais, so most traders worked one stretch of the network. The routes were a web of tracks, not a single highway.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whsi-ent-1b',
    question: 'Which statement best compares the effects of the Black Death in Europe and in China in the 1300s?',
    options: ['In Europe labor shortages weakened serfdom, while in China plague and revolt helped topple the Yuan', 'In Europe it strengthened the Church, while in China it ended the Confucian exams for good', 'It spared China completely, while Europe lost nearly its entire population', 'In both regions population rose quickly once the trade routes were closed'],
    correctIndex: 0,
    explanation: 'In Europe, scarce labor raised wages and loosened serfdom; in China, plague mortality added to the rebellions that ended Mongol rule in 1368. China suffered heavy losses, and Europe lost roughly a third of its people, not nearly all.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    id: 'whsi-ent-2a',
    question: 'Which practice best shows the Mongols adapting in order to conquer walled cities?',
    options: ['Refusing to fight any battle except on horseback', 'Using Chinese and Persian siege engineers', 'Building a large navy to blockade cities far inland', 'Converting to Islam to win the support of city leaders'],
    correctIndex: 1,
    explanation: 'Steppe cavalry could not take fortified cities alone, so the Mongols enlisted engineers from conquered peoples to build catapults, trebuchets and gunpowder weapons. Conversion to Islam came decades later in some khanates.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whsi-ent-2b',
    question: 'Genghis Khan promoted commanders for ability rather than clan rank and allowed many religions in his realm. These policies most directly helped him',
    options: ['convert his whole empire to Tibetan Buddhism', 'replace mounted warfare with infantry armies', 'end the trade connecting China and Persia', 'win loyalty from diverse peoples he absorbed'],
    correctIndex: 3,
    explanation: 'Merit-based promotion and religious tolerance bound defeated tribes and conquered peoples to the new state and drew talent into its armies and administration. The Mongols remained a cavalry power and promoted trade.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'whsi-ent-3a',
    question: 'A merchant carrying a Mongol paiza tablet could travel from Persia to China under protection and get supplies at relay stations along the way. This best illustrates',
    options: ['the Mongols banning foreign merchants from the empire', 'a Chinese monopoly over all of Eurasia\'s overland trade', 'Mongol rule lowering the risks of long-distance trade', 'the replacement of caravan trade by sea voyages'],
    correctIndex: 2,
    explanation: 'Imperial passes, the yam relay system and laws against robbing merchants made travel across Eurasia safer during the Pax Mongolica. The Mongols encouraged foreign merchants rather than excluding them.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whsi-ent-3b',
    question: 'Which evidence best shows that the Pax Mongolica increased diplomatic contact between Europe and East Asia?',
    options: ['Envoys such as William of Rubruck visited the khan', 'Zheng He\'s treasure fleets anchored at the port of Venice', 'Mansa Musa\'s pilgrimage passed through Cairo on the way to Mecca', 'Crusaders captured Jerusalem from Muslim rulers in 1099'],
    correctIndex: 0,
    explanation: 'European envoys such as the friar William of Rubruck (1253) reached the Mongol court, and khans exchanged letters with popes and kings. Zheng He never sailed to Europe, and the other events are unrelated or earlier.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whsi-ent-4a',
    question: 'Under Kublai Khan, Mongols ranked first, Central Asians and Muslims second, northern Chinese third and southern Chinese last. This policy most directly',
    options: ['made southern Chinese the most powerful group at the Yuan court', 'kept power with the conquerors and fed Han resentment that weakened Yuan rule', 'replaced every Chinese official in the government with Japanese advisers', 'abolished social hierarchy throughout the territory of the Yuan dynasty'],
    correctIndex: 1,
    explanation: 'The ranking reserved top posts for Mongols and their allies, and together with the suspension of the exams it alienated the Han majority and scholar-gentry who later backed the revolts against the Yuan.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whsi-ent-4b',
    question: 'The princes of Moscow collected tribute from other Russian cities on behalf of the Golden Horde and later used that position to lead the Russian lands. This best illustrates',
    options: ['the Golden Horde converting the Russians to Islam by force', 'the Il-Khanate conquering Moscow and making it a province', 'Byzantine emperors ruling the Russian lands from Constantinople', 'Mongol overlords building up a local power that broke free'],
    correctIndex: 3,
    explanation: 'Serving as the Horde\'s tribute collectors gave Moscow wealth and authority over rival principalities, and by about 1480 it ended Mongol overlordship. The Russians remained Orthodox Christians.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    id: 'whsi-ent-5a',
    question: 'Which pairing correctly matches a good with the direction it most often moved along the Silk Roads, c. 1200–1450?',
    options: ['Horses: from China westward to Persia', 'Silk: from Persia eastward into China', 'Porcelain: from China westward', 'Paper money: from Europe eastward to China'],
    correctIndex: 2,
    explanation: 'Chinese porcelain was prized across Eurasia and flowed west, while horses flowed east into China, which lacked good breeding grounds. Silk and paper money also originated in China.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whsi-ent-5b',
    question: 'In 1294 the Mongol Il-Khanate in Persia briefly tried to issue paper money modeled on currency used in Yuan China. This best illustrates',
    options: ['Chinese financial practices spreading west across Eurasia', 'European banks introducing paper currency to western Asia', 'the end of silver coinage throughout the Islamic world', 'Persian merchants teaching the Chinese how to print money'],
    correctIndex: 0,
    explanation: 'Mongol rule linked China and Persia, so Chinese institutions such as paper currency could be copied in the west, even though the Persian experiment quickly failed. Paper money began in China, not Europe or Persia.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'whsi-ent-6a',
    question: 'Which development best explains why overland Silk Road trade lost importance relative to sea routes after about 1400?',
    options: ['A new camel saddle made long caravan journeys unnecessary', 'China stopped producing silk entirely during the 1300s', 'The Ottomans opened every route to European traders toll-free', 'The Mongol collapse and plague made caravan routes far less secure'],
    correctIndex: 3,
    explanation: 'With the khanates fragmented and plague disrupting commerce, overland travel became riskier and costlier, while Indian Ocean shipping kept growing. China kept producing silk, and Ottoman control raised rather than removed costs for Europeans.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whsi-ent-6b',
    question: 'Which pairing of a post-Mongol state with a development is accurate?',
    options: ['Ming China: abolished the civil service exams for good', 'Muscovy: ended Golden Horde overlordship c. 1480', 'Timurid Empire: converted Persia to Christianity', 'Ottomans: lost Constantinople to Byzantium in 1453'],
    correctIndex: 1,
    explanation: 'Moscow threw off Golden Horde dominance around 1480. The Ming restored the exams, the Timurids patronized Persian-Islamic culture, and the Ottomans captured Constantinople in 1453.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whsi-ent-7a',
    question: 'A Persian historian whose home city was sacked by Mongol armies describes the conquerors as merciless destroyers. Which sourcing point most affects how a historian should use this account?',
    options: ['His community\'s suffering likely shaped his harsh view', 'He was a Mongol official writing to praise the great khan', 'His account was written before the Mongols ever existed', 'He was a European merchant unfamiliar with Persian society'],
    correctIndex: 0,
    explanation: 'An author who lived through his city\'s destruction had reason to portray the Mongols harshly, so his point of view shapes the account. That does not make it false, but it should be weighed against other evidence.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whsi-ent-7b',
    question: 'Which pair of evidence best supports the claim that Mongol rule both destroyed and connected Eurasian societies?',
    options: ['The Ming restoration of the exams, and the Ottoman capture of Constantinople', 'Mansa Musa\'s pilgrimage of 1324, and the founding of the Delhi Sultanate', 'The sack of Baghdad in 1258, and safer caravan travel under the khans\' peace', 'The Song invention of paper money, and the Crusaders\' capture of Jerusalem'],
    correctIndex: 2,
    explanation: 'Baghdad\'s destruction shows the cost of Mongol conquest, while the Pax Mongolica shows the connectivity that same empire created. The other pairs describe events outside Mongol rule.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
