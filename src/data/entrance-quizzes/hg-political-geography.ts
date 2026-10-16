/**
 * Entrance Quiz — Political Geography & Boundaries (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: boundary origins, maritime zones
  {
    id: 'hg-political-geography-ent-1a',
    question: "Two governments agreed by treaty on a boundary running through a forest where almost no one lived. Over the following decades, farms and towns grew up on both sides of the line. The boundary is best classified as:",
    options: ["subsequent", "superimposed", "antecedent", "relic"],
    correctIndex: 2,
    explanation: "An antecedent boundary is drawn before an area is settled. A subsequent boundary follows existing cultural patterns, a superimposed one is forced on a region by outsiders, and a relic boundary no longer functions.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-political-geography-ent-1b',
    question: "A country's coast guard stops a foreign fishing boat 150 nautical miles offshore, in waters where the country claims sole rights to the fish. Under the Law of the Sea, which zone gives the country those rights?",
    options: ["Its territorial sea", "The high seas", "Its contiguous zone", "Its exclusive economic zone"],
    correctIndex: 3,
    explanation: "The exclusive economic zone reaches 200 nautical miles from the coast and gives rights to fish, oil and other resources. The territorial sea extends only 12 nautical miles and the contiguous zone 24.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Political Power and Territoriality: choke points, decolonization
  {
    id: 'hg-political-geography-ent-2a',
    question: "A state borders a narrow strait through which much of the world's seaborne oil passes. Which development would most reduce the leverage this location gives that state?",
    options: ["A rise in the number of oil tankers that use the strait", "A new pipeline that carries oil overland around the strait", "A treaty confirming the state's 12-mile territorial sea", "A deeper channel that lets bigger ships pass through"],
    correctIndex: 1,
    explanation: "A choke point's leverage comes from traffic having no other route, and a pipeline around the strait gives shippers that alternative. More tankers or a deeper channel would raise the strait's importance, and a 12-mile territorial sea is already standard under the Law of the Sea.",
    partNumber: 2,
    partTitle: "Political Power and Territoriality",
  },
  {
    id: 'hg-political-geography-ent-2b',
    question: "United Nations membership grew from 51 states in 1945 to 99 in 1960, 159 in 1990 and 189 in 2000. Which process best explains the jump from 51 to 99?",
    options: ["Decolonization across Africa and Asia", "Breakup of the Soviet Union and Yugoslavia", "Devolution of power in Western Europe", "Supranational unions adding new members"],
    correctIndex: 0,
    explanation: "Between 1945 and 1960 dozens of former colonies in Africa and Asia became independent states and joined the UN. The Soviet and Yugoslav breakups came in the 1990s, and devolution does not create new states.",
    partNumber: 2,
    partTitle: "Political Power and Territoriality",
  },
  // Part 3 — Boundaries in Practice: stages and changing functions
  {
    id: 'hg-political-geography-ent-3a',
    question: "After a treaty describes a border in words, cartographers draw the described line onto official maps. Which stage of boundary making is this?",
    options: ["Definition", "Delimitation", "Demarcation", "Administration"],
    correctIndex: 1,
    explanation: "Delimitation is drawing the defined boundary on maps. Definition is the treaty's wording, demarcation is marking the line on the ground with pillars or fences, and administration is managing it over time.",
    partNumber: 3,
    partTitle: "Boundaries in Practice",
  },
  {
    id: 'hg-political-geography-ent-3b',
    question: "Since two neighboring countries joined an agreement that removed routine checks at their shared border, thousands of commuters cross it daily, though the line itself has not moved. Which statement best describes this change?",
    options: ["The boundary has become a relic that no longer functions.", "The two countries have merged into one sovereign state.", "The boundary has been reclassified as an antecedent line.", "Its function shifted, yet it sits in the same place."],
    correctIndex: 3,
    explanation: "A boundary's function, such as how much it controls movement, can change without the line moving. The border still marks the limit of each state's sovereignty, so it is not a relic.",
    partNumber: 3,
    partTitle: "Boundaries in Practice",
  },
  // Part 4 — Internal Boundaries: redistricting, packing
  {
    id: 'hg-political-geography-ent-4a',
    question: "A state has 4 districts of 100 voters each. Party Y has 240 of the 400 voters (60 percent). The legislature draws districts in which Party Y has 95, 95, 25 and 25 voters, so Party Y wins only 2 of 4 seats. Which technique was used against Party Y?",
    options: ["Packing, crowding its voters into a few safe districts", "Cracking, spreading its voters thinly across every district", "Reapportionment, shifting the state's seats to another state", "Compactness, keeping every district regular in its shape"],
    correctIndex: 0,
    explanation: "Party Y's voters were concentrated in two districts it wins by huge margins, wasting votes it could have used elsewhere, which is packing. Cracking would spread its voters evenly so it fell short everywhere.",
    partNumber: 4,
    partTitle: "Internal Boundaries: Redistricting and Gerrymandering",
  },
  {
    id: 'hg-political-geography-ent-4b',
    question: "After a census, State M keeps the same number of House seats, but its legislature redraws district lines because people have moved from rural areas into the suburbs. This process is:",
    options: ["reapportionment, dividing House seats among the states", "redistricting, adjusting boundaries inside a single state", "gerrymandering, since any new line favors a party", "devolution, transferring power to the suburbs"],
    correctIndex: 1,
    explanation: "Redrawing district lines within a state so districts have equal populations is redistricting. Reapportionment divides the 435 seats among states, and redrawing lines is gerrymandering only when it is done to favor a party or group.",
    partNumber: 4,
    partTitle: "Internal Boundaries: Redistricting and Gerrymandering",
  },
  // Part 5 — Governance, Devolution and Supranationalism
  {
    id: 'hg-political-geography-ent-5a',
    question: "Which situation shows a state giving up some of its sovereignty to a supranational organization?",
    options: ["A national government shares power with its provinces under a constitution.", "A region wins its own elected parliament after a referendum.", "Members adopt one currency and cede control of interest rates.", "Two countries sign a one-time agreement to build a bridge across a river."],
    correctIndex: 2,
    explanation: "Joining a currency union hands control of interest rates to a shared central bank, a pooling of sovereignty among three or more states. Sharing power with provinces is federalism, a regional parliament is devolution, and a one-time bridge deal is a simple bilateral agreement.",
    partNumber: 5,
    partTitle: "Governance, Devolution and Supranationalism",
  },
  {
    id: 'hg-political-geography-ent-5b',
    question: "Country Z's government no longer controls large parts of its territory; armed groups run their own courts and collect taxes, and public schools have closed. Country Y has low incomes but holds regular elections and provides basic services. Which is a failed state?",
    options: ["Country Y alone, since its average incomes are low", "Neither country, since both are members of the UN", "Both countries, since neither of them is wealthy", "Country Z alone, as it cannot rule much of its land"],
    correctIndex: 3,
    explanation: "A failed state is one whose government cannot control its territory or provide basic services. Poverty alone does not make a state fail, and UN membership does not prevent it.",
    partNumber: 5,
    partTitle: "Governance, Devolution and Supranationalism",
  },
  // Part 6 — AP Exam Practice: referendum data, explaining devolution
  {
    id: 'hg-political-geography-ent-6a',
    question: "Region R held two independence referendums. In 1990: Yes 35 percent, No 65 percent, turnout 80 percent. In 2010: Yes 48 percent, No 52 percent, turnout 91 percent. Which conclusion is best supported?",
    options: ["Region R became independent after the 2010 vote.", "Turnout fell between the first and second votes.", "Backing for leaving rose, but it lost on both occasions.", "Most voters chose independence in the 2010 vote."],
    correctIndex: 2,
    explanation: "The Yes share rose from 35 to 48 percent, yet No won both votes, so the region stayed in the country. Turnout rose from 80 to 91 percent.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Devolution and Supranational Data",
  },
  {
    id: 'hg-political-geography-ent-6b',
    question: "A region has its own language and a higher income than the rest of its country. A free-response question asks students to explain why such a region might seek more autonomy. Which response earns the point?",
    options: ["The region has a different language and a higher income than the national average.", "Residents resent subsidizing poorer regions, so they want their own budget.", "This situation is an example of a centrifugal force acting within a state.", "Regions often want more power for many different reasons over time."],
    correctIndex: 1,
    explanation: "Explain requires a mechanism: resentment at sending tax money to poorer regions motivates demands for self-government. Restating the region's traits describes, labeling the force identifies, and the vague claim gives no cause.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Devolution and Supranational Data",
  },
  // Part 7 — Synthesis Review: distinctions and forces
  {
    id: 'hg-political-geography-ent-7a',
    question: "Which pair of terms is correctly distinguished?",
    options: ["Reapportionment divides seats among states; redistricting redraws lines within one.", "Delimitation marks a boundary on the ground; demarcation draws it on maps.", "Devolution creates a new sovereign state; independence shares power with a region.", "Packing spreads a rival's voters thinly; cracking concentrates them in a few districts."],
    correctIndex: 0,
    explanation: "Reapportionment allocates House seats among states, and redistricting redraws lines inside a state. The other three pairs are reversed: demarcation marks the ground, devolution shares power without independence, and packing concentrates voters.",
    partNumber: 7,
    partTitle: "Synthesis Review: Power, Lines and Scale",
  },
  {
    id: 'hg-political-geography-ent-7b',
    question: "Which government policy is most likely to strengthen centrifugal forces in a country?",
    options: ["Building highways and power lines evenly across every region", "Allowing every major language to be used in the national courts", "Concentrating investment in the capital as other regions decline", "Creating a national holiday that honors each of its ethnic groups"],
    correctIndex: 2,
    explanation: "Uneven development breeds resentment in neglected regions and can fuel separatism, a centrifugal force. Evenly spread infrastructure, language rights and inclusive symbols are centripetal.",
    partNumber: 7,
    partTitle: "Synthesis Review: Power, Lines and Scale",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Political Power and Territoriality" },
    { partNumber: 3, partTitle: "Boundaries in Practice" },
    { partNumber: 4, partTitle: "Internal Boundaries: Redistricting and Gerrymandering" },
    { partNumber: 5, partTitle: "Governance, Devolution and Supranationalism" },
    { partNumber: 6, partTitle: "AP Exam Practice: Devolution and Supranational Data" },
    { partNumber: 7, partTitle: "Synthesis Review: Power, Lines and Scale" },
  ]
}
