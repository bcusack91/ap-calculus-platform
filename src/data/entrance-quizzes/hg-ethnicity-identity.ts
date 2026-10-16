/**
 * Entrance Quiz — Ethnicity, Race & Identity (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: nation and state, irredentism
  {
    id: 'hg-ethnicity-identity-ent-1a',
    question: "A group shares a language, a religion and a sense of common history, but its homeland is divided among four sovereign countries and it governs none of them. This group is best described as:",
    options: ["a stateless nation", "a nation-state", "a multinational state", "an ethnic enclave"],
    correctIndex: 0,
    explanation: "A nation is a people with a shared identity; one without a sovereign state of its own is a stateless nation. A nation-state would require the group to have its own state, and an enclave is a neighborhood.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-ethnicity-identity-ent-1b',
    question: "Country A claims a province of neighboring Country B because most of the province's residents share Country A's language and ethnicity. This claim is an example of:",
    options: ["balkanization", "devolution", "assimilation", "irredentism"],
    correctIndex: 3,
    explanation: "Irredentism is a state's claim to territory in another state where members of its nation live. Balkanization is the breakup of a state into smaller ones, and devolution moves power from a central government to regions.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Identity in Geography: race as a social construct, gender and space
  {
    id: 'hg-ethnicity-identity-ent-2a',
    question: "A person with parents of two different backgrounds is counted in one racial category by Country P's census and in a different category by Country Q's census, although nothing about the person has changed. What does this best show?",
    options: ["One of the two censuses must contain an error.", "Such labels are set by each society's history.", "Race is a fixed trait that each census measures.", "Race and ethnicity always mean the same thing."],
    correctIndex: 1,
    explanation: "If the same person falls into different categories in different countries, the categories come from each society's history and politics rather than from biology, which is why race is called a social construct.",
    partNumber: 2,
    partTitle: "Identity in Geography: Ethnicity, Race, Gender and Indigeneity",
  },
  {
    id: 'hg-ethnicity-identity-ent-2b',
    question: "Which landscape feature most directly reflects gender roles shaping the use of space?",
    options: ["Street signs in two languages in an immigrant neighborhood", "A tribal council building on lands held by an Indigenous nation", "Separate entrances and prayer areas for men and for women", "A mural celebrating the founding of a city's oldest district"],
    correctIndex: 2,
    explanation: "Separate spaces for men and women are designed around a society's expectations for each gender. Bilingual signs reflect ethnicity, the council building reflects Indigenous self-government, and the mural reflects local history.",
    partNumber: 2,
    partTitle: "Identity in Geography: Ethnicity, Race, Gender and Indigeneity",
  },
  // Part 3 — Ethnic Landscapes and Neighborhoods: why groups cluster, landscape change
  {
    id: 'hg-ethnicity-identity-ent-3a',
    question: "Which statement correctly sorts reasons for ethnic clustering into voluntary and involuntary?",
    options: ["Chain migration is voluntary; deed rules barring sales to the group are involuntary.", "Deed rules barring sales to the group are voluntary; chain migration is involuntary.", "Shops in the group's language and nearby places of worship are both involuntary.", "Landlord refusals and discrimination by lenders are both voluntary reasons."],
    correctIndex: 0,
    explanation: "Following relatives and seeking familiar services are choices, while deed restrictions, landlord refusals and lending discrimination force a group into certain areas. Strong answers separate these two kinds of causes.",
    partNumber: 3,
    partTitle: "Ethnic Landscapes and Neighborhoods: Worked Cases",
  },
  {
    id: 'hg-ethnicity-identity-ent-3b',
    question: "In a neighborhood long home to one immigrant group, higher-income professionals buy and renovate the old row houses, rents double within ten years, and many longtime families are priced out to cheaper areas. Which process best describes this change?",
    options: ["Chain migration, as relatives follow earlier movers", "Ethnoburb formation, as a group settles in suburbs", "Succession, as a newer immigrant group moves in", "Gentrification, as rising costs push out existing residents"],
    correctIndex: 3,
    explanation: "Higher-income newcomers raising housing costs and displacing longtime residents is gentrification. Succession would mean a newer immigrant group replacing the old one, and nothing here involves relatives following earlier movers or suburban settlement.",
    partNumber: 3,
    partTitle: "Ethnic Landscapes and Neighborhoods: Worked Cases",
  },
  // Part 4 — Measuring and Mapping Segregation: housing practices and their legacy
  {
    id: 'hg-ethnicity-identity-ent-4a',
    question: "A real-estate agent shows a family homes only in neighborhoods where most residents share the family's race, although the family asked to see homes across the city. This practice is called:",
    options: ["redlining", "blockbusting", "steering", "a restrictive covenant"],
    correctIndex: 2,
    explanation: "Steering is an agent limiting where buyers look based on race. Redlining is lenders denying credit to areas, blockbusting is agents exploiting fear to buy and resell homes, and a covenant is a clause in a property deed.",
    partNumber: 4,
    partTitle: "Measuring and Mapping Segregation",
  },
  {
    id: 'hg-ethnicity-identity-ent-4b',
    question: "In the 1930s a federal agency graded some neighborhoods \"hazardous,\" and lenders avoided making mortgages there for decades. Which long-term outcome is most consistent with this practice?",
    options: ["Lower home values and less investment in those areas today", "Higher rates of home ownership among residents of those areas", "Faster growth of new suburbs inside the downgraded areas", "Equal access to credit across every part of the city"],
    correctIndex: 0,
    explanation: "Denying mortgages blocks home buying and investment, so redlined areas tended to lose value and stay poorer and segregated for generations. Credit denial works against home ownership and equal access.",
    partNumber: 4,
    partTitle: "Measuring and Mapping Segregation",
  },
  // Part 5 — Ethnicity, Nationalism and Conflict
  {
    id: 'hg-ethnicity-identity-ent-5a',
    question: "A country's citizens include three groups, each with its own language and home region, and two of them have movements seeking self-rule. The country is best described as:",
    options: ["a multistate nation", "a nation-state", "a multinational state", "a stateless nation"],
    correctIndex: 2,
    explanation: "A state that contains two or more nations is a multinational state. A multistate nation is the reverse, one nation spread across several states, and a nation-state contains essentially one nation.",
    partNumber: 5,
    partTitle: "Ethnicity, Nationalism and Conflict",
  },
  {
    id: 'hg-ethnicity-identity-ent-5b',
    question: "Government-backed militias hunt down members of a minority in every region of the country, with the stated goal of wiping out the minority entirely rather than driving it from one area. This is best classified as:",
    options: ["ethnic cleansing, since the aim is removal from an area", "genocide, since the aim is to destroy the whole group", "irredentism, since a state claims a neighbor's land", "balkanization, since a state splits into small parts"],
    correctIndex: 1,
    explanation: "The two terms differ in intent: genocide aims to destroy the group itself, while ethnic cleansing uses force to remove a group from a territory. Pursuing the group everywhere with the goal of wiping it out is genocide.",
    partNumber: 5,
    partTitle: "Ethnicity, Nationalism and Conflict",
  },
  // Part 6 — AP Exam Practice: classifying a landscape, describing data
  {
    id: 'hg-ethnicity-identity-ent-6a',
    question: "An older inner-city district has storefront signs mostly in one foreign language, small apartments above shops, many residents who arrived within the last few years, and a community center that helps newcomers find work. This district is best classified as:",
    options: ["an ethnoburb", "a symbolic ethnic landscape", "a ghetto in the original sense", "an ethnic enclave"],
    correctIndex: 3,
    explanation: "A dense, inner-city concentration of recent arrivals supported by services in their own language is an ethnic enclave. An ethnoburb is suburban and often affluent, a ghetto in the original sense is legally imposed, and a symbolic landscape lacks the residents.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Segregation Data and Ethnic Landscapes",
  },
  {
    id: 'hg-ethnicity-identity-ent-6b',
    question: "A table shows that a group's share of a city's population rose from 8 percent in 2000 to 15 percent in 2020. A free-response question asks students to describe the trend. Which response earns the point?",
    options: ["The group grew because relatives kept arriving through chain migration.", "It nearly doubled, climbing from 8 to 15 percent.", "At 15 percent, the group is now the largest ethnic group in the city.", "The group's share of the population changed over the period."],
    correctIndex: 1,
    explanation: "A description gives the direction and size of the change from the data. The chain-migration claim is a cause the table does not show, the largest-group claim is unsupported, and the last response gives no direction or size.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Segregation Data and Ethnic Landscapes",
  },
  // Part 7 — Synthesis Review: distinctions to know
  {
    id: 'hg-ethnicity-identity-ent-7a',
    question: "Which statement correctly distinguishes a nation from a state?",
    options: ["A nation is a sovereign territory; a state is a people with a shared culture.", "A nation and a state are the same thing, a people that governs its own land.", "A nation is a people with a shared identity; a state is a sovereign territory.", "A nation must have its own government; a state may exist with no government."],
    correctIndex: 2,
    explanation: "A nation is a group bound by shared culture and identity, while a state is a politically organized, sovereign territory. Many nations have no state, which is why nation-states are rare.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Identity to Landscape to Conflict",
  },
  {
    id: 'hg-ethnicity-identity-ent-7b',
    question: "A census asks separately about race and about Hispanic origin. A woman of Mexican heritage marks \"White\" for race and \"Hispanic\" for origin. What does this reflect?",
    options: ["Her answers conflict, since race and ethnicity mean the same thing.", "Ethnicity is classified apart from race in this census.", "Hispanic origin is a race defined by shared physical traits.", "Census categories come from biology, not from political choices."],
    correctIndex: 1,
    explanation: "Treating Hispanic origin as an ethnicity means Hispanic people can be of any race, so the two answers are consistent. Ethnicity rests on shared culture and heritage, while race is a separate social classification.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Identity to Landscape to Conflict",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Identity in Geography: Ethnicity, Race, Gender and Indigeneity" },
    { partNumber: 3, partTitle: "Ethnic Landscapes and Neighborhoods: Worked Cases" },
    { partNumber: 4, partTitle: "Measuring and Mapping Segregation" },
    { partNumber: 5, partTitle: "Ethnicity, Nationalism and Conflict" },
    { partNumber: 6, partTitle: "AP Exam Practice: Segregation Data and Ethnic Landscapes" },
    { partNumber: 7, partTitle: "Synthesis Review: From Identity to Landscape to Conflict" },
  ]
}
