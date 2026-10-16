/**
 * Entrance Quiz — Industrialization & Development (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Also serves the hg-industrialization-development topic, which renders the same lesson.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: sectors and development theories
  {
    id: 'hg-industrialization-ent-1a',
    question: "Making a smartphone involves four steps: (1) miners dig lithium, (2) factory workers assemble the phones, (3) store clerks sell them, and (4) engineers design the chips and software. Which pairing of step and sector is correct?",
    options: ["Step 1 is primary, and step 4 is quaternary", "Step 2 is tertiary, and step 3 is secondary", "Step 1 is secondary, and step 2 is primary", "Step 3 is quaternary, and step 4 is tertiary"],
    correctIndex: 0,
    explanation: "Extracting raw materials is primary and knowledge work such as research and design is quaternary; assembly is secondary and retail sales are tertiary.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-industrialization-ent-1b',
    question: "A geographer argues that poor countries are not simply \"behind\" but are kept poor because their economies were organized to export cheap raw materials to wealthy countries. Which theory is this?",
    options: ["Rostow's stages of growth", "Weber's least cost theory", "Dependency theory", "Von Thünen's land-use model"],
    correctIndex: 2,
    explanation: "Dependency theory holds that ties to the core underdevelop the periphery through unequal trade. Rostow instead treats poor countries as being at an early stage on a common path.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — The Industrial Revolution: origins and imperial legacy
  {
    id: 'hg-industrialization-ent-2a',
    question: "After Britain, industry spread first to Belgium, northern France and Germany's Ruhr valley, and only decades later to most of southern and eastern Europe. What best explains this order?",
    options: ["Nearby coal and strong links to the first industrial economy", "Laws in southern Europe that banned new factories until the 1900s", "A cooler climate in the north that suited factory work much better", "Colonies that forced Belgium and France to industrialize first"],
    correctIndex: 0,
    explanation: "Industry spread first to places with coal and iron and with close trade, capital and skilled-worker links to Britain, a hierarchical pattern that reached coalfields and ports before poorer, more distant regions. No laws or climate rules dictated the order.",
    partNumber: 2,
    partTitle: "The Industrial Revolution: Origins, Diffusion and Consequences",
  },
  {
    id: 'hg-industrialization-ent-2b',
    question: "Why did many colonies end up exporting raw materials and importing manufactured goods?",
    options: ["Colonial powers organized them to feed home factories and buy industrial goods.", "Colonized peoples chose to avoid manufacturing because it paid less than farming.", "Raw materials could not be processed anywhere near the places they were found.", "International law required colonies to buy all goods from neighboring colonies."],
    correctIndex: 0,
    explanation: "Industrial powers needed cotton, rubber and other inputs and markets for their output, so colonial railways, ports and policies were built to export raw materials and import finished goods, a pattern that persisted after independence.",
    partNumber: 2,
    partTitle: "The Industrial Revolution: Origins, Diffusion and Consequences",
  },
  // Part 3 — Where Industry Locates: weight-losing industry, footloose firms
  {
    id: 'hg-industrialization-ent-3a',
    question: "Dozens of parts suppliers build plants near a large car-assembly complex to share skilled workers and cut delivery times. Decades later, high land prices, congestion and wages there push some suppliers to move to cheaper towns far away. Which pair of terms describes the two stages?",
    options: ["Deglomeration, then agglomeration", "Agglomeration, then deglomeration", "Break-of-bulk siting, then footloose siting", "Bulk-gaining, then bulk-reducing location"],
    correctIndex: 1,
    explanation: "Firms clustering to share labor, suppliers and infrastructure is agglomeration; leaving once crowding raises costs is deglomeration. Nothing in the case involves a transfer point or a change in product weight.",
    partNumber: 3,
    partTitle: "Where Industry Locates: Weber's Model and Beyond",
  },
  {
    id: 'hg-industrialization-ent-3b',
    question: "A software company locates in the town where its founders live, far from any raw materials and from its largest markets. Why does Weber's least cost theory explain this choice poorly?",
    options: ["The product is digital, so transport costs barely matter to the firm.", "The firm is weight-losing, so it should locate next to its raw materials.", "Software firms must locate at break-of-bulk points such as seaports.", "Weber's theory applies only to firms that sell in more than one market."],
    correctIndex: 0,
    explanation: "Weber treated transport cost as the main location factor, but a footloose industry with a weightless product can locate almost anywhere, often where skilled workers or founders already are.",
    partNumber: 3,
    partTitle: "Where Industry Locates: Weber's Model and Beyond",
  },
  // Part 4 — Measuring Development
  {
    id: 'hg-industrialization-ent-4a',
    question: "Country M and Country N both have a GNI per capita of about \\$20,000. Country M's Gini coefficient is 0.25; Country N's is 0.60. Which conclusion is best supported?",
    options: ["A typical person in Country N likely earns more than one in Country M.", "A typical person in Country M likely has more income than in N.", "Both countries share income equally, since their averages are the same.", "Country N is more developed, since a higher Gini means more equality."],
    correctIndex: 1,
    explanation: "A higher Gini means income is more concentrated, so in Country N a few people hold much of the income and the typical person has less than the average suggests. Equal averages can hide very different distributions.",
    partNumber: 4,
    partTitle: "Measuring Development: Indicators and Indexes",
  },
  {
    id: 'hg-industrialization-ent-4b',
    question: "A country's national Human Development Index is high, but its rural provinces have much lower life expectancy and schooling than its cities. Which limitation of the index does this show?",
    options: ["The index measures only income and leaves out health.", "The index counts only people who live in cities.", "Its single figure hides differences among regions.", "The index weights rural areas more than urban ones."],
    correctIndex: 2,
    explanation: "Like other national measures, the HDI is an average, so it can hide large gaps between regions. The HDI does include health (life expectancy) and education alongside income.",
    partNumber: 4,
    partTitle: "Measuring Development: Indicators and Indexes",
  },
  // Part 5 — Women and Economic Development
  {
    id: 'hg-industrialization-ent-5a',
    question: "Which statement best describes microfinance?",
    options: ["Grants from rich countries that never have to be repaid", "Small loans to poor borrowers that are repaid with interest", "Large loans to governments for highways and dams", "Loans offered only to landowners who can post collateral"],
    correctIndex: 1,
    explanation: "Microfinance provides very small loans, savings and insurance to people without access to banks, most often women, and the loans must be repaid with interest. That is why critics watch for over-indebtedness.",
    partNumber: 5,
    partTitle: "Women and Economic Development",
  },
  {
    id: 'hg-industrialization-ent-5b',
    question: "Which pairing correctly gives one benefit and one cost of export garment-factory jobs for young women in an industrializing country?",
    options: ["Benefit: shorter hours than farm work; cost: loss of their wage income", "Benefit: free university study; cost: higher fertility than before", "Benefit: higher pay than men; cost: required to stay in their village", "Benefit: wages of their own; cost: long hours and unsafe buildings"],
    correctIndex: 3,
    explanation: "Factory work gives many young women independent income and more say at home, but often with low pay, long hours and unsafe conditions. The other pairings misstate the effects.",
    partNumber: 5,
    partTitle: "Women and Economic Development",
  },
  // Part 6 — Theories of Development in Depth
  {
    id: 'hg-industrialization-ent-6a',
    question: "An adviser tells a low-income country to raise its savings, attract foreign investment and open its markets so it can reach the \"take-off\" stage. Which theory underlies this advice, and what would a dependency theorist object?",
    options: ["Dependency theory; foreign investment frees the periphery from the core.", "Rostow's model; deeper ties to the core can lock in unequal trade.", "Wallerstein's theory; no country can ever change its world position.", "Weber's theory; firms should always locate where labor costs least."],
    correctIndex: 1,
    explanation: "Savings, investment and take-off are Rostow's stages of growth; dependency theorists counter that integrating with core economies on unequal terms keeps poor countries exporting cheap goods. Wallerstein's theory allows countries to change position.",
    partNumber: 6,
    partTitle: "Theories of Development in Depth",
  },
  {
    id: 'hg-industrialization-ent-6b',
    question: "Which evidence most directly challenges Rostow's assumption that all countries move along the same path of stages?",
    options: ["Britain's early growth was led by cotton textile factories.", "South Korea rose quickly through export manufacturing.", "A former colony has exported one raw material for decades.", "High-income countries spend heavily on consumer goods and services."],
    correctIndex: 2,
    explanation: "A country stuck in commodity dependence despite investment suggests that history and its position in world trade, not just its stage, shape development. Britain and South Korea fit Rostow's account, and mass consumption is his final stage.",
    partNumber: 6,
    partTitle: "Theories of Development in Depth",
  },
  // Part 7 — AP Exam Practice and Synthesis Review: common errors
  {
    id: 'hg-industrialization-ent-7a',
    question: "A student says an automobile assembly plant is bulk-reducing and should be built next to its parts suppliers. What is the best correction?",
    options: ["Finished cars are bulkier than their inputs, so it is bulk-gaining.", "Car assembly is footloose, so its location has no effect on its total costs.", "Car assembly is bulk-reducing, but it should still be built at a seaport.", "Car assembly depends mainly on labor costs, so it should move to low-wage areas."],
    correctIndex: 0,
    explanation: "A finished car takes up far more space and costs more to ship than the compact parts that go into it, so assembly is bulk-gaining and minimizes transport costs near consumers. That is why many assembly plants sit close to major markets.",
    partNumber: 7,
    partTitle: "AP Exam Practice and Synthesis Review",
  },
  {
    id: 'hg-industrialization-ent-7b',
    question: "A student writes that core and periphery are fixed lists of countries, so a periphery country can never become part of the core. Which evidence best corrects this claim?",
    options: ["Britain was the first country to build modern factories.", "Many former colonies still export mainly raw materials.", "South Korea climbed toward core status within a few decades.", "Core countries host most of the world's corporate headquarters."],
    correctIndex: 2,
    explanation: "World-system positions can change: South Korea's rise through export industry shows a periphery country moving up. Continued raw-material exports support the student's claim rather than refuting it, and the other facts do not address mobility.",
    partNumber: 7,
    partTitle: "AP Exam Practice and Synthesis Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "The Industrial Revolution: Origins, Diffusion and Consequences" },
    { partNumber: 3, partTitle: "Where Industry Locates: Weber's Model and Beyond" },
    { partNumber: 4, partTitle: "Measuring Development: Indicators and Indexes" },
    { partNumber: 5, partTitle: "Women and Economic Development" },
    { partNumber: 6, partTitle: "Theories of Development in Depth" },
    { partNumber: 7, partTitle: "AP Exam Practice and Synthesis Review" },
  ]
}
