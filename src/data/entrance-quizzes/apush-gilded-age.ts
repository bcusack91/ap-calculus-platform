/**
 * Entrance Quiz — The Gilded Age (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushgil-ent-1a',
    question: 'Gustavus Swift\'s meatpacking company owned its own refrigerated rail cars, a chain of icehouses along the tracks, and wholesale branch houses in Eastern cities. This strategy is best described as',
    options: ['vertical integration', 'horizontal integration', 'a railroad pool', 'a holding company'],
    correctIndex: 0,
    explanation: 'Swift controlled successive stages of getting beef from the slaughterhouse to the customer, which is vertical integration. Horizontal integration would mean buying rival packers, a pool is a rate-fixing agreement, and a holding company owns stock in other firms.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushgil-ent-1b',
    question: 'Urban political machines such as Tammany Hall kept the loyalty of many immigrant voters mainly because the machines',
    options: ['pushed Congress for strict new limits on immigration', 'enforced temperance laws in immigrant neighborhoods', 'backed civil service examinations for city jobs', 'offered jobs, aid and favors in return for votes'],
    correctIndex: 3,
    explanation: 'Machines traded practical help (jobs, coal, help with the law) for political support. They did not push immigration limits or enforce temperance, and competitive exams threatened the patronage they depended on.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: How Industrial Capitalism Was Built (1865–1898)
  {
    id: 'apushgil-ent-2a',
    question: 'Why did the falling prices of the late nineteenth century hurt indebted farmers in particular?',
    options: ['They repaid loans with dollars worth more than the dollars they borrowed', 'They were paid in silver coins that banks refused to take as deposits', 'Falling prices raised the interest rates that federal law allowed', 'Cheaper machinery made their old equipment worthless overnight'],
    correctIndex: 0,
    explanation: 'Under deflation each dollar bought more over time, so a fixed debt took more bushels of wheat or bales of cotton to repay. Interest rates were not set by federal law, and the other choices do not describe how deflation worked.',
    partNumber: 2,
    partTitle: 'How Industrial Capitalism Was Built (1865–1898)',
  },
  {
    id: 'apushgil-ent-2b',
    question: 'Late nineteenth-century businesses moved from pools to trusts and then to holding companies. Which of the following best explains the move to holding companies?',
    options: ['A New Jersey law let one corporation own controlling stock in others', 'The Interstate Commerce Act required all oil and steel firms to merge', 'Congress outlawed vertical integration in the Sherman Act of 1890', 'Railroad rate pools proved so stable that firms wanted to copy them'],
    correctIndex: 0,
    explanation: 'Pools fell apart because members cheated, and trusts came under attack from state courts and the Sherman Act, so firms used New Jersey\'s 1889 law to hold stock in other companies directly. The other choices misstate what those laws did.',
    partNumber: 2,
    partTitle: 'How Industrial Capitalism Was Built (1865–1898)',
  },
  // Part 3: Voices of the Gilded Age: Reading the Sources
  {
    id: 'apushgil-ent-3a',
    question: 'William Jennings Bryan lost the election of 1896 even though he carried the South and most of the West. Which group\'s votes did he most clearly fail to win?',
    options: ['Silver miners in the states of the Mountain West', 'Industrial workers who feared higher prices', 'Indebted cotton farmers in the former Confederate states', 'Wheat farmers on the Great Plains squeezed by railroad rates'],
    correctIndex: 1,
    explanation: 'McKinley swept the industrial Northeast and Midwest, where many wage earners believed free silver would raise prices faster than wages. Miners, Southern cotton farmers and Plains wheat farmers were Bryan\'s strongest supporters.',
    partNumber: 3,
    partTitle: 'Voices of the Gilded Age: Reading the Sources',
  },
  // source: original summary (describes Ida B. Wells, Southern Horrors, 1892)
  {
    id: 'apushgil-ent-3b',
    question: 'The following summary, written for this question, describes an 1892 pamphlet: After a mob destroyed her Memphis newspaper office, a Black journalist gathered newspaper reports of lynchings and showed that only a minority of the victims had even been charged with the crime that mobs most often claimed to be avenging.\n\nThe pamphlet\'s main purpose was most likely to',
    options: ['persuade Southern legislatures to adopt segregation laws', 'recruit Black farmers into the Colored Farmers\' Alliance', 'expose the mobs\' false excuse to Northern readers', 'raise funds for vocational training at Tuskegee Institute'],
    correctIndex: 2,
    explanation: 'Ida B. Wells used the mobs\' own newspapers to expose the claim that lynching punished crime and took the evidence to Northern and British audiences. She opposed segregation, and vocational schooling was Booker T. Washington\'s program.',
    partNumber: 3,
    partTitle: 'Voices of the Gilded Age: Reading the Sources',
  },
  // Part 4: The West and the New South Compared
  {
    id: 'apushgil-ent-4a',
    question: 'The shift in federal Indian policy from military campaigns in the 1870s to the Dawes Act of 1887 is best described as a change in',
    options: ['goals, from assimilating Native people to removing them westward', 'authority, from Congress to the governments of the Western states', 'method, with taking land and ending tribal sovereignty still the aim', 'region, from the Southeast to the Pacific Northwest coast'],
    correctIndex: 2,
    explanation: 'War forced nations onto reservations, and allotment then broke reservations into private plots and sold the "surplus"; both opened land and weakened tribal sovereignty. The goals answer reverses the direction of change, and policy stayed federal.',
    partNumber: 4,
    partTitle: 'The West and the New South Compared',
  },
  {
    id: 'apushgil-ent-4b',
    question: 'Which development best supports describing the post-Reconstruction South as a "colonial economy" dependent on the Northeast?',
    options: ['Birmingham built a major iron and steel industry of its own', 'Several thousand Black Southerners moved to Kansas in 1879', 'Southern states adopted poll taxes and literacy tests after 1890', 'Outside investors owned most Southern mills and rail lines'],
    correctIndex: 3,
    explanation: 'Outside ownership meant that profits and decisions flowed north while the South sold raw materials at prices set elsewhere. Birmingham steel cuts against the colonial label, and the Exoduster migration and disfranchisement are not economic dependence.',
    partNumber: 4,
    partTitle: 'The West and the New South Compared',
  },
  // Part 5: Politics, Reform and How Historians Read the Era
  // source: People's Party (Omaha) Platform, July 4, 1892; verbatim
  {
    id: 'apushgil-ent-5a',
    question: '"We believe that the power of government—in other words, of the people—should be expanded (as in the case of the postal service) as rapidly and as far as the good sense of an intelligent people and the teachings of experience shall justify, to the end that oppression, injustice and poverty shall eventually cease in the land."\n— People\'s Party Platform, Omaha, 1892\n\nThe excerpt most directly challenged which idea?',
    options: ['The free-silver demand to coin more money', 'The laissez-faire idea of a hands-off economy', 'The Granger call for state limits on railroad rates', 'The reform proposal for a graduated income tax'],
    correctIndex: 1,
    explanation: 'Calling for government power to expand until poverty ended rejected laissez-faire. Free silver, railroad regulation and an income tax were all Populist demands, so the platform supported rather than challenged them.',
    partNumber: 5,
    partTitle: 'Politics, Reform and How Historians Read the Era',
  },
  {
    id: 'apushgil-ent-5b',
    question: 'Which of the following best explains why so much Gilded Age reform came from organizations outside the two major parties?',
    options: ['Most reformers were barred by law from joining a national party', 'Turnout was so low that party leaders paid no attention to elections', 'The two parties had merged into a single national coalition by 1880', 'Close, divided elections made both parties dodge economic issues'],
    correctIndex: 3,
    explanation: 'With elections decided by tiny margins and power usually divided, Republicans and Democrats competed on loyalty and patronage rather than farmers\' and workers\' grievances, so reformers built the Grange, the Alliances and the Populists. Turnout was very high, and the parties stayed separate.',
    partNumber: 5,
    partTitle: 'Politics, Reform and How Historians Read the Era',
  },
  // Part 6: Problem-Solving Workshop
  // source: Andrew Carnegie, "Wealth," North American Review, June 1889 (opening sentence); verbatim
  {
    id: 'apushgil-ent-6a',
    question: '"The problem of our age is the proper administration of wealth, so that the ties of brotherhood may still bind together the rich and poor in harmonious relationship."\n— Andrew Carnegie, "Wealth," 1889\n\nWhich group would most likely have rejected the assumption in Carnegie\'s essay that great fortunes were legitimate?',
    options: ['Followers of the social Darwinist William Graham Sumner', 'Populists who said riches came from stolen toil', 'Trustees of the public libraries that Carnegie money built', 'Investors who bought shares in the new U.S. Steel company'],
    correctIndex: 1,
    explanation: 'Carnegie assumed that the fortune itself was earned and asked only how it should be spent; the Omaha Platform said fortunes were built on stolen labor. Sumner defended wealth even more strongly, and library trustees and investors had no reason to reject it.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // source: Sherman Antitrust Act, Section 1, 1890 (26 Stat. 209); verbatim
  {
    id: 'apushgil-ent-6b',
    question: '"Every contract, combination in the form of trust or otherwise, or conspiracy, in restraint of trade or commerce among the several States, or with foreign nations, is hereby declared to be illegal."\n— Sherman Antitrust Act, 1890\n\nWhich of the following most directly led Congress to pass this law?',
    options: ['Public anger at giant firms that dominated whole industries', 'A Supreme Court ruling that ordered Congress to break up the railroads', 'Union demands for a federal law that would forbid all strikes', 'Requests from farm groups to legalize railroad rate pools'],
    correctIndex: 0,
    explanation: 'Trusts such as Standard Oil, which controlled most oil refining, provoked demands from farmers, small producers and reformers for federal action. No court ordered Congress to act, unions did not seek a ban on strikes, and farmers wanted pools banned, not legalized.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushgil-ent-7a',
    question: 'Which of the following best explains why the American Federation of Labor survived the 1890s while the Knights of Labor collapsed?',
    options: ['A federal law guaranteed the AFL\'s right to bargain collectively', 'The AFL welcomed unskilled workers whom the Knights had turned away', 'The AFL built on hard-to-replace skilled workers and bread-and-butter goals', 'The AFL renounced strikes and won the favor of the large employers'],
    correctIndex: 2,
    explanation: 'Skilled craft workers had bargaining power that unskilled workers lacked, and the AFL\'s narrow "bread and butter" goals avoided the broad reform agenda that sank the Knights after Haymarket. Collective-bargaining rights came only in 1935, the Knights were the inclusive union, and the AFL did strike.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushgil-ent-7b',
    question: 'Which development best shows that Gilded Age reform ideas outlasted the movements that first proposed them?',
    options: ['Bryan\'s defeat in 1896 ended the campaign for free silver', 'Amendments in 1913 adopted the income tax and direct election of senators', 'The Knights of Labor collapsed after the Haymarket bombing of 1886', 'Mississippi\'s 1890 constitution disfranchised most Black voters'],
    correctIndex: 1,
    explanation: 'The Sixteenth and Seventeenth Amendments enacted two Omaha Platform demands two decades after the Populists faded. The other choices show reform movements ending or being reversed.',
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
    { partNumber: 2, partTitle: 'How Industrial Capitalism Was Built (1865–1898)' },
    { partNumber: 3, partTitle: 'Voices of the Gilded Age: Reading the Sources' },
    { partNumber: 4, partTitle: 'The West and the New South Compared' },
    { partNumber: 5, partTitle: 'Politics, Reform and How Historians Read the Era' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
