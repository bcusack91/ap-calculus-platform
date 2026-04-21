/**
 * Entrance Quiz - Newly Independent States After 1945 (AP World History, Unit 8)
 * 14 questions - 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'whnis-ent-1a',
    question: 'Which structural inheritance most directly shaped the political problems of post-independence African states?',
    options: [
      'Colonial borders drawn at the 1884–85 Berlin Conference cut across ethnic and linguistic groups, producing post-independence states whose populations did not share a common identity',
      'Newly independent African states were uniformly ethnically homogeneous and the colonial era had drawn borders that closely matched precolonial ethnic boundaries',
      'European colonial powers had built diversified industrial economies in their African colonies that gave new states ready-made manufacturing bases',
      'Newly independent African states inherited functioning multi-party parliamentary democracies fully staffed with experienced African politicians and civil servants'
    ],
    correctIndex: 0,
    explanation: 'The Berlin Conference borders are the canonical AP example of colonial inheritance shaping post-independence conflict (Nigeria-Biafra, Sudan, DRC).',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whnis-ent-1b',
    question: 'Which best characterizes the typical post-independence economic inheritance?',
    options: [
      'A diversified industrial economy producing finished consumer goods for both domestic and global markets in fully developed sectors',
      'An export-dependent economy oriented to producing raw materials for the former colonial power, with limited domestic industry or processing',
      'A self-sufficient agricultural economy that did not engage in international trade and required no external markets to function',
      'A pure service-sector economy based on global finance and information technology inherited from the colonial period'
    ],
    correctIndex: 1,
    explanation: 'Colonial economies were built to export raw materials. Diversifying away from this dependency was the central economic project of newly independent states.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whnis-ent-2a',
    question: 'Which best describes the import-substitution industrialization (ISI) strategy adopted by many post-independence states from the 1940s to the 1970s?',
    options: [
      'Government use of tariffs and subsidies to build domestic industries that replaced imported goods, often producing initial growth followed by inefficiency and balance of payments crises',
      'Government commitment to free trade and zero tariffs, designed to produce rapid integration into global capitalist markets without protecting domestic firms',
      'Government withdrawal from all economic planning and full reliance on private foreign investment to direct industrial development',
      'Government adoption of identical Soviet-style central planning across all post-independence economies regardless of political alignment'
    ],
    correctIndex: 0,
    explanation: 'ISI is the canonical post-independence strategy: protect domestic industry behind tariffs to substitute for imports.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whnis-ent-2b',
    question: 'Which best characterizes the outcome of land reform in Mexico under President Lázaro Cárdenas in the 1930s?',
    options: [
      'About 45 million acres were redistributed through communal ejido holdings, which stabilized rural support for the ruling PRI for decades after the reforms',
      'Land was concentrated in the hands of foreign oil companies and the largest hacienda owners, removing peasant access to communal lands',
      'Land reform was attempted but immediately reversed within months and Mexican land tenure returned to the pre-revolutionary pattern',
      'Land reform created a new class of large commercial farmers who became the dominant landholders, eliminating ejido communal holdings'
    ],
    correctIndex: 0,
    explanation: 'Cárdenas\'s ejido distributions are the most successful Latin American land reform of the 20th century. They built durable peasant loyalty to the PRI.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whnis-ent-3a',
    question: 'Which best explains the historical significance of the 1956 Suez Crisis?',
    options: [
      'Nasser\'s nationalization of the canal triggered an Anglo-French-Israeli invasion that the U.S. and USSR jointly pressured to withdraw, marking the end of European great-power independence',
      'The Suez Crisis produced a binding peace treaty between Egypt and Israel that ended Arab-Israeli conflict for the rest of the 20th century without further wars',
      'The Suez Crisis was a routine border dispute that produced no major changes in the international position of Britain, France, Egypt, or the United States',
      'The Suez Crisis was a Soviet-Egyptian war in which the United States and Britain defended Egypt from Soviet invasion of the Sinai Peninsula'
    ],
    correctIndex: 0,
    explanation: 'Suez 1956 is the canonical end-of-European-empire moment. Britain and France discovered they could no longer act independently of the U.S.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whnis-ent-3b',
    question: 'Which best characterizes the Asian Tigers economic model from the 1960s to the 1990s?',
    options: [
      'Strong state coordination of private firms toward export industries, heavy investment in education, and authoritarian or semi-authoritarian politics, with access to U.S. markets as Cold War allies',
      'Pure laissez-faire free-market capitalism with no state involvement in directing economic development and no industrial policy',
      'Soviet-style central planning with no private firms or export industries during the entire period from 1960 to 1990 across all four Tiger economies',
      'Pure agricultural economies based on rice exports with no manufacturing or finance sectors at any point during the period from 1960 to 1990'
    ],
    correctIndex: 0,
    explanation: 'The Tiger model is canonically: state-coordinated export-led growth + education investment + authoritarian politics + Cold War U.S. market access.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whnis-ent-4a',
    question: 'Which best illustrates how postcolonial migration reshaped both former colonial powers and newly independent states after 1945?',
    options: [
      'Caribbean migrants to Britain during the Windrush generation (1948–71) and Algerian migrants to France during the 1950s–70s reshaped European race relations and built remittance-sending diasporas',
      'Postcolonial migration was entirely contained within newly independent states and did not produce any flows to former colonial powers in Europe between 1948 and the 1980s',
      'Postcolonial migration occurred only from Europe to former colonies and did not produce any meaningful flows back to Britain, France, or other former colonial powers',
      'Postcolonial migration produced no economic effects on sending countries and did not generate any remittances or any sustained ties between diasporas and home countries'
    ],
    correctIndex: 0,
    explanation: 'The Windrush and Algerian migrations are the canonical postcolonial flows to former metropoles. They reshaped European race relations and home-country economies through remittances.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whnis-ent-4b',
    question: 'Which best characterizes the long-term significance of the 1979 Iranian Revolution for the global rise of religious-political movements?',
    options: [
      'It demonstrated that a mass religious movement could overthrow a U.S.-backed secular regime, inspiring religious-political movements (Sunni Islamist, Hindu nationalist, religious Zionist) across multiple regions',
      'It produced a single Islamic state confined to Iran with no influence on religious-political movements in any other region or religious tradition during the late 20th century',
      'It returned Iran to the rule of the Shah within months and had no lasting effect on the role of religion in Middle Eastern or global politics',
      'It dissolved all religious movements globally by 1980 and produced a fully secularized international order without religious-political mobilization'
    ],
    correctIndex: 0,
    explanation: 'The Iranian Revolution showed that religious mobilization could overthrow a Cold War client state. It became a reference point for many later religious-political movements.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whnis-ent-5a',
    question: 'Which best characterizes the typical Phase 1 (1945–1965) post-independence political pattern?',
    options: [
      'Charismatic founding leaders, ambitious modernization plans (dams, steel mills, five-year plans), state-led ISI economies, and single-party or military regimes asserting national unity',
      'Multi-party democracies with stable parliamentary opposition and fully privatized market economies with no state involvement during the immediate post-independence years',
      'Direct foreign rule by either the United States or the Soviet Union with no formal independence and no domestic leaders or economic policy choices',
      'Pre-industrial agrarian societies with no significant industrial development plans and no state institutions between independence and 1965'
    ],
    correctIndex: 0,
    explanation: 'The Phase 1 pattern is canonical: founding leader (Nehru, Nasser, Nkrumah, Sukarno), high-modernist plans, ISI, single-party or military rule.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whnis-ent-5b',
    question: 'Which best describes the impact of 1980s IMF Structural Adjustment Programs on African economies?',
    options: [
      'SAPs forced governments to cut social spending, devalue currencies, and open to foreign investment in exchange for IMF loans, often producing severe short-term hardship',
      'SAPs produced rapid industrial growth and full employment across all African economies during the 1980s and lifted most populations out of poverty within a decade',
      'SAPs strengthened state-led economic planning and expanded public sector spending across African economies as part of an international development assistance commitment',
      'SAPs had no measurable impact on African economic policy or social conditions and were rejected by all African governments in favor of continued state-led ISI'
    ],
    correctIndex: 0,
    explanation: 'SAPs imposed liberalization in exchange for loans. The short-term result was widespread social hardship; the long-term legacy is contested.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whnis-ent-6a',
    question: "Which historical context is most essential for sourcing Nasser's 1956 Suez Nationalization Speech?",
    options: [
      'Egypt had been a British protectorate since 1882; the U.S. had just withdrawn financing for the Aswan High Dam; Britain and France controlled the Suez Canal Company; the speech directly preceded the Anglo-French-Israeli invasion in October 1956',
      'Egypt had been an independent monarchy under King Farouk since 1922 and the speech announced a peaceful transition of canal management to a multinational consortium under United Nations auspices',
      'Egypt was a Soviet satellite state in 1956 and the speech announced the formal accession of Egypt to the Warsaw Pact military alliance during the early Cold War',
      'Egypt had no significant historical relationship with the Suez Canal before 1956 and the speech announced the construction of an entirely new canal not connected to the existing waterway'
    ],
    correctIndex: 0,
    explanation: 'The Suez speech is best sourced by naming the British protectorate history, U.S. withdrawal of Aswan financing, Anglo-French canal control, and the impending invasion.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whnis-ent-6b',
    question: 'Which short answer best demonstrates AP "complexity" by complicating a single-cause post-independence argument?',
    options: [
      "Although Indian economic stagnation in the 1980s is often blamed on the License Raj, scholars note that India's political stability, durable democracy, and English-speaking workforce were preconditions for the rapid growth that followed 1991 liberalization",
      'Indian economic stagnation in the 1980s was caused entirely by the License Raj and there were no other contributing factors and no countervailing benefits of any kind from state-led planning',
      'Indian economic stagnation in the 1980s had no connection to the License Raj and was caused entirely by external factors unrelated to Indian economic policy choices',
      'Indian economic stagnation in the 1980s was a myth and India experienced rapid economic growth throughout the period from independence to liberalization without any meaningful slowdowns'
    ],
    correctIndex: 0,
    explanation: 'The "complexity" point requires complicating a dominant narrative. Naming both the costs and the institutional preconditions of the License Raj is the canonical AP move.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whnis-ent-7a',
    question: 'Which year saw both Indian and Pakistani independence and the Partition that displaced approximately 14 million people?',
    options: ['1945', '1947', '1949', '1956'],
    correctIndex: 1,
    explanation: '1947: August 14 (Pakistan) and August 15 (India). The Partition violence killed about 1 million and displaced 14 million.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'whnis-ent-7b',
    question: 'Which event most directly marks the end of European great-power independence in foreign affairs?',
    options: [
      'The 1956 Suez Crisis, in which the U.S. and USSR jointly pressured Britain, France, and Israel to withdraw from Egypt after their invasion to retake the Suez Canal',
      'The 1955 Warsaw Pact founding, which formalized the Soviet-led military alliance into a permanent treaty structure',
      'The 1949 founding of NATO, which committed the United States to the collective defense of Western Europe',
      'The 1961 Bay of Pigs invasion, in which Cuban exiles backed by the U.S. CIA failed to overthrow the Castro government'
    ],
    correctIndex: 0,
    explanation: 'Suez 1956 is the canonical end-of-European-great-power-independence moment. Britain and France learned they could no longer act independently of the U.S.',
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
