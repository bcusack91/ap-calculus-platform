/**
 * Entrance Quiz — The Transatlantic Slave Trade (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aastst-ent-1a',
    question: 'Historians describe the Atlantic slave trade as a system rather than a series of separate voyages. Which description best supports that view?',
    options: ['It was a regional exchange run by Portugal and its West African partners alone.', 'It carried mostly European servants, with Africans a small share of those shipped.', 'It linked European goods, African sellers and American plantations in one cycle.', 'It began after 1700 to supply planters in the American South, its main market.'],
    correctIndex: 2,
    explanation: 'Manufactured goods bought captives in Africa, captives produced plantation crops in the Americas, and those crops paid for more goods, tying four continents together. The trade began in the 1500s and its largest markets were Brazil and the Caribbean.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aastst-ent-1b',
    question: 'Which pairing of a figure with his role in the history of the trade is accurate?',
    options: ['John Hawkins: early English slaver', 'Thomas Clarkson: slave-ship captain who wrote "Amazing Grace"', 'John Newton: Igbo survivor who wrote The Interesting Narrative', 'Olaudah Equiano: Elizabethan captain who sailed to Hispaniola'],
    correctIndex: 0,
    explanation: 'Hawkins began England\'s slave trade with his 1562 voyage, and his later voyages were backed by Elizabeth I. Newton was the captain who wrote "Amazing Grace," Equiano wrote The Interesting Narrative, and Clarkson gathered evidence for abolition.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: How the Trade Worked: From Capture to the Coast
  {
    id: 'aastst-ent-2a',
    question: 'At Old Calabar, a merchant holds a debtor\'s nephew as security for goods advanced on credit. When the debt goes unpaid, the nephew is sold to a ship anchored in the river. This case illustrates which route into the Atlantic trade?',
    options: ['Judicial enslavement for a crime', 'Capture in a war between states', 'Kidnapping by a raiding band', 'Pawnship of a relative'],
    correctIndex: 3,
    explanation: 'A pawn was a person pledged as security for a debt who could be sold if it went unpaid, a practice tied to the credit that ran the ship trade at Old Calabar. No court, war or raid is involved here.',
    partNumber: 2,
    partTitle: 'How the Trade Worked: From Capture to the Coast',
  },
  {
    id: 'aastst-ent-2b',
    question: 'Which statement best describes the part that states and networks such as Dahomey and the Aro played in the Atlantic trade?',
    options: ['They ran the whole system, setting plantation prices in Brazil and Jamaica.', 'They set the terms on which captives were sold, while demand came from overseas.', 'They had no real role, since European crews seized nearly all the captives themselves.', 'They sold only convicted criminals and refused to sell any captives taken in war.'],
    correctIndex: 1,
    explanation: 'African rulers and merchants controlled capture, transport and sale on the coast, but the demand, ships and plantations were set in Europe and the Americas. Europeans rarely captured people themselves, and war was the largest single source of captives.',
    partNumber: 2,
    partTitle: 'How the Trade Worked: From Capture to the Coast',
  },
  // Part 3: The Middle Passage: Conditions and Shipboard Resistance
  // source: Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano, 1789 (ch. 2); verbatim
  {
    id: 'aastst-ent-3a',
    question: '"One day, when we had a smooth sea and moderate wind, two of my wearied countrymen who were chained together (I was near them at the time), preferring death to such a life of misery, somehow made through the nettings and jumped into the sea: immediately another quite dejected fellow ... also followed their example; and I believe many more would very soon have done the same if they had not been prevented by the ship\'s crew"\n— Olaudah Equiano, The Interesting Narrative (1789)\n\nThis passage is best used as evidence of',
    options: ['captives resisting by taking their own lives rather than living enslaved', 'a revolt in which captives took over the vessel and sailed back home', 'the practice of forcing captives to dance on deck for exercise', 'kinship bonds formed among shipmates from many African societies'],
    correctIndex: 0,
    explanation: 'Jumping overboard was a form of resistance, which is why ships strung nettings along their sides and crews watched closely. The passage describes no takeover of the ship, forced dancing or shipmate bonds.',
    partNumber: 3,
    partTitle: 'The Middle Passage: Conditions and Shipboard Resistance',
  },
  {
    id: 'aastst-ent-3b',
    question: 'The Zong case (1783) in Britain and the Amistad case (1841) in the United States both turned on which underlying question?',
    options: ['Whether Britain\'s navy could search foreign slave ships at sea', 'Whether captives were property or people', 'Whether Congress could ban slave imports before the year 1808', 'Whether captains could be tried for mutiny in a federal court'],
    correctIndex: 1,
    explanation: 'The Zong\'s owners claimed drowned Africans as insured cargo, and Spain demanded the Amistad captives back as property; the Supreme Court found them kidnapped free people. Both cases forced courts to face captives\' humanity.',
    partNumber: 3,
    partTitle: 'The Middle Passage: Conditions and Shipboard Resistance',
  },
  // Part 4: Reading the Data: Volume, Carriers and Change Over Time
  {
    id: 'aastst-ent-4a',
    question: 'Estimated Africans embarked, in millions (Trans-Atlantic Slave Trade Database, rounded): 1501–1600, 0.28; 1601–1700, 1.88; 1701–1800, 6.49; 1801–1866, 3.87; total, 12.52.\n\nWhich conclusion do these figures support?',
    options: ['The years 1801–1866 saw more embarkations than the 1700s did.', 'More than half of all embarkations took place before 1700.', 'The 1500s made up about one tenth of all embarkations.', 'The 1700s saw over three times as many as the 1600s did.'],
    correctIndex: 3,
    explanation: '6.49 million is about 3.5 times 1.88 million. Only about 2.2 million people were embarked before 1700, the 1500s made up about 2 percent, and 1801–1866 had fewer embarkations than the 1700s.',
    partNumber: 4,
    partTitle: 'Reading the Data: Volume, Carriers and Change Over Time',
  },
  {
    id: 'aastst-ent-4b',
    question: 'A historian studies captives\' origins using the African Names records, compiled by courts at Freetown from ships seized after the trade was banned. Which limitation of these records remains?',
    options: ['They cover only voyages that sailed before 1700.', 'Clerks wrote them down, not the people named.', 'They list ships but no individual people at all.', 'They were made up by abolitionists in London.'],
    correctIndex: 1,
    explanation: 'The records preserve African names, ages and heights, but court clerks wrote them down, so they still filter captives through outsiders\' categories. They date from the nineteenth century and do record individuals.',
    partNumber: 4,
    partTitle: 'Reading the Data: Volume, Carriers and Change Over Time',
  },
  // Part 5: Ending the Trade: Abolitionists, Laws and the Illegal Trade
  {
    id: 'aastst-ent-5a',
    question: 'Britain and the United States banned their slave trades in 1807–08, yet embarkations stayed near their peak until about 1850. Which statement best explains why the trade collapsed in the 1850s?',
    options: ['The Haitian Revolution ended all demand for enslaved labor in the Caribbean.', 'Spain abolished slavery in Cuba, closing the largest remaining market at once.', 'Brazil finally enforced its own ban under heavy pressure from the Royal Navy.', 'Denmark\'s ban took effect, removing the main carrier of the nineteenth century.'],
    correctIndex: 2,
    explanation: 'After the Aberdeen Act of 1845 let British ships seize Brazilian slavers, Brazil passed and enforced the Eusébio de Queirós Law in 1850, closing the largest market. Cuba abolished slavery only in 1886, and Denmark was a minor carrier.',
    partNumber: 5,
    partTitle: 'Ending the Trade: Abolitionists, Laws and the Illegal Trade',
  },
  {
    id: 'aastst-ent-5b',
    question: 'A historian argues that Britain abolished its slave trade in 1807 even though the trade and the sugar colonies were still profitable. This argument most directly challenges which interpretation?',
    options: ['Eric Williams\'s claim that a declining plantation economy drove abolition', 'Seymour Drescher\'s claim that popular politics drove abolition', 'Thomas Clarkson\'s finding that the trade killed many of its sailors', 'Olaudah Equiano\'s claim that the Middle Passage was a scene of horror'],
    correctIndex: 0,
    explanation: 'Williams, in Capitalism and Slavery, tied abolition to economic decline; evidence of continued profit undercuts him and supports Drescher\'s Econocide. Clarkson\'s and Equiano\'s evidence concerns conditions, not the causes of abolition.',
    partNumber: 5,
    partTitle: 'Ending the Trade: Abolitionists, Laws and the Illegal Trade',
  },
  // Part 6: Source Workshop: Witnesses to the Trade
  // source: original
  {
    id: 'aastst-ent-6a',
    question: 'The following summary, written for this question, describes a kind of source: in 1789–1790, merchants and captains with money in the trade told a committee of Parliament that captives were well fed and danced cheerfully on deck. How should a historian use such testimony alongside Falconbridge\'s account?',
    options: ['Accept it over Falconbridge, since the merchants knew the ships better than a surgeon.', 'Discard it entirely, since witnesses with money at stake cannot be quoted as evidence.', 'Treat it as neutral, since it was given under oath to a committee of Parliament.', 'Compare it with what crew members and survivors wrote, since both sides spoke to persuade Parliament.'],
    correctIndex: 3,
    explanation: 'Pro-trade and abolitionist witnesses alike spoke to sway Parliament, so each must be weighed against the other and against survivors such as Equiano. Testimony is not neutral simply because it was sworn, and a biased source still shows what its creators wanted lawmakers to believe.',
    partNumber: 6,
    partTitle: 'Source Workshop: Witnesses to the Trade',
  },
  {
    id: 'aastst-ent-6b',
    question: 'Why does a historian gain by reading Equiano\'s Narrative, Falconbridge\'s Account and Newton\'s Thoughts together?',
    options: ['All three were written by captives, so they share one point of view.', 'Each saw the ship from a different position, so they can be checked.', 'None of the three was written to persuade, so each can be taken at face value.', 'All three were drawn from the same ship\'s log, so their details match.'],
    correctIndex: 1,
    explanation: 'Equiano saw the hold as a captive, Falconbridge as a surgeon and Newton as a captain, so agreement among them strengthens a conclusion. All three wrote to end the trade, which is why cross-checking matters.',
    partNumber: 6,
    partTitle: 'Source Workshop: Witnesses to the Trade',
  },
  // Part 7: Synthesis and AP Review
  {
    id: 'aastst-ent-7a',
    question: 'Which statement best links the theme of resistance to the economics of the slave trade?',
    options: ['Revolts led planters to switch from sugar to cotton in the 1790s.', 'Hunger strikes forced Parliament to pass the 1698 act opening the trade.', 'Guarding against revolt raised the cost of every single voyage.', 'Shipmate bonds made captives sell for higher prices in Brazil.'],
    correctIndex: 2,
    explanation: 'Because about one voyage in ten saw an uprising, ships carried larger crews, more guns and barricades, which raised costs and may have reduced the number of people shipped. The other options invent causal links.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
  {
    id: 'aastst-ent-7b',
    question: 'For an essay on the relative importance of the causes that ended the Atlantic slave trade, which evidence best supports the claim that enforcement mattered more than persuasion?',
    options: ['Embarkations stayed near their peak until Brazil\'s 1850 crackdown, then collapsed within a few years.', 'The Wedgwood medallion became fashionable jewelry among British supporters of abolition.', 'Mass petitions reached Parliament in 1788 and again in 1792, with more than 500 in 1792.', 'Equiano\'s Narrative went through nine editions in his lifetime as he toured Britain.'],
    correctIndex: 0,
    explanation: 'National bans left the trade near its peak for decades; it collapsed only when the largest market was closed by an enforced law. The medallion, petitions and Equiano\'s book are evidence of persuasion, not enforcement.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'How the Trade Worked: From Capture to the Coast' },
    { partNumber: 3, partTitle: 'The Middle Passage: Conditions and Shipboard Resistance' },
    { partNumber: 4, partTitle: 'Reading the Data: Volume, Carriers and Change Over Time' },
    { partNumber: 5, partTitle: 'Ending the Trade: Abolitionists, Laws and the Illegal Trade' },
    { partNumber: 6, partTitle: 'Source Workshop: Witnesses to the Trade' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review' },
  ]
}
