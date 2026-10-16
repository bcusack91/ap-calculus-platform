/**
 * Entrance Quiz — Vietnam & Social Change (AP US History)
 * 14 questions · 7 parts (2 per part). Built Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Roots of U.S. Involvement (Containment to Escalation)
  {
    id: 'apushviet-ent-1a',
    question: 'Ngo Dinh Diem, with American support, refused to hold the nationwide elections that the Geneva Accords had scheduled for 1956. Which of the following best explains his decision?',
    options: ['He feared Ho Chi Minh would win the vote', 'A United Nations ruling had already canceled the vote', 'France insisted on keeping southern Vietnam as a colony', 'He planned to merge South Vietnam with neighboring Laos'],
    correctIndex: 0,
    explanation: 'Ho Chi Minh\'s prestige from defeating France made him the likely winner, so Diem and the United States blocked the vote, which helped renew the war. The other choices did not happen.',
    partNumber: 1,
    partTitle: 'Roots of U.S. Involvement (Containment to Escalation)',
  },
  {
    id: 'apushviet-ent-1b',
    question: 'Which statement best describes President Kennedy\'s policy in Vietnam?',
    options: ['He sent more than 500,000 combat troops after a naval clash', 'He withdrew all American advisers after the Bay of Pigs failed', 'He added military advisers but sent no large combat units', 'He signed a peace agreement that ended the American combat role'],
    correctIndex: 2,
    explanation: 'Kennedy increased advisers from about 900 to about 16,000 and backed programs such as Strategic Hamlets without committing combat divisions. The troop buildup came under Johnson, and the peace accords under Nixon in 1973.',
    partNumber: 1,
    partTitle: 'Roots of U.S. Involvement (Containment to Escalation)',
  },
  // Part 2: Escalation Under Johnson (Gulf of Tonkin to Americanization)
  {
    id: 'apushviet-ent-2a',
    question: 'The American strategy of attrition in Vietnam, measured by "body counts," is best described as an effort to',
    options: ['capture and permanently hold the North Vietnamese capital', 'cut off the Soviet oil that fueled North Vietnam\'s army', 'win over rural villagers by redistributing land to them', 'inflict losses faster than the enemy could replace them'],
    correctIndex: 3,
    explanation: 'Attrition aimed to kill enemy soldiers until North Vietnam could no longer continue, rather than to take territory. It did not involve invading the North, land reform, or a blockade of Soviet oil.',
    partNumber: 2,
    partTitle: 'Escalation Under Johnson (Gulf of Tonkin to Americanization)',
  },
  {
    id: 'apushviet-ent-2b',
    question: 'Johnson\'s effort to fund both the war in Vietnam and his Great Society programs at the same time most directly contributed to',
    options: ['a balanced federal budget by the end of his term', 'the repeal of Medicare and federal aid to schools', 'rising inflation in the late 1960s', 'the end of the military draft in the year 1966'],
    correctIndex: 2,
    explanation: 'Paying for "guns and butter" without raising enough revenue strained the budget and pushed prices up. The budget did not balance, Medicare survived, and the draft continued until 1973.',
    partNumber: 2,
    partTitle: 'Escalation Under Johnson (Gulf of Tonkin to Americanization)',
  },
  // Part 3: The Turning Point: Tet, the Media, and the Credibility Gap
  {
    id: 'apushviet-ent-3a',
    question: 'Which evidence best supports the claim that the Tet Offensive was a political rather than a military victory for North Vietnam?',
    options: ['Communist forces held Saigon for the rest of the war', 'The Viet Cong grew stronger militarily after the attacks', 'Johnson quit the race after attacks the U.S. repelled', 'American troop levels fell sharply in the months after Tet'],
    correctIndex: 2,
    explanation: 'U.S. and South Vietnamese forces beat back the attacks and the Viet Cong suffered heavy losses, yet public trust collapsed and Johnson announced on March 31 that he would not run. Troop levels kept rising into 1969, and Saigon fell only in 1975.',
    partNumber: 3,
    partTitle: 'The Turning Point: Tet, the Media, and the Credibility Gap',
  },
  {
    id: 'apushviet-ent-3b',
    question: 'The televised clashes between police and antiwar protesters at the 1968 Democratic National Convention most directly helped',
    options: ['Eugene McCarthy win the Democratic nomination', 'Robert Kennedy carry the California primary', 'Lyndon Johnson reenter the presidential race', 'Richard Nixon win by promising law and order'],
    correctIndex: 3,
    explanation: 'Images of disorder in Chicago split the Democrats and strengthened Nixon\'s appeal to voters tired of protest. Humphrey, not McCarthy, was nominated, Kennedy\'s California win came before the convention, and Johnson stayed out.',
    partNumber: 3,
    partTitle: 'The Turning Point: Tet, the Media, and the Credibility Gap',
  },
  // Part 4: Nixon, Vietnamization, and the End of the War
  {
    id: 'apushviet-ent-4a',
    question: 'Nixon\'s policy of Vietnamization and his 1970 invasion of Cambodia were in tension mainly because he',
    options: ['added American troops while ending all of the bombing', 'cut American troops while widening the fighting next door', 'gave Saigon\'s army combat duty while asking Congress to declare war', 'opened peace talks while banning all protest on campuses'],
    correctIndex: 1,
    explanation: 'Nixon was withdrawing Americans and handing combat to South Vietnamese forces, yet he sent troops into Cambodia, which reignited campus protest. He expanded bombing, never sought a declaration of war, and did not ban protest.',
    partNumber: 4,
    partTitle: 'Nixon, Vietnamization, and the End of the War',
  },
  {
    id: 'apushviet-ent-4b',
    question: 'Which outcome in Southeast Asia after 1975 best tests the prediction of the domino theory?',
    options: ['Every country in Southeast Asia came under communist rule', 'No other country in the region became communist after Vietnam', 'Laos and Cambodia fell, but Thailand and Malaysia did not', 'China invaded and occupied the Philippines and Indonesia'],
    correctIndex: 2,
    explanation: 'Communists took power in Laos and Cambodia in 1975, but the wider collapse the theory predicted did not happen. The other choices misstate what followed.',
    partNumber: 4,
    partTitle: 'Nixon, Vietnamization, and the End of the War',
  },
  // Part 5: The Antiwar Movement & the Counterculture
  {
    id: 'apushviet-ent-5a',
    question: 'Which development best illustrates the backlash against the antiwar movement and the counterculture?',
    options: ['The SDS call for participatory democracy in 1962', 'The Woodstock music festival in upstate New York', 'Campus teach-ins on the war beginning in 1965', 'Nixon\'s appeal to a "silent majority" who resented protest'],
    correctIndex: 3,
    explanation: 'Nixon spoke to Americans who did not march and disliked the protesters, and many of them voted for him. The other choices were parts of the movement itself.',
    partNumber: 5,
    partTitle: 'The Antiwar Movement & the Counterculture',
  },
  {
    id: 'apushviet-ent-5b',
    question: 'The New Left of the 1960s differed from the Old Left of the 1930s mainly in that it',
    options: ['stressed personal freedom and participatory democracy', 'joined the Communist Party in large numbers to fight for socialism', 'supported the war in Vietnam as a fight for democracy abroad', 'organized only through labor unions in heavy industry'],
    correctIndex: 0,
    explanation: 'Student groups such as SDS focused on civil rights, the war and personal freedom rather than the economic class struggle that drove the Old Left. They opposed the war and were not mainly union or Communist Party organizations.',
    partNumber: 5,
    partTitle: 'The Antiwar Movement & the Counterculture',
  },
  // Part 6: Rights Movements of the Era (Beyond the War)
  {
    id: 'apushviet-ent-6a',
    question: 'The Delano grape boycott, the occupation of Alcatraz and the founding of NOW are best used together as evidence that',
    options: ['other groups adopted the civil rights movement\'s tactics and language', 'the federal government organized most protest groups of the era', 'these movements rejected boycotts, marches and other public protest', 'the movements disbanded after the states ratified the ERA in 1972'],
    correctIndex: 0,
    explanation: 'Farmworkers, Native activists and feminists borrowed boycotts, occupations, lobbying and appeals to equal rights from the Black freedom struggle. The government did not organize them, they relied on public protest, and the ERA was never ratified.',
    partNumber: 6,
    partTitle: 'Rights Movements of the Era (Beyond the War)',
  },
  {
    id: 'apushviet-ent-6b',
    question: 'The failure of the Equal Rights Amendment to win ratification is best explained by',
    options: ['a Supreme Court ruling that it violated the Fourteenth Amendment', 'organized conservative opposition led by figures such as Phyllis Schlafly', 'the National Organization for Women\'s campaign against the amendment', 'Congress\'s refusal to send the amendment to the states for a vote'],
    correctIndex: 1,
    explanation: 'Congress passed the ERA in 1972, but Schlafly\'s STOP ERA campaign and the rising New Right stopped it short of the 38 states needed. NOW supported it, and no court ruled against it.',
    partNumber: 6,
    partTitle: 'Rights Movements of the Era (Beyond the War)',
  },
  // Part 7: Synthesis, Mastery & Exit Quiz
  {
    id: 'apushviet-ent-7a',
    question: 'A historian arguing that 1968 was a turning point in American politics would most likely cite which of the following?',
    options: ['The Gulf of Tonkin Resolution and the start of escalation', 'Nixon\'s win after a year of assassinations, protest and Democratic division', 'The fall of Saigon to North Vietnamese forces', 'The founding of the National Organization for Women'],
    correctIndex: 1,
    explanation: 'Tet, Johnson\'s withdrawal, the King and Kennedy assassinations and the Chicago convention fractured the Democrats and opened the way for a Republican president. The other events came in 1964, 1966 and 1975.',
    partNumber: 7,
    partTitle: 'Synthesis, Mastery & Exit Quiz',
  },
  {
    id: 'apushviet-ent-7b',
    question: 'The "Vietnam Syndrome" in later U.S. foreign policy is best described as',
    options: ['reluctance to commit troops abroad after a costly war was lost', 'eagerness to fight new wars in Asia to restore national prestige', 'a decision by Congress to abolish the peacetime armed forces', 'an alliance with the Soviet Union against communist China'],
    correctIndex: 0,
    explanation: 'After defeat, heavy losses and broken public trust, leaders and voters hesitated to send American forces into long overseas conflicts. The other choices did not happen.',
    partNumber: 7,
    partTitle: 'Synthesis, Mastery & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Roots of U.S. Involvement (Containment to Escalation)' },
    { partNumber: 2, partTitle: 'Escalation Under Johnson (Gulf of Tonkin to Americanization)' },
    { partNumber: 3, partTitle: 'The Turning Point: Tet, the Media, and the Credibility Gap' },
    { partNumber: 4, partTitle: 'Nixon, Vietnamization, and the End of the War' },
    { partNumber: 5, partTitle: 'The Antiwar Movement & the Counterculture' },
    { partNumber: 6, partTitle: 'Rights Movements of the Era (Beyond the War)' },
    { partNumber: 7, partTitle: 'Synthesis, Mastery & Exit Quiz' },
  ]
}
