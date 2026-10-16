/**
 * Entrance Quiz — Cold War & Decolonization (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whcwd-ent-1a',
    question: 'The Marshall Plan (1948) served American Cold War aims mainly by',
    options: ['funding Soviet reconstruction in order to win Stalin\'s trust', 'paying for French and British wars against Asian nationalists', 'rebuilding Western Europe to weaken communism\'s appeal', 'creating a military alliance that matched the Warsaw Pact'],
    correctIndex: 2,
    explanation: 'Some \\$13 billion in aid revived Western Europe and tied it to the U.S.-led economy, weakening communist parties that fed on hardship. The USSR refused to take part, the plan funded recovery rather than colonial wars, and the military alliance was NATO.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whcwd-ent-1b',
    question: 'Which statement best describes the timing of decolonization after 1945?',
    options: ['Most African colonies won independence before most Asian colonies', 'Nearly every colony in the world had become independent by 1950', 'Portugal was the first European power to give up all of its colonies', 'Most of South and Southeast Asia won freedom well before most of Africa'],
    correctIndex: 3,
    explanation: 'India, Pakistan, and Indonesia were independent by 1949, while most of Africa followed around 1960, and Portuguese Africa only in 1975. Portugal held on longest, and many colonies remained in 1950.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  // source: Dwight D. Eisenhower, news conference, April 7, 1954; verbatim
  {
    id: 'whcwd-ent-2a',
    question: '"You have a row of dominoes set up, you knock over the first one, and what will happen to the last one is the certainty that it will go over very quickly."\n— President Dwight Eisenhower, news conference, 1954\n\nThis reasoning was used most directly to justify',
    options: ['the Marshall Plan\'s economic aid to the countries of Western Europe', 'Soviet intervention to crush the Hungarian Revolution of 1956', 'the Non-Aligned Movement\'s refusal to join either Cold War bloc', 'American involvement in Southeast Asia to block communism'],
    correctIndex: 3,
    explanation: 'Eisenhower made the remark about Indochina, and the domino theory became the rationale for deepening U.S. involvement in Vietnam. The Marshall Plan came earlier and concerned Europe, and the other choices describe Soviet and non-aligned actions.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whcwd-ent-2b',
    question: 'Which pairing of a decolonization case with the path it followed is most accurate?',
    options: ['India, through an armed revolutionary war that drove out the British', 'Ghana, through a long war that killed hundreds of thousands', 'Algeria, through an insurgency against France and its settlers', 'Angola, through a peaceful constitutional handover in 1957'],
    correctIndex: 2,
    explanation: 'The FLN fought French forces and a large settler population from 1954 to 1962. India and Ghana won independence through mass movements and negotiation, and Angola won independence in 1975 after an armed struggle.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whcwd-ent-3a',
    question: 'East Germany built the Berlin Wall in 1961 mainly to',
    options: ['stop its citizens from fleeing to the West', 'keep NATO troops from entering East Berlin', 'mark a border that had been drawn at Yalta in 1945', 'protect the city from an expected American invasion'],
    correctIndex: 0,
    explanation: 'Millions of East Germans had escaped through West Berlin, draining skilled workers, so the regime sealed the border. The official claim of defense against the West was a pretext, and Yalta drew no such line through the city.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whcwd-ent-3b',
    question: 'Why is the Soviet war in Afghanistan (1979–1989) often called "the Soviet Vietnam"?',
    options: ['A superpower was worn down by insurgents its rival armed', 'Soviet troops fought alongside the United States against Vietnam', 'The war ended with a communist takeover of the whole country', 'The war was fought mainly in Vietnam with Afghan volunteers'],
    correctIndex: 0,
    explanation: 'As in Vietnam, a superpower spent years fighting guerrillas, here the mujahideen armed by the United States through Pakistan, before withdrawing. The two superpowers did not fight together, and the Soviet-backed government eventually fell.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whcwd-ent-4a',
    question: 'Egypt under Nasser accepted Soviet help to build the Aswan High Dam while remaining a leader of the Non-Aligned Movement. This best illustrates',
    options: ['a new state using superpower rivalry to win aid on its own terms', 'Egypt\'s formal entry into the Warsaw Pact as a full member', 'the refusal of non-aligned states to accept any foreign aid', 'the U.S. decision to make Egypt its chief ally in the region'],
    correctIndex: 0,
    explanation: 'Nasser played the blocs against each other, taking Soviet aid without joining the Soviet alliance. Egypt never joined the Warsaw Pact, non-aligned states often accepted aid from both sides, and Egypt was not then America\'s chief regional ally.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whcwd-ent-4b',
    question: 'South Korea and Taiwan grew rapidly from the 1960s by building export industries with foreign investment. Which comparison is most accurate?',
    options: ['Their path copied the Soviet-style five-year plans that Cuba adopted', 'They departed from the import substitution favored by many new states', 'Their growth came mainly from selling crude oil through the OPEC cartel', 'Their economies stayed closed to trade with the United States and Japan'],
    correctIndex: 1,
    explanation: 'The Asian Tigers pursued export-led growth tied to Western markets, unlike the state-led import substitution common in India, Cuba, and much of Africa. They were not Soviet-style planners, they produced manufactures rather than oil, and they traded heavily with the United States.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whcwd-ent-5a',
    question: 'President Nixon\'s 1972 visit to the People\'s Republic of China is best understood as',
    options: ['a step toward China joining NATO', 'a move to exploit the deepening Sino-Soviet split', 'the start of the Korean War armistice talks', 'an effort to restore the Qing dynasty'],
    correctIndex: 1,
    explanation: 'With China and the USSR at odds, opening relations with Beijing gave Washington leverage over Moscow, creating triangular diplomacy. China never sought NATO membership, the Korean armistice came in 1953, and the Qing had fallen in 1912.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whcwd-ent-5b',
    question: 'Poland\'s Solidarity, an independent trade union with about 10 million members in the early 1980s, is best used as evidence that',
    options: ['Soviet leaders welcomed independent unions as part of détente', 'communism in Poland grew stronger during the 1980s', 'Western armies invaded Eastern Europe to end communist rule', 'pressure from below helped undermine communist rule in Europe'],
    correctIndex: 3,
    explanation: 'A mass workers\' movement in a self-proclaimed workers\' state exposed the regime\'s weakness and helped bring Poland\'s first partly free elections in 1989. Soviet leaders saw it as a threat, there was no Western invasion, and communist rule in Poland weakened.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  // source: John F. Kennedy, remarks at the Rudolph Wilde Platz, West Berlin, June 26, 1963; verbatim
  {
    id: 'whcwd-ent-6a',
    question: '"All free men, wherever they may live, are citizens of Berlin, and, therefore, as a free man, I take pride in the words \'Ich bin ein Berliner!\'"\n— President John F. Kennedy, West Berlin, 1963\n\nThe intended audience of this speech most likely included',
    options: ['members of Congress debating aid to Greece and Turkey', 'delegates at the Asian-African conference in Bandung', 'people of the walled city and Soviet leaders judging U.S. resolve', 'French officials negotiating the end of the Algerian war'],
    correctIndex: 2,
    explanation: 'Two years after the Wall went up, Kennedy reassured West Berliners of American support and signaled to Moscow that the United States would not abandon the city. The Greek aid debate was in 1947, Bandung in 1955, and Algeria became independent in 1962.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whcwd-ent-6b',
    question: 'A student writes: "The Cold War caused decolonization." Which revision best fixes the weakness in this claim?',
    options: ['Add that the Cold War began in 1947 with the Truman Doctrine', 'Note that nationalism predated 1945 and the Cold War shaped its course', 'Replace the claim with a list of every country that gained independence', 'Argue that decolonization caused the Cold War instead of the reverse'],
    correctIndex: 1,
    explanation: 'Nationalist organizing in India, Vietnam, and Africa predates the Cold War, which influenced the timing, violence, and alignments of independence rather than causing it. A date, a list, or a simple reversal does not repair the single-cause argument.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whcwd-ent-7a',
    question: 'Which comparison of Soviet action in Hungary (1956) and the U.S.-backed coup in Guatemala (1954) is most accurate?',
    options: ['Each acted to keep a country in its sphere, but by different means', 'The Soviet Union used covert agents, while the United States sent tanks', 'Neither superpower cared what happened to governments in its own region', 'Each intervention was approved in advance by the United Nations'],
    correctIndex: 0,
    explanation: 'Moscow crushed Hungary\'s revolt with tanks, while Washington used a CIA-organized coup to remove a government it saw as leaning left. The reversed pairing gets the methods backward, and the UN approved neither action.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whcwd-ent-7b',
    question: 'Which statement best describes a change in decolonization from the late 1940s to the 1980s?',
    options: ['Early settler-colony wars gave way to peaceful British handovers in Asia', 'Independence movements shifted from Africa to the Caribbean and stopped in Asia', 'Asian handovers gave way to late fights against settler and Portuguese rule', 'European powers grew stronger and regained most colonies by the 1980s'],
    correctIndex: 2,
    explanation: 'India\'s 1947 transfer came early, while Angola, Mozambique, Zimbabwe, and Namibia won independence only in 1975–1990 after struggles against Portugal and white-settler regimes. The claim that settler wars came first reverses the order, and empires shrank rather than revived.',
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
