/**
 * Entrance Quiz — The Practice of Freedom (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aaspf-ent-1a',
    question: 'In 1920 a Black-owned weekly reports lynchings that white dailies ignore, runs job and housing ads for migrants, and urges readers to boycott a store that will not hire Black clerks. This paper best illustrates which idea?',
    options: ['The Black press both covered the news and organized a national Black public for action.', 'Black papers mainly reprinted wire stories from white dailies for local readers.', 'Black papers avoided politics so that advertisers would keep buying space.', 'Federal agencies ran Black papers to explain government policy to Black voters.'],
    correctIndex: 0,
    explanation: 'Reporting what white papers ignored, serving migrants and mobilizing readers made the Black press a political institution as well as a news source. It was Black-owned and openly political.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aaspf-ent-1b',
    question: 'Madam C. J. Walker\'s hair-care company is significant in this period mainly because it',
    options: ['won federal contracts to supply Black army units during World War I', 'was the first Black-owned company traded on a national stock exchange', 'gave thousands of Black women income outside domestic service', 'merged with North Carolina Mutual to form a national Black bank'],
    correctIndex: 2,
    explanation: 'Walker built her business on thousands of trained agents, mostly Black women, who earned their own income and were urged to give to community causes. Its significance lies in that network, not in contested claims about "firsts."',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: The Black Church: Independence, Worship and Public Life
  {
    id: 'aaspf-ent-2a',
    question: 'In 1867 a congregation of freedpeople in Georgia buys a lot, elects its own deacons and votes to replace its pastor. These actions matter historically mainly because they',
    options: ['followed rules set by white Methodist bishops in the North', 'gave freedpeople the self-rule over property that slavery denied', 'were required of every church by the Reconstruction Acts of 1867', 'showed that freedpeople preferred white ministers to Black ones'],
    correctIndex: 1,
    explanation: 'Owning property, electing officers and choosing ministers were forms of self-governance that slavery had denied. Congress imposed no such rules on churches, and the pattern was a move away from white control.',
    partNumber: 2,
    partTitle: 'The Black Church: Independence, Worship and Public Life',
  },
  {
    id: 'aaspf-ent-2b',
    question: 'Which statement describes a continuity in Black religious life from Reconstruction through the 1930s?',
    options: ['The AME Church remained the only Black denomination in the country.', 'Black worship stayed confined to rural Southern congregations throughout.', 'White denominations governed most Black congregations after 1900.', 'Churches old and new kept offering community and mutual aid to members.'],
    correctIndex: 3,
    explanation: 'Even as migration produced storefront, Pentecostal and Muslim alternatives, congregations continued to provide community, mutual aid and leadership. The variety of new groups was the change, not the continuity.',
    partNumber: 2,
    partTitle: 'The Black Church: Independence, Worship and Public Life',
  },
  // Part 3: Schooling Freedom: Freedpeople's Schools, HBCUs and Rosenwald Schools
  {
    id: 'aaspf-ent-3a',
    question: 'Approximate shares of Rosenwald school building costs: public tax funds 64%; Black communities 17%; the Rosenwald Fund 15%; white private donors 4%. For a school that cost \\$3,000, which statement is accurate?',
    options: ['The Rosenwald Fund paid about \\$1,920, most of the total cost.', 'White private donors gave about \\$510, the second-largest share.', 'Black communities gave about \\$510, more than the Fund\'s \\$450.', 'Black communities gave about \\$450, less than the Fund\'s \\$510.'],
    correctIndex: 2,
    explanation: '17% of \\$3,000 is \\$510 and 15% is \\$450, so Black communities, many already paying school taxes, gave slightly more than the Fund. Public funds, not the Fund, paid the \\$1,920 share.',
    partNumber: 3,
    partTitle: 'Schooling Freedom: Freedpeople\'s Schools, HBCUs and Rosenwald Schools',
  },
  {
    id: 'aaspf-ent-3b',
    question: 'Fisk University was nearly bankrupt by 1871 when a student choir began touring the North and later Europe, singing spirituals and raising money to build Jubilee Hall. This episode is best used as evidence that',
    options: ['young colleges depended on creative fundraising that also spread Black sacred music abroad', 'Congress paid for most buildings at missionary colleges in the South', 'Fisk abandoned its liberal-arts course for industrial training', 'Black colleges refused gifts from audiences outside the South'],
    correctIndex: 0,
    explanation: 'The Fisk Jubilee Singers kept their college alive with concert tours and introduced the songs of enslaved people to concert halls abroad. Fisk was an AMA school with a liberal-arts curriculum, not a federally funded or industrial one.',
    partNumber: 3,
    partTitle: 'Schooling Freedom: Freedpeople\'s Schools, HBCUs and Rosenwald Schools',
  },
  // Part 4: Lifting as We Climb: Women's Clubs, Mutual Aid and Black Business
  {
    id: 'aaspf-ent-4a',
    question: 'Maggie Lena Walker\'s St. Luke Penny Savings Bank (1903) grew out of the Independent Order of St. Luke, a fraternal society that paid sickness and burial benefits. This path best illustrates',
    options: ['a federal program that chartered Black banks after the Civil War', 'a church rule requiring every congregation to open a savings bank', 'a white-owned bank opening a branch to serve Black depositors', 'pooled dues turning into capital for Black lending'],
    correctIndex: 3,
    explanation: 'Mutual aid societies linked into fraternal orders, and their pooled dues became capital for banks and insurers that lent to Black families excluded by white firms. No federal program or church rule created the bank.',
    partNumber: 4,
    partTitle: 'Lifting as We Climb: Women\'s Clubs, Mutual Aid and Black Business',
  },
  {
    id: 'aaspf-ent-4b',
    question: 'When white organizers asked Black women to march at the back of the 1913 suffrage parade in Washington, Ida B. Wells refused and joined the Illinois delegation in the line of march. Her action best illustrates',
    options: ['Black clubwomen\'s withdrawal from the campaign for women\'s votes', 'Black women challenging racism inside the suffrage movement and fighting for the vote', 'the National Association of Colored Women opposing the Nineteenth Amendment', 'white suffrage leaders\' strong support for Black women\'s equal place'],
    correctIndex: 1,
    explanation: 'Wells, who had founded Chicago\'s Alpha Suffrage Club that year, kept working for the vote while refusing a segregated place in the parade. Black clubwomen supported suffrage, and white leaders were the ones who tried to push them to the back.',
    partNumber: 4,
    partTitle: 'Lifting as We Climb: Women\'s Clubs, Mutual Aid and Black Business',
  },
  // Part 5: Organizing for Rights: The Black Press, the NAACP and the Legal Campaign (1890s–1950)
  // source: Ida B. Wells, Southern Horrors: Lynch Law in All Its Phases, 1892 ("Self-Help"); verbatim
  {
    id: 'aaspf-ent-5a',
    question: '"The people must know before they can act, and there is no educator to compare with the press. The Afro-American papers are the only ones which will print the truth, and they lack means to employ agents and detectives to get at the facts. The race must rally a mighty host to the support of their journals"\n— Ida B. Wells, Southern Horrors (1892)\n\nWells\'s argument best reflects which view?',
    options: ['Black journalism was a tool for change that needed its readers\' backing.', 'White dailies could be trusted to report lynchings if Black readers wrote in.', 'Federal investigators, not newspapers, should collect evidence on lynching.', 'Black journalists should avoid political topics to keep their readers safe.'],
    correctIndex: 0,
    explanation: 'Wells calls the press the great educator, says only Black papers will tell the truth, and asks readers to fund their investigations, treating the press as a political institution. She distrusts white papers rather than relying on them.',
    partNumber: 5,
    partTitle: 'Organizing for Rights: The Black Press, the NAACP and the Legal Campaign (1890s–1950)',
  },
  {
    id: 'aaspf-ent-5b',
    question: 'In Missouri ex rel. Gaines v. Canada (1938), the Supreme Court held that paying a Black student\'s tuition at an out-of-state law school did not satisfy equal protection. This ruling advanced the NAACP\'s strategy mainly because it',
    options: ['overturned Plessy v. Ferguson and ended school segregation nationwide', 'required Congress to fund new Black law schools in every Southern state', 'made segregation costlier by forcing states to offer law school at home', 'ended the NAACP\'s need to bring further cases on graduate schools'],
    correctIndex: 2,
    explanation: 'The plan was to prove that "separate but equal" was never equal; Gaines made states either build real in-state schools or admit Black students, raising the price of segregation. Plessy stood until Brown in 1954, and Sweatt and McLaurin followed in 1950.',
    partNumber: 5,
    partTitle: 'Organizing for Rights: The Black Press, the NAACP and the Legal Campaign (1890s–1950)',
  },
  // Part 6: Source Workshop: Institutions in Their Own Words
  // source: original
  {
    id: 'aaspf-ent-6a',
    question: 'The following description, written for this question, summarizes a kind of visual source: a photograph a Black college chose for its 1900 fundraising brochure shows neatly dressed students at work in a well-equipped chemistry laboratory. What is the most important limitation of this photograph as evidence of Black education in 1900?',
    options: ['It was taken by a European photographer who had never visited the American South.', 'It shows only white instructors, so it reveals nothing about Black faculty at the time.', 'It is a painting made decades later, so it cannot show conditions in 1900 at all.', 'It was picked to attract donors, so it may not represent typical rural schooling.'],
    correctIndex: 3,
    explanation: 'A fundraising brochure aims to impress donors, so its images highlight a college\'s best facilities, while most rural Black children in 1900 attended underfunded schools for a few months a year. The description says nothing about who took the photograph or about white instructors.',
    partNumber: 6,
    partTitle: 'Source Workshop: Institutions in Their Own Words',
  },
  {
    id: 'aaspf-ent-6b',
    question: 'Carter G. Woodson set Negro History Week (1926) in the week of Douglass\'s and Lincoln\'s birthdays, and it spread through churches, schools, clubs and Black newspapers. This method shows that Woodson',
    options: ['relied on federal schools to require the new course of study', 'used existing community networks to reach a mass audience', 'aimed the week mainly at white scholars in Europe', 'meant the week as a fundraiser for NAACP lawsuits'],
    correctIndex: 1,
    explanation: 'Woodson\'s Association used the networks Black communities had already built to teach Black history widely, answering schooling that left it out. It was not a federal mandate, a European project or a legal fundraiser.',
    partNumber: 6,
    partTitle: 'Source Workshop: Institutions in Their Own Words',
  },
  // Part 7: Synthesis and AP Review: Institutions as Infrastructure
  {
    id: 'aaspf-ent-7a',
    question: 'Rosa Parks was secretary of Montgomery\'s NAACP branch; the Women\'s Political Council, whose members taught at Alabama State College, printed the first boycott leaflets there; and Black churches hosted mass meetings. Together these facts best support which claim?',
    options: ['The Montgomery boycott was planned and paid for by federal officials.', 'The Montgomery boycott began with no organizations behind it.', 'The Montgomery bus boycott drew on institutions built over many decades.', 'The Montgomery boycott was led mainly by Northern white allies.'],
    correctIndex: 2,
    explanation: 'An NAACP branch, a teachers\' council at a state HBCU and the churches supplied the leaders, printing and meeting places, showing institutions acting as infrastructure for protest. The boycott was local and Black-led.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review: Institutions as Infrastructure',
  },
  {
    id: 'aaspf-ent-7b',
    question: 'Which pairing correctly matches an institution with one way it sustained daily life and one way it pushed for rights?',
    options: ['Black press: a national public; exposing lynching', 'Rosenwald schools: bank loans; voter registration drives', 'Women\'s clubs: federal pensions; armed defense units', 'Negro National League: church schools; court cases'],
    correctIndex: 0,
    explanation: 'Black papers created a national Black public and campaigned against lynching. Rosenwald schools offered schooling, not loans; clubs ran nurseries and homes and campaigned for suffrage; the Negro National League offered baseball and jobs.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review: Institutions as Infrastructure',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'The Black Church: Independence, Worship and Public Life' },
    { partNumber: 3, partTitle: 'Schooling Freedom: Freedpeople\'s Schools, HBCUs and Rosenwald Schools' },
    { partNumber: 4, partTitle: 'Lifting as We Climb: Women\'s Clubs, Mutual Aid and Black Business' },
    { partNumber: 5, partTitle: 'Organizing for Rights: The Black Press, the NAACP and the Legal Campaign (1890s–1950)' },
    { partNumber: 6, partTitle: 'Source Workshop: Institutions in Their Own Words' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review: Institutions as Infrastructure' },
  ]
}
