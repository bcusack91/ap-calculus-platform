/**
 * Entrance Quiz — Developments in East Asia, c. 1200–1450 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whdea-ent-1a',
    question: 'Which statement best describes China under Mongol (Yuan) rule?',
    options: ['Foreign rulers held power, yet trade by land and sea continued', 'Trade collapsed after the khans closed China to foreign merchants', 'Han Chinese scholars ranked above all other groups in government', 'The khans governed China by copying the Japanese shogunate model'],
    correctIndex: 0,
    explanation: 'The Yuan was a foreign-led dynasty, but Silk Road and sea trade continued and even expanded within the wider Mongol network. Under Mongol rule, Han Chinese were ranked below Mongols and other non-Han groups in administration.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whdea-ent-1b',
    question: 'Which comparison of Korea and Japan, c. 1200–1450, is most accurate?',
    options: ['Japan adopted the full Chinese exam system, while Korea was governed by samurai lords and a shogun', 'Korea\'s court took up Chinese-style rule, while Japan was run by a shogun and warrior lords', 'Both were provinces governed directly by officials sent out from the Song capital', 'Both rejected Buddhism and Chinese writing in favor of purely local traditions'],
    correctIndex: 1,
    explanation: 'Korea\'s monarchy adopted Chinese administrative models and Confucian learning, while Japan borrowed Chinese writing and Buddhism but was governed by a shogun, daimyo and samurai. Neither was ruled directly by China.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    id: 'whdea-ent-2a',
    question: 'A Korean king sends envoys with local products to the Ming court, where they perform ritual bows and receive gifts and a seal recognizing their ruler, who continues to govern Korea himself. This exchange best shows',
    options: ['Chinese annexation of Korea as a directly ruled province', 'a military alliance aimed against the Japanese shogun', 'a ceremonial hierarchy without direct Chinese rule', 'a free-trade agreement between two equal sovereign states'],
    correctIndex: 2,
    explanation: 'Tributary missions acknowledged China\'s superior rank and brought prestige and trade, while the tributary ruler kept real authority at home. The ritual inequality rules out a partnership of equals.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whdea-ent-2b',
    question: 'Vietnamese rulers adopted Confucian examinations and Chinese-style ministries while fighting to stay independent of China. This best illustrates',
    options: ['complete assimilation into the Chinese empire and its culture', 'rejection of every form of Chinese cultural influence', 'conversion to Islam through Indian Ocean merchant contacts', 'borrowing Chinese models but resisting Chinese control'],
    correctIndex: 3,
    explanation: 'Vietnam is a classic case of selective adoption: it used Chinese institutions to strengthen its own state while defending its political independence. That rules out both full assimilation and total rejection.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'whdea-ent-3a',
    question: 'Which development best explains why the roles of elite Chinese women narrowed during the Song era?',
    options: ['Neo-Confucian teaching on patriarchal family order', 'Buddhist monasteries that barred women from religious life', 'Mongol laws that forbade women from owning any land at all', 'Exam rules that admitted women only to the lowest offices'],
    correctIndex: 0,
    explanation: 'Neo-Confucian ethics emphasized hierarchy within the family and female subordination, which accompanied practices such as foot binding among elite families. Women never sat the exams, and Buddhist convents did accept women.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whdea-ent-3b',
    question: 'Which evidence best shows that East Asia was linked to wider Afro-Eurasian trade, c. 1200–1450?',
    options: ['Korea\'s royal court adopted Confucian learning for its officials', 'Chinese porcelain and silk reached Indian Ocean ports by ship', 'Song exams tested candidates on the Confucian classics', 'Japan\'s shoguns ruled with the support of daimyo and samurai'],
    correctIndex: 1,
    explanation: 'Chinese goods moving through maritime routes to South Asia, Arabia and East Africa show East Asia\'s place in Afro-Eurasian exchange. The other statements are accurate but describe politics and learning inside East Asia, not long-distance trade.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whdea-ent-4a',
    question: 'Which causal chain best describes how commerce and government reinforced each other in Song China?',
    options: ['Merchants took over the government, which then abolished taxes on trade', 'Foreign conquerors seized trade profits, which brought the exams to an end', 'Growing trade raised tax revenue, which funded officials who kept order', 'Farmers abandoned rice for silk, which caused repeated famines in the south'],
    correctIndex: 2,
    explanation: 'Commercial wealth expanded state revenue, and a capable bureaucracy in turn maintained the order and infrastructure that trade needed. Song merchants did not rule, and Confucian officials ranked them low.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whdea-ent-4b',
    question: 'Which development under Mongol rule most directly increased contact between China and the Islamic world?',
    options: ['Song emperors sent Confucian scholars to teach at the court in Baghdad', 'Japanese pirates carried Chinese goods across Asia to Persian markets', 'Ming treasure fleets under Zheng He sailed as far as the Red Sea', 'Muslim officials and merchants served and traded across the Yuan realm'],
    correctIndex: 3,
    explanation: 'The Yuan employed Central Asian and Persian Muslims as administrators and welcomed Muslim merchants, so people and ideas moved between China and the Islamic world. Zheng He\'s voyages came later, under the Ming.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    id: 'whdea-ent-5a',
    question: 'Which pairing correctly matches a change and a continuity in China between 1200 and 1450?',
    options: ['Change: rule passed from Song to Yuan to Ming; continuity: Confucian ideals shaped government', 'Change: Confucian learning disappeared; continuity: Mongol khans ruled throughout the era', 'Change: China stopped trading abroad; continuity: the Song dynasty kept power throughout', 'Change: foot binding was abolished; continuity: Japan ruled Korea for the whole period'],
    correctIndex: 0,
    explanation: 'Dynasties changed with the Mongol conquest and the Ming restoration of 1368, but Confucian ideas continued to shape elite governance. Confucian learning survived, the Song fell in 1279, and trade continued.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whdea-ent-5b',
    question: 'Which factor best explains how Han Chinese rule was restored in 1368?',
    options: ['A Japanese invasion drove the Mongols out of Beijing for good', 'Revolts against a weakened Yuan brought the Ming to power', 'The Song dynasty returned after the Mongol rulers abdicated', 'Korean armies conquered northern China on behalf of the Ming'],
    correctIndex: 1,
    explanation: 'Famine, disease and misrule weakened the Yuan, and rebel movements led by Zhu Yuanzhang founded the Ming dynasty. The Song did not return, and neither Japan nor Korea conquered China.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'whdea-ent-6a',
    question: 'An account of Yuan China by a European merchant who held a post at the Mongol court praises the khan\'s wealth and power. Which limitation should a historian note first?',
    options: ['Merchants were barred from traveling anywhere inside the Yuan realm', 'Accounts by foreigners cannot tell us anything about China at all', 'His post at court may have led him to flatter the khan or exaggerate', 'The khan\'s court did not exist until long after the Yuan had fallen'],
    correctIndex: 2,
    explanation: 'An author who served the khan had reasons to portray him favorably, so point of view shapes the account. Foreign accounts are still valuable evidence once their perspective is taken into account.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whdea-ent-6b',
    question: 'An SAQ asks you to explain one cause of political change in China, c. 1200–1450. Which response best earns the point?',
    options: ['China changed in many political ways over the course of this long period', 'The Song dynasty was a time of rapid growth in trade, towns and cities', 'Japan\'s shoguns governed through regional daimyo and their samurai', 'The Mongol conquest replaced the Song with the Yuan, putting foreign rulers over a Han majority'],
    correctIndex: 3,
    explanation: 'This response names a specific cause and its political effect. The vague option names no cause, and the other two are accurate but do not explain political change in China.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whdea-ent-7a',
    question: 'The prompt "Explain how the Mongol conquest affected political structures in China" calls mainly for which historical reasoning skill?',
    options: ['Causation', 'Comparison', 'Sourcing', 'Periodization'],
    correctIndex: 0,
    explanation: 'Asking how a conquest affected political structures is a cause-and-effect question. A comparison prompt would ask for similarities or differences between two societies.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whdea-ent-7b',
    question: 'Which sentence would best contextualize an essay on the commercial growth of Song China?',
    options: ['Song China had many large cities with busy markets and shops', 'The Song civil service exams tested the Confucian classics', 'Across Afro-Eurasia, Indian Ocean and Silk Road trade was expanding in this era', 'In the twentieth century China became a communist state'],
    correctIndex: 2,
    explanation: 'Contextualization situates the topic within broader developments of the same era, here the expansion of Afro-Eurasian trade networks. The other options are narrow restatements, unrelated facts, or far-off events.',
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
