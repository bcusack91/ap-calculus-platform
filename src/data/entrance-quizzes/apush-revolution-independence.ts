/**
 * Entrance Quiz — Revolution & Independence (APUSH Period 3)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'apushrev-ent-1a',
    question: 'Which best describes the imperial crisis between Britain and the colonies from 1763 to 1775?',
    options: [
      'A series of escalating constitutional and economic disputes — Proclamation of 1763, Stamp Act 1765, Townshend Acts 1767, Boston Massacre 1770, Tea Act / Boston Tea Party 1773, Coercive Acts 1774, Lexington & Concord 1775 — driven by Parliament\'s post-war revenue needs and colonial assertions of self-government within the empire',
      'A purely military conflict from 1763 onward with no constitutional or economic component of any kind during the entire period from 1763 through 1775 in any region of British North America during the period in any region of the colonies',
      'A peaceful and uneventful period from 1763 to 1775 with no Stamp Act, no Townshend Acts, no Boston Massacre, no Tea Party, no Coercive Acts, and no Lexington & Concord of any kind in any region of the colonies during the period',
      'A purely religious revival from 1763 to 1775 with no constitutional, economic, or military disputes of any kind during the entire period in any region of British North America during the period in any region of the colonies'
    ],
    correctIndex: 0,
    explanation: 'Imperial crisis: Proclamation 1763 → Stamp Act 1765 → Townshend 1767 → Boston Massacre 1770 → Tea Party 1773 → Coercive Acts 1774 → Lex/Concord 1775.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushrev-ent-1b',
    question: 'Which best describes the four major positions in the Revolutionary War?',
    options: [
      'Patriots (~40-45%) for independence; Loyalists (~15-20%) for the Crown; most Indigenous nations allied with Britain to limit Anglo-American settlement; tens of thousands of enslaved Africans took British offers of freedom (Lord Dunmore 1775) — a four-way contest within North America',
      'A two-way contest only between Patriots and the British Crown with no Loyalist, Indigenous, or enslaved participation of any kind during the entire war from 1775 through 1783 in any region of the colonies during the period in any region',
      'A unified colonial uprising with 100% Patriot participation, no Loyalists, no Indigenous nations, and no enslaved Africans of any kind during the entire war from 1775 through 1783 in any region of the colonies during the period',
      'A purely European conflict between Britain and France with no American colonial participation of any kind during the entire war from 1775 through 1783 in any region of the colonies during the period in any region'
    ],
    correctIndex: 0,
    explanation: 'Four-way contest: Patriots, Loyalists, Indigenous (mostly British-allied), enslaved Africans (often pro-British via Dunmore 1775).',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushrev-ent-2a',
    question: 'Which best describes how colonists resisted the Stamp Act (1765)?',
    options: [
      'Through three coordinated channels: constitutional protest (Stamp Act Congress, October 1765, with delegates from nine colonies); commercial pressure (non-importation boycotts of British goods); and direct action (Sons of Liberty intimidating stamp distributors and burning effigies)',
      'Colonists offered no resistance of any kind to the Stamp Act and uniformly accepted the new tax across all thirteen colonies during the entire period from the passage of the Stamp Act through its repeal in 1766 in any region',
      'Colonists immediately declared independence in response to the Stamp Act in 1765 with no constitutional protest, no boycotts, and no Sons of Liberty of any kind during the period in any region of the colonies during the period',
      'Colonists responded by petitioning the French Crown for protection against the Stamp Act with no British constitutional protest, no boycotts, and no Sons of Liberty of any kind during the period in any region of the colonies'
    ],
    correctIndex: 0,
    explanation: 'Stamp Act resistance through three channels: constitutional (Stamp Act Congress), commercial (boycotts), direct action (Sons of Liberty).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushrev-ent-2b',
    question: 'Which best describes the process by which the Constitution (1787) was created?',
    options: [
      'A Constitutional Convention met in Philadelphia in summer 1787 to revise the Articles of Confederation but instead drafted a new constitution; key compromises included the Great Compromise (bicameral legislature), the Three-Fifths Compromise (counting enslaved people for representation and taxation), and the federal/state division of powers; ratification involved Federalist (pro-Constitution) and Anti-Federalist (skeptical) campaigns culminating in the Bill of Rights (1791)',
      'The Constitution was drafted by King George III in London in 1787 with no Philadelphia convention, no compromises of any kind, and no Federalist/Anti-Federalist debate during the entire period in any region of the United States in the period',
      'The Constitution was drafted by direct popular vote of all American citizens in 1787 with no Philadelphia convention, no compromises, and no Federalist/Anti-Federalist debate of any kind during the entire period in any region of the United States',
      'The Constitution was drafted by Indigenous nations in 1787 with no Philadelphia convention, no compromises, and no Federalist/Anti-Federalist debate of any kind during the entire period in any region of the United States during the period'
    ],
    correctIndex: 0,
    explanation: 'Convention 1787 + Great Compromise + 3/5 Compromise + Federalist/Anti-Federalist ratification + Bill of Rights 1791.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushrev-ent-3a',
    question: "Which best describes the immediate cause of Lord Dunmore's Proclamation (1775)?",
    options: [
      'The royal governor of Virginia issued the proclamation in November 1775 offering freedom to enslaved people (and indentured servants) belonging to Patriot owners who would join British forces, in an effort to undermine the Patriot war effort and recruit additional fighters; tens of thousands of enslaved people self-emancipated by reaching British lines over the course of the war',
      'The royal governor of Virginia issued the proclamation in 1775 offering full British citizenship to all Patriot leaders who would surrender, with no offer to enslaved people of any kind during the entire war from 1775 through 1783 in any region of British North America',
      'The royal governor of Virginia issued the proclamation in 1775 establishing a peaceful negotiation with all Indigenous nations in Virginia, with no offer to enslaved people of any kind during the entire war from 1775 through 1783 in any region of British North America',
      'The royal governor of Virginia issued the proclamation in 1775 declaring Virginia\'s independence from both Britain and the Patriot cause, with no offer to enslaved people of any kind during the entire war from 1775 through 1783 in any region of British North America'
    ],
    correctIndex: 0,
    explanation: 'Dunmore Nov 1775: offered freedom to enslaved + indentured of Patriot owners who joined British forces; tens of thousands self-emancipated.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushrev-ent-3b',
    question: 'Which best describes the Whiskey Rebellion (1794)?',
    options: [
      "An armed uprising of western Pennsylvania farmers against Hamilton's federal excise tax on whiskey; President Washington personally led federalized state militias to suppress the rebellion, establishing the federal government's authority to enforce its laws and tax its citizens",
      "An armed uprising of British soldiers in western Pennsylvania against an American federal tax on whiskey, suppressed by Indigenous militias led by President Washington in 1794 with no participation by federalized state militias of any kind during the period",
      "A peaceful agricultural festival in western Pennsylvania in 1794 with no rebellion, no excise tax dispute, and no federal militia response of any kind during the entire period from 1791 through 1794 in any region of the United States during the period",
      "An armed uprising of southern enslaved Africans against an American federal tax on whiskey, suppressed by Indigenous militias led by President Washington in 1794 with no participation by federalized state militias of any kind during the period"
    ],
    correctIndex: 0,
    explanation: 'Whiskey Rebellion 1794: western PA farmers vs. Hamilton\'s excise tax; Washington led federalized militia; established federal authority to tax/enforce.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushrev-ent-4a',
    question: 'Which best describes the connection between the French Revolution (1789–) and American politics in the 1790s?',
    options: [
      'The French Revolution polarized American politics: Federalists (Hamilton, Adams) saw the French Revolution as dangerous mob rule and favored Britain; Democratic-Republicans (Jefferson, Madison) saw it as a sister republican revolution and favored France; Washington\'s 1793 Proclamation of Neutrality and the Jay Treaty (1794) reflected this division',
      'The French Revolution had no impact on American politics in the 1790s of any kind with no Federalist/Democratic-Republican division, no Proclamation of Neutrality, and no Jay Treaty in any region of the United States during the period',
      'The French Revolution united all Americans behind a single foreign policy with no Federalist/Democratic-Republican division of any kind during the entire period from 1789 through 1800 in any region of the United States during the period',
      'The French Revolution caused all American leaders to favor Britain unanimously with no Democratic-Republican support for France of any kind during the entire period from 1789 through 1800 in any region of the United States during the period'
    ],
    correctIndex: 0,
    explanation: 'French Rev polarized US politics: Federalists pro-Britain, Dem-Republicans pro-France; led to Proclamation of Neutrality (1793) and Jay Treaty (1794).',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushrev-ent-4b',
    question: 'Which best describes the relationship between the Revolution and gradual emancipation in the northern states?',
    options: [
      'Revolutionary natural-rights rhetoric and Quaker antislavery activism contributed to gradual emancipation laws in northern states from the 1780s onward (Pennsylvania 1780, Massachusetts via court ruling 1783, NY 1799, NJ 1804); the same period saw slavery harden in the South as cotton expanded after 1793 — producing the regional divide that defined the antebellum era',
      'There was no relationship between the Revolution and gradual emancipation of any kind and there were no gradual emancipation laws in any northern state during the entire period from 1780 through 1804 in any region of the United States',
      'The Revolution led to immediate and complete abolition of slavery in every state, North and South, by 1783 with no gradual emancipation laws and no regional divide of any kind during the entire period from 1780 through 1804 in any region',
      'The Revolution led to the immediate expansion of slavery into every northern state by 1804 with no gradual emancipation laws and no regional divide of any kind during the entire period from 1780 through 1804 in any region of the United States'
    ],
    correctIndex: 0,
    explanation: 'Revolutionary natural-rights + Quaker activism → northern gradual emancipation (PA 1780, MA 1783, NY 1799, NJ 1804); slavery hardens in South after cotton 1793. Regional divide.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushrev-ent-5a',
    question: 'Which best describes the change in American national government between the Articles of Confederation and the Constitution (1787)?',
    options: [
      'The Articles created a weak national government with no power to tax, no executive, and no national judiciary, leaving authority with the states; the Constitution (1787) shifted authority by creating a stronger federal government with the power to tax, regulate interstate commerce, an executive, and a federal judiciary, while preserving substantial state authority through federalism',
      'The Articles and the Constitution were identical in every respect with no change in taxation, executive, judiciary, or federal-state authority of any kind during the entire transition from the Articles to the Constitution in any region of the United States in the period',
      'The Articles of Confederation never existed and the Constitution was the first American national government, drafted in 1781 immediately after Yorktown with no prior weak government of any kind during the entire period from 1781 through 1791 in any region',
      'The Constitution created a weaker federal government than the Articles, removing the federal power to tax, the executive, and the judiciary that had existed under the Articles during the entire period from 1781 through 1791 in any region of the United States'
    ],
    correctIndex: 0,
    explanation: 'Articles → Constitution: from no taxation/no executive/no judiciary to federal taxation + executive + judiciary + interstate commerce + preserved state authority.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushrev-ent-5b',
    question: 'Which describes a major continuity between the colonial and early national periods?',
    options: [
      'Representative legislative government continued from colonial assemblies (House of Burgesses 1619, town meetings) through the Continental Congress to the U.S. Congress; town and county-level political traditions also persisted, providing the institutional substrate for the new federal system',
      'Representative legislative government was eliminated entirely between the colonial and early national periods with no House of Burgesses, no Continental Congress, and no U.S. Congress of any kind during the entire transition in any region of the United States in the period',
      'Representative legislative government was invented entirely in 1787 with no prior colonial assemblies of any kind during the entire colonial period from 1607 through 1787 in any region of British North America during the period in any region',
      'There were no continuities of any kind between the colonial and early national periods in any region of the United States with no shared institutions, no shared legal traditions, and no shared political culture of any kind in any region during the period'
    ],
    correctIndex: 0,
    explanation: 'Continuity: representative legislative government from colonial assemblies → Continental Congress → U.S. Congress; town/county traditions provide federal substrate.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushrev-ent-6a',
    question: "Which historical context is most essential for sourcing Thomas Paine's *Common Sense* (January 1776)?",
    options: [
      "The pamphlet was published in Philadelphia in January 1776, after Lexington and Concord and the failure of the Olive Branch Petition, when many colonists still favored reconciliation; Paine wrote in plain English to convert ordinary readers from reconciliation to outright independence by attacking monarchy",
      "The pamphlet was published in London in 1763 immediately after the Treaty of Paris ended the French and Indian War, when American colonists were enthusiastic about British imperial victory and there was no significant push for independence in any region",
      "The pamphlet was published in Boston in 1765 immediately after the Stamp Act, when American colonists were still firmly committed to reconciliation with Britain through constitutional petitions and the Stamp Act Congress in any region of the colonies",
      "The pamphlet was published in Paris in 1789 immediately after the storming of the Bastille and the beginning of the French Revolution, when American colonists had already won independence in 1783 in any region of the new United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Common Sense Jan 1776: post-Lexington/Concord, reconciliation still in play, plain English, attack on monarchy.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushrev-ent-6b',
    question: "Which best identifies the point of view of the 1776 Declaration of Independence?",
    options: [
      "The Continental Congress representing the political class of thirteen colonies — claiming universal natural rights ('all men are created equal') even as Jefferson held people in slavery and the Congress removed an anti-slave-trade clause to secure southern colonial support",
      "An organization representing women, enslaved Africans, Indigenous nations, and Loyalists with full and equal participation in the drafting and editing of the document during the entire period from June through July 1776 in any region of the colonies",
      "An organization representing the British Crown and Parliament with no American colonial participation in the drafting or editing of the document during the entire period from June through July 1776 in any region of British North America during the period",
      "An organization with no political affiliation, no enslaver participation, and no removal of any anti-slavery clauses during the entire period from June through July 1776 in any region of British North America during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Declaration POV: Continental Congress = political class of thirteen colonies. Universal language coexists with Jefferson\'s slaveholding + Congress removing anti-slave-trade clause.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushrev-ent-7a',
    question: 'In which year was the U.S. Constitution drafted at the Philadelphia Convention?',
    options: ['1776', '1781', '1787', '1791'],
    correctIndex: 2,
    explanation: '1787 (Philadelphia Convention drafted Constitution). 1776 = Declaration; 1781 = Articles ratified + Yorktown; 1791 = Bill of Rights ratified.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'apushrev-ent-7b',
    question: 'Which best demonstrates AP comparison skill across Revolutionary perspectives?',
    options: [
      "Patriots and Loyalists both invoked English constitutional traditions to support their positions, but Patriots argued that Parliament had violated those traditions by taxing without colonial consent (justifying independence) while Loyalists argued that imperial unity was essential to those very traditions and that resistance would dissolve into mob rule (justifying loyalty to the Crown)",
      "Patriots and Loyalists were entirely identical in motivation, argument, and political tradition with no meaningful differences of any kind during the entire Revolution from 1775 through 1783 in any region of the colonies during the period in any region",
      "Patriots and Loyalists had no shared themes of any kind and cannot be compared in any meaningful way during the entire Revolution from 1775 through 1783 in any region of the colonies during the period in any region",
      "Neither Patriots nor Loyalists existed during the Revolution and there was no political position of any kind during the entire war from 1775 through 1783 in any region of the colonies during the period in any region of British North America"
    ],
    correctIndex: 0,
    explanation: 'AP comparison: name shared theme (English constitutional traditions) AND specific differences (Patriots: violated by Parliament → independence; Loyalists: imperial unity essential → loyalty).',
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
