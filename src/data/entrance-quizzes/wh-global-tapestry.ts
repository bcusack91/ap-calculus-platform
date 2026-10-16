/**
 * Entrance Quiz — The Global Tapestry, c. 1200–1450 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whgl-ent-1a',
    question: 'Which factor best explains how the Byzantine Empire stayed wealthy for centuries after the western Roman Empire collapsed?',
    options: ['Its emperors seized the West African gold fields and taxed the salt caravans', 'Its feudal lords sent most of each harvest to Rome as tribute for the pope', 'Its capital commanded the straits where trade between Europe and Asia passed', 'Its fleets controlled the monsoon routes linking Arabia to the Indian coast'],
    correctIndex: 2,
    explanation: 'Constantinople sat on the Bosphorus, so goods moving between the Black Sea, the Mediterranean, Europe and Asia passed through Byzantine hands. Byzantium never ruled West Africa or the Indian Ocean routes, and as an Orthodox state it paid no tribute to the pope.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whgl-ent-1b',
    question: 'A map made on the island of Majorca in 1375 shows a crowned West African ruler seated on a throne and holding up a large gold nugget, with trade caravans nearby. The image is best understood in the context of',
    options: ['Mali\'s gold wealth becoming famous in Europe', 'Portuguese gold mines worked by enslaved Africans', 'Mongol armies carrying African gold to Europe overland', 'Swahili merchants shipping West African gold to Venice'],
    correctIndex: 0,
    explanation: 'The Catalan Atlas pictures Mansa Musa, whose lavish pilgrimage through Cairo in 1324 spread word of Mali\'s trans-Saharan gold wealth to the Mediterranean world. Portuguese coastal trade came later in the 1400s, the Mongols never reached Africa, and the Swahili Coast traded across the Indian Ocean, not with West Africa.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    id: 'whgl-ent-2a',
    question: 'A historian argues that the scholar-official, not the warrior noble, was the backbone of the Song state. Which evidence best supports this claim?',
    options: ['Lords received estates from the emperor in return for supplying armed knights', 'Buddhist abbots ran provincial courts and collected the land tax in each region', 'Frontier generals passed their provincial offices on to their eldest sons', 'Candidates won government posts by passing exams on the Confucian classics'],
    correctIndex: 3,
    explanation: 'Song officials were recruited through competitive examinations on Confucian texts, which made learning rather than birth or military service the path into government. Land-for-service grants describe European feudalism, and hereditary commands describe exactly the system the exams replaced.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whgl-ent-2b',
    question: 'Which comparison of the Delhi Sultanate and the Mali Empire, c. 1300, is most accurate?',
    options: ['Both were Hindu kingdoms that resisted Islam as it spread from Central Asia and North Africa', 'Both had Muslim rulers over mostly non-Muslim subjects, but only one began through conquest', 'Both were provinces of the Abbasid Caliphate, ruled by governors who were sent from Baghdad', 'Both required every subject to convert to Islam, which ended older local religions in each'],
    correctIndex: 1,
    explanation: 'Turkic and Afghan invaders founded the Delhi Sultanate by conquest and ruled a Hindu majority, while Mali\'s rulers adopted Islam through trade contacts and tolerated traditional religions. Neither was a caliphal province, and neither forced mass conversion.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'whgl-ent-3a',
    question: 'Which factor best explains why Islam took hold first in the port cities of East Africa and Southeast Asia rather than in their interiors, c. 1200–1450?',
    options: ['Interior rulers had already become Christians under steady Portuguese pressure', 'Muslim traders settled where seaborne commerce was concentrated', 'Caliphs ordered conversions only among coastal people they could tax', 'Muslim armies landed on the coasts but lacked horses to march inland'],
    correctIndex: 1,
    explanation: 'Islam spread along the Indian Ocean mainly through merchant communities that settled, married and built mosques in trading ports, so conversion followed the trade. No caliph directed these conversions, and the Portuguese did not arrive until about 1500.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whgl-ent-3b',
    question: 'Which comparison of Indian Ocean trade and trans-Saharan trade, c. 1200–1450, is most accurate?',
    options: ['Both were run by a single empire that fixed the prices of gold, salt and spices', 'Both shrank after 1200 because the Mongols diverted commerce to the Silk Roads', 'Both carried mostly bulk grain rather than luxuries because shipping costs were low', 'Both spread Islam along with goods, though one relied on monsoons and one on camels'],
    correctIndex: 3,
    explanation: 'Merchants on both networks carried Islam into new regions, but Indian Ocean sailors timed voyages to the seasonal monsoons while Saharan caravans depended on camels. Neither network was run by one empire, both stayed active, and both centered on high-value goods.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whgl-ent-4a',
    question: 'By 1200 Buddhism had largely faded in India but was flourishing in China, Japan, Korea and Southeast Asia. This pattern best illustrates that',
    options: ['a faith can thrive far from its homeland once trade and teachers carry it', 'religions spread only where armies have first established political control', 'belief systems seldom change in form when they move into a new culture', 'a faith\'s decline in its homeland soon ends its influence everywhere else'],
    correctIndex: 0,
    explanation: 'Monks and merchants carried Buddhism across Asia, where it flourished in new forms such as Mahayana and Zen even as it declined in India. That adaptation contradicts the claim that belief systems stay unchanged as they spread, and Buddhism spread without conquest.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whgl-ent-4b',
    question: 'A historian claims the Catholic Church both legitimized royal power and limited it in medieval Europe. Which pair of evidence supports both halves of the claim?',
    options: ['Church estates covering much farmland, and Church schools teaching Latin', 'Crusades to retake Jerusalem, and the split with the Orthodox Church', 'Bishops crowning kings, and popes excommunicating defiant rulers', 'Tithes paid by peasants, and monks copying ancient Greek manuscripts'],
    correctIndex: 2,
    explanation: 'Coronation by bishops gave kings sacred legitimacy, while excommunication could release a ruler\'s subjects from their oaths of loyalty. The other pairs show the Church\'s wealth or cultural role but say nothing about its power to check a king.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    id: 'whgl-ent-5a',
    question: 'Which comparison of women\'s legal position in Afro-Eurasia, c. 1200–1450, is most accurate?',
    options: ['Song China let women sit the civil service exams, while Islamic law barred women from owning property', 'European primogeniture split land equally among daughters, while South Asian caste rules gave women no rights', 'Islamic law guaranteed women a share of inheritance, while Neo-Confucian norms narrowed elite Chinese women\'s rights', 'Women in all of these societies held legal rights equal to men\'s, so gender barely affected social status'],
    correctIndex: 2,
    explanation: 'The Quran gave women fixed (though smaller) inheritance shares, while Neo-Confucian ideals of female subordination accompanied declining property rights and foot binding among elite Song women. Women never sat the Song exams, and primogeniture favored eldest sons.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whgl-ent-5b',
    question: 'The survival of the caste system in South Asia under the Delhi Sultanate best illustrates',
    options: ['Muslim rulers abolishing hereditary status to win Hindu support', 'the bhakti movement replacing caste with an equal social order', 'Persian administrators tying occupation to merit-based exams', 'continuity in social hierarchy despite a new ruling religion'],
    correctIndex: 3,
    explanation: 'Muslim sultans took power in northern India, yet the caste hierarchy rooted in Hindu ideas of dharma and karma persisted among the majority, a clear case of social continuity amid political change. The sultans did not abolish caste, and bhakti devotion did not dismantle it.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'whgl-ent-6a',
    question: 'In the decades after the Black Death, wages for farm laborers in England and much of western Europe rose sharply. Which factor most directly explains this change?',
    options: ['Lords freed every serf at once because the pope ordered them to', 'Survivors were scarce, so workers could demand more from landlords', 'Silver from the Americas flooded Europe and inflated every price', 'Trade with Asia stopped for good, which made all goods cheaper'],
    correctIndex: 1,
    explanation: 'Losing perhaps a third or more of the population made labor scarce, so surviving peasants bargained for higher wages and serfdom weakened in western Europe. American silver arrived only in the 1500s, and no papal order freed the serfs.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whgl-ent-6b',
    question: 'Which pairing correctly matches a change and a continuity in Afro-Eurasia between 1200 and 1450?',
    options: ['Change: Mongols sacked Abbasid Baghdad; continuity: Confucian bureaucracy endured in China', 'Change: caste vanished from South Asia; continuity: serfdom held firm across western Europe', 'Change: trans-Saharan trade came to an end; continuity: Mongol rule endured in China', 'Change: patriarchy ended in Europe; continuity: Mali dominated West Africa from 1200 on'],
    correctIndex: 0,
    explanation: 'The Mongol sack of Baghdad in 1258 ended the Abbasid Caliphate, while Confucian bureaucratic government survived the Song, Yuan and Ming transitions, even though the Yuan suspended the exams until 1315. Caste persisted, serfdom weakened after the plague, Saharan trade continued, and Yuan rule ended in 1368.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whgl-ent-7a',
    question: 'An LEQ asks: "Evaluate the extent to which belief systems shaped gender roles in Afro-Eurasia, c. 1200–1450." Which thesis best meets the rubric?',
    options: ['Gender roles in this period were shaped by many different factors in many different societies', 'Belief systems had no effect on gender, since every society treated women in the same way', 'Women in this period had more rights than at any later point, as many surviving sources show', 'Neo-Confucian and Islamic norms largely set gender roles, though poor women\'s need to work limited seclusion'],
    correctIndex: 3,
    explanation: 'This thesis takes a defensible position on extent, names specific evidence, and adds a qualification that sets up complexity. The "many factors" option is too vague to defend, and the other two are historically false.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whgl-ent-7b',
    question: 'Korean and Vietnamese envoys bring gifts to the Chinese emperor, acknowledge his superiority, and in return receive recognition and access to Chinese trade. This arrangement is an example of',
    options: ['a feudal land-for-service contract', 'the tributary system', 'the Pax Mongolica peace', 'a Sufi brotherhood network'],
    correctIndex: 1,
    explanation: 'In the tributary system, neighboring states sent tribute and accepted a symbolic subordinate rank in exchange for recognition and trade with China. Feudal contracts exchanged land for military service, and the Pax Mongolica describes Mongol-era stability on the Silk Roads.',
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
