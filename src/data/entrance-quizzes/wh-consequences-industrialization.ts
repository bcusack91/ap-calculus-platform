/**
 * Entrance Quiz — Consequences of Industrialization (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    // source: Karl Marx and Friedrich Engels, The Communist Manifesto, 1848 (Samuel Moore English translation, 1888); verbatim
    id: 'whco-ent-1a',
    question: '"The history of all hitherto existing society is the history of class struggles." (Marx and Engels, The Communist Manifesto, 1848) Which response to industrialization does this view most directly support?',
    options: ['Factory owners giving to charity to keep their workers loyal', 'Conservatives defending the monarchy and the established church', 'Workers rising up to overthrow the owners of the factories', 'Liberals calling for free markets and strictly limited government'],
    correctIndex: 2,
    explanation: 'Marx and Engels saw history as conflict between owners and workers and expected the proletariat to overthrow the bourgeoisie. Charity, tradition and free markets are the responses of other groups that Marxism rejected.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whco-ent-1b',
    question: 'Which comparison of liberal and conservative responses to industrial society in the early 1800s is most accurate?',
    options: ['Liberals favored free markets and constitutions, while conservatives defended tradition', 'Liberals called for collective ownership of factories, while conservatives demanded complete free trade', 'Liberals backed absolute monarchy, while conservatives demanded universal suffrage for men', 'Both rejected private property and called for building a classless society of workers'],
    correctIndex: 0,
    explanation: 'Liberals such as Mill stressed individual rights, constitutions and free markets, while conservatives such as Burke defended established institutions and distrusted rapid change. Collective ownership and a classless society are socialist and Marxist goals.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },

  // Part 2: Key Processes
  {
    id: 'whco-ent-2a',
    question: 'By the early 1900s socialist parties such as Germany\'s SPD and Britain\'s new Labour Party were competing in elections rather than plotting revolution. Which development best explains this choice?',
    options: ['Marx had told workers to avoid revolution in every circumstance', 'Both governments had banned trade unions outright by the 1890s', 'Both states had already nationalized their major industries', 'Wider voting rights let workers win reforms through parliament'],
    correctIndex: 3,
    explanation: 'With working men able to vote (universal male suffrage for the Reichstag, expanded franchise in Britain), reform socialists saw a parliamentary road to change. Marx expected revolution, and unions were being legalized, not banned.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whco-ent-2b',
    question: 'Which description best distinguishes industrial unions from the earlier craft unions?',
    options: ['They admitted only skilled artisans such as printers and carpenters', 'They took in every worker in a sector, whatever their skill', 'They rejected strikes and relied entirely on employers\' goodwill', 'They were set up by governments to replace the socialist parties'],
    correctIndex: 1,
    explanation: 'Craft unions organized skilled trades, while the later industrial unions enrolled all workers in an industry regardless of skill, which made them larger. Both used collective bargaining and strikes.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },

  // Part 3: Patterns & Examples
  {
    // source: Rudyard Kipling, "The White Man's Burden," 1899; verbatim
    id: 'whco-ent-3a',
    question: '"Take up the White Man\'s burden— / Send forth the best ye breed— / Go bind your sons to exile / To serve your captives\' need" (Rudyard Kipling, 1899). The poem most directly reflects which idea of its period?',
    options: ['A belief that Westerners had a duty to rule and "civilize" other peoples', 'Marxist calls for workers to unite across all national borders', 'Liberal demands that every colony be granted self-government', 'Pacifist warnings that empire would end in a great European war'],
    correctIndex: 0,
    explanation: 'Kipling cast empire as a noble obligation of white nations toward colonized peoples, an idea reinforced by Social Darwinist claims of racial hierarchy. The poem urges imperial rule rather than self-government or worker solidarity.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whco-ent-3b',
    question: 'A Social Darwinist writer of the 1880s would most likely have opposed which policy?',
    options: ['Laissez-faire limits on the regulation of private business', 'Open competition among firms in unregulated markets', 'Government insurance for sick and elderly workers', 'Low taxes and minimal spending by the central state'],
    correctIndex: 2,
    explanation: 'Spencer and his followers argued that aid to the poor kept the "unfit" alive and violated natural law, so they opposed social insurance. They favored free competition, low taxes and limited government.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },

  // Part 4: Connections & Interactions
  {
    id: 'whco-ent-4a',
    question: 'Which pairing correctly matches a push factor with a pull factor in 19th-century migration?',
    options: ['Push: high wages in Argentina; pull: famine in Ireland', 'Push: pogroms in Russia; pull: religious freedom in the United States', 'Push: open land on the Pampas; pull: enclosure of English farms', 'Push: letters from earlier migrants; pull: overpopulation at home'],
    correctIndex: 1,
    explanation: 'Violence against Jews drove them out of the Russian Empire (push), and religious freedom drew them to the United States (pull). The other pairings reverse the two categories.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whco-ent-4b',
    question: 'Which development best explains the rise of Indian indentured migration to the Caribbean after the 1830s?',
    options: ['The Irish famine created a demand for workers in Indian ports', 'Caribbean governments gave free farmland to any Indian settler', 'Britain banned all European emigration to its colonies abroad', 'Abolishing slavery left planters looking for new workers'],
    correctIndex: 3,
    explanation: 'After Britain abolished slavery in 1833, plantation owners in Trinidad, British Guiana and elsewhere recruited contract laborers from India to replace enslaved workers. Indentured workers were bound by contracts, not given land.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },

  // Part 5: Change Over Time
  {
    id: 'whco-ent-5a',
    question: 'Which development most directly made department stores such as the Bon Marché in Paris possible in the mid-1800s?',
    options: ['Guild rules requiring every product to be made entirely by hand', 'Government rationing that fixed the price of every kind of good', 'Factory-made goods sold in volume to a growing urban middle class', 'The decline of cities as families moved back to farms in the country'],
    correctIndex: 2,
    explanation: 'Mass production supplied large quantities of standardized goods, and a growing middle class in the cities had money to buy them, so large retail stores could thrive. Guild handcraft and a shrinking urban population would have worked against them.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whco-ent-5b',
    question: 'A writer in 1860 argues that poverty results from idleness and that any man can rise through thrift and hard work. This argument most directly served to',
    options: ['explain inequality by character, not the system', 'support Marxist calls for a workers\' revolution', 'justify aristocratic privilege based on noble birth', 'demand government aid for workers who lost their jobs'],
    correctIndex: 0,
    explanation: 'This middle-class ideal of self-help made success and failure a matter of individual effort, which defended industrial capitalism against critics who blamed the system. It rejects both inherited privilege and state aid.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'whco-ent-6a',
    question: 'Britain\'s population grew from about 10.5 million in 1801 to about 41 million in 1911, even though its industrial cities were crowded and unhealthy. Which factor best explains this growth?',
    options: ['Large numbers of immigrants arrived in Britain from the Americas', 'Emigration from Britain stopped almost entirely during the century', 'Factory work lengthened the average life expectancy of children', 'Death rates fell faster than birth rates as food supply and sanitation improved'],
    correctIndex: 3,
    explanation: 'Better food supplies, sanitation and medicine cut mortality while birth rates stayed high for decades, which is stage two of the demographic transition. Britain sent millions of emigrants abroad, so migration does not explain the growth.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whco-ent-6b',
    question: 'Which statement best describes a change in how industrial cities dealt with disease between 1840 and 1900?',
    options: ['Cities gave up on public health and left sanitation to families', 'Governments built sewers once illness was linked to filthy water', 'Doctors decided epidemics were unavoidable and stopped vaccinating', 'Factories moved out of cities, which ended overcrowding for good'],
    correctIndex: 1,
    explanation: 'After cholera outbreaks and episodes such as London\'s Great Stink, governments invested in sewers and water treatment, and germ theory later explained why these worked. Vaccination expanded rather than stopped.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'whco-ent-7a',
    question: 'A DBQ document is an 1840s speech in which a mill owner tells Parliament that limiting children\'s working hours would ruin British industry. Which sourcing point is most useful?',
    options: ['He profited from it, so he may overstate what reform costs', 'As a government inspector, he was neutral on the question', 'As a worker, he described conditions he had endured himself', 'As a socialist, he wanted the state to run every factory'],
    correctIndex: 0,
    explanation: 'An owner who benefited from cheap child labor had a clear interest in opposing limits on it, which shapes how far his warnings can be trusted. The document is evidence of employers\' arguments, not of actual economic effects.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whco-ent-7b',
    question: 'Which claim would best earn the complexity point in an essay on responses to industrialization, 1750–1900?',
    options: ['Nearly everyone in industrial society opposed any reform of working conditions', 'Industrialization caused many different responses from many different groups', 'Unions, reformers and socialists all sought better lives for workers but split over reforming or overthrowing capitalism', 'Workers\' lives improved at once when the very first factories opened their doors'],
    correctIndex: 2,
    explanation: 'This claim identifies a shared goal and a key disagreement among groups, which shows nuanced understanding of the period. The other options are vague or historically false.',
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
