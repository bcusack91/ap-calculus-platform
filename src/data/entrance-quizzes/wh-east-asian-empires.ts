/**
 * Entrance Quiz — East Asian and Russian Empires, c. 1450–1750 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whea-ent-1a',
    question: 'The Choson court in Korea introduced the hangul alphabet in 1443. This reform is best understood as',
    options: ['a rejection of all Confucian teaching by the Korean court', 'an order from the Ming to unify writing across East Asia', 'an effort to spread literacy beyond Chinese-reading elites', 'a Mongol script required of every Yuan vassal state'],
    correctIndex: 2,
    explanation: 'Hangul was designed to be easy to learn so that ordinary Koreans, not just elites trained in Chinese characters, could read and write. The Choson dynasty was strongly Neo-Confucian, and Yuan rule had ended by 1368.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whea-ent-1b',
    question: 'The Khmer Empire built huge reservoirs and canals around Angkor. These works most directly supported',
    options: ['rice farming that fed many people', 'a navy that controlled the Strait of Malacca', 'trade in American silver with Spanish Manila', 'defenses against invading Mongol cavalry'],
    correctIndex: 0,
    explanation: 'Angkor\'s hydraulic engineering stored and distributed water for rice, sustaining a dense population and a monumental temple-building state. Srivijaya, not the Khmer, controlled the Strait of Malacca, and Manila was founded much later.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Ming China (1368–1644): Autocracy, Silver and Collapse
  {
    id: 'whea-ent-2a',
    question: 'The first Ming emperor banned private overseas trade in 1371. Which outcome most directly followed?',
    options: ['Chinese merchants stopped trading overseas altogether for two centuries', 'European powers took control of every major port on the Chinese coast', 'China relied only on its own mines for silver until the dynasty fell', 'Smuggling and coastal piracy grew until the ban was eased in 1567'],
    correctIndex: 3,
    explanation: 'The sea ban drove Chinese traders into smuggling, and raiders known as wokou ravaged the coast in the 1550s, so the court licensed private trade from 1567. Chinese merchants never fully stopped trading, and Japanese and American silver poured in.',
    partNumber: 2,
    partTitle: 'Ming China (1368–1644): Autocracy, Silver and Collapse',
  },
  {
    id: 'whea-ent-2b',
    question: 'Which cause of the Ming collapse in 1644 is best classified as environmental?',
    options: ['The Wanli emperor\'s refusal to meet his ministers', 'Little Ice Age cold, drought and famine', 'The cost of defending Korea against Hideyoshi', 'Li Zicheng\'s rebel army capturing Beijing'],
    correctIndex: 1,
    explanation: 'Climate disaster in the 1630s and 1640s brought crop failure, famine and epidemics, which fed rebellion. The other options are political, fiscal-military and rebellion causes, which a strong essay sorts separately.',
    partNumber: 2,
    partTitle: 'Ming China (1368–1644): Autocracy, Silver and Collapse',
  },

  // Part 3: Qing China (1644–c. 1750): A Conquest Dynasty Rules
  {
    id: 'whea-ent-3a',
    question: 'The Kangxi emperor\'s Sacred Edict of 1670, sixteen Confucian maxims read aloud to villagers twice a month, is best understood as',
    options: ['an attempt to convert Han villagers to Tibetan Buddhism', 'a law ordering Han men to adopt Manchu dress and hair', 'a foreign dynasty claiming to guard Chinese moral order', 'an order closing every Chinese port to European merchants'],
    correctIndex: 2,
    explanation: 'Promoting Confucian moral teaching allowed the Manchu rulers to claim the role of a legitimate Chinese dynasty in the eyes of Han subjects. The queue order was a separate measure, and the Canton system came in 1757.',
    partNumber: 3,
    partTitle: 'Qing China (1644–c. 1750): A Conquest Dynasty Rules',
  },
  {
    id: 'whea-ent-3b',
    question: 'China\'s population roughly doubled during the 1700s. Besides internal peace, which factor best explains this growth?',
    options: ['American crops such as maize grown on hilly land', 'Large-scale immigration from Russia and Central Asia', 'The end of the civil service examination system', 'New steam-powered factories in Guangzhou and Beijing'],
    correctIndex: 0,
    explanation: 'Maize and sweet potatoes from the Americas grew on hillsides unsuited to rice, adding to the food supply, a clear Columbian Exchange link. The exams continued under the Qing, and China had no steam factories in the 1700s.',
    partNumber: 3,
    partTitle: 'Qing China (1644–c. 1750): A Conquest Dynasty Rules',
  },

  // Part 4: Tokugawa Japan (1600–c. 1750): Order, Status and Controlled Contact
  {
    id: 'whea-ent-4a',
    question: 'After the sword hunt of 1588, Japanese samurai were moved off the land into castle towns and paid in rice by their lords. This change most directly',
    options: ['gave samurai private estates worked by their own peasants', 'made samurai the wealthiest group in Japanese society', 'ended the samurai\'s place at the top of the status order', 'turned warriors into salaried servants of the daimyo'],
    correctIndex: 3,
    explanation: 'Living on stipends rather than on estates they controlled, samurai became administrators and officials who depended on their lords. They kept the top legal rank, but many fell into debt to wealthy merchants.',
    partNumber: 4,
    partTitle: 'Tokugawa Japan (1600–c. 1750): Order, Status and Controlled Contact',
  },
  {
    id: 'whea-ent-4b',
    question: 'Which concern best explains why Japan\'s rulers had banned Christianity by 1614?',
    options: ['Buddhist monks across Japan had begun converting to Christianity', 'Converts might obey foreigners who could aid an Iberian conquest', 'The Dutch insisted on a ban as their condition for trading with Japan', 'Christian teaching forbade Japanese merchants from trading with China'],
    correctIndex: 1,
    explanation: 'Rulers feared that converts, including some daimyo, answered to a foreign religious authority and that missionaries could prepare the way for Spanish or Portuguese conquest, as in the Philippines. The Dutch benefited from the ban but did not cause it.',
    partNumber: 4,
    partTitle: 'Tokugawa Japan (1600–c. 1750): Order, Status and Controlled Contact',
  },

  // Part 5: Russia (1450–1750) and a Comparison with the Qing
  {
    id: 'whea-ent-5a',
    question: 'Russia\'s Law Code of 1649 ordered runaway peasants returned to their lords with no time limit. Which factor best explains why the state bound peasants to the land?',
    options: ['Western European states had just restored serfdom across the continent', 'Peasants themselves had asked for protection from raiding Cossack bands', 'The tsars needed peasants to work the estates of gentry who served in the army', 'The Orthodox Church owned all of the land and demanded a fixed labor force'],
    correctIndex: 2,
    explanation: 'In a vast, thinly populated state, the gentry who formed the army needed labor on their estates, so the tsars tied peasants to them hereditarily. Western Europe was moving away from serfdom in this period.',
    partNumber: 5,
    partTitle: 'Russia (1450–1750) and a Comparison with the Qing',
  },
  {
    id: 'whea-ent-5b',
    question: 'Which motive most directly drove Russian expansion across Siberia to the Pacific by 1639?',
    options: ['Furs, including tribute in furs taken from native peoples', 'A search for a sea route to India by way of southern Africa', 'Ming demand for silver mined in the Siberian forests', 'The need for farmland to settle millions of serfs'],
    correctIndex: 0,
    explanation: 'Sable and other furs were a major source of state revenue, and Cossacks forced Siberian peoples to pay yasak in furs. The search for an Africa route was a Portuguese project, and Siberian settlement by farmers came much later.',
    partNumber: 5,
    partTitle: 'Russia (1450–1750) and a Comparison with the Qing',
  },

  // Part 6: AP Exam Workshop: Sources, SAQs and the LEQ
  {
    // source: original
    id: 'whea-ent-6a',
    question: 'The following letter, written for this question, imitates a European trader at Guangzhou in 1760: "We are kept in a few buildings outside the city walls, may stay only for the trading season, and may buy and sell only through a small group of licensed Chinese merchants." Which context best explains the restrictions described?',
    options: ['Tokugawa edicts confining Dutch traders to the island of Dejima', 'The Ming ban on private overseas trade first issued in 1371', 'Russia\'s separate overland trade with China at Kyakhta', 'The Qing rules of 1757 confining Western ships to one port'],
    correctIndex: 3,
    explanation: 'In 1757 the Qianlong emperor confined European ships to Guangzhou and required them to deal through the licensed Cohong merchants, keeping foreigners at the edge of the empire. The Dejima rules applied in Japan, and the Ming ban was long past.',
    partNumber: 6,
    partTitle: 'AP Exam Workshop: Sources, SAQs and the LEQ',
  },
  {
    id: 'whea-ent-6b',
    question: 'An SAQ asks you to explain one internal challenge to Russian state power between 1450 and 1750. Which response earns the point?',
    options: ['Russia was a very large country with many different peoples in it', 'Stenka Razin\'s revolt drew Cossacks and runaway serfs against lords and officials', 'Peter I founded the new city of St Petersburg on the Baltic in 1703', 'Qing forces fought Russian settlers at the Amur fort of Albazin'],
    correctIndex: 1,
    explanation: 'Razin\'s 1670–1671 rising is specific evidence of resistance from within Russian society. The first option is vague, the third is not a challenge, and the fight at Albazin was an external conflict.',
    partNumber: 6,
    partTitle: 'AP Exam Workshop: Sources, SAQs and the LEQ',
  },

  // Part 7: Synthesis Review: Periodization, Comparison and Causation
  {
    id: 'whea-ent-7a',
    question: 'Which development in China between 1450 and 1750 is best described as a change rather than a continuity?',
    options: ['A shift from paper money to silver in trade and taxes', 'Rule through officials chosen by Confucian examinations', 'Foreign relations conducted through the tribute system', 'An economy in which most people farmed the land'],
    correctIndex: 0,
    explanation: 'Ming paper money collapsed and silver became the money of trade and, after the Single Whip reform, of taxes. Exams, the tribute system and the agrarian base all persisted across the period.',
    partNumber: 7,
    partTitle: 'Synthesis Review: Periodization, Comparison and Causation',
  },
  {
    id: 'whea-ent-7b',
    question: 'Which sequence best explains how the Treaty of Nerchinsk (1689) came about?',
    options: ['Qing fleets attacked Russian ports, then Peter I sued for peace, then a border was fixed', 'Cossacks seized Beijing, then the Ming fell, then Russia gave the Amur back to China', 'Fur hunters pushed down the Amur, then fighting broke out at Albazin, then Kangxi sought peace to fight the Dzungars', 'Jesuits converted the tsar, then Russia joined the tribute system, then trade opened at Canton'],
    correctIndex: 2,
    explanation: 'Russian fur hunters moved into lands the Qing claimed, the two sides clashed around Albazin, and Kangxi wanted a settled northern border so he could turn on the Dzungars. The treaty kept Russia out of the Amur basin.',
    partNumber: 7,
    partTitle: 'Synthesis Review: Periodization, Comparison and Causation',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Ming China (1368–1644): Autocracy, Silver and Collapse' },
    { partNumber: 3, partTitle: 'Qing China (1644–c. 1750): A Conquest Dynasty Rules' },
    { partNumber: 4, partTitle: 'Tokugawa Japan (1600–c. 1750): Order, Status and Controlled Contact' },
    { partNumber: 5, partTitle: 'Russia (1450–1750) and a Comparison with the Qing' },
    { partNumber: 6, partTitle: 'AP Exam Workshop: Sources, SAQs and the LEQ' },
    { partNumber: 7, partTitle: 'Synthesis Review: Periodization, Comparison and Causation' },
  ]
}
