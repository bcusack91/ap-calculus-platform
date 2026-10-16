/**
 * Entrance Quiz — Land-Based Empires, c. 1450–1750 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whla-ent-1a',
    question: 'Peter the Great made nobles adopt Western dress, built a navy and a new capital on the Baltic, and modeled his army on European forces. A historian would most likely cite these policies as evidence of',
    options: ['a ruler borrowing foreign practices to strengthen an autocratic state', 'a tsar limiting his own power by sharing rule with an elected assembly', 'a state turning inward and cutting its contacts with western Europe', 'a monarch converting his realm from Orthodoxy to Roman Catholicism'],
    correctIndex: 0,
    explanation: 'Peter adopted Western military, naval and cultural practices selectively in order to make the tsar\'s state stronger, not to share power. He kept autocracy and the Orthodox Church firmly under state control.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whla-ent-1b',
    question: 'After overthrowing the Mongol Yuan in 1368, the founder of the Ming revived the civil service exams and Confucian court rituals. These policies are best understood as',
    options: ['copying steppe institutions to keep Mongol allies loyal to the court', 'restoring native Chinese traditions after a period of foreign rule', 'imitating European bureaucracies met on the Zheng He voyages', 'adopting Manchu customs in preparation for a Qing alliance'],
    correctIndex: 1,
    explanation: 'The Ming presented itself as restoring Chinese, Confucian government after Mongol rule, so reviving the exams and rituals was a claim to legitimacy. Zheng He\'s voyages never reached Europe, and the Manchu conquest came only in 1644.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    id: 'whla-ent-2a',
    question: 'Why did Ottoman sultans rely on soldiers and officials raised through the devshirme rather than on the Turkish landed nobility?',
    options: ['Recruits had first passed rigorous exams on the Confucian classics', 'Recruits came from Muslim noble houses that kept large private armies', 'Recruits owed everything to the ruler and had no family power base', 'Recruits were chosen by their home villages and answered to local councils'],
    correctIndex: 2,
    explanation: 'Boys taken from Christian families were converted, trained and placed as janissaries or administrators, so their status depended entirely on the sultan. That made them a counterweight to nobles who had their own land and followers.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    // source: original
    id: 'whla-ent-2b',
    question: 'The following summary, written for this question, describes an Ottoman policy: "Orthodox Christian, Armenian and Jewish communities had religious leaders who ran their own courts on marriage and inheritance and helped collect taxes. Non-Muslims paid the jizya and could not hold the highest offices." The policy best illustrates',
    options: ['forced conversion meant to make the empire religiously uniform', 'full legal equality granted to every religious community alike', 'a secular state that left religion entirely out of government', 'accommodation of diversity within an Islamic hierarchy'],
    correctIndex: 3,
    explanation: 'The millet system let non-Muslim communities govern their own internal affairs, which bought stability, while the jizya and the bar on top offices preserved Muslim supremacy. It was neither forced conversion nor full equality.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'whla-ent-3a',
    question: 'Which comparison of religious policy in the Safavid Empire and in Akbar\'s Mughal Empire is most accurate?',
    options: ['The Safavids imposed Shia Islam on their subjects, while Akbar courted his Hindu majority', 'Akbar required his Hindu subjects to convert, while the Safavids protected Sunni worship', 'Both made Sunni Islam the state faith and banned all other forms of worship in public', 'Both relied on Christian converts to staff their armies and to run their royal courts'],
    correctIndex: 0,
    explanation: 'Shah Ismail made Shia Islam the state religion and enforced conversion, while Akbar abolished the jizya, married Rajput princesses and appointed Hindu officials. The Safavids were Shia, not Sunni, and neither empire depended on Christian converts.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whla-ent-3b',
    question: 'Akbar abolished the jizya and appointed Hindu officials; a century later Aurangzeb reimposed the jizya and destroyed temples, and Hindu and Sikh revolts followed. Which conclusion does this contrast best support?',
    options: ['Mughal emperors could not change policy because Islamic law fixed it', 'Religious policy shaped how loyal the Hindu majority stayed', 'The Mughals ruled a Muslim majority that had always opposed toleration', 'The jizya was a tax collected from Muslims to support Hindu temples'],
    correctIndex: 1,
    explanation: 'Akbar\'s tolerance built cooperation with Hindu elites, while Aurangzeb\'s orthodoxy provoked rebellions that weakened the empire, so policy toward the Hindu majority mattered to stability. The jizya was a tax on non-Muslims, and Mughal subjects were mostly Hindu.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whla-ent-4a',
    question: 'Which pair of Qing policies best shows a conquest dynasty combining coercion with accommodation?',
    options: ['Banning Buddhism in Tibet, and ending the exams to favor Manchu officers', 'Expelling Han officials from office, and keeping records only in Mongol', 'Forcing Han men to wear the queue, and restoring the Confucian exams', 'Giving Han generals sole command, and closing every Confucian school'],
    correctIndex: 2,
    explanation: 'The queue order forced a visible sign of submission, while keeping the examinations and Confucian rituals won over the Han scholar-gentry. The Qing actually patronized Tibetan Buddhism and paired Manchu with Han officials rather than expelling them.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whla-ent-4b',
    question: 'Which comparison of the Manchu Qing and the Mongol Yuan as foreign rulers of China is most accurate?',
    options: ['Both abolished the examination system for good and governed only through their own military officers', 'The Yuan took up Confucian rule wholeheartedly, while the Qing banned Chinese language and literature', 'Both held power only briefly, and each dynasty lost control of China within a single generation', 'The Qing took up Chinese bureaucratic forms more fully, while the Yuan kept firmer ethnic separation'],
    correctIndex: 3,
    explanation: 'Both dynasties were non-Han conquerors, but the Qing adopted the Chinese bureaucracy, exams and Confucian ideology far more thoroughly than the Yuan, which kept Chinese at a distance. The Qing ruled from 1644 to 1912, hardly a single generation.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    id: 'whla-ent-5a',
    question: 'Ottoman devshirme officials, Mughal mansabdars and Qing exam graduates all served their rulers, c. 1450–1750. What did these systems have most in common?',
    options: ['Each created servants whose posts depended on the throne, not on inherited land', 'Each recruited officials through exams on the Quran and the Confucian classics', 'Each allowed officials to pass their offices and estates on to their sons', 'Each drew officials only from the ruling dynasty\'s own ethnic group'],
    correctIndex: 0,
    explanation: 'All three systems produced servants whose rank came from the ruler and was not hereditary, which reduced the power of independent nobles. Mansabdar ranks died with the holder, and the devshirme drew on Christian subjects, so neither hereditary office nor ethnic exclusivity fits.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whla-ent-5b',
    question: 'Akbar married Rajput princesses, and Qing emperors arranged marriages with Mongol noble families. Both policies are best understood as',
    options: ['efforts to convert the brides\' families to the ruler\'s religion', 'alliance building that tied powerful outsiders to the dynasty', 'attempts to create a hereditary priesthood loyal to the court', 'imitation of royal marriage customs borrowed from Europe'],
    correctIndex: 1,
    explanation: 'Marriage alliances bound warrior elites outside the ruling group (Rajput Hindus, Mongol nobles) to the dynasty and strengthened its hold on diverse territory. Akbar did not require his Hindu wives\' families to convert.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'whla-ent-6a',
    question: 'By the 1700s the janissaries, once the core of Ottoman military strength, often resisted new weapons and drill. This best illustrates which pattern?',
    options: ['European states copying Ottoman military methods', 'Devshirme recruits rejecting Islam and rebelling', 'Institutions that built an empire later blocking reform', 'Navies replacing land armies in every Asian empire of the era'],
    correctIndex: 2,
    explanation: 'The janissaries had helped build Ottoman power, but as a privileged corps they later defended their position against change, leaving the army behind European rivals. This institutional rigidity is a common thread in the decline of the land-based empires.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whla-ent-6b',
    question: 'Which development most directly reduced the Ottoman Empire\'s income from long-distance trade over the 1600s and 1700s?',
    options: ['The Ottoman conquest of Egypt, which cut the empire off from the Red Sea', 'A Safavid ban on silk exports that closed every overland route to Europe', 'Chinese treasure fleets that redirected the spice trade into the Pacific', 'European ships reaching Asia around Africa and skipping Ottoman lands'],
    correctIndex: 3,
    explanation: 'As Dutch, English and Portuguese ships carried Asian goods around the Cape of Good Hope, more trade bypassed the routes the Ottomans taxed. Conquering Egypt in 1517 gave the Ottomans the Red Sea rather than cutting them off, and the Ming fleets ended in 1433.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whla-ent-7a',
    question: 'A DBQ document is a court chronicle praising a Mughal emperor\'s justice and piety, written by an official he appointed. Which sourcing point is most useful?',
    options: ['Its author owed his position to the throne, so he likely flatters his patron', 'A foreign visitor wrote it without understanding Indian customs', 'The pious language proves that a Hindu priest must have written it', 'Such praise shows that every subject of the empire admired the ruler'],
    correctIndex: 0,
    explanation: 'A writer who owed his post to the emperor had reason to flatter him, so point of view limits how far the praise can be trusted. The document reveals how the court wanted the ruler seen, not what all subjects thought.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whla-ent-7b',
    question: 'Which thesis best answers the prompt "Compare the methods Russia and the Ottoman Empire used to control their elites, c. 1450–1750"?',
    options: ['Russia and the Ottomans had both similarities and differences in how they handled their elites', 'Both tied elites to state service, but Russia used landed nobles while the Ottomans used devshirme recruits', 'Both relied on exam-trained scholars, so their ways of managing elites were basically identical', 'The Ottomans had no elites to manage, since the sultan personally governed every single province'],
    correctIndex: 1,
    explanation: 'This thesis states a specific similarity (service to the state) and a specific difference (hereditary landed nobility versus slave-recruited servants), which sets up a comparative argument. The first option is too vague to defend, and the others are false.',
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
