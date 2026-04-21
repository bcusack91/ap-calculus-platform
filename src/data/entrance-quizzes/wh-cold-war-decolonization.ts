/**
 * Entrance Quiz - Cold War & Decolonization (AP World History, Unit 8)
 * 14 questions - 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'whcwd-ent-1a',
    question: 'Which 1947 U.S. policy committed the United States to "support free peoples who are resisting attempted subjugation" and is regarded as the founding statement of containment?',
    options: ['The Marshall Plan', 'The Truman Doctrine', 'The North Atlantic Treaty', 'The Atlantic Charter'],
    correctIndex: 1,
    explanation: 'The Truman Doctrine launched containment in March 1947 in response to British withdrawal of aid from Greece and Turkey. The Marshall Plan (1948) was its economic arm; NATO (1949) became its military arm.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whcwd-ent-1b',
    question: 'Which feature most distinguishes the Cold War from previous great-power conflicts?',
    options: [
      'The two main rivals competed primarily through ideology, proxies, and arms race rather than direct combat against each other',
      'The two main rivals fought constant direct conventional wars in Europe throughout the period from 1947 until 1991',
      'The two main rivals shared a single political and economic system and competed only over disputed colonies',
      'The two main rivals avoided economic competition entirely and concentrated only on naval power and trade routes'
    ],
    correctIndex: 0,
    explanation: 'The defining feature is global ideological competition without direct U.S.-Soviet combat. Korea, Vietnam, Angola, and Afghanistan were the proxy theaters.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whcwd-ent-2a',
    question: 'Which of the following best illustrates the Soviet enforcement of bloc discipline before 1989?',
    options: [
      'The 1956 Hungarian Revolution and the 1968 Prague Spring, both crushed by Warsaw Pact military intervention',
      'The 1955 Bandung Conference of 29 newly independent African and Asian states refusing to choose sides',
      'The 1962 Cuban Missile Crisis between the United States and the Soviet Union over missiles in Cuba',
      'The 1963 Limited Nuclear Test Ban Treaty between the United States, the Soviet Union, and the United Kingdom'
    ],
    correctIndex: 0,
    explanation: 'Hungary 1956 and Prague 1968 are the canonical examples of Soviet enforcement. The Brezhnev Doctrine codified the practice.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whcwd-ent-2b',
    question: 'Which decolonization case best illustrates the "revolutionary war" path rather than the "negotiated transfer" path?',
    options: [
      'India in 1947, where mass civil resistance ended in British constitutional handover and partition',
      'Algeria from 1954 to 1962, where the FLN waged armed insurgency against France and a settler population at high cost',
      'Ghana in 1957, where Nkrumah\'s nonviolent organizing produced a peaceful British constitutional handover',
      'Jamaica in 1962, where the British government oversaw a peaceful constitutional transition without armed struggle'
    ],
    correctIndex: 1,
    explanation: 'Algeria is the textbook revolutionary war: armed FLN insurgency, settler population, brutal counterinsurgency, eventual independence at high cost.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whcwd-ent-3a',
    question: 'Which best explains the historical significance of the 1955 Bandung Conference?',
    options: [
      'It established a permanent UN agency that managed European decolonization throughout the 1960s decade',
      'It was the first major postwar gathering of newly independent Asian and African states asserting a Third World political identity outside the U.S.-Soviet rivalry',
      'It dissolved the Warsaw Pact and ended the Cold War through unified Asian and African leadership in Indonesia',
      'It produced a binding nuclear arms control treaty that ended the U.S.-Soviet arms race during the 1950s'
    ],
    correctIndex: 1,
    explanation: 'Bandung 1955 is the founding moment of organized Third World political identity. It led directly to the Non-Aligned Movement (1961).',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whcwd-ent-3b',
    question: 'Why did the 1962 Cuban Missile Crisis become a Cold War turning point?',
    options: [
      'It pushed the world to the brink of nuclear war and produced the U.S.-Soviet hotline and the 1963 Limited Test Ban Treaty, marking a shift toward arms control',
      'It produced a peace treaty between Cuba and the United States that fully restored diplomatic relations and ended Cuban alignment with the Soviet Union',
      'It led to the immediate collapse of the Soviet Union and produced a unipolar world dominated by the United States by 1965',
      'It expanded the Cold War to Africa for the first time and produced rapid African decolonization during 1962'
    ],
    correctIndex: 0,
    explanation: 'The crisis mattered because it produced new arms-control mechanisms (hotline, 1963 LTBT) and a partial shift toward détente.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whcwd-ent-4a',
    question: 'Which best illustrates how the 1979 Iranian Revolution challenged the bipolar Cold War framework?',
    options: [
      'It produced an Islamic Republic hostile to both the United States and the Soviet Union, demonstrating that religious-political movements could not be reduced to either Cold War bloc',
      'It produced a pro-American secular military dictatorship that aligned itself with NATO during the 1980s decade',
      'It produced a pro-Soviet Marxist regime that joined the Warsaw Pact and hosted Soviet missiles to threaten the United States',
      'It produced no meaningful change in Iranian government and Iran continued under the Shah for the rest of the Cold War period'
    ],
    correctIndex: 0,
    explanation: 'The Iranian Revolution is the canonical case of a movement that fit neither Cold War bloc — explicitly anti-American AND anti-Soviet.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whcwd-ent-4b',
    question: 'Which best describes the role of the Bretton Woods institutions (IMF and World Bank) in the postwar global economy?',
    options: [
      'They stabilized the postwar capitalist system, set rules for currency exchange, and lent to developing states — often producing dependency, debt crises, and Structural Adjustment Programs by the 1980s',
      'They ran the Soviet planned economy and provided five-year plans and agricultural collectivization advice to communist states throughout the post-1945 era',
      'They were established by the Non-Aligned Movement at Bandung in 1955 to provide development aid bypassing both superpowers for newly independent states',
      'They had no relationship to decolonization and operated only inside North America and Western Europe without lending to any developing country governments'
    ],
    correctIndex: 0,
    explanation: 'IMF and World Bank were Western capitalist institutions; their lending to Third World states became a source of leverage and dependency.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whcwd-ent-5a',
    question: 'Which best characterizes the shift from the first Cold War phase (1945–1962) to the détente phase (1963–1979)?',
    options: [
      'Direct superpower confrontation gave way to negotiated arms control (hotline 1963; SALT I 1972), even as proxy wars and Third World interventions continued',
      'The two superpowers ended all aid programs, alliance systems, and proxy wars by 1963 and entered a long peace until 1979',
      'The two superpowers shifted to direct combat between their own armed forces in Europe during the 1960s decade',
      'The two superpowers fully merged their economic systems into a single global capitalist order by 1972'
    ],
    correctIndex: 0,
    explanation: 'Détente was selective: arms control progressed, but proxy wars in Vietnam, Angola, and Latin America intensified.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whcwd-ent-5b',
    question: 'Which two reforms most directly enabled the rapid late-1980s collapse of the Soviet bloc?',
    options: [
      'Gorbachev\'s glasnost (openness) and perestroika (restructuring), which legitimized political criticism and exposed economic stagnation',
      'The 1947 Truman Doctrine and the 1948 Marshall Plan, which committed the United States to containing communism and rebuilding Western Europe',
      'The 1955 Bandung Conference and the 1961 Non-Aligned Movement, which created a Third World political bloc that refused alignment',
      'The 1949 founding of NATO and the 1955 founding of the Warsaw Pact, which created the formal alliance structures of the Cold War'
    ],
    correctIndex: 0,
    explanation: 'Glasnost and perestroika are the canonical late-Cold-War reform pair. They opened space for criticism and exposed economic failure.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whcwd-ent-6a',
    question: 'Which historical context is most essential for sourcing the 1947 Truman Doctrine speech?',
    options: [
      'Postwar Greek and Turkish governments faced communist pressure, the British announced they could no longer support those governments, and U.S. policymakers framed the moment as the start of global containment',
      'The 1962 Cuban Missile Crisis was unfolding and President Truman was responding directly to Soviet missile deployments in the Caribbean',
      'The 1979 Iranian Revolution had just overthrown the U.S.-backed Shah and the Truman administration was responding to Khomeini',
      'The 1989 fall of the Berlin Wall had just dissolved the Iron Curtain and Truman was negotiating German reunification with Soviet leadership'
    ],
    correctIndex: 0,
    explanation: 'The Truman Doctrine was a March 1947 response to British withdrawal of aid. The other options name later events Truman could not have addressed.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whcwd-ent-6b',
    question: 'Which short answer best demonstrates AP "complexity" by complicating a single-cause Cold War argument?',
    options: [
      'Although the United States framed its 1953 Iran intervention as Cold War containment of communism, scholars have emphasized that protection of British and U.S. oil interests was also a central motivation',
      'The 1953 Iran intervention was simply a routine application of containment policy with no other meaningful motivations or interests at stake on any side',
      'The 1953 Iran intervention had nothing to do with the Cold War at all and was conducted entirely for reasons unrelated to U.S. or British policy toward the Soviet Union',
      'The 1953 Iran intervention was conducted entirely by the Soviet Union and reflected Soviet rather than U.S. or British strategic interests in the Persian Gulf'
    ],
    correctIndex: 0,
    explanation: 'The "complexity" point requires complicating dominant narratives. Naming both containment AND oil interests in Iran 1953 is the canonical AP move.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whcwd-ent-7a',
    question: 'Which year saw both the launch of Sputnik and the independence of the first sub-Saharan African colony?',
    options: ['1955', '1957', '1962', '1968'],
    correctIndex: 1,
    explanation: '1957: Sputnik (October) and Ghana (March, under Nkrumah). Memorize this pairing — it appears regularly on AP exams.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'whcwd-ent-7b',
    question: 'Which event most directly marks the end of détente between the U.S. and the Soviet Union?',
    options: [
      'The 1979 Soviet invasion of Afghanistan, which prompted U.S. boycott of the 1980 Moscow Olympics and renewed Cold War confrontation',
      'The 1955 founding of the Warsaw Pact, which formalized the Soviet-led military alliance into a treaty structure',
      'The 1962 Cuban Missile Crisis, which produced the U.S.-Soviet hotline and the 1963 Limited Test Ban Treaty',
      'The 1985 selection of Mikhail Gorbachev as General Secretary, who introduced glasnost and perestroika reforms'
    ],
    correctIndex: 0,
    explanation: 'The 1979 Soviet invasion of Afghanistan is the canonical end-of-détente event. It triggered the Olympic boycott and U.S. aid to the mujahideen.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
