/**
 * Entrance Quiz — Urban Challenges & Sustainability (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: challenges by context, responses
  {
    id: 'hg-urban-challenges-ent-1a',
    question: "Which challenge is most typical of rapidly growing cities in less developed countries rather than of deindustrializing cities in developed countries?",
    options: ["Informal settlements with no piped water", "Brownfields left behind by closed factories", "Inner-city decline after manufacturing jobs leave", "Low-density suburban sprawl with long car commutes"],
    correctIndex: 0,
    explanation: "When rural migrants arrive faster than housing and services can be built, informal settlements without water or sanitation spread. Brownfields, inner-city decline and car-based sprawl are typical of developed-country cities.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-urban-challenges-ent-1b',
    question: "A city rewrites its zoning so that shops, offices and apartments can share the same buildings and blocks, letting residents walk to work and errands instead of driving. This policy is:",
    options: ["mixed-use zoning", "a greenbelt", "brownfield redevelopment", "single-use zoning"],
    correctIndex: 0,
    explanation: "Mixed-use zoning lets homes, shops and offices sit together so daily trips are short, a smart-growth tool. Single-use zoning does the opposite by separating land uses, and a greenbelt is a ring of protected land around a city.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Density, Land Use and Sprawl: density math, zoning
  {
    id: 'hg-urban-challenges-ent-2a',
    question: "Metro A and Metro B each have 5 million residents. Metro A's built-up area covers 1,000 square miles; Metro B's covers 250 square miles. Which conclusion is best supported?",
    options: ["Metro A is four times as dense, so buses serve it more cheaply.", "Metro B is four times as dense, so transit serves it more cheaply.", "Both are equally dense, since their populations are the same.", "Metro A, at one-fourth the density, relies more on transit."],
    correctIndex: 1,
    explanation: "Density is population divided by area: 5,000 people per square mile in Metro A and 20,000 in Metro B. A denser city puts more riders near each stop, so transit costs less per rider; equal populations do not mean equal density.",
    partNumber: 2,
    partTitle: "Density, Land Use and Sprawl, and the Policies That Answer It",
  },
  {
    id: 'hg-urban-challenges-ent-2b',
    question: "A city requires every new apartment building with 20 or more units to rent 15 percent of its units at below-market prices. This rule is an example of:",
    options: ["exclusionary zoning", "single-use zoning", "inclusionary zoning", "a slow-growth permit cap"],
    correctIndex: 2,
    explanation: "Inclusionary zoning requires or rewards a share of affordable units in new buildings. Exclusionary zoning does the reverse, using large minimum lots or apartment bans that keep lower-income households out.",
    partNumber: 2,
    partTitle: "Density, Land Use and Sprawl, and the Policies That Answer It",
  },
  // Part 3 — Infrastructure and Transportation: who pays, the infrastructure gap
  {
    id: 'hg-urban-challenges-ent-3a',
    question: "A fast-growing city with a small budget wants a high-capacity way to move commuters, running within five years. Which option best fits these constraints?",
    options: ["A subway, since it carries the most riders per hour", "Bus rapid transit, since it is cheap and quick to build", "Highway widening, since new lanes end congestion for good", "Bike lanes, since they serve long cross-city commutes best"],
    correctIndex: 1,
    explanation: "Bus rapid transit gives buses their own lanes, so it costs far less and opens much sooner than rail; a subway carries more riders but is very expensive and slow to build. Widening highways invites induced demand, and bike lanes suit short trips.",
    partNumber: 3,
    partTitle: "Infrastructure and Transportation",
  },
  {
    id: 'hg-urban-challenges-ent-3b',
    question: "In many informal settlements, poor households pay more per liter of water than wealthy households elsewhere in the city. What best explains this?",
    options: ["Wealthy districts face higher water taxes than settlements do.", "Water in settlements is purified to a higher standard than elsewhere.", "Poor households use far more water per person than rich households.", "Without piped lines, settlement households must buy from vendors."],
    correctIndex: 3,
    explanation: "Without piped connections, settlement residents buy water from vendors or kiosks, which charge far more per liter than a utility. The missing infrastructure, not the amount used, drives the cost.",
    partNumber: 3,
    partTitle: "Infrastructure and Transportation",
  },
  // Part 4 — Housing, Inequality and Neighborhood Change
  {
    id: 'hg-urban-challenges-ent-4a',
    question: "A government lays out plots with water lines and roads on vacant land at a city's edge, and migrant families then build their own homes on the plots. This response to informal housing is called:",
    options: ["in-situ upgrading", "clearance", "sites and services", "land titling"],
    correctIndex: 2,
    explanation: "In a sites-and-services program, the government supplies serviced plots and families build the houses. In-situ upgrading improves an existing settlement where it stands, and clearance removes it.",
    partNumber: 4,
    partTitle: "Housing, Inequality and Neighborhood Change",
  },
  {
    id: 'hg-urban-challenges-ent-4b',
    question: "Household A earns \\$36,000 a year and pays \\$850 a month in rent. Household B earns \\$90,000 a year and pays \\$2,400 a month. Using the standard that housing above 30 percent of income is a cost burden, which household is cost-burdened?",
    options: ["Only Household B, at about 32 percent of its income", "Only Household A, since it has the lower income", "Both, since each spends over \\$10,000 a year on rent", "Neither, since both spend under 30 percent of income"],
    correctIndex: 0,
    explanation: "Household A pays \\$850 × 12 = \\$10,200, about 28 percent of \\$36,000; Household B pays \\$2,400 × 12 = \\$28,800, or 32 percent of \\$90,000. Cost burden depends on the share of income, not on income level or the dollar amount.",
    partNumber: 4,
    partTitle: "Housing, Inequality and Neighborhood Change",
  },
  // Part 5 — Environmental Challenges and Sustainable Responses
  {
    id: 'hg-urban-challenges-ent-5a',
    question: "Which policy most directly addresses environmental injustice in a city?",
    options: ["Building a new park only in the city's wealthiest district", "Widening the highways that already cut through low-income areas", "Barring new polluting plants in overburdened areas", "Raising bus fares to pay for new roads in outer suburbs"],
    correctIndex: 2,
    explanation: "Environmental injustice is the concentration of hazards such as highways, plants and dumps in low-income and minority neighborhoods, so stopping further concentration there addresses it directly. The other policies would deepen the imbalance.",
    partNumber: 5,
    partTitle: "Environmental Challenges and Sustainable Responses",
  },
  {
    id: 'hg-urban-challenges-ent-5b',
    question: "In an older city, storm drains and household wastewater share the same pipes. As more of the city is paved, what is heavy rain most likely to cause?",
    options: ["Recharge of the aquifer beneath the downtown streets", "Untreated sewage pouring into rivers in overflows", "Cooler nights as rainwater spreads over hot pavement", "Lower flood risk, since rain drains into two pipe systems"],
    correctIndex: 1,
    explanation: "Paved surfaces send rain into the drains quickly, and combined pipes that fill past capacity overflow, releasing untreated sewage into rivers and harbors. Pavement blocks rather than aids aquifer recharge, and the pipes form one system, not two.",
    partNumber: 5,
    partTitle: "Environmental Challenges and Sustainable Responses",
  },
  // Part 6 — AP Exam Practice: density change, growth across boundaries
  {
    id: 'hg-urban-challenges-ent-6a',
    question: "Lake County had 200,000 people on 100 square miles of urbanized land in 2000 and 240,000 people on 160 square miles in 2020. What happened to its density, and what does the change suggest?",
    options: ["It fell to 1,500 per square mile, a sign of sprawling growth.", "It rose to 2,400 per square mile, a sign of infill.", "It stayed at 2,000 per square mile as both grew.", "It fell to 1,200 per square mile, a sign of decline."],
    correctIndex: 0,
    explanation: "Density went from 200,000 ÷ 100 = 2,000 to 240,000 ÷ 160 = 1,500 per square mile. Urbanized land grew 60 percent while population grew only 20 percent, the signature of sprawl; the county gained people, so it did not decline.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Growth Policy in Two Counties",
  },
  {
    id: 'hg-urban-challenges-ent-6b',
    question: "Weather data show that a city's downtown is about 7°F warmer than nearby farmland on summer nights. A free-response question asks students to explain the difference. Which response earns the point?",
    options: ["Downtown is about 7°F warmer than the nearby farmland at night.", "Paved surfaces absorb daytime heat and release it after dark.", "This difference is an example of the urban heat island effect.", "Cities and rural areas often have different local climates."],
    correctIndex: 1,
    explanation: "Explain requires a mechanism: dark pavement and masonry absorb heat during the day and give it off after dark, keeping downtown warmer. Restating the data describes, naming the effect identifies, and the vague claim gives no cause.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Growth Policy in Two Counties",
  },
  // Part 7 — Synthesis Review: trade-offs and who wins or loses
  {
    id: 'hg-urban-challenges-ent-7a',
    question: "Which statement best captures the main trade-off of higher residential density?",
    options: ["It raises car use and the land consumed by each household.", "It spreads jobs evenly across the whole metropolitan region.", "It lowers housing demand and cuts every form of pollution.", "It saves land and pipes but concentrates heat and pollution."],
    correctIndex: 3,
    explanation: "Denser development uses less land, shorter pipes and fewer car trips per person, but it packs pollution, heat and demand for services into a smaller area. Density lowers rather than raises land use per household.",
    partNumber: 7,
    partTitle: "Synthesis Review: Challenges, Responses and Trade-offs",
  },
  {
    id: 'hg-urban-challenges-ent-7b',
    question: "A city upgrades an informal settlement with water lines, sewers and paved lanes. Which group is most at risk of being pushed out afterward?",
    options: ["Owners who receive legal titles to their homes", "Wealthy residents of other parts of the city", "Developers who build on land nearby", "Renters, as rising land values push up rents"],
    correctIndex: 3,
    explanation: "Upgrading raises land values, which benefits owners but can raise rents beyond what tenants can pay, so renters may be displaced. Pairing upgrades with tenant protections addresses this trade-off.",
    partNumber: 7,
    partTitle: "Synthesis Review: Challenges, Responses and Trade-offs",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Density, Land Use and Sprawl, and the Policies That Answer It" },
    { partNumber: 3, partTitle: "Infrastructure and Transportation" },
    { partNumber: 4, partTitle: "Housing, Inequality and Neighborhood Change" },
    { partNumber: 5, partTitle: "Environmental Challenges and Sustainable Responses" },
    { partNumber: 6, partTitle: "AP Exam Practice: Growth Policy in Two Counties" },
    { partNumber: 7, partTitle: "Synthesis Review: Challenges, Responses and Trade-offs" },
  ]
}
