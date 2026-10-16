/**
 * Entrance Quiz — Native Societies & European Exploration, 1491–1607 (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushnat-ent-1a',
    question: 'Which development in Europe most directly made Spanish and Portuguese voyages across the open Atlantic possible in the late 1400s?',
    options: ['The invention of steam engines that freed ships from the wind', 'Caravel ships and navigation tools such as the astrolabe', 'A united European government that paid for every voyage', 'Trade treaties with the Mexica that guaranteed safe harbors'],
    correctIndex: 1,
    explanation: 'Improved ship designs, the compass and astrolabe let sailors travel far from land and return. Steam power came centuries later, and European monarchies competed rather than funding voyages together.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushnat-ent-1b',
    question: 'Which pairing correctly shows the direction of a Columbian Exchange transfer?',
    options: ['Smallpox: from the Americas to Europe', 'Potatoes: from Europe to the Americas', 'Horses: from Europe to the Americas', 'Tobacco: from Africa to the Americas'],
    correctIndex: 2,
    explanation: 'Horses, cattle and pigs came to the Americas with Europeans, while potatoes, maize and tobacco moved from the Americas to the rest of the world. Smallpox traveled from Afro-Eurasia to the Americas.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Environment, Maize and Native Societies
  {
    // source: original
    id: 'apushnat-ent-2a',
    question: 'The following description was written for this question: "In the dry Great Basin, small family bands moved through a yearly round, gathering pine nuts in the fall and seeds in summer and hunting rabbits and other small game." Which factor best explains the way of life described?',
    options: ['Scarce water and wild plant foods made farming and permanent villages impractical', 'Spanish horses had made long-distance bison hunting possible across the region', 'Abundant salmon runs let people stay in one village throughout the year', 'Maize surpluses supported towns built around large earthen mounds'],
    correctIndex: 0,
    explanation: 'A dry landscape with little to farm made mobility a rational adaptation, since staying put would exhaust nearby food. Salmon-based villages describe the Northwest coast, mound towns the Mississippians, and horses arrived only after Spanish contact.',
    partNumber: 2,
    partTitle: 'Environment, Maize and Native Societies',
  },
  {
    id: 'apushnat-ent-2b',
    question: 'English colonists often described Native men in the Northeast as idle, since women did most of the farming. A historian would most likely explain this description as',
    options: ['accurate proof that Native men did little work of any kind', 'evidence that Native societies lacked any division of labor', 'a sign that Native women had no influence in their villages', 'a view shaped by European ideas about gender and work'],
    correctIndex: 3,
    explanation: 'Among many Eastern Woodlands peoples, women farmed while men hunted, fished, traded and made war, which Europeans who expected men to farm misread as idleness. Haudenosaunee clan mothers even helped choose leaders.',
    partNumber: 2,
    partTitle: 'Environment, Maize and Native Societies',
  },

  // Part 3: Conquest and the Spanish Colonial System
  {
    id: 'apushnat-ent-3a',
    question: 'Which statement best describes the effect of Spain\'s New Laws of 1542?',
    options: ['They freed all Native laborers and ended forced labor in the colonies', 'They shifted coerced labor from private grantees toward royal labor drafts', 'They legalized the enslavement of Native people captured in war', 'They made every encomienda a permanent grant that sons could inherit'],
    correctIndex: 1,
    explanation: 'The New Laws banned Native slavery and barred new encomiendas, but coercion continued through state-run drafts such as the repartimiento and the Andean mita. The ban on inheriting encomiendas was partly repealed in 1545 after colonists revolted.',
    partNumber: 3,
    partTitle: 'Conquest and the Spanish Colonial System',
  },
  {
    // source: original
    id: 'apushnat-ent-3b',
    question: 'The following summary, written for this question, describes a type of document from the 1550s: a Native town in central Mexico asks a Spanish court to lower its tribute, noting that half its people had died in recent epidemics. Such a petition best illustrates',
    options: ['Native communities refusing all contact with Spanish officials', 'the abolition of the tribute system under the New Laws', 'Native towns using Spanish law to resist burdens', 'Spanish judges ordering tribute raised after each epidemic'],
    correctIndex: 2,
    explanation: 'Many Native communities sued in Spanish courts over land and tribute, a form of legal resistance within the colonial system. Tribute obligations continued after 1542.',
    partNumber: 3,
    partTitle: 'Conquest and the Spanish Colonial System',
  },

  // Part 4: The Columbian Exchange: Data and Causation
  {
    // source: original (hypothetical data)
    id: 'apushnat-ent-4a',
    question: 'Hypothetical estimates, invented for this question, for one region\'s Native population: 1,000,000 in 1520; 400,000 in 1540; 150,000 in 1580. Which statement do these figures best support?',
    options: ['The population fell by roughly 85 percent in sixty years', 'The population began to recover in the decades after 1540', 'Most of the total decline came in the years after 1540', 'The population fell by about half over the sixty years'],
    correctIndex: 0,
    explanation: 'The population dropped from 1,000,000 to 150,000, a loss of 850,000 or 85 percent. More of that loss (600,000) came between 1520 and 1540 than afterward, and the figures show no recovery.',
    partNumber: 4,
    partTitle: 'The Columbian Exchange: Data and Causation',
  },
  {
    id: 'apushnat-ent-4b',
    question: 'Which factor most directly explains why most enslaved Africans carried to the Americas went to Brazil and the Caribbean rather than to North America?',
    options: ['English colonies banned slavery throughout the 1600s and 1700s', 'Spanish law forbade African slavery anywhere on the mainland', 'African rulers would trade captives only with Portuguese ships', 'Labor-hungry sugar plantations there drove demand for captives'],
    correctIndex: 3,
    explanation: 'Sugar cultivation required huge, constantly replenished labor forces, so Brazil and the Caribbean absorbed the great majority of the roughly 12.5 million Africans forced aboard slave ships. English colonies did use enslaved labor.',
    partNumber: 4,
    partTitle: 'The Columbian Exchange: Data and Causation',
  },

  // Part 5: Cultural Interaction, Resistance and Contextualization
  {
    id: 'apushnat-ent-5a',
    question: 'The debate at Valladolid in 1550–1551 between Las Casas and Sepúlveda is best understood as evidence that',
    options: ['Native leaders were invited to vote on Spanish colonial policy', 'Spanish justifications for conquest were disputed within Spain', 'Spain had decided to abandon its colonies in the Americas', 'the pope had banned all missionary work in the Americas'],
    correctIndex: 1,
    explanation: 'Las Casas and Sepúlveda argued before a royal council over whether wars of conquest were just, showing that Spanish ideas of superiority were contested at home. The council reached no clear verdict, and Spain kept its colonies.',
    partNumber: 5,
    partTitle: 'Cultural Interaction, Resistance and Contextualization',
  },
  {
    id: 'apushnat-ent-5b',
    question: 'Which sentence would best contextualize an essay on French and English ventures in North America before 1607?',
    options: ['Cahokia had been largely abandoned by about 1350', 'Jamestown was founded on the James River in 1607', 'Spain\'s silver wealth pushed rival monarchies to seek colonies of their own', 'The English Civil War broke out in the year 1642'],
    correctIndex: 2,
    explanation: 'Spanish wealth from the Americas spurred France and England to probe North America, which directly frames their early ventures. The other options are unrelated, the endpoint itself, or far later.',
    partNumber: 5,
    partTitle: 'Cultural Interaction, Resistance and Contextualization',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'apushnat-ent-6a',
    question: 'Columbus\'s journal of his first voyage survives only in an abstract made decades later by Bartolomé de Las Casas. For a historian, the most important consequence of this fact is that',
    options: ['some of the phrasing may belong to the editor instead', 'the voyage of 1492 probably never actually took place', 'Columbus must have written the journal in Nahuatl', 'the journal was meant for Native readers in the Caribbean'],
    correctIndex: 0,
    explanation: 'Because the text passed through another author with his own views, a historian must consider that some phrasing or emphasis is Las Casas\'s. The voyage itself is well documented, and the journal was written for the Spanish monarchs.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushnat-ent-6b',
    question: 'Which document would be most useful for studying how Nahua survivors remembered the conquest of Tenochtitlán?',
    options: ['Columbus\'s journal entries from his first voyage in October 1492', 'Sepúlveda\'s case for the justice of the conquest', 'John White\'s report on his return to Roanoke', 'The Florentine Codex, compiled from Native informants'],
    correctIndex: 3,
    explanation: 'Book 12 of the Florentine Codex records the conquest as told by elderly Nahua informants to the friar Sahagún, though their words were mediated by a Spanish transcriber. The other documents come from European authors and other places.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'apushnat-ent-7a',
    question: 'Which pairing correctly matches a change and a continuity in the Americas between 1491 and 1607?',
    options: ['Change: Native peoples stopped growing maize; continuity: no Europeans settled in the Americas', 'Change: the Atlantic slave trade ended; continuity: Cahokia stayed the largest city', 'Change: epidemics sharply cut Native numbers; continuity: maize and beans stayed staples', 'Change: Spain lost all its colonies; continuity: Native nations kept all of their land'],
    correctIndex: 2,
    explanation: 'Disease brought catastrophic population decline, while the maize-beans-squash agricultural complex persisted. The slave trade expanded in this period, and Cahokia had been abandoned by about 1350.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushnat-ent-7b',
    question: 'Why does Period 1 of the APUSH framework end in 1607?',
    options: ['Jamestown became the first lasting English colony', 'Spain gave up all of its colonies in the Americas in that year', 'The Columbian Exchange of plants and animals came to an end', 'The Treaty of Tordesillas expired and was never renewed'],
    correctIndex: 0,
    explanation: 'The founding of Jamestown marks the start of permanent English settlement, the focus of Period 2. Spanish colonies endured for centuries, and the Columbian Exchange continued.',
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
    { partNumber: 2, partTitle: 'Environment, Maize and Native Societies' },
    { partNumber: 3, partTitle: 'Conquest and the Spanish Colonial System' },
    { partNumber: 4, partTitle: 'The Columbian Exchange: Data and Causation' },
    { partNumber: 5, partTitle: 'Cultural Interaction, Resistance and Contextualization' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
