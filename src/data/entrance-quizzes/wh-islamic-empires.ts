/**
 * Entrance Quiz — Islamic Empires, 1450–1750 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whis-ent-1a',
    question: 'Which development best explains why the Ottoman sultan gained new religious prestige after 1517?',
    options: ['Shi\'a scholars in Iran elected him caliph of all Muslims', 'His conquest of Egypt gave him Mecca and Medina', 'He persuaded the Safavid shah to accept Sunni Islam', 'His armies recaptured Jerusalem from the Crusader states'],
    correctIndex: 1,
    explanation: 'Selim I\'s conquest of Mamluk Syria and Egypt (1516–1517) placed the holy cities of Mecca and Medina under Ottoman protection. The Crusader states had vanished centuries earlier, and the Safavids remained Shi\'a rivals.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whis-ent-1b',
    question: 'Which statement best describes the Mughal Empire\'s part in Indian Ocean trade?',
    options: ['It built Asia\'s largest navy and controlled the main sea lanes', 'It banned every export in order to protect Indian weavers', 'It ruled the Swahili coast through governors from Gujarat', 'It exported cotton cloth through Surat but had little navy'],
    correctIndex: 3,
    explanation: 'Mughal India was a major exporter of textiles and indigo, but the state was land-based, and Indian, Arab and later European merchants carried the sea trade. It never ruled East Africa.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Expansion: Gunpowder, Steppe Heritage & Conquest
  {
    id: 'whis-ent-2a',
    question: 'Which evidence would best challenge the claim that gunpowder weapons alone explain the expansion of the Islamic empires?',
    options: ['Akbar\'s alliances with Rajput chiefs who led armies', 'Ottoman cannons breaching the walls of Constantinople in 1453', 'Janissary muskets defeating Qizilbash cavalry at Chaldiran', 'Babur\'s matchlockmen behind chained carts at Panipat in 1526'],
    correctIndex: 0,
    explanation: 'Alliances, marriage politics and administration mattered as much as firearms, and Akbar\'s Rajput partnerships are a clear example. The other options show gunpowder at work, so they support the claim instead of challenging it.',
    partNumber: 2,
    partTitle: 'Expansion: Gunpowder, Steppe Heritage & Conquest',
  },
  {
    id: 'whis-ent-2b',
    question: 'Which statement best explains how one Ottoman conquest helped pay for the next in the 1500s?',
    options: ['Tribute sent from Ming China financed the building of Ottoman fleets', 'European bankers lent the sultans unlimited sums at no interest', 'Revenue from conquered provinces paid salaried troops and gunners', 'Conquered peoples served in the army without pay in return for land'],
    correctIndex: 2,
    explanation: 'Taxes from newly conquered provinces funded the Janissaries, artillery and navy that made further campaigns possible, so expansion fed itself. China paid no tribute to the Ottomans.',
    partNumber: 2,
    partTitle: 'Expansion: Gunpowder, Steppe Heritage & Conquest',
  },

  // Part 3: Ruling an Empire: Legitimacy and Administration
  {
    id: 'whis-ent-3a',
    question: 'Which comparison of Mughal mansabdars and zamindars is most accurate?',
    options: ['Mansabdars were Hindu priests, while zamindars were Muslim judges in the cities', 'Mansabdars held ranks from the emperor, while zamindars inherited their land', 'Both were Safavid titles that the Mughals borrowed for their tribal cavalry leaders', 'Both were elected by village councils and could be removed by a popular vote'],
    correctIndex: 1,
    explanation: 'A mansabdar\'s numbered rank came from the emperor and was not hereditary, while zamindars inherited local landholdings and collected land revenue for the state. Both Muslims and Hindus served as mansabdars.',
    partNumber: 3,
    partTitle: 'Ruling an Empire: Legitimacy and Administration',
  },
  {
    id: 'whis-ent-3b',
    question: 'Akbar\'s new capital at Fatehpur Sikri, built in the 1570s, blended Persian, Islamic and Indian building styles. A historian would most likely read this design as',
    options: ['a sign that Akbar had converted to Hinduism and given up Islam', 'proof that the Mughals copied Ottoman architecture without change', 'evidence that Akbar wished to cut his court off from Indian culture', 'a picture of a court that drew on many traditions under one ruler'],
    correctIndex: 3,
    explanation: 'Monuments made claims about their builders, and Fatehpur Sikri\'s mixed styles presented Akbar\'s court as uniting diverse peoples. Akbar did not abandon Islam, and the design embraced Indian elements rather than rejecting them.',
    partNumber: 3,
    partTitle: 'Ruling an Empire: Legitimacy and Administration',
  },

  // Part 4: Religion, Rivalry and New Faiths
  {
    id: 'whis-ent-4a',
    question: 'Which comparison of religious change in Safavid Iran and in Reformation Europe is most accurate?',
    options: ['Safavid rulers imposed a new state faith from the top, while Protestantism began as a movement from below', 'Protestant princes imposed Shi\'a Islam, while Safavid shahs encouraged reform movements from below', 'Both changes were ordered by the pope and enforced by armies sent out from Rome', 'Both changes happened peacefully and caused no wars between rival states'],
    correctIndex: 0,
    explanation: 'Ismail I declared Twelver Shi\'ism the religion of a mostly Sunni Iran in 1501, while Luther\'s challenge spread among believers before some rulers adopted it. Both changes fed long wars, Ottoman–Safavid and European.',
    partNumber: 4,
    partTitle: 'Religion, Rivalry and New Faiths',
  },
  {
    id: 'whis-ent-4b',
    question: 'Sikh gurus set up the langar, a free kitchen where people of every caste sat and ate together. This practice most directly expressed',
    options: ['a Mughal law requiring all subjects to share their meals', 'the Safavid policy of converting subjects by force', 'the Sikh rejection of caste distinctions in worship', 'Hindu caste rules that barred shared meals'],
    correctIndex: 2,
    explanation: 'Guru Nanak and his successors taught equality before one God, and the langar put that teaching into practice by seating everyone together. It challenged caste rules rather than following them.',
    partNumber: 4,
    partTitle: 'Religion, Rivalry and New Faiths',
  },

  // Part 5: Challenges and Change, c. 1600–1750
  {
    id: 'whis-ent-5a',
    question: 'Which comparison of the three empires\' situations by 1750 is most accurate?',
    options: ['The Safavids survived by adapting, the Ottomans had fallen, and the Mughals had expanded', 'The Ottomans survived by adapting, the Safavids had fallen, and Mughal power had gone regional', 'The Mughals survived by adapting, the Ottomans had expanded, and the Safavids had reunited', 'All three had collapsed, been conquered, and been divided among European trading companies'],
    correctIndex: 1,
    explanation: 'The Ottomans reorganized and lasted until 1922, the last Safavid was deposed in 1736, and after 1707 Mughal governors in Hyderabad, Bengal and Awadh ruled in all but name. European rule over most of India came only after 1750.',
    partNumber: 5,
    partTitle: 'Challenges and Change, c. 1600–1750',
  },
  {
    id: 'whis-ent-5b',
    question: 'Which development best explains why Aurangzeb\'s Deccan conquests strained Mughal finances?',
    options: ['They ended the land tax that had supported the empire', 'They cut India off from the silver of the Americas', 'They forced the emperor to abolish the jizya once more', 'They made more mansabdars than there were jagirs'],
    correctIndex: 3,
    explanation: 'Conquest enlarged the officer corps faster than it produced well-paying revenue assignments, so officers went underpaid and loyalty weakened. Aurangzeb reimposed the jizya in 1679 rather than abolishing it.',
    partNumber: 5,
    partTitle: 'Challenges and Change, c. 1600–1750',
  },

  // Part 6: Exam Workshop: Sources, SAQs and the LEQ
  {
    // source: original
    id: 'whis-ent-6a',
    question: 'A court painting, described here for this question: a sultan sits enthroned in the center, drawn far larger than anyone else, while foreign envoys bow and offer gifts. The picture was kept in a palace album viewed by the ruler and his courtiers. Which point best explains the painting\'s purpose?',
    options: ['It was meant to glorify the monarch', 'It was a neutral record of how envoys usually behaved', 'It was made to persuade the envoys\' own kings to rebel', 'It was produced for sale to ordinary people in the bazaar'],
    correctIndex: 0,
    explanation: 'A painting made for the ruler\'s own court and showing him towering over bowing foreigners was meant to proclaim his greatness, a claim to legitimacy. Its audience and purpose make it unreliable as a neutral record of diplomacy.',
    partNumber: 6,
    partTitle: 'Exam Workshop: Sources, SAQs and the LEQ',
  },
  {
    id: 'whis-ent-6b',
    question: 'An SAQ asks you to explain one way Ottoman methods of legitimizing rule differed from Akbar\'s. Which response earns the point?',
    options: ['Both the Ottomans and Mughals used religion to make their rule look legitimate', 'The Ottoman Empire stayed strong longer, while the Mughal state weakened sooner', 'The Ottomans stressed their role as Sunni guardians of Mecca and Medina, while Akbar promoted peace among all faiths', 'Akbar built the new capital of Fatehpur Sikri during the 1570s'],
    correctIndex: 2,
    explanation: 'This response names a specific contrast in how each ruler claimed legitimacy and supports both sides. The first option states a similarity, and the others do not compare methods of legitimacy.',
    partNumber: 6,
    partTitle: 'Exam Workshop: Sources, SAQs and the LEQ',
  },

  // Part 7: Synthesis: Comparing the Three Empires
  {
    id: 'whis-ent-7a',
    question: 'Which statement corrects a common misconception about the Ottoman, Safavid and Mughal empires?',
    options: ['They were Arab empires governed from Mecca in the Arabic language', 'Their founders spoke Turkic, and Persian was a key court language', 'They had no contact of any kind with European states', 'They gave non-Muslims full legal equality with Muslims'],
    correctIndex: 1,
    explanation: 'All three founding dynasties spoke Turkic languages (Babur and Shah Ismail even wrote Turkic verse), and Persian was a language of government and high culture, above all at the Safavid and Mughal courts. The empires traded, fought and allied with Europeans, and non-Muslims were protected but unequal.',
    partNumber: 7,
    partTitle: 'Synthesis: Comparing the Three Empires',
  },
  {
    id: 'whis-ent-7b',
    question: 'Why do historians often close this period of the land-based empires at about 1750?',
    options: ['Industrial Europe\'s growing power soon changed the balance they faced', 'All three Islamic empires had collapsed completely by about that year', 'Gunpowder weapons were first invented around that time', 'Islam stopped spreading to new regions after that year'],
    correctIndex: 0,
    explanation: 'After 1750, industrial Europe\'s growing economic and military power forced these empires to respond to a new kind of challenge. The Ottomans survived well past 1750, and gunpowder was centuries older.',
    partNumber: 7,
    partTitle: 'Synthesis: Comparing the Three Empires',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Expansion: Gunpowder, Steppe Heritage & Conquest' },
    { partNumber: 3, partTitle: 'Ruling an Empire: Legitimacy and Administration' },
    { partNumber: 4, partTitle: 'Religion, Rivalry and New Faiths' },
    { partNumber: 5, partTitle: 'Challenges and Change, c. 1600–1750' },
    { partNumber: 6, partTitle: 'Exam Workshop: Sources, SAQs and the LEQ' },
    { partNumber: 7, partTitle: 'Synthesis: Comparing the Three Empires' },
  ]
}
