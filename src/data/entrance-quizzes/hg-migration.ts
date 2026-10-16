/**
 * Entrance Quiz — Migration Patterns & Processes (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: types of movement, intervening opportunities
  {
    id: 'hg-migration-ent-1a',
    question: "A woman leaves her farming village for a regional town, works there for three years, moves on to the national capital, and later takes a job abroad. Which type of migration does her path illustrate?",
    options: ["Chain migration, following relatives who left earlier", "Step migration, reaching a destination in stages", "Transhumance, moving seasonally with livestock", "Forced migration, fleeing danger with no choice"],
    correctIndex: 1,
    explanation: "Moving through a series of ever-larger places before the final destination is step migration. Nothing in the path involves following relatives, herding or flight from danger.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-migration-ent-1b',
    question: "Migrants from Country A set out for jobs in Country C, but many find work in Country B along the way and settle there instead. Country B's jobs are best described as:",
    options: ["an intervening obstacle", "a counter-stream", "an intervening opportunity", "a push factor at the origin"],
    correctIndex: 2,
    explanation: "An intervening opportunity is an attractive option found before the intended destination, which ends the journey early. An obstacle would block or slow the move rather than offer a reason to stop.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Causes of Migration in Depth: categories of factors, Ravenstein
  {
    id: 'hg-migration-ent-2a',
    question: "A farmer leaves her coastal village after seawater seeps into her rice fields and ruins the soil. She moves to a city where her sister has arranged a factory job for her. Which pair best classifies the two factors?",
    options: ["A political push and a cultural pull", "An economic push and a political pull", "A demographic push and an environmental pull", "An environmental push and an economic pull"],
    correctIndex: 3,
    explanation: "Salt damage to farmland is an environmental push at the origin, and a waiting factory job is an economic pull at the destination (made possible by a family network).",
    partNumber: 2,
    partTitle: "Causes of Migration in Depth",
  },
  {
    id: 'hg-migration-ent-2b',
    question: "Ravenstein generalized that every migration stream produces a counter-stream. Which observation best illustrates this generalization?",
    options: ["Many workers go back home after a recession hits where they work.", "Most migrants travel only a short distance from the place where they were born.", "Long-distance migrants head mainly for large gateway cities such as London.", "Rural residents are more likely to migrate than residents of large cities."],
    correctIndex: 0,
    explanation: "A counter-stream is movement in the opposite direction of a main flow, such as return migration. The other options describe three of Ravenstein's other generalizations.",
    partNumber: 2,
    partTitle: "Causes of Migration in Depth",
  },
  // Part 3 — Forced and Voluntary Migration: classifying moves
  {
    id: 'hg-migration-ent-3a',
    question: "Which move is an example of interregional migration?",
    options: ["A family moves from a city to a nearby suburb in the same metro area.", "A worker leaves Mexico to take a construction job in Texas.", "A retired couple moves from Ohio to Arizona for its warmer winters.", "A herder takes cattle up to mountain pastures every summer and back down."],
    correctIndex: 2,
    explanation: "Interregional migration is a move from one region of a country to another, such as Rust Belt to Sun Belt. A city-to-suburb move stays within one region (intraregional), the Mexico-to-Texas move is international, and seasonal herding is transhumance.",
    partNumber: 3,
    partTitle: "Forced and Voluntary Migration: Cases",
  },
  {
    id: 'hg-migration-ent-3b',
    question: "During a civil war, Family A flees to a safer province of the same country. Family B crosses into a neighboring country and is granted protection there. How should the two families be classified?",
    options: ["Family A is internally displaced; B is a refugee.", "Family A is a refugee; Family B is internally displaced.", "Both families are asylum seekers until they return home.", "Both are voluntary migrants, since they chose where to go."],
    correctIndex: 0,
    explanation: "Both moves are forced; the label depends on whether a border was crossed. People who stay inside their country are internally displaced persons, and those protected in another country are refugees.",
    partNumber: 3,
    partTitle: "Forced and Voluntary Migration: Cases",
  },
  // Part 4 — Reading Migration Data and Flow Maps: rates, absolute vs relative
  {
    id: 'hg-migration-ent-4a',
    question: "Country K (population 2,000,000) gains a net 10,000 migrants in a year; Country L (population 50,000,000) gains a net 100,000. Each has a crude birth rate of 10 and a crude death rate of 12 per 1,000. Which statement is correct?",
    options: ["K grows by 5 per 1,000 a year, while L grows by 2 per 1,000.", "K grows by 3 per 1,000 a year, while L neither grows nor shrinks.", "L grows faster, because it gains ten times as many migrants a year.", "Both shrink, because each has more deaths than births."],
    correctIndex: 1,
    explanation: "K's net migration rate is 10,000 ÷ 2,000,000 × 1,000 = +5 per 1,000 and L's is +2. Adding natural increase of 10 − 12 = −2 gives K +3 per 1,000 and L zero. L gains more migrants in number, but rates, not totals, decide growth.",
    partNumber: 4,
    partTitle: "Reading Migration Data and Flow Maps",
  },
  {
    id: 'hg-migration-ent-4b',
    question: "On a flow map of labor migration, the arrow from Country A (population 200 million) is twice as wide as the arrow from Country B (population 10 million). Which conclusion is supported?",
    options: ["Country A has sent twice as many migrants and a larger share of its people.", "Country B has sent fewer migrants but a far larger share of all its residents.", "Both countries have sent the same share of their people as migrants.", "Country A's migrants traveled by a shorter, more direct route than B's."],
    correctIndex: 1,
    explanation: "Arrow width shows numbers, so A sent twice as many people; but twice as many out of a population 20 times larger means B lost about ten times the share. Flow arrows do not show routes.",
    partNumber: 4,
    partTitle: "Reading Migration Data and Flow Maps",
  },
  // Part 5 — Effects of Migration: categories of effects, cultural processes
  {
    id: 'hg-migration-ent-5a',
    question: "Which is a demographic effect of large-scale emigration on the sending region?",
    options: ["Its population ages as young adults leave.", "Remittances pay for new houses and school fees.", "The destination passes stricter visa rules.", "An ethnic enclave forms in the destination city."],
    correctIndex: 0,
    explanation: "A demographic effect changes a population characteristic such as age structure; losing young adults makes the origin older. Remittances are economic, visa rules political and enclaves cultural, and the last two occur at the destination.",
    partNumber: 5,
    partTitle: "Effects of Migration",
  },
  {
    id: 'hg-migration-ent-5b',
    question: "Children of immigrants speak the host country's language at school and work, but speak their parents' language at home and celebrate their parents' holidays. Which process does this best illustrate?",
    options: ["Acculturation, since they adopt host traits while keeping their own", "Assimilation, since their parents' culture has faded away", "Syncretism, since two cultures have fused into a new one", "Brain circulation, since skills are flowing in both directions"],
    correctIndex: 0,
    explanation: "Acculturation means adopting some traits of the host culture while keeping much of one's own. Assimilation would mean the original culture had largely disappeared, and syncretism would produce a new blended form.",
    partNumber: 5,
    partTitle: "Effects of Migration",
  },
  // Part 6 — AP Exam Practice: explaining patterns, relative data
  {
    id: 'hg-migration-ent-6a',
    question: "A flow map shows the widest arrows from Country V running to the two countries that border it. A free-response question asks students to explain this pattern. Which response earns the point?",
    options: ["Most of the migrants who left Country V went to the two countries that border it.", "Neighbors were the cheapest and quickest places to reach by land, so most migrants stopped there.", "Migration from Country V to its neighbors is an example of international migration.", "The pattern shows distance decay, a concept that geographers use to describe migration."],
    correctIndex: 1,
    explanation: "Explain needs a cause linked to the pattern: the low cost and short trip to neighboring countries made them the most common destinations, which is distance decay at work. The other responses describe the map, classify the move or name a term without linking it.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },
  {
    id: 'hg-migration-ent-6b',
    question: "Country A receives \\$30 billion in remittances and has a GDP of \\$1,500 billion. Country B receives \\$9 billion and has a GDP of \\$30 billion. Which statement is accurate?",
    options: ["A depends more on remittances, since it receives more dollars.", "Both depend equally, since each receives billions of dollars.", "A depends more on remittances, at about 20 percent of GDP.", "B depends far more, at about 30 percent of its GDP."],
    correctIndex: 3,
    explanation: "Dependence is a relative measure: Country A's remittances are 30 ÷ 1,500 = 2 percent of GDP, while Country B's are 9 ÷ 30 = 30 percent. The dollar total shows where the most money goes, not who relies on it.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },
  // Part 7 — Synthesis Review: linking causes across places, migration vs circulation
  {
    id: 'hg-migration-ent-7a',
    question: "Country X has a young, fast-growing population and too few jobs. Country Y has an aging population and a shrinking work force. Which statement best explains the migration flow between them?",
    options: ["A political push in X and a cultural pull in Y draw people to Y.", "A demographic push in Y and a demographic pull in X draw people to X.", "A demographic push in X and a demographic pull in Y draw workers to Y.", "An environmental push in X and an economic push in Y draw people to Y."],
    correctIndex: 2,
    explanation: "Too many young job seekers in X is a demographic push, and a shrinking, aging work force in Y is a demographic pull, so workers move from X to Y. Reversing the direction misreads which country has surplus workers.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },
  {
    id: 'hg-migration-ent-7b',
    question: "Which of the following counts as migration rather than circulation?",
    options: ["A shopper crosses the border every weekend to buy groceries", "A student flies home for two weeks over the winter break", "A nurse moves abroad on a five-year contract to live there", "A clerk commutes across a state line to an office each day"],
    correctIndex: 2,
    explanation: "Migration is a permanent or long-term change of residence, which a five-year move abroad is. Weekend shopping trips, short visits home and daily commuting are repeated short trips, or circulation.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Causes of Migration in Depth" },
    { partNumber: 3, partTitle: "Forced and Voluntary Migration: Cases" },
    { partNumber: 4, partTitle: "Reading Migration Data and Flow Maps" },
    { partNumber: 5, partTitle: "Effects of Migration" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
