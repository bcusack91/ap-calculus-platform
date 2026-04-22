/**
 * Entrance Quiz — Constitution & Early Republic (APUSH 1787–1800)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'apushcon-ent-1a',
    question: 'Which best describes the structure of the U.S. Constitution as drafted in 1787?',
    options: [
      'A federal government divided into three branches (legislative, executive, judicial), with a bicameral Congress (Senate by state, House by population), separation of powers and checks and balances, federalism dividing power between national and state governments, and constitutional protection of slavery via the Three-Fifths Compromise and the Fugitive Slave Clause',
      'A unitary national government with no separation of powers, no bicameral legislature, no federalism, and no constitutional protection of slavery of any kind during the entire period from 1787 through the Civil War in any region of the United States',
      'A confederation with no federal government, no executive, no judiciary, and no taxing power of any kind drafted in 1787 with no Three-Fifths Compromise and no Fugitive Slave Clause of any kind during the entire period in any region',
      'A constitutional monarchy with a hereditary king, an aristocratic Senate, and no House of Representatives of any kind drafted in 1787 with no Three-Fifths Compromise and no Fugitive Slave Clause of any kind during the entire period in any region'
    ],
    correctIndex: 0,
    explanation: 'Constitution: 3 branches + bicameral Congress + separation of powers + federalism + 3/5 Compromise + Fugitive Slave Clause.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushcon-ent-1b',
    question: 'Which best describes the Federalist-Democratic-Republican division of the 1790s?',
    options: [
      'Federalists (Hamilton, Adams) favored loose constitutional construction, a national bank, industry and commerce, high tariffs, pro-British foreign policy, and a stronger federal government; Democratic-Republicans (Jefferson, Madison) favored strict construction, no national bank, agrarian republic, low tariffs, pro-French foreign policy, and stronger states',
      'Federalists and Democratic-Republicans were entirely identical in constitutional construction, economic policy, foreign policy, and federal-state authority with no meaningful differences of any kind during the entire 1790s in any region',
      'There was no Federalist-Republican division during the 1790s and the political parties did not exist until the Civil War period during the entire decade from 1790 through 1800 in any region of the United States during the period',
      'Federalists supported strict construction, no bank, agrarian republic, and pro-French foreign policy while Democratic-Republicans supported loose construction, the bank, industry, and pro-British foreign policy in any region during the 1790s'
    ],
    correctIndex: 0,
    explanation: 'Federalists: loose, bank, industry, high tariff, pro-British, strong federal. Democratic-Republicans: strict, no bank, agrarian, low tariff, pro-French, strong state.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushcon-ent-2a',
    question: 'Which best describes the constitutional ratification process (1787–88)?',
    options: [
      'The Constitution required ratification by nine of thirteen states through state-level ratifying conventions, not state legislatures; the campaign was contested by Federalist defenders (publishing the Federalist Papers) and Anti-Federalist opponents (publishing essays such as Brutus); ratification succeeded only after Federalists agreed to add a Bill of Rights, ratified in 1791',
      'The Constitution was ratified by direct popular vote of all American citizens in 1787 with no state ratifying conventions, no Federalist Papers, no Anti-Federalist opposition, and no Bill of Rights of any kind during the entire period in any region',
      'The Constitution was ratified by the British Parliament in 1787 with no state ratifying conventions, no Federalist Papers, no Anti-Federalist opposition, and no Bill of Rights of any kind during the entire period in any region of the United States',
      'The Constitution was never ratified in 1787 or 1788 and the United States continued under the Articles of Confederation through the Civil War period with no Constitution and no Bill of Rights of any kind during the entire period in any region'
    ],
    correctIndex: 0,
    explanation: 'Ratification: 9 of 13 state conventions; Federalist Papers vs. Brutus; Bill of Rights as concession; ratified 1791.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushcon-ent-2b',
    question: "Which best describes Hamilton's financial program (1790–91)?",
    options: [
      "Funding the national debt at par (paying full face value to current bondholders), assumption of state Revolutionary War debts by the federal government, chartering of the First Bank of the United States (1791), and an excise tax on whiskey to generate revenue — all designed to bind creditors to the federal government and stimulate commerce and credit",
      "Refusal to pay the national debt at all, refusal to assume state debts, refusal to charter a national bank, and refusal to impose any excise tax of any kind during the entire period from 1790 through 1791 in any region of the United States during the period in any region",
      "Funding the national debt at par, assumption of state debts, chartering of a national bank, and excise tax on whiskey — but all proposed by Jefferson and Madison rather than Hamilton during the entire period from 1790 through 1791 in any region of the United States during the period",
      "Hamilton proposed no financial program of any kind during the entire period from 1790 through 1791 and the federal government had no debt management, no bank, and no excise tax of any kind during the entire period in any region of the United States"
    ],
    correctIndex: 0,
    explanation: 'Hamilton 1790-91: funding at par + assumption of state debts + Bank of US (1791) + whiskey excise = bind creditors to federal government + stimulate commerce.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushcon-ent-3a',
    question: 'Which best describes the Whiskey Rebellion (1794)?',
    options: [
      "An armed uprising of western Pennsylvania farmers against Hamilton's federal excise tax on whiskey; President Washington personally led federalized state militias to suppress the rebellion, establishing the federal government's authority to enforce its laws and tax its citizens",
      "An armed uprising of British soldiers in western Pennsylvania against an American federal tax on whiskey, suppressed by Indigenous militias led by President Washington in 1794 with no participation by federalized state militias of any kind during the period",
      "A peaceful agricultural festival in western Pennsylvania in 1794 with no rebellion, no excise tax dispute, and no federal militia response of any kind during the entire period from 1791 through 1794 in any region of the United States during the period",
      "An armed uprising of southern enslaved Africans against an American federal tax on whiskey, suppressed by Indigenous militias led by President Washington in 1794 with no participation by federalized state militias of any kind during the period"
    ],
    correctIndex: 0,
    explanation: 'Whiskey Rebellion 1794: western PA farmers vs. Hamilton excise; Washington led federalized militia; established federal taxing/enforcement authority.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushcon-ent-3b',
    question: 'Which best describes the XYZ Affair and Quasi-War (1798)?',
    options: [
      "French foreign minister Talleyrand's agents (referred to as 'X, Y, Z' in published documents) demanded a bribe before negotiating with American envoys sent by President Adams; the resulting public outrage led to an undeclared naval Quasi-War with France (1798–1800), Federalist passage of the Alien and Sedition Acts, and a temporary spike in Federalist popularity",
      "British foreign minister William Pitt demanded a bribe from American envoys in 1798 with no French involvement of any kind, no Quasi-War, no Alien and Sedition Acts, and no Federalist popularity spike of any kind during the entire period in any region",
      "There was no XYZ Affair in 1798 and the United States had no diplomatic crisis with France during the entire period from 1797 through 1800 in any region of the United States during the period in any region of the United States during the period",
      "The XYZ Affair was a peaceful diplomatic resolution between France and the United States in 1798 that produced no Quasi-War, no Alien and Sedition Acts, and no Federalist popularity spike of any kind during the entire period in any region of the United States"
    ],
    correctIndex: 0,
    explanation: 'XYZ Affair 1798: Talleyrand\'s agents demanded bribe → public outrage → Quasi-War + Alien and Sedition Acts + Federalist popularity spike.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushcon-ent-4a',
    question: 'Which best describes the connection between the French Revolution and American politics in the 1790s?',
    options: [
      'The French Revolution polarized American politics: Federalists (Hamilton, Adams) saw the French Revolution as dangerous mob rule and favored Britain; Democratic-Republicans (Jefferson, Madison) saw it as a sister republican revolution and favored France; this division shaped the 1793 Proclamation of Neutrality, the 1794 Jay Treaty, and the 1798 Quasi-War',
      'The French Revolution had no impact on American politics in the 1790s of any kind with no Federalist/Democratic-Republican division, no Proclamation of Neutrality, no Jay Treaty, and no Quasi-War of any kind during the period in any region',
      'The French Revolution united all Americans behind a single foreign policy with no Federalist/Democratic-Republican division of any kind during the entire period from 1789 through 1800 in any region of the United States during the period',
      'The French Revolution caused all American leaders to favor Britain unanimously with no Democratic-Republican support for France of any kind during the entire period from 1789 through 1800 in any region of the United States during the period'
    ],
    correctIndex: 0,
    explanation: 'French Rev polarized US politics; led to Proclamation of Neutrality (1793), Jay Treaty (1794), Quasi-War (1798).',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushcon-ent-4b',
    question: 'Which best describes the connection between the Bill of Rights (1791) and the Anti-Federalist movement?',
    options: [
      'The Bill of Rights was a direct concession by the Federalists to the Anti-Federalists, who had argued during ratification that the Constitution lacked explicit protections for individual rights and threatened consolidated federal power; ratification succeeded in several states only on the promise of subsequent amendments, fulfilled in the first ten amendments ratified in 1791',
      'The Bill of Rights had no connection to the Anti-Federalist movement of any kind and was a Federalist-only initiative with no Anti-Federalist demand of any kind during the entire ratification debate from 1787 through 1791 in any region',
      'The Bill of Rights was opposed unanimously by the Anti-Federalists and supported only by Hamilton and the Federalists with no Anti-Federalist demand of any kind during the entire ratification debate from 1787 through 1791 in any region',
      'There was no Bill of Rights ratified in 1791 and the U.S. Constitution had no individual-rights amendments of any kind until the post-Civil-War Reconstruction Amendments in the 1860s in any region of the United States during the period'
    ],
    correctIndex: 0,
    explanation: 'Bill of Rights (1791) = Federalist concession to Anti-Federalists, who demanded explicit individual-rights protections during ratification. Promise fulfilled.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushcon-ent-5a',
    question: 'Which best describes the change in American national government between the Articles of Confederation (1781) and the Constitution (1788)?',
    options: [
      'The Articles created a weak national government with no power to tax, no executive, and no national judiciary; the Constitution created a stronger federal government with the power to tax, regulate interstate commerce, an executive, and a federal judiciary, while preserving substantial state authority through federalism — establishing the federal-state framework that has shaped American governance since',
      'The Articles and the Constitution were identical in every respect with no change in taxation, executive, judiciary, or federal-state authority of any kind during the entire transition from the Articles to the Constitution in any region of the United States during the period',
      'The Articles of Confederation never existed and the Constitution was the first American national government, drafted in 1781 immediately after Yorktown with no prior weak government of any kind during the entire period from 1781 through 1791 in any region',
      'The Constitution created a weaker federal government than the Articles, removing the federal power to tax, the executive, and the judiciary that had existed under the Articles during the entire period from 1781 through 1791 in any region of the United States'
    ],
    correctIndex: 0,
    explanation: 'Articles → Constitution: from no taxation/no executive/no judiciary to federal taxation + executive + judiciary + interstate commerce + preserved state authority.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushcon-ent-5b',
    question: 'Which describes a major continuity of American government from the colonial period through the early republic?',
    options: [
      'Representative legislative government continued from colonial assemblies (House of Burgesses 1619, town meetings) through the Continental Congress to the U.S. Congress; town and county-level political traditions also persisted, providing the institutional substrate for the new federal system established in 1788',
      'Representative legislative government was eliminated entirely between the colonial period and the early republic with no House of Burgesses, no Continental Congress, and no U.S. Congress of any kind during the entire transition in any region of the United States',
      'Representative legislative government was invented entirely in 1787 with no prior colonial assemblies of any kind during the entire colonial period from 1607 through 1787 in any region of British North America during the period in any region',
      'There were no continuities of any kind between the colonial period and the early republic in any region of the United States with no shared institutions, no shared legal traditions, and no shared political culture of any kind in any region during the period'
    ],
    correctIndex: 0,
    explanation: 'Continuity: representative legislative government from colonial assemblies → Continental Congress → U.S. Congress; town/county traditions provide federal substrate.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushcon-ent-6a',
    question: "Which historical context is most essential for sourcing Madison's *Federalist No. 10* (1787)?",
    options: [
      "The essay was published in New York newspapers in 1787 as part of the Federalist campaign to ratify the proposed Constitution; Madison wrote under the pseudonym 'Publius' (with Hamilton and Jay) to refute Anti-Federalist arguments that a large republic could not survive, arguing instead that an extended republic better controls factionalism",
      "The essay was published in London in 1776 as part of the British Crown's campaign against the Declaration of Independence with no connection to the proposed U.S. Constitution of any kind during the entire period from 1776 through 1791 in any region",
      "The essay was published in Paris in 1791 as part of the French Revolutionary government's campaign for the rights of man with no connection to the proposed U.S. Constitution of any kind during the entire period from 1787 through 1791 in any region",
      "The essay was published in Boston in 1820 as part of the abolitionist campaign against the three-fifths compromise with no connection to the proposed U.S. Constitution ratification debate of any kind during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Federalist 10: NY newspapers 1787, Federalist ratification campaign, Madison as "Publius," refuting Anti-Federalist objections.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushcon-ent-6b',
    question: "Which best identifies the point of view of *Brutus No. 1* (1787)?",
    options: [
      "An Anti-Federalist (likely Robert Yates) drawing on the classical republican and Whig tradition that republics must remain small to allow for similar 'manners, sentiments, and interests' — directly opposing the Federalist case that an extended republic could control factionalism better than a small one",
      "A Federalist drawing on the modern commercial-republic tradition supporting a large extended republic with no opposition to the Federalist case for the proposed Constitution of any kind during the entire ratification debate in any region of the United States in the period",
      "A British Crown loyalist drawing on absolutist monarchical theory with no relationship to the American constitutional ratification debate of any kind during the entire period from 1787 through 1791 in any region of the United States in the period",
      "A French revolutionary drawing on Enlightenment universalist theory with no relationship to the American constitutional ratification debate of any kind during the entire period from 1787 through 1791 in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Brutus 1: Anti-Federalist (likely Yates), classical republican + Whig tradition, direct counter to Federalist position.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushcon-ent-7a',
    question: 'In which year was the First Bank of the United States chartered?',
    options: ['1781', '1787', '1791', '1798'],
    correctIndex: 2,
    explanation: '1791 (Hamilton\'s Bank chartered + Bill of Rights ratified). 1781 = Articles ratified; 1787 = Convention; 1798 = Alien/Sedition Acts.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'apushcon-ent-7b',
    question: 'Which best demonstrates AP comparison skill across early-republic political visions?',
    options: [
      "Hamilton and Jefferson both embraced republican government, but Hamilton favored a commercial republic with strong federal power, loose constitutional construction, a national bank, high tariffs, and pro-British foreign policy; Jefferson favored an agrarian republic with strong states, strict construction, no national bank, low tariffs, and pro-French foreign policy",
      "Hamilton and Jefferson were entirely identical in political vision, constitutional construction, economic policy, and foreign policy with no meaningful differences of any kind during the entire 1790s in any region of the United States during the period in any region",
      "Hamilton and Jefferson had no shared themes of any kind and cannot be compared in any meaningful way during the entire 1790s in any region of the United States during the period in any region of the United States during the period",
      "Neither Hamilton nor Jefferson existed during the early republic and there was no political vision of any kind during the entire period from 1790 through 1800 in any region of the United States during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'AP comparison: name shared theme (republican government) AND specific differences (Hamilton: commercial + strong federal + loose + bank + high tariff + pro-British; Jefferson: agrarian + strong state + strict + no bank + low tariff + pro-French).',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
