/**
 * Entrance Quiz — Reform Movements (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushref-ent-1a',
    question: 'An abolitionist of the 1840s argued that slavery would end only when the public was persuaded of its sinfulness, and refused to vote under a Constitution he called proslavery. His approach most closely matched that of',
    options: ['William Lloyd Garrison', 'James G. Birney', 'John Brown', 'Henry Clay'],
    correctIndex: 0,
    explanation: 'Garrison relied on moral suasion and rejected electoral politics, calling the Constitution a "covenant with death." Birney ran as the Liberty Party\'s candidate, Brown turned to armed raids, and Clay backed colonization.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushref-ent-1b',
    question: 'Temperance workers, prison reformers and abolitionists of the 1830s most often shared which belief drawn from the Second Great Awakening?',
    options: ['Sin was permanent, so reform should aim only at limiting its damage', 'People and society could be freed from sin through human effort', 'Social problems would be solved by Christ\'s return, not by reform', 'Only the federal government had the power to improve moral life'],
    correctIndex: 1,
    explanation: 'Revival preaching taught perfectionism: if individuals could turn from sin, so could whole institutions, which gave reform a religious mission. Postmillennialists expected reform to prepare for Christ\'s return rather than wait for it, and most reformers worked through voluntary societies and states, not federal power.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Revival, Markets and the Reform Impulse
  {
    id: 'apushref-ent-2a',
    question: 'Historians who connect the Second Great Awakening to the market revolution most often argue that revivals',
    options: ['spread because canals carried Catholic missionaries to the West', 'began when factory owners made church attendance a condition of work', 'steadied people uprooted by fast economic change', 'faded quickly as wage labor replaced farm work across the North'],
    correctIndex: 2,
    explanation: 'Canals, factories and wage work broke up older communities, and revival offered converts discipline and purpose amid the upheaval, as in the canal boomtown of Rochester. The revival was Protestant, attendance was voluntary, and revivals grew rather than faded with the market economy.',
    partNumber: 2,
    partTitle: 'Revival, Markets and the Reform Impulse',
  },
  {
    id: 'apushref-ent-2b',
    question: 'Compared with older Calvinist teaching, the preaching of revivalists such as Charles Finney did more to encourage social reform because it held that',
    options: ['the world would end soon, so earthly improvements were pointless', 'only an elect few were saved, and they were meant to rule the rest', 'anyone could choose salvation and should show it by serving others', 'churches must leave all questions of public morality to the state'],
    correctIndex: 2,
    explanation: 'Finney\'s free-will theology made salvation a choice and asked converts to prove it through disinterested benevolence, which sent them into reform societies. Predestination, withdrawal from public life and an imminent end of the world all point away from reform.',
    partNumber: 2,
    partTitle: 'Revival, Markets and the Reform Impulse',
  },
  // Part 3: Abolitionism, Read Closely (1829–1852)
  // source: William Lloyd Garrison, "To the Public," The Liberator, January 1, 1831; verbatim
  {
    id: 'apushref-ent-3a',
    question: '"I am aware, that many object to the severity of my language; but is there not cause for severity? I will be as harsh as truth, and as uncompromising as justice. On this subject, I do not wish to think, or speak, or write, with moderation."\n— William Lloyd Garrison, The Liberator, January 1, 1831\n\nGarrison\'s position in the excerpt most directly rejected which earlier antislavery approach?',
    options: ['Gradual emancipation tied to colonization abroad', 'Political action through a third party pledged against slavery', 'Armed slave revolts of the kind Denmark Vesey had planned', 'Abolition by act of Parliament with payment to slaveholders'],
    correctIndex: 0,
    explanation: 'Garrison\'s refusal to speak "with moderation" announced immediatism, a break with the gradual emancipation and colonization that most white antislavery Northerners still favored. The Liberty Party came later, Garrison was a pacifist, and British compensated emancipation was not the American approach he was answering.',
    partNumber: 3,
    partTitle: 'Abolitionism, Read Closely (1829–1852)',
  },
  {
    id: 'apushref-ent-3b',
    question: 'In the late 1830s, abolitionists won sympathy from many Northerners who were not yet opposed to slavery itself, mainly because',
    options: ['Southern states had begun freeing enslaved people who joined Northern churches', 'the Supreme Court had ruled that slavery was illegal in every federal territory', 'Congress had voted to make Liberia a territory of the United States', 'the gag rule and mob attacks seemed to threaten white Northerners\' civil liberties'],
    correctIndex: 3,
    explanation: 'Tabling petitions, burning mailed pamphlets and killing Elijah Lovejoy let abolitionists argue that defending slavery meant silencing free speech, petition and press. No Southern state freed people for church membership, the Court ruled the opposite way in 1857, and Liberia was never a U.S. territory.',
    partNumber: 3,
    partTitle: 'Abolitionism, Read Closely (1829–1852)',
  },
  // Part 4: Remaking Institutions: Schools, Asylums, Prisons and Utopias
  // source: Horace Mann, Twelfth Annual Report of the Massachusetts Board of Education, 1848; verbatim
  {
    id: 'apushref-ent-4a',
    question: '"Education then, beyond all other devices of human origin, is the great equalizer of the conditions of men,—the balance-wheel of the social machinery."\n— Horace Mann, Twelfth Annual Report, 1848\n\nMann\'s claim is best understood in the context of',
    options: ['Southern demands that states fund schools for enslaved children', 'a federal law that required every state to open free high schools', 'the closing of most church schools after disestablishment in 1833', 'a widening gap between rich and poor in Northern industrial towns'],
    correctIndex: 3,
    explanation: 'Mann argued that free common schools would let poor children rise and keep industrial inequality from hardening into fixed classes. Teaching enslaved people to read was illegal in the South, there was no federal school law, and church schools did not close after disestablishment.',
    partNumber: 4,
    partTitle: 'Remaking Institutions: Schools, Asylums, Prisons and Utopias',
  },
  {
    id: 'apushref-ent-4b',
    question: 'A historian comparing Dorothea Dix\'s asylum campaign with the Oneida Community would most likely conclude that',
    options: ['both groups rejected the idea that surroundings could shape character', 'Dix used state power to reform people, while Oneida withdrew to model a new order', 'Dix withdrew from public life, while Oneida lobbied lawmakers for state funds', 'both were led by Catholic clergy who distrusted Protestant revivalism'],
    correctIndex: 1,
    explanation: 'Dix petitioned legislatures to build humane state hospitals, while Oneida\'s members left mainstream society to live out a perfectionist model community. Both actually assumed that environment shapes character, and both drew on Protestant perfectionism rather than Catholic leadership.',
    partNumber: 4,
    partTitle: 'Remaking Institutions: Schools, Asylums, Prisons and Utopias',
  },
  // Part 5: Women's Rights, Backlash and the Limits of Reform
  // source: Sarah M. Grimké, Letters on the Equality of the Sexes, Letter II, 1838; verbatim
  {
    id: 'apushref-ent-5a',
    question: '"I ask no favors for my sex. I surrender not our claim to equality. All I ask of our brethren is, that they will take their feet from off our necks, and permit us to stand upright on that ground which God designed us to occupy."\n— Sarah Grimké, Letters on the Equality of the Sexes, 1838\n\nGrimké\'s argument was most directly a response to',
    options: ['criticism of women who spoke against slavery', 'state laws that barred women from textile mill work', 'the refusal of Congress to fund colleges for women', 'the decision of the Supreme Court in Dred Scott'],
    correctIndex: 0,
    explanation: 'After the Grimké sisters lectured to audiences of men and women, Massachusetts ministers condemned women who spoke in public, and Sarah answered by claiming equality as God\'s design. Women worked in the mills, Congress funded no colleges, and Dred Scott came in 1857.',
    partNumber: 5,
    partTitle: 'Women\'s Rights, Backlash and the Limits of Reform',
  },
  {
    id: 'apushref-ent-5b',
    question: 'Many temperance and common-school reformers supported nativist causes in the 1850s because they',
    options: ['feared immigrants would vote to end slavery faster than the South could accept', 'wanted to keep all immigrants from settling in the western territories', 'expected immigrants to fill the utopian communities and outvote members', 'saw Catholic newcomers as threats to sobriety and to Protestant education'],
    correctIndex: 3,
    explanation: 'Native-born Protestant reformers linked Irish and German Catholic immigrants to drinking and to challenges over the Bible in public schools, which fed support for the Know-Nothings. The other choices do not describe what drove reform-minded nativism.',
    partNumber: 5,
    partTitle: 'Women\'s Rights, Backlash and the Limits of Reform',
  },
  // Part 6: Problem-Solving Workshop
  // source: Henry David Thoreau, "Resistance to Civil Government" (later titled "Civil Disobedience"), 1849; verbatim
  {
    id: 'apushref-ent-6a',
    question: '"Under a government which imprisons any unjustly, the true place for a just man is also a prison."\n— Henry David Thoreau, "Resistance to Civil Government," 1849\n\nWhich of the following provides the most relevant historical context for Thoreau\'s statement?',
    options: ['His arrest for helping plan John Brown\'s raid on Harpers Ferry', 'His jailing for refusing a tax that supported slavery and war', 'His time in prison under the Fugitive Slave Act of 1850', 'His campaign against the silent-labor rules of Auburn prison'],
    correctIndex: 1,
    explanation: 'Thoreau spent a night in jail in 1846 for refusing to pay his poll tax in protest against slavery and the war with Mexico. The Harpers Ferry raid came in 1859 and the Fugitive Slave Act in 1850, both after the essay, and he did not campaign about prisons.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushref-ent-6b',
    question: 'An SAQ asks for one piece of evidence that antebellum reform widened women\'s role in public life. Which response would best earn the point?',
    options: ['Women gained the vote in New York soon after the Seneca Falls Convention of 1848', 'Women led the Know-Nothing campaign against Catholic immigrants in Massachusetts', 'Women gathered antislavery petitions for Congress even though they could not vote', 'Women were expected to stay home under separate spheres, and most of them did so'],
    correctIndex: 2,
    explanation: 'Petitioning Congress was a political act that took women into public life despite their exclusion from voting. No state let women vote in 1848, women did not lead the Know-Nothings, and the separate-spheres answer describes the limit, not the change.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushref-ent-7a',
    question: 'Which claim best describes continuity and change in American reform between the 1830s and the 1850s?',
    options: ['Reform began in party politics but turned to private moral persuasion after the 1840 split', 'Reform kept its religious roots but moved from persuasion to laws and parties', 'Reform began as a Southern movement but became Northern once the Compromise of 1850 passed', 'Reform stayed focused on temperance alone, but its leaders shifted from women to ministers'],
    correctIndex: 1,
    explanation: 'Religious motives persisted while reformers moved from pledges and sermons to the Maine Law, the Liberty and Free Soil parties, and the Republicans. The party-politics answer reverses the direction of change, organized reform was always mainly Northern, and reform was never limited to temperance.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushref-ent-7b',
    question: 'Which evidence would best support the argument that abolitionism deepened sectional conflict before 1860?',
    options: ['The opening of the first state normal school in Massachusetts in 1839', 'The breakup of New Harmony over disputes about work and property', 'The rapid spread of the Washingtonian temperance societies in 1840', 'The shift of Southern leaders to defending slavery as a positive good'],
    correctIndex: 3,
    explanation: 'Immediatist attacks provoked Southern leaders such as Calhoun to defend slavery as a positive good, hardening the divide between the sections. The other choices are real reform events with no direct link to sectional conflict.',
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
    { partNumber: 2, partTitle: 'Revival, Markets and the Reform Impulse' },
    { partNumber: 3, partTitle: 'Abolitionism, Read Closely (1829–1852)' },
    { partNumber: 4, partTitle: 'Remaking Institutions: Schools, Asylums, Prisons and Utopias' },
    { partNumber: 5, partTitle: 'Women\'s Rights, Backlash and the Limits of Reform' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
