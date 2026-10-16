/**
 * Entrance Quiz — Agricultural Origins & Hearths (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: hearths and the consequences of farming
  {
    id: 'hg-agricultural-origins-ent-1a',
    question: "Which pairing of an agricultural hearth with domesticates first developed there is correct?",
    options: ["Mesoamerica: maize and squash", "Fertile Crescent: potatoes and llamas", "Andes: wheat and barley", "Southeast Asia: maize and beans"],
    correctIndex: 0,
    explanation: "Maize and squash were domesticated in Mesoamerica (southern Mexico). The Fertile Crescent gave wheat, barley, sheep and goats, the Andes potatoes and llamas, and Southeast Asia taro, yams and bananas.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-agricultural-origins-ent-1b',
    question: "Which change most directly followed from early farming communities producing a reliable food surplus?",
    options: ["Groups became more mobile, following herds from season to season.", "Settlements broke up as families scattered to find wild food.", "Machines replaced most human and animal labor in the fields.", "Some people could quit the fields to work as full-time craft specialists."],
    correctIndex: 3,
    explanation: "A surplus meant not everyone had to produce food, so specialists such as potters, traders and priests appeared, along with social classes. Farming made people more settled, not more mobile, and machines came thousands of years later.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Domestication and the Hearths in Depth
  {
    id: 'hg-agricultural-origins-ent-2a',
    question: "Egypt grew wheat and barley thousands of years ago, but the wild ancestors of these crops did not grow there, and domesticated forms appear earlier in Southwest Asia. What does this evidence suggest?",
    options: ["Egypt received farming by diffusion from elsewhere.", "Egypt was an independent hearth for both crops.", "Wheat was domesticated in Egypt and then spread east.", "Farming began in every region at the same moment."],
    correctIndex: 0,
    explanation: "A hearth domesticates local wild species; crops whose wild ancestors are absent and whose domestic forms appear earlier elsewhere must have spread there. Egypt's wheat and barley diffused from the Fertile Crescent.",
    partNumber: 2,
    partTitle: "Domestication and the Hearths in Depth",
  },
  {
    id: 'hg-agricultural-origins-ent-2b',
    question: "Wild teosinte scatters a few hard-cased kernels on its own, while modern maize holds hundreds of kernels on a cob wrapped tightly in husks. What does this change show about domestication?",
    options: ["Maize evolved on its own to survive the cold of higher latitudes.", "People bred it for harvest, so maize now relies on farmers to sow it.", "Husks let the cob scatter its kernels farther without human help.", "Teosinte and maize are unrelated plants from two different hearths."],
    correctIndex: 1,
    explanation: "Generations of farmers kept seed from plants whose kernels stayed on the cob, so maize cannot disperse its own seed and depends on people to plant it. Husks keep the kernels from scattering, and maize descends from teosinte in Mesoamerica.",
    partNumber: 2,
    partTitle: "Domestication and the Hearths in Depth",
  },
  // Part 3 — How Agriculture Spread: the Columbian Exchange
  {
    id: 'hg-agricultural-origins-ent-3a',
    question: "Potatoes from the Americas supported population growth in cool, wet parts of Europe after the Columbian Exchange. Which later event best shows a risk that came with this benefit?",
    options: ["Smallpox spreading from the Americas into Europe", "Horses transforming life on the Great Plains", "Irish famine after blight struck the one crop many relied on", "Wheat farming collapsing across Asia after maize arrived"],
    correctIndex: 2,
    explanation: "Many poor Irish families relied almost entirely on potatoes, so when blight struck in the 1840s about a million people died. Smallpox moved from Europe to the Americas, not the reverse.",
    partNumber: 3,
    partTitle: "How Agriculture Spread: Migration, Axes and the Columbian Exchange",
  },
  {
    id: 'hg-agricultural-origins-ent-3b',
    question: "Why did Indigenous populations in the Americas collapse in the century after 1492?",
    options: ["Maize harvests failed once European crops were introduced.", "Horses brought by Europeans destroyed most of their farmland.", "Most Indigenous people migrated across the Atlantic to Europe.", "They had no prior exposure to diseases such as smallpox."],
    correctIndex: 3,
    explanation: "Diseases carried from the Eastern Hemisphere, such as smallpox, measles and influenza, struck populations with no immunity, causing enormous death tolls. That loss of life was one of the exchange's largest effects.",
    partNumber: 3,
    partTitle: "How Agriculture Spread: Migration, Axes and the Columbian Exchange",
  },
  // Part 4 — Rural Settlement Patterns
  {
    id: 'hg-agricultural-origins-ent-4a',
    question: "In a dry region, one spring supplies all of a farming community's water. Families live near it and walk out each morning to fields that surround the settlement. Which settlement pattern and cause fit best?",
    options: ["Dispersed, since each farm has its own source of water", "Linear, since homes line up along a river or a road", "Clustered, around a single shared water point", "Dispersed, since a government grid assigned each plot"],
    correctIndex: 2,
    explanation: "Homes grouped together with fields around them form a clustered (nucleated) village, and a single shared water source is a classic reason to cluster. Dispersed farmsteads need each farm to have its own water.",
    partNumber: 4,
    partTitle: "Rural Settlement Patterns: Why Farms and Villages Sit Where They Do",
  },
  {
    id: 'hg-agricultural-origins-ent-4b',
    question: "Along the St. Lawrence River, French colonists divided farmland into long lots: narrow strips that each begin at the riverbank and run far inland, with a farmhouse at the river end of each strip. Which settlement pattern results, and why were the lots drawn this way?",
    options: ["Clustered, since homes gathered around one village square", "Dispersed, since a federal grid set each farm on a square", "Clustered, since one landlord held all the strips together", "Linear, since each strip gave its own farm water frontage"],
    correctIndex: 3,
    explanation: "With a house at the river end of every strip, homes form a line along the bank, a linear pattern, and the narrow-strip design gave each farm access to the river, the main route for transport. A federal square grid describes US township and range, not French long lots.",
    partNumber: 4,
    partTitle: "Rural Settlement Patterns: Why Farms and Villages Sit Where They Do",
  },
  // Part 5 — The Second Agricultural Revolution
  {
    id: 'hg-agricultural-origins-ent-5a',
    question: "In parts of Europe during the 1700s and 1800s, new crop rotations and enclosed farms produced larger, more reliable harvests. How did this contribute to the population pattern of Stage 2 of the Demographic Transition Model?",
    options: ["Birth rates rose, while death rates stayed about the same.", "Famines spread, while death rates rose in much of Europe.", "Birth rates fell at once, while death rates held steady.", "Death rates fell, while birth rates stayed high as before."],
    correctIndex: 3,
    explanation: "Steadier, larger food supplies improved nutrition and resistance to disease, so death rates fell while birth rates stayed high, the widening gap of Stage 2. Birth rates fell only later, as urban life made large families costly.",
    partNumber: 5,
    partTitle: "The Second Agricultural Revolution",
  },
  {
    id: 'hg-agricultural-origins-ent-5b',
    question: "In Country M, the share of the workforce in agriculture fell from about 60 percent in 1950 to about 12 percent in 2010. Which statement describes this change correctly?",
    options: ["It fell by about 48 percent of its 1950 level.", "It fell by about 48 percentage points.", "It fell by about 80 percentage points.", "It rose by about 48 percentage points."],
    correctIndex: 1,
    explanation: "Subtracting the two shares gives 60 − 12 = 48 percentage points. As a percent of the 1950 level, the decline was 48 ÷ 60 = 80 percent, so mixing the two measures produces both wrong options.",
    partNumber: 5,
    partTitle: "The Second Agricultural Revolution",
  },
  // Part 6 — The Green Revolution: Data and AP Practice
  {
    id: 'hg-agricultural-origins-ent-6a',
    question: "A farmer plants a high-yield semi-dwarf rice variety but cannot afford fertilizer and has no reliable irrigation. What is the most likely result?",
    options: ["Yields stay low without the inputs it needs.", "Yields triple, since the new seed alone raises output.", "The rice reverts to its wild form within one season.", "Yields rise, since the new variety needs no water."],
    correctIndex: 0,
    explanation: "Green Revolution varieties produce large harvests only as part of a package with fertilizer, dependable water and pest control. Without the package, a high-yield seed does little, which is why farmers lacking capital gained least.",
    partNumber: 6,
    partTitle: "The Green Revolution: Data and AP Practice",
  },
  {
    id: 'hg-agricultural-origins-ent-6b',
    question: "Over 20 years, the area Country N planted in wheat grew from 10 to 12 million hectares, while its average yield rose from 1.2 to 2.4 tonnes per hectare. About how much did its total wheat output grow?",
    options: ["It rose about 20 percent.", "It doubled.", "It rose about 2.4 times.", "It rose about 3.5 times."],
    correctIndex: 2,
    explanation: "Output is area times yield: 10 × 1.2 = 12 million tonnes before and 12 × 2.4 = 28.8 million after, 2.4 times as much. Yield alone doubled and area alone rose 20 percent; the two gains multiply.",
    partNumber: 6,
    partTitle: "The Green Revolution: Data and AP Practice",
  },
  // Part 7 — Synthesis Review: chronology and connections
  {
    id: 'hg-agricultural-origins-ent-7a',
    question: "Four events: (W) the Haber-Bosch process begins making synthetic nitrogen fertilizer; (X) wheat and barley are domesticated in the Fertile Crescent; (Y) potato blight brings famine to Ireland; (Z) the Norfolk four-course rotation spreads across British farms. Placed from earliest to latest, which event comes second?",
    options: ["Event W", "Event X", "Event Y", "Event Z"],
    correctIndex: 3,
    explanation: "Wheat and barley were domesticated more than 10,000 years ago, the Norfolk rotation spread in the 1700s, the Irish famine began in 1845, and the Haber-Bosch process arrived in the 1910s.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Hearths to High-Yield Seeds",
  },
  {
    id: 'hg-agricultural-origins-ent-7b',
    question: "Which statement best connects the Green Revolution to debates about population growth?",
    options: ["It ended hunger worldwide by the end of the 1980s.", "It slowed population growth mainly by raising death rates in farming regions.", "Food output grew faster than population in many places, against Malthus.", "It caused fertility rates to rise sharply in every country that adopted it."],
    correctIndex: 2,
    explanation: "Higher yields let food production grow faster than population in much of Asia and Latin America, evidence against Malthus at the national and global scale. Hunger persisted where gains were uneven, so it did not end hunger.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Hearths to High-Yield Seeds",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Domestication and the Hearths in Depth" },
    { partNumber: 3, partTitle: "How Agriculture Spread: Migration, Axes and the Columbian Exchange" },
    { partNumber: 4, partTitle: "Rural Settlement Patterns: Why Farms and Villages Sit Where They Do" },
    { partNumber: 5, partTitle: "The Second Agricultural Revolution" },
    { partNumber: 6, partTitle: "The Green Revolution: Data and AP Practice" },
    { partNumber: 7, partTitle: "Synthesis Review: From Hearths to High-Yield Seeds" },
  ]
}
