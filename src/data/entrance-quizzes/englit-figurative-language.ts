/**
 * Entrance Quiz — Figurative Language (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-figurative-language-ent-1a',
    question: "Read the passage below.\n\n*To my grandmother, the family was a ledger: births were deposits, marriages were investments, and my uncle Desmond was a debt she had long since written off.*\n\nThe extended comparison chiefly reveals",
    options: [
      "the family's great wealth and its careful bookkeeping habits",
      "the grandmother's work as a bank clerk when she was young",
      "a habit of judging relatives by what they add or cost",
      "the speaker's admiration for her grandmother's thrift",
    ],
    correctIndex: 2,
    explanation: "The metaphor shows how the grandmother conceives of family: as accounts to be balanced, with Desmond \"written off.\" Taking the ledger literally, as wealth or a job, misses what the comparison reveals about her way of seeing.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-figurative-language-ent-1b',
    question: "Read the passage below.\n\n*Every spring my father planted seeds from the same old apple tree along the fence, and every spring nothing came up. The year after he died, a seedling appeared by the fence.*\n\nIn context, the seedling most likely functions as",
    options: [
      "a literal garden detail with no meaning beyond itself",
      "evidence that the father had planted his seeds wrongly",
      "a sign that the speaker intends to sell the family house",
      "a symbol of a hope that outlives the father who planted it",
    ],
    correctIndex: 3,
    explanation: "Placed after years of failure and right after the father's death, the seedling gathers meaning beyond the garden: his patient hope continues without him. Reading it only literally ignores how its placement makes it significant.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Imagery in Depth: Senses, Synesthesia and Image Patterns
  {
    id: 'englit-figurative-language-ent-2a',
    question: "Read the passage below.\n\n*In the blackout we sat on the cellar stairs. Somewhere a pipe ticked. My brother's breathing went fast, then slow. The damp wool of my coat smelled of the dog.*\n\nThe imagery in this passage relies chiefly on",
    options: [
      "sound, scent and touch in place of the sight darkness denies",
      "movement and muscular effort as the family runs down for cover",
      "taste and hunger as the family waits for its next meal",
      "vivid color and light that brighten a frightening scene",
    ],
    correctIndex: 0,
    explanation: "With the lights out, the passage builds the scene from a ticking pipe, a brother's breathing, damp wool and a smell, so the reader experiences the cellar as the speaker does, in the dark. There is almost no visual detail at all.",
    partNumber: 2,
    partTitle: "Imagery in Depth: Senses, Synesthesia and Image Patterns",
  },
  {
    id: 'englit-figurative-language-ent-2b',
    question: "A poem's first stanza describes a kitchen with \"butter-yellow\" walls and \"the bread's warm breath.\" Its middle stanzas describe a hospital room with \"white, unbreathing\" sheets. Its last stanza returns to the kitchen, where the bread lies \"cold on the board.\"\n\nThe changing pattern of images most likely suggests",
    options: [
      "the speaker's preference for hospitals over kitchens",
      "a home whose warmth has been altered by illness or loss",
      "a family that bakes bread to bring to the hospital staff",
      "a speaker who has moved into a new house during winter",
    ],
    correctIndex: 1,
    explanation: "Warm, living images (\"warm breath\") give way to the hospital's \"unbreathing\" white, and when the poem returns home the bread has gone cold. Tracking how the pattern changes reveals the loss the poem never states.",
    partNumber: 2,
    partTitle: "Imagery in Depth: Senses, Synesthesia and Image Patterns",
  },

  // Part 3 — Saying More, Saying Less: Hyperbole, Understatement, Paradox and Oxymoron
  {
    id: 'englit-figurative-language-ent-3a',
    question: "Read the passage below.\n\n*After the fire took the barn, the house and every photograph we owned, my father looked over the ashes for a long while and said, “Well. It's been a trying week.”*\n\nThe father's understatement chiefly serves to",
    options: [
      "reveal that he cares little about the family's losses",
      "show a restraint that makes the loss feel even larger",
      "suggest that the fire did less damage than they feared",
      "imply that the father had set the fire himself",
    ],
    correctIndex: 1,
    explanation: "The gap between total loss and \"a trying week\" forces the reader to supply the missing intensity, and the long look over the ashes shows he feels it. Understatement here signals restraint, not indifference.",
    partNumber: 3,
    partTitle: "Saying More, Saying Less: Hyperbole, Understatement, Paradox and Oxymoron",
  },
  {
    id: 'englit-figurative-language-ent-3b',
    question: "Read the line below.\n\n*The more my grandmother gave away, the richer her small house grew.*\n\nThe paradox in this line is best resolved by understanding that",
    options: [
      "the house rose in value each time she sold off her belongings",
      "she secretly kept the most valuable things for herself",
      "her generosity filled the house with a wealth beyond money",
      "the speaker is mistaken about her grandmother's money",
    ],
    correctIndex: 2,
    explanation: "A paradox points to a truth once two senses of a word are separated: the house grows \"richer\" in love, visitors or meaning, not in money. The other choices treat \"richer\" only in its financial sense.",
    partNumber: 3,
    partTitle: "Saying More, Saying Less: Hyperbole, Understatement, Paradox and Oxymoron",
  },

  // Part 4 — Allusion and Its Work
  {
    id: 'englit-figurative-language-ent-4a',
    question: "Read the sentence below.\n\n*Like Odysseus, my cousin Ray spent ten years trying to get home; in his case, from the bowling alley.*\n\nThe allusion primarily serves to",
    options: [
      "mock Ray by setting him beside an epic hero",
      "praise Ray's courage in facing danger far from home",
      "suggest that Ray is a sailor who has traveled widely",
      "present Ray as a tragic figure doomed to wander",
    ],
    correctIndex: 0,
    explanation: "The sentence raises Ray to the scale of Homer's long-suffering hero, then drops him at the bowling alley, a mock-heroic gap that makes the comparison comic. The allusion is ironic, not admiring.",
    partNumber: 4,
    partTitle: "Allusion and Its Work",
  },
  {
    id: 'englit-figurative-language-ent-4b',
    question: "Read the passage below.\n\n*When the flood went down, my mother stood on the porch watching the gray sky for a long time, as if waiting for a dove.*\n\nThe allusion most likely suggests that she",
    options: [
      "is a bird-watcher who keeps track of local species",
      "fears that a second flood is about to arrive soon",
      "has given up any hope that the family will recover",
      "hopes for a sign that the disaster is truly over",
    ],
    correctIndex: 3,
    explanation: "In Genesis, Noah sends out a dove that returns with an olive leaf, a sign that the waters have gone down. The allusion borrows that moment of waiting for a sign that life can begin again.",
    partNumber: 4,
    partTitle: "Allusion and Its Work",
  },

  // Part 5 — Figurative Language in Prose Fiction
  {
    id: 'englit-figurative-language-ent-5a',
    question: "Read the passage below.\n\n*Mr. Garrity, who had owned the hardware store for thirty years, looked at the young couple's sagging porch the way he looked at a cracked hinge: something that could be fixed, if anyone would pay for the parts.*\n\nThe comparison chiefly reveals",
    options: [
      "a shopkeeper's habit of seeing problems as priced repairs",
      "the couple's own belief that their porch is beyond saving",
      "Mr. Garrity's secret wish to buy the couple's house",
      "the narrator's contempt for the young couple's carelessness",
    ],
    correctIndex: 0,
    explanation: "The vehicle, a cracked hinge and the cost of parts, comes from Mr. Garrity's own trade, so the simile shows how his mind works. In prose, asking whose comparison it is turns a figure into evidence about perspective.",
    partNumber: 5,
    partTitle: "Figurative Language in Prose Fiction",
  },
  {
    id: 'englit-figurative-language-ent-5b',
    question: "Early in a novel, a girl tells her brother that their mother's laugh is \"like a window flung open.\" In the final chapter, after the mother's death, the brother sits in her shut-up house and notices that every window has been painted shut.\n\nThe return of the window image chiefly serves to",
    options: [
      "show that the brother never understood his sister's comparison",
      "suggest that the house is being prepared for a quick sale",
      "turn the first simile into a picture of what was lost",
      "prove that the mother seldom laughed during her life",
    ],
    correctIndex: 2,
    explanation: "A figure that returns chapters later invites comparison: the open window of the mother's laugh becomes windows sealed shut after her death. The difference between the two appearances carries the meaning.",
    partNumber: 5,
    partTitle: "Figurative Language in Prose Fiction",
  },

  // Part 6 — Figurative Language on the Exam
  {
    id: 'englit-figurative-language-ent-6a',
    question: "Read the sentence below.\n\n*The rumor moved through the village like a lit fuse.*\n\nWhich statement best explains what the simile emphasizes?",
    options: [
      "It spreads quickly toward an explosive result.",
      "Fuses are made of material that burns slowly and steadily.",
      "Gossip is the most destructive force in all human life.",
      "The village was preparing fireworks for a coming celebration.",
    ],
    correctIndex: 0,
    explanation: "The quality that transfers is a fast-moving spark heading toward a blast, so the rumor is racing toward trouble. The other choices read the fuse literally, describe the vehicle alone, or state a theme too broad for one sentence.",
    partNumber: 6,
    partTitle: "Figurative Language on the Exam",
  },
  {
    id: 'englit-figurative-language-ent-6b',
    question: "A short story describes a manager's greeting to the narrator as \"a smile sharp as a paper cut.\"\n\nWhich sentence offers the strongest commentary on this simile?",
    options: [
      "This simile compares the manager's smile to a paper cut.",
      "Paper cuts are small injuries that are surprisingly painful.",
      "The simile turns his smile into a small wound, and even his friendliness hurts.",
      "The manager is the villain of the story, as managers often are.",
    ],
    correctIndex: 2,
    explanation: "Strong commentary names the transferred qualities and says what they reveal: a smile that wounds makes the manager's friendliness a form of cruelty. The others label the device, describe only the vehicle, or pass a judgment the simile does not support.",
    partNumber: 6,
    partTitle: "Figurative Language on the Exam",
  },

  // Part 7 — Synthesis: Dickinson's "There's a certain slant of light"
  {
    id: 'englit-figurative-language-ent-7a',
    question: "Read the poem below.\n\n*At first your silence was a curtain, drawn\nto keep the morning out a little while;\nthen it became a wall I leaned upon,\nthen a locked door, and then a mile,\nand then a country I could find on no\nmap we had bought together. Now I write\nto its one city, and the letters go\nlike birds into a sea of falling light.*\n\nThe sequence of metaphors for \"your silence\" chiefly serves to",
    options: [
      "show the speaker growing less troubled by the silence",
      "describe the rooms of the house the couple once shared",
      "suggest that the silence will very soon be broken",
      "trace a distance that hardens and widens past bridging",
    ],
    correctIndex: 3,
    explanation: "Each metaphor is larger and more final than the last: a curtain that can be opened, a wall, a locked door, a mile, a whole country off the map. The pattern enacts a growing estrangement.",
    partNumber: 7,
    partTitle: "Synthesis: Dickinson's \"There's a certain slant of light\"",
  },
  {
    id: 'englit-figurative-language-ent-7b',
    question: "Read the poem below.\n\n*At first your silence was a curtain, drawn\nto keep the morning out a little while;\nthen it became a wall I leaned upon,\nthen a locked door, and then a mile,\nand then a country I could find on no\nmap we had bought together. Now I write\nto its one city, and the letters go\nlike birds into a sea of falling light.*\n\nWhich thesis best uses the poem's pattern of figures as a line of reasoning?",
    options: [
      "The poet uses metaphor, simile and imagery to describe a relationship.",
      "Metaphors that grow from a veil into a far-off land trace an estrangement the speaker cannot accept.",
      "The speaker writes letters to someone who has stopped speaking to her.",
      "The speaker is sad because the silence of the person she loves goes on.",
    ],
    correctIndex: 1,
    explanation: "This thesis turns the pattern itself (a curtain growing into a country) into the argument, and the speaker's continued letters support \"cannot accept.\" The others list devices, summarize, or name a feeling without a line of reasoning.",
    partNumber: 7,
    partTitle: "Synthesis: Dickinson's \"There's a certain slant of light\"",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Imagery in Depth: Senses, Synesthesia and Image Patterns" },
    { partNumber: 3, partTitle: "Saying More, Saying Less: Hyperbole, Understatement, Paradox and Oxymoron" },
    { partNumber: 4, partTitle: "Allusion and Its Work" },
    { partNumber: 5, partTitle: "Figurative Language in Prose Fiction" },
    { partNumber: 6, partTitle: "Figurative Language on the Exam" },
    { partNumber: 7, partTitle: "Synthesis: Dickinson's \"There's a certain slant of light\"" },
  ]
}
