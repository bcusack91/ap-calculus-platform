/**
 * Entrance Quiz — Urbanization (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: urbanization vs urban growth, movement terms
  {
    id: 'hg-urbanization-ent-1a',
    question: "Over a decade, Country K's urban population grew by 2 percent a year, while its rural population grew by 3 percent a year. What happened to Country K's level of urbanization?",
    options: ["It fell, though its cities kept adding people.", "It rose, since its cities kept adding people.", "It stayed the same, since both populations grew.", "It rose, since its rural areas grew faster."],
    correctIndex: 0,
    explanation: "Urbanization is the urban share of the total population. When rural numbers grow faster than urban numbers, that share shrinks even while cities add people, so urban growth and urbanization can move in opposite directions.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-urbanization-ent-1b',
    question: "Many remote workers leave a large metropolitan area altogether and move to small towns and farm areas far from any city. This movement is best described as:",
    options: ["suburbanization", "reclassification", "gentrification", "counterurbanization"],
    correctIndex: 3,
    explanation: "Moving from urban areas to rural ones is counterurbanization. Suburbanization is a move from the central city to its suburbs, still inside the metro area.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Site, Situation and the Origins of Cities: drivers and the urban transition
  {
    id: 'hg-urbanization-ent-2a',
    question: "After a national program paid for interstate highways and federal mortgage insurance made new houses affordable, millions of families moved from central cities to suburbs. Which pair of drivers does this best show?",
    options: ["Communication technology and migration", "Population growth and the reclassification of land", "Economic development and natural increase", "Transportation technology and government policy"],
    correctIndex: 3,
    explanation: "Highways stretched how far people could live from work (transportation technology), and public spending on roads and mortgages steered where growth happened (government policy).",
    partNumber: 2,
    partTitle: "Site, Situation and the Origins of Cities",
  },
  {
    id: 'hg-urbanization-ent-2b',
    question: "A country's share of people living in urban areas was 20 percent in 1950, rose quickly to 70 percent by 2000, and has risen only to 78 percent since. Which statement best describes this pattern?",
    options: ["It traces an S-shaped curve that flattens near the top.", "It shows urbanization speeding up steadily throughout the whole period.", "It shows the country deurbanizing after it reached 70 percent urban.", "It proves every country will eventually become entirely urban."],
    correctIndex: 0,
    explanation: "Slow, then rapid, then slowing growth in percent urban is the S-shaped urbanization curve. The share is still rising after 2000, just more slowly, and the curve describes a past pattern rather than a law.",
    partNumber: 2,
    partTitle: "Site, Situation and the Origins of Cities",
  },
  // Part 3 — City Size and Spacing: gravity model, central place theory
  {
    id: 'hg-urbanization-ent-3a',
    question: "City A (2 million people) is 200 km from City B (4 million) and 400 km from City C (8 million). According to the gravity model, how does the interaction between A and B compare with that between A and C?",
    options: ["A–C interaction is twice A–B interaction.", "The two interactions are exactly equal.", "A–B interaction is twice A–C interaction.", "A–C interaction is four times A–B interaction."],
    correctIndex: 2,
    explanation: "Using distance in hundreds of km, A–B is (2 × 4) ÷ 2² = 2 and A–C is (2 × 8) ÷ 4² = 1. Doubling the distance cuts interaction by four, which outweighs City C's doubled population.",
    partNumber: 3,
    partTitle: "City Size and Spacing: Rank-Size, Primacy, Gravity and Central Places",
  },
  {
    id: 'hg-urbanization-ent-3b',
    question: "In one region, dozens of villages have grocery stores, a few towns have hospitals, and only one city has a major-league stadium and an international airport. What best explains this pattern?",
    options: ["Low-order services need the largest markets, so they are rare", "Higher-order services need larger markets, so fewer places offer them", "Every settlement offers every service once it passes 1,000 people", "Large cities offer fewer services than villages because land costs more"],
    correctIndex: 1,
    explanation: "In central place theory, high-order services such as specialized hospitals and stadiums have large thresholds and ranges, so only a few large places support them, while low-order goods like groceries are offered almost everywhere. The result is a hierarchy of settlements.",
    partNumber: 3,
    partTitle: "City Size and Spacing: Rank-Size, Primacy, Gravity and Central Places",
  },
  // Part 4 — Inside the City: models of urban structure
  {
    id: 'hg-urbanization-ent-4a',
    question: "In one city, high-income neighborhoods stretch outward in a wedge along a scenic lakeshore boulevard, from near downtown all the way to the suburbs. Which model does this pattern best support?",
    options: ["Hoyt's sector model", "Burgess's concentric zone model", "Harris and Ullman's multiple nuclei model", "The galactic city model"],
    correctIndex: 0,
    explanation: "Land uses forming wedges along a transport route, with a high-rent sector running outward from the center, is Hoyt's sector model. Burgess predicts rings, with wealth only at the outer edge.",
    partNumber: 4,
    partTitle: "Inside the City: Models of Urban Structure and Their Limits",
  },
  {
    id: 'hg-urbanization-ent-4b',
    question: "A city has three separate commercial cores: office towers laid out by its former colonial rulers, a district of family-run shops, and a sprawling outdoor market, with informal settlements on its outskirts. Which model does this structure match?",
    options: ["The Southeast Asian city model (McGee)", "The concentric zone model (Burgess)", "The Latin American city model (Griffin-Ford)", "The sub-Saharan African city model (de Blij)"],
    correctIndex: 3,
    explanation: "Three business districts, colonial, traditional and market, are the signature of de Blij's African city model. McGee's model centers on the port zone, and Griffin-Ford's on a CBD with a wealthy spine.",
    partNumber: 4,
    partTitle: "Inside the City: Models of Urban Structure and Their Limits",
  },
  // Part 5 — Cities in a Global System
  {
    id: 'hg-urbanization-ent-5a',
    question: "City X has about 3 million people but hosts a major stock exchange, dozens of global law and accounting firms, and regional headquarters of many transnational corporations. City Y has about 15 million people but few such functions. Which statement is correct?",
    options: ["Both are world cities, since each is a large urban area.", "Y is a world city because of its size; X is a megacity.", "X is a world city though not a megacity; Y is the reverse.", "Neither qualifies, since world cities must exceed 20 million."],
    correctIndex: 2,
    explanation: "A megacity is defined by size (10 million or more) and a world city by its command functions in the global economy. City X has the functions without the size, and City Y the size without the functions.",
    partNumber: 5,
    partTitle: "Cities in a Global System: Megacities, World Cities and New Suburbs",
  },
  {
    id: 'hg-urbanization-ent-5b',
    question: "Large-lot homes are scattered among farm fields 40 miles from downtown, and most of their residents commute daily into the metropolitan area. This settlement form is best called:",
    options: ["an edge city", "an exurb", "a satellite city", "a boomburb"],
    correctIndex: 1,
    explanation: "An exurb is a low-density area beyond the suburbs that looks rural but whose residents commute to the metro. An edge city is a dense suburban node of offices and retail, and a satellite city has its own downtown and economy.",
    partNumber: 5,
    partTitle: "Cities in a Global System: Megacities, World Cities and New Suburbs",
  },
  // Part 6 — Urban Data and AP Exam Practice
  {
    id: 'hg-urbanization-ent-6a',
    question: "A metropolitan area looks highly segregated when residential data are mapped by census tract, but nearly integrated when the same data are mapped by county. What does this best illustrate?",
    options: ["Census tracts are counted less accurately than counties are.", "Results depend on the size of the units used to report the data.", "Segregation in the metro area has fallen since the last census.", "County maps are always the most reliable view of segregation."],
    correctIndex: 1,
    explanation: "Large units average together neighborhoods that differ, hiding patterns that small units reveal, so the scale of the data must always be named. Neither map is wrong; they answer questions at different scales.",
    partNumber: 6,
    partTitle: "Urban Data and AP Exam Practice",
  },
  {
    id: 'hg-urbanization-ent-6b',
    question: "Country Z's three largest metropolitan areas have 12 million, 2 million and 1.5 million people. Which description fits these data?",
    options: ["A rank-size pattern, since the second city is about half the first", "A rank-size pattern, since all three cities exceed one million", "A primate city pattern, since the top city is six times the next", "A primate city pattern, since the third city is smaller than the second"],
    correctIndex: 2,
    explanation: "Under the rank-size rule the second city would be about 6 million; at one-sixth the size of the largest, the hierarchy is dominated by one primate city. Every hierarchy has a third city smaller than the second, so that proves nothing.",
    partNumber: 6,
    partTitle: "Urban Data and AP Exam Practice",
  },
  // Part 7 — Synthesis Review: common errors
  {
    id: 'hg-urbanization-ent-7a',
    question: "A student argues that because France has a primate city, France must be a less developed country. What is the best correction?",
    options: ["Primacy reflects centralization and history, not national poverty.", "Correct, because primate cities are found only in former colonies.", "Correct, because rank-size patterns mark every developed country.", "France has no primate city, since its cities follow the rank-size rule."],
    correctIndex: 0,
    explanation: "Primacy often comes from colonial history or a centralized state that concentrates government, media and investment in one capital. France and the United Kingdom are wealthy and still have primate cities.",
    partNumber: 7,
    partTitle: "Synthesis Review: Cities from Site to System",
  },
  {
    id: 'hg-urbanization-ent-7b',
    question: "A geographer applies the concentric zone model to a city built along an ocean coast and finds only half-rings of land use. Which limitation of the model does this reveal?",
    options: ["It was built only to describe cities in Latin America.", "It predicts wedges along routes rather than any rings.", "It ignores physical features such as large bodies of water.", "It assumes a city grows around several separate centers."],
    correctIndex: 2,
    explanation: "Burgess assumed a featureless plain with growth in every direction, so a coastline or lake cuts the predicted rings in half. The model came from Chicago, and wedges and multiple centers belong to other models.",
    partNumber: 7,
    partTitle: "Synthesis Review: Cities from Site to System",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Site, Situation and the Origins of Cities" },
    { partNumber: 3, partTitle: "City Size and Spacing: Rank-Size, Primacy, Gravity and Central Places" },
    { partNumber: 4, partTitle: "Inside the City: Models of Urban Structure and Their Limits" },
    { partNumber: 5, partTitle: "Cities in a Global System: Megacities, World Cities and New Suburbs" },
    { partNumber: 6, partTitle: "Urban Data and AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review: Cities from Site to System" },
  ]
}
