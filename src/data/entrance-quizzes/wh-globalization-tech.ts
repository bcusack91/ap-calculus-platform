/**
 * Entrance Quiz - Globalization & Technology After 1900 (AP World History, Unit 9)
 * 14 questions - 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'whgt-ent-1a',
    question: 'Which best describes the original purpose of the International Monetary Fund (IMF) at its 1944 founding?',
    options: [
      'To stabilize exchange rates among member currencies and to lend short-term to countries facing balance-of-payments crises so that they would not need to devalue or impose trade restrictions',
      'To finance long-term infrastructure projects in developing countries through low-interest loans repayable over decades from project revenues collected in local currencies',
      'To negotiate progressive tariff reductions among member states through periodic multilateral negotiating rounds organized over many years of diplomacy',
      'To resolve trade disputes among member states through binding arbitration with the authority to impose enforceable sanctions on noncompliant member governments'
    ],
    correctIndex: 0,
    explanation: 'IMF = exchange-rate stability + balance-of-payments lending. The other options describe the World Bank, GATT, and WTO respectively.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whgt-ent-1b',
    question: 'Which event most directly ended the original Bretton Woods system of fixed exchange rates anchored by dollar-gold convertibility?',
    options: [
      'The 1971 "Nixon Shock," in which President Nixon unilaterally ended the U.S. commitment to convert dollars into gold at \\$35 per ounce',
      'The 1973 OPEC oil embargo, in which Arab oil producers cut shipments to states that supported Israel during the Yom Kippur War',
      'The 1995 founding of the World Trade Organization, which formally replaced the General Agreement on Tariffs and Trade with binding dispute resolution',
      'The 1989 fall of the Berlin Wall, which marked the symbolic end of the Cold War division of Europe and the imminent Soviet collapse'
    ],
    correctIndex: 0,
    explanation: 'August 15, 1971 — Nixon ended dollar-gold convertibility, ending the gold-anchored Bretton Woods system.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whgt-ent-2a',
    question: 'Which best describes the post-1980 transformation of multinational corporations?',
    options: [
      'A shift from vertically integrated firms producing mostly in their home country toward globally distributed supply chains where design, components, and assembly are sourced from different countries based on cost and capability',
      'A shift away from international production back to fully domestic manufacturing in home countries with no involvement in foreign component sourcing or foreign assembly operations after 1980',
      'A shift toward state ownership of all multinational corporations by their home governments with elimination of private shareholder ownership of large firms after 1980',
      'A shift away from manufacturing entirely toward purely financial firms with no physical production of goods of any kind across all major multinational firms after 1980'
    ],
    correctIndex: 0,
    explanation: 'Post-1980 MNCs are defined by globally unbundled production. Apple is the canonical example: U.S. design, Asian components, Chinese assembly.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whgt-ent-2b',
    question: 'Which 1994 trilateral free trade agreement linked the United States, Canada, and Mexico?',
    options: ['NAFTA', 'EU', 'ASEAN', 'WTO'],
    correctIndex: 0,
    explanation: 'NAFTA: North American Free Trade Agreement, in force January 1, 1994. Replaced by USMCA in 2020.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whgt-ent-3a',
    question: 'Which best characterizes the developmental strategy of the Asian Tigers from the 1960s through the 1990s?',
    options: [
      'State-coordinated export-led industrialization, heavy investment in education, authoritarian or semi-authoritarian politics, and access to U.S. consumer markets as Cold War allies',
      'Pure laissez-faire free-market capitalism with no state coordination of industrial policy and no investment in education by the state in any of the four Tiger economies',
      'Soviet-style central planning with state ownership of all major industries and no private firms or export industries during the entire period from 1960 through the 1990s',
      'Pure agricultural economies based on rice and tea exports with no manufacturing, finance, or technology sectors at any point during the period from 1960 through the 1990s'
    ],
    correctIndex: 0,
    explanation: 'The Tiger model is canonically: state-coordinated export-led growth + education + authoritarian politics + Cold War U.S. market access.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whgt-ent-3b',
    question: 'Which Chinese leader launched the 1978 "Reform and Opening" program that decollectivized agriculture and created Special Economic Zones?',
    options: ['Mao Zedong', 'Deng Xiaoping', 'Jiang Zemin', 'Hu Jintao'],
    correctIndex: 1,
    explanation: 'Deng Xiaoping consolidated power after Mao\'s death in 1976 and launched Reform and Opening in 1978.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whgt-ent-4a',
    question: 'Which best describes the West German Gastarbeiter ("guest worker") program of the 1960s?',
    options: [
      'A bilateral labor recruitment program that brought Turkish, Italian, Greek, and Yugoslav workers to West Germany on temporary contracts; many settled permanently and built lasting diaspora communities',
      'A West German policy that prohibited any foreign workers from entering Germany during the postwar economic recovery between 1955 and 1973 across all industrial sectors and skill levels',
      'A Soviet-organized program that resettled East German workers in Turkey and Yugoslavia during the Cold War to build communist labor solidarity across the Mediterranean basin',
      'A NATO security program that stationed Turkish and Italian soldiers in West Germany during the Cold War without any civilian labor migration component of any kind'
    ],
    correctIndex: 0,
    explanation: 'Gastarbeiter brought Turkish, Italian, Greek, and Yugoslav workers under temporary contracts that, in practice, became permanent immigration.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whgt-ent-4b',
    question: 'Which best characterizes the 1999 "Battle of Seattle"?',
    options: [
      'A coalition of trade unions, environmentalists, and indigenous-rights activists shut down a WTO ministerial meeting through mass protests, marking the international emergence of the anti-globalization movement',
      'A formal WTO ministerial agreement on environmental and labor standards that successfully resolved disputes between developed and developing countries during the late 1990s in Seattle',
      'A Seattle-based environmental group that successfully sued the WTO in U.S. federal court to force binding emissions reduction commitments from all WTO member states during 1999',
      'A Microsoft trade conference held in Seattle in 1999 that was unrelated to the WTO and produced no political mobilization or protest activity of any kind during the late 1990s'
    ],
    correctIndex: 0,
    explanation: 'Seattle 1999 is the international debut of the anti-globalization movement: union/environmental/indigenous coalition shut down the WTO meeting.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whgt-ent-5a',
    question: 'Which best characterizes the "embedded liberalism" of the 1945–1971 phase of globalization?',
    options: [
      'Trade liberalization through GATT and Bretton Woods exchange-rate stability paired with strong domestic welfare states, capital controls, and full-employment commitments by major industrial democracies',
      'Pure laissez-faire global capitalism with no welfare states, no capital controls, and no employment commitments by any major industrial democracy during the postwar period from 1945 to 1971',
      'Soviet-style central planning across all major industrial democracies including the U.S., Britain, France, West Germany, and Japan during the period from 1945 to 1971 with no private firms',
      'Pure autarky and trade isolation among all major industrial democracies during the period from 1945 to 1971 with no international trade or investment of any kind crossing national borders'
    ],
    correctIndex: 0,
    explanation: '"Embedded liberalism" = open international trade + strong domestic welfare states + capital controls.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whgt-ent-5b',
    question: 'Which response best identifies the dominant ideological shift between Phase 2 (1971–1991) and Phase 1 (1945–1971)?',
    options: [
      "A shift from 'embedded liberalism' (open trade + strong state + capital controls) to neoliberalism (open trade + retrenched state + open capital flows), associated with Thatcher (1979) and Reagan (1981) and exported through IMF Structural Adjustment Programs",
      "A shift from neoliberalism back to 'embedded liberalism' associated with the rise of welfare states across all major economies in the late 1970s in every major industrial democracy",
      "A shift from 'embedded liberalism' to Soviet-style central planning across all major Western democracies during the period from the 1970s into the 1990s, replacing private ownership",
      "A shift from 'embedded liberalism' to pure autarky and trade isolation across all major Western democracies during the period from the 1970s into the 1990s, ending all international trade"
    ],
    correctIndex: 0,
    explanation: 'Thatcher 1979 + Reagan 1981 + Volcker disinflation + capital control dismantling = the neoliberal turn.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whgt-ent-6a',
    question: "Which historical context is most essential for sourcing Stiglitz's 'Globalization and Its Discontents' (2002)?",
    options: [
      "The 1997 Asian Financial Crisis had recently exposed serious shortcomings in IMF crisis management; Stiglitz had served as World Bank Chief Economist (1997–2000); 1999 Seattle protests had launched the public anti-globalization movement",
      "The 2008 Global Financial Crisis had fully unfolded by the time the book was published, providing the central case study for Stiglitz's critique of post-2008 economic management decisions",
      "The book was published before any major financial crisis of the post-1990 globalization era and treated globalization as a hypothetical future scenario rather than a phenomenon already in motion",
      "Stiglitz wrote the book as an outsider with no professional experience at the World Bank, the IMF, or any other Bretton Woods institution at any point during his economics career"
    ],
    correctIndex: 0,
    explanation: '1997 Asian Crisis + Stiglitz\'s World Bank tenure + 1999 Seattle is the canonical context for Stiglitz 2002.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whgt-ent-6b',
    question: 'Which short answer best demonstrates AP "complexity" by complicating a single-cause narrative about globalization?',
    options: [
      "Although the 2008 Global Financial Crisis is often blamed on U.S. subprime mortgages, scholars note that pre-2008 capital account liberalization, European bank purchases of U.S. mortgage-backed securities, and the eurozone\'s structural imbalances together transmitted the crisis globally",
      "The 2008 Global Financial Crisis was caused entirely by U.S. subprime mortgages and there were no other contributing factors of any kind from European banks, capital markets, or the eurozone in any phase of the crisis",
      "The 2008 Global Financial Crisis had no connection to U.S. subprime mortgages and was caused entirely by the People's Republic of China and its trade surplus with the United States during the period",
      "The 2008 Global Financial Crisis was a myth and there was no measurable global recession during the period from 2008 through 2010 in any major economy in any region of the world"
    ],
    correctIndex: 0,
    explanation: 'Naming subprime PLUS European bank exposures PLUS eurozone imbalances is the canonical AP complexity move.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whgt-ent-7a',
    question: 'In which year did China formally join the World Trade Organization, integrating its economy into the rules-based global trading system?',
    options: ['1995', '1999', '2001', '2008'],
    correctIndex: 2,
    explanation: 'December 11, 2001. Manufacturing share of global exports surged in the years that followed.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'whgt-ent-7b',
    question: 'Which event most directly marks the end of the original Bretton Woods exchange-rate system?',
    options: [
      "The 1971 'Nixon Shock,' in which the U.S. unilaterally ended dollar-gold convertibility, pushing the world toward floating exchange rates",
      'The 1994 entry into force of NAFTA, which committed the U.S., Canada, and Mexico to a trilateral free-trade agreement covering goods and services',
      'The 1995 founding of the WTO, which replaced GATT as the binding rule-making body for international trade in goods and services',
      'The 2008 Global Financial Crisis, which began with the collapse of subprime mortgage-backed securities held by U.S. and European banks'
    ],
    correctIndex: 0,
    explanation: 'August 15, 1971 — Nixon ended dollar-gold convertibility.',
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
