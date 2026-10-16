/**
 * Entrance Quiz — The Constitution & Early Republic (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  // source: U.S. Constitution, Article I, Section 9, 1787; verbatim
  {
    id: 'apushcon-ent-1a',
    question: '"The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight."\n— U.S. Constitution, Article I, Section 9\n\nThis clause is best understood as',
    options: ['a ban on immigration from Europe until the year 1808', 'a grant of power to the states to tax goods imported from abroad', 'an immediate end to the slave trade demanded by southern delegates', 'a deal that shielded the slave trade from federal bans until 1808'],
    correctIndex: 3,
    explanation: 'Deep South delegates threatened to leave the Convention unless the slave trade was protected, so Congress was barred from banning it before 1808. "Such Persons" refers to enslaved Africans, not European immigrants, the clause delayed rather than ended the trade, and it says nothing about state import taxes.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushcon-ent-1b',
    question: 'The Electoral College emerged at the Constitutional Convention as a compromise between delegates who wanted',
    options: ['Congress to pick the president and those who wanted a popular vote', 'a king for life and those who wanted no executive at all', 'state governors to share power and those who wanted a single executive', 'the Supreme Court to choose the president and those who wanted Congress to'],
    correctIndex: 0,
    explanation: 'Some delegates wanted Congress to choose the president, others favored direct election, and electors chosen by the states split the difference. Few seriously proposed a king, the plural-executive debate was separate, and no one proposed selection by the Court.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Launching the Federal Government: The Hamilton Program and the First Parties
  {
    id: 'apushcon-ent-2a',
    question: 'Virginia\'s leaders objected to Hamilton\'s plan for the federal government to assume the states\' war debts mainly because',
    options: ['Virginia had already paid much of its debt', 'the plan required Virginia to sell its western land claims', 'the plan would move the national capital to New York', 'Virginia wanted Britain to pay the debts instead'],
    correctIndex: 0,
    explanation: 'Having repaid much of its debt, Virginia would now help pay other states\' debts through federal taxes. The plan said nothing about land claims, the Compromise of 1790 placed the capital on the Potomac, and no one expected Britain to pay.',
    partNumber: 2,
    partTitle: 'Launching the Federal Government: The Hamilton Program and the First Parties',
  },
  {
    id: 'apushcon-ent-2b',
    question: 'Which comparison of Shays\' Rebellion (1786–1787) and the Whiskey Rebellion (1794) is most accurate?',
    options: ['Congress put down Shays\' Rebellion, while Massachusetts alone ended the Whiskey Rebellion', 'The national government could not act in 1786, but in 1794 it raised a large militia army', 'Both rebellions forced Congress to repeal the taxes the rebels protested', 'Both rebellions ended in battles that killed hundreds of rebels'],
    correctIndex: 1,
    explanation: 'Massachusetts relied on a privately funded militia against Shays, while Washington called up about 13,000 militiamen, showing the new government could enforce its laws. The reversed pairing is wrong, the whiskey tax stayed, and the 1794 rebellion collapsed without a battle.',
    partNumber: 2,
    partTitle: 'Launching the Federal Government: The Hamilton Program and the First Parties',
  },
  // Part 3: Two Visions in Their Own Words: Hamilton and Jefferson
  // source: Thomas Jefferson, First Inaugural Address, March 4, 1801; verbatim
  {
    id: 'apushcon-ent-3a',
    question: '"...a wise and frugal Government, which shall restrain men from injuring one another, shall leave them otherwise free to regulate their own pursuits of industry and improvement..."\n— Thomas Jefferson, First Inaugural Address, 1801\n\nThe passage most directly reflects which vision of government?',
    options: ['An active government that charters banks and promotes factories', 'A government that sets wages and prices to protect workers', 'A strong executive that directs the economy through tariffs and bounties', 'A limited government that allows citizens to manage their own affairs'],
    correctIndex: 3,
    explanation: 'Jefferson wanted government to keep order and otherwise leave people free, the Republican ideal of limited government. Banks, factories, tariffs, and bounties describe Hamilton\'s program, and wage and price controls were no one\'s program in 1801.',
    partNumber: 3,
    partTitle: 'Two Visions in Their Own Words: Hamilton and Jefferson',
  },
  {
    id: 'apushcon-ent-3b',
    question: 'One argument in Hamilton\'s 1791 case for government encouragement of manufacturing appealed to',
    options: ['the moral virtue of independent farmers who owned their land', 'a promise to keep the federal government small and frugal', 'national security, given shortages of supplies in the late war', 'the demand of southern planters for cheap European goods'],
    correctIndex: 2,
    explanation: 'Alongside his economic arguments, Hamilton recalled the army\'s lack of uniforms, arms, and powder during the Revolution and argued that home industry secured the nation\'s independence. Farmer virtue and frugal government were Jefferson\'s themes, and planters opposed protective tariffs.',
    partNumber: 3,
    partTitle: 'Two Visions in Their Own Words: Hamilton and Jefferson',
  },
  // Part 4: A Republic in a World at War: Causation and the Crisis of 1798–1800
  // source: George Washington, Farewell Address, 1796; verbatim
  {
    id: 'apushcon-ent-4a',
    question: '"It is our true policy to steer clear of permanent alliances with any portion of the foreign world."\n— George Washington, Farewell Address, 1796\n\nThis advice is best understood in the context of',
    options: ['the British invasion of Washington, D.C., during the War of 1812', 'the alliance with France that won the Seven Years\' War', 'the wars between revolutionary France and Britain that divided Americans', 'the Monroe Doctrine\'s warning to Europe about Latin America'],
    correctIndex: 2,
    explanation: 'The 1778 French alliance, the French Revolution\'s wars, and the Jay Treaty had split Americans into pro-French Republicans and pro-British Federalists. The War of 1812 and the Monroe Doctrine came later, and the colonists fought France in the Seven Years\' War.',
    partNumber: 4,
    partTitle: 'A Republic in a World at War: Causation and the Crisis of 1798–1800',
  },
  {
    id: 'apushcon-ent-4b',
    question: 'In the election of 1800, Thomas Jefferson and Aaron Burr each received 73 electoral votes. Which change most directly resulted from this outcome?',
    options: ['The Twelfth Amendment\'s separate ballots for president and vice president', 'The repeal of the three-fifths clause for counting electoral votes', 'The direct popular election of senators by the voters of each state', 'The end of the Electoral College and the start of a national popular vote'],
    correctIndex: 0,
    explanation: 'Because electors cast two undifferentiated votes, the running mates tied and the House needed 36 ballots; the Twelfth Amendment (1804) fixed the flaw. The three-fifths clause remained until 1868, senators were elected directly only after 1913, and the Electoral College still exists.',
    partNumber: 4,
    partTitle: 'A Republic in a World at War: Causation and the Crisis of 1798–1800',
  },
  // Part 5: The West, Slavery, and the Limits of the Founding
  {
    id: 'apushcon-ent-5a',
    question: 'U.S. census figures, approximate: enslaved people, 698,000 (1790) and 894,000 (1800); free Black people, 59,000 (1790) and 108,000 (1800). Cotton grown rose from about 3,000 bales to about 73,000.\n\nWhich conclusion do these figures best support?',
    options: ['Slavery was withering away in every state after the Revolution', 'The free Black population shrank as the cotton boom began', 'Slavery grew even as the free Black population expanded', 'Cotton output fell after the invention of the cotton gin'],
    correctIndex: 2,
    explanation: 'The enslaved population grew by about 28 percent while the free Black population nearly doubled through northern emancipation and manumission, and cotton surged after 1793. Slavery was not dying, the free Black population grew, and cotton output rose.',
    partNumber: 5,
    partTitle: 'The West, Slavery, and the Limits of the Founding',
  },
  // source: U.S. Constitution, Article IV, Section 2, 1787; verbatim
  {
    id: 'apushcon-ent-5b',
    question: '"No Person held to Service or Labour in one State, under the Laws thereof, escaping into another, shall, in Consequence of any Law or Regulation therein, be discharged from such Service or Labour, but shall be delivered up on Claim of the Party to whom such Service or Labour may be due."\n— U.S. Constitution, Article IV, Section 2\n\nThis clause best illustrates',
    options: ['the framers\' decision to abolish slavery in all new territories', 'how the framers protected slavery without naming it', 'a guarantee of jury trials for people accused of escaping', 'the power of free states to refuse slaveholders\' claims'],
    correctIndex: 1,
    explanation: 'The Fugitive Slave Clause required free states to return people escaping slavery, using the phrase "held to Service or Labour" rather than the word slavery. It abolished nothing, promised no jury trial, and denied free states the power to free escapees.',
    partNumber: 5,
    partTitle: 'The West, Slavery, and the Limits of the Founding',
  },
  // Part 6: Problem-Solving Workshop
  // source: James Madison, The Federalist No. 51, 1788; verbatim
  {
    id: 'apushcon-ent-6a',
    question: '"In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself."\n— James Madison, Federalist No. 51, 1788\n\nMadison\'s purpose in this passage was most likely to persuade readers that',
    options: ['the Articles of Confederation should be kept with minor changes', 'the states should keep the power to nullify federal laws they disliked', 'a bill of rights was unnecessary because the people were virtuous', 'checks and balances would keep the new federal system from abusing power'],
    correctIndex: 3,
    explanation: 'Writing to win ratification in New York, Madison argued that the Constitution\'s divided powers would restrain the stronger government it created. He sought to replace the Articles, did not rest his case on popular virtue, and did not endorse nullification.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushcon-ent-6b',
    question: 'A student writes that "the Founders" shared one vision for the new nation. Which evidence best corrects this claim?',
    options: ['Washington was elected president without opposition in 1789', 'The Constitution was ratified by the required nine states in 1788', 'Hamilton and Jefferson gave Washington opposite opinions on the Bank', 'Congress created the departments of State, Treasury and War in 1789'],
    correctIndex: 2,
    explanation: 'The cabinet split over whether the Bank was constitutional shows deep disagreement among leading founders, which grew into the first party system. The other choices describe moments of agreement or routine institution-building.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushcon-ent-7a',
    question: 'Which pairing of a party with its position in the 1790s is most accurate?',
    options: ['Federalists sided with France in its war against Britain', 'Democratic-Republicans favored a loose reading of the Constitution', 'Democratic-Republicans championed Hamilton\'s national bank', 'Federalists drew support from New England merchants and creditors'],
    correctIndex: 3,
    explanation: 'Federalist strength lay in New England and the seaport commercial class. Federalists leaned toward Britain, Republicans read the Constitution strictly, and Republicans opposed the Bank.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushcon-ent-7b',
    question: 'Why is the election of 1800 often described as a turning point?',
    options: ['It was the first election in which all adult men could vote', 'Power passed peacefully from one party to its rival', 'It ended the two-party system for the rest of the century', 'Congress chose the president without any electoral votes'],
    correctIndex: 1,
    explanation: 'Adams handed the presidency to his opponent, the first transfer of power between parties under the Constitution. Property and race limits on voting remained, parties continued, and the House chose between candidates who had won electoral votes.',
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
    { partNumber: 2, partTitle: 'Launching the Federal Government: The Hamilton Program and the First Parties' },
    { partNumber: 3, partTitle: 'Two Visions in Their Own Words: Hamilton and Jefferson' },
    { partNumber: 4, partTitle: 'A Republic in a World at War: Causation and the Crisis of 1798–1800' },
    { partNumber: 5, partTitle: 'The West, Slavery, and the Limits of the Founding' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
