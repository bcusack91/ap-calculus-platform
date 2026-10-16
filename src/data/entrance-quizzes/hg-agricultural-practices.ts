/**
 * Entrance Quiz — Agricultural Practices & Land Use (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: classifying farming types
  {
    id: 'hg-agricultural-practices-ent-1a',
    question: "A family in a semi-arid region moves its goats and camels between seasonal pastures and lives mainly on the animals' milk and meat. This practice is best classified as:",
    options: ["pastoral nomadism, a subsistence practice", "livestock ranching, a commercial practice", "shifting cultivation, a subsistence practice", "mixed crop and livestock, a commercial practice"],
    correctIndex: 0,
    explanation: "Moving herds to seasonal grazing in dry lands and living off the animals is pastoral nomadism, a subsistence practice. Ranching raises animals for sale, and shifting cultivation clears and rotates crop plots.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-agricultural-practices-ent-1b',
    question: "Large estates in a tropical country grow a single crop such as oil palm for export, and many are owned by foreign firms. This system is:",
    options: ["intensive subsistence farming", "shifting cultivation", "Mediterranean agriculture", "plantation agriculture"],
    correctIndex: 3,
    explanation: "Plantation agriculture is large-scale, commercial and export-oriented, usually in the tropics. It is not subsistence farming, because the crop is grown to sell.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Physical Environment, Intensity and Production Regions
  {
    id: 'hg-agricultural-practices-ent-2a',
    question: "Farm 1: a family grows rice on a half-hectare paddy with heavy hand labor and eats most of the harvest. Farm 2: a company grazes cattle for sale across 20,000 hectares of dry land. Which classification is correct?",
    options: ["Farm 1 is extensive subsistence; Farm 2 is intensive commercial.", "Farm 1 is intensive commercial; Farm 2 is extensive subsistence.", "Farm 1 is intensive subsistence; Farm 2 is extensive commercial.", "Farm 1 is extensive commercial; Farm 2 is intensive subsistence."],
    correctIndex: 2,
    explanation: "Intensity measures inputs per hectare, and market orientation is a separate dimension. The paddy puts great labor into little land for the family's own use (intensive subsistence); the ranch spreads few inputs over vast land for sale (extensive commercial).",
    partNumber: 2,
    partTitle: "The Physical Environment, Intensity and Production Regions",
  },
  {
    id: 'hg-agricultural-practices-ent-2b',
    question: "Farm A covers 10 hectares and sells \\$300,000 of produce a year. Farm B covers 3,000 hectares and sells \\$900,000. Which farm uses land more intensively, and by how much?",
    options: ["Farm A, at about 100 times B's output per hectare", "Farm B, since its total sales are three times larger", "Farm A, at about 3 times B's output per hectare", "Farm B, since it farms far more land than Farm A"],
    correctIndex: 0,
    explanation: "Farm A produces \\$300,000 ÷ 10 = \\$30,000 per hectare and Farm B \\$900,000 ÷ 3,000 = \\$300 per hectare, a ratio of 100. Total sales and land area do not measure intensity.",
    partNumber: 2,
    partTitle: "The Physical Environment, Intensity and Production Regions",
  },
  // Part 3 — Von Thünen in Depth
  {
    id: 'hg-agricultural-practices-ent-3a',
    question: "Around one market, Product X earns land rent of \\$1,200 per hectare at the market, falling by \\$30 for every kilometer of distance. Product Y earns \\$400 at the market, falling by \\$5 per kilometer. Beyond what distance does Product Y earn more rent than Product X?",
    options: ["16 km", "32 km", "40 km", "80 km"],
    correctIndex: 1,
    explanation: "Setting the rents equal, 1,200 − 30d = 400 − 5d gives 25d = 800, so d = 32 km. Beyond that crossover Y wins the land; 40 km is only where X's rent reaches zero.",
    partNumber: 3,
    partTitle: "Von Thünen in Depth: Rent, Rings and Real Places",
  },
  {
    id: 'hg-agricultural-practices-ent-3b',
    question: "A government pays farmers near a city to keep growing grain on land where vegetables would earn far more rent. Which limitation of von Thünen's model does this illustrate?",
    options: ["Real land is not a uniform plain with even soil.", "Transport costs fall unevenly along highways and rail lines.", "Most regions contain many markets rather than just one.", "Policy can lock in uses that profit alone would never favor."],
    correctIndex: 3,
    explanation: "The model assumes profit-maximizing farmers responding only to rent; subsidies and other policies can override that logic. The other limitations are real but describe terrain, markets and transport rather than government action.",
    partNumber: 3,
    partTitle: "Von Thünen in Depth: Rent, Rings and Real Places",
  },
  // Part 4 — Agribusiness, Commodity Chains and the Global Food System
  {
    id: 'hg-agricultural-practices-ent-4a',
    question: "A large seed company buys two of its rival seed companies. This is an example of:",
    options: ["horizontal integration", "vertical integration", "economies of scale", "monocropping"],
    correctIndex: 0,
    explanation: "Buying competitors at the same stage of a chain is horizontal integration. Vertical integration would mean controlling several stages, such as seed, farming and processing.",
    partNumber: 4,
    partTitle: "Agribusiness, Commodity Chains and the Global Food System",
  },
  {
    id: 'hg-agricultural-practices-ent-4b',
    question: "In the commodity chain for a packaged coffee, farmers in Country A receive about 5 percent of the retail price, while roasting, branding and retailing in Country B capture most of the rest. What does this best illustrate?",
    options: ["Farmers set the final price that shoppers pay for coffee.", "Shipping costs take up most of the final price of the coffee.", "Later stages in richer core economies add the bulk of the value.", "Coffee is mainly a subsistence crop rather than a cash crop."],
    correctIndex: 2,
    explanation: "Most of the price is earned after the beans leave the farm, in processing, branding and retail, which mostly happen in high-income countries. That is why producing countries capture little of the value.",
    partNumber: 4,
    partTitle: "Agribusiness, Commodity Chains and the Global Food System",
  },
  // Part 5 — Environmental Consequences and Conservation
  {
    id: 'hg-agricultural-practices-ent-5a',
    question: "Which conservation practice best reduces wind erosion on flat, dry grain plains?",
    options: ["Cutting terraces into the land", "Irrigating heavily without drainage", "Draining nearby wetlands for new fields", "Planting rows of trees as shelterbelts"],
    correctIndex: 3,
    explanation: "Shelterbelts break the wind, which is why they were planted across the Great Plains after the Dust Bowl. Terraces address slope, and draining wetlands or irrigating without drainage cause other damage.",
    partNumber: 5,
    partTitle: "Environmental Consequences and Conservation",
  },
  {
    id: 'hg-agricultural-practices-ent-5b',
    question: "Which conservation effort operates at the national scale?",
    options: ["A farmer plants rye between corn crops on her own fields.", "A country's government pays its farmers to idle erodible land.", "Several countries plant a tree belt across a shared dry region.", "A village builds stone terraces on the slopes above its houses."],
    correctIndex: 1,
    explanation: "A program run by one national government for farmers throughout the country works at the national scale. A single farm or village is local, and a multi-country tree belt is regional.",
    partNumber: 5,
    partTitle: "Environmental Consequences and Conservation",
  },
  // Part 6 — Food Challenges and Women in Agriculture
  {
    id: 'hg-agricultural-practices-ent-6a',
    question: "In Region P, 25 percent of 400 million people are undernourished. In Region Q, 10 percent of 2 billion people are undernourished. Which statement is correct?",
    options: ["Region Q has more undernourished people, though P's rate is higher.", "Region P has both the higher rate and more undernourished people.", "Both regions have the same number of undernourished people.", "Region Q has both the higher rate and more undernourished people."],
    correctIndex: 0,
    explanation: "Region P has 100 million undernourished people and Region Q 200 million. A higher rate can still mean fewer people when the population is smaller, so rates and counts can point to different regions.",
    partNumber: 6,
    partTitle: "Food Challenges and Women in Agriculture: Stimulus Practice",
  },
  {
    id: 'hg-agricultural-practices-ent-6b',
    question: "On plots of the same size, farms managed by women often produce less than farms managed by men. Which explanation is best supported by research?",
    options: ["Women's plots receive less rainfall in most farming regions.", "Women choose crops that are naturally lower yielding by habit.", "Women work fewer hours on farms than men do in every country.", "Women often lack equal access to credit and land titles."],
    correctIndex: 3,
    explanation: "With less secure land rights and less credit, women can buy less fertilizer and improved seed, which lowers yields. The gap reflects unequal access to resources, not rainfall, effort or habit.",
    partNumber: 6,
    partTitle: "Food Challenges and Women in Agriculture: Stimulus Practice",
  },
  // Part 7 — Synthesis Review: chains of cause and common errors
  {
    id: 'hg-agricultural-practices-ent-7a',
    question: "Supermarkets in Country C want fresh green beans all year. Exporters in Country K build refrigerated warehouses at the airport, and small farmers there stop growing food crops and clear nearby forest to plant more beans. Which set of concepts describes this chain?",
    options: ["Subsistence farming, a local market and soil salinization", "Cash cropping, a global commodity chain and deforestation", "Shifting cultivation, fair trade and desertification", "Food deserts, a local supply chain and wetland loss"],
    correctIndex: 1,
    explanation: "Farmers growing beans for export instead of food is cash cropping, the beans move from field to distant shelves through a global commodity chain, and clearing forest for new fields is deforestation, an environmental consequence.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Field to Global Market",
  },
  {
    id: 'hg-agricultural-practices-ent-7b',
    question: "A student claims that all intensive farming is commercial. Which example best disproves the claim?",
    options: ["Greenhouse vegetables sold to supermarkets", "Market gardening on the edge of a big city", "Wet rice grown on small family plots", "Cattle ranching on vast, dry rangeland"],
    correctIndex: 2,
    explanation: "Wet rice on tiny family plots uses enormous labor per hectare but often feeds the household, so it is intensive and subsistence. Greenhouses and market gardens are intensive and commercial, and ranching is extensive.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Field to Global Market",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "The Physical Environment, Intensity and Production Regions" },
    { partNumber: 3, partTitle: "Von Thünen in Depth: Rent, Rings and Real Places" },
    { partNumber: 4, partTitle: "Agribusiness, Commodity Chains and the Global Food System" },
    { partNumber: 5, partTitle: "Environmental Consequences and Conservation" },
    { partNumber: 6, partTitle: "Food Challenges and Women in Agriculture: Stimulus Practice" },
    { partNumber: 7, partTitle: "Synthesis Review: From Field to Global Market" },
  ]
}
