/**
 * Entrance Quiz — Tone and Speaker (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-tone-speaker-ent-1a',
    question: "Read the passage below.\n\n*As your landlord, I can assure you the building is perfectly safe. The cracks are cosmetic. The smell is the old paint. I would live here myself, if I didn't already own a house in the hills.*\n\nThe speaker's position chiefly shapes the passage by",
    options: [
      "making him an expert whose claims the tenants ought to trust",
      "giving his reassurances a self-interest that undercuts them",
      "showing his genuine concern for the safety of his tenants",
      "revealing that the building has recently been repaired",
    ],
    correctIndex: 1,
    explanation: "A landlord has every reason to call cracks \"cosmetic,\" and his escape clause about the house in the hills exposes how little he trusts his own words. His position colors his claims rather than certifying them.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-tone-speaker-ent-1b',
    question: "Read the passage below.\n\n*The wedding was lovely: the flowers, the music, the cake shaped like a swan. And then my sister read the vows she had written, and I remembered the letters she had burned in our yard ten years ago, and I could not stop shaking.*\n\nThe shift in the passage is best described as a movement from",
    options: [
      "grief toward a gradual acceptance of the marriage",
      "anger at her sister toward a sense of forgiveness",
      "pleasant details toward an unsettling memory",
      "a memory of the past toward the present wedding",
    ],
    correctIndex: 2,
    explanation: "The first sentence admires the scene; \"And then\" marks the turn, as the vows call up a buried memory and the speaker begins to shake. The movement runs from present pleasure into a disturbing past, not the reverse.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — A Precise Vocabulary for Tone
  {
    id: 'englit-tone-speaker-ent-2a',
    question: "Read the passage below.\n\n*Of course Harold was right; Harold was always right. He had been right about the stocks, right about the roof, right, at considerable length, about my cousin's divorce.*\n\nThe speaker's attitude toward Harold is best described as",
    options: [
      "wryly exasperated",
      "openly reverent",
      "deeply fearful",
      "coolly indifferent",
    ],
    correctIndex: 0,
    explanation: "The pile-up of \"right\" and the jab \"at considerable length\" are dry humor directed at a tiresome man. The irritation is mild and amused, not fearful or indifferent, and certainly not reverent.",
    partNumber: 2,
    partTitle: "A Precise Vocabulary for Tone",
  },
  {
    id: 'englit-tone-speaker-ent-2b',
    question: "Read the passage below.\n\n*I still drive past the old house sometimes. Someone has painted the shutters blue. It looks happy. I don't stop.*\n\nThe tone of the passage is best described as",
    options: [
      "bitterly sardonic",
      "anguished and despairing",
      "cheerfully nostalgic",
      "quietly wistful",
    ],
    correctIndex: 3,
    explanation: "The short, plain sentences carry a restrained longing for a home that now belongs to someone else. \"Anguished\" is too intense for this understated voice, and nothing in it is mocking or cheerful.",
    partNumber: 2,
    partTitle: "A Precise Vocabulary for Tone",
  },

  // Part 3 — Speaker, Listener and Occasion
  {
    id: 'englit-tone-speaker-ent-3a',
    question: "A poem titled \"For My Daughter, on the Morning She Leaves for College\" begins:\n\n*Take the blue coat. No, the warm one. Call\nwhen you get there. Call even if it's late.\nI've packed you sandwiches; I know there's food there.*\n\nThe occasion most directly explains",
    options: [
      "the speaker's anger at her daughter's choice of school",
      "her anxious fussing as a way of saying goodbye",
      "the formal, elegiac language of public mourning",
      "the speaker's indifference to her daughter's leaving",
    ],
    correctIndex: 1,
    explanation: "The title names a parting, and the speaker's practical instructions and self-correction (\"No, the warm one\") express a love she does not state outright. The plain, domestic register is far from formal elegy.",
    partNumber: 3,
    partTitle: "Speaker, Listener and Occasion",
  },
  {
    id: 'englit-tone-speaker-ent-3b',
    question: "Read the stanza below, spoken by a shopkeeper on the day his store closes.\n\n*Thirty years we ran this shop together,\nand now the town will say what towns all say.\nBut you, old friend, who knew the ledger's weather,\nwould laugh to see me sweeping up today.*\n\nThe turn to \"you, old friend\" chiefly shifts the tone from",
    options: [
      "private grief toward a public accusation of the town",
      "gentle humor toward bitter anger at his partner",
      "public resignation toward private tenderness",
      "calm description toward a fearful warning",
    ],
    correctIndex: 2,
    explanation: "The first two lines face the town's predictable gossip with weary acceptance; \"But you, old friend\" changes the listener to an absent partner, and the voice grows intimate and fond. A change of addressee often brings a change of tone.",
    partNumber: 3,
    partTitle: "Speaker, Listener and Occasion",
  },

  // Part 4 — Tone in Prose: The Narrator's Voice and Irony
  {
    id: 'englit-tone-speaker-ent-4a',
    question: "Read the passage below.\n\n*At last the great hour came. Mr. Fogarty, gathering every ounce of his courage, rose from his chair, crossed the vast distance of the parlor, and asked his wife whether she had seen his reading glasses.*\n\nThe narrator's tone is best described as",
    options: [
      "fondly mock-heroic",
      "solemnly admiring",
      "harshly contemptuous",
      "anxiously suspenseful",
    ],
    correctIndex: 0,
    explanation: "Epic language (\"the great hour,\" \"every ounce of his courage,\" \"vast distance\") collapses into a question about reading glasses, a comic drop. The joke is gentle; nothing suggests contempt for Mr. Fogarty.",
    partNumber: 4,
    partTitle: "Tone in Prose: The Narrator's Voice and Irony",
  },
  {
    id: 'englit-tone-speaker-ent-4b',
    question: "Read the passage below.\n\n*Mrs. Grant's favorite novels were full of dukes who wept and governesses who fainted, and Mrs. Grant, who ran the village post office with an iron hand and had never fainted in her life, read every one of them twice.*\n\nThe narrator's irony is chiefly aimed at",
    options: [
      "her harshness at the post office",
      "the gap between her stern life and the swooning novels",
      "the villagers who make fun of the novels Mrs. Grant reads",
      "the dukes and governesses of real life rather than of fiction",
    ],
    correctIndex: 1,
    explanation: "Placing weeping dukes and fainting governesses beside a woman who runs the post office \"with an iron hand\" makes the contrast itself the joke, so both the novels and her devotion to them are gently teased. No villagers appear, and nothing faults her work.",
    partNumber: 4,
    partTitle: "Tone in Prose: The Narrator's Voice and Irony",
  },

  // Part 5 — Tonal Shifts and Complex Tone
  {
    id: 'englit-tone-speaker-ent-5a',
    question: "Read the sentence below.\n\n*I am glad you are gone, I said, and meant it, and meant, at the same time, that I would give the house to have you back.*\n\nThis sentence is best described as expressing",
    options: [
      "a shift in tone from joy to grief over time",
      "a mixed tone aimed at two different targets",
      "ambivalence toward the same person",
      "sincere relief untouched by any regret",
    ],
    correctIndex: 2,
    explanation: "\"At the same time\" shows two opposed feelings held at once toward one person: relief at the absence and a longing to undo it. That is ambivalence, not a shift over time or a tone split between different targets.",
    partNumber: 5,
    partTitle: "Tonal Shifts and Complex Tone",
  },
  {
    id: 'englit-tone-speaker-ent-5b',
    question: "Read the passage below.\n\n*All morning the children's shouting filled the yard, and I called it noise. Now the yard is quiet. I stand at the window and call it nothing at all.*\n\nThe word \"Now\" marks a shift from",
    options: [
      "contentment toward sudden anger",
      "loneliness toward a sense of relief",
      "fear toward a calm acceptance",
      "irritation toward an unspoken grief",
    ],
    correctIndex: 3,
    explanation: "Calling the shouting \"noise\" shows irritation; after \"Now,\" the silence leaves the speaker at the window with nothing to name it, an absence felt as loss. The change in what the speaker \"calls\" things tracks the change in attitude.",
    partNumber: 5,
    partTitle: "Tonal Shifts and Complex Tone",
  },

  // Part 6 — Tone on the Exam
  {
    id: 'englit-tone-speaker-ent-6a',
    question: "Read the passage below.\n\n*He kept her letters in a drawer he never opened, and when the house was sold he burned them unread in the yard, standing by until the last page curled, and then went in to make his supper.*\n\nThe man's attitude toward the letters is best described as",
    options: [
      "indifferent and forgetful",
      "controlled and coolly final",
      "tender and openly nostalgic",
      "angry and vengeful",
    ],
    correctIndex: 1,
    explanation: "Both words must fit: he keeps the letters closed, burns them unread, watches until the end and then returns to routine, all signs of deliberate control. \"Indifferent\" fails because he stands watch, and \"nostalgic\" fails because he never reads them.",
    partNumber: 6,
    partTitle: "Tone on the Exam",
  },
  {
    id: 'englit-tone-speaker-ent-6b',
    question: "A Question 1 prompt asks students to analyze how a poet conveys a speaker's complex attitude toward retiring after forty years at the same job.\n\nWhich thesis best traces the speaker's attitude, including its tension?",
    options: [
      "The poet uses diction, imagery and syntax to show how the speaker feels about retiring.",
      "The speaker retires after forty years at his job and cleans out his desk on the last day.",
      "The speaker moves from relief at his freedom to unease at its emptiness, yet his jokes keep a dignity he will not give up.",
      "The speaker is happy to retire, since he can finally rest after so many years of work.",
    ],
    correctIndex: 2,
    explanation: "This thesis names a shift (relief to unease) and a tension (dignity held through humor), which sets up a line of reasoning. The others list devices, summarize, or reduce the attitude to happiness.",
    partNumber: 6,
    partTitle: "Tone on the Exam",
  },

  // Part 7 — Tone and Speaker Synthesis
  {
    id: 'englit-tone-speaker-ent-7a',
    question: "Read the poem below.\n\n*The boxes are labeled in your clear hand: Books,\nWinter, Kitchen. You have thought of everything.\nThe tape is straight. The van comes at nine.\nI wrapped the blue cups myself. They will not break.\nI have told no one how quiet this house is\nat nine-fifteen, at ten, at all the hours after.*\n\nThe poem's turn from brisk practicality to open grief is chiefly marked by",
    options: [
      "the line \"I have told no one,\" which admits the emptiness",
      "the label \"Winter,\" which first introduces a storm",
      "the sentence \"The tape is straight,\" which ends the calm",
      "the closing list of hours, which restores the opening calm",
    ],
    correctIndex: 0,
    explanation: "Until that line the speaker stays with tasks and objects; \"I have told no one\" turns to the silent house and the hours after the van leaves. The label names a season, not a storm, and the closing hours deepen the loss rather than restoring calm.",
    partNumber: 7,
    partTitle: "Tone and Speaker Synthesis",
  },
  {
    id: 'englit-tone-speaker-ent-7b',
    question: "Read the poem below.\n\n*The boxes are labeled in your clear hand: Books,\nWinter, Kitchen. You have thought of everything.\nThe tape is straight. The van comes at nine.\nI wrapped the blue cups myself. They will not break.\nI have told no one how quiet this house is\nat nine-fifteen, at ten, at all the hours after.*\n\nThe short declarative sentences in lines 2–4 chiefly convey",
    options: [
      "cheerful relief that the move is nearly finished",
      "bitter anger at the child for leaving home so soon",
      "calm indifference to the move and to the child",
      "composure held together by attention to small tasks",
    ],
    correctIndex: 3,
    explanation: "Flat statements about labels, tape and cups keep feeling at arm's length, so the speaker's steadiness sounds deliberate, a way of holding on until the grief breaks through two lines later. Nothing in them is cheerful, angry or indifferent.",
    partNumber: 7,
    partTitle: "Tone and Speaker Synthesis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "A Precise Vocabulary for Tone" },
    { partNumber: 3, partTitle: "Speaker, Listener and Occasion" },
    { partNumber: 4, partTitle: "Tone in Prose: The Narrator's Voice and Irony" },
    { partNumber: 5, partTitle: "Tonal Shifts and Complex Tone" },
    { partNumber: 6, partTitle: "Tone on the Exam" },
    { partNumber: 7, partTitle: "Tone and Speaker Synthesis" },
  ]
}
