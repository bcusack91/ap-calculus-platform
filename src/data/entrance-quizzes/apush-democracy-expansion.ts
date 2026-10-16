/**
 * Entrance Quiz — Democracy & Expansion (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushdem-ent-1a',
    question: 'Andrew Jackson\'s supporters defended his practice of rewarding loyal followers with government jobs as',
    options: ['a merit system that hired officials through competitive exams', 'a means of keeping Federalist officials in office for life', 'a plan to give the Supreme Court control over federal hiring', 'a way to take office away from an entrenched elite'],
    correctIndex: 3,
    explanation: 'Jacksonians argued that rotation in office broke the hold of a privileged class of officeholders and that any capable citizen could serve. Competitive exams came only with civil service reform in the 1880s, the Court had no role in hiring, and the system removed rather than protected long-serving officials.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushdem-ent-1b',
    question: 'The market revolution of the early 1800s affected the South mainly by',
    options: ['replacing plantation agriculture with textile factories', 'ending the domestic trade in enslaved people', 'deepening its reliance on cotton and enslaved labor', 'cutting its trade ties with British and northern mills'],
    correctIndex: 2,
    explanation: 'Demand from British and New England mills made cotton the nation\'s leading export and drew slavery deeper into the Deep South. Factories stayed rare in the South, the domestic slave trade grew, and southern ties to northern and British buyers strengthened.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: The Jeffersonian Republic and the Rise of Nationalism, 1800–1824
  {
    id: 'apushdem-ent-2a',
    question: 'In June 1812 the House voted 79–49 to declare war on Britain, with New England and most Federalists voting no. Which conclusion does this vote best support?',
    options: ['The coastal regions hurt most by impressment were least eager for war', 'Every region agreed that impressment alone justified a war with Britain', 'Western members opposed war because they feared British Canada', 'Federalists led the call for war to protect New England shipping'],
    correctIndex: 0,
    explanation: 'New England shipping suffered most from impressment, yet its members voted against war, while western and southern War Hawks, worried about British-backed Native resistance, voted for it. The vote was divided, westerners favored war, and Federalists opposed it.',
    partNumber: 2,
    partTitle: 'The Jeffersonian Republic and the Rise of Nationalism, 1800–1824',
  },
  {
    id: 'apushdem-ent-2b',
    question: 'The Hartford Convention of 1814–1815 contributed most directly to',
    options: ['the election of Andrew Jackson as president in 1828', 'the adoption of the Monroe Doctrine in 1823', 'the collapse of the Federalist Party as a national force', 'the passage of the Missouri Compromise in 1820'],
    correctIndex: 2,
    explanation: 'New England Federalists proposed constitutional changes just as news of the Treaty of Ghent and the victory at New Orleans arrived, making them look disloyal, and the party faded. Jackson\'s election, the Monroe Doctrine, and the Missouri Compromise had other causes.',
    partNumber: 2,
    partTitle: 'The Jeffersonian Republic and the Rise of Nationalism, 1800–1824',
  },
  // Part 3: Jackson and Federal Power: Removal and Nullification in Their Own Words
  {
    id: 'apushdem-ent-3a',
    question: 'Which best explains why Andrew Jackson sided with Georgia against the Cherokee but opposed South Carolina during the Nullification Crisis?',
    options: ['He held a consistent belief that any state could override federal law', 'He sought Native land for settlers but saw a defiant state as a peril to the Union', 'He followed Supreme Court rulings in both cases as his oath required of him', 'He depended on New England votes and acted mainly to please northern voters'],
    correctIndex: 1,
    explanation: 'Jackson used state power where it served removal and federal power where a state\'s defiance endangered the Union and his authority. He was not consistent about state sovereignty, he declined to enforce Worcester v. Georgia, and his base was southern and western.',
    partNumber: 3,
    partTitle: 'Jackson and Federal Power: Removal and Nullification in Their Own Words',
  },
  {
    id: 'apushdem-ent-3b',
    question: 'The Treaty of New Echota (1835) is best described as',
    options: ['a Supreme Court ruling that upheld Cherokee sovereignty', 'an agreement that let the Cherokee keep their lands in Georgia', 'a law passed by Georgia granting the Cherokee citizenship', 'a removal pact signed by a faction most of the nation rejected'],
    correctIndex: 3,
    explanation: 'Members of the "Treaty Party" agreed to removal, while Principal Chief John Ross and about 15,000 Cherokee protested; the Senate ratified it by one vote, giving legal cover for the Trail of Tears. It was not a court ruling, a Georgia law, or a guarantee of Cherokee land.',
    partNumber: 3,
    partTitle: 'Jackson and Federal Power: Removal and Nullification in Their Own Words',
  },
  // Part 4: The Market Revolution and the Second Party System: Data and Causation
  // source: Andrew Jackson, Veto Message on the Bank of the United States, July 10, 1832; verbatim
  {
    id: 'apushdem-ent-4a',
    question: '"...when the laws undertake to add to these natural and just advantages artificial distinctions, to grant titles, gratuities, and exclusive privileges, to make the rich richer and the potent more powerful, the humble members of society—the farmers, mechanics, and laborers—who have neither the time nor the means of securing like favors to themselves, have a right to complain of the injustice of their Government."\n— Andrew Jackson, Bank Veto Message, 1832\n\nWhich group in the 1830s was most likely to support the position in the excerpt?',
    options: ['Whigs who followed Henry Clay and Daniel Webster', 'Northern manufacturers who wanted a national bank', 'Democrats, many of them western growers and urban artisans', 'Investors who held stock in the Second Bank'],
    correctIndex: 2,
    explanation: 'Jackson\'s attack on privilege appealed to the Democratic coalition of farmers, workers, and others suspicious of banks. Whigs, manufacturers, and Bank stockholders supported the Bank that Jackson vetoed.',
    partNumber: 4,
    partTitle: 'The Market Revolution and the Second Party System: Data and Causation',
  },
  {
    id: 'apushdem-ent-4b',
    question: 'Approximate figures: cotton production rose from 335,000 bales in 1820 to 1.35 million in 1840, and the enslaved population grew from 1.5 million to 2.5 million. With the international slave trade banned since 1808, how did the enslaved population grow?',
    options: ['Through illegal shipments that supplied most of the increase', 'Through births and forced sales out of the Upper South', 'Through Mexico\'s transfer of enslaved people to Texas planters', 'Through state laws that enslaved free Black northerners'],
    correctIndex: 1,
    explanation: 'Growth came mostly from births and from a huge internal slave trade that forced hundreds of thousands from Virginia and Maryland to the cotton lands of the Deep South. Smuggling was small, Mexico abolished slavery, and northern states did not enslave free Black residents.',
    partNumber: 4,
    partTitle: 'The Market Revolution and the Second Party System: Data and Causation',
  },
  // Part 5: Manifest Destiny and the Mexican-American War: Connections and Misconceptions
  // source: Ulysses S. Grant, Personal Memoirs of U. S. Grant, vol. 1, 1885; verbatim
  {
    id: 'apushdem-ent-5a',
    question: '"For myself, I was bitterly opposed to the measure, and to this day regard the war, which resulted, as one of the most unjust ever waged by a stronger against a weaker nation."\n— Ulysses S. Grant, a junior officer in the war, writing in his memoirs, 1885\n\nGrant\'s view of the Mexican-American War most closely matches that of',
    options: ['Democrats who saw the war as fulfilling Manifest Destiny', 'Whigs who charged that Polk had provoked the war', 'Texans who insisted the Nueces River was the true border', 'Planters who hoped the war would add new slave states'],
    correctIndex: 1,
    explanation: 'Like Lincoln and other Whigs, Grant judged the war an unjust act of aggression begun by the United States. Democrats and expansionist planters supported it, and Texans claimed the Rio Grande, not the Nueces, as the border.',
    partNumber: 5,
    partTitle: 'Manifest Destiny and the Mexican-American War: Connections and Misconceptions',
  },
  {
    id: 'apushdem-ent-5b',
    question: 'Congress annexed Texas in 1845 by joint resolution rather than by treaty mainly because',
    options: ['Mexico had asked Congress to approve the annexation quickly', 'Britain demanded that Texas join the Union before the Oregon talks', 'the Constitution forbids the president to sign treaties with republics', 'a treaty needed a two-thirds Senate vote that annexation lacked'],
    correctIndex: 3,
    explanation: 'The Senate had rejected an annexation treaty in 1844, so supporters used a joint resolution that needed only simple majorities in both houses. Mexico opposed annexation, the Constitution has no such rule, and Britain made no such demand.',
    partNumber: 5,
    partTitle: 'Manifest Destiny and the Mexican-American War: Connections and Misconceptions',
  },
  // Part 6: Problem-Solving Workshop
  // source: James Monroe, Seventh Annual Message to Congress, December 2, 1823; verbatim
  {
    id: 'apushdem-ent-6a',
    question: '"In the wars of the European powers in matters relating to themselves we have never taken any part, nor does it comport with our policy to do so."\n— President James Monroe, annual message to Congress, 1823\n\nWhich fact best explains why the United States could announce its policy toward Europe and the Americas in 1823 despite having a small navy?',
    options: ['Britain\'s fleet also stood against any recolonization of Latin America', 'Spain had already given up all claims to its former colonies by treaty', 'The Holy Alliance had agreed to let the United States govern Latin America', 'The United States had just defeated Britain decisively in the War of 1812'],
    correctIndex: 0,
    explanation: 'Britain, eager to trade with the new Latin American republics, opposed any European attempt to retake them, and its navy gave the doctrine force. Spain had not yet recognized its colonies\' independence, the Holy Alliance made no such agreement, and the War of 1812 ended in a draw.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushdem-ent-6b',
    question: 'Alexis de Tocqueville published Democracy in America in 1835 after touring the United States. A historian using it as evidence should consider that Tocqueville',
    options: ['wrote for French readers who were debating democracy at home', 'was an American Democrat campaigning for Jackson\'s reelection', 'never visited the United States and relied on secondhand reports', 'was hired by Congress to write an official history of the nation'],
    correctIndex: 0,
    explanation: 'A French aristocrat writing for Europeans, Tocqueville used America to weigh the promise and dangers of democracy for France, which shapes what he stressed. He was not an American partisan, he toured the country in 1831–1832, and his work was not commissioned by Congress.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushdem-ent-7a',
    question: 'Madison\'s veto of the Bonus Bill (1817) and Jackson\'s veto of the Maysville Road bill (1830) both reflected',
    options: ['support for Henry Clay\'s American System', 'opposition to any tariff on imported goods', 'doubts about federal funding of local roads', 'a plan to give road building to the Supreme Court'],
    correctIndex: 2,
    explanation: 'Both presidents questioned whether the Constitution allowed federal money for internal improvements within a state. Clay\'s American System called for such spending, the vetoes concerned roads and canals rather than tariffs, and the Court had no role in road building.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushdem-ent-7b',
    question: 'Which statement describes a continuity in American politics from 1800 to 1848?',
    options: ['Each new territorial gain reopened the question of slavery\'s expansion', 'The Federalist Party remained a major force in every presidential election', 'Property requirements for white male voters stayed in place in most states', 'The federal government kept the Bank of the United States throughout'],
    correctIndex: 0,
    explanation: 'From Louisiana and Missouri to Texas and the Mexican Cession, every addition raised the question of whether slavery would spread. The Federalists collapsed after 1815, most states dropped property requirements, and the national bank ended in 1811 and again in 1836.',
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
    { partNumber: 2, partTitle: 'The Jeffersonian Republic and the Rise of Nationalism, 1800–1824' },
    { partNumber: 3, partTitle: 'Jackson and Federal Power: Removal and Nullification in Their Own Words' },
    { partNumber: 4, partTitle: 'The Market Revolution and the Second Party System: Data and Causation' },
    { partNumber: 5, partTitle: 'Manifest Destiny and the Mexican-American War: Connections and Misconceptions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
