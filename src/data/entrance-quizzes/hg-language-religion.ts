/**
 * Entrance Quiz — Language & Religion (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: language terms, universalizing vs ethnic
  {
    id: 'hg-language-religion-ent-1a',
    question: "Traders from three groups with no shared language develop a simplified tongue with a small vocabulary drawn mostly from one group's language. No one speaks it as a first language. What is this tongue?",
    options: ["A creole", "A dialect", "A pidgin", "A language isolate"],
    correctIndex: 2,
    explanation: "A pidgin is a simplified contact language that no one speaks natively. It becomes a creole only when children grow up speaking it as their first language; a dialect is a variety of one language, and an isolate has no known relatives.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-language-religion-ent-1b',
    question: "Religion X has no single founder. Its holy sites are rivers and mountains in one region, its festivals follow the local harvest calendar, and nearly all followers are born into it. How should it be classified?",
    options: ["Ethnic, since it is bound to one people and one landscape", "Universalizing, since its sacred sites draw large numbers of pilgrims", "Universalizing, since it may have hundreds of millions of followers", "Ethnic, because a religion without a founder cannot have holy texts"],
    correctIndex: 0,
    explanation: "Membership by birth, sacred sites in a home landscape and an agricultural calendar mark an ethnic religion. Size and pilgrimage do not make a religion universalizing, and ethnic religions can have ancient holy texts.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Language Families, Hearths and Diffusion
  {
    id: 'hg-language-religion-ent-2a',
    question: "Portuguese and Romanian both descend from Latin. Polish and Russian share a different ancestor. All four share a much older common ancestor. Which statement is correct?",
    options: ["All four share a branch; Portuguese and Romanian share a family.", "Polish and Portuguese share a group; all four share a branch.", "Portuguese and Romanian share a branch; all four share a family.", "The four belong to two separate, unrelated language families."],
    correctIndex: 2,
    explanation: "Languages from Latin form the Romance branch, Polish and Russian belong to the Balto-Slavic branch, and both branches belong to the Indo-European family. The family is the broadest level, so it cannot sit inside a branch.",
    partNumber: 2,
    partTitle: "Language Families, Hearths and Diffusion",
  },
  {
    id: 'hg-language-religion-ent-2b',
    question: "Most languages spoken across Africa south of the equator, including Zulu, Shona and Swahili, are closely related and trace back to a hearth near today's Nigeria–Cameroon border. Which process best explains this distribution?",
    options: ["European colonial rule imposed one language across the region.", "Migrating farmers carried them across the continent over centuries.", "Indian Ocean traders carried the languages inland from the coast.", "Each language arose on its own in the region where it is spoken."],
    correctIndex: 1,
    explanation: "The Bantu expansion spread the languages as farmers moved south and east from a West-Central African hearth over thousands of years. Colonial languages are European, and coastal trade added loanwords to Swahili but did not create the family.",
    partNumber: 2,
    partTitle: "Language Families, Hearths and Diffusion",
  },
  // Part 3 — Religions: branches, sacred space
  {
    id: 'hg-language-religion-ent-3a',
    question: "A map of Christianity's branches shades northern Europe one color, southern Europe and most of Latin America a second color, and Russia and Greece a third. In that order, which branches are shown?",
    options: ["Roman Catholic, Eastern Orthodox and Protestant", "Protestant, Eastern Orthodox and Roman Catholic", "Eastern Orthodox, Protestant and Roman Catholic", "Protestant, Roman Catholic and Eastern Orthodox"],
    correctIndex: 3,
    explanation: "Protestantism dominates northern Europe, Roman Catholicism southern Europe and Latin America, and Eastern Orthodoxy Russia, Greece and much of eastern Europe.",
    partNumber: 3,
    partTitle: "Religions: Hearths, Diffusion and Branches",
  },
  {
    id: 'hg-language-religion-ent-3b',
    question: "Which landscape feature best reflects a universalizing religion's tie to a hearth that may be thousands of kilometers away?",
    options: ["Shrines placed at sacred rocks and trees across Japan", "Temples built along the banks of a local holy river", "Mosques laid out with prayer niches facing Mecca", "Village shrines honoring local ancestral spirits"],
    correctIndex: 2,
    explanation: "Mosques everywhere are oriented toward Mecca, linking believers worldwide to Islam's hearth. The other features tie worship to the local landscape, which is typical of ethnic religions.",
    partNumber: 3,
    partTitle: "Religions: Hearths, Diffusion and Branches",
  },
  // Part 4 — Reading Language and Religion Data and Maps
  {
    id: 'hg-language-religion-ent-4a',
    question: "Language X has 50 million native speakers and 400 million total speakers. Language Y has 300 million native speakers and 330 million total speakers. Which conclusion is best supported?",
    options: ["Language Y is the more widely used lingua franca of the two.", "Language X has more native speakers than Language Y does.", "Language X is widely learned as a second language.", "Language Y spread mainly as a second language for trade."],
    correctIndex: 2,
    explanation: "Seven of every eight speakers of Language X learned it as a second language, the profile of a lingua franca. Language Y is overwhelmingly a mother tongue, as when a language spreads by settlement.",
    partNumber: 4,
    partTitle: "Reading Language and Religion Data and Maps",
  },
  {
    id: 'hg-language-religion-ent-4b',
    question: "A map shades every province of a country by its majority religion, and every province shows Religion A. Census tables show that Religion B makes up 30 percent of the national population, with 20 to 40 percent in every province. What does this comparison show?",
    options: ["A map of the largest group can hide a big minority found everywhere.", "The census must have miscounted the followers of Religion B.", "Religion B is concentrated almost entirely in one province.", "Religion A makes up all of the population of every province."],
    correctIndex: 0,
    explanation: "A majority map shows only the largest group in each unit, so a minority spread evenly at 20 to 40 percent never appears, even though it is nearly a third of the country. The data show B spread across provinces, not concentrated in one.",
    partNumber: 4,
    partTitle: "Reading Language and Religion Data and Maps",
  },
  // Part 5 — Language, Religion and Identity: secularization, extinction
  {
    id: 'hg-language-religion-ent-5a',
    question: "Which evidence most directly shows secularization in a country?",
    options: ["The share who never attend services rises from 20 to 45 percent.", "The number of mosques grows from 40 to 90 as immigrants arrive.", "A new religious group gains members through door-to-door outreach.", "Pilgrims travel abroad to sacred sites in larger numbers each year."],
    correctIndex: 0,
    explanation: "Secularization is the decline of religious affiliation and practice, so a rising share who never attend services is direct evidence. New mosques, a growing religious group and more pilgrims all show religion spreading or holding steady.",
    partNumber: 5,
    partTitle: "Language, Religion and Identity: Unity, Conflict and Change",
  },
  {
    id: 'hg-language-religion-ent-5b',
    question: "Which situation puts a language at the greatest risk of extinction?",
    options: ["Adults in nearby towns learn it as a second language for trade.", "It borrows many words from a neighboring language over time.", "It is spoken in two countries that are separated by a border.", "Parents stop passing it on, and children use another language."],
    correctIndex: 3,
    explanation: "A language dies when it stops being passed to children; once the last native speakers are gone, it is extinct. Borrowing words, being learned by outsiders or crossing a border does not end transmission.",
    partNumber: 5,
    partTitle: "Language, Religion and Identity: Unity, Conflict and Change",
  },
  // Part 6 — AP Exam Practice: regional data against national totals
  {
    id: 'hg-language-religion-ent-6a',
    question: "A country has two regions. The East has 10 million people, 80 percent of them Muslim. The West has 30 million people, 20 percent of them Muslim. What share of the national population is Muslim?",
    options: ["20 percent", "35 percent", "50 percent", "80 percent"],
    correctIndex: 1,
    explanation: "Muslims number 8 million in the East and 6 million in the West, so 14 million of 40 million, or 35 percent. Averaging the two percentages to get 50 percent ignores that the West is three times as large.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Regional Data and Religious Change",
  },
  {
    id: 'hg-language-religion-ent-6b',
    question: "In Region R, 90 percent of residents say they can speak the official national language, but only 30 percent say it is the language they use at home. Which conclusion is best supported?",
    options: ["Most residents are bilingual and keep a different home language.", "The official language is about to become extinct in Region R.", "Region R's census must have overcounted its residents' ability.", "Few residents of Region R can read or write the official language."],
    correctIndex: 0,
    explanation: "Most people can use the official language yet speak something else at home, so they are bilingual. Ability and daily use are different measures; neither figure suggests extinction or illiteracy.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Regional Data and Religious Change",
  },
  // Part 7 — Synthesis Review: avoiding common errors
  {
    id: 'hg-language-religion-ent-7a',
    question: "A student argues that Hinduism must be a universalizing religion because it has more than a billion followers. What is the best correction?",
    options: ["Hinduism is universalizing, because missionaries carried it worldwide.", "Only religions under one million followers can be considered ethnic.", "Hinduism is universalizing, because it has a single founder and date.", "Size does not set the type, and Hinduism is tied to one people and region."],
    correctIndex: 3,
    explanation: "Whether a religion is universalizing depends on seeking converts across cultures, not on size. Hinduism has no single founder, spread mainly with South Asian peoples, and is classified as ethnic.",
    partNumber: 7,
    partTitle: "Synthesis Review: Hearths, Diffusion, Data and Identity",
  },
  {
    id: 'hg-language-religion-ent-7b',
    question: "Two groups readily understand each other's everyday speech, but they write in different scripts and call their speech two separate languages, a distinction tied to national and religious identity. What does this case show?",
    options: ["Mutual understanding always marks two separate languages.", "Politics can decide where the language-dialect line falls.", "A writing system decides which family a language is in.", "The two must belong to unrelated language families."],
    correctIndex: 1,
    explanation: "When mutually intelligible speech is counted as two languages for reasons of identity, the language-dialect line is being drawn politically, not purely linguistically. Scripts do not determine language families.",
    partNumber: 7,
    partTitle: "Synthesis Review: Hearths, Diffusion, Data and Identity",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Language Families, Hearths and Diffusion" },
    { partNumber: 3, partTitle: "Religions: Hearths, Diffusion and Branches" },
    { partNumber: 4, partTitle: "Reading Language and Religion Data and Maps" },
    { partNumber: 5, partTitle: "Language, Religion and Identity: Unity, Conflict and Change" },
    { partNumber: 6, partTitle: "AP Exam Practice: Regional Data and Religious Change" },
    { partNumber: 7, partTitle: "Synthesis Review: Hearths, Diffusion, Data and Identity" },
  ]
}
