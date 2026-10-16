/**
 * Entrance Quiz — Cold War & Civil Rights (AP US History)
 * 14 questions · 7 parts (2 per part). Built Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Origins of the Cold War (1945–1950)
  // source: Harry S. Truman, address to Congress (Truman Doctrine), March 12, 1947; verbatim
  {
    id: 'apushcwcr-ent-1a',
    question: '"I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures."\n— Harry S. Truman, address to Congress, March 12, 1947\n\nTruman first applied the policy in the excerpt by asking Congress to',
    options: ['fund an airlift of food and fuel into West Berlin', 'send combat troops to defend South Korea', 'provide aid to Greece and Turkey', 'pay for the postwar rebuilding of occupied Japan'],
    correctIndex: 2,
    explanation: 'The speech requested \\$400 million for Greece, then fighting a communist insurgency, and Turkey, under Soviet pressure. The Berlin airlift came in 1948 and the Korean War in 1950.',
    partNumber: 1,
    partTitle: 'Origins of the Cold War (1945–1950)',
  },
  {
    id: 'apushcwcr-ent-1b',
    question: 'Which policy best illustrates containment pursued through economic rather than military means?',
    options: ['The Marshall Plan\'s aid to rebuild Western Europe', 'The formation of the NATO alliance in 1949', 'The intervention in Korea under the United Nations flag', 'The development of the hydrogen bomb in the early 1950s'],
    correctIndex: 0,
    explanation: 'The Marshall Plan sent billions of dollars to rebuild Western European economies so that poverty would not push them toward communism. NATO, Korea and the hydrogen bomb were military tools of containment.',
    partNumber: 1,
    partTitle: 'Origins of the Cold War (1945–1950)',
  },
  // Part 2: The Cold War Heats Up (1950–1962)
  {
    id: 'apushcwcr-ent-2a',
    question: 'President Truman\'s decision to fire General Douglas MacArthur in 1951 most directly reflected',
    options: ['a plan to use atomic weapons against China', 'Senate demands to end the peacetime draft', 'a decision to withdraw from Korea at once', 'a commitment to keeping the war limited'],
    correctIndex: 3,
    explanation: 'MacArthur publicly pressed to widen the war into China, and Truman removed him to keep the war limited and assert the president\'s authority over the military. Truman rejected atomic escalation and kept fighting until the 1953 armistice.',
    partNumber: 2,
    partTitle: 'The Cold War Heats Up (1950–1962)',
  },
  {
    id: 'apushcwcr-ent-2b',
    question: 'Which development most directly followed the Cuban Missile Crisis and reflected a wish to reduce the risk of nuclear war?',
    options: ['A U.S. invasion of Cuba that removed Fidel Castro from power', 'The founding of NATO as a mutual-defense alliance in Europe', 'The Soviet launch of Sputnik, the first artificial satellite', 'A Washington–Moscow hotline and the 1963 Limited Test Ban Treaty'],
    correctIndex: 3,
    explanation: 'Having come close to war, the two sides set up direct communication and banned atmospheric tests in 1963. The United States pledged not to invade Cuba, NATO dated from 1949, and Sputnik was launched in 1957.',
    partNumber: 2,
    partTitle: 'The Cold War Heats Up (1950–1962)',
  },
  // Part 3: Civil Rights: Early Foundations (1945–1955)
  // source: Brown v. Board of Education of Topeka, 347 U.S. 483 (1954), opinion of Chief Justice Earl Warren; verbatim
  {
    id: 'apushcwcr-ent-3a',
    question: '"We conclude that, in the field of public education, the doctrine of \'separate but equal\' has no place. Separate educational facilities are inherently unequal."\n— Chief Justice Earl Warren, Brown v. Board of Education, 1954\n\nWhich development most directly shows the limits of the decision quoted?',
    options: ['Truman\'s 1948 executive order desegregating the armed forces', 'Jackie Robinson\'s first season with the Brooklyn Dodgers', 'Southern districts stalling under "all deliberate speed"', 'The founding of the NAACP\'s legal defense effort in the 1930s'],
    correctIndex: 2,
    explanation: 'The 1955 implementation ruling set no deadline, and many districts resisted for years, as at Little Rock in 1957. The other choices came before Brown and show change, not the decision\'s limits.',
    partNumber: 3,
    partTitle: 'Civil Rights: Early Foundations (1945–1955)',
  },
  {
    id: 'apushcwcr-ent-3b',
    question: 'In the late 1940s and 1950s, federal officials who supported civil rights reform for Cold War reasons most often argued that',
    options: ['integrated armed forces would cost far less to maintain', 'Soviet leaders had demanded desegregation in arms treaties', 'segregation hurt the U.S. image among newly independent nations', 'civil rights laws would allow Congress to end the military draft'],
    correctIndex: 2,
    explanation: 'Soviet propaganda highlighted Jim Crow, and officials feared that new nations in Africa and Asia would doubt American claims to lead the free world. The other arguments were not what linked civil rights to Cold War diplomacy.',
    partNumber: 3,
    partTitle: 'Civil Rights: Early Foundations (1945–1955)',
  },
  // Part 4: The Movement Peaks (1960–1965)
  // source: Civil Rights Act of 1964, Title II, Section 201(a); verbatim
  {
    id: 'apushcwcr-ent-4a',
    question: '"All persons shall be entitled to the full and equal enjoyment of the goods, services, facilities, privileges, advantages, and accommodations of any place of public accommodation, as defined in this section, without discrimination or segregation on the ground of race, color, religion, or national origin."\n— Civil Rights Act of 1964, Title II\n\nThis provision most directly answered which earlier protest campaign?',
    options: ['Sit-ins at whites-only lunch counters across the South', 'The march from Selma to Montgomery for voting rights', 'The free breakfast programs of the Black Panther Party', 'The Little Rock Nine\'s entry into Central High School'],
    correctIndex: 0,
    explanation: 'Beginning in Greensboro in 1960, sit-ins targeted segregated restaurants and stores, exactly the public accommodations Title II covered. Selma (1965) led to the Voting Rights Act, the Panthers came later, and Little Rock concerned schools.',
    partNumber: 4,
    partTitle: 'The Movement Peaks (1960–1965)',
  },
  {
    id: 'apushcwcr-ent-4b',
    question: 'Organizers of the Birmingham campaign (1963) and the Selma march (1965) expected that peaceful protest met by violent repression would',
    options: ['persuade Southern police officers to join the movement', 'lead the Soviet Union to impose trade sanctions on the South', 'force the Supreme Court to accept new school segregation cases', 'build national sympathy through television and push Congress'],
    correctIndex: 3,
    explanation: 'Televised images of dogs, fire hoses and the beatings on Bloody Sunday shocked viewers nationwide and helped pass the Civil Rights Act and the Voting Rights Act. Police did not change sides, and the other outcomes did not occur.',
    partNumber: 4,
    partTitle: 'The Movement Peaks (1960–1965)',
  },
  // Part 5: Cold War in the 1960s & the Vietnam War
  // source: Gulf of Tonkin Resolution (Public Law 88-408), August 1964; verbatim
  {
    id: 'apushcwcr-ent-5a',
    question: '"...the Congress approves and supports the determination of the President, as Commander in Chief, to take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression."\n— Gulf of Tonkin Resolution, August 1964\n\nWhich later law was most directly a response to the way presidents used this resolution?',
    options: ['The Civil Rights Act of 1964', 'The War Powers Act of 1973', 'The Immigration Act of 1965', 'The National Defense Education Act'],
    correctIndex: 1,
    explanation: 'Johnson used the resolution to send more than 500,000 troops without a declaration of war, and in 1973 Congress required presidents to report deployments and limited how long troops could stay without approval. The other laws dealt with civil rights, immigration and education.',
    partNumber: 5,
    partTitle: 'Cold War in the 1960s & the Vietnam War',
  },
  {
    id: 'apushcwcr-ent-5b',
    question: 'The building of the Berlin Wall (1961) and the Cuban Missile Crisis (1962) are best used together as evidence that',
    options: ['the Soviet Union had begun to withdraw from Eastern Europe', 'containment had been replaced by a policy of rollback', 'early-1960s crises stopped short of superpower combat', 'NATO had been dissolved after a quarrel among its members'],
    correctIndex: 2,
    explanation: 'In both crises the superpowers confronted each other directly yet avoided war, accepting the Wall and trading the missiles for a no-invasion pledge. Soviet control of Eastern Europe tightened, and containment and NATO both continued.',
    partNumber: 5,
    partTitle: 'Cold War in the 1960s & the Vietnam War',
  },
  // Part 6: Black Power, Détente & the 1970s
  {
    id: 'apushcwcr-ent-6a',
    question: 'President Nixon\'s 1972 visit to the People\'s Republic of China is best explained as an effort to',
    options: ['back Taiwan\'s plan to retake the Chinese mainland by force', 'exploit the split between China and the Soviet Union', 'reopen the Korean War and reunify the Korean peninsula', 'bring China into NATO as a partner against the Soviets'],
    correctIndex: 1,
    explanation: 'China and the Soviet Union had become bitter rivals, and opening relations with Beijing gave Nixon and Kissinger leverage in détente with Moscow. Nixon moved away from Taiwan, not toward its claims, and the other choices did not happen.',
    partNumber: 6,
    partTitle: 'Black Power, Détente & the 1970s',
  },
  {
    id: 'apushcwcr-ent-6b',
    question: 'Which development best explains why some civil rights activists turned toward Black Power after 1965?',
    options: ['Legal gains left de facto segregation in the North intact', 'King had publicly endorsed armed self-defense in Selma', 'Congress had repealed the Civil Rights Act of 1964 that year', 'The Supreme Court had struck down the new Voting Rights Act'],
    correctIndex: 0,
    explanation: 'The laws of 1964 and 1965 ended legal segregation in the South but left housing, job and police problems in Northern cities, which leaders such as Stokely Carmichael answered with calls for self-determination. The other choices are false.',
    partNumber: 6,
    partTitle: 'Black Power, Détente & the 1970s',
  },
  // Part 7: Reagan, the Cold War's End & Mastery Check
  {
    id: 'apushcwcr-ent-7a',
    question: 'Which explanation of the end of the Cold War best demonstrates historical complexity?',
    options: ['Reagan\'s speeches alone caused the Soviet Union to collapse in 1991', 'Soviet economic decline, Gorbachev\'s reforms and Western pressure all combined', 'The Soviet Union won the arms race and then chose to disband itself', 'The Cold War ended when Vietnam was reunified under communism in 1975'],
    correctIndex: 1,
    explanation: 'Historians weigh several causes: stagnation and the cost of Afghanistan, reforms that Gorbachev could not control, the Reagan buildup, and popular movements such as Solidarity. A single-cause answer lacks complexity, and the other two are false.',
    partNumber: 7,
    partTitle: 'Reagan, the Cold War\'s End & Mastery Check',
  },
  {
    id: 'apushcwcr-ent-7b',
    question: 'Which evidence best supports the claim that the Vietnam War weakened domestic reform in the late 1960s?',
    options: ['War costs drained money and attention from Great Society programs', 'The draft exempted poor and minority young men from service', 'The war ended the space race before Apollo reached the Moon', 'The war led Congress to repeal Medicare and federal school aid'],
    correctIndex: 0,
    explanation: 'Spending on the war competed with Johnson\'s antipoverty programs, and King and others argued that the war was undercutting the War on Poverty. The draft fell heavily on poor and minority men, Apollo landed in 1969, and Medicare survived.',
    partNumber: 7,
    partTitle: 'Reagan, the Cold War\'s End & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Origins of the Cold War (1945–1950)' },
    { partNumber: 2, partTitle: 'The Cold War Heats Up (1950–1962)' },
    { partNumber: 3, partTitle: 'Civil Rights: Early Foundations (1945–1955)' },
    { partNumber: 4, partTitle: 'The Movement Peaks (1960–1965)' },
    { partNumber: 5, partTitle: 'Cold War in the 1960s & the Vietnam War' },
    { partNumber: 6, partTitle: 'Black Power, Détente & the 1970s' },
    { partNumber: 7, partTitle: 'Reagan, the Cold War\'s End & Mastery Check' },
  ]
}
