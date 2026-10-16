/**
 * Entrance Quiz — The Americas and Africa, c. 1200–1450 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'wham-ent-1a',
    question: 'Cahokia, near modern St. Louis, had huge earthen mounds and perhaps 20,000 people at its height. Which development most directly made a settlement of this size possible?',
    options: ['Iron plows pulled by horses and oxen across the floodplain', 'Maize farming that produced reliable food surpluses', 'Wheat brought north by traders from Mesoamerican cities', 'Gold exports shipped to the Swahili Coast for porcelain'],
    correctIndex: 1,
    explanation: 'Mississippian societies grew maize intensively, and the surplus supported a large population and the labor to build mounds. The Americas had no iron plows, horses or oxen before European contact.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'wham-ent-1b',
    question: 'Which description best fits the Haudenosaunee (Iroquois) Confederacy?',
    options: ['A tributary empire that demanded captives for sacrifice from conquered cities', 'A Christian kingdom whose rulers carved churches out of solid rock', 'A league of nations that settled disputes in a council under the Great Law of Peace', 'A chain of trading city-states whose merchants spoke a Bantu-Arabic language'],
    correctIndex: 2,
    explanation: 'The Haudenosaunee joined five (later six) nations in a confederacy with a representative council and a matrilineal social structure. The other options describe the Aztecs, Ethiopia and the Swahili Coast.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    // source: original (summary of the tribute pages of the Codex Mendoza)
    id: 'wham-ent-2a',
    question: 'The following summary, written for this question, describes a page from a 16th-century copy of Aztec tribute records: it lists the towns of one province, each pictured beside the cotton cloaks, feathers, cacao and warrior costumes it sent to Tenochtitlan. The record best supports which claim?',
    options: ['The empire paid conquered towns wages for building its roads', 'The empire had no exchange beyond the Valley of Mexico', 'The empire collected its taxes in coined silver money', 'The empire drew regular payments of goods from conquered towns'],
    correctIndex: 3,
    explanation: 'Conquered communities owed periodic tribute in goods to the Mexica capital, which the record lists town by town. The Aztecs did not use coined money, and goods such as cacao and feathers came from distant regions.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'wham-ent-2b',
    question: 'Which factor best explains why thousands of Tlaxcalans fought alongside Cortés against Tenochtitlan?',
    options: ['They resented Aztec tribute demands and the wars waged to seize captives', 'They had already converted to Christianity before the Spanish arrived', 'Cortés had promised to give them firearms and horses of their own to keep', 'The Inca emperor had ordered all Mesoamerican peoples to help the Spanish'],
    correctIndex: 0,
    explanation: 'Tlaxcala was a long-standing enemy of the Mexica and a frequent target of their wars for captives, so its leaders saw the Spanish as allies against Aztec power. Indigenous allies were a major reason a few hundred Spaniards could win.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'wham-ent-3a',
    question: 'Which Inca policy best shows an effort to secure the loyalty of newly conquered peoples?',
    options: ['Banning every local god and destroying all regional shrines', 'Bringing the sons of local chiefs to Cusco to be educated', 'Replacing every local chief with a noble from the Inca capital', 'Requiring all subjects to pay their taxes in gold and silver coins'],
    correctIndex: 1,
    explanation: 'Educating the sons of local elites in Cusco bound them to the Inca state and kept potential rebel leaders under watch. The Inca usually kept cooperative local chiefs (curacas) and absorbed local gods rather than banning them.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'wham-ent-3b',
    question: 'Inca storehouses along the roads held food, cloth and weapons gathered through mit\'a labor. Together these institutions are best described as',
    options: ['a market economy in which merchants set the prices of most goods', 'a feudal order in which private lords owned the land outright', 'a state that pooled work and redistributed goods without money', 'a tribute system that was paid entirely in silver sent to Spain'],
    correctIndex: 2,
    explanation: 'The Inca state collected labor rather than coin, stored what that labor produced, and redistributed it to soldiers, workers and the needy. There was no market currency, and Spanish rule came only after 1532.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'wham-ent-4a',
    question: 'Mali\'s founder Sundiata kept traditional West African beliefs, and later rulers such as Mansa Musa were devout Muslims who still ruled over many followers of local religions. This pattern best illustrates',
    options: ['the forced conversion of every one of Mali\'s subjects to Islam', 'the conquest of Mali by Arab armies sent from North Africa', 'a rejection of Islam by the West African ruling elite', 'a blend of Islam and older customs used to bolster royal power'],
    correctIndex: 3,
    explanation: 'Mali\'s rulers used Islam to build ties with North African merchants and scholars while respecting traditions that most of their subjects kept. Mali was a West African state, not an Arab conquest.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'wham-ent-4b',
    question: 'Which development most directly explains the fall of the Songhai Empire in 1591?',
    options: ['A Moroccan army equipped with guns won a decisive battle', 'Portuguese settlers conquered the whole Niger River valley', 'A revived Mali Empire reconquered Timbuktu and Gao in battle', 'Mongol armies crossed the Sahara from their bases in Egypt'],
    correctIndex: 0,
    explanation: 'A Moroccan force with firearms crossed the Sahara and defeated the Songhai army in 1591. The Portuguese stayed on the coast, and the Mongols never entered Africa.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    id: 'wham-ent-5a',
    question: 'Archaeologists at Great Zimbabwe have found Chinese porcelain, Persian pottery and glass beads from India. This evidence best supports which claim?',
    options: ['Great Zimbabwe was founded by settlers who came from China', 'The city was tied to seaborne trade through coastal ports', 'Its rulers conquered the Swahili city-states by force', 'Its people made porcelain and glass to sell to Asia'],
    correctIndex: 1,
    explanation: 'Imported Asian goods reached the interior because Great Zimbabwe sent gold and ivory to coastal ports such as Sofala and Kilwa. The finds show trade connections, not foreign settlement or conquest.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'wham-ent-5b',
    question: 'Which factor best explains why Kilwa became one of the wealthiest Swahili city-states by the 1300s?',
    options: ['It was the capital of a unified empire ruling the whole coast', 'It mined the salt that West African kingdoms traded for gold', 'It controlled exports of gold from the Zimbabwe plateau', 'It held the Portuguese monopoly on spices bound for Lisbon'],
    correctIndex: 2,
    explanation: 'Through Sofala, Kilwa controlled the outflow of gold from the interior to Indian Ocean merchants. The Swahili coast was a set of independent city-states, and the Portuguese did not arrive until 1498.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'wham-ent-6a',
    question: 'Which factor best explains why Eurasian diseases killed a far larger share of people in the Americas after 1492 than in sub-Saharan Africa?',
    options: ['The Americas had larger cities, while African cities were too small to spread disease', 'Europeans reached the Americas first, while they never traveled to Africa at all', 'American peoples kept no livestock, while Africans had no domestic animals either', 'Africa had long traded with Asia and Europe, while the Americas had been cut off'],
    correctIndex: 3,
    explanation: 'Trans-Saharan and Indian Ocean trade had exposed African populations to Eurasian diseases for centuries, while American peoples had no acquired immunity. Europeans were trading on the African coast before 1492.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'wham-ent-6b',
    question: 'Which pairing correctly matches a change and a continuity in the Americas and Africa, c. 1200–1450?',
    options: ['Change: the Inca expanded rapidly after c. 1438; continuity: Swahili ports kept trading overseas', 'Change: Mali converted to Christianity; continuity: Cahokia kept growing larger throughout', 'Change: Spain conquered the Aztecs; continuity: Great Zimbabwe dominated the region after 1450', 'Change: Swahili ports united as one empire; continuity: the Inca minted coins throughout'],
    correctIndex: 0,
    explanation: 'Inca expansion began around 1438, while East African ports continued their long-standing Indian Ocean trade. Cahokia declined by about 1350, Spain conquered the Aztecs in 1521, and Great Zimbabwe declined around 1450.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'wham-ent-7a',
    question: 'Great Zimbabwe left no written records of its own. Which sources would historians rely on most to study it?',
    options: ['Its royal law codes and its tax registers', 'Archaeological remains and oral traditions', 'Letters exchanged with the Abbasid caliphs', 'Accounts written by Spanish missionaries'],
    correctIndex: 1,
    explanation: 'Without written records, historians reconstruct Great Zimbabwe from its stone ruins, imported goods and later oral traditions. Spanish missionaries were active in the Americas, not southern Africa.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'wham-ent-7b',
    question: 'An SAQ asks for one difference in how the Aztec and Mali empires gained their wealth. Which response earns the point?',
    options: ['Mali drew tribute from conquered cities, while the Aztecs taxed Saharan caravans', 'Both relied on mit\'a labor, while neither empire took part in long-distance trade', 'The Aztecs drew tribute from conquered peoples, while Mali taxed the gold and salt trade', 'Mali used cacao beans as money, while the Aztecs paid their armies in gold coins'],
    correctIndex: 2,
    explanation: 'The Mexica collected tribute goods from subject towns, while Mali\'s rulers profited from controlling and taxing trans-Saharan gold and salt. Mit\'a was an Inca institution, and cacao was Mesoamerican.',
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
