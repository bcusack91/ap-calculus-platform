/**
 * Entrance Quiz — Freedom & Enslavement (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasfre-ent-1a',
    question: 'In 1850 a free Black sailmaker in Philadelphia owns property and serves as an officer of his church, but he cannot vote and could be seized by a slave catcher who claims he is a fugitive. His situation best illustrates which idea?',
    options: ['Northern emancipation gave Black residents full citizenship once slavery ended.', 'Legal freedom did not bring the rights of citizenship, so freedom stayed insecure.', 'Free Black northerners avoided public life and left institutions to white allies.', 'Federal law protected free Black people in the North from capture by claimants.'],
    correctIndex: 1,
    explanation: 'Free Black people could own property and build institutions, yet most could not vote and the Fugitive Slave Acts left them open to seizure, so freedom was a spectrum rather than a switch. Federal law worked against them, not for them.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasfre-ent-1b',
    question: 'New Jersey passed a gradual abolition law in 1804, yet the 1860 census still counted a small number of people there held as "apprentices for life." What best explains this?',
    options: ['New Jersey repealed its gradual abolition law in the 1830s', 'Congress forced New Jersey to keep slavery until the war', 'The 1804 law had freed every enslaved person in the state at once', 'Only later-born children went free, after service'],
    correctIndex: 3,
    explanation: 'Like Pennsylvania\'s 1780 act, New Jersey\'s law freed only children born after it took effect, and only after years of unpaid service, so people born earlier stayed bound for life. Northern emancipation was slow and partial.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Revolution and the Uneven Road to Northern Freedom (1770s–1830s)
  {
    id: 'aasfre-ent-2a',
    question: 'Free Black population of the United States: about 59,500 in 1790; 186,000 in 1810; 320,000 in 1830; 488,000 in 1860.\n\nWhich development best explains why the growth rate slowed after 1810?',
    options: ['Southern lawmakers made freeing people harder from 1806 on.', 'Most free Black families emigrated to Liberia in the 1820s.', 'Congress ended Northern gradual emancipation laws in 1810.', 'The Northwest Ordinance re-enslaved Black residents of Ohio.'],
    correctIndex: 0,
    explanation: 'The Revolutionary-era wave of manumissions in the Upper South slowed once Virginia and other states made freeing people harder, so the free population grew more slowly. Only about ten thousand people went to Liberia before 1860, and Congress never ended Northern emancipation.',
    partNumber: 2,
    partTitle: 'Revolution and the Uneven Road to Northern Freedom (1770s–1830s)',
  },
  {
    id: 'aasfre-ent-2b',
    question: 'About 3,000 Black Loyalists left New York with the British in 1783, and nearly 1,200 of them later sailed from Nova Scotia to found Freetown, Sierra Leone. Their choices best show that',
    options: ['the Continental Army refused to enlist any Black men, free or enslaved', 'Black Americans backed the British mainly because of loyalty to the king', 'many enslaved people sought freedom from whichever side would offer it', 'the Treaty of Paris required every Black resident to leave the new nation'],
    correctIndex: 2,
    explanation: 'Dunmore\'s and the Philipsburg proclamations promised freedom to people who left rebel owners, so tens of thousands fled to British lines for liberty, not loyalty. Several thousand Black men also served the Patriots, and no treaty expelled Black residents.',
    partNumber: 2,
    partTitle: 'Revolution and the Uneven Road to Northern Freedom (1770s–1830s)',
  },
  // Part 3: Building Free Communities: Churches, Societies, Schools and the Press
  {
    id: 'aasfre-ent-3a',
    question: 'Boston\'s African Meeting House (1806) served as a church, a school and a hall for antislavery meetings. Why did buildings like this matter so much to free Black communities?',
    options: ['State law required every Black school to meet inside a licensed church.', 'White abolitionists owned them and lent them to Black groups at no cost.', 'Black congregations controlled few other spaces, so these halls filled many roles.', 'They were built by the Massachusetts legislature as a reward for wartime service.'],
    correctIndex: 2,
    explanation: 'White-run schools, halls and churches often excluded or segregated Black people, so Black-owned churches hosted schools, societies, conventions and antislavery lectures. They were built and run by Black congregations, not by the state or by white owners.',
    partNumber: 3,
    partTitle: 'Building Free Communities: Churches, Societies, Schools and the Press',
  },
  {
    id: 'aasfre-ent-3b',
    question: 'Absalom Jones and Richard Allen\'s Narrative (1794) stresses that Black Philadelphians nursed the sick and buried the dead during the 1793 yellow fever epidemic, often without pay and at the cost of their lives. This emphasis is best explained by the authors\' purpose of',
    options: ['answering Mathew Carey\'s charges and claiming a civic place', 'persuading enslaved people in the South to escape to the North', 'asking Congress to fund a Black hospital in Philadelphia', 'urging free Black families to leave the city for Liberia'],
    correctIndex: 0,
    explanation: 'Carey had accused some Black nurses of overcharging and theft, so Jones and Allen documented their community\'s sacrifice for white readers. The pamphlet defended the community\'s reputation and condemned slavery; it did not seek emigration or federal money.',
    partNumber: 3,
    partTitle: 'Building Free Communities: Churches, Societies, Schools and the Press',
  },
  // Part 4: Connections & Interactions
  {
    id: 'aasfre-ent-4a',
    question: 'Why did the Fugitive Slave Act of 1793 endanger free Black people living in the North, not only those who had escaped?',
    options: ['It required every free Black northerner to register with federal marshals each year.', 'It barred free Black people from owning property in any state that bordered a slave state.', 'It let Southern states send militia north to search Black homes without any warrant.', 'A claimant could prove ownership before a local magistrate, with little protection for the accused.'],
    correctIndex: 3,
    explanation: 'The 1793 act let a claimant win a certificate from a local official on little proof, and the accused had few ways to show they were free, which left free Black northerners exposed to false claims and kidnapping. It created no registry, property ban or militia searches.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'aasfre-ent-4b',
    question: 'After the Denmark Vesey plot, South Carolina\'s Negro Seamen Act of 1822 jailed free Black sailors while their ships were in port. This law best reflects',
    options: ['a federal treaty with Britain on the rights of sailors in foreign ports', 'fear that free Black people would spread resistance', 'a plan to train free Black sailors for South Carolina\'s state navy', 'Northern pressure to protect free Black sailors from kidnapping'],
    correctIndex: 1,
    explanation: 'Slaveholders saw free Black people, especially sailors who traveled widely, as carriers of news and ideas that could inspire revolt, so they confined them on arrival. The law was a state measure that restricted, rather than protected, Black seamen.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Debating the Future: Colonization, Emigration and Citizenship (1816–1863)
  // source: David Walker, Appeal to the Coloured Citizens of the World, 1829 (3rd ed. 1830, Article IV); verbatim
  {
    id: 'aasfre-ent-5a',
    question: '"Let no man of us budge one step, and let slave-holders come to beat us from our country. America is more our country, than it is the whites—we have enriched it with our blood and tears. The greatest riches in all America have arisen from our blood and tears"\n— David Walker, Appeal (1829)\n\nWalker\'s argument in this excerpt most directly opposes',
    options: ['the movement to resettle free Black people in Africa', 'the gradual emancipation laws passed by Northern states', 'the founding of independent Black churches such as Bethel', 'the Fugitive Slave Act passed by Congress in 1793'],
    correctIndex: 0,
    explanation: 'Walker answered the American Colonization Society by insisting that Black Americans had earned the country with their labor and suffering and should refuse to leave. He supported Bishop Allen and Black churches, and the passage is not about Northern emancipation or the 1793 act.',
    partNumber: 5,
    partTitle: 'Debating the Future: Colonization, Emigration and Citizenship (1816–1863)',
  },
  {
    id: 'aasfre-ent-5b',
    question: 'Most free Black leaders distinguished colonization from emigration. Which example would they most likely have called emigration?',
    options: ['The American Colonization Society sending freed people to Liberia on condition that they leave', 'Virginia\'s 1806 law forcing newly freed people out of the state within a year', 'Lincoln\'s 1863 settlement on Île-à-Vache, organized by the federal government', 'Mary Ann Shadd urging African Americans to settle in Canada West by their own choice'],
    correctIndex: 3,
    explanation: 'Emigration meant a move Black people chose and led for a better life, as Shadd promoted in A Plea for Emigration (1852). Colonization and removal were plans run by white organizations or governments to send Black people away.',
    partNumber: 5,
    partTitle: 'Debating the Future: Colonization, Emigration and Citizenship (1816–1863)',
  },
  // Part 6: Source Workshop: Free Black Voices in Print
  // source: Dred Scott v. Sandford, 60 U.S. 393 (1857), Curtis, J., dissenting; verbatim
  {
    id: 'aasfre-ent-6a',
    question: '"At the time of the ratification of the Articles of Confederation, all free native-born inhabitants of the States of New Hampshire, Massachusetts, New York, New Jersey, and North Carolina, though descended from African slaves, were not only citizens of those States, but such of them as had the other necessary qualifications possessed the franchise of electors, on equal terms with other citizens."\n— Justice Benjamin Curtis, dissent in Dred Scott v. Sandford (1857)\n\nCurtis offers this evidence chiefly to undercut the majority\'s holding that',
    options: ['Congress had no power to ban slavery in the federal territories', 'Congress could not bar citizens from taking slaves into the territories', 'Black Americans could not be U.S. citizens', 'the Missouri Compromise line was unconstitutional from the start'],
    correctIndex: 2,
    explanation: 'Taney held that people of African descent were not and could not be citizens; Curtis replied that free Black men had been citizens and voters in several states when the Constitution was adopted. The territorial holdings were separate parts of the ruling.',
    partNumber: 6,
    partTitle: 'Source Workshop: Free Black Voices in Print',
  },
  {
    id: 'aasfre-ent-6b',
    question: 'The Appeal of Forty Thousand Citizens (1838) listed the taxes Black Pennsylvanians paid and the property they owned. This emphasis was aimed mainly at',
    options: ['enslaved readers in Maryland who might escape to Pennsylvania', 'white voters, by presenting the excluded men as taxpayers', 'British abolitionists who funded the American antislavery press', 'Congress, which was then debating a national suffrage law'],
    correctIndex: 1,
    explanation: 'Written to reverse the new constitution\'s restriction of the vote to white men, the Appeal addressed Pennsylvania voters and presented Black men as orderly, property-owning citizens who had voted for decades. Congress was considering no suffrage law.',
    partNumber: 6,
    partTitle: 'Source Workshop: Free Black Voices in Print',
  },
  // Part 7: Synthesis and AP Review
  {
    id: 'aasfre-ent-7a',
    question: 'A student argues that free Black Americans won their gains mostly through state politics and community action before 1860. Which evidence best supports this claim?',
    options: ['Taney\'s 1857 opinion denying that Black Americans could be citizens', 'Pennsylvania\'s 1838 constitution limiting the vote to white men', 'Ohio\'s Black Laws requiring a bond from Black settlers in 1807', 'Massachusetts\'s 1855 ban on segregated schools after years of Black organizing'],
    correctIndex: 3,
    explanation: 'Black Bostonians lost Roberts v. City of Boston in 1850 but kept campaigning until the legislature banned school segregation in 1855. The other three are losses imposed by courts or state laws.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
  {
    id: 'aasfre-ent-7b',
    question: 'Which development provides the best context for both Black institution-building and white backlash between 1790 and 1840?',
    options: ['The rapid growth of the free Black population', 'The Supreme Court\'s ruling in the Dred Scott case', 'The Union army\'s enlistment of Black soldiers in 1863', 'The founding of the Republican Party in the 1850s'],
    correctIndex: 0,
    explanation: 'The free Black population grew about fivefold from 1790 to 1830, which made churches, societies and newspapers possible and also prompted removal laws, Black Laws and disfranchisement. The other developments came after 1840.',
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
    { partNumber: 2, partTitle: 'Revolution and the Uneven Road to Northern Freedom (1770s–1830s)' },
    { partNumber: 3, partTitle: 'Building Free Communities: Churches, Societies, Schools and the Press' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Debating the Future: Colonization, Emigration and Citizenship (1816–1863)' },
    { partNumber: 6, partTitle: 'Source Workshop: Free Black Voices in Print' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review' },
  ]
}
