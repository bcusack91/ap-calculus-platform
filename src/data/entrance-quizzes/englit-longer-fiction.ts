/**
 * Entrance Quiz — Longer Fiction (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-longer-fiction-ent-1a',
    question: "Which pair of moments from a novel best shows a character arc rather than a mere change of circumstances?",
    options: [
      "A clerk who is poor in the first chapter is wealthy by the twentieth.",
      "A girl who mocks her shy brother early defends him in public at the end.",
      "A young sailor sets out from Boston and at last arrives in a distant port.",
      "A widow who lives in the city at the start later moves to the country.",
    ],
    correctIndex: 1,
    explanation: "An arc is a change in values or understanding, and turning from mockery to public defense shows the girl seeing her brother differently. Gaining money, traveling or moving house changes a character's situation, not necessarily the character.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-longer-fiction-ent-1b',
    question: "A student notices that throughout a novel, each time the heroine is offered help she refuses it, and each refusal costs her more than the last.\n\nWhich statement best turns this pattern into a claim about theme?",
    options: [
      "The novel is about pride and independence.",
      "The heroine refuses offers of help many times in the novel.",
      "Read together, the refusals suggest that pride guarding independence can harden into self-made isolation.",
      "Pride is a flaw, and people should accept help when it is offered.",
    ],
    correctIndex: 2,
    explanation: "A theme emerges from a sustained pattern and is stated as an arguable claim; this one explains what the escalating refusals suggest. The others name a topic, summarize the pattern, or reduce it to a moral.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Character Across a Whole Novel
  {
    id: 'englit-longer-fiction-ent-2a',
    question: "In a novel, two apprentices train under the same harsh master printer. One flatters the master and is made foreman; the other speaks up for the youngest boys in the shop and is dismissed.\n\nThe new foreman chiefly functions as a foil who",
    options: [
      "shows the price of the other apprentice's loyalty to the boys",
      "proves that he is the true villain of the whole novel",
      "reveals that the master printer is secretly kind and generous",
      "shows that the two apprentices learned different trades",
    ],
    correctIndex: 0,
    explanation: "The two apprentices share a situation and make opposite choices, so the foreman's reward measures what the other's loyalty costs him. A foil need not be a villain; it sharpens another character by contrast against common ground.",
    partNumber: 2,
    partTitle: "Character Across a Whole Novel",
  },
  {
    id: 'englit-longer-fiction-ent-2b',
    question: "Read the passage below.\n\n*When his son came home from university, Mr. Hale shook his hand at the station, asked about the train, and carried his bag the whole way up the hill, though the boy was taller now and twice offered to take it.*\n\nThe details best suggest that Mr. Hale's feeling for his son is",
    options: [
      "cool indifference concealed beneath good manners",
      "resentment that his son has now grown taller than him",
      "anxiety that his son has failed at the university",
      "affection mixed with reluctance to give up his role",
    ],
    correctIndex: 3,
    explanation: "Carrying the bag uphill is an act of care, but refusing his taller son's offers twice suggests a father not ready to stop being the one who carries. A nuanced reading holds both feelings rather than choosing one.",
    partNumber: 2,
    partTitle: "Character Across a Whole Novel",
  },

  // Part 3 — How Novels Are Built
  {
    id: 'englit-longer-fiction-ent-3a',
    question: "A novel opens with a doctor's letters to a colleague about a strange new patient. The patient's own story, as told to the doctor, fills most of the book, and the doctor's letters return in the final chapter.\n\nThis frame most likely serves to",
    options: [
      "prove that the patient's story is entirely true",
      "remove any need for the reader to judge the narrators",
      "make the reader weigh the patient's story and its listener",
      "let the patient speak to the reader without any filter at all",
    ],
    correctIndex: 2,
    explanation: "Every word of the patient's account reaches us through the doctor's pen, so the reader must judge both the teller and the listener who records him. A frame adds a layer of mediation; it does not guarantee truth or remove judgment.",
    partNumber: 3,
    partTitle: "How Novels Are Built",
  },
  {
    id: 'englit-longer-fiction-ent-3b',
    question: "In a novel, the main plot follows a cautious couple's slow courtship. A subplot follows the heroine's younger brother, who elopes after a week with a woman he barely knows and is soon deeply unhappy.\n\nThe subplot most likely functions to",
    options: [
      "delay the main plot so each volume reaches the same length",
      "set the main pair's patience against the cost of haste",
      "show that the brother is the novel's true hero after all",
      "prove that every marriage in the novel ends unhappily",
    ],
    correctIndex: 1,
    explanation: "A parallel plot invites comparison, and the brother's rushed, unhappy match argues for the slow courtship without the narrator having to say so. Nothing suggests that every marriage fails or that the brother is the hero.",
    partNumber: 3,
    partTitle: "How Novels Are Built",
  },

  // Part 4 — Reading a Novel Opening
  {
    id: 'englit-longer-fiction-ent-4a',
    question: "Read the opening sentence of a novel below.\n\n*Everyone in Ashby agreed that the Merriwethers were the happiest family in the county, and the Merriwethers, who had arranged for everyone to agree, were very pleased about it.*\n\nThe sentence chiefly establishes",
    options: [
      "an ironic narrator who sees through the family",
      "a sincere portrait of a truly contented household",
      "a setting in which the family's neighbors dislike them",
      "a first-person narrator who belongs to the family",
    ],
    correctIndex: 0,
    explanation: "The clause \"who had arranged for everyone to agree\" quietly reverses the first half, revealing a managed reputation, so the voice is ironic from the first line. The narration is in the third person and stands outside the family.",
    partNumber: 4,
    partTitle: "Reading a Novel Opening",
  },
  {
    id: 'englit-longer-fiction-ent-4b',
    question: "Read the opening of a novel below.\n\n*Nobody in Dunmore had ever seen the sea, and nobody in Dunmore, the Reverend Hollis liked to say, had ever needed to. It was a remark he made every Sunday, and every Sunday young Will Carrow, in the back pew, looked at the window.*\n\nThe opening most strongly suggests that the novel will center on",
    options: [
      "a minister's long and successful career in a small town",
      "a boy's pull toward a world his town has refused",
      "a seaside village's struggle against storms and floods",
      "a quarrel among the leading families of Dunmore",
    ],
    correctIndex: 1,
    explanation: "The minister's weekly boast sets the town's limits, and the boy who looks at the window each time it is repeated is set against them, so the opening plants a conflict between a closed place and one restless character. The town has never seen the sea, which rules out a seaside setting.",
    partNumber: 4,
    partTitle: "Reading a Novel Opening",
  },

  // Part 5 — Symbol, Motif and Theme Across a Novel
  {
    id: 'englit-longer-fiction-ent-5a',
    question: "Early in a novel, a young clerk keeps a photograph of a seaside hotel above his desk and gazes at it whenever work is hard. In the last chapter he finally stays at the hotel and finds it shabby; that night he dreams of the photograph.\n\nThe development of the photograph most likely suggests that",
    options: [
      "the clerk simply made a poor choice of hotel for his holiday",
      "the picture was taken many years before he saw the place",
      "the clerk will now return to his desk content and refreshed",
      "its power lay in its being out of reach",
    ],
    correctIndex: 3,
    explanation: "The symbol reverses at the turning point: once reached, the real hotel disappoints, and the clerk returns in his dreams to the image instead. Its meaning lay in distance, not in the place.",
    partNumber: 5,
    partTitle: "Symbol, Motif and Theme Across a Novel",
  },
  {
    id: 'englit-longer-fiction-ent-5b',
    question: "A novel tells of a village that drives out a reclusive stranger and then, after he is gone, finds that the well he quietly maintained has failed.\n\nWhich is the most defensible theme statement for this novel?",
    options: [
      "The novel is about prejudice in a small village.",
      "People should always be kind to every stranger they meet.",
      "The novel suggests that a community that expels difference may lose what sustained it.",
      "The novel tells the story of a village and the stranger it drives away.",
    ],
    correctIndex: 2,
    explanation: "A theme statement makes an arguable claim about a subject, and this one draws its meaning from the failed well. The others name a topic, preach a moral, or summarize.",
    partNumber: 5,
    partTitle: "Symbol, Motif and Theme Across a Novel",
  },

  // Part 6 — Q3 With a Novel: Preparing and Using a Long Work
  {
    id: 'englit-longer-fiction-ent-6a',
    question: "A Question 3 prompt asks about a character whose loyalty to family conflicts with a desire for independence. A student has prepared four works of fiction.\n\nWhich is the strongest choice for this prompt?",
    options: [
      "A novel whose heroine must choose between nursing her father and work abroad",
      "The novel the student enjoyed most, although family plays only a very small part",
      "A play whose famous speeches the student has memorized word for word",
      "A story that is set in the same century as the examples in the prompt",
    ],
    correctIndex: 0,
    explanation: "The best work is the one in which the prompt's situation is central, so the student can trace it across the whole work. Enjoyment, memorized speeches or a matching century do not make a work fit the prompt.",
    partNumber: 6,
    partTitle: "Q3 With a Novel: Preparing and Using a Long Work",
  },
  {
    id: 'englit-longer-fiction-ent-6b',
    question: "A student is writing an arc-based Question 3 essay on a novel about a young woman who leaves her village for the city.\n\nWhich topic sentence would best open a body paragraph?",
    options: [
      "In chapter ten, the heroine moves to London and finds a job as a typist.",
      "The novel was first published in three volumes by a London firm.",
      "Many readers consider this novel one of the great classics of its age.",
      "Her move to London tests whether her independence survives loneliness.",
    ],
    correctIndex: 3,
    explanation: "A body paragraph should open with a claim that advances the thesis, with events brought in as evidence. The other sentences offer plot summary, publication history or reputation instead of a claim.",
    partNumber: 6,
    partTitle: "Q3 With a Novel: Preparing and Using a Long Work",
  },

  // Part 7 — Unit 3 Synthesis: Reading a Passage From Jane Eyre
  {
    id: 'englit-longer-fiction-ent-7a',
    question: "Read the passage below, from a novel narrated by a retired schoolmaster.\n\n*Every September I swore I would not learn the new names, since in June they would only leave. By October I knew them all: which boy stammered on Mondays, which girl hid her lunch. My sister calls it a weakness to care for what cannot be kept. Thirty-one Septembers, and I have not cured it.*\n\nThe final two sentences chiefly suggest that",
    options: [
      "he has grown weary of teaching and plans to retire soon",
      "he resents his sister for criticizing his teaching habits",
      "he regrets that his pupils never remembered him afterward",
      "each year his vow to keep his distance yields to affection",
    ],
    correctIndex: 3,
    explanation: "He calls his care a weakness he has failed to cure for thirty-one years, so the joke admits that every vow of detachment ends in attachment. Nothing points to weariness, resentment of his sister or wounded pride.",
    partNumber: 7,
    partTitle: "Unit 3 Synthesis: Reading a Passage From Jane Eyre",
  },
  {
    id: 'englit-longer-fiction-ent-7b',
    question: "In a novel, a widow's long, happy memory of her marriage is cut off when a tradesman knocks to collect a bill her husband left unpaid. A critic calls the interruption heavy-handed.\n\nWhich sentence best accounts for that alternative reading while advancing an interpretation?",
    options: [
      "The interruption really is heavy-handed, and the author ought to have cut it from the scene.",
      "Abrupt or not, the knock lets his hidden debt invade her reverie as it invades her life.",
      "Tradesmen in that period commonly called at houses in person to collect unpaid bills.",
      "The knock is a symbol, as almost every sound in a novel tends to be in some way.",
    ],
    correctIndex: 1,
    explanation: "This sentence concedes the critic's point and answers it with an interpretation, one of the routes to the sophistication point. The others simply agree, supply background, or label without arguing.",
    partNumber: 7,
    partTitle: "Unit 3 Synthesis: Reading a Passage From Jane Eyre",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Character Across a Whole Novel" },
    { partNumber: 3, partTitle: "How Novels Are Built" },
    { partNumber: 4, partTitle: "Reading a Novel Opening" },
    { partNumber: 5, partTitle: "Symbol, Motif and Theme Across a Novel" },
    { partNumber: 6, partTitle: "Q3 With a Novel: Preparing and Using a Long Work" },
    { partNumber: 7, partTitle: "Unit 3 Synthesis: Reading a Passage From Jane Eyre" },
  ]
}
