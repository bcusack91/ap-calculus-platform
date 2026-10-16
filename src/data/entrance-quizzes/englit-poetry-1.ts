/**
 * Entrance Quiz — Poetry Analysis I (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-poetry-1-ent-1a',
    question: "A poem titled \"The Lighthouse Keeper's Wife\" begins:\n\n*He trims the wick; I trim the bread.\nForty winters, and still the sea\ngets the better light.*\n\nWhich statement about the speaker is most accurate?",
    options: [
      "The speaker is the poet, describing her own marriage directly.",
      "The speaker is the keeper's wife, a persona who need not be the poet.",
      "The speaker is the keeper, describing the chores his wife does.",
      "The speaker is the sea, addressing the keeper and his wife.",
    ],
    correctIndex: 1,
    explanation: "The title and the \"I\" who trims the bread identify the speaker as the keeper's wife, a constructed voice that the poet may or may not share. Assuming the speaker is the poet confuses persona with author.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-poetry-1-ent-1b',
    question: "Read the lines below.\n\n*The kitchen clock keeps up its little argument;\nthe kettle, as usual, has the last word.\nI wait for no one now. I wait, that is,\nfor nothing in particular, at five.*\n\nThe speaker's tone is best described as",
    options: [
      "openly furious",
      "eagerly hopeful",
      "coolly neutral",
      "wryly resigned",
    ],
    correctIndex: 3,
    explanation: "The playful images of a clock that argues and a kettle with \"the last word,\" together with the self-correction \"that is, / for nothing,\" give loneliness a dry, rueful humor. Nothing in the lines rises to fury or looks forward with hope.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Lines, Stanzas and Form
  {
    id: 'englit-poetry-1-ent-2a',
    question: "Read the lines below.\n\n*She said she would not leave. She left\nthe window open, though, all night.*\n\nThe line break after \"left\" primarily serves to",
    options: [
      "mark a strong pause between two unrelated ideas",
      "signal the end of the poem's regular rhyme pattern",
      "suggest a departure the next line undoes",
      "show that the speaker misunderstood what she said",
    ],
    correctIndex: 2,
    explanation: "Ending the line on \"She left\" makes it read for a moment as a departure, and the enjambment then turns it into leaving a window open, so staying and leaving are held together. The sentence runs on, so the break does not separate unrelated ideas.",
    partNumber: 2,
    partTitle: "Lines, Stanzas and Form",
  },
  {
    id: 'englit-poetry-1-ent-2b',
    question: "The first eight lines of a sonnet list what the speaker's grandmother could mend: socks, fences, quarrels, a dog's torn ear. Line 9 begins \"But not the letter,\" and the final six lines describe a letter she kept unopened for forty years.\n\nPlacing \"But not the letter\" at line 9 most directly serves to",
    options: [
      "turn from her skill to the one wound she could not repair",
      "add one more item to the list of things that she could mend",
      "begin a second poem on a subject unrelated to the first",
      "reveal that the grandmother had never learned to read",
    ],
    correctIndex: 0,
    explanation: "The octave builds a pattern of mending, and the turn at line 9 breaks it, setting her many repairs against one grief she left untouched. The closed form makes the break the point of greatest emphasis.",
    partNumber: 2,
    partTitle: "Lines, Stanzas and Form",
  },

  // Part 3 — Contrast and Shift
  {
    id: 'englit-poetry-1-ent-3a',
    question: "Read the stanza below.\n\n*All week the house was loud with plans:\nthe cake, the chairs, the cousins' train.\nThen Sunday, and the chairs in rows,\nand one we did not fill again.*\n\nThe shift in lines 3–4 is best described as a movement from",
    options: [
      "boredom to excitement about a coming visit",
      "grief to acceptance of a recent loss",
      "festive bustle to an awareness of absence",
      "the city to the quiet of the countryside",
    ],
    correctIndex: 2,
    explanation: "\"Then\" is the hinge: the busy list of party plans gives way to formal rows of chairs and one left empty for good. The stanza moves into loss rather than out of it, so \"grief to acceptance\" reverses its direction.",
    partNumber: 3,
    partTitle: "Contrast and Shift",
  },
  {
    id: 'englit-poetry-1-ent-3b',
    question: "Read the stanza below.\n\n*The war was over; the bells said so,\nand the bands, and the paper on the porch.\nMy father read it twice and folded it\nand went back out to split the wood.*\n\nThe contrast between the public celebration and the father's actions chiefly suggests",
    options: [
      "his indifference to whether or not the war has ended",
      "a private feeling the crowd's joy cannot reach",
      "his anger at the newspaper's mistaken report",
      "the town's failure to celebrate the war's end",
    ],
    correctIndex: 1,
    explanation: "Bells and bands are set against a man who reads the news twice and returns silently to work, so his feeling is real but held apart from the crowd's. Reading it twice rules out indifference.",
    partNumber: 3,
    partTitle: "Contrast and Shift",
  },

  // Part 4 — Word Choice: Literal, Figurative and Loaded Words
  {
    id: 'englit-poetry-1-ent-4a',
    question: "Read the lines below.\n\n*Each morning the mill swallows the town's young men\nand each evening coughs them up, gray-faced, at the gate.*\n\nThe words \"swallows\" and \"coughs\" chiefly serve to",
    options: [
      "portray the mill as a creature that consumes and sickens its workers",
      "suggest that the workers take their meals inside the mill",
      "imply that the mill has closed and sent its workers home",
      "record the literal noises made by the mill's machines",
    ],
    correctIndex: 0,
    explanation: "Read figuratively, the verbs make the mill a body that devours men and spits them out exhausted, and \"gray-faced\" confirms the damage. Reading the verbs literally, as meals or machine noise, misses the accusation the diction carries.",
    partNumber: 4,
    partTitle: "Word Choice: Literal, Figurative and Loaded Words",
  },
  {
    id: 'englit-poetry-1-ent-4b',
    question: "Read the lines below.\n\n*My aunt kept a spotless parlor; nothing in it\nhad ever been sat in, or spilled, or loved.*\n\nThe final word, \"loved,\" changes the effect of \"spotless\" chiefly by",
    options: [
      "praising the aunt's skill as a careful housekeeper",
      "suggesting that the parlor was cleaned just for visitors",
      "showing its perfection comes from no one living in it",
      "revealing that the speaker envies the aunt's possessions",
    ],
    correctIndex: 2,
    explanation: "The list runs from ordinary use (\"sat in,\" \"spilled\") to affection, so \"spotless\" comes to mean unused and unloved rather than admirably clean. The surprising last word turns praise into criticism.",
    partNumber: 4,
    partTitle: "Word Choice: Literal, Figurative and Loaded Words",
  },

  // Part 5 — Simile and Metaphor: How Comparisons Make Meaning
  {
    id: 'englit-poetry-1-ent-5a',
    question: "Read the lines below.\n\n*My grandfather's patience was a well:\nyou could drop a whole bad year in it\nand never hear it land.*\n\nThe metaphor chiefly suggests that his patience was",
    options: [
      "deep enough to take in any trouble",
      "cold and dark, like the bottom of a well",
      "useful only in years of drought and need",
      "dangerous to anyone who leaned in too close",
    ],
    correctIndex: 0,
    explanation: "The lines activate one quality of a well, its depth: a whole bad year falls in without a sound. Coldness and danger are qualities of wells that this context does not transfer.",
    partNumber: 5,
    partTitle: "Simile and Metaphor: How Comparisons Make Meaning",
  },
  {
    id: 'englit-poetry-1-ent-5b',
    question: "Which line contains a simile rather than a literal comparison?",
    options: [
      "Her coat was like her sister's, gray and worn at the cuffs.",
      "This winter is every bit as cold as the last one was.",
      "The new house looks almost exactly like the old one did.",
      "His laugh was like a door banged open by the wind.",
    ],
    correctIndex: 3,
    explanation: "A laugh and a banging door are different kinds of things, so the comparison is figurative and transfers suddenness and noise. The other lines compare things of the same kind (coats, winters, houses), which makes them literal.",
    partNumber: 5,
    partTitle: "Simile and Metaphor: How Comparisons Make Meaning",
  },

  // Part 6 — The Poetry Analysis Essay (Question 1)
  {
    id: 'englit-poetry-1-ent-6a',
    question: "A Question 1 prompt asks students to analyze how a poet conveys a speaker's complex attitude toward the small town where she grew up.\n\nWhich thesis best responds to the prompt?",
    options: [
      "The poet uses imagery, enjambment and tone to convey the speaker's complex attitude toward her town.",
      "The speaker describes the small town where she grew up and the people she remembers from there.",
      "The speaker loves her hometown, as the poet shows through warm and nostalgic imagery throughout.",
      "Through images both tender and confining, the poet shows a speaker who loves the town for the smallness that drove her away.",
    ],
    correctIndex: 3,
    explanation: "This thesis is defensible and answers \"complex\" by naming two sides of the attitude and how they connect. The device list restates the prompt, the description of the town summarizes, and the claim of simple love flattens the attitude to one side.",
    partNumber: 6,
    partTitle: "The Poetry Analysis Essay (Question 1)",
  },
  {
    id: 'englit-poetry-1-ent-6b',
    question: "A student is planning a Question 1 essay on a poem in which a speaker's fond memories of a childhood friend sour at a turn and are partly restored at the end.\n\nWhich body-paragraph plan best follows a line of reasoning?",
    options: [
      "Paragraphs on the early fondness, then the souring turn, then the ending that holds both",
      "Paragraphs on the imagery, then the metaphors, then the poem's rhyme scheme and its meter",
      "Paragraphs on the poet's life, then the poem's era, then the poem's most important devices",
      "Paragraphs summarizing stanza one, then stanza two, then the final stanza in turn",
    ],
    correctIndex: 0,
    explanation: "Following the poem's movement makes each paragraph a step toward the thesis, and each can still draw on several techniques. A device-by-device plan treats the poem as a list, and stanza summaries replace analysis.",
    partNumber: 6,
    partTitle: "The Poetry Analysis Essay (Question 1)",
  },

  // Part 7 — Unit 2 Synthesis: Reading a Whole Poem
  {
    id: 'englit-poetry-1-ent-7a',
    question: "Read the poem below.\n\n*My mother's hands were maps I never learned:\nthe burn from the stove, the crooked thumb,\nthe ring she turned and turned when Father came\nhome late, or didn't. Now I trace my own\nat the same table, by the same weak lamp,\nand find the roads already drawn: the scar,\nthe thumb I broke at nine, the turning ring.\nI thought I'd travel farther than her hands.*\n\nThe final line changes the meaning of the poem chiefly by",
    options: [
      "showing that the speaker has learned to read maps",
      "revealing that her hope for a different life has failed",
      "suggesting that the speaker plans to leave home very soon",
      "confirming that the speaker resents her mother's hard life",
    ],
    correctIndex: 1,
    explanation: "The last line names the hope (to \"travel farther\") only after the poem has shown her hands repeating her mother's marks, so the ending reads as a recognition that she has not escaped. The map metaphor makes the failure concrete: she has traveled no farther than her mother's hands.",
    partNumber: 7,
    partTitle: "Unit 2 Synthesis: Reading a Whole Poem",
  },
  {
    id: 'englit-poetry-1-ent-7b',
    question: "Read the poem below.\n\n*My mother's hands were maps I never learned:\nthe burn from the stove, the crooked thumb,\nthe ring she turned and turned when Father came\nhome late, or didn't. Now I trace my own\nat the same table, by the same weak lamp,\nand find the roads already drawn: the scar,\nthe thumb I broke at nine, the turning ring.\nI thought I'd travel farther than her hands.*\n\nThe central metaphor of hands as maps chiefly serves to",
    options: [
      "show that the mother had traveled widely when she was young",
      "suggest that the daughter is lost and needs directions home",
      "turn inherited marks into routes that lead the daughter where her mother went",
      "emphasize how old and wrinkled the mother's hands had become",
    ],
    correctIndex: 2,
    explanation: "The metaphor makes each scar and habit a road, and finding \"the roads already drawn\" on her own hands means the daughter's life follows her mother's. The quality transferred is direction and destination, not age or literal travel.",
    partNumber: 7,
    partTitle: "Unit 2 Synthesis: Reading a Whole Poem",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Lines, Stanzas and Form" },
    { partNumber: 3, partTitle: "Contrast and Shift" },
    { partNumber: 4, partTitle: "Word Choice: Literal, Figurative and Loaded Words" },
    { partNumber: 5, partTitle: "Simile and Metaphor: How Comparisons Make Meaning" },
    { partNumber: 6, partTitle: "The Poetry Analysis Essay (Question 1)" },
    { partNumber: 7, partTitle: "Unit 2 Synthesis: Reading a Whole Poem" },
  ]
}
