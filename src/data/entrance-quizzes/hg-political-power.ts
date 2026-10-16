/**
 * Entrance Quiz — Political Power & Territoriality (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: forms of control over people, land and resources
  {
    id: 'hg-political-power-ent-1a',
    question: "Firms from a former colonial ruler own most of an independent country's mines and send the profits home, and loans from the former ruler require the country to keep its markets open. No foreign official governs the country. This situation is best described as:",
    options: ["neocolonialism", "colonialism", "devolution", "irredentism"],
    correctIndex: 0,
    explanation: "Neocolonialism is influence over a formally independent state through economic or political pressure rather than direct rule. Colonialism would require the outside power to govern the territory itself.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-political-power-ent-1b',
    question: "A region lies between two rival great powers. Each power arms different factions inside the region's states, and conflicts break out again and again. The region is best described as:",
    options: ["a choke point", "a forward capital", "a shatterbelt", "a supranational union"],
    correctIndex: 2,
    explanation: "A shatterbelt is a region caught between competing outside powers and divided internally, so conflict is frequent. A choke point is a narrow passage on a trade route.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — How States Divide Power: the constitutional test, label vs practice
  {
    id: 'hg-political-power-ent-2a',
    question: "In Country A, the national parliament can abolish any regional assembly by passing an ordinary law. In Country B, changing a province's powers requires a constitutional amendment approved by the provinces. Which statement is correct?",
    options: ["Country B is unitary, while Country A is federal.", "Country A is unitary, and Country B is federal.", "Both are federal, since both have regional governments.", "Neither is federal, since both have a national parliament."],
    correctIndex: 1,
    explanation: "The key test is whether regional powers are protected by the constitution. Country A's center can abolish its regions at will (unitary), while Country B's provinces are constitutionally protected (federal).",
    partNumber: 2,
    partTitle: "How States Divide Power: Four Cases on the Spectrum",
  },
  {
    id: 'hg-political-power-ent-2b',
    question: "Country D is legally unitary, yet its municipalities run hospitals and schools and account for about 60 percent of all public spending. What does this best show?",
    options: ["Country D must in fact be a federal state.", "High local spending shows that Country D is a failed state.", "Spending figures prove that its regions hold constitutional powers.", "Its formal label differs from how power actually works there."],
    correctIndex: 3,
    explanation: "Governance is a spectrum: a unitary state can still hand large responsibilities to local governments. Spending does not make those powers constitutionally protected, so the state remains unitary.",
    partNumber: 2,
    partTitle: "How States Divide Power: Four Cases on the Spectrum",
  },
  // Part 3 — Centripetal and Centrifugal Forces: tools and the location of divisions
  {
    id: 'hg-political-power-ent-3a',
    question: "A country moves its capital from a crowded coastal city to a newly planned city in its less developed interior, near the center of its territory. This move is best described as:",
    options: ["a forward capital meant to pull investment and unity inward", "a primate city created by colonial trade routes", "a centrifugal force that keeps the capital's power on the coast", "an irredentist claim to land in a neighboring state"],
    correctIndex: 0,
    explanation: "A forward capital is relocated toward the interior or a frontier to signal national priorities and spread development, a centripetal tool. The move takes power away from the coast, not toward it.",
    partNumber: 3,
    partTitle: "Centripetal and Centrifugal Forces: Weighing the Balance",
  },
  {
    id: 'hg-political-power-ent-3b',
    question: "In Country P, a language minority is also a religious minority, is poorer than average and lives mostly in one border region. In Country Q, language and religious lines cut across each other and every group is spread throughout the country. Which country is more likely to face a separatist movement?",
    options: ["Country Q, since it has more kinds of division", "Country P, since every minority seeks independence", "Country P, since its divisions overlap in one area", "Country Q, since scattered groups claim more territory"],
    correctIndex: 2,
    explanation: "Divisions that reinforce one another and are concentrated in one region, especially a border region, give a group both a grievance and a territory to claim. Cross-cutting divisions and dispersed groups tend to hold a state together.",
    partNumber: 3,
    partTitle: "Centripetal and Centrifugal Forces: Weighing the Balance",
  },
  // Part 4 — Devolutionary Factors: classifying cases, limits of prediction
  {
    id: 'hg-political-power-ent-4a',
    question: "During a civil war, armed groups expelled minority families from mixed towns, and the country later split into several units, each dominated by one group. Which devolutionary factor does this case illustrate?",
    options: ["Irredentism", "Terrorism", "Ethnic cleansing", "Physical geography"],
    correctIndex: 2,
    explanation: "Forcibly removing a group from a territory is ethnic cleansing, one of the factors the CED lists as breaking up multiethnic states. Irredentism is a neighboring state's claim to territory.",
    partNumber: 4,
    partTitle: "Devolutionary Factors: Reading the Cases and the Limits",
  },
  {
    id: 'hg-political-power-ent-4b',
    question: "Which observation best shows that physical separation alone does not cause a state to break apart?",
    options: ["A state whose two halves were divided by a neighbor's territory split after a war.", "Several island states divided by wide stretches of sea have stayed united.", "Landlocked states face higher trade costs than states that have long coastlines.", "Separatist referendums in some regions have failed by narrow margins in the past."],
    correctIndex: 1,
    explanation: "If separated island states remain intact, separation cannot by itself cause breakup; it raises pressure that institutions and identity can offset. A split state supports the claim rather than testing it, and the other two concern different factors.",
    partNumber: 4,
    partTitle: "Devolutionary Factors: Reading the Cases and the Limits",
  },
  // Part 5 — Challenges to Sovereignty: technology, depth of supranational pooling
  {
    id: 'hg-political-power-ent-5a',
    question: "During protests, activists organize through encrypted messaging apps, while the government blocks mobile data in the protest region and tracks organizers' phones. What does this best show?",
    options: ["Communication technology can both challenge and extend state control.", "Messaging technology always weakens a government's control.", "The protest region has gained sovereignty over its own networks.", "The protests were caused by the spread of messaging technology."],
    correctIndex: 0,
    explanation: "The same networks help citizens organize and help governments censor and watch them. Technology speeds movements whose causes usually lie in political and economic grievances.",
    partNumber: 5,
    partTitle: "Challenges to Sovereignty in a Connected World",
  },
  {
    id: 'hg-political-power-ent-5b',
    question: "Organization X makes decisions by consensus and follows a rule of non-interference in members' internal affairs. Organization Y has a court whose rulings override its members' national laws. Which statement is accurate?",
    options: ["X limits its members' sovereignty more than Y does.", "Neither one counts as a supranational organization.", "Y limits its members' sovereignty more than X does.", "Both hold full sovereignty over their member states."],
    correctIndex: 2,
    explanation: "Supranational bodies range from consultative forums to organizations whose law binds members; a court that overrides national law pools far more sovereignty than consensus and non-interference. Neither holds full sovereignty, since members can leave.",
    partNumber: 5,
    partTitle: "Challenges to Sovereignty in a Connected World",
  },
  // Part 6 — AP Exam Practice: revenue, forces and scale
  {
    id: 'hg-political-power-ent-6a',
    question: "Country F's constitution guarantees each region a share of cabinet posts and army officer positions in proportion to its population. Meanwhile, a diamond-mining region sends most of its tax revenue to the capital and receives little investment back. Which pairing of forces is most accurate?",
    options: ["The quota is centripetal; the mining region's grievance is centrifugal.", "Guaranteed posts are centrifugal; the mining region's grievance is centripetal.", "Both the quota and the mining region's grievance are centripetal.", "Both the quota and the mining region's grievance are centrifugal."],
    correctIndex: 0,
    explanation: "Guaranteeing every region a share of national power ties regions to the center (centripetal), while a region whose wealth flows out with little return feels exploited, a centrifugal force rooted in uneven development.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Nigeria's Federal Map",
  },
  {
    id: 'hg-political-power-ent-6b',
    question: "In an oil-producing country, oil money funds schools in every state, the producing region bears most of the pollution, and some villages in that region still lack clean water. Which statement correctly matches an effect to its scale?",
    options: ["Oil money funding schools in every state is a local-scale effect.", "Pollution borne by the producing region is a national-scale effect.", "Villages in that region lacking clean water is a global-scale effect.", "The producing region's pollution is a regional-scale effect."],
    correctIndex: 3,
    explanation: "Funding for every state operates nationally, pollution concentrated in one producing region is regional, and conditions in particular villages are local. Naming the right scale is part of a complete answer.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Nigeria's Federal Map",
  },
  // Part 7 — Synthesis Review: avoiding common errors
  {
    id: 'hg-political-power-ent-7a',
    question: "A country doubles its number of states, but the new states receive nearly all their revenue from the central government and cannot set their own taxes. What is the best conclusion?",
    options: ["The country has become a unitary state.", "More units need not mean more decentralization.", "Doubling the states doubled regional power.", "The new states now hold full sovereignty."],
    correctIndex: 1,
    explanation: "The number of units says little about how much power each holds; states that depend on central revenue may have little real authority. They remain units within a federal state, not sovereign states.",
    partNumber: 7,
    partTitle: "Synthesis Review: Power, Devolution and Balance",
  },
  {
    id: 'hg-political-power-ent-7b',
    question: "A classmate says, \"Country R has a federal constitution, so it must be a democracy.\" Which response best corrects this claim?",
    options: ["Correct, because a federal constitution requires regular national elections.", "Federal states cannot have strong central leaders, so R must be democratic.", "Correct, because only unitary states are ever ruled by authoritarian leaders.", "Federalism describes how power is divided, not whether a state is democratic."],
    correctIndex: 3,
    explanation: "A state can be federal on paper yet centralized and undemocratic, and a unitary state can be fully democratic. The federal-unitary distinction concerns where power sits, not how leaders are chosen.",
    partNumber: 7,
    partTitle: "Synthesis Review: Power, Devolution and Balance",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "How States Divide Power: Four Cases on the Spectrum" },
    { partNumber: 3, partTitle: "Centripetal and Centrifugal Forces: Weighing the Balance" },
    { partNumber: 4, partTitle: "Devolutionary Factors: Reading the Cases and the Limits" },
    { partNumber: 5, partTitle: "Challenges to Sovereignty in a Connected World" },
    { partNumber: 6, partTitle: "AP Exam Practice: Nigeria's Federal Map" },
    { partNumber: 7, partTitle: "Synthesis Review: Power, Devolution and Balance" },
  ]
}
