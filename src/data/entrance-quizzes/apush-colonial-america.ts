/**
 * Entrance Quiz — Colonial America (APUSH Period 2)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'apushcol-ent-1a',
    question: 'Which best describes the four British North American colonial regions by the early 1700s?',
    options: [
      'New England (mixed economy, Puritan, family migration), Middle colonies (pluralist, Quaker/Lutheran/Reformed, ethnically diverse), Chesapeake (tobacco plantations, Anglican, increasingly enslaved labor), and Lower South (rice/indigo, Anglican, Black-majority by mid-1700s in SC)',
      'Four identical regions with the same economy, religion, demography, and labor system across the entire Atlantic seaboard from 1607 through 1754 with no meaningful regional variation of any kind in any colony',
      'A single unified colony with one economy, one religion, and one government across the entire Atlantic seaboard from 1607 through 1754 with no regional variation or distinct settlement patterns of any kind in any region',
      'A network of Spanish colonies established before 1607 with no English settlement of any kind across the entire Atlantic seaboard from 1607 through 1754 in any region of British North America during the period'
    ],
    correctIndex: 0,
    explanation: 'Four colonial regions: New England, Middle, Chesapeake, Lower South — each with distinct economies, religions, and labor systems.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushcol-ent-1b',
    question: 'Which year saw both the first arrival of Africans at Point Comfort, Virginia AND the first meeting of the Virginia House of Burgesses?',
    options: ['1607', '1619', '1620', '1676'],
    correctIndex: 1,
    explanation: '1619: first Africans at Point Comfort + first House of Burgesses session. (1607 Jamestown; 1620 Mayflower; 1676 Bacon\'s Rebellion.)',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushcol-ent-2a',
    question: 'Which best describes the seventeenth-century shift from indentured servitude to racial slavery in the Chesapeake?',
    options: [
      "After Bacon's Rebellion (1676) demonstrated the danger of cross-racial uprisings, declining English wages reduced the supply of indentured servants, and the Royal African Company (1672) expanded the slave trade, Chesapeake planters shifted from indentured white labor to enslaved African labor — codified in 1660s+ slave codes",
      "There was no shift from indentured servitude to racial slavery in the Chesapeake during the seventeenth century and Chesapeake planters relied entirely on European indentured servants throughout the entire period from 1607 through 1700",
      "The shift happened entirely before 1607 and the Chesapeake had no period of relying on European indentured servants at any point during the entire period from the founding of Jamestown through the end of the seventeenth century",
      "The shift happened only after the American Revolution in 1783 and there was no racial slavery in the Chesapeake during the entire period from 1607 through 1783 with no slave codes of any kind in any region during the period"
    ],
    correctIndex: 0,
    explanation: 'Bacon\'s Rebellion (1676) + declining English servant supply + Royal African Company (1672) + 1660s slave codes = shift to racial slavery.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushcol-ent-2b',
    question: 'Which best describes the British policy of "salutary neglect" before the 1760s?',
    options: [
      'A policy of loosely enforcing the Navigation Acts and other trade laws on the colonies, allowing colonial assemblies to develop their own political traditions and merchants to engage in informal trade, in exchange for colonial loyalty and contribution to imperial goals',
      'A policy of strict enforcement of every trade law on the colonies through standing British military garrisons in every colony from 1607 through the 1760s with no informal trade or assembly autonomy of any kind in any region',
      'A policy of complete colonial independence from Britain, with no Navigation Acts, no British governors, and no British military presence of any kind in any colony during the entire period from 1607 through the 1760s in any region',
      'A policy applied only to Spanish colonies in the Americas with no application to any British colony at any point during the entire period from 1607 through the 1760s in any region of British North America during the period'
    ],
    correctIndex: 0,
    explanation: 'Salutary neglect: loose enforcement of trade laws + colonial assembly autonomy + informal trade tolerated.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushcol-ent-3a',
    question: "Which best describes Bacon's Rebellion (1676)?",
    options: [
      "An armed uprising in Virginia led by Nathaniel Bacon against Governor William Berkeley over frontier policy and elite privilege; Bacon's coalition included frontier settlers, indentured servants, and enslaved people; Bacon died of illness, the rebellion collapsed, but it accelerated the shift to racial slavery",
      "A peaceful diplomatic agreement signed by all Virginia planters with Governor Berkeley in 1676 that resolved all frontier and labor disputes for the remainder of the seventeenth century with no armed conflict of any kind in any region",
      "A successful Indigenous-led uprising that expelled all English settlers from Virginia in 1676 and re-established Powhatan sovereignty over the entire Tidewater region for the remainder of the seventeenth century in the region",
      "A purely religious revival movement in Massachusetts Bay in 1676 that produced no political, military, or labor-system changes of any kind in any colony during the entire period from 1676 through the end of the seventeenth century"
    ],
    correctIndex: 0,
    explanation: 'Bacon\'s Rebellion 1676: armed cross-racial coalition vs. tidewater elite; collapsed after Bacon\'s death; accelerated shift to racial slavery.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushcol-ent-3b',
    question: 'Which best describes the First Great Awakening (1730s–40s)?',
    options: [
      "An evangelical Protestant revival led by figures such as Jonathan Edwards (whose 'Sinners in the Hands of an Angry God' was preached in 1741) and George Whitefield, which democratized religious authority by emphasizing personal conversion, split denominations into 'Old Lights' and 'New Lights,' and prefigured Revolutionary-era rhetoric",
      "A purely political movement of the 1730s–40s that produced no religious, denominational, or revival effects of any kind in any colony during the entire period from the 1730s through the end of the colonial era in any region",
      "A movement led entirely by Catholic clergy that converted most British colonists to Catholicism during the 1730s–40s and produced no Protestant revival of any kind in any colony during the entire period in any region of British North America",
      "A movement that occurred entirely in Spain and had no presence of any kind in British North America during the 1730s–40s in any colony or region with no religious, denominational, or revival effects of any kind in any region"
    ],
    correctIndex: 0,
    explanation: 'First Great Awakening: Edwards + Whitefield, democratized authority, split into Old/New Lights, prefigured Revolutionary rhetoric.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushcol-ent-4a',
    question: 'Which best describes the relationship between the Atlantic slave trade and seventeenth-century colonial labor systems?',
    options: [
      "The 1672 Royal African Company charter expanded English participation in the slave trade and made enslaved African labor cheaper and more available to Chesapeake and Lower South planters, reinforcing the post-1676 shift from indentured to enslaved labor and creating a Black majority in South Carolina by the mid-1700s",
      "The Atlantic slave trade had no connection to seventeenth-century colonial labor systems and there was no enslaved labor in any British colony during the entire period from 1607 through 1700 in any region of British North America during the period",
      "The Royal African Company was founded in 1900 and had no presence in seventeenth-century colonial labor systems of any kind in any region of British North America during the entire period from 1607 through 1700 in any region",
      "The Atlantic slave trade went exclusively through Spanish colonies and had no contact with British North America during the entire period from 1607 through 1700 in any region of British North America with no enslaved labor of any kind"
    ],
    correctIndex: 0,
    explanation: 'Royal African Company (1672) + post-1676 shift + Black majority in SC by mid-1700s = direct Atlantic slave trade integration.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushcol-ent-4b',
    question: 'Which best describes the connection between mercantilism and the Navigation Acts?',
    options: [
      "Mercantilism held that colonies existed to enrich the mother country; the Navigation Acts (1651, 1660s) operationalized this doctrine by requiring colonial trade to use English ships, pass through English ports, and concentrate certain 'enumerated' commodities (tobacco, sugar) in English markets",
      "Mercantilism and the Navigation Acts had no connection to each other and the Navigation Acts were purely religious legislation with no commercial or economic content of any kind during the entire period from 1651 through the eighteenth century in any region",
      "The Navigation Acts permitted complete free trade between the colonies and any foreign power without restriction during the entire period from 1651 through the American Revolution in any region of British North America with no English ship requirements at any point",
      "Mercantilism was the colonial doctrine that mother countries existed to enrich colonies, the reverse of its actual meaning, and the Navigation Acts required English trade to use colonial ships during the period from 1651 onward in any region"
    ],
    correctIndex: 0,
    explanation: 'Mercantilism + Navigation Acts: colonies enrich mother country; English ships, English ports, enumerated commodities through English markets.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushcol-ent-5a',
    question: 'Which best describes the change in Chesapeake labor systems between 1607 and 1750?',
    options: [
      "The Chesapeake shifted from a labor force initially dominated by white English indentured servants (1610s–1670s) to one increasingly dominated by enslaved African labor (1680s–1750), with the post-1676 transition codified through 1660s+ slave codes that defined slave status as lifelong, racial, and inherited",
      "The Chesapeake had no labor system of any kind during the period from 1607 through 1750 and tobacco plantations operated entirely without any human labor across the entire period from the founding of Jamestown to the eighteenth century",
      "The Chesapeake relied entirely on enslaved African labor from 1607 onward with no period of indentured servitude of any kind during the entire period from 1607 through 1750 in any region of the Chesapeake at any point during the period",
      "The Chesapeake relied entirely on European indentured servants from 1607 through 1750 with no enslaved African labor of any kind during the entire period from 1607 through 1750 in any region of the Chesapeake at any point in the period"
    ],
    correctIndex: 0,
    explanation: 'Chesapeake labor change: indentured (1610s–70s) → enslaved African (1680s–1750), codified by 1660s+ slave codes.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushcol-ent-5b',
    question: 'Which describes a major continuity of the British North American colonies through 1607–1754?',
    options: [
      "Representative colonial assemblies, beginning with the House of Burgesses (1619) and the Mayflower Compact tradition (1620), persisted across the period and gained de facto power through salutary neglect — providing an institutional foundation for revolutionary self-governance after 1763",
      "Representative colonial assemblies were eliminated entirely during the period from 1607 through 1754 and there was no colonial self-governance of any kind in any colony during the entire period from the founding of Jamestown to the French and Indian War",
      "Representative colonial assemblies were invented in 1763 by Parliament and had no presence in any colony during the entire period from 1607 through 1754 in any region of British North America with no House of Burgesses at any point",
      "There were no continuities of any kind in British North American colonies during the period from 1607 to 1754 across British North America in every region with no shared institutions, no shared trade, and no shared political traditions"
    ],
    correctIndex: 0,
    explanation: 'Representative assemblies (Burgesses 1619, Mayflower Compact 1620) are the canonical institutional continuity that grounded later self-governance.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushcol-ent-6a',
    question: "Which historical context is most essential for sourcing John Winthrop's 1630 'City upon a Hill' sermon?",
    options: [
      "The sermon was delivered aboard the Arbella during the Puritan Great Migration to Massachusetts Bay; Winthrop, the incoming governor, articulated the religious and communal purpose of the colony as a visible covenantal model to England and the world",
      "The sermon was delivered in Plymouth Colony in 1620 by William Bradford as a justification for the Mayflower Compact and the Pilgrims' Separatist break from the Church of England during the early colonial period in any region",
      "The sermon was delivered in 1776 by John Adams as a justification for American independence and the rejection of British monarchical authority during the Revolutionary period in any region of the colonies during the period",
      "The sermon was delivered in 1740 by George Whitefield during the Great Awakening as a justification for evangelical revivalism and the rejection of established colonial church authority during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Winthrop 1630 aboard Arbella, Puritan Great Migration to Massachusetts Bay, articulating covenantal purpose.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushcol-ent-6b',
    question: "Phillis Wheatley's 1773 *Poems on Various Subjects* is best read as which type of source?",
    options: [
      "An enslaved African woman in Boston writing under the patronage of the Wheatley family, addressing white Anglo-American readers in Boston and London, with the dual purpose of demonstrating Black literary and spiritual capacity and ironically critiquing racial hierarchy through Christian framing",
      "A free white male English aristocrat writing for an exclusively English aristocratic audience with no connection to enslaved Africans, Boston, or critique of racial hierarchy of any kind during the entire eighteenth century in any region",
      "A Spanish Catholic missionary writing for an Indigenous Mexican audience with no connection to Boston, the Wheatley family, or English-language readers of any kind during the entire eighteenth century in any region of the Americas",
      "A 19th-century academic reconstruction with no actual eighteenth-century author or text of any kind contributing to the production of any portion of the work in any language at any time during the colonial era in any region"
    ],
    correctIndex: 0,
    explanation: 'Wheatley: enslaved African woman in Boston, Wheatley patronage, addressing white Anglo-American readers, dual purpose of demonstrating capacity AND critiquing racial hierarchy.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushcol-ent-7a',
    question: 'In which year did the First Great Awakening peak with Jonathan Edwards\'s sermon "Sinners in the Hands of an Angry God"?',
    options: ['1620', '1676', '1741', '1763'],
    correctIndex: 2,
    explanation: '1741. (1620 Mayflower; 1676 Bacon\'s Rebellion; 1763 end of French & Indian War.)',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'apushcol-ent-7b',
    question: 'Which best demonstrates AP CCOT skill for British colonial governance 1607–1754?',
    options: [
      "Royal authority over the colonies persisted as a formal continuity throughout the period, while colonial assemblies (House of Burgesses 1619, town meetings, etc.) gained de facto power through salutary neglect — producing an institutional change in which colonial self-governance grew within a framework of nominal Crown sovereignty",
      "Nothing remained the same and nothing changed in British colonial governance during the period from 1607 to 1754 in any colony or region of British North America with no Crown authority and no colonial assemblies of any kind at any point",
      "Everything remained the same in British colonial governance during the period from 1607 to 1754 with no growth of colonial assemblies, no salutary neglect, and no institutional change of any kind in any colony or region of British North America",
      "Everything changed in British colonial governance during the period from 1607 to 1754 with no Crown authority, no Navigation Acts, and no continuities of any kind in any colony or region of British North America during the period"
    ],
    correctIndex: 0,
    explanation: 'AP CCOT requires explicitly naming both a continuity AND a change. Crown authority = continuity; assembly power growth = change.',
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
