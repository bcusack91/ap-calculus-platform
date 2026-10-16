/**
 * Entrance Quiz — Revolutions & Independence Movements (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whre-ent-1a',
    question: 'Hidalgo\'s 1810 revolt in Mexico drew masses of indigenous and mestizo peasants and was crushed, yet independence came in 1821 under the conservative creole officer Iturbide. This sequence best suggests that',
    options: ['peasant armies won Mexican independence once creoles stepped aside', 'creole elites backed independence once it no longer threatened their status', 'Spain granted independence freely after the Haitian Revolution ended', 'the Catholic Church opposed independence from start to finish'],
    correctIndex: 1,
    explanation: 'Creoles feared Hidalgo\'s social revolution but supported a conservative break from Spain that kept their property and rank, which is why Iturbide succeeded. Hidalgo himself was a priest, so the Church was not uniformly opposed.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whre-ent-1b',
    question: 'Which development best explains why independence movements across Spanish America broke out between 1808 and 1810 rather than earlier?',
    options: ['The Haitian Revolution had just failed, which reassured creole planters', 'Spain had freed all enslaved people in its colonies, angering planters', 'British armies had seized Mexico and Peru, forcing Spain to withdraw', 'Napoleon\'s seizure of Spain left the colonies with no lawful king'],
    correctIndex: 3,
    explanation: 'When Napoleon forced the Spanish king from the throne in 1808, colonial juntas formed to govern in his absence, opening the way to independence. Haiti had won its independence in 1804, and Spain did not abolish colonial slavery then.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    // source: original
    id: 'whre-ent-2a',
    question: 'The following summary, written for this question, paraphrases Bolívar\'s Angostura Address (1819): he urged a republic with a powerful president and a hereditary senate, warning that his people were not yet ready for full democracy. This position is best understood in the context of',
    options: ['creole fears that independence could unleash upheaval like Haiti\'s', 'Bolívar\'s lasting loyalty to the Spanish monarchy and its viceroys', 'the influence of Marxist class theory on South American leaders', 'the success of universal male suffrage across early-1800s Europe'],
    correctIndex: 0,
    explanation: 'Bolívar drew on Enlightenment ideas but, like many creoles, feared that unchecked democracy would bring social chaos or a race war, so he favored strong executive power. Marx wrote decades later, and Europe had no universal suffrage in 1819.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whre-ent-2b',
    question: 'Which statement best describes the social results of independence in the new South American republics?',
    options: ['Land was handed back to indigenous communities in each of the new republics', 'Peninsulares kept control of government while creoles stayed shut out', 'Creoles replaced peninsulares at the top, while most other people saw little change', 'Slavery ended everywhere at once in 1825 when the last Spanish army surrendered'],
    correctIndex: 2,
    explanation: 'Independence transferred power from Spanish-born officials to creole elites, but the social hierarchy beneath them largely survived. Slavery lingered in several republics for decades, and indigenous land was not restored.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    id: 'whre-ent-3a',
    question: 'In June 1848 Paris workers rose up when the new French republic closed its national workshops, and middle-class liberals supported the army that crushed them. This episode best illustrates which reason the 1848 revolutions failed?',
    options: ['Russian troops marched west to restore the French king to the throne', 'Germans and Czechs fought each other rather than the Habsburg army', 'Urban workers refused to support the idea of a republic at all', 'Moderates and radical laborers split over their aims'],
    correctIndex: 3,
    explanation: 'The June Days showed the gap between liberals who wanted constitutional order and workers who wanted social reform; frightened liberals sided with order. Ethnic rivalries mattered in the Austrian Empire, but they do not explain this French episode.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whre-ent-3b',
    question: 'Why did nationalism threaten the Austrian Empire more than it threatened France in the 1800s?',
    options: ['France had no monarchy at any point in the century for nationalists to overthrow', 'The Habsburgs ruled many peoples, and each could claim a nation-state of its own', 'Austria had already united every German speaker under a single government', 'French nationalists rejected popular sovereignty and supported absolute rule'],
    correctIndex: 1,
    explanation: 'A multinational empire of Germans, Hungarians, Czechs, Poles and Italians was undermined by the idea that each nation deserved self-rule, while France was already a largely unified nation-state. France had kings and an emperor for much of the century.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whre-ent-4a',
    question: 'What was Bismarck\'s main aim in going to war with Austria in 1866?',
    options: ['To push the Habsburgs out and let Prussia lead a united Germany', 'To seize Alsace-Lorraine with its rich deposits of coal and iron ore', 'To take Schleswig and Holstein away from the kingdom of Denmark', 'To free the Italian states from Habsburg rule for Italian nationalists'],
    correctIndex: 0,
    explanation: 'The Seven Weeks\' War pushed Austria out of German affairs and left Prussia dominant among the German states. Schleswig-Holstein was the issue in 1864 and Alsace-Lorraine was taken from France in 1871.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whre-ent-4b',
    question: 'Which comparison of German and Italian unification is most accurate?',
    options: ['Both grew directly out of the liberal revolutions of 1848 and their elected parliaments', 'Germany united peacefully through a parliament, while Italy needed several wars', 'Each was led by one kingdom\'s statesman using both war and diplomacy', 'Both were achieved by republics that abolished their monarchies and their aristocracies'],
    correctIndex: 2,
    explanation: 'Prussia under Bismarck and Piedmont under Cavour each used diplomacy and war to unite their nations, and in Italy Garibaldi\'s popular campaign added the south. Both new states were monarchies, and both came after 1848\'s failure rather than from it.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    id: 'whre-ent-5a',
    question: 'Which development most directly led to the overthrow of the Tokugawa shogunate in 1868?',
    options: ['Japan\'s defeat by Qing China in a war over control of Korea', 'Unequal treaties after Perry\'s arrival exposed the regime\'s weakness', 'A peasant uprising inspired by the ideals of the French Revolution', 'A Russian invasion that conquered the northern island of Hokkaido'],
    correctIndex: 1,
    explanation: 'Perry\'s warships and the unequal treaties that followed showed the shogunate could not defend Japan, so reform-minded samurai overthrew it and restored the emperor. Japan defeated China in 1895, decades later.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whre-ent-5b',
    question: 'Which evidence best supports the claim that the Meiji Restoration was a "revolution from above"?',
    options: ['Peasant armies overthrew the emperor and declared a republic', 'Foreign advisers drafted every law and ran all the ministries', 'Merchants seized power and dissolved the imperial court entirely', 'Samurai in government abolished the domains and their own class'],
    correctIndex: 3,
    explanation: 'Members of the old elite led the change themselves, replacing domains with prefectures and ending samurai privileges. The emperor was restored, not overthrown, and foreign experts advised rather than ruled.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'whre-ent-6a',
    question: 'Which comparison of the Indian revolt of 1857 and the Battle of Adwa (1896) is most accurate?',
    options: ['Both were armed challenges to European power, but only one preserved independence', 'Both were peaceful petitions that asked for seats on colonial legislative councils', 'Both ended in victory for the colonized and forced Britain to withdraw its forces', 'Both were led by Western-educated lawyers who wanted reform rather than war'],
    correctIndex: 0,
    explanation: 'The 1857 revolt was crushed and led to direct British Crown rule, while Menelik II\'s army defeated Italy at Adwa and kept Ethiopia independent. Petitions and lawyers describe the Indian National Congress instead.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whre-ent-6b',
    question: 'Many leaders of late-1800s anti-colonial movements had been educated in European-style schools. Which statement best explains this pattern?',
    options: ['Colonial schools trained them as army officers to lead armed revolts', 'European powers selected them to run the independence movements', 'They learned ideas of nationhood and rights to turn on empire', 'Missionary schools taught them to reject Christianity entirely'],
    correctIndex: 2,
    explanation: 'Western education exposed colonial elites to liberal and nationalist ideas, which they used to argue that colonial rule violated its own principles. Colonialism thus helped produce the nationalism that later challenged it.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whre-ent-7a',
    question: 'An SAQ asks for one similarity between German unification and the Meiji Restoration. Which response earns the point?',
    options: ['Both began as mass peasant revolutions that abolished the monarchy', 'Both were imposed by foreign powers after a crushing military defeat', 'Both rejected Western technology in order to preserve old traditions', 'Elites in each case built strong states and modern armies from above'],
    correctIndex: 3,
    explanation: 'Bismarck and the Meiji oligarchs both led from above, centralizing power and building industrial and military strength under a monarch. Neither abolished the monarchy or rejected modern technology.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whre-ent-7b',
    question: 'Which thesis best answers the prompt "Evaluate the extent to which Enlightenment ideas caused revolutions in the Atlantic world, 1750–1850"?',
    options: ['Enlightenment ideas influenced revolutions in a variety of ways across the Atlantic world', 'Enlightenment ideas inspired revolutionary leaders, but crises such as Napoleon\'s invasion of Spain set the timing of revolt', 'Enlightenment ideas played no role, since every revolution of the period was purely economic', 'Revolutions broke out only in colonies where enslaved people had risen up first'],
    correctIndex: 1,
    explanation: 'This thesis takes a clear position on extent and qualifies it with other causes, which sets up a line of reasoning and complexity. The first option is too vague to defend, and the others are false absolutes.',
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
