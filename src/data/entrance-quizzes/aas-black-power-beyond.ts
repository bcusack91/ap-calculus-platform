/**
 * Entrance Quiz — Black Power & Beyond (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasbpb-ent-1a',
    question: 'In 1966 SNCC organizers argued that the Black majority of Lowndes County, Alabama, should elect its own sheriff, school board and tax assessor. This argument best reflects which meaning of "Black Power"?',
    options: ['Armed revolution as the only path to freedom', 'Self-determination through political control of their own communities', 'Integration through coalitions led by white liberals', 'Emigration to build a new nation in West Africa'],
    correctIndex: 1,
    explanation: 'For SNCC, Black Power meant that Black majorities should hold local offices and control the institutions that governed them. It did not mean emigration, and it rejected dependence on white-led coalitions.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasbpb-ent-1b',
    question: 'Which set of Malcolm X\'s late ideas did Black Power activists take up after his death in 1965?',
    options: ['Nonviolence, integration and alliance with the Democratic Party', 'The Nation of Islam\'s doctrine, dietary laws and ban on voting', 'Emigration, a Black Star Line and a homeland in Liberia', 'Self-determination, self-defense and ties to African liberation'],
    correctIndex: 3,
    explanation: 'Activists adopted Malcolm X\'s call for Black control of Black communities, his defense of self-defense and his link between Black Americans and African and Asian liberation. They did not take up the Nation of Islam\'s religion, which he had left in 1964.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes: How the Movement Turned to Black Power, 1964–1968
  {
    id: 'aasbpb-ent-2a',
    question: 'In a city, banks, schools and police each follow routine rules that never mention race, yet Black neighborhoods end up with fewer home loans, older schools and more arrests. Carmichael and Hamilton\'s Black Power (1967) would call this',
    options: ['institutional racism', 'individual racism shown in open acts of hatred', 'internal migration caused by job losses in the North', 'cultural nationalism built on African-centered values'],
    correctIndex: 0,
    explanation: 'Institutional racism works through the ordinary operation of established institutions and harms more people than open individual acts, though it is less visible. The other terms describe different ideas.',
    partNumber: 2,
    partTitle: 'Key Processes: How the Movement Turned to Black Power, 1964–1968',
  },
  {
    id: 'aasbpb-ent-2b',
    question: 'Black Power writers and the mostly white, moderate Kerner Commission reached a similar diagnosis of the urban crisis in 1967–68. What was it?',
    options: ['Outside agitators had planned the uprisings in advance.', 'Civil rights laws had already closed the racial gap in jobs.', 'Institutions were to blame, not only individual prejudice.', 'Black Power rhetoric was the main cause of the violence.'],
    correctIndex: 2,
    explanation: 'Carmichael and Hamilton described institutional racism, and the commission concluded that white institutions created and maintained the ghetto; it found no conspiracy behind the uprisings. Many politicians, by contrast, blamed Black Power rhetoric.',
    partNumber: 2,
    partTitle: 'Key Processes: How the Movement Turned to Black Power, 1964–1968',
  },
  // Part 3: Comparing Cases: Panthers, US Organization, RNA and the League
  {
    id: 'aasbpb-ent-3a',
    question: 'Which statement accurately distinguishes the US Organization from the Black Panther Party?',
    options: ['US built alliances with Puerto Rican and white radicals, while the Panthers refused all allies.', 'US organized wildcat strikes in Detroit auto plants, while the Panthers worked on campuses.', 'US claimed five Southern states as a nation, while the Panthers sought only local office.', 'US put African-centered cultural renewal first, while the Panthers put economic and political change first.'],
    correctIndex: 3,
    explanation: 'Karenga\'s US Organization held that culture had to be rebuilt first and created Kwanzaa, while the Panthers pursued self-defense, survival programs and revolutionary socialism. The Panthers, not US, built the Rainbow Coalition, and the RNA and the League made the land claim and the plant organizing.',
    partNumber: 3,
    partTitle: 'Comparing Cases: Panthers, US Organization, RNA and the League',
  },
  {
    id: 'aasbpb-ent-3b',
    question: 'The Republic of New Afrika differed from both the Black Panther Party and the League of Revolutionary Black Workers mainly in seeking',
    options: ['control of auto plants through Black workers\' strikes', 'a separate nation on its own land', 'free breakfasts and clinics run in city neighborhoods', 'Black Studies programs at public universities'],
    correctIndex: 1,
    explanation: 'The RNA claimed Mississippi, Louisiana, Alabama, Georgia and South Carolina as national territory, while the Panthers and the League sought power where Black people already lived and worked.',
    partNumber: 3,
    partTitle: 'Comparing Cases: Panthers, US Organization, RNA and the League',
  },
  // Part 4: Connections: Black Arts, Black Studies and the World
  {
    id: 'aasbpb-ent-4a',
    question: 'Striking students at San Francisco State in 1968–69 demanded Black history courses and also a real say in hiring and running the new program. This second demand applied which Black Power idea?',
    options: ['Integration of white faculties', 'Emigration to African universities', 'Community control of institutions', 'Federal funding of all colleges'],
    correctIndex: 2,
    explanation: 'Black Studies carried the demand for community control into the university: Black students and faculty should help decide what was taught and by whom. The strike won a Department of Black Studies and a School of Ethnic Studies.',
    partNumber: 4,
    partTitle: 'Connections: Black Arts, Black Studies and the World',
  },
  {
    id: 'aasbpb-ent-4b',
    question: 'Which development best shows Black Power internationalism building on an older tradition?',
    options: ['The 1974 Pan-African Congress continued a series that Du Bois had led.', 'The 1967 Wall of Respect honored Black heroes on a Chicago building.', 'The 1969 Cornell occupation won an Africana Studies center.', 'The 1971 founding of the Congressional Black Caucus organized Black lawmakers.'],
    correctIndex: 0,
    explanation: 'Black Americans, including SNCC veterans, joined Africans and Caribbeans in Tanzania in 1974, renewing the congresses Du Bois had organized after World War I in a new anticolonial and socialist language. The other options are domestic developments.',
    partNumber: 4,
    partTitle: 'Connections: Black Arts, Black Studies and the World',
  },
  // Part 5: Continuity & Change, 1967–1980: Repression, Women's Leadership and the Turn to the Ballot
  {
    id: 'aasbpb-ent-5a',
    question: 'A student argues that the Black Panther Party declined in the 1970s solely because of FBI repression. Which evidence best qualifies this claim?',
    options: ['The FBI formally ended its counterintelligence program in April 1971.', 'Newton\'s 1971 expulsion of Cleaver\'s faction also weakened the organization.', 'Fred Hampton was killed in a Chicago police raid in December 1969.', 'The Church Committee called the FBI\'s program a vigilante operation.'],
    correctIndex: 1,
    explanation: 'Historians also point to internal divisions, leaders\' deaths, imprisonment and exile, and the cost of constant legal defense, though the FBI encouraged the Newton–Cleaver split with forged letters. The other options are evidence of repression itself.',
    partNumber: 5,
    partTitle: 'Continuity & Change, 1967–1980: Repression, Women\'s Leadership and the Turn to the Ballot',
  },
  {
    id: 'aasbpb-ent-5b',
    question: 'The number of Black elected officials nationwide rose from roughly 1,500 in 1970 to nearly 5,000 by 1980. Which pair of factors best explains this rise?',
    options: ['The end of the FBI\'s covert program and the merger of SNCC with the Panthers', 'The Kerner Report and federal troops posted in Northern cities', 'New Black parties replacing the Democrats across the South', 'The Voting Rights Act and growing Black urban majorities'],
    correctIndex: 3,
    explanation: 'The 1965 act opened Southern ballots, and Black population growth in cities let organized voters win offices, from Stokes and Hatcher in 1967 to Jackson and Young in 1973. Most officeholders stayed Democrats rather than building a separate party.',
    partNumber: 5,
    partTitle: 'Continuity & Change, 1967–1980: Repression, Women\'s Leadership and the Turn to the Ballot',
  },
  // Part 6: Source Workshop: The Kerner Report, the Mexico City Podium and a Document Set
  // source: original
  {
    id: 'aasbpb-ent-6a',
    question: 'The following description, written for this question, summarizes a visual source: a 1969 photograph, likely taken for the Party\'s newspaper, shows smiling children eating breakfast served by Panther volunteers under a poster of Huey Newton. What is the most important limitation of this photograph as evidence about the Panthers?',
    options: ['Its makers chose it to show community service, so it omits other activities.', 'It was staged by FBI agents to make the Party look harmless to the wider public.', 'It shows a program the Panthers never actually ran in Oakland.', 'It was made decades later for a museum exhibit on the 1960s.'],
    correctIndex: 0,
    explanation: 'A photograph made for the Party\'s own paper served its purpose of presenting survival programs, so it cannot show armed patrols, internal conflicts or police confrontations. The breakfast program was real and began in Oakland in 1969.',
    partNumber: 6,
    partTitle: 'Source Workshop: The Kerner Report, the Mexico City Podium and a Document Set',
  },
  {
    id: 'aasbpb-ent-6b',
    question: 'Malcolm X gave "The Ballot or the Bullet" in Cleveland in April 1964, an election year, to a largely Black audience. This context best explains his emphasis on',
    options: ['joining the Nation of Islam\'s long-standing ban on political participation', 'moving Black families out of Northern cities to rural farms', 'using the vote as a bloc to control Black communities\' politics', 'supporting the Republican nominee in the coming election'],
    correctIndex: 2,
    explanation: 'Speaking in an election year, Malcolm X argued that Black voters should control the politics and politicians of their own communities, and he widened the struggle to human rights. He had just left the Nation of Islam, which discouraged political participation.',
    partNumber: 6,
    partTitle: 'Source Workshop: The Kerner Report, the Mexico City Podium and a Document Set',
  },
  // Part 7: AP Review: Black Power, 1964–1980
  {
    id: 'aasbpb-ent-7a',
    question: 'Which pairing of a federal body with its subject is accurate?',
    options: ['Kerner Commission: FBI surveillance of the Panthers; Church Committee: the 1967 uprisings', 'Kerner Commission: Black Studies strikes; Church Committee: the Olympic protest', 'Kerner Commission: voting rights in the South; Church Committee: urban housing', 'Kerner Commission: causes of the 1967 uprisings; Church Committee: FBI spying abuses'],
    correctIndex: 3,
    explanation: 'Johnson appointed the Kerner Commission in 1967 to explain the uprisings; the Senate\'s Church Committee investigated intelligence abuses, including COINTELPRO, in 1975–76. Confusing the two is a common error.',
    partNumber: 7,
    partTitle: 'AP Review: Black Power, 1964–1980',
  },
  {
    id: 'aasbpb-ent-7b',
    question: 'The Panthers\' free breakfasts, clinics and community school continued which older tradition in Black communities?',
    options: ['Mutual aid', 'Armed revolt against slavery', 'Emigration to West Africa', 'Gradual emancipation by state law'],
    correctIndex: 0,
    explanation: 'From benevolent societies and church relief to club women\'s nurseries, Black communities had long met needs that white institutions ignored; the survival programs carried that tradition forward as organizing tools.',
    partNumber: 7,
    partTitle: 'AP Review: Black Power, 1964–1980',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes: How the Movement Turned to Black Power, 1964–1968' },
    { partNumber: 3, partTitle: 'Comparing Cases: Panthers, US Organization, RNA and the League' },
    { partNumber: 4, partTitle: 'Connections: Black Arts, Black Studies and the World' },
    { partNumber: 5, partTitle: 'Continuity & Change, 1967–1980: Repression, Women\'s Leadership and the Turn to the Ballot' },
    { partNumber: 6, partTitle: 'Source Workshop: The Kerner Report, the Mexico City Podium and a Document Set' },
    { partNumber: 7, partTitle: 'AP Review: Black Power, 1964–1980' },
  ]
}
