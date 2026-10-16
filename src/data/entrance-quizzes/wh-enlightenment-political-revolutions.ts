/**
 * Entrance Quiz — The Enlightenment & Political Revolutions (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  // source: Declaration of Independence, 1776; verbatim
  {
    id: 'when-ent-1a',
    question: '"That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government..."\n— Declaration of Independence, 1776\n\nThe passage most directly rejects which earlier idea?',
    options: ['That monarchs answer to God alone rather than to their subjects', 'That trade should be regulated to enrich the mother country', 'That the powers of government should be split among separate branches', 'That every religion should be tolerated by the state'],
    correctIndex: 0,
    explanation: 'Claiming that the people may abolish a government that violates their rights denies that rulers hold power by divine grant. Mercantilism was a separate economic target, and separation of powers and toleration were Enlightenment ideas the revolutionaries embraced, not rejected.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'when-ent-1b',
    question: 'Which development is best explained as a consequence of the Haitian Revolution?',
    options: ['The 1783 Treaty of Paris recognizing American independence', 'Napoleon\'s decision in 1803 to sell Louisiana to the United States', 'Napoleon\'s invasion of Spain and seizure of its throne in 1808', 'The U.S. Constitution\'s division of power among three branches'],
    correctIndex: 1,
    explanation: 'The defeat of the army Napoleon sent to Saint-Domingue ended his hopes for an American empire, so he sold Louisiana. The Treaty of Paris came before the revolution began, and the invasion of Spain and the Constitution had other causes.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  // source: original
  {
    id: 'when-ent-2a',
    question: 'The following summary, written for this question, describes an argument published in England in 1792: women seem weak and frivolous only because they are denied a serious education, and reason belongs equally to both sexes.\n\nThe argument most directly challenged',
    options: ['the divine right of kings to rule without the consent of subjects', 'the view that full rights and intellect were for men alone', 'the mercantilist rules that limited colonial trade and manufacturing', 'the Catholic Church\'s control of schools and universities in France'],
    correctIndex: 1,
    explanation: 'This is Mary Wollstonecraft\'s case in A Vindication of the Rights of Woman, which turned Enlightenment reasoning against thinkers who left women out of natural rights. The other choices name real Enlightenment targets, but the summary is about women\'s exclusion.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'when-ent-2b',
    question: 'A government ends its state church\'s power to punish dissenters and allows open criticism of the clergy. These reforms draw most directly on the ideas of',
    options: ['Montesquieu', 'Rousseau', 'Voltaire', 'Adam Smith'],
    correctIndex: 2,
    explanation: 'Voltaire campaigned for religious toleration and free expression and attacked the power of the Church. Montesquieu is known for separation of powers, Rousseau for the general will, and Smith for free-market economics.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'when-ent-3a',
    question: 'Which development most directly turned many British colonists in North America toward resistance in the 1760s?',
    options: ['France\'s alliance with the colonists in 1778', 'Napoleon\'s blockade of British trade across the Atlantic', 'The Constitution\'s compromise over counting enslaved people', 'Parliament\'s new taxes to pay for the Seven Years\' War'],
    correctIndex: 3,
    explanation: 'After 1763 Britain ended its loose enforcement and taxed the colonies through measures such as the Stamp Act, which colonists said violated their rights because they had no seats in Parliament. The French alliance, the Constitution, and Napoleon all came later.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'when-ent-3b',
    question: 'Which evidence best supports the claim that the American Revolution changed who governed far more than it changed the structure of society?',
    options: ['The Declaration of Independence was reprinted across Europe', 'Colonial armies defeated the British at Saratoga and Yorktown', 'Most states kept property rules for voting, and slavery stayed legal', 'The Constitution divided authority among three separate branches'],
    correctIndex: 2,
    explanation: 'Property qualifications and the Constitution\'s protection of slavery show that the new republic left the social order largely in place. The other choices are true, but they describe the spread of ideas, the war, and the design of government rather than social change.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'when-ent-4a',
    question: 'In France before 1789, the clergy and nobility, together about 2 percent of the population, paid almost no direct taxes, while the Third Estate, about 98 percent, carried most of the burden. How did this structure help bring on revolution?',
    options: ['Peasants demanded a return to the absolutism of Louis XIV', 'The nobles\' campaign to tax themselves split them from the king', 'A royal debt crisis turned the privileges of the few into a political fight', 'The Church\'s heavy taxes on nobles drove the king into an alliance with them'],
    correctIndex: 2,
    explanation: 'War debts forced Louis XVI to seek new revenue, and the Estates-General he summoned became a battle over privilege that the Third Estate won by declaring itself the National Assembly. Nobles resisted taxes on themselves, and the Church did not tax the nobility.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'when-ent-4b',
    question: 'Which of the following took place during the radical phase of the French Revolution (1792–1794)?',
    options: ['The Third Estate\'s declaration that it was the National Assembly', 'The adoption of the Declaration of the Rights of Man and of the Citizen', 'The issuing of Napoleon\'s Civil Code across French territories', 'Executions of suspected enemies by the Committee of Public Safety'],
    correctIndex: 3,
    explanation: 'The Committee of Public Safety, led by Robespierre, ran the Terror of 1793–1794. The National Assembly and the Declaration of Rights belong to the moderate phase of 1789, and the Civil Code came under Napoleon in 1804.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'when-ent-5a',
    question: 'Which development most directly set the stage for the uprising of enslaved people in Saint-Domingue in August 1791?',
    options: ['Revolutionary France\'s debate over who held the rights of citizens', 'Napoleon\'s attempt to restore slavery throughout the French Caribbean', 'Britain\'s abolition of slavery throughout its Caribbean colonies', 'The United States\' formal recognition of Haitian independence'],
    correctIndex: 0,
    explanation: 'Free people of color and then the enslaved seized on the Revolution\'s language of rights, which white colonists tried to keep for themselves. Napoleon\'s move came in 1802, British abolition in 1833, and U.S. recognition only in 1862.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'when-ent-5b',
    question: 'Toussaint Louverture fought alongside Spain early in the revolution, then joined France and fought the British. Which aim best explains these shifting alliances?',
    options: ['Securing freedom by joining whichever power would guarantee it', 'Restoring the colony\'s plantation economy under Spanish rule', 'Uniting Hispaniola with the new republic of the United States', 'Winning a noble title for himself in the French army'],
    correctIndex: 0,
    explanation: 'Toussaint went over to France after the French Republic abolished slavery in 1794, showing that emancipation, not loyalty to any empire, guided his choices. He did not seek Spanish rule, union with the United States, or personal titles.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  // source: original
  {
    id: 'when-ent-6a',
    question: 'The following summary was written for this question.\n\nIn 1810, creole leaders in Caracas and Buenos Aires formed governing councils, or juntas, that claimed to rule in the name of the captive King Ferdinand VII.\n\nThis claim is best understood as',
    options: ['proof that the creoles wanted Joseph Bonaparte to rule them', 'a cautious first step that presented self-rule as loyalty', 'a demand to abolish slavery across Spanish America at once', 'an alliance with Haiti to spread revolution through the colonies'],
    correctIndex: 1,
    explanation: 'With Napoleon holding Spain, creoles could take power locally while appearing loyal to the legitimate king, a stance that soon gave way to open independence. They rejected Joseph Bonaparte, and the juntas did not demand immediate abolition or ally with Haiti.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'when-ent-6b',
    question: 'Which group in Spanish America was most likely to oppose independence in the 1810s?',
    options: ['Creole merchants who resented Spanish trade rules', 'Mestizo soldiers who hoped for land and reform', 'Enslaved people who were offered freedom for service', 'Peninsulares who held royal offices'],
    correctIndex: 3,
    explanation: 'Spanish-born peninsulares held the top posts in church and government and stood to lose them if Spain\'s rule ended. Creole merchants led the movements, and mestizo and enslaved soldiers joined in hope of land or freedom.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'when-ent-7a',
    question: 'Which evidence best supports the claim that the Atlantic revolutions spread ideas across national borders?',
    options: ['The U.S. Constitution created three separate branches of power', 'The Terror executed about 17,000 people in France', 'Haitian rebels invoked the French language of liberty and rights', 'Hidalgo was executed in 1811 after his uprising failed'],
    correctIndex: 2,
    explanation: 'Enslaved and free people in Saint-Domingue took up rights language from revolutionary France, showing ideas moving between societies. The other choices are accurate but describe events inside a single country.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'when-ent-7b',
    question: 'Which statement describes a continuity shared by the American, French, and Spanish American revolutions?',
    options: ['Slavery remained legal under each new government', 'Creole elites led each revolution from start to finish', 'Monarchy was restored in each country within a decade', 'Women stayed excluded from formal political rights'],
    correctIndex: 3,
    explanation: 'None of these revolutions gave women the vote or office, despite claims of universal rights. Revolutionary France abolished slavery in 1794, monarchy returned only in France, and creoles led only the Spanish American movements.',
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
