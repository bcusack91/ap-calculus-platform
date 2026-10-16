/**
 * Entrance Quiz — Contemporary Issues & Debates (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasci-ent-1a',
    question: 'By 2019, 23 percent of Black adults held at least a bachelor\'s degree, and the number of Black degree holders had more than doubled since 2000. In 2016, the median wealth of Black families was about \\$17,150, compared with about \\$171,000 for white families.\n\nWhich claim do these figures best support together?',
    options: ['The wealth gap closed as soon as more Black adults finished college.', 'Most Black adults held a college degree by the end of the 2010s.', 'Black and white families held about the same wealth by 2016.', 'Educational gains grew alongside a wide wealth gap that earlier discrimination helped create.'],
    correctIndex: 3,
    explanation: 'Degree holding rose, yet the median white family held about ten times the wealth of the median Black family, because wealth passes across generations and earlier housing and job discrimination limited what Black families could build. Twenty-three percent is not a majority.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasci-ent-1b',
    question: 'Which work best fits the concept of Afrofuturism?',
    options: ['A film imagining an uncolonized African nation', 'A documentary that records the 1963 March on Washington', 'A biography of Jackie Robinson\'s first season in the major leagues', 'A history of the Great Migration based on census records'],
    correctIndex: 0,
    explanation: 'Afrofuturism reimagines Black pasts and futures through science fiction and technology, as Black Panther (2018) does with Wakanda. The other works record or narrate real history.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes: Breaking Barriers in Sports, Science and Medicine
  {
    id: 'aasci-ent-2a',
    question: 'Barred from the American Medical Association, Black physicians founded the National Medical Association; barred from white leagues, Black ballplayers built the Negro leagues. Both cases best illustrate',
    options: ['federal laws that required separate professional groups for each race', 'the refusal of Black professionals to join integrated groups when invited', 'excluded communities creating institutions of their own to meet needs', 'a preference for competition abroad rather than inside the United States'],
    correctIndex: 2,
    explanation: 'Exclusion led Black communities to create parallel institutions, and individuals such as Jackie Robinson (1947) and Mae Jemison (1992) later broke barriers in institutions that had shut them out. No federal law required separate groups.',
    partNumber: 2,
    partTitle: 'Key Processes: Breaking Barriers in Sports, Science and Medicine',
  },
  {
    id: 'aasci-ent-2b',
    question: 'Which statement best compares Muhammad Ali\'s refusal of military induction in 1967 with Colin Kaepernick\'s kneeling during the national anthem in 2016?',
    options: ['Each acted on orders from the league or the team that employed him.', 'Each used his fame to protest injustice, facing sharp criticism.', 'Each protested the military draft for the war in Vietnam.', 'Each took place at a Negro league game before integration.'],
    correctIndex: 1,
    explanation: 'Ali cited his faith and racism at home, and Kaepernick protested police brutality; both turned their fame into a stage for protest and drew strong reactions. Only Ali refused the draft.',
    partNumber: 2,
    partTitle: 'Key Processes: Breaking Barriers in Sports, Science and Medicine',
  },
  // Part 3: Comparing Cases: Black Political Representation after the Voting Rights Act
  {
    id: 'aasci-ent-3a',
    question: 'Which statement correctly classifies how these leaders reached high office?',
    options: ['Powell and Rice were appointed by a president, while Obama and Harris were elected nationally.', 'Rice and Powell were elected nationally, while Chisholm was appointed to Congress.', 'Obama was appointed by Congress, while Chisholm won a national election.', 'Harris was appointed to her office, while Rice won a statewide election.'],
    correctIndex: 0,
    explanation: 'Secretaries of state are nominated by the president and confirmed by the Senate, so Powell (2001) and Rice were appointed; Obama (2008) and Harris (2020) won national elections, and Chisholm won a House seat in 1968.',
    partNumber: 3,
    partTitle: 'Comparing Cases: Black Political Representation after the Voting Rights Act',
  },
  {
    id: 'aasci-ent-3b',
    question: 'Black elected officials in the United States rose from about 1,500 in 1970 to about 9,000 in 2006. What is the most important limitation of this count as evidence of Black political power?',
    options: ['It leaves out every official elected in the Southern states.', 'It includes appointed officials such as secretaries of state.', 'It shows only the years before the Voting Rights Act passed.', 'It measures seats held, not the influence they carried.'],
    correctIndex: 3,
    explanation: 'A count shows representation, not how much power each official held or what policies changed. The figures come after the 1965 act, which helped produce the rise.',
    partNumber: 3,
    partTitle: 'Comparing Cases: Black Political Representation after the Voting Rights Act',
  },
  // Part 4: Connections: Reading the Data on Wealth, Housing and Education
  {
    id: 'aasci-ent-4a',
    question: 'Median family net worth, 2022 (Federal Reserve): white non-Hispanic families, about \\$285,000; Black non-Hispanic families, about \\$44,900.\n\nThe Black median was roughly what share of the white median?',
    options: ['About 6 percent of the white median', 'About 16 percent of the white median', 'About 45 percent of the white median', 'About 60 percent of the white median'],
    correctIndex: 1,
    explanation: '44,900 ÷ 285,000 ≈ 0.16, so the median Black family held about one-sixth the net worth of the median white family. Equivalently, the white median was about 6.3 times the Black median.',
    partNumber: 4,
    partTitle: 'Connections: Reading the Data on Wealth, Housing and Education',
  },
  {
    id: 'aasci-ent-4b',
    question: 'Why does the Federal Reserve\'s wealth table report medians rather than relying only on means (averages)?',
    options: ['Medians include debts, while means count only assets.', 'Medians are required by law for all federal surveys.', 'A few very rich families pull the mean upward, so the median better shows the typical family.', 'Means cannot be computed for groups of different sizes.'],
    correctIndex: 2,
    explanation: 'Because wealth is very unevenly spread, a handful of rich families can raise a group\'s mean far above what most families hold; the median, the middle family, is the better measure of the typical family. Both measures count assets minus debts.',
    partNumber: 4,
    partTitle: 'Connections: Reading the Data on Wealth, Housing and Education',
  },
  // Part 5: Continuity & Change: A Changing Black America
  {
    id: 'aasci-ent-5a',
    question: 'A Nigerian-born nurse in Houston describes herself as both Nigerian American and Black. According to the course framework, her self-description best illustrates',
    options: ['"Black" as a unifying term spanning many ancestries', 'a rejection of any shared identity with African Americans', 'a legal category for Black immigrants set by the Immigration Act of 1990', 'the decline of immigration from Africa after 2000'],
    correctIndex: 0,
    explanation: 'The framework describes "Black" as a term that unites descendants of people enslaved in the United States, recent immigrants who may also identify by nationality, and multiracial people. Black immigration from Africa grew after 2000.',
    partNumber: 5,
    partTitle: 'Continuity & Change: A Changing Black America',
  },
  {
    id: 'aasci-ent-5b',
    question: 'Hip hop emerged at Bronx block parties in the 1970s, in neighborhoods hit by deindustrialization and disinvestment. Which statement best connects hip hop to an earlier tradition?',
    options: ['Like Négritude poets, early rappers wrote mainly in French for listeners in Africa.', 'Like the Fisk Jubilee Singers, early rappers toured Europe to fund a college.', 'Like spirituals, hip hop began inside white-led churches in the rural South.', 'Like Black Arts writers, hip hop artists made work that commented on conditions in Black communities.'],
    correctIndex: 3,
    explanation: 'The framework links hip hop to the Black Arts Movement and Black Power, and songs such as "The Message" (1982) described urban poverty and pressure. The other comparisons misstate where and how hip hop began.',
    partNumber: 5,
    partTitle: 'Continuity & Change: A Changing Black America',
  },
  // Part 6: Source Workshop: Portraits, Data and Protest
  {
    id: 'aasci-ent-6a',
    question: 'In her 2018 portrait of Michelle Obama for the National Portrait Gallery, Amy Sherald painted the subject\'s skin in shades of gray, as she does in her other work. This choice most likely serves to',
    options: ['match the colors of the gallery\'s older presidential portraits', 'imitate a black-and-white photograph taken at the White House', 'set aside skin color as the defining feature', 'show that the portrait was left unfinished'],
    correctIndex: 2,
    explanation: 'Sherald\'s signature gray skin tones keep viewers from reading her subjects chiefly through skin color, directing attention to the person, pose and clothing. The portrait was finished and unveiled in 2018.',
    partNumber: 6,
    partTitle: 'Source Workshop: Portraits, Data and Protest',
  },
  {
    id: 'aasci-ent-6b',
    question: 'Which statement best describes a change between the 1968 Olympic medal-stand protest by Tommie Smith and John Carlos and the NFL kneeling protests of 2016–2017?',
    options: ['The later protests used violence, unlike the peaceful gesture of 1968.', 'The later protests spread across teams and sports instead of being one act.', 'The later protests were sponsored by the league to promote national unity.', 'The later protests targeted the military draft rather than police brutality.'],
    correctIndex: 1,
    explanation: 'Both were nonviolent protests staged during a national ceremony, which is the continuity; what changed was scale, as kneeling spread across teams and into other sports. The NFL did not sponsor the protests, and they addressed police brutality.',
    partNumber: 6,
    partTitle: 'Source Workshop: Portraits, Data and Protest',
  },
  // Part 7: AP Review: Topics 4.15–4.21 in Synthesis
  {
    id: 'aasci-ent-7a',
    question: 'Which earlier development best helps explain the racial wealth gap shown in the 2016 and 2022 data?',
    options: ['The founding of the Negro leagues in the years after the Civil War', 'The Americans with Disabilities Act passed in 1990', 'The election of Black mayors in several Northern cities after 1967', 'Federal housing policy and redlining that limited home equity'],
    correctIndex: 3,
    explanation: 'Home equity is most families\' largest asset, and HOLC grading, FHA underwriting and unequal G.I. Bill lending kept many Black families from building and passing it down. The other developments do not explain wealth accumulation.',
    partNumber: 7,
    partTitle: 'AP Review: Topics 4.15–4.21 in Synthesis',
  },
  {
    id: 'aasci-ent-7b',
    question: 'According to the course framework, the roots of Afrofuturism reach back to which earlier figures?',
    options: ['Wheatley and Banneker', 'Booker T. Washington and George Washington Carver at Tuskegee', 'Ida B. Wells and Mary Church Terrell in the women\'s clubs', 'Jackie Robinson and Jesse Owens in professional sports'],
    correctIndex: 0,
    explanation: 'The framework names Phillis Wheatley\'s visions of freedom and Benjamin Banneker\'s almanac, the work of a Black astronomer, as early examples of the imaginative tradition Afrofuturism draws on.',
    partNumber: 7,
    partTitle: 'AP Review: Topics 4.15–4.21 in Synthesis',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes: Breaking Barriers in Sports, Science and Medicine' },
    { partNumber: 3, partTitle: 'Comparing Cases: Black Political Representation after the Voting Rights Act' },
    { partNumber: 4, partTitle: 'Connections: Reading the Data on Wealth, Housing and Education' },
    { partNumber: 5, partTitle: 'Continuity & Change: A Changing Black America' },
    { partNumber: 6, partTitle: 'Source Workshop: Portraits, Data and Protest' },
    { partNumber: 7, partTitle: 'AP Review: Topics 4.15–4.21 in Synthesis' },
  ]
}
