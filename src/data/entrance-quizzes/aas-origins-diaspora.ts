/**
 * Entrance Quiz — Origins of the African Diaspora (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasod-ent-1a',
    question: 'A student claims that the history of the African diaspora is chiefly the history of Africans taken to what became the United States. Which evidence most directly challenges this claim?',
    options: ['The first Africans in English Virginia landed at Point Comfort in 1619.', 'Equiano published his autobiography in London in 1789, during the trade debate.', 'Nanny led the Windward Maroons of Jamaica against British troops in the 1730s.', 'Of about 10.7 million survivors of the crossing, mainland North America took under 4 percent.'],
    correctIndex: 3,
    explanation: 'Mainland North America received only about 3.6 percent of the people who survived the crossing; most landed in Brazil and the Caribbean. The other facts are true but say nothing about where the diaspora was concentrated.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasod-ent-1b',
    question: 'Which pairing of a core concept with an example is accurate?',
    options: ['Creolization: a new language joining English words to African grammar', 'Retention: Haitian Kreyòl, a new language born in colonial Saint-Domingue', 'Diaspora: freed captives returning to their home regions after abolition', 'Creolization: an Akan day name such as Kofi kept unchanged in Jamaica'],
    correctIndex: 0,
    explanation: 'Creolization blends several traditions into something new born in the Americas, such as Gullah Geechee or Haitian Kreyòl, so Kreyòl is not retention. A day name kept unchanged is retention, and a diaspora is a people scattered from a homeland, not a return.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Africans in the Early Atlantic World, 1441–1619
  {
    id: 'aasod-ent-2a',
    question: 'Which statement best places the 1619 arrival of Africans at Point Comfort, Virginia, in its broader historical context?',
    options: ['It began the Atlantic slave trade, since no Africans had crossed the ocean before then.', 'It came about a century into an Iberian trade that had already carried Africans to Brazil and Spanish America.', 'It followed an English treaty with Ndongo that sent free African workers to the tobacco colonies.', 'It marked the first time that any enslaved Africans had been put to work on sugar plantations.'],
    correctIndex: 1,
    explanation: 'By 1619 Portuguese and Spanish traders had been carrying Africans across the Atlantic for about a hundred years, and sugar plantations on Madeira and São Tomé were older still. The people landed at Point Comfort were most likely captives of Portuguese wars in Ndongo, not workers sent under a treaty.',
    partNumber: 2,
    partTitle: 'Africans in the Early Atlantic World, 1441–1619',
  },
  {
    id: 'aasod-ent-2b',
    question: 'A student writes, "King Afonso I of Kongo was an early abolitionist." Which evidence most weakens this claim?',
    options: ['In 1526 he complained that traders were seizing free people, even the sons of nobles.', 'He wrote to João III as a fellow Catholic monarch and asked him for priests and teachers.', 'He soon set up royal officials to confirm that people sold abroad were lawfully enslaved.', 'He told João III that the kidnapping of his subjects had left the land depopulated.'],
    correctIndex: 2,
    explanation: 'Appointing officials to check that captives had been legally enslaved shows that Afonso wanted royal control of the trade, not an end to slavery. His complaints about kidnapping and depopulation fit his aim of protecting free Kongolese.',
    partNumber: 2,
    partTitle: 'Africans in the Early Atlantic World, 1441–1619',
  },
  // Part 3: Mapping the Diaspora: Regions of Origin, Destinations and Numbers
  {
    id: 'aasod-ent-3a',
    question: 'Estimated survivors landed in the Americas, 1501–1866 (Trans-Atlantic Slave Trade Database, rounded): Brazil 4.86 million; British Caribbean 2.32 million; Spanish Americas 1.29 million; mainland North America 0.39 million; total of all destinations 10.7 million.\n\nWhich conclusion do these figures support?',
    options: ['Mainland North America received about one tenth of all survivors.', 'The British Caribbean received more than Brazil and Spanish America.', 'Spanish America took in about three times as many as North America.', 'Brazil received roughly one quarter of all survivors of the voyage.'],
    correctIndex: 2,
    explanation: '1.29 million is about 3.3 times 0.39 million. Brazil took about 45 percent, more than the British Caribbean, and mainland North America took about 3.6 percent, not one tenth.',
    partNumber: 3,
    partTitle: 'Mapping the Diaspora: Regions of Origin, Destinations and Numbers',
  },
  {
    id: 'aasod-ent-3b',
    question: 'Jamaica\'s enslaved population depended on continuing imports from Africa, while the enslaved population of the Chesapeake grew by natural increase by the mid-1700s. Which factor helps explain this difference?',
    options: ['Deadly cane work, tropical disease and imports that were heavily male', 'Laws in Virginia that kept enslaved families together and banned sale', 'An earlier end to legal slave imports into Jamaica than into Virginia', 'Larger numbers of African women carried to Virginia than to Jamaica'],
    correctIndex: 0,
    explanation: 'Sugar work and tropical disease killed many, and male-heavy cargoes meant fewer families formed, so deaths outpaced births in the sugar colonies. Virginia had no laws protecting families from sale, and Britain banned the trade to Jamaica in 1807, at about the same time as the United States.',
    partNumber: 3,
    partTitle: 'Mapping the Diaspora: Regions of Origin, Destinations and Numbers',
  },
  // Part 4: Retention and Creolization in Practice
  {
    id: 'aasod-ent-4a',
    question: 'Enslaved people in the American South set Christian hymns and Bible stories to call-and-response singing, clapping and syncopated rhythms drawn from West and Central African music, creating the spirituals. This development is best described as',
    options: ['an African practice kept apart from Christianity and left unchanged', 'a European hymn style imposed by planters, with no African elements left', 'a church music from Europe that enslaved people sang without changing it', 'an African musical form reshaped to serve a new faith'],
    correctIndex: 3,
    explanation: 'Spirituals kept African musical forms such as call and response and syncopation but put them to work in Christian worship, a blend that is creolization rather than simple retention. They were neither an unchanged African practice nor European hymns sung without change.',
    partNumber: 4,
    partTitle: 'Retention and Creolization in Practice',
  },
  {
    id: 'aasod-ent-4b',
    question: 'In 1949 the linguist Lorenzo Dow Turner documented thousands of African-derived words and personal names in Gullah speech on the Sea Islands. His findings most directly challenge which scholar\'s position?',
    options: ['Herskovits, who argued that many Africanisms survived in African American life', 'Frazier, who argued that slavery in the United States had stripped away most African heritage', 'Mintz and Price, who stressed new cultures built from shared African principles', 'Berlin, who described Atlantic creoles bargaining for freedom on the coast'],
    correctIndex: 1,
    explanation: 'Thousands of surviving African words and names contradict E. Franklin Frazier\'s view that African heritage was largely erased. Turner\'s evidence supports Herskovits and fits the creolization view rather than challenging them.',
    partNumber: 4,
    partTitle: 'Retention and Creolization in Practice',
  },
  // Part 5: Maroons and the Revolutionary Diaspora
  {
    id: 'aasod-ent-5a',
    question: 'Which comparison accurately distinguishes Palmares in Brazil from the Haitian Revolution?',
    options: ['Palmares built a free society alongside slavery; Haiti destroyed slavery and colonial rule in a whole colony.', 'Palmares abolished slavery across Brazil by treaty; Haiti won freedom only for a few towns in the mountains.', 'Palmares was founded by free migrants from Portugal; Haiti\'s revolt was led by French colonists and planters.', 'Palmares lasted only a few months in 1694; Haiti\'s rebellion was crushed by Napoleon\'s army in 1802.'],
    correctIndex: 0,
    explanation: 'Palmares was a fugitive federation that survived for most of the 1600s beside Brazil\'s slave system, while the revolution in Saint-Domingue ended slavery and French rule and founded Haiti in 1804. The other options reverse or misdate the two cases.',
    partNumber: 5,
    partTitle: 'Maroons and the Revolutionary Diaspora',
  },
  {
    id: 'aasod-ent-5b',
    question: 'After 1804, slaveholding states tightened laws on enslaved people\'s movement, literacy and assembly, and the United States refused to recognize Haiti until 1862. These responses best reflect',
    options: ['a wish to buy sugar from Haiti at lower prices than from Cuba', 'support for French efforts to win back the colony by negotiation', 'fear that Haiti would inspire revolt', 'a belief that Haiti\'s leaders would soon restore slavery on their own'],
    correctIndex: 2,
    explanation: 'A successful revolution by enslaved people alarmed slaveholders, who restricted the enslaved and denied the new Black nation diplomatic recognition. Nothing suggests that trade prices, French diplomacy or an expected return of slavery drove these choices.',
    partNumber: 5,
    partTitle: 'Maroons and the Revolutionary Diaspora',
  },
  // Part 6: Source Workshop: Voices of the Black Atlantic
  // source: Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano, 1789 (ch. 2); verbatim
  {
    id: 'aasod-ent-6a',
    question: 'Equiano, describing the sale of captives in Barbados, where relatives were sold apart:\n"O, ye nominal Christians! might not an African ask you, learned you this from your God, who says unto you, Do unto all men as you would men should do unto you? Is it not enough that we are torn from our country and friends to toil for your luxury and lust of gain?"\n— Olaudah Equiano, The Interesting Narrative (1789)\n\nEquiano\'s main strategy in this passage is to',
    options: ['describe Igbo society so readers will reject images of Africa as savage', 'turn his British readers\' own faith against the slave trade', 'call on enslaved people in the Caribbean to rise up against their owners', 'prove through exact memories that he himself was born in West Africa'],
    correctIndex: 1,
    explanation: 'By quoting the Golden Rule to "nominal Christians," Equiano holds readers to the faith they claim and condemns the trade as un-Christian. The passage is addressed to slaveholding Christians, not to enslaved people, and it is not about his birthplace or Igbo customs.',
    partNumber: 6,
    partTitle: 'Source Workshop: Voices of the Black Atlantic',
  },
  {
    id: 'aasod-ent-6b',
    question: 'In 1787 a group of British reformers founded the Society for Effecting the Abolition of the Slave Trade. In the same year, Ottobah Cugoano\'s Thoughts and Sentiments stood out because it',
    options: ['urged Parliament to regulate shipboard conditions instead of ending the trade', 'defended slavery in the colonies as long as captives were taught Christianity', 'called for an immediate end to slavery itself, not only to the Atlantic trade', 'asked the Crown to resettle all Black Londoners in the colony of Jamaica'],
    correctIndex: 2,
    explanation: 'Most British abolitionists of 1787 targeted the trade, while Cugoano, who had been enslaved in Grenada, demanded immediate emancipation and defended the right to resist. He did not accept regulation, Christian slavery or resettlement in a slave colony.',
    partNumber: 6,
    partTitle: 'Source Workshop: Voices of the Black Atlantic',
  },
  // Part 7: Synthesis and AP Review
  {
    id: 'aasod-ent-7a',
    question: 'A student\'s thesis states that Africans in the Atlantic world were passive victims who quickly lost their cultures. Which pair of evidence most directly refutes both parts of this thesis?',
    options: ['The 1452 papal bull Dum Diversas and Zurara\'s chronicle of the 1444 sale', 'Trade-database totals for Brazil and the 1808 ban on U.S. slave imports', 'Jefferson\'s 1785 remark on Wheatley and John Rolfe\'s report from 1619', 'Self-government at Palmares and Akan day names such as Cudjoe carried to Jamaica'],
    correctIndex: 3,
    explanation: 'Palmares shows Africans organizing and defending their own society, and Akan day names show culture surviving across the Atlantic. The other pairs are European documents or numbers that describe what was done to Africans rather than what they did.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
  {
    id: 'aasod-ent-7b',
    question: 'For an essay on how people of African descent preserved, adapted or created cultures and communities between 1450 and 1800, which outside evidence best supports the "created communities" category?',
    options: ['Fort Mose, a free Black town', 'Akan day names kept by families in Jamaica', 'Wheatley\'s Christian poems against scorn', 'Afonso I\'s letters to the king of Portugal'],
    correctIndex: 0,
    explanation: 'Fort Mose, founded near St. Augustine in 1738, was a self-governing settlement of formerly enslaved people with its own militia. Day names show preservation, Wheatley\'s poems show adaptation of Christianity, and Afonso\'s letters show a king\'s diplomacy rather than a new community.',
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
    { partNumber: 2, partTitle: 'Africans in the Early Atlantic World, 1441–1619' },
    { partNumber: 3, partTitle: 'Mapping the Diaspora: Regions of Origin, Destinations and Numbers' },
    { partNumber: 4, partTitle: 'Retention and Creolization in Practice' },
    { partNumber: 5, partTitle: 'Maroons and the Revolutionary Diaspora' },
    { partNumber: 6, partTitle: 'Source Workshop: Voices of the Black Atlantic' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review' },
  ]
}
