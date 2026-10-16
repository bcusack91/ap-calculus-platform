/**
 * Entrance Quiz — Colonial Society & Conflicts, 1607–1754 (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushcsc-ent-1a',
    question: 'Which factor best explains why Bacon\'s Rebellion (1676) encouraged Virginia\'s planters to rely more heavily on enslaved Africans?',
    options: ['The Crown banned indentured servitude as punishment for the revolt', 'Elites feared another uprising of armed poor whites and servants', 'Bacon\'s followers demanded that all servants be replaced by enslaved workers', 'The rebellion opened new tobacco markets in Spanish Florida and Mexico'],
    correctIndex: 1,
    explanation: 'A rebellion that united landless freemen, servants and some enslaved people alarmed the planter elite, and enslaved Africans bound for life seemed a safer labor force than discontented former servants. Servitude was never banned by the Crown.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushcsc-ent-1b',
    question: 'Which statement best describes colonial social structure compared with England\'s around 1750?',
    options: ['It had no social ranks, since all colonists were legally equal', 'It was more rigid, with a large hereditary titled nobility', 'It ranked enslaved Africans above indentured servants', 'It was hierarchical, but cheap land let free white men rise'],
    correctIndex: 3,
    explanation: 'Colonial society had planter and merchant elites at the top and enslaved people at the bottom, yet abundant land gave free white men more chances to gain property than in England. The colonies had no titled nobility.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Native Nations and Colonial Expansion: Causes of Conflict
  {
    id: 'apushcsc-ent-2a',
    question: 'After reconquering New Mexico in the 1690s, Spanish authorities eased forced labor and tolerated some Pueblo religious practices. This change best illustrates',
    options: ['accommodation following Native resistance', 'Spain abandoning its missions in the Southwest', 'the Pueblos\' conversion to Protestant faiths', 'a Spanish alliance with the Apache against the Pueblos'],
    correctIndex: 0,
    explanation: 'The Pueblo Revolt of 1680 pushed Spain to rule more cautiously after its return, and Spaniards and Pueblos became allies against Apache and Comanche raiders. Spain kept its missions.',
    partNumber: 2,
    partTitle: 'Native Nations and Colonial Expansion: Causes of Conflict',
  },
  {
    // source: original
    id: 'apushcsc-ent-2b',
    question: 'The following summary, written for this question, describes a kind of record from early-1700s Carolina: traders bought Native captives from allied nations in exchange for guns and cloth and shipped many of them to the West Indies, while extending credit that left Native towns deep in debt. Grievances over practices like these most directly led to which conflict?',
    options: ['King Philip\'s War, 1675–1676', 'The Pueblo Revolt of 1680', 'The Yamasee War, 1715–1717', 'The Pequot War, 1636–1637'],
    correctIndex: 2,
    explanation: 'Trader abuses, debts and slave raiding drove the Yamasee, Creek and other nations to attack South Carolina in 1715. The other conflicts took place in New England or New Mexico and had different causes.',
    partNumber: 2,
    partTitle: 'Native Nations and Colonial Expansion: Causes of Conflict',
  },

  // Part 3: Building Slavery in Law: Reading the Sources
  {
    id: 'apushcsc-ent-3a',
    question: 'In 1656 Elizabeth Key won her freedom in a Virginia court by arguing that her father was English and that she had been baptized. Which later Virginia laws most directly closed off the arguments she used?',
    options: ['Laws creating the headright system and the House of Burgesses', 'Laws tying a child\'s status to the mother and ignoring conversion', 'Laws banning the importation of any enslaved people into Virginia', 'Laws freeing every enslaved person who became a Christian'],
    correctIndex: 1,
    explanation: 'The 1662 law tied a child\'s status to the mother, reversing the English rule that followed the father, and the 1667 law declared that baptism did not end bondage. Together they removed both of Key\'s grounds.',
    partNumber: 3,
    partTitle: 'Building Slavery in Law: Reading the Sources',
  },
  {
    id: 'apushcsc-ent-3b',
    question: 'Olaudah Equiano\'s 1789 description of the Middle Passage is useful evidence of conditions on slave ships. Which sourcing point should a historian also note?',
    options: ['It was published decades later to support abolishing the slave trade', 'It was written by a ship captain who wanted to defend the slave trade', 'It describes only the tobacco economy of the Chesapeake colonies', 'It was written before any Africans had been brought to the Americas'],
    correctIndex: 0,
    explanation: 'Equiano wrote as a free man and committed abolitionist during the British campaign against the slave trade, so purpose and timing shape the account, although its description matches ship records. Historians also debate where he was born.',
    partNumber: 3,
    partTitle: 'Building Slavery in Law: Reading the Sources',
  },

  // Part 4: Comparing Slavery Across Regions: Data and Comparison
  {
    id: 'apushcsc-ent-4a',
    question: 'Lowcountry rice planters often gave each enslaved worker a daily task, after which the worker could tend a garden plot, while Chesapeake tobacco planters more often worked people in gangs under an overseer. Which factor best explains this difference?',
    options: ['Lowcountry law required planters to pay their workers wages', 'Chesapeake planters were barred by law from hiring overseers', 'Rice in the Lowcountry was grown mostly by indentured servants', 'The needs of each crop and how its work could be measured'],
    correctIndex: 3,
    explanation: 'Rice work could be divided into measurable daily tasks, while tobacco needed constant, closely supervised labor. Neither region paid enslaved workers wages, and Lowcountry rice relied on enslaved Africans.',
    partNumber: 4,
    partTitle: 'Comparing Slavery Across Regions: Data and Comparison',
  },
  {
    // source: original (hypothetical data)
    id: 'apushcsc-ent-4b',
    question: 'Hypothetical figures for 1750, invented for this question: Colony X has 100,000 people, 40,000 of them enslaved; Colony Y has 20,000 people, 12,000 of them enslaved. Which statement is accurate?',
    options: ['Colony Y has more enslaved people and also a larger enslaved share', 'Colony X has a larger enslaved share but fewer enslaved people', 'Colony X has more enslaved people, but Colony Y has a larger share', 'Both colonies have exactly the same share of enslaved residents'],
    correctIndex: 2,
    explanation: 'Colony X has 40,000 enslaved people (40 percent), while Colony Y has 12,000 (60 percent). The largest number and the largest share can belong to different colonies, as with Virginia and South Carolina in 1750.',
    partNumber: 4,
    partTitle: 'Comparing Slavery Across Regions: Data and Comparison',
  },

  // Part 5: Colonial Culture: Awakening, Enlightenment and a Changing Society
  {
    // source: Benjamin Franklin, "Observations Concerning the Increase of Mankind," written 1751; verbatim
    id: 'apushcsc-ent-5a',
    question: '"Why should Pennsylvania, founded by the English, become a Colony of Aliens, who will shortly be so numerous as to Germanize us instead of our Anglifying them, and will never adopt our Language or Customs, any more than they can acquire our Complexion?" (Benjamin Franklin, 1751) The passage is best understood in the context of',
    options: ['a wave of Rhineland migrants arriving through Philadelphia', 'the Puritan Great Migration to New England in the 1630s', 'Huguenot refugees settling in the port of Charleston', 'Dutch rule over New Netherland before the English conquest'],
    correctIndex: 0,
    explanation: 'Tens of thousands of German-speaking migrants, many of them redemptioners, came to Pennsylvania in the 1700s and kept their language and churches, which some English colonists resented. The other migrations happened elsewhere or much earlier.',
    partNumber: 5,
    partTitle: 'Colonial Culture: Awakening, Enlightenment and a Changing Society',
  },
  {
    id: 'apushcsc-ent-5b',
    question: 'Which comparison of the Great Awakening and the Enlightenment in the colonies is most accurate?',
    options: ['Both were led by Anglican bishops who defended the established churches', 'One stressed emotional faith and the other reason, yet both led colonists to question inherited authority', 'The Awakening reached only educated elites, while the Enlightenment reached the poor', 'Both rejected Christianity and urged colonists to abandon their churches'],
    correctIndex: 1,
    explanation: 'Revivalists relied on scripture and personal conversion while Enlightenment thinkers relied on reason and natural law, but both undermined claims based on tradition and office. The Awakening reached all classes, while the Enlightenment touched mainly elites.',
    partNumber: 5,
    partTitle: 'Colonial Culture: Awakening, Enlightenment and a Changing Society',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'apushcsc-ent-6a',
    question: 'Increase Mather\'s 1676 history presented King Philip\'s War as God\'s judgment on New England\'s sins. A historian would most likely use the work as evidence of',
    options: ['the motives of Metacom and his Wampanoag allies', 'Spanish policy toward the Pueblos of New Mexico', 'the economics of the Carolina rice plantations', 'how Puritan ministers read events as God\'s will'],
    correctIndex: 3,
    explanation: 'Mather\'s purpose and point of view make the book strong evidence of Puritan religious interpretation, but weak evidence of Native motives, which it filters through a colonial lens.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushcsc-ent-6b',
    question: 'Nearly every surviving account of the Stono Rebellion was written by white colonists or officials. Which statement best applies this sourcing fact?',
    options: ['The rebels kept detailed diaries, so the colonial accounts can be ignored', 'Because officials wrote the accounts, the rebellion probably never happened', 'No rebel\'s own account remains, so their motives must be inferred carefully', 'The accounts prove that enslaved people had no reasons to rebel at all'],
    correctIndex: 2,
    explanation: 'The absence of first-person rebel voices is itself evidence about whose perspective survives, so historians read hostile sources critically to infer the rebels\' aims, such as reaching Spanish Florida. The rebellion is well documented.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'apushcsc-ent-7a',
    question: 'Which pairing correctly matches a change and a continuity in colonial conflict between 1607 and 1754?',
    options: ['Change: slave codes grew harsher after revolts; continuity: Native nations kept resisting expansion', 'Change: slavery was abolished in the South; continuity: the Pueblos stayed independent', 'Change: Native nations stopped all resistance; continuity: no slave codes were passed', 'Change: Britain banned the slave trade; continuity: the Dominion of New England endured'],
    correctIndex: 0,
    explanation: 'Revolts such as Stono (1739) led to harsher laws like the Negro Act of 1740, while Native nations from the Powhatans to the Yamasee resisted encroachment throughout the period. The Dominion collapsed in 1689.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushcsc-ent-7b',
    question: 'Which comparison of the Pueblo Revolt (1680) and King Philip\'s War (1675–1676) is most accurate?',
    options: ['Both ended with the Native nations involved winning permanent independence', 'Each was a Native response to colonial pressure, but only one expelled the colonizers for years', 'King Philip\'s War drove the English out of New England for more than a decade', 'Both were uprisings led mainly by enslaved Africans against their owners'],
    correctIndex: 1,
    explanation: 'Each conflict grew out of pressure on Native land, religion or sovereignty, but the Pueblos drove the Spanish from New Mexico for twelve years, while Metacom\'s forces were defeated in 1676.',
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
    { partNumber: 2, partTitle: 'Native Nations and Colonial Expansion: Causes of Conflict' },
    { partNumber: 3, partTitle: 'Building Slavery in Law: Reading the Sources' },
    { partNumber: 4, partTitle: 'Comparing Slavery Across Regions: Data and Comparison' },
    { partNumber: 5, partTitle: 'Colonial Culture: Awakening, Enlightenment and a Changing Society' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
