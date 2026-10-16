/**
 * Entrance Quiz — Maritime Empires & Labor Systems (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whmel-ent-1a',
    question: 'Which contrast between the Dutch and Spanish empires of the 1600s is most accurate?',
    options: ['The Dutch drew wealth mainly from silver mines, while Spain profited mainly from banking', 'The Dutch profited mainly from trade and finance, while Spain relied mainly on silver', 'The Dutch and Spanish both grew rich mainly from the fur trade in North America', 'The Dutch and Spanish both relied mainly on encomienda grants to extract labor'],
    correctIndex: 1,
    explanation: 'The Dutch built their power on the spice trade of the East Indies, shipping, and Amsterdam\'s banks, while Spain\'s empire rested on the silver of Potosí and Zacatecas. The reversed pairing gets both wrong, fur mattered more to France, and the encomienda was a Spanish institution.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whmel-ent-1b',
    question: 'Which of the following best explains why sugar planters in the Caribbean came to rely on enslaved Africans rather than on Native workers?',
    options: ['Spanish law required planters to hire Native workers for wages after 1500', 'Native workers had already moved to the silver mines of Mexico and Peru', 'African rulers would sell captives only to planters on Caribbean islands', 'Native peoples of the islands had died in huge numbers from disease and abuse'],
    correctIndex: 3,
    explanation: 'Epidemics and forced labor nearly destroyed the Taíno and other island peoples within decades, leaving planters short of workers. No law required Native wages in 1500, African sellers traded with many buyers, and island peoples were not shipped to the mainland mines.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  {
    id: 'whmel-ent-2a',
    question: 'The Portuguese seized Goa in 1510 and Malacca in 1511 but made little attempt to conquer the interior of India or the Malay Peninsula. Which goal best explains this pattern?',
    options: ['Converting the rulers of inland kingdoms to Christianity', 'Finding new farmland for settlers from Portugal\'s growing towns', 'Controlling the busy ports where most Asian seaborne trade was concentrated', 'Mining the gold and silver deposits of the South Asian interior'],
    correctIndex: 2,
    explanation: 'With few soldiers and powerful states inland, Portugal aimed to command choke points and tax the existing trade that moved through them. Conversion, settlement, and mining were not what the fortified ports were built to achieve.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whmel-ent-2b',
    question: 'A historian describes Spain\'s American empire as "a state project" and Portugal\'s Asian empire as "a toll collection." Which evidence best supports the first half of this description?',
    options: ['Armed Portuguese ships charged fees to merchants passing through Hormuz', 'Private joint-stock companies paid for most Spanish voyages and conquests', 'Aztec and Inca rulers kept full authority over their heartlands after 1540', 'Viceroys and royal courts named by the king governed its conquered lands'],
    correctIndex: 3,
    explanation: 'Spain ruled New Spain and Peru through crown-appointed viceroys and audiencias, a direct royal administration over territory. Fees at Hormuz support the second half of the description, joint-stock companies were Dutch and English tools, and the Aztec and Inca states were dismantled.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whmel-ent-3a',
    question: 'Which feature most clearly distinguished chattel slavery in the Americas from the colonial mita in the Andes?',
    options: ['Slavery was lifelong and inherited, while mita service rotated for set periods', 'Slavery paid nominal wages, while the mita gave workers no pay of any kind', 'Slavery applied only to Native peoples, while the mita drafted enslaved Africans', 'Slavery ended in 1542, while the mita continued into the twentieth century'],
    correctIndex: 0,
    explanation: 'Enslaved people were property for life and passed that status to their children, while mita workers served rotating terms and returned to their villages, at least in law. The other choices reverse the pay, the groups affected, and the dates.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whmel-ent-3b',
    question: 'Which change in labor in the Americas between the early 1500s and the 1700s is most accurate?',
    options: ['Native Americans became the main enslaved workforce of Brazil and the islands', 'Bondage grew less racial as people of mixed descent became more numerous', 'Enslaved status came to be tied in law to African descent', 'Indentured servants replaced enslaved Africans across British America by 1700'],
    correctIndex: 2,
    explanation: 'Early on both Native peoples and Africans were enslaved, but colonial codes increasingly made African ancestry the mark of enslaved status. Africans, not Native peoples, became the main enslaved workforce, and in places such as Virginia slavery replaced indentured servitude rather than the reverse.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whmel-ent-4a',
    question: 'About 6 million Africans were carried across the Atlantic in the 1700s, more than in any other century. Which development most directly explains this peak?',
    options: ['The spread of the cotton gin across the southern United States', 'A shift of Spanish silver mines from Native to African workers', 'The growth of sugar plantations in the Caribbean and Brazil', 'The end of indentured labor after Britain\'s emancipation act'],
    correctIndex: 2,
    explanation: 'Sugar estates in Saint-Domingue, Jamaica, Brazil, and other colonies consumed enormous numbers of enslaved workers. The cotton gin came only in 1793 and the United States banned imports in 1808, the mines relied mainly on Native labor, and emancipation came in 1833.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whmel-ent-4b',
    question: 'A modern historian\'s argument, paraphrased: the Atlantic slave trade made some African rulers richer and better armed even as it drained their neighbors of people.\n\nWhich evidence best supports this argument?',
    options: ['Most West African states refused to sell captives and closed their ports to Europeans', 'European armies conquered West African kingdoms in the 1700s to seize captives directly', 'Dahomey sold captives for firearms and used them in wars that produced more captives', 'The Middle Passage killed about 12 to 15 percent of those who were forced to embark'],
    correctIndex: 2,
    explanation: 'Dahomey\'s exchange of captives for guns strengthened the state while its wars stripped neighboring peoples of population. European conquest of the interior came in the 1800s, many states did sell captives, and the Middle Passage death rate is accurate but says nothing about African rulers.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whmel-ent-5a',
    question: 'The Dutch novel Max Havelaar (1860) described the suffering of Javanese peasants under forced cultivation and helped spur colonial reform. Its role is best compared with that of',
    options: ['the Treaty of Tordesillas in dividing claims to overseas lands', 'Equiano\'s narrative in the British campaign against the slave trade', 'the Permanent Settlement in making Bengal\'s zamindars landowners', 'the cartaz passes that Portuguese ships demanded from merchants'],
    correctIndex: 1,
    explanation: 'Both works used firsthand testimony to show European readers the human cost of a colonial labor system and fed reform campaigns at home. The treaty, the land settlement, and the passes were instruments of colonial power, not public criticism of it.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whmel-ent-5b',
    question: 'Before 1793, Mughal-era zamindars collected land revenue from cultivators; the Permanent Settlement of that year treated them as owners of the land. The most direct result for Bengal\'s peasants was that they',
    options: ['became tenants who could be evicted by landlords', 'gained title to the fields their families had farmed', 'stopped paying revenue to any authority at all', 'were shipped abroad as indentured plantation workers'],
    correctIndex: 0,
    explanation: 'Turning revenue collectors into proprietors made cultivators tenants on someone else\'s property, open to rent increases and eviction. Peasants did not gain title or escape payment, and indentured emigration was a separate, later development.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  // source: Adam Smith, An Inquiry into the Nature and Causes of the Wealth of Nations, Book III, ch. 2, 1776; verbatim
  {
    id: 'whmel-ent-6a',
    question: '"The experience of all ages and nations, I believe, demonstrates that the work done by slaves, though it appears to cost only their maintenance, is in the end the dearest of any."\n— Adam Smith, The Wealth of Nations, 1776\n\nSmith\'s reasoning differs from that of Quaker abolitionists mainly in that it',
    options: ['rests on scripture and the equality of all souls before God', 'judges slavery by its cost rather than its morality', 'defends slavery as the cheapest labor a planter could buy', 'calls for an immediate revolt by enslaved people in the colonies'],
    correctIndex: 1,
    explanation: 'Smith argued that enslaved labor was, in the end, the most expensive kind, an economic case that complemented the moral and religious appeals of Quakers and evangelicals. He did not ground the point in scripture, he rejected the idea that slavery was cheap, and he called for no revolt.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whmel-ent-6b',
    question: 'Which of the following was a direct consequence of the Haitian Revolution (1791–1804)?',
    options: ['France abolished slavery in all of its remaining colonies for good in 1804', 'Brazil abolished slavery within a decade to avoid a similar uprising at home', 'Britain reopened its slave trade to replace the sugar Haiti no longer produced', 'Slaveholders in the Americas tightened slave codes for fear of insurrection'],
    correctIndex: 3,
    explanation: 'The success of an enslaved people\'s revolution alarmed planters from Jamaica to the American South, who responded with harsher controls. France did not end slavery for good until 1848, Britain banned its trade in 1807, and Brazil kept slavery until 1888.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whmel-ent-7a',
    question: 'Which statement best describes a change in plantation labor in the British Caribbean in the decades after 1833?',
    options: ['Planters drafted Native island peoples through a labor system modeled on the mita', 'Enslaved Africans kept arriving legally from West Africa until the 1860s', 'Chinese migrants became the largest group of plantation owners on the islands', 'Indentured workers from India filled the place of enslaved labor on many estates'],
    correctIndex: 3,
    explanation: 'After emancipation, planters in Trinidad, British Guiana, and elsewhere recruited contract laborers from India, creating lasting South Asian communities. Britain had banned the trade in 1807, island Native populations had long since collapsed, and Chinese migrants came as workers, not owners.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whmel-ent-7b',
    question: 'A 1790 pamphlet by a Jamaican sugar planter claims that enslaved people on his estate are well fed and content. Which consideration matters most when a historian uses it as evidence?',
    options: ['Its author profited from slavery and wrote just as abolitionists attacked it', 'The pamphlet was printed, so it is more reliable than a private letter', 'The author lived in Jamaica, so his account must be entirely accurate', 'The pamphlet is too old to reveal anything about Caribbean slavery'],
    correctIndex: 0,
    explanation: 'A planter writing while the British abolition campaign was gaining strength had strong reasons to portray slavery favorably, which shapes what he stresses and omits. Print does not guarantee reliability, presence does not guarantee accuracy, and the source still reveals how planters defended slavery.',
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
