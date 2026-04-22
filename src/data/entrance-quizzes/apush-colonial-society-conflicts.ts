/**
 * Entrance Quiz — Colonial Society & Conflicts (APUSH Period 2)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'apushcsc-ent-1a',
    question: 'Which best describes the relationship between religion and society across the four colonial regions by the early 1700s?',
    options: [
      'New England remained dominantly Puritan-Congregationalist with a state-supported church; the Middle colonies were the most religiously pluralist (Quaker, Lutheran, Reformed, etc.); the Chesapeake had an established Anglican church but with weak rural enforcement; and the Lower South had Anglican establishments alongside an enslaved Black majority',
      'All four colonial regions had identical Catholic establishments with no religious diversity of any kind across the entire Atlantic seaboard from 1607 through 1754 in any region of British North America during the period',
      'All four colonial regions banned organized religion entirely from 1607 through 1754 with no Puritan, Anglican, Quaker, Lutheran, or Reformed presence of any kind in any region of British North America during the period',
      'All four colonial regions had a single unified Church of England establishment that was identical in every colony from 1607 through 1754 with no Puritan, Quaker, or Lutheran presence of any kind in any region during the period'
    ],
    correctIndex: 0,
    explanation: 'Four distinct religious patterns: NE Puritan-Cong, Middle pluralist, Chesapeake weak Anglican, Lower South Anglican + Black majority.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushcsc-ent-1b',
    question: 'Which best identifies the dominant labor system of the Chesapeake by 1750?',
    options: [
      'Enslaved African labor on tobacco plantations, having shifted from a predominantly white indentured-servant labor force after Bacon\'s Rebellion (1676) and the 1660s+ slave codes that codified racial, lifelong, hereditary slavery',
      'White indentured servitude on tobacco plantations with no enslaved African labor of any kind in the Chesapeake during the entire period from 1607 through 1750 in any region of the Chesapeake at any point during the period',
      'Free wage labor on small family farms with no plantations of any kind in the Chesapeake during the entire period from 1607 through 1750 in any region of the Chesapeake at any point during the period',
      'Spanish encomienda labor on Catholic mission farms with no English plantations of any kind in the Chesapeake during the entire period from 1607 through 1750 in any region of the Chesapeake at any point during the period'
    ],
    correctIndex: 0,
    explanation: 'Chesapeake by 1750 = enslaved African labor on tobacco plantations, post-1676 shift codified by 1660s+ slave codes.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushcsc-ent-2a',
    question: 'Which best describes the process by which the British colonies developed an Atlantic World economy?',
    options: [
      'Colonial commodities (Chesapeake tobacco, Lower South rice/indigo, Caribbean sugar, New England fish/timber) were integrated into a triangular Atlantic trade with England, West Africa, and the Caribbean — formalized through Navigation Acts (1651, 1660s) and dependent on enslaved African labor',
      'The British colonies developed an Atlantic economy entirely separate from West Africa and the Caribbean during the entire period from 1607 through 1754 with no triangular trade, no Navigation Acts, and no enslaved labor of any kind',
      'The British colonies developed an Atlantic economy entirely separate from England during the entire period from 1607 through 1754 with no Navigation Acts and no English markets for colonial commodities of any kind in any region',
      'The British colonies developed no Atlantic economy of any kind during the entire period from 1607 through 1754 with no Chesapeake tobacco, no Lower South rice, no New England fish, and no Caribbean sugar of any kind in any region'
    ],
    correctIndex: 0,
    explanation: 'Atlantic World economy: tobacco/rice/indigo/sugar/fish + triangular trade + Navigation Acts + enslaved African labor.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushcsc-ent-2b',
    question: 'Which best describes how the First Great Awakening (1730s–40s) reshaped colonial society?',
    options: [
      'Itinerant preachers (notably George Whitefield) and revival ministers (notably Jonathan Edwards) democratized religious authority by emphasizing personal conversion experience, splitting denominations into "Old Lights" (anti-revival) and "New Lights" (pro-revival), and creating intercolonial networks that prefigured Revolutionary-era rhetoric',
      'The First Great Awakening had no effect on colonial society of any kind during the period from 1730s–40s in any colony or region of British North America with no itinerant preachers, no revival ministers, and no Old/New Light split of any kind',
      'The First Great Awakening produced a complete colonial-wide conversion to Catholicism during the period from 1730s–40s in every colony and region of British North America with no Protestant revival of any kind in any region during the period',
      'The First Great Awakening was a purely political movement of the 1730s–40s that produced no religious effects of any kind in any colony or region of British North America with no itinerant preaching, conversion, or denominational split of any kind in any region'
    ],
    correctIndex: 0,
    explanation: 'First Great Awakening: itinerant preachers + personal conversion + Old/New Light split + intercolonial networks prefiguring Revolutionary rhetoric.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushcsc-ent-3a',
    question: 'Which best describes the Pueblo Revolt of 1680?',
    options: [
      'A coordinated uprising of Pueblo nations in New Mexico led by Popé that expelled Spanish colonists for over a decade in protest of missionary suppression of Pueblo religion, encomienda labor, and droughts/famines blamed on Spanish presence',
      'A peaceful negotiation between Pueblo nations and Spanish colonists in 1680 that resolved all religious and labor disputes for the remainder of the seventeenth century in New Mexico with no expulsion of Spanish colonists of any kind',
      'A successful English colonial invasion of New Mexico in 1680 that expelled all Spanish colonists permanently and established English rule over the Pueblo nations for the remainder of the seventeenth century in the region in any portion',
      'A failed Indigenous uprising in 1680 that produced no expulsion of Spanish colonists, no break in Spanish missionary activity, and no change in encomienda labor of any kind during the entire period from 1680 through the early eighteenth century in any region'
    ],
    correctIndex: 0,
    explanation: 'Pueblo Revolt 1680: coordinated, Popé-led, expelled Spanish for over a decade, in protest of missionary suppression + encomienda + droughts.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushcsc-ent-3b',
    question: 'Which best describes the Stono Rebellion of 1739?',
    options: [
      'An uprising of approximately 20 enslaved Africans in South Carolina (later joined by more) who attempted to march to Spanish Florida shouting "Liberty"; suppressed by white militia and leading to the Negro Act of 1740, which imposed harsher slave codes',
      'A peaceful negotiation between enslaved Africans and white South Carolina planters in 1739 that resolved all labor and freedom disputes for the remainder of the eighteenth century with no rebellion, no march to Florida, and no Negro Act of any kind',
      'A successful English colonial invasion of Spanish Florida in 1739 that established South Carolina rule over the entire Spanish colony for the remainder of the eighteenth century with no enslaved African participation of any kind in the period',
      'A purely religious revival movement among enslaved Africans in 1739 that produced no political, military, or legislative change of any kind during the entire period from 1739 through the eighteenth century in any region of the lower South'
    ],
    correctIndex: 0,
    explanation: 'Stono 1739: ~20 enslaved Africans, marched toward Spanish Florida, suppressed, led to Negro Act of 1740.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushcsc-ent-4a',
    question: "Which best describes the connection between colonial conflict and the development of slave codes?",
    options: [
      "Bacon's Rebellion (1676) demonstrated the danger of cross-racial coalitions of indentured servants and enslaved people, and the Stono Rebellion (1739) demonstrated the danger of slave organization itself; both events accelerated the codification of slave law (1660s+ Chesapeake codes; 1740 South Carolina Negro Act) that hardened lifelong, hereditary, racial slavery",
      "Colonial conflict had no connection to the development of slave codes of any kind and slave codes were entirely unrelated to Bacon's Rebellion, the Stono Rebellion, or any other conflict in British North America during the entire period from 1607 through 1754",
      "Colonial conflict prevented the development of slave codes entirely and there were no slave codes of any kind in British North America during the entire period from 1607 through 1754 in any region of British North America during the period",
      "Slave codes existed before any colonial conflict and were entirely unaffected by Bacon's Rebellion, the Stono Rebellion, or any other event during the period from 1607 through 1754 in any region of British North America during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Bacon\'s 1676 + Stono 1739 → 1660s Chesapeake slave codes + 1740 SC Negro Act. Direct conflict-to-law pattern.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushcsc-ent-4b',
    question: "Which best describes the connection between the Great Awakening and Indigenous and African religious life in the colonies?",
    options: [
      "The Great Awakening's emphasis on personal conversion experience opened (limited and contested) space for Indigenous and African Christian conversion and lay preaching; Indigenous communities incorporated revival theology selectively into existing religious frameworks, and enslaved Africans developed distinctive Afro-Christian traditions blending West African and revival elements",
      "The Great Awakening had no contact with Indigenous or African communities of any kind and was an exclusively white English-Protestant phenomenon during the period from 1730s–40s in any region of British North America with no Indigenous or African participation",
      "The Great Awakening required complete forced conversion of all Indigenous and African people in the colonies during the period from 1730s–40s with no selective incorporation, no Afro-Christian traditions, and no Indigenous theological adaptation of any kind in any region",
      "The Great Awakening produced no Indigenous or African religious change of any kind during the period from 1730s–40s in any region of British North America with no Indigenous Christian conversion and no Afro-Christian traditions of any kind in any region"
    ],
    correctIndex: 0,
    explanation: 'Great Awakening opened (limited) space for Indigenous + African Christian engagement; selective Indigenous incorporation + Afro-Christian traditions.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushcsc-ent-5a',
    question: 'Which best describes the change in colonial responses to enslaved resistance between 1607 and 1754?',
    options: [
      "Early seventeenth-century colonies relied on a relatively informal mix of indentured servitude and enslaved labor; after Bacon's Rebellion (1676), the codification of racial slavery accelerated; and after the Stono Rebellion (1739), South Carolina's Negro Act of 1740 imposed dramatically harsher restrictions on movement, education, and assembly — reflecting a long arc of intensifying surveillance and control over enslaved people",
      "Colonial responses to enslaved resistance remained completely identical from 1607 through 1754 with no codification of slavery, no Bacon's Rebellion effect, and no Negro Act of 1740 of any kind in any region of British North America during the period",
      "Colonial responses to enslaved resistance became progressively more lenient from 1607 through 1754 with the gradual elimination of all slave codes, surveillance, and restrictions on enslaved people in every region of British North America during the period",
      "Colonial responses to enslaved resistance had no relationship to Bacon's Rebellion, the Stono Rebellion, or any other conflict during the period from 1607 through 1754 in any region of British North America during the period in any region of the colonies"
    ],
    correctIndex: 0,
    explanation: 'Long arc 1607-1754: informal mix → post-1676 codification → post-1739 Negro Act = intensifying surveillance and control.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushcsc-ent-5b',
    question: 'Which describes a major continuity of Indigenous-colonial relations through 1607–1754?',
    options: [
      "Indigenous nations consistently resisted colonial encroachment through diplomacy, trade alliances, and warfare (Powhatan 1622, Pequot 1636–37, King Philip's 1675–76, Pueblo 1680, Yamasee 1715–17), even as cumulative population loss + epidemics + land cessions reduced Indigenous power east of the Appalachians",
      "Indigenous nations did not exist in British North America during the period from 1607 through 1754 and there was no Indigenous resistance, diplomacy, trade alliance, or warfare of any kind during the period in any region of British North America during the period",
      "Indigenous nations had no resistance to colonial encroachment of any kind during the period from 1607 through 1754 with no Powhatan Uprising, no Pequot War, no King Philip's War, no Pueblo Revolt, and no Yamasee War of any kind in any region",
      "Indigenous nations completely expelled all European colonists from North America by 1754 with no English, French, or Spanish presence of any kind during the entire eighteenth century in any region of North America during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Continuity: Indigenous resistance throughout (Powhatan, Pequot, King Philip\'s, Pueblo, Yamasee) AND cumulative population loss + land cessions reducing Indigenous power east of Appalachians.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushcsc-ent-6a',
    question: "Which historical context is most essential for sourcing Antonio de Otermín's 1680 account of the Pueblo Revolt?",
    options: [
      "The account is by the Spanish governor of New Mexico in the immediate aftermath of the 1680 Pueblo Revolt led by Popé, in which Pueblo nations expelled Spanish colonists for over a decade in protest of missionary suppression of Pueblo religion and encomienda labor",
      "The account is by an Indigenous Pueblo leader in 1680 and provides a complete first-person Pueblo perspective on Spanish missionary and labor practices in New Mexico during the late seventeenth century in any region of New Mexico during the period",
      "The account is by an English Puritan minister in the immediate aftermath of the 1680 King Philip's War in New England and provides a Puritan covenantal interpretation of the war with the Wampanoag-Narragansett alliance during the period in any region",
      "The account is by a French Jesuit missionary in New France in the immediate aftermath of the 1680 Iroquois wars and provides a French Catholic perspective on the Iroquois Confederacy during the late seventeenth century in any region of North America"
    ],
    correctIndex: 0,
    explanation: 'Otermín = Spanish governor of NM, immediate post-1680 Pueblo Revolt, Popé-led expulsion against missionary suppression and encomienda labor.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushcsc-ent-6b',
    question: "The 1739 anonymous account of the Stono Rebellion is best read as which type of source?",
    options: [
      "An anonymous white South Carolina colonial account whose purpose was to warn other slave-holding colonies and justify harsher slave codes (Negro Act of 1740) — and whose silence about any first-person Stono rebel perspective is itself a sourcing fact about whose voice survives in colonial archives",
      "A first-person enslaved African account written by a Stono rebel that provides a complete Africa-centered perspective on the rebellion's causes, planning, and aftermath in South Carolina during the late 1730s in any region of the lower South during the period",
      "A Spanish colonial account from St. Augustine that provides a Spanish imperial perspective on the rebellion and the Spanish offer of freedom to enslaved people who reached Spanish territory during the period from 1739 onward in any region of British North America",
      "A British parliamentary committee report that provides a London-centered imperial perspective on the rebellion and a comprehensive policy response from the British government during the period from 1739 through the early 1740s in any region of British North America"
    ],
    correctIndex: 0,
    explanation: 'Stono account: anonymous white SC, purpose = warn + justify Negro Act 1740. Absence of rebel voice is a sourcing fact.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushcsc-ent-7a',
    question: 'In which year did Bacon\'s Rebellion occur?',
    options: ['1622', '1636', '1676', '1739'],
    correctIndex: 2,
    explanation: '1676 (Bacon\'s Rebellion in Virginia). 1622 = Powhatan Uprising; 1636 = Pequot War begins; 1739 = Stono Rebellion.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'apushcsc-ent-7b',
    question: 'Which best demonstrates AP comparison skill across colonial conflicts?',
    options: [
      "The Pueblo Revolt (1680) and Bacon's Rebellion (1676) both reflected backcountry challenges to colonial authority — but the Pueblo Revolt was led by Indigenous nations against Spanish missionary and encomienda regimes and produced a decade-long expulsion, while Bacon's Rebellion was a cross-racial coalition of frontier settlers, indentured servants, and enslaved people against the Virginia tidewater elite and produced an acceleration of racial slavery",
      "The Pueblo Revolt (1680) and Bacon's Rebellion (1676) were entirely identical in cause, leadership, demographics, and outcome with no meaningful differences of any kind during the period from 1676 through 1680 in any region of North America during the period in any region",
      "The Pueblo Revolt (1680) and Bacon's Rebellion (1676) had no shared themes of any kind and cannot be compared in any meaningful way during the period from 1676 through 1680 in any region of North America during the period in any region of the colonies",
      "Neither the Pueblo Revolt (1680) nor Bacon's Rebellion (1676) actually occurred and both are historical myths invented in the twentieth century with no documentary record of any kind during the period in any region of North America during the period"
    ],
    correctIndex: 0,
    explanation: 'AP comparison: name shared theme (backcountry challenge) AND name specific differences (Indigenous vs. cross-racial; missionary/encomienda vs. tidewater elite; expulsion vs. racial-slavery acceleration).',
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
