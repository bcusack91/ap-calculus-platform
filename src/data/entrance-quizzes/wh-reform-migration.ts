/**
 * Entrance Quiz — Reform, Migration & Global Movements (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whrm-ent-1a',
    question: 'Russia\'s emancipation of the serfs in 1861 and Brazil\'s abolition of slavery in 1888 are best compared as',
    options: ['revolutions in which the formerly bound seized control of the state', 'reforms that paid the freed for their years of unpaid labor', 'changes imposed on each country by occupying foreign armies', 'legal reforms that ended bondage but left many freed people poor'],
    correctIndex: 3,
    explanation: 'Russian peasants owed redemption payments for their land, and freed Brazilians received no land or compensation, so poverty persisted in both cases. Both changes came from above, neither paid the freed, and neither was imposed by foreign occupation.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whrm-ent-1b',
    question: 'The United States\' Chinese Exclusion Act of 1882 is best understood as an example of',
    options: ['a push factor that drove people out of southern China', 'nativist hostility in a society that received migrants', 'remittances sent home by Chinese workers to their families', 'a treaty that required China to supply contract laborers'],
    correctIndex: 1,
    explanation: 'The law barred Chinese laborers in response to anti-immigrant pressure, a classic case of nativism in a receiving society. It acted on the receiving end rather than pushing people from China, and it was neither a remittance nor a labor treaty.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  {
    id: 'whrm-ent-2a',
    question: 'Approximate European emigration: 1815–1850, 5 million; 1850–1880, 10 million; 1880–1900, 20 million; 1900–1914, 20 million.\n\nWhich development most directly helps explain the sharp rise after 1880?',
    options: ['The Irish Potato Famine of 1845 to 1852', 'Cheaper, faster crossings by steamship liner', 'U.S. quota laws limiting southern Europeans', 'The Chinese Exclusion Act passed in 1882'],
    correctIndex: 1,
    explanation: 'By the 1870s and 1880s steamships cut the Atlantic crossing to under two weeks at fares poor villagers could afford. The famine came decades earlier, the quota laws of the 1920s reduced migration, and the Exclusion Act concerned Chinese, not European, migrants.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whrm-ent-2b',
    question: 'After abolishing slavery in 1888, Brazil paid the passage of hundreds of thousands of Italian immigrants. This policy best illustrates',
    options: ['a government recruiting migrants to replace enslaved labor', 'a push factor caused by Brazil\'s own industrial revolution', 'nativist laws designed to keep Europeans out of Brazil', 'a plan to return freed Brazilians to Africa'],
    correctIndex: 0,
    explanation: 'Coffee planters needed workers after abolition, so the state subsidized European immigration, a pull factor created by policy. It drew people in rather than pushing them out, welcomed rather than excluded Europeans, and did not involve resettling freed people in Africa.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whrm-ent-3a',
    question: 'Which comparison of Indian migration to Trinidad and Irish migration to the United States in the mid-1800s is most accurate?',
    options: ['Indians were bound by labor contracts, while most Irish migrants moved freely', 'Irish migrants were bound by labor contracts, while most Indians moved freely', 'Both groups were enslaved on arrival and sold at auction to plantation owners', 'Both groups were recruited mainly by governments to settle frontier farmland'],
    correctIndex: 0,
    explanation: 'Indian workers went to Trinidad under indenture contracts that tied them to plantations for years, while famine-driven Irish migrants generally paid their own way and could seek any work. The reversed pairing is wrong, neither group was enslaved, and neither was a frontier settlement program.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whrm-ent-3b',
    question: 'Which factor best explains why tens of thousands of Chinese laborers went to California in the 1850s and 1860s?',
    options: ['Free farmland offered to Chinese families under the Homestead Act', 'A U.S. treaty that required China to send contract workers', 'The promise of citizenship written into the Exclusion Act', 'Gold mining and railroad jobs, amid turmoil at home'],
    correctIndex: 3,
    explanation: 'The gold rush and the building of the Central Pacific Railroad pulled workers from Guangdong, while poverty and the Taiping Rebellion pushed them. The Homestead Act did not draw them, no treaty required labor, and the Exclusion Act barred rather than welcomed them.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whrm-ent-4a',
    question: 'Under Britain\'s 1833 abolition act, most formerly enslaved people in the Caribbean had to keep working for their former owners for several years as "apprentices." This arrangement best illustrates',
    options: ['legal freedom arriving without full economic freedom', 'the immediate grant of land to every freed family', 'Britain\'s decision to reopen the Atlantic slave trade', 'a reform demanded by planters to raise wages for workers'],
    correctIndex: 0,
    explanation: 'Apprenticeship kept freed people tied to plantation work on their former owners\' terms, so legal emancipation did not bring economic independence. No land was granted, the trade stayed banned, and planters sought the arrangement to keep cheap labor, not to raise wages.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whrm-ent-4b',
    question: 'Which factor best explains why Brazil was the last country in the Americas to abolish slavery?',
    options: ['Brazil had no abolitionist movement until the year 1888', 'Britain pressed Brazil to keep slavery to protect its trade', 'Planters who relied on enslaved labor held great political power', 'Brazil\'s enslaved population was too small to draw attention'],
    correctIndex: 2,
    explanation: 'Coffee and sugar planters dominated Brazilian politics and delayed abolition through gradual laws. Brazil had a large abolitionist movement and one of the largest enslaved populations, and Britain pressed Brazil to end the trade, not keep it.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whrm-ent-5a',
    question: 'Which argument for women\'s suffrage drew on separate-spheres ideas rather than on natural rights?',
    options: ['Women are persons with the same rights as men', 'Women who pay taxes deserve to be represented', 'Women\'s moral influence would purify corrupt politics', 'Women workers need votes to shape labor laws'],
    correctIndex: 2,
    explanation: 'The claim that women\'s supposed moral nature would improve politics accepted the idea of distinct female virtues, the root of separate spheres. Equal rights, no taxation without representation, and workers\' interests are arguments from rights and interests.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // source: Declaration of Sentiments, Seneca Falls Convention, 1848; verbatim
  {
    id: 'whrm-ent-5b',
    question: '"We hold these truths to be self-evident: that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights..."\n— Declaration of Sentiments, Seneca Falls, New York, 1848\n\nWhich development most directly contributed to the movement that produced this declaration?',
    options: ['The victory of British suffragettes after their militant campaign', 'Women\'s work in abolitionism exposing their own exclusion', 'New Zealand\'s grant of the vote to women in national elections', 'Industrial unions winning the ballot for women factory workers'],
    correctIndex: 1,
    explanation: 'Organizers such as Elizabeth Cady Stanton and Lucretia Mott had been sidelined in the antislavery movement, which sharpened their sense of women\'s exclusion. British women won the vote in 1918 and New Zealand women in 1893, long after 1848, and unions did not win women the vote.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'whrm-ent-6a',
    question: 'Henry Sylvester Williams of Trinidad, W.E.B. Du Bois of the United States, and Edward Blyden of Liberia all helped shape early Pan-Africanism. This fact best supports which claim?',
    options: ['The movement began among African chiefs who opposed the Berlin Conference', 'The movement drew its leaders from across the diaspora, not just Africa', 'The movement was organized by colonial governments to train administrators', 'The movement was confined to the United States until after World War II'],
    correctIndex: 1,
    explanation: 'Leaders from the Caribbean, North America, and West Africa show that Pan-Africanism linked people of African descent across the Atlantic. It was not a chiefs\' movement or a colonial project, and its 1900 conference met in London.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whrm-ent-6b',
    question: 'The Japanese slogan "Asia for Asians" in the early 1900s is best described as',
    options: ['a pledge to grant independence to Korea and Taiwan', 'a call for Asian migrants to settle in the Americas', 'a plan to adopt Chinese law and government across Japan', 'anti-Western rhetoric later used to justify Japan\'s own empire'],
    correctIndex: 3,
    explanation: 'Pan-Asian language cast Japan as Asia\'s defender against the West while Japan was colonizing Taiwan and Korea. Japan granted neither independence, and the slogan had nothing to do with emigration or adopting Chinese institutions.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whrm-ent-7a',
    question: 'Which evidence best supports the claim that the end of slavery reshaped global migration?',
    options: ['Irish families fled the Potato Famine for American cities', 'German liberals emigrated after the failed revolution of 1848', 'Indian indentured workers were sent to Trinidad and Mauritius', 'Rural Britons moved into the factory towns of Lancashire'],
    correctIndex: 2,
    explanation: 'Planters in former slave colonies recruited Indian contract workers to replace enslaved labor, directly linking abolition to a new migration stream. The other migrations were driven by famine, politics, and industrialization.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whrm-ent-7b',
    question: 'In an essay on Irish emigration after 1845, which of the following is best classified as a pull factor?',
    options: ['The failure of the potato crop across Ireland', 'Evictions of tenants by landlords in rural Ireland', 'Rural poverty that lasted after the famine ended', 'Jobs and cheap land in North America'],
    correctIndex: 3,
    explanation: 'Opportunities in the destination draw migrants, which makes jobs and land in North America a pull factor. Crop failure, evictions, and poverty in Ireland pushed people to leave.',
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
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
