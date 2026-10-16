/**
 * Entrance Quiz — The Industrial Revolution (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whir-ent-1a',
    question: 'Which pairing of an invention with its main effect is most accurate?',
    options: ['Bessemer\'s process mechanized the weaving of cotton cloth', 'Cartwright\'s power loom made cheap mass-produced steel possible', 'Watt\'s improved steam engine freed factories from riverside sites', 'Hargreaves\'s spinning jenny cut the cost of pumping water from mines'],
    correctIndex: 2,
    explanation: 'Steam power let mills and factories locate near coal, labor, and markets instead of beside fast-flowing water. The Bessemer process made steel, the power loom wove cloth, and the spinning jenny spun thread.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whir-ent-1b',
    question: 'Manchester grew from about 25,000 people in 1770 to more than 300,000 by 1850. Which development most directly drove this growth?',
    options: ['Factory jobs that drew migrants from the countryside', 'A rising birth rate among the families of the landed aristocracy', 'Refugees who fled to England from the French Revolution', 'The transfer of the royal court and Parliament from London'],
    correctIndex: 0,
    explanation: 'Cotton mills offered steady wages that pulled displaced rural workers into the city. The aristocracy was tiny, revolutionary refugees were few, and the capital never moved from London.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  {
    id: 'whir-ent-2a',
    question: 'No place in Britain lies more than about 70 miles from navigable water. This fact helps explain Britain\'s early industrialization mainly because',
    options: ['coastal towns could escape the taxes paid by inland towns', 'bulk goods such as coal could be moved cheaply', 'sea breezes cooled steam engines and kept them running', 'rivers supplied all the power that factories ever needed'],
    correctIndex: 1,
    explanation: 'Rivers, canals, and the coast let heavy, low-value goods like coal and iron ore reach factories and ports at low cost. There was no such tax break, engines did not depend on breezes, and steam soon replaced waterpower.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whir-ent-2b',
    question: 'Which advantage that helped Britain industrialize first is best classified as institutional rather than geographic?',
    options: ['Deposits of coal lying close to deposits of iron ore', 'Deep-water harbors such as Liverpool and Bristol', 'Rivers linked to one another by a network of new canals', 'Laws that protected property and inventors\' profits'],
    correctIndex: 3,
    explanation: 'Patent law and secure property rights were human-made rules that rewarded investment and invention. Coal, harbors, and rivers were natural features, even though canals extended them.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  // source: original
  {
    id: 'whir-ent-3a',
    question: 'The following summary was written for this question.\n\nIn many early textile mills, the gates were locked when the bell rang at dawn. Workers who arrived late were shut out or fined part of a day\'s wages, and further fines punished talking or leaving a machine.\n\nThese rules best illustrate which change?',
    options: ['Guild masters regaining control over the training of apprentices', 'Clock-based discipline replacing the task rhythms of farm and craft', 'Workers owning their tools and selling the goods they produced', 'Families working together at home on orders from merchants'],
    correctIndex: 1,
    explanation: 'Factories required workers to keep the employer\'s hours under close supervision, unlike seasonal farm work or artisan labor paced by the task. Guild control, ownership of tools, and home production all describe the older system the factory replaced.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whir-ent-3b',
    question: 'Which group was most likely to take part in the Luddite machine-breaking of 1811–1816?',
    options: ['Factory owners hoping to drive rival mills out of business', 'Skilled cloth workers whose wages new frames had undercut', 'Children employed to tend spinning frames in cotton mills', 'Landowning aristocrats who resented new industrial wealth'],
    correctIndex: 1,
    explanation: 'The Luddites were skilled textile workers who smashed machinery they blamed for cutting their pay and status. Owners installed the machines, children had no means to organize such raids, and aristocrats used Parliament, not hammers.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whir-ent-4a',
    question: 'Which feature did German and Meiji Japanese industrialization share that set both apart from Britain\'s earlier path?',
    options: ['Factories built and run mainly by foreign colonial governments', 'Textiles leading the way, with heavy industry following a century later', 'Growth with almost no tariffs or government involvement at all', 'A strong state role in building railways and training engineers'],
    correctIndex: 3,
    explanation: 'Prussia and the German states backed railways, tariffs, and technical universities, and the Meiji state built model factories before selling them to private firms. Britain\'s market-driven, textile-first path was the one that relied least on the state, and neither later case was a colony.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whir-ent-4b',
    question: 'Belgium was the first country on the European continent to industrialize, in the 1820s–1840s. Which factor best explains this?',
    options: ['Cotton supplied by its colony in the Congo basin', 'Abundant cheap land that drew millions of immigrants', 'Coalfields near Liège and the arrival of British technicians', 'A customs union that joined it to the Zollverein in 1834'],
    correctIndex: 2,
    explanation: 'Belgium combined rich coal deposits with skills and machines brought by British workers and engineers. The Congo came under Belgian control only in the 1880s, cheap land and immigration describe the United States, and Belgium stayed outside the German Zollverein.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whir-ent-5a',
    question: 'Approximate share of the population of England and Wales living in towns of more than 10,000 people: 1750, 17 percent; 1800, 20 percent; 1850, 41 percent; 1890, 62 percent.\n\nWhich conclusion do these figures best support?',
    options: ['Britain was already mostly urban before factories were built', 'Urban growth in Britain stalled once railways were built after 1850', 'Most of the change came before 1800, during early mechanization', 'Most Britons came to live in cities during the late 1800s'],
    correctIndex: 3,
    explanation: 'The urban share passed half between 1850 and 1890, and it rose fastest in those decades. Britain was mostly rural in 1750, growth sped up rather than stalled after 1850, and only a small rise came before 1800.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whir-ent-5b',
    question: 'The People\'s Charter of 1838 demanded votes for all adult men, a secret ballot, and salaries for members of Parliament. Why did many industrial workers support it?',
    options: ['They hoped the vote would let them change laws on work and wages', 'They wanted to restore the guild rules that limited factory output', 'They planned to seize the factories in an immediate armed revolution', 'They aimed to move into Owen\'s cooperative villages in America'],
    correctIndex: 0,
    explanation: 'Chartists believed that political power through the ballot would give workers a voice over the conditions of industrial life. They sought reform through Parliament, not guild restoration, armed revolution, or utopian communities.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'whir-ent-6a',
    question: 'Which development best illustrates the division of the nineteenth-century world economy into an industrial core and a periphery?',
    options: ['Germany\'s Zollverein uniting the markets of the German states', 'Chartists in Britain demanding the vote for working men', 'Egypt growing cotton for export to the mills of Lancashire', 'London building sewers after the Great Stink of 1858'],
    correctIndex: 2,
    explanation: 'Egypt specialized in a raw material for British factories and became dependent on world cotton prices, the periphery\'s role. The Zollverein, Chartism, and London\'s sewers were developments within industrial societies.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whir-ent-6b',
    question: 'After the Great Stink of 1858, Parliament funded a vast new sewer system for London. This response best illustrates',
    options: ['the end of coal burning in British cities', 'governments taking on public health duties', 'a return of manufacturing to rural cottages', 'Britain\'s refusal to regulate industrial cities'],
    correctIndex: 1,
    explanation: 'The crisis pushed the state to build sanitation for the industrial city, part of a wider growth of public health measures. Coal burning continued for another century, industry did not return to cottages, and the sewers were themselves regulation and investment.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whir-ent-7a',
    question: 'An essay prompt asks: "Evaluate the extent to which industrialization changed the role of the British state, 1830–1900." Which thesis best responds?',
    options: ['Industrialization was a period of great change in Britain from 1830 to 1900', 'The British state changed a great deal, since many things happened in the 1800s', 'It changed greatly, as factory laws, sewers, and voting reform drew the state into daily life', 'Industrialization began in Britain because of coal, capital, colonies, and patent laws'],
    correctIndex: 2,
    explanation: 'This thesis makes a claim about extent and names a line of reasoning across labor, health, and politics. The others restate the prompt, offer no real reasoning, or answer a different question about causes.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whir-ent-7b',
    question: 'A student writing about Robert Owen\'s model mill community at New Lanark would best contextualize it by referring to',
    options: ['widespread alarm over child labor and factory conditions', 'Japan\'s state-built model factories of the 1870s', 'the Zollverein\'s removal of tariffs among German states', 'the Bessemer process for making cheap steel after 1856'],
    correctIndex: 0,
    explanation: 'Owen limited child labor and improved housing and schooling at New Lanark in response to the harsh conditions of early mills, the same concerns that produced the Factory Acts. The other choices are later or unrelated developments.',
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
