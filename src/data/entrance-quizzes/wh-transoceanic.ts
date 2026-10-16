/**
 * Entrance Quiz — Transoceanic Interconnections (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    // source: original (paraphrase of a modern historians' argument)
    id: 'whtr-ent-1a',
    question: 'A modern historian\'s argument, paraphrased: "Truly global trade began in 1571, when the founding of Spanish Manila linked the Americas directly to Asia." Which evidence would best support this argument?',
    options: ['Portuguese ships carried pepper from Calicut to Lisbon by sailing around Africa', 'Caravans carried West African gold across the Sahara to Mediterranean ports', 'Dutch merchants shipped Baltic grain to Amsterdam for resale across Europe', 'Galleons took Mexican silver to the Philippines to buy Chinese silk'],
    correctIndex: 3,
    explanation: 'The Manila galleons joined American silver mines to Chinese producers across the Pacific, closing the last gap in a round-the-world trading system. The other routes are real but link only Europe, Africa or Asia, so they cannot show the Americas–Asia connection the argument depends on.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whtr-ent-1b',
    question: 'The Pueblo Revolt of 1680 and the Maroon communities of Jamaica and Brazil are best compared as',
    options: ['two slave revolts that ended slavery throughout the Spanish Empire', 'two syncretic faiths that fully replaced Catholicism in the colonies', 'two kinds of resistance, one an armed uprising and one a flight to freedom', 'two independence drives led by Creole elites who opposed Spanish rule'],
    correctIndex: 2,
    explanation: 'The Pueblo peoples rose in arms and drove the Spanish from New Mexico for about twelve years, while Maroons escaped slavery and built independent settlements. Neither ended slavery or colonial rule, and neither was led by Creole elites.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    // source: original (approximate figures from economic-history estimates)
    id: 'whtr-ent-2a',
    question: 'Approximate figures: in 1870 a bushel of wheat cost about 58 percent more in Liverpool than in Chicago; by 1913 the gap was about 16 percent. Which development best explains this change?',
    options: ['British tariffs on imported American grain rose steeply after 1870', 'Railroads and steamships cut the cost of moving grain overseas', 'American farmers abandoned wheat in favor of growing raw cotton', 'Britain left the gold standard, which lowered its food prices'],
    correctIndex: 1,
    explanation: 'Cheaper rail and steam freight shrank the cost of getting American grain to Britain, so prices in the two markets converged. Higher tariffs would have widened the gap, and Britain stayed on the gold standard throughout this period.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whtr-ent-2b',
    question: 'Which statement best explains how steam-powered transport aided European imperial expansion in the late 1800s?',
    options: ['Troops and goods could reach interiors and cross oceans quickly, whatever the wind', 'Colonized peoples gained equal use of the new railways, which ended most resistance to rule', 'Steamships were too costly for trade, so empires used them only for carrying diplomatic mail', 'Railways in the colonies were designed mainly to link inland regions to one another for trade'],
    correctIndex: 0,
    explanation: 'Railways and steamships let imperial powers move soldiers, administrators and extracted goods quickly and reliably. Colonial lines usually ran from interior resources to ports for export rather than linking inland regions.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'whtr-ent-3a',
    question: 'After 1866 a cotton merchant in London could learn New York cotton prices on the same day. Which consequence most directly followed?',
    options: ['Merchants stopped shipping raw cotton across the Atlantic altogether', 'Cotton prices were fixed by an international treaty among the powers', 'Newspapers lost most of their readers to public telegraph offices', 'Prices for one good in distant markets moved closer together'],
    correctIndex: 3,
    explanation: 'Instant price news let traders buy where a good was cheap and sell where it was dear, which pulled prices in distant markets toward one another. Trade grew rather than stopped, and newspapers used the telegraph to expand their coverage.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whtr-ent-3b',
    question: 'Which statement best describes how the telegraph changed British imperial rule after about 1870?',
    options: ['Colonial governors gained more freedom because London heard news more slowly', 'Colonized peoples used cables to coordinate revolts that ended the empire by 1900', 'London could send orders to distant officials in hours, which tightened control', 'Cable lines were owned by colonized states, which charged Britain very high fees'],
    correctIndex: 2,
    explanation: 'Cables such as the 1870 London–Bombay line let the government exchange reports and orders with colonies in hours instead of months, strengthening central command. Britain, not colonized states, controlled the key cable routes.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whtr-ent-4a',
    question: 'Before 1914 a U.S. warship sailing from New York to San Francisco had to go all the way around South America. The opening of the Panama Canal most directly',
    options: ['ended U.S. involvement in Latin America by making bases unnecessary', 'let the U.S. Navy shift its fleets between oceans in days, not weeks', 'gave Britain control of Pacific shipping lanes for the next half century', 'forced the United States to share the canal\'s tolls equally with France'],
    correctIndex: 1,
    explanation: 'The canal cut thousands of miles from coast-to-coast voyages, so the U.S. could project naval power in both the Atlantic and the Pacific. It deepened rather than ended U.S. involvement in the region, and France had abandoned its own attempt in 1889.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whtr-ent-4b',
    question: 'Building the Suez Canal left Egypt\'s government deeply in debt. Which outcome followed most directly?',
    options: ['Egypt sold its canal shares to Britain, which later occupied the country', 'Egypt took over the canal and expelled the British army that was stationed there', 'France annexed Egypt as a colony, which closed the canal to British ships', 'The Ottomans paid off the debt and took over the running of the canal'],
    correctIndex: 0,
    explanation: 'Facing bankruptcy, the khedive sold Egypt\'s shares to Britain in 1875, and Britain occupied Egypt in 1882, partly to protect the route to India. Egypt\'s nationalization of the canal came much later, in 1956.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    // source: original
    id: 'whtr-ent-5a',
    question: 'Hypothetical data, invented for this question: a colony earns 80 percent of its export income from sugar, and the world sugar price falls by half in two years. Which outcome is most likely?',
    options: ['The colony quickly builds factories and becomes an industrial exporter', 'Sugar planters gain power to set world prices through their own markets', 'Imports of finished goods grow cheaper, so living standards rise sharply', 'Wages and government revenue collapse, as it has little else to sell'],
    correctIndex: 3,
    explanation: 'An economy built on one export has nothing to fall back on when that price drops, which is the core risk of monoculture dependency. Colonial producers did not set world prices, which were fixed in markets such as London and New York.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whtr-ent-5b',
    question: 'Which development best explains why global commodity chains expanded so rapidly in the late 1800s?',
    options: ['Colonies built their own factories and shipped finished goods to Europe', 'Free trade treaties gave colonial producers control over world prices', 'Steam transport and the telegraph cut the cost of moving goods and news', 'The end of the Atlantic slave trade closed plantations around the world'],
    correctIndex: 2,
    explanation: 'Railways, steamships, canals and telegraph cables made it cheap and fast to move raw materials to factories and to share price information, tying distant producers to industrial markets. Colonies generally exported raw materials rather than manufactures.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    // source: original (commonly cited estimates)
    id: 'whtr-ent-6a',
    question: 'Commonly cited estimates of the Native Hawaiian population: about 400,000 in 1778, about 70,000 in 1853, and about 40,000 in 1900. Which factor most directly explains this trend?',
    options: ['Large-scale emigration of Hawaiians to the California gold fields', 'Diseases such as measles that islanders had never been exposed to', 'Famine caused when sugar planters banned the growing of taro', 'A long war with Japan over control of the Hawaiian Islands'],
    correctIndex: 1,
    explanation: 'Like other Pacific peoples, Hawaiians had no exposure to diseases such as measles and influenza before intensified contact, so epidemics caused catastrophic losses. There was no Hawaiian war with Japan, and emigration was small.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whtr-ent-6b',
    question: 'Colonial India lost large areas of forest as land was cleared for plantations and timber was cut for railway sleepers. This best illustrates',
    options: ['export demand reshaping lands far from the consumers who used the goods', 'conservation laws that protected colonial forests from industrial demand', 'a shift to coal that ended the use of wood throughout the British Empire', 'local farmers clearing land with no link to imperial or global markets'],
    correctIndex: 0,
    explanation: 'Forests in India fell to meet the needs of export agriculture and imperial infrastructure, so distant markets drove environmental change in producing regions. The clearing was tied directly to the global economy, not isolated from it.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whtr-ent-7a',
    question: 'A DBQ document is an 1890s poster from a steamship company promising emigrants cheap, safe and comfortable passage to Buenos Aires. Which sourcing point is most useful?',
    options: ['It proves that most migrants traveled in first-class cabins', 'It shows that Argentina\'s government banned all immigration', 'It aimed to sell tickets, so it may play down the voyage\'s hardships', 'It was written by migrants describing their own experiences'],
    correctIndex: 2,
    explanation: 'The poster\'s purpose was to attract paying customers, so it likely glosses over crowded steerage conditions. It shows how companies marketed migration, not what most migrants actually experienced.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whtr-ent-7b',
    question: 'Which thesis best answers the prompt "Evaluate the extent to which new technology transformed global trade, 1850–1900"?',
    options: ['New technology changed trade in a number of important ways during this period', 'New technology had no real effect, since trade had already been global since 1571', 'Trade grew in this period only because European governments cut every tariff', 'Steam and the telegraph greatly raised trade\'s speed and scale, yet deepened old colonial export patterns'],
    correctIndex: 3,
    explanation: 'This thesis takes a position on extent (great change in speed and scale) and qualifies it with a continuity (raw-material exports from colonies), which sets up complexity. The first option is too vague, and the others are false or one-sided.',
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
