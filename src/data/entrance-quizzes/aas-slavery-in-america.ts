/**
 * Entrance Quiz — Slavery in America (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  // source: Virginia Act XII, December 1662 (Hening, Statutes at Large, vol. 2; short phrase in explanation); verbatim
  {
    id: 'aassia-ent-1a',
    question: 'Under Virginia\'s law of 1662, a child born to an enslaved African woman and a free English father would be',
    options: ['free, since English law traced a child\'s status through the father', 'free as soon as the child was baptized in the Church of England', 'a slave for life, like the mother', 'bound as an indentured servant until the age of twenty-one'],
    correctIndex: 2,
    explanation: 'The 1662 law declared children "bond or free only according to the condition of the mother," reversing the English rule and making slavery hereditary. A 1667 law then said baptism did not change a person\'s bondage.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aassia-ent-1b',
    question: 'Between 1790 and 1860, about one million enslaved people were forced to move from Maryland and Virginia to Alabama, Mississippi and Louisiana. Which pair of developments best explains this movement?',
    options: ['The westward spread of cotton and the federal ban on importing captives from Africa after 1808', 'The Northwest Ordinance and the end of slavery in New York in 1827', 'The rise of sugar in Brazil and the British ban on the Atlantic trade', 'The Missouri Compromise and Virginia\'s gradual emancipation act of 1806'],
    correctIndex: 0,
    explanation: 'Cotton planters on new Deep South lands needed workers, and with African imports banned they bought people from the Upper South through the domestic slave trade. Virginia never passed a gradual emancipation act.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Making Slavery Hereditary and Racial: Colonial Law, 1619–1740
  {
    id: 'aassia-ent-2a',
    question: 'A student claims that Bacon\'s Rebellion (1676) caused Virginia to make slavery hereditary and racial. Which evidence most weakens this claim?',
    options: ['Bacon\'s followers included servants and some enslaved Africans, armed together.', 'The Royal African Company expanded English slaving after its charter in 1672.', 'Edmund Morgan argued that elite fear after 1676 pushed planters toward slavery.', 'The colony\'s laws on a mother\'s status and on baptism dated from 1662 and 1667.'],
    correctIndex: 3,
    explanation: 'The laws that made slavery hereditary and closed the baptism route to freedom were passed before the rebellion, so it cannot have caused them, though it helped shape the later laws of 1691 and 1705. Morgan\'s argument and the mixed rebel army support the claim rather than weaken it.',
    partNumber: 2,
    partTitle: 'Making Slavery Hereditary and Racial: Colonial Law, 1619–1740',
  },
  {
    id: 'aassia-ent-2b',
    question: 'Virginia built its slave law one statute at a time over several decades, but South Carolina adopted a full slave code in 1696, soon after its founding. What best explains the difference?',
    options: ['South Carolina\'s founders were Quakers who opposed gradual reforms of any kind.', 'Many of its early settlers came from Barbados and modeled its law on that code.', 'The Crown ordered every new colony after 1670 to copy Virginia\'s finished code.', 'Its rice planters hired so few servants that no law was needed for them at all.'],
    correctIndex: 1,
    explanation: 'Carolina drew many settlers from Barbados, England\'s richest sugar colony, and its 1696 code was modeled on the Barbados code, so it began with a complete slave regime. The other options misstate who founded the colony and what the Crown required.',
    partNumber: 2,
    partTitle: 'Making Slavery Hereditary and Racial: Colonial Law, 1619–1740',
  },
  // Part 3: Labor and Regions: Tobacco, Rice, Sugar and Cotton
  {
    id: 'aassia-ent-3a',
    question: 'On a Georgia rice plantation in 1800, an enslaved man finishes hoeing his assigned quarter-acre by mid-afternoon and spends the rest of the day raising hogs to sell in Savannah. This arrangement is best described as',
    options: ['the task system of the Lowcountry rice districts', 'gang labor timed from sunup to sundown under an overseer', 'hiring out, with the wages paid to the owner each January', 'sharecropping, with the crop divided between owner and worker'],
    correctIndex: 0,
    explanation: 'Under the Lowcountry task system, each worker received a measured daily assignment and could use the time after it for gardens, livestock and trade. Gang labor measured work by time, and sharecropping came only after emancipation.',
    partNumber: 3,
    partTitle: 'Labor and Regions: Tobacco, Rice, Sugar and Cotton',
  },
  {
    id: 'aassia-ent-3b',
    question: 'From 1790 to 1830, the number of enslaved people in the Northern states fell steadily, while the number in the United States as a whole nearly tripled. Which pair of developments best explains both trends?',
    options: ['Revolutionary ideals ending slavery in all regions', 'The Missouri Compromise and the 1808 import ban', 'Gradual emancipation laws and cotton\'s spread west', 'New England mills buying enslaved workers for textiles'],
    correctIndex: 2,
    explanation: 'Northern states ended slavery through gradual laws and court rulings, while the cotton gin, new Deep South lands and natural increase made slavery grow in the South. The 1808 ban limited imports but did not stop that growth.',
    partNumber: 3,
    partTitle: 'Labor and Regions: Tobacco, Rice, Sugar and Cotton',
  },
  // Part 4: Numbers and the Cotton Economy: Reading Census Data
  {
    id: 'aassia-ent-4a',
    question: 'U.S. census, enslaved people (rounded): 1790, about 698,000; 1810, about 1,191,000; 1830, about 2,009,000.\n\nWhich statement do these figures support?',
    options: ['The enslaved population fell after the 1808 import ban.', 'The enslaved population nearly tripled from 1790 to 1830.', 'The enslaved population grew by the same number each year.', 'The enslaved population doubled from 1810 to 1830.'],
    correctIndex: 1,
    explanation: '2,009,000 is about 2.9 times 698,000. The population rose in every census, grew by about 490,000 from 1790 to 1810 and about 820,000 from 1810 to 1830, and rose by about 70 percent rather than doubling after 1810.',
    partNumber: 4,
    partTitle: 'Numbers and the Cotton Economy: Reading Census Data',
  },
  {
    id: 'aassia-ent-4b',
    question: 'Brazil received close to 5 million Africans but counted about 1.5 million enslaved people in 1872; the United States received about 388,000 but held nearly 4 million in 1860. A student concludes that U.S. slavery must have been gentler. Which response best corrects this conclusion?',
    options: ['Most of the U.S. growth came from illegal imports that the census missed.', 'Brazil\'s census counted only enslaved people living in its largest cities.', 'U.S. planters freed most children at birth, so families grew more quickly.', 'Natural increase came from less deadly crops and enslavers\' profit from births, not kindness.'],
    correctIndex: 3,
    explanation: 'Natural increase reflected tobacco and cotton being less lethal than sugar, more even sex ratios over generations, and enslavers\' financial stake in every birth after 1808. The illegal trade was far too small to explain the growth, and no planters freed children at birth.',
    partNumber: 4,
    partTitle: 'Numbers and the Cotton Economy: Reading Census Data',
  },
  // Part 5: Family, Faith and Community under Slavery
  {
    id: 'aassia-ent-5a',
    question: 'Historian Herbert Gutman found that plantation birth records often show enslaved parents naming children after fathers, grandparents and relatives who had been sold away. This evidence best supports which claim?',
    options: ['Enslavers chose the names of enslaved children to record their ownership.', 'Enslaved people stopped forming families once sales became common.', 'Enslaved families kept kinship and memory alive despite separation.', 'Most enslaved families lived together on one farm for generations.'],
    correctIndex: 2,
    explanation: 'Naming children for kin who had been sold kept family ties and memory alive across separation. The records show parents, not enslavers, choosing names, and the sales themselves contradict the idea of unbroken families.',
    partNumber: 5,
    partTitle: 'Family, Faith and Community under Slavery',
  },
  {
    id: 'aassia-ent-5b',
    question: 'Enslaved people in Virginia met secretly in the woods at night, sometimes turning an iron pot upside down to muffle the sound, and sang about Moses leading Israel out of Egypt. These practices best show that',
    options: ['they reshaped Christianity into a faith of deliverance worshiped beyond their enslavers\' control', 'they kept only African religions and rejected Christianity throughout the South', 'their enslavers encouraged night meetings to build loyalty and obedience', 'state laws required enslaved people to worship apart from white churches'],
    correctIndex: 0,
    explanation: 'Hush harbors and spirituals about the Exodus show enslaved Christians building their own "invisible institution," a faith of freedom unlike the obedience preached by enslavers. Enslavers tried to suppress such meetings rather than encourage them.',
    partNumber: 5,
    partTitle: 'Family, Faith and Community under Slavery',
  },
  // Part 6: Source Workshop: Narratives and the Constitution
  // source: Frederick Douglass, Narrative of the Life of Frederick Douglass, an American Slave, 1845 (ch. 2); verbatim
  {
    id: 'aassia-ent-6a',
    question: '"I have often been utterly astonished, since I came to the north, to find persons who could speak of the singing, among slaves, as evidence of their contentment and happiness. It is impossible to conceive of a greater mistake. Slaves sing most when they are most unhappy."\n— Frederick Douglass, Narrative (1845)\n\nDouglass\'s purpose in this passage is best described as',
    options: ['praising the musical talent of enslaved people to win admirers in Britain', 'urging enslaved readers in Maryland to give up singing as a form of protest', 'explaining that enslavers banned all music on the plantations he knew', 'rebutting a proslavery belief that bondage left the enslaved satisfied'],
    correctIndex: 3,
    explanation: 'Writing for Northern readers, Douglass corrects the comforting idea that enslaved people\'s songs proved they were content, insisting the songs expressed sorrow. He neither discourages singing nor claims it was banned.',
    partNumber: 6,
    partTitle: 'Source Workshop: Narratives and the Constitution',
  },
  // source: U.S. Constitution, Article IV, Section 2, Clause 3 (short phrases); verbatim
  {
    id: 'aassia-ent-6b',
    question: 'William Lloyd Garrison called the Constitution a proslavery document. Which provision would he most likely have cited as evidence?',
    options: ['Article I\'s grant to Congress of the power to regulate commerce among the states', 'Article IV\'s fugitive clause', 'The First Amendment\'s protection of freedom of speech and of the press', 'The Preamble\'s promise to secure the blessings of liberty to the people'],
    correctIndex: 1,
    explanation: 'The fugitive clause required that a "Person held to Service or Labour" who escaped be "delivered up," binding free states to return people to slavery. The commerce power, the First Amendment and the Preamble did not protect slavery on their face.',
    partNumber: 6,
    partTitle: 'Source Workshop: Narratives and the Constitution',
  },
  // Part 7: Synthesis and AP Review
  {
    id: 'aassia-ent-7a',
    question: 'A historian argues that slavery in Virginia "began" in 1662 rather than in 1619. This choice of turning point claims that',
    options: ['law defined the institution', 'the first Africans in Virginia arrived only after 1660', 'English servants outnumbered Africans until well after 1700', 'the Atlantic trade to Virginia had ended by the year 1662'],
    correctIndex: 0,
    explanation: 'Africans arrived in 1619, but their status stayed unsettled until the 1662 law made bondage hereditary through the mother, so choosing 1662 treats law as what created slavery. The other options misstate the chronology.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
  {
    id: 'aassia-ent-7b',
    question: 'For an essay on the extent to which law shaped enslaved people\'s lives, which outside evidence best shows that resistance in turn shaped the law?',
    options: ['Eli Whitney\'s cotton gin of 1793, which made short-staple cotton profitable', 'The founding of Franklin & Armfield, the slave-trading firm, in 1828', 'South Carolina\'s Negro Act of 1740, passed in direct response to the Stono Rebellion', 'The 1850 census slave schedules, which listed people only by age and sex'],
    correctIndex: 2,
    explanation: 'After the Stono Rebellion of 1739, South Carolina barred enslaved people from gathering, traveling without a ticket and learning to write, so resistance produced harsher law. The gin, the trading firm and the census do not show that link.',
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
    { partNumber: 2, partTitle: 'Making Slavery Hereditary and Racial: Colonial Law, 1619–1740' },
    { partNumber: 3, partTitle: 'Labor and Regions: Tobacco, Rice, Sugar and Cotton' },
    { partNumber: 4, partTitle: 'Numbers and the Cotton Economy: Reading Census Data' },
    { partNumber: 5, partTitle: 'Family, Faith and Community under Slavery' },
    { partNumber: 6, partTitle: 'Source Workshop: Narratives and the Constitution' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review' },
  ]
}
