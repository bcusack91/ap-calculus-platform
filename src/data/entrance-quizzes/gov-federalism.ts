/**
 * Entrance Quiz — Federalism (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: unitary/confederal/federal systems; enumerated, reserved, concurrent powers
  {
    id: 'gov-federalism-ent-1a',
    question: "Under a country's founding charter, its member states keep full sovereignty, the central assembly may act only with the unanimous consent of the states, and it cannot tax citizens directly. How is this government organized?",
    options: ["A unitary system", "A federal system", "A confederal system", "A parliamentary system"],
    correctIndex: 2,
    explanation: "In a confederal system the member states hold sovereignty and the central body depends on them, as under the Articles of Confederation, whose Congress could not tax individuals. A federal system divides sovereignty by constitution, and a unitary system concentrates it at the center.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-federalism-ent-1b',
    question: "Which of the following actions is an exercise of a concurrent power under the U.S. Constitution?",
    options: ["Congress declares war on a foreign nation that attacked a U.S. ally", "A state prints its own paper currency for residents to use in local trade", "Congress sets one minimum age for marriage that applies in every state", "A state borrows money by selling bonds to pay for new bridges and highways"],
    correctIndex: 3,
    explanation: "Borrowing, like taxing and establishing courts, is held by both the national and state governments. Declaring war is an enumerated federal power, coining or printing money is denied to the states, and marriage rules are a reserved state power.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: grants-in-aid, mandates, preemption, who prefers which tool
  {
    id: 'gov-federalism-ent-2a',
    question: "Congress sends each state a lump sum for \"public safety\" and lets each state decide whether to spend it on police, courts, or crime prevention, with only light reporting rules. Which statement correctly identifies this tool?",
    options: ["A block grant, the type states generally prefer", "A categorical grant, the type states generally prefer", "Revenue sharing, the most common form of federal aid today", "A categorical grant, the most tightly restricted form of federal aid"],
    correctIndex: 0,
    explanation: "Money for a broad purpose with wide state discretion is a block grant, which states prefer because it lets them set priorities. Categorical grants are restricted to narrow purposes and are preferred by the national government, and revenue sharing is the least used form of aid today.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-federalism-ent-2b',
    question: "A federal law sets nationwide labeling rules for packaged food and states that no state may impose different labeling requirements. A state later requires an extra warning label on the same products. What is the most likely result if the state law is challenged?",
    options: ["Health and safety are reserved powers, so the state rule stands", "The state rule falls, since valid federal law preempts it", "Both rules apply, since labeling is a concurrent power", "The federal rule falls, since states may regulate products sold inside them"],
    correctIndex: 1,
    explanation: "When Congress acts within its powers and expressly bars different state rules, the Supremacy Clause makes the federal law controlling, so the conflicting state requirement is preempted. Concurrent and reserved powers do not let a state override valid federal law.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: dual, cooperative, new (devolution) federalism
  {
    id: 'gov-federalism-ent-3a',
    question: "A mid-century federal law pays most of the cost of a nationwide road network and sets uniform design standards, while state agencies plan the routes, build the roads, and maintain them. Which model of federalism does this arrangement illustrate?",
    options: ["Dual federalism, since each level of government keeps to its own separate sphere", "Devolution, since control of a national program is handed back to the states", "A confederal system, since the national government depends on state approval", "Cooperative federalism, since federal money and rules mix with state implementation"],
    correctIndex: 3,
    explanation: "Federal funding and standards combined with state planning and administration are the hallmark of cooperative, or marble-cake, federalism. Dual federalism keeps the levels in separate spheres, and devolution returns discretion to the states rather than blending roles.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-federalism-ent-3b',
    question: "Which policy change best illustrates the trend often called devolution?",
    options: ["Congress tying federal education aid to new national testing rules", "Congress replacing an open-ended welfare program with block grants states design", "Congress creating a federal health program run under detailed national rules", "Federal courts applying more Bill of Rights protections to state governments"],
    correctIndex: 1,
    explanation: "Devolution shifts authority and discretion from the national government to the states, as when the 1996 welfare reform turned an entitlement program into a block grant that states design. National testing rules, detailed federal programs, and incorporation all move power toward Washington.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: civil rights, ideology, access points
  {
    id: 'gov-federalism-ent-4a',
    question: "A labor coalition spends years trying to get Congress to raise the federal minimum wage and fails each time. Which next step makes the best use of the multiple access points that federalism provides?",
    options: ["Ask the Supreme Court to set a new national wage", "Petition the President to raise all private wages by order", "Push a state ballot measure for a higher state wage floor", "Urge a state to declare the federal wage law void at home"],
    correctIndex: 2,
    explanation: "Because states hold concurrent power over wages, a group that loses in Congress can win a higher minimum at the state level, a direct use of multiple access points. Courts do not set wage levels, presidents cannot raise private wages by order, and states cannot void federal law.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-federalism-ent-4b',
    question: "In the 1950s, Southern officials cited states' rights to resist federal desegregation orders. In the 2010s, some cities led by liberals limited their cooperation with federal immigration enforcement, also citing local authority. What do these two episodes together suggest?",
    options: ["Support for state power tends to follow the level that favors one's goals", "Liberals have consistently opposed any expansion of state and local authority", "Arguments for state authority have always been tied to conservative policy goals", "Federal immigration law, unlike civil rights law, falls outside the Supremacy Clause"],
    correctIndex: 0,
    explanation: "The same states'-rights logic served opposite causes in the two eras, which suggests that each side's view of federalism tends to follow which level of government is likely to advance its policy aims. Federal immigration law, like any valid federal law, is supreme over conflicting state law.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: Articles, nullification, Reconstruction, 1937, modern revival
  {
    id: 'gov-federalism-ent-5a',
    question: "In 1832, a South Carolina convention declared a federal tariff law void and unenforceable within the state's borders. Which constitutional provision did this claim most directly contradict?",
    options: ["The Equal Protection Clause", "The Supremacy Clause of Article VI", "The Necessary and Proper Clause", "The Tenth Amendment's reserved powers"],
    correctIndex: 1,
    explanation: "Nullification claimed that a state could void a federal law, but the Supremacy Clause makes valid federal law the supreme law of the land and binds state officials to follow it. Nullifiers relied on a states'-rights reading of the Tenth Amendment, which does not let a state cancel federal law.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-federalism-ent-5b',
    question: "In 1918 the Supreme Court struck down a federal child-labor law as beyond the commerce power. In 1942 it upheld federal limits even on wheat a farmer grew to feed his own animals. What does this contrast best show?",
    options: ["A new amendment in the 1930s expanded the commerce power", "The Court stopped hearing federalism cases after the New Deal", "States gained power over interstate trade during those years", "Judicial reinterpretation of commerce moved power to Washington"],
    correctIndex: 3,
    explanation: "With no change in the constitutional text, the Court moved after 1937 from a narrow reading of the commerce power to a very broad one, ending the dual-federalism era and expanding national authority. That shift came through judicial interpretation, not an amendment.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: case-application framework; required documents
  {
    id: 'gov-federalism-ent-6a',
    question: "An essay argues that the Constitution is neither wholly national nor wholly federal: the House represents the people as a whole, while the Senate originally represented the states as equals. Which required document makes this argument?",
    options: ["Federalist No. 78", "Brutus No. 1", "Federalist No. 39", "Federalist No. 10"],
    correctIndex: 2,
    explanation: "In Federalist No. 39, Madison describes the Constitution as a composition of both national and federal features, pointing to how its institutions draw authority from the people and from the states. Brutus No. 1 instead warns that the new government would consolidate power at the states' expense.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-federalism-ent-6b',
    question: "A state sets its minimum wage above the federal minimum wage. An employer sues, arguing that the federal wage law preempts the state law under the Supremacy Clause. Applying the federalism framework, what is the most likely result?",
    options: ["Each law stands, because the federal law sets a floor and obeying the state law also satisfies it", "The state law falls, because any federal statute on a subject displaces every state law on that subject", "The federal law falls, because wages are a reserved power that Congress may not regulate at all", "The employer may choose either law, because concurrent powers let regulated parties pick the rule"],
    correctIndex: 0,
    explanation: "Preemption requires a real conflict or a field Congress has fully occupied; a federal minimum that states may exceed creates no conflict, since paying the higher state wage also satisfies federal law. Concurrent powers do not let regulated parties choose which valid law to obey.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required federalism cases, FRQ concept application
  {
    id: 'gov-federalism-ent-7a',
    question: "Congress creates a national infrastructure bank to finance interstate highways, although no clause of the Constitution mentions such a bank. A court upholds it as a reasonable means of carrying out Congress's powers over commerce and spending. Which required case is the controlling precedent?",
    options: ["*Baker v. Carr*", "*United States v. Lopez*", "*Marbury v. Madison*", "*McCulloch v. Maryland*"],
    correctIndex: 3,
    explanation: "*McCulloch v. Maryland* held that the Necessary and Proper Clause lets Congress use means, such as a national bank, that are plainly adapted to its enumerated powers. *Lopez* limited the commerce power and would not support upholding the law.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-federalism-ent-7b',
    question: "A concept-application question describes a federal law that withholds part of a state's federal grant money unless the state adopts a new safety rule. It asks how a state that opposes the rule could respond. Which answer is accurate?",
    options: ["Declare the condition void under the Tenth Amendment while keeping all of the money", "Refuse the conditioned funds and keep its own policy, or lobby Congress for change", "Ask its two senators to veto the law, since each state may block conditions on its own funds", "Ignore the condition and keep the funds, since conditions on federal grants cannot be enforced"],
    correctIndex: 1,
    explanation: "Conditions of aid work through money a state may decline, so an opposed state can refuse the funds and keep its policy, or use other access points such as its congressional delegation. States cannot nullify a valid federal law, and individual senators have no veto.",
    partNumber: 7,
    partTitle: "AP Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Key Processes" },
    { partNumber: 3, partTitle: "Patterns & Examples" },
    { partNumber: 4, partTitle: "Connections & Interactions" },
    { partNumber: 5, partTitle: "Change Over Time" },
    { partNumber: 6, partTitle: "Problem-Solving Workshop" },
    { partNumber: 7, partTitle: "AP Review" },
  ]
}
