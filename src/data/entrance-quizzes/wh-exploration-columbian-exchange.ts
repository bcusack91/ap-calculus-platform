/**
 * Entrance Quiz — Exploration & the Columbian Exchange (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whex-ent-1a',
    question: 'Which of the following best explains why Portugal and Castile, rather than Venice, led the search for an all-water route to Asia in the 1400s?',
    options: ['Venetian merchants already profited from the eastern trade the Iberians wanted to bypass', 'Venice had been conquered by the Ottomans and lost its fleet before the voyages began', 'The Iberian kingdoms had the largest populations in Europe and needed new farmland', 'The pope had forbidden Italian merchants from trading with any Muslim ports at all'],
    correctIndex: 0,
    explanation: 'Venice grew rich as the European end of the Ottoman and Egyptian spice routes, so it had little reason to seek a way around them, while Atlantic kingdoms wanted to cut out those middlemen. Venice was never conquered by the Ottomans, and land hunger and papal bans did not drive the voyages.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whex-ent-1b',
    question: 'Which of the following most directly enabled small Spanish forces to topple the Aztec and Inca empires in the early 1500s?',
    options: ['Spanish armies that outnumbered the defenders in every major battle', 'Epidemics and native allies who turned against imperial rulers', 'Treaties in which Aztec and Inca rulers accepted Spanish rule', 'Iron weapons that the Aztec and Inca had never seen in any form'],
    correctIndex: 1,
    explanation: 'Smallpox struck Tenochtitlan and the Inca realm during the conquests, and tens of thousands of subject peoples such as the Tlaxcalans fought beside the Spanish. The Spanish were vastly outnumbered, the empires did not surrender by treaty, and steel helped but could not have won alone.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  {
    id: 'whex-ent-2a',
    question: 'The magnetic compass on Portuguese caravels came from China by way of the Islamic world, and the astrolabe had been refined by Muslim scholars. These facts best support which claim?',
    options: ['European voyages were led mainly by Chinese and Arab pilots hired in Lisbon', 'European exploration drew on knowledge spread through Afro-Eurasian exchange', 'European sailors developed these tools on their own after the Crusades ended', 'European ships were too poorly equipped to sail beyond the coasts until 1600'],
    correctIndex: 1,
    explanation: 'Iberian navigators combined their own ship designs with instruments that had moved along Afro-Eurasian trade and scholarly networks. The crews were mostly European, the tools were borrowed rather than invented independently, and caravels were crossing open ocean long before 1600.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whex-ent-2b',
    question: 'Which of the following best explains why Spain and Portugal signed the Treaty of Tordesillas in 1494?',
    options: ['To divide the silver of Potosí between the two crowns', 'To end a long war with the Ottomans over the spice routes', 'To settle rival claims raised by Columbus\'s first voyage', 'To open the lands across the Atlantic to English and French settlers'],
    correctIndex: 2,
    explanation: 'Columbus returned in 1493 claiming lands for Castile, and Portugal objected that they fell within its sphere, so the two crowns drew a line between their claims. Potosí was found only in 1545, neither crown fought such a war with the Ottomans, and England and France rejected the division.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whex-ent-3a',
    question: 'China\'s population grew from roughly 150 million in the mid-1600s to more than 400 million by 1850. Which development of the Columbian Exchange most directly contributed to this growth?',
    options: ['Wheat and rice brought from the Americas to the river valleys of southern China', 'Horses and cattle from Mexico that replaced human labor in the rice paddies', 'Smallpox vaccines carried to Chinese ports on the Manila galleons in the 1600s', 'Maize and sweet potatoes that grew on hillsides unsuited to rice'],
    correctIndex: 3,
    explanation: 'American crops such as maize and sweet potatoes could be farmed on dry, hilly land, adding calories without displacing rice. Wheat and rice moved from the Old World to the Americas, not the reverse, and smallpox vaccination was developed only in 1796 and reached China in the 1800s, too late to explain growth that began in the late 1600s.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whex-ent-3b',
    question: 'The spread of horses among peoples of the North American Plains in the 1600s and 1700s is best used as evidence that',
    options: ['some Old World species gave Native nations powerful new means of hunting and warfare', 'the Columbian Exchange affected every Native society in the same harmful way', 'horses were first domesticated in the Americas and later carried to Europe', 'Spanish officials armed Plains nations with horses to defend the frontier'],
    correctIndex: 0,
    explanation: 'Peoples such as the Comanche and Lakota used horses obtained through trade and raiding to build powerful mounted societies, showing that the exchange\'s effects were uneven. Domesticated horses came from Eurasia, and Spanish authorities tried to keep horses out of Native hands.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whex-ent-4a',
    question: 'The Spanish mita that sent Andean villagers to work in the Potosí silver mines is best described as',
    options: ['a wage system that drew free migrants from Spain to the mines', 'a plantation system that used enslaved Africans to grow sugar', 'an older Inca labor draft that Spain adapted to colonial mining', 'a land grant that gave Andean nobles authority over Spanish settlers'],
    correctIndex: 2,
    explanation: 'The Inca had required rotating labor service, and the Spanish turned that obligation into a brutal draft for silver mining, a blend of continuity and change. Mita workers were Andean villagers, not migrants or enslaved Africans, and the system served Spanish, not Andean, authority.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whex-ent-4b',
    question: 'Which comparison of Portuguese Brazil and Spanish Peru in the late 1500s is most accurate?',
    options: ['Brazil relied on wage-earning settlers, while Peru relied on wage-earning settlers as well', 'Brazil relied on native labor drafts for silver, while Peru relied on enslaved Africans for sugar', 'Brazil and Peru both relied mostly on European indentured servants to produce their exports', 'Brazil relied on enslaved Africans for sugar, while Peru relied on native labor drafts for silver'],
    correctIndex: 3,
    explanation: 'As Brazil\'s native population collapsed or fled inland, sugar planters imported enslaved Africans, while Peru\'s large surviving Andean population was drafted for the mines through the mita. The reversed pairing gets both colonies wrong, and indentured servants were not the main labor force in either.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whex-ent-5a',
    question: 'Estimated destinations of enslaved Africans carried across the Atlantic, c. 1500–1870: Brazil, 46 percent; the Caribbean, 43 percent; mainland North America, 4 percent; elsewhere in the Americas, 7 percent.\n\nWhich conclusion do these estimates best support?',
    options: ['Cotton growing in the United States drove most of the trade', 'Sugar-producing regions absorbed most of the captives', 'Spanish silver mines received the largest share of captives', 'The trade was centered on the ports of mainland North America'],
    correctIndex: 1,
    explanation: 'Brazil and the Caribbean, the great sugar economies, together received about 89 percent of captives. Mainland North America took only about 4 percent, and cotton became important only late in the trade\'s history.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whex-ent-5b',
    question: 'A Chinese merchant in Manila around 1600 trades silk and porcelain for silver mined in the Andes. This exchange best illustrates',
    options: ['the Portuguese monopoly on China\'s foreign trade through Macau', 'the decline of Chinese commerce after the Ming voyages ended', 'a Pacific link joining the economies of the Americas and Asia', 'the spread of the Atlantic triangle trade into East Asian waters'],
    correctIndex: 2,
    explanation: 'The Manila galleons carried American silver across the Pacific to buy Chinese goods, tying the Americas, Asia, and Europe into one circuit. Portugal had no monopoly on China\'s trade, Chinese commerce boomed rather than declined, and the triangle trade was an Atlantic system.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  // source: original
  {
    id: 'whex-ent-6a',
    question: 'The following description was written for this question.\n\nIn colonial Cuba, enslaved Yoruba people and their descendants honored the orisha Changó during the feast of Saint Barbara, placing her Catholic image on altars that also held offerings drawn from West African practice.\n\nThis practice is best understood as evidence that enslaved Africans',
    options: ['abandoned their own beliefs once they had been baptized', 'kept older beliefs alive within Catholic forms', 'refused all contact with the Catholic Church in Cuba', 'were invited by priests to combine the two faiths openly'],
    correctIndex: 1,
    explanation: 'Linking an orisha with a Catholic saint let enslaved people preserve Yoruba worship under a Catholic surface, the blending historians call syncretism. They neither dropped their beliefs nor shunned the Church entirely, and the clergy did not design the blend.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whex-ent-6b',
    question: 'The Pueblo Revolt of 1680 in New Mexico and the treaty that Jamaica\'s Maroons won from the British in 1739 are both best used as evidence that',
    options: ['European powers withdrew from the Americas after facing armed revolt', 'colonial rule in both regions rested on the consent of the colonized', 'colonized peoples resisted mainly through religious blending, not force', 'colonized and enslaved peoples could force colonizers to retreat or bargain'],
    correctIndex: 3,
    explanation: 'The Pueblo drove the Spanish out of New Mexico for about twelve years, and the Maroons\' long war forced Britain to recognize their autonomy. Spain later returned and Britain stayed, so neither case shows withdrawal from the Americas, and both cases involved armed resistance.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whex-ent-7a',
    question: 'Which piece of evidence best supports the claim that the Columbian Exchange transformed African societies, not only those of the Americas and Europe?',
    options: ['Potatoes fed rapidly growing populations in Ireland and Poland', 'Smallpox killed most of the Taíno people of the Caribbean', 'Maize and cassava became staples from Angola to the Gold Coast', 'Silver from Potosí raised prices across Spain and its neighbors'],
    correctIndex: 2,
    explanation: 'American maize and cassava spread through West and Central African farming and became staples, a direct effect on Africa. The other choices are accurate but describe Europe or the Americas, so they do not support the claim about Africa.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whex-ent-7b',
    question: 'Which statement best describes a continuity in Indian Ocean trade between 1450 and 1750?',
    options: ['Asian merchants and goods stayed central even after Europeans arrived', 'Portuguese fleets replaced Asian merchants across the ocean by about 1550', 'Overland routes across Central Asia closed once the sea route opened', 'China stopped accepting foreign silver as payment for its exports'],
    correctIndex: 0,
    explanation: 'Europeans inserted themselves into an existing network through forts and fees, but Gujarati, Arab, Malay, and Chinese merchants continued to carry most of the trade. Portugal never replaced them, overland routes kept operating, and Chinese demand for silver grew.',
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
