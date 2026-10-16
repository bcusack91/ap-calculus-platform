/**
 * Entrance Quiz — AP Lit Essay Writing (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Three Free-Response Essays
  {
    id: 'englit-essay-writing-ent-1a',
    question: "A free-response prompt reads: \"Either from your own reading or from the list below, choose a work of fiction in which a character's pride leads to isolation. Then, in a well-written essay, analyze how that isolation contributes to an interpretation of the work as a whole.\"\n\nWhich statement correctly describes this task?",
    options: [
      "It is Q3, the literary argument; the work comes from memory.",
      "It is Q2, the prose analysis; the passage is printed with the prompt.",
      "It is Q1, the poetry analysis; the poem is printed with the prompt.",
      "It is Q3, the literary argument; a passage from the work is printed.",
    ],
    correctIndex: 0,
    explanation: "Only Q3 asks students to choose a work of fiction and argue about it as a whole, with no passage provided. Q1 and Q2 print a poem or a prose passage for analysis.",
    partNumber: 1,
    partTitle: "The Three Free-Response Essays",
  },
  {
    id: 'englit-essay-writing-ent-1b',
    question: "An essay has a clear, defensible thesis and well-chosen quotations, but after each quotation it only retells what happens in the passage.\n\nWhere is the essay most likely to lose points?",
    options: [
      "Row B, for evidence and commentary",
      "Row A, for the thesis",
      "Row C, for sophistication",
      "No row, as only the thesis counts",
    ],
    correctIndex: 0,
    explanation: "Row B rewards evidence together with commentary that explains it, so quotations followed by plot summary cap that row. The thesis is already sound, and Row C rewards sophistication rather than explanation of evidence.",
    partNumber: 1,
    partTitle: "The Three Free-Response Essays",
  },

  // Part 2 — The Defensible Thesis
  {
    id: 'englit-essay-writing-ent-2a',
    question: "A Question 2 passage describes a widow sorting her late husband's tools in the garage.\n\nWhich thesis is most defensible?",
    options: [
      "The passage describes a widow who spends a long, quiet afternoon sorting through her late husband's tools in the garage.",
      "The author uses imagery, diction and syntax throughout the passage to show the widow's feelings.",
      "Her slow handling of each worn tool turns sorting into mourning, a grief she voices only through touch.",
      "The passage is very sad because the widow misses her husband and cannot stop thinking about him.",
    ],
    correctIndex: 2,
    explanation: "This thesis moves from technique to effect to meaning and makes a claim a reader could dispute. The others summarize, list devices, or state an obvious feeling.",
    partNumber: 2,
    partTitle: "The Defensible Thesis",
  },
  {
    id: 'englit-essay-writing-ent-2b',
    question: "A student's thesis reads: \"Through repeated images of locked doors, the passage creates a feeling of confinement.\"\n\nWhat would most strengthen this thesis?",
    options: [
      "Adding two more images of locked doors",
      "Replacing \"confinement\" with a fancier word",
      "Moving the thesis to the last paragraph",
      "Adding what the confinement reveals about the character",
    ],
    correctIndex: 3,
    explanation: "The thesis names a technique and an effect but stops before the \"so what\": what the confinement shows about the character or her world. More examples or fancier wording leave that gap.",
    partNumber: 2,
    partTitle: "The Defensible Thesis",
  },

  // Part 3 — Evidence: Quote, Embed, Curate
  {
    id: 'englit-essay-writing-ent-3a',
    question: "A student wants to use the phrase *a stiff, borrowed suit* from a passage about a young man at a wedding.\n\nWhich sentence embeds the quotation most effectively?",
    options: [
      "He wore a suit. \"A stiff, borrowed suit.\" He felt out of place.",
      "The author writes \"a stiff, borrowed suit\" to describe what he wears.",
      "His \"stiff, borrowed suit\" marks him as an outsider in another's life.",
      "\"A stiff, borrowed suit\" is a quotation about the young man's clothes.",
    ],
    correctIndex: 2,
    explanation: "The quotation completes the writer's own sentence and is immediately put to work in an interpretation. The others drop the quotation in, frame it with \"the author writes,\" or leave it unexplained.",
    partNumber: 3,
    partTitle: "Evidence: Quote, Embed, Curate",
  },
  {
    id: 'englit-essay-writing-ent-3b',
    question: "A student has room for one quotation to show that a narrator resents her older sister.\n\nWhich quotation is the best choice?",
    options: [
      "\"My sister arrived at the house on Tuesday, just after noon.\"",
      "\"She took the good chair as if it had always been hers.\"",
      "\"We had our tea together in the front parlor at four o'clock.\"",
      "\"The weather that whole week was unusually mild and dry.\"",
    ],
    correctIndex: 1,
    explanation: "Claiming \"the good chair\" \"as if it had always been hers\" gives the writer specific words to analyze for resentment. The others are factual and offer nothing to interpret.",
    partNumber: 3,
    partTitle: "Evidence: Quote, Embed, Curate",
  },

  // Part 4 — Commentary: Where Points Are Won
  {
    id: 'englit-essay-writing-ent-4a',
    question: "A student claims that a character feels trapped in her marriage and quotes the line *She set the table for two, as she had for eleven years, and counted the forks twice.*\n\nWhich follow-up sentence best links the quotation to the claim?",
    options: [
      "A pointless recount shows a life shrunk to rituals that fill empty time.",
      "This shows that she sets the table for exactly two people every single night.",
      "The author uses both repetition and vivid imagery in this sentence about her.",
      "Eleven years is a long time to be married to anyone.",
    ],
    correctIndex: 0,
    explanation: "Strong commentary explains how the detail supports the claim: a pointless recount suggests time she must fill inside a narrow routine. The others paraphrase the line, label devices or make a vague remark.",
    partNumber: 4,
    partTitle: "Commentary: Where Points Are Won",
  },
  {
    id: 'englit-essay-writing-ent-4b',
    question: "A student's thesis claims that a narrator's pride slowly isolates her.\n\nWhich plan for the body paragraphs best forms a line of reasoning?",
    options: [
      "Imagery, then diction, then syntax, each in its own paragraph",
      "Her scorn for neighbors, then her refusal of help, then her solitude",
      "Page one, then the middle, then the last page, summarized",
      "Three separate similes from the passage, one per paragraph",
    ],
    correctIndex: 1,
    explanation: "Each paragraph advances one stage of the claim, so together they build the argument that pride leads to isolation. A device-by-device plan or a page-by-page summary does not add up to the thesis.",
    partNumber: 4,
    partTitle: "Commentary: Where Points Are Won",
  },

  // Part 5 — The Poetry Essay (Q1)
  {
    id: 'englit-essay-writing-ent-5a',
    question: "The first eight lines of a Question 1 poem mourn a garden killed by frost. Line 9 begins: *But in the cellar, bulbs.*\n\nWhich essay structure best follows the poem?",
    options: [
      "A paragraph on the grief before the turn, one on the hope after",
      "One paragraph each on the poem's imagery, its sound and its diction",
      "A summary of each line of the poem in the exact order it appears",
      "A paragraph on the poet's life and another on the poem's era",
    ],
    correctIndex: 0,
    explanation: "Organizing around the volta at \"But\" lets the poem's own movement supply the line of reasoning. A device list, a line-by-line summary or background paragraphs do not track the turn.",
    partNumber: 5,
    partTitle: "The Poetry Essay (Q1)",
  },
  {
    id: 'englit-essay-writing-ent-5b',
    question: "A speaker in a Question 1 poem describes her own house fire in calm, almost amused language, and readers finish the poem disturbed.\n\nWhich statement is most accurate?",
    options: [
      "Tone and mood are both disturbed, as readers feel disturbed.",
      "Tone and mood are both amused, as the speaker sounds amused.",
      "Tone and mood are identical, as both come from the fire.",
      "The tone is composed, and the mood it creates is disturbing.",
    ],
    correctIndex: 3,
    explanation: "Tone is the speaker's attitude (composed, wry) and mood is the reader's response (disturbed); here the gap between them is worth analyzing. The other choices confuse the two terms.",
    partNumber: 5,
    partTitle: "The Poetry Essay (Q1)",
  },

  // Part 6 — Prose (Q2) & Literary Argument (Q3)
  {
    id: 'englit-essay-writing-ent-6a',
    question: "In a story, a miser hides his gold in the one place he is sure no thief will look, the church poor-box, and on Sunday the vicar gives it all to the poor.\n\nThis outcome is best described as",
    options: [
      "situational irony, as his precaution backfires",
      "dramatic irony, as the reader knows something the vicar does not",
      "verbal irony, as the miser says the opposite of what he means",
      "a flashback that reveals the miser's earlier life",
    ],
    correctIndex: 0,
    explanation: "The miser's careful hiding place brings about exactly what he feared, an outcome opposite to his intention. That is situational irony; no one is speaking ironically, and no knowledge gap drives the moment.",
    partNumber: 6,
    partTitle: "Prose (Q2) & Literary Argument (Q3)",
  },
  {
    id: 'englit-essay-writing-ent-6b',
    question: "A student writing a Question 3 essay on a work of fiction cannot quote it word for word from memory.\n\nWhich sentence uses evidence from the work most effectively?",
    options: [
      "In the novel, a great many things happen to the main character as the story goes on and on.",
      "When the son sells his father's boat the day after the funeral, his haste betrays a hidden grief.",
      "The author is a famous writer whose books are taught in high school classrooms across the country.",
      "The novel has a great many chapters, and its plot becomes more and more intense near the end.",
    ],
    correctIndex: 1,
    explanation: "A specific remembered moment, paired with what it reveals, is strong Q3 evidence even without a quotation. The others summarize vaguely, praise the author or describe the book's shape.",
    partNumber: 6,
    partTitle: "Prose (Q2) & Literary Argument (Q3)",
  },

  // Part 7 — Sophistication, Timing & Exit Quiz
  {
    id: 'englit-essay-writing-ent-7a',
    question: "A student's Question 2 essay argues that a father in the passage is cruel to his son.\n\nWhich addition, developed across the essay, would most likely earn the sophistication point?",
    options: [
      "A dictionary definition of cruelty in the introduction",
      "More quotations that show the father's harsh words",
      "Weighing how his harshness also protects the boy",
      "A final sentence about cruelty in families everywhere",
    ],
    correctIndex: 2,
    explanation: "Accounting for an alternative reading, and letting it complicate the argument throughout, is one route to Row C. Definitions, more of the same evidence, or a sweeping closing line do not show complexity.",
    partNumber: 7,
    partTitle: "Sophistication, Timing & Exit Quiz",
  },
  {
    id: 'englit-essay-writing-ent-7b',
    question: "Halfway through the 40 minutes for Question 2, a student realizes that her body paragraphs are arguing something sharper than the thesis she wrote.\n\nWhat is the best choice?",
    options: [
      "Start the essay over with a new thesis and new paragraphs",
      "Leave the thesis as it is, since readers mostly score the body",
      "Add a paragraph that argues for the original thesis instead",
      "Revise the thesis to state the argument her paragraphs make",
    ],
    correctIndex: 3,
    explanation: "A thesis that matches the line of reasoning protects Row A and makes the body paragraphs read as one argument, and a quick revision fits the time left. Starting over wastes time, and arguing for the weaker thesis breaks the line of reasoning.",
    partNumber: 7,
    partTitle: "Sophistication, Timing & Exit Quiz",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "The Three Free-Response Essays" },
    { partNumber: 2, partTitle: "The Defensible Thesis" },
    { partNumber: 3, partTitle: "Evidence: Quote, Embed, Curate" },
    { partNumber: 4, partTitle: "Commentary: Where Points Are Won" },
    { partNumber: 5, partTitle: "The Poetry Essay (Q1)" },
    { partNumber: 6, partTitle: "Prose (Q2) & Literary Argument (Q3)" },
    { partNumber: 7, partTitle: "Sophistication, Timing & Exit Quiz" },
  ]
}
