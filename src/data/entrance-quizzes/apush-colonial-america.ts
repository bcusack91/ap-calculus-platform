/**
 * Entrance Quiz — Colonial America, 1607–1754 (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushcol-ent-1a',
    question: 'Which description best fits the Dutch colony of New Netherland before the English seized it in 1664?',
    options: ['A Puritan commonwealth where only church members could vote', 'A Catholic refuge founded under a charter to Lord Baltimore', 'A trade colony with a diverse, multilingual population', 'A tobacco colony worked mainly by English indentured servants'],
    correctIndex: 2,
    explanation: 'The Dutch West India Company founded New Netherland as a fur-trading colony, and New Amsterdam drew a mixed population of many languages and faiths. The other options describe Massachusetts, Maryland and Virginia.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushcol-ent-1b',
    question: 'Which comparison of the Middle Colonies and New England in the early 1700s is most accurate?',
    options: ['The mid-Atlantic region had more varied faiths and peoples and shipped grain', 'New England was more diverse in faith and exported rice and indigo to Britain', 'Both relied on enslaved majorities to grow tobacco for export to London', 'Both had established Anglican churches that taxed every resident'],
    correctIndex: 0,
    explanation: 'Quakers, Lutherans, Dutch Reformed, Germans and Scots-Irish made the Middle Colonies the most diverse region, and its wheat and flour earned it the name "breadbasket." New England was largely Congregationalist and did not grow rice or tobacco for export.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Why the Regions Diverged: Land, Motives and Labor
  {
    id: 'apushcol-ent-2a',
    question: 'Why did proprietors such as William Penn and Lord Baltimore promise religious toleration in their colonies?',
    options: ['Parliament required every colony to guarantee freedom for all faiths', 'Enlightenment thinkers had persuaded the Crown to end established churches', 'They hoped to convert the Native peoples of the region to Quakerism', 'They needed settlers to buy land, and their own faiths were persecuted'],
    correctIndex: 3,
    explanation: 'Proprietors earned money from land sales and rents, so toleration helped attract settlers, and Penn (a Quaker) and Baltimore (a Catholic) also wanted refuge for their own groups. No law of Parliament required toleration, and these colonies predate the Enlightenment\'s influence.',
    partNumber: 2,
    partTitle: 'Why the Regions Diverged: Land, Motives and Labor',
  },
  {
    id: 'apushcol-ent-2b',
    question: 'Which factor best explains why South Carolina had a Black majority by the early 1700s?',
    options: ['Georgia\'s Trustees sent freed Africans north to settle in Carolina', 'Settlers from Barbados brought a plantation model, and rice needed many workers', 'Spanish Florida paid Africans to settle on farms in the Carolina lowcountry', 'Carolina outlawed indentured servitude in its first charter of 1663'],
    correctIndex: 1,
    explanation: 'Many early Carolina planters came from sugar-rich Barbados with its model of a planter elite over an enslaved majority, and coastal rice cultivation demanded large labor forces. Spanish Florida offered freedom to people escaping Carolina, the reverse of settlement there.',
    partNumber: 2,
    partTitle: 'Why the Regions Diverged: Land, Motives and Labor',
  },

  // Part 3: Reading Colonial Voices: Leaders, Servants and Lawmakers
  {
    // source: original
    id: 'apushcol-ent-3a',
    question: 'The following summary, written for this question, describes a promotional pamphlet printed in London in the 1680s: it promises servants land at the end of their terms and describes the colony as healthy, fertile and full of game. Which sourcing point most affects how a historian should use it?',
    options: ['It was meant to recruit settlers and likely hides hardships', 'It was written by a servant describing his own daily experience', 'It was a government census that counted the colony\'s population', 'It was meant to warn Europeans not to migrate to the colonies'],
    correctIndex: 0,
    explanation: 'A pamphlet designed to attract migrants had every reason to stress abundance and leave out disease and hard labor. It is good evidence of how colonies were advertised, not of actual conditions.',
    partNumber: 3,
    partTitle: 'Reading Colonial Voices: Leaders, Servants and Lawmakers',
  },
  {
    id: 'apushcol-ent-3b',
    question: 'A colony\'s former leader and an indentured servant both report hunger and disease in early Virginia, but they blame different causes. What can a historian most confidently conclude?',
    options: ['The leader\'s account is false because officials always lie about events', 'The servant exaggerated everything because he wanted to be rescued', 'Those hardships were real, since writers in opposite positions agree', 'Neither account has any value as evidence about early Virginia'],
    correctIndex: 2,
    explanation: 'When sources written from very different positions agree on a fact, that agreement is strong evidence for it. Their disagreement about causes reveals each author\'s point of view rather than making both accounts worthless.',
    partNumber: 3,
    partTitle: 'Reading Colonial Voices: Leaders, Servants and Lawmakers',
  },

  // Part 4: Transatlantic Trade and Mercantilism: Causation with Data
  {
    id: 'apushcol-ent-4a',
    question: 'Which colonial activity would a mercantilist official in London most likely have tried to restrict in the first half of the 1700s?',
    options: ['Chesapeake planters shipping their tobacco to English ports', 'New Englanders building ships for English merchant firms', 'Carolina planters growing indigo for a London bounty', 'Settlers making hats and woolen cloth to sell abroad'],
    correctIndex: 3,
    explanation: 'Mercantilism treated colonies as suppliers of raw materials and buyers of English manufactures, so laws such as the Wool Act (1699) and Hat Act (1732) limited colonial manufacturing. The other activities served English interests and were encouraged.',
    partNumber: 4,
    partTitle: 'Transatlantic Trade and Mercantilism: Causation with Data',
  },
  {
    // source: original (simplified description of trade patterns)
    id: 'apushcol-ent-4b',
    question: 'A simplified description, written for this question, of New England\'s exports in the mid-1700s: the largest share, mostly dried fish, lumber and livestock, went to the British West Indies, with smaller shares to Britain and southern Europe. This pattern best supports which conclusion?',
    options: ['New England\'s economy stood apart from Atlantic slavery', 'Northern profits depended on Caribbean slave plantations', 'New England grew sugar cane for export to British refiners', 'The Navigation Acts banned all trade with the West Indies'],
    correctIndex: 1,
    explanation: 'Sugar islands devoted their land to cane and bought food and lumber from the mainland, so New England\'s trade was tied to slavery in the Caribbean even where few enslaved people lived. Trade within the empire was allowed under the Navigation Acts.',
    partNumber: 4,
    partTitle: 'Transatlantic Trade and Mercantilism: Causation with Data',
  },

  // Part 5: Empire and Autonomy: Change Over Time and Common Misconceptions
  {
    id: 'apushcol-ent-5a',
    question: 'News of the Glorious Revolution in 1689 set off uprisings in Massachusetts, New York and Maryland. These uprisings are best understood as',
    options: ['early attempts to win full independence from British rule', 'revolts by enslaved people against the planter elite', 'colonists claiming English rights against royal officials', 'Native alliances organized to stop English expansion'],
    correctIndex: 2,
    explanation: 'Colonists saw the overthrow of the Catholic James II as a victory for Protestantism and representative government, and they ousted officials linked to him, such as Andros in Boston. They acted as loyal subjects of William and Mary, not as rebels seeking independence.',
    partNumber: 5,
    partTitle: 'Empire and Autonomy: Change Over Time and Common Misconceptions',
  },
  {
    id: 'apushcol-ent-5b',
    question: 'Which development best explains why colonial assemblies grew powerful between about 1720 and 1754?',
    options: ['They voted taxes and paid officials, governors included', 'Parliament gave them the right to veto any act passed in London', 'Colonial voters began electing their own royal governors directly', 'The Crown abolished royal governorships throughout the colonies'],
    correctIndex: 0,
    explanation: 'Control of the purse let assemblies pressure governors who depended on them for pay, while loose enforcement from London left them room to act. Governors were still appointed, and assemblies had no veto over Parliament.',
    partNumber: 5,
    partTitle: 'Empire and Autonomy: Change Over Time and Common Misconceptions',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'apushcol-ent-6a',
    question: 'William Penn\'s Frame of Government (1682) promised toleration and an elected assembly. Considering its intended audience, the document was most likely meant to',
    options: ['persuade the Lenape to give up their lands without payment', 'attract persecuted Protestant settlers to buy land', 'convince Parliament to abolish the monarchy in England', 'justify an armed uprising against a royal governor'],
    correctIndex: 1,
    explanation: 'Penn needed buyers for his land, so he promised European migrants, especially Quakers and German Pietists, religious freedom and a voice in government. Penn in fact bought land from the Lenape, and justifying an uprising describes Bacon\'s Declaration.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushcol-ent-6b',
    question: 'An SAQ asks for one piece of evidence that complicates the claim that the Puritans came to America for religious freedom. Which response earns the point?',
    options: ['Puritans founded Harvard College in 1636 to train ministers', 'About 20,000 Puritans settled New England in the Great Migration', 'Puritans hoped to reform the Church of England from within', 'Massachusetts banished Roger Williams and Anne Hutchinson for dissent'],
    correctIndex: 3,
    explanation: 'Punishing dissenters shows that Puritans sought freedom for their own faith, not for others. The other statements are accurate but do not complicate the claim.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'apushcol-ent-7a',
    question: 'Which pairing correctly matches a change and a continuity in British North America between 1607 and 1754?',
    options: ['Change: enslaved labor became dominant in the Chesapeake; continuity: colonies stayed under Crown and Parliament', 'Change: the colonies won independence; continuity: indentured servants did most Chesapeake labor', 'Change: Native nations vanished from the East; continuity: no colony had an elected assembly', 'Change: Parliament repealed the Navigation Acts; continuity: Puritans governed every colony'],
    correctIndex: 0,
    explanation: 'Enslaved Africans replaced indentured servants as the Chesapeake\'s main labor force by about 1700, while the colonies remained subordinate to Britain. Elected assemblies remained the norm, and Native nations remained significant powers.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushcol-ent-7b',
    question: 'Which comparison of British colonial government and the government of New France around 1750 is most accurate?',
    options: ['New France had elected assemblies, while British colonies had none', 'Both were ruled by viceroys sent from the royal court in Madrid', 'British colonies had elected assemblies, while New France had none', 'Both allowed only Protestant settlers to hold land or office'],
    correctIndex: 2,
    explanation: 'British colonies generally had an elected assembly alongside the governor, while New France was run by a royal governor and intendant with no elected body. New France was Catholic, and viceroys governed New Spain.',
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
    { partNumber: 2, partTitle: 'Why the Regions Diverged: Land, Motives and Labor' },
    { partNumber: 3, partTitle: 'Reading Colonial Voices: Leaders, Servants and Lawmakers' },
    { partNumber: 4, partTitle: 'Transatlantic Trade and Mercantilism: Causation with Data' },
    { partNumber: 5, partTitle: 'Empire and Autonomy: Change Over Time and Common Misconceptions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
