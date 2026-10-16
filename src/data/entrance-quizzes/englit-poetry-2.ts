/**
 * Entrance Quiz — Poetry Analysis II (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-poetry-2-ent-1a',
    question: "Read the lines below.\n\n*I would have told you everything—the field,\nthe letter, what your father said, the rain—\nif you had asked. You didn't. So I kept it.*\n\nThe interrupted syntax of the first two lines chiefly serves to",
    options: [
      "show that the speaker is unsure of the facts she is listing",
      "set out the events of that day in their exact order",
      "signal that a second speaker has begun to talk",
      "enact a confession crowding forward before it is finally held back",
    ],
    correctIndex: 3,
    explanation: "The dashes let a rush of details break into the sentence, and then three short clauses (\"You didn't. So I kept it.\") shut it down. The syntax performs both the urge to tell and the decision to stay silent.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-poetry-2-ent-1b',
    question: "Read the lines below.\n\n*I love this town the way you love a coat\nyou've worn too long: it fits; it smells of you;\nyou'd burn it if you could afford another.*\n\nThe speaker's attitude toward the town is best described as",
    options: [
      "fondness and resentment",
      "affection without any reservations",
      "contempt without any affection",
      "calm indifference toward the place",
    ],
    correctIndex: 0,
    explanation: "The simile holds both feelings: the coat \"fits\" and carries the speaker's smell, yet the speaker would \"burn it\" given the chance. The tension between the two is the attitude.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — The Speaker as Character: Dramatic Monologue and Persona
  {
    id: 'englit-poetry-2-ent-2a',
    question: "Read the opening of a dramatic monologue below.\n\n*Sweep there, boy. No, there. My father built this counter;\nI've kept it forty years. I've never closed\na day: not for the flood, not when my wife\nwas ill, not for her funeral, even. Customers\ndepend on you. You'll learn.*\n\nThe list beginning \"not for the flood\" chiefly serves to",
    options: [
      "confirm the speaker's admirable loyalty to his customers",
      "let his pride expose a coldness he does not see",
      "show that his wife disapproved of the shop",
      "suggest that the shop is about to close for good",
    ],
    correctIndex: 1,
    explanation: "He offers the list as proof of devotion, but its climax, staying open on the day of his wife's funeral, lets the reader hear a man who put the counter before her. As in a dramatic monologue, the speaker reveals more than he intends.",
    partNumber: 2,
    partTitle: "The Speaker as Character: Dramatic Monologue and Persona",
  },
  {
    id: 'englit-poetry-2-ent-2b',
    question: "Read the opening of a dramatic monologue below.\n\n*Sweep there, boy. No, there. My father built this counter;\nI've kept it forty years. I've never closed\na day: not for the flood, not when my wife\nwas ill, not for her funeral, even. Customers\ndepend on you. You'll learn.*\n\nThe listener in these lines is best described as",
    options: [
      "the speaker's late wife, whom he addresses in memory",
      "a customer who has come in to make a complaint",
      "a silent apprentice he is instructing in the shop",
      "a second speaker who answers aloud within the poem",
    ],
    correctIndex: 2,
    explanation: "\"Sweep there, boy\" and \"You'll learn\" show the speaker instructing a young worker who never speaks, the auditor of a dramatic monologue. His lesson to the boy is what draws out the boast.",
    partNumber: 2,
    partTitle: "The Speaker as Character: Dramatic Monologue and Persona",
  },

  // Part 3 — Syntax and the Speaker's Mind
  {
    id: 'englit-poetry-2-ent-3a',
    question: "Read the lines below.\n\n*When the last guest has gone, and the plates are stacked,\nand the candles, guttering, have made their small\nconfessions to the dark, and you have turned\nthe key, and the house is yours—then you may weep.*\n\nHolding the main clause until the final words chiefly serves to",
    options: [
      "make grief wait for every duty to be done first",
      "hide the identity of the guests who attended the gathering",
      "create a cheerful, hurried rhythm suited to a party",
      "show that the speaker forgets the main point of the sentence",
    ],
    correctIndex: 0,
    explanation: "This periodic sentence stacks clause after clause of tasks before it reaches \"then you may weep,\" so the grammar itself postpones the grief. The delay enacts the restraint the lines describe.",
    partNumber: 3,
    partTitle: "Syntax and the Speaker's Mind",
  },
  {
    id: 'englit-poetry-2-ent-3b',
    question: "Read the lines below.\n\n*Sleep, you have kept away three nights. Come in.\nWhat do you want—a bribe? The lamp is off.\nI've counted every sheep this county owns.*\n\nThe speaker's direct address to Sleep chiefly conveys",
    options: [
      "calm contentment after a long and restful night",
      "fear of a dangerous intruder at the door",
      "gratitude toward a faithful old friend",
      "exasperated pleas to a guest who won't come",
    ],
    correctIndex: 3,
    explanation: "The apostrophe treats Sleep as a stubborn visitor: an imperative (\"Come in\"), a sarcastic rhetorical question (\"a bribe?\") and the joke about counting every sheep show frustration, not calm.",
    partNumber: 3,
    partTitle: "Syntax and the Speaker's Mind",
  },

  // Part 4 — Extended Metaphor, Conceit, Personification and Synecdoche
  {
    id: 'englit-poetry-2-ent-4a',
    question: "Read the lines below.\n\n*Our marriage is a ledger, love: each night\nwe write what each has given, each has paid,\nand though the columns never come out right,\nwe keep the book. No page has been mislaid.*\n\nThe extended comparison is best described as",
    options: [
      "a conventional comparison of love to a flower in bloom",
      "a conceit that finds faithfulness in an unromantic image",
      "a literal account of the couple's money troubles",
      "a personification of marriage as a stern banker",
    ],
    correctIndex: 1,
    explanation: "Comparing marriage to an account book is surprising, and the poem works the comparison out point by point until the unbalanced columns become proof of loyalty (\"we keep the book\"). That is the method of a conceit.",
    partNumber: 4,
    partTitle: "Extended Metaphor, Conceit, Personification and Synecdoche",
  },
  {
    id: 'englit-poetry-2-ent-4b',
    question: "Read the lines below.\n\n*The factory wanted hands, not men; it took\nmy father's for thirty years and gave them back\ntoo stiff to hold a fork.*\n\nThe word \"hands\" in the first line chiefly serves to",
    options: [
      "describe the literal injury suffered by a single worker",
      "praise the skill of the factory's craftsmen and builders",
      "reduce workers to the labor taken from them",
      "personify the factory as a gentle and fair employer",
    ],
    correctIndex: 2,
    explanation: "Using a part (hands) for the whole person is synecdoche, and \"hands, not men\" makes the factory's view explicit: it wants only the labor. The second line then makes the figure painfully literal.",
    partNumber: 4,
    partTitle: "Extended Metaphor, Conceit, Personification and Synecdoche",
  },

  // Part 5 — Symbol, Allegory, Allusion and Irony
  {
    id: 'englit-poetry-2-ent-5a',
    question: "Read the lines below.\n\n*They named the new estate “Arcadia,”\nand paved the meadow where the shepherds' flocks\nhad grazed for centuries, to make a car park.*\n\nThe name of the estate chiefly creates",
    options: [
      "praise for the builders' respect for tradition",
      "a literal description of a Greek landscape",
      "an allegory of the speaker's own childhood",
      "irony, as the paving erases the pastoral ideal",
    ],
    correctIndex: 3,
    explanation: "Arcadia is the traditional name for an ideal pastoral world of shepherds, so naming a development that paves a shepherds' meadow after it produces bitter irony. The allusion imports an ideal that the poem shows being destroyed.",
    partNumber: 5,
    partTitle: "Symbol, Allegory, Allusion and Irony",
  },
  {
    id: 'englit-poetry-2-ent-5b',
    question: "A poem describes a town where Rumor keeps the inn, Envy sweeps the streets, and a stranger named Truth is turned away at every door.\n\nThe poem is best described as",
    options: [
      "an open symbol that invites many unrelated readings",
      "a dramatic monologue spoken to a silent listener",
      "an allegory mapping a community's moral failings",
      "a literal account of a real visitor to a small town",
    ],
    correctIndex: 2,
    explanation: "Characters named for ideas act out a consistent second level of meaning, the mark of allegory. Its correspondences are fixed rather than open like a symbol's, and no single speaker addresses a listener.",
    partNumber: 5,
    partTitle: "Symbol, Allegory, Allusion and Irony",
  },

  // Part 6 — Q1 Workshop: Complexity and the Sophistication Point
  {
    id: 'englit-poetry-2-ent-6a',
    question: "A student is revising a Question 1 essay on a poem about death and wants to earn the sophistication point.\n\nWhich change is most likely to help?",
    options: [
      "Adding a final sentence noting that the poem might mean other things",
      "A thesis naming the poem's comfort and dread, kept up in every paragraph",
      "Adding a paragraph on the poet's life that is not tied to the text",
      "Using more elevated vocabulary throughout an essay that mostly summarizes",
    ],
    correctIndex: 1,
    explanation: "Row C rewards complexity that shapes the whole argument, such as a tension named in the thesis and developed in each paragraph. A vague closing gesture, detached biography or ornate wording does not.",
    partNumber: 6,
    partTitle: "Q1 Workshop: Complexity and the Sophistication Point",
  },
  {
    id: 'englit-poetry-2-ent-6b',
    question: "A Question 1 prompt asks students to analyze how a poet conveys a speaker's complex attitude toward the demolition of her childhood home.\n\nWhich thesis best supports a sophisticated argument?",
    options: [
      "The poet uses imagery, tone and enjambment to show the speaker's attitude toward the house.",
      "The speaker watches as the house where she grew up is finally torn down.",
      "Through images that mourn the house even as they recall its cold rooms, the poet shows a speaker relieved and bereft at once.",
      "The speaker is sad that her house is gone, as anyone in her position would be.",
    ],
    correctIndex: 2,
    explanation: "This thesis names two opposed feelings and the images that carry both, so it can sustain a complex argument. The others list devices, summarize, or flatten the attitude to sadness.",
    partNumber: 6,
    partTitle: "Q1 Workshop: Complexity and the Sophistication Point",
  },

  // Part 7 — Unit 5 Synthesis: Reading a Hard Poem Whole
  {
    id: 'englit-poetry-2-ent-7a',
    question: "Read the poem below, titled \"Debts.\"\n\n*Late, from the station, past the shuttered mill,\nmy father walked, and walking, kept his word;\nthe debts he paid, his name he cleared, and still\nnot one complaint from him the children heard.*\n\nWhich is the best paraphrase of lines 3–4?",
    options: [
      "He paid his debts and cleared his name, yet his children never heard him complain.",
      "The children paid his debts and cleared his name without a single complaint.",
      "He never once heard the children complain, though they were still paying off his debts.",
      "He cleared his name by complaining until the children finally heard him.",
    ],
    correctIndex: 0,
    explanation: "Rebuilt in normal order, the lines say that he paid the debts and cleared his name, and still the children never heard a complaint from him. The other choices misassign the subject or the object in the inverted syntax.",
    partNumber: 7,
    partTitle: "Unit 5 Synthesis: Reading a Hard Poem Whole",
  },
  {
    id: 'englit-poetry-2-ent-7b',
    question: "Read the poem below, titled \"Debts.\"\n\n*Late, from the station, past the shuttered mill,\nmy father walked, and walking, kept his word;\nthe debts he paid, his name he cleared, and still\nnot one complaint from him the children heard.*\n\nBy the end of the stanza, the phrase \"kept his word\" takes on which second sense?",
    options: [
      "He kept a written record of every debt he paid.",
      "He kept repeating the same promise to his children.",
      "He kept the mill's name alive after it had closed.",
      "He also kept to himself the words he might have said.",
    ],
    correctIndex: 3,
    explanation: "\"Kept his word\" first means he honored his promises; the last line, in which the children never hear him complain, adds the sense that he kept his words to himself. The double meaning joins his honesty to his silence.",
    partNumber: 7,
    partTitle: "Unit 5 Synthesis: Reading a Hard Poem Whole",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "The Speaker as Character: Dramatic Monologue and Persona" },
    { partNumber: 3, partTitle: "Syntax and the Speaker's Mind" },
    { partNumber: 4, partTitle: "Extended Metaphor, Conceit, Personification and Synecdoche" },
    { partNumber: 5, partTitle: "Symbol, Allegory, Allusion and Irony" },
    { partNumber: 6, partTitle: "Q1 Workshop: Complexity and the Sophistication Point" },
    { partNumber: 7, partTitle: "Unit 5 Synthesis: Reading a Hard Poem Whole" },
  ]
}
