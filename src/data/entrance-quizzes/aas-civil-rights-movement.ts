/**
 * Entrance Quiz — The Civil Rights Movement (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aascrm-ent-1a',
    question: 'Which example best shows litigation and nonviolent direct action working together to win a victory?',
    options: ['Eisenhower sent the 101st Airborne to Little Rock after a governor defied a court order.', 'The Southern Manifesto pledged "all lawful means" to reverse the Brown decision.', 'The Montgomery boycott kept up pressure for a year, and Browder v. Gayle won the ruling that integrated the buses.', 'The Civil Rights Act of 1957 created a commission to study voting.'],
    correctIndex: 2,
    explanation: 'In Montgomery the boycott built the movement and drew national attention, while Fred Gray\'s federal suit produced the legal ruling. Little Rock shows federal enforcement, and the Manifesto shows resistance.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aascrm-ent-1b',
    question: 'Which evidence best challenges a history of the movement that centers on Martin Luther King Jr. alone?',
    options: ['Local women planned the Montgomery boycott before King led it.', 'King won the Nobel Peace Prize in 1964 for his leadership.', 'King served as the first president of the SCLC in 1957.', 'King gave the closing address at the 1963 March on Washington.'],
    correctIndex: 0,
    explanation: 'Jo Ann Robinson\'s Women\'s Political Council had warned of a boycott in 1954 and printed the leaflets after Parks\'s arrest; King was chosen to lead the MIA only afterward. The other options describe King\'s own prominence.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Law and Resistance: From Brown to Little Rock (1950–1957)
  // source: Brown v. Board of Education, 347 U.S. 483 (1954), opinion of Chief Justice Earl Warren (National Archives transcript); verbatim
  {
    id: 'aascrm-ent-2a',
    question: '"We come then to the question presented: Does segregation of children in public schools solely on the basis of race, even though the physical facilities and other \'tangible\' factors may be equal, deprive the children of the minority group of equal educational opportunities? We believe that it does."\n— Brown v. Board of Education (1954)\n\nThe Court\'s answer rejected which earlier legal principle?',
    options: ['Dred Scott\'s holding that Black Americans could never be citizens', 'Cruikshank\'s holding that equal protection bound only the states', 'The Civil Rights Cases\' holding that private facilities could exclude Black customers', 'Plessy\'s holding that separate could be equal'],
    correctIndex: 3,
    explanation: 'By ruling that segregation harms children even when tangible factors are equal, the Court held that "separate but equal" has no place in public education, overturning Plessy\'s logic for schools. The other holdings concerned citizenship, state action and private businesses.',
    partNumber: 2,
    partTitle: 'Law and Resistance: From Brown to Little Rock (1950–1957)',
  },
  {
    id: 'aascrm-ent-2b',
    question: 'The Southern Manifesto (1956), signed by 101 members of Congress, and Prince Edward County\'s decision to close its public schools from 1959 to 1964 together show that massive resistance',
    options: ['ended once Eisenhower sent troops to enforce desegregation at Little Rock', 'was led by officials and civic leaders using legal tools, not only the Klan', 'was confined to a few rural counties that defied their own state governments', 'relied mainly on night-riding violence by groups such as the Ku Klux Klan'],
    correctIndex: 1,
    explanation: 'Members of Congress, governors, school boards and Citizens\' Councils used pledges, school closings, pupil placement laws and economic pressure to delay Brown. Prince Edward\'s schools stayed closed until Griffin v. County School Board (1964), long after Little Rock.',
    partNumber: 2,
    partTitle: 'Law and Resistance: From Brown to Little Rock (1950–1957)',
  },
  // Part 3: Mass Nonviolence Takes Shape: Montgomery, the Sit-ins and the Freedom Rides (1955–1962)
  {
    id: 'aascrm-ent-3a',
    question: 'In James Lawson\'s Nashville workshops of 1959–60, students role-played being cursed, spat on and pulled from lunch-counter stools. The main purpose of this training was to',
    options: ['build discipline to absorb attacks without hitting back', 'prepare students to defend themselves with force if police failed to act', 'teach students to file lawsuits against segregated stores in federal court', 'help students avoid arrest by leaving whenever police arrived on the scene'],
    correctIndex: 0,
    explanation: 'Nonviolent direct action was a learned skill: the workshops prepared students to stay nonviolent under abuse, which made the Nashville sit-ins effective. Arrest was an accepted cost, not something to avoid.',
    partNumber: 3,
    partTitle: 'Mass Nonviolence Takes Shape: Montgomery, the Sit-ins and the Freedom Rides (1955–1962)',
  },
  {
    id: 'aascrm-ent-3b',
    question: 'In 1961, mob attacks on the Freedom Riders in Alabama were followed by Robert Kennedy\'s request that the Interstate Commerce Commission issue rules ending segregation in bus terminals. This sequence best illustrates',
    options: ['the Kennedy administration\'s early plan to lead the movement against Jim Crow', 'the Supreme Court\'s refusal to rule on segregation in interstate travel', 'activists creating a crisis that pushed a reluctant federal government to act', 'Southern governors\' willingness to protect riders once the trips began'],
    correctIndex: 2,
    explanation: 'The administration wanted calm more than confrontation and acted only after public violence; the Court had already banned terminal segregation in Boynton (1960) without enforcement. Alabama officials did not protect the riders at first.',
    partNumber: 3,
    partTitle: 'Mass Nonviolence Takes Shape: Montgomery, the Sit-ins and the Freedom Rides (1955–1962)',
  },
  // Part 4: 1963–1964: Birmingham, the March on Washington and the Civil Rights Act
  // source: Civil Rights Act of 1964, Title II, Sec. 201(a) (National Archives transcript); verbatim
  {
    id: 'aascrm-ent-4a',
    question: '"All persons shall be entitled to the full and equal enjoyment of the goods, services, facilities, and privileges, advantages, and accommodations of any place of public accommodation, as defined in this section, without discrimination or segregation on the ground of race, color, religion, or national origin."\n— Civil Rights Act of 1964, Title II\n\nThis provision most directly outlawed',
    options: ['literacy tests used by registrars to block Black voters', 'school systems that kept Black and white pupils apart', 'hiring bias by private employers and labor unions', 'whites-only lunch counters and hotels'],
    correctIndex: 3,
    explanation: 'Title II banned discrimination in hotels, restaurants, theaters and similar businesses, ending legal Jim Crow in daily public life. Title VI, Title VII and the 1965 Voting Rights Act addressed school funding, jobs and literacy tests.',
    partNumber: 4,
    partTitle: '1963–1964: Birmingham, the March on Washington and the Civil Rights Act',
  },
  {
    id: 'aascrm-ent-4b',
    question: 'Organizers of Mississippi Freedom Summer (1964) openly debated their decision to recruit about 1,000 volunteers, most of them white Northern college students. Which reasoning lay behind the decision?',
    options: ['Federal law required white witnesses at every voter registration attempt.', 'The nation paid more attention to violence when white volunteers were at risk.', 'Local Black Mississippians had refused to take any part in voter registration.', 'White volunteers could register to vote in Mississippi on behalf of others.'],
    correctIndex: 1,
    explanation: 'Organizers argued that the presence of white students would draw national press and federal attention, as the disappearance of Chaney, Goodman and Schwerner later did. Local activists led the work, and no law required white witnesses.',
    partNumber: 4,
    partTitle: '1963–1964: Birmingham, the March on Washington and the Civil Rights Act',
  },
  // Part 5: Voting Rights and the Limits of Victory (1965–1968)
  {
    id: 'aascrm-ent-5a',
    question: 'Black voter registration in Mississippi rose from about 6.7% in 1964 to about 59.8% in 1967. One student writes that it "rose by about 53 points"; another writes that it "rose by about 793 percent." Which statement is accurate?',
    options: ['Only the first is correct, because percent change cannot be used for rates.', 'Only the second is correct, because points ignore the starting value.', 'Each is correct, since one measures the gap closed and one the relative growth.', 'Neither is correct, because registration estimates cannot be compared.'],
    correctIndex: 2,
    explanation: '59.8 − 6.7 = 53.1 percentage points, and 53.1 ÷ 6.7 ≈ 7.93, a 793% increase. Both describe the same change; percent change grows very large when the starting point is small.',
    partNumber: 5,
    partTitle: 'Voting Rights and the Limits of Victory (1965–1968)',
  },
  // source: Voting Rights Act of 1965, Sec. 2 (National Archives transcript); verbatim
  {
    id: 'aascrm-ent-5b',
    question: '"No voting qualification or prerequisite to voting, or standard, practice, or procedure shall be imposed or applied by any State or political subdivision to deny or abridge the right of any citizen of the United States to vote on account of race or color."\n— Voting Rights Act of 1965, Section 2\n\nThis section largely restates the 15th Amendment. What made the 1965 act more effective than the amendment had been?',
    options: ['It added federal examiners and preclearance to enforce the guarantee.', 'It gave Black Americans a right to vote that they had never held before.', 'It banned the poll tax in state elections across the whole country.', 'It required every Southern county to elect a share of Black officials.'],
    correctIndex: 0,
    explanation: 'The 15th Amendment had guaranteed the right since 1870; the VRA supplied machinery, suspending tests in covered areas, sending examiners and requiring federal approval of new voting rules. State poll taxes fell in Harper v. Virginia (1966).',
    partNumber: 5,
    partTitle: 'Voting Rights and the Limits of Victory (1965–1968)',
  },
  // Part 6: Source Workshop: Voices and Images of the Movement
  {
    id: 'aascrm-ent-6a',
    question: 'A historian wants to test the claim that press photographs of police dogs and fire hoses in Birmingham (May 1963) shifted national opinion. Which additional source would best corroborate the claim?',
    options: ['Bull Connor\'s own memoir explaining his orders that week', 'A list of the marchers arrested on May 2 and May 3', 'A map of downtown Birmingham\'s department stores in 1963', 'Polls and constituent letters to Congress in the weeks after the images ran'],
    correctIndex: 3,
    explanation: 'Evidence of public reaction after the photographs appeared is what can show a shift in opinion. Connor\'s memoir, arrest lists and a store map describe the campaign, not how the nation responded to it.',
    partNumber: 6,
    partTitle: 'Source Workshop: Voices and Images of the Movement',
  },
  {
    id: 'aascrm-ent-6b',
    question: 'Which statement best compares the voice of President Johnson\'s March 1965 address to Congress with Fannie Lou Hamer\'s August 1964 testimony to the Credentials Committee?',
    options: ['Both relied mainly on statistics about registration in the Deep South.', 'Johnson spoke in the language of law and national values, while Hamer drew on what had happened to her.', 'Hamer addressed Congress, while Johnson spoke to delegates at a party convention.', 'Both urged activists to stop protesting until federal courts acted.'],
    correctIndex: 1,
    explanation: 'Johnson framed voting rights as a national principle to press Congress, while Hamer\'s authority came from her own eviction and beating. Hamer spoke at the convention and Johnson to Congress, and neither asked protest to stop.',
    partNumber: 6,
    partTitle: 'Source Workshop: Voices and Images of the Movement',
  },
  // Part 7: Synthesis and AP Review
  {
    id: 'aascrm-ent-7a',
    question: 'Which pairing best shows a local protest campaign creating the pressure for a federal law?',
    options: ['Selma and the Voting Rights Act', 'The Albany campaign and the Civil Rights Act of 1957', 'The Greensboro sit-ins and Brown v. Board of Education', 'Little Rock and the Fair Housing Act of 1968'],
    correctIndex: 0,
    explanation: 'Bloody Sunday on March 7, 1965, was followed by Johnson\'s address on March 15 and the Voting Rights Act that August. The other pairs put the law before the protest or link unrelated events.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
  {
    id: 'aascrm-ent-7b',
    question: 'An essay argues that grassroots crises drove federal action. Which outside evidence would best support the qualification that activism without a visible crisis often won little federal help?',
    options: ['Birmingham, where images of dogs and hoses led to a national bill', 'Little Rock, where Eisenhower sent paratroopers to enforce a court order', 'Albany, where quiet mass arrests drew little national response at all', 'Selma, where televised violence was followed by a voting rights bill'],
    correctIndex: 2,
    explanation: 'In Albany, Police Chief Laurie Pritchett avoided beatings in front of reporters, and the campaign stalled without federal intervention. The other cases show crises that did prompt federal action.',
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
    { partNumber: 2, partTitle: 'Law and Resistance: From Brown to Little Rock (1950–1957)' },
    { partNumber: 3, partTitle: 'Mass Nonviolence Takes Shape: Montgomery, the Sit-ins and the Freedom Rides (1955–1962)' },
    { partNumber: 4, partTitle: '1963–1964: Birmingham, the March on Washington and the Civil Rights Act' },
    { partNumber: 5, partTitle: 'Voting Rights and the Limits of Victory (1965–1968)' },
    { partNumber: 6, partTitle: 'Source Workshop: Voices and Images of the Movement' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review' },
  ]
}
