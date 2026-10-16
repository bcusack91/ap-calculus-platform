/**
 * Entrance Quiz — Prose Style Analysis (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What Style Is (and Isn't)
  {
    id: 'englit-prose-style-analysis-ent-1a',
    question: "Compare these two sentences.\n\nA. *The storm came and the roof leaked.*\nB. *The storm clawed at the shingles all night, and by dawn the roof wept into every pan we owned.*\n\nCompared with sentence A, sentence B chiefly",
    options: [
      "reports a different event from the one in sentence A",
      "adds information drawn from the weather forecast",
      "turns a fact into an ordeal through charged verbs",
      "uses simpler words in order to clarify the scene",
    ],
    correctIndex: 2,
    explanation: "Both sentences report the same event, but B chooses violent and grieving verbs (\"clawed,\" \"wept\") and the detail of every pan, so the reader feels a siege rather than learns a fact. Style is the set of choices made where others were possible.",
    partNumber: 1,
    partTitle: "What Style Is (and Isn't)",
  },
  {
    id: 'englit-prose-style-analysis-ent-1b',
    question: "Which sentence analyzes a stylistic choice rather than merely identifying it?",
    options: [
      "The passage contains a great deal of imagery about the sea.",
      "The author uses both similes and metaphors in the second paragraph.",
      "There are several examples of personification in the passage.",
      "The sea's grasping gray waves make the shore feel besieged, echoing the widow's fear.",
    ],
    correctIndex: 3,
    explanation: "This sentence notices specific words, names their effect and connects that effect to meaning. The others only point out that devices exist.",
    partNumber: 1,
    partTitle: "What Style Is (and Isn't)",
  },

  // Part 2 — Diction: The Weight of Word Choice
  {
    id: 'englit-prose-style-analysis-ent-2a',
    question: "Read the sentence below.\n\n*The landlord's new tenant, a scrawny boy with a cheap suitcase, lurked in the hallway.*\n\nThe diction chiefly reveals",
    options: [
      "a narrator's scorn, built from loaded words",
      "the boy's real physical danger to the other tenants",
      "a neutral, factual description of a new tenant",
      "the narrator's sympathy for a struggling young man",
    ],
    correctIndex: 0,
    explanation: "\"Scrawny,\" \"cheap\" and \"lurked\" each carry negative connotations where neutral words (thin, plain, waited) were available, so the judgment lies in the word choice. Nothing in the sentence shows the boy doing anything dangerous.",
    partNumber: 2,
    partTitle: "Diction: The Weight of Word Choice",
  },
  {
    id: 'englit-prose-style-analysis-ent-2b',
    question: "Read the passage below.\n\n*The patient's mother was informed at 4:10 p.m. She exhibited no visible response and was escorted to the family room.*\n\nThe diction of the passage is best described as",
    options: [
      "colloquial and warm, inviting the reader's sympathy",
      "clinical and detached, holding grief at a distance",
      "archaic and elevated, lending the moment ceremony",
      "harsh and guttural, conveying the mother's rage",
    ],
    correctIndex: 1,
    explanation: "Words like \"informed,\" \"exhibited,\" \"visible response\" and \"escorted\" come from hospital reports, so the prose records a terrible moment without feeling, and the reader senses the grief the language suppresses.",
    partNumber: 2,
    partTitle: "Diction: The Weight of Word Choice",
  },

  // Part 3 — Syntax: The Architecture of Sentences
  {
    id: 'englit-prose-style-analysis-ent-3a',
    question: "Read the sentence below.\n\n*Through the gate, past the dead orchard, up the cracked steps where she had waited every evening of her childhood, and into the hall that still smelled of her father's pipe, Clara came home.*\n\nHolding \"Clara came home\" until the end of the sentence chiefly serves to",
    options: [
      "confuse the reader about who is arriving",
      "speed the sentence up to show her hurry",
      "put the main idea first for the sake of clarity",
      "build weight so the arrival lands as a climax",
    ],
    correctIndex: 3,
    explanation: "This periodic sentence piles up places and memories before the main clause, so the arrival comes as the culmination of everything the journey stirs. The delay adds suspense and emotional weight.",
    partNumber: 3,
    partTitle: "Syntax: The Architecture of Sentences",
  },
  {
    id: 'englit-prose-style-analysis-ent-3b',
    question: "Read the sentence below, describing a man leaving a town for good.\n\n*He packed, paid, signed, left.*\n\nThe omission of conjunctions chiefly serves to",
    options: [
      "slow the sentence down to show his reluctance",
      "create a calm and reflective mood for the reader",
      "make his exit feel clipped and hurried",
      "link the actions with smooth, elaborate transitions",
    ],
    correctIndex: 2,
    explanation: "Asyndeton strips out every \"and,\" so the four verbs strike in quick succession, as if he cannot be gone fast enough. Leaving conjunctions out speeds a sentence; piling them up slows it.",
    partNumber: 3,
    partTitle: "Syntax: The Architecture of Sentences",
  },

  // Part 4 — Tone & Imagery: Attitude and the Senses
  {
    id: 'englit-prose-style-analysis-ent-4a',
    question: "A passage about a girl living with her aunt mentions \"the narrow stair,\" \"the locked parlor,\" \"windows painted shut\" and \"a canary in a cage too small to turn in.\"\n\nThe pattern of images most directly suggests",
    options: [
      "the confinement of the girl's life in the house",
      "the aunt's wealth and her refined taste in decor",
      "the girl's lifelong love of birds and their song",
      "the house's urgent need for a series of repairs",
    ],
    correctIndex: 0,
    explanation: "Each image closes something in, and the caged canary gathers the pattern into a picture of the girl herself. Tracing a pattern of images, not a single image, leads to the passage's meaning.",
    partNumber: 4,
    partTitle: "Tone & Imagery: Attitude and the Senses",
  },
  {
    id: 'englit-prose-style-analysis-ent-4b',
    question: "Read the sentence below.\n\n*Mr. Pettigrew, who had never been wrong in sixty years, explained the weather to the farmers, the law to the lawyer, and the sermon to the vicar, who had written it.*\n\nThe narrator's tone is best described as",
    options: [
      "warmly admiring",
      "dryly satirical",
      "bitterly enraged",
      "coolly neutral",
    ],
    correctIndex: 1,
    explanation: "The mock-praise \"never been wrong in sixty years\" and the escalating list that ends with explaining a sermon to its author invite the reader to laugh at Pettigrew. The humor is dry, not furious, and far from neutral.",
    partNumber: 4,
    partTitle: "Tone & Imagery: Attitude and the Senses",
  },

  // Part 5 — Point of View, Voice & Figurative Layers
  {
    id: 'englit-prose-style-analysis-ent-5a',
    question: "Read the passage below.\n\n*Surveying the burnt toast, the flooded floor and the cat asleep in the butter, my mother said, “What a wonderful start to the day.”*\n\nThe mother's remark is best described as",
    options: [
      "sincere praise for a pleasant and orderly morning",
      "dramatic irony that the mother herself cannot see",
      "verbal irony voicing annoyance by its opposite",
      "a metaphor that compares the morning to a festival",
    ],
    correctIndex: 2,
    explanation: "She says the opposite of what the scene deserves, and the gap between \"wonderful\" and the chaos is the point. Verbal irony belongs to the speaker; dramatic irony depends on what a character fails to know.",
    partNumber: 5,
    partTitle: "Point of View, Voice & Figurative Layers",
  },
  {
    id: 'englit-prose-style-analysis-ent-5b',
    question: "Read the sentence below.\n\n*The city never slept; it paced its avenues all night, muttering through its subway grates, and in the morning it was tired and mean.*\n\nThe personification chiefly serves to",
    options: [
      "describe the literal noises of traffic and trains",
      "suggest that no one in the city ever goes to sleep",
      "praise the city's tireless, cheerful energy",
      "make the city a restless being with a sour temper",
    ],
    correctIndex: 3,
    explanation: "Pacing, muttering and waking \"tired and mean\" give the city a body and a mood, so it seems an irritable creature rather than a place. The figure adds a layer of attitude beyond literal sound.",
    partNumber: 5,
    partTitle: "Point of View, Voice & Figurative Layers",
  },

  // Part 6 — Putting It Together: A Full Worked Analysis
  {
    id: 'englit-prose-style-analysis-ent-6a',
    question: "Read the passage below.\n\n*The house had been grand once. Now the stairs sagged like an old man's shoulders, the wallpaper hung in long, tired tongues, and the piano in the hall, its lid shut for years, still held a page of music open as if someone were about to play.*\n\nWhich statement best explains how several stylistic choices converge?",
    options: [
      "The passage lists the rooms of the house in order of their size.",
      "Its similes and personification make the house a worn-out body.",
      "The diction is cheerful, which contrasts with the gloomy setting.",
      "The piano stands for the family's love of music lessons.",
    ],
    correctIndex: 1,
    explanation: "Sagging shoulders, tired tongues and a piano waiting for a player all give the house a human body and a memory in decline, so many choices point toward one effect. Strong analysis follows choices that converge.",
    partNumber: 6,
    partTitle: "Putting It Together: A Full Worked Analysis",
  },
  {
    id: 'englit-prose-style-analysis-ent-6b',
    question: "Read the passage below.\n\n*The house had been grand once. Now the stairs sagged like an old man's shoulders, the wallpaper hung in long, tired tongues, and the piano in the hall, its lid shut for years, still held a page of music open as if someone were about to play.*\n\nWhich thesis best uses the passage's style to make a claim?",
    options: [
      "Giving the house an aging body and a waiting instrument turns its decay into grieving memory.",
      "The author uses similes, personification and imagery to describe an old house that is falling apart.",
      "The house used to be very grand, but now it is old, neglected and slowly falling apart around everyone.",
      "The passage has a sad tone and uses good imagery throughout to describe the house.",
    ],
    correctIndex: 0,
    explanation: "This thesis names specific choices and the meaning they create together. The others list devices, summarize, or use vague labels like \"good imagery.\"",
    partNumber: 6,
    partTitle: "Putting It Together: A Full Worked Analysis",
  },

  // Part 7 — The Prose Essay & Mastery Check
  {
    id: 'englit-prose-style-analysis-ent-7a',
    question: "A student's prose analysis essay quotes many vivid phrases but follows each with only a label such as \"This is imagery.\"\n\nWhich revision would most raise the essay's Row B score?",
    options: [
      "Explaining after each quotation how its words create meaning",
      "Adding more quotations from the passage without further comment",
      "Defining each literary term the first time the essay uses it",
      "Rewriting the thesis in more formal and elevated vocabulary",
    ],
    correctIndex: 0,
    explanation: "Row B rewards commentary that explains how evidence supports the line of reasoning, and labels are not commentary. More quotations, definitions or fancier wording leave that gap in place.",
    partNumber: 7,
    partTitle: "The Prose Essay & Mastery Check",
  },
  {
    id: 'englit-prose-style-analysis-ent-7b',
    question: "A student is revising a prose analysis essay and wants to earn the sophistication point.\n\nWhich addition is most likely to help?",
    options: [
      "A closing sentence noting that the passage uses many literary devices",
      "A paragraph summarizing the plot that leads up to the passage",
      "A list of every sense that the passage's imagery appeals to",
      "A sustained argument that cheerful diction masks a grief the imagery reveals",
    ],
    correctIndex: 3,
    explanation: "Exploring a tension (cheerful words against grieving images) throughout the essay is one route to Row C. A closing remark, a summary or a list of senses adds no complexity.",
    partNumber: 7,
    partTitle: "The Prose Essay & Mastery Check",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "What Style Is (and Isn't)" },
    { partNumber: 2, partTitle: "Diction: The Weight of Word Choice" },
    { partNumber: 3, partTitle: "Syntax: The Architecture of Sentences" },
    { partNumber: 4, partTitle: "Tone & Imagery: Attitude and the Senses" },
    { partNumber: 5, partTitle: "Point of View, Voice & Figurative Layers" },
    { partNumber: 6, partTitle: "Putting It Together: A Full Worked Analysis" },
    { partNumber: 7, partTitle: "The Prose Essay & Mastery Check" },
  ]
}
