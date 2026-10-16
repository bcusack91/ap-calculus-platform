/**
 * Entrance Quiz — African Kingdoms & Civilizations (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasak-ent-1a',
    question: 'A textbook from 1900 describes West Africa before European contact as a land of scattered villages with no government larger than the clan. Which evidence most directly contradicts this description?',
    options: ['Portuguese traders built a fortified trading post at Elmina in 1482.', 'Mali and Songhai collected taxes, kept armies and appointed provincial officials over many peoples.', 'Griots recited the genealogies of leading families at village gatherings.', 'Camel caravans carried slabs of rock salt south from Saharan mines.'],
    correctIndex: 1,
    explanation: 'Tax systems, standing armies and provincial governors are the marks of large centralized states, which Mali and Songhai were. Elmina, griot genealogies and salt caravans are real but do not show government on an imperial scale.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasak-ent-1b',
    question: 'Timbuktu and Djenné became centers of Qur\'anic learning and Maliki law by the 1300s. Which development best explains this?',
    options: ['Portuguese missionaries opened schools in the towns of the Niger bend.', 'Ottoman governors imposed Islamic courts after conquering the Sahel.', 'Egyptian armies occupied the region and brought their own scholars.', 'Muslim merchants on the caravan routes brought Islam and Arabic books.'],
    correctIndex: 3,
    explanation: 'Islam, Arabic literacy and manuscripts traveled south with North African Muslim traders, and Sahel rulers later supported mosques and scholars. No Portuguese, Ottoman or Egyptian conquest brought Islamic learning to these towns.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Geography, Gold and Salt: How the Sahel Empires Rose and Fell
  {
    id: 'aasak-ent-2a',
    question: 'A savanna ruler finds that the miners of a distant goldfield stop producing whenever soldiers occupy the mines. Following the strategy of the kings of Ghana and Mali, the most profitable policy would be to',
    options: ['protect and tax the trade', 'seize the mines and force the miners to keep digging under armed guard', 'ban gold exports so that all of the metal stays inside the kingdom', 'sell the gold directly to European ships waiting off the coast'],
    correctIndex: 0,
    explanation: 'Sahel rulers found it more profitable to keep caravans coming and tax gold and salt as they moved than to take over goldfields whose miners they could not command. Banning exports would have destroyed the revenue, and Portuguese ships reached the West African coast only from the 1440s, long after Ghana\'s era and Mali\'s height.',
    partNumber: 2,
    partTitle: 'Geography, Gold and Salt: How the Sahel Empires Rose and Fell',
  },
  {
    id: 'aasak-ent-2b',
    question: 'Which statement describes both a continuity and a change in the West African gold trade between 1300 and 1600?',
    options: ['Gold stayed in West Africa, but Mali\'s rulers began minting it into coins for local markets.', 'Gold went mostly to Cairo, but after 1591 Moroccan rulers banned its sale to Egyptian buyers.', 'Gold kept reaching outside markets, but more of it came to leave through the Atlantic coast.', 'Gold still moved north by camel, but Portuguese forts in the Sahara took over its taxation.'],
    correctIndex: 2,
    explanation: 'West African gold continued to reach outside buyers, but after the Portuguese built Elmina in 1482 a growing share moved south to the coast instead of north across the Sahara. Portugal built coastal forts, not Saharan ones.',
    partNumber: 2,
    partTitle: 'Geography, Gold and Salt: How the Sahel Empires Rose and Fell',
  },
  // Part 3: Beyond the Sahel: Aksum, the Swahili Coast, Great Zimbabwe, Benin and Kongo
  {
    id: 'aasak-ent-3a',
    question: 'Archaeologists at a coastal town find a coral-stone mosque, locally minted copper coins and Chinese porcelain set into the walls of tombs. The town was most likely part of which of the following?',
    options: ['The Sahel empire of Ghana, ruled from Koumbi Saleh', 'The highland kingdom of Aksum, with its port at Adulis', 'The forest kingdom of Benin, ruled by an Oba', 'The Swahili city-states of the monsoon trade'],
    correctIndex: 3,
    explanation: 'Coral-stone mosques, copper coinage and Chinese ceramics mark the Muslim Swahili ports such as Kilwa, which traded across the Indian Ocean. Aksum was Christian, Ghana lay inland, and Benin\'s court kept the Edo religion.',
    partNumber: 3,
    partTitle: 'Beyond the Sahel: Aksum, the Swahili Coast, Great Zimbabwe, Benin and Kongo',
  },
  {
    id: 'aasak-ent-3b',
    question: 'Which statement accurately describes the relationship between Great Zimbabwe and Kilwa?',
    options: ['Kilwa\'s merchants built the walls of Great Zimbabwe with Arabian mortar.', 'Great Zimbabwe conquered Kilwa and moved its royal court to the coast.', 'Gold from the Great Zimbabwe region reached the coast at Sofala, and Kilwa shipped it overseas.', 'Both were Christian kingdoms that traded ivory with Rome through the Red Sea.'],
    correctIndex: 2,
    explanation: 'Great Zimbabwe\'s wealth rested on cattle and on gold sent to Sofala, a trade that Kilwa controlled and shipped across the Indian Ocean. Its walls were built by ancestors of the Shona without mortar, and Kilwa was Muslim.',
    partNumber: 3,
    partTitle: 'Beyond the Sahel: Aksum, the Swahili Coast, Great Zimbabwe, Benin and Kongo',
  },
  // Part 4: Source Workshop: Travelers, Chroniclers, Griots and Mapmakers
  {
    id: 'aasak-ent-4a',
    question: 'A historian wants evidence of how the Mande people themselves remembered Mali\'s founding and what they expected of a just king. Which source is best suited to that purpose?',
    options: ['The Epic of Sundiata', 'Ibn Battuta\'s Rihla, dictated in Morocco', 'Al-Umari\'s account compiled in Cairo', 'The Catalan Atlas made on Majorca'],
    correctIndex: 0,
    explanation: 'The epic was passed down by Mande griots, so it preserves Mande memory and values, though it also legitimizes the Keita line. The other three were made by outsiders in Morocco, Egypt and Majorca.',
    partNumber: 4,
    partTitle: 'Source Workshop: Travelers, Chroniclers, Griots and Mapmakers',
  },
  // source: original
  {
    id: 'aasak-ent-4b',
    question: 'The following description, written for this question, summarizes a brass plaque made by Benin\'s royal casters\' guild in the 1500s: the Oba stands at the center holding a ceremonial sword, much larger than the warriors beside him, while two small Portuguese figures appear at the top corners.\n\nWhich interpretation does the plaque best support?',
    options: ['The Portuguese had conquered Benin and now ruled the kingdom through the Oba.', 'The casters\' guild made the plaque to sell to Portuguese buyers in Lisbon.', 'The guild presented the Oba as supreme and the Portuguese as minor visitors.', 'The Oba\'s warriors held real authority, while the Oba had only a ritual role.'],
    correctIndex: 2,
    explanation: 'Hierarchical scale makes the most important figure largest, so the plaque shows the Oba\'s sacred authority, with the Portuguese placed at the edges. The guild worked for the palace, not for export, and Portugal never ruled Benin.',
    partNumber: 4,
    partTitle: 'Source Workshop: Travelers, Chroniclers, Griots and Mapmakers',
  },
  // Part 5: Nuance, Misconceptions and Connections
  // source: W. E. B. Du Bois, The Negro, 1915 (ch. 4, "The Niger and Islam"); verbatim
  {
    id: 'aasak-ent-5a',
    question: '"Europe during the middle ages had some knowledge of these movements in the Sudan and Africa. Melle and Songhay appear on medieval maps. ... It is a curious commentary on modern prejudice that most of this splendid history of civilization and uplift is unknown to-day, and men confidently assert that Negroes have no history."\n— W. E. B. Du Bois, The Negro (1915)\n\nDu Bois\'s main purpose in this passage is to',
    options: ['argue that Europeans have always shown respect for the kingdoms of the Sudan', 'urge Black Americans to emigrate to the Sudan and rebuild its old empires', 'show that medieval maps were the most reliable sources on West Africa', 'rebut a racist assumption with evidence of what earlier states achieved'],
    correctIndex: 3,
    explanation: 'Du Bois points to Mali and Songhay, known even to medieval Europe, to refute the modern claim that Black people had no history. He criticizes modern prejudice rather than praising European attitudes, and he does not call for emigration.',
    partNumber: 5,
    partTitle: 'Nuance, Misconceptions and Connections',
  },
  {
    id: 'aasak-ent-5b',
    question: 'Which comparison accurately distinguishes many forms of bondage in African societies before 1500 from chattel slavery in the Americas?',
    options: ['African bondage was unknown until European traders introduced it along the coast.', 'African bondage was rarely racial and often not lifelong for descendants.', 'African bondage involved more people each year than the later Atlantic trade did.', 'African bondage was never harsh and never involved sale far away from home.'],
    correctIndex: 1,
    explanation: 'Slavery existed in Africa, but it was not defined by race, and enslaved people\'s children were often absorbed into the owner\'s lineage. Atlantic slavery was racial, hereditary for life and vastly larger in scale, though African bondage could also be brutal.',
    partNumber: 5,
    partTitle: 'Nuance, Misconceptions and Connections',
  },
  // Part 6: AP Exam Practice: Source Sets and Short Answers
  {
    id: 'aasak-ent-6a',
    question: 'An SAQ asks: "Explain one way Indian Ocean trade shaped the Swahili city-states before 1500." Which response earns the point?',
    options: ['Kilwa was a Swahili city on the East African coast that traded gold, ivory and timber.', 'Indian Ocean trade was very important to the Swahili coast and to the rest of East Africa.', 'Monsoon trade brought Muslim merchants who settled and married locally, so Islam and Arabic words entered Swahili life.', 'Ibn Battuta visited Kilwa in 1331 and praised it as one of the best-built towns he had seen.'],
    correctIndex: 2,
    explanation: 'To explain, a response must show how or why: here monsoon trade brought settlers, and their settling spread Islam and Arabic loanwords. The other responses identify a city, make a vague claim or cite evidence without connecting it to an effect.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Source Sets and Short Answers',
  },
  {
    id: 'aasak-ent-6b',
    question: 'Ibn Battuta reported in the 1350s that travelers in Mali had nothing to fear from robbers. Al-Bakri reported in 1068 that Ghana\'s king taxed every load of salt entering and leaving his lands. Taken together, these two paraphrased sources best support which conclusion?',
    options: ['Sahel rulers profited from trade and had good reason to keep the routes safe.', 'Sahel rulers grew rich mainly by raiding caravans that crossed their borders.', 'Sahel rulers depended on Portuguese troops to guard the routes to the coast.', 'Sahel rulers banned salt from the north to protect their own local salt mines.'],
    correctIndex: 0,
    explanation: 'Taxes on goods in transit gave rulers a direct stake in safe roads, and Ibn Battuta saw that security firsthand. Nothing in either source suggests raiding, Portuguese guards or a salt ban.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Source Sets and Short Answers',
  },
  // Part 7: Synthesis Review: States, Networks and Legacies
  {
    id: 'aasak-ent-7a',
    question: 'Which evidence from this unit best supports an argument that long-distance trade carried religion as well as goods?',
    options: ['Kilwa\'s coral-stone Great Mosque', 'The Moroccan victory over Songhai at the Battle of Tondibi in 1591', 'The mortarless granite walls of Great Zimbabwe\'s Great Enclosure', 'The founding of Mali told in the Epic of Sundiata by Mande griots'],
    correctIndex: 0,
    explanation: 'Kilwa was a monsoon trading port whose Muslim rulers built a Great Mosque, so it shows Islam arriving with Indian Ocean commerce. Great Zimbabwe\'s walls, the battle at Tondibi and the Sundiata epic do not connect trade to faith.',
    partNumber: 7,
    partTitle: 'Synthesis Review: States, Networks and Legacies',
  },
  {
    id: 'aasak-ent-7b',
    question: 'Which pair of developments shows a cause followed by its effect?',
    options: ['The Battle of Tondibi in 1591 led to the baptism of Kongo\'s king in 1491.', 'Mansa Musa\'s gold-laden pilgrimage of 1324 led Europe\'s mapmakers to depict Mali with gold in 1375.', 'Portugal\'s fort at Elmina in 1482 led to Sundiata\'s victory at Kirina around 1235.', 'King Ezana\'s conversion in the 300s led Kilwa\'s rulers to adopt Islam in 1505.'],
    correctIndex: 1,
    explanation: 'News of Musa\'s spending in Cairo spread along Mediterranean trade networks, and the 1375 Catalan Atlas shows him holding a gold orb. The other pairs put effects before causes or link unrelated events.',
    partNumber: 7,
    partTitle: 'Synthesis Review: States, Networks and Legacies',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Geography, Gold and Salt: How the Sahel Empires Rose and Fell' },
    { partNumber: 3, partTitle: 'Beyond the Sahel: Aksum, the Swahili Coast, Great Zimbabwe, Benin and Kongo' },
    { partNumber: 4, partTitle: 'Source Workshop: Travelers, Chroniclers, Griots and Mapmakers' },
    { partNumber: 5, partTitle: 'Nuance, Misconceptions and Connections' },
    { partNumber: 6, partTitle: 'AP Exam Practice: Source Sets and Short Answers' },
    { partNumber: 7, partTitle: 'Synthesis Review: States, Networks and Legacies' },
  ]
}
