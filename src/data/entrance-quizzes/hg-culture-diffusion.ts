/**
 * Entrance Quiz — Cultural Landscape & Diffusion (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: folk vs popular culture, traits and complexes
  {
    id: 'hg-culture-diffusion-ent-1a',
    question: "A style of barn built by one rural community has stayed in a few valleys for 200 years, while a fast-food chain's buildings appear on five continents. What best explains the difference in their distributions?",
    options: ["Folk traits spread slowly in small groups, but popular ones ride mass media", "Folk traits are always older than popular ones, so they have had less time to spread", "Popular traits spread only by relocation diffusion as inventors move abroad", "Folk traits are protected by laws that ban copying them outside their hearths"],
    correctIndex: 0,
    explanation: "Folk culture is passed on face to face in small, often isolated communities and changes slowly, so it stays clustered; popular culture is mass-produced and spread quickly by media, trade and hierarchical diffusion. Age and laws do not explain the pattern.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-culture-diffusion-ent-1b',
    question: "Which of the following is a culture complex rather than a single culture trait?",
    options: ["The use of chopsticks at every meal", "Shaking hands when greeting a stranger", "A religion's beliefs and rituals", "Wearing a particular style of wide-brimmed hat"],
    correctIndex: 2,
    explanation: "A culture complex is a group of related traits, such as the beliefs, practices, clothing and architecture bound up with a religion. Chopsticks, a handshake and a hat style are each a single trait.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Culture and the Cultural Landscape: survey systems, attitudes
  {
    id: 'hg-culture-diffusion-ent-2a',
    question: "From the air, one U.S. county shows irregular parcels bounded by streams, trees and old stone walls, while a county farther west is a checkerboard of square-mile sections. What best explains the contrast?",
    options: ["One used French long lots, and the other used metes and bounds", "One was surveyed by metes and bounds, the other township and range", "One used township and range, and the other used French long lots", "Both used township and range, but floods later reshaped one county"],
    correctIndex: 1,
    explanation: "Metes and bounds follows natural features and produces irregular parcels, as in the original eastern colonies, while the township-and-range survey laid a grid of square-mile sections over most land to the west. Long lots are narrow strips fronting a river.",
    partNumber: 2,
    partTitle: "Culture and the Cultural Landscape",
  },
  {
    id: 'hg-culture-diffusion-ent-2b',
    question: "In a village, cattle roam freely and are never eaten. One researcher writes that the custom \"wastes valuable food.\" A second explains it through the community's religious beliefs and the cattle's role in plowing and dairy. Which attitudes do the two researchers show?",
    options: ["The first shows cultural relativism and the second ethnocentrism.", "The first and the second both show an attitude of cultural relativism.", "The first shows ethnocentrism and the second cultural relativism.", "The first and the second both show an attitude of ethnocentrism."],
    correctIndex: 2,
    explanation: "Judging the custom by the researcher's own standards is ethnocentrism; explaining it by the values and conditions of the people who practice it is cultural relativism.",
    partNumber: 2,
    partTitle: "Culture and the Cultural Landscape",
  },
  // Part 3 — Classifying Diffusion: staged cases and barriers
  {
    id: 'hg-culture-diffusion-ent-3a',
    question: "Migrants carry a style of street food to a foreign capital. There it spreads from their neighborhood to the adjoining neighborhoods, stall by stall, until it is sold across the city. Which classification fits the two stages?",
    options: ["Hierarchical diffusion, then relocation diffusion", "Stimulus diffusion, then hierarchical diffusion", "Contagious diffusion, then relocation diffusion", "Relocation diffusion, then contagious diffusion"],
    correctIndex: 3,
    explanation: "The food arrived because the people who cooked it moved (relocation), then spread outward to neighboring areas like a wave (contagious). Naming a type for each stage is how mixed cases are classified.",
    partNumber: 3,
    partTitle: "Classifying Diffusion: Worked Cases",
  },
  {
    id: 'hg-culture-diffusion-ent-3b',
    question: "A dance trend spreads quickly among teenagers in several neighboring countries but barely appears in one of them, whose government blocks the video-sharing apps that carry it. This is best described as:",
    options: ["a physical barrier to diffusion", "an economic barrier to diffusion", "a political barrier to diffusion", "a cultural barrier to diffusion"],
    correctIndex: 2,
    explanation: "A government restricting access to media is a political barrier. Nothing in the case involves terrain, cost or beliefs that reject the trait.",
    partNumber: 3,
    partTitle: "Classifying Diffusion: Worked Cases",
  },
  // Part 4 — Historical Causes of Diffusion: colonialism, forced migration
  {
    id: 'hg-culture-diffusion-ent-4a',
    question: "Portuguese is an official language of Brazil, Angola and Mozambique, which lie on two different continents. What best explains this pattern?",
    options: ["Each was once a colony ruled in Portuguese.", "Portuguese spread outward from Portugal to neighboring lands.", "Brazilian migrants carried the language with them to Africa.", "A modern trade bloc adopted it as its working language."],
    correctIndex: 0,
    explanation: "Colonial administration made the colonizer's language the language of government, schooling and law, and it remained official after independence. The spread jumped oceans, so it was not neighbor-to-neighbor expansion.",
    partNumber: 4,
    partTitle: "Historical Causes of Diffusion: Trade, Colonialism and Imperialism",
  },
  {
    id: 'hg-culture-diffusion-ent-4b',
    question: "Religions such as Candomblé in Brazil and Santería in Cuba blend West African and Catholic traditions. Which historical process and effect does this reflect?",
    options: ["Indian Ocean trade, which produced assimilation", "The Atlantic slave trade, which produced syncretism", "Voluntary labor migration, which produced multiculturalism", "Hierarchical diffusion from Rome, which produced acculturation"],
    correctIndex: 1,
    explanation: "Enslaved Africans carried their religious traditions across the Atlantic (forced relocation), where they merged with Catholicism into new religions, which is syncretism.",
    partNumber: 4,
    partTitle: "Historical Causes of Diffusion: Trade, Colonialism and Imperialism",
  },
  // Part 5 — Contemporary Diffusion and Its Effects: divergence, uneven access
  {
    id: 'hg-culture-diffusion-ent-5a',
    question: "As imported films and streaming shows came to dominate a country's screens, its government began requiring theaters and broadcasters to devote a set share of screen time to films made in the country. This policy is best described as:",
    options: ["cultural convergence, as global media spreads everywhere", "cultural divergence, a reaction to outside influence", "assimilation into a dominant global culture", "time-space compression of national media"],
    correctIndex: 1,
    explanation: "Protecting national film against outside media keeps the culture distinct, which is cultural divergence. Convergence would describe the growing dominance of the imported shows themselves.",
    partNumber: 5,
    partTitle: "Contemporary Diffusion and Its Effects",
  },
  {
    id: 'hg-culture-diffusion-ent-5b',
    question: "A viral video trend reaches a megacity on another continent days before it reaches a rural village 50 km from where it began. What best explains this?",
    options: ["The village is too close to the origin for diffusion to occur.", "Time-space compression shrinks the absolute distance to the city.", "Popular culture can spread only by relocation diffusion.", "Stronger network links carried it to the faraway big city first."],
    correctIndex: 3,
    explanation: "Contemporary diffusion follows connectivity, and access is uneven: a well-connected city can be effectively closer than a poorly connected village nearby. Time-space compression shortens travel and communication time, not absolute distance.",
    partNumber: 5,
    partTitle: "Contemporary Diffusion and Its Effects",
  },
  // Part 6 — AP Exam Practice: arrival data and landscape evidence
  {
    id: 'hg-culture-diffusion-ent-6a',
    question: "A product launched in City A in week 0. It reached City B (population 50,000; 30 km from A) in week 2, City C (40,000; 60 km) in week 4, City E (20,000; 90 km) in week 6 and City D (3 million; 900 km) in week 9. Which type of diffusion do the data show?",
    options: ["Contagious, since arrival follows distance rather than city size", "Hierarchical, since the trait reached the largest city eventually", "Relocation, since the product moved from one city to the next", "Stimulus, since each city adapted the product as it arrived"],
    correctIndex: 0,
    explanation: "Arrival tracks distance: the nearest towns adopted first and the largest city, far away, adopted last, so the spread moved outward like a wave. Hierarchical diffusion would have reached the big city early.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Diffusion Data and Landscapes",
  },
  {
    id: 'hg-culture-diffusion-ent-6b',
    question: "A town square contains an 18th-century mission church, streets laid out in a grid around the plaza, a mural of the region's Indigenous heritage that residents painted last year, and a global fast-food outlet. Which feature is the best evidence of placemaking?",
    options: ["The colonial religious building", "The rectangular street pattern", "The international restaurant chain", "The new artwork created by local people"],
    correctIndex: 3,
    explanation: "Placemaking is deliberately shaping a public space to express a community's identity, as the residents' mural does. The church and grid are colonial layers, and the chain outlet reflects globalization.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Diffusion Data and Landscapes",
  },
  // Part 7 — Synthesis Review: correcting classifications, limits of convergence
  {
    id: 'hg-culture-diffusion-ent-7a',
    question: "A student writes that Spanish colonists spreading their language across the Americas is an example of hierarchical diffusion. What is the best correction?",
    options: ["It was contagious, since each town taught Spanish to the next town over.", "It was stimulus diffusion, since Spanish changed once it reached the Americas.", "It was not diffusion at all, since the language spread through conquest.", "Settlers brought Spanish themselves, so the main type is relocation."],
    correctIndex: 3,
    explanation: "When the people who hold a trait move to a new place and bring it, the main type is relocation; colonial authority may add a hierarchical element later. Forced spread is still diffusion.",
    partNumber: 7,
    partTitle: "Synthesis Review: Culture, Landscape and Diffusion",
  },
  {
    id: 'hg-culture-diffusion-ent-7b',
    question: "A global fast-food brand operates in many countries, but people use it differently: a cheap family meal in one country, a fashionable place for a date in another. Which limitation of the idea of cultural convergence does this illustrate?",
    options: ["Global brands can spread only through hierarchical diffusion.", "Local users reinterpret imported traits instead of copying them.", "Convergence occurs only among countries that share a language.", "Divergence always overtakes convergence within a decade."],
    correctIndex: 1,
    explanation: "Global culture rarely arrives unchanged; people give it local meanings, so the same brand plays different roles in different places. That limits claims that globalization makes cultures identical.",
    partNumber: 7,
    partTitle: "Synthesis Review: Culture, Landscape and Diffusion",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Culture and the Cultural Landscape" },
    { partNumber: 3, partTitle: "Classifying Diffusion: Worked Cases" },
    { partNumber: 4, partTitle: "Historical Causes of Diffusion: Trade, Colonialism and Imperialism" },
    { partNumber: 5, partTitle: "Contemporary Diffusion and Its Effects" },
    { partNumber: 6, partTitle: "AP Exam Practice: Diffusion Data and Landscapes" },
    { partNumber: 7, partTitle: "Synthesis Review: Culture, Landscape and Diffusion" },
  ]
}
