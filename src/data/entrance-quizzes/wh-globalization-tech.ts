/**
 * Entrance Quiz — Globalization & Technology After 1900 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson (scope ends in 2001).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  // source: Richard Nixon, Address to the Nation Outlining a New Economic Policy, August 15, 1971; verbatim (excerpt)
  {
    id: 'whgt-ent-1a',
    question: '"I have directed Secretary Connally to suspend temporarily the convertibility of the dollar into gold or other reserve assets..."\n— President Richard Nixon, address to the nation, August 15, 1971\n\nThe most direct long-term result of this decision was that',
    options: ['the IMF and World Bank were closed down within a few years', 'the dollar was fixed to gold at \\$35 an ounce for the first time', 'major currencies came to float against one another', 'GATT was replaced at once by the World Trade Organization'],
    correctIndex: 2,
    explanation: 'Ending dollar-gold convertibility broke the Bretton Woods system of fixed rates, and by 1973 major currencies floated. The IMF and World Bank survived, the \\$35 peg dated from Bretton Woods and was what ended, and the WTO came only in 1995.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whgt-ent-1b',
    question: 'Which of the following is best classified as a political dimension of globalization rather than an economic, cultural, or technological one?',
    options: ['Hollywood films drawing audiences on every continent', 'Supply chains that spread production across many countries', 'Groups such as Amnesty International campaigning worldwide', 'Container ships cutting the cost of moving freight overseas'],
    correctIndex: 2,
    explanation: 'Nongovernmental organizations that press governments across borders belong to the political dimension. Films are cultural, supply chains are economic, and container shipping is technological.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  {
    id: 'whgt-ent-2a',
    question: 'Mexico\'s maquiladoras, assembly plants that imported parts duty-free and exported finished goods, multiplied after 1994. Which development most directly explains that growth?',
    options: ['The fixed exchange rates set up at Bretton Woods', 'NAFTA\'s removal of trade barriers between Mexico and the United States', 'The start of the Bracero program for Mexican farm workers', 'China\'s entry into the World Trade Organization'],
    correctIndex: 1,
    explanation: 'NAFTA, which took effect in 1994, opened the U.S. market further to goods assembled in Mexico. Bretton Woods rates had ended in 1971, the Bracero program began in 1942, and China\'s 2001 WTO entry created competition rather than growth for Mexican plants.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whgt-ent-2b',
    question: 'Which development most directly led to the Latin American debt crisis that began when Mexico could not repay its loans in 1982?',
    options: ['Heavy borrowing of recycled oil money by poorer states', 'The Marshall Plan\'s loans to rebuild Western European economies', 'The founding of the World Trade Organization in Geneva', 'NAFTA\'s rules on investment in North America'],
    correctIndex: 0,
    explanation: 'After the 1973 oil shock, Western banks lent oil exporters\' deposits to developing countries, and rising interest rates later made those debts unpayable. The Marshall Plan concerned Europe in the 1940s, and the WTO and NAFTA came in the 1990s.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whgt-ent-3a',
    question: 'Which statement best describes the results of China\'s economic reforms in the two decades after 1980?',
    options: ['Growth was spread evenly, so the interior caught up with the coast', 'Collective farming expanded and private business was banned', 'The economy shrank as foreign investors stayed away from China', 'Hundreds of millions escaped poverty as the coast pulled ahead'],
    correctIndex: 3,
    explanation: 'Market reforms produced the largest reduction in extreme poverty in history, but coastal provinces with special economic zones grew far richer than the interior. Foreign investment poured in, and farming was decollectivized while private enterprise was allowed.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whgt-ent-3b',
    question: 'Which evidence best challenges the claim that cultural globalization after 1945 amounted simply to Americanization?',
    options: ['Coca-Cola and McDonald\'s became familiar around the world', 'Hollywood films dominated movie screens across Europe', 'Bollywood films and reggae won audiences worldwide', 'American rock and pop music spread to many countries'],
    correctIndex: 2,
    explanation: 'Indian cinema and Jamaican music show global culture flowing from non-Western centers too. The other choices are accurate but support the Americanization claim rather than challenge it.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whgt-ent-4a',
    question: 'Indigenous rebels in Chiapas, Mexico, seized several towns on January 1, 1994, the day NAFTA took effect. The uprising is best understood as part of',
    options: ['resistance to free-market globalization and its costs', 'a Soviet-backed effort to spread communism in Mexico', 'a campaign by Mexican factory owners for higher tariffs', 'the Green Revolution\'s spread of high-yield seeds'],
    correctIndex: 0,
    explanation: 'The Zapatistas protested poverty, land loss, and government free-market policy, joining a wave of opposition that later included the Battle of Seattle. The Soviet Union had already collapsed, the rebels were poor farmers rather than owners, and the uprising had nothing to do with seed programs.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whgt-ent-4b',
    question: 'The spread of HIV/AIDS to every continent in the two decades after 1981 best illustrates',
    options: ['how quarantine laws halted epidemics at national borders', 'how networks that linked the world economy also spread disease', 'how modern medicine had ended deaths from infectious disease', 'how disease spread only among the populations of wealthy countries'],
    correctIndex: 1,
    explanation: 'Air travel, migration, and trade that integrated the world also carried the virus, just as shipping had spread influenza in 1918. Borders did not stop it, it killed millions, and it struck poorer regions such as southern Africa hardest.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whgt-ent-5a',
    question: 'Pinochet\'s Chile after 1973, Deng Xiaoping\'s China after 1978, and Thatcher\'s Britain after 1979 are best grouped together as examples of',
    options: ['governments turning toward market liberalization', 'states adopting Soviet-style central planning', 'countries joining the Non-Aligned Movement', 'nations returning to the gold standard'],
    correctIndex: 0,
    explanation: 'Despite very different political systems, all three governments promoted markets, privatization, or foreign investment, the free-market turn of the late twentieth century. None adopted Soviet planning, joined the Non-Aligned Movement as part of this shift, or restored gold convertibility.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whgt-ent-5b',
    question: 'Which statement describes a continuity in the world economy from 1945 to 2001?',
    options: ['Exchange rates stayed fixed to gold throughout the period', 'China\'s economy stayed closed to foreign investment', 'Capital controls stayed tight in every major economy', 'The U.S. dollar remained the leading reserve currency'],
    correctIndex: 3,
    explanation: 'The dollar was central under Bretton Woods and remained dominant after currencies began floating in 1971. Fixed rates and capital controls ended, and China opened to foreign investment after 1978.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'whgt-ent-6a',
    question: 'A student writes: "The internet caused globalization." Which revision best improves the claim?',
    options: ['The internet sped up integration that institutions and container ships began earlier', 'The internet was invented in 1995 and changed every economy within a single year', 'Globalization had nothing to do with technology of any kind before the year 2001', 'The internet caused globalization because it was the most important invention ever made'],
    correctIndex: 0,
    explanation: 'Bretton Woods, GATT, containerization, and jet travel drove integration long before the web, which accelerated an existing trend. The other revisions give a wrong date, deny technology\'s role, or restate the claim without evidence.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whgt-ent-6b',
    question: 'A pamphlet by an organizer of the 1999 Seattle protests and a press release from WTO officials describe the same meeting very differently. Which consideration matters most when comparing them?',
    options: ['The press release is official, so it must be the accurate account', 'The pamphlet is a protest document, so it has no historical value', 'Each author\'s stance toward the WTO shapes what the account stresses', 'Accounts of the same meeting should agree, so one must be forged'],
    correctIndex: 2,
    explanation: 'Point of view and purpose explain why a critic and an official would emphasize different things; both sources are useful when read with that in mind. Official status does not guarantee accuracy, protest documents have value, and differing accounts are normal.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whgt-ent-7a',
    question: 'Which comparison of international capital flows in 1945–1971 and in 1991–2001 is most accurate?',
    options: ['Free in the first period, tightly controlled in the second', 'Tightly controlled in the first period, largely free in the second', 'Equally free in both periods under the gold standard', 'Strictly controlled in both periods by the World Trade Organization'],
    correctIndex: 1,
    explanation: 'Capital controls were common under Bretton Woods, while most major economies had removed them by the 1990s, which let money move quickly and spread crises in 1994 and 1997. The reversed pairing is wrong, the gold standard was gone, and the WTO regulates trade, not capital controls.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whgt-ent-7b',
    question: 'Which thesis best evaluates the effects of globalization between 1980 and 2001?',
    options: ['Globalization was simply a period when the whole world became more connected', 'Globalization harmed every single country that took part in world trade', 'Globalization brought benefits to every group in every region of the world', 'It enriched East Asian exporters but cut jobs in old industrial areas'],
    correctIndex: 3,
    explanation: 'This thesis makes a claim about effects and identifies winners and losers, which earns credit for complexity. The others restate the topic or make sweeping claims the evidence contradicts.',
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
