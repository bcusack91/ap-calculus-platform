/**
 * Entrance Quiz — Globalization & Trade (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: world-system positions, export zones
  {
    id: 'hg-globalization-trade-ent-1a',
    question: "A country assembles electronics and cars for export and has a growing middle class, but it also exports large amounts of iron ore and soybeans, and its wages fall between those of rich and poor countries. In Wallerstein's terms it is best described as:",
    options: ["a semi-periphery country", "a core country", "a periphery country", "outside the world-system"],
    correctIndex: 0,
    explanation: "A mix of advanced manufacturing and raw-material exports, with middling wages, is the semi-periphery. Core countries specialize in high-wage, high-technology work, and the periphery mainly in raw materials and low-wage production.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-globalization-trade-ent-1b',
    question: "A factory in a Mexican border city imports parts duty-free, assembles them into televisions and exports the finished sets to the United States. This factory is best described as:",
    options: ["a fair trade cooperative", "a growth pole in the periphery", "a subsistence enterprise", "a maquiladora"],
    correctIndex: 3,
    explanation: "A maquiladora is a Mexican factory, often near the U.S. border, that imports parts duty-free, assembles them and exports the products, a form of export processing zone.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Why Countries Trade: comparative advantage, trade blocs
  {
    id: 'hg-globalization-trade-ent-2a',
    question: "One worker-day of labor makes either 40 tonnes of wheat or 20 bolts of cloth in Country A, and either 10 tonnes of wheat or 10 bolts of cloth in Country B. Based on comparative advantage, how should the two countries specialize?",
    options: ["A in cloth and B in wheat", "A in both, since it out-produces B", "A in wheat and B in cloth", "B in both, since its costs are equal"],
    correctIndex: 2,
    explanation: "One bolt of cloth costs Country A 2 tonnes of wheat but costs Country B only 1, so B has the comparative advantage in cloth and A in wheat. Having the absolute advantage in both goods does not stop both countries from gaining by specializing.",
    partNumber: 2,
    partTitle: "Why Countries Trade: Complementarity, Comparative Advantage and Trade Agreements",
  },
  {
    id: 'hg-globalization-trade-ent-2b',
    question: "Country R joins a bloc that ends tariffs on goods traded among its members. Afterward, R still sets its own tariff on cars from outside the bloc, different from its partners' tariffs, and R's workers still need visas to take jobs in partner countries. The bloc is best classified as:",
    options: ["a free trade area", "a customs union", "a common market", "a trade embargo"],
    correctIndex: 0,
    explanation: "A free trade area drops internal tariffs while each member sets its own outside tariffs. A customs union adds a common outside tariff, and a common market also lets labor and capital move freely.",
    partNumber: 2,
    partTitle: "Why Countries Trade: Complementarity, Comparative Advantage and Trade Agreements",
  },
  // Part 3 — Global Finance, Debt and Interdependence
  {
    id: 'hg-globalization-trade-ent-3a',
    question: "Country A pays \\$4 billion a year on its foreign debt and earns \\$80 billion from exports. Country B pays \\$3 billion a year and earns \\$10 billion from exports. Which country carries the heavier debt burden?",
    options: ["Country A, since its debt payments are larger in dollars", "Neither, since both pay only a few billion dollars a year", "Country A, since its payments take 20 percent of exports", "Country B, since its payments take 30 percent of exports"],
    correctIndex: 3,
    explanation: "The debt-service ratio compares payments with export earnings: 4 ÷ 80 = 5 percent for Country A but 3 ÷ 10 = 30 percent for Country B. Paying more dollars does not mean a heavier burden when export earnings are far larger.",
    partNumber: 3,
    partTitle: "Global Finance, Debt and Interdependence",
  },
  {
    id: 'hg-globalization-trade-ent-3b',
    question: "A government seeks a long-term loan to build a hydroelectric dam and power lines. Which institution was designed to make this kind of loan?",
    options: ["The International Monetary Fund", "The World Bank", "The WTO, which oversees trade rules", "A village microcredit group"],
    correctIndex: 1,
    explanation: "The World Bank makes long-term loans and grants for development projects such as dams and roads. The IMF lends short-term in balance-of-payments crises, and the WTO oversees trade rules rather than lending.",
    partNumber: 3,
    partTitle: "Global Finance, Debt and Interdependence",
  },
  // Part 4 — Restructuring the World Economy
  {
    id: 'hg-globalization-trade-ent-4a',
    question: "A clothing company produces in small batches, restocks its stores weekly based on sales data, and spreads its sewing among dozens of contractors in several countries. This system best illustrates:",
    options: ["Fordist mass production", "import substitution", "post-Fordist flexible production", "cottage industry"],
    correctIndex: 2,
    explanation: "Small batches, quick response to demand and outsourcing across many suppliers mark post-Fordist flexible production. Fordism relied on long runs of standardized goods in large integrated plants, and cottage industry is small-scale home production.",
    partNumber: 4,
    partTitle: "Restructuring the World Economy: New Ways and New Places to Make Things",
  },
  {
    id: 'hg-globalization-trade-ent-4b',
    question: "A phone company keeps product design, marketing and finance in its home country in the core, while contract factories in lower-wage countries assemble the phones. This arrangement is an example of:",
    options: ["the Fordist assembly line", "deglomeration of industry", "complementarity between places", "the new international division of labor"],
    correctIndex: 3,
    explanation: "Splitting production by skill, with high-value work in the core and assembly in lower-wage countries, is the new international division of labor. Fordism refers to standardized mass production in one large plant.",
    partNumber: 4,
    partTitle: "Restructuring the World Economy: New Ways and New Places to Make Things",
  },
  // Part 5 — Sustainable Development
  {
    id: 'hg-globalization-trade-ent-5a',
    question: "Which project best fits the definition of sustainable development as meeting present needs without compromising the ability of future generations to meet theirs?",
    options: ["A fishery caps catches to let stocks recover and keep jobs.", "A firm clear-cuts an old forest to earn a quick profit.", "A government bans all economic activity along its coast.", "A city ships its electronic waste abroad for cheap disposal."],
    correctIndex: 0,
    explanation: "Limiting catches keeps the fish stock renewable while still supporting livelihoods, balancing economic, social and environmental goals. Sustainable development does not mean ending economic activity, and shipping waste abroad only moves the harm.",
    partNumber: 5,
    partTitle: "Sustainable Development",
  },
  {
    id: 'hg-globalization-trade-ent-5b',
    question: "Of every \\$100 that visitors spend on an ecotourism trip to a rainforest country, about \\$65 goes to foreign-owned airlines, hotel chains and tour companies. Which limitation of ecotourism does this show?",
    options: ["Greenwashing of projects that harm the forest", "Crowding that damages the habitat visitors seek", "Leakage of spending away from locals", "Agglomeration of hotels in the capital city"],
    correctIndex: 2,
    explanation: "When most tourist spending flows to foreign firms, little stays with local guides, lodges and communities; this is called leakage. Greenwashing and crowding are other criticisms, but the data here describe where the money goes.",
    partNumber: 5,
    partTitle: "Sustainable Development",
  },
  // Part 6 — AP Exam Practice: reading a country's path
  {
    id: 'hg-globalization-trade-ent-6a',
    question: "Between 2000 and 2020, oil's share of Country T's exports rose from 40 to 85 percent, its manufacturing workforce fell from 1.2 to 0.8 million, and its debt-service ratio rose from 10 to 30 percent. Which conclusion is best supported?",
    options: ["It diversified its economy toward export manufacturing.", "It became more exposed to swings in world oil prices.", "Its foreign debt became a smaller burden on its economy.", "Its manufacturing employment grew by about one-half."],
    correctIndex: 1,
    explanation: "With oil rising to 85 percent of exports, manufacturing jobs falling by a third and debt payments taking a larger share of export earnings, Country T has become more commodity-dependent and so more vulnerable to oil-price swings.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Reading a Country's Path into the World Economy",
  },
  {
    id: 'hg-globalization-trade-ent-6b',
    question: "A drought cuts the harvest of a major rice-exporting country, and rice prices then rise sharply in import-dependent countries thousands of kilometers away. A free-response question asks students to explain how this illustrates global interdependence. Which response earns the point?",
    options: ["Rice prices rose sharply in importing countries far from the drought.", "This shows global interdependence in the world's food system.", "Weather events can affect many parts of the world economy.", "Buyers abroad need its crop, so its shortfall pushed up their costs."],
    correctIndex: 3,
    explanation: "Explain requires a mechanism: import-dependent countries rely on the exporter's harvest, so its shortfall cut their supply and raised prices. Restating the price rise describes, naming the concept identifies, and the general claim gives no cause.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Reading a Country's Path into the World Economy",
  },
  // Part 7 — Synthesis Review: connecting processes
  {
    id: 'hg-globalization-trade-ent-7a',
    question: "After a factory in a Rust Belt town moves its production to a newly industrialized country, the town's restaurants, stores and suppliers also close. Which pair of concepts best explains this sequence?",
    options: ["Complementarity and fair trade pricing", "Offshoring and the multiplier effect", "Agglomeration and microlending", "Protectionism and the growth pole"],
    correctIndex: 1,
    explanation: "Moving production abroad is offshoring, and the loss of basic factory jobs pulls down the nonbasic jobs that depended on them, the multiplier effect in reverse.",
    partNumber: 7,
    partTitle: "Synthesis Review: How the World Economy Fits Together",
  },
  {
    id: 'hg-globalization-trade-ent-7b',
    question: "In the 1960s Country K exported wigs and textiles; today it exports ships, cars and microchips. What does this change show about comparative advantage?",
    options: ["It is fixed by a country's natural resources and cannot change.", "It applies only to countries that export raw materials.", "It can shift as a country invests in skills and technology.", "It disappears once a country joins a regional trade bloc."],
    correctIndex: 2,
    explanation: "Comparative advantage is not permanent: investment in education, technology and industry can lower a country's opportunity cost in higher-value goods, as South Korea's shift from textiles to ships and chips shows.",
    partNumber: 7,
    partTitle: "Synthesis Review: How the World Economy Fits Together",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Why Countries Trade: Complementarity, Comparative Advantage and Trade Agreements" },
    { partNumber: 3, partTitle: "Global Finance, Debt and Interdependence" },
    { partNumber: 4, partTitle: "Restructuring the World Economy: New Ways and New Places to Make Things" },
    { partNumber: 5, partTitle: "Sustainable Development" },
    { partNumber: 6, partTitle: "AP Exam Practice: Reading a Country's Path into the World Economy" },
    { partNumber: 7, partTitle: "Synthesis Review: How the World Economy Fits Together" },
  ]
}
