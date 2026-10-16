/**
 * Entrance Quiz — Revolution & Independence (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushrev-ent-1a',
    question: 'Which colonial group was most directly angered by the Proclamation of 1763?',
    options: ['Boston merchants who imported tea from the East India Company', 'Land speculators and settlers who expected to move west', 'Anglican clergy who depended on support from the Crown', 'Enslaved people who hoped to escape to Native territory'],
    correctIndex: 1,
    explanation: 'The line along the Appalachians closed land that speculators such as George Washington and would-be settlers expected the war to open. Tea merchants, Anglican clergy, and enslaved people were not the groups whose plans the Proclamation blocked.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushrev-ent-1b',
    question: 'In 1775 the Continental Congress both sent the Olive Branch Petition to George III and organized the Continental Army under George Washington. This combination best shows that',
    options: ['Congress had already voted for independence before the war began', 'colonial leaders wanted seats in Parliament more than self-government', 'the king had accepted the colonists\' demands and withdrawn his troops', 'many leaders still hoped for peace even as they prepared to fight'],
    correctIndex: 3,
    explanation: 'Congress appealed to the king for peace while organizing defense, because independence was not yet the majority goal in 1775. Independence came in July 1776, the king rejected the petition and declared the colonies in rebellion, and colonists did not seek seats in Parliament.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: From Imperial Victory to Imperial Crisis, 1754–1766
  {
    id: 'apushrev-ent-2a',
    question: 'Pontiac\'s War (1763–1766) most directly influenced British policy by',
    options: ['persuading Parliament to repeal the Stamp Act at once', 'leading Britain to return Canada to France in 1763', 'convincing officials to restrict settlement in the West', 'ending British military spending in North America'],
    correctIndex: 2,
    explanation: 'The Native coalition\'s attacks on British forts showed that unregulated settlement meant costly wars, so the Proclamation of 1763 drew a line against it. The Stamp Act repeal had other causes, Canada stayed British, and Britain kept about 10,000 troops in America.',
    partNumber: 2,
    partTitle: 'From Imperial Victory to Imperial Crisis, 1754–1766',
  },
  {
    id: 'apushrev-ent-2b',
    question: 'Colonial nonimportation agreements contributed to the repeal of the Stamp Act in 1766 mainly by',
    options: ['cutting British exports so merchants lobbied Parliament', 'convincing the king to dissolve Parliament and call new elections', 'forcing British troops to leave Boston and New York for Canada', 'raising enough money for the colonies to buy all the stamps'],
    correctIndex: 0,
    explanation: 'When colonial merchants stopped buying British goods, British merchants who lost sales lobbied the Rockingham ministry to repeal the act. The king did not dissolve Parliament over it, troops were not driven out, and colonists refused the stamps rather than buying them.',
    partNumber: 2,
    partTitle: 'From Imperial Victory to Imperial Crisis, 1754–1766',
  },
  // Part 3: The Case for Resistance, Read Closely (1767–1776)
  // source: John Adams to Hezekiah Niles, February 13, 1818; verbatim
  {
    id: 'apushrev-ent-3a',
    question: '"The Revolution was effected before the war commenced. The Revolution was in the minds and hearts of the people..."\n— John Adams, letter to Hezekiah Niles, 1818\n\nWhich evidence best supports Adams\'s claim?',
    options: ['The Treaty of Paris recognized American independence in 1783', 'A French fleet trapped the British army at Yorktown in 1781', 'Local committees had displaced royal rule in many places by 1775', 'The Constitution divided federal power among three branches in 1787'],
    correctIndex: 2,
    explanation: 'Committees enforcing the Continental Association had in effect become local governments before fighting began, showing that loyalties had shifted before the war. The other choices come after 1775 and concern the war, the peace, or the later Constitution.',
    partNumber: 3,
    partTitle: 'The Case for Resistance, Read Closely (1767–1776)',
  },
  // source: Declaration of Independence, 1776; verbatim
  {
    id: 'apushrev-ent-3b',
    question: '"He has abdicated Government here, by declaring us out of his Protection and waging War against us."\n— Declaration of Independence, 1776\n\nThis grievance most directly refers to',
    options: ['the Stamp Act and the taxes Parliament placed on documents in 1765', 'the Proclamation of 1763 and its ban on settlement west of the mountains', 'the shooting of five colonists by British soldiers in Boston in 1770', 'the king\'s 1775 proclamation of rebellion and the war that followed'],
    correctIndex: 3,
    explanation: 'In August 1775 George III declared the colonies in rebellion, and the Prohibitory Act and British campaigns followed, so colonists charged that the king had put them outside his protection. The Stamp Act, the Proclamation, and the Boston Massacre came years earlier and do not fit "waging War."',
    partNumber: 3,
    partTitle: 'The Case for Resistance, Read Closely (1767–1776)',
  },
  // Part 4: The War for Independence: Comparison and Causation
  {
    id: 'apushrev-ent-4a',
    question: 'Which factor best explains why the British southern strategy of 1778–1781 failed?',
    options: ['Spain invaded Georgia and drove the British out of Savannah', 'Loyalists proved weaker than hoped amid a brutal backcountry civil war', 'The British never managed to capture a single southern port city', 'Enslaved people refused to leave plantations for British lines'],
    correctIndex: 1,
    explanation: 'Britain expected Loyalists to rise, but support was thin, raids pushed neutrals toward the Patriots, and militia warfare made the interior impossible to hold. Spain did not take Savannah, Britain captured both Savannah and Charleston, and thousands of enslaved people fled to British lines.',
    partNumber: 4,
    partTitle: 'The War for Independence: Comparison and Causation',
  },
  {
    id: 'apushrev-ent-4b',
    question: 'Which term of the 1783 Treaty of Paris best shows what American negotiators gained by making a separate preliminary peace with Britain?',
    options: ['British recognition of Native land rights in the Ohio Valley', 'A western boundary set at the Mississippi River', 'The transfer of Florida from Britain to the United States', 'A guarantee that Congress would restore Loyalist property'],
    correctIndex: 1,
    explanation: 'Dealing directly with Britain won the United States a generous western boundary along the Mississippi. The treaty ignored Native nations, Florida went to Spain, and Congress only promised to "recommend" that states restore Loyalist property.',
    partNumber: 4,
    partTitle: 'The War for Independence: Comparison and Causation',
  },
  // Part 5: Revolutionary Ideals and Their Limits
  // source: John Adams to Abigail Adams, April 14, 1776; verbatim
  {
    id: 'apushrev-ent-5a',
    question: '"As to your extraordinary Code of Laws, I cannot but laugh."\n— John Adams, reply to Abigail Adams\'s request that Congress "Remember the Ladies," April 1776\n\nAdams\'s reply best illustrates which of the following?',
    options: ['Revolutionary ideals did not change women\'s legal status', 'Congress voted in 1776 to give women the vote in national elections', 'Women took no part in the boycotts or the war effort', 'Most Patriot leaders wanted to end coverture as soon as possible'],
    correctIndex: 0,
    explanation: 'Adams dismissed his wife\'s plea to limit husbands\' power, and coverture survived the Revolution. Congress gave no women the vote, women were active in boycotts and the war, and Patriot leaders did not seek to end coverture.',
    partNumber: 5,
    partTitle: 'Revolutionary Ideals and Their Limits',
  },
  {
    id: 'apushrev-ent-5b',
    question: 'Pennsylvania\'s Gradual Abolition Act of 1780 freed children born to enslaved mothers after the act, but only when they reached age 28. This law best illustrates',
    options: ['an immediate end to slavery across the northern states', 'a federal ban on slavery passed by the Continental Congress', 'a slow northern emancipation that kept many in bondage', 'the spread of plantation slavery into Pennsylvania after the war'],
    correctIndex: 2,
    explanation: 'Gradual laws freed only those born after passage, and only as adults, so slavery lingered in the North for decades. Abolition was not immediate, it came through state rather than federal action, and Pennsylvania was moving away from slavery.',
    partNumber: 5,
    partTitle: 'Revolutionary Ideals and Their Limits',
  },
  // Part 6: Problem-Solving Workshop
  // source: Thomas Paine, Common Sense, 1776; verbatim
  {
    id: 'apushrev-ent-6a',
    question: '"Society in every state is a blessing, but government even in its best state is but a necessary evil; in its worst state an intolerable one."\n— Thomas Paine, Common Sense, January 1776\n\nPaine\'s purpose in opening his pamphlet this way was most likely to',
    options: ['defend Parliament\'s right to tax the colonies for their defense', 'urge colonists to stay loyal to the king against a corrupt Parliament', 'call for the abolition of every form of government in America', 'prepare readers to judge British rule by its effects, not tradition'],
    correctIndex: 3,
    explanation: 'By treating government as a tool to be judged by what it does, Paine set up his case that British rule had become intolerable and should be thrown off. He attacked rather than defended Parliament and the king, and he called for a new republic, not for no government.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushrev-ent-6b',
    question: 'A student argues that the colonists were united in support of independence. Which evidence best complicates this argument?',
    options: ['Washington took command of the Continental Army in 1775', 'Congress adopted the Declaration of Independence in July 1776', 'Perhaps 60,000 or more Loyalists went into exile after the war ended', 'France signed a treaty of alliance with the United States in 1778'],
    correctIndex: 2,
    explanation: 'The exile of tens of thousands of Loyalists, along with the confiscation of their property, shows that many colonists opposed independence. The other choices describe Patriot actions or foreign support.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushrev-ent-7a',
    question: 'Which comparison of Loyalists and the Native nations that took sides in the Revolution is most accurate?',
    options: ['Each sided with Britain and lost property or land when the war ended', 'Both groups joined the Patriots in return for promises of western land', 'Loyalists gained land in the treaty, while Native nations kept theirs', 'Native nations gained citizenship, while Loyalists kept their estates'],
    correctIndex: 0,
    explanation: 'Most Native nations that chose a side fought with Britain, as Loyalists did, and both suffered afterward: Loyalists through confiscation and exile, Native nations through a treaty that handed their land to the United States. Neither group was rewarded with land or citizenship.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushrev-ent-7b',
    question: 'Which statement best describes a change in American society between 1763 and 1800?',
    options: ['Slavery ended in every state that had fought for independence', 'Native nations gained secure title to their lands from the new republic', 'Married women gained full control of their property under state law', 'Slavery split by region as the North began emancipation'],
    correctIndex: 3,
    explanation: 'Northern states adopted gradual or judicial emancipation while slavery continued in the South, creating a regional divide. Slavery did not end everywhere, coverture persisted, and Native dispossession accelerated.',
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
    { partNumber: 2, partTitle: 'From Imperial Victory to Imperial Crisis, 1754–1766' },
    { partNumber: 3, partTitle: 'The Case for Resistance, Read Closely (1767–1776)' },
    { partNumber: 4, partTitle: 'The War for Independence: Comparison and Causation' },
    { partNumber: 5, partTitle: 'Revolutionary Ideals and Their Limits' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
