/**
 * Entrance Quiz — Reagan to the Present (AP US History, Period 9)
 * 14 questions · 7 parts (2 per part). Built Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: The Conservative Resurgence & the Reagan Revolution
  // source: Ronald Reagan, First Inaugural Address, January 20, 1981; verbatim
  {
    id: 'apushr2p-ent-1a',
    question: '"In this present crisis, government is not the solution to our problem; government is the problem."\n— Ronald Reagan, First Inaugural Address, January 20, 1981\n\nWhich development of the 1970s most directly made this argument persuasive to many voters?',
    options: ['A federal budget surplus during the late 1970s', 'Stagflation that undercut liberal economics', 'Rising union membership in the Sun Belt states', 'The success of détente in cutting nuclear arsenals'],
    correctIndex: 1,
    explanation: 'High inflation together with high unemployment defied the older liberal economic playbook and made Reagan\'s call to cut taxes and government appealing. The budget ran deficits, union membership was falling, and Reagan attacked détente rather than crediting it.',
    partNumber: 1,
    partTitle: 'The Conservative Resurgence & the Reagan Revolution',
  },
  {
    id: 'apushr2p-ent-1b',
    question: 'Which evidence best supports the claim that Reaganomics did not shrink the federal government?',
    options: ['Inflation fell from about 13 percent to about 4 percent', 'Many federal rules on business and banking were removed', 'The top income-tax rate fell from 70 to 50 percent', 'Federal spending and the national debt rose sharply'],
    correctIndex: 3,
    explanation: 'A defense buildup and tax cuts without matching spending cuts drove spending up and nearly tripled the debt. Lower inflation, lower tax rates and deregulation are evidence of the program\'s goals, not of a larger government.',
    partNumber: 1,
    partTitle: 'The Conservative Resurgence & the Reagan Revolution',
  },
  // Part 2: The End of the Cold War
  {
    id: 'apushr2p-ent-2a',
    question: 'Which evidence best supports giving Mikhail Gorbachev\'s own choices a major role in ending the Cold War?',
    options: ['Reagan\'s 1983 description of the Soviet Union as an "evil empire"', 'American aid to anti-Soviet fighters in Afghanistan in the 1980s', 'His refusal to use force to save Eastern Europe\'s communist regimes', 'The proposal for a space-based missile shield known as SDI'],
    correctIndex: 2,
    explanation: 'When communist governments fell in 1989, Gorbachev did not send tanks as earlier Soviet leaders had in Hungary and Czechoslovakia. The other choices are American pressures, the other side of the multiple-causation argument.',
    partNumber: 2,
    partTitle: 'The End of the Cold War',
  },
  {
    id: 'apushr2p-ent-2b',
    question: 'Reagan\'s policy toward the Soviet Union in his second term differed from his first-term policy mainly in that he',
    options: ['negotiated real arms reductions with the reformer in Moscow', 'stopped all aid to anti-communist rebels in Central America', 'cut defense spending to return to the détente of the 1970s', 'canceled the Strategic Defense Initiative to win a summit'],
    correctIndex: 0,
    explanation: 'After Gorbachev took power in 1985, Reagan held summits and signed the 1987 INF Treaty, which eliminated a whole class of nuclear missiles. He kept defense spending high, kept backing anti-communist forces, and refused to give up SDI.',
    partNumber: 2,
    partTitle: 'The End of the Cold War',
  },
  // Part 3: The Bush Years & the "New World Order" (1989–1993)
  {
    id: 'apushr2p-ent-3a',
    question: 'The Persian Gulf War of 1991 is best seen as an example of George H. W. Bush\'s idea of a "new world order" because',
    options: ['a UN-backed coalition undid one country\'s seizure of another', 'NATO forces fought the Soviet army along the Iraqi border', 'the United States acted alone after the UN refused to help', 'the United States annexed Kuwait to protect its oil fields'],
    correctIndex: 0,
    explanation: 'Bush built a broad international coalition with United Nations authorization to drive Iraq out of Kuwait, the kind of cooperation against aggression he described. The United States did not act alone, fight the Soviets, or annex Kuwait.',
    partNumber: 3,
    partTitle: 'The Bush Years & the "New World Order" (1989–1993)',
  },
  {
    id: 'apushr2p-ent-3b',
    question: 'The quick victory in the Persian Gulf War, with few American casualties, was widely seen at the time as',
    options: ['the start of a long American occupation of Iraq', 'proof the military had regained confidence after Vietnam', 'a defeat that forced President Bush to resign from office', 'a war fought without the approval of the United Nations'],
    correctIndex: 1,
    explanation: 'Many Americans saw the six-week campaign as the end of post-Vietnam doubts about the armed forces. Bush did not occupy Baghdad, he lost the 1992 election rather than resigning, and the UN authorized the war.',
    partNumber: 3,
    partTitle: 'The Bush Years & the "New World Order" (1989–1993)',
  },
  // Part 4: The Clinton Era & 1990s Politics (1993–2001)
  // source: William J. Clinton, State of the Union Address, January 23, 1996; verbatim
  {
    id: 'apushr2p-ent-4a',
    question: '"The era of big government is over."\n— Bill Clinton, State of the Union Address, January 23, 1996\n\nClinton\'s statement best reflects which development?',
    options: ['A Democratic move toward the center after Republican gains in 1994', 'A plan to create national health insurance for every American', 'Republican control of both the presidency and the Congress', 'Democratic opposition to any change in the welfare system'],
    correctIndex: 0,
    explanation: 'After Republicans won both houses in 1994, Clinton "triangulated" toward the center and later signed welfare reform. His health plan had already failed, a Democrat held the presidency, and he supported changing welfare.',
    partNumber: 4,
    partTitle: 'The Clinton Era & 1990s Politics (1993–2001)',
  },
  {
    id: 'apushr2p-ent-4b',
    question: 'The federal government shutdowns of 1995–1996 are best understood as a result of',
    options: ['the impeachment of Clinton by the House', 'the collapse of the dot-com stock bubble', 'a GOP Congress clashing with Clinton', 'a costly American war in the Persian Gulf'],
    correctIndex: 2,
    explanation: 'Gingrich\'s Republican Congress and Clinton clashed over the budget, and the government closed when neither side would yield. The impeachment came in 1998, the dot-com crash in 2000, and the Gulf War in 1991.',
    partNumber: 4,
    partTitle: 'The Clinton Era & 1990s Politics (1993–2001)',
  },
  // Part 5: 9/11, the War on Terror & the George W. Bush Years (2001–2009)
  // source: George W. Bush, Address to a Joint Session of Congress, September 20, 2001; verbatim
  {
    id: 'apushr2p-ent-5a',
    question: '"Either you are with us, or you are with the terrorists."\n— George W. Bush, Address to a Joint Session of Congress, September 20, 2001\n\nThe policy announced in this address was most directly followed by',
    options: ['the Persian Gulf War to drive Iraq out of Kuwait', 'the signing of the Kyoto Protocol on climate change', 'the withdrawal of American troops from Europe', 'the invasion of Afghanistan to topple the Taliban'],
    correctIndex: 3,
    explanation: 'In October 2001 U.S. and allied forces invaded Afghanistan because its Taliban rulers sheltered al-Qaeda. The Gulf War (1991) and Kyoto (1997) came earlier, and troops were not pulled from Europe.',
    partNumber: 5,
    partTitle: '9/11, the War on Terror & the George W. Bush Years (2001–2009)',
  },
  {
    id: 'apushr2p-ent-5b',
    question: 'The creation of the Department of Homeland Security in 2002 is best understood as part of a broader pattern in which',
    options: ['Congress shrank the executive branch to cut spending', 'state governments took over responsibility for defense', 'national crises expanded the power of Washington', 'the United States withdrew from involvement in world affairs'],
    correctIndex: 2,
    explanation: 'Like the world wars and the Cold War, the War on Terror enlarged federal agencies and powers, here with a new cabinet department and the PATRIOT Act. The other choices describe the opposite of what happened.',
    partNumber: 5,
    partTitle: '9/11, the War on Terror & the George W. Bush Years (2001–2009)',
  },
  // Part 6: The Great Recession, a Changing Nation & Climate Debates (2000s)
  {
    id: 'apushr2p-ent-6a',
    question: 'Union membership fell from about 20 percent of wage and salary workers in 1983 to about 12 percent in 2008. This change most directly reflected',
    options: ['a federal law banning unions in private industry', 'the shift of jobs from manufacturing to services', 'a rapid rise in factory employment in the Midwest', 'the growth of farm jobs as the largest sector'],
    correctIndex: 1,
    explanation: 'Service-sector jobs grew while unionized factory jobs declined, especially in the Rust Belt. No law banned unions, factory employment fell, and farming kept shrinking.',
    partNumber: 6,
    partTitle: 'The Great Recession, a Changing Nation & Climate Debates (2000s)',
  },
  {
    id: 'apushr2p-ent-6b',
    question: 'Debates over American energy policy in the early twenty-first century were most directly shaped by',
    options: ['the end of all oil imports after the Persian Gulf War', 'a NAFTA rule that banned oil trade with Canada and Mexico', 'a federal ban on coal mining passed in the 1990s', 'Middle East conflicts and growing concern about climate change'],
    correctIndex: 3,
    explanation: 'Wars in the Persian Gulf, Afghanistan and Iraq raised questions about dependence on imported oil, while climate concerns raised questions about fossil fuels themselves. The other choices did not happen.',
    partNumber: 6,
    partTitle: 'The Great Recession, a Changing Nation & Climate Debates (2000s)',
  },
  // Part 7: Synthesis, Themes & Mastery Check
  {
    id: 'apushr2p-ent-7a',
    question: 'Which claim best describes a continuity between Period 9 and earlier periods of U.S. history?',
    options: ['Fights over the size of government echoed New Deal-era debates', 'Americans stopped debating immigration once the Cold War ended in 1991', 'The United States withdrew from foreign affairs as it had after every war', 'Political parties disappeared as voters turned to independent candidates'],
    correctIndex: 0,
    explanation: 'Conservatives and liberals after 1980 replayed long-running arguments about federal power that date to the New Deal and the founding. Immigration debates intensified, U.S. involvement abroad grew, and the two parties remained dominant.',
    partNumber: 7,
    partTitle: 'Synthesis, Themes & Mastery Check',
  },
  {
    id: 'apushr2p-ent-7b',
    question: 'A historian arguing that population growth in the Sun Belt reshaped national politics after 1980 would most likely cite which evidence?',
    options: ['The founding of the National Organization for Women', 'The South and West gaining House seats and electoral votes', 'The Gulf of Tonkin Resolution passed by Congress in 1964', 'The INF Treaty signed by Reagan and Gorbachev in 1987'],
    correctIndex: 1,
    explanation: 'As people moved south and west, reapportionment gave those regions more seats in the House and more electoral votes, strengthening their political weight. The other choices are unrelated to population shifts.',
    partNumber: 7,
    partTitle: 'Synthesis, Themes & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Conservative Resurgence & the Reagan Revolution' },
    { partNumber: 2, partTitle: 'The End of the Cold War' },
    { partNumber: 3, partTitle: 'The Bush Years & the "New World Order" (1989–1993)' },
    { partNumber: 4, partTitle: 'The Clinton Era & 1990s Politics (1993–2001)' },
    { partNumber: 5, partTitle: '9/11, the War on Terror & the George W. Bush Years (2001–2009)' },
    { partNumber: 6, partTitle: 'The Great Recession, a Changing Nation & Climate Debates (2000s)' },
    { partNumber: 7, partTitle: 'Synthesis, Themes & Mastery Check' },
  ]
}
