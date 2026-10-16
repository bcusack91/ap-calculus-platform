/**
 * Entrance Quiz — Dar al-Islam, c. 1200–1450 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whda-ent-1a',
    question: 'Which comparison of Dar al-Islam and Latin Christendom, c. 1200–1450, is most accurate?',
    options: ['Both were ruled by a single emperor who controlled every kingdom within them', 'Dar al-Islam wrote in Latin, while Christendom wrote its scholarship in Arabic', 'Both banned long-distance trade with anyone who followed a different faith', 'Both joined many separate states through a shared faith and scholarly language'],
    correctIndex: 3,
    explanation: 'Arabic and Islamic law linked Muslim states, while Latin and the Catholic Church linked the kingdoms of western Europe, so each created cultural unity across political borders. Neither was a single empire, and both traded with outsiders.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whda-ent-1b',
    question: 'During his travels, Ibn Battuta, a legal scholar from Morocco, was appointed a judge (qadi) in Delhi and later in the Maldive Islands. This best illustrates',
    options: ['the Delhi Sultanate being governed directly from Morocco', 'Mongol khans appointing judges across the Islamic world', 'a common body of law opening posts far from home', 'Sufi brotherhoods replacing Islamic law in South Asia'],
    correctIndex: 2,
    explanation: 'Because Muslim societies shared Arabic learning and Islamic law, a jurist trained in North Africa could serve courts thousands of miles away. Delhi was independent of Morocco, and neither post was a Mongol appointment.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    id: 'whda-ent-2a',
    question: 'How did Arabic versions of Aristotle and Ibn Sina\'s medical writings most often reach European universities, c. 1100–1300?',
    options: ['Mongol envoys carried the texts from Baghdad to the papal court in Rome', 'Scholars in Spain and Sicily turned them into Latin', 'Chinese merchants sold copies along the Silk Roads to Italian traders', 'Byzantine missionaries brought them to Europe by way of West Africa'],
    correctIndex: 1,
    explanation: 'Translators in places such as Toledo and Sicily, where Arabic learning was available after Christian conquest, turned Arabic works into Latin. Those translations fed the curriculum of new European universities.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whda-ent-2b',
    question: 'Al-Khwarizmi built algebra on Greek and Babylonian methods and used Indian numerals, which later reached Europe through Arabic texts. This best illustrates',
    options: ['the Islamic world blending traditions and passing them on', 'European scholars teaching mathematics to the Islamic world', 'Chinese inventions reaching India through Islamic conquest', 'a collapse of learning everywhere after the fall of Rome'],
    correctIndex: 0,
    explanation: 'Islamic scholars drew on Greek, Persian and Indian knowledge, added original work, and transmitted the result to Europe. The flow ran from the Islamic world to Europe, not the reverse.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'whda-ent-3a',
    question: 'A merchant in Cairo deposits money with a trading house and receives a written bill that a partner firm in Aden will honor. The chief advantage of this practice was that it',
    options: ['allowed traders to avoid paying any taxes to Muslim rulers', 'required merchants to charge interest on every loan', 'gave the caliph a monopoly on all long-distance trade', 'let merchants move credit without carrying coin'],
    correctIndex: 3,
    explanation: 'Bills of exchange (suftaja) allowed traders to transfer value across long, dangerous routes without transporting gold or silver. Islamic law discouraged interest, and no caliph monopolized trade.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whda-ent-3b',
    question: 'Which comparison of Islamic and Chinese long-distance trade, c. 1200–1450, is most accurate?',
    options: ['Chinese merchants traded freely everywhere, while Muslim trade was run entirely by the caliph', 'Both avoided the Indian Ocean and relied only on overland caravans across Central Asia', 'Muslim merchants worked through private networks, while much Chinese trade ran through tribute', 'Both refused to use credit or contracts and insisted that every deal be paid in gold'],
    correctIndex: 2,
    explanation: 'Islamic commerce ran largely on private partnerships, contracts and credit backed by shared law, while China\'s tributary system linked much foreign trade to state diplomacy, especially after the early Ming restricted private voyages. Both networks used the Indian Ocean as well as land routes.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whda-ent-4a',
    question: 'Which development best explains why Persian became the court language of the Delhi Sultanate?',
    options: ['Most of the sultanate\'s Hindu subjects already spoke Persian at home', 'Its Turkic rulers had taken on Persian ruling culture before conquest', 'Mongol khans required every subject state to keep its records in Persian', 'Abbasid caliphs appointed Persian-speaking governors to rule in Delhi'],
    correctIndex: 1,
    explanation: 'Turkic dynasties had blended their military traditions with Persian bureaucracy and Islam before entering India, and they carried that synthesis to Delhi. The sultanate resisted the Mongols and was not governed by the caliph.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whda-ent-4b',
    question: 'Which statement best describes the political structure of the Islamic world by about 1200?',
    options: ['Rival sultans and emirs held real power under a symbolic caliph', 'A single caliph in Baghdad directly governed all lands from Spain to India', 'A Mongol khan ruled every Muslim land from the steppe capital of Karakorum', 'Elected councils of religious scholars governed each major Muslim city'],
    correctIndex: 0,
    explanation: 'By 1200 the Abbasid caliphate had fragmented among regional dynasties such as the Seljuks and Ayyubids, which ruled while acknowledging the caliph in name. The Mongols did not conquer Baghdad until 1258.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    // source: original
    id: 'whda-ent-5a',
    question: 'The following summary, written for this question, describes a court record from 14th-century Cairo: a widow sues her late husband\'s brother for her share of a house, and the qadi orders that share paid to her. The record best supports which claim?',
    options: ['Women in Islamic societies were barred from owning any property', 'Islamic courts refused to hear testimony from women in any case', 'Islamic inheritance rules divided estates equally between the sexes', 'Islamic law gave women property rights they could defend in court'],
    correctIndex: 3,
    explanation: 'Sharia granted women inheritance shares and property ownership, and women did bring cases before qadis. Women\'s shares were usually half those of male relatives, so the system was not equal.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whda-ent-5b',
    question: 'Which comparison of social hierarchy in Dar al-Islam and in the South Asian caste system is most accurate?',
    options: ['Both fixed a person\'s rank permanently at birth with no possible change', 'Caste allowed movement through conversion, while Islamic law fixed status at birth', 'Islamic law ranked people by faith and freedom, but conversion or manumission could change status', 'Both treated all believers as legal equals regardless of gender or freedom'],
    correctIndex: 2,
    explanation: 'Islamic societies distinguished Muslims from dhimmis and free people from enslaved people, yet a dhimmi could convert and an enslaved person could be freed. Caste, by contrast, was inherited and justified as fixed by birth.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'whda-ent-6a',
    question: 'Which pairing correctly matches a change and a continuity in Dar al-Islam between 1200 and 1400?',
    options: ['Change: the caliphate moved to Delhi; continuity: Baghdad stayed the leading city', 'Change: Cairo overtook Baghdad as a center; continuity: trade spread Islam abroad', 'Change: Islam stopped spreading; continuity: the Abbasids governed all Muslim lands', 'Change: Arabic fell out of use; continuity: Mongol khans rejected Islam throughout'],
    correctIndex: 1,
    explanation: 'After the sack of Baghdad in 1258, Mamluk Cairo became a leading political and intellectual center, while merchants and Sufis continued to spread Islam along trade routes. Several Mongol rulers, such as Ghazan, converted to Islam.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whda-ent-6b',
    question: 'Rashid al-Din, a Persian vizier serving the Mongol Il-Khans, wrote a history covering peoples from China to Europe. This work best illustrates',
    options: ['Mongol rule in Persia encouraging exchange across Eurasia', 'a Mongol ban on Persian scholarship after the conquest', 'the Mamluk conquest of Persia and its Mongol rulers', 'the Abbasid restoration of the caliphate in Baghdad'],
    correctIndex: 0,
    explanation: 'Mongol-ruled Persia, linked to China through the wider empire, became a meeting point for knowledge from across Eurasia, and its rulers patronized Persian scholars. The Mamluks never conquered Persia, and the Abbasids did not return to power.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whda-ent-7a',
    question: 'In his travel account, Ibn Battuta disapproved of women in Mali appearing in public in ways he considered immodest. A historian using this passage should recognize that',
    options: ['Ibn Battuta never in fact traveled to West Africa', 'the passage proves that Islam had not reached Mali', 'his training as a Moroccan jurist shaped his views', 'the account was written by a Malian court historian'],
    correctIndex: 2,
    explanation: 'Ibn Battuta judged West African customs by the standards of a North African legal scholar, so the passage reveals his point of view as much as Malian practice. Mali\'s rulers were Muslim, and he did visit the region in the 1350s.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whda-ent-7b',
    question: 'A student argues that 1258 is the best turning point for the history of Dar al-Islam. Which evidence best challenges this periodization?',
    options: ['The Mongols killed the last Abbasid caliph when they took Baghdad', 'Merchants and Sufis kept winning converts in Africa and Southeast Asia after 1258', 'Baghdad\'s libraries and the House of Wisdom were destroyed in the sack', 'The Mongol Il-Khanate was founded in Persia soon after the city fell'],
    correctIndex: 1,
    explanation: 'If key processes such as the spread of Islam through merchants and Sufis continued unchanged, 1258 was less of a turning point than the student claims. The other options describe the sack\'s effects and so support the periodization.',
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
