/**
 * Entrance Quiz — Poetic Structure and Form (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-poetic-structure-form-ent-1a',
    question: "A poem about a crowded city street is written in long, rushing lines with almost no punctuation. In its last stanza, which shows the speaker alone in her apartment that night, the lines become short and end-stopped.\n\nThis change in form most likely serves to",
    options: [
      "slow the pace to match the quiet of her room",
      "show that a different speaker has taken over the final stanza",
      "indicate that the poet ran short of time to revise the ending",
      "make the final stanza feel even busier than the street itself",
    ],
    correctIndex: 0,
    explanation: "Long unpunctuated lines carry the rush of the street, and short end-stopped lines bring pauses that match the quiet of her room, so the form changes pace with the scene. Nothing signals a new speaker, and reading the change as carelessness ignores how form makes meaning.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-poetic-structure-form-ent-1b',
    question: "Read the lines below.\n\n*I kept your letters in a cedar box,\nI kept your coat, I kept the spare-room key,\nI kept the Sundays empty, just in case.\nToday I gave the coat to the church sale.*\n\nThe final line works as a turn chiefly because it",
    options: [
      "repeats the list of things the speaker has saved",
      "reveals that the coat had belonged to the speaker",
      "introduces a second speaker who answers the first",
      "ends the pattern of keeping with a release",
    ],
    correctIndex: 3,
    explanation: "Three lines build a pattern of \"I kept,\" and the last line abandons both the phrase and the habit, giving something away for the first time. The turn lies in that change of direction, not in a new speaker.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Rhythm and the Line: Pattern, Line Breaks and Emphasis
  {
    id: 'englit-poetic-structure-form-ent-2a',
    question: "Read the lines below.\n\n*We walked the shore where summer evenings end,\nthe gulls asleep, the water calm and kind;\nthen cold. Hard wind. Black rain. We ran.*\n\nThe rhythm of the third line chiefly serves to",
    options: [
      "break the smooth pattern with heavy beats as the storm hits",
      "continue the gentle, even pace set by the first two lines",
      "slow the poem down to suggest that the walkers are resting",
      "lighten into a quick gallop that suggests the walkers' delight",
    ],
    correctIndex: 0,
    explanation: "After two smooth, even lines, the third piles up stressed one-syllable words cut off by periods, so the rhythm itself is battered as the weather turns. The heavy beats signal shock, not rest or delight.",
    partNumber: 2,
    partTitle: "Rhythm and the Line: Pattern, Line Breaks and Emphasis",
  },
  {
    id: 'englit-poetic-structure-form-ent-2b',
    question: "Read the lines below.\n\n*She set the table for\ntwo\nout of habit, and then\nsat down.*\n\nSetting \"two\" on a line by itself primarily serves to",
    options: [
      "show that the speaker struggles to count correctly",
      "create a rhyme with the line that comes after it",
      "isolate the number that shows someone is missing",
      "speed the reader quickly through the whole scene",
    ],
    correctIndex: 2,
    explanation: "The line break surrounds \"two\" with white space, so the reader pauses on the number and senses the absent person before \"out of habit\" confirms it. A one-word line slows reading rather than speeding it.",
    partNumber: 2,
    partTitle: "Rhythm and the Line: Pattern, Line Breaks and Emphasis",
  },

  // Part 3 — Rhyme and Stanza Patterns
  {
    id: 'englit-poetic-structure-form-ent-3a',
    question: "Read the couplet below.\n\n*In June the village rang its bells: they wed.\nBy June again, the bells rang for the dead.*\n\nThe rhyme of \"wed\" and \"dead\" chiefly serves to",
    options: [
      "show that the speaker attended both events",
      "make joy and loss echo each other",
      "create a cheerful tone suited to a celebration",
      "signal that a new stanza begins in line two",
    ],
    correctIndex: 1,
    explanation: "Rhyme links words in the ear, and this pair binds a wedding to a death a year later, so the sound itself enacts how quickly one turned into the other. The pairing darkens the celebration rather than brightening it.",
    partNumber: 3,
    partTitle: "Rhyme and Stanza Patterns",
  },
  {
    id: 'englit-poetic-structure-form-ent-3b',
    question: "Read the stanza below.\n\n*All summer long the garden kept its word:\nthe beans, the corn, the roses by the gate.\nBut now the stalks lean black, and not a bird.\nThe frost came early. I should have covered them.*\n\nThe last line breaks the rhyme pattern the stanza sets up. The break most directly contributes to",
    options: [
      "a cheerful close that matches the summer's harvest",
      "a firm sense that the stanza's thought is settled",
      "a signal that a different speaker has begun to talk",
      "a sense of broken order and of the speaker's own guilt",
    ],
    correctIndex: 3,
    explanation: "\"Word\" finds its rhyme in \"bird,\" but \"gate\" never finds a partner, and the line that refuses to rhyme is the one that admits fault. The missing chime leaves the stanza, like the garden, unrepaired.",
    partNumber: 3,
    partTitle: "Rhyme and Stanza Patterns",
  },

  // Part 4 — Closed Forms at Work: Turns and Refrains
  {
    id: 'englit-poetic-structure-form-ent-4a',
    question: "A poem's refrain, \"Come in, the door is open,\" first closes a stanza in which the speaker welcomes her grandchildren for a summer visit. It last closes a stanza in which the speaker, very ill, lies alone listening to the wind.\n\nBy the final stanza, the refrain most likely",
    options: [
      "keeps exactly the meaning that it had in the first stanza",
      "shows that the grandchildren have finally arrived",
      "reveals that the speaker is afraid of intruders at night",
      "takes on a second meaning as a calm greeting to death",
    ],
    correctIndex: 3,
    explanation: "A refrain's words stay fixed while its context changes, so the same welcome now seems addressed to death itself. Saying the meaning stays the same misses how refrains gather meaning as a poem moves.",
    partNumber: 4,
    partTitle: "Closed Forms at Work: Turns and Refrains",
  },
  {
    id: 'englit-poetic-structure-form-ent-4b',
    question: "A sonnet's three quatrains describe how a speaker clears a former lover from her life: burning the letters, changing her route to work, deleting a number. The closing couplet reads:\n\n*Such careful work, to clear you from my days,\nand here I sit, past midnight, writing you praise.*\n\nThe couplet primarily serves to",
    options: [
      "confirm that the speaker has finally forgotten the former lover",
      "undercut the argument, as the poem keeps the lover present",
      "introduce a new lover who has taken the old one's place",
      "add a fourth method of forgetting to the three before it",
    ],
    correctIndex: 1,
    explanation: "The quatrains build a case for forgetting, and the couplet twists it: the speaker is writing a love poem to the person she claims to have erased. The couplet reverses the argument rather than summing it up.",
    partNumber: 4,
    partTitle: "Closed Forms at Work: Turns and Refrains",
  },

  // Part 5 — Closed and Open Forms: Line Breaks and Broken Patterns
  {
    id: 'englit-poetic-structure-form-ent-5a',
    question: "Read the poem below.\n\n*My father did not say\ngoodbye.\nHe said\nthe car needs oil, the gutters,\nwatch your mother.\nThen the door.*\n\nWhich best describes how this open-form poem creates meaning?",
    options: [
      "Its line breaks isolate plain words that stand in for a farewell.",
      "It has no structure, so its line breaks carry no meaning.",
      "Its regular rhymes give the farewell a polished, songlike sound.",
      "Its long, flowing lines mirror the father's emotional speech.",
    ],
    correctIndex: 0,
    explanation: "Without meter or rhyme, the line breaks do the shaping: \"goodbye\" stands alone as the word not said, and the practical instructions take its place. Open form is not the absence of structure.",
    partNumber: 5,
    partTitle: "Closed and Open Forms: Line Breaks and Broken Patterns",
  },
  {
    id: 'englit-poetic-structure-form-ent-5b',
    question: "Read the lines below.\n\n*I meant to tell her everything that night,\nthe debts, the letters, all of it. I didn't.\nWe talked about the weather and the roads.*\n\nThe strong pause before \"I didn't\" chiefly serves to",
    options: [
      "speed the reader on toward the next confession",
      "mark a change of speaker in the middle of the line",
      "halt the line as his resolve fails",
      "complete a rhyme with the line that comes after",
    ],
    correctIndex: 2,
    explanation: "The caesura stops the line's momentum, and the short sentence after it lands as an anticlimax, just as the speaker's plan to confess collapses. The voice does not change; the same speaker admits the failure.",
    partNumber: 5,
    partTitle: "Closed and Open Forms: Line Breaks and Broken Patterns",
  },

  // Part 6 — Writing About Form on the Exam
  {
    id: 'englit-poetic-structure-form-ent-6a',
    question: "A student is writing about a poem that is a single sentence whose main verb does not arrive until line 11.\n\nWhich sentence moves furthest from label to interpretation?",
    options: [
      "The poem is a sonnet that ends with a rhymed couplet.",
      "The poem is one sentence, and its main verb comes in line 11.",
      "Delaying the main verb lets the speaker's doubts pile up first.",
      "Withholding the main verb makes hesitation the poem's real subject, so her final act feels hard-won.",
    ],
    correctIndex: 3,
    explanation: "This sentence describes the feature, says what it does, and links it to the poem's meaning. The others stop at a label, a description, or a function without an interpretation.",
    partNumber: 6,
    partTitle: "Writing About Form on the Exam",
  },
  {
    id: 'englit-poetic-structure-form-ent-6b',
    question: "A poem describes the aftermath of a massacre in smooth, regular rhymed couplets.\n\nWhich commentary on this feature would most likely contribute to the sophistication point?",
    options: [
      "The couplets show that the poet was skilled at writing regular verse.",
      "The calm couplets clash with the horror, as if violence were routine.",
      "The rhymed couplets make the poem easier for readers to memorize.",
      "The couplets mirror the chaos of the scene, as rhyme signals disorder.",
    ],
    correctIndex: 1,
    explanation: "Form set against content creates a tension, and explaining what that tension suggests is a route to Row C. Praising the poet's skill or noting memorability says nothing about meaning, and rhyme does not signal chaos.",
    partNumber: 6,
    partTitle: "Writing About Form on the Exam",
  },

  // Part 7 — Structure Synthesis: Rossetti's "Remember"
  {
    id: 'englit-poetic-structure-form-ent-7a',
    question: "Read the poem below.\n\n*Hold on, I told the boy, hold on, hold tight,\nand ran beside the bike along the lane,\nmy hand beneath the seat. Hold on. Again.\nHe wobbled, and I held. Then, in the light\nof one September evening, I let go.\nHe didn't look. He rode on down the hill,\nand I stood holding nothing, holding still,\nthe way you do with anything you grow.*\n\nThe structure of the poem is best described as a movement from",
    options: [
      "an anxious grip to a release the parent must accept",
      "a child's fear to the parent's anger at the child",
      "the present moment to a memory of the parent's youth",
      "a description of the lane to a description of the hill",
    ],
    correctIndex: 0,
    explanation: "The first half repeats \"hold\" as command and action, and the turn at \"Then ... I let go\" begins a release the last lines show the parent feeling. The poem moves from holding to letting go, not from fear to anger.",
    partNumber: 7,
    partTitle: "Structure Synthesis: Rossetti's \"Remember\"",
  },
  {
    id: 'englit-poetic-structure-form-ent-7b',
    question: "Read the poem below.\n\n*Hold on, I told the boy, hold on, hold tight,\nand ran beside the bike along the lane,\nmy hand beneath the seat. Hold on. Again.\nHe wobbled, and I held. Then, in the light\nof one September evening, I let go.\nHe didn't look. He rode on down the hill,\nand I stood holding nothing, holding still,\nthe way you do with anything you grow.*\n\nThe repeated word \"hold\" changes across the poem chiefly in that it",
    options: [
      "keeps one meaning to show that the parent never lets go",
      "shows that the child refuses to obey his parent",
      "moves from a command to the child to an image of the parent's emptied hands",
      "stresses the danger of the steep hill ahead",
    ],
    correctIndex: 2,
    explanation: "Early on \"hold on\" is advice to the child and a grip on the seat; after the turn, \"holding nothing, holding still\" describes the parent left with empty hands. One word carries the poem's whole change.",
    partNumber: 7,
    partTitle: "Structure Synthesis: Rossetti's \"Remember\"",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Rhythm and the Line: Pattern, Line Breaks and Emphasis" },
    { partNumber: 3, partTitle: "Rhyme and Stanza Patterns" },
    { partNumber: 4, partTitle: "Closed Forms at Work: Turns and Refrains" },
    { partNumber: 5, partTitle: "Closed and Open Forms: Line Breaks and Broken Patterns" },
    { partNumber: 6, partTitle: "Writing About Form on the Exam" },
    { partNumber: 7, partTitle: "Structure Synthesis: Rossetti's \"Remember\"" },
  ]
}
