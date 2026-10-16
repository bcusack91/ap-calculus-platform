/**
 * Entrance Quiz — Indian Ocean Trade (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whin-ent-1a',
    question: 'Which factor best explains why the Indian Ocean network moved a larger volume of goods than the Silk Roads?',
    options: ['Indian Ocean ports charged merchants no taxes of any kind', 'The Silk Roads were closed throughout the period 1200–1450', 'Only luxury goods were light enough to carry by sea', 'Ships held far more cargo than camel caravans could'],
    correctIndex: 3,
    explanation: 'A single ship could carry the load of hundreds of camels, so bulk goods such as cotton cloth and pepper moved by sea in great quantity. The Silk Roads stayed open and specialized in lighter, high-value goods.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whin-ent-1b',
    question: 'Which pattern best describes how Hinduism, Buddhism and Islam reached Southeast Asia?',
    options: ['Each was imposed by armies that invaded from India or Arabia', 'Each came with merchants and teachers and won over local rulers', 'Only Islam reached the region at any point before the year 1500', 'Each was introduced by Portuguese missionaries in the 1500s'],
    correctIndex: 1,
    explanation: 'Indian traders and Brahmin priests, Buddhist monks, and later Muslim merchants and Sufis carried these faiths by sea, and local rulers adopted them for prestige and trade ties. Conquest played little role in Southeast Asia.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    id: 'whin-ent-2a',
    question: 'A merchant in Aden plans a round trip to Calicut on India\'s west coast. Given the monsoon pattern, which plan works best?',
    options: ['Sail east on the summer southwest monsoon and return on the winter northeast monsoon', 'Sail east on the winter northeast monsoon and return on the summer southwest monsoon', 'Sail east in any month, since the winds over the Indian Ocean blow the same way all year', 'Wait for the Atlantic trade winds to carry the ship around Africa and on to India'],
    correctIndex: 0,
    explanation: 'From about April to September the southwest monsoon carries ships from Arabia and Africa toward India; from October to March the northeast monsoon brings them back. That predictable reversal made voyages schedulable.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whin-ent-2b',
    question: 'Which statement best describes control of Indian Ocean trade before 1500?',
    options: ['The Ming navy controlled every port between China and Africa', 'Abbasid caliphs taxed each voyage from their court in Baghdad', 'No single power ruled it, and many merchant groups shared it', 'Portuguese fortresses guarded each strait and major harbor'],
    correctIndex: 2,
    explanation: 'Arab, Persian, Indian, Malay, Chinese and Swahili merchants all took part, and no state controlled the whole ocean. The Portuguese arrived only in 1498, and the Abbasid caliphate ended in 1258.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'whin-ent-3a',
    question: 'Gujarati merchants were among the most widespread traders in the Indian Ocean. Which feature of their trade best shows the network\'s religious diversity?',
    options: ['They traded only with fellow Hindus in Indian ports', 'They worked for the Ming court as tribute collectors', 'They refused to trade with Muslim merchants at sea', 'Traders of several faiths worked side by side'],
    correctIndex: 3,
    explanation: 'Gujarati commerce included Hindu, Muslim and Jain merchants, who settled in ports from East Africa to Southeast Asia. Cooperation across faiths was typical of the network rather than exceptional.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whin-ent-3b',
    question: 'Which comparison of Arab and Indian merchants in the Indian Ocean, c. 1200–1500, is most accurate?',
    options: ['Arab merchants traded only overland, while Indian merchants traded only at sea', 'Both formed diaspora communities and used credit, though Indian traders followed several faiths', 'Both were agents of a single empire that set prices for all of their goods', 'Indian merchants spread Islam to Africa, while Arab merchants spread Hinduism'],
    correctIndex: 1,
    explanation: 'Both groups settled in foreign ports and used bills of exchange (suftaja, hundi) to move credit, but Arab commerce was closely tied to Islam, while Indian merchants included Hindus, Muslims and Jains. Neither served a single empire.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whin-ent-4a',
    question: 'Zheng He\'s fleets returned to China with envoys from distant rulers and a giraffe presented to the emperor as an auspicious creature. This outcome best reflects which goal of the voyages?',
    options: ['Displaying Ming power and drawing rulers into the tributary order', 'Founding permanent Chinese colonies along the East African coast', 'Opening Chinese ports to Portuguese and Spanish merchants', 'Converting foreign rulers to Islam at the emperor\'s order'],
    correctIndex: 0,
    explanation: 'The voyages were diplomatic and prestige missions that brought rulers to acknowledge the Ming emperor and send tribute. Zheng He founded no colonies, and the Portuguese had not yet reached the Indian Ocean.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whin-ent-4b',
    question: 'Which statement best explains why Zheng He\'s voyages left less lasting change in the Indian Ocean than Portuguese voyages after 1498?',
    options: ['Zheng He\'s ships were too small to cross the open ocean safely', 'Zheng He\'s fleets never sailed past the ports of Southeast Asia', 'Ming expeditions stopped, but Portugal held armed trading posts', 'The Portuguese refused to use force against Indian Ocean shipping'],
    correctIndex: 2,
    explanation: 'After 1433 the Ming court ended the expeditions, while Portugal seized and fortified ports such as Goa and Malacca to tax trade. Zheng He\'s fleets were very large and reached Arabia and East Africa.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    id: 'whin-ent-5a',
    question: 'When Vasco da Gama reached Calicut in 1498, local merchants showed little interest in the cloth and metal goods he offered and asked for gold and silver instead. This reaction best illustrates',
    options: ['Indian merchants refusing all trade with any outsiders', 'Portugal already dominating the markets of India', 'Calicut lacking spices or other goods to offer for sale', 'Europeans at first having few goods Asia wanted'],
    correctIndex: 3,
    explanation: 'European manufactures had little appeal in wealthy Asian markets, so Europeans relied on precious metals and, later, force to gain a share of the trade. Calicut was a thriving spice port open to many foreign merchants.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whin-ent-5b',
    question: 'Which evidence best challenges the claim that the Portuguese took control of Indian Ocean trade in the 1500s?',
    options: ['Portugal captured Goa, Malacca and Hormuz in quick succession', 'Spices kept moving through Red Sea and Ottoman-held routes', 'Ships without a Portuguese cartaz were attacked or seized', 'Da Gama\'s spices sold for many times the cost of his voyage'],
    correctIndex: 1,
    explanation: 'Portugal never took Aden or closed the Red Sea, so Asian and Ottoman merchants kept the spice trade flowing outside Portuguese control. The captured ports and the cartaz system support the claim rather than challenge it.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'whin-ent-6a',
    question: 'Malay rulers who converted to Islam kept using Sanskrit royal titles and court rituals drawn from Hindu tradition. This best illustrates',
    options: ['syncretism, as a new faith blended with older practices', 'the complete replacement of all earlier culture by Islam', 'forced conversion under Arab military occupation', 'a rejection of all foreign cultural influence'],
    correctIndex: 0,
    explanation: 'Converts blended Islam with the Indian-influenced court culture that already existed, producing a layered Malay culture. Islam arrived through trade, not Arab conquest.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whin-ent-6b',
    question: 'Which development most directly carried Theravada Buddhism to mainland Southeast Asia?',
    options: ['Chinese armies conquering Thailand and Burma', 'Arab merchants sailing from the Persian Gulf', 'Monks and traders traveling from Sri Lanka', 'Portuguese missionaries arriving in the 1500s'],
    correctIndex: 2,
    explanation: 'Theravada Buddhism spread from Sri Lanka and India to Burma, Thailand and Cambodia with monks who traveled the sea routes. Arab merchants carried Islam, not Buddhism.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whin-ent-7a',
    question: 'Which pairing correctly matches a change and a continuity in Indian Ocean trade between 1450 and 1750?',
    options: ['Change: monsoon winds stopped reversing; continuity: Zheng He led voyages', 'Change: Islam vanished from East Africa; continuity: Portugal ruled all ports', 'Change: trade between Asia and Africa ended; continuity: no Europeans arrived', 'Change: armed European companies held key ports; continuity: Asian merchants still traded'],
    correctIndex: 3,
    explanation: 'The Portuguese, then the Dutch and English companies, seized strategic ports, yet Asian and African merchants continued to carry much of the ocean\'s trade. Zheng He\'s voyages ended in 1433, and Islam remained on the Swahili coast.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whin-ent-7b',
    question: 'Which sentence would best contextualize an essay on Portuguese entry into the Indian Ocean?',
    options: ['Ottoman control of eastern Mediterranean routes pushed Europeans to seek a sea path to Asian spices', 'Indian cotton cloth was very popular in the markets of Southeast Asia', 'The British Crown took over rule of India from the East India Company in 1858', 'Monsoon winds over the Indian Ocean reverse their direction twice a year'],
    correctIndex: 0,
    explanation: 'Contextualization connects the topic to broader developments of its time, here the Ottoman hold on overland routes that drove the search for a sea route. The other sentences are narrow details or events from a later era.',
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
